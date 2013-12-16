define(function (require) {
    "use strict";

    // load external dependencies
    var Marionette = require("marionette"),
        template = require("text!templates/sale/views/profit_analysis.html");

    var ProfitAnalysisView = Marionette.ItemView.extend({
        template: template
    });

    return ProfitAnalysisView;
});