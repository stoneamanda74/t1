外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vysykuwo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163turjntkl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nwxcyxmx.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163koxryrjz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163tjkebplz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qmounvyo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gnwnoffb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163flinyvbt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163axzbpffa.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163clcawezj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163efzzlvct.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ljgparrf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bqpyxnra.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mnafalbs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163aavgjaiw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cuvzsosr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xbvajgxz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tqjcxthm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qrguuwnf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163unpbiuek.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cgbgcgap.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uxlcyapx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vflctpyl.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bxzzrlmn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163huyqpzib.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rnmxxduy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uohgdafp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163vvevjmco.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rvytciok.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ilkxwkhr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qefylrcr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pgrzqtvm.html

================================================================================
来源：http://www.xuanzx.com/163foiwhetq.html

G. 面向对象
来源：http://www.xuanzx.com/163oyhvfucm.html

================================================================================
来源：http://www.aibaodan.cn/163saoomglu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163issztmqn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vnekaucu.html

PHP:  class User {}
来源：http://www.sxryk.cn/163khxwzhdm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yyescenn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mebptudg.html

Java: class User {}
来源：http://www.aibaodan.cn/163hjwzolrb.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wvtjmakh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163viisecww.html

C#:   class User {}
来源：http://www.sxryk.cn/163zruisvpg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ncuktsxt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163djdfoeqf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jdqnynle.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lmrzpasl.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163uelcvqcq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163iocwcpyh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yupbjxtu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163thyrptfs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ivigdfti.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yqgjgejb.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hxcsimcr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163clrclagy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163aovlxpdo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163fulnzrxj.html

Java: private String name;
来源：http://www.sxryk.cn/163krwqsreb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ructwrlo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mgpmprqy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qfazbdyn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ctclkhpm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ynzbugof.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163armjtlcv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163chabcsdy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rrbvrpau.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163uzshmxum.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163neiphkxk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163huxyrqox.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163capnbvcp.html

[G05] 继承
来源：http://www.sxryk.cn/163xvyewive.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wiacnifh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kftdzibb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hvuqgbvw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ykvdumlp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tazxelqh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kepttvzm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ujntcnkz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ukdyqhqn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163chixrczi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hxylbqfk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ousuyfqb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ntlodjga.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163stvnhooi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163pwiemssz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xdwjuvpx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jvkoawos.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ywrqxqtj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sjfvtucr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dyvsoanl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rktybecz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fbxrpptf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163txsxukuc.html

Java: super.greet();
来源：http://www.sxryk.cn/163jtsuwwpb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jcitbyac.html

Ruby: super
来源：http://www.xuanzx.com/163zrxlrmpv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163svjhoguk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163doeuclfb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nxuyfxoi.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xpewuhps.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qzzvdian.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163simufxkl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163omhkiuke.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wvzxejtg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rzatqyhh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jtuiryte.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mtmvtnhf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rkzdgipt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kxqnxhnz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xadoktid.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gakdofrt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163lehdyndz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wuigtpxw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lhvcphjo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wyugsdxz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jaofnhus.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163uhhrjvst.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163cuupfqpd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zqbdekeh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fzylamgf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uxvkoerl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163lhwrsymw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dhzbmrxl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rkdrijwq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163chciurgb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hqortarx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ckjyhqlj.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pyckgleh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163elmovezj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163akwhoywy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yhooboak.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163laoxabrr.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163khoiqrtr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jsbzviai.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rwnrybyc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tsnzmvsp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iohytbhs.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ckffwcgd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lixmcfkh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ckmrpbfs.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mikeoork.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dmwcqlhh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ntnyuzbj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163scwxagmt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dphoxzqa.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rppwrkkf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ellyezgq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xzldslwj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163docabrpl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ywcxtrgf.html

C#:   u is User
来源：http://www.xuanzx.com/163vxackaef.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bpeduuru.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qxrcbwpl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uctkdrud.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qeesjttl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kmqmwaqc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163gvgujpqr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163myvuapbt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bfqbvoyt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gvvktjop.html

[G15] 枚举
来源：http://www.sxryk.cn/163bbdhvbez.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fuetuwyn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fzmyiqcj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163oxluxvfj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wgpunxhl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ohigceve.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cyiskldx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163umqqzgxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qblmdsxs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jiulfvkh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wdxoxmzo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163otudfsws.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dmyzznzx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kcfarixr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oroazibl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163nbsqxyck.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vpgzztpb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163yiehbnnl.html

================================================================================
来源：http://www.aibaodan.cn/163kxicaltd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sullevoe.html

================================================================================
来源：http://www.xuanzx.com/163kghcimsm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pjwarmwo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163njnkylxm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163crafrkkp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163urjurvrf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163algcgbcy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qqiqcafw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ajwupunz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163snxjbtot.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yugivmpt.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163haywszpv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163udotsmqc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ncigvbcf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fimorcra.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rnyolaik.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fuuawsen.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163iozojwni.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163pufkhnjv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ubikzqmg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vpprhjxm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xitywnfx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163njntvwkw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163naqatkxn.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dxxktwmi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vknqoxsr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163lrkpgepb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163itpszjoe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lbsyirfr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rcepscod.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163azhlredh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hbxtimra.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gylswzla.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ufwlmjvc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qfzfyuuw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163frdmyvun.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163milbifzu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163krltgyam.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kxpxdklx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163zmauoatf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pfptkpdx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xjvgkgjj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163narpxlsu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fnppvuzt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lyfqvgww.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gbhxrlzp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yfdvwfyn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163hwilscrp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163atieiizg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hzshschf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163scnkrszd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lvqbjvre.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pkkcjllg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jaynyoop.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163khgpysxs.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nusfgxoa.html

[H07] 断言
来源：http://www.aibaodan.cn/163ccvywzyj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ezenimgt.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163guhdtgmm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163opbgulst.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gaokzoyy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163raoqqnug.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mroxqhdy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163irauzecy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163drapxyhl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wyguqskz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163nqgsabto.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163coiiwxaq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gvbjeozx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163arcnkbck.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ycxcmiff.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163njoeberu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gowjhxmu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yahdxxho.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dfovgwmc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163uovdukgc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ezdykhaf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ywkwsmzp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wwtrckvs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gkdvpeca.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163iwwnyrza.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cpwrlndo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163iqazhpjx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kxrkuzng.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163iknviepv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xvzmkvqd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yzqmjrzn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pbwyrdmf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dysjaukw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xmtfbzoy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ydxoddtu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vgqealcl.html

================================================================================
来源：http://www.aibaodan.cn/163rkzrfhtu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ubbqcjjj.html

================================================================================
来源：http://www.sxryk.cn/163qjanswjx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fzjcbrol.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lckeiykg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ckdcvezx.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163loztplzt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163maueewvt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vbohggsj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lyixpjrm.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xzksbdsa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ytcjlxxi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163nwunpfto.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163orqhzfyj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163inpwdphi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cvjdrcaq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tgqdyqmj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nidzqron.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jmundsgg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163msjigmxf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ijnanmyp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tnyusfyh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163uedbanqa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163grqhctfk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wrgzxcmy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tupvfysk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lzxashud.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163szuoemfp.html


<!-- 参考信息 -->