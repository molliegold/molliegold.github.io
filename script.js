/*!
 * fix IOS back button javascript issue
 */

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

window.onpageshow = function(event) {
    if (event.persisted) {
        if(detectmob() == true)
        {
            window.location.reload();
        }
    }
};


/*!
 * jsModal - A pure JavaScript modal dialog engine v1.0d
 * http://jsmodal.com/
 *
 * Author: Henry Rune Tang Kai <henry@henrys.se>
 *
 * (c) Copyright 2013 Henry Tang Kai.
 *
 * License: http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2013-7-11
 */
var Modal=function(){var c={},a={},d=document.createElement("div"),b=document.createElement("div"),f=document.createElement("div"),h=document.createElement("div"),k=document.createElement("div"),l,p;c.open=function(e){a.width=e.width||"auto";a.height=e.height||"auto";a.lock=e.lock||!1;a.hideClose=e.hideClose||!1;a.draggable=e.draggable||!1;a.closeAfter=e.closeAfter||0;a.closeCallback=e.closeCallback||!1;a.openCallback=e.openCallback||!1;a.hideOverlay=e.hideOverlay||!1;l=function(){c.center({})};e.content&& !e.ajaxContent?h.innerHTML=e.content:e.ajaxContent&&!e.content?(b.className="modal-loading",c.ajax(e.ajaxContent,function(a){h.innerHTML=a})):h.innerHTML="";b.style.width=a.width;b.style.height=a.height;c.center({});if(a.lock||a.hideClose)k.style.visibility="hidden";a.hideOverlay||(d.style.visibility="visible");b.style.visibility="visible";document.onkeypress=function(b){27===b.keyCode&&!0!==a.lock&&c.close()};k.onclick=function(){if(a.hideClose)return!1;c.close()};d.onclick=function(){if(a.lock)return!1; c.close()};window.addEventListener?window.addEventListener("resize",l,!1):window.attachEvent&&window.attachEvent("onresize",l);a.draggable?(f.style.cursor="move",f.onmousedown=function(a){c.drag(a);return!1}):f.onmousedown=function(){return!1};0<a.closeAfter&&(p=window.setTimeout(function(){c.close()},1E3*a.closeAfter));a.openCallback&&a.openCallback()};c.drag=function(a){var c=void 0!==window.event?window.event.clientX:a.clientX,m=void 0!==window.event?window.event.clientY:a.clientY,g=c-b.offsetLeft, d=m-b.offsetTop;document.onmousemove=function(a){c=void 0!==window.event?window.event.clientX:a.clientX;m=void 0!==window.event?window.event.clientY:a.clientY;b.style.left=0<c-g?c-g+"px":0;b.style.top=0<m-d?m-d+"px":0;document.onmouseup=function(){window.document.onmousemove=null}}};c.ajax=function(a,c){var d,g=!1,f=[function(){return new window.XMLHttpRequest},function(){return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")},function(){return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new window.ActiveXObject("Msxml2.XMLHTTP")}]; for(d=0;d<f.length;d+=1){try{g=f[d]()}catch(h){}if(!1!==g)break}g.open("GET",a,!0);g.onreadystatechange=function(){4===g.readyState&&(c(g.responseText),b.removeAttribute("class"))};g.send(null)};c.close=function(){h.innerHTML="";d.setAttribute("style","");d.style.cssText="";d.style.visibility="hidden";b.setAttribute("style","");b.style.cssText="";b.style.visibility="hidden";f.style.cursor="default";k.setAttribute("style","");k.style.cssText="";p&&window.clearTimeout(p);a.closeCallback&&a.closeCallback(); window.removeEventListener?window.removeEventListener("resize",l,!1):window.detachEvent&&window.detachEvent("onresize",l)};c.center=function(a){var c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),f=Math.max(b.clientWidth,b.offsetWidth),g=Math.max(b.clientHeight,b.offsetHeight),h=0,k=0,l=0,n=0;"number"===typeof window.innerWidth?(h=window.innerWidth,k=window.innerHeight):document.documentElement&&document.documentElement.clientWidth&&(h=document.documentElement.clientWidth, k=document.documentElement.clientHeight);"number"===typeof window.pageYOffset?(n=window.pageYOffset,l=window.pageXOffset):document.body&&document.body.scrollLeft?(n=document.body.scrollTop,l=document.body.scrollLeft):document.documentElement&&document.documentElement.scrollLeft&&(n=document.documentElement.scrollTop,l=document.documentElement.scrollLeft);a.horizontalOnly||(b.style.top=n+k/2-g/2+"px");b.style.left=l+h/2-f/2+"px";d.style.height=c+"px";d.style.width="100%"};d.setAttribute("id","modal-overlay"); b.setAttribute("id","modal-container");f.setAttribute("id","modal-header");h.setAttribute("id","modal-content");k.setAttribute("id","modal-close");f.appendChild(k);b.appendChild(f);b.appendChild(h);d.style.visibility="hidden";b.style.visibility="hidden";window.addEventListener?window.addEventListener("load",function(){document.body.appendChild(d);document.body.appendChild(b)},!1):window.attachEvent&&window.attachEvent("onload",function(){document.body.appendChild(d);document.body.appendChild(b)}); return c}();
/*!
 * END PURE JAVASCRIPT MODAL
 */

(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);

/*!
 * END Dependancies
 */


var css = "body{ visibility:hidden; }";
addcssload(css);
function addcss(css){
    var head = document.getElementsByTagName('head')[0];
	
	
	
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
	head.appendChild(s);
	
}

function addcssload(css){
    var head = document.getElementsByTagName('head')[0];
	var mainhtml = document.getElementsByTagName('html')[0];
	
	
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
	if (typeof mainhtml !== 'undefined') {
		if(!testhasClass(mainhtml,"w-mod-js"))
		{
			head.appendChild(s);
		}
	}
	else
	{
		head.appendChild(s);
	}
}

function testhasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var userobj = null;



var gopaywallcpage = window.location.href;
function getPathFromUrl(url) {
    return url.split(/[?#]/)[0];
}
gopaywallcpage = getPathFromUrl(gopaywallcpage);
if(gopaywallcpage.charAt(gopaywallcpage.length-1) == "/"){ gopaywallcpage = gopaywallcpage.substr(0, gopaywallcpage.length - 1);}

docReady(gopaywallcheckloginload);
function Xhr(){
    try{return new XMLHttpRequest();}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP");}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP");}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}return null;
}
function inIframe (ele,cls) {
	
	var isInIFrame = (window.location != window.parent.location);
	//alert(isInIFrame);
	return isInIFrame;
	
}




function gopaywallcheckloginload(){
    var xmlhttp = new Xhr();
    var xdomain = false;
    if (window.XDomainRequest)
    {
        var xmlhttp = new window.XDomainRequest();
        //xdomain =true;
    }
    if(xdomain == false)
    {

		
        xmlhttp.open("GET","//testwebsite.gopaywall.com/api/index.php?action=checklogin&page="+gopaywallcpage);
        //xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        xmlhttp.withCredentials = true;
        xmlhttp.onreadystatechange = function(e) {
            if (this.readyState==1 || this.readyState==0 ) { return }
            else if (this.readyState == 4) {

                if(this.status == 200){
                						var loginelementfooterfind = document.getElementById("gopaywall_footerlink");
						
						if(loginelementfooterfind == null || loginelementfooterfind == "undefined")
						{
						var d = document.createElement("div");
                        d.id = "gopaywall_footerlink";
                        if(inIframe(document.getElementsByTagName("body")[0],"sqs-edit-mode") === false){d.innerHTML = "<div id=\"gopaywall_loginbutton\"><a class=\"gopaywall_loginlink\" href=\"javascript:gopaywall_showlogin()\">Login / Register</a></div>"; document.getElementsByTagName("body")[0].appendChild(d);}
                        						}
						
                    obj = JSON.parse(this.responseText);
                    userobj = obj;

                    if(obj.code == '0')
                    {
						
                        var css = "body{ visibility:hidden !important; }";
						
                        addcss(css);
                        if(obj.redirect == "curtain")
                        {
                            gopaywall_showloginnoclose();

                        }
                        else
                        {
                            window.location = obj.redirect;
                        }
                    }
                    else
                    {
						if(document.getElementsByTagName("body")[0] != null)
							document.getElementsByTagName("body")[0].style.visibility = "visible";

                    }

                    if(parseFloat(obj.userid) > -1)
                    {
                        var loginlinkelement = document.getElementById("gopaywall_loginlink");

                        if(typeof(loginlinkelement) != 'undefined' && loginlinkelement != null)
                        {
                            document.getElementById("gopaywall_loginlink").innerHTML = "My Account";
                        }
                        var slides = document.getElementsByClassName("gopaywall_loginlink");
                        for(var i = 0; i < slides.length; i++)
                        {
                            slides.item(i).innerHTML = "My Account";
                        }
                        var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedout-text'), i;

                        for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                            GoPaywallappLoginBanners[i].style.display = 'none';
                        }
                    }
                    else
                    {
                        var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedin-text'), i;

                        for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                            GoPaywallappLoginBanners[i].style.display = 'none';
                        }
                    }

                    if (typeof gopaywall_loaded == 'function') {
                        gopaywall_loaded();
                    }
                }
            }

        }

        xmlhttp.onload = function() {
			
            				var loginelementfooterfind = document.getElementById("gopaywall_footerlink");
						
				if(loginelementfooterfind == null || loginelementfooterfind == "undefined")
				{
				var d = document.createElement("div");
                d.id = "gopaywall_footerlink";
                if(inIframe(document.getElementsByTagName("body")[0],"sqs-edit-mode") === false){d.innerHTML = "<div id=\"gopaywall_loginbutton\"><a class=\"gopaywall_loginlink\" href=\"javascript:gopaywall_showlogin()\">Login / Register</a></div>"; document.getElementsByTagName("body")[0].appendChild(d);}
                        				}
				
            obj = JSON.parse(this.responseText);
            userobj = obj;

            if(obj.code == '0')
            {
                var css = "body{ visibility:hidden !important; }";
                addcss(css);
                if(obj.redirect == "curtain")
                {
                    gopaywall_showloginnoclose();

                }
                else
                {
                    window.location = obj.redirect;
                }
            }
            else
            {
				if(document.getElementsByTagName("body")[0] != null)
					document.getElementsByTagName("body")[0].style.visibility = "visible";

            }

            if(parseFloat(obj.userid) > -1)
            {
                var loginlinkelement = document.getElementById("gopaywall_loginlink");

                if(typeof(loginlinkelement) != 'undefined' && loginlinkelement != null)
                {
                    document.getElementById("gopaywall_loginlink").innerHTML = "My Account";
                }
                var slides = document.getElementsByClassName("gopaywall_loginlink");
                for(var i = 0; i < slides.length; i++)
                {
                    slides.item(i).innerHTML = "My Account";
                }
                var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedout-text'), i;

                for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                    GoPaywallappLoginBanners[i].style.display = 'none';
                }
            }
            else
            {
                var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedin-text'), i;

                for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                    GoPaywallappLoginBanners[i].style.display = 'none';
                }
            }

            if (typeof gopaywall_loaded == 'function') {
                gopaywall_loaded();
            }
        
        };
        setTimeout(function () {
            xmlhttp.send();
        }, 0);
    }
    else
    {

        //handle old IE browsers
        if (typeof jQuery != 'undefined') {
            (function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return $}var n=/^(https?:)?\/\//i;var o=/^get|post$/i;var p=new RegExp('^(\/\/|'+location.protocol+')','i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}});return $}));

            jQuery.ajax({
                url: "//testwebsite.gopaywall.com/api/index.php",
                data: {action:"checklogin",page:gopaywallcpage},
                contentType: 'text/html',
                type: 'POST',
                dataType: 'json',
                crossDomain:true,
                async: false,
                success: function (data) {


                    obj = JSON.parse(data);
                    userobj = obj;

                    if(obj.code == '0')
                    {
                        var css = "body{ visibility:hidden !important; }";
                        addcss(css);
                        if(obj.redirect == "curtain")
                        {
                            gopaywall_showloginnoclose();

                        }
                        else
                        {
                            window.location = obj.redirect;
                        }
                    }
                    else
                    {
						if(document.getElementsByTagName("body")[0] != null)
							document.getElementsByTagName("body")[0].style.visibility = "visible";

                    }

                    if(parseFloat(obj.userid) > -1)
                    {
                        var loginlinkelement = document.getElementById("gopaywall_loginlink");

                        if(typeof(loginlinkelement) != 'undefined' && loginlinkelement != null)
                        {
                            document.getElementById("gopaywall_loginlink").innerHTML = "My Account";
                        }
                        var slides = document.getElementsByClassName("gopaywall_loginlink");
                        for(var i = 0; i < slides.length; i++)
                        {
                            slides.item(i).innerHTML = "My Account";
                        }
                        var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedout-text'), i;

                        for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                            GoPaywallappLoginBanners[i].style.display = 'none';
                        }
                    }
                    else
                    {
                        var GoPaywallappLoginBanners = document.getElementsByClassName('gopaywall-loggedin-text'), i;

                        for (var i = 0; i < GoPaywallappLoginBanners.length; i ++) {
                            GoPaywallappLoginBanners[i].style.display = 'none';
                        }
                    }

                    if (typeof gopaywall_loaded == 'function') {
                        gopaywall_loaded();
                    }
                }
            });
        }

    }

}


