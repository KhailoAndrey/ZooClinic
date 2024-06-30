const e=new Swiper(".slider",{direction:"vertical",loop:!0,speed:5e3,autoplay:!1,effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".pagination",clickable:!0},on:{slideChange:function(){var e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e.textContent=t}},navigation:{nextEl:".btnY"}});setTimeout(()=>{e.params.autoplay={delay:5e3},e.autoplay.start()},1e4),document.querySelectorAll(".moreBtn").forEach(t=>{t.addEventListener("click",()=>{e.slideTo(3)})}),new Swiper(".serts-swiper-container",{loop:!0,effect:"coverflow",speed:2e3,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:14},1200:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:3,spaceBetween:18}},coverflowEffect:{rotate:50,slideShadows:!1,depth:100,scale:1},pagination:{el:".pagin-btn-group",clickable:!0},navigation:{prevEl:".serts-btn-prev",nextEl:".serts-btn-next"}}),new Swiper(".review-swiper-container",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin",clickable:!0},navigation:{prevEl:".review-swiper-prev",nextEl:".review-swiper-next"}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".ques-main-block-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),c=t.querySelector(".minus-btn"),d=t.querySelector(".open-answer");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".open-answer").classList.add("hidden"),e.querySelector(".plus-btn").classList.remove("hidden"),e.querySelector(".minus-btn").classList.add("hidden"))}),d.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden")}),c.addEventListener("click",function(){d.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".header__filii, .header__contacts-item-btn"),t=document.querySelectorAll(".filii-popap, .popap-phone"),n=t=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("show"),e.forEach(e=>e.classList.add("active"))},10)):(t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden"),e.forEach(e=>e.classList.remove("active"))},500))};e.forEach((e,c)=>{e.addEventListener("click",e=>{e.stopPropagation(),n(t[c])})}),document.addEventListener("click",c=>{t.forEach((t,d)=>{t.contains(c.target)||e[d].contains(c.target)||t.classList.contains("hidden")||n(t)})}),document.addEventListener("keydown",c=>{"Escape"===c.key&&t.forEach((t,c)=>{t.classList.contains("hidden")||(n(t),e[c].blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".form-popap-btn, .btn-contact-mob, .burg-visit-btn"),t=document.querySelector(".overlay-container"),n=document.querySelector(".backdrop-overlay"),c=document.querySelector(".backdrop-overlay-submit"),d=document.querySelectorAll(".close-img, .cls-btn, .back-btn a"),o=e=>{t.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10)},s=e=>{e.classList.remove("show"),setTimeout(()=>{n.classList.contains("show")||c.classList.contains("show")||t.classList.add("hidden")},500)};e.forEach(e=>{e.addEventListener("click",()=>{o(n),e.blur()})}),document.addEventListener("submit",e=>{e.target.matches("#overlay-contact-form, #contact-form")&&(e.preventDefault(),s(n),setTimeout(()=>{o(c)},500))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(n.classList.contains("show")?s(n):c.classList.contains("show")&&(s(c),document.activeElement.blur()))}),t.addEventListener("click",e=>{e.target===n&&n.classList.contains("show")?s(n):e.target===c&&c.classList.contains("show")&&s(c)}),d.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),n.classList.contains("show")?s(n):c.classList.contains("show")&&(s(c),document.activeElement.blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("imageModal"),t=document.getElementById("modalImage"),n=document.querySelector(".close-img-btn");document.querySelectorAll(".zoomable-image").forEach(n=>{n.onclick=function(){e.style.display="block",t.src=this.src}}),n.addEventListener("click",function(){e.style.display="none"}),window.onclick=function(t){t.target==e&&(e.style.display="none")},document.addEventListener("keydown",function(t){"Escape"===t.key&&(e.style.display="none")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".coop-vacan-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),c=t.querySelector(".minus-btn"),d=t.querySelector(".coop-vacan-item-opis");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&e.classList.add("hidden")}),d.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden"),t.classList.add("vacan-open")}),c.addEventListener("click",function(){d.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden"),t.classList.remove("vacan-open"),e.forEach(e=>{e.classList.remove("hidden")})})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".vacan-btn-link"),t=document.querySelector(".vacan-form-submit"),n=t.querySelector(".vacan-form-submit-btn-close"),c=document.querySelector(".vacan-overlay-close"),d=document.querySelector(".vacan-submit-overlay"),o=document.querySelector(".vacan-btn-link-submit"),s=document.querySelector(".open-form"),i=document.querySelectorAll(".coop-vacan-item");e.forEach(function(e){e.addEventListener("click",function(){let n=e.closest(".coop-vacan-item"),c=n.querySelector(".coop-vacan-item-opis"),d=n.querySelector(".minus-btn"),o=n.querySelector(".plus-btn");c.classList.add("hidden"),n.classList.remove("vacan-open"),d.classList.add("hidden"),o.classList.remove("hidden"),t.classList.remove("hidden")})}),n.addEventListener("click",function(){t.classList.add("hidden"),i.forEach(e=>{e.classList.remove("hidden")})}),o.addEventListener("click",function(e){e.preventDefault(),function(){let e=document.getElementById("vacan-name").value.trim(),t=document.getElementById("vacan-phone").value.trim(),n=document.getElementById("vacan-privacy-policy").checked;return!!e&&!!t&&!!n}()?(t.classList.add("hidden"),i.forEach(e=>{e.classList.remove("hidden")}),d.classList.remove("hidden")):alert("Please fill in all required fields.")}),s.addEventListener("click",function(){t.classList.remove("hidden")}),c.addEventListener("click",function(){d.classList.add("hidden")})}),document.querySelectorAll(".burger-mob-btn").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".burger-overlay").classList.remove("hidden")})}),document.querySelector(".burger-btn-close").addEventListener("click",function(){document.querySelector(".burger-overlay").classList.add("hidden")}),document.querySelectorAll(".burger-overlay a").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".burger-overlay").classList.add("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".fil-mob-btn"),t=document.querySelector(".fil-mob-popap"),n=e.querySelector(".show"),c=e.querySelector(".hidden");function d(){t.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden")}e.addEventListener("click",function(){t.classList.contains("hidden")?(t.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden")):d()}),document.addEventListener("click",function(n){t.contains(n.target)||e.contains(n.target)||d()})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".sms-popap-btn"),t=document.querySelector(".sms-popap"),n=t.querySelector("button");e.addEventListener("click",function(){t.classList.remove("hidden")}),n.addEventListener("click",function(){t.classList.add("hidden")}),document.addEventListener("click",function(n){t.contains(n.target)||e.contains(n.target)||t.classList.add("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".tel-popap-btn"),t=document.querySelector(".tel-popap"),n=e.querySelector(".show"),c=e.querySelector(".hidden");e.addEventListener("click",function(){t.classList.toggle("hidden"),n.classList.toggle("hidden"),c.classList.toggle("hidden")}),document.addEventListener("click",function(d){t.contains(d.target)||e.contains(d.target)||(t.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden"))})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".burg-filii-btn"),t=document.querySelector(".fil-burg-popap");function n(){t.classList.add("hidden")}e.addEventListener("click",function(e){e.stopPropagation(),t.classList.contains("hidden")?t.classList.remove("hidden"):n()}),document.addEventListener("click",function(c){t.contains(c.target)||e.contains(c.target)||n()})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".burg-tel-btn"),t=document.querySelector(".tel-burg-popap");function n(){t.classList.add("hidden")}e.addEventListener("click",function(e){e.stopPropagation(),t.classList.contains("hidden")?t.classList.remove("hidden"):n()}),document.addEventListener("click",function(c){t.contains(c.target)||e.contains(c.target)||n()})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".overlay-map-container"),t=document.querySelector(".map-overlay-close"),n=document.querySelector(".map-overlay"),c=document.querySelector(".map-block-frame");function d(){e.classList.add("hidden"),c.src="about:blank"}t.addEventListener("click",d),document.addEventListener("keydown",function(e){"Escape"===e.key&&d()}),document.addEventListener("click",function(t){e.classList.contains("hidden")||n.contains(t.target)||d()}),document.querySelectorAll(".show-map-link").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();let d=t.getAttribute("data-map");d&&(c.src="",setTimeout(function(){c.src=d,e.classList.remove("hidden")},300))})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".pharm-choose-btn"),t=document.querySelector(".pharm-choose-container"),n=document.querySelector(".farm-overlay-close"),c=document.querySelector(".pharm-choose-overlay");function d(){t.style.display="none"}e.addEventListener("click",function(){t.style.display="flex"}),n.addEventListener("click",d),document.addEventListener("keydown",function(e){"Escape"===e.key&&d()}),t.addEventListener("click",function(e){e.target===t&&d()}),c.addEventListener("click",function(e){e.stopPropagation()})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("intro-video"),t=document.getElementById("video-container"),n=document.getElementById("slider-container");e.load(),e.onended=function(){t.classList.add("hidden"),n.classList.remove("hidden")}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".slide4-plus-btn"),t=document.querySelector(".slide4-minus-btn"),n=document.querySelector(".owner-slide4-mob");e.addEventListener("click",function(){e.classList.add("hidden"),t.classList.remove("hidden"),n.classList.remove("hidden")}),t.addEventListener("click",function(){t.classList.add("hidden"),e.classList.remove("hidden"),n.classList.add("hidden")}),document.addEventListener("click",function(c){n.contains(c.target)||e.contains(c.target)||t.contains(c.target)||(n.classList.add("hidden"),t.classList.add("hidden"),e.classList.remove("hidden"))})});
//# sourceMappingURL=index.0d223997.js.map
