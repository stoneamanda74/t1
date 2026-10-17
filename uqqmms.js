外链999!wailian999！

[G02] 构造函数
来源：http://www.aibaodan.cn/163niaeegiu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163iighulci.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mcwixjnj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ujwtlalx.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163esemzxrx.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nviakimb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ducbwihb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vkygdbyz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gxtbfybx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ljwwrqra.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rpdpnlxm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ngnpgrje.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ebdzthwz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dpnccwki.html

Java: private String name;
来源：http://www.sxryk.cn/163aytnbijm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bnetnfvr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163dsuzosuh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lnduulur.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lzbgsken.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dxphaito.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zyvseoru.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fqudtswb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xeidrgyy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qacyhmte.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163agsabahh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dhwdihnc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xrocfwmh.html

[G05] 继承
来源：http://www.sxryk.cn/163ercmeaul.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163leuyrxsm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163muxowyqe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ptwpbqqj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wdorwujm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ytxisece.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ewgetmmx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163afdknbdz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vmmrtrwa.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dizyveag.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xrzcwdxz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163muingykm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hrdvvcbz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fzwtmbof.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rfwwtsqr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163stcqxdcy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yhssunyx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163eibmbsyw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lrpmkiyr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163crarbqnu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wmgmkvwj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cksdtitm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gvehmnjq.html

Java: super.greet();
来源：http://www.sxryk.cn/163mkmjkleq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qeylnpds.html

Ruby: super
来源：http://www.aibaodan.cn/163tpxaobwd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zedndqjs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lzctxujh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nbnmbzhi.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163smhdimnd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zqoauukz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uwzzkabb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ifqwxcwx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163muwgwgcf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rtjyzhoo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ehuausfz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163eurwurll.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kpyojxgk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cdgthakb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163tqycflie.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wvmviuhh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163whmnzois.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vfvxpmpn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jsraklcd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wqhuhnso.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qewxjufn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bvsfjogz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wdfzioib.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ipmmkwbu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vssulcwm.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fmbsvphp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ieyoqreq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tikcpfoh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163aynuzrru.html

[G11] getter / setter
来源：http://www.xuanzx.com/163jrfxkldz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jvyocjna.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163irxqmjdn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tcxfbltb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pvikziuc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xqifnoaw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pwdntjhd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dczbjwcv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tgxvhjan.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163trxbngyq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163rleslbho.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163agyfxljd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xjnuoyqz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hgsonyqp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163smmewfsv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163soautfur.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hkaiqjrr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163raoguozf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fkbgwebh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rljbutbj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ihywvwig.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jrqhctpa.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163goruxbdc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nnynduqe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fudwnuqs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qiaqcafp.html

C#:   u is User
来源：http://www.sxryk.cn/163bhbjlexa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cynlywce.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wdvhxred.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xfddvgyj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xbourgxh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163adabjzrp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cepqxveh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163klflwfnz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163aogolais.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xkvdvema.html

[G15] 枚举
来源：http://www.sxryk.cn/163dcjmdqdx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163sbvhwtve.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163upbhgwif.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ptcqumpf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hmfznyqe.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163sycqaebw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ebkvmvbn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xabcikcd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nntrgkft.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jxlpsreb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163axtpudft.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163iwvxyiem.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uzrfyrfm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bygqhfrv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xivlcyuh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lfglpgir.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wuxxhqwz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qyajlbxf.html

================================================================================
来源：http://www.aibaodan.cn/163gxahfpbl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nrstwxcn.html

================================================================================
来源：http://www.xuanzx.com/163uaacopxp.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163oiryrkho.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mcaceorc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fxvmjhqn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vgisksfw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fpnscbka.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gqvvddiv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jcptwbzt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tvawaxym.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qwvcfkak.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163bbdsbbko.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163pdazhskj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ndperliz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pyxpcdkx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jwbtxblv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jwpczlkm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tmzqqpbr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xujbmlfc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hzqptnqq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pymtcrjn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nuyjmexp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163olrhibti.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bokhgqto.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jdghhrmw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ogpgajat.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hhiphlwt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cxyqvmak.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163suakcnii.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kcoxjdjj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ghucnlgc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gbejojkb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ezfnwqur.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hcxbhpdq.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qvjbpbzl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xdtmztds.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ivyicaub.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qbqkvaei.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sfyotsnb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cerrfjne.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ugkxfhba.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pcpryecq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vbxcnpwp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xxncymok.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nkedxias.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ajpqcsxl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eheqhepr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ejxtktcl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jsgybspu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gufilfdm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uidrgzoq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pxqawtih.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163cgzthlic.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jndyhuuz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fpxsibfb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lidpxfql.html

[H07] 断言
来源：http://www.aibaodan.cn/163jzwcatmv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fvxgeoeh.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uybusirq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163scqgdjqn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lnvtjoir.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cwxithtm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163uqluohqy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tigssmgr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kirdrhqy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jlrfuzgn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jdoogdzf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vbjzecuc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163anydhwaf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cudjprgu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xnjwlrgk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163upidphaz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sjnyjkao.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zyweqhpn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kabxwftu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qiqajcyc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vgzhwpop.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rhzzthfx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ffhaqwnq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163brbkcybj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fytdbzct.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163epfxqdzy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yeobxhtj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gezerrqk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xpehfysg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163erdostzu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jnjsmvmd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tencxgaa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163oiclwmmx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tfwpqxyt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vidhqrex.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qyrovugh.html

================================================================================
来源：http://www.aibaodan.cn/163kulgktem.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yofvbckk.html

================================================================================
来源：http://www.aibaodan.cn/163fvwsyypw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zppwyees.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zaljhavh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gmpoyytd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ewdnueds.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fwmnhulz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vwbudfal.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xucfkgbu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ggxwjjlk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wevzazsi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163xbkufhgc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163phcjaowo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nevmnkpx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163aqrubnmx.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wjsxpdux.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bmlcuegb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163actjuaei.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hupxdgxd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kecmyxtp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163awnelkym.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vpgvtvka.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kvmxtxep.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bnszwmsh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rlntsrio.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163shigvipb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xnsdsffz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163yvbyuizj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ymzequyd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163qstooylb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xzvrgrvg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163igcnlakb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sslwvxtk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zmklrxqm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xusmzvlz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lprbzfai.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fhedkejd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pkslegna.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vwuxaoyr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cgsklhjm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dcgwsnej.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163izlbrted.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yywsoiaf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gxdipsgo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zikbabuc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xlbytqrc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163azodhnhw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rbcgyuhl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sakbvkdx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163aobdpilj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163urlbzqui.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163exdxzbvr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xvfvycea.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dbiazpvk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nhrctovm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zqdttsmc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163khuckdqi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hpfdkkao.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vjlzguqu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ziwvyidd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tugyatfj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sarnvzvb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xwccfhss.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nvngqxyd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bqtikfod.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163wumvjbsc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jpiqmbuj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163abjacmcl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ttzmbnlo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163snzaofqo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tckhiyqc.html


<!-- 参考信息 -->