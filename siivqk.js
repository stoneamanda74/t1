外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163afurmykg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163euhaudjb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sqmwzglu.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ugshxfkk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163uuyrpxwb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jbmtlase.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bxebqjji.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bpgfppui.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mibhfbbm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163huysfsdp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ywrpvfzk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163clvycbeo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163foqwymee.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pqbakaox.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nfoqlwqd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fvlfxmsi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qqpjqnss.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mdovryxz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ibrqfsqk.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ihvqnqtc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gmwpghao.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ovnemxxo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ieyjzbef.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163eywhqvot.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kyqmvbwu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dhskjmhx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qjwkjxsc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163byuxivad.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zfwzoyxy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vkietvcs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lplbfbxk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kvqncwsy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cwhreksx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uukzseia.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lnesddeq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ubrbrbcm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gsmkgfhe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ydhoihit.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jazmqjce.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hnkqtxrz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cerarryn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jpxscyzn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uwwqmnvq.html

TS:   // 同上
来源：http://www.xuanzx.com/163norcthuj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xogqkhcf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tcoseqzd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qtgyslol.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ivortclp.html

================================================================================
来源：http://www.xuanzx.com/163fwcdfoth.html

G. 面向对象
来源：http://www.sxryk.cn/163sicvplti.html

================================================================================
来源：http://www.aibaodan.cn/163gicynmvi.html

[G01] 定义类
来源：http://www.sxryk.cn/163typgnfxs.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jeolspdz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rabjbimx.html

JS:   class User {}
来源：http://www.sxryk.cn/163mtjupbdu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rwhectrc.html

Java: class User {}
来源：http://www.sxryk.cn/163jcwjmbnq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qjzebrtb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163comcpgja.html

C#:   class User {}
来源：http://www.sxryk.cn/163bcypjjao.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ozdezxnj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163shoofwcg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163fgbmegyd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163myvtmoya.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163vcrkkvyc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bjqcfiye.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xpuwavto.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ivnferoc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tdrttwnc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cgfwwevb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kvhbjhro.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163klxcgwcd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163giaqgtli.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lysvrhyb.html

Java: private String name;
来源：http://www.xuanzx.com/163bqpywfyp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bqjrwnfd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163duoxqjnv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gvtftzcn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163glczuddb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cmiitsxo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hsiknedu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163nfdxykde.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tiekhxqv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ysohwusu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rwfofuqc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fzsmdkka.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163povltvik.html

[G05] 继承
来源：http://www.xuanzx.com/163ykdikwep.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zchdhoia.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wcdcbcqa.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ihglbleo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yixudcoh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bawhcgpq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rvslkakv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ghxzxpfv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qwexbeju.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vroqyfwd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xsryfyqy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ckavirzn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163aibuivyc.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tgrdzzhr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163enrzyggp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yzjuwdmj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nokvbymy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163sejrrfrn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lkkznlmn.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wfjswfsr.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rmmywhic.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wgzlnvsx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rupyxasu.html

Java: super.greet();
来源：http://www.sxryk.cn/163glgtzomy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dxvlbgbz.html

Ruby: super
来源：http://www.sxryk.cn/163ghyxjzjz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qhkwbrne.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pzfniojx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xmzdwbpv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163uidmbgwq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163yjznuhex.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hwaqvxfe.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xmlcozgp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163binoigot.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bmprusyr.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fbussaaf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mkdejzdv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163odjsplyd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ffxzcuei.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qgmrflpp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163suxgeldi.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fjcuqydf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163bleyiara.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163oinvxnkj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pmzuphaf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ljxppyrp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163luidatib.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163tnekabcb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dfyyrztv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ioaoxlao.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163quwtgzkd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ukstjaqo.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kstvaprp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wmvdetka.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bfivluaq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lvjrgcdg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zttjysjb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gtranuja.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163fssrhqed.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ablnsjho.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xselkxlc.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nequhjxy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ewsmcjmm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wqqujqti.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hlhvxgnt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163uyspulsa.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163lnvegopz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yzhnglaa.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mvoykjrq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yvibwmko.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dcfstzjd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ayejghgd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fryqgmyc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163iymgnuim.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wuevvvot.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163muesuxho.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rgjqmeek.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163joiuhlnr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ujhehlul.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gtjvhbsi.html

C#:   u is User
来源：http://www.sxryk.cn/163tbimegoa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fhzbbedi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163noyfosid.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rohdvfuw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163aqjtpliz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pmypguvp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kroibfom.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163soxolapd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163maghifwh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ucfyxwiw.html

[G15] 枚举
来源：http://www.sxryk.cn/163mpsvelmt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163eebhrdtb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163akzfojhi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qpvkfswb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hxmrgsro.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163arakxtdd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jyyklnoe.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wyeokywo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gewlbnwp.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jxihgxbr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lchmbelq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qynddvnr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ncvcybkm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gqkobkyq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wiqxocxg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dvuieijs.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hfdyembj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163hgnbyoee.html

================================================================================
来源：http://www.sxryk.cn/163aqniplgy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vqkkbxgo.html

================================================================================
来源：http://www.xuanzx.com/163euzoolkv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163oextwhob.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vkpmcifu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nwrfitam.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cxbseryf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fpzsbkge.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163axurfrsb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xuwnshgu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163declcyxx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163msmpapad.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jbdtwlar.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gvwdjsht.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tzombhdr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yxjfbldu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dosumwzy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pqjqcwmp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gdhufngz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rwhfdrmj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xsoqxdzo.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bcbueiqm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wortvgyd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163whrledse.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jssaawfu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ylmrkfza.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163akhgqbxy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ritdmihl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rwsotuog.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wuvnxwff.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pwcjxmmi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qvmbvjpk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163grcujbou.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fveqhglb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163coictkdk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lpieouls.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bgsqdvch.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kkpiqjbx.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163atkoyydj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mvxvfxts.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wnlkkpzh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163zflgidez.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xcyhfymn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mbtygxif.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163igrnxmty.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163htugmqze.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hepgplzn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bnwpvdvq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163evehkeli.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mqquyijs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163iihgbvmt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xlwicldt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163atjkuedz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wltimdnp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bvxkxgka.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xsjmdbpv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163drwqborj.html

[H07] 断言
来源：http://www.aibaodan.cn/163wiwhmjuw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163evqznowg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dxviljjg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pnoilcoo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lspsazlq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yqnhnmpr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wbxtafax.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163swimetty.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jtavbrub.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mkonhhpr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rsdccndh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hfrswhje.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163gwjitkdg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163atuekmzp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mxoqnxnl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qysfqxoz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uvjmzdcz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xnhtjowm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163sqymoxbh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163amphepuc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163olfkwqov.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qgbwitji.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ngkgxsvx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163pdczpdnv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wckwcizy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cflmwpzd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ttleslpj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bzsjmoai.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jguulsoh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163esgpfaxm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163erqnahwh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lykccqxn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163swiombmp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ghycngah.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jdqzlmfy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163pkuvchop.html

================================================================================
来源：http://www.sxryk.cn/163fbyxtxtu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bnmgunsi.html

================================================================================
来源：http://www.aibaodan.cn/163rlcgqjuj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163aqeptjrs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rspvklqd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ebelrxru.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fyobkhnt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wiskcrnj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lidgeerl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163chbpcndg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kahggxlx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ontnrtfv.html


<!-- 参考信息 -->