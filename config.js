var api = 'https://node.cryptopay.org.za';
var apiList = ["https://node.cryptopay.org.za"];
var donationAddress = "cpZxRsnRTUe3riq6mW81RyRWx2BSNcU4Z51jnXUNivH27mRBCsP55vtcmfxpReLHtdF9FVBqvzQwAFgaWefKZWpa2ZqfoQMtu";
var blockTargetInterval = 90;
var coinUnits = 1000000;
var symbol = 'cpa';
var refreshDelay = 30000;
// pools stats by CPA Coin
//NB do not include / at the end of url
var poolsStat = 
[
	["poolparty.cryptopay.org.za", "https://partystats.cryptopay.org.za/stats"],
//	["cpa.thepiratemine.nl", "https://cpa.piratepools.nl/:2887/stats"],
//	["miningcache.com", "https://miningcache.com:8119/stats"],
//	["cpa.cryptocoins-digging.space", "https://cpa.cryptocoins-digging.space:8119/stats"],
//	["cpa.thecoinsmining.com", "https://cpa.thecoinsmining.com:8119/stats"],
//        ["mine.cryptopay.org.za", "https://mine.cryptopay.org.za:8119/stats"],
//	["cpa.cnhub.de", "http://cpa.cnhub.de:8127/stats"],
//	["the-miners.de/CPA", "http://207.180.246.163:8113/stats"],
	["cpacoin.my-mining-pool.de", "https://apicpacoin.my-mining-pool.de/stats"],
//	["cpa.multiminer.us", "https://cpa.multiminer.us:8119/stats"],
//	["cpa.cryptomine.cx", "https://cpa.cryptomine.cx:8001/stats"],
//	["cpa.optimusblue.com","https://cpa.optimusblue.com:8129/stats"],
	["letshash.it/cpa/","https://letshash.it:8273/stats"],
//	["cpa.romining.farm", "https://cpa.romining.farm/api/pool/stats"]
];

var nodesStat = 
[["restapi.cryptopay.org.za"],
];
