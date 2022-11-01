const BitShares = require('btsdex');
start();
async function start() {
 if (await BitShares.connect()){
    //let obj = await BitShares.db.get_objects(["1.3.0"]);
    //let bts = await BitShares.db.list_assets("BTS", 100);
    //let ops = await BitShares.history.get_account_history("1.2.849826", "1.11.0", 10, "1.11.0"); //dont knw
    //let ops = await BitShares.history.get_account_history("1.2.1816076", "1.11.0", 10, "1.11.0"); //bruce1234 id
    //let acc = BitShares.login('bruce1234', 'P5KgDTJQksMPCAssyWe8Adjco8oSRG2Gc2sRuEZujYo6m');
    // let acc = await BitShares.login('saitech123', 'P5KfGvD7pUUSQpLZFCcsaNYLcFHB9NWVVEBQ2fpLnbcLn');
    let acc = await BitShares.login('bruce1234', 'P5KgDTJQksMPCAssyWe8Adjco8oSRG2Gc2sRuEZujYo6m');

    console.log(acc);
    console.log(acc.account);
    let iam = await BitShares.accounts['bruce1234']; //
    //console.log(iam);
    let orders = await BitShares.db.get_full_accounts([iam.id], false);
    //console.log(orders)
    orders = orders[0][1].limit_orders;
    //console.log(orders);
    if(orders.length > 0) {
        let order = orders[0].sell_price;
        //console.log(order);
    } else {
        //console.log('No orders made');
    }
 }
 else
    console.log("BBBBBBBBBBBBBBB");
}
