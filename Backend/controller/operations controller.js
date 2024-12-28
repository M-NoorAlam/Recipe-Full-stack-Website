const User = require('../schema/schema')

//post API

exports.postUserData = async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const ConfirmPassword = req.body.ConfirmPassword;


        const user = new User({
            username: username,
            email: email,
            password: password,
            ConfirmPassword: ConfirmPassword,
        })
        const PostUserData = user.save();

        res.send({
            success: true,
            message: "User post succesfully",
            data: user
        })

    } catch (error) {
        res.send("error in posting", error)
        console.log("Error in posting", error)

    }
}


// login API

exports.loginAPI = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.send({
                success: false,
                error: "Not found any user with this email or password",
            });
        }

        if (password !== user.password) {
            return res.send({
                success: false,
                error: "Wrong email or password",
            });
        }

        // If everything is correct, send success response
        return res.send({
            success: true,
            message: "Login Successfully",
            data: user,
        });

    } catch (error) {
        // Catch any unexpected errors and send a failure response
        return res.send({
            success: false,
            error: "Error in login",
        });
    }
};
