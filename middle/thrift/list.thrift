struct Data {
  1: string code,
  2: string msg
}


service SaveList{

   void ping(),

   Data save(1:string name, 2:string content, 3:string date)

}