function gopaywallreloaduserobject(){
    var xmlhttp = new Xhr();
    xmlhttp.open("POST","//testwebsite.gopaywall.com/api/index.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.withCredentials = true ;
    xmlhttp.onreadystatechange = function(e) {
        if (this.readyState == 4 && this.status == 200) {
			
            obj = JSON.parse(this.responseText);
            userobj = obj;
            gopaywalluserobnull = false;
            if(userobj != null)
            {
                if(userobj.userid > -1)
                {
                    modalheight = '90%';
                    modalwidth = '90%';
                }

                if(parseFloat(userobj.userid) > -1)
                {
                    Modal.open({
                        content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_loginframe" scrolling="auto" src="https://testwebsite.gopaywall.com/login.php?remotesite=true&loginframe=true"></iframe>',
                        draggable: false,
                        width: modalwidth,
                        height: modalheight,
                        openCallback: function () {
                            setTimeout(centerthemodal, 150);
                        }
                    });
                }
                else
                {
                    gopaywalluserobnull = true;
                }

            }
            else
            {
                gopaywalluserobnull = true;
            }

            if(gopaywalluserobnull == true)
            {
                var loginhtml = "";

                var xmlhttp2 = new Xhr();   // new HttpRequest instance
                xmlhttp2.open("GET","//testwebsite.gopaywall.com/loginajax.php?remotesite=true",true);
                xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp2.withCredentials = true ;
                xmlhttp2.onreadystatechange = function(e) {
                    if (this.readyState == 4 && this.status == 200) {
                                            loginhtml = this.responseText;
                        Modal.open({
                            content: loginhtml,
                            draggable: false,
                            width: modalwidth,
                            height: modalheight,
                            openCallback: function () {
                                setTimeout(centerthemodal, 150);

                            }
                        });
                    }

                }


                xmlhttp2.send();

            }


        }

    }
    xmlhttp.send("action=checklogin&page="+gopaywallcpage);
}
function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
        if(allElements[i].id == elementID)
            elementCollection.push(allElements[i]);

    }
    return elementCollection;
}
//docReady(addsquarespacenav);
var theKid;
function addsquarespacenav(){
    mainNavigation = getElementsById("mainNavigation");
		
	mobileNavigation = document.getElementById("mobileNavigation");
    theKid = document.createElement("div");
    theKid.href = "";
	
    theKid.className = "index gopaywallloginchildren";
		    theKid.innerHTML = '<a href="javascript:gopaywall_showlogin()" class="" id="gopaywall_loginlinknav">Login</a>';
		
		
	theKid2 = document.createElement("div");
    theKid2.href = "";
    theKid2.className = "index gopaywallloginchildren";
    theKid2.innerHTML = '<a href="javascript:gopaywall_showlogin()" class="" id="gopaywall_loginlinknav">Login</a>';
    if(userobj != null)
    {
        if(parseFloat(userobj.userid) > -1)
        {
            theKid.innerHTML = '<a href="javascript:gopaywall_showlogin()" class="" id="gopaywall_loginlinknav">My Account</a>';
			theKid2.innerHTML = '<a href="javascript:gopaywall_showlogin()" class="" id="gopaywall_loginlinknav">My Account</a>';
        }
    }
    else
    {
        myVar = setTimeout(setnavfunction, 700);
    }
    if(mainNavigation != null)
    {
		//console.log(mainNavigation);
		for (i = 0; i < mainNavigation.length; i++) { 
			var cln = theKid.cloneNode(true);
			mainNavigation[i].insertBefore(cln, mainNavigation[i].lastChild);
		}
		        
		//mainNavigation.appendChild(theKid);
    }
	if(mobileNavigation != null){
		mobileNavigation.insertBefore(theKid2, mobileNavigation.lastChild);
	}
    //mainNavigation.appendChild(theKid);

}

