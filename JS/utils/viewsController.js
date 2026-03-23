import { data } from "./visualData.js";
const dedicatoria = document.querySelector(".dedicatoria");
export let viewsController = {
    currentView: 0,
    dataInfo: {
        phrases: data.phrases,
        images: data.images
    },
    newView: (iod) => {
        if(iod == 1){
            if(viewsController.currentView > 0){
                viewsController.currentView -= 1;
                console.log("Mover izq ", viewsController.currentView)
                viewsController.elementsContent();
                viewsController.elementsRotate();
            }
        } else if(iod == 2){
            if(viewsController.currentView < viewsController.dataInfo.phrases.length - 1){
                viewsController.currentView += 1;
                console.log("Mover der ", viewsController.currentView)
                viewsController.elementsContent();
                viewsController.elementsRotate();
            }
        }
    },
    elementsRotate: () => {
        const container = dedicatoria;
        container.classList.remove("dedi-move");
        const elements = [...container.children];
        const first = elements.map(el => el.getBoundingClientRect());
        container.appendChild(elements[0]);
        const last = elements.map(el => el.getBoundingClientRect());
        elements.forEach((el, i) => {
            const dx = first[i].left - last[i].left;
            const dy = first[i].top - last[i].top;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            el.style.transition = "transform 0s";
            container.offsetHeight;
            requestAnimationFrame(() => {
                el.style.transform = "";
                el.style.transition = "transform 0.5s ease-in-out";
                container.classList.add("dedi-move");
            });
        });
    },
    elementsContent: () => {
        dedicatoria.querySelector("p").innerHTML = viewsController.dataInfo.phrases[viewsController.currentView];
        dedicatoria.querySelector("img").src = viewsController.dataInfo.images[viewsController.currentView];
    }
}