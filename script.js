console.log("welcome to NpC or fake");
const streakBox = document.getElementById("streak");
const imgBox = document.getElementById("images");
const s =Number (localStorage.getItem("streak")) ?? 0
streakBox.textContent = "streak : "+s;
//creating images 1and 2
const img1 = document.createElement("img");
const img2 = document.createElement("img");

img1.src = "https://thispersondoesnotexist.com/";


const id = Math.floor((Math.random() *6 + 1) * 10000)
img2.src = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;




img1.onclick = () => {
  alert("ah dang it");

  localStorage.setItem("streak", 0);
  location.reload();
};



img2.onclick = () => {
  alert("yahaha! you found me");

   localStorage.setItem("streak",  s + 1);
  location.reload();
};

if (Math.random() > 0.5){

    imgBox.append(img1);
    imgBox.append(img2);

}else{


    
    imgBox.append(img2);
    imgBox.append(img1);

}

