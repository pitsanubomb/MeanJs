const express = require('express');
const router = express.Router();

const Report  = require('../models/reports')

// Report


router.post('/form', (req, res, next) => {
  let newReport= new Report({
    reportname: req.body.reportname,
    email: req.body.email,
    value: req.body.value
  });

  Report.addReport(newReport, (err, report) => {
    if(err){
      res.json({success: false, msg:'Failed to add report'});
    } else {
      res.json({success: true, msg:'Report can add'});
    }
  });
});

router.get('/view/:reportName', function(req, res) {
  console.log("view report" + req.params.reportName);
  const repname =  req.params.reportName;
  Report.getReport(repname, (err, report) => {
    if(err) throw err;
    if(!report){
      return res.json({success: false, msg: 'Report not found'});
    }else{
      // res.json({success:true,})
      console.log(report.id);
    }
});
});

//Export 
module.exports = router;