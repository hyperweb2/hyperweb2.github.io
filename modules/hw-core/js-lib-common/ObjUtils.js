/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */
define([
    'hwc_js_lib_common_include'
], function ($) {
    $.ObjUtils = $.Class({members: [
            {
                a: ["public", "static"], n: "merge", v: function (obj1, obj2) {
                    var obj3 = {};
                    for (var attrname in obj1) {
                        obj3[attrname] = obj1[attrname];
                    }
                    for (var attrname in obj2) {
                        obj3[attrname] = obj2[attrname];
                    }
                    return obj3;
                }
            },
            {
                a: ["public","static"], n: "instanceFactory", v: function(cl,args) {
                    function dummy() {}
                    
                    dummy.prototype = cl.prototype;
                    var obj = new dummy();
                    cl.apply(obj, args);
                    return obj;
                }
            }

        ]}
    );
});



