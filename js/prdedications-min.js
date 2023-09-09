!function(e){"use strict";e.fn.emoji=function(i){var n={button:"&#x1F642;",place:"before",emojis:["&#x1F642;","&#x1F641;","&#x1f600;","&#x1f601;","&#x1f602;","&#x1f603;","&#x1f604;","&#x1f605;","&#x1f606;","&#x1f607;","&#x1f608;","&#x1f609;","&#x1f60a;","&#x1f60b;","&#x1f60c;","&#x1f60d;","&#x1f60e;","&#x1f60f;","&#x1f610;","&#x1f611;","&#x1f612;","&#x1f613;","&#x1f614;","&#x1f615;","&#x1f616;","&#x1f617;","&#x1f618;","&#x1f619;","&#x1f61a;","&#x1f61b;","&#x1f61c;","&#x1f61d;","&#x1f61e;","&#x1f61f;","&#x1f620;","&#x1f621;","&#x1f622;","&#x1f623;","&#x1f624;","&#x1f625;","&#x1f626;","&#x1f627;","&#x1f628;","&#x1f629;","&#x1f62a;","&#x1f62b;","&#x1f62c;","&#x1f62d;","&#x1f62e;","&#x1f62f;","&#x1f630;","&#x1f631;","&#x1f632;","&#x1f633;","&#x1f634;","&#x1f635;","&#x1f636;","&#x1f637;","&#x1f638;","&#x1f639;","&#x1f63a;","&#x1f63b;","&#x1f63c;","&#x1f63d;","&#x1f63e;","&#x1f63f;","&#x1f640;","&#x1f643;","&#x1f4a9;","&#x1f644;","&#x2620;","&#x1F44C;","&#x1F44D;","&#x1F44E;","&#x1F648;","&#x1F649;","&#x1F64A;"],fontSize:"27px",listCSS:{},rowSize:8},a={};if(i)for(var s in n)a[s]=i[s]?i[s]:n[s];else a=n;return this.each((function(i,s){var r=e(s);function t(){c.hide(),e(document).off("click",t)}function o(i){var n=e(i.currentTarget).find("img").attr("alt");if("undefined"!=n&&void 0!==n||(n=e(i.currentTarget).html()),s.selectionStart||"0"==s.selectionStart){var a=s.selectionStart,o=s.selectionEnd;s.value=s.value.substring(0,a)+n+s.value.substring(o,s.value.length)}else s.value+=n;t(),r.focus(),s.selectionStart=a+2,s.selectionEnd=o+2}var d=e('<span class="prdedications-emojibtn">').html(a.button).css({cursor:"pointer","font-size":a.fontSize}).on("click",(function(){c.show(),r.focus(),setTimeout((function(){e(document).on("click",t)}),2e3)})),c=e('<div class="prdedications-emojilist">').css(n.listCSS).css(a.listCSS);for(var i in a.emojis)i>0&&i%a.rowSize==0&&e("<br>").appendTo(c),e("<span>").html(a.emojis[i]).attr("alt",a.emojis[i]).attr("data-emoji",a.emojis[i]).css({cursor:"pointer","font-size":a.fontSize}).on("click",o).appendTo(c);"before"===a.place?d.insertBefore(this):d.insertAfter(this),c.insertAfter(r)})),this},e.PRdedications={errors:{name:"The name is too short",missing:"Error: the field is missing, incorrect or too short",link:"Error: invalid URL format",phone:"Error: incorrect phone number",email:"The address is incorrect, please check again",dateFormat:"Error: wrong date format",check:"Please accept the privacy terms to proceed",formerror:"Some fields are not correctly compiled, please check before proceeding."},fn:{marqueeInstances:[],marqueeText:function(i){if("function"==typeof e.fn.marquee){var n=e("body").find(".proradio-dedications-marquee");if(i.marqueeInstances.length>0){for(var a=0;a<i.marqueeInstances.length;a++)void 0!==i.marqueeInstances[a]&&i.marqueeInstances[a].marquee("destroy");i.marqueeInstances=[]}e.each(n,(function(n,a){var s=e(a);0===s.find(".marquee").length&&s.html('<span class="marquee">'+s.html()+"</span>"),s.hasClass("vertical"),console.log("scroll"),i.marqueeInstances[n]=s.marquee({gap:10,delayBeforeStart:0,pauseOnCycle:0,startVisible:!0})}))}},doValid:function(i){e(i).addClass("prdedications-valid")},doError:function(i,n){e(i).addClass("prdedications-invalid"),console.log(n)},validateDate:function(e){return/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(e)},isUrlValid:function(e){return/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},isPhoneValid:function(e){return/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(e)},isEmailValid:function(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},validateForm:function(i,n){var a=0;e(".prdedications-error-message").removeClass("show"),n.find(".prdedications-error-field").removeClass("prdedications-error-field"),n.find('textarea[name="your-message"]').val().length<10&&(e(".prdedications-error-message.your-message-error").addClass("show"),a++);var s=n.find('input[name="your-name"]');if(s.length>0&&(""===s.val()||s.val().length<2))return e(".prdedications-error-message.your-name-error").addClass("show"),void a++;var r=n.find('input[name="your-email"]');r.length>0&&(i.fn.isEmailValid(r.val())||(e(".prdedications-error-message.your-email-error").addClass("show"),a++));var t=n.find('[data-name="privacy"]');return t.length>0&&(t.find('input[type="checkbox"]').is(":checked")||(e(".prdedications-error-message.privacy-error").addClass("show"),a++)),0===a},init:function(i){e(".prdedications-message").emoji(),i.fn.songSuggestion.init(i),i.fn.marqueeText(i.fn);var n=e(".prdedications-cform-form");n.on("click",".prdedications-cform-submit",(function(a){a.preventDefault();var s=i.fn.validateForm(i,n),r=n.serializeArray().reduce((function(e,i){return e[i.name]=i.value,e}),{});r.action="prdedications-sendform",r.nonce=prdedications_ajax_var.nonce,r.url=prdedications_ajax_var.url,r.pagelink=e(location).attr("href"),r.isValid=s,s&&(n.find(".prdedications-spinner").css({display:"block"}),e.ajax({type:"post",url:prdedications_ajax_var.url,data:r,cache:!1,success:function(e){return console.log(e),s?(n.find(":input").not(":button, :submit, :reset, :hidden").val("").prop("checked",!1).prop("selected",!1),"limit"==e?(n.find(".prdedications-response-limit").addClass("show"),void n.find(".prdedications-spinner").css({display:"none"})):void("success"==e?(n.find(".prdedications-response-success").addClass("show"),n.find(".prdedications-response-error").removeClass("show"),n.find(".prdedications-spinner").css({display:"none"})):(n.find(".prdedications-response-success").removeClass("show"),n.find(".prdedications-response-error").addClass("show"),n.find(".prdedications-spinner").css({display:"none"})))):(a.preventDefault(),n.find(".prdedications-spinner").css({display:"none"}),!1)},error:function(e){console.log("An error occurred."),console.log(e),n.find(".prdedications-spinner").css({display:"none"})}}))}))},songSuggestion:{search:function(i){var n=i.val().split(" ").join("+");e.ajax("https://itunes.apple.com/search?",{data:{term:n,country:"US",media:"music",limit:10},dataType:"jsonp",success:function(n){var a=e.map(n.results,(function(e){return{title:e.trackName,artist:e.artistName,thumb:e.artworkUrl100}})),s="";e.each(a,(function(i,n){i=e(n)[0],s+='<li><a href="#" data-prdedications-title="'+i.artist+" - "+i.title+'" data-prdedications-thumb="'+i.thumb+'"><img src="'+i.thumb+'"><p>'+i.title+"<br>"+i.artist+"</p></a></li>"})),i.closest("form").find(".prdedications-suggestions").html("<ul>"+s+"</ul>")}})},init:function(i){var n=this;e(".prdedications-songsearch").on("change input",(function(){n.search(e(this))})),e("body").on("click",".prdedications-suggestions a",(function(i){i.preventDefault();var n=e(this),a=n.data("prdedications-title"),s=n.data("prdedications-thumb");e(".prdedications-songsearch").val(a),e(".prdedications-songsearch").closest("form").find('input[name="song-artwork"]').val(s),e(".prdedications-songsearch").closest("form").find(".prdedications-suggestions").html("")}))}}}},jQuery(document).ready((function(){e.PRdedications.fn.init(e.PRdedications)})),e(window).on("qtAjaxpageLoadEnd",(function(){e.PRdedications.fn.init(e.PRdedications)}))}(jQuery);