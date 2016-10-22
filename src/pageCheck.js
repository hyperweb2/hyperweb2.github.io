if (!window["angular"]) {
    function httpGet(theUrl,callback)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                callback(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", theUrl, false );
        xmlhttp.send();    
    }    
    
    httpGet("/index.html",function(data) { 
        var newDoc = document.open("text/html", "replace");
        newDoc.write(data);
        newDoc.close();
    });
}