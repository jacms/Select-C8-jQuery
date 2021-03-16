(function ($) {
    "use strict";
    $.fn.SelectC8 = function (options) {
        var self = this;
        if ($(self).length === 0)
            return;
        var defaults = {
            data: null,
            valueProperty: "",
            textProperty: "",
            dataExtended: null,
            selectedValue: null,
            assignWithoutProperties: false,
            appendDefaultFirstOption: true,
            defaultFirstOptionValue: "",
            defaultFirstOptionText: "Seleccione...",
            onChange: null,
            oneChange: null,
            onSuccess: function () {
                return false
            }
        };

        var settings = $.extend(defaults, options);

        console.log("object");


    }
}(jQuery));