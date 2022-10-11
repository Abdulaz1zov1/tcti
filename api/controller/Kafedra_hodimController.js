const Kafedra_Hodim = require('../models/kafedra/kafedra_hodim')

exports.addKafedra_Hodim = async (req, res) => {
    try {
        const result = new Kafedra_Hodim({
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        await result.save()
        res.status(201).json(
            {
                success: true,
                status: 201,
                data: result
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
        const result = await Kafedra_Hodim.findById({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: result
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "result not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await Kafedra_Hodim.find({}).sort({ date: -1 })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: result
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "result not found"
            }
        )
    }
}

exports.updateKafedra_Hodim = async (req, res) => {
    try {
        const result = await Kafedra_Hodim.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: result
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "result not found"
            }
        )
    }
}

exports.deleteKafedra_Hodim = async (req, res) => {
    try {
        await Kafedra_Hodim.findByIdAndDelete({ _id: req.params.id })
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
                message: "result not found"
            }
        )
    }
}
