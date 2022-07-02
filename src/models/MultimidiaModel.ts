export class MultimidiaModel {
    public readonly _id?: string;
    
    public name: string;
    public path: string;
    public originalName: string;

    constructor(props: MultimidiaModel) {
        Object.assign(this, props);
    }
}
