import { Item } from './items/Item';

export class GildedRose {
    constructor(private items: Array<Item>) { }
    
    updateQuality(): Item[] {
        this.items.forEach((item) => item.update());

        return this.items;
    }
}
