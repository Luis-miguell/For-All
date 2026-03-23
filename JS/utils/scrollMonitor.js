import { viewsController } from "./viewsController.js";
let startX = 0;
let scrolling = false;
export function scrollXStart(e){
    startX = e.clientX;
    scrolling = true
}

export function scrollXEnd(e){
    const endX = e.clientX;
    const delta = endX - startX;
    if(delta > 100){
        viewsController.newView(1);
    } else if(delta < -100){
        viewsController.newView(2);
    }
    scrolling = false;
}