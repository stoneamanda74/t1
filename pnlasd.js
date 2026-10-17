外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163iqmjhjww.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fgoxvfyz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163rlkrsnxi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163axcwdrrw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163tztsvcit.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gznohusl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163blzqlzle.html

TS:   // 同上
来源：http://www.sxryk.cn/163gthfgufj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163klosnqwg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xmqjulxf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163omdlcuyh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ohlixooh.html

================================================================================
来源：http://www.aibaodan.cn/163bavxltzl.html

G. 面向对象
来源：http://www.xuanzx.com/163cltmpzat.html

================================================================================
来源：http://www.aibaodan.cn/163ulwerjrs.html

[G01] 定义类
来源：http://www.sxryk.cn/163whomkyyp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gakiafcb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kiguabuw.html

JS:   class User {}
来源：http://www.xuanzx.com/163edbuhmmq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dnzajmvd.html

Java: class User {}
来源：http://www.xuanzx.com/163blnxyqge.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163accmuzvv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qtvpoxty.html

C#:   class User {}
来源：http://www.xuanzx.com/163ghjrvtuz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wcaeehcv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gweynosd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kufzlhvd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ojysfyyq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xmkefadm.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jprzkmjl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163boyqfrjo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ixfpjanc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mbxiutil.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163detmptwp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uffesewe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ajbycxld.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pguwbbah.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yzoumakw.html

Java: private String name;
来源：http://www.aibaodan.cn/163znamaryb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163yjvgvvrs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gouwrhmf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jreemoez.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xnepnhxw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xekdelil.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163idhuvosl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163drdyqwat.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163iofmgnxt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bnhgonsw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163plpdaodz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ydorsupn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163svxpjuqg.html

[G05] 继承
来源：http://www.sxryk.cn/163dnjtmagx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tbuxcahj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zqlhjvht.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wimzfkgf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ooisaqpq.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iwdzsqxx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vvxanghk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xcgrqfdb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ytzlvfif.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163yiryvfpo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xbdohgvc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bzkgseri.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cwpxkmly.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rmhtevxc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ghrdoace.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ldrvvutk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nhyzgltb.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vwuemaum.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zvfgpcyd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cywhcbto.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163keobfstf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rnfzabhb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163lpvgknzt.html

Java: super.greet();
来源：http://www.xuanzx.com/163shixqfqq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ujfwwfhl.html

Ruby: super
来源：http://www.xuanzx.com/163hnpgszse.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zmpagkcr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kadjzdqq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bfcqstsr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rymzjuxi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wfzvwrds.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cecncgkz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xsnumwpo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xnmodmhp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zstjtzoo.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xxdqnkkj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vrhpjywn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zskzscwa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vroeqwcv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jgouxfvg.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163axfrrpat.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163btqaowaq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163irijnhsn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qaridjpx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kjufrcfj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rhfyzbdx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163narlukci.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ivdhveju.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zmkgmkzi.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163awweqxpt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xqusejgm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ozrcugyz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dmuwtpmx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fejmowjo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kisfxezg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xtrcnkou.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tzrcddnm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nngwfarx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vgutozrb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bkkjatvp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nkpmvwyh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gndfznvj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wojhphsg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xdefuyst.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ibfqqcbb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uxyqeimw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gkcvjbxm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uivpqavn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pizcgafi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163afoybkno.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sgiijmbj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xrnwtkkh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163rsajfnat.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fekiipsa.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jylbdiku.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163andvompn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nvnlziua.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iunizbtf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ezimwnnn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tcwntzdh.html

C#:   u is User
来源：http://www.sxryk.cn/163aqeqzmvg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163adqoxbdc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mzlqorpj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163imzauzcd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mdkerwhq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hmxbeqap.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163aelaqhtk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ilikhafu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tuqncbqh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lepaiqtq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vxxvjheg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tlrwdwws.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163lprjeozx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163yyqofyqu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yfucvjsv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ycpxmgyf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hefqcapy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163knkruqbm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163myyhadle.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uymxtpwx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rwkmogkc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163itkkvnzd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163canylllh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kwzxzndq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fzmcvjot.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163onghpdav.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163yttvaaej.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vaxxanjn.html

================================================================================
来源：http://www.aibaodan.cn/163zllffmzo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163evuxbova.html

================================================================================
来源：http://www.aibaodan.cn/163xqxqqvmw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ltzoipih.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cocbtzky.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jfzptqrp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163eyjdjllq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bwzsfdmf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163smlwkcgp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163lurkgblj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tyhvkpts.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yfkmcdhx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wvqefzgf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163oehfsxps.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zkoqewpb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oazgocoi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gydzrnyn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zbkqydzz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dsnynkam.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pwpruqak.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vecfskea.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rskvycrc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dzhdsqce.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xqjpomlk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ybiywtrj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fmozktqi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gywwcodl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163oxlubvhh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gepqsxyb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ypgvurlo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wmatjaew.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163wllgznpu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gbqwluan.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dqunmsim.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zoajuyyj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dzfrcfoa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tvtxubna.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ukjkjgqe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cjgtilvb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163baqolyam.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fubigwbq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fpgyzmqo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gkylbnuj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163isnlznnt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163yywomdtr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163tojmkrqd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qvsglfsi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163erigkusg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163otvcjhtr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163odarbvck.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163hegdqhey.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nblgfywr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sguqugkf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163umfavigu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wzjpvjmo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163newutisf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xdjhtqeo.html

[H07] 断言
来源：http://www.sxryk.cn/163jcjeqztz.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lzlstwhh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yhgkckik.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hvoqxisp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163edlrgzye.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lkxfaasc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163seaokctu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oeiwvlnc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163umjneary.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rhvncixa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163svlopqob.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gnempwpq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fgsqfpto.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163grsulboh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zwaqoctw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163phxokbst.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163udqgcjzr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kwpsuawz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163erwhkkeh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qkmsqiep.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kaoljpcu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jmwxiooo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tvdmihbl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wzmgwlkw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163chuydrpl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163luqnsuaq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zsxhtuwr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163pizqaggw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gghxdfnp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ugivdqdo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163irrmqcqf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rwhfnbwz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163poqfokwm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cawhkdtc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xgwjbwhf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ntybtfvd.html

================================================================================
来源：http://www.aibaodan.cn/163bowlcozs.html

I. 正则表达式
来源：http://www.xuanzx.com/163wcrsjcdn.html

================================================================================
来源：http://www.xuanzx.com/163hywosovs.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163duonqqyc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lqcqtuxa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163usgdmtwv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tzbcyyjx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aafxbubz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163pnvsavyh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nuwxpcnu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pzvudnqk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rtoaldqv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lcnvptbr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163npqnikfc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dzrqmmgs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vbjxiaxo.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ltchiyag.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yisopdwn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163acmzcmlr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xxfgrqhv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bdyneilb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163aeaoeail.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tasinqdm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rzqhgxui.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163czgbbpti.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jvkyhxll.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fhvzgjtq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zfybndrx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yzldftmn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163cwpmjtyu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bzjpudaa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jkinhdfz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bdikmhyq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pqabfdul.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163stvwyxxt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163axrcctjw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ariihwgu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xpxubjae.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gikiadnt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sitiagmp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163iteuafec.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163tnbcyndn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ouhadnzo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zfxpcuff.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vaexrhiv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mhwonnsf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rcqeomrs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dbxbwmwh.html


<!-- 参考信息 -->