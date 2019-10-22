exports.getUsers = (req, res, next) => {
    res.status(200).json({
        users: [
            { first_name: 'John', last_name: 'Merphy', account: 'Premium'},
            { first_name: 'Meleny', last_name: 'Jedah', account: 'Free'}
        ]
    });
};

exports.createUser = (req, res, next) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const account = req.body.account
    //create user
    res.status(201).json({
        message: 'user created successfully!',
        user: {id: new Date().toISOString(), first_name: first_name, last_name: last_name, account: account}
    });
};