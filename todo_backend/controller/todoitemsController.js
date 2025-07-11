const todomodel = require('../models/todomodel')

exports.createitem = async (req, res, next) => {
    try {
        console.log(req.url);
        const { task, date } = req.body;

        const item = new todomodel({ task, date }); // use 'new' keyword
        await item.save();

        res.status(201).json(item);
    } catch (err) {
        console.error('Error creating todo item:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getitems = async (req,res,next) => {
    const items = await todomodel.find();
    res.json(items)
}

exports.markcompleted = async (req,res,next)=>{
    const {id} = req.params
    const item = await todomodel.findById(id)
    item.completed = true;
    await item.save()
    res.json(item)
}

exports.deleteitem = async (req,res,next) => {
    console.log(req.params)
    const {id} = req.params
    await todomodel.findByIdAndDelete(id)
    res.status(204).end()
}