const balances = {};

const mint = (address, amount) => {

    balances[address] = 
    (balances[address] || 0) + amount;

    return balances[address];
};


const transfer = (from,to,amount)=>{

    if((balances[from] || 0) < amount){
        throw new Error("Insufficient balance");
    }

    balances[from] -= amount;

    balances[to] =
    (balances[to] || 0) + amount;

};


const balanceOf = (address)=>{

    return balances[address] || 0;

};


module.exports = {
    mint,
    transfer,
    balanceOf
};
