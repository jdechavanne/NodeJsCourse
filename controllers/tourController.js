const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkId = (req, res, next, value) => {
    console.log(`Tour id is ${value}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id',
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
};

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    const fetchedTour = tours.find(el => el.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tour: fetchedTour
        }
    })
};

exports.createTour = (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
        id: newId
    }, req.body);
    console.log(newId);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        });
    });
}

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Update tour here...>'
        }
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })
};