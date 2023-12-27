export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  render() {
    this._items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this.addItem(renderedItem);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
