const containerHeart = document.querySelector(".hearts-layer");
export function heartSpawner(){
    setInterval(() => {
        const div = document.createElement("div");
        div.classList.add("back-heart");
        div.textContent =  "♥️";
        div.style.left = ((Math.random() * window.innerWidth) - 50)  + "px";
        div.style.top = Math.random() * window.innerHeight + "px";
        containerHeart.appendChild(div)
        div.addEventListener("animationend", (e) => {
            if (e.animationName === "up-heart") {
                div.remove();
            }
        })
    }, 300);
}