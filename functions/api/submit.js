/**
 * TO TRULY HIDE THE URL:
 * 1. Create a folder in your project root named "functions".
 * 2. Inside "functions", create a folder named "api".
 * 3. Save this file as "submit.js" inside "/functions/api/".
 * 4. In your React code, fetch to "/api/submit" instead of a full URL.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const data = await request.json();
    const { name, email, affiliation } = data;

    if (!name || !email || !affiliation) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { 
        status: 400, 
        headers: corsHeaders 
      });
    }

    // This checks if the binding exists in the Cloudflare Environment
    if (!env.CUEDA_DEMO) {
      return new Response(JSON.stringify({ 
        error: "D1 Binding Missing",
        details: "Ensure CUEDA_DEMO is bound in Pages > Settings > Functions > D1 Bindings"
      }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }

    // FIX: Changed "demo" to match your actual table name in the database
    await env.CUEDA_DEMO.prepare(
      "INSERT INTO demo (name, email, affiliation) VALUES (?, ?, ?)"
    )
    .bind(name, email, affiliation)
    .run();

    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: corsHeaders 
    });

  } catch (err) {
    return new Response(JSON.stringify({ 
      error: "Server Error", 
      details: err.message
    }), { 
      status: 500, 
      headers: corsHeaders 
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
}