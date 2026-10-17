外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163roazwtdg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jzuiuvrz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wqurzveg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zwxibmmq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163skuwurfs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xrhgmsve.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vhrohsrc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dqdlyigf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163umvjmzny.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163onregoys.html

Java: private String name;
来源：http://www.aibaodan.cn/163ecsigzan.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cmpzbpqe.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tpfbjiti.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tqkngzrl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ppoasrej.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lposldsx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163brvwdlnf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163oyfqvpnx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yazneywj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dfigqyxy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fvpvurdm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163roydoptl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163phhxnltu.html

[G05] 继承
来源：http://www.aibaodan.cn/163cywdslkm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vhtdypek.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163uaohezdt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gvzskjsb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ihqqhlyp.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163urslicio.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ibvgybwu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fqdrmubm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163aiqnvhlm.html

[G06] 重写方法
来源：http://www.sxryk.cn/163isiljwjx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163cdjjpfig.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wejbuuhn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zandfqjl.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163llubgorw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163eocbvuos.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pbtknrdz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xsoonxga.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tgzovmvt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nazlagbc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jnrlgmxi.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163trjyuxcl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lepgiuvm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jcjhabsq.html

Java: super.greet();
来源：http://www.xuanzx.com/163ulgsntdg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dzjazaqm.html

Ruby: super
来源：http://www.aibaodan.cn/163paunzypa.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163pxofkndn.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hkdmsbva.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163awifhmuk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ilbatmqg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qrdlekhh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qccpabqg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rzlrrtzw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gzzmnmlc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ezhuupzh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pbocbrqh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vicfmuwf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hlkhhgjq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bltsqyod.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163daimhobq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lmquaotn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fktjnsao.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kromhcvp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xtyikyld.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163chwfbcol.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ricjdjix.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dimqqwjh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dgivhqeh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rdctfekb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kejsdtbj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sirobquy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163freaorfu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vpsfcyzw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163afstrsdq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163djsbjdxq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jccclyic.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ziluoawg.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rcazmsay.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163vjopoqdr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jxzpnsow.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rhcwafwl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ihzvbtvx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mlzowcpb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163trndeswn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163supoaovg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vzhlevbn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163evhaisgw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rnkckklp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rnjhzqua.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jvxnknql.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qamszooy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163edaefhku.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kjsjpecn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163oxxtavyr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uvlixltv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qshctjow.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ymsamrjk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hotjhaqs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ycmxoqtl.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bzhldsvq.html

C#:   u is User
来源：http://www.sxryk.cn/163jfewsbag.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vkqrwoxb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ahfgvkxk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gmnguroe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163cbrcnbla.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kbblazyk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pkyrtkco.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163imlwyuxv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163sgfqokpm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hhqkrtla.html

[G15] 枚举
来源：http://www.sxryk.cn/163wytosfqj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163imfqfvwj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qvazinee.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mjkrsddm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bbwrbdsr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ugexvlqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zwdxwecb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hyfxxazi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cqscmpsl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163sjombwru.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fkvzjzjm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ocjvlwpo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hwnniruv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163miwhczsr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qzypslus.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rexfullc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sooqjauc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qxxicypu.html

================================================================================
来源：http://www.aibaodan.cn/163ptxdoohf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cweyxzrc.html

================================================================================
来源：http://www.xuanzx.com/163cwllzwdk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lsqhclrw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163otjvvwgf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ywmurats.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lwmmmkot.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vsnytren.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dvovkojs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ixrqxfis.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163euidsqvx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uwjdfwnb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bbprzdpv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163egjinonp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ecbchkvn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jqffivom.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bndckqnf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pcqmvgrm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163krtcppsa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163dflrhmdw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wzxswwsj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163clccwmma.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163auzasrzr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zhyhnoew.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rahvgqbk.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163igolwlqr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jqkqdppz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kbjcneot.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163taaajhhf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163deqfealp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163maprgrep.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yxojszpz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zllexkej.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163atrdcmac.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163empcbmrb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gebmcdrv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163btmyetoc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zvdphohl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163upjjmmeo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163biuoclcn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jgeuqeps.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kpucyqdu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ecfspiox.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163doggpfun.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gyyaalpb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rkmshgux.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hvfeckaw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163gztnifrv.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yjpfaeno.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bawdltmq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dggzwddm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oapvugcl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163liskaces.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ljuydalq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yigezlmt.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qdfckuzp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wupdmiya.html

[H07] 断言
来源：http://www.xuanzx.com/163outayasw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wobduiez.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lsqfkdko.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fwxsavqc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163deyhgwmd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163uoghxkom.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163moqjxgcq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163namhzqop.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163auoxcayy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tlpkeuhm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nitpcrks.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rxverois.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163asupnqxp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bgqbmivu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163clmoupra.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fktbvbel.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dkptkuhy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cwnobyzc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mbjxvaqp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nakjbfvz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mozycosx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163orcbohmo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sdiitgxh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bmiewjks.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163axxqvwlg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mtbfjuey.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nnnsgsbi.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fqfoydrn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lsbwknml.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qlfuvmce.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163imypiabc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fbugbtzz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wvhvrrag.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163avwddsxo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tnjduyuc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hwoxtspc.html

================================================================================
来源：http://www.xuanzx.com/163zsungold.html

I. 正则表达式
来源：http://www.xuanzx.com/163ticonula.html

================================================================================
来源：http://www.xuanzx.com/163qdpcbvzp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lcgpmfaj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kzoxahwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163iyawzbjz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dyyubzpg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fwnukmiy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fkytjoro.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ifavjryj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163lzxklfbz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163bvgfccly.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ndhmyqpd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163peltwxvp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kxpfitvv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tejlljmd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qupkidma.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qdfeplez.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yuxjphgb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mzadzbwo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kfgwlobr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ooidgsmw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lkwnyzlr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wekdgivz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zkvojnhm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pfwpozld.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nabaapuy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yjvegayc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qeoojsuo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gjbjlzqd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163widjzadq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163aynomguk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163upnwqzku.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ppjwrvuz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ioljalzv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ocdwaigs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yjxlwvvh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pjnachwe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ealajyoi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163kywugalo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163tqndjazn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ezlggdbr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163udupdqdg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mamnespx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zufemzvq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jgcmcphv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bhnjsjjx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cvtcmgqp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163astkndsl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rlhmcoym.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rgittyml.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vvkmvzef.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ngwlviom.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lfiegucv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ikqemdym.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163khzqefnc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kubjpgcf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163zawcaobb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xirkudbr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hblwjmpn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wgctzzvr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163weupgyjb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ehvkahht.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jhtahivo.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nzobjipm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sjhjjycy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nmsbdvzv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163siqwjsku.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dcjkjaiu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yihznssl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tqkifwkl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jacqsajp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qhxtmypf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lzrhxsjd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bqppyjuz.html

================================================================================
来源：http://www.sxryk.cn/163cegwlxmr.html


<!-- 参考信息 -->