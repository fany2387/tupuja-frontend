export class ParseWrapper {
    
    protected Parse = require('parse').Parse;

    private name;
    private modelObject;

    constructor(klass : string){
        console.log("initializing for " + klass);
        this.initParseConnection('kvn+?QM6h)^5m.4t','https://tupuja-backend-app.herokuapp.com/parse');
        this.name = klass || "";
        this.modelObject = this.Parse.Object.extend(name);
    }

    public query() {
        return new this.Parse.Query(this.modelObject);
    }

    public model() {
        return this.modelObject;
    }

    /**
     * Initialize the parameters connection here.
     */
    public initParseConnection(apiKey: string, serverUrl: string): void{
        this.Parse.initialize(apiKey);
        this.Parse.serverURL = serverUrl;
    }

}