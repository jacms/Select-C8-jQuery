/**
 * SelectC8 jQuery
 * @Copyright: Alan Mtz & Rene Mtz
 * https://github.com/jacms
 * @version 1.0.0
 * @author jacms & reneezy
 */
(function ($) {
    "use strict";
    $.fn.SelectC8 = function (options) {
        let self = this;
        if ($(self).length === 0)
            return;
        if (!self.is("select"))
            return;
        let defaults = {
            data: null,
            valueProperty: "",
            textProperty: "",
            dataExtended: null,
            selectedValue: null,
            assignWithoutProperties: false,
            appendDefaultFirstOption: true,
            defaultFirstOptionValue: "",
            defaultFirstOptionText: "-- Select option --",
            onChange: null,
            onSuccess: function () {
                return false
            }
        };
        let settings = $.extend(defaults, options);

        function clearControl() {
            self.empty();
        }

        function appendDefaultOption() {
            if (settings.appendDefaultFirstOption === true) {
                self.append($("<option>", {
                    value: settings.defaultFirstOptionValue,
                    text: settings.defaultFirstOptionText
                }));
            }
        }

        function getPropertyValues() {
            let values = [];
            settings.data.forEach(object => {
                let optionValue;
                if (settings.assignWithoutProperties === false) {
                    optionValue = {
                        value: object[settings.valueProperty],
                        text: object[settings.textProperty]
                    };
                } else {
                    optionValue = {
                        value: object,
                        text: object
                    };
                }
                if (settings.dataExtended && object[settings.dataExtended] !== undefined) {
                    optionValue[settings.dataExtended] = object[settings.dataExtended];
                }
                values.push(optionValue);
            });
            return values;
        }

        function selectedValue() {
            if (settings.selectedValue) {
                self.val(settings.selectedValue);
                $("option", self).filter(function () {
                    return this.value === settings.selectedValue;
                }).prop("selected", true);
            }
        }

        function appendOptions() {
            if (!settings.data && !Array.isArray(settings.data))
                return;
            let values = getPropertyValues();
            values.forEach(object => {
                var $option = $("<option>", object);
                if (settings.dataExtended && object[settings.dataExtended] !== undefined) {
                    $option.data("extended", object[settings.dataExtended]);
                }
                self.append($option);
            });
        }

        function setOnChange() {
            if (typeof settings.onChange !== "function")
                return;
            self.unbind("change.customSelect");
            self.on("change.customSelect", function () {
                settings.onChange(self);
            });
        }
        let buildSelect = function () {
            clearControl();
            appendDefaultOption();
            appendOptions();
            selectedValue();
            setOnChange();
        }
        let successfullResponse = function () {
            buildSelect();
            settings.onSuccess(settings.data);
        }
        if (settings.data)
            successfullResponse();
        return undefined;
    }
}(jQuery));