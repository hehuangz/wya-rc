'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp; /**
                    * 功能大致实现，后续再考虑重构
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _wyaFetch = require('wya-fetch');

var _index = require('../rc-instance/index');

var _index2 = _interopRequireDefault(_index);

var _pPopup = require('../p-popup');

var _pPopup2 = _interopRequireDefault(_pPopup);

var _Contents = require('./Contents');

var _Contents2 = _interopRequireDefault(_Contents);

require('./PGallery.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dom = document.body;
var Statics = {};
var cName = 'PGallery';
Statics = {
	init: function init() {
		var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return new Promise(function (resolve, reject) {
			var div = document.createElement('div');
			// div.classList.add("wp-gallery");
			Dom.appendChild(div);
			opts = (0, _extends3.default)({}, opts, {
				request: opts.request || _wyaFetch.ajax,
				max: opts.max || 0,
				show: true,
				onCloseSoon: function onCloseSoon() {
					_reactDom2.default.unmountComponentAtNode(div);
					Dom.removeChild(div);
					delete _index2.default.APIS[cName];
				},
				onSure: function onSure(res) {
					opts.onCloseSoon();
					resolve(res);
				},
				onClose: function onClose(res) {
					opts.onCloseSoon();
					reject(res);
				}
			});
			_index2.default.APIS[cName] = div;
			return _reactDom2.default.render(_react2.default.createElement(PGallery, opts), div);
		});
	},

	/**
  * 弹出项目，验证数据结构是否合法
  * opts {
  * 	request,
  * 	max
  * }
  */
	popup: function popup() {
		var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		if ((typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) !== 'object') {
			opts = {};
		}
		return Statics.init(opts);
	}
};
var PGallery = (_temp = _class = function (_Component) {
	(0, _inherits3.default)(PGallery, _Component);

	function PGallery(props, context) {
		(0, _classCallCheck3.default)(this, PGallery);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PGallery.__proto__ || Object.getPrototypeOf(PGallery)).call(this, props, context));

		_this.close = function () {
			_this && _this.props.onClose && _this.props.onClose();
		};

		_this.handleClose = function () {
			_this && _this.props.onClose && _this.props.onClose();
		};

		_this.handleSure = function (res) {
			_this && _this.props.onSure && _this.props.onSure(res);
		};

		_this.handleSet = function (newState) {
			_this.setState((0, _extends3.default)({}, newState));
		};

		_this.loadDataForPaths = function () {
			var PGallery = _index2.default.config.PGallery;

			var _ref = PGallery || {},
			    _url = _ref.URL_PGALLERY_PATHS_LIST_GET;

			var _ref2 = _this.props.url || {},
			    url = _ref2.URL_PGALLERY_PATHS_LIST_GET;

			var request = _this.props.request;

			request({
				url: url || _url,
				type: "get"
			}).then(function (res) {
				var paths = res.data.paths;

				_this.setState({
					paths: paths,
					pathSelect: paths[0] || {}
				});
			}).catch(function (res) {
				console.log(res);
			});
		};

		_this.state = {
			paths: [],
			pathSelect: {}
		};
		return _this;
	}

	(0, _createClass3.default)(PGallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// loadData
			this.loadDataForPaths();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.timer && clearTimeout(this.timer);
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    paths = _state.paths,
			    pathSelect = _state.pathSelect;
			var _props = this.props,
			    request = _props.request,
			    url = _props.url,
			    max = _props.max;

			return _react2.default.createElement(
				_pPopup2.default,
				{ title: '\u6211\u7684\u7D20\u6750', onClose: this.handleClose, onSure: this.handleSure, className: 'wp-gallery' },
				_react2.default.createElement(_Contents2.default, {
					paths: paths,
					pathSelect: pathSelect,
					request: request,
					url: url,
					max: max,
					onSet: this.handleSet
				})
			);
		}
	}]);
	return PGallery;
}(_react.Component), _class.popup = Statics.popup, _class.close = function () {
	if (!!_index2.default.APIS[cName]) {
		_reactDom2.default.unmountComponentAtNode(_index2.default.APIS[cName]);
		delete _index2.default.APIS[cName];
	}
}, _temp);


PGallery.propTypes = {
	url: _propTypes2.default.object,
	request: _propTypes2.default.func
};

exports.default = PGallery;