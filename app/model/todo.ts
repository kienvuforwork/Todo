
export interface TodoTypeClient{
    id:string,
    title:string,
    username:string,
    createdAt:string,
    expectedDate:string,
    complete:boolean
}

export interface TodoTypeServer{
    id:string,
    title:string,
    username:string,
    createdAt:Date,
    expectedDate:Date,
    complete:boolean
}