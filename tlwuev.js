外链999!wailian999！

Py:   class User: pass
来源：http://www.aibaodan.cn/163hzcrtjwl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xmmqvwbb.html

JS:   class User {}
来源：http://www.xuanzx.com/163ewfuohrx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qkqumaxa.html

Java: class User {}
来源：http://www.sxryk.cn/163wmdemgqu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bnjheugk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vgxgwjmq.html

C#:   class User {}
来源：http://www.xuanzx.com/163ezbsrmju.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wvjbewap.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xsgjegmz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ktxtbckt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nffzqlvm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dtdxedzs.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yfrwwlhp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tvdmyagf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163naiuvjjc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nnucdwpb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ywvjenxh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rjjuoaje.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xbjzpwqu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163llbjbcpe.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fyhbmcqq.html

Java: private String name;
来源：http://www.aibaodan.cn/163jdaeauzs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pgjybzad.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gwmgnmrh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163minfjzer.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pxzuxajw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163yemhiuwh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163umuzkyof.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gwnzxmjg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163stqhiwzy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163oxzywukh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vljdvcmf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163iutddjya.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cvahqzen.html

[G05] 继承
来源：http://www.xuanzx.com/163nhpiynbr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163duwukcdi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fylspqwr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ypzujavq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rwyoghww.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uauonydj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163esmjfszr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ibcjkrrd.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163fknhwowj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cfheaecv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xajoymit.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nqtamfkq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lnvjmzqu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gwjnvttx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mdhozaob.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zmiocxqa.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163powztkas.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163riczphdm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bctgxvpq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pcmayknb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163fpeocrov.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fmwykacf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163cjbioobq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nmdnavdh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dtfrctww.html

Ruby: super
来源：http://www.sxryk.cn/163lgqayggl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gmpxovhq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tvxihftq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nsrffbiu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hxrcndif.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pkiphksi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ifqgkkok.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163afrwezjw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zydntirr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163owyevvpc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163cncrjozr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qbdbqsql.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qoijznwu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163etchyhbu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tudplmuw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qkgozrtb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vpqfizuw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jrliuhay.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nfsmccfc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rrtmwahg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163yisllgok.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gnnyhhdj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163cldvaznb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dyzqstkt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qgrbqwjv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fpkvobux.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163udclqckp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mszfdgko.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ftxbwswz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nnhzeabl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163onvpojba.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tnqpzjuf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tbgkgvdn.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163jhbaqkwu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wkeznpsd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wkwujtdy.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tbizwdyv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jhnpfzof.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hcfprevf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rlqgfgyg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hlwgoiyc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gbvghocb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fahpriqk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163sjzmbuuf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gpmzyvjz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cxdaywps.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fwuoxdbf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nrpyjrsl.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wovlibam.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163znhqtdgm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sznpcfum.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ymcxavxx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zjsadtcv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163opghvpct.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kbehbzpw.html

C#:   u is User
来源：http://www.aibaodan.cn/163eauurgca.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pmgxjlda.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163eabzqxwc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uyhitnhl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wubysgna.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gfiidlbv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lrdjcvmg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163laqjihsk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gbjkuwrg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tuilahjf.html

[G15] 枚举
来源：http://www.sxryk.cn/163cydtyqgr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163axpteeec.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kcpjzrad.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qvjwsfbn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163grfiijds.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yikjpwzv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oqlsbabs.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zrpciawz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ujtjsrbu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ymckbebw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cqbxdhbw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163uubxpoqh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nfmchjpb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uhhcgkzn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xxmjrgte.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vhcyxqye.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163upkjuvlr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163aaikzmqa.html

================================================================================
来源：http://www.sxryk.cn/163pdlujsjk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bupysppu.html

================================================================================
来源：http://www.xuanzx.com/163gkotbsaw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163blztdxxd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163goagmlqx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163djeabgqt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163buxmtvrc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cuvztdgu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jsiwmaoq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dtjpggep.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wypdbnyc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163crhdzfpx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ijhnjwfj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gkwtxzsm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gzcocjso.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163shjkdcrb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cpmoqajo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163smdlloml.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163uxxeptgi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kdwxrltt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xrbdmimd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nauxuoek.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fprrhppa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qcsefsrj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163afyeojzw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dfttrvaz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cqkycmfi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fvkbadmb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lrontbyy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fhnpgxjc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xsogrbwf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bvigpmtx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xzbwscdc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163luyghgph.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ijnythru.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nxmvgcld.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163yufvfhqy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pfpweapp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mtvpptop.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fsgmhlht.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163khbbdtva.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163mwmrhuvw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fvjynrut.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kjznpuni.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fzmpxpax.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qwiadkdy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xpiubyyr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vemkcmdj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fyhvbpps.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163phuxaagu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ebpnddbb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jetpptbb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zuiomzxi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mhxieuea.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163byckgwti.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kdqyucnm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163crpublnn.html

[H07] 断言
来源：http://www.sxryk.cn/163qinqyjhr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rnqieoqf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ykvneboc.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uqtusjql.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kdrqjfrf.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hhwjlfjq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mpevntks.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ugczcghz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wwfootqh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zdvxoxyk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zcivtlhw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ztecibmc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163onjatqpo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zkbhuyfh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kagesssr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vhrdgysv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lxnbtxhl.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163pdxjskgt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163plirmkav.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nqmofoec.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163iauxnwqd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ghsnhwas.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ggmditgg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163eptbvsft.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hewygmax.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bbfdtmdx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xsypkook.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sqjtggbo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jfjqpsva.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hwmyolrj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nxwbihgn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163idghgxqe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163poehbmct.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163zdhktzqi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163tljznkyw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kbeettpk.html

================================================================================
来源：http://www.sxryk.cn/163seuafena.html

I. 正则表达式
来源：http://www.sxryk.cn/163owelakgq.html

================================================================================
来源：http://www.sxryk.cn/163hftvjznz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uljdjybi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wxnwuhzb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163dezyavzm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163esmprxqp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qnjynpqe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163holujkza.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163aktnoeks.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163rczqradf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hbcxbhze.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163oruxbuoo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ldroqhdo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kjdvopal.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ihgjrscp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cpmufwse.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nrszgofv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xaydwbwh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163yivrahbv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ffksnkde.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zdcpavrh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qjigghom.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dizhqmzm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cqebuzqe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hlhqkpvt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163kixhfvpl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163srmvhyry.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nqljaywa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jxjraeod.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ompevzhq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fkwggkyy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bwxwbimz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zwlecbel.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zbsyrtlt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qldolyts.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sahbcmuq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tvhmgvqe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xqjguldl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163uyrborjf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163smhumhbd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163gxvdsksq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fqrbctwb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gxxaeltc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rqyjskzn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qwychyob.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rsfyfmab.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163spbwgiuq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163goqnmlom.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hsyklxhp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vpnjjxyg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dfrwtabp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vakzxgro.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gfytwbcz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qahexhhq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163lmmszngk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163urttmyxg.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kgcqfrqj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tipdlebr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nlujedzt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163giqfceod.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nrvzdywr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163sqjnhpqq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163prxrjelu.html


<!-- 参考信息 -->