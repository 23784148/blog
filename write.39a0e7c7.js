!function(){class e{get endpoint(){return"https://isslog-server-production.up.railway.app"}async fetcher(e,t){return await fetch(this.endpoint+e,t)}async upload(e){const t=new FormData;t.append("image",e);try{const e=await this.fetcher("/api/upload",{method:"POST",body:t});return await e.json()}catch(e){return new Promise(((t,n)=>n(e)))}}async memo(e,t){try{const n=await this.fetcher("/api/memo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,content:t})});return await n.json()}catch(e){return new Promise(((t,n)=>n(e)))}}}class t{get root(){return"#editor"}get $root(){return $(this.root)}get $toolbar(){return $(".toolbar")}constructor(){this.editor=void 0,this.$root.val("List\n====\n\n## Quick Links\n- [home](#)\n- [preferences](#preferences)\n- [profile](#profile)\n- [sample](#sample)\n- [GitHub](https://git.io/mak)\n- [Sync a Gist](?gist=0632fe0546632d95c8d965b48ff47b15)\n\n## Gists\n* [mak_demo_modes.md](#30c93213bf556dc671f9df983a932b2a) edited 1 week ago\n* [mak_demo_tasks.md](#cdd1eaee2b55948a99d235cdc8b7596c) edited 1 week ago\n* [mak_demo_files.md](#d08a64051477ab2edaef30405368a00d) edited 1 week ago\n\n## Gists\n1. 测试有序列表\n\n## Local\n- Nothing here. Use go:filename or [](#filename) to create a new file.\n- ![](https://raw.githubusercontent.com/23784148/posts/assets/1497fb7e-bda7-44a4-86db-d0a20693ee60.png)"),this.render()}getDoc(){return this.editor.getDoc()}getCurrent(){const e=this.getDoc(),t=e.getCursor();return{doc:e,cursor:t}}render(){this.codeMirrorRender().codeMirrorListen().toolbarRender().toolbarListen()}codeMirrorRender(){return this.editor=CodeMirror.fromTextArea($(this.root)[0],{lineNumbers:!0,theme:"neo",mode:"markdown"}),$(".CodeMirror").addClass("light"),this}codeMirrorListen(){return this.editor.on("beforeChange",((e,t)=>{const n=this.getDoc();this.prevStr=n.getLine(t.from.line)})),this.editor.on("keyup",((e,t)=>{if(13===t.keyCode){const e=/^(-|\*|\d+.) /i;if(e.test(this.prevStr)){let t=this.prevStr.match(e)[0];/\d/.test(parseInt(t))&&(t=parseInt(t)+1+". ");const{doc:n,cursor:o}=this.getCurrent();n.replaceRange(t,o)}}})),this.editor.on("change",((e,t)=>{const n=t.text.join("");if(["[","("].includes(n)){const{doc:e,cursor:t}=this.getCurrent();let o="["==n?"]":"("==n?")":"";e.replaceRange(o,t),e.setCursor(t.line,t.ch)}})),this}toolbarRender(){return this.$toolbar.html('<a class="upload">\n                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M256 298.666667a85.333333 85.333333 0 1 1 85.333333 85.333333 85.333333 85.333333 0 0 1-85.333333-85.333333z m674.133333 415.146666l-256-341.333333a32.426667 32.426667 0 0 0-51.2 0l-170.666666 220.586667a21.333333 21.333333 0 0 1-33.28 0l-93.44-113.493334a32 32 0 0 0-49.92 0l-181.333334 234.24a42.666667 42.666667 0 0 0-8.96 26.026667v38.826667a32.426667 32.426667 0 0 0 32 32h789.333334a32.426667 32.426667 0 0 0 32-32v-39.253334a42.666667 42.666667 0 0 0-8.533334-25.6z" p-id="5528" fill="#424242"></path></svg>\n                      </a>\n                      <a class="preview">\n                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M955.733333 497.066667c-81.066667-164.266667-249.6-277.333333-443.733333-277.333334s-362.666667 113.066667-443.733333 277.333334c-4.266667 10.666667-4.266667 21.333333 0 32 81.066667 164.266667 249.6 277.333333 443.733333 277.333333s362.666667-113.066667 443.733333-277.333333c4.266667-10.666667 4.266667-21.333333 0-32zM512 701.866667c-104.533333 0-189.866667-83.2-189.866667-189.866667s83.2-189.866667 189.866667-189.866667 189.866667 83.2 189.866667 189.866667-85.333333 189.866667-189.866667 189.866667z m0-309.333334c-66.133333 0-119.466667 53.333333-119.466667 119.466667s53.333333 119.466667 119.466667 119.466667 119.466667-53.333333 119.466667-119.466667-53.333333-119.466667-119.466667-119.466667z" p-id="4273" fill="#424242"></path></svg>\n                      </a>\n                      <a class="submit">\n                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M796.2 466.4c0-2.4 0.4-4.8 0.4-7.2 0-130-103.6-235.2-231.4-235.2-92.2 0-171.4 54.8-208.6 134-16.2-8.2-34.4-13-53.6-13-59 0-108.2 43.8-117.6 101C114.6 470.4 64 538.2 64 618c0 100.4 80.2 182 179 182L448 800l0-160-96.4 0 160.4-167.4 160.4 167.2-96.4 0 0 160 220.6 0c90.4 0 163.4-75 163.4-166.8C960 541.2 886.6 466.6 796.2 466.4z" p-id="2361" fill="#424242"></path></svg>\n                      </a>'),this}toolbarListen(){return $(".upload").on("click",(t=>{const n=document.createElement("input"),o=$(n);o.attr({type:"file"}).one("change",(async t=>{const n=t.target.files[0];if(n){const t=new e,o=await t.upload(n);if(201==o.code){const{doc:e,cursor:t}=this.getCurrent(),n=`![](${o.result.url})`;e.replaceRange(n,t),e.setCursor(t.line,t.ch+n.length),this.editor.focus()}}})),o.trigger("click")})),$(".preview").on("click",(e=>{const t=this.getDoc(),n=(new showdown.Converter).makeHtml(t.getValue());this.previewRender(n)})),$(".submit").on("click",(async t=>{const n=this.getDoc(),o=new e;await o.memo(34,n.getValue())})),this}previewRender(e){const t=`<div id="preview" class="markdown-body">\n                        ${e}\n                        <div class="close">\n                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M512 992A480.512 480.512 0 0 1 32 512 480.512 480.512 0 0 1 512 32a480.512 480.512 0 0 1 480 480 480.512 480.512 0 0 1-480 480z m0-434.624l135.68 135.68a32 32 0 0 0 22.72 9.344 32 32 0 0 0 22.528-9.344 32 32 0 0 0 9.344-22.592 32 32 0 0 0-9.344-22.656L557.184 511.936l135.744-135.68a32 32 0 0 0 9.472-22.784 31.488 31.488 0 0 0-9.472-22.464 31.552 31.552 0 0 0-22.656-9.472 31.552 31.552 0 0 0-22.656 9.472L511.936 466.88 376.064 331.008a31.552 31.552 0 0 0-22.656-9.472 31.488 31.488 0 0 0-22.592 9.472 32 32 0 0 0 0 45.248l135.872 135.68-135.872 135.872a31.168 31.168 0 0 0-9.344 22.464 31.616 31.616 0 0 0 9.344 22.72 32 32 0 0 0 22.656 9.344A32 32 0 0 0 376 692.992l135.872-135.68z" fill="#333333"></path></svg>\n                        </div>\n                      </div>`;$("body").append(t);const n=$("#preview");n.find(".close").on("click",(e=>{n.addClass("hide").on("animationend",(e=>{n.remove()}))}))}}$(document).ready((()=>{new t}))}();
//# sourceMappingURL=write.39a0e7c7.js.map
