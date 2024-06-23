// Current tab
$(document).ready(function () {
    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
        $(".fa-play").addClass("hidden");

        $(this).find(".fa-play").removeClass("hidden");
    });
});

// Current tab navbar
$(document).ready(function () {
    $("ul.navtabs li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $("ul.navtabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
    });
});

// Autofocus tab from hash
$(document).ready(function () {
    let hash = window.location.hash;

    if (hash) {
        let tab = $('[data-tab="' + hash.substr(1) + '"]');
        if (tab.length > 0) {
            tab.click();
        }
    }
});


// Modal open/close scripts
function openModal(id) {
    document.getElementById(id)?.dispatchEvent(new CustomEvent("open-me", {
        detail: {}
    }));
}

function closeModal(id) {
    document.getElementById(id).dispatchEvent(new CustomEvent("close-me", {
        detail: {}
    }));
}

openModal("basicModal");

// Display Corporate Fields
function displayCorpFields(form_id) {
    $(`#corpFields-${form_id}`).toggleClass('hidden', false)
    $(`#corpFields-${form_id} #id_company_name`).prop('required', true)
    $(`#corpFields-${form_id} #id_company_tax`).prop('required', true)
}

function hideCorpFields(form_id) {
    $(`#corpFields-${form_id}`).toggleClass('hidden', true)
    $(`#corpFields-${form_id} #id_company_name`).prop('required', false)
    $(`#corpFields-${form_id} #id_company_tax`).prop('required', false)
}
