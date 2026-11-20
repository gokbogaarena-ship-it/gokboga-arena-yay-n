/* Gökboğa Arena Çanta v25 — kullanıcı referansları temelinde özgün kozmetik katalog.
   Canlı ekonomi entegrasyonu yapılana kadar yalnız görüntüleme. */
(function(root){
"use strict";
const groups=[
{id:"avatar",title:"Avatar Çerçeveleri",count:20,emoji:["🐂","🐺","🦅","👑","💠","🌙","🌟","🏆","⚔️","🏹"],type:"frame"},
{id:"room",title:"Oda Kartları",count:10,emoji:["🏕️","🌄","🏰","🐺","🦅","🐂","🔥","🌙","💠","👑"],type:"room"},
{id:"table",title:"Masa Temaları",count:10,emoji:["🎲","🀄","🏕️","🌄","🌙","🔥","🐺","🦅","🐂","👑"],type:"table"},
{id:"bonus",title:"Bonuslar",count:8,emoji:["🎁","🎊","🌟","🏆","💠","👑","🪙","🎉"],type:"bonus"},
{id:"card",title:"Kartlar",count:10,emoji:["🃏","🎴","🐺","🦅","🐂","👑","🌟","💠","🏆","🏕️"],type:"card"},
{id:"item",title:"Eşyalar",count:10,emoji:["💎","🪙","🗝️","🏺","📿","⚔️","🛡️","🏹","🔱","👑"],type:"item"}];
const tiers=[0,0,0,1,5,10,20,30,40,60],colors=["#f5cf7a","#68e5da","#b9a2ff","#f6a0b1","#98d883","#e8b6fa","#82c5ff","#e9ad69","#d8dfe6","#d4b36e"];
const catalog=Object.freeze(groups.flatMap(g=>Array.from({length:g.count},(_,i)=>Object.freeze({id:g.id+"-"+String(i+1).padStart(2,"0"),category:g.id,categoryTitle:g.title,name:g.title+" "+(i+1),type:g.type,emoji:g.emoji[i%g.emoji.length],color:colors[i%colors.length],vipRequired:g.id==="avatar"?tiers[Math.floor(i/2)]:tiers[i%10],chipPrice:[10000,20000,35000,50000,75000,100000,150000,200000,300000,500000][i%10]}))));
function allowed(item,vip){return Number.isInteger(vip)&&vip>=0&&vip<=60&&vip>=item.vipRequired}
function mount(host,opts={}){if(!host)throw Error("Çanta hedefi bulunamadı");const vip=Number.isInteger(opts.vipLevel)?Math.max(0,Math.min(60,opts.vipLevel)):0;const document=host.ownerDocument;const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};let category="avatar",selected=null;
host.classList.add("gb-canta");const side=el("nav","gb-canta-nav"),middle=el("section","gb-canta-items"),right=el("aside","gb-canta-detail"),status=el("p","gb-canta-status","Önizleme: satın alma ve takma henüz sunucuya bağlı değil.");status.setAttribute("role","status");host.replaceChildren(side,middle,right);
function render(){side.replaceChildren(...groups.map(g=>{const b=el("button",category===g.id?"chosen":"",g.title);b.type="button";b.addEventListener("click",()=>{category=g.id;selected=null;render()});return b}));middle.replaceChildren(...catalog.filter(x=>x.category===category).map(item=>{const b=el("button","gb-canta-tile"+(selected?.id===item.id?" selected":"")+(allowed(item,vip)?"":" locked"));b.type="button";b.setAttribute("aria-label",item.name+", "+(item.vipRequired?"VIP "+item.vipRequired:"VIP gerekmiyor")+", "+item.chipPrice.toLocaleString("tr-TR")+" çip");const art=el("span","gb-canta-art",item.emoji);art.style.setProperty("--gb-accent",item.color);const mark=el("small","gb-canta-mark",item.vipRequired?"VIP "+item.vipRequired:"ÇİP");b.append(art,mark);b.addEventListener("click",()=>{selected=item;render()});return b}));right.replaceChildren(el("h2","","ÖNİZLEME"));if(selected){const art=el("div","gb-canta-large",selected.emoji);art.style.setProperty("--gb-accent",selected.color);const name=el("strong","",selected.name);const detail=el("p","",(selected.vipRequired?"VIP "+selected.vipRequired+"+":"VIP gerekmiyor")+" · "+selected.chipPrice.toLocaleString("tr-TR")+" çip");const button=el("button","gb-canta-disabled",allowed(selected,vip)?"SATIN AL / TAK — BAĞLANTI BEKLİYOR":"🔒 VIP "+selected.vipRequired+" GEREKLİ");button.disabled=true;right.append(art,name,detail,button)}else right.append(el("p","","Görsel seçerek önizle."));right.append(status)}
render();return {catalog,unmount(){host.replaceChildren();host.classList.remove("gb-canta")}}}
root.GokbogaCanta={catalog,allowed,mount};
})(typeof window!=="undefined"?window:globalThis);
