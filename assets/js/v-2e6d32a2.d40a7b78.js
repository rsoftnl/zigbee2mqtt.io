"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12227],{323194:(e,t,i)=>{i.r(t),i.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-2e6d32a2","path":"/devices/CTM_MBD_Dim.html","title":"CTM Lyng CTM_MBD_Dim control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"CTM Lyng CTM_MBD_Dim control via MQTT","description":"Integrate your CTM Lyng CTM_MBD_Dim via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Device enabled (binary)","slug":"device-enabled-binary","link":"#device-enabled-binary","children":[]},{"level":3,"title":"Ballast minimum level (numeric)","slug":"ballast-minimum-level-numeric","link":"#ballast-minimum-level-numeric","children":[]},{"level":3,"title":"Ballast maximum level (numeric)","slug":"ballast-maximum-level-numeric","link":"#ballast-maximum-level-numeric","children":[]},{"level":3,"title":"Ballast power on level (numeric)","slug":"ballast-power-on-level-numeric","link":"#ballast-power-on-level-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1713901682000},"filePathRelative":"devices/CTM_MBD_Dim.md"}')},475823:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var l=i(166252);const a=(0,l._)("h1",{id:"ctm-lyng-ctm-mbd-dim",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ctm-lyng-ctm-mbd-dim","aria-hidden":"true"},"#"),(0,l.Uk)(" CTM Lyng CTM_MBD_Dim")],-1),o=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),n=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"CTM_MBD_Dim")],-1),c=(0,l._)("td",null,"Vendor",-1),d=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"MBD Dim, motion detector with dimmer")],-1),u=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"light (state, brightness), illuminance, illuminance_lux, occupancy, device_enabled, ballast_minimum_level, ballast_maximum_level, ballast_power_on_level, linkquality")],-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CTM_MBD_Dim.png",alt:"CTM Lyng CTM_MBD_Dim"})])],-1),r=(0,l._)("h2",{id:"options",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,l.Uk)(" Options")],-1),h=(0,l.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="device-enabled-binary" tabindex="-1"><a class="header-anchor" href="#device-enabled-binary" aria-hidden="true">#</a> Device enabled (binary)</h3><p>Turn the device on or off. Value can be found in the published state on the <code>device_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_enabled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_enabled&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> device enabled is ON, if <code>OFF</code> OFF.</p><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric" aria-hidden="true">#</a> Ballast minimum level (numeric)</h3><p>Specifies the minimum brightness value. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>97</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric" aria-hidden="true">#</a> Ballast maximum level (numeric)</h3><p>Specifies the maximum brightness value. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>97</code>.</p><h3 id="ballast-power-on-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-power-on-level-numeric" aria-hidden="true">#</a> Ballast power on level (numeric)</h3><p>Specifies the initialisation light level. Can not be set lower than &quot;ballast_minimum_level&quot;. Value can be found in the published state on the <code>ballast_power_on_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_power_on_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_power_on_level&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>97</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),a,(0,l._)("table",null,[o,(0,l._)("tbody",null,[n,(0,l._)("tr",null,[c,(0,l._)("td",null,[(0,l.Wm)(i,{to:"/supported-devices/#v=CTM%20Lyng"},{default:(0,l.w5)((()=>[(0,l.Uk)("CTM Lyng")])),_:1})])]),d,u,s])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,l.kq)(" Notes END: Do not edit below this line "),r,(0,l._)("p",null,[(0,l._)("em",null,[(0,l.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.w5)((()=>[(0,l.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);