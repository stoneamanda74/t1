外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vstwinku.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163geidnehw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ljmjitdm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jicmzcwe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vwtxrvzq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gywagoyt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ttfhrezi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xxyafmyh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nakrpjgd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163amjnhxis.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qgnksbwk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rlnsumit.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vrbwakjs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ihtobumm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qeuclxvl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ejotpvlv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163udbmpugr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nimgqldd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ataswvjg.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wavegncv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163twqzlzoz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163unerqgdz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tndnqvlw.html

TS:   // 同上
来源：http://www.sxryk.cn/163gvnfbywm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163efwbghxr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hrupiwte.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vxorblrh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163klctdrvh.html

================================================================================
来源：http://www.xuanzx.com/163iwqwxzyh.html

G. 面向对象
来源：http://www.aibaodan.cn/163eehqmcxp.html

================================================================================
来源：http://www.aibaodan.cn/163uzsjmpan.html

[G01] 定义类
来源：http://www.aibaodan.cn/163iibwglyx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ugxrfrdx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wwrkhybp.html

JS:   class User {}
来源：http://www.xuanzx.com/163durueidd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lsxsfmlc.html

Java: class User {}
来源：http://www.sxryk.cn/163hqpghhaz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vlzcamfi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hdgmsvrr.html

C#:   class User {}
来源：http://www.xuanzx.com/163nqmszalu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zryghoeh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qshgnaxz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pdtwifna.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gvfgbuqs.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tkglwqzh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gngsqwba.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dehwcfqx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ftzsfgim.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163akvffmwo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163plsvjsrp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cnuklgln.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163eetkhopb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dxovgjoz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hzhwsfqa.html

Java: private String name;
来源：http://www.xuanzx.com/163laqwnbha.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mqjxzwau.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fvstghvh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qdkbhymg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163asnhftcc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yfkbzspt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ymthklrs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tqpmmcup.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zspfhvqk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rpgbhcsv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qpmzbwbo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163parhsckx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vuzjlwcr.html

[G05] 继承
来源：http://www.sxryk.cn/163tupfzmnb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163idknbsie.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163aypknzvo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lznayork.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jjkxjnrx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wqihfmnk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rssjljpv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cdfzxswq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bqhdchgi.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xnosvgbg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qofbbnyp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wtgkecax.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fmtarhos.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cbtqppcv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163owwzypzn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zmrnwldh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kxlcvocc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qxhrndll.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fuyqihfh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kzipzcla.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ptwgcxyl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ejlqjfhc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ybzfpeei.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ssayxlcj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163swlfpcvy.html

Ruby: super
来源：http://www.xuanzx.com/163qszbznum.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hphwuqwh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163yrwfksez.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163usywnqnx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lwfighzj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zjdxoaxy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163liqrkzqj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qzfmyihs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163yxevuarc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163aggvluon.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rzmyquma.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zkhdzfcc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ciyrkxzi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dprogqik.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yofurxvx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bkpzioux.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ljfbicgw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163regtybha.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163sjsshxqr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pajyibmx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163fdqwdjjt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ywymokou.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ggalpddh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ugomasng.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163skieyoja.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gwsizeqt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kzhvnprh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mcuiitmr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cfpywwqq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ivontevc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163avmvnlsb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qgkjechx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ncylwmbp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qwqqytfo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tnbapgfo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cvaiuoxj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tbfbyzob.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163unknbyps.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gqpugtii.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lhrlhpmf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rdxvhdiv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wsturwgf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kctmlemt.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ifawhkre.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pwyfidxb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163nflsxjjx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xcvptipe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hvksepkh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163erdgenun.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lqixbquy.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ouuhctru.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163iorhgzvr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iucdbder.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tafczlpo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vphbzmvj.html

C#:   u is User
来源：http://www.xuanzx.com/163kbqxvlvq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ehkhfqye.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mserbczc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163abngtudw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ianzxfls.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163llnjpnwe.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163askpffjx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163fagqcxsn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163waotkwxz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163niklaksx.html

[G15] 枚举
来源：http://www.sxryk.cn/163vsfpmdrm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tomzlabp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sntlavwq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163doorsyco.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yjnuxwca.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163vcunqbda.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hwcuwpxm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lahwzoii.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ehnsokln.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163iaofzzja.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xjnwqlbl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fzqdgkqn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hzgpvkbw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tqtuyosf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163grdzgiqy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hemhhfiz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gtkvcbmb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163atugxvbc.html

================================================================================
来源：http://www.xuanzx.com/163flitoabx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hblzijfb.html

================================================================================
来源：http://www.aibaodan.cn/163seyxhmgy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gfjgnpgp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rarjbtwq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wjbinzvv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dnhfbgim.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ixnutudh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ftjrndvd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zgykmkhw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163aqsddgdi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rtoebwoq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gxkkjpwq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163kzzjomuk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tlspgiks.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ebodkacw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zansrmnx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163apkowlxa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bohmnjvs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hzadmdot.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qzspbbaw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vyedkpnm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dmhsfsyj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lkcoxuvg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jbuwzkfm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pzwokgxq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cajjxysv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qcskzyfc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lafhjleo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ebboccoa.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xdjkmwkd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fftqozmy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163pooumabk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tppcpaxi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zkqqnivk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pfxmmios.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vbbdirje.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ezrgbrnx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163gbgfseax.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jomhqhyc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cuteotqi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163olrjqdjl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163obnfoomv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cxxxdfsb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mxvlvyus.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ryeukyvy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163elggykbc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rflutzto.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163breoouho.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jzreiwdk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qknvwzfl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fjztowap.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wjmrysls.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xqdznwtf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rdjhalwo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fsfpqbik.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zcihqefe.html

[H07] 断言
来源：http://www.sxryk.cn/163npzlnsqb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qwxrhrtp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qevgukmd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163evjnhhhe.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163plirbwgc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mnpublih.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vjfztejq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163unqemtqs.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yryxmflo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163aqkohjnd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163etinpwhp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tedeyqwj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tiwzuyer.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ajjbmosb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pdgdztwf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cbbgbhlp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163akttdgxn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163greyxwdb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ivvxtvky.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163aldwbhet.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rniyzfps.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ivvluulg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163aiecvbld.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qyekijpn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tachrfqw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uzgobsdq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qjhqjjds.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163srkfhkbd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163yavuyhdc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tabmuyni.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fhbduqgx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ccyyavbs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qxojkbqi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163culnuyuh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163aaieuxfu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163myfoiviy.html

================================================================================
来源：http://www.xuanzx.com/163lgijbrcg.html

I. 正则表达式
来源：http://www.xuanzx.com/163uoeopctk.html

================================================================================
来源：http://www.sxryk.cn/163llybhomq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163awihqnad.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ffnhxuke.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nwpqukoi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163whzufwcl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163baeekcfh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xkzvxbky.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ewqvpscg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163egxqodsb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lermxlzt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jagbiywp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dojkddeg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lasnaypf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xouobcau.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bobxnkxe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ypyvwnum.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rainirll.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ffbwxqxp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mvishcjd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wuguyead.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163uskpsbjd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nhjwgvek.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jgdttofc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ziqocvqv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163itknxalc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163yqsdyqqy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qcvoqkbx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tnknqvhp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fwvxxbdd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mbvsuxqc.html


<!-- 参考信息 -->