const e=document.querySelectorAll(".slide"),t=document.querySelector(".pagination");let a=0;e.forEach((c,n)=>{let i=document.createElement("div");i.classList.add("pagination-button"),n===a&&i.classList.add("active"),i.addEventListener("click",()=>{var t;a=n,document.querySelector(".slide-container").style.transform=`translateY(${-(100*n)}%)`,t=a,e.forEach((e,a)=>{a===t?e.classList.add("active"):e.classList.remove("active")}),document.querySelectorAll(".pagination-button").forEach((e,t)=>{t===a?e.classList.add("active"):e.classList.remove("active")}),document.querySelector(".pagination .count").textContent=("0"+(a+1)).slice(-2)}),t.appendChild(i)});
//# sourceMappingURL=index.398d6936.js.map
