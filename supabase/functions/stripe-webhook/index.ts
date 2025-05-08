
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { Resend } from "npm:resend@2.0.0";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2023-10-16" });
const resend = new Resend(resendApiKey);

const EBOOK_URL = "https://www.dropbox.com/scl/fo/o6xujypa5fqjderi3nvoc/AFC1Xi2VbWcNL-IjlItZJ5A?rlkey=cbhx6k1gab94u6ouuc4r4wbfu&st=5to10x0o&dl=0"; // Updated Dropbox link
const ADMIN_EMAIL = "welcome2myasworld@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the signature from the headers
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      throw new Error("Missing Stripe signature");
    }

    // Get the webhook secret from the environment variables
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    if (!webhookSecret) {
      throw new Error("Missing Stripe webhook secret");
    }

    const body = await req.text();
    let event;

    try {
      // Verify the event came from Stripe
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error) {
      console.error("⚠️  Webhook signature verification failed.", error.message);
      return new Response(`Webhook Error: ${error.message}`, { status: 400 });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Retrieve customer email
      const customerEmail = session.customer_details?.email;
      if (!customerEmail) {
        throw new Error("No customer email found in the session");
      }

      console.log(`Payment was successful for ${customerEmail}`);

      // Send ebook to customer
      await resend.emails.send({
        from: "Mya's World <sales@myas.world>",
        to: [customerEmail],
        subject: "Your Internet Hoe Guide is Ready!",
        html: `
          <h1>Thank You for Your Purchase!</h1>
          <p>Hi there,</p>
          <p>Thank you for purchasing "The Internet Hoe Guide". Your payment has been successfully processed.</p>
          <p>You can download your copy of the guide using the link below:</p>
          <p><a href="${EBOOK_URL}" target="_blank">Download Your Internet Hoe Guide</a></p>
          <p>If you have any questions or need assistance, feel free to reply to this email.</p>
          <p>Best regards,</p>
          <p>Mya's World Team</p>
        `,
      });

      // Send notification to admin
      await resend.emails.send({
        from: "Mya's World <sales@myas.world>",
        to: [ADMIN_EMAIL],
        subject: "New Sale: The Internet Hoe Guide",
        html: `
          <h1>New Sale Alert!</h1>
          <p>Great news! You've made another sale of "The Internet Hoe Guide".</p>
          <p>Customer Email: ${customerEmail}</p>
          <p>Purchase Date: ${new Date().toLocaleString()}</p>
          <p>The guide has been automatically sent to the customer.</p>
        `,
      });

      console.log(`Emails sent to customer (${customerEmail}) and admin (${ADMIN_EMAIL})`);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(`Error processing webhook: ${error.message}`);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
