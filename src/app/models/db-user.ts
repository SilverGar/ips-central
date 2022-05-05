
//REGULAR USERS
export interface DbUserTeam360 {
    TeamOwnerID?: number,
    TeamOwner?: string,
    PartnerID?: number,
    Partner?: string,
    Check1?: boolean,
    Check2?: boolean,
    Hours?: number,
    EvalType?: number,
    Approved?: boolean,
    Reason?: string
}

export interface UserType{
    Type: number
}

export interface User{
    id?: number,
    name?: string,
    email?: string
}

export interface ManageUsers {
    id: number,
    name: string,
    email: string,
    userType: boolean
}
//HUMAN RESOURCES
