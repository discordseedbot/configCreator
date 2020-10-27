import $ from "jquery";
const pJSON = require("./../package.json")

$("document").ready(()=>{
	var dIcontain = $("div.debugInfo");
	dIcontain.find("#Lc_version").html(pJSON.version);
	dIcontain.find("#Lc_pkgName").html(pJSON.name);
	pJSON.contributors.forEach((contrib)=>{
		dIcontain.find("#Lc_contrib").append(`${contrib}<br>`)
	})
	dIcontain.find("#Lc_license").html(pJSON.license);
})