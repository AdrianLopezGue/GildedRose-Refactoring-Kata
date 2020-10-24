import { Item } from './Item';

export default class AgedBrieItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.increaseQualityByOne();    
    this.decreaseSellInByOne();
  }
}
