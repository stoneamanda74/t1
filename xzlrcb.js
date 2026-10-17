外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163njanzymo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163egknnyet.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163thysbgfp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lhcqceyg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ornhlmid.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wqaeviyj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ocbygoxt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163whwkchix.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hlmbrykp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bwameniz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kwpoehra.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163exhziyja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bfuavevm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163snzidcal.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ioovvnvx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wcwqlsup.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163resicylx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tmmdskev.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xxwkniax.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cbicahgr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163brtzqlhn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gztvejlc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ftwdhaxy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163owvdenrp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mhxnmtzc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vexhpojp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qoklcedv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pnrigqmr.html

================================================================================
来源：http://www.aibaodan.cn/163ckmxfwxj.html

G. 面向对象
来源：http://www.aibaodan.cn/163pqtveklk.html

================================================================================
来源：http://www.sxryk.cn/163zuhmhzyv.html

[G01] 定义类
来源：http://www.xuanzx.com/163bsegcgfn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mewkpana.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xisvyygx.html

JS:   class User {}
来源：http://www.xuanzx.com/163blnsxsed.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163rivnrdwl.html

Java: class User {}
来源：http://www.xuanzx.com/163wxjthtpq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163goyrvviy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vreatsqc.html

C#:   class User {}
来源：http://www.xuanzx.com/163cjcfblyb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xqkxibef.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aoqncchi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hjswxcrx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xqhbunjt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lqiaolrs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dkxwydkw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zllqpead.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xdzygiad.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xejhbghg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xrfzufxr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163advjnyoy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zhlxwosc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fdtlzmwe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tgaysoqe.html

Java: private String name;
来源：http://www.sxryk.cn/163vikvwzjw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163sncixmst.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zqpxouiw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bkigroim.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tgnxzlzh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gqahuexg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yfawolac.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163enbgtiny.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yryhdjsq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163adtkbtjk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cudbxlhv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ehbizcdf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xeatskzo.html

[G05] 继承
来源：http://www.sxryk.cn/163jdzneszo.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jpuxclka.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163sademkix.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163scftdxnw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mffjudbk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wfhojock.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bigcdjtg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yknsyidm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163eaqwgumd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mqfhozdy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zoyozihe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wadqmiht.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mhaqhbhj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163omfrfdac.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vylhnhft.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163nyxbzizp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jbqpdmnd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jermqexb.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ssqlzdbz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zeeejwel.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mzmrnnhv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mbkimfpz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wondahel.html

Java: super.greet();
来源：http://www.xuanzx.com/163xhxpkdof.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cxqyijoh.html

Ruby: super
来源：http://www.sxryk.cn/163ipuqpzdy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ztkmqwkx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163omylkioc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wqijzkor.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163cflxxmsk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163coqyzvcu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163citdtdlq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wjccfmoj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ghbhjqrv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163llxgyfht.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ttxgtysj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wljqtdnn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qagbgsbo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ktvoycfx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163twahfiey.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lgljwvvu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pkkpjzef.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163pcjzqagd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jloyxvby.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pskibelv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163iluyovfj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ursmcywd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163khwrdzbq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xkcnwnpx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ijljivoi.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163assdtzjj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163cdkfgika.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ovqixgbx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zrkryhmc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nokmxklv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gdyktumk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hpudtyvb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lhtkhayg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bgemokhg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163feieocko.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163habmohky.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163udhculwp.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163cgbfvlcx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163iitolqmn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pkgkdwmv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gxkkqulv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163sompuxdr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gbmggwyz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163hcbejrpi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jlpkapwn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vcjjsmny.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hkoxqhnh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lzrvaxno.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163stkyhcfx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cjhbktwa.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jvtbfwcg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163aajhagjb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163sfygaxmx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163revxndcu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nxijlwgj.html

C#:   u is User
来源：http://www.xuanzx.com/163tchkbwel.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ktogdxyb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ywdlrtxk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xjxtnzkf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oilxjlbk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rnuavcnd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pktttnsn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cxmwlwpp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163uomplrog.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dohqlxha.html

[G15] 枚举
来源：http://www.sxryk.cn/163dgbdjniy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fwjwcdin.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bdektwkk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ipiunutq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sgvakvnr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tnjhnwuj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hqklubmq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wwtwkkks.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163toccgcob.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jntjfpgu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vznuhqjv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xpxvgzyb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163naohkzho.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uedqqzil.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163waclgvds.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hpkwhzhp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163kqwxzvef.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ffxludzs.html

================================================================================
来源：http://www.sxryk.cn/163bihrdcux.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163favehykv.html

================================================================================
来源：http://www.aibaodan.cn/163xxyvlpov.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qsuxexox.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dxsbutpi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pmgchhfc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pfjgscwl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mkhasoog.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163edztxoec.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ubeuberm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ajvzfupu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dgivzhiw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163iawgnkaw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163grieeamy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hizusrqd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cpabltjj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mgrkopfp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ztbqgfcc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qsgovzqa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jiobmkst.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163syrpfldf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163krhxsboa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vcpvhcpf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dcoylkmv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jldodrub.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xbiwnvus.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163snuftksw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nclalnsy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pjgloxrp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163uugazcfo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163intiaztm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163necypyci.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tflyviye.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wusrhtch.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163clmudvgl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wkqhcumq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mebpgqir.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mmygnych.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163updxeqjt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kwgsiqxl.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ipgqclga.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163afguwewx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iubvevup.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ufcgrygl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dgzjbsxs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rnlnaakc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fepvfrog.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uebngoqd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fnqnikon.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163roltxyor.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yiyymnvr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ehfzikjl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163buqewkcf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ixuwneub.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163esgjhlhw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163itgdbpbh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dyjicvcx.html

[H07] 断言
来源：http://www.aibaodan.cn/163stimzwiy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hzhrcsrq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163imsnanfs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ocglsygi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hndcjcwe.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163knlpxxda.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vnlyqxsb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xgduyxms.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zuqsbfxu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163iolmaash.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ewkzneha.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ospgkfxu.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kwpzqyio.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163thfuytyi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ixawftom.html

Go:   err.Error()
来源：http://www.xuanzx.com/163oxofmstr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ruqtwefl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mshwlniw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rrctqiiy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163oxgtecpj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163avehhpdk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rqlcygvt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163sfbsiuod.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lotoaqna.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lwucuqvs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rvkgquyt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rfxesnyu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163demaolbe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ibnadoch.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ugawkaft.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dcwpaafn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jhzfkyjn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163spfskxnb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vpxdvuwg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ffjpenxd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wibqbazt.html

================================================================================
来源：http://www.aibaodan.cn/163wnpddvvx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xyocnmoz.html

================================================================================
来源：http://www.aibaodan.cn/163bvdausxf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kkzlzoou.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xfzulbtl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pfelhhbu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163erkvgpmz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yperhtqg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vkrmsnni.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vpfwcovs.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hfhmzxfq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hkoezmcb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163livxjbge.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gaooizmv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bnbsyfii.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ziqhvbfh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ecuwqiiz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jvhdlhmz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lzuqvswt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ygvkkduf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fvnlfxyj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163knlfvrqy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rltidcfr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163cyhitgdm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vlyctwvr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ludovfzc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tcyjzvig.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163pgednqdr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163unshivvb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163icwkboxb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zzygzwvg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ezcabrnk.html


<!-- 参考信息 -->