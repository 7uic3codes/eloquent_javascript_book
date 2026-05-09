class Group {
    constructor() {
        this.set = [];
    }
    
    has(num) {
        if(this.set.indexOf(num) === -1) {
            return false;
        }
        return true;
    }

    add(num) {
        if (!this.has(num)) {
            this.set.push(num);
        }
    }

    delete(num) {
        if (this.has(num)) {
            this.set = this.set.filter(n => n != num);
        }
    }

    static from(nums) {
        const group = new Group();
        for (const num of nums) {
            group.add(num);
        }
        return group;
    }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
