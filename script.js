var size = document.querySelector("#size"),
    speed = document.querySelector("#download-speed"),
    result = document.querySelector("#result-time"),
    sizeType = document.querySelector("#data"),
    speedType = document.querySelector("#speed-data"),
    convertType = document.querySelector("#convert-type"),
    timeType = document.querySelector("#time-type");


document.querySelector(".action__button").addEventListener("click", function () {
      var baseType = convertType.value;

     if (baseType == "binary" ) {
         getDataBinar();

     } else {
         getDataZecimal();
     }


});

    function getDataBinar () {
        var getSize = size.value;
        var getSpeed = speed.value;
        var selectSizeType = sizeType.value;
        var selectSpeedType = speedType.value;


        if (selectSizeType == "GB" && selectSpeedType == "Mb/s") {
            var megabyte = getSize * 1024;

            var time =  ( megabyte * 8) / getSpeed;
              
           result.value = time + "  seconds";

        }
        else if (selectSizeType == "MB" && selectSpeedType == "Mb/s") {
            time = (getSize * 8 ) / getSpeed;
            result.value = time + "  seconds";
        }
        else if (selectSizeType == "GB" && selectSpeedType == "MB/s" ) {
                
             time  = (getSize  * 1024) / getSpeed
             result.value = time + "  seconds";

        } else if (selectSizeType == "MB" && selectSpeedType == "MB/s") {
                time = getSize / getSpeed;
                result.value = time + "  seconds";
        }
        else {
            result.value = "NaN"
        }

    }


    function getDataZecimal () {
        var getSize = size.value;
        var getSpeed = speed.value;
        var selectSizeType = sizeType.value;
        var selectSpeedType = speedType.value;


        if (selectSizeType == "GB" && selectSpeedType == "Mb/s") {
            var megabyte = getSize * 1000;

            var time =  ( megabyte * 8) / getSpeed;
              
           result.value = time + "  seconds";

        }
        else if (selectSizeType == "MB" && selectSpeedType == "Mb/s") {
            time = (getSize * 8 ) / getSpeed;
            result.value = time + "  seconds"; 
        }
        else if (selectSizeType == "GB" && selectSpeedType == "MB/s" ) {
                
             time  = (getSize  * 1000) / getSpeed;
             result.value = time + "  seconds";

        } else if (selectSizeType == "MB" && selectSpeedType == "MB/s") {
                time = getSize / getSpeed;
                result.value = time + "  seconds";
        }
        else {
            result.value = "NaN"
        }

    }


 

