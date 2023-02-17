// an interface for user's class (crud)
// business logic for user
export interface User{
    addUser(): string,
    
    editUser():void,
    deleteUser():void,
    updateUser():void
}

// ui logic for user
export interface viewUser{
    viewuser(): string
}

// persistence logic for user
export interface userData{
    id: number
    uname:string,
    email:string,
    dob:number
}

// ui logic interface
export interface IUserGui{
    ViewUsers(): string
    ViewSingleUser(): string
}

// an interface for datasource
export interface data{
    getdata(): userData[]
}

// for command patterns in users
export interface userOperation{
    execute():string
    undo():string
}


// creating an observer pattern

export interface TempSubject{
    registertempObserver(o: TempObserver):void
    removetempObserver(o: TempObserver):void
    notify():void
}

export interface TempObserver{
    update(temp: number): number
}

// creating an interface for stratergy pattern
export interface bonus{
    getbonus():number
}