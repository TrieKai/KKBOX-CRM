(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(6687),a=n(29),i=n(7794),c=n.n(i),o=n(7294),l=n(7539),u=n(7357),s=n(2734),d=n(3946),h=n(4144),p=n(5861),f=n(9669),g=n.n(f),m=n(5643),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"date";return g().get("".concat(m.Ay,"?part=snippet&channelId=").concat(e,"&order=").concat(r,"&maxResults=").concat(t,"&pageToken=").concat(n,"&key=").concat("AIzaSyCpbqiMg_eDT04AF4h1KbMIl71JuR8vcss"))},x=n(507),b=function(e){var t=e.reduce((function(e,t){return e+"id=".concat(t,"&")}),"");return g().get("".concat(m.v9,"?part=contentDetails&part=statistics&").concat(t,"key=").concat("AIzaSyCpbqiMg_eDT04AF4h1KbMIl71JuR8vcss"))},w=function(e){var t=0,n=e.match(/(\d+)H/),r=e.match(/(\d+)M/),a=e.match(/(\d+)S/);return n&&(t+=3600*parseInt(n[1])),r&&(t+=60*parseInt(r[1])),a&&(t+=parseInt(a[1])),1e3*t},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return String(e).padStart(t,n)},k=function(e){var t=Math.floor(e/1e3/60/60)%24,n=Math.floor(e/1e3/60)%60,r=Math.floor(e/1e3)%60;return"".concat(C(t>=0?t:0,2),":").concat(C(n>=0?n:0,2),":").concat(C(r>=0?r:0,2))},j=n(9879),I=n(7289),_=n(5893),y=[{field:"thumbnail",headerName:"\u622a\u5716",sortable:!1,width:150,headerAlign:"center",align:"center",renderCell:function(e){return(0,_.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(e.value.videoId),target:"_blank",children:(0,_.jsx)("img",{src:e.value.url,alt:"thumbnail"})})}},{field:"title",headerName:"\u6a19\u984c",sortable:!1,minWidth:300,headerAlign:"center",align:"center",renderCell:function(e){return(0,_.jsx)(u.Z,{title:e.value,sx:{overflow:"hidden",textOverflow:"ellipsis"},children:e.value})}},{field:"duration",headerName:"\u6642\u9593\u9577\u5ea6",type:"string",headerAlign:"center",align:"center"},{field:"publishedAt",headerName:"\u767c\u5e03\u65e5\u671f",headerAlign:"center",align:"center"},{field:"viewCount",headerName:"\u89c0\u770b\u6b21\u6578",type:"number",headerAlign:"center",align:"center"},{field:"likeCount",headerName:"\u88ab\u559c\u6b61\u7684\u6b21\u6578",type:"number",headerAlign:"center",align:"center"},{field:"commentCount",headerName:"\u7559\u8a00\u6b21\u6578",type:"number",headerAlign:"center",align:"center"}],A=function(){var e,t=(0,s.Z)(),n=(0,o.useContext)(x.k),i=(0,o.useState)([]),f=i[0],g=i[1],C=(0,o.useState)(0),A=C[0],N=C[1],Z=(0,o.useState)(!1),S=Z[0],M=Z[1],P=(0,o.useState)(0),E=P[0],R=P[1],T=(0,o.useState)(!1),O=T[0],D=T[1],K=(0,o.useRef)(""),z=(0,o.useRef)(0),F=(0,o.useCallback)(function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,i,o,l,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,v(m.PC,10,t);case 4:return n=e.sent,a=n.data,N(a.pageInfo.totalResults),i=a.items.map((function(e){return e.id.videoId})),e.next=10,b(i);case 10:o=e.sent,l=o.data,u=a.items.map((function(e){var t=l.items.find((function(t){return t.id===e.id.videoId}));return{id:e.id.videoId,thumbnail:{url:e.snippet.thumbnails.default.url,videoId:e.id.videoId},title:e.snippet.title,duration:k(w(t.contentDetails.duration)),publishedAt:e.snippet.publishedAt,viewCount:Number(t.statistics.viewCount),likeCount:Number(t.statistics.likeCount),commentCount:Number(t.statistics.commentCount)}})),g((function(e){return[].concat((0,r.Z)(e),[u])})),K.current=a.nextPageToken,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),D(!0);case 20:M(!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),X=(0,o.useCallback)((function(e){R(e),e>z.current&&(F(K.current),z.current++)}),[F]);return(0,o.useEffect)((function(){F()}),[F]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(u.Z,{sx:{width:"100%",height:"100%"},children:[(0,_.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",width:"100%",height:"".concat(64,"px")},children:[(0,_.jsx)(u.Z,{children:(0,_.jsx)("h3",{children:"KKBOX \u5f8c\u53f0\u7cfb\u7d71"})}),(0,_.jsx)(d.Z,{sx:{ml:1},onClick:n.toggleColorMode,color:"inherit",children:t.palette.mode===m.Py?(0,_.jsx)(I.Z,{}):(0,_.jsx)(j.Z,{})})]}),(0,_.jsx)(u.Z,{sx:{width:"100%",height:"calc(100% - ".concat(64,"px)")},children:(0,_.jsx)(l._,{rows:null!==(e=f[E])&&void 0!==e?e:[],rowCount:A,rowHeight:90,columns:y,pageSize:10,page:E,loading:S,rowsPerPageOptions:[10],pagination:!0,paginationMode:"server",onPageChange:X})})]}),(0,_.jsx)(h.Z,{open:O,onClose:function(){return D(!1)},"aria-labelledby":"modal-modal-title",children:(0,_.jsx)(u.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:(0,_.jsx)(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u767c\u751f\u4e0d\u53ef\u9810\u671f\u7684\u932f\u8aa4\uff01"})})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9676)}])}},function(e){e.O(0,[749,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);