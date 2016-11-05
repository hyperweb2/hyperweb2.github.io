#!/usr/bin/env bash

PATH_MODULES="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../../"
[ ! -d $PATH_MODULES/uwd/joiner ] && git clone https://github.com/uw-dev/joiner $PATH_MODULES/uwd/joiner -b master
source "$PATH_MODULES/uwd/joiner/joiner.sh"


#
# ADD DEPENDENCIES
#

mod_path="hw-core/js-modules/"

Joiner:add_file "http://requirejs.org/docs/release/2.3.2/r.js" $mod_path"/requirejs/r/index.js"
Joiner:add_file "http://requirejs.org/docs/release/2.3.2/minified/require.js" $mod_path"/requirejs/requirejs/index.js"
Joiner:add_file "https://raw.githubusercontent.com/components/rsvp.js/84735a76f5e93320bb012015e8c61e8a403e1b5e/rsvp.min.js" $mod_path"/rsvp/index.js"
Joiner:add_file "https://raw.githubusercontent.com/Benvie/WeakMap/2693ff73a1650dc7b8beeeb6ce0eba79b53a66af/weakmap.js" $mod_path"/weakmap/index.js"

if Joiner:with_dev ; then
    Joiner:add_repo "https://github.com/mochajs/mocha" "mocha" "1.20.1" $mod_path
    
    Joiner:add_file "http://sinonjs.org/releases/sinon-1.10.3.js" $mod_path"/sinon/index.js"
    Joiner:add_file "http://chaijs.com/chai.js" $mod_path"/chai/index.js"
fi


