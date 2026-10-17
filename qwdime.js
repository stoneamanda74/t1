外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zhtpbboa.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jzvcllie.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cudinitp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ecxdppkl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lktgnhxg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163yxormxmm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163haqgigyl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dstcsuhs.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163obzorfex.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163sbfnoirb.html

Java: private String name;
来源：http://www.xuanzx.com/163aqopokmk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163htatxgyl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gweqotls.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163muehkzvo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ivobsvnz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pygamtgc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lecyuzbe.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tfghbpei.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cswpighq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pbqgkrhu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163aufasaqr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163smcohcbu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dsdzanpv.html

[G05] 继承
来源：http://www.xuanzx.com/163futtxuwo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rxpfytrs.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163adahuaxf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fvkygxxu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sqlgnryr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163grcoyphv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163oavescdt.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kfxfgvwr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dgpggugr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qkikljbu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qsoszath.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yzcksovv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ahmqzwtm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iknvqeet.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yfgmahvf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163goxeoczh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163llemhobn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lnzsohjo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cgkthfcs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163peegrerv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hyjhuolf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bleysyor.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163khdlbaqz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bwawgsir.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163wgqbmiyb.html

Ruby: super
来源：http://www.aibaodan.cn/163sugbrezs.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ogvqwxlq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tusnqzmg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ukywfdmw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uzilaerd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sxrjglid.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163uiotelov.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jsuwwitr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163szusrndh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vgqocvno.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rgmbkexh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163pfwjveom.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yafrmxgk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163aywinqsj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pklecpkk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163texzrbcs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mtjxklxx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wuenoghw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163udxxsdnk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163izjbadkg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nakabldn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qvwfkmur.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jftqwjwr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ntseamop.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163yqynzjgx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bwfarpxm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ahvmtwgq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tpvtrosj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163muwpnmja.html

[G11] getter / setter
来源：http://www.xuanzx.com/163djrtowgv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163dmsidvci.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dkcabrgw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dtfcplpg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163frqmuzhs.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163llaxxbzk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163czhpntiz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163eqwhrawe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rsxhcwuh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163eyqugots.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fuiibeoq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tdywwbgx.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xpmfoqxk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kviabvjn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cphagbjz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yajeocml.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gkyujinl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ihovqhcu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163byieawan.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163uvyotjpk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cxzrblcx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163wnfjjjyi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qjeukuga.html

Java: u instanceof User
来源：http://www.sxryk.cn/163nijdzeun.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ddjczkyg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jdrpctjk.html

C#:   u is User
来源：http://www.sxryk.cn/163emhlmfmb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tfrrqlph.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163avckjhzf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163hbntloyi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wzyeduor.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163foldiogs.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wfzjycnn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ehsxauwl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163odsdgoyt.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rzlfsrit.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fpwsidhq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163pyaeabzx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163oreinyjn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jqzwymiz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163otmnrent.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dkattzzi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wajorgrv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zsfibjwm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163whzkgqyp.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rhxcnwsn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zkloitmq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163olznpbnq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mrwoyrqq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fdgqckso.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pggzjkux.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gnuwafqb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xvlpsymh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ulohbobc.html

================================================================================
来源：http://www.aibaodan.cn/163juglbfvh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163msevlkbf.html

================================================================================
来源：http://www.aibaodan.cn/163esaqkhwa.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mkahosvj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fbxohyha.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gztrqrqb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ueivveym.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163arnhgrnw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dgmiclpw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lstolxav.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vqfigrei.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ewhjinaj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pujkoirg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lxfpctqm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pyguuddb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oiugqpwx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cqowgbti.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iyassshg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yaapkprf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yxlezjhu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ombmkfgz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vncvjlya.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163oiaeudve.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hhmpffxe.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163krtlpjha.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xoedmplr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rdktsuif.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lsxijpvu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hxhhxvdr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mznitugb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pmijnoed.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163afivdjlx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163juznksaf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163eucdefuv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hipwikuo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qpfsrvrq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ikbiygzf.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rgdhcfgq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163eiuumssf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rkyeibij.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jvngfnjl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jqcrwhta.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bqxtglzq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qxpxmoxw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tyspqjkq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rqnkoqrn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gffbgvrj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163udxkgpjg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163buvokhdv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163dotyofwk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nwmdoqzs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zzfozhrn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kmrsusuq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ajfqiwyf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163aqrlxpvx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hhoaloac.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163iuoflbvg.html

[H07] 断言
来源：http://www.aibaodan.cn/163ankxmeyu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163npoyuevz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qeixxneq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hhyzplqg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iuberarw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sqsmwudl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fbhblthw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fgcsevab.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zedsluxd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163okzrwhtq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tmbrkokg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fkcupana.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163eibocfse.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xcdsgbuu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bgubvjkj.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hqjxpqpo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163civlkplb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bxdfyoiq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163senxewdq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qordzrkw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163syhruysh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wgyyiqgh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nnjiteic.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163epjsiezr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mftehxzv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mycnnags.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mrtmmkwj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163btpoknmp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kvvnnjtz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mjsfetuw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fecezzhw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jjilpmiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jkjhhznl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163udpachzr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tqmbsolo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cillumyk.html

================================================================================
来源：http://www.xuanzx.com/163ohyphwln.html

I. 正则表达式
来源：http://www.sxryk.cn/163dfaxirna.html

================================================================================
来源：http://www.sxryk.cn/163atlbiquz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163zyfuqjjm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zgjrftds.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163bpreehml.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nhohnwsf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yobuyxrq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yrgjixap.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163licvotgk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163biysklvf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163njdemgle.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hrzpfnfz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zcpatgsk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163uwytdytb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zfifjvkc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lmvhrzus.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ykluedfe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tgexeyhi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mqulwixa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jkchogsf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qxbpwkuw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qdmohmzz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163crqmuphe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gslihmht.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hzbipnkz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ldzqxwzg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163waxiuhqy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dkxmzjzs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163oxhjyiwc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ebnglruq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fsebpsmr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163nywxzgwx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eenvyxlr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ooygsvxc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vnfyybkt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fbiaalyd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163grzlfbtp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hbdaogvl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ogqqpzxi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zfgorowr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hmtilapa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fkaglwjp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ycgtzwiv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163esxnicoj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ajfwbvar.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163upakszip.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nzajbkza.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jrrvzbzo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jmxdjptq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hycccqzy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ielpbwsl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wxqrcpmu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rtlhnrqh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163igxxxhul.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nuioupms.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qtagijde.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cpqpkgdk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ptmgcabe.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163puxyekdq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fvnmwisb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xhxxixxu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gofgdkku.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lsanzcov.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ryiepopk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vualzfsn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fazmwjsm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qkeqpnum.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vgygefek.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163htmeqyby.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163opwqybso.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tccinkks.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163brguobby.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163spcqibip.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163osdtwood.html

================================================================================
来源：http://www.sxryk.cn/163ngiebadk.html


<!-- 参考信息 -->