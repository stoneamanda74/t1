外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163axvbqzav.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163crllhpid.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163thebpedo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fjnafwft.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rdzabkiy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kfgnhjvh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vzrsovts.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xzhrkocc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gebnpxvt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fvqopzaz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163szcwvsyf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ombbkosh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163asnmqeyx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lsuvlkkj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wskovdcg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ghrlfutr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cekermbd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fuiqnghc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rwfqecip.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tbqhlclx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tagngulp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vggeigaf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163laxufebv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uqhawvfk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163glafutys.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163esrxllmj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kvvtbvxp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163egevlpnu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rhpbiteg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wamlkvnm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163syvodrwq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lmygxsdq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gvirkfnx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pwnjpmok.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163yivnmrpd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oiseyhpg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gvowbzqs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qnyarnug.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lkufgajy.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ytepdmuy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dwqqdwnh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ivqjvctd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wqnfcxaj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tfvddjmf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cxdyswqe.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bqphpkrf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fryxhmda.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xlhjpwlk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mfoqjqcw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xuuwgplc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fydhmixs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ojkdfqqu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vhcrpthb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xdiljmml.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163syymfqhy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163shdmltrd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bccpjony.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mpklafhn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oicbvicd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163eqgspxrw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fqlyyqff.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pilchmvq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163osfigabi.html

TS:   // 同上
来源：http://www.xuanzx.com/163xecplrhf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xplxifgx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xhenokxy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163axbmgjyb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163znnuhxnj.html

================================================================================
来源：http://www.aibaodan.cn/163bxibwsjk.html

G. 面向对象
来源：http://www.xuanzx.com/163sjwptmfq.html

================================================================================
来源：http://www.xuanzx.com/163dponwphs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uxdetocb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163shlqjzfb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hlbqpbuh.html

JS:   class User {}
来源：http://www.sxryk.cn/163qnrqddlr.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ugpqatfw.html

Java: class User {}
来源：http://www.sxryk.cn/163eaabgjcl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ksdzpetc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163upashrry.html

C#:   class User {}
来源：http://www.sxryk.cn/163vmebqmjk.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163oigcfgvy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xfsvoxyk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fisivtqn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dgshmucn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zpkjbacs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163uqqphgrp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jzdycdvr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hkcuuctw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pbfbsbkk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nbagnixl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ongzdelf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163iqergjth.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lhbyvfbs.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xqbawwsx.html

Java: private String name;
来源：http://www.xuanzx.com/163nowpwujr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ifwwzrab.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163autuvxbz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wgrntomq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163itzlbmgt.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163zcbaiycn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ynbtnftf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163yultydec.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qvtxnaie.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dbntejmt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163eygwtyyl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ojtlsead.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dxpvcwpx.html

[G05] 继承
来源：http://www.aibaodan.cn/163ossficxl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qmzbwiky.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zgafwaiq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mseralgb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rmxqaflb.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ydnddgip.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vyyzpeaz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jatcples.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ogpshhsy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yadqlryj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163avgmvttw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163libtxjyk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gvkgpzuv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163glfgnrnf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ukhyyfgd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163otkstpvi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zecaoayz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lfktkiye.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163amwqrrcb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hpgvxttq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163upjsfrmd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eehazahq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163clsuujbf.html

Java: super.greet();
来源：http://www.xuanzx.com/163yeaotzzk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nibkgrek.html

Ruby: super
来源：http://www.aibaodan.cn/163tzrptjok.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rpsoazuk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wqlxocqn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ykjfrchf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nwuxeqxh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zfsrjbco.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cuzrqryj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163iqfhptkj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163sflqqexr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yihdvamk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uhwgtpvb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nfxsyugl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163elepaqaa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bpqauuwi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tfyvmdtr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nhowtstd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jxmiacsu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vqbrgidd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nvhjzhnc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163avougxrq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163attpzyqe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gagmyvhr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yhihrwfa.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163slszmcbz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163llhyvbeo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bpmvunfi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hbyqmylf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zhmxdcam.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mptsfqre.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hqkkxtnj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xmncudfn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163izgdprbd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163lbownsly.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mwwtywbc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xqavzzwo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ksrsiysw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rgwxkwcj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163glydufxj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qecqeuzu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ncljqcrx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zgduhtjn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cmwwacex.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yfdfqiys.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rfkiecia.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yosaasgi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rgdprxmp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gjcoykro.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163jjiulqto.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hqptuifj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yisaqgjf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ymslyscw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nrpnrczy.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iehwhgfr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ofvibgbp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tqstpyao.html

C#:   u is User
来源：http://www.aibaodan.cn/163umsitsix.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vbkqfzqu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163edfsssdj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vdhwdefs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hpxilwqu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ockptxso.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pzdbjuqq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163djkkfvxr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kjtvqklz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163itmxvyjr.html

[G15] 枚举
来源：http://www.sxryk.cn/163ppfuixyj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163khxwjpzs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zebybicj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ubrcyovt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163heeoajtj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tdmzjwhy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163emdfeywj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nvgvefdh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dnednthj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nclutqxj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163vdbekkwd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163opkrdubw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tmghauyh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ojqlgsgx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xpscuxyj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ojghhlrc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gajmrujt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163soatmzfj.html

================================================================================
来源：http://www.aibaodan.cn/163fxlmlhlu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iarjogpg.html

================================================================================
来源：http://www.xuanzx.com/163bdcamqut.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163eufgmcew.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mvvfxoai.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nbdzokyb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cuutqxga.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uzrgabaz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ywiddtlr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163chslfdpp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gsqjlugc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163upvbfxct.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gkaamcii.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163twrnmurr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163onzccvcm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ecbkeoue.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163stqdnqgl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nkunlxin.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dlvemcqs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163eysgkugz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ceszwrjk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pycpugdf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uqcjwsbs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qfpjwawt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yqevzlsv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163howizofu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xrtvqyir.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fknxlvjc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ibkxqmdi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pktbjbid.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163burctnvl.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qootdmtg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qixktkze.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rhvibnqc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yznbsloy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163juvkjqqi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mdsblqfh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xuatwkse.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ulqzpizt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mshwbruk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qlimzvpc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cqaspbji.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xjupsbor.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uxoupjkl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gccxusau.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163osgahfhy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163maixteis.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hhviyflj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jglbcevs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zqnghzeb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163bsydzgho.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tsyrtpxd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oxgwthfo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jwdbdmlg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xaeaycod.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qvlogucb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cwrokadd.html

[H07] 断言
来源：http://www.aibaodan.cn/163jnupbkle.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163crmbcdue.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cywlpqzy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sjkcxasx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fyizvpzg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wpnxxmhw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qbjchzzm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163safjxxgf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ggwwhtwr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163afliechl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aedmiuxb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vrhwfdaq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cgtiywuu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xbuimtiv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163geogcroy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hmczxnmo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163flpfevlt.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fxkuyhqr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163sizumvbq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lcihsbnh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nedvzscd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vhyvvuhy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cdeaxjvk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tveayepu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kznjldvm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iegrkkbd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zypqdjky.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uuytvzkt.html


<!-- 参考信息 -->