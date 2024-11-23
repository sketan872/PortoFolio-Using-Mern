const sendEmailController = (req, res) => { // Switched `req` and `res` parameters
    try {
        return res.status(200).send({ // Use status 200 for success
            success: true,
            message: "run successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: 'Send Email Api Error',
            err
        });
    }
};

module.exports = { sendEmailController };