function setnavfunction(){
    if(userobj != null)
    {
        if(parseFloat(userobj.userid) > -1)
        {
            //theKid.innerHTML = '<a href="javascript:gopaywall_showlogin()" id="gopaywall_loginlinknav">My Account</a>';
			//console.log('addagain');
						var loginlinksections = document.getElementsByClassName("gopaywallloginchildren");
			for(var i = 0; i < loginlinksections.length; i++)
			{
				loginlinksections[i].innerHTML = '<a href="javascript:gopaywall_showlogin()" class="" id="gopaywall_loginlinknav">My Account</a>';
			}
        }
    }
    else
    {
        myVar = setTimeout(setnavfunction, 500);
    }
}


function gopaywall_passwordprotect(redirect){
	try{
    document.getElementsByTagName("body")[0].style.visibility = "hidden";
	}
	catch(err){
	
	}
    redirect = redirect || "https://www.molliegold.github.io";
    if(userobj != null)
    {
        if(parseFloat(userobj.userid) > -1)
        {
			if(document.getElementsByTagName("body")[0] != null)
				document.getElementsByTagName("body")[0].style.visibility = "visible";
        }
        else
        {
            var css = "body{ visibility:hidden !important; }";
            addcss(css);
            //window.location = redirect;
			if(redirect == "curtain")
            {
                gopaywall_showloginnoclose();

            }
            else
            {
               window.location = redirect;
            }
        }
    }
    else
    {
        myVar = setTimeout(function() {gopaywall_passwordprotect(redirect)}, 250);
    }
}

