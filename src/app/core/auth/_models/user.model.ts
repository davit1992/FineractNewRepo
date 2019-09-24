import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';

export class User extends BaseModel {
    id: number;
    tenant: string;
    username: string;
    password: string;
    email: string;
    tokenType: string;
    accessToken: string;
    accessTokenExpiration: string;
    refreshTokenExpiration: string;
    passwordExpiration: string;
    refreshToken: string;
    roles: number[];
    pic: string;
    fullname: string;
    occupation: string;
	companyName: string;
	phone: string;
    address: Address;
    socialNetworks: SocialNetworks;

//     constructor(tokenType: string,
//         accessToken: string, accessTokenExpiration: string,
//         refreshTokenExpiration: string,
//         passwordExpiration: string) {
//     super();
//     this.tokenType = tokenType;
//     this.accessToken = accessToken;
//     this.accessTokenExpiration = accessTokenExpiration;
//     this.refreshTokenExpiration = refreshTokenExpiration;
//     this.passwordExpiration = passwordExpiration;
// }

    clear(): void {
        this.id = undefined;
        this.tenant='';
        this.username = '';
        this.password = '';
        this.email = '';
        this.roles = [];
        this.fullname = '';
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
        this.pic = './assets/media/users/default.jpg';
        this.occupation = '';
        this.companyName = '';
        this.phone = '';
        this.address = new Address();
        this.address.clear();
        this.socialNetworks = new SocialNetworks();
        this.socialNetworks.clear();
    };
}
