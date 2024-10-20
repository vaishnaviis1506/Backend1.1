const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
//1
app.get('/cart-total', (req, res) => {
  const newItemPrice = parseFloat(req.query.newItemPrice);
  const cartTotal = parseFloat(req.query.cartTotal);

  const total = cartTotal + newItemPrice;

  res.send(total.toString());
});
//2
app.get('/membership-discount', (req, res) => {
  cartTotal = parseFloat(req.query.cartTotal);
  isMember = req.query.isMember === 'true';

  discountPercentage = 0.1;

  finalPrice = isMember
    ? cartTotal - cartTotal * discountPercentage
    : cartTotal;

  res.send(finalPrice.toString());
});
//3
app.get('/calculate-tax', (req, res) => {
  cartTotal = parseFloat(req.query.cartTotal);

  taxRate = 0.05;

  tax = cartTotal * taxRate;

  res.send(tax.toString());
});
//4
app.get('/estimate-delivery', (req, res) => {
  const shippingMethod = req.query.shippingMethod.toLowerCase(); //
  const distance = parseFloat(req.query.distance);

  let deliveryDays;
  if (shippingMethod === 'standard') {
    deliveryDays = Math.ceil(distance / 50);
  } else if (shippingMethod === 'express') {
    deliveryDays = Math.ceil(distance / 100);
  } else {
    return res.send('Invalid shipping method');
  }

  res.send(deliveryDays.toString());
});
//5
app.get('/shipping-cost', (req, res) => {
  weight = parseFloat(req.query.weight);
  distance = parseFloat(req.query.distance);

  shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
});
//6
app.get('/loyalty-points', (req, res) => {
  purchaseAmount = parseFloat(req.query.purchaseAmount);

  pointsMultiplier = 2;

  loyaltyPoints = purchaseAmount * pointsMultiplier;

  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
