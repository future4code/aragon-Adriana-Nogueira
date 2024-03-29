export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) { }

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}
export interface ICreatePost {
    content: string,
    userId: string,
}



export interface IGetPostsInputDTO {
    token: string,
}
export interface IGetPosts {
    id: string,
    content: string,
    userId: string,
    likes: number
}

export interface IGetPostOutputDTO {
    posts: IGetPosts[]
}

export interface ICreatePostDTO {
    token: string,
    content: string,
}

export interface IDeletePostInputDTO {
    token: string,
    id: string
}

export interface ILikePostInputDTO {
    token: string,
    id: string,
}
export interface IDislikeInputDTO {
    token: string,
    id: string,
}

export interface IEditInputDTO {
    token: string,
    id: string,
    content: string,
} 


