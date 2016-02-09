var AbstractComponent = require('kevoree-entities').AbstractComponent,
    beautify = require('js-beautify').js_beautify;

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

    out_result: function(msg) {},

    uiController: function () {

        return ['$scope', '$sce', 'instance', function ($scope, $sce, instance) {
            var origin = instance.dictionary.getString('expression'),
                beauty = beautify(origin, { indent_size: 2 });
            $scope.template = $sce.trustAsHtml(beauty);
        }];
    }

});

module.exports = AvatarJS;
