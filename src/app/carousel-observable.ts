import { Observable, BehaviorSubject } from 'rxjs';

export class CarouselObservable<T> {
  private pointer = 0;
  private visibleItems$ = new BehaviorSubject<T[]>([]);

  private get max() {
    return this.allItems.length;
  }

  constructor(private allItems: T[], private visibleItemsCount = 4) {
    this.regenerateVisibleItems();
  }

  private regenerateVisibleItems() {
    const visibleItemsArray: T[] = [];
    for (let i = 0; i < this.visibleItemsCount; i++) {
      const index = (this.pointer + i) % this.max;
      const itemOnIndex = this.allItems[index];
      visibleItemsArray.push(itemOnIndex);
    }
    this.visibleItems$.next(visibleItemsArray);
  }

  public goRight() {
    this.pointer = (this.pointer + 1) % this.max;
    this.regenerateVisibleItems();
  }

  public goLeft() {
    this.pointer = this.pointer === 0 ? this.max - 1 : this.pointer - 1;
    this.regenerateVisibleItems();
  }

  public getVisibleItems(): Observable<T[]> {
    return this.visibleItems$.asObservable();
  }

  public changeVisibleItemCount(newCount: number) {
    this.visibleItemsCount = newCount;
    this.regenerateVisibleItems();
  }
}