function gopaywall_directorypasswordprotect(directoryurl,redirect){
	if(document.getElementsByTagName("body")[0] != null)
		document.getElementsByTagName("body")[0].style.visibility = "hidden";
    redirect = redirect || "https://www.molliegold.github.io";
	
    if(gopaywallcpage.indexOf(directoryurl) > -1)
    {
        if(userobj != null)
        {
            if(parseFloat(userobj.userid) > -1)
            {
				if(document.getElementsByTagName("body")[0] != null)
					document.getElementsByTagName("body")[0].style.visibility = "visible";
            }
            else
            {
                var css = "body{ visibility:hidden !important; }";
                addcss(css);
                //window.location = redirect;
				if(redirect == "curtain")
                {
                    gopaywall_showloginnoclose();

                }
                else
                {
                   window.location = redirect;
                }
            }
        }
        else
        {
            myVar = setTimeout(function() {gopaywall_directorypasswordprotect(directoryurl,redirect)}, 250);
        }
    }
}

function gopaywall_directorymemberprotect(directoryurl,membership,redirect){
    membership = membership || '';
    redirect = redirect || "https://www.molliegold.github.io";
    if(gopaywallcpage.indexOf(directoryurl) > -1)
    {
        if(userobj != null)
        {
            var memberarray = membership.split(',');
            if(parseFloat(userobj.userid) > -1)
            {
                if(memberarray.indexOf(userobj.membership_id) > -1)
                {

                }
                else
                {
                    var css = "body{ visibility:hidden !important; }";
                    addcss(css);
                    //window.location = redirect;
					
                    if(redirect == "curtain")
                    {
                        gopaywall_showloginnoclose();

                    }
                    else
                    {
                       window.location = redirect;
                    }
                }
            }
            else
            {
                var css = "body{ visibility:hidden !important; }";
                addcss(css);
                //window.location = redirect;
				if(redirect == "curtain")
                {
                    gopaywall_showloginnoclose();

                }
                else
                {
                   window.location = redirect;
                }
            }
        }
        else
        {
            myVar = setTimeout(function() {gopaywall_directorymemberprotect(directoryurl,membership,redirect)}, 350);
        }
    }
}

