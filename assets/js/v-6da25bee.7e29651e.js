"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21289],{90553:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-6da25bee","path":"/devices/YXZBSL.html","title":"TuYa YXZBSL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa YXZBSL control via MQTT","description":"Integrate your TuYa YXZBSL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Type (enum)","slug":"type-enum","link":"#type-enum","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Ringtone (enum)","slug":"ringtone-enum","link":"#ringtone-enum","children":[]},{"level":3,"title":"Power type (enum)","slug":"power-type-enum","link":"#power-type-enum","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Battery level (enum)","slug":"battery-level-enum","link":"#battery-level-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1713901682000},"filePathRelative":"devices/YXZBSL.md"}')},46097:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var a=o(166252);const d=(0,a._)("h1",{id:"tuya-yxzbsl",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-yxzbsl","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa YXZBSL")],-1),i=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"YXZBSL")],-1),n=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Smart siren")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"alarm, type, volume, ringtone, power_type, duration, battery_level, battery, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/YXZBSL.png",alt:"TuYa YXZBSL"})])],-1),s=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Turn the light of the alarm ON/OFF. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="type-enum" tabindex="-1"><a class="header-anchor" href="#type-enum" aria-hidden="true">#</a> Type (enum)</h3><p>Alarm type. Value can be found in the published state on the <code>type</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;type&quot;: NEW_VALUE}</code>. The possible values are: <code>sound</code>, <code>light</code>, <code>sound+light</code>, <code>normal</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum" aria-hidden="true">#</a> Volume (enum)</h3><p>Volume of the alarm. Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>mute</code>, <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="ringtone-enum" tabindex="-1"><a class="header-anchor" href="#ringtone-enum" aria-hidden="true">#</a> Ringtone (enum)</h3><p>Ringtone of the alarm. Value can be found in the published state on the <code>ringtone</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ringtone&quot;: NEW_VALUE}</code>. The possible values are: <code>melody1</code>, <code>melody2</code>, <code>melody3</code>, <code>melody4</code>, <code>melody5</code>, <code>melody6</code>, <code>melody7</code>, <code>melody8</code>, <code>door</code>, <code>water</code>, <code>temperature</code>, <code>entered</code>, <code>left</code>.</p><h3 id="power-type-enum" tabindex="-1"><a class="header-anchor" href="#power-type-enum" aria-hidden="true">#</a> Power type (enum)</h3><p>Power type. Value can be found in the published state on the <code>power_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>battery</code>, <code>cable</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric" aria-hidden="true">#</a> Duration (numeric)</h3><p>Duration of the alarm. Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="battery-level-enum" tabindex="-1"><a class="header-anchor" href="#battery-level-enum" aria-hidden="true">#</a> Battery level (enum)</h3><p>Battery level state. Value can be found in the published state on the <code>battery_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),d,(0,a._)("table",null,[i,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),r,c,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),s])}]])}}]);