/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

define([
    'hwc_js_lib_common_include'
], function ($) {
    // it can be used as trait
    $.Singleton = $.final.class([
        $.protected.static({
            instance: null
        }),
        $.public.static({
            /**
             * helper method to create a singleton for a class
             */
            I: function () {
                var self=this.__caller;
                if (!self.instance) {
                    self.instance = $.ObjUtils.instanceFactory(self, arguments);
                }

                return self.instance;
            }
        })
    ]);
    
    return $.Singleton;
});



