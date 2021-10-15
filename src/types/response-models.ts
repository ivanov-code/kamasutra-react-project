export interface IProfileResponseModel {
    userId: number;
    lookingForAJob: Boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
    photos: {
        small: string | null;
        large: string | null;
    }
}

export interface IUserResponseModel {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export interface IUsersResponseModel {
    items: IUserResponseModel[];
    totalCount: number;
}