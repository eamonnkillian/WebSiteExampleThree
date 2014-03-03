/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(
        function() {
            
            $("#wholePage").hide().fadeIn(1400);
            
            $('#coin-slider').coinslider({width: 1400, height: 400, navigation: false, delay: 3000});
            
            $(".thirdSectionLHSMain").hover(function() {
                    $(".thirdSectionLHSReveal").slideToggle(1000);
                });

            $(".thirdSectionMIDMain").hover(function() {
                    $(".thirdSectionMIDReveal").slideToggle(1000);
                });

            $(".thirdSectionRHSMain").hover(function() {
                    $(".thirdSectionRHSReveal").slideToggle(1000);
                });
                       
            $( "#accordion" ).accordion();
                          
            $("#tabs").tabs();

            $("#support").click(function() {
                $(".popup").fadeToggle(150);
                $(".popup1").fadeOut(1);
                return false;
            });

            $("#team").click(function() {
                $(".popup1").fadeToggle(150);
                $(".popup").fadeOut(1);
                return false;
            });

            $(parent).click(function() {
                $(".popup").fadeOut(1);
                $(".popup1").fadeOut(1);
            });

            $(".meetTheTeamA").on("click", function() {
                $("#wholePage").load("TeamMember1.html");
            });
            
            $(".meetTheTeamB").on("click", function() {
                $("#wholePage").load("TeamMember2.html");
            });
            
            $(".meetTheTeamC").on("click", function() {
                $("#wholePage").load("TeamMember3.html");
            });
            
            $(".meetTheTeamD").on("click", function() {
                $("#wholePage").load("TeamMember4.html");
            });
            
            $(".meetTheTeamE").on("click", function() {
                $("#wholePage").load("TeamMember5.html");
            });
            
            $(".meetTheTeamF").on("click", function() {
                $("#wholePage").load("TeamMember6.html");
            });

            $(".whitePapers").on("click", function() {
                $("#wholePage").load("white.html");
            });

            $(".contactUs").on("click", function() {
                $("#wholePage").load("contact.html");
            });

            $(".specialisms").on("click", function() {
                $("#wholePage").load("specialisms.html");
            });

            $(".wse1-button").on("click", function() {
                $("#wholePage").load("specialisms.html");
            });

            $(".logosecond").on("click", function() {
                window.open('pdf/wse1-Brief.pdf', 'WebSite Example 1 Brief', 'height=800,width=650');
            });

        });
