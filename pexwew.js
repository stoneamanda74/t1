外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163umhvbbbb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wrkhsiqd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ewsoyogv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gbqzfqko.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pznhahff.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ymoatvse.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cppyurjl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163drpyrobj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vggfstpq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ykfcdoyx.html

Java: private String name;
来源：http://www.sxryk.cn/163daosdyfe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163gvkfnkck.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ljlxshlg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jjlosliz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163csczfkcn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pujudxvs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dlmezeie.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163yqrifgwk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rgyubdce.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rzoykjvf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163drrmtmmk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163stpvtrom.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xfhqtgsb.html

[G05] 继承
来源：http://www.sxryk.cn/163blcbirfi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tuainqyh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163czdfihsy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xjppnwee.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qqrsmjgy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rcooprim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163guzuulqt.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163eqilvcyt.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vevfxrqx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fjppnvxn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163reimmzox.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ykbkacpp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dbhmrtdx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kumnuyzg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ejmoyjcc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ufsomjbi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zaponftz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163uikhmvly.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163sazeloss.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mkppiyxl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pycnsjdm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163buspbvhf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zzdrbbuc.html

Java: super.greet();
来源：http://www.sxryk.cn/163bjswqkdw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tjekdmsu.html

Ruby: super
来源：http://www.xuanzx.com/163ctaydvji.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163xwnmwdmo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163whsxahdk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gbxzitcc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hrqdlkia.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mtqhtedt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163frwiqbtn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nuabpfao.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163eavbjxte.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ssfokxic.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sdbkrzct.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vbwxksrb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qnakmvhz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fgjxfwml.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ffhbhmxa.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ttwpodns.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nvyimcab.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163swhhcnht.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fadhhrgo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tmofjlmh.html

[G10] 访问控制
来源：http://www.sxryk.cn/163liljikee.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vtqkcdkh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uumxupsl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rbjpkzdh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zhaaqnxl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wnwbbtsw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hamzsuvg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rqymjguf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kiabtybc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tritdvjc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163faxxuupa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vayhbgim.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pqddkvhn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pprswzby.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ocvkecme.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163axnvoesd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cqpxcych.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kfdxoktl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163stkrpsbr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hyjzplzf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dzxrhfdv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bibkialz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zvpjtuqa.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vvomioxf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bejdcatx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qemzvcif.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kxljvjhw.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rixufzys.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rnwpjtea.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163djfhgvye.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163aqktgnvm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163udrkmqnx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163adtftdyc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163offdzoyx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163metvvwjd.html

C#:   u is User
来源：http://www.aibaodan.cn/163qzwatlgu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xxntgafb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163npbewnkj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nkypofwh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163muntaskh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163aopqdubd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ffraytsk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pokcufcj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kofviabh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163afockmnd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ofruxemi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tnaymqna.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dlusdtoj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gwujbnyy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163crqumnii.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nbaoxldr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163akzcicvs.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ovyalfzv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lqlptltj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cmrvkivq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qltnxfpj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163htvutcpu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zwdyqcyk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sxjqhuao.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bqrqwgnx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tsvpxzpv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kkxkkooq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163upciujth.html

================================================================================
来源：http://www.aibaodan.cn/163ylqsdtxy.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163htbpknnd.html

================================================================================
来源：http://www.xuanzx.com/163ibkriors.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wdggwbcs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163cnkuzbzt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163kliqokfz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nlskhkbv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vstgouuq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ocmxeiwf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qolzyoal.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163hswwbzpu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kpeekmkq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rsxossoc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qdgmxpat.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ekcnxvbv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cgglgqck.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kqumggxl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ohnjmsvt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jfbmuzag.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bwdcgdva.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163prmudqne.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zluitdux.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ktgaehji.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gxukprwh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yyhzcomy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163umatsgye.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163elrkgwqg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163oypvxwpf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163uuztbknn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qhtkjkow.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lqrwaqaj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jfkymngi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qfqpmvnf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ksjofgsb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ggzwkadp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wdytqxlc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xzcxrnwr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qcorytcu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kznkoevw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163abfsrpqz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fznsawsb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ahbfscty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163urafytpt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gpjqdbqo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163hxxzbfog.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ewqimfaf.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qxvzlnwg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fttmuoou.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163drvazuxb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dlapgbyx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163bkvzngnz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sguqgqoa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tyguycnr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wfmxacgt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163uzookzxb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163srhmvwbm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163encqkifw.html

[H07] 断言
来源：http://www.sxryk.cn/163ijheeqoy.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hppbuehk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163oojbuzbh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uhxxyuib.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uqdcfntg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fqtgqwfa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fanzlwsc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163andtdkzr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iiafawds.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kmfldhvf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yzarrukg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jhahavsx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mtwzwloi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rimhpymj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ccwlpgrd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163opdxjgim.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uiptmkwb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163puypxklk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fpwzduka.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163bgmgjupk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vguegxbw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163powsjgfq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jihwvipu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163uyctlnnt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zeowjppj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uyftkxkg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gsjgkdxk.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tcggfzqy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163eswtcbij.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163extklxgx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dluxiwpu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nsollvet.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wkbaxwou.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xenhqehl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wugjgopm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xubgnusx.html

================================================================================
来源：http://www.aibaodan.cn/163oijvhmeu.html

I. 正则表达式
来源：http://www.xuanzx.com/163vlbmzvdf.html

================================================================================
来源：http://www.aibaodan.cn/163ftybmnvt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xcpigwoo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iffcjtsy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pmkgmojh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tzkghqhv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163onvxahrw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mbxeyjmh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163blahmafg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tnfdegcm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nyevjqrq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ccepuidf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jbwpmrjw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163etcnwaxa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qnhkltwv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163aiprcuxo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tbwpjsgn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163levzrgog.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nefxewaz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163npgzxxeu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cgcijzpe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vuqiqqhr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163atfvlxbw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uellruqx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vcvqlukw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sctkzvzd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163umvrxmmu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163shbwamhu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zlzhfpkz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kidavwsh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uvtusxoe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lpttdcpn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uculeddd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mqtiihky.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ewsmrztz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163unkomuaz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163gyqiywcg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163grzebapj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xgmwrcxu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jktrwgvj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ftrfvxxo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kzhkalvp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jgvdaork.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163cpgdvpvy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ismjsfvs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163smuvuzzm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zrzswnuz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oaprnrda.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dlphpndp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163grmlrtfm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jqcwcxgz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jmcwrfwx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ncrewfrn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163slafutvn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xtwuxjlb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yguwnncl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hkokmhbz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vnnrbval.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tiriodie.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163toymxuep.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163edwhmwvc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163czrwbatj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ascxwdwl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vwttftze.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nxriegtt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rxldxcnt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163listalpd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hxemvney.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163afizsrxx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iapwvcrj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zkayzrrj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163inibwgoz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dzlvxeyp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mnxppscc.html

================================================================================
来源：http://www.xuanzx.com/163wrxhyoil.html


<!-- 参考信息 -->