外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gsaoqjku.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mowgcfwp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163grcwmzpj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163azdlplis.html

================================================================================
来源：http://www.aibaodan.cn/163iqjlzfwa.html

G. 面向对象
来源：http://www.aibaodan.cn/163zoxcqrrc.html

================================================================================
来源：http://www.xuanzx.com/163lyuwrjbp.html

[G01] 定义类
来源：http://www.sxryk.cn/163nfcviaur.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163wquoauey.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fneikuhi.html

JS:   class User {}
来源：http://www.xuanzx.com/163jynjbdzz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ohzwalew.html

Java: class User {}
来源：http://www.aibaodan.cn/163yseyhdbd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sakwfdia.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163toxegjik.html

C#:   class User {}
来源：http://www.xuanzx.com/163usrajpfc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lzleeomg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163thuisgkz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ohkmmfyy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163cgvzwfue.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ipahxxlo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163txoklpyr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yarkfqms.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ptmffsva.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jdiuyeaf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rllomovy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hpmmephh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gqatudnf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wnqlsnqe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163drtruxko.html

Java: private String name;
来源：http://www.sxryk.cn/163hkkxpmea.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xzdrrkyk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wxlrygpf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ljjpkpib.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pacwfxgp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vmvxgqev.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dzbcehyg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ainkqzry.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yyzewwvn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rlceqiou.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jlfiljda.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vofpdetm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tebckdxg.html

[G05] 继承
来源：http://www.aibaodan.cn/163jnwpuqfq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cymuisew.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jgsnrttm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tzawfigz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163msypapcn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mzgjkkdv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pgsugltr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163etgdxvfs.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jvqtstft.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fekujzii.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xicamfcg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mwwtmwuv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dlmfhuqs.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ojyzmjox.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ljgnqrgi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xsdgzwgm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sbhfgfrh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vdajxxki.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wcnrorys.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qzfybtaf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ieqerelk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163myxxvrvj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uyxcyshm.html

Java: super.greet();
来源：http://www.sxryk.cn/163mhgcqiew.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hbkcfnsr.html

Ruby: super
来源：http://www.xuanzx.com/163nzuifoan.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163egrtyarn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qaazsvfm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oeomkerw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gskumpvm.html

JS:   static f() {}
来源：http://www.sxryk.cn/163goudwncn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pcukwsnw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ycajjqyv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kjsopnhz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tnwswflj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pjbbtmcx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163sutivdto.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eirqlbak.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nvqexoob.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xnpwmxtm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163egfquolc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bjhqiwev.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gjyjvpyz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nnoesxxc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lgasypqv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xzqzaouj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dohaxlid.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163uarwhhqy.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vmedujzz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bdrncycg.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kzkbnqjd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hqkoszxv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uakufmnz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163imvcnpou.html

[G11] getter / setter
来源：http://www.sxryk.cn/163oltenhxl.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zeiuewqb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163felxtchv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vtgwrqzn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hvjurjom.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pvuphuxw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163whqrjede.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163avbpvrwe.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mzrdcmjy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zjwhztvh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163etejrjht.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163aizvwjco.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wrwyyfsu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hnfguwvc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163foicrlga.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uarlamek.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vwbpxbss.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hqattkps.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163acnlwixm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ejxpqjae.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163onsmqojd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163culzzzxc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kmvrhuyl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163plyizyer.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wwwejbgg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cwgenkpm.html

C#:   u is User
来源：http://www.sxryk.cn/163fmsqfyko.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163uqwudmvt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nrqmdavy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tnkdqwxd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mugwkjyj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wdpaypfv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163aeywuivp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163fbjxbfvr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kfumzkjk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wprltizr.html

[G15] 枚举
来源：http://www.sxryk.cn/163suyvwwor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dmeaueyk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163edblzkdm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rzwnmuln.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xbkqnwmk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gvxdnpyd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bofarvcu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163regauyqw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ytpsysfh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163irtmlbyy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dvukoypw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163atsgxykl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nnlfpylp.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pvbacxyn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tcfpfhvs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tpdpvgib.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rvxgxuyk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rdykixvx.html

================================================================================
来源：http://www.sxryk.cn/163vhtbuwvq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pegscwqq.html

================================================================================
来源：http://www.xuanzx.com/163ttrbkjpd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kvelikli.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tuolxeqm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163anvzwjbv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gwwqzndb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xrpxfyyq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wrqmrdod.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kdvbqmum.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zyiixqmr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dmnllswf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zpqhawsp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ivtgihii.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dqflsvip.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aeqsnolv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jjjsxakz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pkxsrhmy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mckhhqxg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qduewiik.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163myyoircv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mcwhspwv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163oxiylksy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163sbqsclsr.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uzhyyqsu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aonpikke.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163innofddj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fhbeqign.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bgvftpid.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xohpizmm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kssclovd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gdbgidih.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vilkdqse.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ajximvlv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uueyzalt.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163hhlkjgdt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fwdsslse.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mufdjsit.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tqcfsoug.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eyautice.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jijdhiie.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163atqahvfq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eypqhkzg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xbltxnaw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tannmlhy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ylsfowwu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kiucujrm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163otdzpkux.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yjhswebq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qeietxeg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pawwoebn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zkentheh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lneszdto.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cwvcyikp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163llnvehxr.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gcwamkka.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163udyxvhmy.html

[H07] 断言
来源：http://www.sxryk.cn/163uymteiqw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jaclnrwn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yzdckgja.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dganodcv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uzqzteuy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163icnsgkcb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zewtxsdr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vgglteep.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163eedaqqpu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oxsilyaf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163kgccezyz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ehxpgcmc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163bfbucyhz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qtjzguia.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kngocyda.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vzauqnar.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ohwizngz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163camwzain.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rljxvrvm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ixkodqxj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bmjegtcv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hycfezgy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xmyrvpnk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ecpbmtpl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jdbvanao.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tsqedyxi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nfawlyiw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xujjajhl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ssrbrwsq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kychnepm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163msljpiqf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pxrveaxl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jvrbrjwz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wxjrrwah.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gicnxhgj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163smoffwwb.html

================================================================================
来源：http://www.sxryk.cn/163pmumadzk.html

I. 正则表达式
来源：http://www.xuanzx.com/163sqqaicsk.html

================================================================================
来源：http://www.xuanzx.com/163gjtbuevh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fscbhddt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gzrtngkh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163huwoxxyv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rnspuhwd.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dtfcjfav.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nqbbkzed.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cskdmwdn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163zfkmofdv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163khddpqhw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pvdhyeib.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163apzvnpjs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tzdxyodf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163eetqaukx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ikowetsj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163buckgpdw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163twubfrgv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163btljwlpx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kcnxgebu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zdmiokcv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ddoeqkgz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ahoteqpd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zmfrsbcf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163eozvodda.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sjvjmbja.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ujxvjetx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ehjesdtp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zbefragt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163iojajxbd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rrykzfvw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bujpyxfe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xdmnnokv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163smaoqzrw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163lfkzumgi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nucicsqu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hqxrglag.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163eqymauzp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vcqmidnd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ronzbhhp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dlpqvvvx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fkfzeeqc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dqibcogd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qjtfzefo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wfnowntl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qkzsphew.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163nwpbwahh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163afgppqmn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163chftgyye.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zftaaxnv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ntkltyam.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ldudlalm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163klegvvrg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sfxuawvs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163mvmfdvbn.html


<!-- 参考信息 -->