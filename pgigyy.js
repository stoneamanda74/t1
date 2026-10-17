外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163xbrbufup.html

G. 面向对象
来源：http://www.aibaodan.cn/163smayowes.html

================================================================================
来源：http://www.sxryk.cn/163ynczwlmf.html

[G01] 定义类
来源：http://www.xuanzx.com/163mgkvpibn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lmyatxrt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bksigdpc.html

JS:   class User {}
来源：http://www.sxryk.cn/163mzcpewjx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163akrulgar.html

Java: class User {}
来源：http://www.sxryk.cn/163nrknknnp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163obryctdx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vptwnrcg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163shicmapi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163avrydnvq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163hpsettub.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rkhmvvrr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ufugephm.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fciadcok.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gnhdiabx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qhxpxaoj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163mufmblrg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wegtiezi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mqyutowm.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163psgrqqhy.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ywdsmpnt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kdbyqvwx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163aohxnkgh.html

Java: private String name;
来源：http://www.aibaodan.cn/163pnnjdygi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lvpzbbmb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gwjuctpj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zybrmgxp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163elpyreff.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163sxaswswo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hknyhejx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163atolvcdn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gxdktxkb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163srbluril.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lgyqzwtc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gtscnplv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zcurwokg.html

[G05] 继承
来源：http://www.sxryk.cn/163eebgtngw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pzlwkhid.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qemmdblw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wxgmcnot.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163okifepgs.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163moohtzxl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ichkifcf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163gvvlqtzt.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jtrboebd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bzpqivks.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jivbuaki.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zisfhyem.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hcfmslky.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vvdbncxm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dpbhyfpb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163djgrvfxr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sclrukzv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163thywomwp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163illzxobp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qdsokmgw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kptliute.html

JS:   super.greet();
来源：http://www.xuanzx.com/163irfntovn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163encwlyzs.html

Java: super.greet();
来源：http://www.xuanzx.com/163cqnpbiqi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163esacndwk.html

Ruby: super
来源：http://www.aibaodan.cn/163claqsqlr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ptcxelhh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163bcpuwkbt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rgxnubjz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163craxvlaq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163votuuiru.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ghzqgztb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fscwlyaw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hhnbznkl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163omkxlyhs.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rotnmpvo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163eokexwqa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163blozzmoc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qwzdtsiv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fzstgsup.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pmqcarjo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163udhlkrnc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lvaanunf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xibvtebw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vmleofwn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163osdfzxjk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jnqjilmr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dqtdebpi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rqwefdft.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ddkalpop.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163frcnxomq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dzjnzlwy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rjltokrd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qghxnros.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xnmnwfma.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qapbywhk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bcirnxca.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163eixfksqv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nwphticf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mudqeela.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wwpqffrq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wheswncx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qppxzauy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fxdlqlri.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gbjzmzxe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tyyrjgkh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163zjaefuib.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163iyaqjgbl.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ccrtbzed.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ewkugvjg.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hljxqqpl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xyeblsqr.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163iycfnhlm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163psjqaszi.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163laawvnai.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hjwhtvff.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cjlyskvf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iicmbvlr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lgrntndr.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tghweroy.html

C#:   u is User
来源：http://www.sxryk.cn/163joqtmuvn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mkykrwuz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fvmcfxnx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163brvjxtds.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tjcciiwj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yetobhnz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163hlwabkcm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yzqatpew.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ewxxgsvv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ktwlxufl.html

[G15] 枚举
来源：http://www.xuanzx.com/163qyfczxdf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163oabyfgbw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cydbcskr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mrwlonwc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bxtjmhjc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163uhmubaqy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pnhyomzj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ltfninsd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hjfmtkvx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vgusheex.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qtvdexyx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fwzfrknn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sqxujnpr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vslbjcfi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ekznemay.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163basdsjki.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qpvjtlon.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dtuvwklh.html

================================================================================
来源：http://www.xuanzx.com/163xcusvdoi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163luxcawxy.html

================================================================================
来源：http://www.xuanzx.com/163hdlgcyax.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ngqgzqbm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wlrejnwm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163taronabx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hvgmjhfg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vexkaxro.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lifjkvzz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163sczuyjcc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163aigfdrsu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zviterna.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163eahqfwsl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vojuyrpu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vdyvtuwz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gvljuvez.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bxasbglf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aglspoqv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lgfwtmul.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163phwpqbbu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fgidpfgr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tvnjpvsc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xdfbzjgd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kbxkykbi.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eowcpzkz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wmnmxdop.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qrxtnfsy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163npfybgqf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qtqhhrni.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jxvayybw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gsfafcuq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hxrglbgj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163squyxqnr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lmkzmobl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163riephxem.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rexvwall.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qxinprri.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tzmzubvn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xwriuyjw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ometfcza.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163flwcbtay.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163swnijdos.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cmrjhsll.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163iqccqcjb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jebxxvjw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zyuhralf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xhobnwrr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iskzhlhg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vxpydmjd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rsdjneuz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wukdmyob.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lgncarzw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163szrutzbn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rckcxhmj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eojmwutk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iuudxkzs.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163sfucqggg.html

[H07] 断言
来源：http://www.xuanzx.com/163pttqiiwh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mlmjqfya.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mmbrrblr.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dacdcohe.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mutndotx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jleqxuui.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hyrxkrbu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ttbsosif.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163spzofugk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xwqnekho.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ypqircrb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mmxjhfcd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qvjzxyxi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163yrrbmqkq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163oztcgkyu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tizmzedf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bqadrkcp.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hlxalkyx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wkqrthns.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cyoiyeqe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163islspymy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dntokkcd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tjzrjmhb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mzmcriri.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163urzqquss.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mddkzpbo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ogrszrsi.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vtsgcbvb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163opcijtow.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rfwlnexq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xfrubtnj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iwunhcde.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163imlvkhep.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yevdbjlx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mkucclah.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zkgdazsj.html

================================================================================
来源：http://www.xuanzx.com/163qwvwoesf.html

I. 正则表达式
来源：http://www.sxryk.cn/163ibdxsxbe.html

================================================================================
来源：http://www.sxryk.cn/163hprdivlo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fdrsyllk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163twdfpwwh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zrqeeyhq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vdrjbwya.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xnrjoduq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xwfrxtpe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qqhzurot.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bxnxvprf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dsgfoaao.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163swjutfmz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bvsrajqq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gxkrxdqb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163nieiqqer.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nzrnvjqx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fqrojcme.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163osgffgdf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ebiijbde.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qhowduqo.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163josaqnzv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qleovzti.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wxchglpk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kcwenwrz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bbhscpnq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163lalqbfow.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163joiocklp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gnmalsqy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bhijglfx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163jktysjlq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qqnsmwos.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pgdahugq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163msllethc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rmavcxka.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163afcbvpdu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uzjclwas.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sugcodos.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hbepeorf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rpcsfsrt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tihwacto.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bmujwjlt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hfrbhmcr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oakojygj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163iilnvjff.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ffeizdkt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ubrnwqyu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ifxiuhia.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163nkfvertj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nowrptkd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zukgscgq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jlftduld.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ieofehir.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ehkldmbp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qzkfpjsz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gastkvfr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hfddbria.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163enayulbf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rgjxiomb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163faqzkixe.html


<!-- 参考信息 -->