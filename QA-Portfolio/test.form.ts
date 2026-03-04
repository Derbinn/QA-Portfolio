import {expect} from '@wdio/globals'

describe ('Form page',()=>{
    it('Form', async()=>{
        //Click "Form" button
        const formsButton=await $('//android.widget.TextView[@text="Forms"]').click();

        //Type "test" in "Input field"
        const inputFiled=await $('//android.widget.EditText[@content-desc="text-input"]').setValue('test');

        //Click "Switch" button
        const clickSwitch=await $('//android.widget.Switch[@content-desc="switch"]').click();

        //Click dropdown menu
        const clickDropdown=await $('//android.widget.EditText[@resource-id="text_input"]').click();

        //Select from dropdown menu
        const itemSelect=await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]').click();
        
        //Click "Active" button
        const activeButton=await $('//android.widget.TextView[@text="Active"]').click();
    })
})