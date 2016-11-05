/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

'use strict';

define([
    "hwc_js_kernel_loader",
    'hwc_js_modules_jquery',
    "hwc_js_lib_common_index"
], function ($,jq) {
    $.Browser = $.Class({});
    
    jq = jq || jQuery;

    // static initialization
    $.Browser.JQ = jq.noConflict(true);

    return $.Browser;
}); 
