const tokenLedger = require("../utils/tokenLedger");


// Mint Token
exports.mintToken = async (req, res) => {

    console.log("Mint API called");

    try {

        const { address, amount } = req.body;

        console.log("Request:", req.body);


        if (!address || !amount) {

            return res.status(400).json({
                success: false,
                message: "Address and amount are required"
            });

        }


        const balance = tokenLedger.mint(
            address,
            Number(amount)
        );


        return res.status(200).json({

            success: true,

            message: "Tokens minted successfully",

            address,

            balance

        });


    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// Transfer Token
exports.transferToken = async (req, res) => {

    try {

        const { from, to, amount } = req.body;


        if (!from || !to || !amount) {

            return res.status(400).json({

                success:false,

                message:"Transfer details are required"

            });

        }


        tokenLedger.transfer(
            from,
            to,
            Number(amount)
        );


        return res.status(200).json({

            success:true,

            message:"Transfer successful"

        });


    } catch(error) {


        return res.status(400).json({

            success:false,

            message:error.message

        });


    }

};



// Get Balance
exports.getBalance = async (req, res) => {


    try {

        const balance = tokenLedger.balanceOf(
            req.params.address
        );


        return res.status(200).json({

            success:true,

            address:req.params.address,

            balance

        });


    } catch(error) {


        return res.status(500).json({

            success:false,

            message:error.message

        });

    }


};
