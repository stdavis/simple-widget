define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!app/templates/MyWidget.html'

], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    template
    ) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        constructor: function () {
            console.log('app/MyWidget:constructor', arguments);
        }
    });
});