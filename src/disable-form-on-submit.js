(function ($) {
    $.fn.disableOnSubmit = function (options) {
        // Default settings
        var settings = $.extend({
            duration: 4000,
            buttonTemplate: 'Please Wait...',
            submitInputText: 'Please Wait...'
        }, options);

        function formSubmitted(e) {
            var form = $(this);
            var attributeValue = $(this).data('disable-on-submit');

            if (attributeValue === false) {
                // Disable this script if the data-disable-on-submit attribute is false
                return;
            } else if (form.data('submitted') === true) {
                // Prevent submitting the form again if it was submitted recently
                e.preventDefault();
                return;
            } else {
                form.data('submitted', true);

                // Disable all submit buttons
                var elements = $('button:submit', this);
                elements.each(function () {
                    $(this).attr('disabled', 'disabled');
                    if (settings.buttonTemplate !== false) {
                        $(this).data('temp-value', $(this).html());
                        $(this).html(settings.buttonTemplate);
                    }
                });

                // Disable all submit inputs
                var inputs = $('input[type=submit]', this);
                inputs.each(function () {
                    $(this).attr('disabled', 'disabled');
                    if (settings.submitInputText !== false) {
                        $(this).data('temp-text', $(this).val());
                        $(this).val(settings.submitInputText);
                    }
                });

                var duration = settings.duration;
                if (attributeValue) {
                    var customDuration = parseInt(attributeValue);
                    if (customDuration > 0) duration = customDuration;
                }

                // Enable everything after the timeout
                setTimeout(function () {
                    form.data('submitted', false);
                    elements.each(function () {
                        $(this).removeAttr('disabled');
                        if (settings.buttonTemplate !== false) {
                            $(this).html($(this).data('temp-value'));
                        }
                    });
                    inputs.each(function () {
                        $(this).removeAttr('disabled');
                        if (settings.submitInputText !== false) {
                            $(this).val($(this).data('temp-text'));
                        }
                    })
                }, duration);
            }
        }

        this.filter('form').each(function () {
            var form = $(this);
            form.on('submit', formSubmitted);
        });
    }
}(jQuery));
