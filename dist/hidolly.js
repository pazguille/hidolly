/*!
 * hidolly - v0.0.1
 *
 * Copyright (c) 2014, Guille Paz <guille87paz@gmail.com>
 * Released under the MIT license.
 */
(function(window) {
'use strict';

/**
 * Deep cloning of objects and arrays.
 * @param {Object} obj - A given Object or Array to clone.
 * @returns {Object}
 */
function hidolly(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Expose hidolly
 */
// AMD
if (typeof window.define === 'function' && window.define.amd !== undefined) {
  window.define('hidolly', [], function () {
    return hidolly;
  });
// CommonJS
} else if (typeof module !== 'undefined' && module.exports !== undefined) {
  module.exports = hidolly;
// Browser
} else {
  window.hidolly = hidolly;
};

}(this));