# jQuery Disable Form on Submit

jQuery plug-in that can disable a from for a specific amount of time after a submit is attempted.
Great for preventing users from double clicking on the submit button and submitting the form twice.

[Live Demo](https://struttower.github.io/disable-form-on-submit/demo/demo.html)

### Usage

Basic usage with default options:
```javascript
$('form-selector').disableOnSubmit();
```



With Options:
```javascript
$('form-selector').disableOnSubmit({
    option: value
});
```


### Options


| Option | Description |
|:------:|-------------|
| duration | Time that the form is disabled in milliseconds. Default: 4000 |
| buttonTemplate | HTML that will replace the content of any submit buttons while the form is disabled. false will disable the replacement. Default: `'Please Wait...'` |
| submitInputText | Text that will replace the value of any submit inputs while the form is disabled. false will disable the replacement. Default: `'Please Wait...'`

##### Override the duration on a specific form

If your are using a selector that selects multiple forms the duration can be overriden on a specific form by adding a 
`data-disable-on-submit` attribute to the form:

```html
<form action="" method="" data-disable-on-submit="2000">
```


##### Disable on a specific form using data attributes
```html
<form action="" method="" data-disable-on-submit="false">
```
