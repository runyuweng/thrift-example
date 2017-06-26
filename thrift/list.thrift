// Data数据结构
struct Data {

  1: string code,

  2: string msg

}


service SaveList{
   // ping方法
   void ping(),

   // 返回值为Data数据结构的save方法
   Data save(1:string name, 2:string content, 3:string date)

}
