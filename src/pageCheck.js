if (window["angular"] == null) {
    var url = window.location.protocol + '//' + window.location.host + '/#' + window.location.pathname + window.location.hash;
    window.location.replace(url);
    throw new Error("Abort!");
}