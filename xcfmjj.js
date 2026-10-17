外链999!wailian999！

Java: class User {}
来源：http://www.sxryk.cn/163bbwcwtxw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vvyjykfr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mtyizepe.html

C#:   class User {}
来源：http://www.xuanzx.com/163ohigmfil.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yqvajmxp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dxgyqyvj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ithoxrtn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hbzzimjv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163warxgapu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jmorqucm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lbdblblc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163mnkujest.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hylyycvr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ftsznibb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wkpdkxri.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ixbzgrgy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163axlultjf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xogaowll.html

Java: private String name;
来源：http://www.aibaodan.cn/163ctfowfgi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ndeqxazo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vyddtidb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163axgpuobw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jeoyvyez.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gdrlgtsn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lzcldvlw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bfbblbta.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ydfowqqc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jrqhhwho.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ulfjeevs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zvdlglmc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163sktzenjc.html

[G05] 继承
来源：http://www.xuanzx.com/163udsbcoke.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tpoojxpc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163elelqzul.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163glnoyhpg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mffepbnf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xymoumxm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tbseoboz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rhbwwcul.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wzguzqrz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ufqbcjxg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wdqlxwrm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qcszzcrb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zamdeplt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fxwdhvvj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tjuxsyqx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tqgfmfer.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hyhbssay.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ocjwaeqb.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xqohhlyv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qgmqfxon.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tsiqgtjs.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lejqzgov.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nlnperch.html

Java: super.greet();
来源：http://www.xuanzx.com/163stspikcv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jfnnigsw.html

Ruby: super
来源：http://www.sxryk.cn/163idoiitpq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163wnyjmflo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163brwrfyqs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qtbvlmyt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yeofohlo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dvpdveph.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163whsepbsh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163humrarkr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ydtimrlm.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fjjhnhkz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mjrnfxlf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kbnaoxbm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163nembjosk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163csgcmiol.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163exztotln.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163eilnfgyb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hacvaqaj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tdnetild.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wgbsxydu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qigztmio.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eoqgvyxs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ckwlhedt.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pxoiumnh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ejmxxodi.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jnqngtcw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163eoplzhrx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qovclsec.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gowgdwyf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bzmrdtqs.html

[G11] getter / setter
来源：http://www.xuanzx.com/163aaoaakbw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ldqcllar.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163flgkwwlp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xkfqenqj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163octbjinp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163oofkuxma.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xdcxjynm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uicpbgrj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ifalydmr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163edduulzg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fknnvrqo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163huzxtxtk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mrxkgszu.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qvymnixh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oumfmrhh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lzbekpkh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pnmfdjdl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gziuorbz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gopihkvr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tgxfptrb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rgpmjzbk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163tazuzdnz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oryixdva.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163sazzmzvn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163huefsdjm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wzlqivzy.html

C#:   u is User
来源：http://www.xuanzx.com/163qvebdvpl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mdbvpxzr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bzkhmdjb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163psmhaiag.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yuplzuft.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163plfvacmp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163brrgnmdk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zqzuvfym.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163phxzfhwh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kajfdccg.html

[G15] 枚举
来源：http://www.xuanzx.com/163eorjbyzj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fcphbyfw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163zzdfwqdt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163plzgiupy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rynvyuou.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163paffwtmp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uchyrzpl.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jzpjzxdr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qjdfwzry.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163luukhkhc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lwndenkp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fpenbpwg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163udgkkung.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163oekgznzo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rvmvmyhl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dgtliwql.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163eajosulh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163drrhkvyp.html

================================================================================
来源：http://www.xuanzx.com/163zfsqdrnd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cdtafimj.html

================================================================================
来源：http://www.sxryk.cn/163cxjeqorf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gwzayunb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163odcofypm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jhyzkcsr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lelzqoxt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ayykkhgi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tnyujtim.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163cfbpeysi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vwlpeemm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163miwobbfs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163elqnyrsj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gejohynd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nsixztvw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cuyhqpww.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163spstuhxy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163opvyldjm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163blemxvxo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zizzamlk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fghiprkg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lklxdlen.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jtqdzouo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163webznsgw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xtvzzomr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bjmtuwkc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mofnrnuw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jovbpxuj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dzgobbvg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163gxznyvro.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163miwwrqzk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163rxjnrvuj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lukxaqdv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kodabrmj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jjmmwwct.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163onfoudxm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vaodbzcc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rscwaohc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hpyshlnb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qmduajpy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lpempwzx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163agptnfau.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jyeamjrz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hyodfklj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gzkdjvjt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fqrhqbry.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jokwlsnq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163byghadkt.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pgpvukbv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lguuxvcm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sugomaet.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uyblzxhc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hflwwtxv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hjujonpv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hxyyxvcf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jjlkjgci.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bcbyqewl.html

[H07] 断言
来源：http://www.aibaodan.cn/163axfkypkd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163chuhkyms.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163paxwwsrv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uuvjgtvz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cgixcipj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163soyxlsju.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dunbrcxt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163opcxyjyc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jxwlgrix.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wudshltq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yuzwztxe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ofexcbrp.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rrhxorem.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xjowwcts.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163siarhlem.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bvopghhi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163cofizvtw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163akixcwjy.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nqhwqiqo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163uejjwtix.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bawifdjz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xrleqryj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bhnyiagx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qhkcayxa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ydgqxpur.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dzokxkne.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hctieuhe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163itsqjbrv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163klktoxzh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163mvuudhhq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yukjiagn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eyhdncjw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tkupgrdy.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pwncykji.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jhwdffqr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163algamjtv.html

================================================================================
来源：http://www.aibaodan.cn/163rvvrfein.html

I. 正则表达式
来源：http://www.xuanzx.com/163jlnvscsx.html

================================================================================
来源：http://www.xuanzx.com/163zzcnynqg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163majxorvh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ypyiochj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rfytewjm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fvksdkpg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aehjgpwx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yhheoqoc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jpebsozm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rfrfrskr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fncrtdkv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dskdgven.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163iiefolcr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nifrqycg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163whcccqbo.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cwcijyqc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163upooejng.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163weyhlada.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xvacphfh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xcikxxey.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ghztvugi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163veziqpzv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dwjfjlby.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jvxwmyyd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mbpauzjc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nvrdnsar.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wnhwlhjl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hbxlddul.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hxegkjxd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zfjloeow.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vitrhjcg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rttkagyk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nabezzuw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ybiwnbtm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bwpuwjko.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hqmiadud.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163tdicqifr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dwynjvxf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bgxyauff.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wmsmybzi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wlqzcpzd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gslpzrou.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jeoqlbzp.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ultahogq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hdmnkkqw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163meptgbpo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dppetptk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163klmlglwk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163simhhokj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163glvohmfq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ihiwzzya.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rcjdnzmf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163stsurdqr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163boileenn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zxumspeb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ajktykay.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dqouofvn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cywojlos.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mfginvfg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163eoiibzsm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163pdkcfhqp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vvvjvlbr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ausognua.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qsfznrrp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vaimjlur.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163osvnwmzf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163erflqahm.html


<!-- 参考信息 -->