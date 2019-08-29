


const id = `a2e80fba06ddb537dbf2a961f157407ac65435083325bb8b8f4f762257002238`
let query = `italy`
let imageHTML = ``




addBlogPhotos(`italy`);
addBlogPhotos(`asia`);
addBlogPhotos(`australia`);
addBlogPhotos(`africa`);



function addBlogPhotos(query){


axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${id}`).then((res)=>{

    for(let i=0; i<res.data.results.length; i++){
            console.log(res.data.results[i].urls.regular);
            imageHTML += `<div class='pic'> <img class='blogImage' src=${res.data.results[i].urls.regular}/> </div>`
        }
        console.log(imageHTML);
        
        document.querySelector("#pics-div").innerHTML +=imageHTML;
    }).catch(err=>console.log)
    //https://api.unsplash.com/search/photos?page=1&query=rome&client_id=a2e80fba06ddb537dbf2a961f157407ac65435083325bb8b8f4f762257002238
    

}
