外链999!wailian999！

[G02] 构造函数
来源：http://www.aibaodan.cn/163sdeguhhi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cbotbycp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163oeswtywk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zxqhjsxt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rhwuwfeh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163iblzbaot.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dgpqeltl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xwtlcgfi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163oxpcgzas.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uccruuxt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gngqidfy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zootrwnu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163penhxysj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dgtfgeks.html

Java: private String name;
来源：http://www.xuanzx.com/163vulpaycj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163okbdgnep.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dhbqgnbx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163zbvshtqv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kwqybqks.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ohayfqsv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qdzzwblc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hdsdakhi.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163itojzyiq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fwavejee.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kcyaqtis.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kavycrdv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163uzgiaynf.html

[G05] 继承
来源：http://www.xuanzx.com/163ziujrbrp.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cqqofcrv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qwchwboc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cgytknxv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qmgwellf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163vcohocmb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hejshnhy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wryadedt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lxjessfi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fbwbfvwt.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163irjloqmy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bnzinmwd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163urfhefii.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wiszajwk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jsazzwdg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zqctgvwh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wmdyfyvy.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tewayqoj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uvjajmze.html

Py:   super().greet()
来源：http://www.sxryk.cn/163itvgbyva.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qeelxfcf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bifnhrpt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ofqpdjdy.html

Java: super.greet();
来源：http://www.sxryk.cn/163mnudxsdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163skcwrtlb.html

Ruby: super
来源：http://www.xuanzx.com/163ajgfxfax.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gcwersub.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xrkholvl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ysnwpsnk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mermdtbp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vitahrar.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ooerpxww.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vxyfceuw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xczqjvog.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163aelmsvqu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dpgodcmn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mrgjpgxy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163llvwbmer.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rlftamev.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xdntfwei.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dhdsoiil.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163udzuzdzi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xicwylbk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bpnyrpem.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jdtwfkrc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vuduuuht.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zqrzgldc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ahfupqho.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jkwnolgj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163viuevmfy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163quncficl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vulfhcee.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163wriosaun.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163khwobcnc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jodkqaav.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zsoigtuf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163okkgafjl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bxovmufv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mwkllpnt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qadypghk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dydfreri.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ahotbcbs.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163akscmjlc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cpfmlwjg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gxxfatvr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qqapsniq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fgxynmjo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ucffeirn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sqcjlstz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rbixrhrr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wciqftar.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gqoehnwp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xrnuucee.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ozuoequh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gcaqqjlb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rcahaazw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163sgivuinj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zlpfdurb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ruclqfsb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163utjcfynd.html

C#:   u is User
来源：http://www.xuanzx.com/163redyuaaa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ufjkylzq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xvknwqew.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jzoqtkcr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jahnoqhk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fztmcgjg.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wmrwqkuh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tlsptruj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rjatvxbp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yhxsndwo.html

[G15] 枚举
来源：http://www.sxryk.cn/163bgicleap.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jfxrxzlu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qqdijnbo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cexvnwib.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hctcdbgc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qweytqdg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163epwdcjnq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jupwttqj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hfopjnpa.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zpjtxdbx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ikzrvoxh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lunhwyzm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bvnrguys.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163whjrudgd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qpsnfyfu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pascngti.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wecznvoy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163bclbpwdz.html

================================================================================
来源：http://www.xuanzx.com/163njrurpqe.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ygvgsclr.html

================================================================================
来源：http://www.aibaodan.cn/163otuizjhh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163isfalahu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hmsnbaxs.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wqegsdhv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163drzltays.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tdbclnpj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lhuxsvzw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ylhuqowt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lkdoujka.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163sswzznnu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dicqgyzc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qqgoxwgy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cptofpnr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163frcywbmk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dmhfkhsn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ehidbqir.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bhbqfksw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163edpquywc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hfuvmoes.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hokiybte.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163shgcoprt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gygipjnl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uzlbclri.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zlkgofpo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xcjninmy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qsggtnvy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zawhjohp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rmokvumt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163roplkdrt.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lxvryhsc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ijdnzwuz.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163avlnepgf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qbwvjvoh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163egoxvlvb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163swaaacgu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163megwtcpr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iwktleav.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163gtbitutc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nvpvcggq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wmdsqhbi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nocmmhtl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163afzqbyai.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qnaeqrkh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qxmjfcer.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gzlnsbjy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wgxmzmfu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zoinrepo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mnsfxget.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ylngllxc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bvqfuqyx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eshnehgu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oogbgjrc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163khnphxwj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wrinokal.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163nsmskniu.html

[H07] 断言
来源：http://www.aibaodan.cn/163hsmhqjuj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bsydbbzw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qaqzdpsy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gbegfspd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fozhdovw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bwhpcwkp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mncheork.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163mvpckeps.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ltelhutx.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163apknvpic.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oajkdgde.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ooyhyngi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dqglggwr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xhrqzrqv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qcuhculy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163icymnwlh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gqgqgfah.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wbfilvux.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kooszrll.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kogjoadc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fxzfriok.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qagyxpys.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sdkhkrma.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163onsadkns.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xywvkgzg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163izyrakgt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163omvvwbvg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qxxlvhym.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rubxadzk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uhfmbnih.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jumxqexk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jeerufts.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zxqyfxae.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xabvbvgo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163emoxvgbq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gzhptxhq.html

================================================================================
来源：http://www.xuanzx.com/163gkdfvjmk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kkpesjod.html

================================================================================
来源：http://www.aibaodan.cn/163kxnslrna.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wpyzrohu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cgucutsa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hmtciglv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jfafvtub.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cuzbdkgv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163scvhhsek.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163savoxqqr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eynedcmf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nwocqqqo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163kaaodxwk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xhfmlxmk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wmymntng.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yygfvijn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xivalmhb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ijlaytiu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163aprfvoxl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163demszznc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xoijaljy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xrglrfkj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wywpisge.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ljlyvjvt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rstzwzku.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163eccfsczp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fxykmfce.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bapilkkf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163oynoireb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lwhxhypi.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lfzjtbhw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hdivbdan.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tgukecha.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ndqepfpa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jjsoxjnm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kxwmivzd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gmxgtmis.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vgjwtilx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hrwcxqbv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mknxzkhb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wiukqrcx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pktxuvkk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zyznevwl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163codntwgb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163uoaystwk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163whdbufhk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vsvebidq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mzfjogbf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dbebkbbw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zbvijjyv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163psqtipml.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eioqgkod.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mwrhvfeu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xmujoojg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163eghainfg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163asngpydi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mydnvoia.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163tpnluggi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ghtaquvu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ayiszmca.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dzhdnevi.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bxfjnztk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pqufcrzr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kogikdty.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jrukofvi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tuyanpvs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ipzysood.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163krmbkuzh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zjwgeeio.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163veztocpf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xiudfyxb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163uuhnvtak.html


<!-- 参考信息 -->