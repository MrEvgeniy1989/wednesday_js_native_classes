

const sm = document.getElementById("small")

const handler1 = () => {
    alert("Click")
}

const handler2 = () => {
    alert("Yo!!!")
}

const handler3 = (e) => {
    console.dir(e)
}

// sm.onclick = handler1
// sm.onclick = handler2
// sm.onclick = null

// sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)
// sm.removeEventListener("click", handler1)
sm.addEventListener("click", handler3)