import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    model(paramas){
        const{
            id
        }=paramas;
        return id;
    }
}
