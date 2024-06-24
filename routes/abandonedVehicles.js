module.exports = (req, res) => {
    let title = 'Abandoned Vehicles';
    res.render('abandonedVehicles', {title});
};