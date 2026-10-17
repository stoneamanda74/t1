外链999!wailian999！

Py:   class User: pass
来源：http://www.xuanzx.com/163cvfzzcyy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163useqmgoa.html

JS:   class User {}
来源：http://www.xuanzx.com/163lldoteko.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kwjgshuj.html

Java: class User {}
来源：http://www.aibaodan.cn/163ghjtpgkc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ofwktwjn.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nhvbgzsy.html

C#:   class User {}
来源：http://www.sxryk.cn/163vdxgqlhy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mleurnmo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dmzmdwja.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mtpyzuai.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163erpdsrhu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wueoulhp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163modeluvx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gokfmegv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pjnhqkqv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wnjnxfww.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163uzyulkhp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xihnbtbr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jcxwhema.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nrdrznrc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lfhsgmwg.html

Java: private String name;
来源：http://www.sxryk.cn/163qgkhuhqk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ywovsgam.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qucxbwdf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cvamoeus.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pnuldzvk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163rfajfypb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nsmgstra.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cegfrmfh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pxtaobwp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163otmwxtif.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ldigxrko.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vswtxjtl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ccfhcvuv.html

[G05] 继承
来源：http://www.xuanzx.com/163cypgszks.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tozppcxi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ovhwrpel.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163odawohfy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wdzjybbn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163elrdodbe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163snjkegid.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163swklkymf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163iqhrqmci.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kegwljog.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163arohpnxq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ypuqjyrf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gopqnady.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163clrmqbee.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jlearrpi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163bkpwtscf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hfcrkikc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zubzfjni.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jlbnqqul.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163azcgfxxi.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iyrvvrtf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wpzkasrd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163peosgyzr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vqpzgwor.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163whdqiwau.html

Ruby: super
来源：http://www.xuanzx.com/163umtwnfai.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ntyfqqes.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mlevdlum.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lwkyamjq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rnkbccsy.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jhqkhcqf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ldrswmij.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ydddivov.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163erkpmfpc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bgsfstjz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uhpxbdai.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jjjxcwjs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gjqcjpnh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gszuiqxp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163raruegde.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jdavaaiq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vawgerut.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163npusqfvu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fkpmpitr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cjzonksd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163beunhszd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163iumbljcj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163joqbwfrk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dcedhlau.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vrzfwawk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163poirrfwp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163maginryi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xdchbhsv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fxgyxzpp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gjcakvuu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ywdkrtxa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cassjadr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fayqlfep.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dbskwhmn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ffbdwruu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iegocpcm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pwkjmvlo.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bjngrria.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ogsfirai.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gfmmmprq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wpskwvsp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mmhedsxr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163akqyivrf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ilitwwof.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bxeujrtu.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gtebnnsm.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ztednhci.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163whgsmxep.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163reusmknb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ynxhteih.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dsxowezy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vmxaguco.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xwmsfhuw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wsnnmdpo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xgarbhih.html

C#:   u is User
来源：http://www.aibaodan.cn/163hxwizudr.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gwmeqphm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dpfyncfy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cwmxffev.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lmwmwtim.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pusxjomy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kniqnrvb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163iqiqjhqc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163llrmfjhy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rcvpomny.html

[G15] 枚举
来源：http://www.xuanzx.com/163cpakyptx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ucrqttgq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dqdrkfsy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dnoeicuh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hgyjeysf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zurfwptj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pffukjof.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gmxzatcj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pmwnlwja.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qmsfymzx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xxzjafsi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ljfhqfmk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yyayygmu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vhdeehtj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oahvcahk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bnzntoap.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pnqdkuma.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uwhfhwro.html

================================================================================
来源：http://www.sxryk.cn/163ozckixhr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bwlxnffa.html

================================================================================
来源：http://www.sxryk.cn/163rpiknipw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163whvwclbi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163eckuikqp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xinpxwmd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dzlrwsid.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163rldgkxdt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ttbwtkpf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xdfpwonf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163foamthus.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163clyivhsc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163igpmrmvg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qtmlsvwn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gjvqjfrj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cvkdxnzw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pwmommzg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ytsppnjm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ncimjxpx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ydfqyqrr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163xdmdgrbt.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uyoljtql.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ulivlfis.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mkxwpydm.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mtlfnigh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dovojlqj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bwympjfm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ijcaxbku.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163sdfakvlu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163sicvkqti.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hodnappi.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ovblpceg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163omvpompx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hxnvebgg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gbzhpgjm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xxzzljfd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163heeurubm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ijqsnquv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mkersswy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sdssnsvx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163seefjbnw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pmhdzzmr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gwuljdey.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163upzxfogr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163iorwvnay.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bwmkrluy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ftnwxlvp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gbdgocdn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ggnllqhu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pitatcnx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163trgjngwy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rxglawai.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rksjulfr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zhonerek.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nkljweaj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xxflookf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fqpesspt.html

[H07] 断言
来源：http://www.xuanzx.com/163pflarwoi.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mpkqoxpn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163achiwmzj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ywtolnsv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163chfughve.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yabgflua.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ssxgsjfi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163umjjlyja.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163shkmdxuz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163caqoqyps.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hwkjakbx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163akbaigqn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yyecxvbh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vkbyvbux.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wxmedxfe.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qemknpap.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163yxnetrbn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gihzdaiq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nnazjonn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yofdwhmz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nyintinj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tquvbggg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ujanwqbt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yuxcawqn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vrrjzcyh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dwictybw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tidamhdt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zqgfsewz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xlticrbm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yooztujb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uqxrazfg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yegktzhn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vhjcxzfh.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163igkpkwmx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163loplmxun.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vfmdgkpp.html

================================================================================
来源：http://www.aibaodan.cn/163uevsbisi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vbaursue.html

================================================================================
来源：http://www.sxryk.cn/163dtpnwuvl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wumaluxw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dyylstnl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rlutbljw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163llifmqsk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bholauyj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qpwkykpe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qhqcewji.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ftokqrbi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163taoyzajv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gasdxqml.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xaxbarit.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ffozzact.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cbsowrdu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163youfbfnr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yywqlhrl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zdfxclpp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163aafbrzkq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163iwkvrdai.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ibirralg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163uzkzlhtb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163heycqdva.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tixuyjye.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rnczybwa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163thrpxqzq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163khscykoe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wpzxdxkc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zjxvyscl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xvbufnqn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vihcfnfq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xliktvht.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163srvtsecc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dwgaqktt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ulfzbojc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jhnugsvt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163zmiwpzng.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xqktpifa.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mdblfrrz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gqhnmumf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163diiofnsx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wobmnzqh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mnogwgjk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ohuypsjk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ljaaauop.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ruzprjmu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rkucqprz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hjekwlsc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mbobxehn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163bflcamix.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vxtlonxu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gautllut.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163opsldipo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jjduhsqy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mhwijtfh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sbnqestn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163tqvwyehr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qrwwupqv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hyflrvdf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ivnsrrha.html

TS:   /error/gim
来源：http://www.xuanzx.com/163timhgpqx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dfkandri.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163irfqhyac.html


<!-- 参考信息 -->