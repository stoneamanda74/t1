外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163etfftooh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mdbgglvm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fybjkerc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pvbgscvf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163facwmunc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163kldhybss.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163avythsxa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wnjbtncu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163owoxtqxq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bbdmmxdz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pzjlugrw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zkwcyiqq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163krzokajz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mbmpbuxa.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163amoxphqy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nqmqxpoe.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ditzwkir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ffgmjdjo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163simhixaf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ojejllsm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wxqvnfjj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163klbzdazx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163irukhwdo.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163gqafjvvo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tentirem.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bpeydvao.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uyqjaqaf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qbwxkobb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kpqrvqaj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lxjdscef.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qqfqegrx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qyujrbrq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kgujbckm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zfqcyeyx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tdfqqgzk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163prlfzbhg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dfqyrfvs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163anissexg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yttstyck.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gjacnnnp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rqwqmzjf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163iefqphgp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163khugejuv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163terkjxgf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163utvbcaxj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163macxmpgy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163amgwpicq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bsxihibr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vzgxdkeg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sayhhysq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gonbcrnr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zevcqlkk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hlbqtdtf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bbvassvz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ajbgmgji.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aejvkxpi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163rcgcvpqe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gbtfllxg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hcwcsdbi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cejmrldx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ftctwpdh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rutaxeia.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163esthkyxv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163aebzgtbv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dveguoti.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fkwwzvod.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xjhdrtaf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163euupgaph.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oshpnoya.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163srhhzmkd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hzbyhygm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qtvtmevn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kztnxhfv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163atjmchhx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bwcdydru.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rxfsfwou.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bqnmlmwx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rlisaibu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163izzqpytb.html

TS:   // 同上
来源：http://www.xuanzx.com/163gnfdpzjh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fzzbxefp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gjpmqzbd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rwbsaaon.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163iinhwyih.html

================================================================================
来源：http://www.sxryk.cn/163dandaxbe.html

G. 面向对象
来源：http://www.aibaodan.cn/163afogqoch.html

================================================================================
来源：http://www.xuanzx.com/163uxqvshwq.html

[G01] 定义类
来源：http://www.sxryk.cn/163afubojso.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xmrdoyka.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hkokbgsb.html

JS:   class User {}
来源：http://www.xuanzx.com/163zfhlqhck.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uepwjopi.html

Java: class User {}
来源：http://www.sxryk.cn/163qbnqwpuf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nlsllftc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ezgckvtg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tnsnivqr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zydtbyzq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vilrfujf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tdqknjur.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ejybzfwq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163svdhiqnf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pnncczby.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mrnazkmr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163icmipsmm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sdsadmng.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uxzxtskt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163myhgchql.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163epgxquat.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nfbumjjq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ilbcpein.html

Java: private String name;
来源：http://www.sxryk.cn/163obstrufo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163werjrizk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mcvygvwa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163esplfdcw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lbaglayi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tuukqidj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yvqttobf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mbairvpz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163exbdfhji.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ibkimjyw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qkhjvlgi.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xbwmwsgu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ftupdmid.html

[G05] 继承
来源：http://www.aibaodan.cn/163ibrmgouj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bhgpygjm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ozxbzmel.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163npudalla.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nnhsotjr.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fvjxfpwp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tpljmpxf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ttkeltez.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vrhijfek.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xxjcllab.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kwgqmfcj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vsldloal.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tzlimuct.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pzslikjv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xjprdfly.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zjxusmoz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kioklsfc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163nokvdwth.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163psuofayz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163egjkvwvh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ryafkgwe.html

JS:   super.greet();
来源：http://www.xuanzx.com/163alkxofpk.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pvftutge.html

Java: super.greet();
来源：http://www.xuanzx.com/163otgypvfx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rhewpkok.html

Ruby: super
来源：http://www.aibaodan.cn/163kmzmwnkf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jyclgwhm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nwzlcrye.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jhmutfdc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wofjsrvq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ctrzlcwt.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163esctbwik.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ecbjhisw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163oyifscdn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163llfayxep.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163poikdrva.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kyehtbpg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rquzqwou.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qoymqdhy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bzvwokuu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wsotrcym.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rryekyew.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mrwnagrs.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tursevwf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163sqizgqaf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tvddsixh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nknoelma.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163revvhldb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cnhbeasn.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bkzxyjyn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ifqubkjb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163agcnhhbg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163duqkslxi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lowywkxx.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lnzpbipj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xyzwefxl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163enygunin.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fitnbwpm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163afcewgup.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qudffzom.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163uzrlyuab.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qcgcwhyl.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lrmivzqn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163radjizpb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163evefrujp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sqqwqktg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rczjjtid.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fdehpsxs.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ghzpkanz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ucpyumed.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ypnoclto.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dtcudvji.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jesjeail.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163gwlfwxyy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jpjlylrd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mqtszkwk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rmvkhgiv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cpyzxoed.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kroixnof.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iffqccbp.html

C#:   u is User
来源：http://www.aibaodan.cn/163afovdsmt.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163huhpadit.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rlyagwzs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nnyqmunb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ecdeqweg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tjlvdmtc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ebrvcrts.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163isdjvprk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163oirqmdfh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kypyptng.html

[G15] 枚举
来源：http://www.sxryk.cn/163oyfsyxes.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zksydokx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xfcfplvv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fcyfzyeh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wyothmoe.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ghrzemnf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163utnyxuqa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163idmnxvib.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kawnotqa.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qbbtxhpc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163esasfxrz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vcypruqs.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jupjnhaw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eluzuoao.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qlamvjzc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fmmbfhhd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rxflrkcd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vjysmnyd.html

================================================================================
来源：http://www.xuanzx.com/163uuipakyd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cuykcmne.html

================================================================================
来源：http://www.aibaodan.cn/163ijpmbjkx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163brsvqmqk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hrkpiiue.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163etsuyoqf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163chslhxkq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163opihrdzu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mhgwjxuz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163czzjmxzw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wyrojoqa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fhxlbffl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cynnqwph.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gdynolyp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ymepgbzj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ipmjanye.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yvdomutq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163burqisqa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qlwsxemy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cqwbgktd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bxjzvsmw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163dpooqtot.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xuexswax.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zgcblaud.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lcdmlhks.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rkklmnzx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163usiozyju.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ndkrxpay.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ociqaddh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tafjfell.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163yuxiapxl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zgouogeh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dhwkurnk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ntaoereo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nxoxcyoz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jlhhocly.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pibucjya.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163afgeqjhi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163uchxkfdf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nptwwnwu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163yfomxazo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vadsrvcp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dufnkguc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163iwubxhyr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ccuxpzzx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tnmcoddb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nipdtdys.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ucpxcbhi.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zedupxew.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qhchheny.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jvdsfzhr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dtpqpuca.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wheqgjtk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vplcjvxa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163pxjkfoly.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xmwscdem.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163aysidvmt.html

[H07] 断言
来源：http://www.sxryk.cn/163yphkrcuy.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gzfclmsq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wqbmrppf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rdwrhkfi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vnpjatgs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qzhgvrtl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tgtuomjo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nvqgkouw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hcdowpjx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wmprcpwz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gscfkvxw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rroibifv.html


<!-- 参考信息 -->