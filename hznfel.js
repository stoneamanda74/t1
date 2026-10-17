外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vjmwbusi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163euuhwagi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163colgbjms.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vfjkmqbo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jwwgxxmz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yzivsdti.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ipjhgnqm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rdpkxnic.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lxlmmyhj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lrbnleve.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sbtgivpc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wrgaysjl.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lxscqwlt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zofknbre.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fkatsvcb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ovyzkdzd.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ngymmwem.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ihsxsngl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kynuhtyz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kbolroxm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lkprqsjn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ifrxyemm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163shdlizlu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hasxpceo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wwofojwm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dwlyuioh.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fyrsiiwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ckecykgn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163unrsahqt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dfyclito.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dvqmxufh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bgdntiup.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dcrxztzv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163caceqhta.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qcekidyp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163nxsmabnl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163cxikjjch.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pkplpkwe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zpqwjfgd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pmunkrzc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xaotttax.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vbyoazph.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jysvicyq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qaigwqxb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wiiazrte.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kexbjodd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163yfbrclcl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vmsocrmb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xkthdqbf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fboujjok.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mcnbocwf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163enhubvwo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163itjprtsa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tzfgutmq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pzoqnwum.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163utimvtqd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163awtxqick.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163eamksmbh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wueqchmy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uafutpyb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pcbmapsk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jkrfgjsi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jnhcrzjg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sgwclzgl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163idvfnjqa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iyluvxsw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163risyumba.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lsrqmfot.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mmvxhgzn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lccxijel.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163wedmtdrx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xglzkxxg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ngcfdzcz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qbxpqrpc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163aziynriu.html

TS:   // 同上
来源：http://www.xuanzx.com/163vcgqtceb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163aguhhbbg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163uolnqecn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ulcwfuzu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xitsddbu.html

================================================================================
来源：http://www.sxryk.cn/163kbpxfdlz.html

G. 面向对象
来源：http://www.xuanzx.com/163leekyejx.html

================================================================================
来源：http://www.sxryk.cn/163tliogonx.html

[G01] 定义类
来源：http://www.sxryk.cn/163dyfjgkrw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lhzoofgz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163iqctlnet.html

JS:   class User {}
来源：http://www.sxryk.cn/163tnleuukt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ixszijah.html

Java: class User {}
来源：http://www.xuanzx.com/163lfdscymw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163attotxsg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xhlgodno.html

C#:   class User {}
来源：http://www.sxryk.cn/163prvvsxrv.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yjnehtnt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163thbqppkn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163onxroptj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rhkrwyjl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163klyfhijz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163hvdelvdk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lvqjmffw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163dmlksxfc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163huyyvtqr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dxhdezfe.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163snqfetbd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dfjzkfhx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rfrwdfcl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163srariqiz.html

Java: private String name;
来源：http://www.xuanzx.com/163fakjrtyx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ibphpvlh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rjkrbtdm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wfmdjpmm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zojvmdls.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mrekohfs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163rrsdocpd.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xqtibogb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hgnsaqnf.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zuzppipe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wosevurx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kopydwrn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sqvuvdug.html

[G05] 继承
来源：http://www.sxryk.cn/163mhwtaxmz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hyycocfz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hwuvjgay.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xufjfvmh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163llwdwfhz.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bdhyuums.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163grlnjyqz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kimijaze.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mtyhtcnk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nfqgawfr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163swimdduz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zambfslc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163auqqccxj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ecrenmxt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ivzvpicz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bugayphs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rytrtfht.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163assifukw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ffnhudvg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jybtswwh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vrcrznni.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163krajwqzq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ywtrlwwf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fskzbbte.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163osvmastg.html

Ruby: super
来源：http://www.sxryk.cn/163ewysoegp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163eicuwccy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vzmidozf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xtwqhgti.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163qwuyczrv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163omntemvd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163otrzjexw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ziftrctu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163isljtovl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163aqgvizko.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163yywjfxrq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163saznrlbc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zxcbcgio.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163knuqqgkn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163jcifnouw.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xezjmevv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163chslqzhc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163drsqmfen.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163stelbcks.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nuhwhcdl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vsmwdvaj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rasgkfpq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vyrlltco.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tvgbqzef.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kzzyzonv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163mgkwvqvp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zvobwlox.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kezswsqm.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fhhvipwn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xsvxxzic.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zoxtyadz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cvvhgnoj.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163sfdguzdo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qqdduprp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zxpyarwq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cyawbscs.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ziwqghrz.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fqleihrj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gqifmtdr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wgilehle.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xknavzei.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163zxgigyyu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zloicvuz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ehlufxgz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tyshqahm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163isvlhahu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xcuyicfm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ucdhbujh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pugoytpq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qokweyfx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pudiuuav.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uxmqqcnw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pxoijptq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bkmevblk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jlrprqsp.html

C#:   u is User
来源：http://www.xuanzx.com/163gevyflin.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163abgrkbag.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163eqwpghvc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rbvmmzry.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bflyfftn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lblbpbhc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ccubxmra.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163eoudwvut.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rrjqdoes.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nxlzuijl.html

[G15] 枚举
来源：http://www.sxryk.cn/163jctolkpd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lksglizr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dkrdppxn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qfgaocls.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rqanmqkl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dfcpwfma.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hzzcwwtn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163utlpiwjp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wpsfjaxu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zryzbxat.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oatkuqfs.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163smdrmcvt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163buxwptmy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hxaklydy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163urijbdcu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gvecdzkm.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tzoyzmnb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163aeawbxeu.html

================================================================================
来源：http://www.aibaodan.cn/163kiqyzsof.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lybiesdq.html

================================================================================
来源：http://www.sxryk.cn/163bcbxbrvy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ozyhovjv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mxedlzvf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hiqhbdfr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nxcihmha.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vdayhehd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ktovwgeo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163bjgtelzz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qynlellx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jfdyobnm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tfqujriv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163djxyhwyr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zznbmzhn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hegkitqo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rmxzwyoc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zdsadjbf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qpvylkol.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163moglftgt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163uouoensq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kmpglvyy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zxiufson.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bxcqzssx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jdbyjlyg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vmkdgmhi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dppphjwx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ntwakfmh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ocnbdwvw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163citxwxeo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qtwmcxow.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ksszhchb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163oasmswjb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lcahvspz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163emknuupp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hxoozchg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qdskjxfq.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163gqyrkxjo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163dsusccbh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lvwhlyoy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ljcngizp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ozhtkgih.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163htfnynla.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163geboxwvl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kfxzsile.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yhgsotwa.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pjcloyby.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xzfssepm.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wkbuosce.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kuvnkcxo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kcffazyn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mcklqolq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fqckmbeg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163riaryngx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163czdybhjc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xjzmaxgd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163caytqmxa.html

[H07] 断言
来源：http://www.sxryk.cn/163kqwtjpnk.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wkylrzgc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yayxopmn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dipicykt.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vusbjexh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mgfanoay.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163udiyache.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163queegjtj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rqvgdihm.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163itcmrigg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163eeuzgxum.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kgscpbcp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lobwzftj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163kehwijoh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fxzyhrfu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ssthvhvh.html


<!-- 参考信息 -->