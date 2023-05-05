function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=s.parcelRequirea4c8;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},s.parcelRequirea4c8=r),r.register("4ghiz",(function(t,s){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("4ghiz").register(JSON.parse('{"kwsqI":"index.d6387eb3.js","hYyze":"image-slash.d648fdf2.png"}'));var a={};class i{encrypt(e){let t="";for(let s=0;s<e.length;s++){const n=e.charCodeAt(s);t+=String.fromCharCode(n+1)}return t}decrypt(e){let t="";for(let s=0;s<e.length;s++){const n=e.charCodeAt(s);t+=String.fromCharCode(n-1)}return t}constructor(){this.title=window.config.title,this.user=window.config.user,this.repo=window.config.repo,this.token=this.decrypt(window.config.token),this.auth=window.config.auth,this.pagesize=window.config.pagesize,this.order=window.config.order}}class c extends i{get endpint(){return"https://api.github.com/graphql"}async fetch(e){return await fetch(this.endpint,{method:"POST",headers:{Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},body:JSON.stringify({query:e})})}}class l extends c{query(){return`{\n            user( login: "${this.user}") {\n                name\n                avatarUrl\n                email\n                websiteUrl\n                url\n                bio\n                login\n            }\n        }`}}class d extends c{query(e,t){return`query {\n            repository(owner: "${this.user}", name: "${this.repo}") {\n                name\n                description\n                issues(first: ${this.pagesize}, ${e?`after: "${e}",`:""} orderBy: { field: ${this.order}, direction: DESC }${t?`, labels: ["${t}"]`:""}) {\n                    totalCount\n                    pageInfo {\n                        hasPreviousPage\n                        startCursor\n                        hasNextPage\n                        endCursor\n                    }\n                    edges {\n                        node {\n                            title\n                            number\n                            createdAt\n                            author {\n                                login\n                            }\n                            labels(first: 10) {\n                                edges {\n                                    node {\n                                        name\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }`}}class h extends c{query(e){return`query {\n            repository(owner: "${this.user}", name: "${this.repo}") {\n                issue(number: ${e}) {\n                    title\n                    number\n                    createdAt\n                    author {\n                        login\n                    }\n                    body\n                    bodyHTML\n                    bodyText\n                    labels(first: 10) {\n                        edges {\n                            node {\n                                name\n                            }\n                        }\n                    }\n                    comments(first: 10) {\n                        edges {\n                            node {\n                                author {\n                                    login\n                                    avatarUrl\n                                    url\n                                }\n                                body\n                                bodyHTML\n                                bodyText\n                                createdAt\n                            }\n                        }\n                    }\n                }\n            }\n        }`}}a={getUser:async function(){try{const e=new l,t=await e.fetch(e.query()),s=await t.json();return e.data=s.data,new Promise(((t,n)=>{s?t(e):n(s)}))}catch(e){return new Promise(((t,s)=>s(e)))}},getIssues:async function(e,t){try{const s=new d,n=await s.fetch(s.query(e,t)),o=await n.json();return s.data=o.data,new Promise(((e,t)=>{o?e(s):t(o)}))}catch(e){return new Promise(((t,s)=>s(e)))}},getIssue:async function(e){try{const t=new h,s=await t.fetch(t.query(e)),n=await s.json();return t.data=n.data,new Promise(((e,s)=>{n?e(t):s(n)}))}catch(e){return new Promise(((t,s)=>s(e)))}}};var g;g={isoToDate:function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}};var p={};function u(){$(".markdown-body").find("img").map(((e,t)=>{const s=$(t).parent(),n=s.parent();1==n.children()?n.addClass("img-center"):s.is("a")&&s.addClass("img-center")})),$(".markdown-body").find("img").on("error",(e=>{$(e.currentTarget).attr("src",t(p)).parent().parent().addClass("img-broken")}))}p=new URL(r("4ghiz").resolve("hYyze"),import.meta.url).toString();new class{get $user(){return $("#user")}get $post(){return $("#post")}get $posts(){return $("#posts")}get $comments(){return $("#comments")}get footer(){return"#footer"}constructor(){this.all=[],this.routes()}routes(){const{root:e,index:t}=window.config;switch(console.log(),!0){case"/"==location.pathname:case e+t==location.pathname:case location.pathname.endsWith(e+t):this.getPosts();break;case/\/post\/\d/i.test(location.pathname):this.getPost(location.pathname.replace("/post/",""));break;case location.pathname.startsWith("/tag/")&&!location.pathname.endsWith("/tag/"):this.getPosts(decodeURIComponent(location.pathname).replace(/\/tag\//i,""));break;default:console.log("routers: ",404)}window.addEventListener("popstate",(s=>{const n=s.state;switch(console.log("asdfasdf",n),!0){case"/"==n:case e==n:case e+t==n:case null==n:this.getPosts();break;case/\/post\/\d/i.test(n):this.getPost(n.replace("/post/",""));break;case n.startsWith("/tag/")&&!n.endsWith("/tag/"):this.getPosts(decodeURIComponent(n).replace(/\/tag\//i,""));break;default:console.log("routers: ",404)}}))}updateURL(e){console.log("asdadfad222",e),history.pushState(e,"",e)}sleep(e=0){return new Promise((t=>{setTimeout(t,e)}))}loadingRender(e){"add"==e?($("html").addClass("loading"),$("title").text("Loading...")):$("html").removeClass("loading")}emptyRender(e){e.empty()}async toPosts(){return $(".home").addClass("page-movefrom"),$(".single").addClass("page-moveto"),await this.sleep(600),$(".home").removeClass("page-movefrom").addClass("page-current"),$(".single").removeClass("page-moveto").removeClass("page-current"),$("#comments").html(""),Promise.resolve()}async toPost(){return $(".home").addClass("page-moveto"),$(".single").addClass("page-movefrom"),await this.sleep(600),$(".home").removeClass("page-moveto").removeClass("page-current"),$(".single").removeClass("page-movefrom").addClass("page-current"),Promise.resolve()}getUser(){return new Promise(((e,t)=>{a.getUser().then((t=>{console.log("getUser",t),this.user=t,e()})).catch((e=>{t(),console.error(e)}))}))}getIssues(e){return new Promise(((t,s)=>{a.getIssues(e,this.search).then((e=>{console.log("getIssues",e),this.issues=e,this.posts=this.issues.data.repository.issues,this.all.push(this.issues.data.repository.issues),t()})).catch((e=>{s(),console.error(e)}))}))}getIssue(e){return new Promise(((t,s)=>{a.getIssue(e).then((e=>{console.log("getIssue",e),this.issue=e,this.post=this.issue.data.repository.issue,t()}))}))}async getPosts(e){this.search=e,await Promise.all([this.getUser(),this.getIssues()]),this.postsRender(),this.userRender(),this.pagingRender(),this.footerRender(),this.loadingRender("remove"),await this.toPosts()}async restorePosts(){this.$paging=void 0,this.emptyRender(this.$posts),this.restorePostsRender(),await this.toPosts(),this.updateURL("/"),this.footerRender(),$("title").text(this.user.title)}async getPost(e){await this.getIssue(e),u(this.postRender()),this.commentsRender(),this.loadingRender("remove"),await this.toPost(),this.footerRender(this.$comments),$("title").text(this.post.title+" - "+this.issue.title)}footerRender(e=this.$posts){$(this.footer).remove(),e.append('<div id="footer">\n                       © 2023 <a href="https://github.com/kenshin/isslog" target="_blank">Isslog</a>. Powered by\n                       <a href="https://kenshin.wang" target="_blank">Kenshin</a> .\n                       Theme by <a href="https://github.com/LoeiFy/Mirror" target="_blank">Mirror</a>\n                      </div>')}userRender(){const{avatarUrl:e,name:t,bio:s,url:n,websiteUrl:o,title:r}=this.user.data.user,a=`<img src="${e}">\n                      <h1>${t}</h1>\n                      <p>${s}</p>\n                      <div class="social">\n                          ${n?`<a target="_blank" href="${n}"><svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333" d="M62.056 551.038c0 40.781 3.825 77.681 11.447 110.672s18.197 61.678 31.697 86.034c13.5 24.356 30.656 45.759 51.497 64.266s43.425 33.609 67.781 45.338c24.356 11.728 52.144 21.262 83.391 28.603s63.141 12.459 95.709 15.413c32.569 2.925 68.372 4.387 107.381 4.387 39.319 0 75.263-1.462 107.831-4.387s64.547-8.072 95.934-15.413c31.387-7.341 59.344-16.875 83.841-28.603s47.25-26.831 68.203-45.338c20.981-18.478 38.278-39.909 51.919-64.266s24.272-53.044 31.894-86.034c7.622-33.019 11.447-69.919 11.447-110.672 0-72.759-24.356-135.703-73.041-188.803 2.644-7.031 5.062-15.047 7.256-23.991s4.247-21.713 6.159-38.278c1.913-16.566 1.181-35.719-2.194-57.431s-9.619-43.875-18.703-66.459l-6.609-1.322c-4.697-0.872-12.403-0.647-23.119 0.675s-23.175 3.966-37.406 7.931c-14.231 3.966-32.569 11.587-55.013 22.894s-46.125 25.453-71.072 42.469c-42.834-11.728-101.672-17.606-176.484-17.606-74.531 0-133.2 5.878-176.034 17.606-24.947-17.016-48.769-31.163-71.522-42.469s-40.866-18.928-54.366-22.894c-13.5-3.966-26.1-6.525-37.856-7.706s-19.153-1.547-22.219-1.097c-3.094 0.45-5.512 0.956-7.256 1.547-9.084 22.584-15.328 44.747-18.703 66.459s-4.106 40.866-2.194 57.431c1.913 16.566 3.966 29.334 6.159 38.278s4.613 16.931 7.256 23.991c-48.712 53.1-73.069 116.044-73.069 188.803zM172.531 661.484c0-42.244 19.209-80.972 57.656-116.184 11.447-10.575 24.778-18.563 40.050-23.991s32.484-8.494 51.722-9.253c19.209-0.731 37.631-0.591 55.238 0.45s39.319 2.419 65.138 4.191c25.819 1.772 48.122 2.644 66.909 2.644s41.063-0.872 66.881-2.644c25.819-1.772 47.531-3.15 65.138-4.191s36-1.181 55.238-0.45c19.209 0.731 36.45 3.825 51.722 9.253s28.603 13.416 40.050 23.991c38.447 34.622 57.656 73.35 57.656 116.184 0 25.228-3.15 47.616-9.478 67.106s-14.372 35.859-24.216 49.078c-9.816 13.191-23.456 24.413-40.922 33.666s-34.481 16.369-51.047 21.347c-16.566 4.978-37.856 8.887-63.816 11.672s-49.134 4.472-69.525 5.063c-20.391 0.591-46.294 0.872-77.681 0.872s-57.291-0.281-77.681-0.872c-20.391-0.591-43.566-2.278-69.525-5.063s-47.25-6.666-63.816-11.672c-16.566-4.978-33.581-12.094-51.047-21.347s-31.106-20.475-40.922-33.666c-9.816-13.191-17.887-29.559-24.216-49.078s-9.45-41.878-9.45-67.106zM624.556 652.625c0-46.603 25.172-84.375 56.25-84.375s56.25 37.772 56.25 84.375c0 46.603-25.172 84.375-56.25 84.375s-56.25-37.772-56.25-84.375zM287.056 652.625c0-46.603 25.172-84.375 56.25-84.375s56.25 37.772 56.25 84.375c0 46.603-25.172 84.375-56.25 84.375s-56.25-37.772-56.25-84.375z"></path></svg></a>`:""}\n                          ${o?`<a target="_blank" href="${o}"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333" d="M948.229 503.619c12.728 12.109 19.391 25.435 20.011 39.978s-4.228 26.674-14.543 36.348c-11.511 10.294-24.858 15.141-40 14.565-15.141-0.619-27.25-4.848-36.327-12.75-3.054-2.392-12.301-10.913-27.741-25.435-15.462-14.543-33.935-31.97-55.44-52.237-21.527-20.31-44.549-42.135-69.065-65.435-24.538-23.321-47.709-45.296-69.535-65.905s-40.576-38.462-56.359-53.604c-15.739-15.141-25.734-24.559-29.984-28.169-19.391-17.576-38.462-26.076-57.277-25.456-18.772 0.619-37.245 9.098-55.44 25.456-6.044 5.446-17.405 15.889-34.084 31.351-16.636 15.44-35.899 33.465-57.704 54.073-21.805 20.587-44.848 42.114-69.044 64.517-24.26 22.424-46.684 43.31-67.271 62.723s-38.313 35.899-53.155 49.503c-14.842 13.646-23.769 21.698-26.802 24.111-9.098 7.261-21.207 11.191-36.369 11.81-15.141 0.619-28.147-3.951-39.082-13.646-12.088-10.892-17.854-24.068-17.277-39.551 0.619-15.44 5.766-27.699 15.483-36.796 3.631-3.631 14.821-14.223 33.614-31.82 18.772-17.555 41.196-38.462 67.25-62.701 26.054-24.239 54.073-50.293 84.057-78.163 30.005-27.87 57.875-53.924 83.609-78.163 25.777-24.239 47.88-44.976 66.353-62.253s29.236-27.421 32.269-30.432c23-22.445 47.859-33.785 74.511-34.084 26.652-0.342 49.396 8.628 68.147 26.78 3.652 3.054 11.212 10.187 22.723 21.377s25.606 24.837 42.264 40.897c16.679 16.060 35.302 34.084 55.889 54.073 20.609 20.011 41.495 40.128 62.744 60.438 21.185 20.288 41.965 40.448 62.231 60.438 20.31 20.011 38.932 38.014 55.889 54.073 16.978 16.060 31.223 29.813 42.712 41.345l22.744 22.744zM456.549 371.831c15.141-13.924 33.337-21.356 54.543-22.274 21.207-0.897 40.299 6.535 57.256 22.274 1.837 1.815 7.282 6.962 16.38 15.462l34.533 31.799c13.326 12.728 28.318 26.973 44.976 42.712s33.785 31.521 51.34 47.261c40.576 37.565 86.043 79.679 136.337 126.321v172.685c0 13.348-4.997 25.157-14.992 35.451-10.016 10.294-23.492 15.761-40.47 16.359h-171.767v-140.864c0-20.011-9.375-29.984-28.147-29.984h-173.603c-10.294 0-17.427 3.033-21.356 9.098-3.951 6.044-5.916 13.006-5.916 20.908 0 3.631-0.128 12.878-0.448 27.72-0.32 14.821-0.448 30.753-0.448 47.709v65.414h-166.321c-17.555 0-31.5-3.93-41.794-11.81s-15.462-19.114-15.462-33.614v-180.886c49.674-45.446 94.821-86.641 135.419-123.609 16.978-15.718 33.935-31.329 50.891-46.791 16.978-15.44 32.418-29.535 46.364-42.264s25.585-23.492 35.003-32.269c9.354-8.777 15.27-14.394 17.683-16.807v0zM456.549 371.831z"></path></svg></a>`:""}\n                      </div>`;this.$user.html(a),$("title").text(this.user.title)}postsRender(){let e="";this.posts.edges.forEach((t=>{t=t.node,e+=`<a class="post" href="/post/${t.number}" post-id="${t.number}">\n                        <h2>${t.title}</h2>\n                        <div>${t.labels.edges.map((e=>`<span class="tag">#${e.node.name}</span>`)).join("")}</div>\n                        <p>${(0,g.isoToDate)(t.createdAt)}</p>\n                     </a>`})),0==this.$posts.find(".post").length?this.$posts.append(e):this.$posts.find(".post:last").after(e),$(".post").on("click",this.$posts,(e=>{const t=$(e.target),s=t.text(),n=$(e.currentTarget).attr("post-id");t.hasClass("tag")?location.href=location.origin+"/tag/"+s.replace(/^#/i,""):(this.loadingRender("add"),this.getPost(n),this.updateURL("/post/"+n)),e.preventDefault()}))}pagingRender(){const e=$(".post").length,t=this.posts.totalCount,s=e<t?`More Posts (${e} / ${t})`:"End Posts",n=`<button class="button paging">${s}</button>`;this.$paging?this.$paging.text(s):(this.$posts.append(n),this.$paging=this.$posts.find(".paging"),this.$paging.on("click",(()=>{const{hasNextPage:e,endCursor:t}=this.posts.pageInfo;e?(this.loadingRender("add"),this.getIssues(t).then((()=>{this.postsRender(),this.pagingRender(),this.loadingRender("remove"),$("title").text(this.user.title)}))):console.log("asdfasdfasef")})))}restorePostsRender(){const e=this.all.length;this.all.forEach(((t,s)=>{this.posts=t,this.postsRender(),s==e-1&&this.pagingRender()}))}postRender(){let e=`<div class="back"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M774.327684 466.559277l-359.779797 0.322531L524.880994 358.559096c18.440678-18.022689 18.440678-47.248633 0-65.271322-18.446463-18.027028-48.343503-18.027028-66.789966-0.004339L273.231548 474.785989c-1.988701 1.411616-3.886282 2.982328-5.678282 4.733831-1.942418 1.899028-3.666441 3.92678-5.202441 6.04565-5.870644 7.694463-9.344723 17.237333-9.344723 27.575684 0 16.475119 8.835616 30.92104 22.124475 39.089898l182.960452 179.626667c18.446463 18.028475 48.343503 18.028475 66.789966 0 18.440678-18.022689 18.440678-47.248633 0-65.271322l-109.388655-107.395616 358.835345-0.316746c26.078734 0 47.225492-20.666576 47.225492-46.158102S800.406418 466.559277 774.327684 466.559277L774.327684 466.559277zM774.327684 466.559277" p-id="4183"></path><path d="M512 92.564972c231.646734 0 419.435028 187.786847 419.435028 419.435028 0 231.646734-187.788294 419.435028-419.435028 419.435028-231.648181 0-419.435028-187.788294-419.435028-419.435028C92.564972 280.351819 280.351819 92.564972 512 92.564972M512 0c-69.079503 0-136.139932 13.550644-199.322757 40.274441-60.980068 25.792362-115.725017 62.696859-162.716203 109.688045-46.991186 46.991186-83.895684 101.736136-109.686599 162.716203C13.550644 375.860068 0 442.920497 0 512s13.550644 136.139932 40.274441 199.322757c25.792362 60.978621 62.696859 115.725017 109.686599 162.716203 46.991186 46.991186 101.737582 83.895684 162.716203 109.688045C375.860068 1010.450802 442.920497 1024 512 1024s136.139932-13.549198 199.322757-40.274441c60.978621-25.792362 115.725017-62.696859 162.716203-109.688045s83.895684-101.737582 109.688045-162.716203C1010.450802 648.139932 1024 581.079503 1024 512s-13.549198-136.139932-40.274441-199.322757c-25.792362-60.980068-62.696859-115.725017-109.688045-162.716203-46.991186-46.991186-101.737582-83.895684-162.716203-109.686599C648.139932 13.550644 581.079503 0 512 0L512 0z" p-id="4184"></path></svg></div>\n                    <h1>${this.post.title}</h1>\n                    <p>Created at<span>${(0,g.isoToDate)(this.post.createdAt)}</span></p>\n                    <div class="markdown-body">${this.post.bodyHTML}</div>\n                    <div class="labels">${this.post.labels.edges.map((e=>`<a href="${location.origin+"/tag/"+encodeURIComponent(e.node.name)}">#${e.node.name}</span>`)).join("")}</div>\n                    <div class="open-comments"></div>\n                    `;this.$post.html(e),this.$post.find(".back").on("click",(()=>{this.all.length>0?this.restorePosts():(this.loadingRender("add"),this.$paging=void 0,this.emptyRender(this.$posts),this.getPosts(),this.updateURL("/"))}))}commentsRender(){const e=this.post.comments.edges;if(0==e.length)this.$post.append(`<a class="button" target="_blank" href="https://github.com/${this.issue.user}/${this.issue.repo}/issues/${this.post.number}#new_comment_field">Add Comments</a>`);else{let t="";e.forEach((e=>{e=e.node;const{login:s,avatarUrl:n,url:o}=e.author,{bodyHTML:r,createdAt:a}=e;t+=`<li>\n                            <a href="${o}" class="author">\n                                <img src="${n}" alt="${n}">\n                            </a>\n                            <div class="comment-body">\n                                <a target="_blank" href="${o}">${s}</a>\n                                <span>on ${(0,g.isoToDate)(a)}</span>\n                                <div class="markdown-body">${r}</div>\n                            </div>\n                         </li>`})),this.$comments.html(`<ul class="comment-list">${t}</ul>`)}}};
//# sourceMappingURL=index.d6387eb3.js.map
