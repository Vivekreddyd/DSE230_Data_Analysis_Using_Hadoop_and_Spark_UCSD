define("bundles/programming/components/Status",["require","exports","module","react-with-addons","underscore","bundles/iconfont/Icon","js/lib/coursera.react-intl","i18n!nls/programming","css!bundles/programming/components/__styles__/GradeHistory.css"],function(require,exports,module){"use strict";function _defaults(e,o){for(var s=Object.getOwnPropertyNames(o),t=0;t<s.length;t++){var r=s[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(s,c,u){var r=!0;e:for(;r;){var t=s,a=c,i=u;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;s=n,c=a,u=i,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},e=require("react-with-addons"),_=require("underscore"),s=require("bundles/iconfont/Icon"),a=require("js/lib/coursera.react-intl"),t=require("i18n!nls/programming");require("css!bundles/programming/components/__styles__/GradeHistory.css");var r=a.FormattedMessage,i=function(a){function Status(){_classCallCheck(this,Status),o(Object.getPrototypeOf(Status.prototype),"constructor",this).apply(this,arguments)}return _inherits(Status,a),n(Status,[{key:"renderStatus",value:function renderStatus(){var n=this.props,i=n.learnerAssignment,g=n.itemProgress,p=n.itemGrade,u=n.verificationDisplay,l=n.submissionSummaries,b=this.props.itemMetadata.getTypeName();if(!l||!i)return null;var o=i.maxScore,c=i.passingScore,m=p.get("verifiedOutcome"),f=u&&u.shouldPromptForVerification(),v=m&&m.isPassed,a=l.find(function(e,t){return e.get("isBestSubmission")||e.get("isUsedForGrading")});if(a&&_(["Started","Completed"]).contains(g.get("progressState"))){var y=a.get("score")>=c;if(y){var d=function statusLabel(){return"ungradedProgramming"===b?e.createElement(r,{message:t("Passed")}):f?v?e.createElement(r,{message:t("Passed and verified")}):e.createElement(r,{message:t("Passed but not verified")}):e.createElement(r,{message:t("Passed")})};return e.createElement("div",null,e.createElement("span",{className:"is-used-for-grade-indicator"},e.createElement(s,{name:"check"})),d(),e.createElement("span",null," · "),e.createElement(r,{message:t("{score}/{maxScore} points"),score:a.get("score"),maxScore:o}))}return e.createElement("div",null,e.createElement("div",null,e.createElement(r,{message:t("Try Again")}),e.createElement("span",null," · "),e.createElement("span",null,a.get("score")+"/"+o," ",t("points earned"))),e.createElement("div",null,e.createElement(r,{message:t("You must earn {passingScore}/{maxScore} points to pass."),passingScore:c,maxScore:o})))}return e.createElement(r,{message:t("You have not submitted. You must earn {passingScore}/{maxScore} points to pass."),passingScore:c,maxScore:o})}},{key:"render",value:function render(){return e.createElement("div",{className:"rc-Status"},this.renderStatus())}}]),Status}(e.Component);module.exports=i});