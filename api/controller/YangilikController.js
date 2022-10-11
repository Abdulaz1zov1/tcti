const News = require('../models/yangilik')

exports.addNews = async (req, res) => {
    try {
        const news = new News({
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
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
        const news = await News.findById({ _id: req.params.id })
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
                message: "news not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const news = await News.find({}).sort({ date: -1 })
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
                message: "news not found"
            }
        )
    }
}

exports.updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
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
                message: "news not found"
            }
        )
    }
}

exports.deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete({ _id: req.params.id })
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
                message: "news not found"
            }
        )
    }
}
