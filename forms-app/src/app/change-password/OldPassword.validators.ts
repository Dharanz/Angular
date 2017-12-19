import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";



export class OldPasswordValidator{

    static CheckPassword(control: AbstractControl)
    {
        return new Promise((resolve) => {
        if(control.value != "1234")
            resolve({ CheckPassword : true });
        else
            resolve(null);
        });
    }

    static ComparePasswords(control: AbstractControl){
        let newPassword=control.get('newPassword');
        let confirmPassword=control.get('confirmPassword');

           if(newPassword.value != confirmPassword.value)
            return { ComparePasswords : true };
           
        return null;
    }
}