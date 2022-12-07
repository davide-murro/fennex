//stampo tuttoooo nella home
function select_projects_list() {
	var obj_html = $("<div></div>").addClass("inner");

	for (let [index, project] of projects.entries()) {
		let link = project.link ? project.link : "detail.html?project="+index;

		obj_html
		.append(
			$("<div></div>")
			.addClass("preview")
			.append(
				$("<a/>")
				.attr("href", link)
				.append(
					$("<div></div>")
					.addClass("image")
					.addClass("fit")
					.addClass("img-container")
					.html(
						$("<img/>")
						.addClass("img")
						.attr("src", project.img)
						.attr("alt", "")
					)
					
				)
				.append(
					$("<div></div>")
					.addClass("content")
					.append(
						$("<h3></h3>")
						.addClass("title")
						.html(project.title)
					)
					/*
					.append(
						$("<small></small>")
						.addClass("date")
						.html(date_format(project.insert, 'dd-mm-yyyy HH:ii'))
					)
					*/
					.append(
						$("<p></p>")
						.addClass("description")
						.html(project.description.length > 150 ? project.description.substring(0, 150) + "..." : project.description)
					)
				)
			)
		)

		$("#main").append(obj_html);
	}
}

//stampo info del progetto
function select_project_info() {
	// controllo e prendo i parametri in GET
	var params_get = getSearchParameters();

	if(params_get && params_get.project) {
		var index = parseInt(params_get.project);

		if(index >= 0 && index < projects.length) {
			var project = projects[index];
			var class_secondary = project.class ? project.class : "";
			var class_demo = project.demo ? "" : "hidden";

			if(project.features) {
				var features = $("<p></p>")
								.html(
									$("<h3></h3>")
									.addClass("subtitle")
									.html("Caratteristiche")
								)
								.append("<ul></ul>")
				for (let i = 0; i < project.features.length; i++) {
					features.find("ul").append(
						$("<li></li>")
						.html(
							project.features[i]
						)
					);
				}
			}
			

			var obj_html = $("<div></div>")
							.addClass("inner")
							.addClass(class_secondary)
							.append(
								$("<div></div>")
								.addClass("target")
								.append(
									$("<h2></h2>")
									.html(project.title)
								)
							)
							.append(
								$("<div></div>")
								.addClass("image")
								.addClass("fit")
								.append(
									$("<img/>")
									.addClass("img")
									.attr("src", project.img)
									.attr("alt", "")
								)
							)
							.append(
								$("<div></div>")
								.addClass("content")
								.append(
									$("<header></header>")
									/*.append(
										$("<a></a>")
										.addClass("demo")
										.addClass("link")
										.addClass("float-right")
										.attr("href", project.demo)
										.html("demo")
									)*/
									.append(
										$("<button></button>")
										.addClass("demo")
										.addClass(class_demo)
										.addClass("rev")
										.addClass("icon")
										.addClass("fa-play-circle-o")
										.addClass("float-right")
										.attr("onclick", "window.open('" + project.demo + "')")
										.attr("target", "_blank")
										.html("link")
									)
									.append(
										$("<small></small>")
										.addClass("date")
										.html(date_format(project.insert, 'dd-mm-yyyy HH:ii'))
									)
									.append(
										$("<h2></h2>")
										.addClass("title")
										.html(project.title)
									)
								)
								.append(
									$("<p></p>")
									/*
									.html(
										$("<h3></h3>")
										.addClass("subtitle")
										.html("Descrizione")
									)
									*/
									.append(project.description)
								)
								.append(
									features
								)
							)
			$("#preview").append(obj_html);

			if(index > 0) {
				$("#preview")
				.append(
					$("<a/>")
					.addClass("nav")
					.addClass("previous")
					.attr("href", "detail.html?project="+(index-1))
					.append(
						$("<span></span>")
						.addClass("fa")
						.addClass("fa-chevron-left")
					)
				)
			} 
			if(index < projects.length-1) {
				$("#preview")
				.append(
					$("<a/>")
					.addClass("nav")
					.addClass("next")
					.attr("href", "detail.html?project="+(index+1))
					.append(
						$("<span></span>")
						.addClass("fa")
						.addClass("fa-chevron-right")
					)
				)
			} 

		} else {
			$("#preview")
			.html(
				$("<div></div>")
				.addClass("image")
				.addClass("easteregg")
				.html(
					$("<div></div>")
					.addClass("img-background")
					.css("background", "url('images/fennec/giphy.gif')")
					//.html("Easter egg!")
				)
			)
		}
	}
}
