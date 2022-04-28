

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-alone-1585876454.jpg", "http://images.fanpop.com/images/image_uploads/Mr-Bean-s-Holiday-comedy-movies-47948_509_755.jpg","https://deadline.com/wp-content/uploads/2018/07/dying-to-survive1.jpg"];
	let action =["https://cvhsnews.org/wp-content/uploads/2022/03/Uncharted_Official_Poster.jpg", "https://media.timeout.com/images/43500/750/562/image.jpg","https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQtD4ntCo6idFhm1I4daO5kwn7OxMisgVNKRA373opZjdJTxyyu4hDmeJWTNRtCqxiX1UwYy2Nc7rJIPR5EXNncmeGynIIugndVNO8LnkZC2gZPP7iyjLCym7YK7.jpg?r=003"];
	let drama =["https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg", "https://i2.wp.com/teaser-trailer.com/wp-content/uploads/The-Sky-is-Everywhere-movie.jpg?ssl=1","https://i1.wp.com/www.thai-lakorn.com/wp-content/uploads/2021/12/If-The-Voice-Has-Memory.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
   }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});