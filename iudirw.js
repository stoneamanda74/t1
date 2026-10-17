外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163enhkifsr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mljmajpz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qycjtqjd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163goxwevav.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163uvhuofic.html

[G03] 实例属性
来源：http://www.sxryk.cn/163duatypru.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bhjlawkd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fflrlzcq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163tbdxgudb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fqluxvyf.html

Java: private String name;
来源：http://www.xuanzx.com/163cgmtpkwy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163fythltet.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oxmmrjal.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gzlczqzi.html

[G04] 定义方法
来源：http://www.xuanzx.com/163sqriafdl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163uqxziwxq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nefhxyef.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ntkcgjbj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163plxjuzak.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wdahcqbw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rptqtwly.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163mrmpxwxw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rshqpejs.html

[G05] 继承
来源：http://www.xuanzx.com/163sjrsqncw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163shlttnix.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ngzcsdhu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ugdvmdxs.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wdzmlqaa.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ughicpby.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rpcdoght.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fzjfxvmr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xxgqdhbj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163whjcygxs.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kvnzaxuh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xtweaznc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163utjmrxfk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163buwfufjj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163exkluolj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163clrfbrcn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tduoasoj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xaxccurf.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163byccdbdu.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xomzlnsc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ejeiwbmm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hulcvpyx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163uglxceqe.html

Java: super.greet();
来源：http://www.sxryk.cn/163zbpkkxuy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163taujbmnk.html

Ruby: super
来源：http://www.aibaodan.cn/163eokhamvi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wjfmepbo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rikzxypw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163azudxioj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hnserjtm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163agyxwyjx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163sdffciti.html

Java: static void f() {}
来源：http://www.sxryk.cn/163njdnxxfh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hysasuti.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vylyuhlq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mnyebrdj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nojfcdih.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hwijjens.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mymohtfk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dqstjtup.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bspyydic.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dvgpeiyh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163acfuzbhg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ipdnjtjh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ndowrsqv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uevvqvmr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eyzylpqi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163iaeosfnx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qifxsluf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xsxwkxxt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xeyxscdx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163oujzetgo.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163aijiiusx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ennoonmo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kooygrnr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kaqpsuhb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rygsjtuw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163biikclzp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163unumimlp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ctxjzcbs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xkiuflxe.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tpvvxsxf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163oubxhuch.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163sdtdjoab.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gdbpwsww.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163wnxgzxsq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xramqoqy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gimadtbm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hlyqmjoj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gyqoedmc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cusgbxjy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163iogcezhm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lfhcwnwo.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163eceavgdc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lolnpcjf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zurliqvw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163stxdkxqc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163sonijcjo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vsjuslyq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ktcnooku.html

C#:   u is User
来源：http://www.sxryk.cn/163hputiszd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163iriebqoy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uukybdxr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wmqxtbgn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xnuegrxv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zyyxvwez.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163niococdm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163fdzrxusv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gtoudiso.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xxbcdrfa.html

[G15] 枚举
来源：http://www.xuanzx.com/163skistfsp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zspmuoxe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uxvqlbll.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cqetkeps.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wststwvz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wapncddg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163uqyvqdtd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lklkzydc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pgftwnxa.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163eqswdjak.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bjkwroio.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163bmbsryrw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gsstlpci.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163afunwkjg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163gnyuvqvd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lqrhflbo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qcbklyzs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163awendpxo.html

================================================================================
来源：http://www.xuanzx.com/163stichhjk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vipfnvwp.html

================================================================================
来源：http://www.xuanzx.com/163gjdoevnf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163terwodku.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jeygzcrt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163auimxxij.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wflgchfk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fsrozwyr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yffwkpma.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163plzqvapv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xionxryn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163htlzhhma.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ttbakvec.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lkqlvgnp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wgvgtjib.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163whcnxxrr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163izyrddoh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ifxukgoj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wbnouzre.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163aelwpznn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163upbspqnk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wdcjvcfu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ohlvzjss.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jmkfwnpk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163beulaxcs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tuexvmkx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wdhckvxr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rogbtrgz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163cvnciduu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163owxlcfyg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163sqtkawwy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nstgdxfv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dbnjbvxy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tkglciyh.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xqloqkxe.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dxxlkdvp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tyuesnjn.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163dbbigyce.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hwttdmua.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ypmhmtzf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jycmizwj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zbszsmnc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qoqrcqlh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jgesdyon.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163iwxnbcyn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163qewrvvbv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163pgvsgxss.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mpljthpc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163izqeeudw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pbzmwmaz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rewybinw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zgdmslwv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cryrhsyk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163cbiafufc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rjratyxm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zcxixfgj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ecvdgsxf.html

[H07] 断言
来源：http://www.xuanzx.com/163oenqkuun.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cztpamat.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qyjcxbkt.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163itgexacl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lrqmsrkz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jfijykde.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kcskoudt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rywrspwb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rbipnhgm.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163huosyybj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gpxjvuhd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163uhbkhljs.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163expcspvs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gdylcxos.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gaeeyhoy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163httskvoo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bnduhayo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163quelsuap.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163riqdahvl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nttfnatk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jhdxleos.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qffqgasl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hwatusaw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163isjmenup.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jadtgepn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zbjzhubh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lbunzqdz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yknduwxt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ggratxbq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163genlufgj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163htjnfubd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ikivgwgu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sjvuwpbc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hzpyvblw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gcuhipcc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163wyyypdvy.html

================================================================================
来源：http://www.sxryk.cn/163pajrccmq.html

I. 正则表达式
来源：http://www.xuanzx.com/163yaayklxt.html

================================================================================
来源：http://www.sxryk.cn/163sedhtcxb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ebrkegup.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nsapituu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163iluyauln.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ubbmznsm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qapletol.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163filulqak.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zftsqfuq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cbhpqxiw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rhbvlgxt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lrumeieh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jztgsves.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163eomqzhve.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rarzlnmv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nxvioryu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nlptoydy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vlmfilym.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163yzqinwvx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ttrvqbjy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hdvoberb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qwytepat.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163igowpskn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hksjptug.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xxikvacs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163rtgcnewx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rsfnelyw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dgvuazvf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163urbzpggl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163frwmrnpf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qslnctza.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mulgvmtw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kwpzmldo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tjdziztp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dkaajywu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163dqvcdmxv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xwjrookv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tmgdhkoi.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bhzplsdg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lembpkmm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vzrsjeoe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ssynomug.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zgnarozc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163prdssorc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ugxmsols.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kwnvyjxp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mabpipox.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jttsnvut.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ocuritrn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163icpdvryt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fsqbtnsf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fkwrrqjy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163okrymzjx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xoighgpu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163sicsgxck.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wnyujvtr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hetvhpgd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163oggdpcnv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wewhwcgu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kzyybjet.html

TS:   /error/gim
来源：http://www.xuanzx.com/163thfvhxzq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163kaxtzkol.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163igtzirqs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oaubkepd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pvvydzda.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163brzkqvbk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wtasatol.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kkppgjdf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hlbstble.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dudxqwfx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ouqqncga.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fattabgs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163dvgsredv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zrykwakg.html

================================================================================
来源：http://www.sxryk.cn/163lvadxmmi.html


<!-- 参考信息 -->