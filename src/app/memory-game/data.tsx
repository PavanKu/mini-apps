export const categories = [
  "shapes",
  /* "fruits",
  "vegatables",
  "healthy",
  "junk", */
  "land-transport",
  "water-transport",
  "air-transport",
];

// Min 5 images per category
const shapes = [
  {
    img: "http://localhost:3000/images/memory-game/shapes/circle.jpeg",
    alt: "circle",
  },
  {
    img: "http://localhost:3000/images/memory-game/shapes/heart.jpeg",
    alt: "heart",
  },
  {
    img: "http://localhost:3000/images/memory-game/shapes/triangle.jpeg",
    alt: "triangle",
  },
  {
    img: "http://localhost:3000/images/memory-game/shapes/oval.jpeg",
    alt: "oval",
  },
  {
    img: "http://localhost:3000/images/memory-game/shapes/square.jpeg",
    alt: "square",
  },
];

const landTransport = [
  {
    img: "http://localhost:3000/images/memory-game/transport/land/cycle.jpg",
    alt: "cycle",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/land/scooter.jpg",
    alt: "scooter",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/land/bus.jpg",
    alt: "bus",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/land/car.jpg",
    alt: "car",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/land/bike.jpg",
    alt: "bike",
  },
];

const waterTransport = [
  {
    img: "http://localhost:3000/images/memory-game/transport/water/boat.jpg",
    alt: "boat",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/water/submarine.jpg",
    alt: "submarine",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/water/cruise.jpeg",
    alt: "cruise",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/water/jetski.jpeg",
    alt: "jetski",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/water/motorboat.jpeg",
    alt: "motorboat",
  },
];
const airTransport = [
  {
    img: "http://localhost:3000/images/memory-game/transport/air/airplane.jpg",
    alt: "airplane",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/air/air-balloon.jpg",
    alt: "air-balloon",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/air/helicopter.jpg",
    alt: "helicopter",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/air/para-gliding.jpg",
    alt: "para-gliding",
  },
  {
    img: "http://localhost:3000/images/memory-game/transport/air/space-shuttle.jpg",
    alt: "space-shuttle",
  },
];

export const imageMap = new Map();
imageMap.set("shapes", shapes);
imageMap.set("land-transport", landTransport);
imageMap.set("water-transport", waterTransport);
imageMap.set("air-transport",airTransport );
