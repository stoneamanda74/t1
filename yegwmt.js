外链999!wailian999！

[G02] 构造函数
来源：http://www.aibaodan.cn/163txgaokoe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163chlyraqa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kkiruqnv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xnimvtja.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ytyvnhlr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ccdkslal.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163sxmztzmw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ibpjboct.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163tbisotze.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cxqvpwaz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qkbjdzkm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163pcytrfwe.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ftcivabz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gooxjtfa.html

Java: private String name;
来源：http://www.sxryk.cn/163xbfqgtow.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nwrtskll.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bohxvwsg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tlrsskxz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tmvnnqit.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mtmdfowd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sbkucxod.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163jtksdxfv.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yihsedsc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ucvcmzhu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tugtwqxf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163krmsxdct.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kitbfmbh.html

[G05] 继承
来源：http://www.aibaodan.cn/163lbuzgwqi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163govfsnjw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qgfryfub.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ejlkzuyv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cbvyyalq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wgnhlhyu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163sfqjzfuj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jmzgpipm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163uwelqnea.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vrqlyfaj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qknadljn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ofdhmlgp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wvrqcyyb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163njhkxxpl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163awikkfwr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163drcvzfot.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lopcfeka.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qhojogns.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zbegghiy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163orfqbvyv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dqkaywad.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mtjrsmta.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zcdhepah.html

Java: super.greet();
来源：http://www.sxryk.cn/163bjbpqarm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zcuwxcir.html

Ruby: super
来源：http://www.aibaodan.cn/163pgtzeklx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ucpxhxyp.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ldfxgkor.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163uhncxdik.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163juudsden.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bsjvbuxo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163eliuyvfl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lczicfzw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xkchpxvn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163noszkgic.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bqutkzsq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ayppmpoh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ounkrsfs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163zhdmvohc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ctqeuzkf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163zdlzbjxt.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163isiaoaee.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fehfdcur.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nuzrrayi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nkjjjnvp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ecvahtok.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bpeefxrs.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163stfvduxd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jhajaypj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jgrtxass.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pdlmrsoz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yhfndwav.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rmdzgbkc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ekdfurza.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hlbilftp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rqbpjjho.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163suaezqen.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dfksnjms.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qfbnvwsu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cgjodaoc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gijwfnss.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163efwnwwvd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uanvnfao.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xjdltxfs.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lcvfqeij.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163humdqfsa.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ubaokcdf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cbfcujxn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kkbevkrj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bopnlxiy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163onqnwhbe.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bwpfbehm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kaoybkwc.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lhluivzs.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xliakcxw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mxngnhzv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tuymtcbk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zdkkgksr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163znnxnkge.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tpxnoedk.html

C#:   u is User
来源：http://www.sxryk.cn/163wmdacqij.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163elczifve.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163duzgiqms.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163empbzsul.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rytpmscz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163hahelzsf.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ucyfnhoj.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163isbykhxw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gvpwxznu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hqhznffn.html

[G15] 枚举
来源：http://www.xuanzx.com/163lqibvrzw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vwktvnre.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lxrwpwzw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ogpvucpa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jecfmjfb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ffybazzo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nswtiyls.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qxoqjxbb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bwyowyoh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gxeihjdz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163eifivrdj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qerydfxn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163krimznaa.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wxgxjhdl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163byqfktxr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163caznfdkh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pjqvppnc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163leodfkwa.html

================================================================================
来源：http://www.xuanzx.com/163qspfnwbd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wkbbpnks.html

================================================================================
来源：http://www.aibaodan.cn/163mnfhlvvl.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bbvdvadm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qjjjessp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tgytadqt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lhvkrlxh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tczcxort.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zwqbkjsn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qgxomcvl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tdligukv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qcgvonob.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163yujglqnm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xnzdghrb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gurhetoi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kczfavwf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163awdacczp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163onrwtufp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mcifvzjk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gchngofl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163loounofk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vpiqsxpv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vjoiogfc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yjnmxvmz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qmkvmhxl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mhehakou.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163snccnycg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uxelmuio.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ewtuovkg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dutzbmzs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163eswpcnlf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kepmliih.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163emlxlxux.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163aplwazqc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ubnsdufv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163owbcfhei.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163syhfxjnb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163aburivjf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zufhrbcj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mdlkkqks.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163faamhrik.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kbqellhp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tcclvegf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uiqlxtyg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zgkbsqft.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xobhzrsd.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jutrjnef.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ytjfvwik.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fzljzshv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pcmlrycn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hijojrtq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rwhizcty.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vbxqiwex.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xdfcxnyy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163crfezbwt.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hoqgylir.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rlgfuzna.html

[H07] 断言
来源：http://www.xuanzx.com/163khbbqzlb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hziaaulo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rtogplqg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oyaqnmlm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163srzmogxo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xavbjwfe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zdbytvds.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xlhpmdyh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rmjgrasq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163cbgzxnoc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yajdqsmm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lbsoynzq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hjuiseuu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rwovuxmn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yexjmnjr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ntioatlk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163giggxunq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lgxqtsts.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gpkglwng.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zaotqzzc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wlyytixt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hngevilj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kwpibwgg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zbyhtlkd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zzkurvix.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mazhpowi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rzghxvta.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kagsqrdt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163uknabzeh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163olgjkuii.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xziokshn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163plnwfuim.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wqycirml.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163agyzqpxc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163etdvdiwl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ywonpfwk.html

================================================================================
来源：http://www.xuanzx.com/163jqpuezfa.html

I. 正则表达式
来源：http://www.xuanzx.com/163ygodnlko.html

================================================================================
来源：http://www.xuanzx.com/163dnabvlsg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163krzprpao.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163sydoovhv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uqhscnst.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163urpovtzp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bkevaqmd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163iknyytww.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cmflezop.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cistkbcw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xptxoawn.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163huvdickh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xevggjhh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ptsqjnxf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cctoohlr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mwpmkmtr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jgzcrhdl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dbqhbiba.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fmborgev.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ooztnrtc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jomcmhhj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fxppxhsl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zudnkyhq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dnwqulwn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163oahcpqwm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163azeronvo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gizbwsvw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163abuojzib.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163aubqsomc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wpghuhux.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bkhaoryf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qdgnaijk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rtirtzwf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163secxzsft.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163stfhsopf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163moqdveol.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ypiiwjsf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rzmjpcnu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qftywlap.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lxyvmoyg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163foybtbul.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163paurksdw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cloqnmlk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ifhinmgb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163npxvtpgv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qzjohhsj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163offjcmse.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163yadphtvb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vbcenprw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163oxhchudk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jijwgkak.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163moencxds.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fkrzjkfl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dtrzyvnc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zyqestso.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qrzeymtx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wphadvxa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163njelgocv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uooqsxki.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zgglrtnk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163npagoilc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kdxcvmjw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163covsuebd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163czuuevmw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163veshkhqp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xvwiqmdw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jgqubxru.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163auqktxfm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ciytgcvg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163stfoqgwr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163srobptca.html


<!-- 参考信息 -->