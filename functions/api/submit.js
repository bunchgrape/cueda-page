export async function onRequestPost(context) {
  try {
    // 1. Parse the form data from the request
    const data = await context.request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const affiliation = data.get('affiliation');

    // 2. Perform actions (e.g., send to an external API or database)
    console.log(`Received submission from ${name} (${email}, ${affiliation})`);

    // 3. Return a response to the user
    return new Response(JSON.stringify({ status: "success", message: "Form received!" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error processing form", { status: 500 });
  }
}