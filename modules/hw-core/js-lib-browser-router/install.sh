#!/usr/bin/env bash

PATH_MODULES="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../../"
[ ! -d $PATH_MODULES/uwd/joiner ] && git clone https://github.com/uw-dev/joiner $PATH_MODULES/uwd/joiner -b master
source "$PATH_MODULES/uwd/joiner/joiner.sh"

NAME="js-lib-browser-router"
VENDOR="hw-core"

#
# ADD DEPENDENCIES
#

Joiner:add_repo "https://github.com/HW-Core/js-lib-browser-common.git" "js-lib-browser-common" "master" "$VENDOR"
Joiner:add_repo "https://github.com/HW-Core/js-lib-browser-event.git" "js-lib-browser-event" "master" "$VENDOR"
Joiner:add_repo "https://github.com/HW-Core/js-lib-browser-uri.git" "js-lib-browser-uri" "master" "$VENDOR"

if Joiner:with_dev ; then
    Joiner:add_repo "https://github.com/HW-Core/$NAME.git" "$NAME/tests" "tests" "$VENDOR"
    Joiner:add_repo "https://github.com/HW-Core/$NAME.git" "$NAME/doc" "gh-pages" "$VENDOR"
fi
