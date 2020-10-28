import $ from "jquery";

function isChecked(id) {
	return $(id).is(":checked");
}

function gVal(id) {
	if ($(id).length < 1) {
		return false;
	} else {
		var retVal = $(id).val()
		switch(retVal) {
			case 'on':
			case true:
				return true;
				break;
			case 'off':
			case false:
				return false;
				break;
			default:
				return retVal;
				break;
		}
	}
}

function downloadString(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

$(document).on('click','button#genPref_generate',(me)=>{
	var struct = {
		"prefix":{
			"default": 	gVal("#genPref_prefix-default") || "s!",
			"dev": 		gVal("#genPref_prefix-dev") || "s~",
			"music": 	gVal("#genPref_prefix-music") || "s?",
			"math": 	gVal("#genPref_prefix-math") || "s!math",
			"dmoj": 	gVal("#genPref_prefix-dmoj") || "s!dmoj",
			"youtube": 	gVal("#genPref_prefix-youtube") || "s!yt"
		},
		"core": {
			"stats": {
				"timer": 			gVal("#genPref_core_stats-timer") || 600,
				"loginRetryTimer": 	gVal("#genPref_core_stats-loginRetry") || 1
			},
			"tokenManager": {
				"enviromentVariable": 	gVal("#genPref_core_tokenMan-envToken") || false,
				"tokenLocation": 		gVal("#genPref_core_tokenMan-location") || "aboveRoot"
			},
			"localization": {
				"name": 	gVal("#genPref_core_local-name") || "SeedBot",
				"website":	gVal("#genPref_core_local-web") || "https://seedbot.xyz",
				"contact": 	gVal("#genPref_core_local-contact") || "contact@dariox.club"
			}
		},
		"developer_notif":{
			"enable": isChecked('#genPref_devNotif-enable') || false,
			"override": {
				"error": true
			},
			"developer": {
				"error": gVal('#genPref_devNotif-dev-error') || "720187904705691689",
				"notifications": gVal('#genPref_devNotif-dev-notif') || "720187664120152114",
				"unauthAccess": gVal('#genPref_devNotif-dev-unauith') || "720566055445069864",
			},
			"userspaceError": {
				"error": gVal('#genPref_devNotif-user-error') || "72018793426282a0955",
				"notifications": gVal('#genPref_devNotif-user-notif') || "720187870933024829"
			}
		},
		"api":{
			"enable": isChecked('#genPref_api-enable') || false,
			"timeout": gVal('#genPref_api-timeout') || 900,
			"network":{
				"protocol":{
					"type": gVal('#genPref_api-type:selected') || "https",
					"client":{
						"version": gVal('#genPref_api-version:selected') || 4,
						"schema": gVal('#genPref_api-schema:selected') || 2
					}
				},
				"address": gVal('#genPref_api-address') || "api.seedbot.xyz",
				"port": gVal('#genPref_api-port') || "auto"
			}
		}
	};

	console.debug("[generatePrefrences] Generated Prefrences File",struct)

	downloadString('prefrences.json',JSON.stringify(struct,null,"\t"));
})