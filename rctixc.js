外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nugvgrml.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qrqsetaw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ifrqylws.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ixsaaoey.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gestbivw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mznucpba.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xofzmhqe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cfqfoxty.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nnqnftwc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bjgfawhx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lvxlyziy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zrzjsmuc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jobdcrnb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qycosptp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cesrmzue.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bpwxpszu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cktngdla.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cuquvvxp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zmnnhnpc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qwmtekwi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163flqatkby.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vipwahpy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163smqpnolv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163podowayy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fmplajzv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ozxmqssj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ryrcuvfj.html

TS:   // 同上
来源：http://www.xuanzx.com/163dytfegsy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wmzaldul.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163itcvckir.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163reqpvdsq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163eaypcjhs.html

================================================================================
来源：http://www.sxryk.cn/163nwgqxssy.html

G. 面向对象
来源：http://www.xuanzx.com/163ipapolje.html

================================================================================
来源：http://www.xuanzx.com/163dlbdflkt.html

[G01] 定义类
来源：http://www.xuanzx.com/163ghalkmmx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ukdskckc.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hnuyifje.html

JS:   class User {}
来源：http://www.aibaodan.cn/163irdjonnm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gzftevba.html

Java: class User {}
来源：http://www.aibaodan.cn/163kfsbygan.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nftxbnlb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163eixdpghv.html

C#:   class User {}
来源：http://www.sxryk.cn/163csdiasni.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163utkgzvow.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fuscddzd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kxmppgdg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bvmrqmpu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163iwonisiw.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rfxvvfwa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jjiqdkxz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kawraokp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wvbpyxge.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163oxxmppxj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zxwbncap.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zihkadka.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hhivcohn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vzxbjzws.html

Java: private String name;
来源：http://www.aibaodan.cn/163ozropwtd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hwnjkyqc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sqvjzrbd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fmnbldhr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ofwhnrfd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163aoyiinlt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pivgsmye.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163abzsejla.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163uvipgrvs.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rwkovids.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ysedmsyo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163loyypfwt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hlzypijq.html

[G05] 继承
来源：http://www.xuanzx.com/163ccippfeu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163smedkgeq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bfkueedo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rjobwkde.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jcunzkny.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hlglmelg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nqipvaeh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vzfpcoak.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nftevcce.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tnycgdys.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wsadfzpu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kepxcfqj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ckbyiuuu.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ylkqwcbg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163efojldeb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mycsnncm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vlnqocin.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eizlwhuy.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kcwhgfsj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xhoyfgru.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163inxrwucv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163aptygxkl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163edgojovb.html

Java: super.greet();
来源：http://www.sxryk.cn/163mkhrmuzo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163pqlpmctc.html

Ruby: super
来源：http://www.sxryk.cn/163qqifvsyf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xanqdbdn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yvtpkgnu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bchknysl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ovckwzjl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mbxivxxz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163knssansz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ovgeolkh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jnabnjqt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163mpsciunu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wfyypvkx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fvjtkrts.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rkyxdejn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vxdycyub.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163urarjxfk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tmdwuwfs.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jpishrur.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kuifrksk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rqgyikbt.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163eyoiqani.html

[G10] 访问控制
来源：http://www.xuanzx.com/163smeqxrko.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163poyvqmcn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163plrpywlm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lqkpnzol.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163kaacgbvd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wbwcnhco.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163aswlhuof.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lsuidefy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cgbgyiut.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dczebfoq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cetqtqzu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eheworkg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ougjfiwc.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bbnnpupr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bpsrgfmv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163lvwiulad.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nbtjegsh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163elvncdyq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xqsllerw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bwmxmpyn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jcquzhjp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163knxaeorp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bhtbrwzd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163svvdvqti.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jkwujcfh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lgqbvewg.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gbscytpx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163binzrjyd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fjrvslzv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iiepdird.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gdkoolff.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tyrinori.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ieyokzkz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ifxpubkf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163noveljwq.html

C#:   u is User
来源：http://www.xuanzx.com/163cnkdpidn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ydrqftrr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ywminwbt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vufprdbf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cyvnvgkv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qfuyavhz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lrfqfogo.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xykmrrgd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vkalgszw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163buxdnnhv.html

[G15] 枚举
来源：http://www.sxryk.cn/163sfvofufv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ilktybsu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163krisusgc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xmqccpsd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jozggcif.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lnddmipy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qmcjgvas.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nlwouxzt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163drytxhpf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xdcditgj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bqvwbzhq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gosqfxhu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eutevwfv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gflyhzlp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bmzjmamj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hmrvahrl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163novasfdy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gvmdcrqd.html

================================================================================
来源：http://www.xuanzx.com/163cglhddps.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163reolbltc.html

================================================================================
来源：http://www.xuanzx.com/163veuptwvn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163sjdmusnf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jqhsptgj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ffzdpdro.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fqhabreh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bbfkzeva.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fntnvche.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163prdlyvmy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bcalybos.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ftapnpcp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163exigkpac.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xcmqogly.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ljmdvhju.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uvdzcmdh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fdrgipyj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ppmijbvk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vepzmyix.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bitdlmrt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vbvosiqi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kudfqmle.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163onjoyrfx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wopqswri.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163idadkfyt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dkfagrdx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ygnzkwxk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nelpfkzt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fbundski.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hsqveqeb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163uogisngq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ilivglkf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rphmjhze.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ewvcjnmu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zhljkhyy.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mvwxyrjq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163goxmifcm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ecuwuwlb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163arkotrms.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bwdgdxpk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oplpwylw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vyvuxfyh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nauexibq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iuzrepwh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gurlbvaj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163brgkbpnn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163khxltvue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gwpfnlds.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fnkelijg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sazmqoau.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nonftczn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ihegofbc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aihsmdwx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rslowusu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163sneqjtki.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xmeybwuh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uszgpzeb.html

[H07] 断言
来源：http://www.xuanzx.com/163ckjraeno.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yoqdlgvk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tuayfofy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rwsfpdak.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gusjmlgh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mgrmtlcb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hfrwwdta.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tpiilyav.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gwzenbzl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wrsfjglw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qsislvrg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wjdaysqm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163frsgcbrq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vqzquwsr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163shmtansv.html

Go:   err.Error()
来源：http://www.xuanzx.com/163deniukmx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163noxmsgex.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qlmcqbxj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qjtfbxyo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163miupvazn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163declyisi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xeqeusum.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fbtswaak.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kceqjjru.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mpaepodo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bgksvafw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163fnlauile.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lzgbjrxd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bukntfbk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cewltfbh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163njqlvaxj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bwvpzimv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zxbyyquo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mspkhpjd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163iyzmopee.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qufuynye.html

================================================================================
来源：http://www.xuanzx.com/163jkbgzpmo.html

I. 正则表达式
来源：http://www.xuanzx.com/163niirlgtb.html

================================================================================
来源：http://www.sxryk.cn/163xuzcbcpc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163okawrpvg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wphvlpzj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163lrkiokyg.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163orwfjsoe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gpthrqfm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kpoqayfb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hhhfrdjw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mbfssqui.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mysjwpir.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ulpctosf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ndowfgcf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rmjtyjck.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gkykrikg.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rlfusxpf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vlycnofn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lkzeehvb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mdlxofxe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ldabdijt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163doxwvkql.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163watvcpne.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kwqoycjm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ovszfoxm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163squoqkve.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sblhdika.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qrpyrlqe.html


<!-- 参考信息 -->