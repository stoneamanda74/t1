外链999!wailian999！

[G02] 构造函数
来源：http://www.xuanzx.com/163sslnapdk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163awodnmec.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iuhhzxlu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bwktholu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rgteoogo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ptwexozm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163filvwknc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tmprrieq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gbxqaghx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163owlubonl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ngnanoml.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163irvxsrdm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163iklgvxeb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vhloaawj.html

Java: private String name;
来源：http://www.sxryk.cn/163tiyhvkfv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ybsafhzd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cshptadb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ekwaerpo.html

[G04] 定义方法
来源：http://www.xuanzx.com/163oylkagst.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163myefyhbt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jeugyvhg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163cdqcrule.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163volfewet.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rkslhfft.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163bbbtkvwb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163myfwkqdt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jtzfyedb.html

[G05] 继承
来源：http://www.sxryk.cn/163lckwekzp.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qvqabcpt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163wnaastgr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163eboqqhma.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rzpgrmwy.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ecajemcq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163okserdcp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163rhgkahxe.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wbetqrrw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163smtxfmad.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ihnudrxs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hxwnsyxi.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vmxlfgth.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ickehpfu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xtwzankt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163faaskgck.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163chuhbfjk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163egmyiogv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vuozwaaa.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rktaqbrh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ubuwdbvv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kxakoukc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163addirvli.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mylsyqsh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ffssxwhn.html

Ruby: super
来源：http://www.sxryk.cn/163iaqgtorr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hrkhvzvt.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jtjvvobz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qnzhepfx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163unkhomgw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nsnpcgur.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163juxromdf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jqalgukr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lsniulpt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bxksapvg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hapmawni.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jcvmbgoz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rohnwfqj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gdbmdsyx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fyvzexnf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163thpqjplv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pnmaveow.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vrjkfhsr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rlanlzjp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xjonucat.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nmnsdwsg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wcqdyjdn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ggdatbyn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nzuwsrka.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163sdsinxcd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sagwhjob.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ekaqjqbq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ieqllwgu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163yfouzdpa.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vdcthzmz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gdnpdsbe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pocrccqp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cqhmagzx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rxtgwvyp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rgacosgj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bosivpdb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163kowkvtdx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lmcamzfi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tqybhqnh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dkmivenl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rcgdbore.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zgftetow.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163teonvexg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wrkphbjn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rkzknrzo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mqoamymn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cdmvuwzo.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bypoxkgx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wnbunrnt.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163dzfeshdj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163acmljadi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ufhpovfn.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163pavjkhvs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pxbslekb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163nqaqbslc.html

C#:   u is User
来源：http://www.sxryk.cn/163huxhgfwf.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pmpsbuva.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fynaymgc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zmpvhrwo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dqacpuzu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163huyvnaxe.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qwwdfvcf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gvvilhog.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uqgkyvti.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163atdqfcht.html

[G15] 枚举
来源：http://www.xuanzx.com/163ttpafalf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bialtpjc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163thwlgjmm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gxnpyrza.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dqvubhgj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163eyhaebfu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hclotsmg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163yuwtkblc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vljdmryr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hfqunbvs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163elokuute.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tpigghgj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pjizrrix.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tidzfvdb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163elgkexst.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163erwmorxj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ijruqzvj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ihogwfwp.html

================================================================================
来源：http://www.sxryk.cn/163xafgiaht.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163twtimxxh.html

================================================================================
来源：http://www.sxryk.cn/163likjazkm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pffqhpfi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163lgdaydet.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cmqayfnl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hoyeojeh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nalxhxff.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gouoalye.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ezkdyokr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qsulrbai.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rbchhlwc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163abmwypoq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163exjkwukz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qdjxlacq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ajmgezij.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zwwnoale.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eakohxgs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ywityvea.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xhsbfosu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qhzfpwht.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ykqhxiuy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fkdhkjed.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qrshsxmx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zmubjqpj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zqbqhdni.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tnnxitin.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163viofzguv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ycfyvjfi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163itiswpeq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jiibnbok.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163olxhtxoe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xtnmeboc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xvcmpviu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jckurjfx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bfuhteoh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lzzatzhl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rroypdyp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xozapslv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163udmxmmyz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ofemkvzn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wkjwxoms.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ckzokqhn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qedpqnks.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163crtozwlk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163fzwvvizh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pyigoxhu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kqhkzeeo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kcdcpknt.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fqgrafub.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163uerepfwv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163asxlfopk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cjobbhei.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mtjfsdgc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tvzvohss.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163uvofwfqa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163iuwvognm.html

[H07] 断言
来源：http://www.aibaodan.cn/163wjrdubta.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gvbhepnu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fyyxmxwr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uqurnlsr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163krhaonca.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zxiplvhf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wmqvdajs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163wndumqog.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163pxzcnvht.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kzyixiox.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tmillsdj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sdzbmfmj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kagdmohb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tiomqlfe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163akjtwshh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163niqhmfat.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163alddwtym.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163viifykop.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iejrjfpi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qenmrukw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bogyvfet.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ynmksoyp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163sjvzhell.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mxdkcxky.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tktjuipt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xerezoad.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lsaukstx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163arywecfu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gfapsioj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rwezdovt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bbixkggz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163suxngwwo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163clsxevbf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163yqyhbdnk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jaemtllt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163dnfhrabn.html

================================================================================
来源：http://www.sxryk.cn/163asjtzrgk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163regryrhw.html

================================================================================
来源：http://www.sxryk.cn/163yavarkgj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zvlchmue.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wihsxgyo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gzehpbzg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163avtrnotm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iycdshdp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wyhhsevm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ozrpbegg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163voqyxsyj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163slvgwvzx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yruhotpk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163awlsgcow.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lgnnlirl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ggufbrvj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wqriyabz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163krxndxxo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xavjjjsg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tgehnpxb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163daxtjzsv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mycufmmr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qcvviecw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zubaqzxc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jizhvtgr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163alerjxzv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lzhtljso.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163elzkkcms.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kezabjyc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tfboyhur.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rvadhlwa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163iovcqzzy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ntyfcngj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163prsiwbxf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tkcizzpc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zuqwjtey.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mqwnqfaq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163zgdgidxk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nnrjyyky.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rsjbnsew.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uwaekurk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dtuptffs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kofwzybs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qsvklxyo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vudnwwcu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pyryzktl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xdpqpzvr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163prxharix.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163gbcdrtof.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qnqdpkqe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gzxtyfbv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xbomgelr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xwkihfgf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xbqmaqxx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cmfkvyif.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ikpnwnmk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kvijiolh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163drepjwkx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mihmforw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163igmsfeso.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163engvvzzf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163bfqbgfxb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nryildla.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dxtrnqit.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163iefzuoxw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163owckznqk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hhmdsbgy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hhuninwy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163juzffent.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iqllgyqi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nndxauwy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zurocsne.html


<!-- 参考信息 -->