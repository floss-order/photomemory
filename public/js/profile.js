const form = document.querySelector('form')
const profileInput = document.getElementById('profile')
const accountSection = document.querySelector('.account-section')
const footer = document.querySelector('footer')


function showAll() {
    // selectors.forEach(selector => selector.classList.remove('hidden'))
    accountSection.classList.remove('hidden')
    footer.classList.remove('hidden')
}