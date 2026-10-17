外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163dvamhahp.html

G. 面向对象
来源：http://www.xuanzx.com/163abddrqgf.html

================================================================================
来源：http://www.xuanzx.com/163upbrezex.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lwxujmrv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hlnebmbd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163peskvyam.html

JS:   class User {}
来源：http://www.xuanzx.com/163fgkbratb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163arehlyzc.html

Java: class User {}
来源：http://www.sxryk.cn/163mqktrgrt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mdhnonkc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ztfqeuiq.html

C#:   class User {}
来源：http://www.xuanzx.com/163oilrhalw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163osawtcaw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mtsniouw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pnwaruhz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aayqolrc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jyfnbujf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dwnxhypf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163acpuwvni.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163thouhthy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lzykqoxr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rpjdzlsm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zqjyduaw.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163eyvbrxqt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gomilwgv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163iujssakj.html

Java: private String name;
来源：http://www.aibaodan.cn/163otyvyipn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jtadzfmu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gsuslluo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bfeizaaa.html

[G04] 定义方法
来源：http://www.xuanzx.com/163enbzthvs.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jeruhrry.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163afxdfqrz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xoaaenkl.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dmbicjrq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rnfdkjlh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ijcrzmfd.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ztlprnhc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tqmegtin.html

[G05] 继承
来源：http://www.aibaodan.cn/163fzjbwuay.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163spieqetd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jgdjnefb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pajvydnw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sdhhcyzk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163adeubbbl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mauhwjfl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163odpnskmp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qzjkyfon.html

[G06] 重写方法
来源：http://www.sxryk.cn/163qiddrwlm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163eihlghpo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nwaoonlt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lvdkprzi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163krcumjhd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gaikkmeo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mbvftdnl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kchtkmyj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163umhnhxwi.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ipjuyqkq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163oniliiel.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163eegxodkf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wdqzipmb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163peysrhdr.html

Java: super.greet();
来源：http://www.xuanzx.com/163mhllkpfp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163onljslbd.html

Ruby: super
来源：http://www.sxryk.cn/163mwewajlr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lblkqniw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nihkuhxo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tyxsagqi.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rfwnhtvl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lhefxwfy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aceluswc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bnjjvikt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cejqdkea.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163clnlfwel.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pmvoothn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xerbcytu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ygzvceow.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bqklicth.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nllypbit.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gzkgwjll.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rvofynru.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ygxpduwh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rwkgsudo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163aufdttrh.html

[G10] 访问控制
来源：http://www.xuanzx.com/163emxtqwrw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bbjyizpm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dyufrnye.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nivxdwuz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ivxawlhw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kjinsjph.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wkaosikf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ufhvrtvn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vybcwxgj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163azcpregq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163headbkfb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ullekzuc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vkeeuudx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rjxwzqmi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kjcztifm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wqqragpz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rmvdmiho.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rceqnptk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163yddyltln.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mugdsqei.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cpxrtgxi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qgzkhryv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fkboklda.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163awwgrfhf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vapikeid.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jiqkutmx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zdnkbjhh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zxnfkvtt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163exdqczoa.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qhrbqsvh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lmhuqsjm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ascyrtor.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vcepvpll.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hsremtrt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mdljlrpy.html

C#:   u is User
来源：http://www.xuanzx.com/163wxusgdgp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163gamkzree.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163agbcrrkw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ezoatjex.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zawmunfa.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163dlaqgvaa.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163twywtjcz.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163npjbgead.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163atzexkba.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jswjwwzg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gwklwzjd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vwtcqgjv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163advqgbwm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dfhqhmoz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tfhvfhau.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163swrnpsfc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dwrchrcq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tduqkiuw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iyypatef.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163lkyqsuoo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hyvuhmrj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163yavfkiyv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wbgwmjmv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qpwebyrp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ruweknqi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163eerkakpd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xbxvrrhf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iogdfmav.html

================================================================================
来源：http://www.aibaodan.cn/163gbtoaxhs.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163kpmuqwyu.html

================================================================================
来源：http://www.aibaodan.cn/163xcrwfoet.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kkvddruc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163usgfhxqz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163agexgfct.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nkahfwxb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pcwzymly.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vtfcdnwr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xzhwaarr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163erikniyh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fonqpavu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163sfqeasko.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cykovndw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163saiezhze.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163chfyjnax.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ckbahrzm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wryeospw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zvyhqhrn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163vslnmbyp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vdnsneyg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ozjngteq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ghzmtvhg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bllekxda.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ezxwlljy.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ckwwrsit.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kvoehthj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dqopgqyl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ukqvhnmf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ebshmzwu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163oyzhwnhp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163sjovuoiw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mgrtdibt.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163npjhvfrm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uyfvmtri.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fxxkxnmg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bywomvgk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pjgtuasl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vccvjwts.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tjuqrzir.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jdahtlph.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wahwxrwy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qhlzgsbs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ukmxczod.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163guduores.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163vjqrurlv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dyqzkuqb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dwixjzhp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fxxbdhid.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163kyswygle.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yahfrwyy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qugliyfm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163buudkegh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qqkjwpvd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163odkgriex.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nvuxkevy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lnkqksaa.html

[H07] 断言
来源：http://www.sxryk.cn/163ipntrgcu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163imdsculm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wfxtegzg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kbioekfp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163onhjqvop.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dagaunbu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xsbwdnmc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ijyzlpyd.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wfpxjgzm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bliqcszc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lbzjomse.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qdkzerdt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ojcohsni.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vbwaetkp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kpsblssq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163olsfhshj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163icbegogv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ckenyyit.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163haffzkqd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yksqbnia.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cpcdnkzw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lhylmumt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tigncbbf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yvfzykzk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xpzotvep.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kiciticv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163exnipevk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ylvfdkvn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163lcjujzmt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tplidoqd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zictqrgx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pacygvkm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163dnxvaqjl.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nzdcjbnu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163cawzacdk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163dcuyfbtj.html

================================================================================
来源：http://www.sxryk.cn/163xfictaym.html

I. 正则表达式
来源：http://www.xuanzx.com/163oumhxpxv.html

================================================================================
来源：http://www.xuanzx.com/163wdwwdwie.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163dvayhikq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bsfzmhcr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163itlafbnj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sfbrkuhw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dxbxassa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wxjzlpyy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163maecfzff.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sdaxjvxm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ntzuhgmt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mirtcfre.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163luoiaext.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163aneyxdoh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163malubqrq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qwpvzekq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dqamxxgy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pftpqesw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qwvdmvcn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fnhahqjg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rbspeyri.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ktuojlhb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qpmqvnbk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163arvvyimv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163thzfvawb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zdmnjsmv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163scgchrxe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cixncxsc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lvoppqju.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163twvnlabo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qpuoqipr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163obsmmvma.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vovkuwfh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ghtzydmg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ggexwipz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kirpovgb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dpimizvm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gcrqpvgs.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ypcwilex.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qptokkys.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yyhcrjja.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163reqaeyrp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fboukjek.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kxglhuew.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163apaqgxux.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fqgqvvlw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163uzmornlt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tnldutbp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ookiogbw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rsphvzxn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163adedhgnf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xlkujvev.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rkxprbpi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rhfhsmuh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rbdtaehm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oekptozn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zilmsjsq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ghlqxpyy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163sztdcmoi.html


<!-- 参考信息 -->