(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(6687),a=n(29),i=n(7794),o=n.n(i),c=n(7294),l=n(7539),u=n(7357),s=n(2734),d=n(3946),h=n(4144),p=n(5861),f=n(9669),m=n.n(f),g=n(5643),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"date";return m().get("".concat(g.Ay,"?part=snippet&channelId=").concat(e,"&order=").concat(r,"&maxResults=").concat(t,"&pageToken=").concat(n,"&key=").concat("AIzaSyCpbqiMg_eDT04AF4h1KbMIl71JuR8vcss"))},x=n(507),b=function(e){var t=e.reduce((function(e,t){return e+"id=".concat(t,"&")}),"");return m().get("".concat(g.v9,"?part=contentDetails&part=statistics&").concat(t,"key=").concat("AIzaSyCpbqiMg_eDT04AF4h1KbMIl71JuR8vcss"))},w=function(e){var t=0,n=e.match(/(\d+)H/),r=e.match(/(\d+)M/),a=e.match(/(\d+)S/);return n&&(t+=3600*parseInt(n[1])),r&&(t+=60*parseInt(r[1])),a&&(t+=parseInt(a[1])),1e3*t},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return String(e).padStart(t,n)},k=function(e){var t=Math.floor(e/1e3/60/60)%24,n=Math.floor(e/1e3/60)%60,r=Math.floor(e/1e3)%60;return"".concat(C(t>=0?t:0,2),":").concat(C(n>=0?n:0,2),":").concat(C(r>=0?r:0,2))},j=n(9879),A=n(7289),I=n(5893),_=[{field:"thumbnail",headerName:"\u622a\u5716",sortable:!1,width:150,headerAlign:"center",align:"center",renderCell:function(e){return(0,I.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(e.value.videoId),target:"_blank",children:(0,I.jsx)("img",{src:e.value.url,alt:"thumbnail"})})}},{field:"title",headerName:"\u6a19\u984c",minWidth:200,sortable:!1,flex:1,headerAlign:"center",align:"center",renderCell:function(e){return(0,I.jsx)(u.Z,{title:e.value,sx:{overflow:"hidden",textOverflow:"ellipsis"},children:e.value})}},{field:"duration",headerName:"\u6642\u9593\u9577\u5ea6",type:"string",headerAlign:"center",align:"center"},{field:"publishedAt",headerName:"\u767c\u5e03\u65e5\u671f",minWidth:200,headerAlign:"center",align:"center"},{field:"viewCount",headerName:"\u89c0\u770b\u6b21\u6578",type:"number",headerAlign:"center",align:"center"},{field:"likeCount",headerName:"\u88ab\u559c\u6b61\u7684\u6b21\u6578",type:"number",headerAlign:"center",align:"center"},{field:"commentCount",headerName:"\u7559\u8a00\u6b21\u6578",type:"number",headerAlign:"center",align:"center"}],y=function(){var e,t=(0,s.Z)(),n=(0,c.useContext)(x.k),i=(0,c.useState)([]),f=i[0],m=i[1],C=(0,c.useState)(0),y=C[0],N=C[1],Z=(0,c.useState)(!1),S=Z[0],M=Z[1],P=(0,c.useState)(0),D=P[0],E=P[1],R=(0,c.useState)(!1),T=R[0],O=R[1],K=(0,c.useRef)(""),z=(0,c.useRef)(0),F=(0,c.useCallback)(function(){var e=(0,a.Z)(o().mark((function e(t){var n,a,i,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,v(g.PC,10,t);case 4:return n=e.sent,a=n.data,N(a.pageInfo.totalResults),i=a.items.map((function(e){return e.id.videoId})),e.next=10,b(i);case 10:c=e.sent,l=c.data,u=a.items.map((function(e){var t=l.items.find((function(t){return t.id===e.id.videoId}));return{id:e.id.videoId,thumbnail:{url:e.snippet.thumbnails.default.url,videoId:e.id.videoId},title:e.snippet.title,duration:k(w(t.contentDetails.duration)),publishedAt:e.snippet.publishedAt,viewCount:Number(t.statistics.viewCount),likeCount:Number(t.statistics.likeCount),commentCount:Number(t.statistics.commentCount)}})).sort((function(e,t){return Date.parse(t.publishedAt)-Date.parse(e.publishedAt)})),m((function(e){return[].concat((0,r.Z)(e),[u])})),K.current=a.nextPageToken,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),O(!0);case 20:M(!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),X=(0,c.useCallback)((function(e){E(e),e>z.current&&(F(K.current),z.current++)}),[F]);return(0,c.useEffect)((function(){F()}),[F]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(u.Z,{sx:{width:"100%",height:"100%"},children:[(0,I.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",width:"100%",height:"".concat(64,"px")},children:[(0,I.jsx)(u.Z,{children:(0,I.jsx)("h3",{children:"KKBOX \u5f8c\u53f0\u7cfb\u7d71"})}),(0,I.jsx)(d.Z,{sx:{ml:1},onClick:n.toggleColorMode,color:"inherit",children:t.palette.mode===g.Py?(0,I.jsx)(A.Z,{}):(0,I.jsx)(j.Z,{})})]}),(0,I.jsx)(u.Z,{sx:{width:"100%",height:"calc(100% - ".concat(64,"px)")},children:(0,I.jsx)(l._,{rows:null!==(e=f[D])&&void 0!==e?e:[],rowCount:y,rowHeight:90,columns:_,pageSize:10,page:D,loading:S,rowsPerPageOptions:[10],pagination:!0,paginationMode:"server",onPageChange:X})})]}),(0,I.jsx)(h.Z,{open:T,onClose:function(){return O(!1)},"aria-labelledby":"modal-modal-title",children:(0,I.jsx)(u.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:(0,I.jsx)(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u767c\u751f\u4e0d\u53ef\u9810\u671f\u7684\u932f\u8aa4\uff01"})})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9676)}])}},function(e){e.O(0,[749,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);