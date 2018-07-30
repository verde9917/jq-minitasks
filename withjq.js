$(() => {
    // task01
    $('#TextColor').click(() => {
        $('#targetOfChangeColor').css('color', '#ffc0c2');
    });
    // task02
    $('#firstText').click(() => {
        $('#targetOfChangeText').text('Hello,JavaScript!');
    });
    // task03
    $('#typeText').keyup(() => {
        $('#typedText').text($('#typeText').val());
    });
    // task04
    $('#addClass').click(() => {
        $('#addClass').addClass('newClass');
    });
    // task05
    $('#removeClass').click(() => {
        $('#removeClass').removeClass('newClass');
    });
});

