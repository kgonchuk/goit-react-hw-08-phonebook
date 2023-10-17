"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[678],{7678:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}});var a=n(2791),r=n(1328),o={contactContainer:"ContactList_contactContainer__L+mXg",contactItem:"ContactList_contactItem__ppNQ5",deletetBtn:"ContactList_deletetBtn__0-II0",contactsTitle:"ContactList_contactsTitle__gHlpa"},c=n(9434),s=n(208),l=n(8857),i="sortedBtn_sortBtn__T7+Yd",d=n(184),u=function(){var t=(0,c.I0)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{className:i,onClick:function(){return t((0,l.m2)())},children:"Sorted by name"}),(0,d.jsx)("button",{className:i,onClick:function(){return t((0,l.L)())},children:"Sorted by date"})]})},m=n(6916),h=function(t){return t.contacts.items},p=function(t){return t.contacts.error},f=function(t){return t.contacts.isLoader},b=function(t){return t.contacts.sortedAlphabetic},_=function(t){return t.contacts.recentlyAdded},x=(0,m.P1)([h,function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),j=n(9439),v=n(4324),C=n(890),N=n(8237),y=n(5984),F={modalForm:"UpdateForm_modalForm__o8x6r",label:"UpdateForm_label__VBNc7",modalInput:"UpdateForm_modalInput__AUWFj",modalSubmitBtn:"UpdateForm_modalSubmitBtn__5H1-x",modalCloseBtn:"UpdateForm_modalCloseBtn__L3t-g"},g=function(t){var e=t.onClose,n=t.contactId,r=(0,c.I0)(),o=(0,c.v9)(h).find((function(t){return t.id===n})),l=(0,a.useState)(o.name),i=(0,j.Z)(l,2),u=i[0],m=i[1],p=(0,a.useState)(o.number),f=(0,j.Z)(p,2),b=f[0],_=f[1],x=function(){return e()},v=(0,y.x0)(5),C=(0,y.x0)(5);return(0,d.jsx)("div",{className:F.overley,children:(0,d.jsx)("div",{className:F.modal,children:(0,d.jsxs)("form",{className:F.modalForm,onSubmit:function(t){t.preventDefault();var e={name:u,number:b};r((0,s.Tk)({contact:e,contactId:n})),x()},children:[(0,d.jsx)("button",{className:F.modalCloseBtn,type:"button",onClick:x,children:"X"}),(0,d.jsxs)("label",{htmlFor:v,className:F.label,children:["  ",(0,d.jsx)("input",{className:F.modalInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",value:u,id:v,onChange:function(t){m(t.currentTarget.value)}})]}),(0,d.jsxs)("label",{htmlFor:C,children:["  ",(0,d.jsx)("input",{className:F.modalInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Number",value:b,id:C,onChange:function(t){_(t.currentTarget.value)}})]}),(0,d.jsx)("button",{className:F.modalSubmitBtn,type:"submit",onClick:x,children:"Edit"})]})})})},I=n(4554),L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"5px",boxShadow:"1px 7px 14px 0px rgba(0, 0, 0, 0.6)",p:4,color:"66a5ad"};function k(t){var e=t.contactId,n=a.useState(!1),r=(0,j.Z)(n,2),o=r[0],c=r[1],s=function(){return c(!1)};return(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{onClick:function(){return c(!0)},type:"button",children:(0,d.jsx)(v.UsQ,{})}),(0,d.jsx)(N.Z,{open:o,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,d.jsxs)(I.Z,{sx:L,children:[(0,d.jsx)(C.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Update contact"}),(0,d.jsx)(g,{onClose:s,contactId:e})]})})]})}var A=n(6195),Z=n(7247),T=function(){var t=(0,c.I0)(),e={contacts:(0,c.v9)(h),error:(0,c.v9)(p),isLoader:(0,c.v9)(f),sortedAlphabetic:(0,c.v9)(b),recentlyAdded:(0,c.v9)(_),visibleContacts:(0,c.v9)(x)}.visibleContacts;return(0,d.jsxs)("div",{className:o.contactContainer,children:[" ",(0,d.jsx)("h2",{className:o.contactsTitle,children:"Contacts"}),(0,d.jsx)(u,{}),(0,d.jsxs)("ul",{className:o.contactList,children:[e.map((function(e){var n=e.id,a=e.name,c=e.number;return(0,d.jsxs)("li",{className:o.contactItem,children:[a,": ",c,(0,d.jsx)(k,{contactId:n}),(0,d.jsx)("div",{children:(0,d.jsx)(A.Z,{"aria-label":"delete",children:(0,d.jsx)(Z.Z,{onClick:function(){return function(e){r.Confirm.show("Notiflix Confirm","Do you delete this contact?","Yes","No",(function(){t((0,s.GK)(e))}))}(n)}})})})]},n)})),0===e.length&&(0,d.jsx)("p",{children:"The Phonebook is empty. Add your first contact. \ud83e\udee4 "})]})]})},B=n(1686),S="Form_form__e1yzW",w="Form_formLabel__alHO0",z="Form_formInput__sgOCo",U="Form_formTittle__1hGkz",Y="Form_addContactBtn__ADaR4",q=function(){var t=(0,c.v9)(h),e=(0,c.I0)(),n=(0,a.useState)(""),r=(0,j.Z)(n,2),o=r[0],l=r[1],i=(0,a.useState)(""),u=(0,j.Z)(i,2),m=u[0],p=u[1],f=(0,y.x0)(),b=(0,y.x0)(),_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":l(a);break;case"number":p(a);break;default:return}};return(0,d.jsxs)("form",{className:S,onSubmit:function(n){n.preventDefault(),t.some((function(t){return t.name===o}))?B.Notify.failure("".concat(o," is already in your contacts")):(e((0,s.uK)({name:o,number:m,id:(0,y.x0)()})),l(""),p(""))},children:[(0,d.jsx)("h2",{className:U,children:"Your Phonebook"}),(0,d.jsx)("label",{className:w,htmlFor:f,children:(0,d.jsx)("input",{className:z,type:"text",name:"name",placeholder:"Name",value:o,onChange:_,id:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,d.jsx)("label",{className:w,htmlFor:b,children:(0,d.jsx)("input",{className:z,type:"tel",name:"number",placeholder:"+380",value:m,onChange:_,id:b,pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,d.jsx)("button",{className:Y,type:"submit",children:"Add contact"})]})},P={formLabel:"Filter_formLabel__Ozoh5",contactLabel:"Filter_contactLabel__TqLYf",filterTittle:"Filter_filterTittle__f0yzZ",contactInput:"Filter_contactInput__YRet6"},D=function(t){return t.filter},E=n(1634),H=function(){var t=(0,c.I0)(),e=(0,c.v9)(D);return(0,d.jsx)("form",{className:P.form,children:(0,d.jsxs)("label",{className:P.formLabel,children:[(0,d.jsx)("h2",{className:P.filterTittle,children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",value:e,name:e,placeholder:"Enter phone number to find",onChange:function(e){t((0,E.T)(e.target.value))},className:P.contactInput})]})})},O="Contacts_section__lhdxY";function R(){var t=(0,c.I0)(),e=(0,c.v9)(f),n=(0,c.v9)(p);return(0,a.useEffect)((function(){t((0,s.yF)())}),[t]),(0,d.jsxs)("div",{className:O,children:[(0,d.jsx)(q,{}),(0,d.jsx)("title",{children:"Contacts"}),e&&!n&&(0,d.jsx)("b",{children:"Loading..."}),(0,d.jsx)(T,{}),(0,d.jsx)(H,{})]})}}}]);
//# sourceMappingURL=678.edd1ebcd.chunk.js.map