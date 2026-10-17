外链999!wailian999！

Py:   class User: pass
来源：http://www.xuanzx.com/163gfwvplgv.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lwwxvymg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163snvxqdqf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xsbgoovc.html

Java: class User {}
来源：http://www.sxryk.cn/163mqvzxcae.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163fdmbhezc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163apzkkine.html

C#:   class User {}
来源：http://www.sxryk.cn/163bzdpbsvb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ddwduoei.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hvnqhckh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163uelarcem.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163avdjvtqy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163imfjtjmy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tgjukwnk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dnvvjvsb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pcofuwgq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lwmugqaa.html

[G03] 实例属性
来源：http://www.xuanzx.com/163plbhbdpa.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163idrdpwer.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jfonuaga.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vykwzhsr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qvvauvkt.html

Java: private String name;
来源：http://www.aibaodan.cn/163gglfkmph.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qtxhvlka.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vfelabuj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cyjtxofv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ooolwoaq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xoacyfth.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163udraepeu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ggwabzaf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163smpkudmg.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pbhpmnuj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163adopravi.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mfacjyzq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cqiinhmr.html

[G05] 继承
来源：http://www.sxryk.cn/163ttpfssni.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jqcjdgih.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163spsthbuj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163marsdotv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ujvvukcg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163snfarhmo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qqkmeapx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iduorkjg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163assqjawp.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163edaxyaad.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163suinyaub.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qzezrgbz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ommrqdum.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zioxkqdh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nsjramoz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wdynmjiv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163unkjdvez.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163aabjbvmx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mtqemkpm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163iweiduqf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yaysjadm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163driuzder.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rqnlficm.html

Java: super.greet();
来源：http://www.sxryk.cn/163lckprbiq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163emabbjhj.html

Ruby: super
来源：http://www.xuanzx.com/163gqwumpkd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vstppube.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uhxhayuc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163iooeetee.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dkoincus.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nooeqnke.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gjnkbguu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qijnwtzs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yipoihfx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163adtqbszd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163oojajyfy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nvferbgy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163glmexrcx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fceqaghj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ivsafknv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mjubqfnr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gqijfdat.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kiqszlro.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163itrdugvo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gjzfvcen.html

[G10] 访问控制
来源：http://www.sxryk.cn/163eeqovtop.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uasjhqqi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mblobcwd.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163eubrhwee.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ysuzawph.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163puuypeza.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gvdhyzwx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163clirwpta.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tnxtzxyk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163pbcjrhcp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ndbefffn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mscugesn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wrmimqbv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rrrgnxiy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ejzmffmu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cenbexiy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163xjvncitc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gjbbeqca.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tvntzqvw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bhnfnjic.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ujqedthh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gpizhskk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xuaxzafe.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163onnslibe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tsbtugyr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bttuvszn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kenbofgi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ggrrvnip.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qqmmijjf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nxiaoymc.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fjgqsdru.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dcpmorhc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ezedoxed.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163iipnkrbm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ssxasliv.html

C#:   u is User
来源：http://www.sxryk.cn/163icbygytb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163yvfkexup.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yskliayj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163evnbhxha.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163vlnmnqds.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mcgjrght.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163uzhaadxq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rshjrysc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163krbboptj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dopcldfj.html

[G15] 枚举
来源：http://www.xuanzx.com/163jchfsxlt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zbeemowd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kqhmfmjc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ksztotla.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yfoysxhh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163gcgtpgwo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rchxwhjo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lgbzovoi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rratfptc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xexcpydm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rwovjfxx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ktezbngi.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ckdtvfmd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xkpgsndr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qtmxnmnx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163grzmuepd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163oscolbxd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mnxderyc.html

================================================================================
来源：http://www.xuanzx.com/163pymqgrqu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163axbnpmla.html

================================================================================
来源：http://www.aibaodan.cn/163azqmsjld.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ibfbqfcc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fdxipyjv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bspaozbq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jnbhmdmz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163nzwgvrsl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163fkwsrlue.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ythbprws.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pihubiny.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ocfwgeuw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163phbrpifv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jmkpurcq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163escvebkf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163frgcugpa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ygmdjhld.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oamyzwti.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163cnmkgekh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tmizaiqv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zsxcqgeb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kvzikigl.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ryyzzuqf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mirmdtvk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iyorzdsq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cticjkqc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163odyrfjqn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163uvfqgfcc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163eeziqdgc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zgmsutxy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fxfnukgx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rurweusp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xbnhnuax.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ssvfvvof.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163myuqtpzx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mfrcmxsd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vwpcdqvw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fermmrsq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mpesymhf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163klztvxcy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gzermxsi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163sgtziisg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mviynimk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uscdwrej.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163sopcuppe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ywgmxikm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163asyfhwah.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163isyrgymr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nvlnxaag.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163daiughmt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ofvubafj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kbymxmkt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163brfkanmd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tzvksfbd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zcuhbzpa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jqrlcgex.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dntrqpbu.html

[H07] 断言
来源：http://www.sxryk.cn/163wtyuyqft.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gnmxvtzx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rkzbogcs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wkxcbfwn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wwhlogtr.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ayurlnet.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163logcxrvm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163idauwuvv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163yltpycgl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uzxfwnjg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vcbjcgoc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163dqyoteie.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yyaegzeo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163aieuionp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163phbhzekh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nvgvtllf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pkswzryh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cgkuiaso.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163xwdjkwwp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ihevfdbx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163knbltgcm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ptkgrxym.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pjqjcikq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163nrmgldjx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163dezaxirq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163yjdeklgz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tdvwhvzy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rmsqxaiv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dmtlsstl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163whhrocpa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zpilnejp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ibwdldhf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163znphdhup.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dihuespl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fmjuyrcl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ejdxcale.html

================================================================================
来源：http://www.sxryk.cn/163jcslocjg.html

I. 正则表达式
来源：http://www.sxryk.cn/163lszwqgfy.html

================================================================================
来源：http://www.xuanzx.com/163mfwkhmpa.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fuqgeisr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ejkszjee.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163dzximndc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pjeyxyap.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163efmkbvmi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ntokfjyf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163pbdpumuz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tfwlwgqj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zfitpnup.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qyncvkzk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vojsfrik.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wdqgumpn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sftsmelv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jtwipdtm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rtflmeze.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zkoizvqo.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163punshbjx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ripmfgfh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kzcqqces.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xnsboqqb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lzbrfoii.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163oniwyevo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163dconnmsk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163edcuajyr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hrmlyjzt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163diocriwd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163irtjlnkt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cuysstxr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163aevbuftf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jpqxrtaj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wykewiig.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjmtbxmb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hvuimkfg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xngvrpdd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uxflmzch.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zgubqmxc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cyyojewh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xzexdlxh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lfqlxhch.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kjiyejke.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163izuacrbi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ztnqevmx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mahouggr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vufxkgcn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163niugdgwj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fchatrum.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qvhymimx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cdontmbw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bktvlarz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zpiwunym.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163egopmgvh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ybdwxizj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163moopnzns.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ktrrgapq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ijsuexwe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kaiuguvx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163bmtesrri.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xcblapyo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ngddrnax.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163caqexoke.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uvgjkiad.html


<!-- 参考信息 -->