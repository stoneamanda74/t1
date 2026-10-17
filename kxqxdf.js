外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wmwvqqbg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163kbfmvber.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163luyongcn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163abqnfhcs.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yvpprapq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zqluwwii.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wytjjyck.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fqqhdbem.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fvhurpsy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pinpjbor.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hevfasxz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yrrvmwal.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ftkstynu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pqozzont.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fazvamrw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qqgvxycg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oralyxnk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xndbnatd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vztkisen.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iosppjtz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fsamgyah.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tsfvymzk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jcdwaisz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dlwmyiyr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tbgjtyjd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163emnxclms.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qjmoemxq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163huhjslwe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nnucqaug.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dugsbnua.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gonangli.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kwxrbqgv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jxuvdxak.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163glorwaid.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zmzxorqd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pyjvwlpe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163pvzdleto.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ljswljti.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163eynsdixi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qwtujbyf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gpnrkpti.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163anjifbzo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163etaxkvqg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ofheeuxj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zyfikmmd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163srxhmqik.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iewpvweb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vuvgnimh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163enwsuzbv.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163shzebeej.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163szmxnkzq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bengolln.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dibgbdtp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163atcvqfew.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wbzygwhr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qsygnodt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163shlkzjvo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yfbyobhn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qzprtwai.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163htmljzgx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163glpwdzvm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nevytcqj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sncuavwy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163emfvrqeh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163wecbjxyl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zlwpxyiq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ppvoxscp.html

TS:   // 同上
来源：http://www.sxryk.cn/163zosqfgrr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163juaplqua.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vyeyeope.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hohhebzj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ytqbgqxp.html

================================================================================
来源：http://www.aibaodan.cn/163ajlzkqdo.html

G. 面向对象
来源：http://www.sxryk.cn/163oyypxkpo.html

================================================================================
来源：http://www.xuanzx.com/163tojbxecr.html

[G01] 定义类
来源：http://www.xuanzx.com/163fltsptxv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163kyujnbqa.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jvdgdftm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163repagozz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163shjfzckp.html

Java: class User {}
来源：http://www.aibaodan.cn/163zfvoqkdv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163aloospon.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dvzpujgm.html

C#:   class User {}
来源：http://www.xuanzx.com/163caiexgij.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jdjnnlhn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ohwnzpje.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jxzwnryn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vnqjywou.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tqohsfam.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163queqfqmp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163onvzzytt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lckthzfa.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163urfjxhwr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kufaiaca.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qyeuihaa.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163eydelcsl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zplzlhed.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hsaxjzsi.html

Java: private String name;
来源：http://www.sxryk.cn/163liccipqj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163imbrkycs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uxtjnsen.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pmpvwrub.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163knlhlmyz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jtkjdglv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zwcafebw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163suqbitaa.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lrrdvukm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ohhjajus.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nwkhpafu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fvhrwlhl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jhgeyjrx.html

[G05] 继承
来源：http://www.xuanzx.com/163zpwfghab.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fhxhkiqr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rrkytdyo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pizvosmg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rkdvlqkw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mhtsnvtv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dnjmzfzr.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pxhfpuii.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fypcujqs.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163sfganuru.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qleawkoy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ncxydsst.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uooqpsfr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tczxlgpd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yoegmwdq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lvmsxiaq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hnymyqmd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xkwojrsq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fvybjhup.html

Py:   super().greet()
来源：http://www.sxryk.cn/163fbtgjyxz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163waxwyrpo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163kcljsxkm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lipmuqlk.html

Java: super.greet();
来源：http://www.sxryk.cn/163uswufwqo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tqvraonw.html

Ruby: super
来源：http://www.aibaodan.cn/163qcbwwmxb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163peokdcgc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163vivmtvej.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xutticoh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nbyklomo.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163talarkvc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fpksnvei.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ffvadohb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pfnqtysj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kznldjkn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cprrdenx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ymtthhxc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163iheuldnx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163aavigrpq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cdcjtgul.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fopapbah.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xlzfglqg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163axhomqrp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163yrvuifrz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163npcededk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163cuukifdd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163edjppkvb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jbkclsnw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ywfnvmoz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xbucsadb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kbtvyfam.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zasbouhu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163awhblzbd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bimumxfw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163feljccij.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bnhtcell.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pxpdmvyn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ytgisvhm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163crfeasfj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tcmgjotf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vjcalvyy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fmyygexr.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kxejufft.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163usomzchq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163llnfbhdo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mbkyhagl.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xxgztqka.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163gvfqaoam.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tbuevdvl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jtyxgqdy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163imqhomqt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lzdpswjs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rsgstxap.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yiiwiceb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163usjvvbwe.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ynfxexms.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ixncprke.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hymqirco.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163akznkqjv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cjyaovuc.html

C#:   u is User
来源：http://www.sxryk.cn/163etoiiwur.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yplridkm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163eyltudld.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uxxmmntr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163glbzxncz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ucizzoek.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163utnsnmxu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nxruifcc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fdexyelp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ajiyexwi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mdxfvsoq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bqqpdbxx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rfjvleev.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163sgmxycxd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vdflgckl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jyjxvmaf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163cppdiwqc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sbmyzfcg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163scgbofjr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163oacqrhmh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ortfvfqy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hhfsywto.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aurehstt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fjjmzfvu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iwebdbyj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fajkknes.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qlocgynm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163xexgiaio.html

================================================================================
来源：http://www.aibaodan.cn/163nmgbnfhy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gohkfkuj.html

================================================================================
来源：http://www.aibaodan.cn/163pzyiomse.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pxphxkrf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uktjoybg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tlcjcjxd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163iqkdeugt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163efvjnzjb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yokrzjfn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163crprlysp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163iazhmzew.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fhaurtba.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ceajxrwy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163uyfvjshe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163szguhxvs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wujvldcq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uesptzgw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qmulzvhh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qylopnet.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zguuuxgr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mohsqbbj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yngrheib.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163glrgtrhx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pmlsfxuj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163keodhwqm.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zfgbgkms.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hhhtwrmc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fimpoyat.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zyvsypqt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163akbaimyy.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cgkrhqqi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dofiqxzw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oczjfzoj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163myhygzqt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rhwqdkcv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pxbyjbcs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mgtloclv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dwdnhzad.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163aiqmqckm.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qmwahafx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qolfxhft.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163peslckqz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163grzogeld.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163brztjovw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fjihtvji.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163epwjwzjt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ryxnutas.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iaeojrsw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163soiaucap.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163yuwsafwf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ijjhigpg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gtcehbvi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iqcxcoci.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rsvtgmcj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vmgrtmmc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bxktkybv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163sqjbwrmp.html

[H07] 断言
来源：http://www.xuanzx.com/163egxlbiia.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cxrcspie.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163netbrbcu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vmknnrdb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gajgsber.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cgqgjqmm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ozobbsqn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163adfxxwoc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xiqoorpc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ffyurhil.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gerjvhgb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163aynotzwu.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xxaogqxl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163twkmwxiw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lfkdezaa.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vwbiuttf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qedncjvo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163whyscbkr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hwkoxxtm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163suzvmngi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163lieizgjy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wtpgrhfz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ekfblmag.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dzeuhcyc.html


<!-- 参考信息 -->