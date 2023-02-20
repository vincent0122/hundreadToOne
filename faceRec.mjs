import "@tensorflow/tfjs-node";

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
import * as canvas from "canvas";

import * as faceapi from "face-api.js";

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement
const {Canvas, Image, ImageData} = canvas;
faceapi.env.monkeyPatch({Canvas, Image, ImageData});

console.log(faceapi.nets);
