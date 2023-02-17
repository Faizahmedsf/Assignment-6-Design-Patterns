export interface calculate {
    calculate(): number
}


// for Interface segeration principle
export interface aboutproduct {
    productname(): void,
    productderipttion(): void,
    productprice(): void,
    testfunc(): void,
}

export interface productpaymnet {
    productpayment(): void
}

// for dependency inversion principle

export interface dbase {
    create(): void,
    update(): void,
    delete(): void,
}

export interface shape{
    getArea(): number
}


// Factory patterns

export interface OS{
    // name: string,
    // releasedate: number,
    // opensource: boolean,
    // secure: boolean,

    finalresult(): string
}

export interface IA {
    methodA(): void
}

export interface IB {
    methodB(): void
}


export interface UserA{
    name: string,
    email:string

    data():void
}

export interface productA{
    price(): void
}


// facade design patterns

export interface sports{
  
    sstart(): void,
    send():void
}


// observer patterns
export interface subject {
    registerobserver(o: Observer):void
    removeobserver(o: Observer):void
    notify():void
}

export interface Observer{
    update(temperature: number):void
}

// statergy pattern 
export interface shopping{
    getdiscount():number
}


// for command patterns
export interface operation{
    execute(parameterone: number):number
    undo(parametertwo: number): number
}

