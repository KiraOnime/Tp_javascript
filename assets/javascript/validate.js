$(document).ready(function(){
    $("#commentForm").validate({
        rules:{
            "user[name]": {
                required: true,
                minlength: 2,
            },
            "user[email]": {
                required: true,
                email:true,
                minlength: 2,
            },
            "user[url]" :{
                required:true,
                url:true,
            },
            "user[date]" :{
                required:true,
                date:true,
                minlength:10,
                maxlength:10,
            },
            "user[comment]" :{
                required:true,
            },           
        },
        messages: {
            "user[name]": {
                required: "Nous avons besion de votre nom pour vous re-contacter",
                minlength: jQuery.format("Au moins {0} charateres requis"),
            },
            "user[email]": {
                required: "Nous voudrions votre adresse courielle pour vous repondre",
                email: "Addresse courrielle doit etre du format nom@domain.com",
                minlength: jQuery.format("Au moins {0} charatères requis"),
                maxlength: jQuery.format("Nombre maximal de charatèrs atteint! {0}"),
            },
            "user[url]" : {
                required : "Veuiller entre une addresse URL valide",
                url:"Format http//.www.domain.com",
            },
            "user[date]" : {
                required : "Veuiller entre une date valide.",
                date:"Format 'AAAA-MM-JJ'",
                maxlength:"Format de date trop longue",
                minlength:"Format de date trop court",
            },
            "user[comment]" : {
                required : "Veuillez entrer un commentaire",
            },
        }
    });
});