export class HostgatorInfluenciadores {
    private static _instance: HostgatorInfluenciadores | null = null;
    
    private members: any[] = []; 

    private constructor() {}

    private clone(): never {
        throw new Error("Cloning this singleton is not allowed.");
    }

    private wakeup(): never {
        throw new Error("Waking up this singleton is not allowed.");
    }

    public static getInstance(): HostgatorInfluenciadores {
        if (HostgatorInfluenciadores._instance === null) {
            HostgatorInfluenciadores._instance = new HostgatorInfluenciadores();
        }
        return HostgatorInfluenciadores._instance;
    }

    public setMembers(newMembers: any): void {
        this.members = [...this.members, ...newMembers];
    }

    public getMembers(): any[] {
        return this.members;
    }

    public getMembersLength(): number {
        return this.members.length;
    }
}