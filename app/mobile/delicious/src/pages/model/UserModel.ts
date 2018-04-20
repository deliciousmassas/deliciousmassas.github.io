export class UserModel {
    readonly id: number;
    readonly user: string;
    readonly password: string;

    constructor(user: string, password: string, id?: number) {
        this.user = user;
        this.password = password;
        this.id = id;
    }



}