import $ from "jquery";

$(document).on("click",".section.container .dropdown.clickable",(e)=>{
	var me = e.target.parentNode;
	var section = "";
	me.classList.forEach((cI)=>{
		switch(cI){
			case "dropdown":
			case "clickable":
				break;
			default:
				section = cI;
				break;
		}
	})
	if (section.length < 1) return;
	console.debug(`[dropdown] Section Found as "${section}"`);

	var thingToToggle = $(`.${section}.section.container .dropdown.content`);
})