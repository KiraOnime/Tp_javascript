$(document).ready(function(){
$('#box1').hide();
$('#box2').hide();
$('#box3').hide();
$("#thechoices").change(function(){
if(this.value == 'all')
{$("#boxes").children().show();}
else
{$("#" + this.value).show().siblings().hide();}
});

$("#thechoices").change();
});