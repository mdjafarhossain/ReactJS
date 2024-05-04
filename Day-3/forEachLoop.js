const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" }
    
    ];
console.log('for each log');
    oscarMovies.forEach(function(item,index,arr){
        console.log(`ForEach= Index:[${index}],Titile:[${item.title}], Director:[${item.director}]`)
    })

    for(var idx=0;idx< oscarMovies.length;idx=idx+1){
        console.log(`For Loop=Index:[${idx}],Titile:[${oscarMovies[idx].title}], Director:[${oscarMovies[idx].director}]`)
    }
        