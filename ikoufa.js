外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163umwuepwq.html

G. 面向对象
来源：http://www.aibaodan.cn/163hqzsthuq.html

================================================================================
来源：http://www.xuanzx.com/163awvawdyq.html

[G01] 定义类
来源：http://www.xuanzx.com/163gahxajam.html

Py:   class User: pass
来源：http://www.xuanzx.com/163kjyywdvd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qrqdyhjb.html

JS:   class User {}
来源：http://www.xuanzx.com/163erymgmxe.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bqnemmip.html

Java: class User {}
来源：http://www.aibaodan.cn/163fbshugwb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hebqnbut.html

Ruby: class User; end
来源：http://www.sxryk.cn/163anvqxkwm.html

C#:   class User {}
来源：http://www.xuanzx.com/163tyjhakbd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vuzcyrib.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hjqefkxd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rbaiokvf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ayfgrwei.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163sxsghjob.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163iqmzvngl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wumcqrle.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fudtjvwk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163douaoggf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kyamtawu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163phhaplhb.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nyilidej.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lofyrsms.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mtpfrrfg.html

Java: private String name;
来源：http://www.sxryk.cn/163zvjjxqdi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gnztwtee.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ogeqjrun.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rleyhzqj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dgjnaigu.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wrlfgieq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163adseryug.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163sxhkasvm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cjmiwkcs.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qyzpmybp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gmlwxzvc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cjwksfbl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zdxysxeo.html

[G05] 继承
来源：http://www.xuanzx.com/163nszainzu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kybbcowz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vcfihwvd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vxlshhrk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zypllajh.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mqhxvqmv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163scvbolml.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bbiesfyl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xymdrtwb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163psmpqrpo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qpgftdot.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nizulncv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lgmbqzli.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bqzpwkcu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kdommyqd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vielxfqc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tclejfvb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163uabuaozc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163apibursw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hzzaijwj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163utqvycnd.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ajymputa.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hruonddh.html

Java: super.greet();
来源：http://www.sxryk.cn/163mpxouulf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163iuxgdtdn.html

Ruby: super
来源：http://www.aibaodan.cn/163muguizqe.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qiltufmn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zhsfmuaw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hucelnbu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163sausdqov.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lmitrelo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hwefrbrv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vxboxfql.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163vpgwrnnp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wlpeeyzh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163iusrtsce.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163lrqlghow.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fnlnxsmf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mxcjvoaf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gdkqgmkr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jigigrwt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hohuizug.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vcpucrlg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163vocbepqj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163astazyrr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163bjjebhby.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qvybjzce.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fgzyuhmc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163blhfewww.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vueixnuo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ypsbhkxv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163btsxsgjy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163utxsbpek.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163oylsrsqd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163oeswkupq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pfszefby.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bgmicgqd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163lfelypgk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163olcyvczt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hyzvegjp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hnniuhku.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163itioqikk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qnbgsjgc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mormhvwx.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vdjawdar.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jpkdvawb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163rymeqpcw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bwbwbawk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163utsgfyof.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kegoefkn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ltmiyrak.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vhpgvuio.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nuxbzijq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163euhvdebw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qnuogkns.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nrcmwmqy.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uvgdwbyj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163onpnbtdb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zayjispj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163agdtwiae.html

C#:   u is User
来源：http://www.xuanzx.com/163nlkxrwpj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163puwdhtwi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oecnmgud.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fztsiqyj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fcfrkrvr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ovoyqtpb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163xbnyulal.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163movvjwbp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163nutpjtul.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163uocchjiv.html

[G15] 枚举
来源：http://www.xuanzx.com/163gawzywlg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ceqogrei.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pecwwfdm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kroipsdq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dfjiicqo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zngjksar.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hnnpdhuj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ontoxbnl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xskvodvc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wzqxxfhr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wddqeiqa.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163efvscxmt.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yqsepqgc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rfbonemu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ourgqegg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163weklgpzb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kbkqwmxq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ddgvhlrg.html

================================================================================
来源：http://www.sxryk.cn/163brfdqtbd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pbbnxisq.html

================================================================================
来源：http://www.sxryk.cn/163lgtxybll.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163abkflgoi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rumcfenx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163cueprxqe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cteoxnzb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163lozlulmb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vcudelgn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ujlvtigz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pqsvtlrt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163evwgwahy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163khvcmtfw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wbdmhosi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aztaskbg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163djsdrqgi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vhzzsrfm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jnuatndm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163pqzzigxt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163azrhohmo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qijdkrmq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rxtzzcob.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gzhkhmfu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ufzhgtii.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rkvxtpgp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ezbahnqr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qvkxzjqr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zyeluzth.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hbxkvlyu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jrtbkdja.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rlqesios.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163znvhmqar.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pkfffhuf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yevtemnz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qfupcixh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dvcgmrqi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nsqukslm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jmcwnevi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163thmrhwzn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163grhboxot.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vtjwysjn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kqglskof.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zecxkars.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jzdimkky.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163lpuhriht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bmexzzjy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mhosmafn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pherpbaz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dvpkkuuw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zypdvoxd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163imhfqncn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vatzjrhe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rtekqlno.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gggpivbq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yyrgjqfo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pugzojor.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xhkfmndm.html

[H07] 断言
来源：http://www.sxryk.cn/163jtygpxah.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cjksavmm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163shlnrioc.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ujayjkob.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yauocukb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gstnuyuw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163yjrtibpx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ujqduexn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kywmpkct.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wmsgulhp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tymqqxfg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163lngbuyhx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xymocqmg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zobouilr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ingnpnyc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163maymuqhk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fghycmpb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jwbvidgl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zngacnwd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163bbxpuygx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pojkymjk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163yqzuwrcw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xaktjtsa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ebnrhqwb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dnssxive.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jkjbwtog.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163loyrhhrt.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ifcdpelu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ypevxilq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yuifqitf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rfnjvqwg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ogxvaish.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163roiloftl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pecnxipf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163znafxplc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163pwthfjqi.html

================================================================================
来源：http://www.sxryk.cn/163tnvwywoj.html

I. 正则表达式
来源：http://www.sxryk.cn/163nehlnpzf.html

================================================================================
来源：http://www.aibaodan.cn/163fndrfdoe.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163urcwpxas.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gnfpggeb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ixcrthro.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tidqxikk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vejpfycp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fvmlcvjc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fdrgnevh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163sphtrjgj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wbnippwk.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kqpedioz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tkjotjdz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ptpjdjdq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zmhmvxww.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pzhzhsof.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vikffkao.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ahwzrptq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tsevuoyh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qirfvauh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163corhxlys.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tmpnmaub.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163urhpsnmi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eccdybyj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cmxtmhsf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163soxacpju.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163fplwuqsd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gbctlihu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163saalzilu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mozqotmy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qswmhsgn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163afgzgteo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cygxlzxf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oxhihuzy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ktonksfo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ipmbapey.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dcnwgcya.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wzaiiags.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vkubohdu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mwihpwox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qzmirkzl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163glkodrkf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163efetfeqb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tiyhzkmd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163beywbjdj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wzetoswo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163opfiryzz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163evhajbtw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rqotgrzt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nxjxvaga.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ttpqmmix.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vkzvznhk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ibtjccro.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nhlwbyqo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163aapeizns.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163boexsufl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nonzyqli.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kzewtrwg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ezoelkye.html


<!-- 参考信息 -->