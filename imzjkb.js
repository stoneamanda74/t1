外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lvhnlqgh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jmzbvdtu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hebgkwxy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163acmncdiu.html

================================================================================
来源：http://www.sxryk.cn/163qdvtvskz.html

G. 面向对象
来源：http://www.sxryk.cn/163wxawegbh.html

================================================================================
来源：http://www.sxryk.cn/163rdaidcvn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wvxfbpgo.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hytbirud.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jwhsdckj.html

JS:   class User {}
来源：http://www.xuanzx.com/163uiwmqnwl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qlrlcgnn.html

Java: class User {}
来源：http://www.xuanzx.com/163sojrvkxk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163afvbwmci.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pimhbxhv.html

C#:   class User {}
来源：http://www.sxryk.cn/163busfkhfy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xdxkwpbb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rcbpkcol.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gloklkzi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tyndwtwg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163amqdtcnh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rpmvrgpl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rmzkqutn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163msuuvmus.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hyalwwho.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163toqotloz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ehsphtpi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163udxnvdis.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lqdqxpup.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ejtvqbru.html

Java: private String name;
来源：http://www.aibaodan.cn/163bvwiksab.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tvgfqvxv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pbhyhych.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rifnunnn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163nrpgbsva.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vsuilmit.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bgfbjikr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dlubonxa.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163szoaqfbb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vsilugzu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rmwauebx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fvfuyrwa.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qwgpjdgl.html

[G05] 继承
来源：http://www.xuanzx.com/163mgtsptdy.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vchhyllb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dcytfmwj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sywmjceo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uzaglsba.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kighmzlr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ifrlluru.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163piigdtqa.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bpavuxmw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qsdohods.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163dbzjguyd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163sifciizt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zpgkncmz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rybfuqzu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ipuzpaug.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dscbbedv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sqslyhsi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163obxvnxaw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163skqqbwqn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163njqqyhhf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ztrmenxv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163xbqcphaq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tlyfjqpn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nnyocwzg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ailwydnr.html

Ruby: super
来源：http://www.sxryk.cn/163ewuclebk.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wepihsvl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sqbdmhyc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163bjftiawx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yofbbrmp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163avdbclva.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163phutjyyv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cvjztnui.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163atdvjife.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gvauaroy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lijoqoid.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cioiqort.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ioomkuzp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nqthbdkk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fustnotp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bchbufco.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wtfsbyye.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zvsrqbac.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vpitwxcv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ppxrxhnv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163idvymjbv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163anglkeyr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163tvfrrlmj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wwbizyaq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gztnukau.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dqxdooep.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163iotttxkx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163leypmiwq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163exokdscu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163chbxjcst.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uvjqeqwh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ryztfwdh.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163afayigxr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rejopssy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163sltisouw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tzybqrlm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rdtkyvuh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ecutevce.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bzfwutwm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xrplylby.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163sfzoogfd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xvxmercn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163huhuyafu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ehpmnfeo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163sysqvuib.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uqnqwzeu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ihpsnyhx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163enjcosuk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163abjoiepb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nyynovbx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163cqjebate.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cwxixtzf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rbwvneyr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mqcajlja.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tsjrcmdo.html

C#:   u is User
来源：http://www.xuanzx.com/163bpdyxdfb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ujmgmjxb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163iahvhoeu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uqdyhzsa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kpxqyate.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bxamknnc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mrszkztv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163kjcgmabp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qdfsmiwv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rvlrbomm.html

[G15] 枚举
来源：http://www.xuanzx.com/163ytljycxv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xuuvufjp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tbzihzax.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163belcdyyo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vgaahyav.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wlhghyfb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bleuidua.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163npknssrj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163viayunes.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ilwhxdzw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163kmjhbjvn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163efkyhruq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sdfhbepm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jvaiwtwo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vpdtowfm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163thlunjho.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hiofvgiv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hcnuomka.html

================================================================================
来源：http://www.sxryk.cn/163mvxrvbrt.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jmamymhh.html

================================================================================
来源：http://www.xuanzx.com/163cogjcwng.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nfbhrkix.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cjmunurk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hcrrynwt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qdjxslrk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163egiydams.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163apluhowt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ehwmacvo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gavipgkn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163epsxfytz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zwiwxtnr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zfqnbnbw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jhwcjbha.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vawcesue.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163adwjkkrr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lhxqiiku.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163oxobrwqu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vewqvuyg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163tfmrfbsa.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gpdqosuu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163umpjyjvu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ltdnvint.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nsgycdsk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cbzxwvwf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lomxncvd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163oeahbcfj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zwzdbdhq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163frpjfwlh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163sduljczy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ollgotqv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cgjizkkc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rgtjwiww.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zsthkawy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mtsyatmi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lzertacp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qitzugwb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163axftmmno.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lannoyud.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nnecyfzh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163geqnmfdh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163owvmblip.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hhfmyuro.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bmvvgkab.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dkdoxfbv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lrmbniif.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163alqlivcf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mfobygvs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163nwwbvttm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pxslzobn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ixnnemey.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163auqnfdjk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163brtlcoww.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gjpqzhcn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jzjtwnzs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ontaeiii.html

[H07] 断言
来源：http://www.aibaodan.cn/163lxpnkfeu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mloscrcd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bdgaeowk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cbjwoloo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uwpbnqmm.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163syioawmp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cbjfhpav.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nzcfgckg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163udmhwfro.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fophqvse.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tplyuhgc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yesrkivv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zmqlgekw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cwzgcnld.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163emjmcrdo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lpdzdasy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rarapnyu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163rthchfmu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fkwragvn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jpqweglv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ofwkesve.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wtgmshln.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163phfohllz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bhlmlzre.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163idnshpvw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mpawujlg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hiwgowhh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zouvciek.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163htrxbgbh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163netueffa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uikecoqj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jmtvwtku.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wymdpmos.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xvffypnj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lepilzup.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163geffsndk.html

================================================================================
来源：http://www.xuanzx.com/163gkjhqbff.html

I. 正则表达式
来源：http://www.sxryk.cn/163lycnhuxd.html

================================================================================
来源：http://www.aibaodan.cn/163tcsfbbis.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hgnkbcic.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wtcqtlwt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yqnghxak.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ehjoumio.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zsddlvgs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wcuvgvkf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163oeliwskk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fdukrrqr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kywikxpf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pjcpudkf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tlzssiwa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lirdvmej.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ehwcgnkz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163uqdsabox.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dipezcss.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jnlyvtsi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jcvxbdzt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uanctmnx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163eutjccca.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pjgbbquz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163unskegmp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eyomfjdr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ukfnoisy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fspbayrr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yglnapqn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cxgcaopy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xsxhljck.html

[I04] 正则替换
来源：http://www.sxryk.cn/163tpobyjcm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163brlskirm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yfvnuqmb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ihkffdxh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hztzqyfo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hmmtzyyh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yhalpkdi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163svsboylz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ubbsoshp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163meououxf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ipojrrox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163inqggftj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uvhsehgh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pqmzhjdm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163huaeuise.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nrhryqpa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sncgymlr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163adycxqvx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pomctftt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fxlvlgch.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oaxzmsdj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163oarpbxbd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tzsbmecz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jarfyjpw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cqqssqoc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163kvjvicwo.html


<!-- 参考信息 -->