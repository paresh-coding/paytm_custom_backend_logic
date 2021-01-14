# paytm_custom_backend_logic
generating checksum and validating in your server ,fetching  methods available for payment ,and starting txn Api
steps 
User visits your website/mobile app and adds goods/services into the shopping/order cart.
User proceeds to checkout and then your backend server calls the Initiate Transaction API. Paytm returns the Transaction Token in response.
Your backend server calls the Fetch Payment Options API using the Transaction token to receive the available payment options like Wallet, CC/DC, NB, UPI, EMI etc. and the user's saved instruments.
Note: You may call the Fetch Payment Options API before Initiate Transaction API. Please get in touch with us to get more details.

You render the fetched payment instruments and sources on the checkout page of your web or app.
User selects a payment source and then based on the payment instrument selected by a user, you call the respective API.
Once the user clicks the Pay button to complete the payment, you call the Process Transaction API using the transaction token received above. Paytm PG processes the transactions and sends the response.
You call the Transaction Status API through your backend server to verify the transaction response.
You notify the payment status to the user and proceed with the order/service fulfilment.
