// JavaSript code here

// Line 4 is just there to make sure that this file is linked.
// alert('How are you?');

// 3-16-23 FM 
// 1. The first step is to hard-code. By that, I mean that I will work entirely in HTML to make things work. In this instance, I want at least one image to show up in the DOM for the user to view. 

// console.log("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true");

// data[1]


// const getData = async () => {
//     const x = await fetch('https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=40');
    
//     const xResponse = await x.json();
//     console.log(xResponse);

//     // const y = await fetch('');

//     // return xResponse;
// } 
// getData();


const getImage1 = async () => {
    const data = await getData();
    // console.log(data);

    // Somehow we need to get a URL. 

    // return url
}
// getImage1();



const appendImage = async () => {
    const data = await getImage1();
    // console.log(data);
    
    // set img source to url
}
// appendImage();



// New code! This is correctly only working for page 1 of the fetch!!!


// `getData` is fetching data from the public domain. This information is from page 1. 
// This function fetches page 1 of the entire data set X. It also returns an array of objects that I will use to extract ids from. I will then use those `ids` to build my link that retrieves images. 
let page = 1;
const getDataBase = async () => {
    const x = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&page=${page}&limit=40`);
    
    const xResponse = await x.json();
    // console.log(xResponse);
    const data = xResponse.data;
    // console.log(data);
    return data;
} 


// This function is supposed to extract ids for me. 
let ids = [];
const getIds = async () => {
    const data = await getDataBase();
    // console.log(data.length);
    // data.forEach(element => console.log(element));
    // data.forEach(element => console.log(element.id));
    data.forEach(element => ids.push(element.id));
    console.log(ids);
}
getIds();


// I was initially trying to build a function to change the page, but I realized that it was unneccesary, if not impossible with JS. I was trying to chang the value of the pagination key, but as I was trying to do that, I realized that I could just change it via the link-- and that is how the documentation instructed is to do it. 
// This function is supposed to change the page of my 
// let page = 1;
// const changePage = async () => {
//     const x = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&page=${page}&limit=40`);
    
//     const xResponse = await x.json();
//      xResponse.forEach(element => console.log(element.id));
//     // return data;
// } 
// changePage();