// Add Aircraft icons next to related aircraft filtering checkbox
$(document).ready(function () {
    function applyCheckboxControl() {
        $('input[type="checkbox"][id^="aircraft-"]').each(function () {
            const img = $(`#aircraft-${this.id.split('-')[1]}_img`);
            img.css('opacity', this.checked ? '1' : '0');
        });
    }

    applyCheckboxControl();
    $('input[type="checkbox"][id^="aircraft-"]').change(function () {
        applyCheckboxControl();
    });
});
