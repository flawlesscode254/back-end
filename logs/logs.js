const { Router } = require("express");
const logEntries = require("../models/logEntry")
const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const getter = await logEntries.find({}).sort({
            createdAt: -1
        })
        res.json(getter)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const createLog = new logEntries(req.body);
        const saver = await createLog.save();
        res.json(saver)
    } catch (error) {
        if (error.name === 'ValidationError'){
            res.status(422)
        }
        next(error)
    }
})

module.exports = router