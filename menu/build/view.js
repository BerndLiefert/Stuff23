console.log("Hello World! (from create-block-fixed-header block)"),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".wp-block-create-block-fixed-header");let o=0;window.addEventListener("scroll",(function(){let t=window.scrollY||document.documentElement.scrollTop;t>o?(e.classList.remove("sticky"),e.style.top=-60):e.classList.add("sticky"),o=t}))}));