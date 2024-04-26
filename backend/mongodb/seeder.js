const {Post} = require("./schemes");

async function seedDatabase() {
    try {
        await Post.deleteMany({});

        // Добавляем начальные данные постов
        await Post.insertMany([
            { author: 'Daniil', text: 'Первый комментарий.' },
            { author: 'Sergey', text: 'Второй комментарий.' }
        ]);

        console.log('Initial posts added');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

module.exports = seedDatabase;