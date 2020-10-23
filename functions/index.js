const functions = require("firebase-functions");
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HefpYGYHd2iMP2dpXt0DYbZgbDjY0qy8HCmlI7F5NS2oNTuPR4m9UlNQiHuERkvdPBWKFnaMcYX42GqkwvTZPwV00EYI6T8s6"
);

//API

//- APP Config
const app = express();

//-middlewares
app.use(cors({ origin: true }));

app.use(express.json());

//- API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//functions[api]: http://localhost:5001/storelive-fd73d/us-central1/api
