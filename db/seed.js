const Zoo = require('../models/Zoo');
const Animal = require('../models/Animal');

Zoo.find({}).deleteMany(() => {
	Animal.find({}).deleteMany(() => {
		let cityZoo = Zoo.create({
			name: 'Central Park Zoo',
			city: 'NYC',
		}).then((zoo) => {
			Promise.all([
				Animal.create({
					type: 'peacock',
					age: 5,
					img:
						'https://www.tripsavvy.com/thmb/Wge22IARl0uTpRzxRlmJ8vb6i_A=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20191116_BrakeThroughMedia_A22Y8175-064d2fffb08446c190d52262b9fab4d3.jpg',
				}).then((Animal) => {
					zoo.animals.push(Animal);
				}),
				Animal.create({
					type: 'red panda',
					age: 3,
					img:
						'https://www.centralpark.com/downloads/7731/download/Red%20Panda.jpg?cb=246f8039f93341db92facf7503c8217b&w=720&h=',
				}).then((Animal) => {
					zoo.animals.push(Animal);
				}),
			]).then(() => {
				zoo.save();
			});
		});
		let laZoo = Zoo.create({
			name: 'LAZoo',
			city: 'LA',
		}).then((zoo) => {
			Promise.all([
				Animal.create({
					type: 'american aligator',
					age: 37,
					img:
						'https://static.wikia.nocookie.net/disney-animals/images/c/c8/American-Alligator-Photos.jpg/revision/latest?cb=20171207204309',
				}).then((Animal) => {
					zoo.animals.push(Animal);
				}),
			]).then(() => {
				zoo.save();
			});
		});
		let houstonZoo = Zoo.create({
			name: 'houston zoo',
			city: 'Houston',
		}).then((zoo) => {
			Promise.all([
				Animal.create({
					type: 'bald eagle',
					age: 25,
					img:
						'https://houston.culturemap.com/thumbnail/600x600/photos/2019/04/17/Houston-Zoo-Wetlands_083744.jpg',
				}).then((Animal) => {
					zoo.animals.push(Animal);
				}),
				Animal.create({
					type: 'african lion',
					age: 13,
					img: 'https://s28164.pcdn.co/files/2016/09/jon-blog-2.jpg',
				}).then((Animal) => {
					zoo.animals.push(Animal);
				}),
			]).then(() => {
				zoo.save();
			});
		});
	});
});
