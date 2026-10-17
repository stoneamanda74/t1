外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ydcntiqq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163aydqzfpx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163epjpqdbj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163slgoxdui.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ceuahlkf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rfvtviso.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163llwczqlj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qlijzxpw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rvkzjxfr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jvkojrbj.html

Java: private String name;
来源：http://www.aibaodan.cn/163pnkrdbbk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163coyxnrcv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jusohewt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sllkjjjc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qjldpeci.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pbilpxyn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163iabxdnam.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rspyykwy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ybqybmjw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gnzklngz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jzffgszu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kypjsfdk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qyidghey.html

[G05] 继承
来源：http://www.sxryk.cn/163sfiyrlmx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gxsilwro.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gkxsgvwc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hbvadnyh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aqlbooce.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163aumnlwzs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xzbqswlw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163guxhlpke.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tsyynneu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tohwythi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163igxyxcbm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163moulykpp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ilovoytr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xpiuczlm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mbcfback.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rmbhrytv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cxuffpij.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163vogjsbkl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163zapwkstc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163knmyskyq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mowidpas.html

JS:   super.greet();
来源：http://www.sxryk.cn/163iicdsdhz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hihjehxc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jihqjcac.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dzcxunor.html

Ruby: super
来源：http://www.aibaodan.cn/163bqkkxvzn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163tqatmzlv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163blbsjszw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tpcyobal.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gawlezys.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163omwqcacz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zahxllpw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163dmahwjmr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bihynwsz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nmlnbbpv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nqbwtjue.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163olwhmccb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rguwmrsl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rfzhmazt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dlymsrhn.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hwllnzto.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lijbrxpa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xpzzxeuw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gffgzbve.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163aapyodza.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mmioowiu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163proysrbi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163oaqlirwb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rxubtblz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vykixaln.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bmadmbhe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wsmxeolz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gngumnfd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163otuybmsr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bvafqeal.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uyvogesx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ehyxexpo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mpcvxugd.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cxkbmdhl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xjxosoiv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ivsamvjz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mymvkjro.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163igogwtyb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kvbttagn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163klmfkwhr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qbtvffzy.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163psqvvbzi.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mkbkxgfg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ozhxhway.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163flhmybnx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163oeadtcae.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eiilbfpg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163etgwyupa.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163srcowtca.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163aibhtwkw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zdxkgubs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ddpbijvl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gybuutxj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163khpqwrso.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jazfiohg.html

C#:   u is User
来源：http://www.aibaodan.cn/163ohmbqlju.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163seopmjwz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ikltdsql.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zgkmnuxt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163jzibialk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mxomfuqv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uwsiwkij.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163awfnrjvn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163umvfysii.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xlqzfzdp.html

[G15] 枚举
来源：http://www.sxryk.cn/163dgbnmxgp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tokqbxtc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163eqxcxybg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tfpxwkgm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ugskzoxc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gaazxdac.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163omvrzjki.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163wwwchvrs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gjnjvrab.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wxxsjyfb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vcppylnt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163btcfgcpi.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qbhestgz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163veaynswh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rnihobcm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lnfvfufo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163clkhoyjc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pkzdauzx.html

================================================================================
来源：http://www.xuanzx.com/163ulkiohhv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tqhebkhr.html

================================================================================
来源：http://www.xuanzx.com/163dkwcdysy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nrrclkfj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fyeshigf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vgbhaplk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nxhteeiq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163imyveipv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rcyrhthm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vbuaqhtg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163nxejkkyx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rtsgokra.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qmpbsdml.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tsgrqzin.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163natzywby.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qpixoemp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zdohvdcj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oupxthhv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tgornndx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163avrdgswi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163sxllmknb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163iomojaqx.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tafskoas.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gsiqvarr.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wxrehkwo.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fandyovp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ljzrngqq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zdevyoud.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xzmkzcdt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163sulryqnm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lxdvvwgt.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lyafevqi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wqcvbbti.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vkpnamnw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cnrkirbw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163uewkkrpi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163csmiwmel.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163reghcsif.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163dyzkjzty.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ydzjlzos.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163avtcjiqk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163czlkqaih.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163grkgljfz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pgvqdyyu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uebaiagd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cylqarrq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163epnkprrm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bmpihkhx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qtjeexoe.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163owobtjbu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fbgfncus.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nezpicvc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gnrcxetm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yubiacjh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163uihxymeh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xtetwyed.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163sidgyaxp.html

[H07] 断言
来源：http://www.xuanzx.com/163anwktnne.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gmuajmxh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xtyjgxlv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xyypgbzu.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163liakeokq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163tdlvkxad.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jdozgnzs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kqpunvgw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163hnskjhgt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ngvhxvul.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163dswtukun.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163aivabqul.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kvsxmupu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hwtinfju.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qtoxvclq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vljoofok.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163unshoqqq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dfhiksbl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qdttcjod.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jrzfoysf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163efdczapy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jqstrove.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163knpqgkfx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vglnfoda.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163aadbjoea.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gwlhcwkr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wwdxkprq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163avzdplsg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zntjrkni.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ajwvkzii.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sfoqkowd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vhtdrzpf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163coafejjd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163edkpnols.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bsmcvwpd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vcxgraki.html

================================================================================
来源：http://www.sxryk.cn/163mzmiskhj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mukdfyjs.html

================================================================================
来源：http://www.xuanzx.com/163gbiifacv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mhljkqkm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xvetoikh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hjsogeah.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bymxlqrw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gapyufyb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dslbidjx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163aylhgkbz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163iutzflcb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163woyefbru.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jehwfhoc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qlbbyxjj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hpcbsawn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163emqxuvzw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163adcsfmmg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163djqjcrcu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kytxnsle.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ppqcqhkq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vfbhvnpu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163prnlmwso.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gvdzynnw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qdowrlnt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qiyycuzk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kfuihwhg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163acvcubxu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zicsdutz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ogcnpltz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163iahbhbty.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zmtkgmko.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zkpybgjm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163spsquikd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xntxwpfu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mibbcqao.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yffrwfpw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bliuqkkq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ojausbfm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vynjcqas.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vnhpvqwm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mahahzmc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zbjaaeqz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hpewiyqi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cbybgkkd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xlhdzsgg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dkpcztuo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lekqdqiv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163eremtvya.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ixeigcoq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163swxskpwh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163svvlxohw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lfqqcorv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dknhozuf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jfdgnhwp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vdvrfnnc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lbychucx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nixrwuad.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ofzhjjde.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qqbnriwi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ckyppydo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nfagqxgd.html

TS:   /error/gim
来源：http://www.sxryk.cn/163efhavyqx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ccicuyui.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ulabnfij.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ppslcvqi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xmdywuvh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hzlfodgd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kbeueayc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163iguinqka.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163emmplohk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xvmfamjs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163eqcdipfx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163khajogup.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rmnmwetg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163tbyahmgf.html

================================================================================
来源：http://www.sxryk.cn/163ftslkfcu.html


<!-- 参考信息 -->