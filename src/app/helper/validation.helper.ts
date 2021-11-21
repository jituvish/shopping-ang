import { FormGroup } from '@angular/forms';

export function checkPass(){
    return function(userReg:FormGroup){
        let pass = userReg.controls.password;
        let repass = userReg.controls.re_password;

        if(repass.errors && ! repass.errors.reErr){
            return;
        }

        if(pass.value != repass.value){
            repass.setErrors({reErr : true});
        }
        else
        {
            repass.setErrors(null);
        }
    }
}

export function lengthContact(){
    return function(userReg:FormGroup){
        let con = userReg.controls.contact;

        if(con.errors && ! con.errors.conErr){
            return;
        }

        if(con.value.length < 10){
            con.setErrors({ conErr : true});
        }
        else
        {
            con.setErrors(null);
        }
    }
}

export function numContact(){
    return function(userReg:FormGroup){
        let num = userReg.controls.contact;

        if(num.errors && ! num.errors.numErr){
            return;
        }

        if(isNaN(num.value)==true){
            num.setErrors({numErr : true});
        }
        else
        {
            num.setErrors(null);
        }
    }
}

export function priceNum(){
    return function(product: FormGroup){
        let num = product.controls.price;
        if(num.errors && ! num.errors.numErr){
            return;
        }
        if(isNaN(num.value)==true){
            num.setErrors({numErr : true});
        }
        else{
            num.setErrors(null);
        }
    }
}


export function discountNum(){
    return function(product:FormGroup)
    {
        let num = product.controls.discount;
        
        if(num.errors && ! num.errors.disNum)
        {
            return;
        }
        if(isNaN(num.value)==true)
        {
            num.setErrors({disNum : true});
        }
        else
        {
            num.setErrors(null);
        }
    }
}














export function demo(){
    return function(dom:FormGroup){
        let s = dom.controls.city;
        
        if(s.value != "indore")
        {
            s.setErrors({ cityErr : true });
        }
        else
        {
            s.setErrors(null);
        }
    }

}


export function selectGen()
{
    return function(Gen:FormGroup){
        let m = Gen.controls.gender;

        if(m.value != "male")
        {
            m.setErrors( {genderErrorMsg : true} );
        }
        else
        {
            m.setErrors(null);
        }

    }
}



