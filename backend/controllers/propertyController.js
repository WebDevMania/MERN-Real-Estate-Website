const verifyToken = require('../middlewares/verifyToken')
const Property = require('../models/Property')
const User = require('../models/User')
const propertyController = require('express').Router()

// get all
propertyController.get('/getAll', async(req,res) => {
    try {
        const properties = await Property.find({})

        console.log(properties)
        
        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// get featured
propertyController.get('/find/featured', async (req, res) => {
    try {
        const featuredProperties = await Property.find({ featured: true }).limit(10).populate("owner", '-password')

        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get all from type
propertyController.get('/find', async (req, res) => {
    const type = req.query
    let properties = []
    try {
        if (type) {
            properties = await Property.find(type).populate("owner", '-password')
        } else {
            properties = await Property.find({})
        }

        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// TODO FETCH TYPE OF PROPERTIES. EX: {BEACH: 34, MOUNTAIN: 23}
propertyController.get('/find/types', async(req, res) => {
    try {
       const beachType = await Property.countDocuments({type: 'beach'})
       const mountainType = await Property.countDocuments({type: 'mountain'})
       const villageType =  await Property.countDocuments({type: 'village'}) 

       return res.status(200).json({beach: beachType, mountain: mountainType, village: villageType})
    } catch (error) {
        return res.status(500).json(error) 
    }
})

// TODO FETCH INDIVIDUAL PROPERTY
propertyController.get('/find/:id', async(req, res) => {
    try {
        const property = await Property.findById(req.params.id)

        if(!property){
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error) 
    }
})

// create estate
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// update estate
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.owner !== req.user.id) {
            throw new Error("You are not allowed to update other people properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true}
        )

        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// delete estate
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.owner !== req.user.id) {
            throw new Error("You are not allowed to delete other people properties")
        }

        await property.delete()

        return res.status(200).json({msg: "Successfully deleted property"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = propertyController