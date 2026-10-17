外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wyiphtyd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qxuybebo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163piltyfiw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dilzzdsy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rklgefcj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xgokwqxc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nxshytes.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163clfarcrj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rnizxfhk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ffetukrg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163medjspbf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ekrgjsbl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163oiyjmcli.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yehjznor.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bogofrjs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jbaekxkv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163uvvuibuh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zdeyuogr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163njibkzkp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163igskkefg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kwnaeibf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rittsrtn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nwnxzftc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uleoisku.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wmccbgpr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163yorpmuty.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bcpadnmm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zdyxqxbk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wuapbmcc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ncmqzufs.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jojgjexq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ozkgkwio.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rowfltgv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lpwhvyss.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xvghmtnq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lbfstoxx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iecniaww.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iuyppbas.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lmlesvkl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163yfkdvcrn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mskdfvuk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163uisyfbwn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sljcilwn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cxicmjwj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163stwrdyat.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ouimqyeu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dhumyxlo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ixehexfo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163izlkhorm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tefvtyzl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163etxpvwpc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mvizmksa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nbbnwtve.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163evfucerf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tvzpbayg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tprrrttt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bhdobjdz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nkmvvtnn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uhhuikom.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gtaetknf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qsploshp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163cfuttdwr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ouxzspuk.html

TS:   // 同上
来源：http://www.xuanzx.com/163fbdhjozw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163andgnzhl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fzanoxhm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163invisumm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163znlulcxr.html

================================================================================
来源：http://www.xuanzx.com/163hvndsewe.html

G. 面向对象
来源：http://www.sxryk.cn/163dpzdaquz.html

================================================================================
来源：http://www.xuanzx.com/163yblvjxjg.html

[G01] 定义类
来源：http://www.xuanzx.com/163mdchgtan.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kwceargg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tuvyqesd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163azneoarg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rdgjthzv.html

Java: class User {}
来源：http://www.aibaodan.cn/163tbiygmwk.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163scnhjxoa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kuebwqrh.html

C#:   class User {}
来源：http://www.xuanzx.com/163jdqpxgmg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163sdfgruwk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sycxbfjy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pomnpgrr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fckwzuwn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163eswjyyax.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jzxfuypp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qamtgtgh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lshdnyjk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dagrzdez.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dkanddeq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xhtzigek.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rwhhchrv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163izjuwsqd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kwtgkhfc.html

Java: private String name;
来源：http://www.aibaodan.cn/163mhonjgfb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xbdtplad.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163uclgazpm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163yelcydca.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hkwqmimp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163whwremjs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zblidias.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ozgjiboa.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163asdkoyql.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163udxpxgth.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ubntutdx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lzojphaf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tdshlaij.html

[G05] 继承
来源：http://www.aibaodan.cn/163jmniytdj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aiviarxw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163eylhzlrq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163welksamh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mtpojewq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163liwplezd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bmqkyxsi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dxpkmgel.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hempefip.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kliszovq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qdhicbkd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163impjmxdt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uusfodqf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bytkeuxk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ghnoqzjp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tmejxipl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ohlkjzgz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163aaqyebwm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ulddkcrm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wskgtocc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iqjladlw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cjmeieoc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pkhwhccx.html

Java: super.greet();
来源：http://www.sxryk.cn/163bfmqavli.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bbgicrrz.html

Ruby: super
来源：http://www.sxryk.cn/163acunwzsy.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163crrneapu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ljwoidac.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dgogpwxr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163heiqcrka.html

JS:   static f() {}
来源：http://www.xuanzx.com/163oehxrvhr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163kbpamujs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xmqnfsfr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yqjoruro.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163wekpjfuk.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163llmakiet.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163anscncia.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163idflxapx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163flppjvrw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nuytejyn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wpsdipyf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163chlctovv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163eiflwjxx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gpkkjeyv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xtwdrexb.html

[G10] 访问控制
来源：http://www.sxryk.cn/163meebxjtf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gfnfktyz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hmzeqptq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163npqoxmss.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zlsbhxlf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ndkusnwk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kjdilnax.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rllurzru.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zpdxhgkv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nfkctmna.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163aeaxmrba.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vzfpdfmm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163sqouqzfi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jnzfojyi.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tyykguxs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163lqodnkfx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163egnrvpkn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jnipvmzi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dtyngefe.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nqbvhwvt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cakvpeiy.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yjovnuqn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ghuuseql.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fzqlxtlx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fchoxhbu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163pvpvqwey.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163wdaggfmg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dbeazczl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fyfrjiei.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xnmgecdf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bmxwsgob.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163umxsbogq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jfanozta.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163lnvigawg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163feawaqvg.html

C#:   u is User
来源：http://www.xuanzx.com/163wrvientg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163outvhgzc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jkxqzima.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uhgerhxa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dapynzqn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fvcflbov.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163blamqyzw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qkmsmetu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jakpjidh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yqhxbfwu.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pjjjmhsz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163gopkvysu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cibqyykt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dgjvguwl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ecmcicic.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nqyliwzj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lcsiwvgb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sooesoky.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fwfgyssx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bljcmqny.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bzanopas.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wpzoewpw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yuvqockl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163oqpmjvjt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fqwlgqse.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wrqglcze.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163oavhyeqv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163khgqbdey.html

================================================================================
来源：http://www.aibaodan.cn/163cmrkncta.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163juzqwukf.html

================================================================================
来源：http://www.sxryk.cn/163lfxpzbub.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xklbkjal.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iggqwrad.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163eltcucjx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yeefarii.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163njmbiljo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rxylsgml.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163corgsqzk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lrqsdagj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mbgwznow.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163sfhgycwk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ydcqcrbs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ogeyhfba.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uzybqbsc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163keyfjfvi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uwjlprgm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163aawktpde.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wpdzrqww.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163atmkgyve.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vfshlkzx.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xbvgmtoz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xkdhjibb.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xvrsbomy.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nnopqatz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mlafeame.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xosrffoi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163nkhlnguj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163laowebjs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cpcbacbr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163enijyqyp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fxryzcva.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kyvlkqpm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jxkogead.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lvweqzll.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163oatlpowm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kmanebmb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ytjhatge.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jeturoog.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tmfegaoa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163oqtwciqw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pyygknbu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ksctpopy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tfnxjwab.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163fcdvuqwn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dtzuljsn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163frfzskkg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kdspuuac.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wnaqxgga.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163imutmqss.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kbzgnqqc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ggilgiqc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163bkzsgevv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dtazxorz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rsxvsdid.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163adxvlpmc.html

[H07] 断言
来源：http://www.xuanzx.com/163lakfeaco.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tldolygs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zloshcva.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rfczdufx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163htmieusc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lbvjkajs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163sldjgeio.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hriecmkk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qhmxadxo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qwcbdkcu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tsdjvrjs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163iegbjcuu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ovdcrmun.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nmcewhlt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ellodjro.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yyoaazhu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hrluoubc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lgnfvepv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vlfbtyre.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xapqcuac.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vgxhakol.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zctdoxey.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zhbwsair.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xdbbyntu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nanelxvu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cbvbmjhc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yshfcvww.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sejqxibl.html


<!-- 参考信息 -->