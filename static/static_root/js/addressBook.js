( function( $ ) {
$( document ).ready(function() {

$.each($('input, textarea, text'), function(index, value) {
    $('input').addClass('your-class');
    $(this).data('holder', $(this).attr('placeholder'));
});

$('input, textarea, text').focusin(function(){
    $(this).attr('placeholder','');
});

$('input, textarea, text').focusout(function(){
    $(this).attr('placeholder', $(this).data('holder'));
});

$('#agencyDeleteBtn').on('click', function(){
     formElem =  $(this).closest('form').get(0);
     formElem.setAttribute('action','/deleteAgency');
     formElem.submit();
});

$('#agencyContactDeleteBtn').on('click', function(){
     formElem =  $(this).closest('form').get(0);
     formElem.setAttribute('action','/deleteAgencyContact');
     formElem.submit();
});

var selectedAgencyValue = $( "#id_agency option:selected" ).attr('value');
$( "#agencyIdDropDown" ).attr('value',selectedAgencyValue);
var selectedAgencyValue = $('body #id_agency option:selected').attr('value');
$( "body #agencyIdDropDown" ).attr('value',selectedAgencyValue);
var selectedAdvertiserValue = $( "body #id_advertiser option:selected" ).attr('value');
$( "body #advertiserIdDropDown" ).attr('value',selectedAdvertiserValue);
var selectedAgencyValue = $('body #id_agency option:selected').attr('value');
var selectedBuyerValue = $( "#id_buyerContact option:selected" ).attr('value');
$( "#buyerIdDropDown" ).attr('value',selectedBuyerValue);

var selectedBillingValue = $( "#id_billingContact option:selected" ).attr('value');
$( "#billingIdDropDown" ).attr('value',selectedBillingValue);

var name = $('#id_agencyContactType').attr('value');
$("#name").text(name+" NAME");
$("#email").text(name+" EMAIL");
$("#phone").text(name+" PHONE");

$("#id_agency").change(function(){
    var selectedAgencyValue = $( "#id_agency option:selected" ).attr('value');
    $( "#agencyIdDropDown" ).attr('value',selectedAgencyValue);
});

$("#id_advertiser").change(function(){
    var selectedAdvertiserValue = $( "#id_advertiser option:selected" ).attr('value');
    $( "#advertiserIdDropDown" ).attr('value',selectedAdvertiserValue);
});

$("#id_buyerContact").change(function(){
    var selectedBuyerValue = $( "#id_buyerContact option:selected" ).attr('value');
    $( "#buyerIdDropDown" ).attr('value',selectedBuyerValue);
});

$("#id_billingContact").change(function(){
    var selectedBillingValue = $( "#id_billingContact option:selected" ).attr('value');
    $( "#billingIdDropDown" ).attr('value',selectedBillingValue);
});

$("#id_agencyContactType").change(function(){
    $("#name").text(this.value + " NAME");
    $("#email").text(this.value + " EMAIL");
    $("#phone").text(this.value + " PHONE");
});

});
} )( jQuery );
