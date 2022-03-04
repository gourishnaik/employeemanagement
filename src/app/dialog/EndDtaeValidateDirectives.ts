import { HttpClient } from "@angular/common/http";
import {  AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";



// async email validation
// async validation




export function CompareDatesEnd(control:AbstractControl):any {
    
    if(control){
        const endDate =control.value ;
        const startDate = control.root.get('fromDate');
        if(startDate){
            const sDate = startDate.value;
            if(endDate < sDate){
                return {
                    isError :true
                };
            }
        }
    }
    }



export function CompareDates(control:AbstractControl):any {
    
    if(control){
        const endDate =control.value ;
        const startDate = control.root.get('from_date');
        if(startDate){
            const sDate = startDate.value;
            if(endDate < sDate){
                return {
                    isNot :true
                };
            }
        }
    }
    }
 




    export function NameValidates(control:AbstractControl):any{
     const nameSpecial : RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

     if(control.value && nameSpecial.test(control.value)){
         return {
             isValid : true
         }
     }
        }

        // email validation
        export function emailValidation(control:AbstractControl):any{
        const apiService = HttpClient;

        }
    