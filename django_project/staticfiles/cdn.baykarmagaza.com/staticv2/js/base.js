// Site-wide Sweetalert2 Toast
let Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    iconColor: 'white',
    customClass: {
        popup: 'bstore-alert'
    },
    // Close modal on-click anywhere on itself
    didOpen: (toast) => {
        $(toast).on('click', function () {
            Swal.close()
        })
    }
})

function fireToast(response) {
    Toast.fire({
        icon: response.responseJSON ? response.responseJSON.icon : response.icon,
        title: response.responseJSON ? response.responseJSON.title : response.title,
        text: response.responseJSON ? response.responseJSON.text : response.text,
        html: response.responseJSON ? response.responseJSON.html : response.html
    })
}

function fireToastDisable(response, btn) {
    btn.prop('disabled', true);
    Toast.fire({
        icon: response.responseJSON ? response.responseJSON.icon : response.icon,
        title: response.responseJSON ? response.responseJSON.title : response.title,
        text: response.responseJSON ? response.responseJSON.text : response.text,
        html: response.responseJSON ? response.responseJSON.html : response.html,
        // To check if modal is destroyed by another modal or user. Triggers then()'s function
        didDestroy: () => {
            btn.prop('disabled', false);
        }
    }).then(function () {
        btn.prop('disabled', false);
    });
}

// Reset all the captcha on the same page
function resetCaptcha() {
    $('.g-recaptcha').each(function (i) {
        grecaptcha.reset(i);
    });
}


// Side Basket
function openSideBasket() {
    document.getElementById("sideBasket").style.transform = "translateX(0)";
    document.getElementById("basketOverlay").classList.remove("hidden");
    document.getElementById("basketOverlay").style.opacity = '0.75'
}

function closeSideBasket() {
    document.getElementById("sideBasket").style.transform = "translateX(100%)";
    document.getElementById("basketOverlay").classList.add("hidden");
}

// Close Side Basket if clicked outside Side Basket
$(document).ready(function () {
    $('#basketOverlay').click(function (e) {
        if ($(this).is(':visible') && !$(e.target).closest('#sideBasket').length) {
            closeSideBasket();
        }
    });
});