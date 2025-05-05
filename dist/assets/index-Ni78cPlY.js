(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("space-type"),n=document.getElementById("dynamic-inputs"),r=document.getElementById("result"),l=()=>{var o,c;const e=i.value;let t=0;if(e==="byt"){const s=document.getElementById("byt-size");s&&(t=1e3*parseFloat(s.value||0))}else e==="kancelar"?t=parseFloat(((o=document.getElementById("office-size"))==null?void 0:o.value)||0)*22:e==="airbnb"&&(t=parseInt(((c=document.getElementById("airbnb-count"))==null?void 0:c.value)||0)*600);t>0?(r.textContent=`Odhadovaná cena: ${t} Kč`,r.classList.remove("hidden")):(r.textContent="",r.classList.add("hidden"))};i.addEventListener("change",()=>{const e=i.value;n.innerHTML="",r.classList.add("hidden"),e==="byt"&&(n.innerHTML=`
        <label class="block mb-1 font-medium">Velikost bytu/domu</label>
        <select id="byt-size" class="w-full p-3 rounded border border-gray-300">
          <option value="1">1+kk</option>
          <option value="1.5">2+kk</option>
          <option value="2">3+kk</option>
          <option value="2.5">4+kk a větší</option>
        </select>
      `),e==="kancelar"&&(n.innerHTML=`
        <label class="block mb-1 font-medium">Rozloha kanceláře (m²)</label>
        <input id="office-size" type="number" class="w-full p-3 rounded border border-gray-300" placeholder="Např. 80">
      `),e==="airbnb"&&(n.innerHTML=`
        <label class="block mb-1 font-medium">Počet jednotek k úklidu</label>
        <input id="airbnb-count" type="number" class="w-full p-3 rounded border border-gray-300" placeholder="Např. 3">
      `),setTimeout(()=>{n.querySelectorAll("select, input").forEach(o=>o.addEventListener("input",l))},0)})});
