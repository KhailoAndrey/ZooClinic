new Swiper(".swiper",{direction:"vertical",loop:!0,speed:1500,autoplay:{delay:5e3},effect:"cube",cubeEffect:{slideShadows:!1},pagination:{el:".swiper-pagination",clickable:!0},on:{slideChange:function(){var e=document.querySelector(".count"),t=(this.realIndex+1).toString().padStart(2,"0");e.textContent=t}},navigation:{nextEl:".btnY"}});
//# sourceMappingURL=index.89c52d5e.js.map
