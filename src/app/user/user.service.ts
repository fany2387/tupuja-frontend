import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';

export class UserService extends ParseWrapper{

    private User;

    constructor(){
        super();
        this.User = new this.Parse.User();
    }

    public save(user: UserModel): Promise<any> {
        let deferred = new Deferred();

        this.User
            .save(user)
                .then((data)=> {
                    deferred.resolve(data);
                },
                (err)=> {
                    deferred.reject(err);
                });
            

        return deferred.toPromise();
    }

    public getUserById(id: string){
        let deferred = new Deferred();

        this.User
            .get(id)
                .then((data)=>{
                    deferred.resolve(data);
                },
                (err) => {
                    deferred.reject(err);
                });

        return deferred.toPromise();
    }


}