const e=new Swiper(".slider",{direction:"vertical",loop:!0,loopAdditionalSlides:0,speed:5e3,autoplay:{delay:7e3},effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".pagination",clickable:!0},on:{slideChange:function(){var e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e.textContent=t}},navigation:{nextEl:".btnY"}});document.querySelectorAll(".moreBtn").forEach(t=>{t.addEventListener("click",()=>{e.slideTo(3)})}),new Swiper(".serts-swiper-container",{loop:!0,slidesPerView:3,effect:"coverflow",coverflowEffect:{rotate:50,slideShadows:!1,depth:100,scale:1},pagination:{el:".pagin-btn-group",clickable:!0},navigation:{prevEl:".serts-btn-prev",nextEl:".serts-btn-next"}}),new Swiper(".review-swiper-container",{loop:!0,slidesPerView:1,speed:2e3,parallax:!0,autoplay:{delay:5e3},effect:"slide",pagination:{el:".review-swiper-pagin",clickable:!0},navigation:{prevEl:".review-swiper-prev",nextEl:".review-swiper-next"}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".ques-main-block-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),c=t.querySelector(".minus-btn"),s=t.querySelector(".open-answer");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".open-answer").classList.add("hidden"),e.querySelector(".plus-btn").classList.remove("hidden"),e.querySelector(".minus-btn").classList.add("hidden"))}),s.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden")}),c.addEventListener("click",function(){s.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".header__filii, .header__contacts-item-btn"),t=document.querySelectorAll(".filii-popap, .popap-phone"),n=t=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("show"),e.forEach(e=>e.classList.add("active"))},10)):(t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden"),e.forEach(e=>e.classList.remove("active"))},500))};e.forEach((e,c)=>{e.addEventListener("click",e=>{e.stopPropagation(),n(t[c])})}),document.addEventListener("click",c=>{t.forEach((t,s)=>{t.contains(c.target)||e[s].contains(c.target)||t.classList.contains("hidden")||n(t)})}),document.addEventListener("keydown",c=>{"Escape"===c.key&&t.forEach((t,c)=>{t.classList.contains("hidden")||(n(t),e[c].blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".form-popap-btn"),t=document.querySelector(".overlay-container"),n=document.querySelector(".backdrop-overlay"),c=document.querySelector(".backdrop-overlay-submit"),s=document.querySelectorAll(".close-img, .cls-btn, .back-btn a"),o=e=>{t.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10)},i=e=>{e.classList.remove("show"),setTimeout(()=>{n.classList.contains("show")||c.classList.contains("show")||t.classList.add("hidden")},500)};e.forEach(e=>{e.addEventListener("click",()=>{o(n),e.blur()})}),document.addEventListener("submit",e=>{e.target.matches("#overlay-contact-form, #contact-form")&&(e.preventDefault(),i(n),setTimeout(()=>{o(c)},500))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(n.classList.contains("show")?i(n):c.classList.contains("show")&&(i(c),document.activeElement.blur()))}),t.addEventListener("click",e=>{e.target===n&&n.classList.contains("show")?i(n):e.target===c&&c.classList.contains("show")&&i(c)}),s.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),n.classList.contains("show")?i(n):c.classList.contains("show")&&(i(c),document.activeElement.blur())})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("imageModal"),t=document.getElementById("modalImage"),n=document.querySelector(".close-img-btn");document.querySelectorAll(".zoomable-image").forEach(n=>{n.onclick=function(){e.style.display="block",t.src=this.src}}),n.addEventListener("click",function(){e.style.display="none"}),window.onclick=function(t){t.target==e&&(e.style.display="none")},document.addEventListener("keydown",function(t){"Escape"===t.key&&(e.style.display="none")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".coop-vacan-item");e.forEach(t=>{let n=t.querySelector(".plus-btn"),c=t.querySelector(".minus-btn"),s=t.querySelector(".coop-vacan-item-opis");n.addEventListener("click",function(){e.forEach(e=>{e!==t&&(e.querySelector(".coop-vacan-item-opis"),e.querySelector(".plus-btn"),e.querySelector(".minus-btn"))}),s.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden"),t.classList.add("vacan-open")}),c.addEventListener("click",function(){s.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden"),t.classList.remove("vacan-open")})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".vacan-btn-link"),t=document.querySelector(".vacan-form-submit"),n=t.querySelector(".vacan-form-submit-btn-close"),c=document.querySelector(".vacan-overlay-close"),s=document.querySelector(".vacan-submit-overlay"),o=document.querySelector(".vacan-btn-link-submit"),i=document.querySelector(".open-form");e.forEach(function(e){e.addEventListener("click",function(){let n=e.closest(".coop-vacan-item"),c=n.querySelector(".coop-vacan-item-opis"),s=n.querySelector(".minus-btn"),o=n.querySelector(".plus-btn");c.classList.add("hidden"),n.classList.remove("vacan-open"),s.classList.add("hidden"),o.classList.remove("hidden"),t.classList.remove("hidden")})}),n.addEventListener("click",function(){t.classList.add("hidden")}),o.addEventListener("click",function(e){e.preventDefault(),function(){let e=document.getElementById("vacan-name").value.trim(),t=document.getElementById("vacan-phone").value.trim(),n=document.getElementById("vacan-privacy-policy").checked;return!!e&&!!t&&!!n}()?(t.classList.add("hidden"),s.classList.remove("hidden")):alert("Please fill in all required fields.")}),i.addEventListener("click",function(){t.classList.remove("hidden")}),c.addEventListener("click",function(){s.classList.add("hidden")})});
//# sourceMappingURL=index.f16a5d15.js.map
