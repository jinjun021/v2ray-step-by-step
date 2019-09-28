(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{249:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"traffic-statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traffic-statistics","aria-hidden":"true"}},[t._v("#")]),t._v(" Traffic Statistics")]),t._v(" "),a("p",[t._v("V2ray includes a traffic stats service, but it's not enabled by default. Traffic are statisticed into two major class: "),a("code",[t._v("inbound")]),t._v(" and "),a("code",[t._v("user")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("inbound")]),t._v(" means each inbound service, they are identified by the "),a("code",[t._v("tag")]),t._v(" attribute.")]),t._v(" "),a("li",[a("code",[t._v("user")]),t._v(" is the "),a("code",[t._v("email")]),t._v(" attrbute in vmess client settings, stats usage for each client. Note: clients in socks/shadowsocks/http are not counted.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-of-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-stats","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration of Stats")]),t._v(" "),a("p",[t._v("To enable traffic statistic, following items must present in configuraton")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('"stats":{}')]),t._v(" must set")]),t._v(" "),a("li",[a("code",[t._v('"api"')]),t._v(" includes "),a("code",[t._v("StatsService")])]),t._v(" "),a("li",[a("code",[t._v('"policy"')]),t._v("  switches attributes starting with stats must set to true")]),t._v(" "),a("li",[t._v("clients settings must include email attribute")]),t._v(" "),a("li",[t._v("a "),a("code",[t._v("dokodemo-door")]),t._v(" protocol inbound, tag set to api for grpc connection, used for connection of the API")]),t._v(" "),a("li",[t._v("routing rules include an inboundTag:api -> outboundTag:api rule")])]),t._v(" "),a("p",[t._v("Note: "),a("code",[t._v("email")]),t._v("/"),a("code",[t._v("tag")]),t._v(" stats data are generated is from the v2ray process you querys, client/server side won't exchange their data.  The email in client side has nothing to do with the one on server-side, even they use the same uuid. If you query on client process, the data is only abount the client process.")]),t._v(" "),a("h2",{attrs:{id:"configuration-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stats"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StatsService"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"levels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3307")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ef"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10085")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"viewing-the-traffic-stats-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-traffic-stats-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Viewing the traffic stats data")]),t._v(" "),a("p",[t._v("one of the functions in "),a("code",[t._v("v2ctl")]),t._v(" program is to connect to API.  Run "),a("code",[t._v("v2ctl api -h")]),t._v(" will show help text and example about them. The configured port of api tagged dokodemo, used here as "),a("code",[t._v("--server")]),t._v(" argument.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("v2ctl api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10050 StatsService.QueryStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pattern: \"\" reset: false'")]),t._v("\nv2ctl api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10050 StatsService.GetStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name: \"inbound>>>statin>>>traffic>>>downlink\" reset: false'")]),t._v("\n")])])]),a("p",[t._v("Note: if you are running v2ctl.exe in windows cmd, the quotes need to be repeated to be passed as program arguments.")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('v2ctl.exe api --server="127.0.0.1:10085" StatsService.GetStats "name: """"inbound>>>statin>>>traffic>>>downlink"""" reset: false"\n')])])]),a("p",[t._v("There are 2 APIs about traffic stats.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("QueryStats")]),t._v(" is used to query matched record,  with argument "),a("code",[t._v("pattern")]),t._v("and"),a("code",[t._v("reset")]),t._v("; empty pattern matches all records, while reset set them to zero after the query.")]),t._v(" "),a("li",[a("code",[t._v("GetStats")]),t._v(" retrives a single record, accepting arguments: "),a("code",[t._v("name")]),t._v(" and "),a("code",[t._v("reset")]),t._v('.  Follow the "name" in the result of QueryStats to construct the record. And, reset set the record value to zero.')])]),t._v(" "),a("p",[t._v("Example of output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ /usr/bin/v2ray/v2ctl api --server=127.0.0.1:10085 StatsService.GetStats \'name:"inbound>>>ws>>>traffic>>>uplink"\'\nstat: <\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\n$\n$\n$ /usr/bin/v2ray/v2ctl api --server=127.0.0.1:10085 StatsService.QueryStats \'\'\nstat: <\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\nstat: <\n  name: "inbound>>>ss>>>traffic>>>downlink"\n  value: 1704\n>\nstat: <\n  name: "user>>>u3@ws>>>traffic>>>uplink"\n  value: 2810759\n>\nstat: <\n  name: "user>>>u9@ss>>>traffic>>>uplink"\n  value: 1776\n>\nstat: <\n  name: "inbound>>>ss>>>traffic>>>uplink"\n  value: 2276\n>\nstat: <\n  name: "inbound>>>api>>>traffic>>>uplink"\n  value: 318\n>\nstat: <\n  name: "user>>>u9@ss>>>traffic>>>downlink"\n  value: 1368\n>\nstat: <\n  name: "inbound>>>tcp>>>traffic>>>uplink"\n>\nstat: <\n  name: "inbound>>>tcp>>>traffic>>>downlink"\n>\nstat: <\n  name: "inbound>>>ws>>>traffic>>>downlink"\n  value: 130637140\n>\nstat: <\n  name: "inbound>>>api>>>traffic>>>downlink"\n  value: 759\n>\nstat: <\n  name: "user>>>u3@ws>>>traffic>>>downlink"\n  value: 126944108\n>\n')])])]),a("p",[t._v("As noted before, the "),a("code",[t._v("name")]),t._v(" here can be used as "),a("code",[t._v("GetStats")]),t._v(" parameter if one of the value is your concern. The unit of value is byte.")]),t._v(" "),a("h2",{attrs:{id:"processing-of-traffic-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processing-of-traffic-stats","aria-hidden":"true"}},[t._v("#")]),t._v(" Processing of Traffic Stats")]),t._v(" "),a("p",[t._v("Usage above is connecting v2ray with "),a("code",[t._v("grpc")]),t._v(" protocol, aside from v2ctl, any program supports grpc could also connect to v2ray to get those records, and process to other forms, (eg: storing in database, accounting to users, graphical reports) but the article won't cover those topics. We stick to the "),a("code",[t._v("v2ctl")]),t._v(" cmd program, and use basic shell script to process the data into a readable form.")]),t._v(" "),a("p",[t._v("Save the following bash script as "),a("code",[t._v("traffic.sh")]),t._v(", set exec permission by "),a("code",[t._v("chmod 755 traffic.sh")]),t._v(". Change the "),a("code",[t._v("_APISERVER")]),t._v(" line if you use different dokodemo-door port.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_APISERVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_V2CTL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/v2ray/v2ctl\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("v2_query_all")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset: true"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("$_V2CTL api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$_APISERVER StatsService.QueryStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ARGS}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api2column"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('------------Inbound----------"')]),t._v("\n    print_sum "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inbound"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('-------------User------------"')]),t._v("\n    print_sum "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("api2column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\n        if (match("),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(', /name:/)){ \n            f=1; gsub(/^"|"$/, "", '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("); split("),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(', p,  ">>>");\n            print p[1]":"p[2]"->"p[4];\n        }\n        else if (match('),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(", /value:/)){ f=0; print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}\n        else if (match("),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v(', /^>$/) && f == 1) print "0"\n        else {}\n    }\'')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$!")]),t._v("N;s/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("/ /; s/link//'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("print_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UDATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PREFIX}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UPSUM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UDATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/->up/{sum+="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(";}END{print sum;}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOWNSUM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UDATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/->down/{sum+="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(";}END{print sum;}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UDATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${UDATA}")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("TOTAL->up "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${UPSUM}")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("TOTAL->down "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOWNSUM}")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UDATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" numfmt --field"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --suffix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("B --to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("iec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("column")]),t._v(" -t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nv2_query_all "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n")])])]),a("p",[t._v("Example of output")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ./traffic.sh\n\n------------Inbound----------\ninbound:ws->up      2.7KB\ninbound:ws->down    3.1KB\ninbound:api->up     161B\ninbound:api->down   724B\nTOTAL->up           2.9KB\nTOTAL->down         3.8KB\n-----------------------------\n\n-------------User------------\nuser:u3@ws->up    2.4KB\nuser:u3@ws->down  2.7KB\nTOTAL->up         2.4KB\nTOTAL->down       2.7KB\n-----------------------------\n")])])]),a("p",[t._v("Setting "),a("code",[t._v("reset")]),t._v(" argument to script reset stats values to zero on each call. Use together with bash command watch, you can view traffic speed going through v2ray on real time:\n"),a("code",[t._v("watch ./traffic.sh reset")])])])}),[],!1,null,null,null);s.default=e.exports}}]);