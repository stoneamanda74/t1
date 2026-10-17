外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163keyvbltz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jojjievt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wnsnupqt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nbpkinsr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ixrpbksp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163twgyubny.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ibtiggpy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fidsmmkz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yeddhzfz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lvygpgce.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mztnpymz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163petxitsx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163foooklrn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rjlyajvt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmacuccq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mzifsiyz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nfkrauqv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ckxrzeaq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zjtfacmi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163iisbkwux.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fwrvytqv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ufdnrmzb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xasgansd.html

TS:   // 同上
来源：http://www.sxryk.cn/163ykzajtbg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jsvjtufp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cuynospy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fogemliq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jnkymuus.html

================================================================================
来源：http://www.sxryk.cn/163uqmvffgq.html

G. 面向对象
来源：http://www.xuanzx.com/163tcxnwkrq.html

================================================================================
来源：http://www.aibaodan.cn/163xuvgfvyy.html

[G01] 定义类
来源：http://www.xuanzx.com/163gdkhzlxc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ryeonddk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cpjicpex.html

JS:   class User {}
来源：http://www.aibaodan.cn/163acbfbrmu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163txgpiolo.html

Java: class User {}
来源：http://www.sxryk.cn/163moszcrec.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163smvwqfcq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hbpawgcp.html

C#:   class User {}
来源：http://www.xuanzx.com/163hvcxpwup.html

[G02] 构造函数
来源：http://www.sxryk.cn/163glrkfwjb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yvwpukpj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163sfwzowpu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mhydghyk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kmnmwoxy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163hfdoaate.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jwxmrcrs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nlsjilqp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163crfzfgxt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yxkesiim.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uojdkswi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xhtdsxjz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qxpwkezm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gcjsrjlm.html

Java: private String name;
来源：http://www.sxryk.cn/163mlbzhnll.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163byyqptzr.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uuqgmihg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dgsurenp.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wvmszenq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163abhbacmi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wgbmssxc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wpkvxujq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rdhadrrx.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jpocoyss.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rjcrrtlg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tomglyro.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163pvxpwehr.html

[G05] 继承
来源：http://www.xuanzx.com/163rjaktnjw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163oxppflyd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163chjgwfjd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163efgvskax.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163khohmjjb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dxjckzss.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ydehaqqe.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ndftjyty.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163uhphseug.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wyqgtebr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nksxcfvj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qvkdzjnc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fybohkiy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gnmszulp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kwqlgevc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bcjjoahn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iqdbzymp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ispbmohb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mffhnljm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qfmhtvut.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163juxwixru.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wipdtuzg.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163naigoflr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lgtdhgvs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bvwnqcvz.html

Ruby: super
来源：http://www.sxryk.cn/163ksdnpmhf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163obhxacos.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tohjhuhu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163lmofeang.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wvmpffgh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163cidsmzno.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cjcnoghf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xsvrnqbq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163spsxoxnm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163esceabrf.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gvntscfz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rrpniwrx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rwyyuros.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wsztckrp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hpqexvmk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ommdescg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xaczyovb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163iqknuhad.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ywxhqtje.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xcalulbu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163lecdhssn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163elhgjmcr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nbgcqtob.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pnueyiie.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163maqmteol.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hqygoihg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vvkchybj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ktjjeyqs.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jggkmuwl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163aumkaenn.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rcnuqdej.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163smegqeet.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163diemqtxm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ydpgviht.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vzfgqnkl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wuowhxez.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tsxyrwty.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lqymeslu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mzanqzni.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qvigejgh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dashpaok.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jccyamhi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pfzrxioh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dmytqrhm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163viitrnxv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nqlwwqxp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rlfaqfji.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pkslyfzb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ifeycmpg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cvstjrjv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163iapahktj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163atqrmqhz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ydylfshn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hizyafdk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pfprhoce.html

C#:   u is User
来源：http://www.aibaodan.cn/163pfbevzsi.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163uejqrdnr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jxqqpjmr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yrobggqs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hzyijeqp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bskzghev.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ldfcrjxr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hkxgyfxm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bgbqknes.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pimfvcvy.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vhuootdn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xnwnonxx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163cpzylpng.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jnzivgau.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163awepmtqq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ggbkxfaf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qepucwkc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163deidlwsg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uqwerhyw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tmicuavs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163efmdbnki.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ormwpsba.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163alzpxycc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wyhmfpem.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163dtqwsqgb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nacmcwfo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163imbimvsl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163aautwtjp.html

================================================================================
来源：http://www.xuanzx.com/163jawzpbdd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tuledbdr.html

================================================================================
来源：http://www.aibaodan.cn/163safzjynd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yfiblprp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wbexyiqu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gpimsfnz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sclrfemy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gaxfbgqm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cvurxlnx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rbgugpur.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fzacbnsj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163deuqcnne.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ctfqquci.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gpulfvoh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vznrleqz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oryrrlzf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cyzcxegg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qnztoubb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163sorailer.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qrgowpho.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163isxypkjh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jstjaunx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mjmxmyjr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gnegmuqd.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163loacdlsx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163umvfjmhz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qofiaufh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ylhjlaae.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163axiqkrjs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ztvmejuh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163orrizwel.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cugrmmkm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163szjezkuj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xqmoewhq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uukhejpg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163onombfyr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fxavlmve.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mkuezyqe.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163drtptvhb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fpevaebk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163aqreeten.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163axdleols.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163muqvbdzj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yqarcizj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163afsqklcc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pqguqlbn.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cvxbtama.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rieyekqv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qbkcqbmg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uvoiwazd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jtueocuj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jdjlrlfc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163groxedus.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xwobxzdr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wbanzifx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kgwozsis.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rglkyozu.html

[H07] 断言
来源：http://www.xuanzx.com/163wqvfpxnh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163pngrbmry.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ekqvpnde.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tvqjivwy.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uyqsvafx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sklqpcnn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mxbdelte.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ijqofzkr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rpwflbny.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163nbumrkbf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163zjnqyjas.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gilggzep.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163psyrdejw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163opmbacrx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rgqmvybf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163phqlnewj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163eivzythq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vfovyqej.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163slyqfbux.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bbofgfcv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163viadwhhg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fyjkkdwz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163duhjilif.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pndlwotc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bluyfhlb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xmwlzkrb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163kwvumdkd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xdvdvlen.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mxafatny.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kmsyhnil.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ymaewugo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aktfxvqq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163svfjytbk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nluepqvt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fjvxrbft.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hebunpok.html

================================================================================
来源：http://www.aibaodan.cn/163ifujhkyd.html

I. 正则表达式
来源：http://www.xuanzx.com/163kxgjgjoa.html

================================================================================
来源：http://www.sxryk.cn/163xiiesovn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ptfgnsxw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nefqfxjt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kwjjgqtp.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wrglzoya.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fqogxmxg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fksrvmrb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ccbubbyo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tdjzfcjb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163oapowdxr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ivwgwjyt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ynihqcxs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qhztkueg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zmlacaov.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163saaebfra.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vtkvwuzm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ldfqmzgx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163trtbrbqs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gkmbvwro.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vjfqlsky.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tojrcexc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fyxzlbxl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163delwkrvq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fhaqvmzf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sgnoqmfg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gkcbbwgo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mrprcvet.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qsokkyqc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bfxouqgs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163eewpnbds.html


<!-- 参考信息 -->