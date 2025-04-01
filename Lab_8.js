class Animal {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.getSpeed();
    }

    getSpeed() {
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    }
}

// Tạo các đối tượng động vật
const horse = new Animal("Horse", 70);
const tiger = new Animal("Tiger", 10);
const dog = new Animal("Dog", 60);

// Tìm con vật có tốc độ cao nhất
const animals = [horse, tiger, dog];
const winner = animals.reduce((prev, current) => (prev.speed > current.speed) ? prev : current);

// In kết quả
console.log(`Winner is ${winner.name}, with speed: ${winner.speed} km/h`);