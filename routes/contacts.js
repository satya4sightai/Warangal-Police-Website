module.exports = async (req, res) => {
    let title = 'Contacts';
    res.render('contacts', { title });
};