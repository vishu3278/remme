    /*function showCharm(id){
        var  charm = $(id).data("charm");
        if (charm.element.data("opened") === true) {
            charm.close();
        } else {
            charm.open();
        }
    };*/

    function bodyLoad() {
//    	document.addEventListener("deviceready",onDeviceReady,false);
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady () {
    	alert("Device is ready");
    }