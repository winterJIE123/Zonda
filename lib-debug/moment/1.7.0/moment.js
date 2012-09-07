(function(e,t){function n(e,t,n){this._d=e,this._isUTC=!!t,this._a=e._a||null,e._a=null,this._lang=n||!1}function r(e){var t=this._data={},n=e.years||e.y||0,r=e.months||e.M||0,s=e.weeks||e.w||0,o=e.days||e.d||0,u=e.hours||e.h||0,a=e.minutes||e.m||0,f=e.seconds||e.s||0,l=e.milliseconds||e.ms||0;this._milliseconds=l+f*1e3+a*6e4+u*36e5,this._days=o+s*7,this._months=r+n*12,t.milliseconds=l%1e3,f+=i(l/1e3),t.seconds=f%60,a+=i(f/60),t.minutes=a%60,u+=i(a/60),t.hours=u%24,o+=i(u/24),o+=s*7,t.days=o%30,r+=i(o/30),t.months=r%12,n+=i(r/12),t.years=n,this._lang=!1}function i(e){return e<0?Math.ceil(e):Math.floor(e)}function s(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function o(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function u(e){return Object.prototype.toString.call(e)==="[object Array]"}function a(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function f(t,n){var r,i;for(r=1;r<7;r++)t[r]=t[r]==null?r===2?1:0:t[r];return t[7]=n,i=new e(0),n?(i.setUTCFullYear(t[0],t[1],t[2]),i.setUTCHours(t[3],t[4],t[5],t[6])):(i.setFullYear(t[0],t[1],t[2]),i.setHours(t[3],t[4],t[5],t[6])),i._a=t,i}function l(e,t){var n,r,i=[];!t&&D&&(t=require("./lang/"+e));for(n=0;n<P.length;n++)t[P[n]]=t[P[n]]||M.en[P[n]];for(n=0;n<12;n++)r=k([2e3,n]),i[n]=new RegExp("^"+(t.months[n]||t.months(r,""))+"|^"+(t.monthsShort[n]||t.monthsShort(r,"")).replace(".",""),"i");return t.monthsParse=t.monthsParse||i,M[e]=t,t}function c(e){var t=typeof e=="string"&&e||e&&e._lang||null;return t?M[t]||l(t):k}function h(e){return et[e]?"'+("+et[e]+")+'":e.replace(F,"").replace(/\\?'/g,"\\'")}function p(e){return c().longDateFormat[e]||e}function d(e){var t="var a,b;return '"+e.replace(B,h)+"';",n=Function;return new n("t","v","o","p","m",t)}function v(e){return Z[e]||(Z[e]=d(e)),Z[e]}function m(e,t){function n(n,i){return r[n].call?r[n](e,t):r[n][i]}var r=c(e);while(j.test(t))t=t.replace(j,p);return Z[t]||(Z[t]=d(t)),Z[t](e,n,r.ordinal,s,r.meridiem)}function g(e){switch(e){case"DDDD":return U;case"YYYY":return z;case"S":case"SS":case"SSS":case"DDD":return R;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return W;case"Z":case"ZZ":return X;case"T":return V;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return q;default:return new RegExp(e.replace("\\",""))}}function y(e,t,n,r){var i;switch(e){case"M":case"MM":n[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":for(i=0;i<12;i++)if(c().monthsParse[i].test(t)){n[1]=i;break}break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(n[2]=~~t);break;case"YY":t=~~t,n[0]=t+(t>70?1900:2e3);break;case"YYYY":n[0]=~~Math.abs(t);break;case"a":case"A":r.isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":n[3]=~~t;break;case"m":case"mm":n[4]=~~t;break;case"s":case"ss":n[5]=~~t;break;case"S":case"SS":case"SSS":n[6]=~~(("0."+t)*1e3);break;case"Z":case"ZZ":r.isUTC=!0,i=(t+"").match(Q),i&&i[1]&&(r.tzh=~~i[1]),i&&i[2]&&(r.tzm=~~i[2]),i&&i[0]==="+"&&(r.tzh=-r.tzh,r.tzm=-r.tzm)}}function b(e,t){var n=[0,0,1,0,0,0,0],r={tzh:0,tzm:0},i=t.match(B),s,o;for(s=0;s<i.length;s++)o=(g(i[s]).exec(e)||[])[0],e=e.replace(g(i[s]),""),y(i[s],o,n,r);return r.isPm&&n[3]<12&&(n[3]+=12),r.isPm===!1&&n[3]===12&&(n[3]=0),n[3]+=r.tzh,n[4]+=r.tzm,f(n,r.isUTC)}function w(e,t){var r,i=e.match(I)||[],s,o=99,u,f,l;for(u=0;u<t.length;u++)f=b(e,t[u]),s=m(new n(f),t[u]).match(I)||[],l=a(i,s),l<o&&(o=l,r=f);return r}function E(t){var n="YYYY-MM-DDT",r;if($.exec(t)){for(r=0;r<4;r++)if(K[r][1].exec(t)){n+=K[r][0];break}return X.exec(t)?b(t,n+" Z"):b(t,n)}return new e(t)}function S(e,t,n,r,i){var s=i.relativeTime[e];return typeof s=="function"?s(t||1,!!n,e,r):s.replace(/%d/i,t||1)}function x(e,t,n){var r=A(Math.abs(e)/1e3),i=A(r/60),s=A(i/60),o=A(s/24),u=A(o/365),a=r<45&&["s",r]||i===1&&["m"]||i<45&&["mm",i]||s===1&&["h"]||s<22&&["hh",s]||o===1&&["d"]||o<=25&&["dd",o]||o<=45&&["M"]||o<345&&["MM",A(o/30)]||u===1&&["y"]||["yy",u];return a[2]=t,a[3]=e>0,a[4]=n,S.apply({},a)}function T(e,t){k.fn[e]=function(e){var n=this._isUTC?"UTC":"";return e!=null?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}function N(e){k.duration.fn[e]=function(){return this._data[e]}}function C(e,t){k.duration.fn["as"+e]=function(){return+this/t}}var k,L="1.7.0",A=Math.round,O,M={},_="en",D=typeof module!="undefined"&&module.exports,P="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),H=/^\/?Date\((\-?\d+)/i,B=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?)/g,j=/(LT|LL?L?L?)/g,F=/(^\[)|(\\)|\]$/g,I=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,q=/\d\d?/,R=/\d{1,3}/,U=/\d{3}/,z=/\d{1,4}/,W=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,X=/Z|[\+\-]\d\d:?\d\d/i,V=/T/i,$=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,J="YYYY-MM-DDTHH:mm:ssZ",K=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],Q=/([\+\-]|\d\d)/gi,G="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Y={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Z={},et={M:"(a=t.month()+1)",MMM:'v("monthsShort",t.month())',MMMM:'v("months",t.month())',D:"(a=t.date())",DDD:"(a=new Date(t.year(),t.month(),t.date()),b=new Date(t.year(),0,1),a=~~(((a-b)/864e5)+1.5))",d:"(a=t.day())",dd:'v("weekdaysMin",t.day())',ddd:'v("weekdaysShort",t.day())',dddd:'v("weekdays",t.day())',w:"(a=new Date(t.year(),t.month(),t.date()-t.day()+5),b=new Date(a.getFullYear(),0,4),a=~~((a-b)/864e5/7+1.5))",YY:"p(t.year()%100,2)",YYYY:"p(t.year(),4)",a:"m(t.hours(),t.minutes(),!0)",A:"m(t.hours(),t.minutes(),!1)",H:"t.hours()",h:"t.hours()%12||12",m:"t.minutes()",s:"t.seconds()",S:"~~(t.milliseconds()/100)",SS:"p(~~(t.milliseconds()/10),2)",SSS:"p(t.milliseconds(),3)",Z:'((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(a/60),2)+":"+p(~~a%60,2)',ZZ:'((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(10*a/6),4)'},tt="DDD w M D d".split(" "),nt="M D H h m s w".split(" ");while(tt.length)O=tt.pop(),et[O+"o"]=et[O]+"+o(a)";while(nt.length)O=nt.pop(),et[O+O]="p("+et[O]+",2)";et.DDDD="p("+et.DDD+",3)",k=function(r,i){if(r===null||r==="")return null;var s,o;return k.isMoment(r)?new n(new e(+r._d),r._isUTC,r._lang):(i?u(i)?s=w(r,i):s=b(r,i):(o=H.exec(r),s=r===t?new e:o?new e(+o[1]):r instanceof e?r:u(r)?f(r):typeof r=="string"?E(r):new e(r)),new n(s))},k.utc=function(e,t){return u(e)?new n(f(e,!0),!0):(typeof e=="string"&&!X.exec(e)&&(e+=" +0000",t&&(t+=" Z")),k(e,t).utc())},k.unix=function(e){return k(e*1e3)},k.duration=function(e,t){var n=k.isDuration(e),i=typeof e=="number",s=n?e._data:i?{}:e,o;return i&&(t?s[t]=e:s.milliseconds=e),o=new r(s),n&&(o._lang=e._lang),o},k.humanizeDuration=function(e,t,n){return k.duration(e,t===!0?null:t).humanize(t===!0?!0:n)},k.version=L,k.defaultFormat=J,k.lang=function(e,t){var n;if(!e)return _;(t||!M[e])&&l(e,t);if(M[e]){for(n=0;n<P.length;n++)k[P[n]]=M[e][P[n]];k.monthsParse=M[e].monthsParse,_=e}},k.langData=c,k.isMoment=function(e){return e instanceof n},k.isDuration=function(e){return e instanceof r},k.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10;return~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"}}),k.fn=n.prototype={clone:function(){return k(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?!a(this._a,(this._a[7]?k.utc(this):this).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){return m(this,e?e:k.defaultFormat)},add:function(e,t){var n=t?k.duration(+t,e):k.duration(e);return o(this,n,1),this},subtract:function(e,t){var n=t?k.duration(+t,e):k.duration(e);return o(this,n,-1),this},diff:function(e,t,n){var r=this._isUTC?k(e).utc():k(e).local(),i=(this.zone()-r.zone())*6e4,s=this._d-r._d-i,o=this.year()-r.year(),u=this.month()-r.month(),a=this.date()-r.date(),f;return t==="months"?f=o*12+u+a/30:t==="years"?f=o+(u+a/30)/12:f=t==="seconds"?s/1e3:t==="minutes"?s/6e4:t==="hours"?s/36e5:t==="days"?s/864e5:t==="weeks"?s/6048e5:s,n?f:A(f)},from:function(e,t){return k.duration(this.diff(e)).lang(this._lang).humanize(!t)},fromNow:function(e){return this.from(k(),e)},calendar:function(){var e=this.diff(k().sod(),"days",!0),t=this.lang().calendar,n=t.sameElse,r=e<-6?n:e<-1?t.lastWeek:e<0?t.lastDay:e<1?t.sameDay:e<2?t.nextDay:e<7?t.nextWeek:n;return this.format(typeof r=="function"?r.apply(this):r)},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<k([this.year()]).zone()||this.zone()<k([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){switch(e.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return k.utc([this.year(),this.month()+1,0]).date()},lang:function(e){return e===t?c(this):(this._lang=e,this)}};for(O=0;O<G.length;O++)T(G[O].toLowerCase(),G[O]);T("year","FullYear"),k.duration.fn=r.prototype={weeks:function(){return i(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=this.lang().relativeTime,r=x(t,!e,this.lang());return e&&(r=(t<=0?n.past:n.future).replace(/%s/i,r)),r},lang:k.fn.lang};for(O in Y)Y.hasOwnProperty(O)&&(C(O,Y[O]),N(O.toLowerCase()));C("Weeks",6048e5),D&&(module.exports=k),typeof ender=="undefined"&&(this.moment=k),typeof define=="function"&&define.amd&&define("moment",[],function(){return k})}).call(this,Date);