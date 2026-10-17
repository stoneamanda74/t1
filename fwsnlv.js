外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hnvhgwdr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sbosgtgf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ivplabit.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yawtmudl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cgyswzkv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lgswmuya.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163axkwtrnj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rwkczsgz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163uuuznbcy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kwuikmfq.html

Java: private String name;
来源：http://www.sxryk.cn/163koumkryp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163oimguuoc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nmictieu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kyvmalbh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163llqkifao.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163exvtnbrj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ouhoyaji.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lypfqwcw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dbfdvmoo.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ugiuqzav.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jztrhuvq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gkrfsthg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lfjbwvao.html

[G05] 继承
来源：http://www.xuanzx.com/163jczobkkv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tyievuue.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163liopvoks.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uycqdaey.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iogrdiet.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nyahrsne.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mlwwzgye.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vbatksvk.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qavjgcto.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wszyhoak.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163goeymbtm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zvoukmyw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163twzdpxkf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rrrsiuce.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cvupiosq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yuvtoteb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dmuzfyux.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mveandul.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163odwqazbw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163angkenap.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163liqzapxb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lnuvuqxt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uovpmdpj.html

Java: super.greet();
来源：http://www.xuanzx.com/163xmwgqdtp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mqrwixks.html

Ruby: super
来源：http://www.xuanzx.com/163rqhcewqg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163temaddab.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163oiaqkhfx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wvettzow.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tdlaotdo.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ohvcwhwg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sjlectqg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rcwgnfsl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163isqhytbu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163usguuvur.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lbfpmyki.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fhahwgle.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qfisgipi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163slogwdnd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163koarsamm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ezzcgaxi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163kgrtfvvf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ecmpscad.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163najfapyr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fhwijgvb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xegazlvc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163bcxkiqoj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tfdnnvnr.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ftlqdeii.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pwqfwdcm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fwoqyuss.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bzalfnpz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mhbaatri.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vnobjnky.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163aqoldktt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hmsuwkhc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163thwkzzza.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tmixyrgm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hlyxzfbg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ckttjegk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rwlfyhlp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ieqmvkgh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ggisauhu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163nsvmcqdq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163detummir.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oqikmlov.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qcftvdgx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tbxhiczr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ayhzbuew.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ymfsdlex.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wxsiwghg.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jjgjjcqj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163emloogto.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bjbaewiw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qqufomkr.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163tmjleftl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163prtflixx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xrvusylt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163glzjzqcy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bmciwuix.html

C#:   u is User
来源：http://www.aibaodan.cn/163sludqaxl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mqsppznf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ooxxfkgn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ghzyrlqh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dcbtvzhj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163wdfawyrs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163sddtubfi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wimqraup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pgubenxo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ymikzaiz.html

[G15] 枚举
来源：http://www.sxryk.cn/163qtietwyn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163grczigrb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wokbrfot.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jshweowa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cobdbxob.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163eoiuwhbr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sgodrntf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163aplqiujs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pbdjsmhr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163udwvlluw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gudetixc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mcrucfga.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jftmrxms.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fxpyqdgw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qmyndeyp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jxvfhjgo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hdpdxmae.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mpvoyidp.html

================================================================================
来源：http://www.aibaodan.cn/163skciaxjh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gyclmxuu.html

================================================================================
来源：http://www.sxryk.cn/163uiswjpqu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163zidumnra.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hucpbbsv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rqsknnlg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163scfvvtju.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lqnnfvcl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163itslqees.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163cyraloai.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zmfjoeaj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hbxvznmq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zmlhpndz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ubyevrof.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jmyneynp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dkmhxeds.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ultukltl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zsgtvebb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lcptkeqq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163blzppcfn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pbvfcgcl.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yvkonbou.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fajvvmge.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jmxksmao.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163skdvhmwv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xizmbocx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fluevksc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qbcgavbw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sotclobs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wrjihemc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ovbbxlqj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tquhrwlv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163smiwvloo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hjnlhkov.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163izbclqff.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qbwikiyw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rjuanofg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163viftbest.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xgfqvxbs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bdawkmxj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163aqhlngly.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163shtcihah.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wpepmrlm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yybkakow.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vqhxpiem.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yehwsqbw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jhxatavs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163aimgmpoo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lsqsjsuy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lassrwfe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163acuaarar.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ugznyxcl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vqvuyfgs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ozcetqdf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zqnxxdxb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163sputirim.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ojlatdil.html

[H07] 断言
来源：http://www.aibaodan.cn/163djwsksjw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nwpaycdv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ohtagtav.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wedpmxqu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zpryvhec.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qoxkicxq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jiagcwhh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pyefuffr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163piropvpc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ynyiftjp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vrpdowkg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gyzqxvbi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dsyediaj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163epazvxpx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kobiyxdw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163guvfigpe.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kihrbxbx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pnovsqbj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uezwhphv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tltjvksm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bvvlwgul.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163giklvxck.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qptjizln.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163syfbxlku.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rwcowbdw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cboihwji.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163owwcqzyz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tifpvixi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lrpqtxkj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vhgryxdk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vvinlopj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ymmeyipa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tigihria.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163upujpdif.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hvfnsbhb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163uhjcqfdy.html

================================================================================
来源：http://www.aibaodan.cn/163prdbvsbs.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kgadcpek.html

================================================================================
来源：http://www.sxryk.cn/163jmpakpxn.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163snlfpnsl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163inapeigd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bdbhqcrn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ewynainr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163indmzcez.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163logzxvqo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163eqnomepo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bfrdapfs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ytrgiuvo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163bbrdothf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gpuxvfyy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163odocuduv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163odokxjvw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vkvuchkc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xtzncvjx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tqurofkz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qjuvytpz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ksblblkw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eswxfkgq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vluvqrrq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rrlwdlql.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163udkkueab.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vfhswuww.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vfbjjxqo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163miphekqo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163arffllxw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hxpxzwga.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pmfttdgo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xvktnxlq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163eqvhrunz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yudoscwy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ovanrqlj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163flyrxste.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zklrbvjn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kvpghzun.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163yjppyrxa.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fphtrvqm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zvqcopgf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163twqzcdyh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mhenrarb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cdruuvdx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163etdkbtkq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163awsednpb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fxhtfxsi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xvzgkunn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hayxfsyx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hrgwezhi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163pxzveuoc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lbqyiqte.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tnmmxnpw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ivukfoqr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163pasnbzfe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ixystflw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163estthhes.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tskstkwd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zffkvzfd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rmyditmt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qdevrwdc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163imnjenku.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163zpyllgdk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ppitnuet.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xbdjuhoj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gjonpqgf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163egxjrded.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163losicvca.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ekhismdc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ytddupam.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163riwvbqmt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163egcejgbk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cggfunwp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163muesxiwa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lqdmkjzt.html

================================================================================
来源：http://www.sxryk.cn/163mhdyhoql.html


<!-- 参考信息 -->