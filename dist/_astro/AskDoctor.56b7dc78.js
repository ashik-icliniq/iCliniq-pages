import{r}from"./index.f824fa59.js";import{m as R,u as v,c as u,w as A,p as I,H as O,a as S,T as L,B as q,b as N,A as T,R as C}from"./Toast.ed394b0f.js";import{j as e,O as H}from"./jsx-runtime.61c09057.js";import"./index.1f5b1859.js";const x=({children:s,className:n,horizontal:l,href:d,imgAlt:p,imgSrc:f,theme:b={},...y})=>{const w=typeof d>"u"?"div":"a",a=y,i=R(v().theme.card,b);return e.jsxs(w,{"data-testid":"flowbite-card",href:d,className:u(i.root.base,i.root.horizontal[l?"on":"off"],d&&i.root.href,n),...a,children:[f&&e.jsx("img",{alt:p??"",src:f,className:u(i.img.base,i.img.horizontal[l?"on":"off"])}),e.jsx("div",{className:i.root.children,children:s})]})},Y=({children:s,indicators:n=!0,leftControl:l,rightControl:d,slide:p=!0,slideInterval:f,className:b,theme:y={},...w})=>{const a=R(v().theme.carousel,y),i=A()&&navigator.userAgent.indexOf("IEMobile")!==-1,c=r.useRef(null),[m,k]=r.useState(0),[g,D]=r.useState(!1),o=r.useMemo(()=>r.Children.map(s,t=>r.cloneElement(t,{className:u(a.item.base,t.props.className)})),[s,a.item.base]),j=r.useCallback(t=>()=>{o&&(t=(t+o.length)%o.length,c.current&&(c.current.scrollLeft=c.current.clientWidth*t),k(t))},[o]);r.useEffect(()=>{c.current&&!g&&c.current.scrollLeft!==0&&k(Math.round(c.current.scrollLeft/c.current.clientWidth))},[g]),r.useEffect(()=>{if(p){const t=setInterval(()=>!g&&j(m+1)(),f??3e3);return()=>clearInterval(t)}},[m,g,j,p,f]);const E=t=>()=>D(t);return e.jsxs("div",{className:u(a.root.base,b),"data-testid":"carousel",...w,children:[e.jsx(I,{className:u(a.scrollContainer.base,(i||!g)&&a.scrollContainer.snap),draggingClassName:"cursor-grab",innerRef:c,onEndScroll:E(!1),onStartScroll:E(!0),vertical:!1,children:o?.map((t,h)=>e.jsx("div",{className:a.item.wrapper,"data-active":m===h,"data-testid":"carousel-item",children:t},h))}),n&&e.jsx("div",{className:a.indicators.wrapper,children:o?.map((t,h)=>e.jsx("button",{className:u(a.indicators.base,a.indicators.active[h===m?"on":"off"]),onClick:j(h),"data-testid":"carousel-indicator"},h))}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.root.leftControl,children:e.jsx("button",{className:"group","data-testid":"carousel-left-control",onClick:j(m-1),type:"button",children:l||e.jsx(F,{})})}),e.jsx("div",{className:a.root.rightControl,children:e.jsx("button",{className:"group","data-testid":"carousel-right-control",onClick:j(m+1),type:"button",children:d||e.jsx(M,{})})})]})]})},F=()=>{const s=v().theme.carousel;return e.jsx("span",{className:s.control.base,children:e.jsx(O,{className:s.control.icon})})},M=()=>{const s=v().theme.carousel;return e.jsx("span",{className:s.control.base,children:e.jsx(S,{className:s.control.icon})})};function P(){return e.jsx("div",{className:"h-32 ",children:e.jsx(Y,{leftControl:e.jsx("i",{className:"fa fa-arrow-left"}),rightControl:e.jsx("i",{className:"fa fa-arrow-right"}),indicators:!1,children:H.Doctors.map(s=>e.jsx(x,{className:"px-10 ",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center justify-center flex-col",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:e.jsx(T,{img:s.img,rounded:!0})}),e.jsx(C,{className:"mt-2",children:(()=>{const n=[];for(let l=1;l<=5;l++)l<=s.rating?n.push(e.jsx(C.Star,{})):n.push(e.jsx(C.Star,{filled:!1}));return e.jsx(e.Fragment,{children:n})})()})]}),e.jsxs("div",{className:" pl-5 flex flex-col",children:[e.jsx("span",{className:"text-l	",children:s.drName}),e.jsx("span",{className:"text-slate-400	text-sm	",children:s.expertIn})]})]})}))})})}function W(){return r.useState([]),r.useEffect(()=>{},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto w-4/5",children:[e.jsxs("div",{className:"flex justify-center flex-col",children:[e.jsx("span",{className:"text-center text-2xl mt-10",children:"Your first Query is FREE !"}),e.jsxs("div",{className:"grid grid-cols-1 mt-8  lg:grid-cols-2",children:[e.jsxs(x,{className:"p-6",children:[e.jsx("h5",{className:"text-2xl my-5 font-bold tracking-tight text-gray-900 dark:text-white",children:"Ask a 'Liver Specialist' Online"}),e.jsx("p",{className:" my-5 font-semibold text-gray-700 dark:text-gray-400",children:"ENTER YOUR HEALTH QUERY"}),e.jsx(L,{id:"comment",placeholder:"Leave a comment...",required:!0,rows:4}),e.jsx(q,{className:"mt-3",children:"Submit"})]}),e.jsxs("div",{className:"flex justify-center flex-col mt-10 lg:mt-0",children:[e.jsx("img",{className:"w-100 object-contain h-64 w-100",src:"https://assets.icliniq.com/v2/assets/images/message.svg"}),e.jsxs("span",{className:"text-xl text-center",children:[e.jsx("span",{className:"font-semibold text-xl",children:"2233"})," Doctors Online"]}),e.jsx("div",{className:"mt-10 lg:m-14 mb-1",children:e.jsx(P,{})})]})]})]}),e.jsxs("div",{className:"flex justify-center flex-col",children:[e.jsx("span",{className:"text-center text-2xl mt-10 tracking-wide	",children:"iCliniq IS TOP RATED BY"}),e.jsxs("div",{className:"flex w-100 items-center justify-center mt-6",children:[e.jsx("img",{className:"h-12 w-100 mr-2",src:"https://assets.icliniq.com/v2/img/Parade.svg",alt:""}),e.jsx("img",{className:"h-6 w-100 ml-2",src:"https://assets.icliniq.com/v2/assets/images/insider-1-color.svg",alt:""})]}),e.jsx("div",{className:"flex justify-center mt-8",children:e.jsxs(x,{className:"w-full lg:w-8/12 p-3 lg:p-6",children:[e.jsx("p",{className:"mt-3 text-center",children:"Ask your Liver queries to our experienced medical gastroenterologists and receive instant medical advice and second opinion."}),e.jsx("p",{className:"mt-3 text-center",children:"Our medical panel consists of over 50+ highly skilled medical gastroenterologists who specialized in Liver treatment."}),e.jsx("hr",{className:"my-8"}),e.jsxs(N.Group,{"aria-label":"Pills",style:"pills",children:[e.jsx(N.Item,{active:!0,title:"User Review",children:e.jsxs(x,{children:[e.jsx("h5",{className:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Noteworthy technology acquisitions 2021"}),e.jsx("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."})]})}),e.jsx(N.Item,{title:"About",children:e.jsxs(x,{children:[e.jsx("h5",{className:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"About Hair loss"}),e.jsx("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Hair loss can be due to hormonal changes, heredity, or due to other underlying health conditions, and can affect the hair on the scalp or the entire body. Signs of hair loss are thinning of hair on the top of the head, bald spots, and excessive hair fall."})]})}),e.jsx(N.Item,{title:"How it works",children:e.jsx(x,{children:e.jsxs("ul",{className:"list-disc leading-10 m-5",children:[e.jsx("li",{children:"Your health issue will be shared across with our hair loss specialist panel."}),e.jsx("li",{children:"A hair loss specialist will pick your query and send medical advice to your health issue subsequently."}),e.jsx("li",{children:"You can then follow up with the same hair loss specialist."})]})})})]})]})})]})]})})}export{W as default};
