import { IUser } from "../model/mongo/types";

export default class UserDto {
    name: string;
    email: string;
    isActivated: boolean;
    id: string;
    constructor(model: IUser){
        this.name = model.name;
        this.email = model.userEmail;
        this.isActivated = model.isActivated;
        this.id = model._id
    }
}
