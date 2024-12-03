const images = [
    {
        image: "img/Hexashop.png",
        imgLink: "C:/Users/DELL/Documents/Html projects/SELF-MADE/HEXASHOP CLONE/index.html"
    },
    {
        image: "img/Cyborg.png",
        imgLink: "C:/Users/DELL/Documents/Html projects/SELF-MADE/Cyborg Gaming/index.html"
    },
    {
        image: "img/Tour-site.png",
        imgLink: "C:/Users/DELL/Documents/Html projects/SELF-MADE/Tourism Site/index.html"
    },
]

let masterNum = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pic = document.getElementById("changeImg");
const link = document.getElementById("changeLink");
const yearText = document.getElementById("yearText");


function picAnimation() {
    pic.style.opacity = "0"

    setTimeout(() => {
        pic.style.opacity = "1"
    }, 500);
}

function changePic() {
    if (masterNum > images.length - 1) {
        masterNum = 0
    }
    if (masterNum < 0) {
        masterNum = images.length - 1
    }

    setTimeout(() => {
        pic.src = images[masterNum].image
    }, 500)
    setTimeout(() => {
        link.href = images[masterNum].imgLink
    }, 500)
}


nextBtn.addEventListener("click", () => {
    masterNum++
    picAnimation()
    changePic()
})
prevBtn.addEventListener("click", () => {
    masterNum--
    picAnimation()
    changePic()
})

const date = new Date

yearText.textContent = date.getFullYear()