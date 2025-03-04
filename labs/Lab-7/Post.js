class Post {
    constructor(userId, postId, title, body) {
        this.userId = userId;
        this.postId = postId;
        this.title = title;
        this.body = body;
    }

    getPostInfo() {
        return `Post ID: ${this.postId}, User ID: ${this.userId}\nTitle: ${this.title}\nBody: ${this.body}`;
    }
}

module.exports = Post;