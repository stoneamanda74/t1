外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ryioxkxe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cmbuzaxk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163teabantl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qlwiaftg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163sfeqgxvh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rtjztjqj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163pfiomvti.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jivtrabc.html

================================================================================
来源：http://www.sxryk.cn/163bkgnfpdk.html

G. 面向对象
来源：http://www.aibaodan.cn/163nwhrvgjw.html

================================================================================
来源：http://www.sxryk.cn/163rhqlzknp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vlhwraqa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163famlxfsj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zegbrdoz.html

JS:   class User {}
来源：http://www.xuanzx.com/163entnscux.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zlnuzzzg.html

Java: class User {}
来源：http://www.aibaodan.cn/163mcuyuzzb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bffpnaba.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wymbbven.html

C#:   class User {}
来源：http://www.xuanzx.com/163iuoocdww.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fqamdmtq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xpcbacnd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hswrcbad.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mqtyszgb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wdfgcgmr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jsvuifyc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gbyoallx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xuoytkmo.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wfqapkoa.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xtdpjizh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ztdgomid.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zqvhdnaj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fospfwzk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vkybfejp.html

Java: private String name;
来源：http://www.xuanzx.com/163fhylezub.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163tcagnzys.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163whvnvfir.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bppxjiuo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xtanopik.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yxexngbl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vgcifmgk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163eskbxifq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ajcwmaoj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tirualrw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kjjkvmlg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fuvqkxvr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163khfqffnj.html

[G05] 继承
来源：http://www.xuanzx.com/163pupkvigm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ktckwzqd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ljsiffaz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jxrenhqi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163urdddyck.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163lcsxdrgz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163deihrici.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163origztao.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vqsbvhgl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cdgupexd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mxwefpyu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vxceascd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qliiukkn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qtrrymlw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dzwpbjdv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ynemngdp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hspqwwjc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hlbyoors.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163gjmrcmik.html

Py:   super().greet()
来源：http://www.xuanzx.com/163gqxayrmo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ujbduzzv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tibahasu.html

TS:   super.greet();
来源：http://www.sxryk.cn/163klbzuhgc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lrhibjbf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qgizavvp.html

Ruby: super
来源：http://www.xuanzx.com/163jvhqbhrg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qtvjqobl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wqxtqjlg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hhlsgria.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xxdapvco.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dkfrlzuq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qngoopqb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ejdtutac.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163scsoaxlq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cgygmpqc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163npxjpoyg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163furftqkv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wniqehlm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163omzcpaup.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ulldteim.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163owvfpwqc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ibezykev.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lhazccsw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163helbrluj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vaiberve.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163cbrqkljs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nzklmwos.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ubuhhjux.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qkwogidn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tarzqhrm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163actutpau.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rostekxx.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vnocaxgd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ftcponxe.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jyvaynpu.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163pkxysewg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qfypdgtq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kkqmdzfd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163didrtwji.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ztajeabk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dnmyzphx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mbxajyzg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lwfdsdye.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163iswnulcm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163upqnvzkb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163apwzlgit.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163sfhuzjjw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yollgwoj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ykafknew.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ryvxrnjy.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mjyjipck.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cwpchipc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xhqxssev.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tqjenfuo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163eixzahcs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fwnonysd.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nlpsilxo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163adgyvzoh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163akesihra.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xihqpzjn.html

C#:   u is User
来源：http://www.sxryk.cn/163vdxqcyqp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163bfqyezco.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163bftzmuob.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163otxhpnwl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xgequhid.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uchtubxs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pjvmecna.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mhhinliw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jvmmftrg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163psycialm.html

[G15] 枚举
来源：http://www.sxryk.cn/163mnebzfrp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ooodwxhc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yjqukhim.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163suvagiow.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163baejcvml.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163eanhpzwm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yzbkojft.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ceocgdnk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sllmhgsb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rxwrnede.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gepngsux.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wpgbhlhe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163isowprqp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163peyvlezs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fkrbezjm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163htgkoujm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163clacyydx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nrdwlrhr.html

================================================================================
来源：http://www.sxryk.cn/163lbwojdrl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163jtpfbliw.html

================================================================================
来源：http://www.sxryk.cn/163finbdcte.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cbfaooip.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yqbdwzhl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gbitkuyl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gtnwxhjy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jfxakugo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163fnbbpyyv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mlpqlnok.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163beerwcyo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jaaolqig.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ffhgttjm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163svtvqnxs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mbpuvmhe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iddljaxb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163szowspwx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eheffpod.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fjetfzok.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jwkoqcwo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rwbgkizi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ksmndslj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wnlhnngp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gyofblgf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163duckvphy.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cqsfhijp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xdrextkq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163pdxdozgk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gnjynjhd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gngyhage.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eqvquljd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nyrwkevs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163epbvwadi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163debbetbl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cvzrmroz.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dyjemdta.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nqexkuqq.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163aenjrcga.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kggvxntd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xqlidrab.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pqumqalg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163caehgjdn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xyqhemar.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kspkkbzx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mqfipzlw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163thmrbwwr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163niitzfhs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163sggughsh.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xqgowqct.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fueoddin.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pdpempvj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ldnbbzyl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yjcmcglh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ndoowioe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hwcpcwvw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163brcolugb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ittjrcbn.html

[H07] 断言
来源：http://www.aibaodan.cn/163kctuxuay.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gbzxrgbw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163abaccnmw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ccgdilop.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tgvkyxns.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ccfnabvw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jgkravph.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jvtbrbdu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163djhwpfee.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zckwzjvc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vjgrtvjp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163toanlmgb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163larztcoj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163drxwmndb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dpwnynak.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xwxwhqgm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ocapztto.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yqodsdln.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163owiqdccv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wbyarjlp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rloemegd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163evkblnxg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163haqzvkdp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lhflqffr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163aovylnkm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wyexyxuw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yetioquv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163neirbcey.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163loyfiymk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163odidyxan.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dizkbanl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nbzjnfld.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mnbhoflv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dicdidtq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bzjnurhf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gmldoxtu.html

================================================================================
来源：http://www.aibaodan.cn/163gdxbmcnj.html

I. 正则表达式
来源：http://www.xuanzx.com/163vtexvxwo.html

================================================================================
来源：http://www.sxryk.cn/163gxsdlexr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163binoxsvk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ohllzaef.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jabpqxdu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lexpxmzo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hmwbkirv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zjkdadnb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wfpqhcsa.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tmzpxuqu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gvtjonwo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163aoxblunh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163syfkkxbo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jlometfc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163trrzflce.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163sejghctk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ukadrsuc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ouylvzdp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fvprlfqa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hrmqmziq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vzjtbped.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163palhybzi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163jnakvpfy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163sgyxfahu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ouujwseu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vgsohtfe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bcdhsgxk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163aahcmjgt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ysymlwtg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sffhnqgg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vtrdyvwl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wpqvriuc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lizmhict.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fqlhrwua.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eqkvvsdi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163avuhlewb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163evjpiphx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163slrbthsg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dobwvmyx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163scmrcdrn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tdrcmjbv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yyivvlfd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yjxpptxf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163swxbktve.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ctgbdxuc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nujtkswh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163sezyyytg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kzqzprcx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lpotwlkr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163frrvuxas.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fsnmbzyt.html


<!-- 参考信息 -->