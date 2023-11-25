export interface UserLoginDto{
  email:String;
  password:String;
}

export interface UserRegisterDto{
  firstname:String;
  lastname:String;
  pseudo:String;
  email:String;
  password:String;
  birthdate:Date|null;
  address:String;

}
