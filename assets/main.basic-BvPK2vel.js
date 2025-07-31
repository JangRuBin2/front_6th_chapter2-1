const T=()=>{const e=document.createElement("button");return e.id="add-to-cart",e.innerHTML="Add to Cart",e.className="w-full py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-all",e},I=()=>{const e=document.createElement("div");return e.id="cart-items",e},w=()=>{const e=document.createElement("div");return e.className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 flex-1 overflow-hidden",e},M=()=>{const e=document.createElement("div");return e.className="mb-8",e.innerHTML=`
    <h1 class="text-xs font-medium tracking-extra-wide uppercase mb-2">🛒 Hanghae Online Store</h1>
    <div class="text-5xl tracking-tight leading-none">Shopping Cart</div>
    <p id="item-count" class="text-sm text-gray-500 font-normal mt-3">🛍️ 0 items in cart</p>
  `,e},q=()=>{const e=document.createElement("div");return e.className="bg-white border border-gray-200 p-8 overflow-y-auto",e},O=()=>{const e=document.createElement("div");return e.className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform translate-x-full transition-transform duration-300",e.innerHTML=`
    <button class="absolute top-4 right-4 text-gray-500 hover:text-black" onclick="document.querySelector('.fixed.inset-0').classList.add('hidden'); this.parentElement.classList.add('translate-x-full')">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <h2 class="text-xl font-bold mb-4">📖 이용 안내</h2>
    <div class="mb-6">
      <h3 class="text-base font-bold mb-3">💰 할인 정책</h3>
      <div class="space-y-3">
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">개별 상품</p>
          <p class="text-gray-700 text-xs pl-2">
            • 키보드 10개↑: 10%<br>
            • 마우스 10개↑: 15%<br>
            • 모니터암 10개↑: 20%<br>
            • 스피커 10개↑: 25%
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">전체 수량</p>
          <p class="text-gray-700 text-xs pl-2">• 30개 이상: 25%</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">특별 할인</p>
          <p class="text-gray-700 text-xs pl-2">
            • 화요일: +10%<br>
            • ⚡번개세일: 20%<br>
            • 💝추천할인: 5%
          </p>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-base font-bold mb-3">🎁 포인트 적립</h3>
      <div class="space-y-3">
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">기본</p>
          <p class="text-gray-700 text-xs pl-2">• 구매액의 0.1%</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">추가</p>
          <p class="text-gray-700 text-xs pl-2">
            • 화요일: 2배<br>
            • 키보드+마우스: +50p<br>
            • 풀세트: +100p<br>
            • 10개↑: +20p / 20개↑: +50p / 30개↑: +100p
          </p>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 pt-4 mt-4">
      <p class="text-xs font-bold mb-1">💡 TIP</p>
      <p class="text-2xs text-gray-600 leading-relaxed">
        • 화요일 대량구매 = MAX 혜택<br>
        • ⚡+💝 중복 가능<br>
        • 상품4 = 품절
      </p>
    </div>
  `,e},A=()=>{const e=document.createElement("div");return e.className="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300",e},D=()=>{const e=document.createElement("button");return e.className="fixed top-4 right-4 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors z-50",e.innerHTML=`
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `,e},P=()=>{const e=document.createElement("select");return e.id="product-select",e.className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3",e},H=()=>{const e=document.createElement("div");return e.className="bg-black text-white p-8 flex flex-col",e.innerHTML=`
    <h2 class="text-xs font-medium mb-5 tracking-extra-wide uppercase">Order Summary</h2>
    <div class="flex-1 flex flex-col">
      <div id="summary-details" class="space-y-3"></div>
      <div class="mt-auto">
        <div id="discount-info" class="mb-4"></div>
        <div id="cart-total" class="pt-5 border-t border-white/10">
          <div class="flex justify-between items-baseline">
            <span class="text-sm uppercase tracking-wider">Total</span>
            <div class="text-2xl tracking-tight">₩0</div>
          </div>
          <div id="loyalty-points" class="text-xs text-blue-400 mt-2 text-right">적립 포인트: 0p</div>
        </div>
        <div id="tuesday-special" class="mt-4 p-3 bg-white/10 rounded-lg hidden">
          <div class="flex items-center gap-2">
            <span class="text-2xs">🎉</span>
            <span class="text-xs uppercase tracking-wide">Tuesday Special 10% Applied</span>
          </div>
        </div>
      </div>
    </div>
    <button class="w-full py-4 bg-white text-black text-sm font-normal uppercase tracking-super-wide cursor-pointer mt-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30">
      Proceed to Checkout
    </button>
    <p class="mt-4 text-2xs text-white/60 text-center leading-relaxed">
      Free shipping on all orders.<br>
      <span id="points-notice">Earn loyalty points with purchase.</span>
    </p>
  `,e},B=()=>{const e=document.createElement("div");return e.className="mb-6 pb-6 border-b border-gray-200",e},R=()=>{const e=document.createElement("div");return e.id="stock-status",e.className="text-xs text-red-500 mt-3 whitespace-pre-line",e},g={KEYBOARD:"p1",MOUSE:"p2",MONITOR_ARM:"p3",LAPTOP_POUCH:"p4",SPEAKER:"p5"},N=[{id:g.KEYBOARD,name:"버그 없애는 키보드",val:1e4,originalVal:1e4,q:50,onSale:!1,suggestSale:!1},{id:g.MOUSE,name:"생산성 폭발 마우스",val:2e4,originalVal:2e4,q:30,onSale:!1,suggestSale:!1},{id:g.MONITOR_ARM,name:"거북목 탈출 모니터암",val:3e4,originalVal:3e4,q:20,onSale:!1,suggestSale:!1},{id:g.LAPTOP_POUCH,name:"에러 방지 노트북 파우치",val:15e3,originalVal:15e3,q:0,onSale:!1,suggestSale:!1},{id:g.SPEAKER,name:"코딩할 때 듣는 Lo-Fi 스피커",val:25e3,originalVal:25e3,q:10,onSale:!1,suggestSale:!1}];class ${constructor(){this.events=new Map,this.elements=new Map,this.handlers={addToCart:null,cartItemClick:null,manualToggle:null,manualOverlayClick:null}}registerElement(t,n){this.elements.set(t,n)}registerHandler(t,n){this.handlers[t]=n}bindEvents(){this.bindAddToCartEvent(),this.bindCartItemClickEvent(),this.bindManualToggleEvent(),this.bindManualOverlayClickEvent()}bindAddToCartEvent(){const t=this.elements.get("add-to-cart");t&&this.handlers.addToCart&&t.addEventListener("click",this.handlers.addToCart)}bindCartItemClickEvent(){const t=this.elements.get("cart-items");t&&this.handlers.cartItemClick&&t.addEventListener("click",this.handlers.cartItemClick)}bindManualToggleEvent(){const t=document.querySelector(".fixed.top-4.right-4");t&&this.handlers.manualToggle&&t.addEventListener("click",this.handlers.manualToggle)}bindManualOverlayClickEvent(){const t=document.querySelector(".fixed.inset-0.bg-black\\/50");t&&this.handlers.manualOverlayClick&&t.addEventListener("click",this.handlers.manualOverlayClick)}unbindEvents(){const t=this.elements.get("add-to-cart"),n=this.elements.get("cart-items"),a=document.querySelector(".fixed.top-4.right-4"),l=document.querySelector(".fixed.inset-0.bg-black\\/50");t&&this.handlers.addToCart&&t.removeEventListener("click",this.handlers.addToCart),n&&this.handlers.cartItemClick&&n.removeEventListener("click",this.handlers.cartItemClick),a&&this.handlers.manualToggle&&a.removeEventListener("click",this.handlers.manualToggle),l&&this.handlers.manualOverlayClick&&l.removeEventListener("click",this.handlers.manualOverlayClick)}updateHandler(t,n){this.handlers[t]=n,this.rebindEvent(t)}rebindEvent(t){switch(t){case"addToCart":this.bindAddToCartEvent();break;case"cartItemClick":this.bindCartItemClickEvent();break;case"manualToggle":this.bindManualToggleEvent();break;case"manualOverlayClick":this.bindManualOverlayClickEvent();break}}initialize(t){this.registerElement("add-to-cart",t.addBtn),this.registerElement("cart-items",t.cartDisplay),this.registerElement("product-select",t.sel),this.registerHandler("addToCart",t.handleAddToCart),this.registerHandler("cartItemClick",t.handleCartDispClick),this.registerHandler("manualToggle",t.handleManualToggle),this.registerHandler("manualOverlayClick",t.handleManualOverlayClick),this.bindEvents()}cleanup(){this.unbindEvents(),this.events.clear(),this.elements.clear()}}const j=new $,i={prodList:N,bonusPoint:0,itemCount:0,totalAmount:0,lastSel:null},S=R(),h=P(),y=T(),p=I();function V(){const e=w(),t=q(),n=B(),a=H(),l=D(),s=A(),r=O(),o=M(),d=document.getElementById("app");n.appendChild(h),n.appendChild(y),n.appendChild(S),t.appendChild(n),t.appendChild(p),e.appendChild(t),e.appendChild(a),s.appendChild(r),d.appendChild(o),d.appendChild(e),d.appendChild(l),d.appendChild(s),j.initialize({addBtn:y,cartDisplay:p,sel:h,handleAddToCart:dt,handleCartDispClick:ct,handleManualToggle:rt,handleManualOverlayClick:ot}),L(),f(),x();const m=Math.random()*1e4;setTimeout(()=>{setInterval(function(){let c=Math.floor(Math.random()*i.prodList.length),u=i.prodList[c];u.q>0&&!u.onSale&&(u.val=Math.round(u.originalVal*80/100),u.onSale=!0,alert("⚡번개세일! "+u.name+"이(가) 20% 할인 중입니다!"),f(),C())},3e4)},m),setTimeout(function(){setInterval(function(){if(p.children.length,i.lastSel){let c=null;for(let u=0;u<i.prodList.length;u++)if(i.prodList[u].id!==i.lastSel&&i.prodList[u].q>0&&!i.prodList[u].suggestSale){c=i.prodList[u];break}c&&(alert("💝 "+c.name+"은(는) 어떠세요? 지금 구매하시면 5% 추가 할인!"),c.val=Math.round(c.val*95/100),c.suggestSale=!0,f(),C())}},6e4)},Math.random()*2e4)}function f(){let e,t,n;h.innerHTML="",e=0;for(let a=0;a<i.prodList.length;a++){let l=i.prodList[a];e=e+l.q}for(let a=0;a<i.prodList.length;a++)(function(){let l=i.prodList[a];t=document.createElement("option"),t.value=l.id,n="",l.onSale&&(n+=" ⚡SALE"),l.suggestSale&&(n+=" 💝추천"),l.q===0?(t.textContent=l.name+" - "+l.val+"원 (품절)"+n,t.disabled=!0,t.className="text-gray-400"):l.onSale&&l.suggestSale?(t.textContent="⚡💝"+l.name+" - "+l.originalVal+"원 → "+l.val+"원 (25% SUPER SALE!)",t.className="text-purple-600 font-bold"):l.onSale?(t.textContent="⚡"+l.name+" - "+l.originalVal+"원 → "+l.val+"원 (20% SALE!)",t.className="text-red-500 font-bold"):l.suggestSale?(t.textContent="💝"+l.name+" - "+l.originalVal+"원 → "+l.val+"원 (5% 추천할인!)",t.className="text-blue-500 font-bold"):t.textContent=l.name+" - "+l.val+"원"+n,h.appendChild(t)})();e<50?h.style.borderColor="orange":h.style.borderColor=""}function U(){const e=p.children;let t=0,n=0;const a=[];for(let l=0;l<e.length;l++){const s=e[l],r=v(s.id);if(!r)continue;const o=s.querySelector(".quantity-number"),d=parseInt(o.textContent),m=r.val*d;n+=d,t+=m;const c=k(r,d);c>0&&a.push({name:r.name,discount:c*100,productId:r.id}),X(s,d)}return{subTotal:t,itemCount:n,itemDiscounts:a}}function k(e,t){return t<10?0:{[g.KEYBOARD]:.1,[g.MOUSE]:.15,[g.MONITOR_ARM]:.2,[g.LAPTOP_POUCH]:.05,[g.SPEAKER]:.25}[e.id]||0}function _(e,t,n){let a=e,l=0;for(let o=0;o<p.children.length;o++){const d=p.children[o],m=v(d.id);if(!m)continue;const c=d.querySelector(".quantity-number"),u=parseInt(c.textContent),b=k(m,u);if(b>0){const E=m.val*u;a-=E*b}}t>=30?(a=e*.75,l=.25):l=(e-a)/e;const r=new Date().getDay()===2;return r&&a>0&&(a*=.9,l=1-a/e),{finalTotal:a,discountRate:l,isTuesday:r}}function K(e,t,n,a,l,s){const r=tt();r&&(r.innerHTML="",!(e<=0)&&(z(r),r.innerHTML+=`
    <div class="border-t border-white/10 my-3"></div>
    <div class="flex justify-between text-sm tracking-wide">
      <span>Subtotal</span>
      <span>₩${e.toLocaleString()}</span>
    </div>
  `,F(r,t,n,s),r.innerHTML+=`
    <div class="flex justify-between text-sm tracking-wide text-gray-400">
      <span>Shipping</span>
      <span>Free</span>
    </div>
  `))}function z(e){const t=p.children;for(let n=0;n<t.length;n++){const a=t[n],l=v(a.id);if(!l)continue;const s=a.querySelector(".quantity-number"),r=parseInt(s.textContent),o=l.val*r;e.innerHTML+=`
      <div class="flex justify-between text-xs tracking-wide text-gray-400">
        <span>${l.name} x ${r}</span>
        <span>₩${o.toLocaleString()}</span>
      </div>
    `}}function F(e,t,n,a){t>=30?e.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-green-400">
        <span class="text-xs">🎉 대량구매 할인 (30개 이상)</span>
        <span class="text-xs">-25%</span>
      </div>
    `:n.forEach(l=>{e.innerHTML+=`
        <div class="flex justify-between text-sm tracking-wide text-green-400">
          <span class="text-xs">${l.name} (10개↑)</span>
          <span class="text-xs">-${l.discount}%</span>
        </div>
      `}),a&&(e.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-purple-400">
        <span class="text-xs">🌟 화요일 추가 할인</span>
        <span class="text-xs">-10%</span>
      </div>
    `)}function Q(e,t){const n=Z();n&&(n.textContent="₩"+Math.round(e).toLocaleString()),Y(e),W(t)}function Y(e){const t=et();if(!t)return;const n=Math.floor(e/1e3),a=n>0?`적립 포인트: ${n}p`:"적립 포인트: 0p";t.textContent=a,t.style.display="block"}function G(e,t,n){const a=nt();if(a&&(a.innerHTML="",n>0&&t>0)){const l=e-t;a.innerHTML=`
      <div class="bg-green-500/20 rounded-lg p-3">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs uppercase tracking-wide text-green-400">총 할인율</span>
          <span class="text-sm font-medium text-green-400">${(n*100).toFixed(1)}%</span>
        </div>
        <div class="text-2xs text-gray-300">₩${Math.round(l).toLocaleString()} 할인되었습니다</div>
      </div>
    `}}function W(e){const t=at();if(!t)return;const n=parseInt(t.textContent.match(/\d+/)||0);t.textContent=`🛍️ ${e} items in cart`,n!==e&&t.setAttribute("data-changed","true")}function X(e,t){e.querySelectorAll(".text-lg, .text-xs").forEach(a=>{a.classList.contains("text-lg")&&(a.style.fontWeight=t>=10?"bold":"normal")})}function J(e,t){const n=lt();n&&(e&&t>0?n.classList.remove("hidden"):n.classList.add("hidden"))}function v(e){return i.prodList.find(t=>t.id===e)}function Z(){return document.querySelector("#cart-total .text-2xl")}function tt(){return document.getElementById("summary-details")}function et(){return document.getElementById("loyalty-points")}function nt(){return document.getElementById("discount-info")}function at(){return document.getElementById("item-count")}function lt(){return document.getElementById("tuesday-special")}function x(){i.totalAmount=0,i.itemCount=0;const{subTotal:e,itemCount:t,itemDiscounts:n}=U(),{finalTotal:a,discountRate:l,isTuesday:s}=_(e,t);i.totalAmount=a,i.itemCount=t,K(e,t,n,a,l,s),Q(a,t),G(e,a,l),J(s,a),it(),st()}let st=function(){let e,t,n,a,l,s,r;if(p.children.length===0){document.getElementById("loyalty-points").style.display="none";return}e=Math.floor(i.totalAmount/1e3),t=0,n=[],e>0&&(t=e,n.push("기본: "+e+"p")),new Date().getDay()===2&&e>0&&(t=e*2,n.push("화요일 2배")),a=!1,l=!1,s=!1,r=p.children;for(const d of r){let m=null;for(let c=0;c<i.prodList.length;c++)if(i.prodList[c].id===d.id){m=i.prodList[c];break}m&&(m.id===g.KEYBOARD?a=!0:m.id===g.MOUSE?l=!0:m.id===g.MONITOR_ARM&&(s=!0))}a&&l&&(t=t+50,n.push("키보드+마우스 세트 +50p")),a&&l&&s&&(t=t+100,n.push("풀세트 구매 +100p")),i.itemCount>=30?(t=t+100,n.push("대량구매(30개+) +100p")):i.itemCount>=20?(t=t+50,n.push("대량구매(20개+) +50p")):i.itemCount>=10&&(t=t+20,n.push("대량구매(10개+) +20p")),i.bonusPoint=t;let o=document.getElementById("loyalty-points");o&&(i.bonusPoint>0?(o.innerHTML='<div>적립 포인트: <span class="font-bold">'+i.bonusPoint+'p</span></div><div class="text-2xs opacity-70 mt-1">'+n.join(", ")+"</div>",o.style.display="block"):(o.textContent="적립 포인트: 0p",o.style.display="block"))};function L(){return i.prodList.reduce((e,t)=>e+t.q,0)}let it=function(){let e;e="",L(),i.prodList.forEach(function(t){t.q<5&&(t.q>0?e=e+t.name+": 재고 부족 ("+t.q+`개 남음)
`:e=e+t.name+`: 품절
`)}),S.textContent=e};function C(){let e=0,t=0,n;for(;p.children[t];){let a=p.children[t].querySelector(".quantity-number");e+=a?parseInt(a.textContent):0,t++}for(e=0,t=0;t<p.children.length;t++)e+=parseInt(p.children[t].querySelector(".quantity-number").textContent);n=p.children;for(let a=0;a<n.length;a++){let l=n[a].id,s=null;for(let r=0;r<i.prodList.length;r++)if(i.prodList[r].id===l){s=i.prodList[r];break}if(s){let r=n[a].querySelector(".text-lg"),o=n[a].querySelector("h3");s.onSale&&s.suggestSale?(r.innerHTML='<span class="line-through text-gray-400">₩'+s.originalVal.toLocaleString()+'</span> <span class="text-purple-600">₩'+s.val.toLocaleString()+"</span>",o.textContent="⚡💝"+s.name):s.onSale?(r.innerHTML='<span class="line-through text-gray-400">₩'+s.originalVal.toLocaleString()+'</span> <span class="text-red-500">₩'+s.val.toLocaleString()+"</span>",o.textContent="⚡"+s.name):s.suggestSale?(r.innerHTML='<span class="line-through text-gray-400">₩'+s.originalVal.toLocaleString()+'</span> <span class="text-blue-500">₩'+s.val.toLocaleString()+"</span>",o.textContent="💝"+s.name):(r.textContent="₩"+s.val.toLocaleString(),o.textContent=s.name)}}x()}function rt(){const e=document.querySelector(".fixed.inset-0.bg-black\\/50"),t=document.querySelector(".fixed.right-0.top-0.h-full");e&&t&&(e.classList.toggle("hidden"),t.classList.toggle("translate-x-full"))}function ot(e){const t=document.querySelector(".fixed.right-0.top-0.h-full");e.target===e.currentTarget&&t&&(e.currentTarget.classList.add("hidden"),t.classList.add("translate-x-full"))}function dt(){let e=h.value,t=!1;for(let a=0;a<i.prodList.length;a++)if(i.prodList[a].id===e){t=!0;break}if(!e||!t)return;let n=null;for(let a=0;a<i.prodList.length;a++)if(i.prodList[a].id===e){n=i.prodList[a];break}if(n&&n.q>0){let a=document.getElementById(n.id);if(a){let l=a.querySelector(".quantity-number"),s=parseInt(l.textContent)+1;s<=n.q+parseInt(l.textContent)?(l.textContent=s,n.q--):alert("재고가 부족합니다.")}else{let l=document.createElement("div");l.id=n.id,l.className="grid grid-cols-[80px_1fr_auto] gap-5 py-5 border-b border-gray-100 first:pt-0 last:border-b-0 last:pb-0",l.innerHTML=`
        <div class="w-20 h-20 bg-gradient-black relative overflow-hidden">
          <div class="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
        <div>
          <h3 class="text-base font-normal mb-1 tracking-tight">${n.onSale&&n.suggestSale?"⚡💝":n.onSale?"⚡":n.suggestSale?"💝":""}${n.name}</h3>
          <p class="text-xs text-gray-500 mb-0.5 tracking-wide">PRODUCT</p>
          <p class="text-xs text-black mb-3">${n.onSale||n.suggestSale?'<span class="line-through text-gray-400">₩'+n.originalVal.toLocaleString()+'</span> <span class="'+(n.onSale&&n.suggestSale?"text-purple-600":n.onSale?"text-red-500":"text-blue-500")+'">₩'+n.val.toLocaleString()+"</span>":"₩"+n.val.toLocaleString()}</p>
          <div class="flex items-center gap-4">
            <button class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" data-product-id="${n.id}" data-change="-1">−</button>
            <span class="quantity-number text-sm font-normal min-w-[20px] text-center tabular-nums">1</span>
            <button class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" data-product-id="${n.id}" data-change="1">+</button>
          </div>
        </div>
        <div class="text-right">
          <div class="text-lg mb-2 tracking-tight tabular-nums">${n.onSale||n.suggestSale?'<span class="line-through text-gray-400">₩'+n.originalVal.toLocaleString()+'</span> <span class="'+(n.onSale&&n.suggestSale?"text-purple-600":n.onSale?"text-red-500":"text-blue-500")+'">₩'+n.val.toLocaleString()+"</span>":"₩"+n.val.toLocaleString()}</div>
          <a class="remove-item text-2xs text-gray-500 uppercase tracking-wider cursor-pointer transition-colors border-b border-transparent hover:text-black hover:border-black" data-product-id="${n.id}">Remove</a>
        </div>
      `,p.appendChild(l),n.q--}x(),i.lastSel=e}}function ct(e){let t=e.target;if(t.classList.contains("quantity-change")||t.classList.contains("remove-item")){let n=t.dataset.productId,a=document.getElementById(n),l=null;for(let s=0;s<i.prodList.length;s++)if(i.prodList[s].id===n){l=i.prodList[s];break}if(t.classList.contains("quantity-change")){let s=parseInt(t.dataset.change),r=a.querySelector(".quantity-number"),o=parseInt(r.textContent),d=o+s;d>0&&d<=l.q+o?(r.textContent=d,l.q-=s):d<=0?(l.q+=o,a.remove()):alert("재고가 부족합니다.")}else if(t.classList.contains("remove-item")){let s=a.querySelector(".quantity-number"),r=parseInt(s.textContent);l.q+=r,a.remove()}l&&l.q<5,x(),f()}}V();
