const resizeObserver=new ResizeObserver(entries=>{setTimeout(()=>{$(".swiper-wrapper").height(entries[0].target.clientHeight)},100)});function observeSlide(){resizeObserver.disconnect(),$(".swiper-wrapper").height($(".swiper-slide-active").height()),resizeObserver.observe(document.querySelector(".swiper-slide-active"))}function getParameterByName(name,url){url||(url=window.location.href),name=name.replace(/[\[\]]/g,"\\$&");var results=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)").exec(url);return results?results[2]?decodeURIComponent(results[2].replace(/\+/g," ")):"":null}function buildSocial(){if("undefined"!=typeof socialNetworks){Object.entries(socialNetworks).forEach(function([key,val],index){"mastodon"===key?$("#social").append(`<li><a href="${val}" target="_blank" title="${key}"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="mastodon" class="svg-inline--fa fa-mastodon fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg></a></li>`):"minds"===key?$("#social").append(`<li><a href="${val}" target="_blank" title="${key}"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 56.091668 91.281253" height="345" width="212"> <defs id="defs2"> <filter id="filter989" style="color-interpolation-filters:sRGB"> <feColorMatrix result="fbSourceGraphic" id="feColorMatrix987" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 "/> <feColorMatrix id="feColorMatrix991" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" in="fbSourceGraphic" result="fbSourceGraphicAlpha"/> <feColorMatrix result="fbSourceGraphic" in="fbSourceGraphic" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 " id="feColorMatrix993"/> <feColorMatrix id="feColorMatrix995" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" in="fbSourceGraphic" result="fbSourceGraphicAlpha"/> <feColorMatrix result="fbSourceGraphic" in="fbSourceGraphic" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 " id="feColorMatrix997"/> <feColorMatrix id="feColorMatrix999" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" in="fbSourceGraphic" result="fbSourceGraphicAlpha"/> <feColorMatrix result="fbSourceGraphic" in="fbSourceGraphic" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 " id="feColorMatrix1001"/> <feColorMatrix id="feColorMatrix1003" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" in="fbSourceGraphic" result="fbSourceGraphicAlpha"/> <feColorMatrix in="fbSourceGraphic" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 " id="feColorMatrix1005"/> </filter> </defs> <metadata id="metadata5"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/> <dc:title></dc:title> </cc:Work> </rdf:RDF> </metadata> <g transform="translate(0,-205.71873)" id="layer1"> <g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1;filter:url(#filter989)" transform="matrix(0.26458333,0,0,0.26458333,29.973508,67.473955)" id="Page-1"> <g id="bulb" transform="matrix(1.0000059,0,0,1,-164.286,495.49995)"> <g id="Group-5" transform="translate(107,290)"> <path style="fill:#656565" d="M 24.752475,43 22.772277,72 Z" id="Triangle-3"/> <polygon style="fill:#656565" id="polygon915" points="50,82 0,62 25,41 "/> <polygon style="fill:#787778" id="polygon917" points="25,41 0,0 0,62 "/> <polygon style="fill:#5c5c5c" id="polygon919" points="100,62 75,41 50,82 "/> <polygon style="fill:#787778" id="polygon921" points="100,0 100,62 75,41 "/> <polygon style="fill:#4a4a4a" id="polygon923" points="50,82 0,0 100,0 "/> </g> <g id="Group" transform="translate(6,1)"> <polygon style="fill:#fed12f" id="polygon926" points="141,205 111,100 217,144 "/> <polygon style="fill:#fed12f" id="polygon928" points="217,144 191,26 251,88 "/> <polygon style="fill:#fed12f" id="polygon930" points="201,289 101,289 211,257 "/> <polygon style="fill:#fed12f" id="polygon932" points="101,289 91,257 141,205 "/> <polygon style="fill:#fed12f" id="polygon934" points="111,100 51,88 111,26 "/> <polygon style="fill:#fff3cb" id="polygon936" points="217,144 141,205 211,257 "/> <polygon style="fill:#fff3cb" id="polygon938" transform="rotate(140,91.982123,202.37661)" points="127.84571,161.16396 56.118534,168.85889 118.73141,243.58926 "/> <polygon style="fill:#ffdd63" id="polygon940" transform="rotate(-53,187.64886,90.616899)" points="162.67918,146.18451 134.02675,35.049287 241.27098,54.405816 "/> <polygon style="fill:#ffedac" id="polygon942" transform="rotate(-53,112.70066,170.14882)" points="101.89824,213.72364 57.7008,126.82378 167.70052,126.574 "/> <polygon style="fill:#ffdd63" id="polygon944" transform="rotate(-53,148.56988,267.401)" points="194.44787,311.00043 102.69188,242.40861 193.84987,223.80157 "/> <polygon style="fill:#ffdd63" id="polygon946" transform="rotate(-53,214,200.5)" points="249.86099,227.31864 167.07165,232.10664 260.92835,168.89336 "/> <polygon style="fill:#ffdd63" id="polygon948" transform="rotate(-53,55.981655,127.40799)" points="110.98151,154.85305 0.98179637,155.10283 84.456238,99.713142 "/> <polygon style="fill:#fee382" id="polygon950" transform="rotate(-53,254,138)" points="215.87367,170.48666 226.94103,112.06138 292.12633,105.51334 "/> <polygon style="fill:#fef1c0" id="polygon952" transform="rotate(160,146.32089,50.144248)" points="171.25385,84.912875 96.078439,57.551263 196.56334,15.375621 "/> </g> </g> </g> </g></svg></a></li>`):$("#social").append(`<li><a href="${val}" target="_blank" title="${key}"><i class="fab fa-${key}" aria-hidden="true"></i></a></li>`)})}}function languageChecker(){var symbol=document.getElementById("language-symbol");return symbol.textContent=window.location.href.startsWith(`${siteUrl}/en/`)?"en":"fr",$("#language-symbol").on("click",function(e){"en"==symbol.textContent?window.location=`${siteUrl}/${config["fallback-url"]||"preambule"}`:window.location=`${siteUrl}/en`}),symbol}function initPrint(title,author,pubDate){var collection=document.querySelector(".swiper-slide-active .post-content .editor-content"),WinPrint=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");WinPrint.document.write(`\n\t\t<link rel="stylesheet" type="text/css" href="${printStyleUrl}"></link>\n\t\t<h1>${title}</h1>\n\t\t<small style="display: block">${author}</small>\n\t\t<date>${new Date(pubDate).toLocaleString()}</date>\n\t\t${collection.innerHTML}\n\t\t<script>\n\t\t\tdocument.addEventListener('contextmenu', event => event.preventDefault());\n\t\t\twindow.print();\n\t\t<\/script>\n\t`),WinPrint.document.close(),WinPrint.focus()}function initLanguageSwitcher(){return $("#language-switcher-en").on("click",function(e){localStorage.setItem("zvikov-lang","en"),window.location=`${siteUrl}/en`}),$("#language-switcher-fr").on("click",function(e){localStorage.setItem("zvikov-lang","fr"),window.location=`${siteUrl}/prologue`}),language=window.location.href.startsWith(`${siteUrl}/en/`)?"en":"fr",(current=localStorage.getItem("zvikov-lang")||"fr")!==language&&(localStorage.setItem("zvikov-lang",language),current=language),current;var language,current}function initColorSwitcher(){var saved_color=localStorage.getItem("zvikov-color");["dark","light"].includes(saved_color)?($("body").addClass(saved_color),$("#color-switcher").attr("data-color","light"===saved_color?"dark":"light ")):($("body").addClass("light"),$("#color-switcher").attr("data-color","dark")),$("#color-switcher").on("click",function(e){var setColor=$("#color-switcher").attr("data-color"),otherColor="light"===setColor?"dark":"light";$("body").addClass(setColor),$("body").removeClass(otherColor),$("#color-switcher").attr("data-color",otherColor),localStorage.setItem("zvikov-color",setColor)})}function initLightbox(){document.querySelectorAll(".kg-gallery-image img").forEach(function(image){var container=image.closest(".kg-gallery-image"),ratio=image.attributes.width.value/image.attributes.height.value;container.style.flex=ratio+" 1 0%"}),$(".kg-gallery-image img").each(function(index,el){$("<a href='"+$(this).attr("src")+"' class='zoom'></a>").insertAfter($(this)),$(this).appendTo($(this).next("a"))}),$(".zoom").fluidbox();var expanded=!1;$(".fluidbox__wrap").click(function(){expanded?($(".loop .next a.active").css({opacity:1}),$(".loop .prev a.active").css({opacity:1}),expanded=!1):($(".loop .next a.active").css({opacity:0}),$(".loop .prev a.active").css({opacity:0}),expanded=!0)})}var action=getParameterByName("action"),stripe=getParameterByName("stripe"),success=getParameterByName("success"),language=initLanguageSwitcher(),language_symbol=languageChecker();initColorSwitcher(),$("#donorwall-iframe").on("load",function(){setTimeout(function(){$(".swiper-wrapper").height($(".swiper-slide-active").height())},50)}),jQuery(document).ready(function($){$("#contact-trigger").click(function(){$("#menu").modal("hide")}),buildSocial(),"subscribe"==action&&$("body").addClass("subscribe-success"),"signup"==action&&(window.location=`${siteUrl}/signup/?action=checkout`),"checkout"==action&&$("body").addClass("signup-success"),"signin"!=action||null!==success&&"true"!==success||$("body").addClass("signin-success"),"signin"==action&&"false"===success&&$("body").addClass("signin-failure"),"success"==stripe&&$("body").addClass("checkout-success"),"billing-update-success"==stripe&&$("body").addClass("billing-success"),"billing-update-cancel"==stripe&&$("body").addClass("billing-cancel"),$(".notification-close").click(function(){$(this).parent().addClass("closed");var uri=window.location.toString();if(uri.indexOf("?")>0){var clean_uri=uri.substring(0,uri.indexOf("?"));window.history.replaceState({},document.title,clean_uri)}}),$(".account-menu-avatar").click(function(event){$(this).toggleClass("active"),event.stopPropagation()}),$(".lang-menu").click(function(event){$(this).toggleClass("active"),event.stopPropagation()}),$(".account-menu-dropdown").click(function(event){event.stopPropagation()}),$("body").click(function(){$(".account-menu-avatar").removeClass("active"),$(".lang-menu").removeClass("active")});var progressBar=document.querySelector("#reading-progress"),lastScrollY=window.scrollY,lastWindowHeight=window.innerHeight,ticking=!1;function requestTick(){ticking||requestAnimationFrame(update),ticking=!0}function update(){if(progressBar){var triggerOffset=progressBar.offsetHeight+$("#main-header").height()+$(".swiper-slide.swiper-slide-active .post-cover").height(),progressMax=$(".swiper-slide.swiper-slide-active .post-content").height()-lastWindowHeight-window.innerHeight;$("#reading-progress").css("width",lastScrollY>=triggerOffset?(lastScrollY-triggerOffset)/(progressMax+2*triggerOffset)*100+"%":0),ticking=!1}}window.addEventListener("scroll",function(){lastScrollY=window.scrollY,requestTick()},{passive:!0}),window.addEventListener("resize",function(){lastWindowHeight=window.innerHeight,requestTick()},!1),update();var activeSlide,countAllPosts,allPosts,swiperPosts,checkHistoryOnChange,ghostAPI=new GhostContentAPI({url:config["content-api-host"],key:config["content-api-key"],version:"v3"}),w=Math.max(document.documentElement.clientWidth,window.innerWidth||0),currentPageNext=(Math.max(document.documentElement.clientHeight,window.innerHeight||0),1),currentPagePrev=1,pathname=window.location.pathname,filter="",firstPostIndex=0,readLaterPosts=[],noBookmarksMessage=$(".no-bookmarks").html(),monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];function imageInDiv(){$(".swiper-slide:not(.swiper-slide-active) .article-container .post-content img").each(function(index,el){var parent=$(this).parent();parent.hasClass("img-holder")||parent.parent().hasClass("img-holder")||(parent.addClass("img-holder"),parent.prepend("<span></span>"),$(this).prependTo(parent.find("span")))})}function removeValue(arr){for(var what,ax,a=arguments,L=a.length;L>1&&arr.length;)for(what=a[--L];-1!==(ax=arr.indexOf(what));)arr.splice(ax,1);return arr}function readLater(content,readLaterPosts){return void 0!==Cookies.get("zvikov-read-later")&&($.each(readLaterPosts,function(index,val){$('.read-later[data-id="'+val+'"]').addClass("active")}),bookmarks(readLaterPosts)),$(content).find(".read-later").each(function(index,el){$(this).on("click",function(event){event.preventDefault();var id=$(this).attr("data-id");$(this).hasClass("active")?removeValue(readLaterPosts,id):readLaterPosts.push(id),$('.read-later[data-id="'+id+'"]').each(function(index,el){$(this).toggleClass("active")}),$("header .btns a .counter").addClass("shake"),setTimeout(function(){$("header .btns a .counter").removeClass("shake")},300),Cookies.set("zvikov-read-later",readLaterPosts,{expires:365}),bookmarks(readLaterPosts)})}),readLaterPosts}function bookmarks(readLaterPosts){if($(".bookmark-container").empty(),readLaterPosts.length){var filter=readLaterPosts.toString();filter="comment_id:["+filter+"]",ghostAPI.posts.browse({limit:"all",filter,include:"tags"}).then(results=>{$(".bookmark-container").empty();var tags=[];$.each(results,function(index,val){val.primary_tag?-1===$.inArray(val.primary_tag.name,tags)&&tags.push(val.primary_tag.name):-1===$.inArray("Other",tags)&&tags.push("Other")}),tags.sort(),$.each(tags,function(index,val){var tag=val;"Other"==val&&(tag=$(".bookmark-container").attr("data-other")),$(".bookmark-container").append("<h5>"+tag+'</h5><ul data-tag="'+val+'" class="list-box"></ul>')}),$.each(results,function(index,val){var dateSplit=val.published_at.split("T");dateSplit=dateSplit[0].split("-");var month=monthNames[dateSplit[1]-1],date=moment(dateSplit[2]+"-"+month+"-"+dateSplit[1],"DD-MM-YYYY").format("DD MMM YYYY"),url=`/${val.slug}`,appendTo=val.primary_tag?`.bookmark-container ul[data-tag="${val.primary_tag.name}"]`:'.bookmark-container ul[data-tag="Other"]';$(appendTo).append(`\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<time>${date}</time>\n\t\t\t\t\t\t\t\t<a href="#" class="read-later active" data-id="${val.comment_id}"></a>\n\t\t\t\t\t\t\t\t<a href="${url}">${val.title}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t`)}),$(".bookmark-container").find(".read-later").each(function(index,el){$(this).on("click",function(event){event.preventDefault();var id=$(this).attr("data-id");$(this).hasClass("active")?removeValue(readLaterPosts,id):readLaterPosts.push(id),$('.read-later[data-id="'+id+'"]').each(function(index,el){$(this).toggleClass("active")}),Cookies.set("zvikov-read-later",readLaterPosts,{expires:365}),bookmarks(readLaterPosts)})}),results?$("header .counter").removeClass("hidden").text(results.length):($("header .counter").addClass("hidden"),$(".bookmark-container").append('<p class="no-bookmarks"></p>'),$(".no-bookmarks").html(noBookmarksMessage))}).catch(err=>{console.error(err)})}else $("header .counter").addClass("hidden"),$(".bookmark-container").append('<p class="no-bookmarks"></p>'),$(".no-bookmarks").html(noBookmarksMessage)}function loadNextPost(maxPages,nextPage,allPosts,swiperPosts){if(currentPageNext!=maxPages){if(currentPageNext++,$("body").hasClass("paged")&&(console.log("hasClass:paged",pathname),pathname="/"),nextPage=pathname+"page/"+currentPageNext+"/",$("body").hasClass("post-template")){if(currentPageNext>allPosts.length-1)return;nextPage="/"+allPosts[currentPageNext].slug}$.get(nextPage,function(content){parseInt(nextPage.replace(/[^0-9]/gi,"")),content=$(content);var currentIndex=parseInt($(".loop .swiper-slide:last-child .pagination-number:first-child b").text())+1;content.find(".pagination-number").append("<b>"+currentIndex+"</b>/"+countAllPosts),readingTime(content.find("#content .loop .swiper-slide")),content.find("#content .loop .swiper-slide").addClass("loaded").removeClass("first"),swiperPosts.appendSlide(content.find("#content .loop .swiper-slide")),imageInDiv(),$(".loop .next a, .loop .prev a").hasClass("active")||$(".loop .next a, .loop .prev a").addClass("active"),$("pre:not(.hljs)").each(function(i,block){hljs.highlightBlock(block)}),readLaterPosts=readLater($(".loop .swiper-slide:last-child"),readLaterPosts)})}}function loadPrevPost(maxPages,prevPage,allPosts,swiperPosts){if(!(currentPagePrev<1)){if(currentPagePrev--,$("body").hasClass("paged"))pathname="/";else if(($("body").hasClass("home-template")||$("body").hasClass("author-template")||$("body").hasClass("tag-template"))&&0==currentPagePrev)return;prevPage=pathname+"page/"+currentPagePrev+"/",$("body").hasClass("post-template")&&(prevPage="/"+allPosts[currentPagePrev].slug),$.get(prevPage,function(content){parseInt(prevPage.replace(/[^0-9]/gi,"")),content=$(content);var currentIndex=parseInt($(".loop .swiper-slide:first-child .pagination-number:first-child b").text())-1;content.find(".pagination-number").append("<b>"+currentIndex+"</b>/"+countAllPosts),readingTime(content.find("#content .loop .swiper-slide")),content.find("#content .loop .swiper-slide").addClass("loaded").removeClass("first"),swiperPosts.prependSlide($(content).find("#content .loop .swiper-slide")),imageInDiv(),$(".loop .next a, .loop .prev a").hasClass("active")||$(".loop .next a, .loop .prev a").addClass("active"),$("pre:not(.hljs)").each(function(i,block){hljs.highlightBlock(block)}),readLaterPosts=readLater($(".loop .swiper-slide:first-child"),readLaterPosts)})}}function readingTime(content){var readingTime=content.find(".reading-time");readingTime.length&&("< 1 min read"==readingTime.text()?readingTime.text("<1m"):readingTime.text(parseInt(readingTime.text())+"m"),readingTime.removeClass("d-none"))}$("#content .loop .swiper-slide").addClass("first"),imageInDiv(),readingTime($("#content .loop .swiper-slide")),initLightbox(),void 0!==Cookies.get("zvikov-read-later")&&(readLaterPosts=JSON.parse(Cookies.get("zvikov-read-later"))),readLaterPosts=readLater($("#content .loop .swiper-slide"),readLaterPosts),$(window).on("load",function(event){swiperPosts=new Swiper("#content .loop .swiper-container",{slidesPerView:1,spaceBetween:30,centeredSlides:!0,autoHeight:!0,simulateTouch:!1,allowTouchMove:!1,navigation:{nextEl:"#content .loop .next a",prevEl:"#content .loop .prev a"}}),checkHistoryOnChange=0,swiperPosts.on("slideChangeTransitionEnd",function(event){if(1!=checkHistoryOnChange){var value=$(".swiper-slide-active").attr("data-history"),url=window.location.origin+"/"+value+"/";history.pushState({value},null,url)}checkHistoryOnChange=0,update(),initLightbox(),observeSlide(),$(".swiper-slide-active .lb-item").attr("data-gallery",$(".swiper-slide-active").attr("data-history")),$(".kg-gallery-card img").fluidbox()}),pathname=pathname.replace(/#(.*)$/g,"").replace("///g","/"),$("body").hasClass("paged")&&(currentPageNext=parseInt(pathname.replace(/[^0-9]/gi,"")),currentPagePrev=parseInt(pathname.replace(/[^0-9]/gi,""))),"undefined"!=typeof maxPages&&null!==maxPages||(maxPages=0),$("body").hasClass("tag-template")&&(filter="tag:"+$(".tag-title").attr("data-tag")),$("body").hasClass("author-template")&&(filter="author:"+$(".author").attr("data-author")),filter="en"==language?(filter.length>0?filter+"+":"")+"tag:hash-en":(filter.length>0?filter+"+":"")+"tag:-hash-en",ghostAPI.posts.browse({limit:"all",filter,order:"published_at ASC"}).then(data=>{if(allPosts=data,countAllPosts=data.meta.pagination.total,maxPages=countAllPosts,firstPostIndex=0,$("body").hasClass("post-template")||$(".pagination-number").append("<b>"+(firstPostIndex+1)+"</b>/"+countAllPosts),$("body").hasClass("post-template"))$.each(allPosts,function(index,val){val.comment_id==$(".loop .swiper-slide:last-child .article-container .read-later").attr("data-id")&&($(".pagination-number").append("<b>"+(index+1)+"</b>/"+countAllPosts),currentPageNext=index,currentPagePrev=index)});else{if($("#homepage").length||$("body").hasClass("subscribe")||$("body").hasClass("home-template"))return void $("a.btn.btn-lg.btn-primary").attr("href",allPosts[0].slug);if($("body").hasClass("subscribe")||$("body").hasClass("page-template")||$(".error-content").length)return}if(1==firstPostIndex)for(var i=0;i<=1;i++)loadNextPost(maxPages,void 0,allPosts,swiperPosts),loadPrevPost(maxPages,void 0,allPosts,swiperPosts);else loadNextPost(maxPages,void 0,allPosts,swiperPosts),loadPrevPost(maxPages,void 0,allPosts,swiperPosts);$(".post-btns").removeClass("invisible"),swiperPosts.on("slideChange",function(event){$(".loop .swiper-slide.first").removeClass("first").addClass("loaded"),1==(activeSlide=swiperPosts.activeIndex)&&setTimeout(function(){loadPrevPost(maxPages,void 0,allPosts,swiperPosts)},300),activeSlide>=swiperPosts.slides.length-2&&loadNextPost(maxPages,void 0,allPosts,swiperPosts),$(".post-btns").removeClass("invisible")})}).catch(err=>console.error(err)),observeSlide()}),w<768?$(".next, .prev").stick_in_parent({offset_top:100}).on("sticky_kit:bottom",function(e){$(".next").addClass("bottom")}).on("sticky_kit:unbottom",function(e){$(".next").removeClass("bottom")}):$(".next, .prev").stick_in_parent({offset_top:225}),new GhostSearch({host:config["content-api-host"],key:config["content-api-key"],input:"#search-field",results:"#results",api:{parameters:{fields:["title","slug","published_at","primary_tag","comment_id"],include:"tags"}},on:{afterDisplay:function(results){$("#results").empty();var tags=[];$.each(results,function(index,val){val.obj.primary_tag?-1===$.inArray(val.obj.primary_tag.name,tags)&&tags.push(val.obj.primary_tag.name):-1===$.inArray("Other",tags)&&tags.push("Other")}),tags.sort(),$.each(tags,function(index,val){var tag=val;"Other"==val&&(tag=$("#results").attr("data-other")),$("#results").append("<h5>"+tag+'</h5><ul data-tag="'+val+'" class="list-box"></ul>')}),$.each(results,function(index,val){var dateSplit=val.obj.published_at.split("T");dateSplit=dateSplit[0].split("-");var month=monthNames[dateSplit[1]-1],date=moment(dateSplit[2]+"-"+month+"-"+dateSplit[1],"DD-MM-YYYY").format("DD MMM YYYY"),url=`/${val.obj.slug}`,appendTo=val.obj.primary_tag?`#results ul[data-tag="${val.obj.primary_tag.name}"]`:'#results ul[data-tag="Other"]';$(appendTo).append(`\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<time>${date}</time>\n\t\t\t\t\t\t\t<a href="#" class="read-later" data-id="${val.obj.comment_id}"></a>\n\t\t\t\t\t\t\t<a href="${url}">${val.obj.title}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t`)}),readLaterPosts=readLater($("#results"),readLaterPosts)}}}),$("#search").on("shown.bs.modal",function(e){$("#search-field").focus()}),$(window).on("resize",function(event){w=Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientHeight,window.innerHeight||0),w<768?($(".next, .prev").trigger("sticky_kit:detach"),$(".next, .prev").stick_in_parent({offset_top:100}).on("sticky_kit:bottom",function(e){$(".next").addClass("bottom")}).on("sticky_kit:unbottom",function(e){$(".next").removeClass("bottom")})):($(".next, .prev").trigger("sticky_kit:detach"),$(".next, .prev").stick_in_parent({offset_top:225})),setTimeout(function(){$(".swiper-wrapper").height($(".swiper-slide-active").height())},300)}),window.history&&window.history.pushState&&$(window).on("popstate",function(){checkHistoryOnChange=1;var check=0;$.each(swiperPosts.slides,function(index,val){null!=window.history.state?(window.history.state.value==val.dataset.history&&swiperPosts.slideTo(index),""==window.history.state.value&&check++):check++}),check>0&&swiperPosts.slideTo(0)}),$("pre code").each(function(i,block){hljs.highlightBlock(block)})});
//# sourceMappingURL=main.js.map