// Change password visibility and the eye icon
function setPassVisibility(field_id) {
    let passwordInput = $(`#${field_id}`)
    let type = passwordInput.prop('type') === 'password' ? 'text' : 'password'
    passwordInput.prop('type', type)
    passwordInput.parent().find('#passIcon').toggleClass('fa-eye-slash fa-eye')
}