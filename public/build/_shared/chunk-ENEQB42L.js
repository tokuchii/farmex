import{A as R,B as X,C as Ht,D as qt,E as et,F as se,H as zt,a as Nt,b as Ct,c as Ye,d as bt,e as g,f as Ot,g as Dt,h as Lt,i as Ut,j as Mt,k as Ie,l as _e,m as Vt,n as Ee,o as B,p as Y,q as J,r as Ft,s as D,t as Te,u as Wt,v as Je,w as Xe,x as xt,y as Qe,z as Ze}from"/build/_shared/chunk-XGJMZCAC.js";var $n="firebase",Bn="12.15.0";se($n,Bn,"app");function ln(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var dn=ln,hn=new _e("auth","Firebase",ln());var Se=new xt("@firebase/auth");function Yn(n,...e){Se.logLevel<=Xe.WARN&&Se.warn(`Auth (${X}): ${n}`,...e)}function we(n,...e){Se.logLevel<=Xe.ERROR&&Se.error(`Auth (${X}): ${n}`,...e)}function v(n,...e){throw yt(n,...e)}function k(n,...e){return yt(n,...e)}function fn(n,e,t){let i={...dn(),[e]:t};return new _e("auth","Firebase",i).create(e,{appName:n.name})}function H(n){return fn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yt(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hn.create(n,...e)}function l(n,e,...t){if(!n)throw yt(e,...t)}function A(n){let e="INTERNAL ASSERTION FAILED: "+n;throw we(e),new Error(e)}function O(n,e){n||A(e)}function at(){return typeof self<"u"&&self.location?.href||""}function Jn(){return Gt()==="http:"||Gt()==="https:"}function Gt(){return typeof self<"u"&&self.location?.protocol||null}function Xn(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jn()||Lt()||"connection"in navigator)?navigator.onLine:!0}function Qn(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var q=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,O(t>e,"Short delay should be less than long delay!"),this.isMobile=Ot()||Ut()}get(){return Xn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function wt(n,e){O(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Pe=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Zn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var ei=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ti=new q(3e4,6e4);function p(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function m(n,e,t,i,r={}){return pn(n,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});let o=B({...a,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);let u={method:e,headers:c,...s};return Dt()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Te(n.emulatorConfig.host)&&(u.credentials="include"),Pe.fetch()(await mn(n,n.config.apiHost,t,o),u)})}async function pn(n,e,t){n._canInitEmulator=!1;let i={...Zn,...e};try{let r=new ot(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw oe(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let o=s.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oe(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oe(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw oe(n,"user-disabled",a);let d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fn(n,d,u);v(n,d)}}catch(r){if(r instanceof Ie)throw r;v(n,"network-request-failed",{message:String(r)})}}async function $(n,e,t,i,r={}){let s=await m(n,e,t,i,r);return"mfaPendingCredential"in s&&v(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function mn(n,e,t,i){let r=`${e}${t}?${i}`,s=n,a=s.config.emulator?wt(n.config,r):`${n.config.apiScheme}://${r}`;return ei.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function ni(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ot=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(k(this.auth,"network-request-failed")),ti.get())})}};function oe(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let r=k(n,e,i);return r.customData._tokenResponse=t,r}function jt(n){return n!==void 0&&n.enterprise!==void 0}var Ne=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ni(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function gn(n,e){return m(n,"GET","/v2/recaptchaConfig",p(n,e))}async function ii(n,e){return m(n,"POST","/v1/accounts:delete",e)}async function Ce(n,e){return m(n,"POST","/v1/accounts:lookup",e)}function ce(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function In(n,e=!1){let t=D(n),i=await t.getIdToken(e),r=vt(i);l(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let s=typeof r.firebase=="object"?r.firebase:void 0,a=s?.sign_in_provider;return{claims:r,token:i,authTime:ce(tt(r.auth_time)),issuedAtTime:ce(tt(r.iat)),expirationTime:ce(tt(r.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function tt(n){return Number(n)*1e3}function vt(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return we("JWT malformed, contained fewer than 3 sections"),null;try{let r=Nt(t);return r?JSON.parse(r):(we("Failed to decode base64 JWT payload"),null)}catch(r){return we("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Kt(n){let e=vt(n);return l(e,"internal-error"),l(typeof e.exp<"u","internal-error"),l(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function de(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ie&&ri(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ri({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var ct=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;let i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var he=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ce(this.lastLoginAt),this.creationTime=ce(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function be(n){let e=n.auth,t=await n.getIdToken(),i=await de(n,Ce(e,{idToken:t}));l(i?.users.length,e,"internal-error");let r=i.users[0];n._notifyReloadListener(r);let s=r.providerUserInfo?.length?En(r.providerUserInfo):[],a=si(n.providerData,s),o=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!a?.length,u=o?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new he(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function _n(n){let e=D(n);await be(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function si(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function En(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function ai(n,e){let t=await pn(n,{},async()=>{let i=B({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=await mn(n,r,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:o,body:i};return n.emulatorConfig&&Te(n.emulatorConfig.host)&&(c.credentials="include"),Pe.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oi(n,e){return m(n,"POST","/v2/accounts:revokeToken",p(n,e))}var M=class{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){l(e.idToken,"internal-error"),l(typeof e.idToken<"u","internal-error"),l(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){l(e.length!==0,"internal-error");let t=Kt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(l(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:r,expiresIn:s}=await ai(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:s}=t,a=new M;return i&&(l(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(l(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(l(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new M,this.toJSON())}_performRefresh(){return A("not implemented")}};function L(n,e){l(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var I=class{constructor({uid:e,auth:t,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new ct(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new he(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await de(this,this.stsTokenManager.getToken(this.auth,e));return l(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return In(this,e)}reload(){return _n(this)}_assign(e){this!==e&&(l(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new I({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){l(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await be(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(R(this.auth.app))return Promise.reject(H(this.auth));let e=await this.getIdToken();return await de(this,ii(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){let i=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:ge,providerData:re,stsTokenManager:Pt}=t;l(h&&Pt,e,"internal-error");let jn=M.fromJSON(this.name,Pt);l(typeof h=="string",e,"internal-error"),L(i,e.name),L(r,e.name),l(typeof f=="boolean",e,"internal-error"),l(typeof ge=="boolean",e,"internal-error"),L(s,e.name),L(a,e.name),L(o,e.name),L(c,e.name),L(u,e.name),L(d,e.name);let Be=new I({uid:h,auth:e,email:r,emailVerified:f,displayName:i,isAnonymous:ge,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:jn,createdAt:u,lastLoginAt:d});return re&&Array.isArray(re)&&(Be.providerData=re.map(Kn=>({...Kn}))),c&&(Be._redirectEventId=c),Be}static async _fromIdTokenResponse(e,t,i=!1){let r=new M;r.updateFromServerResponse(t);let s=new I({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await be(s),s}static async _fromGetAccountInfoResponse(e,t,i){let r=t.users[0];l(r.localId!==void 0,"internal-error");let s=r.providerUserInfo!==void 0?En(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!s?.length,o=new M;o.updateFromIdToken(i);let c=new I({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new he(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(c,u),c}};var $t=new Map;function N(n){O(n instanceof Function,"Expected a class definition");let e=$t.get(n);return e?(O(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$t.set(n,e),e)}var Oe=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Oe.type="NONE";var ut=Oe;function ve(n,e,t){return`firebase:${n}:${e}:${t}`}var V=class{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:s}=this.auth;this.fullUserKey=ve(this.userKey,r.apiKey,s),this.fullPersistenceKey=ve("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Ce(this.auth,{idToken:e}).catch(()=>{});return t?I._fromGetAccountInfoResponse(this.auth,t,e):null}return I._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new V(N(ut),e,i);let r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),s=r[0]||N(ut),a=ve(i,e.config.apiKey,e.name),o=null;for(let u of t)try{let d=await u._get(a);if(d){let h;if(typeof d=="string"){let f=await Ce(e,{idToken:d}).catch(()=>{});if(!f)break;h=await I._fromGetAccountInfoResponse(e,f,d)}else h=I._fromJSON(e,d);u!==s&&(o=h),s=u;break}}catch{}let c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new V(s,e,i):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new V(s,e,i))}};function Bt(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(An(e))return"Blackberry";if(kn(e))return"Webos";if(yn(e))return"Safari";if((e.includes("chrome/")||wn(e))&&!e.includes("edge/"))return"Chrome";if(Rn(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Tn(n=g()){return/firefox\//i.test(n)}function yn(n=g()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wn(n=g()){return/crios\//i.test(n)}function vn(n=g()){return/iemobile/i.test(n)}function Rn(n=g()){return/android/i.test(n)}function An(n=g()){return/blackberry/i.test(n)}function kn(n=g()){return/webos/i.test(n)}function Rt(n=g()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ci(n=g()){return Rt(n)&&!!window.navigator?.standalone}function ui(){return Mt()&&document.documentMode===10}function Sn(n=g()){return Rt(n)||Rn(n)||kn(n)||An(n)||/windows phone/i.test(n)||vn(n)}function Pn(n,e=[]){let t;switch(n){case"Browser":t=Bt(g());break;case"Worker":t=`${Bt(g())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${X}/${i}`}var lt=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=s=>new Promise((a,o)=>{try{let c=e(s);a(c)}catch(c){o(c)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}};async function li(n,e={}){return m(n,"GET","/v2/passwordPolicy",p(n,e))}var di=6,dt=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??di,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var ht=class{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=N(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await V.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ce(this,{idToken:e}),i=await I._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(R(this.app)){let s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),i=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=this.redirectUser?._redirectEventId,a=i?._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===a)&&o?.user&&(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return l(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await be(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(R(this.app))return Promise.reject(H(this));let t=e?D(e):null;return t&&l(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&l(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return R(this.app)?Promise.reject(H(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return R(this.app)?Promise.reject(H(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(N(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await li(this),t=new dt(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _e("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await oi(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&N(e)||this._popupRedirectResolver;l(t,this,"argument-error"),this.redirectPersistenceManager=await V.create(this,[N(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(l(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let c=e.addObserver(t,i,r);return()=>{a=!0,c()}}else{let c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return l(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);let i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(R(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Yn(`Error while retrieving App Check token: ${e.error}`),e?.token}};function ie(n){return D(n)}var De=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ft(t=>this.observer=t)}get next(){return l(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Ke={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hi(n){Ke=n}function Nn(n){return Ke.loadJS(n)}function fi(){return Ke.recaptchaEnterpriseScript}function pi(){return Ke.gapiScript}function Cn(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var ft=class{constructor(){this.enterprise=new pt}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},pt=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var mi="recaptcha-enterprise",ue="NO_RECAPTCHA",Yt="onFirebaseAuthREInstanceReady",_=class{constructor(e){this.type=mi,this.auth=ie(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{gn(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{let u=new Ne(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function r(s,a,o){let c=window.grecaptcha;jt(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(ue)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ft().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{i(this.auth).then(async o=>{if(!t&&jt(window.grecaptcha)&&_.scriptInjectionDeferred)await _.scriptInjectionDeferred.promise,r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fi();c.length!==0&&(c+=o+`&onload=${Yt}`),_.scriptInjectionDeferred=new bt,window[Yt]=()=>{_.scriptInjectionDeferred?.resolve()},Nn(c).then(()=>_.scriptInjectionDeferred?.promise).then(()=>{r(o,s,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}};_.scriptInjectionDeferred=null;async function ae(n,e,t,i=!1,r=!1){let s=new _(n),a;if(r)a=ue;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){let c=o.phoneEnrollmentInfo.phoneNumber,u=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){let c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return i?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function le(n,e,t,i,r){if(r==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await ae(n,e,t,t==="getOobCode");return i(n,s)}else return i(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await ae(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(s)});else if(r==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let s=await ae(n,e,t);return i(n,s).catch(async a=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let o=await ae(n,e,t,!1,!0);return i(n,o)}return Promise.reject(a)})}else{let s=await ae(n,e,t,!1,!0);return i(n,s)}else return Promise.reject(r+" provider is not supported.")}async function gi(n){let e=ie(n),t=await gn(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Ne(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new _(e).verify()}function bn(n,e){let t=Ze(n,"auth");if(t.isInitialized()){let r=t.getImmediate(),s=t.getOptions();if(Ee(s,e??{}))return r;v(r,"already-initialized")}return t.initialize({options:e})}function Ii(n,e){let t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(N);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function On(n,e,t){let i=ie(n);l(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");let r=!!t?.disableWarnings,s=Dn(e),{host:a,port:o}=_i(e),c=o===null?"":`:${o}`,u={url:`${s}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){l(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),l(Ee(u,i.config.emulator)&&Ee(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Te(a)?Wt(`${s}//${a}${c}`):r||Ei()}function Dn(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _i(n){let e=Dn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let s=r[1];return{host:s,port:Jt(i.substr(s.length+1))}}else{let[s,a]=i.split(":");return{host:s,port:Jt(a)}}}function Jt(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Ei(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var z=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}};async function Ti(n,e){return m(n,"POST","/v1/accounts:signUp",e)}async function yi(n,e){return $(n,"POST","/v1/accounts:signInWithPassword",p(n,e))}async function wi(n,e){return $(n,"POST","/v1/accounts:signInWithEmailLink",p(n,e))}async function vi(n,e){return $(n,"POST","/v1/accounts:signInWithEmailLink",p(n,e))}var F=class extends z{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new F(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new F(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return le(e,t,"signInWithPassword",yi,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wi(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return le(e,i,"signUpPassword",Ti,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return vi(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Q(n,e){return $(n,"POST","/v1/accounts:signInWithIdp",p(n,e))}var Ri="http://localhost",P=class extends z{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new P(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=t;if(!i||!r)return null;let a=new P(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Q(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,Q(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Q(e,t)}buildRequest(){let e={requestUri:Ri,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=B(t)}return e}};async function Xt(n,e){return m(n,"POST","/v1/accounts:sendVerificationCode",p(n,e))}async function Ai(n,e){return $(n,"POST","/v1/accounts:signInWithPhoneNumber",p(n,e))}async function ki(n,e){let t=await $(n,"POST","/v1/accounts:signInWithPhoneNumber",p(n,e));if(t.temporaryProof)throw oe(n,"account-exists-with-different-credential",t);return t}var Si={USER_NOT_FOUND:"user-not-found"};async function Pi(n,e){let t={...e,operation:"REAUTH"};return $(n,"POST","/v1/accounts:signInWithPhoneNumber",p(n,t),Si)}var C=class extends z{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new C({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new C({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ai(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ki(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Pi(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new C({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}};function Ni(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ci(n){let e=Y(J(n)).link,t=e?Y(J(e)).deep_link_id:null,i=Y(J(n)).deep_link_id;return(i?Y(J(i)).link:null)||i||t||e||n}var Z=class{constructor(e){let t=Y(J(e)),i=t.apiKey??null,r=t.oobCode??null,s=Ni(t.mode??null);l(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){let t=Ci(e);try{return new Z(t)}catch{return null}}};var W=class{constructor(){this.providerId=W.PROVIDER_ID}static credential(e,t){return F._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=Z.parseLink(t);return l(i,"argument-error"),F._fromEmailAndCode(e,i.code,i.tenantId)}};W.PROVIDER_ID="password";W.EMAIL_PASSWORD_SIGN_IN_METHOD="password";W.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Le=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var G=class extends Le{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var E=class extends G{constructor(){super("facebook.com")}static credential(e){return P._fromParams({providerId:E.PROVIDER_ID,signInMethod:E.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return E.credentialFromTaggedObject(e)}static credentialFromError(e){return E.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return E.credential(e.oauthAccessToken)}catch{return null}}};E.FACEBOOK_SIGN_IN_METHOD="facebook.com";E.PROVIDER_ID="facebook.com";var T=class extends G{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return P._fromParams({providerId:T.PROVIDER_ID,signInMethod:T.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return T.credentialFromTaggedObject(e)}static credentialFromError(e){return T.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return T.credential(t,i)}catch{return null}}};T.GOOGLE_SIGN_IN_METHOD="google.com";T.PROVIDER_ID="google.com";var y=class extends G{constructor(){super("github.com")}static credential(e){return P._fromParams({providerId:y.PROVIDER_ID,signInMethod:y.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return y.credentialFromTaggedObject(e)}static credentialFromError(e){return y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return y.credential(e.oauthAccessToken)}catch{return null}}};y.GITHUB_SIGN_IN_METHOD="github.com";y.PROVIDER_ID="github.com";var w=class extends G{constructor(){super("twitter.com")}static credential(e,t){return P._fromParams({providerId:w.PROVIDER_ID,signInMethod:w.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return w.credentialFromTaggedObject(e)}static credentialFromError(e){return w.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return w.credential(t,i)}catch{return null}}};w.TWITTER_SIGN_IN_METHOD="twitter.com";w.PROVIDER_ID="twitter.com";var x=class{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){let s=await I._fromIdTokenResponse(e,i,r),a=Qt(i);return new x({user:s,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let r=Qt(i);return new x({user:e,providerId:r,_tokenResponse:i,operationType:t})}};function Qt(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var ee=class extends Ie{constructor(e,t,i,r){super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new ee(e,t,i,r)}};function Ln(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ee._fromErrorAndOperation(n,s,e,i):s})}async function bi(n,e,t=!1){let i=await de(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return x._forOperation(n,"link",i)}async function Oi(n,e,t=!1){let{auth:i}=n;if(R(i.app))return Promise.reject(H(i));let r="reauthenticate";try{let s=await de(n,Ln(i,r,e,n),t);l(s.idToken,i,"internal-error");let a=vt(s.idToken);l(a,i,"internal-error");let{sub:o}=a;return l(n.uid===o,i,"user-mismatch"),x._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&v(i,"user-mismatch"),s}}async function Di(n,e,t=!1){if(R(n.app))return Promise.reject(H(n));let i="signIn",r=await Ln(n,i,e),s=await x._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function Un(n,e,t,i){return D(n).onIdTokenChanged(e,t,i)}function Mn(n,e,t){return D(n).beforeAuthStateChanged(e,t)}function Zt(n,e){return m(n,"POST","/v2/accounts/mfaEnrollment:start",p(n,e))}function Li(n,e){return m(n,"POST","/v2/accounts/mfaEnrollment:finalize",p(n,e))}function Ui(n,e){return m(n,"POST","/v2/accounts/mfaEnrollment:start",p(n,e))}function Mi(n,e){return m(n,"POST","/v2/accounts/mfaEnrollment:finalize",p(n,e))}var Ue="__sak";var Me=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ue,"1"),this.storage.removeItem(Ue),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Vi=1e3,Fi=10,Ve=class extends Me{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}let i=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);ui()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fi):r()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Vi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ve.type="LOCAL";var Vn=Ve;var Wi=1e3;function nt(n){let e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return document.cookie.match(t)?.[1]??null}function it(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var mt=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=it(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:nt(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let i=it(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let i=it(e);if(window.cookieStore){let o=u=>{let d=u.changed.find(f=>f.name===i);d&&t(d.value),u.deleted.find(f=>f.name===i)&&t(null)},c=()=>window.cookieStore.removeEventListener("change",o);return this.listenerUnsubscribes.set(t,c),window.cookieStore.addEventListener("change",o)}let r=nt(i),s=setInterval(()=>{let o=nt(i);o!==r&&(t(o),r=o)},Wi),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}};mt.type="COOKIE";var Fe=class extends Me{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Fe.type="SESSION";var At=Fe;function xi(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var te=class{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;let i=new te(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:i,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});let o=Array.from(a).map(async u=>u(t.origin,s)),c=await xi(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};te.receivers=[];function kt(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}var gt=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{let u=kt("",20);r.port1.start();let d=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(h){let f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(f.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function S(){return window}function Hi(n){S().location.href=n}function Fn(){return typeof S().WorkerGlobalScope<"u"&&typeof S().importScripts=="function"}async function qi(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zi(){return navigator?.serviceWorker?.controller||null}function Gi(){return Fn()?self:null}var Wn="firebaseLocalStorageDb",ji=1,We="firebaseLocalStorage",xn="fbase_key",j=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function $e(n,e){return n.transaction([We],e?"readwrite":"readonly").objectStore(We)}function Ki(){let n=indexedDB.deleteDatabase(Wn);return new j(n).toPromise()}function Hn(){let n=indexedDB.open(Wn,ji);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let i=n.result;try{i.createObjectStore(We,{keyPath:xn})}catch(r){t(r)}}),n.addEventListener("success",async()=>{let i=n.result;i.objectStoreNames.contains(We)?e(i):(i.close(),await Ki(),e(await Hn()))})})}async function en(n,e,t){let i=$e(n,!0).put({[xn]:e,value:t});return new j(i).toPromise()}async function $i(n,e){let t=$e(n,!1).get(e),i=await new j(t).toPromise();return i===void 0?null:i.value}function tn(n,e){let t=$e(n,!0).delete(e);return new j(t).toPromise()}var Bi=800,Yi=3,xe=class{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Hn(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(i){if(t++>Yi)throw i;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=te._getInstance(Gi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qi(),!this.activeServiceWorker)return;this.sender=new gt(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await en(e,Ue,"1"),await tn(e,Ue)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>en(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(i=>$i(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(r=>{let s=$e(r,!1).getAll();return new j(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],i=new Set;if(e.length!==0)for(let{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(let r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};xe.type="LOCAL";var qn=xe;function nn(n,e){return m(n,"POST","/v2/accounts/mfaSignIn:start",p(n,e))}function Ji(n,e){return m(n,"POST","/v2/accounts/mfaSignIn:finalize",p(n,e))}function Xi(n,e){return m(n,"POST","/v2/accounts/mfaSignIn:finalize",p(n,e))}var Zr=Cn("rcb"),es=new q(3e4,6e4);var Re="recaptcha";async function Qi(n,e,t){if(!n._getRecaptchaConfig())try{await gi(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let r=i.session;if("phoneNumber"in i){l(r.type==="enroll",n,"internal-error");let s={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await le(n,s,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===ue){l(t?.type===Re,u,"argument-error");let h=await rt(u,d,t);return Zt(u,h)}return Zt(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{l(r.type==="signin",n,"internal-error");let s=i.multiFactorHint?.uid||i.multiFactorUid;l(s,n,"missing-multi-factor-info");let a={mfaPendingCredential:r.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await le(n,a,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===ue){l(t?.type===Re,d,"argument-error");let f=await rt(d,h,t);return nn(d,f)}return nn(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{let r={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await le(n,r,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===ue){l(t?.type===Re,c,"argument-error");let d=await rt(c,u,t);return Xt(c,d)}return Xt(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{t?._reset()}}async function rt(n,e,t){l(t.type===Re,n,"argument-error");let i=await t.verify();l(typeof i=="string",n,"argument-error");let r={...e};if("phoneEnrollmentInfo"in r){let s=r.phoneEnrollmentInfo.phoneNumber,a=r.phoneEnrollmentInfo.captchaResponse,o=r.phoneEnrollmentInfo.clientType,c=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:a,clientType:o,recaptchaVersion:c}}),r}else if("phoneSignInInfo"in r){let s=r.phoneSignInInfo.captchaResponse,a=r.phoneSignInInfo.clientType,o=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:a,recaptchaVersion:o}}),r}else return Object.assign(r,{recaptchaToken:i}),r}var b=class{constructor(e){this.providerId=b.PROVIDER_ID,this.auth=ie(e)}verifyPhoneNumber(e,t){return Qi(this.auth,e,D(t))}static credential(e,t){return C._fromVerification(e,t)}static credentialFromResult(e){let t=e;return b.credentialFromTaggedObject(t)}static credentialFromError(e){return b.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?C._fromTokenResponse(t,i):null}};b.PROVIDER_ID="phone";b.PHONE_SIGN_IN_METHOD="phone";function Zi(n,e){return e?N(e):(l(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var fe=class extends z{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Q(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Q(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Q(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function er(n){return Di(n.auth,new fe(n),n.bypassAuthState)}function tr(n){let{auth:e,user:t}=n;return l(t,e,"internal-error"),Oi(t,new fe(n),n.bypassAuthState)}async function nr(n){let{auth:e,user:t}=n;return l(t,e,"internal-error"),bi(t,new fe(n),n.bypassAuthState)}var He=class{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}let c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return er;case"linkViaPopup":case"linkViaRedirect":return nr;case"reauthViaPopup":case"reauthViaRedirect":return tr;default:v(this.auth,"internal-error")}}resolve(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var ir=new q(2e3,1e4);var U=class extends He{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,U.currentPopupAction&&U.currentPopupAction.cancel(),U.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return l(e,this.auth,"internal-error"),e}async onExecution(){O(this.filter.length===1,"Popup operations only handle one event");let e=kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(k(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(k(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,U.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(k(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ir.get())};e()}};U.currentPopupAction=null;var rr="pendingRedirect",Ae=new Map,It=class extends He{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ae.get(this.auth._key());if(!e){try{let i=await sr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ae.set(this.auth._key(),e)}return this.bypassAuthState||Ae.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function sr(n,e){let t=cr(e),i=or(n);if(!await i._isAvailable())return!1;let r=await i._get(t)==="true";return await i._remove(t),r}function ar(n,e){Ae.set(n._key(),e)}function or(n){return N(n._redirectPersistence)}function cr(n){return ve(rr,n.config.apiKey,n.name)}async function ur(n,e,t=!1){if(R(n.app))return Promise.reject(H(n));let i=ie(n),r=Zi(i,e),a=await new It(i,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}var lr=10*60*1e3,_t=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zn(e)){let i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(k(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lr&&this.cachedEventUids.clear(),this.cachedEventUids.has(rn(e))}saveEventToCache(e){this.cachedEventUids.add(rn(e)),this.lastProcessedEventTime=Date.now()}};function rn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zn({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function dr(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(n);default:return!1}}async function hr(n,e={}){return m(n,"GET","/v1/projects",e)}var fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function mr(n){if(n.config.emulator)return;let{authorizedDomains:e}=await hr(n);for(let t of e)try{if(gr(t))return}catch{}v(n,"unauthorized-domain")}function gr(n){let e=at(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!pr.test(t))return!1;if(fr.test(n))return i===n;let r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}var Ir=new q(3e4,6e4);function sn(){let n=S().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _r(n){return new Promise((e,t)=>{function i(){sn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sn(),t(k(n,"network-request-failed"))},timeout:Ir.get()})}if(S().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(S().gapi?.load)i();else{let r=Cn("iframefcb");return S()[r]=()=>{gapi.load?i():t(k(n,"network-request-failed"))},Nn(`${pi()}?onload=${r}`).catch(s=>t(s))}}).catch(e=>{throw ke=null,e})}var ke=null;function Er(n){return ke=ke||_r(n),ke}var Tr=new q(5e3,15e3),yr="__/auth/iframe",wr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ar(n){let e=n.config;l(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?wt(e,wr):`https://${n.config.authDomain}/${yr}`,i={apiKey:e.apiKey,appName:n.name,v:X},r=Rr.get(n.config.apiHost);r&&(i.eid=r);let s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${B(i).slice(1)}`}async function kr(n){let e=await Er(n),t=S().gapi;return l(t,n,"internal-error"),e.open({where:document.body,url:Ar(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});let a=k(n,"network-request-failed"),o=S().setTimeout(()=>{s(a)},Tr.get());function c(){S().clearTimeout(o),r(i)}i.ping(c).then(c,()=>{s(a)})}))}var Sr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pr=500,Nr=600,Cr="_blank",br="http://localhost",qe=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Or(n,e,t,i=Pr,r=Nr){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString(),o="",c={...Sr,width:i.toString(),height:r.toString(),top:s,left:a},u=g().toLowerCase();t&&(o=wn(u)?Cr:t),Tn(u)&&(e=e||br,c.scrollbars="yes");let d=Object.entries(c).reduce((f,[ge,re])=>`${f}${ge}=${re},`,"");if(ci(u)&&o!=="_self")return Dr(e||"",o),new qe(null);let h=window.open(e||"",o,d);l(h,n,"popup-blocked");try{h.focus()}catch{}return new qe(h)}function Dr(n,e){let t=document.createElement("a");t.href=n,t.target=e;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}var Lr="__/auth/handler",Ur="emulator/auth/handler",Mr=encodeURIComponent("fac");async function an(n,e,t,i,r,s){l(n.config.authDomain,n,"auth-domain-config-required"),l(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:X,eventId:r};if(e instanceof Le){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Vt(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[d,h]of Object.entries(s||{}))a[d]=h}if(e instanceof G){let d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);let o=a;for(let d of Object.keys(o))o[d]===void 0&&delete o[d];let c=await n._getAppCheckToken(),u=c?`#${Mr}=${encodeURIComponent(c)}`:"";return`${Vr(n)}?${B(o).slice(1)}${u}`}function Vr({config:n}){return n.emulator?wt(n,Ur):`https://${n.authDomain}/${Lr}`}var st="webStorageSupport",Et=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=At,this._completeRedirectFn=ur,this._overrideRedirectResult=ar}async _openPopup(e,t,i,r){O(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let s=await an(e,t,i,at(),r);return Or(e,s,kt())}async _openRedirect(e,t,i,r){await this._originValidation(e);let s=await an(e,t,i,at(),r);return Hi(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(O(s,"If manager is not set, promise should be"),s)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await kr(e),i=new _t(e);return t.register("authEvent",r=>(l(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(st,{type:st},r=>{let s=r?.[0]?.[st];s!==void 0&&t(!!s),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sn()||yn()||Rt()}},Gn=Et,ze=class{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}},pe=class extends ze{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pe(e)}_finalizeEnroll(e,t,i){return Li(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ji(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Ge=class{constructor(){}static assertion(e){return pe._fromCredential(e)}};Ge.FACTOR_ID="phone";var je=class{static assertionForEnrollment(e,t){return K._fromSecret(e,t)}static assertionForSignIn(e,t){return K._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;l(typeof t.user?.auth<"u","internal-error");let i=await Ui(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ne._fromStartTotpMfaEnrollmentResponse(i,t.user.auth)}};je.FACTOR_ID="totp";var K=class extends ze{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new K(t,void 0,e)}static _fromEnrollmentId(e,t){return new K(t,e)}async _finalizeEnroll(e,t,i){return l(typeof this.secret<"u",e,"argument-error"),Mi(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){l(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let i={verificationCode:this.otp};return Xi(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}},ne=class{constructor(e,t,i,r,s,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ne(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let i=!1;return(ye(e)||ye(t))&&(i=!0),i&&(ye(e)&&(e=this.auth.currentUser?.email||"unknownuser"),ye(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ye(n){return typeof n>"u"||n?.length===0}var on="@firebase/auth",cn="1.13.3";var Tt=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){l(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Fr(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wr(n){Qe(new Je("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;l(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});let c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pn(n)},u=new ht(i,r,s,c);return Ii(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qe(new Je("auth-internal",e=>{let t=ie(e.getProvider("auth").getImmediate());return(i=>new Tt(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(on,cn,Fr(n)),se(on,cn,"esm2020")}var xr=5*60,Hr=Ye("authIdTokenMaxAge")||xr,un=null,qr=n=>async e=>{let t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Hr)return;let r=t?.token;un!==r&&(un=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function St(n=qt()){let e=Ze(n,"auth");if(e.isInitialized())return e.getImmediate();let t=bn(n,{popupRedirectResolver:Gn,persistence:[qn,Vn,At]}),i=Ye("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(i,location.origin);if(location.origin===s.origin){let a=qr(s.toString());Mn(t,a,()=>a(t.currentUser)),Un(t,o=>a(o))}}let r=Ct("auth");return r&&On(t,`http://${r}`),t}function zr(){return document.getElementsByTagName("head")?.[0]??document}hi({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{let s=k("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",zr().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wr("Browser");var me=null,Gr=null,jr=null;function Ia(n){typeof window>"u"||me||n.apiKey&&(me=et().length>0?et()[0]:Ht(n),Gr=St(me),jr=zt(me))}var _a=me;export{me as a,Gr as b,jr as c,Ia as d,_a as e};
/*! Bundled license information:

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-d90d2ee5.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
