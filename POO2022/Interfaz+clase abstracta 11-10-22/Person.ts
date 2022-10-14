export class Person {
    protected name: string;
    protected lastName: string;
    protected id:number;

    constructor(paramName: string, paramLastName: string, paramId:number) {
        this.name = paramName;
        this.lastName = paramLastName;
        this.id=paramId;
    }
    public setName(paramName: string): void {
        this.name = paramName;
    }    
    public getName(): string {
        return this.name;
    }
    public setLastName(paramLastName: string): void {
        this.lastName = paramLastName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setId(paramId: number): void {
        this.id = paramId;
    }    
    public getId(): number {
        return this.id;
    }
    public toString():string{
        return this.getName() + " "+ this.getLastName();
    }
}