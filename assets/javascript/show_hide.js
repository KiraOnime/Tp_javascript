$(document).ready(function(){
    $('#cprofile').hide();
    $('#choices').hide();
    $('#box2').hide();
    $('#box3').hide();
    $("#thechoices").change(function(){
        if(this.value == "blank"){
            $('#choices').hide();
            $('#cprofile').hide();
            $('#box2').hide();
            $('#box3').hide();
        }else if(this.value ==  "box2"){
            $('#choices').show();
            $('#cprofile').show();
            $('#box2').show();
            $('#box3').hide();
        } else if(this.value == "box3"){
            $('#choices').show();
            $('#cprofile').show();
            $('#box2').hide();
            $('#box3').show();
        } else{
            $('#choices').show();
            $('#cprofile').show();
            $('#box2').show();
            $('#box3').show();
        }
    });
});