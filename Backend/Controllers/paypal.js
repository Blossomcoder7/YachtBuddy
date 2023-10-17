const client_id = "AcbZfLMOatDo0kT1k3isgHk6i9ckW6QEG-X-Ak6ZdkLrHn-LjW7rDSK4MeJ1BUj8w9I8wqvZzuyPlZmi";
const client_secret = "EM5CYSPGQdkO7N30H6nCU3bjA5_EjPd0sJB82DDY7SWfXI5XdvkWATZCzdPjihN1qZEyXpt5cnZ98rUt";
const endpoint_url = "https://api-m.sandbox.paypal.com";

const get_access_token = async () => {
  console.log("Access token bhi chal rha h")
  const auth = `${client_id}:${client_secret}`
  const data = 'grant_type=client_credentials'
  return await fetch(endpoint_url + '/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
    },
    body: data
  })
    .then(res => res.json())
    .then(json => { return json.access_token; })
}

module.exports.createOrder = async (req) => {
  console.log("create order toh chal rha h");
  const access_token = await get_access_token();

  let order_data_json = {
    'intent': 'CAPTURE',
    'purchase_units': [{
      'amount': {
        "currency_code": "USD",
        "value": req.body.cart.price
      }
    }]
  };

  console.log('AccessToken is:' , access_token);
  const data = JSON.stringify(order_data_json);
  console.log(data);

  const orderResponse = await fetch(endpoint_url + '/v2/checkout/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`,
    },
    body: data
  });
  if (!orderResponse) {
    throw new Error("Error in OrderResponse");
  }
  console.log( "orderResponse_Body is: ", orderResponse);
  return orderResponse.json();
}

module.exports.captureOrder = async (orderId) => {
  const access_token = await get_access_token();
  const url = endpoint_url + '/v2/checkout/orders/' + orderId + '/capture';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`,
    },
  })
  console.log("payment successfull!");
  return response;
}


