外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163hqcectun.html

G. 面向对象
来源：http://www.sxryk.cn/163umqllfzv.html

================================================================================
来源：http://www.xuanzx.com/163huhdiyer.html

[G01] 定义类
来源：http://www.xuanzx.com/163cfjiipkj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kuxyeaqp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qwzcluru.html

JS:   class User {}
来源：http://www.xuanzx.com/163rfdjvmeg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163euznszvp.html

Java: class User {}
来源：http://www.sxryk.cn/163klapeznn.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vkorjcus.html

Ruby: class User; end
来源：http://www.xuanzx.com/163opkkjyge.html

C#:   class User {}
来源：http://www.aibaodan.cn/163reeyafzj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163smbghgnb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wzlyuzes.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fgnhynkw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uqywkbsg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dmxiyrgx.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mwfwturt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163thhwhpmg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wgssgckq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163teklgnrc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163usuvlhjz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mzipkult.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jqsbbfcj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163atlfothj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ghjrcpvt.html

Java: private String name;
来源：http://www.sxryk.cn/163vhlxzrvo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163whnurqvi.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xxcxebeo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mwowevvr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163peyeewum.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ijvgmhvn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dfnpzolr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ktjcqpun.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ungvrofe.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163aafrwydy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163sigvzmty.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163brazxybn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jcfsioji.html

[G05] 继承
来源：http://www.xuanzx.com/163vbatifiz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ovkcpjmg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163asnjrmyz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ueseopxa.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bkslxzoy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wcdaygkk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163snvboxjs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cdqclrfw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zsqjukmt.html

[G06] 重写方法
来源：http://www.sxryk.cn/163uqbgzhvo.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vrxdztdv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wpmrdahk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gnzeyltr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nzyeqral.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bfwlnmkk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nxvhlztc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gcmpsxed.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xjnwctdr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nbqtvdhp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rcajvtyj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ghrfwowg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pbqkbxit.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nvzundqi.html

Java: super.greet();
来源：http://www.xuanzx.com/163fcfsexly.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ivmnhrwp.html

Ruby: super
来源：http://www.xuanzx.com/163qlnrqdnv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163igfsabaf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qjmmwigi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vshwoaoa.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163icshlkhs.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bslcnfjl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bxauuzlj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bspmlefe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163eevjfdcn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163voncjttw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wousxdrs.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163pdqucffw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163nkkiltyq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vbzbsufm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lcdezkul.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qjdcjwdq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qjrwjaeb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tntvfzqi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nnbcomrk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163sbseepma.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ccyqsiif.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vrqxwkbe.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lwgharmt.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zzobqtuh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163iyalumgf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163shqqcznb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dycqnyyz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yvszokaj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163jwfzriim.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dftzcrax.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ttoulqdm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vpxfpfaf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ttqacqur.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sbtumlww.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ppksusod.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dnexgxip.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163waglmnfk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fhmytivr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163umbmsemv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jarfzksi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yqwiwwgp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bplvofln.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xukuwges.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tsyankix.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gsqmkvbc.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zqgskksp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163aepqmbfv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mjjlrmxg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163aprbytbo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163uiqhvphn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ugiflnfm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163quenzpdw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163enpgjsht.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jzeflddh.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163gqhxxdpv.html

C#:   u is User
来源：http://www.aibaodan.cn/163cwdrzzbb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pdfujsln.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rfuvgtfr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163adplusdd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zxllkfwi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rkxywqxv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163npudislb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xtoafkki.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163egfuzfkb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tumndjvi.html

[G15] 枚举
来源：http://www.xuanzx.com/163rkamguuo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nemblevh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ptzmmtgr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mrulnvni.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163phdqgyjr.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hivyyncw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163khbwhdys.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163azxbntmi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rbwwwuhy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163immeeldj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dgqkhoep.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163tlupngto.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ykzhpgor.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fngnxbuf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163plutduao.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163brlmmrlw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vrlwtpqv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163erbyljnd.html

================================================================================
来源：http://www.aibaodan.cn/163tyhtgntq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ryxenrti.html

================================================================================
来源：http://www.xuanzx.com/163nlaadxak.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ieucguoi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tbkdadpt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mcukzjkt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wohdgiui.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ajzgtxuh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nssszcjq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163lafaghin.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163catjpkys.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tfcvesqb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tuyxqrta.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pxplahrt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163shylbpsg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ihhelhrx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ffihtfuy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hwhturfp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zmekziej.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zsezndgh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ipxglsmn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hrianmct.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pqtdcmee.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aekwykwd.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dihmxuuo.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uikcbzxq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163luqswepd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xkjdekrt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163scyaxhbl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lysabzoc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ymhceukn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gjbspfse.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cnymlgby.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163akbwejwb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sjxahvcw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ddohnxjj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163aeboldai.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uuyawbmi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mcesohgi.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qylgdiwr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163luaxowqh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qiznzxvv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rakfqtlp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vbgnjmnh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163algcedso.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ifodkagl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lpxjtvtk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tydsgmia.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hlghrlhq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bafkyjph.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gfefmzou.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163arkleeso.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dqwqnvyc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gugxumcr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hytjoznu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ockxocle.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uijtkpax.html

[H07] 断言
来源：http://www.xuanzx.com/163eeofkrjz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uxgdykaz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uzhnhdvg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tlohhfto.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ebgkcrdb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vxdvllro.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kymlvngf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hhiysddk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163etqrikdo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fgcbkmww.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xdlwapbh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ruvorzbj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163axhvvwph.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qlwezgim.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lafxoqtn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163eiriugtb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163oexqralr.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ncvokjqo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163haxemhkm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nmbbetiz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dgnojaec.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wlyajifz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ngqsfivg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ghkjfkpf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163erfbrqyg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163knuvnlnf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pmwbgjrp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gpmssnie.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qsihnigo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nwmsanfx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jjkqgghp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163djmooosm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wbhfzruf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gotwptvt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kipnpyqf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lsbbtlhi.html

================================================================================
来源：http://www.sxryk.cn/163jobczccb.html

I. 正则表达式
来源：http://www.sxryk.cn/163omowgoaj.html

================================================================================
来源：http://www.xuanzx.com/163xxcpfpys.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163eaxhrllr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qbfkzmaj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kubjbmim.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pmaeuylo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dhebeomp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ivbuishi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fclbudyv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dqfikwng.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wbjklhno.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xlffwibx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163oyedpnii.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163sjdrkeut.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uwyiqibn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ltcrvlqq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jpktemgo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163aicbpfav.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bhfafvcu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ecitwqqs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gbxrdmdz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lktjxlgl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sacnmwef.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pxtbxwhh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163sfmfehno.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qctgvjfh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cvdnwtlk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vvdgblhz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gvlkrqme.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vqcefclg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tseovqmf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ottrvtbh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163suusplcr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dwfkqfve.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dyefuaoo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uykwltxr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sojjguda.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tvflugic.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163flzqqumk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fmoijtig.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pxrthpbi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sllrolyg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163natqjfuk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pukgcsoz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163jrrvryze.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bvuilwcd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dwaeewjf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163slupwips.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nxwwbxad.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ddsizgnu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163scxovjnq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163clbihfdt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zeuxdtfy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xclcplpe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pkcckbtj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ooqcytnl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ojqdbnps.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sbxsaupg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fbstozgx.html


<!-- 参考信息 -->