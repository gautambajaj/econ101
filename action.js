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
        content: "The basic elasticity formula has shortcomings which can be minimized by using the midpoint method or calculating the point elasticity. The midpoint formula makes only one change to the calculation of percentages: rather than dividing by the old value of X, it divides by the average value.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#two').popover({
        content:"Price elasticity of demand (PED or Ed) is a measure used in economics to show the responsiveness, or elasticity, of the quantity demanded of a good or service to a change in its price, ceteris paribus.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#three').popover({
        content:"Income elasticity of demand measures the responsiveness of the quantity demanded for a good or service to a change in the income of the people demanding the good, ceteris paribus.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#four').popover({
        content:"Cross elasticity of demand or cross-price elasticity of demand measures the responsiveness of the quantity demanded for a good to a change in the price of another good, ceteris paribus.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#five').popover({
        content:"Price elasticity of supply (PES or Es) is a measure used in economics to show the responsiveness, or elasticity, of the quantity supplied of a good or service to a change in its price.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#six').popover({
        content:"Average fixed cost (AFC) is the fixed costs of production (FC) divided by the quantity (Q) of output produced. As the total number of units of the good produced increases, the average fixed cost decreases because the same amount of fixed costs is being spread over a larger number of units of output.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#seven').popover({
        content:"Average variable cost (AVC) is a firm's variable costs (labor, electricity, etc.) divided by the quantity of output produced. Variable costs are those costs which vary with output.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#eight').popover({
        content:"Average total cost is the total cost per unit of output incurred when a firm engages in short-run production. It can be found in two ways. Because average total cost is total cost per unit of output, it can be found by dividing total cost by the quantity of output.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#nine').popover({
        content:"A unit cost is the total expenditure incurred by a company to produce, store and sell one unit of a particular product or service. Unit costs include all fixed costs, or overhead costs, and all variable costs, or direct material costs and direct labor costs, involved in production.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#ten').popover({
        content:"Consumer surplus is defined as the difference between the total amount that consumers are willing and able to pay for a good or service (indicated by the demand curve) and the total amount that they actually do pay (i.e. the market price).",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#eleven').popover({
        content:"Producer surplus is an economic measure of the difference between the amount a producer of a good receives and the minimum amount the producer is willing to accept for the good. The difference, or surplus amount, is the benefit the producer receives for selling the good in the market.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#twelve').popover({
        content:"When people buy something, they generally pay less than what they were willing to pay for the good or service, which is referred to as consumer surplus. Likewise, sellers can sell a product at a higher price than their economic cost to produce a product, which is referred to as producer surplus.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#thirteen').popover({
        content:"Marginal cost is the change in the total cost that arises when the quantity produced is incremented by one unit, that is, it is the cost of producing one more unit of a good. In general terms, marginal cost at each level of production includes any additional costs required to produce the next unit.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#fifteen').popover({
        content:"A marginal benefit is the additional satisfaction or utility that a person receives from consuming an additional unit of a good or service. A person's marginal benefit is the maximum amount he is willing to pay to consume that additional unit of a good or service.",
        trigger: "hover",
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#sixteen').popover({
        content:"An economic profit or loss is the difference between the revenue received from the sale of an output and the opportunity cost of the inputs used. In calculating economic profit, opportunity costs are deducted from revenues earned.",
        trigger: "hover",
        placement: "left",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

$('#seventeen').popover({
        content:"Accounting profit is a company's total earnings, calculated according to generally accepted accounting principles (GAAP). It includes the explicit costs of doing business, such as operating expenses, depreciation, interest and taxes.",
        trigger: "hover",
        placement: "right",
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
    
    $.get('https://api.uwaterloo.ca/v2/resources/goosewatch.json?key=9c654b0320d629d9252057074bb4e939', function(data){
        console.log(data.data);
    });
});
