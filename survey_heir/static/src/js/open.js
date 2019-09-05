$(document).on('click', 'input', function(){
    $(":checked").siblings().addClass('inl')

})


//function isEmpty(){
//
//    var str = document.querySelector('.com');
////    var text = document.createTextNode('<span t-if="label.quizz_mark == 0" t-field="label.comments" class="text-danger"/>');
//    // str.appendChild(attr);
//    str.innerHTML = "<span>attr</span>";
////    alert('Hello');
//}


//odoo.define('survey.survey', function (require) {
//'use strict';
//
//var website = require('website.website');
//
//function isEmpty(attr){
//
//    var str = document.querySelector('.com');
////    var text = document.createTextNode('<span t-if="label.quizz_mark == 0" t-field="label.comments" class="text-danger"/>');
//    // str.appendChild(attr);
//    str.innerHTML = "<span>"attr"</span>";
////    alert('Hello');
//}
//});
// querySelector
// getElementById
// getElementsByClassName
// getElementsByName
// getElementsByTagName

//odoo.define('survey.simple_choice', function (require) {
//"use strict";
//
//var form_widget = require('web.form_widgets');
//var core = require('web.core');
//var _t = core._t;
//var QWeb = core.qweb;
//
//function isEmpty(){
//    alert('Hello');
//    return;
//   }
//
//form_widget.WidgetButton.include({
//    on_click: function() {
//         if(this.node.attrs.custom === "click"){
//
//            alert('Hello');
//
//            return;
//         }
//         this._super();
//    },
//});
//});



//local.MyWidget = instance.Widget.extend({
//    events: {
//        "click .num": "button_clicked",
//    },
//    button_clicked: function() {
//        alert('Hello');
//    }
//});


//local.MyWidget = instance.Widget.extend({
//    start: function() {
//        var self = this;
//        this.$(".btn").click(function() {
//            self.button_clicked();
//        });
//    },
//    button_clicked: function() {
//        alert('Hello');
//    },
//});


//alert('Hello')
//$('#numb').click(function(){
//        alert('Hello')
//    });


//local.HomePage = instance.Widget.extend({
//    start: function() {
//        var self = this;
//        var model = new instance.web.Model("oepetstore.message_of_the_day");
//        model.call("my_method", {context: new instance.web.CompoundContext()}).then(function(result) {
//            self.$el.append("<div>Hello " + result["hello"] + "</div>");
//            // will show "Hello world" to the user
//        });
//    },
//});


//odoo.define('custom_module.my_javascript', function (require){"use strict";
//    $('.num').click(function(){
//        alert('Hello')
//    });
//})

//odoo.define('custom_module.my_javascript', function (require) {
//
//
//    alert('Hello')
//
//    $('.btn[type="button"]').click(function(){
//        alert('Hello')
//    });
//}
