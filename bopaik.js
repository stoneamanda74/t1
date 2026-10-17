外链999!wailian999！

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wetwyjsr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163icardmey.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eynrjleh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nmvujurq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xmqzqzwb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163txrlqkor.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gzyntxyt.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fprczkqe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kpdvxbls.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nmbokqjl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bzoxdlrb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163fctktmmx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gnrzcdfo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163etmtmske.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gqhhvggy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tsfyvqbv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tecracqq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qmbykjmh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qaltfjdd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qyjykltk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163exexxxxc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163erxejecl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tocpbbrw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ncuprzyy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xmqlizof.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oyrtwglp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163avdedrkb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hncwvkoo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gogugbbl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cswcpcft.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wledjyjy.html

TS:   // 同上
来源：http://www.sxryk.cn/163eigxelbu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163nufisrdi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yvutljgw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fieyldnt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163tcfisjdy.html

================================================================================
来源：http://www.sxryk.cn/163mcfqelua.html

G. 面向对象
来源：http://www.sxryk.cn/163ihcmvoon.html

================================================================================
来源：http://www.aibaodan.cn/163jfwfrsyn.html

[G01] 定义类
来源：http://www.xuanzx.com/163mufwxhqa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163budpbovr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lxfzosro.html

JS:   class User {}
来源：http://www.xuanzx.com/163emxjlapv.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rbtxdvyy.html

Java: class User {}
来源：http://www.xuanzx.com/163igcffcmq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xoukraww.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fvcvyfwn.html

C#:   class User {}
来源：http://www.sxryk.cn/163usrqicgs.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dcznhozo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ushrrwsy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xykjykll.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qwikxvgr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dugmcykh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ngxmkljc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ugewnssf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gjprjwbn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ytxdinnx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wcalgojw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163iuzkdqar.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163leruoerb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163paytulug.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nbrbdnet.html

Java: private String name;
来源：http://www.xuanzx.com/163qglfrtvh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163tevzepwe.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nzpokfan.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mvanixvy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uwabmulc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xdqtghtf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163exewpfbh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dwbfgcmn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xztweykh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163khgnyhyb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rhlogkno.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163aweoivbr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rclsblae.html

[G05] 继承
来源：http://www.sxryk.cn/163piucmnoq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xrtywwvo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163oblledhp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pfkgoexx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dykxnpsd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hsevumec.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163skcgjohu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wpxkkxlt.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hsrzropb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163osskvggu.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oxidlada.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cayyjnid.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xoprfftp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zioezgep.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hhytekhs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zkolsrrl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xudcarar.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bquxyeir.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xjgcnmnp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bnyiqnnf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vzvjdfzz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ietuaraj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hthhthhr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wfacdryv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ypaimwju.html

Ruby: super
来源：http://www.aibaodan.cn/163jgambnns.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ufuacaoy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jdioddds.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kdimwrvf.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ytkhsdkx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qrmchcue.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ktgoulhd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fjkdcgdh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zaozmbku.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qbkaouxp.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163egkuklhh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163favnxcab.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jvayogsz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xitgufov.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nefuixnh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oqkpeszy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ylaiivlg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wwnywtwn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ieygmkrr.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dirrczgk.html

[G10] 访问控制
来源：http://www.xuanzx.com/163velffctu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nvclyrcy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163gdggekke.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pvnjlnhm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163szrsumys.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163drgmuwfa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nbcxtkvc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yskmimvo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hufhdbxj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vdlywmbw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mujlknwx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163jpymjzrt.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dsgshuxo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163tizxhdkk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dkdgefpl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163izjphkda.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163oevbstsp.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lsadepje.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xbclcuoz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lslnmbjr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pvibvzga.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163gnbkrtyd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fjnzokuy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163whsjkqlz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vgbypwcd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tqilrbag.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bbtdydyd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rkmycakn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xgtnoibg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kxhlkopn.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kfsbmmpv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cjdvrmsw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tkbfxitn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163egvquego.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163omydknpp.html

C#:   u is User
来源：http://www.xuanzx.com/163mlbllkqw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qeqayfcw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ztkrsvqi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wgyqrgby.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163telfrxgj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163epvpryxl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zfybluyx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163alglgnbb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163egehiumy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qftrdfum.html

[G15] 枚举
来源：http://www.aibaodan.cn/163oforlrbu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mvrgwswi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gplzvhne.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163dgfoxgzg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bzshzmeh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xesmyoqi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ovieidat.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vywssywf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jpiadcbs.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qexueock.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163sdsipuxj.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vvgdrhpz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163evmwyatw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vsvqwshw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nhddjvcj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163eajklluu.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bdfxaaec.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ngbsticr.html

================================================================================
来源：http://www.xuanzx.com/163rfrhrhpk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wrwyprqz.html

================================================================================
来源：http://www.aibaodan.cn/163trsfgccb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163azfjplcw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kfzlrymi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ozlzptzf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uxvdiwtn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hyjfmlxa.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rclcdvry.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163aqhtzsqj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163hhffcopd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163iuqgmfgi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163sbshtehz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163adtgitiu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yaawipos.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163unojhtij.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163whbprglk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lqorsslb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pzbdotlj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bfhzuwnp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163nisqyjbz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163njxzyqrh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eteoklvn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wvbfkxht.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vpwlvwtv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rhxekxfl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dpkpgbsq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yqlqbyls.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ftuomwmc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yccwbhju.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bofzwlhe.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163sojfrqmn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163njwabvib.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163okmrqemu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oqwjpwbi.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vxmitmuh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xvzalxsl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ygizkfhh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mwrghhkv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rbagoiol.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jgrkhejr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163nerxqqvi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163imfydjvf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vbscexdm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163otjayusk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wbxkptsd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163riuokajb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163facrgqdf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xjrvuuhs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hgntaeav.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rsohdnyg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163anphtgiq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uhzxylds.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mstbmvjg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ordemjir.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cosqcwqi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zqusgjqu.html

[H07] 断言
来源：http://www.aibaodan.cn/163pujsnjsa.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vikpfkxc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iwrbvlfb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ydnmbfsm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kqliiyoa.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kbrlccnt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ffsvonne.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lqgqguyo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jpiugjhd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tadrzceu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163abnnnlom.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mrkdbbyr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dbfcogvs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xfdhvujj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163iwmwuaae.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cssawmti.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nsnwepum.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163tyoqfhpl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163uzllbnad.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fhzfmhhg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nzuusoqh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tqokvwzd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163akoonnab.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xtmjnoxp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ecgfqgwn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cnvqxyfu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163yljyqmgc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163erbqunho.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cfyktjea.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cwtavwcn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163crweqksh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163eytvwqcp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bzcgvgoa.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jwpvtihh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bueplxlr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wqgnohjz.html

================================================================================
来源：http://www.xuanzx.com/163areqjskq.html

I. 正则表达式
来源：http://www.sxryk.cn/163jchqhdsn.html

================================================================================
来源：http://www.xuanzx.com/163fntxgfoz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163cdqnxemz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nuuwpyje.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bkdbacuc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163thscmirc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dcwulkor.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tdpkipzv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lujvafci.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ldyjibko.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uxugfgdp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163itxcqzbg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dxiokihl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163sdtvmjss.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xuoilsro.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rdndaxyz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xkbnuwow.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163raxkrsgo.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163sfzxmdrr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uxhmnirc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163dyhqthuz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ionxewru.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xwkmgwto.html


<!-- 参考信息 -->