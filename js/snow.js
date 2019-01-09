$(function () {
    css = "<style>\n" +
        "        body{\n" +
        "            background: #1A1B1B;\n" +
        "        }\n" +
        "        @keyframes mysnow{\n" +
        "            0%{\n" +
        "                bottom:100%;\n" +
        "                opacity:0;\n" +
        "            }\n" +
        "            50%{\n" +
        "                opacity:1;\n" +
        "                transform: rotate("+Math.floor(Math.random()*60) +"deg);\n" +
        "            }\n" +
        "            100%{\n" +
        "                transform: rotate(0deg);\n" +
        "                opacity: 0;\n" +
        "                bottom:0;\n" +
        "            }\n" +
        "        }\n" +
        "        @-webkit-keyframes mysnow{\n" +
        "            0%{\n" +
        "                bottom:100%;\n" +
        "                opacity:0;\n" +
        "            }\n" +
        "            50%{\n" +
        "                opacity:1;\n" +
        "                -webkit-transform: rotate("+Math.floor(Math.random()*60)+"deg);\n" +
        "            }\n" +
        "            100%{\n" +
        "                -webkit-transform: rotate(0deg);\n" +
        "                opacity: 0;\n" +
        "                bottom:0;\n" +
        "            }\n" +
        "        }\n" +
        "        @-moz-keyframes mysnow{\n" +
        "            0%{\n" +
        "                bottom:100%;\n" +
        "                opacity:0;\n" +
        "            }\n" +
        "            50%{\n" +
        "                opacity:1;\n" +
        "                -moz-transform: rotate("+Math.floor(Math.random()*60)+"deg);\n" +
        "            }\n" +
        "            100%{\n" +
        "                -moz-transform: rotate(0deg);\n" +
        "                opacity: 0;\n" +
        "                bottom:0;\n" +
        "            }\n" +
        "        }\n" +
        "        @-ms-keyframes mysnow{\n" +
        "            0%{\n" +
        "                bottom:100%;\n" +
        "                opacity:0;\n" +
        "            }\n" +
        "            50%{\n" +
        "                opacity:1;\n" +
        "                -ms-transform: rotate("+Math.floor(Math.random()*60)+"deg);\n" +
        "            }\n" +
        "            100%{\n" +
        "                -ms-transform: rotate(0deg);\n" +
        "                opacity: 0;\n" +
        "                bottom:0;\n" +
        "            }\n" +
        "        }\n" +
        "        @-o-keyframes mysnow{\n" +
        "            0%{\n" +
        "                bottom:100%;\n" +
        "                opacity:0;\n" +
        "            }\n" +
        "            50%{\n" +
        "                opacity:1;\n" +
        "                -o-transform: rotate("+Math.floor(Math.random()*60)+"deg);\n" +
        "            }\n" +
        "            100%{\n" +
        "                -o-transform: rotate(0deg);\n" +
        "                opacity: 0;\n" +
        "                bottom:0;\n" +
        "            }\n" +
        "        }\n" +
        "        .roll{\n" +
        "            position:absolute;\n" +
        "            opacity:0;\n" +
        "            animation: mysnow 5s ;\n" +
        "            -webkit-animation: mysnow 5s ;\n" +
        "            -moz-animation: mysnow 5s ;\n" +
        "            -ms-animation: mysnow 5s ;\n" +
        "            -o-animation: mysnow 5s ;\n" +
        "            height:80px;\n" +
        "        }\n" +
        "        .div{\n" +
        "            position:fixed;\n" +
        "        }\n" +
        "    </style>";

    $("head").append(css);
    // setInterval(function () {
    //     $("style").remove();
    //     $("head").append(css);
    // },1000)
})