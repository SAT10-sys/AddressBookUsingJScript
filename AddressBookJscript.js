class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailID;
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
let contact1=new Contact("James","Hetfield","Downtown","San Francisco","California","111111","1111111111","jhetfield@yahoo.co.in");
let contact2=new Contact("Cliff","Burton","Manhattan","New York City","New York","222222","2222222222","cburton@gmail.com");
console.log(contact1.toString());
console.log(contact2.toString());