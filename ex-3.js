//  Start coding here
class User{
    constructor(id,name,email){
        this.id=id
        this.name=name
        this.email=email
    }
}
class postList{
    constructor(){
        this.posts=[]
    }
    addPost(post){
        this.posts.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content,
            comments: post.comments,
          });
    }
    sharePost(postId){
        console.log(`You've shared post "${this.posts[postId - 1].title}" to your friend.`)
    }
}
class Post{
    constructor(id,title,content){
        this.id=id
        this.title=title
        this.content=content
        this.comment=[]
    }
    addComment(comment){
        return this.comment.push(comment)
    }
}
class Comment{
    constructor(id,content,createdBy){
        this.id=id
        this.content=content
        this.createdBy=createdBy
        this.like=0
    }
    addLike(){
        return this.like+=1
    }
}
class Facebook{
    constructor(){
        this.groupList=[]
        this.pageList=[]
    }
    addGroup(group){
        return this.groupList.push(group)
    }
    addPage(page){
        return this.pageList.push(page)
    }
}
class FacebookPage{
    constructor(name){
        this.name=name
    }
}
class FacebookGroup{
    constructor(name){
        this.name=name
    }
}
class Notification{
    constructor(id){
        this.id=id
    }
    send(comment,post){
        console.log(`Notification:${comment.createdBy.name} has just commented on this post—"${post.title}"`)
    }
}
