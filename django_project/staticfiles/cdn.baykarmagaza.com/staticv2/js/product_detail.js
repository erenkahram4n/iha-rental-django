// Product detail img zoom
let bigImage = document.getElementById("big-image");
let zoomImage = document.getElementById("zoom-image");

bigImage.addEventListener("mousemove", function (event) {
    let imageRect = bigImage.getBoundingClientRect();
    let offsetX = event.clientX - imageRect.left;
    let offsetY = event.clientY - imageRect.top;
    let zoomRatio = 4;

    let translateX = -offsetX * (zoomRatio - 1);
    let translateY = -offsetY * (zoomRatio - 1);

    zoomImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomRatio})`;
});

// Product detail img rotate
const rotateButton = document.getElementById('rotate-button');
rotateButton.addEventListener('click', e => rotateSelectHandler(e, true));

let imgItems = document.querySelectorAll(".img-item");
const arrow = document.getElementById('look-arrow');

let angleIndex = 0;
const angles = [180, 210, 300, 180, 210];
const radiusX = 17;
const radiusY = 5.75;
const centerX = 15;
const centerY = 1;

const newX = centerX + radiusX * Math.cos((angles[angleIndex] - 90) * (Math.PI / 180));
const newY = centerY + radiusY * Math.sin((angles[angleIndex] - 90) * (Math.PI / 180));
arrow.setAttribute('transform', `translate(${newX} ${newY}) rotate(${180 + (angles[angleIndex] % 360)} 0 0)`);

$(document).ready(function () {
    $(".img-item").mouseenter(function () {
        $(".img-item").not(this).addClass("blur-[0.5px]");
        $(this).addClass("blur-[0px]");
    });

    $(".img-item").mouseleave(function () {
        $(".img-item").not(this).removeClass("blur-[0.5px]");
        $(this).removeClass("blur-[0px]");
    });
});
const zoomedImage = document.getElementById("zoom-image");

function rotateSelectHandler(event, fromIcon = false) {
    event.preventDefault();
    if (fromIcon) {
        angleIndex = (angleIndex + 1)
        if(angleIndex==imgItems.length){
            angleIndex = 0
        }
        clickedImg = imgItems[angleIndex].src;

    } else {
        angleIndex = Number(event.target.getAttribute('data-id')) - 1;
        clickedImg = event.target.src;
    }


    const newX = centerX + radiusX * Math.cos((angles[angleIndex] - 90) * (Math.PI / 180));
    const newY = centerY + radiusY * Math.sin((angles[angleIndex] - 90) * (Math.PI / 180));

    let bigImage = document.getElementById("big-image");
    let imgSrc = bigImage.getAttribute("src");

    if (imgSrc !== clickedImg) {
        bigImage.src = clickedImg;
        zoomedImage.src = clickedImg;
    }
    arrow.setAttribute('transform', `translate(${newX} ${newY}) rotate(${180 + (angles[angleIndex] % 360)} 0 0)`);
}

// Product detail max product count
function productCountSetter(event) {
    const maxValue = Number(document.getElementById('max-count').innerText.replace(/[^0-9]/g, ''));

    let value = Number(document.getElementById('product-count').value);
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');
    if (event.currentTarget.id === 'increment-button' && value !== maxValue) {
        value++;
    } else if (event.currentTarget.id === 'decrement-button' && value !== 0) {
        value--;
    }
    document.getElementById('product-count').value = value.toString();
    if (value === 0) {
        decrementButton.classList.replace('cursor-pointer', 'cursor-default');
        decrementButton.getElementsByTagName('span')[0].classList.replace('text-gray', 'text-lightgrayh');
    } else {
        decrementButton.classList.replace('cursor-default', 'cursor-pointer');
        decrementButton.getElementsByTagName('span')[0].classList.replace('text-lightgrayh', 'text-gray');
    }
    if (value === maxValue) {
        incrementButton.classList.replace('cursor-pointer', 'cursor-default');
        incrementButton.getElementsByTagName('span')[0].classList.replace('text-gray', 'text-lightgrayh');
    } else {
        incrementButton.classList.replace('cursor-default', 'cursor-pointer');
        incrementButton.getElementsByTagName('span')[0].classList.replace('text-lightgrayh', 'text-gray');
    }
}

// Product detail accordions
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
            header.parentElement.classList.add("bg-lightgray");
        } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
            header.parentElement.classList.remove("bg-lightgray");
        }
    });
});
