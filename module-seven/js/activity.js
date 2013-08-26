$(document).ready(function(){
	$('#movie').keypress(function(event){
		if(event.which == 13){
			var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the required field!");
		}
			$(function(){
			
			
			/*var movie = document.getElementById('movie');
			var valmovie = movie.value;*/
			
			
			$('#resultleft').html("");
			$('#resultleft').append('<p class="text-info">Search Result for: '+'<span class="res">'+moviesearch+'</span>'+'</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
				//console.log(response);
				$('.movie_container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center; font-family:arial;">No Available Synopsis</h3>';
						$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{
					
					
					
					$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
				
					/*$('.movie_container').append('<h3>' +movie.title+ '</h3>');
					$('.movie_container').append('<img src="' +movie.posters.thumbnail+'"/>');
					$('.movie_container').append('<h3>' +movie.year+ '</h3>');*/
					}
				}
					var lengthofmov = response.movies.length;
					$('#resultright').html("");
					$('#resultright').append('<p class="text-info">Total result found: '+'<span class="res">'+lengthofmov+'</span>'+'</p>');
			}
				
			});
				moviesearch = $('#movie').val("");	
		}
		
	});
	$('#send').click(function(){
		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the required field!");
		}
			$(function(){
			
			
			/*var movie = document.getElementById('movie');
			var valmovie = movie.value;*/
			
			
			$('#resultleft').html("");
			$('#resultleft').append('<p class="text-info">Search Result for: '+'<span class="res">'+moviesearch+'</span>'+'</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
				//console.log(response);
				$('.movie_container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center; font-family:arial;">No Available Synopsis</h3>';
						$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{
					
					
					
					$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
				
					/*$('.movie_container').append('<h3>' +movie.title+ '</h3>');
					$('.movie_container').append('<img src="' +movie.posters.thumbnail+'"/>');
					$('.movie_container').append('<h3>' +movie.year+ '</h3>');*/
					}
				}
					var lengthofmov = response.movies.length;
					$('#resultright').html("");
					$('#resultright').append('<p class="text-info">Total result found: '+'<span class="res">'+lengthofmov+'</span>'+'</p>');
			}
				
			});
				moviesearch = $('#movie').val("");
	});


		
			
		
		

});

