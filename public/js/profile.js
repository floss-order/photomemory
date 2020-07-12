const form = document.querySelector('form')
const profileInput = document.getElementById('profile')
const accountSection = document.querySelector('.account-section')
const footer = document.querySelector('footer')


form.addEventListener('submit', async event => {
    event.preventDefault()
    showAll()
    
    try {
        await sendProfile()
    }
    
    catch (error) {
        throw error
    }
})

function showAll() {
    // selectors.forEach(selector => selector.classList.remove('hidden'))
    accountSection.classList.remove('hidden')
    footer.classList.remove('hidden')
}

async function sendProfile() {
    const instagramUserName = profileInput.value
    const url = `/${instagramUserName}`
    fetch(url, { method: 'GET' })
}