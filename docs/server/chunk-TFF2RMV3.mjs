import './polyfills.server.mjs';
import{A as V,C as P,D as A,E as _,F as B,G as H,J as R,N as L,Q as M,R as D,a as u,b as q,c as b,d as k,e as j,f as T,g as s,h as m,i as x,j as i,k as n,l as p,m as y,n as w,o as d,p as F,q as o,r as g,s as v,t as f}from"./chunk-RBIBRJHW.mjs";import{h as C}from"./chunk-KRLCULJA.mjs";var N=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-home"]],standalone:!0,features:[f],decls:12,vars:0,consts:[[1,"text-gray-600","body-font"],[1,"container","mx-auto","flex","px-5","py-24","md:flex-row","flex-col","items-center"],[1,"lg:max-w-lg","lg:w-full","md:w-1/2","w-5/6","mb-10","md:mb-0"],["alt","hero","src","assets/images/quiz-home.png",1,"object-cover","object-center","rounded"],[1,"lg:flex-grow","md:w-1/2","lg:pl-24","md:pl-16","flex","flex-col","md:items-start","md:text-left","items-center","text-center"],[1,"title-font","sm:text-4xl","text-3xl","mb-4","font-medium","text-white-900"],[1,"mb-8","leading-relaxed"],[1,"flex","justify-center"],["routerLink","/categoria",1,"inline-flex","text-white","bg-indigo-500","border-0","py-2","px-6","focus:outline-none","hover:bg-indigo-600","rounded","text-lg"]],template:function(a,c){a&1&&(i(0,"section",0)(1,"div",1)(2,"div",2),p(3,"img",3),n(),i(4,"div",4)(5,"h1",5),o(6,"Quiz Fran\xE7\xEAs"),n(),i(7,"p",6),o(8,"Estude franc\xEAs atrav\xE9s de testes de conhecimentos gerais, cultura pop e humor!"),n(),i(9,"div",7)(10,"a",8),o(11,"Come\xE7ar agora"),n()()()()())},dependencies:[_,M]});let e=t;return e})();var J={categories:[{id:1,name:"Heroes",description:"Descrubra se voc\xEA \xE9 capaz de ser um SUPER HEROI ou um SUPER VIL\xC3O!",rota:"quizz/herois",img:"assets/images/gif/heroes-category.gif"},{id:2,name:"Parle Fran\xE7ais dans une Entretien",description:"Quiz voltado para treinar a lingua francesa para uma entrevista de emprego real!",rota:"quizz/parlefrancais",img:"assets/images/Entretien-Foto.png"},{id:3,name:"Voc\xEA conhece Paris?",description:"Descrubra se voc\xEA \xE9 capaz de ser um Parisiense Nativo ou um Parisiense Nutela?",rota:"quizz/herois",img:"assets/images/gif/paris-category.webp"},{id:4,name:"montpellier",description:"Heroes",rota:"quizz/herois",img:"assets/images/gif/montpellier-category.webp"}]};function ie(e,t){if(e&1&&(i(0,"div",4)(1,"div",5),p(2,"img",6),i(3,"h2",7),o(4,"Cat\xE9gories"),n(),i(5,"h1",8),o(6),n(),i(7,"p",9),o(8),n(),i(9,"a",10),o(10),k(),i(11,"svg",11),p(12,"path",12)(13,"path",13),n()(),j(),i(14,"div",14)(15,"span",15),k(),i(16,"svg",16),p(17,"path",17)(18,"circle",18),n(),o(19,"1.2K "),n(),j(),i(20,"span",19),k(),i(21,"svg",16),p(22,"path",20),n(),o(23,"6 "),n()()()()),e&2){let r=t.$implicit;s(2),F("src","/"+r.img,T),s(4),g(r.name),s(2),g(r.description),s(1),F("routerLink","/"+r.rota),s(1),v("",r.name," ")}}var U=(()=>{let t=class t{constructor(){this.categoria=""}ngOnInit(){this.categories=J.categories}playerChooseCategory(l){this.categorySelected=l,this.categoria=this.categorySelected}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-category"]],standalone:!0,features:[f],decls:4,vars:1,consts:[[1,"text-gray-600","body-font"],[1,"container","px-5","py-24","mx-auto"],[1,"flex","flex-wrap","-m-4"],["class","p-4 lg:w-1/3",4,"ngFor","ngForOf"],[1,"p-4","lg:w-1/3"],[1,"h-full","bg-gray-300","bg-opacity-75","px-8","pt-16","pb-24","rounded-lg","overflow-hidden","text-center","relative"],["alt","blog",1,"lg:h-48","md:h-36","w-full","object-contain","object-center",3,"src"],[1,"tracking-widest","text-xs","title-font","font-medium","text-gray-800","mb-1","mt-2"],[1,"title-font","sm:text-2xl","text-xl","font-medium","text-gray-900","mb-3"],[1,"leading-relaxed","mb-3"],[1,"text-white-900","inline-flex","items-center","bg-slate-900","rounded","px-4","py-2",3,"routerLink"],["viewBox","0 0 24 24","stroke","currentColor","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","ml-2"],["d","M5 12h14"],["d","M12 5l7 7-7 7"],[1,"text-center","mt-2","leading-none","flex","justify-center","absolute","bottom-0","left-0","w-full","py-4"],[1,"text-gray-800","mr-3","inline-flex","items-center","leading-none","text-sm","pr-3","py-1","border-r-2","border-gray-200"],["stroke","currentColor","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round","viewBox","0 0 24 24",1,"w-4","h-4","mr-1"],["d","M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"],["cx","12","cy","12","r","3"],[1,"text-gray-800","inline-flex","items-center","leading-none","text-sm"],["d","M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"]],template:function(a,c){a&1&&(i(0,"section",0)(1,"div",1)(2,"div",2),x(3,ie,24,5,"div",3),n()()()),a&2&&(s(3),m("ngForOf",c.categories))},dependencies:[_,P,M]});let e=t;return e})();var $=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-navbar"]],standalone:!0,features:[f],decls:11,vars:0,consts:[[1,"text-gray-200","bg-rose-950","body-font"],[1,"container","mx-auto","flex","flex-wrap","p-5","flex-col","md:flex-row","items-center"],["routerLink","/",1,"flex","title-font","font-medium","items-center","text-gray-900","mb-4","md:mb-0"],["src","assets/images/logoNew.png","alt","Logo Prof Margaux NavBar",2,"height","40px"],[1,"ml-3","text-xl"],[1,"md:ml-auto","flex","flex-wrap","items-center","text-base","justify-center"],["routerLink","/",1,"mr-5","hover:underline"],["routerLink","/categoria",1,"mr-5","hover:underline"]],template:function(a,c){a&1&&(i(0,"header",0)(1,"div",1)(2,"a",2),p(3,"img",3),i(4,"span",4),o(5,"Prof. Margaux Quizz"),n()(),i(6,"nav",5)(7,"a",6),o(8,"Home"),n(),i(9,"a",7),o(10,"Categorias"),n()()()())},dependencies:[M]});let e=t;return e})();var G=(()=>{let t=class t{constructor(){this.title="proj-quiz-frances"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:0,template:function(a,c){a&1&&p(0,"app-navbar")(1,"router-outlet")},dependencies:[_,$,L]});let e=t;return e})();var O={title:"Voc\xEA seria um heroi ou vil\xE3o ?",questions:[{id:1,categories:"herois",question:"Qual super poder voc\xEA escolheria ?",options:[{id:1,name:"Raios-Lasers",alias:"A"},{id:2,name:"Voar",alias:"B"},{id:3,name:"Explodir coisas",alias:"A"},{id:4,name:"Curar feridas",alias:"B"},{id:5,name:"Soltar fogo pelas m\xE3os",alias:"A"}]},{id:2,categories:"herois",question:"Quem voc\xEA salvaria primeiro ?",options:[{id:1,name:"Crian\xE7as",alias:"A"},{id:2,name:"Idosos",alias:"A"},{id:3,name:"N\xE3o saberia escolher",alias:"B"}]},{id:3,categories:"herois",question:"Qual a sua maior preocupa\xE7\xE3o ao enfretar outro super ser ?",options:[{id:1,name:"N\xE3o destruir pr\xE9dios",alias:"B"},{id:2,name:"Socar a cara do inimigo",alias:"A"},{id:3,name:"N\xE3o sujar meu traje",alias:"A"},{id:4,name:"N\xE3o deixar ningu\xE9m se ferir",alias:"B"}]},{id:4,categories:"herois",question:"Qual o seu maior foco ?",options:[{id:1,name:"Ficar rico com poderes",alias:"A"},{id:2,name:"Salvar a cidade",alias:"B"}]},{id:5,categories:"herois",question:"Qual o seu apelido de super ser ?",options:[{id:1,name:"O Terrivel",alias:"A"},{id:2,name:"Amigo da vizinhan\xE7a",alias:"B"}]}],results:{A:"Voc\xEA muito provavelmente seria um super vil\xE3o!",B:"Voc\xEA muito provavelmente seria um super Her\xF3i!"}};function oe(e,t){if(e&1&&(i(0,"h1"),o(1),n()),e&2){let r=d();s(1),g(r.title)}}function ae(e,t){e&1&&(i(0,"h1"),o(1,"Parab\xE9ns voc\xEA terminou o Teste!"),n())}function re(e,t){if(e&1&&(i(0,"div",9)(1,"h3",10),o(2),n()()),e&2){let r=d();s(2),g(r.questionsSelected.question)}}function se(e,t){if(e&1){let r=y();i(0,"button",15),w("click",function(){let c=q(r).$implicit,h=d(2);return b(h.playerChoose(c.alias))}),o(1),n()}if(e&2){let r=t.$implicit;s(1),v(" ",r.name," ")}}function le(e,t){if(e&1&&(i(0,"div",11)(1,"p",12),o(2,"Possiveis Respostas:"),n(),i(3,"div",13),x(4,se,2,1,"button",14),n()()),e&2){let r=d();s(4),m("ngForOf",r.questionsSelected.options)}}function ce(e,t){if(e&1){let r=y();i(0,"div",16)(1,"h1"),o(2,"O seu resultado \xE9: "),n(),i(3,"p"),o(4),n(),i(5,"button",17),w("click",function(){q(r);let a=d();return b(a.reinitialized())}),o(6,"Recome\xE7ar"),n()()}if(e&2){let r=d();s(4),v("",r.answersSelected," ")}}var W=(()=>{let t=class t{constructor(){this.title="",this.categoria="",this.categorias=[],this.answers=[],this.answersSelected="",this.questionIndex=0,this.questionMaxIndex=0,this.finished=!1}ngOnInit(){O&&(this.finished=!1,this.title=O.title,this.questions=O.questions,this.questionsSelected=this.questions[this.questionIndex],this.questionIndex=0,this.questionMaxIndex=this.questions.length)}playerChoose(l){this.answers.push(l),this.nexStep()}nexStep(){return C(this,null,function*(){if(this.questionIndex+=1,this.questionMaxIndex>this.questionIndex)this.questionsSelected=this.questions[this.questionIndex];else{let l=yield this.checkResult(this.answers);this.finished=!0,this.answersSelected=O.results[l]}})}checkResult(l){return C(this,null,function*(){return l.reduce((c,h,ee,S)=>S.filter(z=>z===c).length>S.filter(z=>z===h).length?c:h)})}reinitialized(){window.location.href="/"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-herois"]],inputs:{categoria:"categoria"},standalone:!0,features:[f],decls:17,vars:6,consts:[[1,"quizz__container"],[1,"quizz__logo"],["src","/assets/images/profmargauxnovologo.png","height","350","alt","Logo Prof Margaux",2,"height","350px"],[1,"quizz__title"],[1,"espace"],[4,"ngIf"],["class","quizz__questions",4,"ngIf"],["class","quizz__options",4,"ngIf"],["class","quizz_results",4,"ngIf"],[1,"quizz__questions"],[1,"question__card"],[1,"quizz__options"],[1,"title__answers"],[1,"btn__options"],["class","btn-option",3,"click",4,"ngFor","ngForOf"],[1,"btn-option",3,"click"],[1,"quizz_results"],[1,"btn-option",2,"margin-top","15px",3,"click"]],template:function(a,c){a&1&&(i(0,"div",0)(1,"div",1),p(2,"img",2),i(3,"div",3)(4,"h3"),o(5,"Seja Bem-Vindo - Aluno ! "),p(6,"br"),n(),i(7,"p"),o(8,"Este \xE9 o desafio de franc\xEAs da Prof. Margaux, responda as perguntas abaixo e descubra o que voc\xEA seria:"),n(),i(9,"p"),o(10),n(),p(11,"div",4),x(12,oe,2,1,"h1",5)(13,ae,2,0,"h1",5),n()(),x(14,re,3,1,"div",6)(15,le,5,1,"div",7)(16,ce,7,1,"div",8),n()),a&2&&(s(10),g(c.categoria),s(2),m("ngIf",!c.finished),s(1),m("ngIf",c.finished),s(1),m("ngIf",!c.finished),s(1),m("ngIf",!c.finished),s(1),m("ngIf",c.finished))},dependencies:[_,P,A],styles:[".quizz__container[_ngcontent-%COMP%]{width:80%;margin:20px auto auto}.quizz__logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:10px}.quizz__logo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial}.quizz__logo[_ngcontent-%COMP%] > .quizz__title[_ngcontent-%COMP%]{display:flex;flex-direction:column}.espace[_ngcontent-%COMP%]{margin-top:25px}p[_ngcontent-%COMP%]{font-family:Arial}.quizz__questions[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #9393ff;border-radius:8px;background-color:#4646fa;width:100%;height:150px;font-size:20px;font-family:Segoe UI;margin-bottom:20px}.quizz__options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;margin:auto 5px 20px auto}.quizz__options[_ngcontent-%COMP%] > .title__answers[_ngcontent-%COMP%]{margin-bottom:20px}.quizz__options[_ngcontent-%COMP%] > .btn__options[_ngcontent-%COMP%]{display:flex;gap:10px}.btn-option[_ngcontent-%COMP%]{background-color:transparent;border-radius:8px;border:1px solid rgb(70,70,250);width:50%;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:16px 31px;text-decoration:none!important;text-shadow:0px 1px 0px rgb(70,70,250)}.btn-option[_ngcontent-%COMP%]:hover{background-color:#4646fa}.btn-option[_ngcontent-%COMP%]:active{position:relative;top:1px;background-color:#4646fa}.quizz_results[_ngcontent-%COMP%]{width:100%;height:350px;background-color:#1f0539;border-radius:10px;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (max-width: 700px){.quizz__logo[_ngcontent-%COMP%]{flex-direction:column}.quizz__logo[_ngcontent-%COMP%] > .quizz__title[_ngcontent-%COMP%]{margin-top:20px}.quizz_results[_ngcontent-%COMP%]{flex-direction:column}.btn__options[_ngcontent-%COMP%]{flex-direction:column;gap:5px}.btn__options[_ngcontent-%COMP%] > .btn-option[_ngcontent-%COMP%]{width:100%}.question__card[_ngcontent-%COMP%]{margin-left:10px}}"]});let e=t;return e})();var I={title:"Vous \xEAtes develoupper web ?",questions:[{id:1,categories:"parlefrancais",question:"Alors, est-ce que vous pouvez vous pr\xE9senter, sil vous pla\xEEt?",options:[{id:1,name:"Je m'appele Higor Zica, je suis bresilien, j'ai un dipl\xF4me en Administration et j'ai 28 ans. Je suis develoupper PHP depuis 2 ans.",alias:"A"},{id:2,name:"Enchante, Je suis fou !",alias:"B"},{id:3,name:"Pardon, j'ai oubli\xE9 mon nom!",alias:"B"}]},{id:2,categories:"parlefrancais",question:"Pourriez-vous me citer 3 de vos qualit\xE9s ?",options:[{id:1,name:"Je suis une persone responsable, passione por la tecnology et cr\xE9atif.",alias:"A"},{id:2,name:"Mes principales qualit\xE9s sont \xE9chapper au travail, dormi et mets ta femme en col\xE8re.",alias:"B"}]},{id:3,categories:"parlefrancais",question:"Bon, alors et quelles sont, selon vous, vos comp\xE9tences ?",options:[{id:1,name:"Je connais les technologies principalement PHP avec le framework (laravel), JAVASCRIPT avec les framework (angular et react). \xC9galement je travaill\xE9 comme soutien technique alors je sais \xE9couter bien les clients, et conselier pour faire le meilleur choix. ",alias:"A"},{id:2,name:"Pardon mes en vrai je suis un incomp\xE9tent.",alias:"B"}]},{id:4,categories:"parlefrancais",question:"Pouquoi souhaitez-vous quitter votre poste actuel ?",options:[{id:1,name:"Parce que comme actualment j'ai habite en France, je voudrais me lancer de nouveaux d\xE9fis et aussi je sans \xE7a que j'ai besoin d'\xE9voluer.",alias:"A"},{id:2,name:"Parce que je voudrais changer de secteur et aussi je sais que votre entreprise por le poste et tr\xE8s int\xE9ressante.",alias:"A"},{id:3,name:"Parce que je sais pas.",alias:"B"}]},{id:5,categories:"parlefrancais",question:"Bon, parle-moi un peu de votre parcours professionnel s'il vous plait ?",options:[{id:1,name:"J'ai travaill\xE9 dans l'enterprise Academic Softwares au Br\xE9sil pendant 6 ans. J'ai d'abord \xE9t\xE9 soutien technique, puis je suis developpeur PHP. Avant Avant d'\xEAtre \xE9tudiant a la fac de Administration et fais aussi otres petites services.",alias:"A"},{id:2,name:"Pardon je sais pas dire rien en fran\xE7ais, je suis null.",alias:"B"}]}],results:{A:"Vous seriez probablement un excellent d\xE9veloppeur Web !",B:"Vous ne seriez probablement pas un d\xE9veloppeur Web !"}};function me(e,t){if(e&1&&(i(0,"h1",9),o(1),n()),e&2){let r=d();s(1),g(r.title)}}function de(e,t){e&1&&(i(0,"h1",9),o(1,"Parab\xE9ns voc\xEA terminou o Teste!"),n())}function ue(e,t){if(e&1&&(i(0,"div",10)(1,"h3",11),o(2),n()()),e&2){let r=d();s(2),g(r.questionsSelected.question)}}function fe(e,t){if(e&1){let r=y();i(0,"button",16),w("click",function(){let c=q(r).$implicit,h=d(2);return b(h.playerChoose(c.alias))}),o(1),n()}if(e&2){let r=t.$implicit;s(1),v(" ",r.name," ")}}function ge(e,t){if(e&1&&(i(0,"div",12)(1,"p",13),o(2,"Possiveis Respostas:"),n(),i(3,"div",14),x(4,fe,2,1,"button",15),n()()),e&2){let r=d();s(4),m("ngForOf",r.questionsSelected.options)}}function xe(e,t){if(e&1){let r=y();i(0,"div",17)(1,"h1"),o(2,"O seu resultado \xE9: "),n(),i(3,"p"),o(4),n(),i(5,"button",18),w("click",function(){q(r);let a=d();return b(a.reinitialized())}),o(6,"Recome\xE7ar"),n()()}if(e&2){let r=d();s(4),v("",r.answersSelected," ")}}var K=(()=>{let t=class t{constructor(){this.title="",this.categoria="",this.categorias=[],this.answers=[],this.answersSelected="",this.questionIndex=0,this.questionMaxIndex=0,this.finished=!1}ngOnInit(){I&&(this.finished=!1,this.title=I.title,this.questions=I.questions,this.questionsSelected=this.questions[this.questionIndex],this.questionIndex=0,this.questionMaxIndex=this.questions.length)}playerChoose(l){this.answers.push(l),this.nexStep()}nexStep(){return C(this,null,function*(){if(this.questionIndex+=1,this.questionMaxIndex>this.questionIndex)this.questionsSelected=this.questions[this.questionIndex];else{let l=yield this.checkResult(this.answers);this.finished=!0,this.answersSelected=I.results[l]}})}checkResult(l){return C(this,null,function*(){return l.reduce((c,h,ee,S)=>S.filter(z=>z===c).length>S.filter(z=>z===h).length?c:h)})}reinitialized(){window.location.href="/"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["app-parlefrancais"]],inputs:{categoria:"categoria"},standalone:!0,features:[f],decls:17,vars:6,consts:[[1,"quizz__container"],[1,"quizz__logo"],["src","/assets/images/profmargauxnovologo.png","height","350","alt","Logo Prof Margaux",2,"height","350px"],[1,"quizz__title"],[1,"espace"],["class","font__title",4,"ngIf"],["class","quizz__questions",4,"ngIf"],["class","quizz__options",4,"ngIf"],["class","quizz_results",4,"ngIf"],[1,"font__title"],[1,"quizz__questions"],[1,"question__card"],[1,"quizz__options"],[1,"title__answers"],[1,"btn__options"],["class","btn-option",3,"click",4,"ngFor","ngForOf"],[1,"btn-option",3,"click"],[1,"quizz_results"],[1,"btn-option",2,"margin-top","15px",3,"click"]],template:function(a,c){a&1&&(i(0,"div",0)(1,"div",1),p(2,"img",2),i(3,"div",3)(4,"h3"),o(5,"Seja Bem-Vindo - Aluno ! "),p(6,"br"),n(),i(7,"p"),o(8,"Este \xE9 o desafio de franc\xEAs da Prof. Margaux, responda as perguntas abaixo e descubra o que voc\xEA seria:"),n(),i(9,"p"),o(10),n(),p(11,"div",4),x(12,me,2,1,"h1",5)(13,de,2,0,"h1",5),n()(),x(14,ue,3,1,"div",6)(15,ge,5,1,"div",7)(16,xe,7,1,"div",8),n()),a&2&&(s(10),g(c.categoria),s(2),m("ngIf",!c.finished),s(1),m("ngIf",c.finished),s(1),m("ngIf",!c.finished),s(1),m("ngIf",!c.finished),s(1),m("ngIf",c.finished))},dependencies:[_,P,A],styles:[".quizz__container[_ngcontent-%COMP%]{width:80%;margin:20px auto auto}.quizz__logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:10px}.quizz__logo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial}.quizz__logo[_ngcontent-%COMP%] > .quizz__title[_ngcontent-%COMP%]{display:flex;flex-direction:column}.espace[_ngcontent-%COMP%]{margin-top:25px}p[_ngcontent-%COMP%]{font-family:Arial}.quizz__questions[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #9393ff;border-radius:8px;background-color:#4646fa;width:100%;height:150px;font-size:20px;font-family:Segoe UI;margin-bottom:20px}.quizz__questions[_ngcontent-%COMP%] > .question__card[_ngcontent-%COMP%]{font-size:24px}.font__title[_ngcontent-%COMP%]{font-size:28px;font-weight:600}.quizz__options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;margin:auto 5px 20px auto}.quizz__options[_ngcontent-%COMP%] > .title__answers[_ngcontent-%COMP%]{margin-bottom:20px}.quizz__options[_ngcontent-%COMP%] > .btn__options[_ngcontent-%COMP%]{display:flex;gap:10px}.btn-option[_ngcontent-%COMP%]{background-color:transparent;border-radius:8px;border:1px solid rgb(70,70,250);width:50%;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:16px 31px;text-decoration:none!important;text-shadow:0px 1px 0px rgb(70,70,250)}.btn-option[_ngcontent-%COMP%]:hover{background-color:#4646fa}.btn-option[_ngcontent-%COMP%]:active{position:relative;top:1px;background-color:#4646fa}.quizz_results[_ngcontent-%COMP%]{width:100%;height:350px;background-color:#1f0539;border-radius:10px;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (max-width: 700px){.quizz__logo[_ngcontent-%COMP%]{flex-direction:column}.quizz__logo[_ngcontent-%COMP%] > .quizz__title[_ngcontent-%COMP%]{margin-top:20px}.quizz_results[_ngcontent-%COMP%]{flex-direction:column}.btn__options[_ngcontent-%COMP%]{flex-direction:column;gap:5px}.btn__options[_ngcontent-%COMP%] > .btn-option[_ngcontent-%COMP%]{width:100%}.question__card[_ngcontent-%COMP%]{margin-left:10px}}"]});let e=t;return e})();var Z=[{path:"",component:N},{path:"categoria",component:U},{path:"quizz/herois",component:W},{path:"quizz/parlefrancais",component:K}];var X={providers:[D(Z),H()]};var _e={providers:[R()]},Y=V(X,_e);var he=()=>B(G,Y),ct=he;export{ct as a};