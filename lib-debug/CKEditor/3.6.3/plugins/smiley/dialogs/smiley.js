CKEDITOR.dialog.add("smiley",function(e){var t=e.config,n=e.lang.smiley,r=t.smiley_images,i=t.smiley_columns||8,s,o,u=function(t){var n=t.data.getTarget(),r=n.getName();if(r=="a")n=n.getChild(0);else if(r!="img")return;var i=n.getAttribute("cke_src"),s=n.getAttribute("title"),u=e.document.createElement("img",{attributes:{src:i,"data-cke-saved-src":i,title:s,alt:s,width:n.$.width,height:n.$.height}});e.insertElement(u),o.hide(),t.data.preventDefault()},a=CKEDITOR.tools.addFunction(function(t,n){t=new CKEDITOR.dom.event(t),n=new CKEDITOR.dom.element(n);var r,i,s=t.getKeystroke(),o=e.lang.dir=="rtl";switch(s){case 38:if(r=n.getParent().getParent().getPrevious())i=r.getChild([n.getParent().getIndex(),0]),i.focus();t.preventDefault();break;case 40:if(r=n.getParent().getParent().getNext())i=r.getChild([n.getParent().getIndex(),0]),i&&i.focus();t.preventDefault();break;case 32:u({data:t}),t.preventDefault();break;case o?37:39:case 9:if(r=n.getParent().getNext())i=r.getChild(0),i.focus(),t.preventDefault(!0);else if(r=n.getParent().getParent().getNext())i=r.getChild([0,0]),i&&i.focus(),t.preventDefault(!0);break;case o?39:37:case CKEDITOR.SHIFT+9:if(r=n.getParent().getPrevious())i=r.getChild(0),i.focus(),t.preventDefault(!0);else if(r=n.getParent().getParent().getPrevious())i=r.getLast().getChild(0),i.focus(),t.preventDefault(!0);break;default:return}}),f=CKEDITOR.tools.getNextId()+"_smiley_emtions_label",l=['<div><span id="'+f+'" class="cke_voice_label">'+n.options+"</span>",'<table role="listbox" aria-labelledby="'+f+'" style="width:100%;height:100%" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"],c=r.length;for(s=0;s<c;s++){s%i===0&&l.push("<tr>");var h="cke_smile_label_"+s+"_"+CKEDITOR.tools.getNextNumber();l.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(s+1)+'"',' aria-setsize="'+c+'"',' aria-labelledby="'+h+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',a,', event, this );">','<img class="cke_hand" title="',t.smiley_descriptions[s],'" cke_src="',CKEDITOR.tools.htmlEncode(t.smiley_path+r[s]),'" alt="',t.smiley_descriptions[s],'"',' src="',CKEDITOR.tools.htmlEncode(t.smiley_path+r[s]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":"",'><span id="'+h+'" class="cke_voice_label">'+t.smiley_descriptions[s]+"</span>"+"</a>","</td>"),s%i==i-1&&l.push("</tr>")}if(s<i-1){for(;s<i-1;s++)l.push("<td></td>");l.push("</tr>")}l.push("</tbody></table></div>");var p={type:"html",id:"smileySelector",html:l.join(""),onLoad:function(e){o=e.sender},focus:function(){var e=this;setTimeout(function(){var t=e.getElement().getElementsByTag("a").getItem(0);t.focus()},0)},onClick:u,style:"width: 100%; border-collapse: separate;"};return{title:e.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[p]}],buttons:[CKEDITOR.dialog.cancelButton]}});