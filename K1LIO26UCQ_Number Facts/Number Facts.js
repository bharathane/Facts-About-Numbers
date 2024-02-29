let userInput = document.getElementById("userInput")
let fact = document.getElementById("fact")
let spinner = document.getElementById("spinner")

function display(event) {
    if (event.key === "Enter") {
        let options = {
            Method: "GET"
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value
        spinner.classList.remove("d-none")
        fact.classList.add("d-none")
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                spinner.classList.add("d-none")
                fact.classList.remove("d-none")
                fact.textContent = data.fact
            })

    }
}


userInput.addEventListener("keydown", display)