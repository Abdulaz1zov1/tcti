const BM = require('../models/bolimMarkaz/BM_data')

exports.addSertifikat = async (req, res) => {
    try {
        const result = new BM({
            ...req.body,
            photo: req.file.filename,
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
        const result = await BM.findById({ _id: req.params.id })
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
        const result = await BM.find({}).sort({ date: -1 })
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

exports.updateSertifikat = async (req, res) => {
    try {
        const result = await BM.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: req.file.filename,
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

exports.deleteSertifikat = async (req, res) => {
    try {
        await BM.findByIdAndDelete({ _id: req.params.id })
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
