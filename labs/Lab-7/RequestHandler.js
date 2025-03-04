const Post = require('./Post');

class RequestHandler {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    async printTargetPost(userId, postId) {
        const response = await fetch(`${this.baseUrl}/posts/${postId}`);
        
        if (!response.ok) {
            console.error('Error: Post not found');
            return null;
        }

        const postData = await response.json();
        
        if (postData.userId != userId) {
            console.error('Error: User ID does not match');
            return null;
        }

        return new Post(postData.userId, postData.id, postData.title, postData.body);
    }

    async printAllPosts(userId) {
        const response = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
        
        if (!response.ok) {
            console.error('Error: Failed to fetch posts');
            return [];
        }

        const postsData = await response.json();
        return postsData.map(post => new Post(post.userId, post.id, post.title, post.body));
    }
}

module.exports = RequestHandler;