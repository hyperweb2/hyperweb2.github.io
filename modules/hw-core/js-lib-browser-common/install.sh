#!/usr/bin/env bash

PATH_MODULES="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../../"
[ ! -d $PATH_MODULES/uwd/joiner ] && git clone https://github.com/uw-dev/joiner $PATH_MODULES/uwd/joiner -b master
source "$PATH_MODULES/uwd/joiner/joiner.sh"

NAME="js-lib-browser-common"
VENDOR="hw-core"

MOD_PATH="$VENDOR/js-modules/"

#
# ADD DEPENDENCIES
#

Joiner:add_repo "https://github.com/HW-Core/js-lib-common"        "js-lib-common"      "master" "$VENDOR"
Joiner:add_repo "https://github.com/HW-Core/js-lib-filesystem"    "js-lib-filesystem"  "master" "$VENDOR"
Joiner:add_repo "https://github.com/HW-Core/js-lib-browser-gui"   "js-lib-browser-gui" "master" "$VENDOR"
Joiner:add_file "http://code.jquery.com/jquery-2.1.1.min.js" "$MOD_PATH/jquery/index.js"

if Joiner:with_dev ; then
    Joiner:add_repo "https://github.com/HW-Core/$NAME.git" "$NAME/tests" "tests" "$VENDOR"
    Joiner:add_repo "https://github.com/HW-Core/$NAME.git" "$NAME/doc" "gh-pages" "$VENDOR"
fi
