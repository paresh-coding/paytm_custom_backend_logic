const https = require('https');






var paytmconfig = {

    mid: "WpWlJD00110553642208",
    key: "your key",
    website: "WEBSTAGING",


}; 
//paste the trx token in processTxnAPi
processTxnApi("")

function processTxnApi(txn_token) {



    var paytmParams = {};

    paytmParams.body = {
        "requestType": "NATIVE",
        "mid": paytmconfig.mid,
        "orderId": orderId,
        "paymentMode": "DEBIT_CARD",
        "cardInfo": "|5103720330998210|123|042024",
        "authMode": "otp",
        "storeInstrument": "0",
        "paymentFlow": "ADDANDPAY"

    };

    paytmParams.head = {
        "txnToken": txn_token
    };

    var post_data = JSON.stringify(paytmParams);
    var options = {

        /* for Staging */
        hostname: 'securegw-stage.paytm.in',

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: '/theia/api/v1/processTransaction?mid=' + paytmconfig.mid + '&orderId=' + orderId + '',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data.length
        }
    };


    var response = "";

    var post_req = https.request(options, function (post_res) {
        post_res.on('data', function (chunk) {
            response += chunk;
        });

        post_res.on('end', function () {

            console.log("transtionStatus", JSON.parse(response));
        });
    });
    post_req.write(post_data);
    post_req.end();



}


