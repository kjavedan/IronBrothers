// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm babggings twee health goth +1. Bicycletreuse before they sold out chambray pop-up. ShamanI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "I'm baby meggings twreuse before they sold out chambray pop-up. ShamanI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they soldpop-up. Shaman carry",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. ShamanI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. ShamanI'm baby meggings twee healtledrry",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const videos = [
    {
        id: 1,
        video: 'https://res.cloudinary.com/du95dt1xm/video/upload/v1654064781/myMedia/3_mwcc4t.mp4'
    },
    {
        id: 2,
        video: 'https://res.cloudinary.com/du95dt1xm/video/upload/v1654065144/myMedia/2_qzbbdo.mp4'
    },
    {
        id: 3,
        video: 'https://res.cloudinary.com/du95dt1xm/video/upload/v1654065161/myMedia/1_mjprus.mp4'
    },
    {
        id: 4,
        video: 'https://res.cloudinary.com/du95dt1xm/video/upload/v1654065644/myMedia/5_zafagp.mp4'
    },
    {
        id: 5,
        video: 'https://res.cloudinary.com/du95dt1xm/video/upload/v1654065511/myMedia/4_q4u9fd.mp4'
    }
]
const comments = [
    {
        id: 1,
        fullName: 'Banana',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
        id: 2,
        fullName: 'apple',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    },
    {
        id: 3,
        fullName: 'orange',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
        id: 4,
        fullName: 'kiwi',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
        id: 5,
        fullName: 'watermelon',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
        id: 6,
        fullName: 'cucumber',
        comment: 'Im babggings twee health goth +1. Bicycletreuse before they sold out chambray',
        picture:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    },

]
//starting number
let currentNumber = 0;

//getting values
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
// getting the values of the scroller
const scrollWrapper = document.querySelector('.scrolling-wrapper');
const ScrollWrapper1 = document.querySelector('.scrolling-wrapper-1');
// delete the reffered link from the local storage if the user click the button
const listButton = document.querySelectorAll('.button');
listButton.forEach( btn => {
    btn.addEventListener('click', function () {
        localStorage.clear();
    })
})

// getting the values of tips links in order to take the user to the choosen link in the subpages
const links = document.querySelectorAll('.scroll-link');
let refferedLink;
//adding functionality to each link
links.forEach(e => {
    e.addEventListener('click', function () {
        refferedLink = e.parentElement.textContent;
        refferedLink.toString;
        console.log(refferedLink);
        if (typeof (storage) !== undefined) {
            localStorage.setItem('link', refferedLink)
        }
    })
})

// show the pictures and videos when the page load
window.addEventListener("DOMContentLoaded", () => {
    setValue();
    showVideo(videos);
    displayComments(comments);
})
// add events to the buttons
next.addEventListener("click", () => {
    currentNumber++;
    if (currentNumber > reviews.length - 1) {
        currentNumber = 0;
    }
    setValue();
})
prev.addEventListener("click", () => {
    currentNumber--;
    if (currentNumber < 0) {
        currentNumber = reviews.length - 1;
    }
    setValue();
})

//setting value function
function setValue() {
    let item = reviews[currentNumber];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// show video function
function showVideo(items) {
    let item = items.map(function (item) {
        return (`<div class="card">
    <video class="scroll-video" src="${item.video}" controls></video>
</div>
`)
    }).join("")

    scrollWrapper.innerHTML = item;
    // console.log(scrollWrapper.innerHTML)
}

// display comments function
function displayComments(comments) {
    let comment = comments.map(comment =>
    (`<!--<button class="prev-btn-comment">-->
            <div class="members-story-card">
                <div class="user-image">
                    <img src="${comment.picture}" alt="user">
                </div>
                <p class="user-name">${comment.fullName}</p>
                <p class="user-comment">${comment.comment}</p>
            </div>
`)
    ).join("");
    ScrollWrapper1.innerHTML = comment;
}

