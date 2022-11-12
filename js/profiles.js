//stampo tuttoooo 
function select_profiles_list() {
	var obj_html = $("<div></div>")
						.addClass("inner");

	for (let [index, profile] of profiles.entries()) {
		let link = profile.link ? profile.link : "profile.html?id="+index;

		obj_html
		.append(
			$("<div></div>")
			.addClass("profile")
			.append(
				$("<div></div>")
				.addClass("image")
				.addClass("fit")
				/*.append(
					$("<img/>")
					.addClass("img")
					.attr("src", profile.img)
					.attr("alt", "")
				)*/
				.append(
					$("<div></div>")
					.addClass("img-background")
					.css("background", "url('" + profile.img + "')")
				)
			)
			.append(
				$("<div></div>")
				.addClass("content")
				.append(
					$("<header></header>")
					/*.append(
						$("<small></small>")
						.addClass("date")
						.html(date_format(profile.date, 'dd-mm-yyyy'))
					)*/
					.append(
						$("<h3></h3>")
						.addClass("role")
						.html(profile.role)
					)
					.append(
						$("<h2></h2>")
						.addClass("title")
						.html(profile.name)
					)
				)
				.append(
					$("<a></a>")
					.addClass("data")
					.attr("href", "tel:"+profile.phone)
					.html(profile.phone)
				)
				.append(
					$("<a></a>")
					.addClass("data")
					.attr("href", "mailto:"+profile.mail)
					.html(profile.mail)
				)
				
				.append(
					$("<p></p>")
					.html(profile.description)
				)
				
			)
		)

		$("#profiles").append(obj_html);
	}
}

