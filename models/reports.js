const mongodb = require('mongoose');
const dbconfig = require('../database/config');

// Report Schema
const ReportSchema = mongodb.Schema({
  reportname: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  value : {
    type : Number
  }
});

const Report = module.exports = mongodb.model('Report', ReportSchema);

module.exports.getReportById = function(id, callback){
  Report.findById(id, callback);
}

module.exports.getReport = function(reportname, callback){
  const query = {reportname: reportname}
  Report.findOne(query, callback);
}

module.exports.addReport = function(newReport, callback){
  newReport.save(callback);
}

module.exports.reportAll = function(reports){
  Report.find(reports);
}