function gopaywall_memberprotect(membership,redirect){
    membership = membership || '';
    redirect = redirect || "https://www.molliegold.github.io";

    if(userobj != null)
    {
        var memberarray = membership.split(',');
        if(parseFloat(userobj.userid) > -1)
        {
            if(memberarray.indexOf(userobj.membership_id) > -1)
            {

            }
            else
            {
                var css = "body{ visibility:hidden !important; }";
                addcss(css);
                window.location = redirect;
            }
        }
        else
        {
            var css = "body{ visibility:hidden !important; }";
            addcss(css);
            window.location = redirect;
        }
    }
    else
    {
        myVar = setTimeout(function() {gopaywall_memberprotect(membership,redirect)}, 350);
    }
}






function gopaywall_showregister(){

    var modalheight = '400px';
    var modalwidth = '400px';

    modalheight = '90%';
    modalwidth = '90%';
	var modalelement = document.getElementById("modal-overlay");
	
    Modal.open({
        content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_registerframe" scrolling="auto" src="https://testwebsite.gopaywall.com/register.php?remotesite=true"></iframe>',
        draggable: false,
        width: modalwidth,
        height: modalheight,
        openCallback: function () {
            //document.getElementById("gopaywall_registerframe").style.width = (document.getElementById("gopaywall_registerframe").offsetWidth + 0)+"px";
            setTimeout(centerthemodal, 150);
			if(modalelement.className == "donotclose")
			{
				//document.getElementById("modal-overlay").setAttribute("onclick", null);
				document.getElementById("modal-overlay").onclick = function() { 
						return false;
				};
				//document.getElementById("modal-overlay").removeEventListener('click', myFunction, false);
			}
        }
    });

}

