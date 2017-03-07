//$(document).ready(function(){
function selectOptionSort(selectId){
$("#"+selectId).append($("#"+selectId+" option").remove().sort(function(a, b) {
    var at = $(a).text(), bt = $(b).text();
    return (at > bt)?1:((at < bt)?-1:0);
    }));
}
function showPhNumAutoFormatAlert(){
    $('#id_phoneNumberSC').on('keyup',function(){
        $(this).val($('#id_phoneNumberSC').val().replace(/\s+/g, ''));
        $(this).val($(this).val().replace(/^0+/, ''));
        $(this).parent().find("span.help-block").text("We are auto formatting your phone number");
    });

}
