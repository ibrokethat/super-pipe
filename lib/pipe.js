"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = pipe;

var co = _interopRequire(require("co"));

function pipe(functions, data) {

  var fns = [].concat(functions);

  return co(function* () {

    try {

      while (fns.length) {

        var fn = fns.shift();

        if (typeof fn !== "function") {

          throw new TypeError("factory expects " + fn + " to be a function");
        }

        var r = fn(data);

        if (typeof r.then === "function") {

          data = yield r;
        } else {
          data = r;
        }
      }
    } catch (e) {

      return e;
    }

    return data;
  });
}