function gopaywall_showregisterplan(plan){

    var modalheight = '400px';
    var modalwidth = '400px';

    modalheight = '90%';
    modalwidth = '90%';
    Modal.open({
        content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_registerframe" scrolling="auto" src="https://testwebsite.gopaywall.com/registerplan.php?remotesite=true&mid='+plan+'"></iframe>',
        draggable: false,
        width: modalwidth,
        height: modalheight,
        openCallback: function () {
            //document.getElementById("gopaywall_registerframe").style.width = (document.getElementById("gopaywall_registerframe").offsetWidth + 0)+"px";
            setTimeout(centerthemodal, 150);
        }
    });

}

function gopaywall_logout(){
    var xmlhttp = new Xhr();   // new HttpRequest instance
    xmlhttp.open("POST","https://testwebsite.gopaywall.com/api/index.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.withCredentials = true ;
    xmlhttp.onreadystatechange = function(e) {
        if (this.readyState == 4 && this.status == 200) {

            obj = JSON.parse(this.responseText);
            userobj = obj;
            if(obj.code == '0')
            {
                var css = "body{ visibility:hidden !important; }";
                addcss(css);
                window.location = obj.redirect;
            }
            else
            {
				if(document.getElementsByTagName("body")[0] != null)
					document.getElementsByTagName("body")[0].style.visibility = "visible";

            }

            if(parseFloat(obj.userid) > -1)
            {
                document.getElementById("gopaywall_loginlink").innerHTML = "My Account";
            }
        }

    }
    xmlhttp.send("action=logout&page="+window.location.href);
}

function gopaywall_alwaysshowlogin(forceuserobjcheck){
    var modalheight = '400px';
    var modalwidth = '400px';
    var loginhtml = "";

    var xmlhttp2 = new Xhr();   // new HttpRequest instance
    xmlhttp2.open("GET","https://testwebsite.gopaywall.com/loginajax.php?remotesite=true&alwayslogin=true",true);
    xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp2.withCredentials = true ;
    xmlhttp2.onreadystatechange = function(e) {
        if (this.readyState == 4 && this.status == 200) {

            loginhtml = this.responseText;
            Modal.open({
                content: loginhtml,
                draggable: false,
                width: modalwidth,
                height: modalheight,
                openCallback: function () {
                    setTimeout(centerthemodal, 150);

                }
            });
        }

    }


    xmlhttp2.send();
}

function gopaywall_showloginnoclose(forceuserobjcheck){
    var modalheight = '400px';
    var modalwidth = '400px';
    var gopaywalluserobnull = false;
    if(forceuserobjcheck != true)
    {
        if(userobj != null)
        {
            if(userobj.userid > -1)
            {
                modalheight = '90%';
                modalwidth = '90%';
            }

            if(parseFloat(userobj.userid) > -1)
            {
                Modal.open({
                    content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_accountframe" scrolling="auto" src="https://testwebsite.gopaywall.com/account.php"></iframe>',
                    draggable: false,
                    width: modalwidth,
                    height: modalheight,
                    openCallback: function () {

                        addmodalmessagenoaccess();
                        var registerelementloginframe = document.getElementById("gopaywall_loginframe");
                        if(typeof(registerelementloginframe) != 'undefined' && registerelementloginframe != null)
                        {
                            registerelementloginframe.style.width = (registerelementloginframe.offsetWidth + 0)+"px";
                        }
                    }
                });
            }
            else
            {
                gopaywalluserobnull = true;
            }

        }
        else
        {
            gopaywalluserobnull = true;
        }

        if(gopaywalluserobnull == true)
        {
            var loginhtml = "";

            var xmlhttp2 = new Xhr();   // new HttpRequest instance
            xmlhttp2.open("GET","https://testwebsite.gopaywall.com/loginajax.php?remotesite=true",true);
            xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp2.withCredentials = true ;
            xmlhttp2.onreadystatechange = function(e) {
                if (this.readyState == 4 && this.status == 200) {

                    loginhtml = this.responseText;
                    Modal.open({
                        content: loginhtml,
                        draggable: false,
                        width: modalwidth,
                        height: modalheight,
                        openCallback: function () {

                            setTimeout(centerthemodal, 150);
                            addmodalmessagelogin();


                        }
                    });
                }

            }


            xmlhttp2.send();

        }
    }
    else
    {
        gopaywallreloaduserobject();
    }


}
function gopaywall_showlogin(forceuserobjcheck){
    var modalheight = '400px';
    var modalwidth = '400px';
    var gopaywalluserobnull = false;
    if(forceuserobjcheck != true)
    {
        if(userobj != null)
        {
            if(userobj.userid > -1)
            {
                modalheight = '90%';
                modalwidth = '90%';
            }

            if(parseFloat(userobj.userid) > -1)
            {
                Modal.open({
                    content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_accountframe" scrolling="auto" src="https://testwebsite.gopaywall.com/account.php"></iframe>',
                    draggable: false,
                    width: modalwidth,
                    height: modalheight,
                    openCallback: function () {
                        var registerelementloginframe = document.getElementById("gopaywall_loginframe");
                        if(typeof(registerelementloginframe) != 'undefined' && registerelementloginframe != null)
                        {
                            registerelementloginframe.style.width = (registerelementloginframe.offsetWidth + 0)+"px";
                        }
                    }
                });
            }
            else
            {
                gopaywalluserobnull = true;
            }

        }
        else
        {
            gopaywalluserobnull = true;
        }

        if(gopaywalluserobnull == true)
        {
            var loginhtml = "";

            var xmlhttp2 = new Xhr();   // new HttpRequest instance
            xmlhttp2.open("GET","https://testwebsite.gopaywall.com/loginajax.php?remotesite=true",true);
            xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp2.withCredentials = true ;
            xmlhttp2.onreadystatechange = function(e) {
                if (this.readyState == 4 && this.status == 200) {
                                    loginhtml = this.responseText;
                    Modal.open({
                        content: loginhtml,
                        draggable: false,
                        width: modalwidth,
                        height: modalheight,
                        openCallback: function () {
                            setTimeout(centerthemodal, 150);

                        }
                    });
                }

            }


            xmlhttp2.send();

        }
    }
    else
    {
        gopaywallreloaduserobject();
    }


}


function gopaywall_showaccount(forceuserobjcheck){
    var modalheight = '500px';
    var modalwidth = '500px';
    var gopaywalluserobnull = false;
    if(forceuserobjcheck != true)
    {
        if(userobj != null)
        {
            if(userobj.userid > -1)
            {
                modalheight = '90%';
                modalwidth = '90%';
            }

            if(parseFloat(userobj.userid) > -1)
            {
                Modal.open({
                    content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_accountframe" scrolling="auto" src="https://testwebsite.gopaywall.com/login.php?remotesite=true&loginframe=true"></iframe>',
                    draggable: false,
                    width: modalwidth,
                    height: modalheight,
                    openCallback: function () {
                        var registerelementloginframe = document.getElementById("gopaywall_loginframe");
                        if(typeof(registerelementloginframe) != 'undefined' && registerelementloginframe != null)
                        {
                            registerelementloginframe.style.width = (registerelementloginframe.offsetWidth + 0)+"px";
                        }
                    }
                });
            }
            else
            {
                gopaywalluserobnull = true;
            }

        }
        else
        {
            gopaywalluserobnull = true;
        }

        if(gopaywalluserobnull == true)
        {
            Modal.open({
                    content: '<iframe frameBorder="0" width="100%" height="100%" id="gopaywall_loginframe" scrolling="auto" src="https://testwebsite.gopaywall.com/login.php?remotesite=true&loginframe=true"></iframe>',
                    draggable: false,
                    width: modalwidth,
                    height: modalheight,
                    openCallback: function () {
                        var registerelementloginframe = document.getElementById("gopaywall_loginframe");
                        if(typeof(registerelementloginframe) != 'undefined' && registerelementloginframe != null)
                        {
                            registerelementloginframe.style.width = (registerelementloginframe.offsetWidth + 0)+"px";
                        }
                    }
                });

        }
    }
    else
    {
        gopaywallreloaduserobject();
    }


}



function addmodalmessagelogin(){
    var modalelement =  document.getElementById('modal-container');
    if (typeof(modalelement) != 'undefined' && modalelement != null)
    {
        document.getElementById("modal-header").innerHTML = "<center class='noaccessheadingblue'><strong>Please login or register first.</strong></center>";
        document.getElementById("modal-overlay").setAttribute("onclick", "#");
		document.getElementById("modal-overlay").className = "donotclose";
		document.getElementById("modal-overlay").onclick = function() { 
						return false;
				};
		//document.getElementById("modal-overlay").removeEventListener('click', myFunction, false);
    }
    else
    {
        setTimeout(addmodalmessagelogin, 150);
    }

}
function addmodalmessagenoaccess(){
    var modalelement =  document.getElementById('modal-container');
    if (typeof(modalelement) != 'undefined' && modalelement != null)
    {
        document.getElementById("modal-header").innerHTML = "<center class='noaccessheading'><strong>You do not have access to this page!</strong></center>";
        document.getElementById("modal-overlay").setAttribute("onclick", "#");
		document.getElementById("modal-overlay").className = "donotclose";
		document.getElementById("modal-overlay").onclick = function() { 
						return false;
				};
		//document.getElementById("modal-overlay").removeEventListener('click', myFunction, false);
    }
    else
    {
        setTimeout(addmodalmessagenoaccess, 150);
    }

}

function centerthemodal(){
    var modalelement =  document.getElementById('modal-container');
    if (typeof(modalelement) != 'undefined' && modalelement != null)
    {
        document.getElementById("modal-container").style.left = (document.body.offsetWidth/2)-(document.getElementById("modal-container").offsetWidth/2)+"px";
    }
    else
    {
        setTimeout(centerthemodal, 150);
    }
}

docReady(addregisterformelement);

function addregisterformelement(){

    var registerelement = document.getElementById("gopaywall-register-form");
    if(typeof(registerelement) != 'undefined' && registerelement != null)
    {

        registerelement.innerHTML = '<iframe frameBorder="0" width="100%"  id="gopaywall_registerframe" scrolling="auto" src="https://testwebsite.gopaywall.com/register.php?remotesite=true"></iframe>';
    }
}

docReady(addplanselement);

function addplanselement(){

    var planselement = document.getElementById("gopaywall-pricingtable");
    if(typeof(planselement) != 'undefined' && planselement != null)
    {
        planselement.innerHTML = '<iframe frameBorder="0" width="100%"  id="gopaywall_plansframe" scrolling="auto" src="https://testwebsite.gopaywall.com/plans.php?remotesite=true"></iframe>';
    }
}

docReady(adduserdirectoryelement);

function adduserdirectoryelement(){

    var userdirectoryelement = document.getElementById("gopaywall-userdirectory");
    if(typeof(userdirectoryelement) != 'undefined' && userdirectoryelement != null)
    {

        userdirectoryelement.innerHTML = '<iframe frameBorder="0" width="100%"  id="gopaywall_userdirectory" scrolling="auto" src="https://testwebsite.gopaywall.com/userdirectory.php?remotesite=true"></iframe>';
    }
}

docReady(addaccountformelement);

function addaccountformelement(){

    var accountelement = document.getElementById("gopaywall-account-form");
    if(typeof(accountelement) != 'undefined' && accountelement != null)
    {

        accountelement.innerHTML = '<iframe frameBorder="0" width="100%"   id="gopaywall_accountframe" scrolling="auto" src="https://testwebsite.gopaywall.com/account.php"></iframe>';
    }
}

docReady(addloginformelement);

function addloginformelement(){
    var loginelement = document.getElementById("gopaywall-login-form");
    if(typeof(loginelement) != 'undefined' && loginelement != null)
    {
        var loginhtml = "";
		//Console.log('add login form element');
        var xmlhttp3 = new Xhr();   // new HttpRequest instance
        xmlhttp3.open("GET","//testwebsite.gopaywall.com/loginajax.php?remotesite=true",true);
        xmlhttp3.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp3.withCredentials = true ;
        xmlhttp3.onreadystatechange = function(e) {
            if (this.readyState == 4 && this.status == 200) {

                loginhtml = this.responseText;
                loginelement.innerHTML = loginhtml;
                loginelement.style.height = (document.getElementById("gopaywall_loginformheight").clientHeight + 55)+"px";
                //loginelement.style.minHeight = document.getElementById("gopaywall_loginformheight").style.height;
            }

        }
        xmlhttp3.send();
    }
}

if(  document.addEventListener  ){

	try {
		window.parent.postMessage(window.location.href, '*');
		window.addEventListener("message", receiveMessage, false);
	}
	catch(err) {
	
	}
}
function receiveMessage(evt)
{
	try {
	//console.log(evt);
		if(evt.data === 'reload' || evt.data.themessage == 'reload')
		{
			if (evt.origin === 'https://testwebsite.gopaywall.com')
			{
				window.location.reload();
			}
		}
		else if(evt.data === 'accountloaded' || evt.data.themessage == 'accountloaded')
		{
			//console.log('accountloaded');
			var modalelementlogin =  document.getElementById('gopaywall_loginlink');
			if (typeof(modalelementlogin) != 'undefined' && modalelementlogin != null)
			{
				modalelementlogin.innerHTML = "My Account";
				modalelementlogin.href = "javascript:gopaywall_showregister()";
			}
			var slides = document.getElementsByClassName("gopaywall_loginlink");
			for(var i = 0; i < slides.length; i++)
			{
				slides.item(i).innerHTML = "My Account";
				slides.item(i).href = "javascript:gopaywall_showregister()";
			}
		}
		else
		{
			if (evt.origin === 'https://testwebsite.gopaywall.com')
			{
				if(evt.data.themessage == 'redirectto')
				{
					
					window.location.href = evt.data.urlredirect;
				}
				//console.log(evt);
			   //window.location.href = evt.data;
			}
		}
	}
	catch(err) {
	
	}
}