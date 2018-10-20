import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AnimalsService {
    //public API = 'http://192.168.201.82:3456';
    public API = 'http://192.168.1.40:3456';
    public ANIMALS_GET = this.API + '/animals';
    public ANIMALS_POST = this.API + '/animalPos';
    public ANIMALS_DEL = this.API + '/animalDel';

    constructor(public http: HttpClient) {
    }

    getAnimals(): Observable<any> {
        return this.http.get(this.API + '/animals');
    }
    
    save(animals : any): Observable<any> {
        let result: Observable<Object>;
        let animalData = new FormData();
        animalData.append("name", animals.name);
        animalData.append("weight", animals.weight);
        animalData.append("measure", animals.measure);
        animalData.append("average_age", animals.average_age);
        animalData.append("classification", animals.classification);
        animalData.append("classes", animals.classes);
        animalData.append("family", animals.family);
        animalData.append("genus", animals.genus);
        result = this.http.post(this.ANIMALS_POST, animalData);
        return result.catch(error => Observable.throw(error));
    }

    remove(id : string){
        return this.http.delete(this.ANIMALS_DEL + '/' + id)
    }
}