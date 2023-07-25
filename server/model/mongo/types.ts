export interface IUser {
 _id: string,
 userEmail: string,
 name: string,
 isActivated: boolean,
 activationLink: string,
 password: string,
 refreshTokens: [ string ],
 save: () => void
}
export interface UserDto {
    name: string,
    userEmail: string,
    isActivated: boolean,
   }