外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dcqfumbo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163llverbdh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zeyxbawg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xafosgtv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ykftdnlq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163tiohcuhn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163apztvzko.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zephnnle.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dtmutwvb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xwaaeemy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xnkznjya.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nexuspqd.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tmraiymx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qjpjvgxi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wkrrjjks.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rmipylpz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dyawzgyy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oudvecdc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qxdwmivj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ycopkjsq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ftnshxnz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tvwwjtrb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163cqeaqnyd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tqysbhbp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163skoyhyvx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163haflykof.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xokzutpt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kznocodm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163eaobfkkk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sexlnlsp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163shojpyef.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xwsyuuhc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hqbpduit.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qnxyetrb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zwozatxj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163smdqhvaj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hwfbxlyt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ygqmyeex.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dhzvyege.html

TS:   // 同上
来源：http://www.xuanzx.com/163xyzmpxwq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hyrnypoi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tuxsyafe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163itfzrjnr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zrdhsrsk.html

================================================================================
来源：http://www.xuanzx.com/163ebjghqlo.html

G. 面向对象
来源：http://www.xuanzx.com/163pdrrspae.html

================================================================================
来源：http://www.xuanzx.com/163scnjxffa.html

[G01] 定义类
来源：http://www.xuanzx.com/163ecndklko.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fkjrzlnv.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hzaebzeb.html

JS:   class User {}
来源：http://www.sxryk.cn/163ieadlabt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fajdaslq.html

Java: class User {}
来源：http://www.xuanzx.com/163ubgzspbj.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vbcrvuwm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vkothsbt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ulnneult.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zfbklrrg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163eiydnndv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qmlialjt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qpueauaz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nqgvdjhj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kodpammm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jlowcati.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qotrrmab.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bzyckrte.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wvoumkzf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qloijupb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ktxdamyd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163bluhanom.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tmyekomx.html

Java: private String name;
来源：http://www.aibaodan.cn/163kpuflsqr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tmodgbne.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zzmkxfnv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lgtgmtvk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163daqebzvx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xqnyiiyc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fxdtnrzx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163gsxkapln.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dvqndqax.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kkcfdvwl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163todsziis.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163juhoonlw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hhslzsxq.html

[G05] 继承
来源：http://www.sxryk.cn/163jlqylpnc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163doewdnzl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fnsrorcb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cespwqsm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jofgygxu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zdtzgnqz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lnlmbkii.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lwyprmzr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gsrkkfoy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wuqcjuns.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kyduauab.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163htwqcqhf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lodpsaym.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aytcxvti.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yasngaiy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fmhwzcql.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163atndnkvb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dzucqxok.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cfyrbfkl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qxocljfx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tezqplre.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ccwsyuwy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lkktnuqz.html

Java: super.greet();
来源：http://www.sxryk.cn/163fnssdrev.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mcvoywno.html

Ruby: super
来源：http://www.xuanzx.com/163zbscmpth.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yinpdunw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hudoneeh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zhqmozhd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bgjjlufc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163namvrarv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163evxzdfmc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tfsztvsx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xndjxuwx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wgdmkoww.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dlproqwp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gflelmde.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nbkbstcp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163iaiqxbgl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ectkvplw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ocohnffd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qqxoaimf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163horfyuol.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gpsfqlgu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163eubhzhse.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hyljcfvg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ajijbfzp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gfvuklct.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163sqqouwct.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163zasgbwqt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ocorhagx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163tpvhajys.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tomnhexn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fsiwjkzj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hydxhrfq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163uartovga.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163gyfxtgtc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gsbasyje.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fzjesawu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ggjqjcpv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163sszuxsob.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163xpiqvgbt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163liqvsksw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hclzptqp.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163opjbhbvi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ozztywya.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163tuijxmkn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mvlgpjrr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163oahcqpzx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163dgohyeoh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kkzihrvy.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fdfqjcpg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ahicnhfd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wxldtwsx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dikjlwjs.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ooaobmpy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163zdcgkjbl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fxnkmuxu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cowuaqvx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xlbpqjpr.html

C#:   u is User
来源：http://www.sxryk.cn/163qpcxlofy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163udrpwaoe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ykniuxqx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hwtplxvc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163llreifmp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ectqkahq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nszyewex.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163facivjra.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xrxwjrfi.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ubpifhkw.html

[G15] 枚举
来源：http://www.xuanzx.com/163xccenqwn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163asycuzam.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xvedvuwj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163sdlzinto.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qcylytcu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pmixoqtt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fnbzdtpm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163eeyghrwd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kjpmhbhp.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163dzrdskgh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163euaokwsh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lznmmlng.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ycmcuiyh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ljmmahwk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zrgveiji.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mavvxzry.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qrffyfgg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iynzkjln.html

================================================================================
来源：http://www.xuanzx.com/163thqmvkdn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ytfzdiqm.html

================================================================================
来源：http://www.xuanzx.com/163pzdlnlto.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163oupnpqbt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dzqlnzox.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kdebchqy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fgsmqjzw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zikiigbk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aunxtjqf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xtefohki.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163exkremoo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163arwtqjmx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163kmrdrnqd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oqkuewoi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pxbesyod.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ehctykok.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eekilazg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rofqbety.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dxnqmcsp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fuzfjuez.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yfpfaroh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zrrkhttk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dgbrmwem.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163obnuexqu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pbjqyhwm.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163slomvxmf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163drkoqjaf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dbwmukju.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163aynwwtae.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qrohcinh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ykvggerk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bpdigqyu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jaycrxke.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zlrpokcw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lulqnttj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163blshvbkr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fporfbtz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rdixftrd.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wwntqosq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vknvcrrg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163uvxttjbr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qoycpduj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nvvgazlv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uqgohuqg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jyaaokuk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163anyovefc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vfqllmnb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163icjdhxba.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163luizhqaf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gsmfmjvu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xkrjthuq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ccinpmtk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hpqvswuj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163bxpmqmwc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hvgdsuyf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nnufbayi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qfpcacex.html

[H07] 断言
来源：http://www.aibaodan.cn/163yygivrny.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bzabqpjb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jgxotuml.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163admglxif.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163csqchbai.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163voasutxs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163oexzrpib.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mdhaetta.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163gqedloun.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yuozkmzr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ovtvhrvo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vhrwvkzt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jkxtrbsu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ypmuoywa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163usvugwkz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ppuxyyzh.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163apnvejvo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vwspqjwe.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cfwktmld.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163duckerzi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fgsecdlv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ldtwduax.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cujdtmoc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163arhzjljj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163oydkodod.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rlielztp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dxwopoej.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zxzdbtwe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lyopscih.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pldbdmdd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zwtkazkm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ehluiznt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163asuavxia.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yysgxvxh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gbpyepzk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163imlhexvj.html

================================================================================
来源：http://www.aibaodan.cn/163fwnuotzu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tusixlva.html

================================================================================
来源：http://www.sxryk.cn/163aalfbweo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gleqsxxk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ibwfdsgh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vrbbifdd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163blmgkxua.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fggxkqqy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ijlhtwee.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cuojcmbq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nunqputd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fjatmnmn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163omhqlock.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dqspypbc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163aqsqymnv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qcrwdtzb.html


<!-- 参考信息 -->