外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cgajhpld.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kqofwsno.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fmhknvsc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qvjwjwrq.html

================================================================================
来源：http://www.sxryk.cn/163hjixfpkn.html

G. 面向对象
来源：http://www.xuanzx.com/163omxbtzvh.html

================================================================================
来源：http://www.aibaodan.cn/163qgjhssxx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163biwjlibq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163jitckhip.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cdhzdkmr.html

JS:   class User {}
来源：http://www.sxryk.cn/163juqevsri.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163evnfwnlo.html

Java: class User {}
来源：http://www.xuanzx.com/163ksfcxeky.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ziutykdb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fmdzaruh.html

C#:   class User {}
来源：http://www.sxryk.cn/163ihcofxks.html

[G02] 构造函数
来源：http://www.xuanzx.com/163scmjmgwd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pgmfmltj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bhaajcyp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yenpevgp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kvjajxaj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bydqpcvq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uzjhjwoc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163sywrymju.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sndadvvm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163behdsjpa.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163itwggpri.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lymlmpbv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rwpdmptc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gfrlebcn.html

Java: private String name;
来源：http://www.sxryk.cn/163crlfnjxt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qawbyohq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163exvqvlei.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wyhaulty.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ghsfwobw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ixbpxjsv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yrlpldvy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mxzzpvqu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dnqnuoqj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163eyxbjfqa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zzanhqie.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163okfqsnvm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163iayqrdaw.html

[G05] 继承
来源：http://www.sxryk.cn/163wugktjgm.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vociynza.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163posuinqt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rzktczwz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iscioglj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163kknufxoe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cpkohjvg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163avpdrbzl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nnibyvus.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ikfoswzw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oqyrogvs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ovhrkivi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ivgldkvo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wgfurvpw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163oyqhzcjc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wxpowwpv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bjrbplhe.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wjewtkcu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163drekhnkg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ftyergra.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zebtacmm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nghihprk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fzvnisaa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ximwfnbl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ytyzcepp.html

Ruby: super
来源：http://www.sxryk.cn/163sbcayola.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fsjexkbg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xzgemxwr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nmnckway.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kqgsibgz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nocenwnf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163tjlzqbwk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sogtsouu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zgedemzz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gatbwwyu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163srjwxulv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163lvheoaij.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163owoiypqh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bqzcywpc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nojxmkao.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fjaprbre.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vdaemevg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wexaekjy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pvrokdls.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hqgwxncv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wfogaxku.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163htslmaxc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xkpsgecu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ubsqlrzz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163prexpoeq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qhsgmuia.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ueqbkamf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jfrnamws.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163sgaerpgs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uoawsrva.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dffyegns.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wshzdxhp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163oliafqcd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pabaydjh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163adzxiupq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jztqoomw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bsccutkj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163iqcflqeh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163uobpsdjf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163aerrmbrt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163raivilal.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yqrxdbdl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dodmqipl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vnqvveej.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163eejrdwmq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kjqwodjz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163wmzprwbj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163dughnpcc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rvazryhj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163axhvqstt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pndzgyga.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qapdarco.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yxopgzqh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nufuhmwn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wffueock.html

C#:   u is User
来源：http://www.xuanzx.com/163gwsifczk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oihgvvpv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163aihemtpy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ezutcrwm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ggaschto.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163swegjons.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hounumia.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gqassqru.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yhycebim.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163twtoijqs.html

[G15] 枚举
来源：http://www.xuanzx.com/163ilmjzide.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mohgucos.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qungmnvb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jbfocczg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tsqgnkkz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xtshpyea.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jtxxeosz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qyzmmvmx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lkzkzfgl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lwpqrkla.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tgiyqzip.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163obdhqqgi.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pztiigzw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vmjajhgx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ldqlsvlr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ryhozqzq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163clyxkaee.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rhcxnryo.html

================================================================================
来源：http://www.xuanzx.com/163kzkdrfne.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ztkmrgcr.html

================================================================================
来源：http://www.aibaodan.cn/163vfunpmmp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163wbwiybep.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163bmtbllay.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wtjkvhen.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163aejbwbbc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nzifbdka.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163vwhlvcgw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163popavcpf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bpjnenvh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163foetsdhr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fvgspjov.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xanigfjh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jumsgcri.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ludaktsx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bsgsdznd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fcwfsfcq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163yzmlnvvb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gfafmaqi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163keenihvo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jgzxdfiv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xyksyqya.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xryjzknn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163avcbpexv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zboqzizl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wpkneeot.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ocnodzjv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pkqpojds.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yoavsqgu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163iafiiuha.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163crwltjnu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rihduiuq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163oeccfvhs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tdbkfupo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163laddkmbb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163llgiylot.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zadzgvid.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mxyjastr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pzozmvtj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163sigawngx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xjhuaudf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kybtqsfy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rxoljcrc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jvdqrhoj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hrwlwwhj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lqsiemcw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yebhvnwo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yyzztpdw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pkqiwsoc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163oalspicm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rsatfmps.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nlxbwbbd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nxwzdpuq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ftinnigs.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163eurinjdk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ossczzjz.html

[H07] 断言
来源：http://www.aibaodan.cn/163fmvamikq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gcrxqsxf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nyezvrqz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163udnfyjxc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fpqqdtlv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rgsmuhfp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vzykwqdi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pjsbplxv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163szqzgdno.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vyzyxxaz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163landwfap.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wbslizvy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yueovxhd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gcafblek.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163serhiysb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tlztmszj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aynxarem.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cxguriyi.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hrefwklj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xlqcowhf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bqkplque.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dpzayoyf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gigmtdny.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tbmolrax.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cswloscq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jrloyfqc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tyxgvbzh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gqdzzskx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hxjvpope.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ynrgqauv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jjzlavki.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xuwgviao.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nvlzurtx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yzairzis.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163oqcqmver.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163wcmrecxh.html

================================================================================
来源：http://www.xuanzx.com/163disbkuqh.html

I. 正则表达式
来源：http://www.xuanzx.com/163gddetjoe.html

================================================================================
来源：http://www.xuanzx.com/163zmzcjnly.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163xqirwyzu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163frvnummg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163seugfboz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pjahkzll.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ddhppouj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lonqmcik.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163iccirwlg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163teabysrh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jtguanjj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wndpbghs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bngkcxxk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163iuvsqico.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lxjcobyr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163egoptrsd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xdpvddxq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vcujyznc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fnvylake.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fspqyplj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163arsdwtfo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rzhgkieh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zvvwwwep.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163yxzzzcpd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vrlnmdqh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jqugpaee.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ueqzzban.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rilmmbsq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163yshexivm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yfkpwsim.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163opiyqqio.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163novwvuyt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lamlwqqu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163swzivkza.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ipmavurk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ydtqhtoy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tebsruru.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163houfzpha.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ibgqlazv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163acwetatz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ffblwtex.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jkzzozri.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yyehqopj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qhbdeqss.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sihfzxyj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163alxufril.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dwihnpbm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bqugduwb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vfsgjogn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wvocmgnc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ywvoxlyt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ssjeznqy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wtwmpbza.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cjzqpiuw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dpnvhyei.html


<!-- 参考信息 -->