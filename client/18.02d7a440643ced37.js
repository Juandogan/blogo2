"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[18],{18:(q,s,e)=>{e.r(s),e.d(s,{RevistaModule:()=>T});var d=e(6019),r=e(3003),t=e(3668),g=e(6847),p=e(7473),c=e(190),l=e(5891),u=e(4088),x=e(2274),h=e(6179);function m(i,o){1&i&&(t.TgZ(0,"div",4),t.TgZ(1,"div",5),t._UZ(2,"div"),t.TgZ(3,"div"),t._UZ(4,"div"),t.qZA(),t.qZA(),t.qZA())}function f(i,o){if(1&i&&t._UZ(0,"app-carousel",36),2&i){const n=t.oxw(2);t.Q6J("items2",n.items)}}function v(i,o){if(1&i&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.TgZ(2,"h6",8),t._uU(3,"NRO. "),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"span",9),t._uU(7,"|"),t.qZA(),t.TgZ(8,"span",10),t._uU(9),t.qZA(),t.TgZ(10,"span",9),t._uU(11,"|"),t.qZA(),t.TgZ(12,"span",9),t._uU(13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"app-portada",12),t.qZA(),t.TgZ(16,"div"),t.TgZ(17,"h4",13),t._uU(18),t.qZA(),t._UZ(19,"app-indice",12),t.qZA(),t.TgZ(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16),t.TgZ(23,"h1",17),t._uU(24),t.qZA(),t.TgZ(25,"div",18),t.TgZ(26,"div"),t._UZ(27,"img",19),t.TgZ(28,"p",20),t._UZ(29,"br"),t._UZ(30,"br"),t._UZ(31,"br"),t._UZ(32,"br"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",21),t.TgZ(34,"div",22),t.TgZ(35,"div"),t.TgZ(36,"a",14),t._UZ(37,"img",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",24),t.TgZ(39,"div"),t.TgZ(40,"a",14),t._UZ(41,"img",25),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",26),t.TgZ(43,"div"),t.TgZ(44,"a",14),t._UZ(45,"img",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(46,"br"),t.TgZ(47,"div",27),t._UZ(48,"br"),t.TgZ(49,"div",28),t.TgZ(50,"h1",29),t._uU(51,"Ediciones anteriores "),t.qZA(),t.qZA(),t.TgZ(52,"div",30),t.YNc(53,f,1,1,"app-carousel",31),t.qZA(),t._UZ(54,"br"),t._UZ(55,"br"),t.qZA(),t.qZA(),t._UZ(56,"div",32),t.TgZ(57,"div",33),t._UZ(58,"img",34),t.TgZ(59,"h6",35),t._uU(60,"REVISTA DIGITAL NOTICIAS DE MONTA\xd1A 2022 - Todos los derechos reservados"),t.qZA(),t.qZA(),t.qZA()),2&i){const n=t.oxw();t.xp6(5),t.Oqu(n.articulos[0].numero),t.xp6(4),t.hij("MES: ",n.articulos[0].mes,""),t.xp6(4),t.hij("A\xd1O: ",n.articulos[0].anio,""),t.xp6(2),t.Q6J("data",n.articulos[0]),t.xp6(3),t.hij("\xcdNDICE - ",n.articulos[0].mes,""),t.xp6(1),t.Q6J("data",n.articulos[0]),t.xp6(1),t.s9C("href",n.anuncios[0].link7,t.LSH),t.xp6(1),t.s9C("src",null==n.anuncios[0]?null:n.anuncios[0].img7,t.LSH),t.xp6(3),t.lnq("EDITORIAL - NRO ",n.articulos[0].numero," | ",n.articulos[0].mes," ",n.articulos[0].anio,""),t.xp6(4),t.Q6J("innerHTML",n.articulos[0].editorial,t.oJD),t.xp6(8),t.s9C("href",n.anuncios[0].link8,t.LSH),t.xp6(1),t.s9C("src",n.anuncios[0].img8,t.LSH),t.xp6(3),t.s9C("href",n.anuncios[0].link9,t.LSH),t.xp6(1),t.s9C("src",n.anuncios[0].img9,t.LSH),t.xp6(3),t.s9C("href",n.anuncios[0].link10,t.LSH),t.xp6(1),t.MGl("src","",n.anuncios[0].img10," ",t.LSH),t.xp6(8),t.Q6J("ngIf",n.estadoCarousel)}}const Z=[{path:"",component:(()=>{class i{constructor(n,a,A,M,O){this.crudService=n,this.ruta=a,this.anunciosService=A,this.carouselService=M,this.observerBarraText=O,this.loader=!0,this.estadoCarousel=!1}ngOnInit(){this.observerBarraText.load$.emit(!0),this.pedirCarousel(),this.pedirAnuncios(),this.ruta.data.subscribe(n=>{n===[]?(this.articulos=Object.entries(n).map(a=>a[1]),this.loader=!1):(console.log("sin ind"),this.crudService.getRevista().subscribe(a=>{this.articulos=a,this.articulos.reverse(),this.loader=!1}))})}pedirCarousel(){this.carouselService.pedirUsuarios().subscribe(n=>{this.carousel=n,this.items=this.carousel,this.estadoCarousel=!0})}pedirAnuncios(){this.anunciosService.pedirUsuarios().subscribe(n=>{this.anuncios=n})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g.I),t.Y36(r.gz),t.Y36(p.M),t.Y36(c.b),t.Y36(l.o))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-revista"]],decls:4,vars:2,consts:[[2,"text-align","center"],["class","loadingio-spinner-dual-ring-xg1vnrf2b6o","style","margin-top: 150px; min-height: 2000px",4,"ngIf"],[1,"margenL","margenR"],["style","margin-left:-0px;margin-right:-0px; background-color:orange ; border-left: 20px solid rgb(43, 43, 43);border-right: 20px solid rgb(44, 44, 44)",4,"ngIf"],[1,"loadingio-spinner-dual-ring-xg1vnrf2b6o",2,"margin-top","150px","min-height","2000px"],[1,"ldio-z7fu6e1den"],[2,"margin-left","-0px","margin-right","-0px","background-color","orange","border-left","20px solid rgb(43, 43, 43)","border-right","20px solid rgb(44, 44, 44)"],[1,"quitar600",2,"margin-right","25px","text-align","right"],[2,"font-size","14px","font-weight","700","padding-top","10px"],[2,"margin-left","2px"],[2,"margin-left","5px","text-transform","uppercase"],[1,"portadaAcomoda"],[3,"data"],[1,"indice",2,"text-transform","uppercase"],["target","_blank",3,"href"],["width","100%","alt","",3,"src"],[2,"color","white","background-color","orange","margin-top","10px"],[1,"indice","subefuente","fuenteTest",2,"margin-top","20px","text-transform","uppercase"],[1,"fondoEditorial",2,"object-fit","cover","background-image","url('../../../assets/1.png')"],["src","../../../assets/logonm.png","width","155px","alt","",1,"responsi",2,"margin-top","10px","margin-left","15px"],[1,"editorialParrafo",3,"innerHTML"],[1,"row","quitar600",2,"margin-top","30px","padding-right","35px"],[1,"col-4","xl-12"],["width","100%","height","500px","alt","",2,"padding-left","20px",3,"src"],[1,"col-4"],["width","100%","height","500px","alt","",3,"src"],[1,"col-4",2,"padding-right","0px"],[1,"quitar600",2,"height","410px","background-color","#3E2800","margin-top","30px","margin-left","20px","margin-right","20px"],[2,"background-color","#8b5a00"],[1,"indice","quitar600",2,"margin-left","23px","margin-bottom","15px"],[1,"quitar600",2,"margin-left","20px","margin-right","20px"],[3,"items2",4,"ngIf"],[2,"background-image","url('../../assets/fondo2.png')","height","500px","margin-top","-100px"],[2,"background-color","black","text-align","center","min-height","200px"],["src","../../assets/logonm.png","alt","","width","100px",2,"float","left"],[2,"color","orange","padding","10px"],[3,"items2"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,m,5,0,"div",1),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,v,61,19,"div",3),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",a.loader),t.xp6(2),t.Q6J("ngIf",!a.loader))},directives:[d.O5,u.f,x.H,h.F],styles:['.indice[_ngcontent-%COMP%]{margin-left:30px;margin-top:-10px;margin-bottom:20px;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-size:25px;font-weight:700;letter-spacing:-1px;color:#fff;text-shadow:2px 2px 8px black}.portadaAcomoda[_ngcontent-%COMP%]{padding:10px 0}.fondoEditorial[_ngcontent-%COMP%]{background-color:#3e2800;margin-left:20px;margin-right:20px}.editorialParrafo[_ngcontent-%COMP%]{text-align:left;letter-spacing:1px;outline:none;padding-top:0;padding-left:20px;font-size:20px;margin-bottom:0;margin-right:30px;line-height:27px}@keyframes ldio-z7fu6e1den{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box!important}.ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:83px;height:83px;top:8.5px;left:8.5px;border-radius:50%;border:13px solid #000;border-color:#0a0a0a transparent #0a0a0a transparent;animation:ldio-z7fu6e1den 1s linear infinite}.ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-color:transparent}.ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;transform:rotate(45deg)}.ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]:before, .ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:13px;height:13px;top:-13px;left:22px;background:#0a0a0a;border-radius:50%;box-shadow:0 70px #0a0a0a}.ldio-z7fu6e1den[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]:after{left:-13px;top:22px;box-shadow:70px 0 #0a0a0a}.loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%]{width:84px;height:84px;display:inline-block;overflow:hidden;background:none}.ldio-z7fu6e1den[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(.84);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:content-box}@media (max-width: 600px){.quitar600[_ngcontent-%COMP%]{display:none}.indice[_ngcontent-%COMP%]{margin-left:10px;margin-top:15px;font-size:20px}.editorialParrafo[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;outline:none;padding-top:0;padding-left:20px;font-size:16px;margin-bottom:0;margin-right:30px;line-height:27px}.portadaAcomoda[_ngcontent-%COMP%]{padding:0}}']}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),i})();var C=e(9133);let T=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,b,C.u5]]}),i})()}}]);