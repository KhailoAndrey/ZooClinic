const e=new Swiper(".slider",{direction:"vertical",loop:!0,loopAdditionalSlides:0,speed:5e3,effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".pagination",clickable:!0},on:{slideChange:function(){var e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e.textContent=t}},navigation:{nextEl:".btnY"}});document.querySelectorAll(".moreBtn").forEach(t=>{t.addEventListener("click",()=>{e.slideTo(3)})}),new Swiper(".serts-swiper-container",{loop:!0,effect:"coverflow",speed:2e3,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:14},1200:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:3,spaceBetween:18}},coverflowEffect:{rotate:50,slideShadows:!1,depth:100,scale:1},pagination:{el:".pagin-btn-group",clickable:!0},navigation:{prevEl:".serts-btn-prev",nextEl:".serts-btn-next"}}),new Swiper(".review-swiper-container",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin",clickable:!0},navigation:{prevEl:".review-swiper-prev",nextEl:".review-swiper-next"}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".ques-main-block-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),s=t.querySelector(".minus-btn"),c=t.querySelector(".open-answer");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".open-answer").classList.add("hidden"),e.querySelector(".plus-btn").classList.remove("hidden"),e.querySelector(".minus-btn").classList.add("hidden"))}),c.classList.remove("hidden"),n.classList.add("hidden"),s.classList.remove("hidden")}),s.addEventListener("click",function(){c.classList.add("hidden"),n.classList.remove("hidden"),s.classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".header__filii, .header__contacts-item-btn, .pharm-choose-btn"),t=document.querySelectorAll(".filii-popap, .popap-phone, .pharmacy-popap"),n=t=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("show"),e.forEach(e=>e.classList.add("active"))},10)):(t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden"),e.forEach(e=>e.classList.remove("active"))},500))};e.forEach((e,s)=>{e.addEventListener("click",e=>{e.stopPropagation(),n(t[s])})}),document.addEventListener("click",s=>{t.forEach((t,c)=>{t.contains(s.target)||e[c].contains(s.target)||t.classList.contains("hidden")||n(t)})}),document.addEventListener("keydown",s=>{"Escape"===s.key&&t.forEach((t,s)=>{t.classList.contains("hidden")||(n(t),e[s].blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".form-popap-btn"),t=document.querySelector(".overlay-container"),n=document.querySelector(".backdrop-overlay"),s=document.querySelector(".backdrop-overlay-submit"),c=document.querySelectorAll(".close-img, .cls-btn, .back-btn a"),i=e=>{t.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10)},o=e=>{e.classList.remove("show"),setTimeout(()=>{n.classList.contains("show")||s.classList.contains("show")||t.classList.add("hidden")},500)};e.forEach(e=>{e.addEventListener("click",()=>{i(n),e.blur()})}),document.addEventListener("submit",e=>{e.target.matches("#overlay-contact-form, #contact-form")&&(e.preventDefault(),o(n),setTimeout(()=>{i(s)},500))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(n.classList.contains("show")?o(n):s.classList.contains("show")&&(o(s),document.activeElement.blur()))}),t.addEventListener("click",e=>{e.target===n&&n.classList.contains("show")?o(n):e.target===s&&s.classList.contains("show")&&o(s)}),c.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),n.classList.contains("show")?o(n):s.classList.contains("show")&&(o(s),document.activeElement.blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("imageModal"),t=document.getElementById("modalImage"),n=document.querySelector(".close-img-btn");document.querySelectorAll(".zoomable-image").forEach(n=>{n.onclick=function(){e.style.display="block",t.src=this.src}}),n.addEventListener("click",function(){e.style.display="none"}),window.onclick=function(t){t.target==e&&(e.style.display="none")},document.addEventListener("keydown",function(t){"Escape"===t.key&&(e.style.display="none")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".coop-vacan-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),s=t.querySelector(".minus-btn"),c=t.querySelector(".coop-vacan-item-opis");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&e.classList.add("hidden")}),c.classList.remove("hidden"),n.classList.add("hidden"),s.classList.remove("hidden"),t.classList.add("vacan-open")}),s.addEventListener("click",function(){c.classList.add("hidden"),n.classList.remove("hidden"),s.classList.add("hidden"),t.classList.remove("vacan-open"),e.forEach(e=>{e.classList.remove("hidden")})})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".vacan-btn-link"),t=document.querySelector(".vacan-form-submit"),n=t.querySelector(".vacan-form-submit-btn-close"),s=document.querySelector(".vacan-overlay-close"),c=document.querySelector(".vacan-submit-overlay"),i=document.querySelector(".vacan-btn-link-submit"),o=document.querySelector(".open-form"),a=document.querySelectorAll(".coop-vacan-item");e.forEach(function(e){e.addEventListener("click",function(){let n=e.closest(".coop-vacan-item"),s=n.querySelector(".coop-vacan-item-opis"),c=n.querySelector(".minus-btn"),i=n.querySelector(".plus-btn");s.classList.add("hidden"),n.classList.remove("vacan-open"),c.classList.add("hidden"),i.classList.remove("hidden"),t.classList.remove("hidden")})}),n.addEventListener("click",function(){t.classList.add("hidden"),a.forEach(e=>{e.classList.remove("hidden")})}),i.addEventListener("click",function(e){e.preventDefault(),function(){let e=document.getElementById("vacan-name").value.trim(),t=document.getElementById("vacan-phone").value.trim(),n=document.getElementById("vacan-privacy-policy").checked;return!!e&&!!t&&!!n}()?(t.classList.add("hidden"),a.forEach(e=>{e.classList.remove("hidden")}),c.classList.remove("hidden")):alert("Please fill in all required fields.")}),o.addEventListener("click",function(){t.classList.remove("hidden")}),s.addEventListener("click",function(){c.classList.add("hidden")})});
//# sourceMappingURL=index.4a32d797.js.map
