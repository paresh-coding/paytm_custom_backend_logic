const https = require('https');



var paytmconfig = {

    mid: "WpWlJD00110553642208",
    key: "your key",
    website: "WEBSTAGING",


}; 

//paste the txn token in run now method
runNow("")


function runNow(txn_token) {

    var paytmfetchParams = {};

    paytmfetchParams.body = {
        "mid": paytmconfig.mid
    };

    paytmfetchParams.head = {
        "tokenType": "TXN_TOKEN",
        "token": txn_token,
    };

    var post_data2 = JSON.stringify(paytmfetchParams);

    var options = {

        /* for Staging */
        hostname: 'securegw-stage.paytm.in',

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: '/theia/api/v2/fetchPaymentOptions?mid=' + paytmconfig.mid + '&orderId=' + orderId + '',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data2.length
        }
    };


    var response2 = "";
    var post_req = https.request(options, function (post_res) {
        post_res.on('data', function (chunk) {
            response2 += chunk;
        });

        post_res.on('end', function () {
            var respon_data = JSON.parse(response2);
            console.log(respon_data); 
        });
    });

    post_req.write(post_data2);
    post_req.end();

}
