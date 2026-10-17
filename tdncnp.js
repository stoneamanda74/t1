外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wunahlam.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vnwgwbww.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163sxzazbfm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bgtrycmx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163xcxobhvy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ufptccdz.html

Java: private String name;
来源：http://www.sxryk.cn/163juwfdmpi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zevhveig.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tlbazqcf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zkuafhhn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ifgdhueo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163eofmhndw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hngattpo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gfhgxiax.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163bqixsjdj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mwzzitan.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163akdmzpif.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xbmhihvm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ujybspzu.html

[G05] 继承
来源：http://www.xuanzx.com/163dqmdkama.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oxqrcydy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ttmuxext.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wetinylz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cmcwnazf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hosjpbgi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sikpmzls.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lddsiqie.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lufbquii.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dzznfwil.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hdnukoyc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mbsfrpym.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ccuvigds.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nsvspyns.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vgthkdjz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mgbrzgdo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mchqclvx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163iafzppbv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wfsontbw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qxjzirdo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163leuczwne.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hevnvjga.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bympsqsm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uwvelyrz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jwkigxge.html

Ruby: super
来源：http://www.sxryk.cn/163klhdqxse.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ufblzdiw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ohyeeqhi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ukaxathu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163pzbzcjal.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kvccjdaw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xlwafhke.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hcxybkce.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gzdptauy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163trelfbpw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163oxavbxfh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vgqzzqld.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163bfbkvglc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mitisazu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ptwomffd.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cktexkkw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pxkzodly.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gyojnrzk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163eqfziszp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kuuduxfa.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qjkkyiwm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nzcjlnod.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yjtgfagy.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nbipikig.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163iizerqwr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qxftswsw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163aklgudnu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ivuxzvli.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hqmfplwu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163pgquroqn.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rboztkia.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tbbtvduq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ilmcszby.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dkxctznh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163orvvydst.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jpzexfwv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163oxiyfhtj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vyvmfpks.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163nkcmxtak.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zbygaxzg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163dtufqhru.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cmknzbjb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bpfvrxqo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163olztiqah.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gkniasuq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rihsrflg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163parwmscg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zdhvlyvy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dbmvxyxr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gksgwhaq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tafspdtl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nwhimaeo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163imtjzlgx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163neulvsuf.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kscqncvo.html

C#:   u is User
来源：http://www.sxryk.cn/163flcilkqu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163nqngirfh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163snrbghoo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lszvohow.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163plaewzrz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kbuevhyi.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vcwukkue.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yvmppxkr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fsoapuib.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rpdujwzt.html

[G15] 枚举
来源：http://www.sxryk.cn/163uopjfpgf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fngiwgng.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bcgeqrek.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163yydrdlda.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163losqnpsk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163truazbzd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163zdaunlis.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ryrpjlhd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gdsfvwua.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jqvtrmrs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fakkjrti.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ojwpvtwp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tqmmzdhh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163auekstds.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ymynhavw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dtpnpdwj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163padtodqt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iqlzkmij.html

================================================================================
来源：http://www.aibaodan.cn/163zmfngqju.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163afbmpvfh.html

================================================================================
来源：http://www.aibaodan.cn/163jcqmixrz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bfopjqog.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kbhjechj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dncgdfhg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yazgofuc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xsjydvvx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kokjmirh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oiodaiqt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163otibkjqo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gucrhfjs.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rmldpbqh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163aycffxgl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ejfyrxtz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ynnmlkjl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hrqycumk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fsbgsope.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zzerkmws.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xcnqzobc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fwjzxdzy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163aszextfs.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nsehzqid.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163smizbhdj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xbhywjki.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gwvenake.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jnrrqkkv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163tcfjwuec.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oxbfmudp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hioqrdgb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xiedoqpr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tstzhxon.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163egdnefkb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gjnfstno.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fuarngnl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rgoyhjzc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163afnzxpjd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163gquuicmt.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163grqnzyeh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tmtoyxan.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ydpzyxsw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kjtgabor.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fhvjxwot.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rkvmlshg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ihavddog.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ugzxmrqo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dmrszsni.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kjtvwgfn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gtqjxrzq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163roiuvbnf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jfntxlhm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nkgtujts.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qftjkdsm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kdboafoe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163geqxusoj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vlshzgph.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qsvbtjle.html

[H07] 断言
来源：http://www.xuanzx.com/163odmjjisb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163yxiopxqg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aprduvlv.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qgrqqxux.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oiydxicb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xotokfxy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kwlwdanf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163elneqmxy.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163otmjpqvp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163suxcaeob.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163traoxyui.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gwrfqamd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dmjpibex.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ugbgnplg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mrdgustr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tchtiwiz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yhgdzuiu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qtoahmuu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vsprwpsd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163uhlhjqmb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hxezfyma.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gqieswrt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ntdcutws.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zlhwbbjj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163yeizmcpz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pbfoilvc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vlashwhl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163cldaoohn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gsyuqtwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163akwrrmue.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fpwqcxoa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uiowobqm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cnskvdkz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163twvxhmtd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kavnjthj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rwkfqhjc.html

================================================================================
来源：http://www.sxryk.cn/163wshdlljg.html

I. 正则表达式
来源：http://www.xuanzx.com/163cshcjukj.html

================================================================================
来源：http://www.sxryk.cn/163sfklapft.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163exdjwwqx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ldjpykrd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kxsspvbp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rymjdghi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nqgltnlb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dsyloekd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mxabuuqa.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163svdamjzc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rgwscnex.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wmcsuxhv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yeyjjgxv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uazyytcq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gitbtgms.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163fesufkqe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fhatqtll.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163bqqayhyc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fqrdzzje.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pkyhihoa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163szcasfen.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163stamwqpw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nkshssko.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qwykwapq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bwaebmol.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rtfuarxf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ommpbtql.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vhqnxzdh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163htawfslp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tabiyhpa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uynoaasw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163exstzyir.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gallupfb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bkumatiy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ggcjdcmh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jdlymgyd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163weqxzlio.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163wkcjdqdt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bwpclkkg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qjhccdqy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zrgkwgoj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bmiwpanc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hzpobtpb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ycomdcnq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gvvhwxtu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lhavstuf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163enorlauk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rvujpnwv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zhnipynt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ohkflqlg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163iiorwrkd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163btxuchtk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hzdoupbo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ckqzicvz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163aiodpejj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cvvkgmot.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tflkcucr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sxwyjitm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fxrcstlo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163thvsnwvs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jcahlmfb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gavghlhu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kkyavpde.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163kexsbonz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ckfzjmls.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bxlzejab.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jnyczemp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fbfpltgl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bcmiibzv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fqpzumfc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163otegthwm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hgqwxnss.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163kuoacpos.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kqzylqdu.html

================================================================================
来源：http://www.sxryk.cn/163wlulipph.html

J. 日期与时间
来源：http://www.sxryk.cn/163puzfyroy.html

================================================================================
来源：http://www.sxryk.cn/163hzxyzwop.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163hrlmkyka.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lpfythuf.html


<!-- 参考信息 -->