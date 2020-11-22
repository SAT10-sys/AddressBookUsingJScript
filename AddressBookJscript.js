class Contact
{
    get firstName(){return this.firstName;}
    set firstName(firstName)
    {
        let regexFirstName=RegExp("^[A-Z][A-Za-z]{2,}$");
        if(regexFirstName.test(firstName))
        this.firstName=firstName;
        else
        throw "Invalid First Name";
    }
    get lastName(){return this.lastName;}
    set lastName(lastName)
    {
        let regexLastName=RegExp("^[A-Z][A-Za-z]{2,}$");
        if(regexLastName.test(lastName))
        this.lastName=lastName;
        else
        throw "Invalid Last Name";
    }
    get address(){return this.address;}
    set address(address)
    {
        let regexAddress=RegExp("^[A-Za-z0-9]{5,}$");
        if(regexAddress.test(address))
        this.address=address;
        else
        throw "Invalid address";
    }
    get city(){return this.city;}
    set city(city)
    {
        let regexCity=RegExp("^[A-Z][A-Za-z]{5,}");
        if(regexCity.test(city))
        this.city=city;
        else
        throw "Invalid City";
    }
    get state(){return this.state;}
    set state(state)
    {
        let regexState=RegExp("^[A-Z][A-Za-z]$");
        if(regexState.test(state))
        this.state=state;
        else
        throw "Invalid State";
    }
    get zipCode(){return this.zipCode;}
    set zipCode(zipCode)
    {
        let regexZipCode=RegExp("^[1-9][0-9]{5}$");
        if(regexZipCode.test(zipCode))
        this.zipCode=zipCode;
        else
        throw "Invalid ZipCode";
    }
    get phoneNumber(){return this.phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let regexPhoneNumber=RegExp("^[1-9][0-9]{9}$");
        if(regexPhoneNumber.test(phoneNumber))
        this.phoneNumber=phoneNumber;
        else
        throw "Invalid Phone Number";
    }
    get emailId(){return this.emailID;}
    set emailID(emailID)
    {
        let regexEmailId=RegExp("^[a-z0-9A-Z]+([._+-][a-z0-9A-Z]+)*[@][a-z0-9A-Z]+[.][a-zA-Z]{2,3}(.[a-zA-Z]{2})?$");
        if(regexEmailId.test(emailID))
        this.emailID=emailID;
        else
        throw "Invalid Email ID";
    }
constructor(...params)
{
    this.firstName=params[0];
    this.lastName=params[1];
    this.address=params[2];
    this.city=params[3];
    this.state=params[4];
    this.zipCode=params[5];
    this.phoneNumber=params[6];
    this.emailID=params[7];
}
toString()
{
    return "First Name : "+this.firstName+"\nLastName : "+this.lastName+"\nAddress : "+this.address+
    "\nCity : "+this.city+"State : "+this.state+"\nZip : "+this.zipCode+"\nPhone : "+this.phoneNumber+"\nEmail : "+this.emailId;
}
}
try 
{
    let addressBookArray=new Array();
    addressBookArray.push(new Contact("James","Hetfield","Downtown","San Francisco","California","111111","1111111111","jhetfield@yahoo.co.in"));
    addressBookArray.push(new Contact("Cliff","Burton","Manhattan","New York City","New York","222222","2222222222","cburton@gmail.com"));
    addressBookArray.push(new Contact("Axl","Rose","Queens","New York City","New York","333333","3333333333","arose@gmail.com"));
    addressBookArray.forEach(contact=> console.log(contact.toString()+"\n"));
    function CheckDuplicate(contact)
    {
        if(addressBookArray.find(c=>c.firstName==contact.firstName && c.lastName==contact.lastName))
        throw "Contact already exists";
    }
    function AddContacts(contact)
    {
        CheckDuplicate(contact);
        addressBookArray.push(contact);
    }
    addressBookArray.filter(contact=> contact.city=="San Francisco"||contact.state=="New York City").forEach(contact=>console.log(contact.toString()+"\n"));
    console.log("Number of contacts belonginf to New York City");
    console.log(addressBookArray.filter(c=>c.city=="New York City").length);
    console.log("Number of contacts belonging to California");
    console.log(addressBookArray.filter(c=>c.state=="California").length);
    let sortedArray=addressBookArray.slice(0).sort((c1,c2)=>c1.firstName.localeCompare(c2.firstName));
    sortedArray.forEach(c=>console.log(c.toString()+"\n"));
} 
catch (e)
{
    console.error(e);
}
