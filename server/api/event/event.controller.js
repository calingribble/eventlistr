var Event = require('./event.model');

exports.index = function(req, res) {
  Event.find(function (err, events) {
    if(err) { return handleError(res, err); }
    return res.json(200, events);
  });
};

exports.create = function(req, res) {
  Event.create(req.body, function(err, event) {
    if(err) { return handleError(res, err); }
    return res.json(201, event);
  });
};
