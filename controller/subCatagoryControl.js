const Sub_Catagory = require('../models/sub_catagory')


exports.addSub_Catagory = async (req, res) => {
    try {
        const news = new Sub_Catagory({
            ...req.body
        })
        await news.save()
        res.status(201).json(
            {
                success: true,
                status: 201,
                data: news
            }
        )
    } catch (e) {
        res.status(500).json(
            {
                success: false,
                err: "error"
            }
        )
    }
}

exports.getById = async (req, res) => {
    try {
        const news = await Sub_Catagory.findById({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: news
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "data not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const data = await Sub_Catagory.find({})
        .limit(limit *1)
        .skip((page-1)*limit);
        const count =  await Sub_Catagory.count()
        res.status(200).json({pagination:{
            totol: Math.round(count/limit),
            page:+page,
            limit:+limit
        }, data})
    } catch (err) {
        res.status(500).json(
            {
                message: "data not found"
            }
        )
    }
}


exports.getQuery = async (req, res) => {
    try {
        const data = await Sub_Catagory.find({yonalish : req.param("yonalish")})
        res.status(200).json({
            data: data
        })
    } catch (err) {
        res.status(500).json(
            {
                message: "data not found"
            }
        )
    }
}






exports.updateSub_Catagory = async (req, res) => {
    try {
        const news = await Sub_Catagory.findByIdAndUpdate(req.params.id, {
            ...req.body,
        })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: news
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "data not found"
            }
        )
    }
}

exports.deleteSub_Catagory = async (req, res) => {
    try {
        await Sub_Catagory.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: []
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "data not found"
            }
        )
    }
}
