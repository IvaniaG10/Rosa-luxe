
/* Shared script: products data, cart (localStorage), helpers */
const PRODUCTS = {
  labiales: [
    {id:'lab1',name:'Labial Mate Luxe - Rosa',price:190,image:'https://images.unsplash.com/photo-1542089363-50f7f1b6b1f8?q=80&w=800'},
    {id:'lab2',name:'Set Labiales Mini',price:350,image:'https://images.unsplash.com/photo-1596464716121-9dfb2f0d3c9f?q=80&w=800'},
    {id:'lab3',name:'Gloss Brillo Perlado',price:130,image:'https://images.unsplash.com/photo-1547592180-1c4f7f3c9a7e?q=80&w=800'}
  ],
  polvos: [
    {id:'pol1',name:'Polvo Compacto Suave',price:180,image:'https://images.unsplash.com/photo-1593032465171-3a9a2b4a6a09?q=80&w=800'},
    {id:'pol2',name:'Polvo Translúcido HD',price:210,image:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800'},
    {id:'pol3',name:'Polvo Mineral Natural',price:240,image:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800'}
  ],
  bases:[
    {id:'bas1',name:'Base Velvet Blur',price:320,image:'https://images.unsplash.com/photo-1583336661545-3e3f9d9a3c23?q=80&w=800'},
    {id:'bas2',name:'Base Hidratante Larga Duración',price:420,image:'https://images.unsplash.com/photo-1565372919281-6b0f3f8a6f8f?q=80&w=800'},
    {id:'bas3',name:'BB Cream Suavizante',price:260,image:'https://images.unsplash.com/photo-1556228453-2f5d8a6a3b4c?q=80&w=800'}
  ],
  sombras:[
    {id:'som1',name:'Paleta Rosé Glow',price:450,image:'https://images.unsplash.com/photo-1600180758890-0c9b9b0f6af1?q=80&w=800'},
    {id:'som2',name:'Sombras Multicolor Pastel',price:350,image:'https://images.unsplash.com/photo-1585238342024-78d9b9d05463?q=80&w=800'},
    {id:'som3',name:'Sombra Duo Pastel',price:120,image:'https://images.unsplash.com/photo-1581888224888-ded2f0c9f7a3?q=80&w=800'}
  ],
  brochas:[
    {id:'bro1',name:'Brocha Contorno Pro',price:200,image:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800'},
    {id:'bro2',name:'Set Brochas Mini',price:260,image:'https://images.unsplash.com/photo-1520975918681-2b5f3f3d7b35?q=80&w=800'},
    {id:'bro3',name:'Brocha Polvo Deluxe',price:230,image:'https://images.unsplash.com/photo-1599949151457-0b5a1e7c6f65?q=80&w=800'}
  ],
  rubores:[
    {id:'rub1',name:'Rubor Rosado Glow',price:170,image:'https://images.unsplash.com/photo-1590502593749-99d1a1e5b8aa?q=80&w=800'},
    {id:'rub2',name:'Rubor Crema Natural',price:150,image:'https://images.unsplash.com/photo-1549492424-2b6ae6d1d9a8?q=80&w=800'},
    {id:'rub3',name:'Rubor Iluminador',price:210,image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'}
  ],
  correctores:[
    {id:'cor1',name:'Corrector Iluminador',price:150,image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'},
    {id:'cor2',name:'Corrector Cobertura Total',price:180,image:'https://images.unsplash.com/photo-1562158070-77f34a0b0b0f?q=80&w=800'},
    {id:'cor3',name:'Stick Corrector',price:140,image:'https://images.unsplash.com/photo-1598032899172-cb6f3f1a3a9f?q=80&w=800'}
  ],
  iluminadores:[
    {id:'ilu1',name:'Iluminador Perlado',price:220,image:'https://images.unsplash.com/photo-1509515837292-0a1b4c7f6c1d?q=80&w=800'},
    {id:'ilu2',name:'Glow Stick',price:180,image:'https://images.unsplash.com/photo-1517586979030-0e1f5b72b1f3?q=80&w=800'},
    {id:'ilu3',name:'Polvo Iluminador',price:240,image:'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800'}
  ],
  delineadores:[
    {id:'del1',name:'Delineador Líquido Fino',price:140,image:'https://images.unsplash.com/photo-1580906855280-1a1b0b6ef7a0?q=80&w=800'},
    {id:'del2',name:'Delineador Gel',price:160,image:'https://images.unsplash.com/photo-1547592180-1c4f7f3c9a7e?q=80&w=800'},
    {id:'del3',name:'Delineador Lápiz Pro',price:110,image:'https://images.unsplash.com/photo-1520975918681-2b5f3f3d7b35?q=80&w=800'}
  ],
  pestanas:[
    {id:'pes1',name:'Pestañas Postizas Dramáticas',price:320,image:'https://images.unsplash.com/photo-1520975918681-2b5f3f3d7b35?q=80&w=800'},
    {id:'pes2',name:'Pestañas Naturales',price:260,image:'https://images.unsplash.com/photo-1556228453-2f5d8a6a3b4c?q=80&w=800'},
    {id:'pes3',name:'Pegamento de Pestañas',price:90,image:'https://images.unsplash.com/photo-1547592180-1c4f7f3c9a7e?q=80&w=800'}
  ]
};

function saveCart(cart){ localStorage.setItem('rosa_cart', JSON.stringify(cart)); }
function readCart(){ return JSON.parse(localStorage.getItem('rosa_cart')||'[]'); }
function addToCart(item){ const cart = readCart(); const found = cart.find(c=>c.id===item.id); if(found) found.qty++; else cart.push({...item,qty:1}); saveCart(cart); alert(item.name + ' agregado al carrito'); renderCartMini(); }
function removeFromCart(id){ let cart = readCart(); cart = cart.filter(i=>i.id!==id); saveCart(cart); renderCartMini(); }
function changeQty(id,delta){ const cart = readCart(); const it = cart.find(c=>c.id===id); if(!it) return; it.qty += delta; if(it.qty<=0) { removeFromCart(id); return; } saveCart(cart); renderCartMini(); }
function cartTotal(){ return readCart().reduce((s,i)=>s+i.price*i.qty,0); }
function renderCartMini(){ const el = document.getElementById('cartMini'); if(!el) return; const cart = readCart(); el.innerHTML = cart.length? cart.map(i=>`<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px"><img src="${i.image}" style="width:48px;height:48px;object-fit:cover;border-radius:6px"/><div style="flex:1"><strong>${i.name}</strong><div style="font-size:13px;color:#666">L ${i.price} x ${i.qty}</div></div><div style="display:flex;flex-direction:column"><button onclick="changeQty('${i.id}',1)">+</button><button onclick="changeQty('${i.id}',-1)">-</button></div></div>`).join('') : '<div>Carrito vacío</div>'; const total = cartTotal(); el.innerHTML += `<div style="font-weight:800;margin-top:8px">Total: L ${total}</div><div style="margin-top:8px"><a href="carrito.html" style="text-decoration:none"><button class="btn">Ver carrito</button></a></div>`; }
