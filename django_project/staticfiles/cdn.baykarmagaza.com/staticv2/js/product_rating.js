// Product rating
let listComment = $('#listComment')
let writeComment = $('#writeComment')
let writeBtn = $('#writeBtn')
let writeDiv = $('#writeDiv')
let pagination = $('#pagination')
let rating_input = $('#rating')

writeBtn.click(() => {
    writeComment.attr({'style': 'display:block'})
    listComment.attr({'style': 'display:none'})
    pagination.attr({'style': 'display:none'})
    writeDiv.attr({'style': 'display:none'})
    transferStars();
})

const activeStarStyles = ["selected", "fa-solid"]
const deactiveStarStyles = ["fa-regular"]

const starsContainer1 = document.getElementById("starsContainer1");
const starsContainer2 = document.getElementById("starsContainer2")

if (starsContainer1) {
    starsList1 = starsContainer1.getElementsByTagName('i');
} else {
    starsList1 = []
}

if (starsContainer2) {
    starsList2 = starsContainer2.getElementsByTagName('i');
} else {
    starsList2 = []
}

for (let i = 0; i < starsList1.length; i++) {
    starsList1[i].addEventListener('click', function (e) {
        setStar(e, i, starsList1);
        rating_input.val(i + 1);
    });
}

for (let i = 0; i < starsList2.length; i++) {
    starsList2[i].addEventListener('click', function (e) {
        setStar(e, i, starsList2);
        rating_input.val(i + 1);
    });
}

let selectedRateIndex1 = -1;
let selectedRateIndex2 = -1;

function setStar(event, selectedIndex, starsList) {
    for (let i = 0; i < starsList.length; i++) {
        if (i <= selectedIndex && starsList.selectedRateIndex !== selectedIndex) {
            starsList[i].classList.add(...activeStarStyles)
            starsList[i].classList.remove(...deactiveStarStyles)
        } else {
            starsList[i].classList.remove(...activeStarStyles)
            starsList[i].classList.add(...deactiveStarStyles)
        }
    }

    if (starsList.selectedRateIndex === selectedIndex) starsList.selectedRateIndex = -1
    else starsList.selectedRateIndex = selectedIndex
}

function transferStars() {
    for (let i = 0; i < starsList2.length; i++) {
        if (starsList2[i].classList.contains("selected")) {
            let classes = starsList2[i].className.split(/\s+/);
            for (let cls of classes) {
                starsList1[i].classList.add(cls);
            }
        } else {
            starsList1[i].classList.remove("selected");
            starsList1[i].classList.remove("fa-solid");
            starsList1[i].classList.add("fa-regular");
        }
    }
}