/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(
        function() {

            var urlParams;
            (window.onpopstate = function() {
                var match,
                        pl = /\+/g, // Regex for replacing addition symbol with a space
                        search = /([^&=]+)=?([^&]*)/g,
                        decode = function(s) {
                            return decodeURIComponent(s.replace(pl, " "));
                        },
                        query = window.location.search.substring(1);

                urlParams = {};
                while (match = search.exec(query))
                    urlParams[decode(match[1])] = decode(match[2]);
            })();

            var num = urlParams["mem"];
            num = parseInt(num);

            $("#accordion").accordion({active: num});

        });

