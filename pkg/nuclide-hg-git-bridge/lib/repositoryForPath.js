Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

exports.default = repositoryForPath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonsNodeCollection2;

function _commonsNodeCollection() {
  return _commonsNodeCollection2 = require('../../commons-node/collection');
}

var _repositoryContainsPath2;

function _repositoryContainsPath() {
  return _repositoryContainsPath2 = _interopRequireDefault(require('./repositoryContainsPath'));
}

/**
 * @param aPath The NuclideUri of a file or directory for which you want to find
 *   a Repository it belongs to.
 * @return A Git or Hg repository the path belongs to, if any.
 */

function repositoryForPath(aPath) {
  // Calling atom.project.repositoryForDirectory gets the real path of the directory,
  // which requires a round-trip to the server for remote paths.
  // Instead, this function keeps filtering local.
  var repositories = (0, (_commonsNodeCollection2 || _commonsNodeCollection()).arrayCompact)(atom.project.getRepositories());
  return repositories.find(function (repo) {
    try {
      return (0, (_repositoryContainsPath2 || _repositoryContainsPath()).default)(repo, aPath);
    } catch (e) {
      // The repo type is not supported.
      return false;
    }
  });
}

module.exports = exports.default;