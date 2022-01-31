const Room = require('../../models/room')
const Hotel = require('../../models/hotel')
const roomType = require('../../models/roomType')
const jwt = require('jsonwebtoken')

class roomController {

    getAllrooms = async (req,res)=>{
        let rooms = await new Room.find((err,resolve)=>{
            if(err){
                res.status(400).json({
                    msg : 'something wrong in room.find method'
                })
            }else{
                res.status(200).json(rooms)
            }
        })
    }

    getRoomsByType = async (req,res)=>{
        let type = req.params.roomType
        let arrayRoom = []

        let roomType = await new roomType.findOne({
            name: type
        })

        let rooms = await new Room.find()
        rooms.forEach((room) => {
            if(room.roomType_id == type){
                arrayRoom.push(room)
            }
        })

        res.status(200).send(arrayRoom)

        
    }

    addRoom = async (req,res)=>{
        let data = {
            token : req.headers.authorization.split(' ')[1],
            number: req.body.number,
            roomQuantity: req.body.description,
            price: req.body.price,
            hotel: req.body.hotel,
            roomType: req.body.roomType
        }

        let verifyToken =  await jwt.verify(token, process.env.SECRET_KEY, (err, payload)=>{
            if(err){
                res.status(401).json({
                    msg: 'you are unauthorized to make this request'
                })
            }else{
                res.status(200)
            }
        })

        if(!verifyToken.role == 'owner'){
            res.status(401).json({
                msg: 'bad request'
            })
        }else {
            let hotel = await new Hotel.findOne({
                name: data.hotel
            })
            let roomType = await new roomType.findOne({
                name : data.roomType
            })

            let room =  await new Room.insertMany({
                number: data.number,
                roomQuantity: data.roomQuantity,
                price: data.price,
                hotel_id: hotel._id.toString(),
                roomType_id: roomType._id.toString()
            })
        }


    }

    updateRoom = async (req,res)=>{
        let data = {
            token : req.headers.authorization.split(' ')[1],
            id: req.params.id,
            number: req.body.number,
            roomQuantity: req.body.description,
            price: req.body.price,
            hotel: req.body.hotel,
            roomType: req.body.roomType
        }

        let verifyToken =  await jwt.verify(token, process.env.SECRET_KEY, (err, payload)=>{
            if(err){
                res.status(401).json({
                    msg: 'you are unauthorized to make this request'
                })
            }else{
                res.status(200)
            }
        })


        let hotel = await new Hotel.findOne({
            name: data.hotel
        })
        let roomType = await new roomType.findOne({
            name : data.roomType
        })

        let updateRoom =  await new Room.findByIdAndUpdate(id,{
            number: data.number,
            roomQuantity: data.roomQuantity,
            price: data.price,
            hotel_id: hotel._id.toString(),
            roomType_id: roomType._id.toString()
        },(err,resolve)=>{
            if(err){
                res.status(400).json({
                    msg: 'something wrong in Room.findByIdAndUpdate Query'
                })
            }else{
                res.status(200).send(resolve)
            }
        })




    }

    deleteRoom = async (req,res)=>{
        let id = req.params.id
        let token = req.headers.authorization.split(' ')[1]

        let verifyToken =  await jwt.verify(token, process.env.SECRET_KEY, (err, payload)=>{
            if(err){
                res.status(401).json({
                    msg: 'you are unauthorized to make this request'
                })
            }else{
                res.status(200)
            }
        })

        let deletedRoom = await Room.findByIdAndRemove(id,(err,resolve)=>{
                if(err){
                    res.status(400).json({
                        msg: 'something wrong in Room.findByIdAndRemove query'
                    })
                }else {
                    res.status(200).send(resolve)
                }
        })


    }

}