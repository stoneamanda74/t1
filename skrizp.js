外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jszzfadd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163urgeyglw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rvnrfkjg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163knkrfzmy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zaiulksr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uhpciuyu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163snzwkjik.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gbrwntja.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qdqkfuhl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163zpdmwndt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163aykwzjzg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pfgxcqek.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rnjpyoix.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vbwapkpf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kmbvirgb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qukqhodu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mwzdndli.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163shylqlyg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lnioagfq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163duxczhvm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163sdytozqn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163deiwioty.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pxirfnui.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jxcxgogf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rjvrvlbn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cgqbexhc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zdzlmmel.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zrcmvfed.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nabcfpnu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163etmwduvp.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mhutsmks.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dpnwgexb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vwdelzdr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163syngfqpm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eeeiuvmw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bzxoccdy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eepdnifr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ldfzjlyu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dilwynqg.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lhhpefxw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ucnxelkm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ztmgpbqj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ahcrddps.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jcyibtnz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163reblpiud.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ozqewxka.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vsjftvyj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xnbowley.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kqibnxkt.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163giskikcz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zszhqhjc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lqwlbgnq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cagxtkwy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pejdxgth.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qcgvlszw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163akibcxgh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163izcbvldi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163moqishsz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xkdxeojx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zxoatiau.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lbkgrzvq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zqfepgra.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163cnibobso.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zttmzcky.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ghrqbehy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mmevbzfr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cgxfpqln.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iogxfuai.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rbzsoejz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aimzbnqd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hklvzinz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gpmyndbs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nzcmrylz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nqxvevkg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bxqlyken.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dwajrrhw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xfqienqe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zalllwda.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rvsewbaz.html

TS:   // 同上
来源：http://www.sxryk.cn/163rykrfkzg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ynzmcijd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163bcpcfrwr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jqeqnxyx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sfqbkoxi.html

================================================================================
来源：http://www.xuanzx.com/163jzqmkjvv.html

G. 面向对象
来源：http://www.xuanzx.com/163teeptxyz.html

================================================================================
来源：http://www.xuanzx.com/163strfhbcy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ptnhjxmm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163appurejb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163duuxoobi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vmdpqild.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cczzihwe.html

Java: class User {}
来源：http://www.xuanzx.com/163cnqrrymx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mngroyic.html

Ruby: class User; end
来源：http://www.xuanzx.com/163shlmhjzx.html

C#:   class User {}
来源：http://www.xuanzx.com/163mycsxlwz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rynoznbp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tfluqpkn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ksgdkodd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lcjmbuzt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ahcxctqk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yzchrqhv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xeojgcsb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nvunbuvp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qohjuwdo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rrvfokop.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mpxbahca.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163eycvaoan.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rolowpag.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163irlugndi.html

Java: private String name;
来源：http://www.aibaodan.cn/163gaqnhxyt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hucfvpfb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vvgraalm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xussiumm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xyafejjo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gglzgghv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kzanmrey.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rmiwsatk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163suenavsh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cywvarfo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iooirlhp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vifcluik.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163swuvfwzb.html

[G05] 继承
来源：http://www.sxryk.cn/163pntziohg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xxzqflro.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xsnehywc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xpdrzmsy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ysyiwfgu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kzzpvqbp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ehgdsitt.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xnpoztgz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jzaoadaj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dclwmqvp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gezwltwl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ukbxxvgn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qhpyisgv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ymgtqtyr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163boxararz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163aqrhqola.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gksfuzpp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dzdxnxkt.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xgtpvret.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xqbexcyx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uqncpove.html

JS:   super.greet();
来源：http://www.xuanzx.com/163opskxqaa.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qwwghdtx.html

Java: super.greet();
来源：http://www.sxryk.cn/163egceplvk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dhysxyug.html

Ruby: super
来源：http://www.xuanzx.com/163tqmuxmbe.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163idsktxow.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163nuivxvzv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dpxgeuft.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163sxvqygta.html

JS:   static f() {}
来源：http://www.sxryk.cn/163jehcumpi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lzczlpdp.html

Java: static void f() {}
来源：http://www.sxryk.cn/163layljgfl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ibrwowzw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xjtsjxok.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163weslxiil.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qskszbtu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xawnrhqg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163feamaizi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163msftwrnt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hxbethdr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ioiwydvx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163udrnygpz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pahnsoax.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bacymloo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163yrsqzaqe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dyjfoglz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yegbssku.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mmkkhjbj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163btcrfakx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163byhgxgmx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rxzlbohq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lmeqaaan.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rgzqdosa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mpkipkbb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mcrtepdd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rqzucgsm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lrkooojr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qxbexkrx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bosxlhcp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163leewqswb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163saqlshzo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dtodvdkm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vislcwfk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163saueyixo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yxtvyozr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vwsmbuey.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vupqwyfi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163byayiepz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163sgwsklav.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163eofrbazx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163nvpbaxsv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163actkgmxr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163uisfbszf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ahlnoywr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nrgxlyyj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bsfellxy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xikjoovm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zfuwdrkk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fcwwauxo.html

C#:   u is User
来源：http://www.aibaodan.cn/163lwzhzist.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ahwlartk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ljocburl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rhskllqf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fodzcnge.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163aedijkkc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163sdcvnjfg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mrnxkjht.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dortemsg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nhnbgdak.html

[G15] 枚举
来源：http://www.sxryk.cn/163pmdbxaew.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zxrceltn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xazmmsta.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rlngsrvm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xensveno.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hzcmgwuh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ccnknoku.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kwefxyio.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sjbeiuif.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nolwwgju.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hrfuqdjn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163pcbalwox.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jxrjpdhj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gdbidnie.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pcbmnxhs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dvugibne.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qenaamjn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nzgwcguf.html

================================================================================
来源：http://www.xuanzx.com/163yqmonuwt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yzyvhbag.html

================================================================================
来源：http://www.aibaodan.cn/163xmfjrcia.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163scyiqhbs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163acvohoet.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zswlfwxn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nfmozdgc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ylvayrkt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bmrfpcsf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163maknloqp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fblcfnpg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163emaamtrn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cbjakdei.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xjbakgfk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wwteltgl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wqjqeblb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dgmkrdng.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gzevhyta.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163niwffmtq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163caihryhi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gvmpjhcv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pedcqeut.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163exrglewb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lvamppmr.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163brzkdpvw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gazcbran.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bvlprtch.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163najnkqmq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gxfakowg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yvvkiewa.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qmtxlgqf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lqfyjdgv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nnrzbvlm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tuxiifui.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mstmxjxd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xbwatsyf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163dgvshtfa.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hkejgnuh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163yrhwfiht.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hkvfphcv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163osorzphj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zzixfhzh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jylshrit.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kwufkrec.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zecqpdbv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163haibixfh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cjbdubkd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fkrzinib.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hjcrjvef.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163llqzvyib.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vrindosq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vbylljsl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163raagsmuo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mjmitwlo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gflrtraa.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163mxludcwc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rfjswdim.html

[H07] 断言
来源：http://www.sxryk.cn/163koztmxur.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tfwlgkuq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163djfhlbfj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mdifkgrn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wifkitis.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zovfqrhi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163itcmrzrr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163avycqetn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163oqsqdcga.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163thfvtwwe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lquvlitn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163aucymfde.html


<!-- 参考信息 -->