import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';

export class UserService extends ParseWrapper{
    constructor(){ super("User"); }

    public save(user: UserModel): Promise<any> {
        let deferred = new Deferred();
        this.Parse.User
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
        let q = super.query();
        q.equalTo('username', id);
        q.find()
                .then((data)=>{
                    deferred.resolve(data);
                },
                (err) => {
                    deferred.reject(err);
                });

        return deferred.toPromise();
    }

    public getAllUsers(){
        let deferred = new Deferred();
        super.query().find()
            .then(users => deferred.resolve(users),
                err => deferred.reject(err));
        return deferred.toPromise();
    }

}