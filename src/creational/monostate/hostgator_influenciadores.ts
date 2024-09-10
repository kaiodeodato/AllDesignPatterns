export class HostgatorInfluenciadores {
    
    private static members: any[] = [];

    public constructor() {}

    public setMembers(newMembers: any[]): void {
        HostgatorInfluenciadores.members = [...HostgatorInfluenciadores.members, ...newMembers];
    }

    public getMembers(): any[] {
        return HostgatorInfluenciadores.members;
    }

    public getMembersLength(): number {
        return HostgatorInfluenciadores.members.length;
    }
}