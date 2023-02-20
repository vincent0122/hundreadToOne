// Here's a sample Node.js code that you can use to make a collage image with 100 circle cropped images using the Jimp image processing library:

const Jimp = require("jimp");

async function createCollage() {
  const width = 1000; // Width of the collage image
  const height = 1000; // Height of the collage image
  const radius = 200; // Radius of the circles

  const images = []; // Array to hold the cropped images

  // Load the images and crop them into circles
  for (let i = 1; i <= 3; i++) {
    const image = await Jimp.read(`./images/${i}.jpg`);
    image.resize(radius * 2, radius * 2); // Resize the image to fit the circle
    image.circle(); // Crop the image into a circle
    images.push(image);
  }

  // Create a new image with the specified dimensions
  const collage = new Jimp(width, height, "white");

  // Paste the cropped images onto the collage
  for (let i = 0; i < images.length; i++) {
    const row = Math.floor(i / 10); // Calculate the row and column of the current image
    const col = i % 10;
    const x = col * (radius * 2 + 10); // Calculate the x and y coordinates of the current image
    const y = row * (radius * 2 + 10);
    collage.blit(images[i], x, y); // Paste the image onto the collage
  }

  // Save the collage image
  collage.write("collage.jpg");
}

module.exports = {createCollage};
