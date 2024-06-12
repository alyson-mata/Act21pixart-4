$(document).ready(function () {
		const sizePicker = $('#sizePicker');
		sizePicker.submit(function makeGrid(grid) {
				$('table tr').remove();
				let row_input = $('#inputHeight').val();
				let col_input = $('#inputWidth').val();
				for (var i = 1; i <= row_input; i++) {
						$('table').append("<tr></tr>");
						for (var j = 1; j <= col_input; j++) {
								$('tr:last').append("<td></td>");
								$('td').attr("class", 'cells');
						}
				}
				grid.preventDefault();
				$('.cells').click(function (event) {
						var paint = $('#colorPicker').val();
						$(event.target).css('background-color', paint);
				});
		});

		$('#submitButton').click(function() {
				sizePicker.submit(); 
		});

		// Print Functionality
		$('#printButton').click(function() {
				window.print(); // Print the page
		});
});