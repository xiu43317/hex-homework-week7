import{_ as $,M as F,r as g,o as i,c as n,a as t,h as p,v as m,F as _,i as y,j as L,d as M,b as h,n as w,t as b,f as D}from"./index-UMp20Tq9.js";import{D as I}from"./DeleteModal-NM61Nhdk.js";const P="https://vue3-course-api.hexschool.io/v2",k="rock",A={data(){return{product:{},new:!1}},props:["isNew","tempProduct"],methods:{updateProduct(){this.isNew?this.$http.post(`${P}/api/${k}/admin/product`,{data:this.tempProduct}).then(l=>{alert(l.data.message),this.getProducts(),this.hideModal()}).catch(l=>{alert(l.response.data.message),this.hideModal()}):this.$http.put(`${P}/api/${k}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(l=>{alert(l.data.message),this.getProducts(),this.hideModal()}).catch(l=>{alert(l.response.data.message)})},createImages(){this.Product.imagesUrl=[],this.Product.imagesUrl.push("")},getProducts(){this.$emit("getProducts")},openModal(){this.product=this.tempProduct,this.myModal.show()},hideModal(){this.myModal.hide()},uploadFile(){const l=this.fileInput.files[0],e=new FormData;e.append("file-to-upload",l),this.$http.post(`${P}/api/${k}/admin/upload`,e).then(d=>{this.Product.imageUrl=d.data.imageUrl}).catch(d=>{alert(d.response.data.message)})},uploadFiles(l){const d=document.querySelectorAll(".uploadImages")[l].files[0],f=new FormData;f.append("file-to-upload",d),this.$http.post(`${P}/api/${k}/admin/upload`,f).then(o=>{this.Product.imagesUrl[l]=o.data.imageUrl}).catch(o=>{alert(o.response.data.message)})}},watch:{isNew(){this.new=this.isNew}},mounted(){this.myModal=new F(this.$refs.Modal,{keyboard:!1})}},T={id:"productModal",ref:"Modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},B={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},G={class:"modal-header bg-dark text-white"},S={id:"productModalLabel",class:"modal-title"},j={key:0},q={key:1},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},J={class:"row"},K={class:"col-sm-4"},O={class:"mb-2"},Q={class:"mb-3"},R=t("h3",{class:"mb-3"},"主要圖片",-1),W=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),X={class:"mb-3"},Y=t("label",{for:"formFile",class:"form-label"},"上傳檔案",-1),Z=["src"],tt=t("h3",{class:"mb-3"},"多圖新增",-1),et={key:0},ot={class:"mb-3"},st=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),lt=["onUpdate:modelValue"],it={class:"mb-3"},nt=t("label",{for:"formFile",class:"form-label"},"上傳檔案",-1),dt=["onChange"],at=["src"],rt={key:0},ct={key:1},ut={key:1},pt={class:"col-sm-8"},mt={class:"mb-3"},ht=t("label",{for:"title",class:"form-label"},"標題",-1),_t={class:"row"},gt={class:"mb-3 col-md-6"},bt=t("label",{for:"category",class:"form-label"},"分類",-1),ft={class:"mb-3 col-md-6"},vt=t("label",{for:"price",class:"form-label"},"單位",-1),yt={class:"row"},Pt={class:"mb-3 col-md-6"},kt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Mt={class:"mb-3 col-md-6"},wt=t("label",{for:"price",class:"form-label"},"售價",-1),Ut=t("hr",null,null,-1),$t={class:"mb-3"},xt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Ct={class:"mb-3"},Vt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Nt={class:"mb-3 row"},Ft={class:"mb-3 col-md-6"},Lt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Dt={class:"mb-3 col-md-6 row"},It=t("label",{for:"price",class:"col-sm-3 col-form-label"},"推薦度",-1),At={class:"col-sm-5 mt-1"},Tt=["onClick"],Bt={key:0},Et={key:1},Gt={class:"modal-footer"};function St(l,e,d,f,o,a){const r=g("font-awesome-icon");return i(),n("div",T,[t("div",B,[t("div",E,[t("div",G,[t("h5",S,[d.isNew?(i(),n("span",j,"新增產品")):(i(),n("span",q,"編輯產品"))]),z]),t("div",H,[t("div",J,[t("div",K,[t("div",O,[t("div",Q,[R,W,p(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>o.product.imageUrl=s)},null,512),[[m,o.product.imageUrl]])]),t("div",X,[Y,t("input",{class:"form-control",type:"file",id:"formFile",ref:"formFile",onChange:e[1]||(e[1]=s=>a.uploadFile())},null,544)]),t("img",{class:"img-fluid",src:o.product.imageUrl},null,8,Z)]),tt,Array.isArray(o.product.imagesUrl)?(i(),n("div",et,[(i(!0),n(_,null,y(o.product.imagesUrl,(s,c)=>(i(),n(_,{key:c},[t("div",ot,[st,p(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":v=>o.product.imagesUrl[c]=v},null,8,lt),[[m,o.product.imagesUrl[c]]])]),t("div",it,[nt,t("input",{class:"form-control uploadImages",type:"file",onChange:v=>a.uploadFiles(c)},null,40,dt),t("img",{class:"img-fluid",src:o.product.imagesUrl[c]},null,8,at)])],64))),128)),!o.product.imagesUrl.length||o.product.imagesUrl[o.product.imagesUrl.length-1]?(i(),n("div",rt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.product.imagesUrl.push(""))}," 新增圖片 ")])):(i(),n("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>o.product.imagesUrl.pop())}," 刪除圖片 ")]))])):(i(),n("div",ut,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=s=>a.createImages())}," 新增圖片 ")]))]),t("div",pt,[t("div",mt,[ht,p(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=s=>o.product.title=s)},null,512),[[m,o.product.title]])]),t("div",_t,[t("div",gt,[bt,p(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=s=>o.product.category=s)},null,512),[[m,o.product.category]])]),t("div",ft,[vt,p(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=s=>o.product.unit=s)},null,512),[[m,o.product.unit]])])]),t("div",yt,[t("div",Pt,[kt,p(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=s=>o.product.origin_price=s)},null,512),[[m,o.product.origin_price,void 0,{number:!0}]])]),t("div",Mt,[wt,p(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=s=>o.product.price=s)},null,512),[[m,o.product.price,void 0,{number:!0}]])])]),Ut,t("div",$t,[xt,p(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=s=>o.product.description=s)},`\r
                `,512),[[m,o.product.description]])]),t("div",Ct,[Vt,p(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=s=>o.product.content=s)},`\r
                `,512),[[m,o.product.content]])]),t("div",Nt,[t("div",Ft,[p(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=s=>o.product.is_enabled=s)},null,512),[[L,o.product.is_enabled]]),Lt]),t("div",Dt,[It,t("div",At,[(i(),n(_,null,y(5,(s,c)=>t("a",{href:"#",key:c,onClick:M(v=>o.product.stars=c+1,["prevent"])},[c+1<=d.tempProduct.stars?(i(),n("span",Bt,[h(r,{icon:["fas","star"]})])):(i(),n("span",Et,[h(r,{icon:["far","star"]})]))],8,Tt)),64))])])])])])]),t("div",Gt,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[13]||(e[13]=s=>a.hideModal())}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=s=>a.updateProduct())}," 確認 ")])])])],512)}const jt=$(A,[["render",St]]),qt={data(){return{}},methods:{emitPage(l){this.$emit("emit-page",l)}},props:["pages"]},zt={key:0,"aria-label":"Page navigation example"},Ht={class:"pagination"},Jt=t("span",{"aria-hidden":"true"},"«",-1),Kt=[Jt],Ot={key:0,class:"page-link"},Qt=["onClick"],Rt=t("span",{"aria-hidden":"true"},"»",-1),Wt=[Rt];function Xt(l,e,d,f,o,a){return d.pages.total_pages?(i(),n("nav",zt,[t("ul",Ht,[t("li",{class:w(["page-item",{disabled:d.pages.current_page===1}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=M(r=>a.emitPage(d.pages.current_page-1),["prevent"]))},Kt)],2),(i(!0),n(_,null,y(d.pages.total_pages,(r,s)=>(i(),n("li",{class:w(["page-item",{active:r===d.pages.current_page}]),key:s},[r===d.pages.current_page?(i(),n("a",Ot,b(r),1)):(i(),n("a",{key:1,class:"page-link",href:"#",onClick:M(c=>a.emitPage(r),["prevent"])},b(r),9,Qt))],2))),128)),t("li",{class:w(["page-item",{disabled:d.pages.current_page===d.pages.total_pages}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=M(r=>a.emitPage(d.pages.current_page+1),["prevent"]))},Wt)],2)])])):D("",!0)}const Yt=$(qt,[["render",Xt]]),U="https://vue3-course-api.hexschool.io/v2",V="rock",Zt={data(){return{products:[],isNew:!0,pagination:{},tempProduct:{imagesUrl:[]},editModal:"",delModel:"",isLoading:!1}},methods:{checkLogin(){this.$http.post(`${U}/api/user/check`).then(l=>{this.getProducts()}).catch(l=>{this.$router.push("/login")})},getProducts(l=1){this.isLoading=!0,this.$http.get(`${U}/api/${V}/admin/products?page=${l}`).then(e=>{this.products=e.data.products,this.pagination=e.data.pagination,this.isLoading=!1}).catch(e=>{console.dir(e),this.isLoading=!1})},openModal(l,e={}){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,setTimeout(()=>{this.$refs.productModal.openModal()},500)):l==="edit"?(this.tempProduct={...e},this.isNew=!1,setTimeout(()=>{this.$refs.productModal.openModal()},500)):l==="delete"&&(this.tempProduct=e,setTimeout(()=>{this.$refs.delProductModal.openModal()},500))},deleteProduct(l){this.$http.delete(`${U}/api/${V}/admin/product/${l}`).then(e=>{alert(e.data.message),this.$refs.delProductModal.hideModal(),this.getProducts()}).catch(e=>{alert(e.response.data.message),this.$refs.delProductModal.hideModal()})}},mounted(){this.getProducts(),this.editModal=this.$refs.productModal,this.delModel=this.$refs.delProductModal},components:{editProduct:jt,deleteProduct:I,adminPagination:Yt}},te=t("div",{class:"h3 text-center mt-4"},"後台產品列表",-1),ee={class:"container"},oe={class:"text-end mt-4"},se={class:"table mt-4"},le=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"150"},"商品推薦"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),ie={key:0},ne={key:1},de=t("i",{class:"far fa-star"},null,-1),ae=[de],re={class:"text-end"},ce={class:"text-end"},ue={key:0,class:"text-success"},pe={key:1},me={class:"btn-group"},he=["onClick"],_e=["onClick"];function ge(l,e,d,f,o,a){const r=g("myLoading"),s=g("font-awesome-icon"),c=g("edit-product"),v=g("delete-product"),N=g("admin-pagination");return i(),n(_,null,[h(r,{active:o.isLoading},null,8,["active"]),te,t("div",ee,[t("div",oe,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=u=>a.openModal("new"))}," 建立新的產品 ")]),t("table",se,[le,t("tbody",null,[(i(!0),n(_,null,y(o.products,u=>(i(),n("tr",{key:u.id},[t("td",null,b(u.category),1),t("td",null,b(u.title),1),t("td",null,[(i(),n(_,null,y(5,(x,C)=>t("span",{key:C},[C+1<=u.stars?(i(),n("span",ie,[h(s,{icon:"fas fa-star"})])):(i(),n("span",ne,ae))])),64))]),t("td",re,b(u.origin_price),1),t("td",ce,b(u.price),1),t("td",null,[u.is_enabled?(i(),n("span",ue,"啟用")):(i(),n("span",pe,"未啟用"))]),t("td",null,[t("div",me,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>a.openModal("edit",u)}," 編輯 ",8,he),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>a.openModal("delete",u)}," 刪除 ",8,_e)])])]))),128))])]),h(c,{"is-new":o.isNew,"temp-product":o.tempProduct,onGetProducts:a.getProducts,ref:"productModal"},null,8,["is-new","temp-product","onGetProducts"]),h(v,{product:o.tempProduct,onDeleteItem:a.deleteProduct,ref:"delProductModal"},null,8,["product","onDeleteItem"]),h(N,{pages:o.pagination,onEmitPage:a.getProducts,ref:"pagination"},null,8,["pages","onEmitPage"])])],64)}const ve=$(Zt,[["render",ge]]);export{ve as default};
