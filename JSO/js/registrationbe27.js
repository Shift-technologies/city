var alphanum="";var upperCase=/([A-Z])/,lowerCase=/([a-z])/;var acctPattern=/[^0-9]+/;var acctMinLength=6;var acctMaxLength=20;var unamePattern=/[^(0-9a-zA-Z@_.\-)]/;var unamePattern1=/\)/;var unamePattern2=/\(/;var unameMinLength=3;var unameMaxLength=50;var polishchars=" ";var specialchars=" ";var pwdPattern0=/^.*[aA][aA][aA].*$|^.*[bB][bB][bB].*$|^.*[cC][cC][cC].*$|^.*[dD][dD][dD].*$|^.*[eE][eE][eE].*$|^.*[fF][fF][fF].*$|^.*[gG][gG][gG].*$|^.*[hH][hH][hH].*$|^.*[iI][iI][iI].*$|^.*[jJ][jJ][jJ].*$|^.*[kK][kK][kK].*$|^.*[lL][lL][lL].*$|^.*[mM][mM][mM].*$|^.*[nN][nN][nN].*$|^.*[oO][oO][oO].*$|^.*[pP][pP][pP].*$|^.*[qQ][qQ][qQ].*$|^.*[rR][rR][rR].*$|^.*[sS][sS][sS].*$|^.*[tT][tT][tT].*$|^.*[uU][uU][uU].*$|^.*[vV][vV][vV].*$|^.*[wW][wW][wW].*$|^.*[xX][xX][xX].*$|^.*[yY][yY][yY].*$|^.*[zZ][zZ][zZ].*$|^.*(.)\1\1.*$/;var pwdPattern1=/([A-Za-z])/;var pwdPattern2=/([0-9])/;var pwdMinLength=6;var pwdMaxLength=50;var clientSidePwdValidation=false,pwdCriteria={pwdLen:true,pwdLetter:true,pwdNumber:true,pwdUpper:true,pwdLower:true,pwdPolishChars:true,pwdSpecialChars:true,pwdIdenticalChars:true,pwdSequenceD:true,pwdSequenceA:true,pwdUsername:true,pwdConfirm:true};var emailRequired=false;var emailPattern=/^[^\s^@]+@[^\s^\.]+(\.[^\s^\.]+)+$/;var minSecretLength=1,maxSecretLength=50;var cvv2Pattern=/[^0-9]+/,cvv2MinLength=2,cvv2MaxLength=3;var creditLimitMinAmt=1,creditLimitMaxAmt=15;var expDateMinLength=4,expDateMaxLength=10;var dobMinLength=8,dobMaxLength=10,dobPattern=/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;var postalCodeMinLength=3,postalCodeMaxLength=5;var homeNoMinLength=4,homeNoMaxLength=4;var officeNoMinLength=4,officeNoMaxLength=4;var billToOptMinLength=1,billToOptMaxLength=1;var paymentOptMinLength=1,paymentOptMaxLength=1;var mmnMinLength=2,mmnMaxLength=100;var CURRENCY_MAX_LENGTH=15;var NUM_OF_SEQ_CHARS=3;var CONFIRM_ANSWER_LABEL_LAYER="CCA",CONFIRM_ANSWER_LAYER="challengeAnswersCfm";var tempCA,tempCCA;var confirmCAshown=false;var goodQIDs="";var validateCAOnErrScreen=false;var normalizationCharSet="";var cvv2Errors=new Array(),creditLimitErrors=new Array(),dateOfBirthErrors=new Array(),expiredateErrors=new Array(),homePhoneNoErrors=new Array(),primesecIndErrors=new Array(),acctNumberErrors=new Array(),nationalIDErrors=new Array(),residentCardErrors=new Array(),cfiErrors=new Array(),passportErrors=new Array(),dninifErrors=new Array(),icNumberErrors=new Array(),memberSinceErrors=new Array(),mobilePhoneNumberErrors=new Array(),cardNumberErrors=new Array();var signonError=false;var displaySignonError=false;var allownextpopup=false;var pwdCaseSensitive=false;var toolTipErrorMsg=null;function captchaValidation(a){if(isWhitespace(a.value)||a.value.length==0){toolTipErrorMsg=gpPlsMyCitiCap;return false}return true}function cinValidation(cin,validate){if(isWhitespace(cin.value)||cin.value.length==0){toolTipErrorMsg=cinEmpty;return false}if(validate==null||validate==true){eval("logonType="+cin.name+RANGE+currentLogonIDType+"[0]");eval("format="+cin.name+RANGE+currentLogonIDType+"[1]");var addlChars=typeof addlCharsAllowed!="undefined"?addlCharsAllowed[logonType]:null;var formatError=false;if(format==ALPHA_TYPE){if(!validateAlpha(cin.value,addlChars)){formatError=true}}else{if(format==ALPHANUMERIC_TYPE){if(!validateAlphaNumeric(cin.value,addlChars)){formatError=true}}else{if(format==NUMERIC_TYPE){if(!validateNumeric(cin.value,addlChars)){formatError=true}}}}if(!formatError){if(whitespace.indexOf(cin.value.charAt(0))!=-1||whitespace.indexOf(cin.value.charAt(cin.value.length-1))!=-1){formatError=true}}if(formatError){toolTipErrorMsg=cinNotCorrect;return false}if(cin.value!=""&&(cin.value.length<cinMinLength||cin.value.length>cinMaxLength)){var errorStr="";if(cinMinLength==cinMaxLength){errorStr=gpCinLen.replace(/\[logonID\]/,logonIDTypeName);errorStr=errorStr.replace(/\[logonID_length\]/,cinMinLength)}else{eval("logonIDTypeName=logonIDTypeName"+currentLogonIDType);errorStr=gpCinLenRange.replace(/\[logonID\]/,logonIDTypeName);errorStr=errorStr.replace(/\[logonID_minLength\]/,cinMinLength);errorStr=errorStr.replace(/\[logonID_maxLength\]/,cinMaxLength)}toolTipErrorMsg=errorStr;return false}}return true}function pinValidation(pin,validate){if(isWhitespace(pin.value)){toolTipErrorMsg=pinEmpty;return false}if(validate==null||validate==true){if(pin.value.length<pinMinLength||pin.value.length>pinMaxLen){var msg=pinMinLength==pinMaxLen?gpPinLen.replace(/\[logonPwd_length\]/,pinMinLength):gpPinLenRange.replace(/\[logonPwd_minLength\]/,pinMinLength).replace(/\[logonPwd_maxLength\]/,pinMaxLen);toolTipErrorMsg=msg;return false}eval("logonType="+pin.name+RANGE+currentLogonIDType+"[0]");eval("format="+pin.name+RANGE+currentLogonIDType+"[1]");var addlChars=addlCharsAllowed[pin.name],format,valid=true,myVal=pin.value;if(format==ALPHA_TYPE){if(!validateAlpha(myVal,addlChars)){valid=false}}else{if(format==ALPHANUMERIC_TYPE){if(!validateAlphaNumeric(myVal,addlChars)){valid=false}}else{if(format==NUMERIC_TYPE){if(!validateNumeric(myVal,addlChars)){valid=false}}}}if(!valid){toolTipErrorMsg=pin0to9digit;return false}}return true}function cvv2Validation(c,b){if(isWhitespace(c.value)){toolTipErrorMsg=cvv2Empty;return false}if(b==null||b==true){if(cvv2Pattern.test(c.value)){toolTipErrorMsg=cvv2NotValid;return false}if(c.value!=""&&(c.value.length<cvv2MinLength||c.value.length>cvv2MaxLength)){var a="";if(cvv2MinLength==cvv2MaxLength){a=gpCvv2Len.replace(/\[cvv2_length\]/,cvv2MinLength)}else{a=gpCvv2LenRange.replace(/\[cvv2_minLength\]/,cvv2MinLength);a=a.replace(/\[cvv2_maxLength\]/,cvv2MaxLength)}toolTipErrorMsg=a;return false}}return true}function creditLimitValidation(c,a){if(isWhitespace(c.value)){alert(creditLimitEmpty);c.focus();return false}if(a==null||a==true){var b=new String(c.value);if(b.length>CURRENCY_MAX_LENGTH){alert(creditLimitTooLong);c.focus();return(false)}}return true}function accountNumberValidation(acct,validate){if(isWhitespace(acct.value)){toolTipErrorMsg=acctNumberEmpty;acct.value="";return false}if(validate==null||validate==true){eval("logonType="+acct.name+RANGE+currentLogonIDType+"[0]");eval("format="+acct.name+RANGE+currentLogonIDType+"[1]");var addlChars=addlCharsAllowed[acct.name],format,valid=true,myVal=acct.value;if(format==ALPHA_TYPE){if(!validateAlpha(myVal,addlChars)){valid=false}}else{if(format==ALPHANUMERIC_TYPE){if(!validateAlphaNumeric(myVal,addlChars)){valid=false}}else{if(format==NUMERIC_TYPE){if(!validateNumeric(myVal,addlChars)){valid=false}}}}if(!valid){toolTipErrorMsg=acctNumberNotCorrect;return false}}return true}function usernameRegValidation(b,a){if(b!=null&&trim(b.value).length==0){toolTipErrorMsg=usernameEmpty;b.value="";return false}if(b.value.length<unameMinLength||b.value.length>unameMaxLength){toolTipErrorMsg=usernameOutOfRange;return false}if(unamePattern.test(b.value)||unamePattern1.test(b.value)||unamePattern2.test(b.value)){toolTipErrorMsg=usernameInvalid;return false}if(a&&((trim(a.value)).toLowerCase()==(trim(b.value)).toLowerCase())){toolTipErrorMsg=usernameSameAsPwd;return false}return true}function usernameRegValidationInline(b,a){if(b!=null&&trim(b.value).length==0){errorMessage=usernameEmpty;b.value="";b.focus();return false}if(b.value.length<unameMinLength||b.value.length>unameMaxLength){errorMessage=usernameOutOfRange;b.focus();return false}if(unamePattern.test(b.value)||unamePattern1.test(b.value)||unamePattern2.test(b.value)){errorMessage=usernameInvalid;b.focus();return false}if(a&&((trim(a.value)).toLowerCase()==(trim(b.value)).toLowerCase())){errorMessage=usernameSameAsPwd;
b.focus();return false}return true}function checkCurrentPwd(b,a){if(b.value==a.value){toolTipErrorMsg=newPwdNotConformant;return false}return true}function checkPwd(d,b){var a=null,c=null;if(pwdCaseSensitive==false){a=d.value.toUpperCase();c=b.value.toUpperCase()}else{a=d.value;c=b.value}if(a!=c){toolTipErrorMsg=pwdEntries;return false}return true}function checkCurrentPwdInline(b,a){if(b.value==a.value){errorMessage=newPwdNotConformant;a.focus();return false}return true}function checkPwdInline(d,b){var a=null,c=null;if(pwdCaseSensitive==false){a=d.value.toUpperCase();c=b.value.toUpperCase()}else{a=d.value;c=b.value}if(a!=c){errorMessage=pwdEntries;b.focus();return false}return true}function checkPin(b,a){if(b.value!=a.value){alert(pinEntries);a.focus();return false}return true}function passwordRegValidation(a,b){if(a.value.length==0||trim(a.value)==""){toolTipErrorMsg=pwdEmpty;return false}if(b&&(a.value).toLowerCase()==(trim(b.value)).toLowerCase()){toolTipErrorMsg=pwdUnameError;return false}if(a.value.length<pwdMinLength||a.value.length>pwdMaxLength){toolTipErrorMsg=pwdOutOfRange;return false}if(!(pwdPattern1.test(a.value)&&pwdPattern2.test(a.value))){toolTipErrorMsg=pwdInvalid;return false}if(pwdPattern0.test(a.value)){toolTipErrorMsg=pwdIdenticalChars;return false}return true}function passwordRegValidationInline(a,b){if(a.value.length==0||trim(a.value)==""){errorMessage=pwdEmpty;a.focus();return false}if(b&&(a.value).toLowerCase()==(trim(b.value)).toLowerCase()){errorMessage=pwdUnameError;a.focus();return false}if(a.value.length<pwdMinLength||a.value.length>pwdMaxLength){errorMessage=pwdOutOfRange;a.focus();return false}if(!(pwdPattern1.test(a.value)&&pwdPattern2.test(a.value))){errorMessage=pwdInvalid;a.focus();return false}if(pwdPattern0.test(a.value)){errorMessage=pwdIdenticalChars;a.focus();return false}if(!pwdMetCriteria()){errorMessage=pwdCriteriaNotMet;a.focus();return false}return true}function currentPasswordValidation(a,b){if(a.value.length==0){toolTipErrorMsg=pwdEmpty;return false}if(a.value.length<pwdMinLength){toolTipErrorMsg=gpMyCitiPassCond;return false}if(b==null||b==true){if(a.value.length<pwdMinLength||a.value.length>pwdMaxLength){toolTipErrorMsg=pwdOutOfRange;return false}}if(!pwdMetCriteria()){toolTipErrorMsg=pwdCriteriaNotMet;return false}return true}function currentPasswordValidationInline(a,b){if(a.value.length==0){errorMessage=pwdEmpty;a.focus();return false}if(b==null||b==true){if(a.value.length<pwdMinLength||a.value.length>pwdMaxLength){errorMessage=pwdOutOfRange;a.focus();return false}}if(!(pwdPattern1.test(a.value)&&pwdPattern2.test(a.value))){errorMessage=pwdInvalid;a.focus();return false}if(pwdPattern0.test(a.value)){errorMessage=pwdIdenticalChars;a.focus();return false}if(!pwdMetCriteria()){errorMessage=pwdCriteriaNotMet;a.focus();return false}return true}function validateEmail(b){var a=null;if(b.value.length!=0){a=(b.value).toLowerCase()}if(emailRequired&&b.value.length==0){alert(emailEmpty);b.focus();return false}if(b.value.length!=0){if(a.length!=0&&!emailPattern.test(a)){alert(emailInvalid);b.focus();return false}}return true}function pwdMetCriteria(){for(var a in pwdCriteria){if(pwdCriteria[a]==false){return false}}return true}function resetPwdCriteria(){for(var a in pwdCriteria){pwdCriteria[a]=true}}function checkPwdOnline(pwd,pwdConfirm,username){resetPwdCriteria();var value=pwd.value;if(value==""||value.length==0){for(var word in pwdCriteria){try{if(word=="pwdLen"||word=="pwdLetter"||word=="pwdNumber"||word=="pwdUpper"||word=="pwdLower"){eval("document['"+word+"'].src = '"+imCrossMarkURL+"'")}else{eval("document['"+word+"'].src = '"+imCheckMarkURL+"'")}}catch(e){}}return}if(value.length>=pwdMinLength){document.pwdLen.src=imCheckMarkURL}else{document.pwdLen.src=imCrossMarkURL;pwdCriteria.pwdLen=false}if(pwdPattern2.test(value)){document.pwdNumber.src=imCheckMarkURL}else{document.pwdNumber.src=imCrossMarkURL;pwdCriteria.pwdNumber=false}if(upperCase.test(value)){document.pwdUpper.src=imCheckMarkURL}else{document.pwdUpper.src=imCrossMarkURL;pwdCriteria.pwdUpper=false}if(lowerCase.test(value)){document.pwdLower.src=imCheckMarkURL}else{document.pwdLower.src=imCrossMarkURL;pwdCriteria.pwdLower=false}if(pwdPattern0.test(value)){document.pwdIdenticalChars.src=imCrossMarkURL;pwdCriteria.pwdIdenticalChars=false}else{document.pwdIdenticalChars.src=imCheckMarkURL}if(!validSequence(value,"d")){document.pwdSequenceD.src=imCrossMarkURL;pwdCriteria.pwdSequenceD=false}else{document.pwdSequenceD.src=imCheckMarkURL}if(!validSequence(value,"a")){document.pwdSequenceA.src=imCrossMarkURL;pwdCriteria.pwdSequenceA=false}else{document.pwdSequenceA.src=imCheckMarkURL}if(username){if(username.value.length>0&&username.value==value){document.pwdUsername.src=imCrossMarkURL;pwdCriteria.pwdUsername=false}else{document.pwdUsername.src=imCheckMarkURL}}if(specialchars!=" "){var regexp=new RegExp(specialchars);if(regexp.test(value)){document.pwdSpecialChars.src=imCrossMarkURL;pwdCriteria.pwdSpecialChars=false}else{document.pwdSpecialChars.src=imCheckMarkURL}}else{pwdCriteria.pwdSpecialChars=true}if(polishchars!=" "){var regexpP=new RegExp(polishchars);if(regexpP.test(value)){document.pwdPolishChars.src=imCrossMarkURL;pwdCriteria.pwdPolishChars=false}else{document.pwdPolishChars.src=imCheckMarkURL}}else{pwdCriteria.pwdPolishChars=true}}function checkCfmPwdOnline(a,b){}var chr=new Array();for(var i=1;i<127;i++){chr[i]=unescape("%"+i.toString(16))}function alphaNumericToAscii(a,c){if(c=="d"){for(var b=48;b<=57;b++){if(chr[b]==a){return b}}}else{if(c=="a"){for(var b=65;b<=90;b++){if(chr[b]==a){return b}}for(var b=97;b<=122;b++){if(chr[b]==a){return b}}}}return -1}function validSequence(d,c){d=d.toLowerCase();if(NUM_OF_SEQ_CHARS>d.length){return true}for(var a=0;a<d.length;a++){if(alphaNumericToAscii(d.charAt(a),c)==-1){continue}if(a+NUM_OF_SEQ_CHARS>d.length){return true}var e=0,b=1;while((a+NUM_OF_SEQ_CHARS<=d.length)&&(e<NUM_OF_SEQ_CHARS-1)){if(alphaNumericToAscii(d.charAt(a+e),c)+1==alphaNumericToAscii(d.charAt(a+e+1),c)){b++}else{break}e++}if(b==NUM_OF_SEQ_CHARS){return false}}return true}function isSimilar(d,c){var b=d.toUpperCase();var a=c.toUpperCase();if(b==a){return true}else{return false}}function removeNCS(c){if(typeof c=="undefined"||c.length==0||typeof normalizationCharSet=="undefined"||normalizationCharSet.length==0){if(typeof c!="undefined"){return c.toUpperCase()}else{return c}}c=c.toUpperCase();var a="";for(var b=0;b<c.length;b++){if(normalizationCharSet.toUpperCase().indexOf(c.charAt(b))==-1){a+=c.charAt(b)}}return a}function checkAgreement(a){if(!a.checked){alert(agreementRequired);return false}return true}function setOption(){var myForm=currentForm;if(focusKey=="pin"){if(pinInputMethod<7){showPinPad(randomLoc,pinIdType);myForm.pin.value="";myForm.pin.readOnly="true"}else{if(pinInputMethod==8){var vkbFillElementSizeAllowed="vkbFillElementSize="+pinMaxLen;showVkb(pinIdName);eval(vkbFillElementSizeAllowed);myForm.pin.value="";myForm.pin.readOnly="true"}}}else{if(focusKey=="dateOfBirth"){if(dobInputMethod<7){showPinPad(randomLoc,dobIdType);myForm.dateOfBirth.value="";myForm.dateOfBirth.readOnly="true"}else{var vkbFillElementSizeAllowed="vkbFillElementSize="+dobMaxLength;showVkb(dobIdName);eval(vkbFillElementSizeAllowed);myForm.dateOfBirth.value="";myForm.dateOfBirth.readOnly="true"}}else{if(focusKey=="extraPin"){if(pinInputMethod<7){showPinPad(randomLoc,pinIdType);myForm.extraPin.value="";myForm.extraPin.readOnly="true"}else{var vkbFillElementSizeAllowed="vkbFillElementSize="+pinMaxLen;
showVkb(pinIdName);eval(vkbFillElementSizeAllowed);myForm.extraPin.value="";myForm.extraPin.readOnly="true"}}else{if(focusKey=="rePin"){if(pinInputMethod<7){showPinPad(randomLoc,pinIdType);myForm.rePin.value="";myForm.rePin.readOnly="true"}else{var vkbFillElementSizeAllowed="vkbFillElementSize="+pinMaxLen;showVkb(pinIdName);eval(vkbFillElementSizeAllowed);myForm.rePin.value="";myForm.rePin.readOnly="true"}}}}}}function selectedDropDown(d,b,e){var a=document.getElementById(d).getElementsByTagName("li").length;for(var c=0;c<a;c++){document.getElementById(d).getElementsByTagName("li")[c].style.display="block"}$('<a id="'+e+'"></a>').html('<a id="'+e+'">'+b.innerHTML+"</a>").replaceAll("#"+e);b.parentNode.style.display="none"}function updateLPCount(){}var ruleType_atLeast=1;var ruleType_cannotContain=2;jso_common_tooltip_validation=(function(){var d=null;var a=null;function c(e){d=e;generateCSValidation(d.formId,jso_common_tooltip_validation_do_check,"left")}function b(){var h=null;if(arguments.length>0){h=arguments[0]}for(var o in d.inputs){var n=d.inputs[o];$("#"+n.inputId).attr("errorMsgPosition",n.errorMsgPosition);if(h){if(d.inputs[o].inputId==h){try{q=n.checkFunction.apply(window,n.params);return q?null:toolTipErrorMsg}catch(l){}}}else{try{if(!n.checkFunction.apply(window,n.params)){validateFieldForToolTipDP4(n.inputId,toolTipErrorMsg);return false}}catch(l){}}}if(!h&&typeof validateRule!="undefined"){var p=validateRule.list;for(var o in p){try{var j=p[p.length-o-1];var m=j.fieldName;var k=j.phraseContentForLeft;if(!k){k=j.phraseContent}var g=new RegExp(j.ruleContent);var f=j.ruleType;var q=true;if(j.ruleContent.length==0||$("#"+m).size()==0||$("#"+m).closest("form").parent().css("display")=="none"){continue}q=g.test($("#"+m).val());q=(f==1)?q:!q;if(!q){try{validateFieldForToolTipDP4(m,k)}catch(l){}return false}}catch(l){}}}return true}return{initializeBanding:c,doCheck:b}}());jso_common_tooltip_validation_do_check=jso_common_tooltip_validation.doCheck;jso_common_dialog=(function(){function b(d,c){showAlertDialog("","",d,"","OK",c,"")}function a(){}return{alert:b,confirm:a}}());$(function(){$("#captcha").keyup(function(){this.value=this.value.toUpperCase()})});var cinPattern=/[^0-9]+/;var cinMinLength=16;var cinMaxLength=16;var pinPattern=/[^0-9]+/;var pinMinLength=4;var pinMaxLength=12;var logonIDTypeName="";var logonIDTypeParams;var lgonIDTypePreselected;var vkbSupported=false;var pinPadSupported=false;var currentForm;var currentSignonUI;var currentLogonIDType;var RANGE="Range";var clearFormOnError=false;var alphaPattern=/[a-zA-Z]+/,alphaNumPattern=/[a-zA-Z0-9]+/,numPattern=/[^0-9]/,expDatePattern=/[^0-9]?[\/|-|\.][^0-9]?[\/|-|\.][^0-9]?/;var ALPHA_TYPE=1,ALPHANUMERIC_TYPE=2,NUMERIC_TYPE=3,DATE_TYPE=4;var FERR="formatErr",EERR="emptyErr",LERR="lengthErr",LRERR="lengthRangeErr",ZERR="zeroNotAllowedErr";var MMDDYYYY=1,DDMMYYYY=2,YYYYMMDD=4;MMYY=6;var addlCharsAllowed;var whitespace=" \t\n\r";var mtSupported=false;function displayNickname(c,d){var a="nicknameField";var b="nicknameLabel";if(typeof d!="undefined"){a+=d;b+=d}var e=document.forms[c].remember;if(e.checked){if(accessLayer(b)){accessLayer(b).display="block"}if(accessLayer(a)){accessLayer(a).display="block";document.forms[c].nickname.focus()}}else{if(accessLayer(b)){accessLayer(b).display="none"}if(accessLayer(a)){accessLayer(a).display="none"}}}function accessLayer(a){if(document.getElementById&&document.getElementById(a)){return document.getElementById(a).style}else{if(document.all&&document.all[a]){return document.all[a].style}else{if(document.layers&&document.layers[a]){return document.layers[a]}}}}function getLogonIDType(b){var a=(new String(b)).split(",");return a[0]}function initVars(currentForm){if(currentForm){if(currentForm.cin){eval("cinMinLength=cin"+RANGE+currentLogonIDType+"[2]");eval("cinMaxLength=cin"+RANGE+currentLogonIDType+"[3]")}if(currentForm.nationalID){eval("cinMinLength=nationalID"+RANGE+currentLogonIDType+"[2]");eval("cinMaxLength=nationalID"+RANGE+currentLogonIDType+"[3]")}}eval("logonIDTypeName=logonIDTypeName"+currentLogonIDType)}function preselectItem(a,b){for(i=0;i<a.options.length;i++){if(a.options[i].value==b){a.options[i].selected=true;break}}}function onSelectLogonID(f,a,e){var d=document.forms[a+e];clearForm(e,d);var b=1;for(b=1;b<=MAX_LOGON_ID_TYPES;b++){if(accessLayer(f+b)){accessLayer(f+b).display="none"}}var c=d.logonIDTypeSelect.value;if(accessLayer(f+c)){accessLayer(f+c).display="block"}preselectItem(document.forms[a+c].logonIDTypeSelect,c);currentForm=document.forms[a+c];if(signonUILayerID){signonUILayerID=signonUILayerID+e}currentLogonIDType=c;myForm=document.forms[a+c]}function clearForm(b,a){if(a.cin){a.cin.value=""}if(a.pin){a.pin.value=""}if(a.nickname){a.nickname.value=""}if(a.remember){a.remember.checked=false}displayNickname(a.name,b)}function selectRegForm(k,f,d){if(accessLayer(k+0)){accessLayer(k+0).display="none"}if(accessLayer("validationErrors")){accessLayer("validationErrors").display="none"}var c=document.forms[f+d];var b="";if(c.username){b=c.username.value}clearRegForm(f,c,d);var g=1;for(g=1;g<=MAX_LOGON_ID_TYPES;g++){if(accessLayer(k+g)){accessLayer(k+g).display="none"}}var a=c.logonIDTypeSelect.value;if(accessLayer(k+a)){accessLayer(k+a).display="block"}preselectItem(document.forms[f+a].logonIDTypeSelect,a);currentForm=document.forms[f+a];currentLogonIDType=a;myForm=document.forms[f+a];if(myForm.username){myForm.username.value=b}try{var m=["username","cin","pin","dateOfBirth","cvv2","creditLimit","homePhoneNo","officePhoneNo","expiredate","postalCode","motherMaidenName","acctNumber"];var j=0;while(j<100){var h=$("#"+f+j);if(h.size()>0){h=h[0];if(h.id==currentForm.id){for(var p in m){var l=h.elements[m[p]];l=l?l:$(h).find('*[id^="'+m[p]+'"]')[0];if(l){l.id=l.id.replace(/__\d{4}.*$/,"")}}}else{for(var p in m){var l=h.elements[m[p]];if(l){l.id+="__0000"}}}}j++}var o={formId:currentForm.id,inputs:[{inputId:"username",params:[currentForm.username,validate],checkFunction:usernameValidation,errorMsgPosition:"left"},{inputId:"cin",params:[currentForm.cin,validate],checkFunction:cinValidation,errorMsgPosition:"left"},{inputId:"pin",params:[currentForm.pin,validate],checkFunction:pinValidation,errorMsgPosition:"left"},{inputId:"cvv2",params:[currentForm.cvv2,currentLogonIDType,validate,!validate],checkFunction:isAdditionalItemValid,errorMsgPosition:"left"},{inputId:"expiredate",params:[currentForm.expiredate,currentLogonIDType,validate,!validate,true],checkFunction:isAdditionalItemValid,errorMsgPosition:"left"},{inputId:"dateOfBirth",params:[currentForm.dateOfBirth,currentLogonIDType,validate,!validate],checkFunction:isAdditionalItemValid,errorMsgPosition:"left"},{inputId:"acctNumber",params:[currentForm.acctNumber,currentLogonIDType,validate,!validate],checkFunction:isAdditionalItemValid,errorMsgPosition:"left"},{inputId:"accountNumber",params:[currentForm.accountNumber,validate],checkFunction:accountNumberValidation,errorMsgPosition:"left"}]};jso_common_tooltip_validation.initializeBanding(o)}catch(n){}}function clearRegForm(a,b){if(b.username){b.username.value=""}if(b.cin){b.cin.value=""}if(b.pin){b.pin.value=""}if(b.dateOfBirth){b.dateOfBirth.value=""}if(b.cvv2){b.cvv2.value=""}if(b.creditLimit){b.creditLimit.value=""}if(b.homePhoneNo){b.homePhoneNo.value=""}if(b.officePhoneNo){b.officePhoneNo.value=""}if(b.expiredate){b.expiredate.value=""}if(b.postalCode){b.postalCode.value=""}if(b.motherMaidenName){b.motherMaidenName.value=""}if(b.acctNumber){b.acctNumber.value=""
}}function closeKeyPad(){if(vkbSupported){hideVkb(this)}if(pinPadSupported){disablePinPad()}}function isAdditionalItemValid(field,currentLogonIDType,checkForLength,passthrough,expDate,spaceAllowed,zeroAllowed){if(field.type=="text"||field.type=="textarea"||field.type=="password"){if(isWhitespace(field.value)||field.value.length==0){eval("errorStr="+field.name+'Errors["'+EERR+'"]');toolTipErrorMsg=errorStr;return false}}else{if(field.length>0&&field[0].type=="radio"){var valueChecked=false;for(var i=0;i<field.length;i++){if(field[i].checked){valueChecked=true}}if(!valueChecked){eval("errorStr="+field[0].name+'Errors["'+EERR+'"]');toolTipErrorMsg=errorStr;return false}}}var errorStr="";var minLength,maxLength,format,logonType;var spacePattern=/\s+/;if(checkForLength&&typeof field!="undefined"&&typeof field.value!="undefined"&&field.value.length>0){if(whitespace.indexOf(field.value.charAt(0))!=-1||whitespace.indexOf(field.value.charAt(field.value.length-1))!=-1){eval("errorStr="+field.name+'Errors["'+FERR+'"]');toolTipErrorMsg=errorStr;return false}}if(field.type=="text"||field.type=="textarea"||field.type=="password"){if(checkForLength){eval("minLength="+field.name+RANGE+currentLogonIDType+"[2]");eval("maxLength="+field.name+RANGE+currentLogonIDType+"[3]")}eval("logonType="+field.name+RANGE+currentLogonIDType+"[0]");eval("format="+field.name+RANGE+currentLogonIDType+"[1]")}if(passthrough){return true}var myVal=field.value;var formatError=false;if(typeof spaceAllowed!="undefined"&&!spaceAllowed&&spacePattern.test(myVal)){formatError=true}else{var addlChars=typeof addlCharsAllowed!="undefined"?addlCharsAllowed[logonType]:null;if(format==ALPHA_TYPE){if(!validateAlpha(myVal,addlChars)){formatError=true}}else{if(format==ALPHANUMERIC_TYPE){if(!validateAlphaNumeric(myVal,addlChars)){formatError=true}}else{if(format==NUMERIC_TYPE){if(!validateNumeric(myVal,addlChars)){formatError=true}}else{if(format==DATE_TYPE){if(expDate){if(!validateExpDate(myVal)){formatError=true}}else{if(!isValidDate(myVal)){formatError=true}}}}}}}if(formatError){eval("errorStr="+field.name+'Errors["'+FERR+'"]');toolTipErrorMsg=errorStr;return false}if(checkForLength){if(myVal!=""&&(myVal.length<minLength||myVal.length>maxLength)){if(minLength==maxLength){eval("errorStr="+field.name+'Errors["'+LERR+'"]');if(typeof errorStr=="undefined"){eval("errorStr="+field.name+'Errors["'+FERR+'"]')}errorStr=errorStr.replace(/\[length\]/,minLength)}else{eval("errorStr="+field.name+'Errors["'+LRERR+'"]');if(typeof errorStr=="undefined"){eval("errorStr="+field.name+'Errors["'+FERR+'"]')}errorStr=errorStr.replace(/\[minLength\]/,minLength);errorStr=errorStr.replace(/\[maxLength\]/,maxLength)}toolTipErrorMsg=errorStr;return false}}if(typeof zeroAllowed!="undefined"&&!zeroAllowed&&field.value==0){eval("errorStr="+field.name+'Errors["'+ZERR+'"]');toolTipErrorMsg=errorStr;return false}return true}function validateExpDate(c){var a="0123456789/-.";var b;for(b=0;b<c.length;b++){if(a.indexOf(c.substr(b,1))<0){return false}}return true}function validateAlpha(b,c){var a;for(a=0;a<b.length;a++){if(!(b.charAt(a)>="a"&&b.charAt(a)<="z")&&!(b.charAt(a)>="A"&&b.charAt(a)<="Z")){if(typeof c!="undefined"){if(c.indexOf(b.charAt(a))==-1){return false}}else{return false}}}return true}function validateAlphaNumeric(b,c){var a;for(a=0;a<b.length;a++){if(!(b.charAt(a)>="a"&&b.charAt(a)<="z")&&!(b.charAt(a)>="A"&&b.charAt(a)<="Z")&&!(b.charAt(a)>="0"&&b.charAt(a)<="9")){if(typeof c!="undefined"){if(c.indexOf(b.charAt(a))==-1){return false}}else{return false}}}return true}function validateNumeric(b,c){var a;for(a=0;a<b.length;a++){if(!(b.charAt(a)>="0"&&b.charAt(a)<="9")){if(typeof c!="undefined"){if(c.indexOf(b.charAt(a))==-1){return false}}else{return false}}}return true}function getDatePattern(){if(dateFormat==MMYY){if(dateSeparator2==" "){return/(0[1-9]|1[0-2])\s+[0-9]{2}\s/}else{if(dateSeparator2=="."){return/(0[1-9]|1[0-2])\.[0-9]{2}/}else{if(dateSeparator2=="https://online.citibank.ae/"){return/(0[1-9]|1[0-2])\/[0-9]{2}/}else{if(dateSeparator2=="-"){return/(0[1-9]|1[0-2])-[0-9]{2}/}else{if(dateSeparator2==""){return/(0[1-9]|1[0-2])[0-9]{2}/}}}}}}if(dateFormat==MMDDYYYY){if(dateSeparator==" "){return/(0[1-9]|1[0-2])\s+(0[1-9]|[1-2][0-9]|[3][0-1])\s+[0-9]{4}/}else{if(dateSeparator=="."){return/(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|[3][0-1])\.[0-9]{4}/}else{if(dateSeparator=="https://online.citibank.ae/"){return/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])\/[0-9]{4}/}else{if(dateSeparator=="-"){return/(0[1-9]|[1-2][0-9]|[3][0-1])-(0[1-9]|1[0-2])-[0-9]{4}/}else{if(dateSeparator==""){return/(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|[3][0-1])[0-9]{4}/}}}}}}else{if(dateFormat==DDMMYYYY){if(dateSeparator==" "){return/(0[1-9]|[1-2][0-9]|[3][0-1])\s+(0[1-9]|1[0-2])\s+[0-9]{4}/}else{if(dateSeparator=="."){return/(0[1-9]|[1-2][0-9]|[3][0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}/}else{if(dateSeparator=="https://online.citibank.ae/"){return/(0[1-9]|[1-2][0-9]|[3][0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/}else{if(dateSeparator=="-"){return/(0[1-9]|[1-2][0-9]|[3][0-1])-(0[1-9]|1[0-2])-[0-9]{4}/}else{if(dateSeparator==""){return/(0[1-9]|[1-2][0-9]|[3][0-1])(0[1-9]|1[0-2])[0-9]{4}/}}}}}}else{if(dateFormat==YYYYMMDD){if(dateSeparator==" "){return/[0-9]{4}\s+(0[1-9]|1[0-2])\s+(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator=="."){return/[0-9]{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator=="https://online.citibank.ae/"){return/[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator=="-"){return/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator==""){return/[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|[3][0-1])/}}}}}}}}}function getDatePattern2(){if(dateFormat2==MMYY){if(dateSeparator2==" "){return/(0[1-9]|1[0-2])\s+[0-9]{2}\s/}else{if(dateSeparator2=="."){return/(0[1-9]|1[0-2])\.[0-9]{2}/}else{if(dateSeparator2=="https://online.citibank.ae/"){return/(0[1-9]|1[0-2])\/[0-9]{2}/}else{if(dateSeparator2=="-"){return/(0[1-9]|1[0-2])-[0-9]{2}/}else{if(dateSeparator2==""){return/(0[1-9]|1[0-2])[0-9]{2}/}}}}}}if(dateFormat2==MMDDYYYY){if(dateSeparator2==" "){return/(0[1-9]|1[0-2])\s+(0[1-9]|[1-2][0-9]|[3][0-1])\s+[0-9]{4}/}else{if(dateSeparator2=="."){return/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/}else{if(dateSeparator2=="https://online.citibank.ae/"){return/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])\/[0-9]{4}/}else{if(dateSeparator2=="-"){return/(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|[3][0-1])-[0-9]{4}/}else{if(dateSeparator2==""){return/(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|[3][0-1])[0-9]{4}/}}}}}}else{if(dateFormat2==DDMMYYYY){if(dateSeparator==" "){return/(0[1-9]|[1-2][0-9]|[3][0-1])\s+(0[1-9]|1[0-2])\s+[0-9]{4}/}else{if(dateSeparator=="."){return/(0[1-9]|[1-2][0-9]|[3][0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}/}else{if(dateSeparator=="https://online.citibank.ae/"){return/(0[1-9]|[1-2][0-9]|[3][0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/}else{if(dateSeparator=="-"){return/(0[1-9]|[1-2][0-9]|[3][0-1])-(0[1-9]|1[0-2])-[0-9]{4}/}else{if(dateSeparator==""){return/(0[1-9]|[1-2][0-9]|[3][0-1])(0[1-9]|1[0-2])[0-9]{4}/}}}}}}else{if(dateFormat2==YYYYMMDD){if(dateSeparator2==" "){return/[0-9]{4}\s+(0[1-9]|1[0-2])\s+(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator2=="."){return/[0-9]{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator2=="https://online.citibank.ae/"){return/[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator2=="-"){return/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|[3][0-1])/}else{if(dateSeparator2==""){return/[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|[3][0-1])/}}}}}}}}}function isValidDate(d){var b="0123456789";var l="";var j=".";var k;var g;var h;var e=false;var f;var a=true;if(!getDatePattern().test(d)){return false
}for(f=0;f<d.length;f++){if(b.indexOf(d.substr(f,1))>=0){l=l+d.substr(f,1)}}if(l.length<8){return false}if(dateFormat==MMDDYYYY){g=l.substr(0,2);k=l.substr(2,2);h=l.substr(4,4)}else{if(dateFormat==DDMMYYYY){k=l.substr(0,2);g=l.substr(2,2);h=l.substr(4,4)}else{if(dateFormat==YYYYMMDD){h=l.substr(0,4);g=l.substr(4,2);k=l.substr(6,4)}}}if(h==0){return false}var c=new Date();if(h>c.getFullYear()){return false}if(h==c.getFullYear()&&g>c.getMonth()+1){return false}if(h==c.getFullYear()&&(g==c.getMonth()+1)&&k>c.getDate()){return false}if((g<1)||(g>12)){return false}if((h%100==0)&&(h%400==0)){e=true}else{if(h%4==0){e=true}}if(k<1){return false}if(e&&(g==2)&&(k>29)){return false}if(!e&&(g==2)&&(k>28)){return false}if((k>31)&&((g=="01")||(g=="03")||(g=="05")||(g=="07")||(g=="08")||(g=="10")||(g=="12"))){return false}if((k>30)&&((g=="04")||(g=="06")||(g=="09")||(g=="11"))){return false}return true}var SEP="|";function getTimeZone(){var e=new Date();var d=new Date(e.getFullYear(),0,1,0,0,0,0);var b=d.toGMTString();var c=new Date(b.substring(0,b.lastIndexOf(" ")-1));var a=(d-c)/(1000*60*60);return a}function getResolution(){var a="";if(window.screen){a+=window.screen.width+SEP+window.screen.height+SEP+window.screen.availWidth+SEP+window.screen.availHeight}return a}function getColorDepth(){var a="";if(window.screen){a=window.screen.colorDepth}return a}function populateClientData(a){if(a.screenResolution){a.screenResolution.value=getResolution()}if(a.colorDepth){a.colorDepth.value=getColorDepth()}if(a.timezone){a.timezone.value=getTimeZone()}}function setPwdKeyOptions(){if(focusKey=="password"){showVkb(vkbForm.password);if(typeof pwdMaxLength!="undefined"){eval("vkbFillElementSize=pwdMaxLength")}eval("pwdExceedMaxLength=pwdExceedMaxLength2");vkbForm.password.value="";vkbForm.password.readOnly="true"}else{if(focusKey=="passwordConfirm"){showVkb(vkbForm.passwordConfirm);if(typeof pwdMaxLength!="undefined"){eval("vkbFillElementSize=pwdMaxLength")}eval("pwdExceedMaxLength=pwdExceedMaxLength2");vkbForm.passwordConfirm.value="";vkbForm.passwordConfirm.readOnly="true"}else{if(focusKey=="currentPassword"){showVkb(vkbForm.currentPassword);if(typeof pwdMaxLength!="undefined"){eval("vkbFillElementSize=pwdMaxLength")}eval("pwdExceedMaxLength=pwdExceedMaxLength2");vkbForm.currentPassword.value="";vkbForm.currentPassword.readOnly="true"}}}}var sentForm=false;var unameMinLength;var pwdMinLength;var otpRequired="NS";function signOnUnamePwd(c,d,a){if(vkbSupported){hideVkb(document.SignonForm.username)}if(sentForm){return false}if(document.SignonForm.username.value==gpDashOnCookiedScreen){alert(gpErrorOnUserIDSelect);document.SignonForm.username.focus();return false}if(document.SignonForm.username.value.length<=0||trim(document.SignonForm.username.value).length<=0){alert(gpPlsMyCitiUsrId);document.SignonForm.username.value="";if(clearFormOnError){clearSignonScreen(c)}document.SignonForm.username.focus();return false}if(document.SignonForm.password.value.length<=0||trim(document.SignonForm.password.value).length<=0){alert(gpPlsMyCitiPass);document.SignonForm.password.value="";if(clearFormOnError){clearSignonScreen(c);if(document.SignonForm.username.type=="text"){document.SignonForm.username.focus()}else{document.SignonForm.password.focus()}}else{try{document.SignonForm.password.focus()}catch(b){}}return false}if(document.SignonForm.otp&&otpRequired=="R"){if(document.SignonForm.otp.value.length<=0||trim(document.SignonForm.otp.value).length<=0){alert(gpEnterOTP);document.SignonForm.otp.value="";if(clearFormOnError){clearSignonScreen(c);if(document.SignonForm.username.type=="text"){document.SignonForm.username.focus()}else{document.SignonForm.password.focus()}}else{document.SignonForm.otp.focus()}return false}}if(d==null||d==true){if(document.SignonForm.username.value.length<unameMinLength){alert(gpMyCitiCond);if(clearFormOnError){clearSignonScreen(c)}document.SignonForm.username.focus();return false}if(a==null||a==true){if(document.SignonForm.password.value.length<pwdMinLength){alert(gpMyCitiPassCond);if(clearFormOnError){clearSignonScreen(c);if(document.SignonForm.username.type=="text"){document.SignonForm.username.focus()}else{document.SignonForm.password.focus()}}else{document.SignonForm.password.focus()}return false}}}if((trim(document.SignonForm.password.value)).toLowerCase()==(trim(document.SignonForm.username.value)).toLowerCase()){alert(usernameSameAsPwd);if(clearFormOnError){clearSignonScreen(c)}document.SignonForm.password.focus();return false}sentForm=true;return true}function signOnUname(b,c,a){if(vkbSupported){hideVkb(document.SignonForm.username)}if(document.SignonForm.username.value==gpDashOnCookiedScreen){toolTipErrorMsg=gpErrorOnUserIDSelect;return false}if(document.SignonForm.username.value.length<=0||trim(document.SignonForm.username.value).length<=0){toolTipErrorMsg=gpPlsMyCitiUsrId;if(clearFormOnError){clearSignonScreen(b)}return false}if(document.SignonForm.otp&&otpRequired=="R"){if(document.SignonForm.otp.value.length<=0||trim(document.SignonForm.otp.value).length<=0){alert(gpEnterOTP);document.SignonForm.otp.value="";if(clearFormOnError){clearSignonScreen(b)}return false}}if(c==null||c==true){if(document.SignonForm.username.value.length<unameMinLength){toolTipErrorMsg=gpMyCitiCond;if(clearFormOnError){clearSignonScreen(b)}return false}}return true}function signOnPwd(b,c,a){if(vkbSupported){hideVkb(document.SignonForm.username)}if(document.SignonForm.password.value.length<=0||trim(document.SignonForm.password.value).length<=0){toolTipErrorMsg=gpPlsMyCitiPass;if(clearFormOnError){clearSignonScreen(b)}return false}if(document.SignonForm.otp&&otpRequired=="R"){if(document.SignonForm.otp.value.length<=0||trim(document.SignonForm.otp.value).length<=0){toolTipErrorMsg=gpEnterOTP;if(clearFormOnError){clearSignonScreen(b)}return false}}if(c==null||c==true){if(a==null||a==true){if(document.SignonForm.password.value.length<pwdMinLength){toolTipErrorMsg=gpMyCitiPassCond;if(clearFormOnError){clearSignonScreen(b)}return false}}}if((trim(document.SignonForm.password.value)).toLowerCase()==(trim(document.SignonForm.username.value)).toLowerCase()){toolTipErrorMsg=usernameSameAsPwd;if(clearFormOnError){clearSignonScreen(b)}return false}return true}function signOnCap(b,c,a){if(captchaSupported){if(vkbSupported){hideVkb(document.SignonForm.username)}if(document.SignonForm.captcha.value.length<=0||trim(document.SignonForm.captcha.value).length<=0){toolTipErrorMsg=gpPlsMyCitiCap;if(clearFormOnError){clearSignonScreen(b)}return false}if(document.SignonForm.otp&&otpRequired=="R"){if(document.SignonForm.otp.value.length<=0||trim(document.SignonForm.otp.value).length<=0){toolTipErrorMsg=gpEnterOTP;if(clearFormOnError){clearSignonScreen(b)}return false}}}else{return true}return true}function clearSignonScreen(a){document.SignonForm.password.value="";if(a&&document.SignonForm.username&&document.SignonForm.username.type!="hidden"){document.SignonForm.username.value=""}}function pwdValidation(a){if(a.value.length<=0||trim(a.value).length<=0){toolTipErrorMsg=gpPlsMyCitiPass;return false}else{if(a.value.length<pwdMinLength){toolTipErrorMsg=gpMyCitiPassCond;return false}}return true}function pwdValidationInline(a){if(a.value.length<=0||trim(a.value).length<=0){errorMessage=gpPlsMyCitiPass;a.focus();return false}else{if(a.value.length<pwdMinLength){errorMessage=gpMyCitiPassCond;a.focus();return false}}return true}function passwordValidation(a,b){if(a.value.length<=0||trim(a.value).length<=0){alert(gpPlsMyCitiPass);
a.focus();return false}if(b==null||b==true){if(a.value.length<pwdMinLength){alert(gpMyCitiPassCond);a.focus();return false}}return true}function usernameValidation(b,a){if(b!=null&&trim(b.value).length==0){toolTipErrorMsg=usernameEmpty;b.value="";return false}if(a==null||a==true){if(b.value.length<unameMinLength){toolTipErrorMsg=gpMyCitiCond;return false}}return true};