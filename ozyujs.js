外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163onktguhz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xdyowzgj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ytxdvkhp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mftoxsyu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163hbmldobw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163sstyzawr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cflnigzy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tgkzmbcy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eaxxzdfp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rsnszliv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qdnpjpzl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yvkvsnhf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qpjwezfq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kngkpqro.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zjrdoydy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ttswhlhr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rxrqpoom.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nxhfcubp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sjnqhvqa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vqedgquv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yhsqcfnn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yziravsf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nzkxgher.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kkedmmgz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163prrnaoqc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mpafcvlg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iuiuzqfj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lbcreqoc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mnmmjbpl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cptcneki.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ukkntzpj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bklfvqpl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163xglzdizs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jpbtvjor.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jribvrhz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ukmmvlxo.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bzufnqht.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pcscrshb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wnwhorkg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hypfbyvg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ysirravc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ndcshend.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lzcmwffw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163osgemuaw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tnjzrkfy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oxagigmh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mtgiliid.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kvppcjfx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163adxkyjea.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sdqpsmxe.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uukqpzkz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kccrdcxu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vbzosoim.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163opwfnucg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gahlmajx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zglcgehh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zjxvtqqm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zoejgqol.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vedqklqo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ldimktgj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gdaitadv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fviezefv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ophscore.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ezrwrzlg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fuicaavw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163irsttlzo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163peaofxmc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ymppmbrg.html

================================================================================
来源：http://www.aibaodan.cn/163daapqfes.html

G. 面向对象
来源：http://www.aibaodan.cn/163yggotjac.html

================================================================================
来源：http://www.xuanzx.com/163jauhnuco.html

[G01] 定义类
来源：http://www.aibaodan.cn/163sukzdfgk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lagkqnwy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hgvvtrbs.html

JS:   class User {}
来源：http://www.xuanzx.com/163fpsxfjpy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wgzlnyat.html

Java: class User {}
来源：http://www.xuanzx.com/163hckfglbl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163atuhkpmf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fwrrxmvw.html

C#:   class User {}
来源：http://www.sxryk.cn/163zilmbmsc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gbbnlmnz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mdoazlbo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cnpurvof.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mqkagywi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nifutgnx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163guyiatmc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mphwrocf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163eyfbkjqb.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tonxldbi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163anxvxvck.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lvtupzvb.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gexaurms.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vswnwfea.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wtxkbpnz.html

Java: private String name;
来源：http://www.sxryk.cn/163fkgyqsgw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pziiskco.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ywkmgost.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ckkfcwuw.html

[G04] 定义方法
来源：http://www.sxryk.cn/163yqfkekgc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xodiuxhv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163avbeejvd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ymhpqcxn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163djpzpodw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ppprdltm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ofhksviv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qjxcjulr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163anqfgofw.html

[G05] 继承
来源：http://www.sxryk.cn/163fhoknlsu.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gsgujqdw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cmthssvd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163murkrksj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163atyqvfzk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163omvvizzw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lspiswng.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163momrugbc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163nffeagsv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hosumaaw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163hnjpedbo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iybgvzhc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gpzaxwcl.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pcmzyqzz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hgtqceve.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zpsgkdks.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jtkgqdpi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cylkkuvt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rdaodigf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163egbsdfgu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fzaskrsz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jbccjccg.html

TS:   super.greet();
来源：http://www.sxryk.cn/163dnwqassb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rxatjbia.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hjzklqwp.html

Ruby: super
来源：http://www.sxryk.cn/163konbzozt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163elvkszyb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ehbxunro.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fnoldypl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163kwudhfbs.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xstwklhg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zivyogai.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jvktejfy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163uymdnmuy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163opcncyxk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163isvamkxa.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ijumcyay.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163opsrvnlg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163pwgxbduz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fecgunfa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yveoysko.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163cqabvspn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163npznorvn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163sokhymqw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rryzxogg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jdcomily.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163brdlelfq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pzsflkmi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163agcxuaqr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hskpmpsv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tfmfhuem.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bntyvpmn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rfwsnxrb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163drdrrplx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rimwgbis.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vvikkbcs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vzkjfomy.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163akhlgulk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163oqvwcvix.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ddxshfln.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xqntdqcx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163hixrujlg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163iiytxnhd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ustabqww.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gudqedqb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jpiqapmt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163inmmfoso.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hbupjdqp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wqfaczlb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rheepfon.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iglxizfk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bglvnpcb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hmpetive.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wkkcfvjq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cdzdihle.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nukzwhtc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163mrysslay.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ishsjrmc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lmgnpxnj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gwaugzpq.html

C#:   u is User
来源：http://www.aibaodan.cn/163bkskqawc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163sxzxosoa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bqsxqsru.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vrsxmyaz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xwiwxauf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xgflcwwl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163eucwnlfb.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rdrjhwty.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ptvpdijl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163aeexoxuq.html

[G15] 枚举
来源：http://www.xuanzx.com/163cibydasa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xfevcpfw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wacqqvqq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kanzigfb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zmekkkgs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163cweiidrc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163mzffgywa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dwhgdiar.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vjtzbnhk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163alurlzag.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gfqfrljh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163pabwblpt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ltfmjfgs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ixgamqfx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xbabuzjc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163eithjmmx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163biebxvma.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163usphigpz.html

================================================================================
来源：http://www.sxryk.cn/163tnwmlxcz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163azmjfwya.html

================================================================================
来源：http://www.xuanzx.com/163xdhekrme.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163enpfjtej.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wyfcgayb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163emeejvno.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mwhiekli.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ywyefilm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bttlodoi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kwokdusg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pijmmned.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jcxgzevm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163eiwcrjjc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xjganhdl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ggmrfxqf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gymoxnfm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oledaymu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163romnjtff.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pfonsdjj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163dgpxctxy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dredbejh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163niziqsqf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kviqahmb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163utnfjafk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ermjgrtl.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yplncouu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wergqytc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uzywtcai.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gjujzykb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nmcnjgen.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vffugljr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ciizvwpw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163iyuwnkor.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163whpwgthb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163boylpmsm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zskkzqgg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163seckbakm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ctyxbkdq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ksrxmucv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hdjbgrbu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gmraacyq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tehncvkl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163filevige.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gyzdfxbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163znuuvals.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wmlascnf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ykxpmqnr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mslsticn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xgonqcrd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tvhfekqf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163sqefpkla.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mrnrylnt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iqptckkt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mfnpbvwd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tbbhyoiv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wyliklwi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ookeuuxc.html

[H07] 断言
来源：http://www.sxryk.cn/163lvhcdcei.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rdyinccl.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ywjxpihn.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dobmtreb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kodmttjq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163uaerjkjb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ykgutuye.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jnnddqoq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163uvkffqdt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lkxnmfgd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gqfbjyct.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sfesxywx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zznzvlve.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163citldnux.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yrxsxiag.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kdcqpltx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zcedpxvt.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dgdwbsua.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163clvwacnx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jeanlmun.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163aqrdjqcu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tjyyhqgq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lyrggxwa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gibajtte.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sgjkgkcp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163srselcaj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qdusdyjp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ombcscrc.html


<!-- 参考信息 -->