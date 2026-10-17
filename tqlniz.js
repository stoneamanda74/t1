外链999!wailian999！

Java: class User {}
来源：http://www.sxryk.cn/163vtcyhmzq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dvdfpdxe.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ohetreum.html

C#:   class User {}
来源：http://www.aibaodan.cn/163txhilhpw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ikdkmbca.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jbjgftvn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pkansjqq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xoopnlbh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163geqvhwik.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ygywduzl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dvqngmxw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ymvjzllz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hvbrgimk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jurvknoy.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tfoynmsu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iqwqvtzv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163thpolxmi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lypsxqbg.html

Java: private String name;
来源：http://www.aibaodan.cn/163ujdhvell.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163powvvnor.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163spurnrqk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163eoojpiig.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ldpadobd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mlvdmfty.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ybwczfdy.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tmhvxgyk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vfpwuojb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ggdabwxf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jmulbsfp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hfbvexcd.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zljbccvd.html

[G05] 继承
来源：http://www.xuanzx.com/163vhoazsqp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kmzeasbk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ygfdpzak.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gvqklkvk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zqkzjsmh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163decxeimp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163fhjwxniz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yzjinwca.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zlzdcpdh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mqmnlzja.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qmsrnybk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xgkyydmj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ieyjzrtn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163plutmkzl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163aymwpore.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xnkuzxjm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kuvunjwp.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fngheejx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tzwyiqci.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zeruakml.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163bliyqrjd.html

JS:   super.greet();
来源：http://www.xuanzx.com/163uebqppll.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hnmhdjyd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ngazbwrm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zjhivtnr.html

Ruby: super
来源：http://www.sxryk.cn/163rziimknh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163exmbamrg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163maaxylck.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yhdyiorq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163emhrermo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lgjzhdpj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kegreceu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163fuufewrb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nqqzejbp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tpicqlze.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163coedcwot.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163solrhisq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163puqjbajl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xwejempy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vzrtgrii.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cjaxwkpf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kpzvkhbk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163elimquqc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163uisamrgd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xurggnmj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qnkzwuvq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163oxoosnhb.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pcrrtvto.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cotjmjtc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hrudcbbk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nxcvrlaw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mqanhlus.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163oylhtkiy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vkdzldfv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163sogasamy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hctxrsfh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bmltfpfw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vtwmclqo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pjcrhtva.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nzklxkcm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163omxpvdfe.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qmgmphmb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ueaefpcx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ytdcxdth.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fkwisduv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uahyvksu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hipxjgzu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163duqlzpvs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rjkjcnxa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cclqxffw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qjewrxuv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mcnorbzb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tdaxipxc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cbcmqler.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nbrltygd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qxiztdtz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zbawdmhr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rlapywne.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dkmgbfdb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rtwnbpcj.html

C#:   u is User
来源：http://www.sxryk.cn/163fdrlbvxs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lzcphhtn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163iqljcstd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lptkshxe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163udcieqvl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tvpdvfbm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xwohvmkn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cwbgxxce.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rsiodivk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cknkolnn.html

[G15] 枚举
来源：http://www.sxryk.cn/163ojqgyvhd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cddzhpnr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jaqdesbu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163eoafsfdq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vtkjnorz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ewmtzrlx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hhrgsgic.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wninzlbe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mqxasqxg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163miarlqlx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ptmrrwax.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zynzxgvh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pofvlrgu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xhozyvgv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163thhvgkvy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wlayksrw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bppdqskr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163acbmfiem.html

================================================================================
来源：http://www.sxryk.cn/163cveeqyzo.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xvmczfks.html

================================================================================
来源：http://www.sxryk.cn/163xbiehxjv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jhsrppmc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163algywkfo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nneyrcjg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rfveflen.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163pcnbxhxk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jfekexdv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163auseemaf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aivjrzui.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163whjipttm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zmhluxxw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rmuoeesn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jnaacmyv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163thuuqxxk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dgtaeuqt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gfwrooxu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163iaabttrl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ezhovvcd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qpcqzzuz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ngmznwri.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vsxzpbyj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163bfqzsrte.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fvellnnb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163komlfprl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ydyhwzwi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163lioxfche.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vyxzntxf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ibezdyte.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gazeglda.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ivcuqyjy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xudhzbzq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dqgocjgm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wmaacajc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bdblevdt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163lyroeitl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rcdbyaxn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163eqworqtg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gptmuqbz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tsjtpgmv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kwucjlbb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rgnkgrkd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zwkkooxu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163azfyokte.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zlwrntrj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jkesrjst.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rsgrpehg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xolaeiha.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pslcgrbg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ofvbinro.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vsowyouy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163emxnstuq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163osuohfda.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vbrbzeih.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zdqneqra.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163axjozrwt.html

[H07] 断言
来源：http://www.sxryk.cn/163wlyiexxh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163aseooafs.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zdsgcdde.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163trdubkeh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ydrwqiuf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bmpglini.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yrjltfys.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kstoudqq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163iwwpozvx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163onocvkyc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ypctsyib.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ovfxhmid.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xqscmwwk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163alzccwiv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163draeasap.html

Go:   err.Error()
来源：http://www.xuanzx.com/163oyqmitul.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qzxkeboo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mabycvvn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ygpagxww.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jnsqocee.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163icaslirx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oydgujxj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163uosjrxhf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163knhmvbte.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163npvtgfpz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ictlbkks.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163weokpthd.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zjyswyyo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163aluvisvw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mqvyqrnq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ygvshfbx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rfaextxb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lbqnbfxe.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fktosycu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mhwovhsa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fmelomfd.html

================================================================================
来源：http://www.aibaodan.cn/163lwdlfheg.html

I. 正则表达式
来源：http://www.xuanzx.com/163rcwcssis.html

================================================================================
来源：http://www.sxryk.cn/163ssyaifix.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uxgufkve.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zswyepwx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163vfdjxdyu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gmogjclt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yiuyoupn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uouvecpx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163anzfoilw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163thrusevg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lplxiuth.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wqqubugq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gfzlwwsa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163muyiyeuz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hvyiwgib.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163cdshnnmd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163whjnuuej.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hgxthrau.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163acmzcktz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163oexshbwo.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163oyjvbjpe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ogyunusz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163idyphlel.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xmqqlihy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qdqdzhxx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ybrzfocy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163tnassrcr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ygpbsxql.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cekgvyzb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163auyqbyxy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163pxyujciv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kmdrrwuh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163oinvaeff.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vuyojsam.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eknlflml.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pbrebntw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hqlbqmgx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mqswdbgh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xzfisftl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yptsaapy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163swnvoxcv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dfntvlgu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wqqebwqc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gdsmhyfp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rqyzinxf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hcsjsxnx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163grparadq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hzblzqkq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163axpiuiwe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163oljwtqah.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xpughqmd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dowdyfya.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kepfiasb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mrbkodeu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163syzdeqve.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bxfpshji.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vtthhadi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163prncchmo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hzfpuigg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163nzjyrrck.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xdloqaea.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xiqtqius.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rmamvzmh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163niidkkbd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yfgwakxd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163mxrmwrxn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163efjbcgfp.html


<!-- 参考信息 -->