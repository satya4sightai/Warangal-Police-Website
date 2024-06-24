const {orgUnits} = require('../orgUnit');
module.exports = async (req, res) => {
    let title = 'Wings';
    console.log('req.query.wing', req.query.wing);
    let data = [];
    for(let i=0; i<orgUnits.length; i++) {
        if(orgUnits[i].wing == req.query.wing) {
            data.push(orgUnits[i]);
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].cid) {
            data[i].dp = data[i].dp;
        }
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].role === 'CP') {
            data[i].role = 'Commissioner of Police';
        }
        if (data[i].role === 'DCP') {
            data[i].role = 'Dy. Commissioner of Police';
        }
        if (data[i].role === 'ADLDCP') {
            data[i].role = 'Addl. Dy. Commissioner of Police';
        }
        if (data[i].role === 'ACP') {
            data[i].role = 'Asst. Commissioner of Police';
        }
        if (data[i].role === 'INS') {
            data[i].role = 'Inspector of Police';
        }
        if (data[i].role === 'SI') {
            data[i].role = 'Sub-Inspector of Police';
        }
        if (data[i].role === 'CI') {
            data[i].role = 'Circle-Inspector of Police';
        }
        console.log('data', data)
       
    }
    res.render('wings', { title, data });
};