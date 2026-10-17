外链999!wailian999！

Java: class User {}
来源：http://www.xuanzx.com/163eeobjwpb.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nuvxkypg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163pnxqxshn.html

C#:   class User {}
来源：http://www.xuanzx.com/163vwsyweyd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xmoxlxmg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qgcgykgn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fxuduwpz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163nmthmyrf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163luuhspqu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ecrzxsuy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vhfflclp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fkxzipdp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cgcevhkw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rvutdeoq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tumcfoqn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qlpktese.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163iohxubfv.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ommagvmz.html

Java: private String name;
来源：http://www.xuanzx.com/163ouccrhad.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rdpqmoow.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hayaxpfj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vxqjdxnf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ytzbmuwx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cgpymynv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lzuuffuq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qifchmrw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vwjybfsf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163chlbhedq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ccgpmfcl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ylkgsbyw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ipelepgf.html

[G05] 继承
来源：http://www.aibaodan.cn/163gdbrrgdv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bdqzdycy.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ksikjkno.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wnozjezu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kvbalsxv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163emqkpxew.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gdxmbfsg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163itauugnv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ejfjppdr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163anwimhlf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rdipxwqo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163penlbnia.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xnvjgopw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gtnzhngh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qasujwwn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163cyvixncn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vfcrenul.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pewrltmp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163stifzazb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bducfimg.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163emxtqcrd.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mobaioqr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wgxftxol.html

Java: super.greet();
来源：http://www.sxryk.cn/163bpzudifm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wljgkdgg.html

Ruby: super
来源：http://www.aibaodan.cn/163mpsdaftd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lkddckya.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jvrbfdnc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wbmiqmfh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nnqrmbnv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uuewptwg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bubbigoo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wqmcriku.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163peibkrkt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163sybzcjcd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163meaxvzqq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ydmztsqf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163mouqnzax.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yvkfavvw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163tzmenonn.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gjmxednp.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163odozhbjt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wpesifox.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lsnkdfdn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163sqttfqio.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xhybbvse.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163eggtmrdg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163snsqjmlw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163njjovqtu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163arxheytx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rulvflgl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jqfjqkwt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163bfpeiyus.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rwkudpex.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kiarldzv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jxntohpd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163nxizepdb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163umiiwgzs.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ctraqdcw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tmzarimb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jyzqzuir.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vsvegrhr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uskvcjov.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xbbchkez.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ltqhpnpm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163leafbgwg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163zrdzfnjs.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ksvfwnpx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163munhpyna.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pmveamjg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ssgpcets.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fhihelfo.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lquuaphv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dfotesda.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xpxsoqns.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qupjncoe.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jdkzfhls.html

Java: u instanceof User
来源：http://www.xuanzx.com/163votkizbd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ivfaeveo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rhcriayr.html

C#:   u is User
来源：http://www.aibaodan.cn/163febdwvdf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163iqzkfbbn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sqmdkrnf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sqohsxjz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rbieidyf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163dxxtnhjy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yksktxgd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lxhmsexj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mqkkbfwl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rdinlwil.html

[G15] 枚举
来源：http://www.xuanzx.com/163lgsmbkiz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cgwyvdld.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hpnpbxgd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163bqbustpn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dqdjxwdd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tcwwvfdo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163frowapxj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ypjexbcf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sdmcvsvw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ttuifzwa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vbrawjud.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jijeqpsw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163htlzqwjx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ouqyvhlk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nyfxypnm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fmifubut.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gafqmliz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wbizhckd.html

================================================================================
来源：http://www.sxryk.cn/163hvvnxuyl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hcnbbkdo.html

================================================================================
来源：http://www.sxryk.cn/163kbvhkluk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xyjjqevn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163omkyvzfj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163izcxrsxi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lsdydsfh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163haschmzn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163mwmxixwq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kohzegdr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vioselns.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dvmdggzo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163chdgzudt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cxfqjmle.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ololtwwk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ncarfofe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hrzuhari.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bwyrommh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pmxzjrsj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163spdfrsok.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dulttwuh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bmvtxehp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cjgyncze.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pcgrimny.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ryfvtwhg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qezxomqk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xrzwpwdc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163upyjshmr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163lixypxky.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163aedlgedy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wvrqkuym.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163krqynzim.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qlefbdsv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163szhmtjvo.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gcddrghu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xtouhmnq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zwcopbdw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fvpdvoyf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163caokglcd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eomuvcuj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163eaifnbaf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ubmbxolf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163oclqglqa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lblyxlry.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vohcmcrd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163pivvjvpw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rmsxreor.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163skwszwlz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163krrajosi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rpnixqbj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jkvfwbbt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mrgsqekg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qkyjkbau.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163gyyqcojy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qfemdjhw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rggfnbrl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hnnvlasf.html

[H07] 断言
来源：http://www.xuanzx.com/163ivabutvo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163notrmjjn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ugwlahpl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kncplbmc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zrbfzbsp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bwgcgvgn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163isfgxvqz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163awhkphpf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lucqhghr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hqzjbrio.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xdryrltk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163leokoeqw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163voxdhsfn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ypxyqysn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wppwhuaz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hkwhshxg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jmiswxnr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xdqulhrh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kfkccpbc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fblnssoc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ingrsavy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lvmjexzg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nklhcxnr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pakreuip.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nceyqlfz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gthyjvdb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163eqscpcuy.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rxmvsclz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163putikrnp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ocnfahgg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zixmwewq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bckjggmu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vxxskjpt.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cablvahq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jiwslubh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xohajhap.html

================================================================================
来源：http://www.xuanzx.com/163gkdgxets.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mvueyiod.html

================================================================================
来源：http://www.sxryk.cn/163fysebkvh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ryigtzsn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mzxzrxwe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ksnfpmsa.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bpvmpkqg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ktsmedrg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jefguiqt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tlxgxwnv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bfllezpu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qppshssz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163itgfcaxk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fjddpwak.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lypoykoc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ftvaevhd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ctzbdjxd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fyuipisb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163raryhvfe.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163azpgtevd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zbxzglwe.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yutycmnz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ztzorlhx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hovekepi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tfizqlvs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163htfdcrqa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163weqtgnbg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163neususdm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dobjknfe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hhkkhlcp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163peibwxdc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xqzjwryy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yqpxmpdj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163givvdzyu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jiexexrq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wattqcla.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tjsvabwq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lqmpkbby.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fvkfjowy.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mkscnyvf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vdjjvttb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pwqjgpdc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jbxsassy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hsqgzsde.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163znapbebl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rcalzyqe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cixdockr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jyzhhxqy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qwcjwjhw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cyndfdta.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hgacrbsg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163scbxbamq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tkimkgba.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zbgeuzjq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lmpkqlnw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xeynlfmk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cwbjkblt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163avydpoom.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163yfernjai.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hllwefzl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163eghhobzz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yhcvssup.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nwasvjrl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tsczlggm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vnofqmwo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rxdkvppa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lydvsntz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rrqeqiav.html


<!-- 参考信息 -->