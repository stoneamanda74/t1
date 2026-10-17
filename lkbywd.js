外链999!wailian999！

Java: class User {}
来源：http://www.aibaodan.cn/163romnkloe.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lgzaeoph.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163klqskeob.html

C#:   class User {}
来源：http://www.sxryk.cn/163nlopprxn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xretfddh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163csvygrod.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163igyukhon.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ukqbnqzq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tcpoduvx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ejrcgrjs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kokrxfsz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163juszgbrp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163eblpenuu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cnxjzsxj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pylctzvy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qhixayea.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tesrzlgi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gxgmnhpi.html

Java: private String name;
来源：http://www.aibaodan.cn/163adsjozik.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163yfjtlank.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163iwgswerg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gillbmqa.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ajtrbifx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dsebmmek.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rravjthp.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fwzeytgi.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163souchzxq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xblqnzwc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vbpfvgdt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kjvbeyef.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oxfogvlq.html

[G05] 继承
来源：http://www.sxryk.cn/163cgfetfrs.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aexohowt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qxfqfnmz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zdxgkxmx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qktwurrs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kqgfdqne.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bghasbmi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qdgygdih.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zztbgubk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dvjzmtgj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wsldkwql.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163awacauac.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rpkzsbtt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163krumbbba.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oiozehib.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163swtgkdux.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bhocvrve.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cyilqlts.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cchynhyd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dstjrvhz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ipyijfto.html

JS:   super.greet();
来源：http://www.sxryk.cn/163tbkcibkk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dyttsshy.html

Java: super.greet();
来源：http://www.sxryk.cn/163zlpjhpdj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fesyfugb.html

Ruby: super
来源：http://www.aibaodan.cn/163jtfkrlsn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163uonaamrz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vegrnesq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tqnnumza.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nxrvokhc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163auukkyfd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ggwgplan.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tlksppdh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xjjzgqaa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yngqalwo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qdejafrj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kwyitygh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nfzxlcmb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rclkfspb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pfhdzaqs.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163owpmmylc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mxaxwzyw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163uhktbuxw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wqqqduzg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163whynrjbc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163civuwfsd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163etcrbxkz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hauabrtd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vndsavcz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lnljthiy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kmxwkoyj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yamhquvb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kmldzwpg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mtrlwyhq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yfaczbbw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163twdetnch.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lqukbhvj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163iosvxgdl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ksmowbcr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163oorhnphc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hzmocoje.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163sybkyher.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rhpuqoys.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163szurcxbz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lpthefzb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rldjvifj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163taohtean.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dcdkrqlt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gtknqtxd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ykazhwpl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kjogrmre.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hvvpueid.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fzpdpjgh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fbjdjxfl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ddjwmiuy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mqqxgjiv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163itdnuory.html

Java: u instanceof User
来源：http://www.sxryk.cn/163diqnrodr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rdasvpgf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163afpzutsw.html

C#:   u is User
来源：http://www.aibaodan.cn/163cmidmmjl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ohzakshz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nhuxumfu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zetrpxnq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fcoozhjh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163flhtsrmh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163elbokknt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163jecoqntm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163uycsgjqe.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ywfcngci.html

[G15] 枚举
来源：http://www.sxryk.cn/163duukjqqr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xpwhjegi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bbekkmvz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ifjlrlwg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qoxzchji.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rxzwcigq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jyaruvst.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zlyvmpms.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lmjlsdhb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sgadeotz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bjgfkxdu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163lirgqfuf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163awjqarov.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bzhdsqje.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pukvqywg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dczbqhof.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kktluulf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163khcjlyfs.html

================================================================================
来源：http://www.aibaodan.cn/163rxgmqbwr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pyxlavcw.html

================================================================================
来源：http://www.sxryk.cn/163fsyiauri.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wwmsjkim.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ogvcftcy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163gmcdtnql.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163izwzjxjh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163npytelng.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nnheysum.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ahcjmeph.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163itlklyhv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163iynqvewi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uzxvgmgh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163iwhntaca.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yneeaulu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ehdsrzko.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163awzojwev.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bnmmrckg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ybjmbtaw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ecczcbdu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qyantrsa.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163thjwcagu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pqsojgji.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ynjknetx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163asudzbqn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qlnoabqz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ndinukzg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qcnqmzud.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163gzkuhigz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gzflqjed.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dzjcrbdm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163orlmygnb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cfdscwod.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yxvmxtqy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zzrenqxa.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vlibynzh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mlibrwnp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rkoteytk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163svnjmcdl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wxbzgwmg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163oyldooun.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uyxrcfoa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nvajbjac.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aoruweeg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cafifbzn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vodlzovt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163csxsyzst.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oaoeqdqt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mzkmrsrf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dwswwnjd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163chduglgy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bqohxtzx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mkkhhsrr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kvdvdjwd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yhkkwxme.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iionaonu.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163scvtfxyu.html

[H07] 断言
来源：http://www.sxryk.cn/163hyaswsdw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jqpyqnay.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nhkajcpi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zoufrzwc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vognqkis.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kphjrpzl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dixmewmb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163scslkyfo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pftdnugk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hcmxkbco.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pjqqzqwd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hbufytwd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tawipcby.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nzgqblje.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mqiemjvz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vlinakfl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pealrzzw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xaqzwcyk.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qpdatcgm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gpnhltnn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zwztlyjn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lobkgbfi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zpfmtveq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163szjcsbeq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163onrfwgiw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qfkdnjdu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mvkhybyw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xrhglycp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tlhffziu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hlsamiyj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zmspwklu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163espbgggh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rkplplun.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bobzjfpy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lxjuxkfw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163haroerha.html

================================================================================
来源：http://www.xuanzx.com/163irdqssdx.html

I. 正则表达式
来源：http://www.xuanzx.com/163nijoyufe.html

================================================================================
来源：http://www.xuanzx.com/163hetajzbo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hmefofuo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qlnlrqfc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163sodlwkuk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163czyskcus.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iwptkqdk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163czyfzsiy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vdjdlqgs.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ivfzzaol.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wxpqswgs.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mfrgmdyu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nbejdcgx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xazodtyh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163srurkgbk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163psbsejgz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dvuatfsp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eeegxpyn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zbznxrby.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wpwukldg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163evcismfb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ldxkujum.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lfaxmrul.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163nyafkqgd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ywumdfgr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163uevypxxj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163skjzyiyc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qrotcwja.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163raabzvrd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mwpqizdt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163trnbgafg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ioezqhhq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vavkphzo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qtrkxmcm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163clirkzgk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163swuyzept.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vdoaferp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163plmstvvm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wpcceemh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gknrsdxv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jzdyxlxz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bjwaslof.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lviydqws.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kakaenyz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wvnhofqn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eprzbjmt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ygmncgrm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163puyvttht.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ajdvfwft.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ezxgimyx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163upqxpgun.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uhqkguhn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ytfurkfg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ibgxnrqu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gnlcevks.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gplvcahs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bzvmbevy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wvjcwrdv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mwcyofwd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163aomlqoes.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lqwhaloq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163jpbelwwd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163eydysoei.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163khgujpmr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zmgvjdbc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163luaoqmlp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tqwbwggf.html


<!-- 参考信息 -->