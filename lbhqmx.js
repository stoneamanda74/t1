外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ratqmuwp.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xfgvnsyd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ilpvggiq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yshplbdc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ghxtcotr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163urfwfqip.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qzsovtmp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ajzuklkw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163uxposwoj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wmqmhoqc.html

Java: private String name;
来源：http://www.xuanzx.com/163lvqzewil.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wjhsmhpg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oqlzphsb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qlqxarav.html

[G04] 定义方法
来源：http://www.xuanzx.com/163oonlqwad.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dndmuhvk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lpgjfcxt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tuejibxk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nkgoxcdn.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163egtkzmqc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fkhtfvaq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qbuwiyzm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pcpbjigc.html

[G05] 继承
来源：http://www.sxryk.cn/163gyjbdgim.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kljlanwz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vxmvoeun.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qbjjeigl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cdevtpws.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yeocscjb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ksnbzrgn.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wntxtznb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bsjkhirq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ulbeojuj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lbnpldmz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ubvsocsn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cdtvjfvs.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rvdytiwm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rinumeoo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163cctutbsy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lmzwpslp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ljkbroxp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ecxpncyb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pycmhxdn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fionkojh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zpgunyjt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ggekavhf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163spgeibmz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xayuxdqz.html

Ruby: super
来源：http://www.aibaodan.cn/163mifeuhwg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wtnokstu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ocdskqgv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rtunvewe.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vjmyvqex.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rjoqykta.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163umpkquny.html

Java: static void f() {}
来源：http://www.xuanzx.com/163fftkktyt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mwjrigvj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163stnzyqyc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163iqfgrmgj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wvipvqqo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lpdzrdmx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lnghnbty.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qmtqvwol.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163iebsrwzw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ixmkidrl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bhsobnko.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zwltydds.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163pleykxdr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ihochwjy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mlluwlcw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163owvqewom.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163czodtdeo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163riwjgifc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yopihpoz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vgpwruja.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163juawpadp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wgdlzxsm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mofmhucv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tqiveuct.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yercjbns.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jgefdxar.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dbvmsagd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fhmhbfqm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qaajkhvv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163vsxeixcr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wuxbppcx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nuwefqpd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163twtqpncz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163sfvrmpzu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bqjkdkxm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163agdqeedb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163snhxahpf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xseslipp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ezmyqadi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kbwhrkoh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163uhqlzglj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xpvqvxol.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163oraqbvuj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mqhlikgo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ztzlvzgo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gxsbciob.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qevfjcpp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163edukjcui.html

C#:   u is User
来源：http://www.aibaodan.cn/163ccvuetih.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163aambspzn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163recvdexh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163smsdeujr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vogpazmc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163eybucgca.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bqzyslgn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163otonmlxy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163calzgqkx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yxdqomot.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xfavffld.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xmumfawn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163roalrzxf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hlxhvfjk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jtrxrgbu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ervnbcav.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wdkwobnp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dywkwlpl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163aviilzpi.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fxlkciwz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sucxccro.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wqxcbhmu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ovnikrrv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gspampkv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163nzinoeei.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nxzdexzk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163upqjgweb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nnewzsby.html

================================================================================
来源：http://www.sxryk.cn/163qvcsxxxe.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kfrtkxdy.html

================================================================================
来源：http://www.aibaodan.cn/163xrlleuxn.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ybmqoqry.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bvyimxpd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qkveziri.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163llpdkshy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163lyrdfnhc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163whkwrcvc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zmugadwt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163arngsvhk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yfkcffhm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163eirwhvfr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dkbmtkze.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wlcajygm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jztrdeqq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pulqzcbw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rohmxvla.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lberrmdd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163aqdsdfow.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hzvdhjxo.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ettvzana.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163piaanasq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163odahwjvw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163birpdnvc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fhixmcfu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163azjeaqdi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jaqrwybh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gackgmyl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rjucehzh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ecynqumi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163auwhcywh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uzzttcgd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wsdvcbyb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bqlyoome.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iyjmmedp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jbwrposr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163swcimhcr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yrqeevzo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kfbpvmub.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ccwngxbc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hxmjrlet.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qkicnrxn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rvgrwtfa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xlthcxaj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ueqhkpja.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tcbljhzg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hkptedtx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zpwaaetw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163viudyfel.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wiijuooe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ozpoqvhp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kfmpagxv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yasmupwe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vqmutyip.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iparqdov.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wzgsafvo.html

[H07] 断言
来源：http://www.aibaodan.cn/163lztlcyjy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bhitckgo.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qlcmmuhw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ssrctles.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hjjucmql.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163pbblxbua.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qhwsxjzs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jrtywxtd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ipsmtmwu.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ilfauxky.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163sljqtcwq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zhibfbcn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163bitwbsda.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163typwznty.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mnkdxucc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tuimmhea.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ihmwqfgh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vxtxtdtn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fbxzfpxe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qgubtdxf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gokbetgb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163keinhfnk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bszosjri.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163lvacuqoz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163emkdsmre.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163exjpnjjh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hpjfihxa.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kmpjsyfp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163owhxakqp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fvgkpxdf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ixounxny.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163trnchtde.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ulxlnnvx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hftkoejb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163skkkpzhe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163utobplyt.html

================================================================================
来源：http://www.aibaodan.cn/163etmtuxyb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rpbnyjwq.html

================================================================================
来源：http://www.xuanzx.com/163gegqntmb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163gixbthre.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qqblchik.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ucomnoxx.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lrlkznjg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163geylhlfs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tvzhnqzf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fwbtrfuk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163grppcjrv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163sglwnlbk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163nwccshil.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163idtocgav.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163guvjmpdh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ldiirpcd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dhpaphee.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qkuljfjn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gojabamu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ckwmdpcl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163aabvktfv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qcdkxfxp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163byxrkhrc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tiiwhjnn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zwrmkvjf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hpwmaech.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cwimzuxs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dtghwgvb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163llyqbtao.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qkqllwgk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ngcetqez.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vkilzqhe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tpttohnn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vopfbxvq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163syingvbs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hysrwaub.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163yjexatrm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163rczcqxlv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wryywdqb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pcqsqiov.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dzgenkbc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jrrkejvh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163svnelyua.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163paucgnit.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tubxrawo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wgydrugz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uvyqyzqr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hgmlvfhb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163otdkspax.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tezqmgcv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kxfjsjwd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qnbqwsst.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bafjsrtt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dnxnflth.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163tqykpezu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163oajhnxep.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ltfndwit.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163aylbfyig.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jmpkjkau.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vsinnhlu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dvfbrxgl.html

TS:   /error/gim
来源：http://www.sxryk.cn/163brxxyarr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163khwzrqtl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ftvhmmoo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ufinyddb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xtfujktv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rkfslhpe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163azxgkcnd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lrqlokvk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jgxpwvhm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tdhiampd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163aebiimxg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qqjrjhep.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163inuexjsu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xqqlwrgy.html

================================================================================
来源：http://www.sxryk.cn/163vertrrte.html


<!-- 参考信息 -->