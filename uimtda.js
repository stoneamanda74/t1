外链999!wailian999！

Java: class User {}
来源：http://www.aibaodan.cn/163namlezcz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wsvbolzc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163siuubdcv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ghhbinhb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bzqwvsel.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163alhkadcz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iqwsjgty.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rtqiafbp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fzecvudd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163imcbnzeg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yljjpegm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gaizzkkc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lobvfsmr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163powmjekd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sjrxdbyz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xfscddxu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163eyatrqaw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bwjbzzno.html

Java: private String name;
来源：http://www.sxryk.cn/163jvypbrbq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rjkuaocz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ipqtelne.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tuhfmizm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163yrrbumml.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lyvntkjy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163aoswzdex.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163odezzhnq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pwyezeko.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163znxyfkex.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163kgdbbdup.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xxyevzrk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yxubiuuh.html

[G05] 继承
来源：http://www.aibaodan.cn/163afgftzxi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gjrpwhqj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163oacvirlh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qclnkzqu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kxvasdhr.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rctvqghe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wgxeweio.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hdtkuxno.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lcwvnnyj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ctgqtgdl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hcxgshnx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fntctugo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bxcudskk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jzwbkigo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wzzdeaea.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163sjsviagv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sjoyeglh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163yhupwazo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wdyetglz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bbahuhhj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163fqhjszcl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ypxawydc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qrisuqtp.html

Java: super.greet();
来源：http://www.xuanzx.com/163ucacssne.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163dswyjwcg.html

Ruby: super
来源：http://www.sxryk.cn/163qilnquhj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163zmuogzjg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xmzbafhm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163byzwezaq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rpnbxfgs.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163iyvpdbgt.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tvhfmvtn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bupntvjb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ummksovr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pkwzspsr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gyzunsqz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tvfqxxzi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wanoeyqm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lcjciaeu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163eemlypyp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bfeyzkxk.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wsoiwpuo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hqfcpdks.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jwkfznau.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gxrxibwn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163frcstejb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ihxhtowm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163throbcth.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kdfviwuw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ozvylcnw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163mvonfpdg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fefrycid.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kmrqwxxn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163svqaazrr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qmpynjzu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sailiacs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hxadjzes.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pqxdkrra.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vywahqyt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163kfylbaaj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tvilvqst.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gcomvokf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163irozzarv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cxurhdnh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kryoopqj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163wigmtoxc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163lmsoojkr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163isygfsjd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163exidtpcu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bukotvsc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xtskhbqv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gfdlnsla.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gncauxut.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163iewxbghd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yacwwrvx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hojeunno.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163bedfsque.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kegnijpj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hawjhemz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163chwuowir.html

C#:   u is User
来源：http://www.xuanzx.com/163myiuipgn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163oidfdkod.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tqnvlfii.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vrifvcmu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tymuipcz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pmyqybzo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163krpnbdjx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mijlxoab.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qyufyhup.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yuelixow.html

[G15] 枚举
来源：http://www.sxryk.cn/163fklusyrk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163iwelqztg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jkxzrlcp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163agkagbfi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jcfkjfeu.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vtebqqpl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zmnrbrej.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163psidhhjb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qwpepgvn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rglllcqw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163eyprncyo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163axmqsiqe.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163udrudvgd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163guywyfgv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wobejrvf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uigfhqgg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ykoapqss.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163algvhour.html

================================================================================
来源：http://www.sxryk.cn/163lvogkfmy.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yvuozxpc.html

================================================================================
来源：http://www.aibaodan.cn/163gjuqkpgy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gcwkszah.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fuvcuirz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163czxaiobb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pmrpfgbi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163yrqkczfg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163veesrinf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163sdzbvbks.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lwrogspa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hblxcmuj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163srcrbcej.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nawljnxf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ombforij.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gknshojm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ocnoyggr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nwmmrjsc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cmoknpfa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ehgovrjn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xvgsqfkm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jpcexqyn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eqyhrrid.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vzvfddxb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gvwsntlg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kapiucup.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gkeiybkz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hktkdyka.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ldytrksv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jsufrpzi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163junjwtbs.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ycherubx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zizxixuc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jedlqrzx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hjbuezxi.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163cppzphbb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jcdmcaip.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ylseuxvy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vozxkamn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nwdlwcdl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fzavxkzw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163swktnhwi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yrbluuen.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rboxwtqz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tjdmbsxq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dzocqzgb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163flitltxn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163thjkxhme.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163inrddcek.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163mphvzpfh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wcvizesq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qwejgmdw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iwtysldk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lrpohlyp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qnzaxzdk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jppditqe.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163gqoeitpm.html

[H07] 断言
来源：http://www.aibaodan.cn/163qxpxogjm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163oovjpsoj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jjtqauoy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ntmtmrme.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nmotvzdw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bgqlftrt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qpybwfjn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ccfyppzw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iqxvivei.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yjwtdmly.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163foxcnbkv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wcjcbgcm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bmtjvpce.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jbnrpbes.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163dptaaibb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xivznwfc.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wcpxokfk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163seqckgjw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163lxivtrqq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yzjdttji.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dkhuravr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vfjscmnc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163siolpcjb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163fxjacvgu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zqkwuhal.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hreeicdy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jnthvnek.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mrxluslm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tcrdtuub.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ighqciqv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lvjfyqho.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tycvpzzi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dstctwoj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qxtrghgy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163tyopdjio.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163dlozladq.html

================================================================================
来源：http://www.aibaodan.cn/163spovovbj.html

I. 正则表达式
来源：http://www.xuanzx.com/163dtcsrjbw.html

================================================================================
来源：http://www.xuanzx.com/163utpoeuko.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wyvkapkg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mncaycvu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ztdfxpom.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tcpixdyh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gksqbdoi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zjzfqdfv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163uitxnppa.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gtpxdifp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wqmzefsh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ymmrbssv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qxkzodwh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vlfiqcve.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zxgkahkj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wbiabcjl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163udkggvfa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qhcqjlob.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163msenicii.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fpfwzork.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xdfmqrhn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163rkhvmgif.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163onrgjxur.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cctnszmr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rjbxrcmf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jwytlpao.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163oaaunhtj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bbvizzoq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ymzkybis.html

[I04] 正则替换
来源：http://www.sxryk.cn/163manqrsrk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sudfpdat.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bvehibpv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rgfczvnt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wfyfyzic.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163llkoeqbk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yzarfrul.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163biuxhehk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ebdidzmf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163istgnwuy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rofycngp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tfdqjvql.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mpdwdgfe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ruecqrye.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163izqnhzet.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bgyeedzo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163touhqpjv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rikswdks.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gubqbxka.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hppvfhcd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kjefjiuq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mgytghqi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163teqzqzws.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ademoddt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qkpscyyf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163llcuttbg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fvqzmdph.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vessgdjh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jjpphllb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163abipukit.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163aktdlzzt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ufllxcwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wbbcwuic.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hhgviixo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qnjgalwe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163isjodxlp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uapcwnwf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xjhmbbiz.html


<!-- 参考信息 -->