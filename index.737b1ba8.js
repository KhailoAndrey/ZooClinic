document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("intro-video"),t=document.getElementById("video-container"),n=document.getElementById("slider-container"),d=()=>{let e=new Swiper(".slider",{direction:"vertical",loop:!0,speed:5e3,autoplay:!1,effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".pagination",clickable:!0},navigation:{nextEl:".btnY",prevEl:".swiper-button-prev"},on:{init:function(){},slideChange:function(){let e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e&&(e.textContent=t)},autoplayStart:function(){},autoplayStop:function(){}}});return setTimeout(()=>{e.params.autoplay={delay:6e3,disableOnInteraction:!1},e.autoplay.start()},1e3),document.querySelectorAll(".moreBtn").forEach(t=>{t.addEventListener("click",()=>{e.slideTo(3)})}),e};window.matchMedia("(max-width: 768px)").matches?(t.style.display="none",n.classList.remove("hidden"),d()):(e.load(),e.onended=function(){t.classList.add("hidden"),n.classList.remove("hidden"),d()})}),new Swiper(".serts-swiper-container",{loop:!0,effect:"coverflow",speed:2e3,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:14},1200:{slidesPerView:2,spaceBetween:10},1440:{slidesPerView:3,spaceBetween:18}},coverflowEffect:{rotate:50,slideShadows:!1,depth:100,scale:1},pagination:{el:".pagin-btn-group",clickable:!0},navigation:{prevEl:".serts-btn-prev",nextEl:".serts-btn-next"}}),new Swiper(".review-swiper-container",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin",clickable:!0},navigation:{prevEl:".review-swiper-prev",nextEl:".review-swiper-next"}}),new Swiper(".review-swiper-container-tablet",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin-tablet",clickable:!0},navigation:{prevEl:".review-swiper-prev-tablet",nextEl:".review-swiper-next-tablet"}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".ques-main-block-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),d=t.querySelector(".minus-btn"),o=t.querySelector(".open-answer");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".open-answer").classList.add("hidden"),e.querySelector(".plus-btn").classList.remove("hidden"),e.querySelector(".minus-btn").classList.add("hidden"))}),o.classList.remove("hidden"),n.classList.add("hidden"),d.classList.remove("hidden")}),d.addEventListener("click",function(){o.classList.add("hidden"),n.classList.remove("hidden"),d.classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".header__filii, .header__contacts-item-btn"),t=document.querySelectorAll(".filii-popap, .popap-phone"),n=(t,n)=>{let d=window.innerHeight;n.getBoundingClientRect().top>d/2?(t.style.top="",t.style.bottom="80px"):(t.style.bottom="",t.style.top="80px"),t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("show"),e.forEach(e=>e.classList.add("active"))},10)):(t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden"),e.forEach(e=>e.classList.remove("active"))},500))};e.forEach((e,d)=>{e.addEventListener("click",o=>{o.stopPropagation(),n(t[d],e)})}),document.addEventListener("click",d=>{t.forEach((t,o)=>{t.contains(d.target)||e[o].contains(d.target)||t.classList.contains("hidden")||n(t,e[o])})}),document.addEventListener("keydown",d=>{"Escape"===d.key&&t.forEach((t,d)=>{t.classList.contains("hidden")||(n(t,e[d]),e[d].blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".form-popap-btn, .btn-contact-mob, .burg-visit-btn"),t=document.querySelector(".overlay-container"),n=document.querySelector(".backdrop-overlay"),d=document.querySelector(".backdrop-overlay-submit"),o=document.querySelectorAll(".close-img, .cls-btn, .back-btn a"),i=e=>{t.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10)},c=e=>{e.classList.remove("show"),setTimeout(()=>{n.classList.contains("show")||d.classList.contains("show")||t.classList.add("hidden")},500)};e.forEach(e=>{e.addEventListener("click",()=>{i(n),e.blur()})}),document.addEventListener("submit",e=>{e.target.matches("#overlay-contact-form, #contact-form")&&(e.preventDefault(),c(n),setTimeout(()=>{i(d)},500))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(n.classList.contains("show")?c(n):d.classList.contains("show")&&(c(d),document.activeElement.blur()))}),t.addEventListener("click",e=>{e.target===n&&n.classList.contains("show")?c(n):e.target===d&&d.classList.contains("show")&&c(d)}),o.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),n.classList.contains("show")?c(n):d.classList.contains("show")&&(c(d),document.activeElement.blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("imageModal"),t=document.getElementById("modalImage"),n=document.querySelector(".close-img-btn");document.querySelectorAll(".zoomable-image").forEach(n=>{n.onclick=function(){e.style.display="block",t.src=this.src}}),n.addEventListener("click",function(){e.style.display="none"}),window.onclick=function(t){t.target==e&&(e.style.display="none")},document.addEventListener("keydown",function(t){"Escape"===t.key&&(e.style.display="none")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".coop-vacan-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),d=t.querySelector(".minus-btn"),o=t.querySelector(".coop-vacan-item-opis");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&e.classList.add("hidden")}),o.classList.remove("hidden"),n.classList.add("hidden"),d.classList.remove("hidden"),t.classList.add("vacan-open")}),d.addEventListener("click",function(){o.classList.add("hidden"),n.classList.remove("hidden"),d.classList.add("hidden"),t.classList.remove("vacan-open"),e.forEach(e=>{e.classList.remove("hidden")})})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".vacan-btn-link"),t=document.querySelector(".vacan-form-submit"),n=t.querySelector(".vacan-form-submit-btn-close"),d=document.querySelector(".vacan-overlay-close"),o=document.querySelector(".vacan-submit-overlay"),i=document.querySelector(".vacan-btn-link-submit"),c=document.querySelector(".open-form"),s=document.querySelectorAll(".coop-vacan-item");e.forEach(function(e){e.addEventListener("click",function(){let n=e.closest(".coop-vacan-item"),d=n.querySelector(".coop-vacan-item-opis"),o=n.querySelector(".minus-btn"),i=n.querySelector(".plus-btn");d.classList.add("hidden"),n.classList.remove("vacan-open"),o.classList.add("hidden"),i.classList.remove("hidden"),t.classList.remove("hidden")})}),n.addEventListener("click",function(){t.classList.add("hidden"),s.forEach(e=>{e.classList.remove("hidden")})}),i.addEventListener("click",function(e){e.preventDefault(),function(){let e=document.getElementById("vacan-name").value.trim(),t=document.getElementById("vacan-phone").value.trim(),n=document.getElementById("vacan-privacy-policy").checked;return!!e&&!!t&&!!n}()?(t.classList.add("hidden"),s.forEach(e=>{e.classList.remove("hidden")}),o.classList.remove("hidden")):alert("Please fill in all required fields.")}),c.addEventListener("click",function(){t.classList.remove("hidden")}),d.addEventListener("click",function(){o.classList.add("hidden")})}),document.querySelectorAll(".burger-mob-btn").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".burger-overlay").classList.remove("hidden")})}),document.querySelector(".burger-btn-close").addEventListener("click",function(){document.querySelector(".burger-overlay").classList.add("hidden")}),document.querySelectorAll(".burger-overlay a").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".burger-overlay").classList.add("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".fil-mob-btn"),t=document.querySelector(".fil-mob-popap"),n=e.querySelector(".show"),d=e.querySelector(".hidden");function o(){t.classList.add("hidden"),n.classList.remove("hidden"),d.classList.add("hidden")}e.addEventListener("click",function(){t.classList.contains("hidden")?(t.classList.remove("hidden"),n.classList.add("hidden"),d.classList.remove("hidden")):o()}),document.addEventListener("click",function(n){t.contains(n.target)||e.contains(n.target)||o()})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".sms-popap-btn"),t=document.querySelector(".sms-popap"),n=t.querySelector("button");e.addEventListener("click",function(){t.classList.remove("hidden")}),n.addEventListener("click",function(){t.classList.add("hidden")}),document.addEventListener("click",function(n){t.contains(n.target)||e.contains(n.target)||t.classList.add("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".tel-popap-btn"),t=document.querySelector(".tel-popap"),n=e.querySelector(".show"),d=e.querySelector(".hidden");e.addEventListener("click",function(){t.classList.toggle("hidden"),n.classList.toggle("hidden"),d.classList.toggle("hidden")}),document.addEventListener("click",function(o){t.contains(o.target)||e.contains(o.target)||(t.classList.add("hidden"),n.classList.remove("hidden"),d.classList.add("hidden"))})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".burg-filii-btn"),t=document.querySelector(".fil-burg-popap");function n(){t.classList.add("hidden")}e.addEventListener("click",function(e){e.stopPropagation(),t.classList.contains("hidden")?t.classList.remove("hidden"):n()}),document.addEventListener("click",function(d){t.contains(d.target)||e.contains(d.target)||n()})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".burg-tel-btn"),t=document.querySelector(".tel-burg-popap");function n(){t.classList.add("hidden")}e.addEventListener("click",function(e){e.stopPropagation(),t.classList.contains("hidden")?t.classList.remove("hidden"):n()}),document.addEventListener("click",function(d){t.contains(d.target)||e.contains(d.target)||n()})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".overlay-map-container"),t=document.querySelector(".map-overlay-close"),n=document.querySelector(".map-overlay"),d=document.querySelector(".map-block-frame");function o(){e.classList.add("hidden"),d.src="about:blank"}t.addEventListener("click",o),document.addEventListener("keydown",function(e){"Escape"===e.key&&o()}),document.addEventListener("click",function(t){e.classList.contains("hidden")||n.contains(t.target)||o()}),document.querySelectorAll(".show-map-link").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();let o=t.getAttribute("data-map");o&&(d.src="",setTimeout(function(){d.src=o,e.classList.remove("hidden")},300))})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".pharm-choose-btn"),t=document.querySelector(".pharm-choose-container"),n=document.querySelector(".farm-overlay-close"),d=document.querySelector(".pharm-choose-overlay"),o=document.querySelector(".pharmacy-popap");function i(){t.style.display="none"}e.addEventListener("click",function(){t.style.display="flex"}),n.addEventListener("click",i),document.addEventListener("keydown",function(e){"Escape"===e.key&&i()}),t.addEventListener("click",function(e){e.target===t&&i()}),d.addEventListener("click",function(e){o.contains(e.target)||i()})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".slide4-plus-btn"),t=document.querySelector(".slide4-minus-btn"),n=document.querySelector(".owner-slide4-mob");e.addEventListener("click",function(){e.classList.add("hidden"),t.classList.remove("hidden"),n.classList.remove("hidden")}),t.addEventListener("click",function(){t.classList.add("hidden"),e.classList.remove("hidden"),n.classList.add("hidden")}),document.addEventListener("click",function(d){n.contains(d.target)||e.contains(d.target)||t.contains(d.target)||(n.classList.add("hidden"),t.classList.add("hidden"),e.classList.remove("hidden"))})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".cnibb-numbers");e.forEach(e=>{e.originalValue=parseInt(e.textContent.replace(/\s+/g,""),10),e.textContent="0"});let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let n=e.target,d=n.originalValue;setTimeout(()=>(function(e,t){let n=t/125,d=0;!function o(){(d+=n)<t?(e.textContent=Math.ceil(d).toLocaleString(),requestAnimationFrame(o)):e.textContent=t.toLocaleString()}()})(n,d),500),t.unobserve(n)}})},{threshold:.1});e.forEach(e=>{t.observe(e)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".preps-btn"),t=document.querySelector(".preps-intro-backdrop-overlay"),n=document.getElementById("preps-intro-overlay"),d=document.getElementById("preps-intro-closeOverlayBtn"),o=document.getElementById("preps-intro-youtubeVideo");function i(e){"Escape"===e.key&&c()}function c(){(function(){let e=o.src;o.src="",o.src=e})(),n.style.display="none",t.style.display="none",e.blur(),window.removeEventListener("keydown",i)}e.addEventListener("click",()=>{t.style.display="flex",n.style.display="flex",window.addEventListener("keydown",i)}),d.addEventListener("click",c),n.addEventListener("click",e=>{e.target===n&&c()}),o.addEventListener("play",()=>{window.addEventListener("keydown",i)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".slide1-video-btn"),t=document.querySelector(".preps-intro-backdrop-overlay"),n=document.getElementById("banner-slide1-overlay"),d=document.getElementById("preps-intro-closeOverlayBtn"),o=document.getElementById("preps-intro-youtubeVideo");function i(e){"Escape"===e.key&&c()}function c(){(function(){let e=o.src;o.src="",o.src=e})(),n.style.display="none",t.style.display="none",e.blur(),window.removeEventListener("keydown",i)}e.addEventListener("click",()=>{t.style.display="flex",n.style.display="flex",window.addEventListener("keydown",i)}),d.addEventListener("click",c),n.addEventListener("click",e=>{e.target===n&&c()}),o.addEventListener("play",()=>{window.addEventListener("keydown",i)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".slide4-video-btn"),t=document.querySelector(".preps-intro-backdrop-overlay"),n=document.getElementById("banner-slide4-overlay"),d=document.getElementById("preps-intro-closeOverlayBtn"),o=document.getElementById("preps-intro-youtubeVideo");function i(e){"Escape"===e.key&&c()}function c(){(function(){let e=o.src;o.src="",o.src=e})(),n.style.display="none",t.style.display="none",e.blur(),window.removeEventListener("keydown",i)}e.addEventListener("click",()=>{t.style.display="flex",n.style.display="flex",window.addEventListener("keydown",i)}),d.addEventListener("click",c),n.addEventListener("click",e=>{e.target===n&&c()}),o.addEventListener("play",()=>{window.addEventListener("keydown",i)})});
//# sourceMappingURL=index.737b1ba8.js.map
