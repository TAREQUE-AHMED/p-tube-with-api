function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories)
    )
}
function displayCategories(categories){
    const categoriesContainer=document.getElementById('category-container')
    for(let cat of categories){
        const categoryDiv=document.createElement('div');
        categoryDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoriesContainer.appendChild(categoryDiv)
        
    }

}
loadCategories();


function loadVideos (){
fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
.then(res=>res.json())
.then(data=>displayVideos(data.videos)
)
}
const displayVideos=(videos)=>{
const videoContainer=document.getElementById('video-container');
videos.forEach((video) => {
    const videoDiv=document.createElement('div')
    videoDiv.innerHTML=`
 <div class="card">
  <figure class="relative">
    <img class="w-full h-[150px] opacity-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-2  text-sm rounded text-white bg-black px-2" > 
        3 hrs 56 min ago
      </span>
  </figure>
  <div class="flex gap-3 px-0 py-5">
    <div class="profile">
<div class="avatar ">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2 ">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>

    </div>
    <div class="intro">
        <h1 class="text-sm font-semibold text">${video.authors[0].profile_name}</h1>
        <p class="text-sm text-gray-400 flex gap-3">Awal Halder <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="" srcset=""></p>
        <p class="text-sm text-gray-400">${video.others.views} views</p>
    </div> 
  </div>
</div>
    `
 videoContainer.append(videoDiv);   
});
}

loadVideos();