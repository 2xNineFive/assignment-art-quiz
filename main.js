// JavaSript code here

// Line 4 is just there to make sure that this file is linked.
// alert('How are you?');

// 3-16-23 FM 
// 1. The first step is to hard-code. By that, I mean that I will work entirely in HTML to make things work. In this instance, I want at least one image to show up in the DOM for the user to view. 

// console.log("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true");

// data[1]


const getData = async () => {
    const x = await fetch('https://api.artic.edu/api/v1/artworks/51719');
    const response = await x.json();

    // console.log(response.data);
    return response.data;
} 




const getImage1 = async () => {
    const data = await getData();
    console.log(data);

    // Somehow we need to get a URL. 

    // return url
}






const appendImage = async () => {
    const data = await getImage1();
    // console.log(data);
    
    // set img source to url
}
appendImage();