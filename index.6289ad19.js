!function(){let e=new Swiper(".slider",{direction:"vertical",loop:!0,loopAdditionalSlides:0,speed:7e3,autoplay:{delay:9e3},effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".pagination",clickable:!0},on:{slideChange:function(){var e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e.textContent=t}},navigation:{nextEl:".btnY"}});document.querySelectorAll(".moreBtn").forEach(t=>{t.addEventListener("click",()=>{e.slideTo(3)})}),new Swiper(".serts-swiper-container",{loop:!0,slidesPerView:3,effect:"coverflow",coverflowEffect:{rotate:50,slideShadows:!1,depth:100,scale:1},pagination:{el:".pagin-btn-group",clickable:!0},navigation:{prevEl:".serts-btn-prev",nextEl:".serts-btn-next"}}),new Swiper(".review-swiper-container",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin",clickable:!0},navigation:{prevEl:".review-swiper-prev",nextEl:".review-swiper-next"}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".ques-main-block-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),s=t.querySelector(".minus-btn"),o=t.querySelector(".open-answer");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".open-answer").classList.add("hidden"),e.querySelector(".plus-btn").classList.remove("hidden"),e.querySelector(".minus-btn").classList.add("hidden"))}),o.classList.remove("hidden"),n.classList.add("hidden"),s.classList.remove("hidden")}),s.addEventListener("click",function(){o.classList.add("hidden"),n.classList.remove("hidden"),s.classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".header__filii, .header__contacts-item-btn"),t=document.querySelectorAll(".filii-popap, .popap-phone"),n=t=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("show"),e.forEach(e=>e.classList.add("active"))},10)):(t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden"),e.forEach(e=>e.classList.remove("active"))},500))};e.forEach((e,s)=>{e.addEventListener("click",e=>{e.stopPropagation(),n(t[s])})}),document.addEventListener("click",s=>{t.forEach((t,o)=>{t.contains(s.target)||e[o].contains(s.target)||t.classList.contains("hidden")||n(t)})}),document.addEventListener("keydown",s=>{"Escape"===s.key&&t.forEach((t,s)=>{t.classList.contains("hidden")||(n(t),e[s].blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".form-popap-btn"),t=document.querySelector(".overlay-container"),n=document.querySelector(".backdrop-overlay"),s=document.querySelector(".backdrop-overlay-submit"),o=document.querySelectorAll(".close-img, .back-btn a"),i=e=>{t.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10)},a=e=>{e.classList.remove("show"),setTimeout(()=>{n.classList.contains("show")||s.classList.contains("show")||t.classList.add("hidden")},500)};e.forEach(e=>{e.addEventListener("click",()=>{i(n),e.blur()})}),document.addEventListener("submit",e=>{e.target.matches("#overlay-contact-form, #contact-form")&&(e.preventDefault(),a(n),setTimeout(()=>{i(s)},500))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(n.classList.contains("show")?a(n):s.classList.contains("show")&&a(s))}),t.addEventListener("click",e=>{e.target===n&&n.classList.contains("show")?a(n):e.target===s&&s.classList.contains("show")&&a(s)}),o.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),a(s)})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("imageModal"),t=document.getElementById("modalImage"),n=document.getElementsByClassName("close-img")[0];document.querySelectorAll(".zoomable-image").forEach(n=>{n.onclick=function(){e.style.display="block",t.src=this.src}}),n.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")},document.addEventListener("keydown",function(t){"Escape"===t.key&&(e.style.display="none")})})}();
//# sourceMappingURL=index.6289ad19.js.map
