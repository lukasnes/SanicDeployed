let bored = document.querySelector(".bored")

const boredBtn = (evt) => {
    evt.preventDefault()
    axios
        .get('http://localhost:4000/api/activity')
}

document.querySelector(".bored").addEventListener('click',boredBtn)