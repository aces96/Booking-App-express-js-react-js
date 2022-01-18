const mongoose = require('mongoose');
const   User = require('./userModal') 





const migration = async ()=>{
    const user = new User({name: 'achraf',email: 'email@email.com',password: 'password',role: 'client'})
    await user.save()
    console.log(user)
}

migration()

