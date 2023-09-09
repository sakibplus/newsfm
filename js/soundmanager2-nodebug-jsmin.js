/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
!function(t,e){function n(n,i){function o(t){return lt.preferFlash&&nt&&!lt.ignoreFlash&&lt.flash[t]!==e&&lt.flash[t]}function a(t){return function(e){var n=this._s;return n&&n._a?t.call(this,e):null}}this.setupOptions={url:n||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"},this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.movieID="sm2-container",this.id=i||"sm2movie",this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.versionNumber="V2.97a.20150601",this.altURL=this.movieURL=this.version=null,this.enabled=this.swfLoaded=!1,this.oMC=null,this.sounds={},this.soundIDs=[],this.didFlashBlock=this.muted=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.html5={usingFlash:null},this.flash={},this.ignoreFlash=this.html5Only=!1;var s,u,r,l,d,f,h,c,p,m,_,y,g,v,O,M,b,L,T,P,w,S,I,A,H,D,F,C,E,k,x,N,R,U,B,q,j,V,Q,W,$,G,X,K,J,Y,Z,z,tt,et,nt,it,ot,at,st,ut,rt,lt=this,dt=null,ft=null,ht=navigator.userAgent,ct=t.location.href.toString(),pt=document,mt=[],_t=!1,yt=!1,gt=!1,vt=!1,Ot=!1,Mt=null,bt=null,Lt=!1,Tt=!1,Pt=0,wt=null,St=[],It=null,At=Array.prototype.slice,Ht=!1,Dt=0,Ft=ht.match(/(ipad|iphone|ipod)/i),Ct=ht.match(/android/i),Et=ht.match(/msie/i),kt=ht.match(/webkit/i),xt=ht.match(/safari/i)&&!ht.match(/chrome/i),Nt=ht.match(/opera/i),Rt=ht.match(/(mobile|pre\/|xoom)/i)||Ft||Ct,Ut=!ct.match(/usehtml5audio/i)&&!ct.match(/sm2\-ignorebadua/i)&&xt&&!ht.match(/silk/i)&&ht.match(/OS X 10_6_([3-7])/i),Bt=pt.hasFocus!==e?pt.hasFocus():null,qt=xt&&(pt.hasFocus===e||!pt.hasFocus()),jt=!qt,Vt=/(mp3|mp4|mpa|m4a|m4b)/i,Qt=pt.location?pt.location.protocol.match(/http/i):null,Wt=Qt?"":"http://",$t=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,Gt="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),Xt=new RegExp("\\.("+Gt.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.useAltURL=!Qt;try{rt=Audio!==e&&(Nt&&opera!==e&&10>opera.version()?new Audio(null):new Audio).canPlayType!==e}catch(t){rt=!1}this.hasHTML5=rt,this.setup=function(t){var n=!lt.url;return t!==e&&gt&&It&&lt.ok(),p(t),Ht||(Rt?lt.setupOptions.ignoreMobileRestrictions&&!lt.setupOptions.forceUseGlobalHTML5Audio||(St.push(T.globalHTML5),Ht=!0):lt.setupOptions.forceUseGlobalHTML5Audio&&(St.push(T.globalHTML5),Ht=!0)),!ut&&Rt&&(lt.setupOptions.ignoreMobileRestrictions?St.push(T.ignoreMobile):(lt.setupOptions.useHTML5Audio=!0,lt.setupOptions.preferFlash=!1,Ft?lt.ignoreFlash=!0:(Ct&&!ht.match(/android\s2\.3/i)||!Ct)&&(Ht=!0))),t&&(n&&I&&t.url!==e&&lt.beginDelayedInit(),I||t.url===e||"complete"!==pt.readyState||setTimeout(w,1)),ut=!0,lt},this.supported=this.ok=function(){return It?gt&&!vt:lt.useHTML5Audio&&lt.hasHTML5},this.getMovie=function(e){return u(e)||pt[e]||t[e]},this.createSound=function(t,n){function i(){return o=U(o),lt.sounds[o.id]=new s(o),lt.soundIDs.push(o.id),lt.sounds[o.id]}var o,a=null;if(!gt||!lt.ok())return!1;if(n!==e&&(t={id:t,url:n}),(o=c(t)).url=W(o.url),o.id===e&&(o.id=lt.setupOptions.idPrefix+Dt++),q(o.id,!0))return lt.sounds[o.id];if(X(o))(a=i())._setup_html5(o);else{if(lt.html5Only||lt.html5.usingFlash&&o.url&&o.url.match(/data\:/i))return i();8<f&&null===o.isMovieStar&&(o.isMovieStar=!!(o.serverURL||o.type&&o.type.match($t)||o.url&&o.url.match(Xt))),o=B(o,void 0),a=i(),8===f?ft._createSound(o.id,o.loops||1,o.usePolicyFile):(ft._createSound(o.id,o.url,o.usePeakData,o.useWaveformData,o.useEQData,o.isMovieStar,!!o.isMovieStar&&o.bufferTime,o.loops||1,o.serverURL,o.duration||null,o.autoPlay,!0,o.autoLoad,o.usePolicyFile),o.serverURL||(a.connected=!0,o.onconnect&&o.onconnect.apply(a))),o.serverURL||!o.autoLoad&&!o.autoPlay||a.load(o)}return!o.serverURL&&o.autoPlay&&a.play(),a},this.destroySound=function(t,e){if(!q(t))return!1;var n,i=lt.sounds[t];for(i.stop(),i._iO={},i.unload(),n=0;n<lt.soundIDs.length;n++)if(lt.soundIDs[n]===t){lt.soundIDs.splice(n,1);break}return e||i.destruct(!0),delete lt.sounds[t],!0},this.load=function(t,e){return!!q(t)&&lt.sounds[t].load(e)},this.unload=function(t){return!!q(t)&&lt.sounds[t].unload()},this.onposition=this.onPosition=function(t,e,n,i){return!!q(t)&&lt.sounds[t].onposition(e,n,i)},this.clearOnPosition=function(t,e,n){return!!q(t)&&lt.sounds[t].clearOnPosition(e,n)},this.start=this.play=function(t,e){var n=null,i=e&&!(e instanceof Object);if(!gt||!lt.ok())return!1;if(q(t,i))i&&(e={url:e});else{if(!i)return!1;i&&(e={url:e}),e&&e.url&&(e.id=t,n=lt.createSound(e).play())}return null===n&&(n=lt.sounds[t].play(e)),n},this.setPosition=function(t,e){return!!q(t)&&lt.sounds[t].setPosition(e)},this.stop=function(t){return!!q(t)&&lt.sounds[t].stop()},this.stopAll=function(){for(var t in lt.sounds)lt.sounds.hasOwnProperty(t)&&lt.sounds[t].stop()},this.pause=function(t){return!!q(t)&&lt.sounds[t].pause()},this.pauseAll=function(){var t;for(t=lt.soundIDs.length-1;0<=t;t--)lt.sounds[lt.soundIDs[t]].pause()},this.resume=function(t){return!!q(t)&&lt.sounds[t].resume()},this.resumeAll=function(){var t;for(t=lt.soundIDs.length-1;0<=t;t--)lt.sounds[lt.soundIDs[t]].resume()},this.togglePause=function(t){return!!q(t)&&lt.sounds[t].togglePause()},this.setPan=function(t,e){return!!q(t)&&lt.sounds[t].setPan(e)},this.setVolume=function(t,n){var i,o;if(t===e||isNaN(t)||n!==e)return!!q(t)&&lt.sounds[t].setVolume(n);for(i=0,o=lt.soundIDs.length;i<o;i++)lt.sounds[lt.soundIDs[i]].setVolume(t)},this.mute=function(t){var e=0;if(t instanceof String&&(t=null),t)return!!q(t)&&lt.sounds[t].mute();for(e=lt.soundIDs.length-1;0<=e;e--)lt.sounds[lt.soundIDs[e]].mute();return lt.muted=!0},this.muteAll=function(){lt.mute()},this.unmute=function(t){if(t instanceof String&&(t=null),t)return!!q(t)&&lt.sounds[t].unmute();for(t=lt.soundIDs.length-1;0<=t;t--)lt.sounds[lt.soundIDs[t]].unmute();return lt.muted=!1,!0},this.unmuteAll=function(){lt.unmute()},this.toggleMute=function(t){return!!q(t)&&lt.sounds[t].toggleMute()},this.getMemoryUse=function(){var t=0;return ft&&8!==f&&(t=parseInt(ft._getMemoryUse(),10)),t},this.disable=function(n){var i;if(n===e&&(n=!1),vt)return!1;for(vt=!0,i=lt.soundIDs.length-1;0<=i;i--)C(lt.sounds[lt.soundIDs[i]]);return h(n),tt.remove(t,"load",g),!0},this.canPlayMIME=function(t){var e;return lt.hasHTML5&&(e=K({type:t})),!e&&It&&(e=t&&lt.ok()?!!(8<f&&t.match($t)||t.match(lt.mimePattern)):null),e},this.canPlayURL=function(t){var e;return lt.hasHTML5&&(e=K({url:t})),!e&&It&&(e=t&&lt.ok()?!!t.match(lt.filePattern):null),e},this.canPlayLink=function(t){return!(t.type===e||!t.type||!lt.canPlayMIME(t.type))||lt.canPlayURL(t.href)},this.getSoundById=function(t,e){return t?lt.sounds[t]:null},this.onready=function(e,n){if("function"!=typeof e)throw x("needFunction","onready");return n||(n=t),_("onready",e,n),y(),!0},this.ontimeout=function(e,n){if("function"!=typeof e)throw x("needFunction","ontimeout");return n||(n=t),_("ontimeout",e,n),y({type:"ontimeout"}),!0},this._wD=this._writeDebug=function(t,e){return!0},this._debug=function(){},this.reboot=function(e,n){var i,o,a;for(i=lt.soundIDs.length-1;0<=i;i--)lt.sounds[lt.soundIDs[i]].destruct();if(ft)try{Et&&(bt=ft.innerHTML),Mt=ft.parentNode.removeChild(ft)}catch(t){}if(bt=Mt=It=ft=null,lt.enabled=I=gt=Lt=Tt=_t=yt=vt=Ht=lt.swfLoaded=!1,lt.soundIDs=[],lt.sounds={},Dt=0,ut=!1,e)mt=[];else for(i in mt)if(mt.hasOwnProperty(i))for(o=0,a=mt[i].length;o<a;o++)mt[i][o].fired=!1;return lt.html5={usingFlash:null},lt.flash={},lt.html5Only=!1,lt.ignoreFlash=!1,t.setTimeout((function(){n||lt.beginDelayedInit()}),20),lt},this.reset=function(){return lt.reboot(!0,!0)},this.getMoviePercent=function(){return ft&&"PercentLoaded"in ft?ft.PercentLoaded():null},this.beginDelayedInit=function(){Ot=!0,w(),setTimeout((function(){return!Tt&&(H(),P(),Tt=!0)}),20),v()},this.destruct=function(){lt.disable(!0)},s=function(t){var n,i,o,a,s,u,r,l,d,h,p,m=this,_=!1,y=[],g=0,v=null;i=n=null,this.sID=this.id=t.id,this.url=t.url,this._iO=this.instanceOptions=this.options=c(t),this.pan=this.options.pan,this.volume=this.options.volume,this.isHTML5=!1,this._a=null,p=!this.url,this.id3={},this._debug=function(){},this.load=function(t){var n;if(t!==e?m._iO=c(t,m.options):(t=m.options,m._iO=t,v&&v!==m.url&&(m._iO.url=m.url,m.url=null)),m._iO.url||(m._iO.url=m.url),m._iO.url=W(m._iO.url),!(n=m.instanceOptions=m._iO).url&&!m.url)return m;if(n.url===m.url&&0!==m.readyState&&2!==m.readyState)return 3===m.readyState&&n.onload&&st(m,(function(){n.onload.apply(m,[!!m.duration])})),m;if(m.loaded=!1,m.readyState=1,m.playState=0,m.id3={},X(n))m._setup_html5(n)._called_load||(m._html5_canplay=!1,m.url!==n.url&&(m._a.src=n.url,m.setPosition(0)),m._a.autobuffer="auto",m._a.preload="auto",m._a._called_load=!0);else{if(lt.html5Only||m._iO.url&&m._iO.url.match(/data\:/i))return m;try{m.isHTML5=!1,m._iO=B(U(n)),m._iO.autoPlay&&(m._iO.position||m._iO.from)&&(m._iO.autoPlay=!1),n=m._iO,8===f?ft._load(m.id,n.url,n.stream,n.autoPlay,n.usePolicyFile):ft._load(m.id,n.url,!!n.stream,!!n.autoPlay,n.loops||1,!!n.autoLoad,n.usePolicyFile)}catch(t){D({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}return m.url=n.url,m},this.unload=function(){return 0!==m.readyState&&(m.isHTML5?(u(),m._a&&(m._a.pause(),v=Y(m._a))):8===f?ft._unload(m.id,"about:blank"):ft._unload(m.id),o()),m},this.destruct=function(t){m.isHTML5?(u(),m._a&&(m._a.pause(),Y(m._a),Ht||s(),m._a._s=null,m._a=null)):(m._iO.onfailure=null,ft._destroySound(m.id)),t||lt.destroySound(m.id,!0)},this.start=this.play=function(t,n){var i,o,a,s,u;if(o=!0,o=null,n=n===e||n,t||(t={}),m.url&&(m._iO.url=m.url),m._iO=c(m._iO,m.options),m._iO=c(t,m._iO),m._iO.url=W(m._iO.url),m.instanceOptions=m._iO,!m.isHTML5&&m._iO.serverURL&&!m.connected)return m.getAutoPlay()||m.setAutoPlay(!0),m;if(X(m._iO)&&(m._setup_html5(m._iO),r()),1!==m.playState||m.paused||((i=m._iO.multiShot)||(m.isHTML5&&m.setPosition(m._iO.position),o=m)),null!==o)return o;if(t.url&&t.url!==m.url&&(m.readyState||m.isHTML5||8!==f||!p?m.load(m._iO):p=!1),m.loaded||(0===m.readyState?(m.isHTML5||lt.html5Only?m.isHTML5?m.load(m._iO):o=m:(m._iO.autoPlay=!0,m.load(m._iO)),m.instanceOptions=m._iO):2===m.readyState&&(o=m)),null!==o)return o;if(!m.isHTML5&&9===f&&0<m.position&&m.position===m.duration&&(t.position=0),m.paused&&0<=m.position&&(!m._iO.serverURL||0<m.position))m.resume();else{if(m._iO=c(t,m._iO),(!m.isHTML5&&null!==m._iO.position&&0<m._iO.position||null!==m._iO.from&&0<m._iO.from||null!==m._iO.to)&&0===m.instanceCount&&0===m.playState&&!m._iO.serverURL){if(i=function(){m._iO=c(t,m._iO),m.play(m._iO)},m.isHTML5&&!m._html5_canplay?(m.load({_oncanplay:i}),o=!1):m.isHTML5||m.loaded||m.readyState&&2===m.readyState||(m.load({onload:i}),o=!1),null!==o)return o;m._iO=h()}(!m.instanceCount||m._iO.multiShotEvents||m.isHTML5&&m._iO.multiShot&&!Ht||!m.isHTML5&&8<f&&!m.getAutoPlay())&&m.instanceCount++,m._iO.onposition&&0===m.playState&&l(m),m.playState=1,m.paused=!1,m.position=m._iO.position===e||isNaN(m._iO.position)?0:m._iO.position,m.isHTML5||(m._iO=B(U(m._iO))),m._iO.onplay&&n&&(m._iO.onplay.apply(m),_=!0),m.setVolume(m._iO.volume,!0),m.setPan(m._iO.pan,!0),m.isHTML5?2>m.instanceCount?(r(),o=m._setup_html5(),m.setPosition(m._iO.position),o.play()):(a=new Audio(m._iO.url),s=function(){tt.remove(a,"ended",s),m._onfinish(m),Y(a),a=null},u=function(){tt.remove(a,"canplay",u);try{a.currentTime=m._iO.position/1e3}catch(t){}a.play()},tt.add(a,"ended",s),m._iO.volume!==e&&(a.volume=Math.max(0,Math.min(1,m._iO.volume/100))),m.muted&&(a.muted=!0),m._iO.position?tt.add(a,"canplay",u):a.play()):(o=ft._start(m.id,m._iO.loops||1,9===f?m.position:m.position/1e3,m._iO.multiShot||!1),9!==f||o||m._iO.onplayerror&&m._iO.onplayerror.apply(m))}return m},this.stop=function(t){var e=m._iO;return 1===m.playState&&(m._onbufferchange(0),m._resetOnPosition(0),m.paused=!1,m.isHTML5||(m.playState=0),d(),e.to&&m.clearOnPosition(e.to),m.isHTML5?m._a&&(t=m.position,m.setPosition(0),m.position=t,m._a.pause(),m.playState=0,m._onTimer(),u()):(ft._stop(m.id,t),e.serverURL&&m.unload()),m.instanceCount=0,m._iO={},e.onstop&&e.onstop.apply(m)),m},this.setAutoPlay=function(t){m._iO.autoPlay=t,m.isHTML5||(ft._setAutoPlay(m.id,t),t&&(m.instanceCount||1!==m.readyState||m.instanceCount++))},this.getAutoPlay=function(){return m._iO.autoPlay},this.setPosition=function(t){t===e&&(t=0);var n=m.isHTML5?Math.max(t,0):Math.min(m.duration||m._iO.duration,Math.max(t,0));if(m.position=n,t=m.position/1e3,m._resetOnPosition(m.position),m._iO.position=n,m.isHTML5){if(m._a){if(m._html5_canplay){if(m._a.currentTime!==t)try{m._a.currentTime=t,(0===m.playState||m.paused)&&m._a.pause()}catch(t){}}else if(t)return m;m.paused&&m._onTimer(!0)}}else t=9===f?m.position:t,m.readyState&&2!==m.readyState&&ft._setPosition(m.id,t,m.paused||!m.playState,m._iO.multiShot);return m},this.pause=function(t){return m.paused||0===m.playState&&1!==m.readyState||(m.paused=!0,m.isHTML5?(m._setup_html5().pause(),u()):(t||t===e)&&ft._pause(m.id,m._iO.multiShot),m._iO.onpause&&m._iO.onpause.apply(m)),m},this.resume=function(){var t=m._iO;return m.paused?(m.paused=!1,m.playState=1,m.isHTML5?(m._setup_html5().play(),r()):(t.isMovieStar&&!t.serverURL&&m.setPosition(m.position),ft._pause(m.id,t.multiShot)),!_&&t.onplay?(t.onplay.apply(m),_=!0):t.onresume&&t.onresume.apply(m),m):m},this.togglePause=function(){return 0===m.playState?(m.play({position:9!==f||m.isHTML5?m.position/1e3:m.position}),m):(m.paused?m.resume():m.pause(),m)},this.setPan=function(t,n){return t===e&&(t=0),n===e&&(n=!1),m.isHTML5||ft._setPan(m.id,t),m._iO.pan=t,n||(m.pan=t,m.options.pan=t),m},this.setVolume=function(t,n){return t===e&&(t=100),n===e&&(n=!1),m.isHTML5?m._a&&(lt.muted&&!m.muted&&(m.muted=!0,m._a.muted=!0),m._a.volume=Math.max(0,Math.min(1,t/100))):ft._setVolume(m.id,lt.muted&&!m.muted||m.muted?0:t),m._iO.volume=t,n||(m.volume=t,m.options.volume=t),m},this.mute=function(){return m.muted=!0,m.isHTML5?m._a&&(m._a.muted=!0):ft._setVolume(m.id,0),m},this.unmute=function(){m.muted=!1;var t=m._iO.volume!==e;return m.isHTML5?m._a&&(m._a.muted=!1):ft._setVolume(m.id,t?m._iO.volume:m.options.volume),m},this.toggleMute=function(){return m.muted?m.unmute():m.mute()},this.onposition=this.onPosition=function(t,n,i){return y.push({position:parseInt(t,10),method:n,scope:i!==e?i:m,fired:!1}),m},this.clearOnPosition=function(t,e){var n;if(t=parseInt(t,10),isNaN(t))return!1;for(n=0;n<y.length;n++)t!==y[n].position||e&&e!==y[n].method||(y[n].fired&&g--,y.splice(n,1))},this._processOnPosition=function(){var t,e;if(!(t=y.length)||!m.playState||g>=t)return!1;for(--t;0<=t;t--)!(e=y[t]).fired&&m.position>=e.position&&(e.fired=!0,g++,e.method.apply(e.scope,[e.position]));return!0},this._resetOnPosition=function(t){var e,n;if(!(e=y.length))return!1;for(--e;0<=e;e--)(n=y[e]).fired&&t<=n.position&&(n.fired=!1,g--);return!0},h=function(){var t,e,n=m._iO,i=n.from,o=n.to;return e=function(){m.clearOnPosition(o,e),m.stop()},t=function(){null===o||isNaN(o)||m.onPosition(o,e)},null===i||isNaN(i)||(n.position=i,n.multiShot=!1,t()),n},l=function(){var t,e=m._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&m.onPosition(parseInt(t,10),e[t])},d=function(){var t,e=m._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&m.clearOnPosition(parseInt(t,10))},r=function(){m.isHTML5&&j(m)},u=function(){m.isHTML5&&V(m)},(o=function(t){t||(y=[],g=0),_=!1,m._hasTimer=null,m._a=null,m._html5_canplay=!1,m.bytesLoaded=null,m.bytesTotal=null,m.duration=m._iO&&m._iO.duration?m._iO.duration:null,m.durationEstimate=null,m.buffered=[],m.eqData=[],m.eqData.left=[],m.eqData.right=[],m.failures=0,m.isBuffering=!1,m.instanceOptions={},m.instanceCount=0,m.loaded=!1,m.metadata={},m.readyState=0,m.muted=!1,m.paused=!1,m.peakData={left:0,right:0},m.waveformData={left:[],right:[]},m.playState=0,m.position=null,m.id3={}})(),this._onTimer=function(t){var e,o=!1,a={};if(m._hasTimer||t)return m._a&&(t||(0<m.playState||1===m.readyState)&&!m.paused)&&((e=m._get_html5_duration())!==n&&(n=e,m.duration=e,o=!0),m.durationEstimate=m.duration,(e=1e3*m._a.currentTime||0)!==i&&(i=e,o=!0),(o||t)&&m._whileplaying(e,a,a,a,a)),o},this._get_html5_duration=function(){var t=m._iO;return(t=m._a&&m._a.duration?1e3*m._a.duration:t&&t.duration?t.duration:null)&&!isNaN(t)&&1/0!==t?t:null},this._apply_loop=function(t,e){t.loop=1<e?"loop":""},this._setup_html5=function(t){t=c(m._iO,t);var e,n=Ht?dt:m._a,i=decodeURI(t.url);if(Ht?i===decodeURI(et)&&(e=!0):i===decodeURI(v)&&(e=!0),n){if(n._s)if(Ht)n._s&&n._s.playState&&!e&&n._s.stop();else if(!Ht&&i===decodeURI(v))return m._apply_loop(n,t.loops),n;e||(v&&o(!1),n.src=t.url,et=v=m.url=t.url,n._called_load=!1)}else t.autoLoad||t.autoPlay?(m._a=new Audio(t.url),m._a.load()):m._a=Nt&&10>opera.version()?new Audio(null):new Audio,(n=m._a)._called_load=!1,Ht&&(dt=n);return m.isHTML5=!0,m._a=n,n._s=m,a(),m._apply_loop(n,t.loops),t.autoLoad||t.autoPlay?m.load():(n.autobuffer=!1,n.preload="auto"),n},a=function(){if(m._a._added_events)return!1;var t;for(t in m._a._added_events=!0,at)at.hasOwnProperty(t)&&m._a&&m._a.addEventListener(t,at[t],!1);return!0},s=function(){var t;for(t in m._a._added_events=!1,at)at.hasOwnProperty(t)&&m._a&&m._a.removeEventListener(t,at[t],!1)},this._onload=function(t){var e=!!t||!m.isHTML5&&8===f&&m.duration;return m.loaded=e,m.readyState=e?3:2,m._onbufferchange(0),m._iO.onload&&st(m,(function(){m._iO.onload.apply(m,[e])})),!0},this._onbufferchange=function(t){return!(0===m.playState||t&&m.isBuffering||!t&&!m.isBuffering)&&(m.isBuffering=1===t,m._iO.onbufferchange&&m._iO.onbufferchange.apply(m,[t]),!0)},this._onsuspend=function(){return m._iO.onsuspend&&m._iO.onsuspend.apply(m),!0},this._onfailure=function(t,e,n){m.failures++,m._iO.onfailure&&1===m.failures&&m._iO.onfailure(t,e,n)},this._onwarning=function(t,e,n){m._iO.onwarning&&m._iO.onwarning(t,e,n)},this._onfinish=function(){var t=m._iO.onfinish;m._onbufferchange(0),m._resetOnPosition(0),m.instanceCount&&(m.instanceCount--,m.instanceCount||(d(),m.playState=0,m.paused=!1,m.instanceCount=0,m.instanceOptions={},m._iO={},u(),m.isHTML5&&(m.position=0)),(!m.instanceCount||m._iO.multiShotEvents)&&t&&st(m,(function(){t.apply(m)})))},this._whileloading=function(t,e,n,i){var o=m._iO;m.bytesLoaded=t,m.bytesTotal=e,m.duration=Math.floor(n),m.bufferLength=i,m.durationEstimate=m.isHTML5||o.isMovieStar?m.duration:o.duration?m.duration>o.duration?m.duration:o.duration:parseInt(m.bytesTotal/m.bytesLoaded*m.duration,10),m.isHTML5||(m.buffered=[{start:0,end:m.duration}]),(3!==m.readyState||m.isHTML5)&&o.whileloading&&o.whileloading.apply(m)},this._whileplaying=function(t,n,i,o,a){var s=m._iO;return!isNaN(t)&&null!==t&&(m.position=Math.max(0,t),m._processOnPosition(),!m.isHTML5&&8<f&&(s.usePeakData&&n!==e&&n&&(m.peakData={left:n.leftPeak,right:n.rightPeak}),s.useWaveformData&&i!==e&&i&&(m.waveformData={left:i.split(","),right:o.split(",")}),s.useEQData&&a!==e&&a&&a.leftEQ&&(t=a.leftEQ.split(","),m.eqData=t,m.eqData.left=t,a.rightEQ!==e&&a.rightEQ&&(m.eqData.right=a.rightEQ.split(",")))),1===m.playState&&(m.isHTML5||8!==f||m.position||!m.isBuffering||m._onbufferchange(0),s.whileplaying&&s.whileplaying.apply(m)),!0)},this._oncaptiondata=function(t){m.captiondata=t,m._iO.oncaptiondata&&m._iO.oncaptiondata.apply(m,[t])},this._onmetadata=function(t,e){var n,i,o={};for(n=0,i=t.length;n<i;n++)o[t[n]]=e[n];m.metadata=o,m._iO.onmetadata&&m._iO.onmetadata.call(m,m.metadata)},this._onid3=function(t,e){var n,i,o=[];for(n=0,i=t.length;n<i;n++)o[t[n]]=e[n];m.id3=c(m.id3,o),m._iO.onid3&&m._iO.onid3.apply(m)},this._onconnect=function(t){t=1===t,(m.connected=t)&&(m.failures=0,q(m.id)&&(m.getAutoPlay()?m.play(e,m.getAutoPlay()):m._iO.autoLoad&&m.load()),m._iO.onconnect&&m._iO.onconnect.apply(m,[t]))},this._ondataerror=function(t){0<m.playState&&m._iO.ondataerror&&m._iO.ondataerror.apply(m)}},A=function(){return pt.body||pt.getElementsByTagName("div")[0]},u=function(t){return pt.getElementById(t)},c=function(t,n){var i,o,a=t||{};for(o in i=n===e?lt.defaultOptions:n)i.hasOwnProperty(o)&&a[o]===e&&(a[o]="object"!=typeof i[o]||null===i[o]?i[o]:c(a[o],i[o]));return a},st=function(e,n){e.isHTML5||8!==f?n():t.setTimeout(n,0)},m={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1},p=function(t,n){var i,o=!0,a=n!==e,s=lt.setupOptions;for(i in t)if(t.hasOwnProperty(i))if("object"!=typeof t[i]||null===t[i]||t[i]instanceof Array||t[i]instanceof RegExp)a&&m[n]!==e?lt[n][i]=t[i]:s[i]!==e?(lt.setupOptions[i]=t[i],lt[i]=t[i]):m[i]===e?o=!1:lt[i]instanceof Function?lt[i].apply(lt,t[i]instanceof Array?t[i]:[t[i]]):lt[i]=t[i];else{if(m[i]!==e)return p(t[i],i);o=!1}return o},tt=function(){function e(t){var e=(t=At.call(t)).length;return i?(t[1]="on"+t[1],3<e&&t.pop()):3===e&&t.push(!1),t}function n(t,e){var n=t.shift(),a=[o[e]];i?n[a](t[0],t[1]):n[a].apply(n,t)}var i=t.attachEvent,o={add:i?"attachEvent":"addEventListener",remove:i?"detachEvent":"removeEventListener"};return{add:function(){n(e(arguments),"add")},remove:function(){n(e(arguments),"remove")}}}(),at={abort:a((function(){})),canplay:a((function(){var t,n=this._s;if(n._html5_canplay)return!0;if(n._html5_canplay=!0,n._onbufferchange(0),t=n._iO.position===e||isNaN(n._iO.position)?null:n._iO.position/1e3,this.currentTime!==t)try{this.currentTime=t}catch(t){}n._iO._oncanplay&&n._iO._oncanplay()})),canplaythrough:a((function(){var t=this._s;t.loaded||(t._onbufferchange(0),t._whileloading(t.bytesLoaded,t.bytesTotal,t._get_html5_duration()),t._onload(!0))})),durationchange:a((function(){var t,e=this._s;t=e._get_html5_duration(),isNaN(t)||t===e.duration||(e.durationEstimate=e.duration=t)})),ended:a((function(){this._s._onfinish()})),error:a((function(){this._s._onload(!1)})),loadeddata:a((function(){var t=this._s;t._loaded||xt||(t.duration=t._get_html5_duration())})),loadedmetadata:a((function(){})),loadstart:a((function(){this._s._onbufferchange(1)})),play:a((function(){this._s._onbufferchange(0)})),playing:a((function(){this._s._onbufferchange(0)})),progress:a((function(t){var e,n,i=this._s,o=0;o=t.target.buffered;e=t.loaded||0;var a=t.total||1;if(i.buffered=[],o&&o.length){for(e=0,n=o.length;e<n;e++)i.buffered.push({start:1e3*o.start(e),end:1e3*o.end(e)});o=1e3*(o.end(0)-o.start(0)),e=Math.min(1,o/(1e3*t.target.duration))}isNaN(e)||(i._whileloading(e,a,i._get_html5_duration()),e&&a&&e===a&&at.canplaythrough.call(this,t))})),ratechange:a((function(){})),suspend:a((function(t){var e=this._s;at.progress.call(this,t),e._onsuspend()})),stalled:a((function(){})),timeupdate:a((function(){this._s._onTimer()})),waiting:a((function(){this._s._onbufferchange(1)}))},X=function(t){return!(!t||!(t.type||t.url||t.serverURL))&&(!(t.serverURL||t.type&&o(t.type))&&(t.type?K({type:t.type}):K({url:t.url})||lt.html5Only||t.url.match(/data\:/i)))},Y=function(t){var n;return t&&(n=xt?"about:blank":lt.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==":"about:blank",t.src=n,t._called_unload!==e&&(t._called_load=!1)),Ht&&(et=null),n},K=function(t){if(!lt.useHTML5Audio||!lt.hasHTML5)return!1;var n=t.url||null;t=t.type||null;var i,a=lt.audioFormats;if(t&&lt.html5[t]!==e)return lt.html5[t]&&!o(t);if(!J){for(i in J=[],a)a.hasOwnProperty(i)&&(J.push(i),a[i].related&&(J=J.concat(a[i].related)));J=new RegExp("\\.("+J.join("|")+")(\\?.*)?$","i")}return(i=n?n.toLowerCase().match(J):null)&&i.length?i=i[1]:t&&(i=(-1!==(n=t.indexOf(";"))?t.substr(0,n):t).substr(6)),i&&lt.html5[i]!==e?n=lt.html5[i]&&!o(i):(t="audio/"+i,n=lt.html5.canPlayType({type:t}),n=(lt.html5[i]=n)&&lt.html5[t]&&!o(t)),n},z=function(){function t(t){var e,n=e=!1;if(!s||"function"!=typeof s.canPlayType)return e;if(t instanceof Array){for(a=0,e=t.length;a<e;a++)(lt.html5[t[a]]||s.canPlayType(t[a]).match(lt.html5Test))&&(n=!0,lt.html5[t[a]]=!0,lt.flash[t[a]]=!!t[a].match(Vt));e=n}else e=!(!(t=!(!s||"function"!=typeof s.canPlayType)&&s.canPlayType(t))||!t.match(lt.html5Test));return e}if(!lt.useHTML5Audio||!lt.hasHTML5)return It=lt.html5.usingFlash=!0,!1;var n,i,o,a,s=Audio!==e?Nt&&10>opera.version()?new Audio(null):new Audio:null,u={};for(n in o=lt.audioFormats)if(o.hasOwnProperty(n)&&(i="audio/"+n,u[n]=t(o[n].type),u[i]=u[n],n.match(Vt)?(lt.flash[n]=!0,lt.flash[i]=!0):(lt.flash[n]=!1,lt.flash[i]=!1),o[n]&&o[n].related))for(a=o[n].related.length-1;0<=a;a--)u["audio/"+o[n].related[a]]=u[n],lt.html5[o[n].related[a]]=u[n],lt.flash[o[n].related[a]]=u[n];return u.canPlayType=s?t:null,lt.html5=c(lt.html5,u),lt.html5.usingFlash=G(),It=lt.html5.usingFlash,!0},T={},x=function(){},U=function(t){return 8===f&&1<t.loops&&t.stream&&(t.stream=!1),t},B=function(t,e){return t&&!t.usePolicyFile&&(t.onid3||t.usePeakData||t.useWaveformData||t.useEQData)&&(t.usePolicyFile=!0),t},r=function(){return!1},C=function(t){for(var e in t)t.hasOwnProperty(e)&&"function"==typeof t[e]&&(t[e]=r)},E=function(t){t===e&&(t=!1),(vt||t)&&lt.disable(t)},k=function(t){if(t)if(t.match(/\.swf(\?.*)?$/i)){if(t.substr(t.toLowerCase().lastIndexOf(".swf?")+4))return t}else t.lastIndexOf("/")!==t.length-1&&(t+="/");return t=(t&&-1!==t.lastIndexOf("/")?t.substr(0,t.lastIndexOf("/")+1):"./")+lt.movieURL,lt.noSWFCache&&(t+="?ts="+(new Date).getTime()),t},b=function(){8!==(f=parseInt(lt.flashVersion,10))&&9!==f&&(lt.flashVersion=f=8);var t=lt.debugMode||lt.debugFlash?"_debug.swf":".swf";lt.useHTML5Audio&&!lt.html5Only&&lt.audioFormats.mp4.required&&9>f&&(lt.flashVersion=f=9),lt.version=lt.versionNumber+(lt.html5Only?" (HTML5-only mode)":9===f?" (AS3/Flash 9)":" (AS2/Flash 8)"),8<f?(lt.defaultOptions=c(lt.defaultOptions,lt.flash9Options),lt.features.buffering=!0,lt.defaultOptions=c(lt.defaultOptions,lt.movieStarOptions),lt.filePatterns.flash9=new RegExp("\\.(mp3|"+Gt.join("|")+")(\\?.*)?$","i"),lt.features.movieStar=!0):lt.features.movieStar=!1,lt.filePattern=lt.filePatterns[8!==f?"flash9":"flash8"],lt.movieURL=(8===f?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",t),lt.features.peakData=lt.features.waveformData=lt.features.eqData=8<f},F=function(t,e){if(!ft)return!1;ft._setPolling(t,e)},q=this.getSoundById,R=function(){var t=[];return lt.debugMode&&t.push("sm2_debug"),lt.debugFlash&&t.push("flash_debug"),lt.useHighPerformance&&t.push("high_performance"),t.join(" ")},N=function(){x("fbHandler");var t=lt.getMoviePercent(),e={type:"FLASHBLOCK"};if(lt.html5Only)return!1;lt.ok()?lt.oMC&&(lt.oMC.className=[R(),"movieContainer","swf_loaded"+(lt.didFlashBlock?" swf_unblocked":"")].join(" ")):(It&&(lt.oMC.className=R()+" movieContainer "+(null===t?"swf_timedout":"swf_error")),lt.didFlashBlock=!0,y({type:"ontimeout",ignoreInit:!0,error:e}),D(e))},_=function(t,n,i){mt[t]===e&&(mt[t]=[]),mt[t].push({method:n,scope:i||null,fired:!1})},y=function(t){if(t||(t={type:lt.ok()?"onready":"ontimeout"}),!gt&&t&&!t.ignoreInit||"ontimeout"===t.type&&(lt.ok()||vt&&!t.ignoreInit))return!1;var e,n={success:t&&t.ignoreInit?lt.ok():!vt},i=t&&t.type&&mt[t.type]||[],o=[],a=(n=[n],It&&!lt.ok());for(t.error&&(n[0].error=t.error),t=0,e=i.length;t<e;t++)!0!==i[t].fired&&o.push(i[t]);if(o.length)for(t=0,e=o.length;t<e;t++)o[t].scope?o[t].method.apply(o[t].scope,n):o[t].method.apply(this,n),a||(o[t].fired=!0);return!0},g=function(){t.setTimeout((function(){lt.useFlashBlock&&N(),y(),"function"==typeof lt.onload&&lt.onload.apply(t),lt.waitForWindowLoad&&tt.add(t,"load",g)}),1)},it=function(){if(nt!==e)return nt;var n,i=!1,o=navigator,a=o.plugins,s=t.ActiveXObject;if(a&&a.length)(o=o.mimeTypes)&&o["application/x-shockwave-flash"]&&o["application/x-shockwave-flash"].enabledPlugin&&o["application/x-shockwave-flash"].enabledPlugin.description&&(i=!0);else if(s!==e&&!ht.match(/MSAppHost/i)){try{n=new s("ShockwaveFlash.ShockwaveFlash")}catch(t){n=null}i=!!n}return nt=i},G=function(){var t,e,n=lt.audioFormats;if(Ft&&ht.match(/os (1|2|3_0|3_1)\s/i)?(lt.hasHTML5=!1,lt.html5Only=!0,lt.oMC&&(lt.oMC.style.display="none")):!lt.useHTML5Audio||lt.html5&&lt.html5.canPlayType||(lt.hasHTML5=!1),lt.useHTML5Audio&&lt.hasHTML5)for(e in $=!0,n)n.hasOwnProperty(e)&&n[e].required&&(lt.html5.canPlayType(n[e].type)?lt.preferFlash&&(lt.flash[e]||lt.flash[n[e].type])&&(t=!0):($=!1,t=!0));return lt.ignoreFlash&&(t=!1,$=!0),lt.html5Only=lt.hasHTML5&&lt.useHTML5Audio&&!t,!lt.html5Only},W=function(t){var e,n,i=0;if(t instanceof Array){for(e=0,n=t.length;e<n;e++)if(t[e]instanceof Object){if(lt.canPlayMIME(t[e].type)){i=e;break}}else if(lt.canPlayURL(t[e])){i=e;break}t[i].url&&(t[i]=t[i].url),t=t[i]}return t},j=function(t){t._hasTimer||(t._hasTimer=!0,!Rt&&lt.html5PollingInterval&&(null===wt&&0===Pt&&(wt=setInterval(Q,lt.html5PollingInterval)),Pt++))},V=function(t){t._hasTimer&&(t._hasTimer=!1,!Rt&&lt.html5PollingInterval&&Pt--)},Q=function(){var t;if(null!==wt&&!Pt)return clearInterval(wt),wt=null,!1;for(t=lt.soundIDs.length-1;0<=t;t--)lt.sounds[lt.soundIDs[t]].isHTML5&&lt.sounds[lt.soundIDs[t]]._hasTimer&&lt.sounds[lt.soundIDs[t]]._onTimer()},D=function(n){n=n!==e?n:{},"function"==typeof lt.onerror&&lt.onerror.apply(t,[{type:n.type!==e?n.type:null}]),n.fatal!==e&&n.fatal&&lt.disable()},ot=function(){if(!Ut||!it())return!1;var t,e,n=lt.audioFormats;for(e in n)if(n.hasOwnProperty(e)&&("mp3"===e||"mp4"===e)&&(lt.html5[e]=!1,n[e]&&n[e].related))for(t=n[e].related.length-1;0<=t;t--)lt.html5[n[e].related[t]]=!1},this._setSandboxType=function(t){},this._externalInterfaceOK=function(t){if(lt.swfLoaded)return!1;lt.swfLoaded=!0,qt=!1,Ut&&ot(),setTimeout(d,Et?100:1)},H=function(t,n){function i(t,e){return'<param name="'+t+'" value="'+e+'" />'}if(_t&&yt)return!1;if(lt.html5Only)return b(),lt.oMC=u(lt.movieID),d(),yt=_t=!0,!1;var o,a,s,r=n||lt.url,l=lt.altURL||r,f=A(),h=R(),c=null;c=(c=pt.getElementsByTagName("html")[0])&&c.dir&&c.dir.match(/rtl/i);if(t=t===e?lt.id:t,b(),lt.url=k(Qt?r:l),n=lt.url,lt.wmode=!lt.wmode&&lt.useHighPerformance?"transparent":lt.wmode,null!==lt.wmode&&(ht.match(/msie 8/i)||!Et&&!lt.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(St.push(T.spcWmode),lt.wmode=null),f={name:t,id:t,src:n,quality:"high",allowScriptAccess:lt.allowScriptAccess,bgcolor:lt.bgColor,pluginspage:Wt+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:lt.wmode,hasPriority:"true"},lt.debugFlash&&(f.FlashVars="debug=1"),lt.wmode||delete f.wmode,Et)r=pt.createElement("div"),a=['<object id="'+t+'" data="'+n+'" type="'+f.type+'" title="'+f.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',i("movie",n),i("AllowScriptAccess",lt.allowScriptAccess),i("quality",f.quality),lt.wmode?i("wmode",lt.wmode):"",i("bgcolor",lt.bgColor),i("hasPriority","true"),lt.debugFlash?i("FlashVars",f.FlashVars):"","</object>"].join("");else for(o in r=pt.createElement("embed"),f)f.hasOwnProperty(o)&&r.setAttribute(o,f[o]);if(h=R(),f=A())if(lt.oMC=u(lt.movieID)||pt.createElement("div"),lt.oMC.id)s=lt.oMC.className,lt.oMC.className=(s?s+" ":"movieContainer")+(h?" "+h:""),lt.oMC.appendChild(r),Et&&((o=lt.oMC.appendChild(pt.createElement("div"))).className="sm2-object-box",o.innerHTML=a),yt=!0;else{if(lt.oMC.id=lt.movieID,lt.oMC.className="movieContainer "+h,o=h=null,lt.useFlashBlock||(lt.useHighPerformance?h={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(h={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},c&&(h.left=Math.abs(parseInt(h.left,10))+"px"))),kt&&(lt.oMC.style.zIndex=1e4),!lt.debugFlash)for(s in h)h.hasOwnProperty(s)&&(lt.oMC.style[s]=h[s]);try{Et||lt.oMC.appendChild(r),f.appendChild(lt.oMC),Et&&((o=lt.oMC.appendChild(pt.createElement("div"))).className="sm2-object-box",o.innerHTML=a),yt=!0}catch(t){throw Error(x("domError")+" \n"+t.toString())}}return _t=!0},P=function(){return lt.html5Only?(H(),!1):!(ft||!lt.url)&&((ft=lt.getMovie(lt.id))||(Mt?(Et?lt.oMC.innerHTML=bt:lt.oMC.appendChild(Mt),Mt=null,_t=!0):H(lt.id,lt.url),ft=lt.getMovie(lt.id)),"function"==typeof lt.oninitmovie&&setTimeout(lt.oninitmovie,1),!0)},v=function(){setTimeout(O,1e3)},M=function(){t.setTimeout((function(){lt.setup({preferFlash:!1}).reboot(),lt.didFlashBlock=!0,lt.beginDelayedInit()}),1)},O=function(){var e,n=!1;return!(!lt.url||Lt)&&(Lt=!0,tt.remove(t,"load",v),!(nt&&qt&&!Bt)&&(gt||0<(e=lt.getMoviePercent())&&100>e&&(n=!0),void setTimeout((function(){if(e=lt.getMoviePercent(),n)return Lt=!1,t.setTimeout(v,1),!1;!gt&&jt&&(null===e?lt.useFlashBlock||0===lt.flashLoadTimeout?lt.useFlashBlock&&N():!lt.useFlashBlock&&$?M():y({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==lt.flashLoadTimeout&&(!lt.useFlashBlock&&$?M():E(!0)))}),lt.flashLoadTimeout)))},L=function(){return Bt||!qt?(tt.remove(t,"focus",L),!0):(Bt=jt=!0,Lt=!1,v(),tt.remove(t,"focus",L),!0)},h=function(e){if(gt)return!1;if(lt.html5Only)return gt=!0,g(),!0;var n,i=!0;return lt.useFlashBlock&&lt.flashLoadTimeout&&!lt.getMoviePercent()||(gt=!0),n={type:!nt&&It?"NO_FLASH":"INIT_TIMEOUT"},(vt||e)&&(lt.useFlashBlock&&lt.oMC&&(lt.oMC.className=R()+" "+(null===lt.getMoviePercent()?"swf_timedout":"swf_error")),y({type:"ontimeout",error:n,ignoreInit:!0}),D(n),i=!1),vt||(lt.waitForWindowLoad&&!Ot?tt.add(t,"load",g):g()),i},l=function(){var t,n=lt.setupOptions;for(t in n)n.hasOwnProperty(t)&&(lt[t]===e?lt[t]=n[t]:lt[t]!==n[t]&&(lt.setupOptions[t]=lt[t]))},d=function(){if(gt)return!1;if(lt.html5Only)return gt||(tt.remove(t,"load",lt.beginDelayedInit),lt.enabled=!0,h()),!0;P();try{ft._externalInterfaceTest(!1),F(!0,lt.flashPollingInterval||(lt.useHighPerformance?10:50)),lt.debugMode||ft._disableDebug(),lt.enabled=!0,lt.html5Only||tt.add(t,"unload",r)}catch(t){return D({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),E(!0),h(),!1}return h(),tt.remove(t,"load",lt.beginDelayedInit),!0},w=function(){return!I&&(I=!0,l(),!nt&&lt.hasHTML5&&lt.setup({useHTML5Audio:!0,preferFlash:!1}),z(),!nt&&It&&(St.push(T.needFlash),lt.setup({flashLoadTimeout:1})),pt.removeEventListener&&pt.removeEventListener("DOMContentLoaded",w,!1),P(),!0)},Z=function(){return"complete"===pt.readyState&&(w(),pt.detachEvent("onreadystatechange",Z)),!0},S=function(){Ot=!0,w(),tt.remove(t,"load",S)},it(),tt.add(t,"focus",L),tt.add(t,"load",v),tt.add(t,"load",S),pt.addEventListener?pt.addEventListener("DOMContentLoaded",w,!1):pt.attachEvent?pt.attachEvent("onreadystatechange",Z):D({type:"NO_DOM2_EVENTS",fatal:!0})}if(!t||!t.document)throw Error("SoundManager requires a browser with window and document objects.");var i=null;t.SM2_DEFER!==e&&SM2_DEFER||(i=new n),"object"==typeof module&&module&&"object"==typeof module.exports?(module.exports.SoundManager=n,module.exports.soundManager=i):"function"==typeof define&&define.amd&&define((function(){return{constructor:n,getInstance:function(e){return!t.soundManager&&e instanceof Function&&((e=e(n))instanceof n&&(t.soundManager=e)),t.soundManager}}})),t.SoundManager=n,t.soundManager=i}(window);