import { Item } from './Item';

export default class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {    
    this.decreaseQualityByOne();
    this.decreaseQualityByOne();
    this.decreaseSellInByOne();
  }
}