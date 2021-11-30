export class HealthSystems {
    constructor(adress, doctors) {
        this.adress = adress;
        this.doctors = doctors;
    }

    getAvailableDoctors() {
/*         return this.doctors.map(function (doc) {
            if(doc.turn==true){
            return doc.name}
        }); */
        const filterDocs=this.doctors.filter(doc => doc.turn==true)
        return filterDocs.map(function (doc) {
            return doc.name
        });
    }

}