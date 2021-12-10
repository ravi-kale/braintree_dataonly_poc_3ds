# braintree_dataonly_poc_3ds
 
1. Clone this Repo
2. Edit script.js
	a. add your braintree client_token to `auth_token` var
	b. In btcreate(), add payment info `nonce`, `bin`, `amount` etc.
		Note : `nonce` gets expired after every use
3. Run simple server from directory from terminal at port 8001
		`python -m http.server 8001`
4. Enjoy, Test the flow :) 

