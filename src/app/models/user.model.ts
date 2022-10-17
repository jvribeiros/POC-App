export interface User {
    id: number,
    name: string,
    credentials: Credentials
}

export interface Credentials {
    email: string,
    password: string,
}
