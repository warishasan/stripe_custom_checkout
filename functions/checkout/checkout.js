const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async event => {


  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({client_secret: paymentIntent.client_secret}),
    
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
