import {expect} from '@wdio/globals'

describe('Login page', ()=>{
    it('Login page', async()=>{
        //Click "Login" button from tab bar
        const loginButton=await $('//android.view.View[@content-desc="Login"]');
        await loginButton.waitForDisplayed({timeout:10000})
        await loginButton.click();
        await expect(loginButton).toBeExisting(); 

        //Type email
        const email=await $('//android.widget.EditText[@content-desc="input-email"]').setValue('test');

        //Type password
        const password=await $('//android.widget.EditText[@content-desc="input-password"]').setValue('1234567');

        //Click "Login" button
        const clickLogin=await $('//android.widget.TextView[@text="LOGIN"]').click();
    })

    it('Sign up', async()=>{
        //Click "Signup" button
        const signupButton=await $('//android.widget.TextView[@text="Sign up"]').click();

        //Type email
        const email=await $('//android.widget.EditText[@content-desc="input-email"]').setValue('test');

        //Type password
        const password=await $('//android.widget.EditText[@content-desc="input-password"]').setValue('1234567');

        //Repeat password
        const confPassword=await $('//android.widget.EditText[@content-desc="input-repeat-password"]').setValue('1234567');
        
        //Click "sign up" button
        const clickSignup=await $('//android.widget.TextView[@text="SIGN UP"]').click();
    })
}) 