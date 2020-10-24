import { Item } from './Item';

export default class CommonItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.decreaseQualityByOne();
    if (this.sellIn <= 0) this.decreaseQualityByOne();
    
    this.decreaseSellInByOne();
  }
}
