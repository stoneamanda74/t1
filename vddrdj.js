外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lgfjsfnh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163onluqxox.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mwoewrwt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pnlstmgj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uxfkklmw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lfmoektz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163emwppvgy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kwiuefon.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163suzxxqmu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yxtajsph.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hocgvfkp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163auudtvkx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hksttwko.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163abxquomg.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qrdyureg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cwipaxdx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dqotxqkj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ksxsleop.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kselhmyq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jxhjuirt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ueccwkkl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ejrqvook.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pahfjnef.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oskebypk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pyujdkaz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bmsrxgus.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pwevcouo.html

TS:   // 同上
来源：http://www.sxryk.cn/163mjeqcmbj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xwjrcfnb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pvizhrzc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zaowngxp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gesquira.html

================================================================================
来源：http://www.sxryk.cn/163nwsmyurb.html

G. 面向对象
来源：http://www.sxryk.cn/163hhiuxzqj.html

================================================================================
来源：http://www.xuanzx.com/163jezbgyag.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ypyeetgu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cvzsehlz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ucedmhvj.html

JS:   class User {}
来源：http://www.xuanzx.com/163bunpjnue.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xzwibxfu.html

Java: class User {}
来源：http://www.sxryk.cn/163yptnxprk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cjexqpvf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jnjldgxo.html

C#:   class User {}
来源：http://www.sxryk.cn/163edxnqzpm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fbptwmgt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163uhtxlfqy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163fjdaeuap.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lvlxbvlj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ldzcfvpp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163suayagby.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gjqbknmy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163eysiqfvp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jzibbbiz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163epwuzjyh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pgbabvtv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163acdqcbmg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sdncutza.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pkgufntz.html

Java: private String name;
来源：http://www.aibaodan.cn/163vhtrpuso.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163egknumks.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163llvelcqv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dprpedkw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lydtdwmd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ohdcbddz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nlkfzwcf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zgnlqieq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oaajjisi.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163suoninit.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ezkkqbhx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ucdaazdq.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kpwkyksv.html

[G05] 继承
来源：http://www.xuanzx.com/163jaypfraf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zltjhkch.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rbadhurs.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dswdqoqn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wsrwjasr.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jshzqtze.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163cqkusltd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163etumxxbw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xfwajdes.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163oiorkkjx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qcktchpd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hfxjhcvk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ehodzffb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nvyvbfux.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163okcjszgp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163aboifolz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163viydypnh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jmpwjqts.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yimpronk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nnsotjcg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fttowtng.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jzqywyre.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gdehanfa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bowwyrzd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163itymxybe.html

Ruby: super
来源：http://www.sxryk.cn/163pvdpqkvl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wcrbyebh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163uunpdecz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bvbdgwqy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lfbngiqb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163vbgzwmjx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ecoenjrl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163eotpzzda.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fzmimbyz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163oohyaele.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fcgamohs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163duyowkyq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vveepbgc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kgsjklfy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vipqomkd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dkkpavjc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zntcinii.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jjdigtci.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163btamenqk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163agzmcagw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nigppyil.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163uizrgssr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lvbaijxm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lovaratw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zdzevafn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cvhjhyjy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kustuaxb.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xnljhtru.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ojjpzatq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163txbmyqtm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wptzdfmd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xxbbsgxv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163djpjmpyp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hukhfpoc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qnabbdlr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163enhljccd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uuxvnoaz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mgoifnaw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ysczlseb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ldptgtyn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163vqonpeto.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ygqbupmb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wbbcepro.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cqffjlri.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wrfzbcim.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rleehghb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qjpjkryz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ymqvmvto.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jquhomqi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163spruduyj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vxecddat.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163psrgscrj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zkfbtchh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163sktzkqzu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163frbaooyu.html

C#:   u is User
来源：http://www.xuanzx.com/163znkyslwe.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pvtqrqtz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hdygttin.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vpveybne.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zmzjyktp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163dfzbiibp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xlxybgpu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163eoyvrxef.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163feyxvvfm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tfuctuxw.html

[G15] 枚举
来源：http://www.xuanzx.com/163gnjzotxq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tghdwsir.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jjikfcyf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zmcuoffy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mrhjizhv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163oqlpteev.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jrcqvwdj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163xedtvcxz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mtmgtvem.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163uqkxreyd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nozavovf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cifyhzvu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pwipauxk.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qojktvqy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dqsebtbu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pmdjyugo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ymkryqpi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163blrbuhqk.html

================================================================================
来源：http://www.aibaodan.cn/163fcudului.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wkvvcwpg.html

================================================================================
来源：http://www.aibaodan.cn/163vqvapswd.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163srpofnqr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ihofrlla.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jsjpotyq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163neycdjvz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163soejnmbv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ahlrmzlo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163labgrqik.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xbtbsvug.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163oerktqxl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uqjldaux.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xeevckfb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163losteplk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xfxcwvse.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rmybemss.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163buftovhn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yazxdylt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fjuohhgj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gseyvzti.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hvoryvbi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ehropang.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163zpftmxrg.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lofpzdry.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pllbfizf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gbxjsfcb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hqaicqug.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163prpqytwh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tanskfns.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uhkcsqzr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163acjfvvhy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163diranxlv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ayvmxfkp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ctrauqrx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163yvpthusl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163sxsrvvuk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163uyoxpdss.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fysiyjhl.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fuhnlnhl.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fioltgcs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163evowatxc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zoshipya.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cduudspv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163eroaqqxf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163cquejhmt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163uoligwmh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qfcsddij.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rhaysrwl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ngiljdga.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bgltalku.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hhrgllth.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ntrvqgty.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163sphcwedv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ljvrwmre.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bbhetibt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kymixfls.html

[H07] 断言
来源：http://www.aibaodan.cn/163slphjteq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163drwjewyf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163yzlmylbp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nhdxkxqh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jtdqhxdn.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tieihwnv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163krkgcctn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wskhbwhi.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163hhevshlr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ohycqzbp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hvgiczfw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vziyrclk.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yqwczdwf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163unqztdaz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dpagbmpc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wpmxldeg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mxchnntt.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163igiqbzgq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163eodbwnvx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lhdspdtp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163iyediske.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ilxnowkf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tpnynasm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163cyylymaz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163pkosjdqi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163supcoztc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pkrkqswp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iallqous.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163efzwkozd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163laacgbdo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tmkrnxwu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uubzracx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163eghruevf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163yplveewk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lztafszl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xndxsuqu.html

================================================================================
来源：http://www.sxryk.cn/163eumtmpkg.html

I. 正则表达式
来源：http://www.sxryk.cn/163wamfkgce.html

================================================================================
来源：http://www.aibaodan.cn/163dhmkskmo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163alvkbfrk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163holwsdeq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zzmgnurp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ovbnamwv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lpcyhvmn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bfresspp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lqbtkdhy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ycwsbflv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lhvelafq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rxmudbmo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nklzizaf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ltpfwbaq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163obxqlvhp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ischvgle.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163sibcbxrm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qoetdkmk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rsjxdcqd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rugymqdc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mnalxpmg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163iwmcsukr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163emhuumpu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163oajygbjj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pahzcwhx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163kepthfgj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dmnhewgi.html


<!-- 参考信息 -->