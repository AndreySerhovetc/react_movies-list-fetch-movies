(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var s=i(9),a=i.n(s),c=(i(17),i(12)),n=i(2),l=i(1),r=(i(18),i(6)),o=(i(19),i(20),i(0)),d=function(e){var t=e.title,i=e.description,s=e.imgUrl,a=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:s,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:a,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies,i=void 0===t?[]:t;return Object(o.jsx)("div",{className:"movies",children:i.map((function(e){return Object(o.jsx)(d,Object(r.a)({},e),e.imdbId)}))})},j=i(8),h=i.n(j),b=i(10),u=i(11),p=i.n(u),O=(i(23),function(e){return fetch("".concat(" http://www.omdbapi.com/?apikey=ddf4c823&t=").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.statusText));return e.json()}))}),g=i(5),v=function(e){var t=e.addMovie,i=Object(l.useState)(""),s=Object(n.a)(i,2),a=s[0],c=s[1],m=Object(l.useState)(null),j=Object(n.a)(m,2),u=j[0],v=j[1],f=Object(l.useState)(!0),w=Object(n.a)(f,2),x=w[0],M=w[1],N=Object(l.useState)(!1),y=Object(n.a)(N,2),T=y[0],k=y[1],I=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a);case 2:"False"===(t=e.sent).Response?(v(null),M(!1)):(M(!0),v({title:t.Title,description:t.Plot,imgUrl:t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID,"/"),imdbId:t.imdbID}),c("")),g.find((function(e){return e.imdbId===t.imdbID}))?k(!0):k(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:p()("input",{"is-danger":!x}),value:a,onChange:function(e){return c(e.target.value)}})}),x||Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-light",onClick:I,children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-primary",disabled:!u||T,onClick:function(){u&&(t(u),v(null))},children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),T&&Object(o.jsx)("span",{className:"error",children:"This film already added choose another"}),u&&Object(o.jsx)(d,Object(r.a)({},u))]})]})},f=function(){var e=Object(l.useState)(g),t=Object(n.a)(e,2),i=t[0],s=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(v,{addMovie:function(e){s([].concat(Object(c.a)(i),[e]))}})})]})};a.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[24,1,2]]]);
//# sourceMappingURL=main.6952e9b6.chunk.js.map