export class Carousel<T> {
  visibleItems: T[] = [];
  pointer = 0;
  visibleCount = 4;

  get max() {
    return this.allItems.length;
  }

  constructor(public allItems: T[]) {
    this.regenerateVisibleItems();
  }

  regenerateVisibleItems() {
    this.visibleItems = [];
    for (let i = 0; i < this.visibleCount; i++) {
      const index = (this.pointer + i) % this.max ;
      this.visibleItems.push(this.allItems[index]);
    }
  }

  goRight() {
    this.pointer = (this.pointer + 1) % this.max;
    this.regenerateVisibleItems();
  }

  goLeft() {
    this.pointer = this.pointer === 0 ? this.max - 1 : this.pointer - 1;
    this.regenerateVisibleItems();
  }
}
