class HashTable {
    data: number[];
    constructor(data: number) {
        this.data = new Array(data);
    }
    _hash(key: string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const hash = this._hash(key);
        this.data[hash] = [key, value];
    }
    get(key) {
        const hash = this._hash(key);
        return this.data[hash];
    }
    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keys.push(this.data[i][0]);
            }
        }
        return keys;
    }
    values() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                values.push(this.data[i][1]);
            }
        }
        return values;
    }



}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 32);
myHashTable.set('bananas', 22);

console.log(myHashTable.get('grapes'));