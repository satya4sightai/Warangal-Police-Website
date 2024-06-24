const {orgUnits} = require('../orgUnit');
module.exports = async (req, res) => {
  let title = '';
  console.log('req.query.ps', req.query.ps);
  console.log('req.query.role', req.query.role);
  console.log('req.query.zone', req.query.zone);
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
    if(orgUnits[i].location == req.query.ps && orgUnits[i].zone == req.query.zone && orgUnits[i].role == req.query.role) {
      orgUnits[i].roleName = roleNames[orgUnits[i].role];
      orgdata.push(orgUnits[i]);
    }
  }
  console.log('orgunits data', orgdata)
  console.log('orgdata', orgdata)
  let data = orgdata[0]
  res.render('organizationData', { title, data });
};
