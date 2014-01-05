define(function (require) {
    // load external dependencies
    var _ = require("underscore");

    var tempFunc = function () {},
        emptyInitializeFunc = function () {};

    var Class = function () {
        var superclass = null,
            properties = _.toArray(arguments);

        if (_.isFunction(properties[0])) {
            superclass = properties.shift();
        }

        function klass() {
            this.initialize.apply(this, arguments);
        }

        if (superclass) {
            tempFunc.prototype = superclass.prototype;
            klass.prototype = new tempFunc();
            klass.superclass = superclass.prototype;
        }

        for (var i = 0, length = properties.length; i < length; i++) {
            _.extend(klass.prototype, properties[i]);
        }

        if (!klass.prototype.initialize) {
            klass.prototype.initialize = emptyInitializeFunc;
        }

        klass.prototype.constructor = klass;

        return klass;
    };

    return Class;
});