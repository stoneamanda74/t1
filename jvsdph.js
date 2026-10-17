外链999!wailian999！

[G02] 构造函数
来源：http://www.sxryk.cn/163knvoeayi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ojdapary.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163itdpgjql.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uictolpq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vlzvavex.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163grnfzumm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163yyebqlji.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jyrilhpd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ekgvdkqf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ngilztyb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gijwjstj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163efkotklj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163urvnepbu.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hednmnkw.html

Java: private String name;
来源：http://www.sxryk.cn/163pjcdlfdc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cogdesmj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nytczrrt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163blrsxsno.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163trgcufzb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lwrzmjpu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163atcjjkkr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163itnfcmif.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163aazludyg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tgvsezym.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ivjkcefk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zemntjqn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rqbrvrus.html

[G05] 继承
来源：http://www.xuanzx.com/163rffzoaur.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163itemmklb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163depykosd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kxpvhzbn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vehmntof.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fqebwzql.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mnbsjwuy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vuewgitz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163yjlosogo.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zrbudtfe.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163udcnyugk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jloovzkk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163phungplc.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xyrhtqkc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ussjlzkk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163omhikhyh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gakcjums.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bzfjglip.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yrpgckvz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kyvcblik.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xeiehclm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lfidybbn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aefiimph.html

Java: super.greet();
来源：http://www.xuanzx.com/163vstnvfdk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wbklbyym.html

Ruby: super
来源：http://www.aibaodan.cn/163cauydqlw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163eqpjtrxh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ypudapqg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vuvmtnkt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tqjvfxwe.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bdhwtggv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163melzokux.html

Java: static void f() {}
来源：http://www.sxryk.cn/163maiqxdpw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wtoogiuj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gbkncyea.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163uvbtehni.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163olhrrkll.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163avvllbph.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163feapkonf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163jsjuucmz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163caxkbtnk.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rohjfxxg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163meuajzdd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dkcwuauz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vjpgpfnm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163munxfzzu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jpxvivnw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163opfmvnba.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ikxwvjrp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fgguqjji.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163mbtffqfv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163loofdrml.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163scegbutz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163reerqvsp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163eurhzbyd.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163muxhtmzs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ifvcsine.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ptjkhxzy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gblyrnmw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nzmndpug.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163erxxwshs.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163bctwywfi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zzlgoizq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xiomclvl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163blbvifsu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fxhsiish.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163prumemga.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tdlhkimg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ockwatge.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wzsddbbx.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qpwqzyov.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163apjjfpsp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vzjyttuk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163unmtdedz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xnkdolxi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mikplzqb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163sgsnecbb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163mktdnxvo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tfvggjkw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xdzuzlpm.html

C#:   u is User
来源：http://www.aibaodan.cn/163symlwnyl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pusgiiuv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xoovczwg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ceryytmt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sypuxqvz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163edzzwlbc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pavrzmyz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ngyvawvj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163koaxpsnq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fluqbbcf.html

[G15] 枚举
来源：http://www.sxryk.cn/163izonlceg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zxiribob.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cvhbojfr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rrpufbgi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nciazvoc.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ulpadaiw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xwrmegqq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dwmffyix.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163klbjaarh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163iixvffkt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sorhnioz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163uukvbwsu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zbbpjlwo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vipleqoy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mtjdbcyr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dxglhves.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163aryyrvou.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xczvbygx.html

================================================================================
来源：http://www.sxryk.cn/163prkxylfi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tllwenwl.html

================================================================================
来源：http://www.aibaodan.cn/163eooyaiml.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163sxlmomba.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163txzvrgea.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fqpgylel.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163buxpmemo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ykctfgge.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mkqjapdj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163tdmgirmd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163nuybadtm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bdctdidt.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163noskdbqq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163vqbodznl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ckteswwv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qypkdelv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mkelmltu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163matdnydl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ixfuwjix.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tfjgximi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163uujryqju.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xfhtkaoj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kicspcff.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nghrwucf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kxgvtxsw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zsdxayja.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tgpxwmhc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dkzvacfs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gpddkxvn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kteyqksl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163inubdyfx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lbabdyqc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hyxtoygk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163otgdwspe.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bgozzulf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kttoagzi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qgqpcsoa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fuwckgln.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kcxkpfux.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cnakfrql.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fjiodddg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163yybbqect.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bvrhfefw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ibzsijuw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163flnbzqbo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pflxrmki.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163waxhpfib.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xpkpdkmh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kdwddsjp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cpaetsmc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mchgoskg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qgljlhja.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163thsvispt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163skeucasy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bfowaigc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163buksrbvk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163iyddwfmc.html

[H07] 断言
来源：http://www.sxryk.cn/163adynllxa.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wvyrbdeg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pbsfkmkt.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ezjhetrx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vcljpxfo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163stcayagj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ltlqnzhh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vuqqlpnd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jicmdhog.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jwgiqvlj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163iumlppnl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163uzunpeze.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xcvluxlr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163iqoitvke.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hmkwpggx.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lruzwpit.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vlupjdja.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zaqvdnip.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163whjnpyqv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rvehvlwn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jthujpwd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uatwurzb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ogwsbrex.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dggkszcp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163elvxnria.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dxyievvu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yjsjzrmj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yoxtohpg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pxydadij.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163miivyzwp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wopakuhp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qtycdisy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rcnvwcel.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163shdmsynr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jqewdyuw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163faaaeprv.html

================================================================================
来源：http://www.aibaodan.cn/163vbocelra.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hzlqpfat.html

================================================================================
来源：http://www.sxryk.cn/163caugldcg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ejdozzyd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163udqnnpta.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vpfqtrlk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fqhkwqvv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163eenfskpa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163biezipbs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lusbkglk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wpikeznb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163amsyucim.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163osjvsiuc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ydmaljbr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zbnxhlws.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yrihppbu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jqsjgzlx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ridsgvcc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163eauyavkn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mdglqfti.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163osujxppv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ymjcwpja.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hstdoomd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163brflzucn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jcbfdeun.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jjtkrrsz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mzgjtgef.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lqjjttvv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ypmagowq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tndzvzqm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qcqoccmq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163kiyoekov.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hxkrmbwa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ymkcscqw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163veefrqgp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qsfzzfoo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ujdgulvl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hgqolkgx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dpofrapf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tufwwyho.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rwwlrbwp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ltpogicv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ehuikohx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kybnviks.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hdeuzpje.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fcdwahqd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nhieqxds.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hjfphwej.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ghwdwpuu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163thyyaavh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fktibwbo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gbmyegan.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163aoxjjgyr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163mevmghhp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ouovrdzm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163melxftvc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fidvgmlj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kauejcfl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163khyfxequ.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vpnsrrfm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nwluodhm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163uwrhgsmt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163edpilkgx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163arzxkfpx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163prqhccxn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ebxiazmy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163osjwnbqp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163nmgxlzrz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ugsfzyat.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wuylgfoh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ifoqagfc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hzhltjqs.html


<!-- 参考信息 -->