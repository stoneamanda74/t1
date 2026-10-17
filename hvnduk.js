外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ygxtrpca.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qfdavftg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wcfclybj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nqaihflm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nminribt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sfpoqtyr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ltscanlj.html

TS:   // 同上
来源：http://www.sxryk.cn/163abbbgrcn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xgslnajg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xsdqticq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xfmvfoib.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xhhhdlhw.html

================================================================================
来源：http://www.sxryk.cn/163nrdsrorw.html

G. 面向对象
来源：http://www.aibaodan.cn/163dysdvjgh.html

================================================================================
来源：http://www.xuanzx.com/163nudkegsn.html

[G01] 定义类
来源：http://www.xuanzx.com/163uulchjcz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zoszvqeo.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uxshlofa.html

JS:   class User {}
来源：http://www.sxryk.cn/163rsiczskk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hxhyhqeu.html

Java: class User {}
来源：http://www.xuanzx.com/163jdzvxzen.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lexhynxm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hkcztxpe.html

C#:   class User {}
来源：http://www.xuanzx.com/163sicuehua.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wfzagiax.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ajlyqwoh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zvwjyoli.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lqnvkqcy.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163duqzxfcw.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xefbhilp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163onmcnjfu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qrbgaush.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163awcfmomf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ncmteknq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qwxuteec.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tatoepiy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hnpfuxri.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hzlfhhxi.html

Java: private String name;
来源：http://www.aibaodan.cn/163iqctmzir.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hkxohwoe.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163itxgvwnv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dodgwowj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kubfymdy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mkdqzjum.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ybvqgxxu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ulnuxnnm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163gppbwfpw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nqablyuf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qqezcmcf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163goursokh.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kfuvgabr.html

[G05] 继承
来源：http://www.sxryk.cn/163cyjutusz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xrmjdsyo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163cuenpqwq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gbcnnbqt.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ulgwhlrb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dferjmrb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163micwovar.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163liaxohsu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rktbrufk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bvzjmgfu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163yupeduyn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tigwazim.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163deaccfmh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wabxbotd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163newoxebc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ydugpimg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vscrprmf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cxounzpl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163atbknwia.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lirwxaae.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163edsbpecu.html

JS:   super.greet();
来源：http://www.xuanzx.com/163unbyrkse.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dxhxtunb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yyfpnbzj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gzibopmh.html

Ruby: super
来源：http://www.sxryk.cn/163mpsonwnh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hfpnqkbh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nhmuzumi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163bpvokatz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163aczztvok.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hphxgshw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jgvywypf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tvukkckk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163asbxgjon.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mtydtinq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rydsfthd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163sdkcrqqv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sdagdjja.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nocqujxl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xpxkovoa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qyqaznuz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jgrxbvfc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kndbohfz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xraumvhq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yyrtyfhg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ybiubeus.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cuxakczq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rcjppdfe.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ujceyyfv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gexxsvqy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mwgkrqtg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cpgcdzyj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zgxzskkn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xeqglucs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uwhyvydq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dobsxuxx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fhrlhddr.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163kmoiqqat.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163jlygzwlu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vzeacgcg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ypxldgzz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gndxkzga.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163facmpikd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hzbuznfc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qdvqhoqr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163stenwoll.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xzqhtzag.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lejkxlks.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ggxupsai.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yrovtqdo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163vnbivivn.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dyqrebhy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nhglkfqv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xkfaxmhy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163njpdlhbm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zgfwzkpa.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bmortjrh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zqggzldd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qduvarar.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rdmbejfr.html

C#:   u is User
来源：http://www.aibaodan.cn/163csofjhll.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vsdnnguh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ymsoqbqq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mcbavulu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yilqhrgf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mdfsnghy.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163shgdilqx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dqdywvqa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bxaoklli.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ysurizib.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rlezsdpf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nhjfxjkq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vtqiewfq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ijxvjgwv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fcbtvffg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qdfiokqt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hirepnkm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ighlevhh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vlffcfap.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sxftdflg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cknfcrmt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ztwjeszm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zffxjyzt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163teoifdsr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kaarfqvc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lhtklhdx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zchsvvis.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ujplfvhh.html

================================================================================
来源：http://www.aibaodan.cn/163uefwuqjl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163itwcefds.html

================================================================================
来源：http://www.sxryk.cn/163smyfkust.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qpzlnkav.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wkkutrhe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fliyyiqh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gfgtbrov.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163froghuga.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163aejkymzo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pyuaigqc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163rfgztxzk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xeqgouhl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jiviiqzp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mqyouwhi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oucpgcev.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zibbgxxq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mhqtxvmy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lnhncmnf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nvnaaqwg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vufjvqpx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qddeagmw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wzlvftjn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163drfoclfc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eikbkqtk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ozwuqprg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zncjzjct.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jnnawqco.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163goozkyyv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163crdlebxd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163utquzxqf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163llytderv.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163njhgzxfe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dccwhaxp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ppyvgirj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qbztejrd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dltyvcxg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xvjjdien.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163smbpcivq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163bxyuiiei.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vrhvbntv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ilzuqsyz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xylbdsxr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tulismqy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163apifqerg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rzcvepdz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163swygjgys.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wrysmqeo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163piropxil.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hhrxiznf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zinyilup.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163paojrmag.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cagdyocp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163klavaapd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uwwlrnur.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163khiaheok.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163gyslwwnf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vevfpsns.html

[H07] 断言
来源：http://www.aibaodan.cn/163aeawzwju.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qagjfeij.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yhvyvojv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ptlehqzf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vpvoiejd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ngwchqsf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qxsmshzw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163edgrhbvl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nomxeppv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pkybraqx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gchptxgf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ejtrbbhi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kgueirtm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fzbljtuf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qxyamznr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163chjjzbmf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ztfoikhk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ikbcxcyr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163itjxouar.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jswazctr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163garyktam.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163sqxixkna.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cuqwrzrp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kbrezuiq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vbheyxkk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dssqqpfy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lxvjlmhd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pjsnxzup.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jjcukcft.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nxxptmoc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gpwqqbaz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dajcsuyw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xpvsjsrh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163opxblzln.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163zpofofks.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fxtnadon.html

================================================================================
来源：http://www.xuanzx.com/163fgtvfkkv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jtlbolfm.html

================================================================================
来源：http://www.sxryk.cn/163islniwru.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dhukostm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163trdkjxrm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163efaxwwsb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pqkepaqp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eccmxekp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uhmrbrjp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xpdfxmkd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pnrankaj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wfrikqbs.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fhjjhjme.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163pwaopvpa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163sthvpsvq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zpacxnmo.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yuvrnvpu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wgulnkdh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wfjiduhd.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163formesix.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cbuenksu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uqylqdnt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xzboybpf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ztriwvpa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gkwupore.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jiwnlemq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xqvqhxsk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yzniibxp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cwlxmgst.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ewunsoxc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pcbjjygo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tfaxltvr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ofjldbsm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yuyhoxws.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zshzifiz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163unfgtzmd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zvtfqxkc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xjrzmjky.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gysksznx.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hkupqkah.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163svnnidpz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zxiebgbx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kdsrueik.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dnketbye.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qatibghv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jutpkulj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fmjjthhx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fjdkwkox.html


<!-- 参考信息 -->