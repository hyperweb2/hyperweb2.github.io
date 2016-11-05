/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

define([
    'hwc_js_lib_common_include'
], function ($) { 
    $.Object = $.Class({members: [
            {
                a: "public", n: "__destruct", v: function () {
                }
            },
            {
                a: ["public","static"], n: "clone", v: function (obj) {
                    return JSON.parse(JSON.stringify(obj));
                }
            }
        ]
    });
});



