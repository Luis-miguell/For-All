import { heartSpawner } from "./utils/heartSpawner.js";
heartSpawner();

import { scrollXStart, scrollXEnd } from "./utils/scrollMonitor.js";
document.body.addEventListener("pointerdown", scrollXStart);
document.body.addEventListener("pointerup", scrollXEnd);

import { viewsController } from "./utils/viewsController.js";
viewsController.elementsContent();