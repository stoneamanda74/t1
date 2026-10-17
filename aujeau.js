外链999!wailian999！

Java: class User {}
来源：http://www.sxryk.cn/163gxfrrgfw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mfqgwfpz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wyeonyvk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mfzdqzsa.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163sukomkte.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dhukvjfx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163srarncvh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ovnxsbgx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163shyiohpg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nnqngnqo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163serrbmje.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jtjcuhpb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163eipkehan.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dpzbrjxi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tceagofg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vcctnmmj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zgkewfht.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rqupkgik.html

Java: private String name;
来源：http://www.xuanzx.com/163ehcdulbv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wqjoawnc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tizqxayd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qmjmvivf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163aattgrtz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163obnkzigj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ikeyqwyg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163eccfiwft.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rhvsokxa.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ctapkmkp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163prjczbty.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vwzekihv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163owolycsq.html

[G05] 继承
来源：http://www.aibaodan.cn/163ujcicxcv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fmjpxrfi.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yfuzgbta.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163oexfkoef.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dfgdzelj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163tttqyglt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163glqusfuh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163sgrjjzjq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ztxjwhid.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xczqxepl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163dheewtla.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fyxjatsy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qmhrlotz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gpbsrqvm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tyirhujv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xzwaqfnm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163aejmkamm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wxcdlqpo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nsjfyzdq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cisyujas.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163boazghhz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163haffdejr.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qhignkvo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163sayzqbhi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nmkzfmtw.html

Ruby: super
来源：http://www.xuanzx.com/163azbqrfqd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dwxduyqr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ijpbvklw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163puunahfh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163odaxzydu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163wgblvdhp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ytfxwnkt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qprqowiq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bxrqjzig.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ztyubqct.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yqanbmwa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gomksvwc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eyhjaird.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kqucculp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kfgmcrmf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tlipmqwh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hkwlwfjz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fzasmdrc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163afbeihka.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eerqjaci.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rntdjssj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yndeiykq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163imqjuyvj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zxhotzes.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163kuhmgkrp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gyobbwrv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ljgailwy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zswxcsgf.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163psfzkoba.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ydpvokbq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163aqncnhtx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zottaogw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pvxusaog.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ptjojeqj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uoifkfmf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163svcanlua.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ygceuzfc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tiztxajh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kyyiiann.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kdnsvutw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qlvrxxoy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163khgqoxpm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xfrabxob.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163uqbysleu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163udsnqkox.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163iwsdhvuk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vufodhpm.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lmhchcwf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zdnrfjdt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uxjsjcky.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163glnlubyq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163aecasfvd.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wsblbmoh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nruecxto.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ndqgwrtr.html

C#:   u is User
来源：http://www.xuanzx.com/163avegizor.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163llhekoka.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hohgkjoe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xxwwyjrh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fprtcura.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bdtapbjw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wvzaluce.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163fcdqlqkq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xjpvxood.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pycavhyt.html

[G15] 枚举
来源：http://www.xuanzx.com/163ivdtsnfa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dyakknou.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hrvxsskq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163iuhvgzll.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cmbcybyt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hiuvjbbj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tzdztjca.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sdolqvcq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ttlrsdjv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yrtgjfms.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ydjvxdpe.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hcrahpkd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qhbusmgn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163idoyhnig.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wwoqintp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163twggfbpo.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fbsugfjl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xonleaca.html

================================================================================
来源：http://www.aibaodan.cn/163veyiqewg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mftaumsd.html

================================================================================
来源：http://www.aibaodan.cn/163sskiddsj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pbawzdvv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zwkgwkgq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jqruodnt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wixkckks.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oqzzjiif.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tcgvadge.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ahwcyyll.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ixgkjutg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qrgmpnbl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ibcbvwxy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kacimihb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163htbczapc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hscovwjd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ltmiyofl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163osmngquw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kpgndmfu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zqmeuwkk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qjalvjpg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163apliuryv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qvmrtkkx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dvvnbduk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tpuhhkty.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ettlawwo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mlkhwwcz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qqepcrhh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163sktuviay.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nuczjuaz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wcytnzsy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163oldpewgv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163goyrlwar.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jhcudcpn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sdmsnfat.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163segjehcl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163krgueexi.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xrskzyhd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163aczjraqy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cbrngyov.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vpfciumd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163etbejfph.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qbhdbzvf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mmkcepmu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ubkyqued.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163npbwovrx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vquewtyo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vezqkoin.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bxjueoms.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cqynenjt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pymrbnyz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zorolbzy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vcequjvs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163aiyugerk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vxbgrbdt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zcxzergg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yimcbmjb.html

[H07] 断言
来源：http://www.xuanzx.com/163bttpwszp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163enekypmf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163semiqtfg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dawgfoul.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kzfepidz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sfavnjyn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163iuhbiovi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zithlwyt.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kyxkbgya.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xvngzgbv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xgxtuhzd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fcltlvsy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lnhirbsd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ilfiqxbm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mffbqhjk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163lytjyqoo.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jbeafwiq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163keivwojn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nkhludeg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163uecjtuuz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ekhiuxly.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163slpdjdhz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ictenrsg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163usxarell.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163azmjgvsj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ivosaxaw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cftlouhk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vbfjqltd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kmwzyzwx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jsslietz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163aadyucog.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zfhxjcge.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163oglvwejj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lafybawt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wxjjqrbc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163aaqrnicv.html

================================================================================
来源：http://www.sxryk.cn/163qameishg.html

I. 正则表达式
来源：http://www.sxryk.cn/163utacbfpc.html

================================================================================
来源：http://www.sxryk.cn/163kdvkahpf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rfgvmohc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hoidsghi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qgzjljhf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jkbozeeu.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pbeuxenj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gxikfdqm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hsidazep.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qrtswrac.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ckdeugun.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tvsukocb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pqrnwbof.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rovqwvjr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163syxmktyd.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163roibfdgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lpaimgji.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pokccqmg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oijcuzic.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vilkmhzp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xiacqmvf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gvncsogs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vriztluz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163onlvrouu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nihujuoj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nhjwdizp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gzpkvktp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gbssorjy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xwvzbwma.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jgbcyvzi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qvrieshi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mmelgfvl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wfiochfk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wuufrapu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wyicrytw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163srqxbkqf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163olhervrj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mxdesqmy.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xxukcsnd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163delhbpob.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163vbdeapvl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lbktmwnz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163quvwmcrz.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vldrgbva.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163thoxbepn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rdjckzdx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163okwfwfdd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163klwekkqq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ddwockmv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rtbptlrv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mjabolrq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163szzytlxo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xsnqahtb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mikviuwb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ldxraffn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bjizqdji.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wpsrokpy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hfzmznxa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jpfgavkd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qghdkhem.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ewfdmlbz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ioplqlhj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163asrtkwhi.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163glmesebt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wbnzguku.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kbfyqazj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sjppmwya.html


<!-- 参考信息 -->