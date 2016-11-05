__global= typeof window === 'object' ? window : global;
var hwc_conf=__global.hwc_conf={};

/**
 * CONFIGURE IT
 */

hwc_conf.path_core = "modules/hw-core/";

/**
 * STOP CONFIGURATION
 */


hwc_conf.paths={};
hwc_conf.paths.hwc_js_kernel              = hwc_conf.path_core+"js-kernel/index";
hwc_conf.paths.hwc_js_lib_class_index     = hwc_conf.path_core+"js-lib-class/index";
hwc_conf.paths.hwc_js_lib_class_include   = hwc_conf.path_core+"js-lib-class/include";
hwc_conf.paths.hwc_js_lib_class_class     = hwc_conf.path_core+"js-lib-class/Class";
hwc_conf.paths.hwc_js_lib_class_fsyntax   = hwc_conf.path_core+"js-lib-class/fSyntax";
hwc_conf.paths.hwc_js_lib_common_index          = hwc_conf.path_core+"js-lib-common/index";
hwc_conf.paths.hwc_js_lib_common_include          = hwc_conf.path_core+"js-lib-common/include";
hwc_conf.paths.hwc_js_lib_common_array          = hwc_conf.path_core+"js-lib-common/Array";
hwc_conf.paths.hwc_js_lib_common_async          = hwc_conf.path_core+"js-lib-common/Async";
hwc_conf.paths.hwc_js_lib_common_objutils          = hwc_conf.path_core+"js-lib-common/ObjUtils";
hwc_conf.paths.hwc_js_lib_common_object          = hwc_conf.path_core+"js-lib-common/Object";
hwc_conf.paths.hwc_js_lib_common_singleton          = hwc_conf.path_core+"js-lib-common/Singleton";
hwc_conf.paths.hwc_js_lib_common_string          = hwc_conf.path_core+"js-lib-common/String";
hwc_conf.paths.hwc_js_lib_common_var          = hwc_conf.path_core+"js-lib-common/Var";
hwc_conf.paths.hwc_js_lib_filesystem_index          = hwc_conf.path_core+"js-lib-filesystem/index";
hwc_conf.paths.hwc_js_lib_filesystem_include          = hwc_conf.path_core+"js-lib-filesystem/include"
hwc_conf.paths.hwc_js_lib_filesystem_path          = hwc_conf.path_core+"js-lib-filesystem/Path"
hwc_conf.paths.hwc_js_lib_browser_common_index  = hwc_conf.path_core+"js-lib-browser-common/index";
hwc_conf.paths.hwc_js_lib_browser_common_browser = hwc_conf.path_core+"js-lib-browser-common/Browser";
hwc_conf.paths.hwc_js_lib_browser_common_loader  = hwc_conf.path_core+"js-lib-browser-common/Loader";
hwc_conf.paths.hwc_js_modules_path        = hwc_conf.path_core+"js-modules/";
hwc_conf.paths.hwc_js_modules_weakmap     = hwc_conf.paths.hwc_js_modules_path + "weakmap/index";
hwc_conf.paths.hwc_js_modules_rsvp        = hwc_conf.paths.hwc_js_modules_path + "rsvp/index";
hwc_conf.paths.hwc_js_modules_jquery      = hwc_conf.paths.hwc_js_modules_path + "jquery/index";
hwc_conf.paths.hwc_js_modules_requirenode      = hwc_conf.paths.hwc_js_modules_path + "requirejs/r/index";
hwc_conf.paths.hwc_js_modules_requirejs      = hwc_conf.paths.hwc_js_modules_path + "requirejs/requirejs/index";

if (typeof module !== 'undefined' && module.exports) {
    // for nodejs environments
    module.exports=hwc_conf;
}