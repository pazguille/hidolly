'use strict';

/**
 * Deep cloning of objects and arrays.
 * @param {Object} obj - A given Object or Array to clone.
 * @returns {Object}
 */
function hidolly(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = hidolly;