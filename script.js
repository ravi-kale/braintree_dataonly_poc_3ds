function start() {
  getClientToken();
}

function getClientToken() {
    //get your client token here
    auth_token = "XXXXXXXXXXXXXXXXXXXXXXX";
    btcreate(auth_token);
  };

function btcreate(auth_token){
  braintree.client.create({
    authorization: auth_token
  }, function(err, clientInstance) { 
    document.getElementById("payBtn").value = "Loading...";
    document.getElementById("payBtn").disabled = true;
    braintree.threeDSecure.create({
      client: clientInstance,
      version: '2'
    }, function (createError, threeDSecuree) {
      // set up lookup-complete listener
      threeDSecuree.on('lookup-complete', function (data, next) {
        // check lookup data
    
        next();
      });
      // using Hosted Fields, use `tokenize` to get back a credit card nonce
      threeDSecuree.verifyCard({
        // add payment nonce, bin, amount and extra fields(refer braintree doc) value
        nonce: "XXXXXXXXXXXXXXXXXXXXXXX",
        bin: "XXXXXXXX",
        amount: '250.0'
      }, function (verifyError, payload) {
        if(verifyError){
            window.alert("Expired Nonce Provided !!");
        }else{
          console.log(payload.nonce);
          console.log(payload);
          document.getElementById("enrich_nonce").value = payload.nonce;
        };
        document.getElementById("payBtn").value = "Pay Using Nonce";
        document.getElementById("payBtn").disabled = false;
        
      });
    });
  });
}



