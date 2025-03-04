const RequestHandler = require('./RequestHandler');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestHandler = new RequestHandler();

async function lab7() {
    rl.question('Enter User ID: ', async (userIdInput) => {
        rl.question('Enter Post ID: ', async (postIdInput) => {
            const userId = parseInt(userIdInput);
            const postId = parseInt(postIdInput);

            const targetPost = await requestHandler.printTargetPost(userId, postId);
            if (targetPost) {
                console.log('\nTarget Post:');
                console.log(targetPost.getPostInfo());
            }

            const allPosts = await requestHandler.printAllPosts(userId);
            if (allPosts.length > 0) {
                console.log('\nAll Posts for User ID', userId, ':');
                allPosts.forEach(post => console.log(post.getPostInfo()));
            } else {
                console.log('\nNo posts found for User ID', userId);
            }

            rl.close();
        });
    });
}

lab7();