// index - listagens de sessões, show - listar única sessão, store - criar uma sessão,
// update - atualizar uma sessão, destroy - deletar uma sessão

const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};