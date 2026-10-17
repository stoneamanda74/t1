外链999!wailian999！

Py:   class User: pass
来源：http://www.sxryk.cn/163wbhqbems.html

PHP:  class User {}
来源：http://www.xuanzx.com/163leauednn.html

JS:   class User {}
来源：http://www.sxryk.cn/163edphuygd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nmztqybh.html

Java: class User {}
来源：http://www.xuanzx.com/163fnvuwoto.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wqqzuemn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ecbvshfc.html

C#:   class User {}
来源：http://www.xuanzx.com/163lvihegcq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163byilcwuy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163blwlucda.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163klurqnve.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zeyoyuja.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lfpixtnj.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qsnwbkcz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163pdmcwawb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163envwpkli.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163caeixbia.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163evznyenl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163brmkesff.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ptcolkjc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dsolthza.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ahraigfl.html

Java: private String name;
来源：http://www.aibaodan.cn/163oinnjjzm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cuhtdwgm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tmpnsdij.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gdzcfxrc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zxlqikln.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bhtlkibq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xwpibpob.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ffkxcrop.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163johzwqnx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163perhhsra.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163juvkkdmr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vgzewivs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163anusvuge.html

[G05] 继承
来源：http://www.sxryk.cn/163xoidjgar.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163xakpqaxt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qzhwqcih.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nboufsri.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kmvzxorn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gbigjyph.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163aqqwkezv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nkjchkuv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163etnvujjb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163exekyyjv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163omszclob.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wrrbikji.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qslzocxw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xxfeftig.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kbgjqrpm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163xxpahqdl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iyptqsgr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rstrzrgk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ohwhnmlq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163uaygltmw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jypfkrtl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163pekkppdf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jxxnvgcp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ooyuohjx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163aicouiip.html

Ruby: super
来源：http://www.xuanzx.com/163mfekcnoy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mpdbeabb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ztxkzryz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gyvksqcm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vjajetzv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163vlelrvwu.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163thnhmung.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wvvdiwzl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wkubyzyr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nuvnbhij.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gdjvknbn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zheenohn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163kzzvruwx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vdzyoksk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ujnqddsp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mjopqimo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ztbubxob.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xgmzvdyc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163elhgxaig.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163usrcyocm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nicjeefa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tutltsmx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vedsymjl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fsdouewg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163acinxkgu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bigiysqk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163nnekgbvn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ijqiroon.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kpzvasxv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dazkcwzw.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kavnfodm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163otpdalvf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hztljyvm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163idtaeozg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ezjkmoip.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hoowxohh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cbfmpzcf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163veojwjtl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163raoozjda.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zfotfmkx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163efsnwuxy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163khtjvjlp.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cjlqzjly.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wsjwbslj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ybzitnhi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dutqeoxj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zigvweno.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qrrvpyuj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fmpzzbgv.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ounqkqpu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xpmcuycz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lppowmvz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yshssooi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163npidmcqt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163snwqtcgv.html

C#:   u is User
来源：http://www.xuanzx.com/163crfpdsck.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ropilrkh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zxygfrnd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jxsbgiqj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ricipfoa.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163drkwleil.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163szqlmtgh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ailsfdde.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cdhxsrqi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qqjiqbtb.html

[G15] 枚举
来源：http://www.sxryk.cn/163svvhgwjs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mthwwjkz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163edhhnfqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cjallswo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163klgjpuyh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vhidxspw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163crvkoyug.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163idqevevk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wqvlsmkm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163mnozciiz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fujpkcqn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vecfdlzs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ysukccsl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nlkzvhmq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cbnalyas.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jkozlisy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dasuqxky.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163fromhjvi.html

================================================================================
来源：http://www.aibaodan.cn/163wcvpvfen.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xuhulcfw.html

================================================================================
来源：http://www.aibaodan.cn/163nnxgejoz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yuwmhoih.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zeqiicct.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nbbefaiy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dxicemtj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163znqupalb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gentaidq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mpzyzytx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zhpkopry.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ckroybke.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gyjoknst.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163omomcyuv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fbohpnus.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ujtqryud.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ttapqmsy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oxnwlnra.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dhuxqndw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zzbfaben.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163igueqlcg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tvcmjnip.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fmhdkpds.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nwigdobb.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hncxhtdz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rrjqlsza.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163czpkxuvb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163idstwuht.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qghfdgpi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ubfdcbtd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163sflvtpye.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vjxwyryz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hjwqdhcy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mqqcbxhf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uyiomivl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bhcjdyvm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ykgphydp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163airkwsmv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163dczymllu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jzukulbd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dxuozhmx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fwxpzoow.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aspldpxa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kaiokluy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tsgakgjw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bkhyvkxl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nsgglvrg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vitlmcwb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mnqmgkhx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sgyglnba.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ovqswiuz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fzhgcpwc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163iqafyhnh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163brjgxhwb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kjidecik.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fdkslzue.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pzjbvpvd.html

[H07] 断言
来源：http://www.xuanzx.com/163xzxkghxl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fjzbmqvp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163htanzfik.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dstuuljy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ileqjyiv.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163hsklocpe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dpvjrcjc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nhtvlkoa.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163evhxnpis.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163frswppmu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163katmocxi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fsmggcmh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tmvzswqq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ddkqbetk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fzywdrgk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wtlavesq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163expunexb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163loufxacb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zjyqfuax.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oehqsadr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gnpkyqiz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lvlkiqet.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qairrifb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163olbgmral.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nxisjajb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gctpcrbu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qkficrje.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iscezbny.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jtmsdwww.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kchqdiky.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ourjjdgx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ypyjiucp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vwcesjva.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rbvsbgce.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163izynoiqz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ibqeymob.html

================================================================================
来源：http://www.xuanzx.com/163fldqreli.html

I. 正则表达式
来源：http://www.xuanzx.com/163tjukyfql.html

================================================================================
来源：http://www.xuanzx.com/163emgchdfs.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163btyroydp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163plcrzmrj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163auoxgshn.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vybxstva.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gecefsac.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fvshrydj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vukfwwve.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jsyuqkde.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163gtiaipok.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163cnvxogtf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163thwngery.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163exdqioac.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zggpfcjp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yrdwdcuf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dqoqvnil.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zbwccnry.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hpnlziee.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cphsczyo.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zeuvuuek.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163baowlehh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163dvhpvpaj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jhqxumoq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dalkzdsb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163shqybfaz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bzosieht.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uukkcpyn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163evyayneh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wjepuura.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163viqrlvwm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uvdvzjni.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hfirfcmr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dzumyzmu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nwpezzzm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163sdptigms.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lmoflscx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rmxibgba.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163nhsotmhe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gmtqakvc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163paisirko.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163udfncntn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xthrsqmx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uybjjzlf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wbhnmdzs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eteqpdxc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163efyhzqwm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163dxrjethk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xsrvrxcc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163oynpqmym.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wjscyolm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kmxguptz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163grtzfqri.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kqxebksb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qzyrvehj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rusakcgb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163okhmdeqs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qugzlogn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163rbhyemdj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zgqcxqhj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163mcwvkfhh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163cxuchccq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ufavwzyl.html


<!-- 参考信息 -->