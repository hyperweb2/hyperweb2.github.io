/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

'use strict';

define([
    'hwc_js_lib_browser_common_browser',
    'hwc_js_lib_browser_common_loader'
], function () {
    var $=hwc;

    /**
     * Alternatives for loading in PHP-style
     */
    Object.defineProperty($.Browser,"include",{
        configurable: false,
        writable: false,
        value: $.Browser.Loader.load
    });

    Object.defineProperty($.Browser,"require",{
        configurable: false,
        writable: false,
        value: $.Browser.Loader.load
    });

    Object.defineProperty($.Browser,"includeSync",{
        configurable: false,
        writable: false,
        value: $.Browser.Loader.loadSync
    });

    Object.defineProperty($.Browser,"requireSync",{
        configurable: false,
        writable: false,
        value: $.Browser.Loader.loadSync
    });
    
    return $;
});
