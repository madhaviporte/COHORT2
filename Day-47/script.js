// var arr = [
//     {
//         user:'madhavi',
//         age:21,
//         city:'Bilaspur'
//     },
//     {
//         user:'Bhumika',
//         age:20,
//         city:'Ranchi'
//     },
//     {
//         user:'Kanika',
//         age:20,
//         city:'Bijnor'
//     },
//     {
//         user:'Yashsvi',
//         age:20,
//         city:'Telangana',
//     },
//     {
//         user:'Sarthak',
//         age:20,
//         city:'Vegus',
//     }
// ]
// // console.log(arr[3].city);

// var sum =0
// arr.forEach(function(elem){
//     sum = sum + elem.age
    
// })
// console.log(sum/arr.length);

const users = [
  {
    fullName: "Aarvi Sharma",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Software Developer",
    description: "Aarvi is a full-stack engineer specializing in MERN stack and cloud technologies."
  },
  {
    fullName: "Priya Patel",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UX/UI Designer",
    description: "Priya creates user-friendly interfaces with a focus on accessibility and modern design."
  },
//   {
//     fullName: "Rohan Mehta",
//     image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
//     profession: "Digital Marketer",
//     description: "Rohan specializes in SEO, content strategy, and social media growth campaigns."
//   },
  {
    fullName: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Sneha works with data visualization and predictive analytics using Python and PowerBI."
  },
  {
    fullName: "Karan Singh",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Photographer",
    description: "Karan is a travel and portrait photographer known for cinematic color tones."
  }
];


// var arr = ['Sarthak', 'Harsh', 'ritik']
// var sum =0
// arr.forEach(function (elem){
//     sum = sum + elem
// })

// console.log(sum);

var sum = ''
users.forEach(function(elem){
    sum = sum + `   <div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
    </div>`
    
})
var main =document.querySelector('main')
main.innerHTML = sum

