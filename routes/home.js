module.exports = (req, res) => {
    let title = 'Home';
    res.render('home', {title});
};