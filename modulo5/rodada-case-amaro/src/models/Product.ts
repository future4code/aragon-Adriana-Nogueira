
export interface IProductDB {
    id: string,
    name: string
}

export interface ITagDB {
    id: string,
    tag: string
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string[] = []
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }
}
export interface IGetProductsInputDTO {
    search: string
}

export interface IGetProductsOutputDTO {
    products: Product[]
}

export interface IGetProductsByTagOutputDTO{
    products: IProductDB[]
}

export interface IProductInputDTO {
    token: string,
    name: string
}

export interface IProductOutputDTO {
    message: string
}

export interface ICreateTagInputDTO {
    token: string,
    id: string,
    tagName: string
}

export interface ICreateTagOutputDTO {
    message: string,
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string,
} 
export interface IDeleteInputDTO {
    token: string,
    productId: string
}

export interface IDeleteOutputDTO {
    message: string
}