(this["webpackJsonpviet-type-assist"]=this["webpackJsonpviet-type-assist"]||[]).push([[0],{10:function(e,s,t){e.exports=t(17)},15:function(e,s,t){},16:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var n=t(0),i=t.n(n),a=t(8),o=t.n(a),r=(t(15),t(16),t(9)),l=t(1),c=t(2),b=t(4),g=t(3),h=t(6),u=t(5),p=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){var e=this.props.isUIVietnamese,s=e?"G\xf5 ch\u1eef \u1edf \u0111\xe2y":"Type here",t=e?"Sao ch\xe9p v\xe0o clipboard":"Copy to clipboard",n=e?"X\xf3a h\xea\u0341t!":"Clear all!",a=e?"Sao ch\xe9p r\u1ed3i":"Successfully Copied!";return i.a.createElement("div",null,i.a.createElement("textarea",{type:"text",onChange:this.props.handleTextChange,value:this.props.text,ref:this.props.textAreaRef,rows:"1",placeholder:s,className:"border mb-4 p-2"}),i.a.createElement("button",{onClick:this.props.handleCopy,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded"},t),i.a.createElement("button",{onClick:this.props.handleClear,className:"float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border-dotted border-2 border-red-200 rounded"},n),this.props.copySuccess?i.a.createElement("p",null,a):i.a.createElement("p",{className:"mb-6"}))}}]),s}(n.Component),d=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){return i.a.createElement("button",{index:this.props.characterIndex,onClick:this.props.handleCharacterSwitchClick,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded m-1"},this.props.character)}}]),s}(n.Component),m=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){var e=this,s=this.props.siblingsTonesData.tones.map((function(s,t){return i.a.createElement(d,{character:s,characterIndex:e.props.index,key:t,handleCharacterSwitchClick:e.props.handleCharacterSwitchClick})})),t=this.props.siblingsTonesData.siblings.map((function(s,t){return i.a.createElement(d,{character:s,characterIndex:e.props.index,key:t,handleCharacterSwitchClick:e.props.handleCharacterSwitchClick})}));return i.a.createElement("span",{className:"tooltiptext text-gray-800 bg-white absolute z-10 invisible text-center border border-gray-400 rounded text-base w-48 -ml-24 p-3"},0===s.length?null:s,0===s.length||0===t.length?null:i.a.createElement("br",null),0===t.length?null:t)}}]),s}(n.Component),y=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){return this.props.hasSiblingsOrTones?i.a.createElement("span",{className:"tooltip relative"},this.props.value,i.a.createElement(m,{handleCharacterSwitchClick:this.props.handleCharacterSwitchClick,index:this.props.index,siblingsTonesData:this.props.siblingsTonesData})):i.a.createElement("span",null,this.props.value)}}]),s}(n.Component),f=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){var e=this,s=this.props.vietCharacterData,t=this.props.isUIVietnamese,n=i.a.createElement("p",{className:"text-gray-400"},t?"Ch\u1eef c\xf3 th\u1ec3 b\u1ea5m \u0111\u01b0\u1ee3c hi\u1ec7n \u1edf \u0111\xe2y":"Selectable text will appear here"),a=this.props.textArray.map((function(t,n){var a=!1,o=void 0;return s.hasOwnProperty(t)&&(a=!0,o=s[t]),i.a.createElement(y,{key:n,index:n,value:t,handleCharacterSwitchClick:e.props.handleCharacterSwitchClick,hasSiblingsOrTones:a,siblingsTonesData:o})}));return i.a.createElement("div",{className:"text-3xl break-normal mb-32 border border-gray-300 p-2"},0===a.length?n:a)}}]),s}(n.Component),v={a:{siblings:["a","\u0103","\xe2"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\xe1":{siblings:["\xe1","\u1eaf","\u1ea5"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\xe0":{siblings:["\xe0","\u1eb1","\u1ea7"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\xe3":{siblings:["\xe3","\u1eb5","\u1eab"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\u1ea3":{siblings:["\u1ea3","\u1eb3","\u1ea9"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\u1ea1":{siblings:["\u1ea1","\u1eb7","\u1ead"],tones:["a","\xe1","\xe0","\xe3","\u1ea3","\u1ea1"]},"\u0103":{siblings:["a","\u0103","\xe2"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\u1eaf":{siblings:["\xe1","\u1eaf","\u1ea5"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\u1eb1":{siblings:["\xe0","\u1eb1","\u1ea7"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\u1eb5":{siblings:["\xe3","\u1eb5","\u1eab"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\u1eb3":{siblings:["\u1ea3","\u1eb3","\u1ea9"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\u1eb7":{siblings:["\u1ea1","\u1eb7","\u1ead"],tones:["\u0103","\u1eaf","\u1eb1","\u1eb5","\u1eb3","\u1eb7"]},"\xe2":{siblings:["a","\u0103","\xe2"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},"\u1ea5":{siblings:["\xe1","\u1eaf","\u1ea5"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},"\u1ea7":{siblings:["\xe0","\u1eb1","\u1ea7"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},"\u1eab":{siblings:["\xe3","\u1eb5","\u1eab"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},"\u1ea9":{siblings:["\u1ea3","\u1eb3","\u1ea9"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},"\u1ead":{siblings:["\u1ea1","\u1eb7","\u1ead"],tones:["\xe2","\u1ea5","\u1ea7","\u1eab","\u1ea9","\u1ead"]},e:{siblings:["e","\xea"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\xe9":{siblings:["\xe9","\u1ebf"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\xe8":{siblings:["\xe8","\u1ec1"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\u1ebd":{siblings:["\u1ebd","\u1ec5"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\u1ebb":{siblings:["\u1ebb","\u1ec3"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\u1eb9":{siblings:["\u1eb9","\u1ec7"],tones:["e","\xe9","\xe8","\u1ebd","\u1ebb","\u1eb9"]},"\xea":{siblings:["e","\xea"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},"\u1ebf":{siblings:["\xe9","\u1ebf"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},"\u1ec1":{siblings:["\xe8","\u1ec1"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},"\u1ec5":{siblings:["\u1ebd","\u1ec5"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},"\u1ec3":{siblings:["\u1ebb","\u1ec3"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},"\u1ec7":{siblings:["\u1eb9","\u1ec7"],tones:["\xea","\u1ebf","\u1ec1","\u1ec5","\u1ec3","\u1ec7"]},i:{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},"\xed":{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},"\xec":{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},"\u0129":{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},"\u1ec9":{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},"\u1ecb":{siblings:[],tones:["i","\xed","\xec","\u0129","\u1ec9","\u1ecb"]},o:{siblings:["o","\xf4","\u01a1"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\xf3":{siblings:["\xf3","\u1ed1","\u1edb"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\xf2":{siblings:["\xf2","\u1ed3","\u1edd"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\xf5":{siblings:["\xf5","\u1ed7","\u1ee1"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\u1ecf":{siblings:["\u1ecf","\u1ed5","\u1edf"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\u1ecd":{siblings:["\u1ecd","\u1ed9","\u1ee3"],tones:["o","\xf3","\xf2","\xf5","\u1ecf","\u1ecd"]},"\xf4":{siblings:["o","\xf4","\u01a1"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u1ed1":{siblings:["\xf3","\u1ed1","\u1edb"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u1ed3":{siblings:["\xf2","\u1ed3","\u1edd"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u1ed7":{siblings:["\xf5","\u1ed7","\u1ee1"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u1ed5":{siblings:["\u1ecf","\u1ed5","\u1edf"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u1ed9":{siblings:["\u1ecd","\u1ed9","\u1ee3"],tones:["\xf4","\u1ed1","\u1ed3","\u1ed7","\u1ed5","\u1ed9"]},"\u01a1":{siblings:["o","\xf4","\u01a1"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},"\u1edb":{siblings:["\xf3","\u1ed1","\u1edb"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},"\u1edd":{siblings:["\xf2","\u1ed3","\u1edd"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},"\u1ee1":{siblings:["\xf5","\u1ed7","\u1ee1"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},"\u1edf":{siblings:["\u1ecf","\u1ed5","\u1edf"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},"\u1ee3":{siblings:["\u1ecd","\u1ed9","\u1ee3"],tones:["\u01a1","\u1edb","\u1edd","\u1ee1","\u1edf","\u1ee3"]},u:{siblings:["u","\u01b0"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\xfa":{siblings:["\xfa","\u1ee9"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\xf9":{siblings:["\xf9","\u1eeb"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\u0169":{siblings:["\u0169","\u1eef"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\u1ee7":{siblings:["\u1ee7","\u1eed"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\u1ee5":{siblings:["\u1ee5","\u1ef1"],tones:["u","\xfa","\xf9","\u0169","\u1ee7","\u1ee5"]},"\u01b0":{siblings:["u","\u01b0"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},"\u1ee9":{siblings:["\xfa","\u1ee9"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},"\u1eeb":{siblings:["\xf9","\u1eeb"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},"\u1eef":{siblings:["\u0169","\u1eef"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},"\u1eed":{siblings:["\u1ee7","\u1eed"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},"\u1ef1":{siblings:["\u1ee5","\u1ef1"],tones:["\u01b0","\u1ee9","\u1eeb","\u1eef","\u1eed","\u1ef1"]},y:{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},"\xfd":{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},"\u1ef3":{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},"\u1ef9":{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},"\u1ef7":{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},"\u1ef5":{siblings:[],tones:["y","\xfd","\u1ef3","\u1ef9","\u1ef7","\u1ef5"]},A:{siblings:["A","\u0102","\xc2"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\xc1":{siblings:["\xc1","\u1eae","\u1ea4"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\xc0":{siblings:["\xc0","\u1eb0","\u1ea6"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\xc3":{siblings:["\xc3","\u1eb4","\u1eaa"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\u1ea2":{siblings:["\u1ea2","\u1eb2","\u1ea8"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\u1ea0":{siblings:["\u1ea0","\u1eb6","\u1eac"],tones:["A","\xc1","\xc0","\xc3","\u1ea2","\u1ea0"]},"\u0102":{siblings:["A","\u0102","\xc2"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\u1eae":{siblings:["\xc1","\u1eae","\u1ea4"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\u1eb0":{siblings:["\xc0","\u1eb0","\u1ea6"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\u1eb4":{siblings:["\xc3","\u1eb4","\u1eaa"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\u1eb2":{siblings:["\u1ea2","\u1eb2","\u1ea8"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\u1eb6":{siblings:["\u1ea0","\u1eb6","\u1eac"],tones:["\u0102","\u1eae","\u1eb0","\u1eb4","\u1eb2","\u1eb6"]},"\xc2":{siblings:["A","\u0102","\xc2"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},"\u1ea4":{siblings:["\xc1","\u1eae","\u1ea4"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},"\u1ea6":{siblings:["\xc0","\u1eb0","\u1ea6"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},"\u1eaa":{siblings:["\xc3","\u1eb4","\u1eaa"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},"\u1ea8":{siblings:["\u1ea2","\u1eb2","\u1ea8"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},"\u1eac":{siblings:["\u1ea0","\u1eb6","\u1eac"],tones:["\xc2","\u1ea4","\u1ea6","\u1eaa","\u1ea8","\u1eac"]},E:{siblings:["E","\xca"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\xc9":{siblings:["\xc9","\u1ebe"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\xc8":{siblings:["\xc8","\u1ec0"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\u1ebc":{siblings:["\u1ebc","\u1ec4"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\u1eba":{siblings:["\u1eba","\u1ec2"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\u1eb8":{siblings:["\u1eb8","\u1ec6"],tones:["E","\xc9","\xc8","\u1ebc","\u1eba","\u1eb8"]},"\xca":{siblings:["E","\xca"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},"\u1ebe":{siblings:["\xc9","\u1ebe"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},"\u1ec0":{siblings:["\xc8","\u1ec0"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},"\u1ec4":{siblings:["\u1ebc","\u1ec4"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},"\u1ec2":{siblings:["\u1eba","\u1ec2"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},"\u1ec6":{siblings:["\u1eb8","\u1ec6"],tones:["\xca","\u1ebe","\u1ec0","\u1ec4","\u1ec2","\u1ec6"]},I:{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},"\xcd":{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},"\xcc":{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},"\u0128":{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},"\u1ec8":{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},"\u1eca":{siblings:[],tones:["I","\xcd","\xcc","\u0128","\u1ec8","\u1eca"]},O:{siblings:["O","\xd4","\u01a0"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\xd3":{siblings:["\xd3","\u1ed0","\u1eda"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\xd2":{siblings:["\xd2","\u1ed2","\u1edc"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\xd5":{siblings:["\xd5","\u1ed6","\u1ee0"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\u1ece":{siblings:["\u1ece","\u1ed4","\u1ede"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\u1ecc":{siblings:["\u1ecc","\u1ed8","\u1ee2"],tones:["O","\xd3","\xd2","\xd5","\u1ece","\u1ecc"]},"\xd4":{siblings:["O","\xd4","\u01a0"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u1ed0":{siblings:["\xd3","\u1ed0","\u1eda"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u1ed2":{siblings:["\xd2","\u1ed2","\u1edc"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u1ed6":{siblings:["\xd5","\u1ed6","\u1ee0"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u1ed4":{siblings:["\u1ece","\u1ed4","\u1ede"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u1ed8":{siblings:["\u1ecc","\u1ed8","\u1ee2"],tones:["\xd4","\u1ed0","\u1ed2","\u1ed6","\u1ed4","\u1ed8"]},"\u01a0":{siblings:["O","\xd4","\u01a0"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},"\u1eda":{siblings:["\xd3","\u1ed0","\u1eda"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},"\u1edc":{siblings:["\xd2","\u1ed2","\u1edc"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},"\u1ee0":{siblings:["\xd5","\u1ed6","\u1ee0"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},"\u1ede":{siblings:["\u1ece","\u1ed4","\u1ede"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},"\u1ee2":{siblings:["\u1ecc","\u1ed8","\u1ee2"],tones:["\u01a0","\u1eda","\u1edc","\u1ee0","\u1ede","\u1ee2"]},U:{siblings:["U","\u01af"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\xda":{siblings:["\xda","\u1ee8"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\xd9":{siblings:["\xd9","\u1eea"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\u0168":{siblings:["\u0168","\u1eee"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\u1ee6":{siblings:["\u1ee6","\u1eec"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\u1ee4":{siblings:["\u1ee4","\u1ef0"],tones:["U","\xda","\xd9","\u0168","\u1ee6","\u1ee4"]},"\u01af":{siblings:["U","\u01af"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},"\u1ee8":{siblings:["\xda","\u1ee8"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},"\u1eea":{siblings:["\xd9","\u1eea"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},"\u1eee":{siblings:["\u0168","\u1eee"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},"\u1eec":{siblings:["\u1ee6","\u1eec"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},"\u1ef0":{siblings:["\u1ee4","\u1ef0"],tones:["\u01af","\u1ee8","\u1eea","\u1eee","\u1eec","\u1ef0"]},Y:{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},"\xdd":{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},"\u1ef2":{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},"\u1ef8":{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},"\u1ef6":{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},"\u1ef4":{siblings:[],tones:["Y","\xdd","\u1ef2","\u1ef8","\u1ef6","\u1ef4"]},d:{siblings:["d","\u0111"],tones:[]},"\u0111":{siblings:["d","\u0111"],tones:[]},D:{siblings:["D","\u0110"],tones:[]},"\u0110":{siblings:["D","\u0110"],tones:[]}},C=function(e){function s(){return Object(l.a)(this,s),Object(b.a)(this,Object(g.a)(s).apply(this,arguments))}return Object(u.a)(s,e),Object(c.a)(s,[{key:"render",value:function(){var e=this.props.isUIVietnamese,s=e?"Switch to English":"D\u1ecbch sang ti\u1ebfng Vi\u1ec7t",t=e?"Gi\u1ee9p g\xf5 ch\u1eef d\u1ea5u ti\u1ebfng Vi\u1ec7t":"Vietnamese Text Type Assist",n=e?"H\u01b0\u1edbng d\u1eabn: G\xf5 v\xe0o h\u1ee3p \u1edf d\u01b0\u1edbi. B\u1ea5m ch\u1eef l\u1edbn cho tr\u1ecdn d\u1ea5u. Khi n\xe0o xong, sao ch\xe9p trong h\u1ee3p ho\u1eb7c b\u1ea5m n\xfat sao ch\xe9p v\xe0o clipboard.":"Instructions: Type into the box. Tap the larger letters to change their forms. When finished, copy from box or tap copy to clipboard.";return i.a.createElement("div",{className:"mb-6"},i.a.createElement("button",{onClick:this.props.handleLanguageToggle,className:"mx-auto mb-2 block bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1 px-4 border border-gray-300 rounded text-xs"},s),i.a.createElement("h1",{className:"text-center font-bold text-xl"},t),i.a.createElement("p",null,n))}}]),s}(n.Component),x=function(e){function s(e){var t;return Object(l.a)(this,s),(t=Object(b.a)(this,Object(g.a)(s).call(this,e))).state={rawText:"",characterArray:[],copySuccess:!1,vietnameseUILanguage:!1},t.textAreaRef=i.a.createRef(),t.handleTextChange=t.handleTextChange.bind(Object(h.a)(t)),t.handleClear=t.handleClear.bind(Object(h.a)(t)),t.handleCopy=t.handleCopy.bind(Object(h.a)(t)),t.handleCharacterSwitchClick=t.handleCharacterSwitchClick.bind(Object(h.a)(t)),t.switchCharacter=t.switchCharacter.bind(Object(h.a)(t)),t.handleLanguageToggle=t.handleLanguageToggle.bind(Object(h.a)(t)),t}return Object(u.a)(s,e),Object(c.a)(s,[{key:"handleTextChange",value:function(e){this.setState({rawText:e.target.value,characterArray:Object(r.a)(e.target.value),copySuccess:!1})}},{key:"handleClear",value:function(){this.setState({rawText:"",characterArray:[],copySuccess:!1})}},{key:"handleCopy",value:function(e){this.textAreaRef.current.select(),document.execCommand("copy"),e.target.focus(),this.setState({copySuccess:!0})}},{key:"handleCharacterSwitchClick",value:function(e){var s=e.target.getAttribute("index"),t=e.target.innerText;this.switchCharacter(s,t)}},{key:"switchCharacter",value:function(e,s){var t=this.state.characterArray;t[e]=s;var n=t.join("");this.setState({rawText:n,characterArray:t})}},{key:"handleLanguageToggle",value:function(){var e=!this.state.vietnameseUILanguage;this.setState({vietnameseUILanguage:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"mx-4 my-2 md:mx-20 md:my-4"},i.a.createElement(C,{handleLanguageToggle:this.handleLanguageToggle,isUIVietnamese:this.state.vietnameseUILanguage}),i.a.createElement(p,{handleTextChange:this.handleTextChange,text:this.state.rawText,handleClear:this.handleClear,handleCopy:this.handleCopy,textAreaRef:this.textAreaRef,copySuccess:this.state.copySuccess,isUIVietnamese:this.state.vietnameseUILanguage}),i.a.createElement(f,{textArray:this.state.characterArray,handleCharacterSwitchClick:this.handleCharacterSwitchClick,vietCharacterData:v,isUIVietnamese:this.state.vietnameseUILanguage}))}}]),s}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,s){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),s&&s.onUpdate&&s.onUpdate(e)):(console.log("Content is cached for offline use."),s&&s.onSuccess&&s.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(x,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/viet-type-assist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var s="".concat("/viet-type-assist","/service-worker.js");w?(!function(e,s){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,s)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(s,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(s,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.bcebe4c5.chunk.js.map