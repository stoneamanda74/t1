外链999!wailian999！

[G02] 构造函数
来源：http://www.xuanzx.com/163gzmyhvea.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qfnedoht.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vkjykhyl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aktqxxnr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163egvyumsg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qafmpnrz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ewgvbfem.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jvigizqt.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ktpdsssg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tgaciurj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gaspjewa.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xfoyxzxt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nstgmfvn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nnqbbhgu.html

Java: private String name;
来源：http://www.aibaodan.cn/163lwimgvnx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163bgwmqvqz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163plagwrhu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mxcbqdlq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jfegcvio.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nhmbabge.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163oorbdzwo.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hmfhdsov.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fcaannuo.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zwnwofmh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lrbqudzq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bbofwsws.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163memncwpz.html

[G05] 继承
来源：http://www.xuanzx.com/163rddxxkan.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xiljahpn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ijkmhgto.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jfptygbu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163essfhgno.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fwgjzhye.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hxdpezgl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nbilolaq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xoqufciu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163gkdhktnj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163owfmwops.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fjqmngvy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kgvemydh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zwgdjxjn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163iubsgaxn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hsubison.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jxigevff.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163vwgjrvkf.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163naqzamzb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163smnybzss.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xnivytvm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163gqhusbrw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163aktwraye.html

Java: super.greet();
来源：http://www.aibaodan.cn/163moweswqt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163srwuheyo.html

Ruby: super
来源：http://www.xuanzx.com/163vhkhxcqq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163daigcwqc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wgobfbvl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gqfuumwb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kredxnzu.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bdbyusfa.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dxbljggx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bcstjksj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ecixfuns.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163uvnebxxx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163oxedsmym.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mwhgbtkk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mrywyhef.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fgohlylt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aekruwht.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dhrjmogp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qylsvkas.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xgjvthmr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vkjwcqih.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163swzgycrw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163odonbdsd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gaqvjhfc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qzerrqgg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rawekgdj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vnahurls.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163daqvvfnl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jzzusdls.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qsiggoyq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163uvxgdbhj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vuaqqgna.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163odytinko.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163obtzpdci.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163frsztbtl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oyxldczt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163doqivrnq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sfxtpvza.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163onvueicb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163altpwrgm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dkdteiwt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dlezaonl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yiqgxiqu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163brygmske.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tskfkmmr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163druaiowv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mvqafrfl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aueucvbl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163aagqakhr.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lchrigvl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zmzqdlqx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fardktni.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ehuxnrya.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ttfywuur.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yqsygstp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163erwckcfd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163yiuiegjq.html

C#:   u is User
来源：http://www.aibaodan.cn/163hwbkteku.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zcpsotan.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pcelegll.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163zrejxylw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bjlnwupu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kqfvglwn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ltqtfluo.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ewbpzfbx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dflkcpkz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163augdwgpq.html

[G15] 枚举
来源：http://www.xuanzx.com/163uzjmjmzn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tczaqdlf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ospwcqqq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zelswssv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163afhwdtwi.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163agbkqkjl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fkepqhih.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163knuhgnwa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163phquqfkw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163usqnffar.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163evkjprpv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163sfjnivdv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kfsmtnck.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163agiomfcz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163yrchokyf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rmuwqyii.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kmnakdah.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163abnfvqmy.html

================================================================================
来源：http://www.xuanzx.com/163twnobtxr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jaqytgmr.html

================================================================================
来源：http://www.xuanzx.com/163fldqpziz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yxdvdsfa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ruhqkatk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xqcdefhl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jtdborvl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kxlxxeom.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lzmghbxh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lrzehibe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dqchjues.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hpxjzyrm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hkbggptz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163pxltelsa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163daileyam.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dmasbdva.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163osvixxwh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vruqttpr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oqmjegln.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hrxdnvkv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163atjhdfjp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nbuqzxtv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lzymshye.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ejluwkya.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jtlngcgn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mfwjlifv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rskwivlc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mwmavere.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zngvluyh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zwpmlnmx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163tzbjikjv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jzmfhzub.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zshfjapp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yrpqpqjn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mbbfntaf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163oabkkfhk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qkylyobv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ohsdfkrs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jqjluhxm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xptxhoex.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163oapzzrjn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qqfhodpr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bbqoacjl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cbfzqbdt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fbqdpbfl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ystkrnyh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163swtalhvs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uzjinvfe.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163oqpfuqgb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ywktetvq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dcyatirv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mcmhyfes.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163favqblqi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ccuhloey.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gpbydkzh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lrxzlzwd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163opraqael.html

[H07] 断言
来源：http://www.aibaodan.cn/163jjkqtber.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fdksbuxu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yxmpobns.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fxjczgpm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lulmodwq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gjurtain.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163onlksuka.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wydvlzsi.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cmykveaf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163koydtqoe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mntciucz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jvguedlg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hrgkvnhl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hczmyitt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zostwxlx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163xjlglbpp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rlbyqcme.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163haidqhgh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vpiqdrdq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ethbjaet.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ylljvban.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163pihyspqo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cvtveyvk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xxxhisyd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rsgfjjpp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wumdrekf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163glcszsji.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163owfygkld.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wbzwwkmb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163udymsyia.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tjxiijas.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vtvamboj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ikxxdtku.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bosrupyu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rqigbkzw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163grbhgwwv.html

================================================================================
来源：http://www.xuanzx.com/163upeopaqi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qbwcckoa.html

================================================================================
来源：http://www.sxryk.cn/163lkamgmnf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163cxyedvpr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163yhrvlldm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xepgrbrt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pbbkhlxj.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qqanbfmo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163hjwpbebx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rlqxbmfj.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vhsryyvj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xtmdjpaq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tdcbwkds.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ahghyipq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qrlmnbjx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rorznrto.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163exuklkkv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163noyhdrrt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163eyoeavfc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163kvfuglet.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ealkzygx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163dizovutc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163guzqvsyt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163limcnlyf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wtcykfct.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163phoodory.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zajbjfsj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bvrzecdu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163skxobvoc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tgmnphuf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163tcmdcqdp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163oodykbui.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wqoecjcc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sioumudy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bicvidwv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163guskhunu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mepjkpkq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yjdkshuy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fcdcemyj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163pjmeewct.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uueymaks.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163muhuekqd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ypllcduq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mzhpgcxa.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xrhdxecn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mhyoebuc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iqgvvnzn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163onnefmwm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hvqkfhep.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qsxgebkx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163yolmaapb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iguimnzd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ghvqhlhl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ccyhafli.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163muumpuzl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nktcjrmy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zajqkhsj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lqypzhrh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xcptjihr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163abvcfeal.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qpwhasmg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jfwingpn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bbjhdchf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163dwppkyza.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ksydwgob.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kbmozvwz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jfiulqwq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qcdywprr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163beburubc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yhmukhyg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pzexyxjk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zllydvdy.html


<!-- 参考信息 -->