import Item from './item';

const MAXIMUN_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const isLessThanMaximun = (quality: number) => quality < MAXIMUN_QUALITY;
const isGreaterThanMaximun = (quality: number) => quality > MINIMUM_QUALITY;

const increaseQualityByOne = (quality: number) => isLessThanMaximun(quality) ? quality + 1 : quality;
const decreaseQualityByOne = (quality: number) => isGreaterThanMaximun(quality) ? quality - 1 : quality;

const decreaseSellInOfItem = (item: Item) => item.sellIn--;

const updateQualityOfItem = (item: Item, newQuality: number) => {
  item.sellIn <= 0 ? item.quality -= 2 : item.quality = newQuality;
}

export const updateItem = (item: Item) => {
  decreaseSellInOfItem(item);

  const newQuality = decreaseQualityByOne(item.quality);
  updateQualityOfItem(item, newQuality);
}

export const updateAgedBrie = (agedBrie: Item) => {
  decreaseSellInOfItem(agedBrie);

  const newQuality = increaseQualityByOne(agedBrie.quality);
  updateQualityOfItem(agedBrie, newQuality);
}

export const updateSulfuras = (sulfuras: Item) => {
  sulfuras.quality = 80;
}

export const updateBackstagePass = (backstagePass: Item) => {
  decreaseSellInOfItem(backstagePass);
  concertHasPassed(backstagePass.sellIn) ? backstagePass.quality = 0 : updateQualityOfItem(backstagePass, increaseQualityBackstagePass(backstagePass));
}

export const updateConjuredItem = (conjuredItem: Item) => {
  decreaseSellInOfItem(conjuredItem);
  
  let newQuality = decreaseQualityByOne(conjuredItem.quality);
  newQuality = decreaseQualityByOne(newQuality);
  updateQualityOfItem(conjuredItem, newQuality);
}

const concertHasPassed = (sellIn: number) => sellIn <= 0;

const increaseQualityBackstagePass = (backstagePass: Item) => {
  let newQuality = increaseQualityByOne(backstagePass.quality);
  
  if (backstagePass.sellIn <= 10) newQuality = increaseQualityByOne(newQuality);
  if (backstagePass.sellIn <= 5) newQuality = increaseQualityByOne(newQuality);

  return newQuality;
}



