const readline = require('readline-sync');

function fetchPost(userId, postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            if (post.userId !== userId) {
                console.log("Post not found for this user!");
                return;
            }
            console.log("\n--- Post Content ---");
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}\n`);
        })
        .catch(error => console.error("Error fetching post:", error));
}

function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            console.log("\n--- All Posts by User ---");
            posts.forEach(post => console.log(`- ${post.title}`));
        })
        .catch(error => console.error("Error fetching user's posts:", error));
}

// Nhập từ người dùng
const userId = Number(readline.question("Enter User ID: "));
const postId = Number(readline.question("Enter Post ID: "));

// Gọi API
fetchPost(userId, postId).then(() => fetchUserPosts(userId));
