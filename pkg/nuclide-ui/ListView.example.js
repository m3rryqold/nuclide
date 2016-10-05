Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _reactForAtom2;

function _reactForAtom() {
  return _reactForAtom2 = require('react-for-atom');
}

var _Block2;

function _Block() {
  return _Block2 = require('./Block');
}

var _ListView2;

function _ListView() {
  return _ListView2 = require('./ListView');
}

var _Checkbox2;

function _Checkbox() {
  return _Checkbox2 = require('./Checkbox');
}

var _MultiSelectList2;

function _MultiSelectList() {
  return _MultiSelectList2 = require('./MultiSelectList');
}

var NOOP = function NOOP() {};

var ListviewExample1 = function ListviewExample1() {
  return (_reactForAtom2 || _reactForAtom()).React.createElement(
    (_Block2 || _Block()).Block,
    null,
    (_reactForAtom2 || _reactForAtom()).React.createElement(
      (_ListView2 || _ListView()).ListView,
      { alternateBackground: true },
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        { value: { id: 1 } },
        'test1'
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        { value: { id: 2 } },
        'test2'
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        { value: { id: 3 } },
        'test3'
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        { value: { id: 4 } },
        'test4'
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        { value: { id: 5 } },
        'test5'
      )
    )
  );
};
var ListviewExample2 = function ListviewExample2() {
  return (_reactForAtom2 || _reactForAtom()).React.createElement(
    (_Block2 || _Block()).Block,
    null,
    (_reactForAtom2 || _reactForAtom()).React.createElement(
      (_ListView2 || _ListView()).ListView,
      { alternateBackground: true },
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        null,
        (_reactForAtom2 || _reactForAtom()).React.createElement((_Checkbox2 || _Checkbox()).Checkbox, {
          checked: true,
          onClick: NOOP,
          onChange: NOOP,
          label: 'A Checkbox.'
        })
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        null,
        (_reactForAtom2 || _reactForAtom()).React.createElement((_Checkbox2 || _Checkbox()).Checkbox, {
          checked: true,
          onClick: NOOP,
          onChange: NOOP,
          label: 'A Checkbox.'
        })
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        null,
        (_reactForAtom2 || _reactForAtom()).React.createElement((_Checkbox2 || _Checkbox()).Checkbox, {
          checked: true,
          onClick: NOOP,
          onChange: NOOP,
          label: 'A Checkbox.'
        })
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        null,
        (_reactForAtom2 || _reactForAtom()).React.createElement((_Checkbox2 || _Checkbox()).Checkbox, {
          checked: false,
          onClick: NOOP,
          onChange: NOOP,
          label: 'A Checkbox.'
        })
      ),
      (_reactForAtom2 || _reactForAtom()).React.createElement(
        (_ListView2 || _ListView()).ListViewItem,
        null,
        (_reactForAtom2 || _reactForAtom()).React.createElement((_Checkbox2 || _Checkbox()).Checkbox, {
          checked: false,
          onClick: NOOP,
          onChange: NOOP,
          label: 'A Checkbox.'
        })
      )
    )
  );
};

var MultiSelectListExample = (function (_React$Component) {
  _inherits(MultiSelectListExample, _React$Component);

  function MultiSelectListExample(props) {
    _classCallCheck(this, MultiSelectListExample);

    _get(Object.getPrototypeOf(MultiSelectListExample.prototype), 'constructor', this).call(this, props);
    this.state = { value: [2] };
  }

  _createClass(MultiSelectListExample, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var options = [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }, { value: 4, label: 'Four' }];

      return (_reactForAtom2 || _reactForAtom()).React.createElement((_MultiSelectList2 || _MultiSelectList()).MultiSelectList, {
        options: options,
        value: this.state.value,
        onChange: function (value) {
          _this.setState({ value: value });
        }
      });
    }
  }]);

  return MultiSelectListExample;
})((_reactForAtom2 || _reactForAtom()).React.Component);

var ListviewExamples = {
  sectionName: 'ListView',
  description: '',
  examples: [{
    title: 'Simple ListView',
    component: ListviewExample1
  }, {
    title: 'Arbitrary components as list items',
    component: ListviewExample2
  }, {
    title: 'Multi-Select List',
    component: MultiSelectListExample
  }]
};
exports.ListviewExamples = ListviewExamples;