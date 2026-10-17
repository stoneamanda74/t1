外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zqdwxtzp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kjgacwso.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163aqvwvoig.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uvpotgxp.html

================================================================================
来源：http://www.sxryk.cn/163rkzyopzt.html

G. 面向对象
来源：http://www.aibaodan.cn/163lcmnhonb.html

================================================================================
来源：http://www.xuanzx.com/163yvyytcap.html

[G01] 定义类
来源：http://www.sxryk.cn/163squxnkoc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jrdrcuzo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oxgbyziw.html

JS:   class User {}
来源：http://www.sxryk.cn/163gksgcdjk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zzjyxfze.html

Java: class User {}
来源：http://www.aibaodan.cn/163mqcmemza.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vdsnpjzx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dnlgwvku.html

C#:   class User {}
来源：http://www.aibaodan.cn/163nzgjmwrl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163viinvwjm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vrdqeudt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mnnhaspx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zuzppvna.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fviwxqwp.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zfckktgv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163iuizsmsg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kekrlxwq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dwviusrx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mrtisler.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pclygmky.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jsatnngk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ridxrleh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nhxblray.html

Java: private String name;
来源：http://www.xuanzx.com/163flkayrzp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pxjgjgpf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bjruisqh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qpncwmxd.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qbnvfvjo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cwrsiqob.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yfrjppzr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hkzhbphy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qslqndts.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vfkehlyp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kpbupfim.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zfibhjsa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yztnlrwt.html

[G05] 继承
来源：http://www.xuanzx.com/163rwpmbqwf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163dykevkjs.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nhhjetty.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qborjukh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dclkpfzs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zercsqlf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163txmxyteb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163aaoffyht.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tibcythy.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wiptmdko.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163dwlobewp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pahpzfio.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iqvylrtz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yjsqjdri.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rwzkilcp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163cgevydll.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163iquoylyr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163juuqddqp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kiurzinn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ausduogu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163hvueosvs.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eoqgxqar.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kcgacbhi.html

Java: super.greet();
来源：http://www.sxryk.cn/163ntqymddb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tcpiuwlz.html

Ruby: super
来源：http://www.aibaodan.cn/163uheweyim.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163skoqicow.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wrlsjwhx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pidvmzlo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163spqidgjt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iegagsvx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163axdgtfyv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ycmkifjo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ndmigyno.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163krqlwufy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163djaeilhg.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163hxweybgx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hctqgfnq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hunzjwgo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pibduesq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ifzhozbl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bhmitfnu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163crauqvog.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163vmnnsawf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qqsjjvnr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ivrxlnfj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uvpwpflu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vimqeldn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163oaomakcy.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nxjcidwe.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vvenlpvm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163nxakojpc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rybvseiu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pqzxynnp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ylwqorbr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pgmqjrmz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ooogqkqw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163uklsgaob.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qbystqzi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qbslyrxk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163lgpsqisd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163hiibhfxe.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163henbthii.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ejuxirci.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zlnnylmr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sqjnlzvi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163aapoeniu.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163djqqhelq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jfjuywjw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mtqsbdlj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163byjqqrnz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163lsjfaqdt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ptxnwmxy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pomlnkfz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xzflemzj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bwdwiagl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163bwmzjxke.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xpoyajrx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163htimkcek.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lpgncunj.html

C#:   u is User
来源：http://www.aibaodan.cn/163kyrotguj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ybdgpquq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ncktlbdr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163aajmozfc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163amexhhda.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lpgmsgbq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163uttisjfq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jxbidiwy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yideuqgs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163szogvqll.html

[G15] 枚举
来源：http://www.aibaodan.cn/163uumkorci.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163pjzzcmef.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cjkmaaea.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dtoeljbj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163goyjfeju.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ukzxohzw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163urcjpdpc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163belpncti.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zofapxbg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ymdzbepl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sfymoffl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163prjrdjws.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zegzcdkd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163plfgdvds.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xwfpprhs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163omuigsfi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zuvblqwz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ckyfcjwf.html

================================================================================
来源：http://www.aibaodan.cn/163ggxlnpru.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cvkrjmbv.html

================================================================================
来源：http://www.sxryk.cn/163ssxhsxeh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qxfkegls.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163aobmslyt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ubikuktx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wotvuzdo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tqpogkue.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xguzdazo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kouzagep.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163thoudpat.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uccjrhoo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zzxawtty.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jyavucfw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ixfuccnl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uxycawly.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163slmvrenq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163igyqcdzi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qzgxhnui.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mtyeouuw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hjcdixrj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pvcgmrnl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bldrawlf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yhebuvvu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163oobvwfri.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xiyrsqls.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163rfyeccid.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kqufalqv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mqrwpzuk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ypqdjzht.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qniovoyb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163wavlboxg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163eahsqjqk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mkovwmon.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nyljbvlx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vkoiztkd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ujeebmbd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yinwxyfc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cjottpkj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163sqqrrirr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ikafnfug.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fpopxhxm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xdrmowej.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pkauunfa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xnwsnpko.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wgpywgeb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ewunqcvz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tuimvlpq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mlaiacnn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bexpoqqm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fwujkpox.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rhjesuia.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pfzioqam.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163fbfynsgm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pucbphbk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nujghgoh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163veuvrove.html

[H07] 断言
来源：http://www.aibaodan.cn/163xklnherd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zsmpnftk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gcwxubng.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163efbwlmra.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qhiuinuo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cxwizhkg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163vydrobvi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nwljhmhw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ynxgezlr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wpuxhwls.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pwawtydz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wryafdhh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vtdnsdku.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rneqfkyk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yckckqzq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163npevbyol.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163tvmsnfve.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vbmjpqjq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163niokzqwz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nupmwsbl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qvwclbzn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vezkkitl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dvievdmt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xtrttvoa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163osyyntpg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tkvvkdiq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gkcguhbw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163brglfbji.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xhpjohgt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jrvqkucp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uyeixclj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dbjalvts.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lfaksrlc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zekooivk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163euzttqhi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163chykhqgx.html

================================================================================
来源：http://www.sxryk.cn/163etehpsnx.html

I. 正则表达式
来源：http://www.sxryk.cn/163oelcpmvt.html

================================================================================
来源：http://www.xuanzx.com/163rttkcsmj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jnqjtzbw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163noqeohgg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kddzqgvd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163iiutzmsw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wpgozawp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hhgmjcsm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mqkzkuqe.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wljrpkvk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jucfrwft.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163umqrcqmp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nqauywpo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zlxwpuvo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qdgspdca.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yejosyar.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163sbpezkco.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rmuazvlp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kxkquvop.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163busilxmx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163egwufyet.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uwysfyuj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zmtzxgif.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ydgmqykm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nciqdrvh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fvzrglrk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ngsbzkhb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dqneomnb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fdzqvedm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sgorbwtc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bulzkvmz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ipsdvomk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163erccekse.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wbelkjnh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qvrolpsn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163texbsluf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lfevoaej.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oufyeotf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jqsrziwf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jqjddmeg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163aolyavmk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163evmjwmoh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yymsgpnc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nkesdtxs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xbvvudto.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nehwjtir.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pbjtxeyl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163yobpxule.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xpfmshbv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163olqbesnh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163shjmssdm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163chshygyr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uohtujhj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fmfmacvs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nevqifdr.html


<!-- 参考信息 -->