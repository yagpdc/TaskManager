let modal = document.querySelector('#modal')
let fade = document.querySelector('#fade')
let openModal = document.querySelector('#open-modal')
let closeModal = document.querySelector('#close-modal')

let toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

openModal.addEventListener('click', () => {
    return toggleModal()
})
closeModal.addEventListener('click', () => {
    return toggleModal()
})

fade.addEventListener('click', () => {
    return toggleModal()
})

