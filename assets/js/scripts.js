// $(document).ready(function() {
//     var result = 0;
//     var prevEntry = 0;
//     var operation = null;
//     var currentEntry = '0';
//     updateScreen(result);

//     $('.button').on('click', function (evt) {
//         var buttonPressed = $(this).html();
//         console.log(buttonPressed);
//     })
// })


$(document).ready(function () {
    $('#one').click(function () {
        document.forms.display.value += 1;
    })
    $('#two').click(function () {
        document.forms.display.value += 2;
    })
    $('#three').click(function () {
        document.forms.display.value += 3;
    })
    $('#four').click(function () {
        document.forms.display.value += 4;
    })
    $('#five').click(function () {
        document.forms.display.value += 5;
    })
    $('#six').click(function () {
        document.forms.display.value += 6;
    })
    $('#seven').click(function () {
        document.forms.display.value += 7;
    })
    $('#eight').click(function () {
        document.forms.display.value += 8;
    })
    $('#nine').click(function () {
        document.forms.display.value += 9;
    })
    $('#zero').click(function () {
        document.forms.display.value += 0;
    })
    $('#add').click(function () {
        document.forms.display.value += '+';
    })
    $('#subtract').click(function () {
        document.forms.display.value += '-';
    })
    $('#multiply').click(function () {
        document.forms.display.value += '*';
    })
    $('#divide').click(function () {
        document.forms.display.value += '/';
    })
    $('#dot').click(function () {
        document.forms.display.value += '.';
    })
    $('#equal').click(function () {
        if (document.forms.display.value == "") {
            document.forms.display.value = NaN;
            // alert("anything");
        } else {
            document.forms.display.value =
                eval(document.forms.display.value);
        };
    })
    $('#back').click(function () {
        document.forms.display.value = document.forms.display.value.substring(0, document.forms.display.value.length -1)  ;
    })
    $('#clear').click(function () {
        document.forms.display.value = "";
    })
})

    




