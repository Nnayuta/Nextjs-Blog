export class MultimidiaModel {
    public name: string;
    public path: string;
    public originalName: string;

    constructor(props: MultimidiaModel) {
        Object.assign(this, props);
    }
}
