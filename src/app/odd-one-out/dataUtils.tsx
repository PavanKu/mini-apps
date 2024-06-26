import { Image, categories, imageMap } from "@/data/data";

const CONFIG: levelConfigType = {
    result: "land-transport",
    images: [
      {
        img: "http://localhost:3000/images/memory-game/shapes/circle.jpeg",
        alt: "circle",
        category: "shapes",
      },
      {
        img: "http://localhost:3000/images/memory-game/shapes/oval.jpeg",
        alt: "oval",
        category: "shapes",
      },
      {
        img: "http://localhost:3000/images/memory-game/shapes/square.jpeg",
        alt: "square",
        category: "shapes",
      },
      {
        img: "http://localhost:3000/images/memory-game/transport/land/scooter.jpg",
        alt: "scooter",
        category: "land-transport",
      },
    ],
  };
  
export function getGameConfigByLevel(level: number): levelConfigType {
    // get 2 random categories
    const firstCategoryIndex = Math.floor(Math.random()*categories.length);
    let secondCategoryIndex = Math.floor(Math.random()*categories.length);
    while(secondCategoryIndex === firstCategoryIndex) {
        secondCategoryIndex = Math.floor(Math.random()*categories.length);
    }
    // get 3 pictures from one out of 2 categories
    const imagesFromFirstCategory = imageMap.get(categories[firstCategoryIndex]);
    const result = categories[firstCategoryIndex];
    const threeImagesFromFirstCategory = getRadomImagesFromList(3, imagesFromFirstCategory);
    const threeImagesFromFirstCategoryWithCategory = threeImagesFromFirstCategory.map(item => ({...item, category: categories[firstCategoryIndex]}))
    // get 1 picture of another category
    const imagesFromSecondCategory = imageMap.get(categories[secondCategoryIndex]);
    const oneImageFromSecondCategory = getRadomImagesFromList(1, imagesFromSecondCategory);
    const oneImageFromSecondCategoryWithCategory = oneImageFromSecondCategory.map(item => ({...item, category: categories[secondCategoryIndex]}));
    // return the config
    const config = {
        result,
        images: [ ...threeImagesFromFirstCategoryWithCategory, ...oneImageFromSecondCategoryWithCategory]
    };
    return config;
}

function getRadomImagesFromList(n:number, list:Array<Image>):Array<Image>  {
    const len = list.length;
    const maxStartIndex = len - n;

    const random = Math.floor(Math.random()* (maxStartIndex+1))

    return list.slice(random, random+n);
}

export type levelConfigType = {
    result: string,
    images: Array<{img: string, alt: string, category: string}>
}