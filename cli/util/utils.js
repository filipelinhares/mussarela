var fs = require('fs');

exports.directoryIsEmpty = function (path, fn) {
  fs.readdir(path, function(err, files) {
    if (err && 'ENOENT' != err.code) throw err;
    fn(!files || !files.length)
  })
}
