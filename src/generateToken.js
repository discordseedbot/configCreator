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

$(document).on('click','button#genTokens_generate',(me)=>{
	var struct = {
        "discord": gVal("#genTokens_discord") || "bot-token",
        "youtube": gVal("#genTokens_youtube") || "youtube-api-token",
        "apiToken": gVal("#genTokens_api") || "seedbot-api-token",
	};

	console.debug("[generateTokens] Generated Tokens File",struct)

	downloadString('token.json',JSON.stringify(struct,null,"\t"));
})