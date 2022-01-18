const mongoose = require('mongoose');
const user = require('./userModal')


const migration = async ()=>{
    const mig = new mongoose.model()

    mig.save(user)
}

