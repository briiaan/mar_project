const {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} = 'http-status-codes';

const signUp = async (req, res) => {
	res.send("TEST")
}

const login = async (req, res) => {
	res.send("TEST")
}

module.exports = {
    signUp,
    login,
}