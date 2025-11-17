import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Initialize Supabase client for admin operations
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Health check endpoint
app.get("/make-server-5ba18305/health", (c) => {
  return c.json({ status: "ok" });
});

// Sign up endpoint
app.post("/make-server-5ba18305/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true,
    });

    if (error) {
      console.log('Signup error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ data });
  } catch (error) {
    console.log('Signup error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get appointments by user
app.get("/make-server-5ba18305/appointments", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log('Auth error in /appointments:', authError);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Get user appointments from KV store
    const appointments = await kv.getByPrefix(`appointment:user:${user.id}:`);
    return c.json({ appointments });
  } catch (error) {
    console.log('Get appointments error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create appointment
app.post("/make-server-5ba18305/appointments", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log('Auth error in create appointment:', authError);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const appointmentData = await c.req.json();
    const appointmentId = crypto.randomUUID();
    
    // Store appointment in KV store
    await kv.set(`appointment:user:${user.id}:${appointmentId}`, {
      id: appointmentId,
      userId: user.id,
      ...appointmentData,
      createdAt: new Date().toISOString(),
    });

    return c.json({ id: appointmentId, success: true });
  } catch (error) {
    console.log('Create appointment error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Cancel appointment
app.delete("/make-server-5ba18305/appointments/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log('Auth error in cancel appointment:', authError);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const appointmentId = c.req.param('id');
    await kv.del(`appointment:user:${user.id}:${appointmentId}`);

    return c.json({ success: true });
  } catch (error) {
    console.log('Cancel appointment error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

Deno.serve(app.fetch);