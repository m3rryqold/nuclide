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

exports.default = main;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debuggerDebuggerCommander2;

function _debuggerDebuggerCommander() {
  return _debuggerDebuggerCommander2 = require('../debugger/DebuggerCommander');
}

var _debuggerDebugger2;

function _debuggerDebugger() {
  return _debuggerDebugger2 = require('../debugger/debugger');
}

var _readline2;

function _readline() {
  return _readline2 = _interopRequireDefault(require('readline'));
}

var _yargs2;

function _yargs() {
  return _yargs2 = _interopRequireDefault(require('yargs'));
}

function main(args) {
  var argv = (_yargs2 || _yargs()).default.usage('Python command-line debugger in JavaScript.\nUsage: $0 <file-to-run.py> <arg1> <arg2>').help('help').alias('h', 'help').demand(1, 'Must specify a Python file').parse(args);

  var commander = new (_debuggerDebuggerCommander2 || _debuggerDebuggerCommander()).DebuggerCommander();
  var observable = (0, (_debuggerDebugger2 || _debuggerDebugger()).launchDebugger)(commander.asObservable(),
  /* initialBreakpoints */[],
  /* pathToPythonExecutable */'python',
  /* pythonArgs */argv._);

  interact(observable, commander);
}

/* eslint-disable no-console */
function interact(observable, commander) {
  var rl = (_readline2 || _readline()).default.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function ask() {
    rl.question('> ', function (answer) {
      // See https://docs.python.org/2/library/pdb.html for the full set of pdb commands.
      // TODO(mbolin): Support break, clear, and jump, all of which take arguments.
      switch (answer) {
        case 'c':
        case 'cont':
        case 'continue':
          commander.continue();
          break;
        case 'h':
        case 'help':
          console.error('Available commands: c h n q r s');
          ask();
          break;
        case 'n':
        case 'next':
          commander.next();
          break;
        case 'q':
        case 'quit':
          commander.quit();
          break;
        case 'r':
        case 'return':
          commander.return();
          break;
        case 's':
        case 'step':
          commander.step();
          break;
        default:
          console.error('Unrecognized command: ' + answer);
          ask();
      }
    });
  }

  observable.subscribe({
    next: function next(message) {
      if (message.event === 'start') {
        // Give the user a chance to set breakpoints before starting the program.
        console.log('Program started. Type \'c\' to continue or \'s\' to start stepping.');
        ask();
      } else if (message.event === 'stop') {
        var file = message.file;
        var line = message.line;

        console.log('Stopped at: ' + file + ':' + line);
        ask();
      }
    },
    error: function error(_error) {
      console.error('ERROR:', _error);
    },
    complete: function complete() {
      rl.close();
    }
  });
}
/* eslint-enable no-console */
module.exports = exports.default;