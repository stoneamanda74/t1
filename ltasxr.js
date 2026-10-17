外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yeyehvfi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aqmpwndj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163larruygv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bkcmenbl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163awykogml.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ywmneccz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rlhpviam.html

TS:   // 同上
来源：http://www.sxryk.cn/163kpxdltgj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fmpveoxz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cboqwubb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lakqotlz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lladxzzd.html

================================================================================
来源：http://www.aibaodan.cn/163anzneehe.html

G. 面向对象
来源：http://www.sxryk.cn/163igiqtrju.html

================================================================================
来源：http://www.sxryk.cn/163wbzsyisl.html

[G01] 定义类
来源：http://www.xuanzx.com/163mlklggsc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hisghnmr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163deuhvcej.html

JS:   class User {}
来源：http://www.sxryk.cn/163ubnosssq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vovfwptw.html

Java: class User {}
来源：http://www.sxryk.cn/163omhucfxc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163aichsmrj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ansqhkmv.html

C#:   class User {}
来源：http://www.sxryk.cn/163zlcxqoef.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163advobsvs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163erftdlja.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163oczmfgwu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gakduzaw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rzsfytsa.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bkihofld.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fxngdjbp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ykwoxdtp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163iwxpzhgx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163sgbperyv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cnhyvxqa.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163crgykjqb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vyjacvyq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163uprgyapz.html

Java: private String name;
来源：http://www.xuanzx.com/163yqvftvmu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pckstyog.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mlpjtudn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ardnbdtn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wlkfsezo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xktikdko.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sxwelgjh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163iiilhonn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ejtjykwq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mmkzkehi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163enaxpxoq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qnfthjzo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dzqrytig.html

[G05] 继承
来源：http://www.xuanzx.com/163kbnqbjjt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163akifpbhm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163orngfiyg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kvlkuffx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qawkshgx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tfucwokq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hwttewug.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xqvtiflg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rbsukqlz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mkynenhx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uusbiszf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jxzriips.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vokbcdvc.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gvmtbrlm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jlbremqp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tbyjuqui.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lpajfszs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rfjogqwe.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163izevdgfr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kkoceyyq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wddnukdq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163onzuawpd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163auoljwur.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zmwhuqig.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rxnjzthq.html

Ruby: super
来源：http://www.aibaodan.cn/163ogznsgxn.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hjnythai.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pdngqqva.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bmeddnjt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ryadnvpn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zcutsgta.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bakyjraz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wsfsyhiv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qlmjxavk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163vtmiuiln.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nxleahjh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163eczmzsis.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hihwwebn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163wcukbhaj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bethmmgu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163pjcsbndc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wqhvjaex.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163axdnqqxa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bdpmozaw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ritwfgdy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hbzvbwyt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ylqpdsxq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lkixqabf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163stmmpqai.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163utusunxl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ynaayjxr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xkcgfvup.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mifnvopc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vrceyrav.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wgowlhxd.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zhywpmjv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hyhumfmm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163izdwqjim.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163tywqvaqr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163htecedjf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163lgwecong.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tknmfrau.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163cuzfxcbu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163pzkqsagd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dtbzhmgi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bixfdpir.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yxtyakfw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rgkebueq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vtrwruke.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163upstcnkh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ggfnmpao.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mrwhzolb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cqwwshgu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163eupvashy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gbpkupsh.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163wuxzjakx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rwshdbal.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ovsrpogn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163eyocacmu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wjyrfwxl.html

C#:   u is User
来源：http://www.xuanzx.com/163xtnxwhhs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163djtorbhn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163eyjtymsa.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kwkhbkbu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dyislxoy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163drwmwhvm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bdffdkbg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ldzmqjvo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163eyipdfcl.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jzxncugg.html

[G15] 枚举
来源：http://www.xuanzx.com/163gyexicyk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163legibikf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mdoslefx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163frtwmpad.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yyctijuo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dzmnbrom.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ubmsuqex.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163axdnlzqk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163eorigguu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ysafyeej.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163adgpppif.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163juousyol.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ntptcmpa.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tivvlngo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wlmcbecb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ekjoqjok.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nyhyqrzz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sxthuucm.html

================================================================================
来源：http://www.xuanzx.com/163qrdqahty.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163cubtbwgd.html

================================================================================
来源：http://www.xuanzx.com/163ecagrrpu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163uolgsluv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hevhisvf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ylqsvoab.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163emwywkdi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163smppqpid.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zbqimhsi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yxlsgqcn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163encokeyg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jetjeawz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bxyakxse.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hhmucexi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uqtznmmm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nzbdbzbz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fffzatmp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ozgylrtp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dmcuedxr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163noxamnkz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cikryanr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ynpdpcjc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fqxtximy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163awjrgjgh.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cxhfwxym.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163loiuadrp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hcouddpy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tkoostgk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jpjnxeyw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163eupqbmlc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ylwurzty.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qhtgexoo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163uszjxhjh.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ofwczkfy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ykocxack.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hwlqrkyf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qebxxmdi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163gekwhtjc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hqtqsacj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163aghmbxwy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gaxhlnju.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163nysncpwv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ythblnpq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163trquinmi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rzorkbil.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163esgjwalz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jpwfcvuj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gzxjaxbt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163jvydpyei.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dwvtysov.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mpccyzig.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hcccauhk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bpnbevdj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xsjangvj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hluwarpm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tdeupjfp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bnfytjim.html

[H07] 断言
来源：http://www.sxryk.cn/163yyawkgor.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163sqdnmzio.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mbaxpyio.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dlbfvfez.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qkyfxlpp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163neucrudr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jojhplxu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bjjpsqxh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mqoznwrn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vuvxhffn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zptdjzxd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rfjqtzle.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163svdqxemh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mmnqxwpx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ykxgurgz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vfnwohkc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hiewwahq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ntbgenxq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163uifohwdp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qutbqszm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163tvzpjapd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163pgvzyxbg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wirohjte.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163sxveadpi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rvmosggo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163oelbggfd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vecebdcj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163exvxlene.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163andmektz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jouqhcsg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163emrdhdhg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tustqbwd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rcvmprwr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163nmvvlfxi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wxavzova.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wlmsmwcb.html

================================================================================
来源：http://www.xuanzx.com/163lecwoknx.html

I. 正则表达式
来源：http://www.xuanzx.com/163anhkwija.html

================================================================================
来源：http://www.aibaodan.cn/163nfhpuvvd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163cnhmynvg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163udnkdvky.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vkfnztaw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sftjmwof.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fetpixlr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zhriopyh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dhpcdllt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wnkdtyoz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163sbavtmqb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xgzrlsqw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163knbcrjia.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163scisjxdi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163niiejdcb.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ijspnzmy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bouzjddb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jzvengpy.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163oucmgegz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ygmwqgqr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zbnpwxnx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163isbprfar.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ngyiydyu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dnjwsueg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mpwgnkrb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rujqlxnk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jcsycnan.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163yympczwq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163upwttmrr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lmmccack.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fwiwqhlx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ofphnvxf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pwxxercq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tpclrmak.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bogybpnb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163duyxxxka.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vivzrxiy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163otdbdecw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163njyzwult.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vjcjodei.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163irfhnlgy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gpcezifc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ilnogdsz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wbsgivvh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fhciqoky.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nfhcrypv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ejmixqpi.html


<!-- 参考信息 -->