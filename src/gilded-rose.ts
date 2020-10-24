import Item from './item';
import { updateAgedBrie, updateItem, updateSulfuras, updateBackstagePass, updateConjuredItem } from './updateQuality';

export default class GildedRose {
  constructor(private items: Array<Item>) {}
    
    updateQuality() {
        this.items.forEach(item => {
            switch (item.name) {
                case 'Aged Brie': {
                    updateAgedBrie(item);
                    break;
                }
                    
                case 'Sulfuras': {
                    updateSulfuras(item);
                    break;
                }
                    
                case 'Backstage pass': {
                    updateBackstagePass(item);
                    break;
                }
                    
                case 'Conjured': {
                    updateConjuredItem(item);
                    break;
                }
                    
                default: {
                    updateItem(item);
                }
            }
        });

        return this.items;
    }    
}
