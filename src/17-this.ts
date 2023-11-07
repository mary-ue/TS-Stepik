const user = {
  id: 123,
  admin: false,
  becomeAdmin: function() {
    this.admin = true;
  },
};

// this надо типизировать как 1 параметр функции
// тип this зависит от элемента, с которым работает, например здесь - button ↓
function meClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}