export type Login= {
    personnelID:number
    password:string
}

export type PostUser = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export type Term = {
    id:number,
    title : string,
    date: any,
    termDate : number
}

export type CreateCertificate = {
    id:number,
    termId: number
}