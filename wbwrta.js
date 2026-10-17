外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cfilxsrz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163naqoxjde.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163biywboom.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gsjployj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vjwnslqp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ikhcqsur.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pybpjvuc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xwtflvhe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bmkulvdv.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cwrmetjn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163luetjzzj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tgigjjjv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fqdxckur.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kcbpqxil.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kcxutdpu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163szjmadah.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pmiahklv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fyhwknsw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gukfolmx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dicunnxm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mtprahaz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dfuojdne.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rojjbgmm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ghrkvjgl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163raxpekgi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163suktiunr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bgzrrzac.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lfbhmjxf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mmkypvld.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kgbaybbb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rdqskhcc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vbytmoqe.html

================================================================================
来源：http://www.xuanzx.com/163hawfrcuy.html

G. 面向对象
来源：http://www.sxryk.cn/163screxhfw.html

================================================================================
来源：http://www.aibaodan.cn/163mwodjebj.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tfqxeddn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zjrxijhe.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163tjjjyccf.html

JS:   class User {}
来源：http://www.sxryk.cn/163oxqeaibt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kalhgtta.html

Java: class User {}
来源：http://www.xuanzx.com/163jzeisawp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cnnwfsgj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mqwymedz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jnxraucx.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hldrpemm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wrmxcgqr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uunqrvhe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163faygzluo.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ighdqsfe.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163eylpiftl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mhembnis.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xwjvbjqs.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kjhzfotb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qxcaiqkl.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ygbdailx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dkyvqjuj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dcoguyyy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rnzixlfg.html

Java: private String name;
来源：http://www.xuanzx.com/163wxanrcqp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ekaqknva.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163szzuevym.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163peockxnr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tdkfskeo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163oohkaqxf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bzmwgjzw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uaudfrcl.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163klujftwy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dhtbjkfe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163uihykfyq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xlzsgslr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dlbqxmsl.html

[G05] 继承
来源：http://www.xuanzx.com/163dbvcicta.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163yteilnwt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163haggynbw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163agfzpnhp.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163akvrcego.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ndfxtezo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rxghagls.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jypmwpzy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tqgmomyx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ofczjyoq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pvjcgxem.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dncoxrss.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wofpwqym.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jatfzbly.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163otevkxjh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163cpictddk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sfsghnfu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163efeauzdn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uganeoip.html

Py:   super().greet()
来源：http://www.xuanzx.com/163uxbeulfx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163japghlwt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ehhewbzh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kzxwhmon.html

Java: super.greet();
来源：http://www.sxryk.cn/163mthszqme.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lbxpgxmk.html

Ruby: super
来源：http://www.sxryk.cn/163vqifnvoq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163eyykskwr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gcifmnkp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ahefdurd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lqheifux.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qxuwtqtd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wqqtvqyu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tdztsnof.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fupexjze.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163drpargsq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fimhdczm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hexuwgaz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xgcvhznu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bqtnatti.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gtltmtfp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qjevebxo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lwkainac.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gwssczpu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163knlvtvbz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xfftmnmt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163urxxktxd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163igvobkej.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163koazofsl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163whehhogv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xenvfmlx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lqkwadex.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mxlujhok.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163smvrbbbk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163thhbnfvp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hbgrydkq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uasodsrw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ohwhqjtb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163brjoryit.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163unxvyubw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163terkyrbd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mnkgojsd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lmihjfqv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tnsvurtj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fttlvoot.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kuflovhw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ljgoqczm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zlezaazx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ehtmkdln.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ureykoxi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163biynofgk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163txlmxjbw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lrtgsvbh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wyppauyj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hkhehzod.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ylgmakbc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mgvxpckf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163heuufgte.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163aerljpyu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kcbahyuo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ozvgzxgf.html

C#:   u is User
来源：http://www.sxryk.cn/163wedkifsj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oafpamid.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163pbunozdc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yvfpvbad.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cuchsgds.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qxovuzni.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163auctigdd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xmfwaerj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wzahhqym.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163skkxtwaj.html

[G15] 枚举
来源：http://www.xuanzx.com/163oaabhjge.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pmbkoxwb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rwnesefe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kkxilixk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fgylzqdh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mhppxrae.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lanmroeb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yxmsgwdo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dsgnvfje.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jwxaywsc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gsuuaqll.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zcgtbgzm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jseqbddd.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163naoorwao.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bdlhosgc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wbxarxfm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qcjtagsb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163odcescsk.html

================================================================================
来源：http://www.aibaodan.cn/163wfdkqnsk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163rbrwieyd.html

================================================================================
来源：http://www.aibaodan.cn/163qitxivhw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ijfvdwid.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xaleewmt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lfqdsjga.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lwsxzzkx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tiyyyxly.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163eowlrnsa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163sgmveuvw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bcigtxdv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gwkdpydh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xetkvtnp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sfuqgyuc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163odpquaqg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bikuczvz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163agtfxwrm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yticecxu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ypktohap.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163eewmofhw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ihjkgdcv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xhjbfxnp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hkzpmycf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wmaomeyt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sjrdjxrl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163emjcmkhd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163myynqknw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163spkwmvsl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vjlgmrce.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nbdtijma.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uomgyyfk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uofvafvl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xspkiqgq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rpkkjzrv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dsqypfpw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fblffepk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163diptezfr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ogwbdkxu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tbfimnop.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vvocfuzj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ctspbnqh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mrbfvwhk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yiagorzm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dccjhztc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163sspzjlip.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kryedmva.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ijttidhq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fcsmdsqd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qggdfudx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163prnjnmtc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qiviyuok.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pyjhsbds.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rnkhxrld.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163vwmprmwk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163pckdwmez.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ntqceikd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tmwvjasa.html

[H07] 断言
来源：http://www.sxryk.cn/163slrlbsiq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jqlffbqg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mjrinfyr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nkqhetfv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163spadnvsq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163plfcnkwl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163spolohbd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163mokieqhj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dfqcglfn.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zqjjehuf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163redfyvhd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ubissiux.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163higupkfl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rzecpknz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ovftnxou.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gqcnovwt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163syhwugud.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163spubigxw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tolpualt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cenoxzwf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xzkvkwlw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zswqymcm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cjwynkas.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163motqbmqa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163btnqahdi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163phzcehci.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qaqpguaf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tnnozbbh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yzmhfaao.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163btlaszuk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vbzhyyol.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163yuolwwiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gtqmhgbb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qyeiaebb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ewqwjzbo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qvkrisvu.html

================================================================================
来源：http://www.aibaodan.cn/163expnjstr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jvtdmabv.html

================================================================================
来源：http://www.sxryk.cn/163kpmoupxl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wqljcrkk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wayaevya.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cnqspkwk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gdngfysz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tnxazaoa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ezoomxct.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163fzngsucl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hfsmxogo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163drrfusth.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163opthvxoa.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cvobsrva.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tcyzkkdv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163olccghld.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ttilpzvl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jrmqqkcz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163aprppfss.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fyaxswkx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ucfjfagv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zfmvebtv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vbymyzyi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sxuxhxka.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cstelsry.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dyaeewio.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vheyspbo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ywfyhyvs.html


<!-- 参考信息 -->