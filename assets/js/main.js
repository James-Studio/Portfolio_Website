/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// background tranformation settings
			
	var zeroIndex = 0;
	var backgroundSlider = $(".background-slider");
	var backgroundImageUrls = [
		"./images/background/color1",
		"./images/background/color2",
		"./images/background/color3",
		"./images/background/color4",
		"./images/background/color5",
		"./images/background/color6",
		"./images/background/color7",
		"./images/background/color8",
		"./images/background/color9",
		"./images/background/color10",
		"./images/background/color11",
		"./images/background/color12",
		"./images/background/color13",
		"./images/background/color14",
		"./images/background/color15",
		"./images/background/color16",
		"./images/background/color17",
		"./images/background/color18",
		"./images/background/color19",
		"./images/background/color20",
		"./images/background/color21",
		"./images/background/color22",
		"./images/background/color23",
		"./images/background/color24",
		"./images/background/color25",
		"./images/background/color26"
	];

	// Set the time interval (in milliseconds) for changing the background image
	var interval = 5000; // 5 seconds


	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

			
			
			function changeBackgroundImage() {
				var currentIndex = Math.floor(Math.random() * backgroundImageUrls.length) + 1;
				var imageUrl = 'url(' + backgroundImageUrls[currentIndex] + '.png)';
				backgroundSlider.css("background-image", imageUrl);
				console.log("EXE!");
			}
			
			// Initial background change (optional)
			changeBackgroundImage();
			
			
			
			// Start changing the background image at the specified interval
			//setInterval(changeBackgroundImage, interval);
			  

	
})(jQuery);
