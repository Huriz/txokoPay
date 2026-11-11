/* Catálogo de ejemplo compartido por la TPV y el panel: así los dos enseñan los mismos artículos, categorías y menú.
   En la aplicación real saldrá de la base de datos. */
(function(){
const b = (nombre,cat,precio,minimo,coste,vidrio,stock) => ({nombre, cat, precio, almacen:true, minimo, coste, vidrio, stock});
const d = (nombre,cat,precio,deriva) => ({nombre, cat, precio, deriva});
const n = (nombre,cat,precio) => ({nombre, cat, precio});
window.CATALOGO = {
  cats:[
    {id:'refresco', nombre:'Refresco'}, {id:'cerveza', nombre:'Cerveza'}, {id:'vino', nombre:'Vino'}, {id:'agua', nombre:'Agua'},
    {id:'chupito', nombre:'Chupito'}, {id:'botellalicor', nombre:'Botella de licor'}, {id:'combinado', nombre:'Combinado'},
    {id:'conserva', nombre:'Conserva'}, {id:'cafe', nombre:'Café'}, {id:'comensal', nombre:'Comensal'},
    {id:'servicio', nombre:'Servicio'}, {id:'varios', nombre:'Varios'}
  ],
  art:{
    rioja:b('Rioja crianza','vino',900,12,520,true,18), txakoli:b('Txakoli','vino',1000,12,640,true,10),
    blanco:b('Vino blanco','vino',700,12,420,true,12), sidra:b('Sidra','vino',450,12,250,true,14),
    agua:b('Agua 1,5 L','agua',120,24,35,false,36), agua_gas:b('Agua con gas','agua',120,12,45,false,18),
    gaseosa:b('Gaseosa','refresco',100,12,40,false,18), cola:b('Coca-Cola','refresco',150,48,55,false,48),
    cola_zero:b('Coca-Cola Zero','refresco',150,24,55,false,24), naranja:b('Kas naranja','refresco',150,24,52,false,24),
    limon:b('Kas limón','refresco',150,24,52,false,24), tonica:b('Tónica','refresco',150,24,50,false,24),
    zumo:b('Zumo','refresco',150,24,48,false,20), nestea:b('Nestea','refresco',150,12,55,false,12),
    aquarius:b('Aquarius','refresco',150,12,55,false,12), bitter:b('Bitter Kas','refresco',150,12,52,false,12),
    sprite:b('Sprite','refresco',150,12,55,false,12), te_frio:b('Té frío','refresco',150,12,50,false,12),
    mosto:b('Mosto','refresco',120,12,60,true,12), cerveza:b('Cerveza','cerveza',180,48,60,true,96),
    vermut_bot:b('Vermut (botella)','botellalicor',1400,4,480,true,9), brugal_bot:b('Botella Brugal','botellalicor',2000,3,1100,true,8),
    pacharan_bot:b('Pacharán (botella)','botellalicor',1800,3,900,true,5), whisky_bot:b('Whisky (botella)','botellalicor',3500,3,1400,true,4),
    ginebra_bot:b('Ginebra (botella)','botellalicor',2500,3,1300,true,4), conac_bot:b('Coñac (botella)','botellalicor',2000,3,1000,true,3),
    orujo_bot:b('Orujo (botella)','botellalicor',1500,3,800,true,3),
    bonito:b('Bonito','conserva',600,6,380,false,18), anchoas:b('Anchoas','conserva',800,6,520,false,12),
    esparragos:b('Espárragos','conserva',500,6,300,false,12), pimientos:b('Pimientos','conserva',400,6,220,false,12),
    carbon:b('Carbón','varios',400,5,250,false,15), aceite:b('Aceite 1 L','varios',500,3,320,false,6),
    vermut:d('Vermut','chupito',200,[{a:'vermut_bot',c:1/8}]), brugal:d('Chupito Brugal','chupito',250,[{a:'brugal_bot',c:1/6}]),
    pacharan:d('Pacharán','chupito',150,[{a:'pacharan_bot',c:1/10}]), whisky:d('Whisky','chupito',250,[{a:'whisky_bot',c:1/10}]),
    ginebra:d('Ginebra','chupito',250,[{a:'ginebra_bot',c:1/10}]), conac:d('Coñac','chupito',200,[{a:'conac_bot',c:1/10}]),
    orujo:d('Orujo de hierbas','chupito',150,[{a:'orujo_bot',c:1/10}]),
    copa_vino:d('Copa de vino','vino',150,[{a:'rioja',c:1/5}]), zurito:d('Zurito','cerveza',100,[{a:'cerveza',c:1/2}]),
    cubata_brugal:d('Cubata Brugal','combinado',550,[{a:'brugal_bot',c:1/6},{a:'cola',c:1}]),
    cubata_whisky:d('Cubata whisky','combinado',600,[{a:'whisky_bot',c:1/10},{a:'cola',c:1}]),
    kalimotxo:d('Kalimotxo','combinado',300,[{a:'rioja',c:1/5},{a:'cola',c:1}]),
    solo:n('Café solo','cafe',100), cortado:n('Cortado','cafe',110), con_leche:n('Café con leche','cafe',130),
    descafeinado:n('Descafeinado','cafe',110), infusion:n('Infusión','cafe',100),
    comensal:n('Comensal','comensal',500), almuerzo:n('Comensal almuerzo','comensal',300), bocadillo:n('Comensal bocadillo','comensal',200), pizza:n('Comensal pizza','comensal',200),
    hora_horno:n('Hora de horno','servicio',300), freidora:n('Freidora (hora)','servicio',300), hielo:n('Hielo','servicio',100),
    descorche:n('Descorche','servicio',300), mantel:n('Mantel','varios',100), servilletas:n('Servilletas de tela','varios',50)
  },
  menu:[
    {id:'aperitivos', nombre:'Aperitivos', items:['vermut','cerveza','zurito','mosto']},
    {id:'cafes',      nombre:'Cafés',      items:['solo','cortado','con_leche','descafeinado','infusion']},
    {id:'cocina',     nombre:'Cocina',     items:['comensal','almuerzo','bocadillo','pizza','hora_horno','freidora']},
    {id:'combinados', nombre:'Combinados', items:['cubata_brugal','cubata_whisky','kalimotxo']},
    {id:'conservas',  nombre:'Conservas',  items:['bonito','anchoas','esparragos','pimientos']},
    {id:'licores',    nombre:'Licores',    items:['brugal','pacharan','whisky','ginebra','conac','orujo','brugal_bot']},
    {id:'refrescos',  nombre:'Refrescos',  items:['cola','cola_zero','naranja','limon','tonica','agua','gaseosa','zumo','nestea','aquarius','bitter','sprite','agua_gas','te_frio']},
    {id:'varios',     nombre:'Varios',     items:['mantel','servilletas','carbon','aceite','hielo']},
    {id:'vinos',      nombre:'Vinos',      items:['rioja','txakoli','blanco','sidra','descorche','copa_vino']}
  ],
  poca:{ cats:['refresco','cerveza','vino','agua','chupito','botellalicor','combinado'], comen:'comensal' }
};
})();