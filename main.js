document.addEventListener("DOMContentLoaded", function (event) {
    
    document.getElementById("movie_list").style.visibility="hidden";
   


    document.getElementById("add_movie").addEventListener("click", function(){

        let newmovie = new Movie(
            document.getElementById("movieTitle").value,
            document.getElementById("movieRating").value,
            
        );
        if (!newmovie.isTitleValid()) {
            alert("Title name is not valid. ");
        } 
        if (!newmovie.isRatingValid()) {
            alert("Rating number is not valid. " +
             "Please enter a number between 1-5.");
        } else {
            movies.push(newmovie);  
            clear();
        }
        document.getElementById("movieTitle").focus();
    
        function clear(){
            document.getElementById("movieTitle").value="";
            document.getElementById("movieRating").value="";
        }
    
    
   document.getElementById("displayMovies").addEventListener("click",function(){
    
        let displayString = "", movieRating = 0;
        document.getElementById("movie_list").style.visibility="visible";

        for (let i in movies) {                            
            displayString += movies[i].toString() + "\n"; 
           
        }
       
        document.getElementById("movie_list").value = displayString; 
        document.getElementById("add_movie").select();           

});
});
    let movies = [];
});