(function () {
    this.disableFormOnSubmit = function (form, options) {
        let defaults = {
            duration: 4000,
            buttonTemplate: 'Please Wait...',
            submitInputText: 'Please Wait...'
        };

        this.element = form;
        this.settings = (options && typeof options === 'object') ? extendDefaults(defaults, options) : defaults;

        this.init = function () {
            this.element.addEventListener('submit', submit);
            this.element.settings = this.settings;
        }

        function submit(e) {
            let settings = e.currentTarget.settings;
            let attrValue = form.dataset.disableDuration;

            if (attrValue === 'false') {
                // Disable this script if the data-disable-duration attribute is false
                return;
            } else if (form.dataset.submitted === 'true') {
                e.preventDefault();
                return;
            }

            form.dataset.submitted = true;
            let buttons = form.querySelectorAll('button[type="submit"]');
            let inputs = form.querySelectorAll('input[type="submit"]');

            // Disable buttons
            buttons.forEach(function (button) {
                button.disabled = true;
                if (settings.buttonTemplate) {
                    button.dataset.tempValue = button.innerHTML;
                    button.innerHTML = settings.buttonTemplate;
                }
            });

            // Disable inputs
            inputs.forEach(function (input) {
                input.disabled = true;
                if (settings.submitInputText) {
                    input.dataset.tempValue = input.value;
                    input.value = settings.submitInputText;
                }
            });

            // Get the attribute duration if it exists
            let duration = settings.duration;
            if (attrValue) {
                let attrDuration = parseInt(attrValue);
                if (attrDuration > 0) duration = attrDuration;
            }

            setTimeout(function () {
                form.dataset.submitted = false;

                buttons.forEach(function (button) {
                    button.disabled = false;
                    if (settings.buttonTemplate) {
                        button.innerHTML = button.dataset.tempValue;
                    }
                });

                inputs.forEach(function (input) {
                    input.disabled = false;
                    if (settings.submitInputText) {
                        input.value = input.dataset.tempValue;
                    }
                });
            }, duration);
        }

        function extendDefaults(defaults, properties) {
            Object.keys(properties).forEach(property => {
                if (properties.hasOwnProperty(property)) {
                    defaults[property] = properties[property];
                }
            });
            return defaults;
        }

        this.init();
    }
}());
