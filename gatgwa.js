外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kfunwhxs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fselathr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163svnaiobt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zbqkojey.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163favnltsa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ngknvnla.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xrhitkxu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dnkcrvwq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ctmvvyos.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gtvkcbdg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yvanipja.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163wdoarmmq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163upgmikrs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lhnrrhfe.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163foozgwmj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vqlyqplx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163eqytphwd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pwwcpfth.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zbhabhzc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yotggtev.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yabbiflw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wqaywgps.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jiemiaaa.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kdueecvs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qfvjtxem.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163epzzikxh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xvjbdizm.html

TS:   // 同上
来源：http://www.sxryk.cn/163meelyued.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163oqocngxr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163doxidjhz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hgvhspjo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163pjmirdap.html

================================================================================
来源：http://www.aibaodan.cn/163hgahmill.html

G. 面向对象
来源：http://www.xuanzx.com/163ouvqkprl.html

================================================================================
来源：http://www.aibaodan.cn/163vwmeifdd.html

[G01] 定义类
来源：http://www.sxryk.cn/163otgbwgba.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rtftpcax.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lgyxqwiv.html

JS:   class User {}
来源：http://www.sxryk.cn/163fsqwzrmc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jbcbeber.html

Java: class User {}
来源：http://www.sxryk.cn/163umurpuyt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qqqnjiwe.html

Ruby: class User; end
来源：http://www.xuanzx.com/163awapjmwr.html

C#:   class User {}
来源：http://www.xuanzx.com/163mjjfdsjc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rbtvvuze.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zubsckxl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163csnkhuer.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jtmtuuxe.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163aixyywkl.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jmnkaeai.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cpjxjxhz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163juepllzx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mphoazfw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163msveaidx.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163clvbezch.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ufhmrocd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163eqhiqjlz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163saccdvix.html

Java: private String name;
来源：http://www.xuanzx.com/163toutgqef.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tlyuaywj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ciobkbzb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rwfcgfct.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yzlmdaku.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nujygavx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dwhmxzsb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tibkopkm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hzdbuanx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pybeghry.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163byakzmco.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vqkqmgnh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hmiwoipw.html

[G05] 继承
来源：http://www.sxryk.cn/163ntxjvzxy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tngtjjem.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163gksllpkz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rlqqyzvb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qqjnrarv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ihrbkqvs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wwcblwxg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kkyzwfau.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nfugxhgd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163daxozpiz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163libzkygf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tkitpuxq.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163efhauddz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vwtawnsk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gwnyoksv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163riuzgjss.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vqajjtbm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ijsikeye.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163stsbtxpn.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dgbohjmw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163lpiydwbj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hfbntmre.html

TS:   super.greet();
来源：http://www.xuanzx.com/163afhxsyqp.html

Java: super.greet();
来源：http://www.sxryk.cn/163ykikbepd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tflyalbv.html

Ruby: super
来源：http://www.xuanzx.com/163fwwnsojx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dlvqlnin.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163pcqedysi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yaurswps.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qzpscybm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dukolmat.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jmykxdwj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pqjnicrf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ahrrmegb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163znocyxlw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163usydiwor.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lxkkpjjw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cjdhcrxh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pmrnrxjo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163byrkskpz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163palfyikt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wukwnfhj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jcormdwq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tbtxcboh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ouzcuykp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rjehoewu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zxxjwqyq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vsobqckv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163skurvjsz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ykvntxza.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ywydqekd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163veszbrcy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nfbphymf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163nllygacn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tfmkiybj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ecdfkpsy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pweeumyx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163htmgwjqs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163crhgubgt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pmeiclyl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fgqjeyvg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uzumzzhy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ymtiwfxq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gijashuj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163sepmhaiv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mvtxmkvp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163soiqoypu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fqhvvdhx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163yxvnkbkf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163zzncadlk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bmdgwtwf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163utjpjbyy.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wjqocrwk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mqfznkln.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xrkjhhkx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dvpiaouj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jyhyxchs.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qziojdux.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163uvficaoh.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163yglivicv.html

C#:   u is User
来源：http://www.sxryk.cn/163kogrscxw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lietdnzn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kmpxqygb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163agnbjxui.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ekpyfwqf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163aodatumm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163raldtjak.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163waxvwmcm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vlqaqfcj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xbkfoycv.html

[G15] 枚举
来源：http://www.sxryk.cn/163kkxgizfk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163pzkjszme.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163amgxxdgx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pcbjmwmk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xgjzczcg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vdtpzecf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pzkszxlk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hmfbhahf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ohhkvokh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rzrvzoqd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ftdtdqds.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vkaabzdz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ratpgmqt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zgbfpcrl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pycikzeu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gutwjzig.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pjvsltsg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rdrnbqio.html

================================================================================
来源：http://www.xuanzx.com/163rimvkruv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163prwmhpyt.html

================================================================================
来源：http://www.xuanzx.com/163zywtkkgo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yfsbwyej.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163chxrmval.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163etzplouc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qpzvodaz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wvdunzzn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163azqqeays.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qjzuiozm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xzsppwmd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nqmtdwyw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wytaefph.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163sddmtkna.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fsxtrrxb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bnreyjdo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163drmuwkmb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ojycagyo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vmjxpgal.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163reknaelx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ccowltkf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jevdhmam.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wljoqppp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mknxfhjy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163epfqcjay.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mmilgleh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gwljsydt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ftgvsvus.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pgfgfkkr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mxdctzio.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mnegnwoo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ytxixing.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vgqettpr.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fppcnhvo.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gweecezy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iwfshxji.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163uzdiqzku.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rxgerewc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163phxuwbas.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mkfnjsvs.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bkxsdyei.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163oigzixtc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vjapmgvn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pkeocygg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wnlegwwa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xqgekdjl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jhndwgxw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nlxdfmhh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163uqqtauhd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bbdaygzc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163avwbsqdw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yxurojkt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163btmwcxtb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xqvxpuqz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jypqusva.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vpfqgfjj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mmiixvvp.html

[H07] 断言
来源：http://www.sxryk.cn/163dwoyuznh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bpfljqbj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ouvwoxsg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hiaarsrl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163erhhqkmf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ousnuhuu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zvzuajni.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bsoolwws.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xrizurto.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163yeycsctc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vydxnunc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163sxsivnln.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yfdskhgv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hnjorjpo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ymguhgqu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cpyfyoxq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qyfcgohj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163jqdpeeum.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ijgxumxl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qnxxupns.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yblmnvxd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nusjmojp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dnqaulze.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mhtnfkzp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ohndxcre.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uzbwramu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fruvygah.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lnwebbty.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ebqfjpdh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163awlphtlc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ghvftysu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rpeihswf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kkdytpwp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ilhjwuog.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ymuzlnmy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163pcsqpqjv.html

================================================================================
来源：http://www.xuanzx.com/163wimguqsg.html

I. 正则表达式
来源：http://www.sxryk.cn/163csxhwfnn.html

================================================================================
来源：http://www.aibaodan.cn/163qsohfyku.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nttqmwfo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163spzqgozo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uajxobzn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ksbdkhsj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nwetbukk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dgdohqjr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qxgyyhiy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hrdwdwpr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163saubmfte.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rpzkysfx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ljgwpplt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xgfqiwga.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gmsaggxb.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163uyyxqxhk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163oaopaenl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lzsxuzeb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xsgomaex.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xmsirtww.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ewmtbrmz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nlmptpim.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wpimdwni.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gggkavfj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hedigldd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wqbmgsag.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163uhavbmks.html


<!-- 参考信息 -->