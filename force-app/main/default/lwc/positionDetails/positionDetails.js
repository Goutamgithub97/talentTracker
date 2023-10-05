import { LightningElement, wire } from 'lwc';
import fetchPositionDetails from '@salesforce/apex/fetchPositionDetails.PositionDetails';
import { NavigationMixin } from 'lightning/navigation';
// import { Flow } from 'lightning/flowSupport';
export default class PositionDetails extends NavigationMixin (LightningElement) {
records
error
buttonClicked=false
    @wire (fetchPositionDetails) wiredPositions( { error, data } ){
        if (data){
            console.log('Data===> ' + JSON.stringify(data));
            this.records= data;
            this.error= undefined;
        }
        if (error){
            this.error= error;
            console.log('Error===> ' +error);
            this.data= undefined;
        }
    }

    handleApplyClick(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name:'Apply_Online__c' 
            },
        });
        console.log("button clicked");
    }
}