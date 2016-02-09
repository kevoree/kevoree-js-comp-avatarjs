var AbstractComponent = require('kevoree-entities').AbstractComponent;

/**
 * Kevoree component
 * @type {AvatarJS}
 */
var AvatarJS = AbstractComponent.extend({
    toString: 'AvatarJS',

    /* This is an example of dictionary attribute that you can set for your entity */
    dic_expression: {
        optional: false,
        defaultValue: 'function retOne(a) { return 1; }'
    },

    dic_functionName: {
        optional: false,
        defaultValue: 'retOne'
    },

    in_eval: function(msg) {
        var expression = this.dictionary.getString("expression"),
            fctName = this.dictionary.getString("functionName"),
            res = eval(expression + "\n" + fctName + "(\"" + msg + "\")");
        this.out_result(JSON.stringify(res));
    },

    out_result: function(msg) {}

});

module.exports = AvatarJS;
