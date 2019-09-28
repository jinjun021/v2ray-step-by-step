(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{269:function(e,t,s){"use strict";s.r(t);var a=s(2),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vmess"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vmess","aria-hidden":"true"}},[e._v("#")]),e._v(" VMess")]),e._v(" "),s("p",[e._v("VMess protocol is originated from and utilised in V2ray, and it is similar with Shadowsocks which is designed for obfuscating internet traffic to cheat "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Deep_packet_inspection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deep packet inspection"),s("OutboundLink")],1),e._v(" of GFW. VMess is the primary protocol used to communicate between server and client.")]),e._v(" "),s("p",[e._v("In this section, we provided an example of VMess configuration, which is a set of the basic configuration files for the server and client. This type of configuration is the most straightforward configuration that V2Ray can help you pass through internet censorship.")]),e._v(" "),s("p",[e._v("The JSON configuration file of V2Ray uses inbound (incoming) and outbound (outgoing) structures. This structure reflects the traffic flow direction of the packet and making V2Ray powerfully and functionality without being confusing and clear. To put it bluntly, we can think of V2Ray as a box with entries and exits (i.e. inbound and outbound). We put the packet into the box through a gate, and then the box has some mechanisms (this mechanism is called routing, which will be discussed in detail in another chapter) to decide which outbound the packet will spit out from. In this way, if V2Ray is the client, inbound receives the data from the browser and is sent outbound (usually sent to the V2Ray server). V2Ray acts as the server and inbound receives the data from the V2Ray client, which is sent by outbound (usually a target site like Google that you want to visit).")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"preparation-before-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparation-before-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Preparation before configuration")]),e._v(" "),s("p",[e._v("In fact, you don't have to prepare anything as long as you have a text editor to modify the configuration. However, there are still some friendly reminder, since many beginners wrote the wrong syntax or format in their JSON configurations. That is common due to beginners are not familiar with these command line tools, and may use Windows Notepad as their primary JSON editor. We do not recommend Windows Notepad due to its poor support in encoding and line ending options.")]),e._v(" "),s("p",[e._v("Instead, VSCode is a useful tool for writing JSON, and it also supports reformatting, which is powerful for beginners. Moreover, there are plenty of other text editors, such as Sublime Text, Atom, Notepad++, etc. They are all versatile and easy to use, and you may Google them for details. These software have features like code highlighting, folding, reformatting, so again, they are highly recommended. If you don't want to install any software, there are also some online JSON editors you can find online, and the syntax will be checked automatically.")]),e._v(" "),s("p",[e._v("Here is a comparison of the notepad that came with Windows and Sublime Text viewing the same JSON file.\n"),s("img",{attrs:{src:"/resource/images/notepad_vs_ST.png",alt:""}})]),e._v(" "),s("p",[e._v("Another example is reformatting feature\n"),s("img",{attrs:{src:"/resource/images/formatdemo.gif",alt:""}})]),e._v(" "),s("p",[e._v("There is a command line tool called "),s("code",[e._v("jq")]),e._v(", by executing the following command, you can check the grammar of configuration file.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ jq . config.json\n")])])]),s("p",[e._v("Here "),s("code",[e._v("config.json")]),e._v(" is the "),s("code",[e._v("config.json")]),e._v(" file in the current directory. Pay special attention to the period in the command. You can't ignore it.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/resource/images/jqdemo.png",alt:""}}),e._v('\nWhen deleting the comma after "23ad6b10-8d1a-40f7-8ad0-e3e35cd38297", the result is:')]),e._v(" "),s("p",[s("img",{attrs:{src:"/resource/images/jqerror.png",alt:""}})]),e._v(" "),s("p",[e._v("Note that, a comment feature has been added since V2Ray v2.11. The configuration file allows "),s("code",[e._v("//")]),e._v(" and "),s("code",[e._v("/**/")]),e._v(" comments which is not supported by official JSON format. Therefore it is supposed to be reported as error in some error-checking tools. Don't panic.")]),e._v(" "),s("p",[e._v("However, it is recommended to use the configuration check feature provided by V2Ray ("),s("code",[e._v("-test")]),e._v(" option) because you can check for contents other than JSON syntax errors, such as typo "),s("code",[e._v("vmess")]),e._v(" as "),s("code",[e._v("vmes")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ /usr/bin/v2ray/v2ray -test -config /etc/v2ray/config.json\nfailed to parse json config: Ext|Tools|Conf|Serial: failed to parse json config > Ext|Tools|Conf: failed to load inbound detour config. > Ext|Tools|Conf: unknown config id: vmss\nMain: failed to read config file: /etc/v2ray/config.json > Main|Json: failed to execute v2ctl to convert config file. > exit status 255\n")])])]),s("p",[e._v("If the configuration file is ok, then returned message will be like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ /usr/bin/v2ray/v2ray -test -config /etc/v2ray/config.json\nV2Ray v3.15 (die Commanderin) 20180329\nAn unified platform for anti-censorship.\nConfiguration OK.\n")])])]),s("h2",{attrs:{id:"configuration-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Example")]),e._v(" "),s("p",[e._v("We give the example configuration files as below, including server-side and client-side. You need to replace your configuration to the below one, and replace the server IP address/domain to yours; then you can enjoy uncensored internet. Note that, "),s("em",[e._v("the configuration will not be applied until you restart the V2Ray")]),e._v(".")]),e._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),s("p",[e._v("The authorisation of the VMess protocol is based on time. It must be ensured that the system time between the server and the client is within 90 seconds.")])]),e._v(" "),s("h3",{attrs:{id:"client-side-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-side-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Client-side Configuration")]),e._v(" "),s("p",[e._v("The following is the client-side configuration, edit the client's config.json file to the following content, and restart V2Ray after the modification is complete to make the modified configuration applied.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Listening port")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"socks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Incoming protocol is SOCKS 5")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sniffing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"destOverride"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tls"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"auth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"noauth"')]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Authorisation setting of socks protocol. Here, noauth means no authorisation, beacuse in general socks only used in client side, so no need to authorise.")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vmess"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Outcoming protocol")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vnext"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"serveraddr.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Server address, yoou need to edit this to your own IP address/domian. ")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16823")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Server listenning port.")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// UUID, must be as same as server side")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// AlterID should be as same as server side")]),e._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("In the configuration, there is an id used for authorization (in this case is b831381d-6324-4d53-ad4f-8cda48b30811), which acts like Shadowsocks' password. VMess user id must be in the same format as UUID. There is no need to know a lot about id or UUID. It is enough to know the following points here:")]),e._v(" "),s("ul",[s("li",[e._v("The incoming UUID and the corresponded outgoing UUID of VMess protocol must be the same (if you don't understand this sentence well, you can simply understand that the server and client UUID must be the same).")]),e._v(" "),s("li",[e._v("Since the id uses the UUID format, we can use any UUID generation tool to generate the UUID as the id here. For example, "),s("a",{attrs:{href:"https://www.uuidgenerator.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UUID Generator"),s("OutboundLink")],1),e._v(". On this website, you can get a UUID as soon as you open or refresh this page, as shown below. Alternatively, it can be generated in Linux using the command "),s("code",[e._v("cat /proc/sys/kernel/random/uuid")]),e._v(".")])]),e._v(" "),s("p",[s("img",{attrs:{src:"/resource/images/generate_uuid.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"server-side-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Server-side Configuration")]),e._v(" "),s("p",[e._v("Below is the server configuration. Editing the config.json file in the "),s("code",[e._v("/etc/v2ray")]),e._v(" directory of the server to the following JSON. After the modification is complete, restart V2Ray to make the modified configuration applied.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16823")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Server listening port")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vmess"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Major incoming protocol")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"clients"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// UUID, must to be kept the same between server and client.")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"freedom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Majoy outcoming protocol.")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"what-happens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-happens","aria-hidden":"true"}},[e._v("#")]),e._v(" What happens?")]),e._v(" "),s("p",[e._v("Here is a simple introduction of how V2Ray working.")]),e._v(" "),s("p",[e._v("Whether the process of V2Ray behaves as a client or a server, the configuration file consists of two parts: "),s("code",[e._v("inbounds")]),e._v(" and "),s("code",[e._v("outbounds")]),e._v(". V2Ray does not use the C/S (client/server) architecture of regular proxy software, it can be used either as a server and or a client. In other words, that each V2Ray is a node, "),s("code",[e._v("inbound")]),e._v(" is a configuration on how to connect to the previous node, and "),s("code",[e._v("outbound")]),e._v(" is a configuration on how to connect to the next node. For the first node, "),s("code",[e._v("inbound")]),e._v(" is connected to the browser; for the last node, "),s("code",[e._v("outbound")]),e._v(" is connected to the target website. "),s("code",[e._v("inbounds")]),e._v(" and "),s("code",[e._v("outbounds")]),e._v(" are collections of "),s("code",[e._v("inbound")]),e._v(" and "),s("code",[e._v("outbound")]),e._v(", meaning that each V2Ray node can have multiple entries and exits. There are only one entry and exit in this example for ease of explanation and understanding.")]),e._v(" "),s("h3",{attrs:{id:"client-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-side","aria-hidden":"true"}},[e._v("#")]),e._v(" Client-side")]),e._v(" "),s("p",[e._v("Inbounds in the example client configuration, listening port is 1080, that is, V2Ray listens on a port 1080, and the protocol is socks. Assuming that we have set up the browser proxy (SOCKS Host: 127.0.0.1, Port: 1080), then if you visit google.com, the browser will send a packet to the socks protocol to send to the machine to the 1080 port of the local device (127.0.0.1 is your local device, or say localhost). At this time, the packet will be received by V2Ray.")]),e._v(" "),s("p",[e._v("Then let's looking at outbounds, the protocol is VMess, indicating that V2Ray will encrypt the packet by "),s("a",{attrs:{href:"https://www.v2ray.com/developer/protocols/vmess.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMess"),s("OutboundLink")],1),e._v(" protocol. The packet will be encrypted by the UUID (In this example, UUID is b831381d-6324-4d53-ad4f-8cda48b30811) and then sent the package to remote server address "),s("code",[e._v("serveraddr.com")]),e._v(" with port "),s("code",[e._v("16823")]),e._v(", where the server address and port are. The server address can be either a domain name or an IP address, as long as it is connectable.")]),e._v(" "),s("p",[e._v("In the inbounds configured by the client, there is a "),s("code",[e._v('"sniffing"')]),e._v(' field. The V2Ray manual is interpreted as "traffic detection, resetting the requested target according to the specified traffic type". It is not very easy to understand. Say this thing. It is to identify the domain name from the network traffic. This sniffing has two uses:')]),e._v(" "),s("ol",[s("li",[e._v("Avoid DNS poisoning;")]),e._v(" "),s("li",[e._v("For IP traffic, the routing rules (mentioned in later chapter) can be applied;")]),e._v(" "),s("li",[e._v("Identify the BT protocol and intercept or directly connect to BT traffic according to your needs (a section is specifically mentioned later).")])]),e._v(" "),s("p",[e._v("If you use the Tor browser, don't turn on sniffing (set the enable option in sniffing section to false), otherwise Tor will not be able to access the Internet.")]),e._v(" "),s("h3",{attrs:{id:"server-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side","aria-hidden":"true"}},[e._v("#")]),e._v(" Server-side")]),e._v(" "),s("p",[e._v("Then look at the server, the server configuration UUID is b831381d-6324-4d53-ad4f-8cda48b30811, so the V2Ray server will try to decrypt with this key. When receiving the packet sent by the client, if the decryption is successful then check with timestamps. If timestamps are correct between server and clien, the packet will be send to outbound; here the outbound protocol is freedom (means direct connection here), the data packet will be send directly to website such as google.com.")]),e._v(" "),s("p",[e._v("The flow of packets shown as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{browser} <--(socks)--\x3e {V2Ray client inbound  <->  V2Ray client outbound} <--(VMess)--\x3e {V2Ray server inbound  <->  V2Ray server outbound} <--(Freedom)--\x3e {Target site}\n")])])]),s("p",[e._v("There is also an "),s("code",[e._v("alterId")]),e._v(" parameter in the configuration. This parameter is mainly used to enhance the anti-detection capability. In theory, the larger the "),s("code",[e._v("alterId")]),e._v(", the better, but the larger the memory is (only for the server, the client does not occupy the memory), so setting an intermediate value under the compromise is the best. So how large is the best? In fact, this is a sub-scenario. We have not tested this strictly, but based on experience, it should be appropriate to set the value of "),s("code",[e._v("alterId")]),e._v(" between 30 and 100. The size of the "),s("code",[e._v("alterId")]),e._v(" is to ensure that the client is less than or equal to the server.")]),e._v(" "),s("p",[e._v("Some people wondered how the data came back after the request was sent. After all, most of the scenes were downloaded. That is actually not a problem. Since the request is sent out via V2Ray, the response data will also be returned via V2Ray. (If you are familiar with IP networks, you probably will say it is not absolute that traffic will be return with the same route. However, we don't need to focus on the network layer, but as an application layer perspective, it can be regarded as the same route.)")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),s("ul",[s("li",[e._v("In order to give a brief introduction to the way V2Ray works, there are some places where the description of the principle in this section may be not correct. However, it is enough for you to understand the brief principle. The design of VMess protocl is detailed in the "),s("a",{attrs:{href:"https://www.v2ray.com/developer/protocols/vmess.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMess Protocol"),s("OutboundLink")],1),e._v(" in the developer manual or alternatively you may like to check with the original codes on github.")]),e._v(" "),s("li",[e._v("The id is in UUID format. Please use software to generate. Don't try to create one yourself, otherwise it will create a wrong format.")]),e._v(" "),s("li",[e._v("The VMess protocol can set the encryption cipher suite, but the different encryption methods of VMess have no obvious difference for the wall. This section does not give the relevant configuration method (because this is not important, VMess will choose a suitable encryption method by default). The specific configuration can be found in the "),s("a",{attrs:{href:"https://v2ray.com/chapter_02/protocols/vmess.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V2Ray Manual"),s("OutboundLink")],1),e._v(". For the performance of different encryption methods, refer to "),s("router-link",{attrs:{to:"/app/benchmark.html"}},[e._v("Performance Test")]),e._v(".")],1)]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"troubleshooting-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting guide")]),e._v(" "),s("p",[e._v("By following instructions above, V2Ray should be deployed successfully. However, there would always be some readers who may be missing some essential points, resulting in wrong configuration after configuration applied. If you have such a problem, you can try to troubleshoot by following the steps below.")]),e._v(" "),s("h4",{attrs:{id:"crash-immediately-after-launch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crash-immediately-after-launch","aria-hidden":"true"}},[e._v("#")]),e._v(" Crash immediately after launch")]),e._v(" "),s("p",[e._v("Possible cause: The client's configuration file is incorrect.")]),e._v(" "),s("p",[e._v("Correction method: Please check the configuration file carefully and modify it correctly.")]),e._v(" "),s("h4",{attrs:{id:"client-prompt-socks-unknown-socks-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-prompt-socks-unknown-socks-version","aria-hidden":"true"}},[e._v("#")]),e._v(" Client prompt "),s("code",[e._v("Socks: unknown Socks version:")])]),e._v(" "),s("p",[e._v("Possible cause: The inboud of the client configuration is set to socks and the browser's proxy protocol is set to http.")]),e._v(" "),s("p",[e._v("Correction method: Modify the configuration file to make the protocol of the client's inbound and the protocol set by the browser proxy consistent.")]),e._v(" "),s("h4",{attrs:{id:"client-prompt-proxy-http-failed-to-read-http-request-malformed-http-request-x05-x01-x00"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-prompt-proxy-http-failed-to-read-http-request-malformed-http-request-x05-x01-x00","aria-hidden":"true"}},[e._v("#")]),e._v(" Client prompt "),s("code",[e._v('Proxy|HTTP: failed to read http request > malformed HTTP request "\\x05\\x01\\x00"')])]),e._v(" "),s("p",[e._v("Possible cause: The inboud configured by the client is set to https and the proxy protocol of the browser is set to socks4 or socks5.")]),e._v(" "),s("p",[e._v("Correction method: Modify the configuration file to make the protocol of the client's inbound and the protocol set by the browser proxy consistent.")]),e._v(" "),s("h4",{attrs:{id:"the-server-executes-systemctl-status-v2ray-the-output-prompt-main-failed-to-read-config-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-server-executes-systemctl-status-v2ray-the-output-prompt-main-failed-to-read-config-file","aria-hidden":"true"}},[e._v("#")]),e._v(" The server executes "),s("code",[e._v("systemctl status v2ray")]),e._v(", the output prompt: "),s("code",[e._v("Main: failed to read config file...")])]),e._v(" "),s("p",[e._v("Possible cause: The server's configuration file is incorrect.")]),e._v(" "),s("p",[e._v("Correction method: Please check the configuration file carefully and correct it.")]),e._v(" "),s("h4",{attrs:{id:"execute-cat-var-log-v2ray-error-log-or-systemctl-status-v2ray-prompt-rejected-proxy-vmess-encoding-invalid-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-cat-var-log-v2ray-error-log-or-systemctl-status-v2ray-prompt-rejected-proxy-vmess-encoding-invalid-user","aria-hidden":"true"}},[e._v("#")]),e._v(" Execute "),s("code",[e._v("cat /var/log/v2ray/error.log")]),e._v(" or "),s("code",[e._v("systemctl status v2ray")]),e._v(" prompt: rejected Proxy|VMess|Encoding: invalid user")]),e._v(" "),s("p",[e._v("Possible cause: The system time or id of the server and the client are inconsistent or the alterId is inconsistent.")]),e._v(" "),s("p",[e._v("Correction method: Please calibrate the system time or modify the id and alterId.")]),e._v(" "),s("h4",{attrs:{id:"after-the-above-points-are-excluded-please-check-carefully"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#after-the-above-points-are-excluded-please-check-carefully","aria-hidden":"true"}},[e._v("#")]),e._v(" After the above points are excluded, please check carefully:")]),e._v(" "),s("p",[e._v("1). The port number in the browser's proxy settings is consistent with the client's inbound port;")]),e._v(" "),s("p",[e._v("2). The address of the outbound setting in the client is consistent with the ip of the vps;")]),e._v(" "),s("p",[e._v("3). The address of the outbound setting in the client is consistent with the inbound port of the server;")]),e._v(" "),s("p",[e._v("4). Whether the VPS has enabled the firewall and blocked the connection;")]),e._v(" "),s("p",[e._v("5). Whether the client is installed in a place such as a school or a company. If so, confirm whether these units have a firewall to block the connection;")]),e._v(" "),s("p",[e._v("For 1) to 3), you can check if there is a problem by checking the configuration. For 4) and 5), you need to communicate with the VPS provider and company's network manager.")]),e._v(" "),s("h4",{attrs:{id:"if-you-double-check-the-above-points-and-rule-out-the-problem-you-still-can-t-access-the-internet-via-v2ray-then-you-can-consider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-double-check-the-above-points-and-rule-out-the-problem-you-still-can-t-access-the-internet-via-v2ray-then-you-can-consider","aria-hidden":"true"}},[e._v("#")]),e._v(" If you double-check the above points and rule out the problem, you still can't access the Internet via V2Ray, then you can consider:")]),e._v(" "),s("p",[e._v("1). Read carefully at the tutorial ahead, and follow the tutorial to avoid redeploying V2Ray. Always pay attention to the points of attention mentioned in "),s("router-link",{attrs:{to:"/prep/start.html"}},[e._v("Before Deployment")]),e._v(" during deployment;")],1),e._v(" "),s("p",[e._v("2). Give up now;")]),e._v(" "),s("p",[e._v("3). Ask the community for help.")]),e._v(" "),s("hr"),e._v(" "),s("h4",{attrs:{id:"updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updates","aria-hidden":"true"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),s("ul",[s("li",[e._v("2017-08-08 More troubleshooting guide")]),e._v(" "),s("li",[e._v("2017-08-06 Add troubleshooting guide")]),e._v(" "),s("li",[e._v("2018-02-09 Additional instructions")]),e._v(" "),s("li",[e._v("2018-04-05 Content Supplement")]),e._v(" "),s("li",[e._v("2018-09-03 Due to V2Ray updates, modify some descriptions")]),e._v(" "),s("li",[e._v("2018-11-09 Follow up the configuration format of the new v4.0+")]),e._v(" "),s("li",[e._v("2018-02-01 domainOverride changed to sniffing")])])])}),[],!1,null,null,null);t.default=o.exports}}]);