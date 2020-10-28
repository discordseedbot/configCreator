import $ from "jquery";

$(document).on("click",".section.container .dropdown.clickable",(e)=>{
	var me = e.target.parentNode;
	var section = null;
	me.classList.forEach((cI)=>{
		switch(cI){
			case "dropdown":
			case "clickable":
			case "startOpen":
			case "container":
			case "section":
				break;
			default:
				section = cI;
				break;
		}
	})
	if (section.length < 1) return;
	console.debug(`[dropdown] Section Found as "${section}"`);

	var thingToToggle = $(`.${section}.section.container .dropdown.content`);
	global.thingToToggle = thingToToggle;
	var isHidden = true;
	if (thingToToggle.css('display') !== "none") isHidden = false;

	if (isHidden) {
		thingToToggle.fadeIn("fast");
	} else {
		thingToToggle.fadeOut("fast");
	}
	console.debug(`[dropdown] Section "${section}" toggled 'isHidden' to ${!isHidden}`)
})