(this["webpackJsonpreact-book-api"]=this["webpackJsonpreact-book-api"]||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),r=a.n(l),c=(a(23),a(24),a(2)),i=a(3),s=a(5),u=a(4),h=(a(25),a(26),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onClose=function(t){e.props.onClose&&e.props.onClose(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.show?o.a.createElement("div",{class:"modal",id:"modal"},o.a.createElement("h2",null,this.props.title),o.a.createElement("div",{class:"content"},this.props.children),o.a.createElement("div",{class:"actions"},o.a.createElement("button",{class:"toggle-button",onClick:this.onClose},"close"))):null}}]),a}(o.a.Component)),d=a(17),m=a(6),b=a.n(m),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:"",category:"",description:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,[t.target.value]))},e.handleSubmit=function(t){var a={title:e.state.title[0],category:e.state.category[0],description:e.state.description[0]};console.log(a),b.a.post("https://fullstack-book.ariefdfaltah.com/book/create?key=gandhi",a).then((function(e){console.log(e),console.log(e.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{for:"bookTitle"},"Book Title"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"title",id:"bookTitle",placeholder:"Enter Book Title",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{for:"bookCategory"},"Book Category"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"category",id:"bookCategory",placeholder:"Enter Book Category",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{for:"bookDesc"},"Book Description"),o.a.createElement("br",null),o.a.createElement("textarea",{type:"text",name:"description",id:"bookDesc",placeholder:"Enter Book Description",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{id:"bookAddbtn",type:"submit",onClick:this.handleSubmit},"Add Book"))}}]),a}(o.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={show:!1,title:"",content:o.a.createElement("div",null)},e.showModal=function(t){e.setState({show:!e.state.show})},e.formAdd=function(t){e.setState({title:"Add new Book",content:o.a.createElement(p,null)})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"split left"},o.a.createElement("div",{className:"page-title"},o.a.createElement("h1",{id:"left-title"},"Recommended Books ",o.a.createElement("br",null)," Reading")),o.a.createElement("div",{className:"centered"},o.a.createElement("button",{className:"add-btn circle-box toggle-button",id:"centered-toggle-button",type:"button",onClick:function(t){e.showModal(),e.formAdd()}},"Tambah"),o.a.createElement(h,{onClose:this.showModal,show:this.state.show,title:this.state.title},this.state.content)))}}]),a}(o.a.Component),E=(a(44),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{key:this.props.id},o.a.createElement("h1",null,this.props.title),o.a.createElement("h4",null,this.props.category),o.a.createElement("p",null,this.props.description))}}]),a}(o.a.Component)),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={book:[],books:[],targetId:0,show:!1,title:"",content:o.a.createElement("div",null)},e.showModal=function(t){e.setState({show:!e.state.show})},e.showDetail=function(t){b.a.get("https://fullstack-book.ariefdfaltah.com/book/detail/".concat(t.target.name,"?key=gandhi")).then((function(t){var a=t.data.data;e.setState({book:a})})),e.setState({title:"Book Detail",content:o.a.createElement(E,{id:e.state.book.id,title:e.state.book.title,category:e.state.book.category,description:e.state.book.description})}),e.showModal()},e.handleSubmit=function(e){e.preventDefault(),console.log(e.target.name),b.a.get("https://fullstack-book.ariefdfaltah.com/book/delete/".concat(e.target.name,"?key=gandhi")).then((function(e){console.log(e),console.log(e.data)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://fullstack-book.ariefdfaltah.com/book/list?key=gandhi&sort_by=category&sort_order=desc").then((function(t){var a=t.data.data;e.setState({books:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"split right"},o.a.createElement(h,{onClose:this.showModal,show:this.state.show,title:this.state.title},this.state.content),o.a.createElement("table",null,o.a.createElement("tr",{id:"booklist-header"},o.a.createElement("th",null),o.a.createElement("th",null,o.a.createElement("h1",null,"Book List")),o.a.createElement("th",null),o.a.createElement("th",null,o.a.createElement("a",{className:"sort-btn",href:""},o.a.createElement("h1",{className:"text-right"},"SORT ",o.a.createElement("i",{className:"fa fa-sort"}))))),o.a.createElement("tbody",null,this.state.books.map((function(t){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h3",null,t.id)),o.a.createElement("td",null,o.a.createElement("h3",null,t.title)),o.a.createElement("td",null,o.a.createElement("h3",null,t.category)),o.a.createElement("td",null,o.a.createElement("h3",null,o.a.createElement("a",{href:"#",name:t.id,onClick:e.showDetail},"Detail")," | ",o.a.createElement("a",{href:"#",name:t.id,onClick:e.handleSubmit},"Delete"))))})))))}}]),a}(o.a.Component);var g=function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9abfc994.chunk.js.map