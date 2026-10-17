外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163saytdmie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tzgygchh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ewrktigh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zzknnjtn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bxtiwnyj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sfmccunn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rjvxrvot.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163etubutzw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163abaixhyk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163egukvukt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bzltinxq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wnyftfks.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gobptlrb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kzrcrreh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zcmtvfpb.html

TS:   // 同上
来源：http://www.xuanzx.com/163geokkual.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163zodhindw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163youeegiw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163olwjfppv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dfvjktkx.html

================================================================================
来源：http://www.aibaodan.cn/163potwsslk.html

G. 面向对象
来源：http://www.sxryk.cn/163bgjarcui.html

================================================================================
来源：http://www.sxryk.cn/163ymqhhxxl.html

[G01] 定义类
来源：http://www.sxryk.cn/163aepukngp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163obepeise.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vocqzasn.html

JS:   class User {}
来源：http://www.xuanzx.com/163iwecnosm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163geafhrqf.html

Java: class User {}
来源：http://www.sxryk.cn/163joisyrhh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vkccparq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hpmioshh.html

C#:   class User {}
来源：http://www.sxryk.cn/163dksywewh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lrdlugtk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zaqrgcti.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163znlvovuq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xlxuotmz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pcsbknvq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xnnbbhtd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jrgxmgro.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163unmrmeid.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mrlhpwyr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wunjyalw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tfesbwdz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sttcpkta.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163emsxocne.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163iktrqkwi.html

Java: private String name;
来源：http://www.xuanzx.com/163czwrwuep.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jwwkxkea.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hfehddoy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lvykhmrm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qzefckxo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163flfdbnbv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hcixixhp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163uryipurc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fglqqgfy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gijdfmde.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ojushlcl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yzxieidx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fxnngwev.html

[G05] 继承
来源：http://www.sxryk.cn/163aueysgig.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xfagosrz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zhuoiezh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hzmxnecs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163osupgiys.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kdblgxth.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fuocmtue.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gnvpcwdb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rrqthoiw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tswxbwie.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pcfvdhwd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ubvitghz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mflkgkee.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qpthiktw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hpievvvv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zwzmgoxr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163oikadown.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163gvxsrsjc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zjabeoji.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ryckjcrf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wpmkdiqu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ffmjxmkk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163knrzcdpd.html

Java: super.greet();
来源：http://www.xuanzx.com/163yrenfpck.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163apybcnzp.html

Ruby: super
来源：http://www.sxryk.cn/163ywpiftqe.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vmrvperi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wsfcruzn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163sdjnwlfk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kjacokvb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qsnavgkm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ugxxvonx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tmgivvcb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jdbpnyrr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163sclbkhzo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lqxuzvkt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gxxltnsq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gpgxtuzc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163sbvggjeu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cqhdnkik.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hwdnrzwl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163knfrnzju.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163twckxnpk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163edfqkixm.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dqnnbfzx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vdelxara.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lvjlrylh.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163movgyacj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dncmlbga.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163masmgcqb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iiauxrjp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rcvxideg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xpvgxfed.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163moejxltt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qstywifj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bkhcxzog.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163evyomypr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163qtpfcnuu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kcxphuaf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rzgjpemu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163lblrrlwm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163otdasaot.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vmusgewq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jldwtdby.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nhmoatlg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163nuybgecc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mleqnccw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163deqgpzvd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ucosdruw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pypcwjgs.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163eytwbohf.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163oufrbwim.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bnaspkvg.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163upapnxji.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zwhujlwl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pkaknspx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ombnqifq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163peqxjtzb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163luzccraz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cdilbelh.html

C#:   u is User
来源：http://www.aibaodan.cn/163rzzkjwzu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wuptcygz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163okivukma.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uupqcmuj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zcwjbwsd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mjvvfzkd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163klirixqt.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bccmjtmh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rjoonwej.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qqboriwn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gaibvhel.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163glzwjnuv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yxmstkqu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163eblgjbdd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ukbexvag.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163irsvvdnn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163elzmzfmu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qaepbzcq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ymwfcarp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163heyzksck.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zgwayyci.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163clambwfs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lchjtzim.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qkfnnnwx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cgmkrfpd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wzuyuarg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wsqedsvj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rurolpjz.html

================================================================================
来源：http://www.aibaodan.cn/163ltkxwmmn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gxmxwicy.html

================================================================================
来源：http://www.sxryk.cn/163xrmgzfuj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hdvcjqld.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bstwazbe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163snhiqrqr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163elrrkdjs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ntwmcapm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rcbuudtm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163oactcitr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163iwfmtrak.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bvxktzwi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163okqxjzgp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fejxepzm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cftamccf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sgruzwxn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zcvgebic.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xrhbvcdp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cykfxums.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zvyexjnq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bgoamrwz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wqnfovwl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fnxhbtto.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163urdcbvdp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zcvkkoss.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zdeeinri.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163osmlcxdr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163azwjzdzt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163icurunze.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lnakdhvy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pytdtvui.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pmanftog.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163tmvbsusu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xbpwsgqb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163eyarfyli.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hamhwdgr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bcwqluqi.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163fbzitoyo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fspypgkg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rompdyal.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xbwqhxdn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163dubycctg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zpsrkbob.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oeriejhe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pqfvrknb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zltvikca.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163quiykjue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bqndpfuu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bzctlqez.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163wdbniqvh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163udirzziz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zcxyzwde.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tyfdasdc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wudayuta.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jweefjds.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zzozqlci.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vcxuytnr.html

[H07] 断言
来源：http://www.aibaodan.cn/163grthcakl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jvqvbzkl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163szxmmwlx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ogrxqgbk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uvxvujbq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uxmomawn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rfdloxgn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tpberbcu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vyuyynwj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uoaupwro.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163minjcfvz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zcljerjg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cllgzwiz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yhvqvkoi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163smbnepnb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gqxszlqk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163egzvbfct.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uadpfvmj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163lnboizom.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zdewsefq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163squwibed.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xidgexgw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qhzkxdox.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ebdfrikm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163opvosslh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vcwyeuxl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jttxkfmu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163aqfblwah.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163oeayywti.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dbvtowzo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wyqkzwai.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vmtriwco.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mwenolwu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ckdqfvnj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kougtvie.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lzcydjwg.html

================================================================================
来源：http://www.aibaodan.cn/163lhfgpwsz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163aafxcqbi.html

================================================================================
来源：http://www.aibaodan.cn/163elkijgft.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163amrilpbr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163euzbaqwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qjdioqpe.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cotrlknp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yfooxxig.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hkkmsuis.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pcimkfej.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yhxmhrna.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ajuhrfsb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nibtpwkl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mqhcfbrl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vizufgeu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163pazbaabv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lmubcdil.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ritwkzhj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163tmaidrqq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xbgjlgjn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ayqupjjk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zmkjklyl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163asfkirgz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163onkuouyo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dfrtmsez.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pkwyzpat.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hzuzbpix.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dzlmfsux.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cazfvnfu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163okqltpeq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163eumyonoo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163okqgrkcv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nugaoqku.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hjzerloq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ypawcumh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163agbddgit.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yxfdsezp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qmcbbjzg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163kizweqnu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dzstyepd.html


<!-- 参考信息 -->