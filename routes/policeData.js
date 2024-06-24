const {orgUnits} = require('../orgUnit');
module.exports = async (req, res) => {
  let title = 'Police Station Data';
  console.log('req.query.ps', req.query.pslocation);
  console.log('req.query.role', req.query.role);
  console.log('req.query.zone', req.query.zone);
  console.log('orgUnits', orgUnits[0]);
  let orgdata = [];
  let roleNames = {
    'CP': 'Commissioner of Police',
    'DCP': 'Dy. Commissioner of Police',
    "ADLDCP" : 'Addl. Dy. Commissioner of Police',
    'ACP': 'Asst. Commissioner of Police',
    'INS': 'Inspector of Police',
    'SI': 'Sub-Inspector of Police',
    'CI': 'Circle-Inspector of Police'
  };
  for(let i=0; i<orgUnits.length; i++) {
    if(orgUnits[i].pslocation == req.query.pslocation && orgUnits[i].zone == req.query.zone) {
      orgUnits[i].roleName = roleNames[orgUnits[i].role];
      orgdata.push(orgUnits[i]);
    }
  }
  console.log('orgdata', orgdata)
  let data = orgdata[0]
  res.render('policeData', { title, data });
};