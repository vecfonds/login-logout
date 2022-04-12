function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // inputElement.onblur = function() {
                //     console.log(inputElement.value)
                // }

                inputElement.addEventListener('blur', function() {
                    console.log(this.value)
                })
            }
        });
    }
}

Validator.isRequired = function(selector) {
    return {
        selector,
        test: function() {

        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector,
        test: function() {

        }
    }
}