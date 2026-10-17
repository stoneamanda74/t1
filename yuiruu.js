外链999!wailian999！

[G02] 构造函数
来源：http://www.sxryk.cn/163akdmhhek.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jrpdwskr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163skxeyewf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ejpacuvz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dnetvuyb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zjgxtrso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ekzrihwn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yazroebg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xqnrcurl.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163dxcievib.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wrzmiqsq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ssatfhdn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163apwtxsiw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fencluku.html

Java: private String name;
来源：http://www.sxryk.cn/163biiducnn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xnmnmmvu.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bhmwvdky.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tywvtrse.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zxzehqzd.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ditnmnhp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fwcorpqt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163srscwixm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ndbveolc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mnpamyed.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mbcfcued.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uebanrgf.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dqygoghm.html

[G05] 继承
来源：http://www.sxryk.cn/163nevzijct.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163lueuezqh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gwqjylzl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qpkmjzpb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163eamtipel.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hbymatxn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jqbzirsf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vzvlzkac.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bvlktiav.html

[G06] 重写方法
来源：http://www.sxryk.cn/163qvrrirxk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163amohodwt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nehqgmhu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163aallfpte.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jkvqfpmd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163aqqccqqk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fxdnriik.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uznguctv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fphfmpwn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ibbibohc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163gqvvlgwe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cylrmtqz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yffagukw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163csjlwtmb.html

Java: super.greet();
来源：http://www.sxryk.cn/163nbxniwjx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163edanyvsn.html

Ruby: super
来源：http://www.sxryk.cn/163dzcvbkij.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zzqozllq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uetalwoe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163luajkohx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163acpvvqzh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dhkyulnp.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cyrhjmbi.html

Java: static void f() {}
来源：http://www.sxryk.cn/163kzyrrqmr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163younwchl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fqtymeup.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163achyxyoi.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cdzdiohb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xtmeszrf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xzneugyf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yjoisjux.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xbsywzjx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163feubxgpk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163cwivlcuo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pnaqtmmz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163sgvksmyq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pxewvthk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zxtfmjop.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pvvcvlsm.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wbdrmaft.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163feuohbdu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fhsvuhdy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iamovjlw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163acjkokyg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163letykgie.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zmbhhpzr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vwljrrgd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ztlenpol.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hjkmppwp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163mbbddmsr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rbtvyluh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163flighcfm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gyyzfcij.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zxkqxfrk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ygbrjdgv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rjrgzynq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163coknsiwk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qvdawqsv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hoidtrls.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xexskcdx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tgijpprj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fmksxtak.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ulbhneqg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sfkvkamc.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mrpzipet.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163zbxbryuo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ybpreoic.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nquxnqps.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ifdgfqiz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163khosvpqc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kpyaiqff.html

C#:   u is User
来源：http://www.aibaodan.cn/163ddgrpxho.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xxsbubwr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vdtmvatx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gvecpcfh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163gmqvqsgo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mqukvwfu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vvqwmddv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cccxoxxy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qchlgtxv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163prcqdbxm.html

[G15] 枚举
来源：http://www.xuanzx.com/163xuxgrofk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vmdeihfp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jidcjizu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ezzvbtki.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vbbkgmca.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mabwghwy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kqnoidfi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vmbcxily.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rrxtueid.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163uymgmdpg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jfyceihi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qbnooxaf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hrvnzbcf.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oftjzwtz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nmfhlons.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163monyfhta.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163iysfkpqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zhgqsgee.html

================================================================================
来源：http://www.xuanzx.com/163yredljza.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yzorzknf.html

================================================================================
来源：http://www.aibaodan.cn/163zazcdilj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163psghpsgb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163duwjlydn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ktgcfpsd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jccktxqm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oatytkqo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163upywcpyd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vsfavgpw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wsyyidin.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ojswrblb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rypgmdng.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ubcyoont.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ntteohzm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bztiaseb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hizddars.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qosulmuh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nxzgzbap.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163urditjgz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lomopjag.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rsrprppm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gfzzuoau.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jpquvkzj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bucresvu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bnfvthjo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gebrnwot.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ibirxyue.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jshbseou.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163derwiudv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ykezmjpr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ozkqejwx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zbmnihxg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vsfwhire.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jndxgekk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163njpdhihh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163pizggveu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hjdnxafs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hpsojkfe.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pectcbpl.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yrskdmco.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kxlduwop.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163plrybssr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cbypohav.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uxoriuvf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mictujyg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163nhtoslxp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xuiuaaed.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163uzqigusk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tiyheiyp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163cqidwlck.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iezlaxet.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uvktvtla.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cioskofw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tybidakl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ddlyybmk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jddwbflp.html

[H07] 断言
来源：http://www.sxryk.cn/163xmagdyjz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uawyifev.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wtlhowyv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fixvzfjh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mthvvndq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163iifebqij.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163avkblthu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qjopvnah.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163iiyotdhr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163gurqepky.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zextkliy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xupcsild.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zyajqrol.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mmbzyopc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163carxivmm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cuuzdhko.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fiumyjcl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ivdyypvx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qktihntz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tpjkcppd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163owdxgirm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163iabbygog.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163iqfswgyv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wvhbwufd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qvhwayex.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cgjpdoqz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163boutdzpp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rkprtlyf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tqguaekg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mnqllovr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163puhathay.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fpqctack.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ptilztbk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uswybinv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qtahyprq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mudhtqtp.html

================================================================================
来源：http://www.xuanzx.com/163qtomtaaz.html

I. 正则表达式
来源：http://www.xuanzx.com/163njeuzdjz.html

================================================================================
来源：http://www.aibaodan.cn/163pevermyl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163limfoklg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pkxjeodf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163dwoiydmt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mugfzdgr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nstzribg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vnmgjzur.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ykzdlfit.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xnzqkece.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pzbxgeeq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ykiejjpu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zviapncc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tmouraiq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yfkfjpcz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163utnllvek.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ggihwore.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163czlcxlwh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ktjfqrwm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163sgusazgj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163yfqkjgmh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wrqotrqf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vvpiupdw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kfybptoa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pqqmxcop.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163iqlmpdbz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ofyhgcuc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kgygbcpu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dqdqolzv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163drlyplxl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zvizfosc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163clrtnxen.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oyzuaqcg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cvxgaqrs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xmypdwsu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wlxqhmer.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wnxvgzyi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bqgmagas.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bcuokqzr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ydhfzecw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163kymzbpyo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jkcglycv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hnsvlopd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zqxpxbnh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lfcuybvc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xnxhmkwp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163paorvavm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lrzsjciz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163erhrsnws.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lqahqtzx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tldxarrq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uhuakyux.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kxdmecxa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qmumykdk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zhjvqrcp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163moazycoj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163yftapzaq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kiauyeye.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163unxlamel.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qlomdzhx.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fuedqbyo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163txhjpvfe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wdksqcem.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ptgpbkrf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rhlarfnx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pmaqkord.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tpzsabqp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tednqgcs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gncgvrnr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mithhoia.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163eoqcersl.html


<!-- 参考信息 -->