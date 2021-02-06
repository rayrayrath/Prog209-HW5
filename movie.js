function Movie(title, rating) {
    this.title = title;
    this.rating = rating;
    this.isRatingValid = function() {
        if (rating >= 1 && rating <= 5) {
            return true;
        } else {
            return false;
        }
    };
    this.isTitleValid = function() {
        if (title !== "") {
            return true;
        } else {
            return false;
        }
    };
    this.toString = function() {
        return title + " " + rating;
    };
}

//function movieTestFunction () {
    //let title = document.getElementById("movieTitle").value;
    //let rating = document.getElementById("movieRating").value;
    //let myMovie = new Movie(title, rating);

    //document.getElementById("testArea").innerHTML = myMovie.toString();
    //document.getElementById("isTitleValid").innerHTML = myMovie.isTitleValid();
    //document.getElementById("isRatingValid").innerHTML = myMovie.isRatingValid();

//}
