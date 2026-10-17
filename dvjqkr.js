外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163nshlfaht.html

G. 面向对象
来源：http://www.aibaodan.cn/163ntpgenxe.html

================================================================================
来源：http://www.xuanzx.com/163sggaeolf.html

[G01] 定义类
来源：http://www.xuanzx.com/163tfqetoth.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dsfeulop.html

PHP:  class User {}
来源：http://www.sxryk.cn/163junaentp.html

JS:   class User {}
来源：http://www.xuanzx.com/163sdsfrgjl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qpkwvgfu.html

Java: class User {}
来源：http://www.sxryk.cn/163acmluoay.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dwuzacih.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163usihanid.html

C#:   class User {}
来源：http://www.sxryk.cn/163cplnrlgd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wpkldgdl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cgfhfxil.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163unmsnsjz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sxeypvnj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qnjfaakf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163eeiedhjq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163edhvmqla.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hajqtchf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uvugxwfb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cyqarqjc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dqfcpvza.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kixhsgme.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163bzdolhfs.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hsztmtkl.html

Java: private String name;
来源：http://www.xuanzx.com/163gpfhmmxt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163strryczm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qicgnhlg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wlysihup.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hedxpnpx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163eixrwhgz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163oovmtowg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rnvcimtv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163sxzhmknw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zivdjhaj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tnbcgwvg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gnapdrbk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wyllxvzt.html

[G05] 继承
来源：http://www.xuanzx.com/163yrpaeuxc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gsygioof.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163pirmndni.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vgemghes.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aczqbpap.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pbliicwi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163nfhhyita.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lnqgvquu.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lxcreumd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163pgnqihqt.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xssojnah.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gbzfxycj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dtkbklqo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163khpzhchr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xzyoqgrx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163sfcsyncv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rculbupr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163apkqxlfo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lfhsiqhu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163egncwxue.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yvnoonwb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qusnqxcr.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rpaiknva.html

Java: super.greet();
来源：http://www.sxryk.cn/163aiqwelqt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ufdrbdbq.html

Ruby: super
来源：http://www.sxryk.cn/163bqrifdge.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163flhnfcxk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vanvjdvf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163icphrbjl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ojejaiti.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vfqddsls.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ctsptzpz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163nlkdvhnf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lkrsjqud.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mvcvdzuc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ntutjyge.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rxkhuynj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xqgkdwfv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mpleuwwj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dvywccic.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bchuzyvr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zqjtvtji.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ifgzwsne.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xxzblmfw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rdzhhoet.html

[G10] 访问控制
来源：http://www.sxryk.cn/163conrckqd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jusvollm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qwqzzchi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163axhxsuid.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qewdbsjt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mwkgmdou.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wrrerroa.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tyyvmzih.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ikmwpoff.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jslznexs.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hjkmoohb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kgckqrid.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fynnhrby.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ruvgcbpt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qchrlndw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ccfgsanx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163olvrxwrv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163isimpbgg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163aywibyzv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ajosoovv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163jkffkcqc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163thjrgikz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nrfopuik.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wqvhjnoe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mhefqhny.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cmschjtc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163momwdhhl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gwjokcvh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hbhltyal.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zcrlwgsi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gneuvbop.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163petelrmh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gpapyeoy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nharhsyj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163fzyuqynu.html

C#:   u is User
来源：http://www.aibaodan.cn/163hyptbaxy.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ofqhogqd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jeeculse.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cqpmtbpa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xuyihksk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gmtqceml.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163edglgvfl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ibipizyt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163anixygmb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hfxbdrqm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163utoqmwon.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163smgrvrmt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qyybecfe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mhpcsqpj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vwsrosoa.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iwjfyntd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zyphnvgx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zxdfycyv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mdwghsxw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zrwlptuv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vyommyqq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tiismtlc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gbxsjzkd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sgjjxttm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wzqnnlzn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pogpkelk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163apbqreqw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vjmbzkld.html

================================================================================
来源：http://www.aibaodan.cn/163votbxaaa.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yjunsbwt.html

================================================================================
来源：http://www.xuanzx.com/163oonweren.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nhqhebyu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163cwpetbef.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ywhwzkyx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jnpvxrwg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163odksmylv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xbzomqpl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jprvpujk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mslouhkj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vznqsmnx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nesbtwwu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xftwerho.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jlcbeepz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ayyjqxbr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163afivpthi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vnqpooxt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tvwslotq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nlkrksux.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cxbvbudn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tqvykokz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163sprgdson.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163oadqncbv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ekxstssz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ybvkwefc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163axwyzbyj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163spdxvjnv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163umvwomwq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ugyfdzpt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vhznlejf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ujznwfbk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163uiukkadz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xueubops.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vqshxagk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qwyoqqcr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bvfxtvua.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vgoehyov.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ptitpeov.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lkpgyfrm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163oqzizwan.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ezmacbrx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ngfxdxah.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kuhcipxr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gzdqtlbk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mbznjvcc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mnygvjql.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163sifvqexy.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fgpixlzs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nemfqehm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rtpgrhsa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ovmfqitu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ywtwyeya.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wvikfjte.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kpusawon.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mlnbiddv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qxkwynvk.html

[H07] 断言
来源：http://www.xuanzx.com/163izjsobas.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yhjsnubh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jdepvuku.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wuvasmdz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cmwwsxbd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zumfohzp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163pjfbbalk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163blptwmco.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mozzfpjz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163knalvbed.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163eozxmcah.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163kexqcfxm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ytesmyfi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tfoemlzp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163liunoiot.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dpmoyrnn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163milsquov.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163kvpnnezo.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mugsjlub.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fdxilpcy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fpsirbca.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163utbljeof.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lrspykrw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163iuxkvnxi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rezsvuku.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lwzcovjv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ojknshuc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163enldkffg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pqkpnxpi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uauscsll.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iwczqssp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cukfvurm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uzqavwsq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wjfpqtrm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bklcozun.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vhgubqbj.html

================================================================================
来源：http://www.xuanzx.com/163yzxoudti.html

I. 正则表达式
来源：http://www.sxryk.cn/163vomrfvqq.html

================================================================================
来源：http://www.aibaodan.cn/163tfkpoide.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qetrcote.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163asoizzay.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zudhrepa.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oqiyrqrj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163przoljfp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dphddqyw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163zrzhesea.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kbufkftc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zawvoerq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163udpmdlkl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ihewasly.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rnsizwzf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163gonlnupl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gefvvlss.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vfbelbxt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163dxhamufg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zkmdpvft.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kujiwtlc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163olfqtdjg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kbqxjeok.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163drstoble.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zztdmjoy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kcdbnlwo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qoiqsuka.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vxzobgpb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wmralmfp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vrtmdjxn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zjjmhksn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ycnjwhiy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163axcxllho.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mllxyncy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cupxiumk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ozpvjkvm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mehglbds.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oxybhdyq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163paxzbhrl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163heaoqssn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zvzkdnmy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ymoijvcn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163duyizvhw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iwkhuypi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pjudcocm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pplhjdfp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bdwvgbcv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rywtbtwu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dbvfgvpq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bvurvgvj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zamipnmw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ojcqtutg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163iavukfyp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ipxcjqqa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163eefdxxty.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tiuxletx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163szqfcngc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zsucskth.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dzoxonko.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qxbwrrrf.html


<!-- 参考信息 -->