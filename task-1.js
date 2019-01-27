function Bag (documents, accessories, gadget, money) {
    this.documents = documents;
    this.accessories = accessories;
    this.gadget = gadget;
    this.money = money;
}

Bag.prototype.addItem = function(propName, propVal) {
    this[propName] = propVal
};

Bag.prototype.removeItem = function(propValue) {
    delete this[propValue];
};

var myBag = new Bag('Паспорт', 'Ключи', 'Смартфон', 500);
