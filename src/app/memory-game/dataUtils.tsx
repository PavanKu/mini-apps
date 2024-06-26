import { categories, imageMap } from "../../data/data";

type levelConfigType = {
    background: string,
    col: number,
    list: Array<{ img: string, alt: string }>
}
const SUPPORTED_LEVELS = 4;
const MIN_COLUMN = 2;
const STARTING_BOX_COUNT = MIN_COLUMN * 2;

const usedColumnCount = new Set<number>();

const levelConfig = new Map<number, levelConfigType>();

const levelBoxCountMap = populateLevelBoxMap(SUPPORTED_LEVELS);


function populateLevelBoxMap(level: number): Map<number, number> {
     const map = Array.from({length: level}).reduce((value:Map<number, number>, _, index) => {
         const prev = value.get(index);
        let boxCount = prev ? prev+2 : STARTING_BOX_COUNT;
        value.set(index+1, boxCount);
        return value;
    }, new Map<number, number>())
    
    return map;
}

export function getConfigByLevel(level: number): levelConfigType|void {
    let config = levelConfig.get(level);;

    if(config) {
        return config;
    }
    const boxCount = levelBoxCountMap.get(level);
    if(!boxCount) {
        console.error(`Unsupported level selected: ${level}`);
        return;
    }

    config = getConfigByBoxCount(boxCount);
    levelConfig.set(level, config);

    return config;
}

function getRandomBGColor() {
    const supportedBG = ["red", "blue", "orange", "violet", "cyan", "sky", "teal", "green", "purple"];
    const randomIndex = Math.floor(Math.random() * supportedBG.length);
    return supportedBG[randomIndex];
}

function getConfigByBoxCount(n:number):levelConfigType {
    const color = getRandomBGColor();
    // find unused column count. It will not be random as it needs to be in ascending order
    const col = getRandomColumn(n)||0;
    // find unused category of images
    const category = getRandomCategory();
    const images = imageMap.get(category);
    // Get images based on box count
    const uniqueImgCount = n/2;
    const randomStartIndex = Math.floor(Math.random()* (images.length - uniqueImgCount));
    const imageList = images.slice(randomStartIndex, randomStartIndex+uniqueImgCount);
    // Put images in n boxes so that one image will be repeated twice
    const imagesInOrder = new Array(n);
    for(let i=0; i<imageList.length; i++) {
        const img = imageList[i];
        const firstIndex = getRandomNumber(n);
        imagesInOrder[firstIndex] = img;
        const secondIndex = getRandomNumber(n);
        imagesInOrder[secondIndex] = img;
    }
    usedImgIndex.clear();

    return {
        background: color,
        col,
        list: imagesInOrder
    }
}

const usedImgIndex = new Set<number>();

function getRandomNumber(n: number): number {
    const number = Math.floor(Math.random()*n);
    if(!usedImgIndex.has(number)) {
        usedImgIndex.add(number);
        return number;
    } else {
        return getRandomNumber(n);
    }
}

function getRandomColumn(boxCount: number): number|void {
    for(let i=MIN_COLUMN; i<=boxCount; i++) {
        if(!usedColumnCount.has(i) && boxCount%i === 0) {
            usedColumnCount.add(i);
            return i;
        }
    }
    console.error(`Unable to find column count for box count: ${boxCount}`)
    return;
}

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length)
    return categories[randomIndex];
}