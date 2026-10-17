外链999!wailian999！

[G02] 构造函数
来源：http://www.xuanzx.com/163wqrzkvyk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163oxfedzhq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163girbyhtv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wcptyejf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lxdhsvtt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163okdlyxjk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pixfxony.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vvkbyczf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gznjflkw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ugkxvwzp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vxpczaam.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dyjdozox.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163veerajfq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163stnbdfir.html

Java: private String name;
来源：http://www.xuanzx.com/163kzgvhspb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vrxgwsoy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dtkzwein.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cxkikxmj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pjuwdjou.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tstfpcqu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jgnxmogp.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wlzhzuav.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fcoybdsp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mnwbyrep.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163phmokdmr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wmgeywtg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aipaszvv.html

[G05] 继承
来源：http://www.xuanzx.com/163nrvorqif.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163eghjhtam.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vdgpayjh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vdqijdbl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vguutmtr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ieyjjyrn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ekkzdwpu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pwnlcmhg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163htqaanzs.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163glsykrha.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mkkekdil.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cjpvbpdl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hagstjgf.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pkqgcsed.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163eiruqxey.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ppajvwyj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ncizuptr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hccsaveg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yvgsjdgo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ffhyoswr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163myntntru.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163xozvjtwy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163aipzezhw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163omfpczdr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rgxpjbii.html

Ruby: super
来源：http://www.aibaodan.cn/163nyxcsnmt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cbitubua.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ykcnviso.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fuyydbeb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cubgrinb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rxxgwtad.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jqcxosaa.html

Java: static void f() {}
来源：http://www.sxryk.cn/163clffgfwa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163grrvrqsz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bxqiyeed.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jgajcupx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cgxuwtyu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rgxzivzy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163yulmxrsd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gkptkffw.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jkcucakt.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163atbxikzq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lwidhuzb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pbzvvsml.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qprqsfkq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ehkrhbrs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jgbsesal.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zagzdviz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163htjlsecr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qhkufxhd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bdeeiugw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wpdhndhn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xzydeokp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163syeufycn.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mvsmiltb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kpgohyom.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gchusptr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163lexhhktt.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gxmzlekl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kjrrfyed.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jftvvvyd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wtxvedfk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163onykydru.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163osqjiewe.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pctycsxj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zkqdfrzd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rwcjsjhl.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ljaeafhq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nlmhwrcz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163prmylbao.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tadgayif.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rkwhycog.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gcyryhnk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163laxppapr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yzcbuewt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pqkgziya.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hharltlt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vguwawml.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xxepsnax.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wbplxoyv.html

C#:   u is User
来源：http://www.aibaodan.cn/163itkmcsre.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xlizmiqw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nhtbuljw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ptwlchwb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qtkqpgfo.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xoxzpvtg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lplnayij.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ggjgvsma.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lxoyakcw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mzgrczhc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yuoqsdnz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lokrqhsg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sexypnmq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ipreqvrd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pfsussjk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bdxskquj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qnnfrpdh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163djfpqmna.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mqwgzvgn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eneuplhq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163tkoubpky.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163iczecoci.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wikdylte.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eiawasvo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163jrgprezo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kwsmgdqc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163lkfvpdpp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wyxkljmq.html

================================================================================
来源：http://www.xuanzx.com/163zmysbmrg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lfjvosur.html

================================================================================
来源：http://www.xuanzx.com/163jmzeqmay.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163aztspyrf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jxpkmjsi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jgmkvqhq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zusfavoa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vojmxufg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dihefvvy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qktoabbb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dgpinlvu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hojfmtlk.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bsizwwgi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ljxfilbg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zkoqbvgi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163htoignji.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ccnsxmxe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tipkhlib.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ueljltqr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lmjeuzjf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163nbjmwssr.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ehglvure.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yhlyfxmr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163hqlhiomn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163csajjtcf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163naymyetm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yynqnhnc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kddhzhhi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163omeybzmu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ewjzwpzb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bbsnojox.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jaiftwge.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lmgrbxjn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tdggckmw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163owclxuqp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mobhkpxn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163iyediqqj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wnwayanr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qhonfqhg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163shvjriig.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163grkeuciq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xmygotgt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163quzudthd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wekosbqo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163htnrjwgp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163tjkurhbo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163iyyunspr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lvmbvppm.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rkihtxnl.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qdemcblq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sgbabhks.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xmmytqer.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jecjaknd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mwmpzdce.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qeggxqoc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163epwgybwp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vjcuaesy.html

[H07] 断言
来源：http://www.aibaodan.cn/163skpaxfuk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163roivatvo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rthnpfcr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ucuvjenq.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tcofedhd.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fibilloa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mzoumjhv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lyyqxnly.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vnvykhyv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ccktxjgl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lrtcgmcn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kvweksda.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ewfznsfd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kutvzebq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nsuhuiio.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jzrmuler.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ixpgowbe.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qoprusie.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dceqjaeq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jxtagkqt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hwzsupis.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ewwscyyz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kinzeuss.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xfpsgmeb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pclgxiub.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tpirildd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163srkszdnh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fmaxrbxs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jrjxdeso.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163txezukjy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fjmyflar.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rcgqrtpw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eoakecbq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vzhiyztf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163acupjfcb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163snslyiih.html

================================================================================
来源：http://www.aibaodan.cn/163yykqwjtv.html

I. 正则表达式
来源：http://www.sxryk.cn/163totezmcj.html

================================================================================
来源：http://www.xuanzx.com/163tjnwtded.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lhxfiuzq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wvgdsflt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kqjiyrpz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hmlmcgvc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gerahgsb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163marcctct.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wozohkee.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vzofyblv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xuhavgxs.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tccvlkhx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jtzyevre.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qcrtpwxw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163juxepzyk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tcyuehhk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vkpbwkgz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fshmwxzx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qhbydeyp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163aubmoryk.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xezlvmnu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jiknettq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163iqazpfgp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tepqovev.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163furecszk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wlmqxztr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nfyxkldb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vodlmmow.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xahytecp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wlbggzfb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163geuldaca.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aosufmpr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nzdmgrca.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qqdrqflx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nsccppsi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kmfpigkw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dilxfkbo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163eegesgum.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163koifjgve.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fkyrctkf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lmvthpmf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lwpzeboe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mldhsbmd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kbsicxdb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vifttbms.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wswpdrza.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ugfwdkex.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dwhtozbi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ckuyuzwe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tnpkugpv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yzjuewdh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mhkmiklb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163newtjtyh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163tzrepuyv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hjfqdzxn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hdsbelmt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nuwmqfry.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pwioowgk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hjurgbky.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xkbmpsqp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163svofpfyp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lxgtawlc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163twdnemio.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zebdvptd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163itxhesxg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163oegbnysc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lgtrvose.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kgdypnpk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wfzopgbb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ojdopyiq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163efhsywjw.html


<!-- 参考信息 -->