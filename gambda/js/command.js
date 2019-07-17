 document.addEventListener(
    "DOMContentLoaded", () => {

    	let mmenu_options={
	       extensions: [ "position-right", "theme-dark"],
	       navbar:{
	       		title: "<img src='../img/logo.png' alt='Gambda' class='navbar_logo'/>"
	       },
	       // sidebar: {
        //             collapsed: "(min-width: 550px)",
        //             expanded: "(min-width: 700px)"
        //         }
    	}
    	const menu = new Mmenu( "#m_nav_menu" , mmenu_options);
    	const api = menu.API;


    }
);
