// ==UserScript==
// @name         GooglePlay devices
// @namespace    http://juliome10.github.io
// @version      1.0
// @description  Get compatible devices
// @author       You
// @match        https://play.google.com/apps/publish/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    var interval = setInterval(function () {myTimer();}, 5000);

    function myTimer() {
        var manufacturers = [];
        var devices = [];

        var found = false;
        var elements = document.getElementsByTagName("li");
        for(var i=0; i<elements.length; i++){
            if(elements[i].hasAttribute("data-manufacturer-group")){
                manufacturers.push(elements[i]);
            }
        }

        if(manufacturers.length > 0){
            clearInterval(interval);

            for(var j=0; j<manufacturers.length; j++){
                console.log(manufacturers[j].getElementsByTagName("h3")[0].innerHTML + " products: " + manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li").length);
                
                for(var k=0; k<manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li").length; k++){
                    var manufacturer = manufacturers[j].getElementsByTagName("h3")[0].innerHTML;
                    var productIndex = manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li")[k].getElementsByTagName("span").length == 3 ? 1 : 0;
                    var product = manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li")[k].getElementsByTagName("span")[productIndex].innerHTML;
                    var nameIndex = manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li")[k].getElementsByTagName("span").length == 3 ? 2 : 1;
                    var name = manufacturers[j].getElementsByTagName("ol")[0].getElementsByTagName("li")[k].getElementsByTagName("span")[nameIndex].innerHTML.substring(2);

                    devices.push({"manufacturer": manufacturer, "product": product, "name": name});
                }
            }

            console.log("Manufacturers: " + manufacturers.length + " Devices: " + devices.length);
            var text = "";
            for(var d=0; d<devices.length; d++){
                text += devices[d].manufacturer.trim() + " " + devices[d].product.trim() + " (" + devices[d].name.trim() + ")\n";
            }

            window.open("data:text/plain;charset=utf-8," + escape(text));
        }
    }
});
