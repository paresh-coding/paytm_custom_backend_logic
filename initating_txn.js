const https = require('https');

const PaytmChecksum = require('./PaytmChecksum.js');


var paytmParams = {};


var paytmconfig = {
    
    mid: "WpWlJD00110553642208",
    key: "your key",
    website: "WEBSTAGING",


}; 



let orderId = Date.now().toString();
console.log(orderId);


paytmParams.body = {
    "requestType": "Payment",
    "mid": paytmconfig.mid,
    "websiteName": "WEBSTAGING",
    "orderId": orderId,
    "callbackUrl": "https://us-central1-practice-1-6355e.cloudfunctions.net/payTmServer/paymentReceipt",
    "txnAmount": {
        "value": "100.00",
        "currency": "INR",
    },
    "userInfo": {
        "custId": "45847858",
    },
};



PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), paytmconfig.key).then(function (checksum) {

    paytmParams.head = {
        "signature": checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    var options = {

        /* for Staging */
        hostname: 'securegw-stage.paytm.in',

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: '/theia/api/v1/initiateTransaction?mid=' + paytmconfig.mid + '&orderId=' + orderId + '',
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
            console.log('Response: ', response);
            console.log(JSON.parse(response));


        });
    });

    post_req.write(post_data);
    post_req.end();
});
