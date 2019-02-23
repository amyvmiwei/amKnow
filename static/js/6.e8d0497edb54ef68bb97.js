webpackJsonp([6],{C6Yp:function(e,t){},YKNI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),r=a.n(n),i=a("YtJ0"),o=a("mtWM"),l=a.n(o),s={name:"AutomobileBrandMng",store:i.a,data:function(){return{loading:!1,pagesize:10,currentPage:1,id:"",filters:{name:"",country:""},countries:[{label:"中国",value:"China"},{label:"德国",value:"Germany"},{label:"美国",value:"America"},{label:"法国",value:"France"},{label:"意大利",value:"Italy"},{label:"日本",value:"Japan"},{label:"韩国",value:"Korea"}],filterBrandInfs:[],formVisible:!1,formData:{},addOrEdit:0,brandInfs:[],formRules:{name:[{required:!0,pattern:/^[\s\S]*.*[^\s][\s\S]*$/,message:"请输入品牌名称",trigger:"blur"}]}}},mounted:function(){this.loading=!0;var e=this;l.a.get("https://www.easy-mock.com/mock/5c702a27d3044d1448586d67/amKnow/brand").then(function(t){e.brandInfs=t.data,e.filterBrand(),e.loading=!1}).catch(function(t){e.$message({message:"网络错误,请稍后再试",type:"error"}),e.loading=!1})},computed:{getShow:function(){return this.$store.state.isShow},showTable:function(){return this.filterBrandInfs.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)}},methods:{searchBrand:function(){this.currentPage=1,this.filterBrand()},filterBrand:function(){var e=this.filters.name.trim(),t=this.filters.country,a=this.brandInfs.filter(function(a){var n=!0,r=!0;return 0!=e.length&&(n=-1!=a.name.indexOf(e)),0!=t.length&&(r=a.country==t),n&&r});this.filterBrandInfs=a},handleCurrentChange:function(e){this.currentPage=e},handleAdd:function(){this.formVisible=!0,this.addOrEdit=0,this.formData={name:"",country:"",company:"",founder:"",time:""}},handleEdit:function(e,t){this.formVisible=!0,this.addOrEdit=1,this.formData=r()({},t),this.id=t.id},handleDelete:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{cancelButtonClass:"btn-custom-cancel",type:"warning"}).then(function(){var e=a.brandInfs;for(var n in e)if(e[n].id==t.id){e.splice(n,1);break}a.filterBrand(),a.$message({message:"删除成功",type:"success"})}).catch(function(){})},addSubmit:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{cancelButtonClass:"btn-custom-cancel"}).then(function(){e.formData.id=e.getGuid();var t=r()({},e.formData);e.brandInfs.push(t),e.filterBrand(),e.$message({message:"添加成功",type:"success"}),e.$refs.formData.resetFields(),e.formVisible=!1}).catch(function(){})})},editSubmit:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{cancelButtonClass:"btn-custom-cancel"}).then(function(){var t=e.brandInfs,a=r()({},e.formData);for(var n in t)if(t[n].id==e.id){t.splice(n,1,a);break}e.filterBrand(),e.$message({message:"修改成功",type:"success"}),e.$refs.formData.resetFields(),e.id="",e.formVisible=!1}).catch(function(){})})},closeDialog:function(){this.id="",this.$refs.formData.resetFields()},handleClose:function(){this.id="",this.formVisible=!1,this.$refs.formData.resetFields()},getGuid:function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},formatName:function(e){return e.name.trim()},formatCountry:function(e){var t=void 0;switch(e.country){case"China":t="中国";break;case"Germany":t="德国";break;case"America":t="美国";break;case"France":t="法国";break;case"Italy":t="意大利";break;case"Japan":t="日本";break;case"Korea":t="韩国";break;default:t="未知"}return t},formatCompany:function(e){return 0==e.company.length?"未知":0==e.company.trim().length?"未知":e.company.trim()},formatFounder:function(e){return 0==e.founder.length?"未知":0==e.founder.trim().length?"未知":e.founder.trim()},formatTime:function(e){return 0==e.time.length?"未知":0==e.time.trim().length?"未知":e.time.trim()}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{ref:"searchConditions",attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{class:1==e.getShow?"normal-input":2==e.getShow?"middle-input":"small-input",attrs:{placeholder:3==e.getShow?"名称":"品牌名称"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-select",{class:1==e.getShow?"normal-select":2==e.getShow?"middle-select":"small-select",attrs:{placeholder:"国家"},model:{value:e.filters.country,callback:function(t){e.$set(e.filters,"country",t)},expression:"filters.country"}},[a("el-option",{attrs:{value:""}},[e._v("请选择")]),e._v(" "),e._l(e.countries,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.getShow,expression:"getShow == 1"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchBrand}},[e._v("查询")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=e.getShow,expression:"getShow != 1"}],attrs:{type:"primary",icon:"el-icon-search",title:"查询",circle:""},on:{click:e.searchBrand}})],1),e._v(" "),a("el-form-item",{staticClass:"add-button"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.getShow,expression:"getShow == 1"}],attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=e.getShow,expression:"getShow != 1"}],attrs:{type:"success",icon:"el-icon-plus",title:"新增",circle:""},on:{click:e.handleAdd}})],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{border:"1px solid #dfe6ec"},attrs:{data:e.showTable,"header-cell-style":{background:"#eef1f6",color:"#606266"},"highlight-current-row":"",height:"400"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"品牌名称",width:"140",align:"center",formatter:e.formatName}}),e._v(" "),a("el-table-column",{attrs:{prop:"country",label:"国家",width:"140",align:"center",formatter:e.formatCountry}}),e._v(" "),a("el-table-column",{attrs:{prop:"company",label:"所属公司",width:"200",align:"center",formatter:e.formatCompany}}),e._v(" "),a("el-table-column",{attrs:{prop:"founder",label:"创始人",width:"200",align:"center",formatter:e.formatFounder}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"创立时间",width:"200",align:"center",formatter:e.formatTime}}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"200",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{layout:"total, prev, pager, next","page-size":e.pagesize,total:this.filterBrandInfs.length},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:0==e.addOrEdit?"新增":"编辑",visible:e.formVisible,"close-on-click-modal":!1,"custom-class":"brand-dialog-min-width",width:"32%"},on:{"update:visible":function(t){e.formVisible=t},close:e.closeDialog}},[a("el-form",{ref:"formData",attrs:{model:e.formData,"label-width":"80px",rules:e.formRules}},[a("el-form-item",{staticClass:"row-padding-bottom",attrs:{label:"品牌名称",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{staticClass:"row-padding-bottom",attrs:{label:"国家"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.formData.country,callback:function(t){e.$set(e.formData,"country",t)},expression:"formData.country"}},e._l(e.countries,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"row-padding-bottom",attrs:{label:"所属公司"}},[a("el-input",{model:{value:e.formData.company,callback:function(t){e.$set(e.formData,"company",t)},expression:"formData.company"}})],1),e._v(" "),a("el-form-item",{staticClass:"row-padding-bottom",attrs:{label:"创始人"}},[a("el-input",{model:{value:e.formData.founder,callback:function(t){e.$set(e.formData,"founder",t)},expression:"formData.founder"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创立时间"}},[a("el-date-picker",{attrs:{format:"yyyy年M月","value-format":"yyyy年M月","default-value":new Date(1935,0),type:"month"},model:{value:e.formData.time,callback:function(t){e.$set(e.formData,"time",t)},expression:"formData.time"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==e.addOrEdit,expression:"addOrEdit == 0"}],attrs:{type:"primary"},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.addOrEdit,expression:"addOrEdit == 1"}],attrs:{type:"primary"},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")]),e._v(" "),a("el-button",{nativeOn:{click:function(t){return e.handleClose(t)}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(s,c,!1,function(e){a("C6Yp")},null,null);t.default=m.exports}});
//# sourceMappingURL=6.e8d0497edb54ef68bb97.js.map