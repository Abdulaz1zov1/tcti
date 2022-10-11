const Elon = require('../models/elon')

exports.addElon = async (req, res) => {
    try {
        const elon = new Elon({
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        await elon.save()
        res.status(201).json(
            {
                success: true,
                status: 201,
                data: elon
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
        const elon = await Elon.findById({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: elon
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "elon not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const elon = await Elon.find({}).sort({ date: -1 })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: elon
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "elon not found"
            }
        )
    }
}

exports.updateElon = async (req, res) => {
    try {
        const elon = await Elon.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: elon
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "elon not found"
            }
        )
    }
}

exports.deleteElon = async (req, res) => {
    try {
        await Elon.findByIdAndDelete({ _id: req.params.id })
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
                message: "elon not found"
            }
        )
    }
}
