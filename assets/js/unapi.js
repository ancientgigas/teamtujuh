function SearchPhotos() {
    let clientId = "hp2kGK75jhFG_Yh10w4GYK7sKom5d4i167wWpeE0_Yk"
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query


    fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function(data) {
        console.log(data);

        data.results.forEach(photo => {

            let result = `
                <img src="${photo.urls.regular}">
                <a href="${photo.links.download}">
                `
                $("#result").html(result);
                
        });

    });






}