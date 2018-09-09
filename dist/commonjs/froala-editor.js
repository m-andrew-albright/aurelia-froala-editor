'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FroalaEditor = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _aureliaFramework = require('aurelia-framework');

var _aureliaBinding = require('aurelia-binding');

var _froalaEditorConfig = require('./froala-editor-config');

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var FroalaEditor = exports.FroalaEditor = (_dec = (0, _aureliaFramework.customElement)('froala-editor'), _dec2 = (0, _aureliaFramework.inject)(Element, _froalaEditorConfig.Config, _aureliaBinding.ObserverLocator), _dec(_class = _dec2(_class = (_class2 = function () {
	function FroalaEditor(element, config, observerLocator) {
		var _this = this;

		_classCallCheck(this, FroalaEditor);

		_initDefineProp(this, 'value', _descriptor, this);

		_initDefineProp(this, 'config', _descriptor2, this);

		_initDefineProp(this, 'eventHandlers', _descriptor3, this);

		this.element = element;

		this.config = config.options();

		this.subscriptions = [observerLocator.getObserver(this, 'value').subscribe(function (newValue, oldValue) {
			if (_this.instance && _this.instance.froalaEditor('html.get') != newValue) {
				_this.instance.froalaEditor('html.set', newValue);
			}
		})];
	}

	FroalaEditor.prototype.tearUp = function tearUp() {
		var _this2 = this;

		this.instance = $(this.element.getElementsByTagName("div")[0]);

		if (this.instance.data('froala.editor')) {
			return;
		}

		this.instance.html(this.value);

		if (this.eventHandlers && this.eventHandlers.length != 0) {
			var _loop = function _loop(eventHandlerName) {
				var handler = _this2.eventHandlers[eventHandlerName];
				_this2.instance.on('froalaEditor.' + eventHandlerName, function () {
					var p = arguments;
					return handler.apply(this, p);
				});
			};

			for (var eventHandlerName in this.eventHandlers) {
				_loop(eventHandlerName);
			}
		}
		this.instance.on('froalaEditor.contentChanged, froalaEditor.blur', function (e, editor) {
			return _this2.value = editor.html.get();
		});

		this.instance.froalaEditor(Object.assign({}, this.config));
	};

	FroalaEditor.prototype.tearDown = function tearDown() {
		if (this.instance && this.instance.data('froala.editor')) {
			this.instance.froalaEditor('destroy');
		}

		this.instance = null;
	};

	FroalaEditor.prototype.attached = function attached() {
		this.tearUp();
	};

	FroalaEditor.prototype.detached = function detached() {
		this.tearDown();
	};

	return FroalaEditor;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'config', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'eventHandlers', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
})), _class2)) || _class) || _class);