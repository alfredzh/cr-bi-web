define(function (require) {

    // load external dependencies
    var Marionette = require("marionette"),
        template = require("text!templates/sale/views/sale.html"),
        SaleAnalysisView = require("modules/sale/views/sale_analysis_view"),
        ProfitAnalysisView = require("modules/sale/views/profit_analysis_view");

    var viewMap = {
        sale: SaleAnalysisView,
        profit: ProfitAnalysisView
    },
        defaultView = viewMap.sale;

    var SaleView = Marionette.Layout.extend({
        template: template,
        regions: {
            bodyRegion: "#module-body"
        },
        onShow: function () {
            this.navigate(this.options);
        },
        navigate: function (options) {
            var ViewClass = defaultView;
            if (options) {
                ViewClass = viewMap[options.view] || ViewClass;
            }
            this.view = new ViewClass();
            this.bodyRegion.show(this.view);
            this.trigger("shown");
        }
    });

    return SaleView;
});