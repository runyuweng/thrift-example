// Data数据结构
struct Data {

  1: string code,

  2: string msg,

  3: list<List_Item> content

}

struct List_Item {

  1: string name,

  2: string words,

  3: string date

}


service SaveList{
   // ping方法
   void ping(),

   // 返回值为Data数据结构的save方法
   Data save(1:string name, 2:string words, 3:string date)

}
