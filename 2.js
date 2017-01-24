/**
 * Created by xLeGeNDx on 29-12-2016.
 */

$(document).ready(function() {
    function handleClickOne() {
        var p1 = +$('#p1').val();
        var p2 = +$('#p2').val();
        var q1 = +$('#q1').val();
        var q2 = +$('#q2').val();
        var numerator = (q2-q1)/(0.5*(q1+q2));
        var denominator = (p2-p1)/(0.5*(p1+p2));
        $('#ans').text(Math.abs(numerator/denominator).toFixed(3));
    }

    $('#one').popover({
        content: "lol",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });


    $('#one').click(function () {
        $('#modal1').modal('show');
    });
    $('#click1').click(handleClickOne);

    $('#two').click(function () {
        $('#modal2').modal('show');
    });

    $('#three').click(function () {
        $('#modal3').modal('show');
    });

    $('#four').click(function () {
        $('#Modal4').modal('show');
    });

    $('#five').click(function () {
        $('#Modal5').modal('show');
    });
    $('#six').click(function () {
        $('#Modal6').modal('show');
    });
    $('#seven').click(function () {
        $('#Modal7').modal('show');
    });
    $('#eight').click(function () {
        $('#Modal8').modal('show');
    });
    $('#nine').click(function () {
        $('#Modal9').modal('show');
    });
    $('#ten').click(function () {
        $('#Modal0').modal('show');
    });
    $('#eleven').click(function () {
        $('#Modal1').modal('show');
    });
    $('#twelve').click(function () {
        $('#Modal2').modal('show');
    });
    $('#thirteen').click(function () {
        $('#Modal13').modal('show');
    });
    $('#fourteen').click(function () {
        $('#Modal14').modal('show');
    });
    $('#fifteen').click(function () {
        $('#Modal15').modal('show');
    });
    $('#siteen').click(function () {
        $('#Modal16').modal('show');
    });
    
    
});
