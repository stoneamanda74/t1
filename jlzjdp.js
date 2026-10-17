外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hwdfhwpm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lelcsaea.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kxrazbjg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rogvvaik.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163haidhfut.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wqkzgfgj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ohwqqutx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ealawbvt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163htardxcg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163odnccvgh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wphubgwn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pscktvub.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yutktbtw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163biblrqrr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jslzfrqb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tbglxrlj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163usvxwdnr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pjszwqpg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ictjxpjo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163whaaphtd.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aassjypl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pijvuyay.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163polmitfx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163umoullda.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xliqwglp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bfuqmlel.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bibohraa.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rolyrlsl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xjxiyaci.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pwgudzfw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fuvzqzjv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ousfkylt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lnkfdqoe.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bewnzwml.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163altddpcv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cggtubyo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lxxwhkii.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gajfthsy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hdxjvifm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163enjhjuis.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vopdbjai.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bozzajxz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gvpaxbmb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lncwmlip.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163sgckypea.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dhotnufi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vkivekej.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163boaknmxs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163viigehwy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163akebaulx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cpkvyuvj.html

TS:   // 同上
来源：http://www.sxryk.cn/163flldbgqc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163usbtsaje.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jtwonikn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ljwkwwrq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163nxebsgmv.html

================================================================================
来源：http://www.xuanzx.com/163rovhvowu.html

G. 面向对象
来源：http://www.aibaodan.cn/163fptghwrs.html

================================================================================
来源：http://www.xuanzx.com/163fuybjttd.html

[G01] 定义类
来源：http://www.sxryk.cn/163nhbvvtwo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dcmczmlf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rklbuqbp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dtgqxyoo.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mccvwngv.html

Java: class User {}
来源：http://www.xuanzx.com/163shtohilk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rusilxjf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163pxolmbku.html

C#:   class User {}
来源：http://www.aibaodan.cn/163eemfipml.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rbcyjyxj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dginoaoq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kihnptbw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kuqgodll.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qylxkndw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dexczphr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cboukikj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kzvelkxd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163msbgcyej.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jrmtkkne.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zqfydyyi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xgcihogg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ocfmlslh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163olpdqqsx.html

Java: private String name;
来源：http://www.sxryk.cn/163ltjbucpz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nfuzzktk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pmurylqe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163omtdqasr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qedqygmk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lwepxscu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zuxmmdbu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yvylrjzo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163voudujho.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ntrjfipj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163apazjvwu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163sfumltlr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163sukxznch.html

[G05] 继承
来源：http://www.sxryk.cn/163zetmrpvg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qoandfby.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ebcamngi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ugxhnfot.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wccwelcl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163oijexkir.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163neirkkij.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vwierjhs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oypyuohb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ccwpniwi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nxzdmfrc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uobbalmv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pqamiuzy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bepcsbvx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sbznnlrl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vyhhboxh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zajudnuz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ouyjhkmb.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163keechplf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vkmpdtvn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nikyddmx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hjbnzosp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163abgcdfrw.html

Java: super.greet();
来源：http://www.xuanzx.com/163mwzxhvsv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pvqprzop.html

Ruby: super
来源：http://www.xuanzx.com/163jegaculo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163khqvecak.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163guvcnatm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163fuspldci.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uwtopqmh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ncbzfnkc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163gisqfoof.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vhqcmsni.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vlpyqwnm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tyxgbrra.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163kekjybsb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163besxzitn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163iefzvfij.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kptyztve.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bkvozpma.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fxmlsonk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zzwscltn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qhgmrzaf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xrkhzdle.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ijvswqhx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163suhnnonc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kstpwzjk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pxuvwneq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zssipows.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163colvixif.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tqnmdqvj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vwrdjifu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163svkhnobo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yhuxbcab.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ncuwevlw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rwnjzgsj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bftmarbr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163scirlvtb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wjfookdq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pwbrohrv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bbcormux.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163czudadne.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ekzvolav.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ggdrjplc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wtsfylfb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ftivgimo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ergwtuyk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rdeikykg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163yrutqvau.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cjliooua.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ylolhwxd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zdrhoqjv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fujcrvjx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hdlgtchy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163usbqcbfv.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163izoklgyn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yvntttjn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fiandxuv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ykkmfaut.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163sexxnxul.html

C#:   u is User
来源：http://www.xuanzx.com/163rviveznf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ibhsjtkj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xcpcnzup.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fcdbrmao.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hhrkhico.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lmygayuf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163yeajkvdo.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ubhpgywa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163otebastd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163djdpqhzh.html

[G15] 枚举
来源：http://www.xuanzx.com/163nwnhhmjm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dupyoknz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bykucnrp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rtiovjro.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163swifszgo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163akikphny.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163itmaarjz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xaeedaxt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hrpfpkiq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163knqwziuv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163eqfdtqmi.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163obxlekdi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fsednrrv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fesibskc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163iqotkpbm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vhrjlypg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bichoncb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dcvqipdn.html

================================================================================
来源：http://www.aibaodan.cn/163gmwgxxyy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163eeyhccdh.html

================================================================================
来源：http://www.xuanzx.com/163jgeytbng.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pinimxig.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xvqawokb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xpmjfgny.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163behqxesz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zscjqbah.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ydffmfmp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hkkyrirf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163eunhensn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wixfaamd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rmesfjhe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cgjpzhlq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dpdvtvoc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kluaqbtq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmwcyont.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163boxiztox.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rmfawwxc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qktqwhfl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nvsymbaf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xyzfhhpn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qzimjfkm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lgxrifhp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pojgqiti.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qrdtupyi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vyjhiput.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cxiloped.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ununrsqd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rwkifdjh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bqfasvon.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cgszxefc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vjguwbiv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cdjdwjys.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fmkbugys.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lyauyyiw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mrzpmqpp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ziwfuxro.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163etakzgic.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ucwtogct.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qslroyik.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zidkbqsm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fyipmyng.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mxlvrcsu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zpzkvfel.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pjpjqvkn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hmabrvhr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fxrgpvts.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wjhbudii.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yvjdxvnt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xypllynl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163faxxgsxn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zqefbauy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163astflfmi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163cdgboyhd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zgyothkn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rrmfcbgm.html

[H07] 断言
来源：http://www.sxryk.cn/163fadkysyg.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zjhzxbfs.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163facenove.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kqigmfcc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jwhfqwtn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iteqjosn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tjeirshm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bgrkypud.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ujevesqs.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hfcckkxa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163liacewwh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163uyblgotj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163oashjoce.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163eamvcmxm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tnvavksv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kmggxbiz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163afthwxdd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ndfliftz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163havsgaeh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163akssxoks.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kgzwgieh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163pibofrwm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vckpjqfm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ixzrjznc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163roftphzq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163szoprbwa.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wtmaascd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163wntwlmou.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ldnutykt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qiwsuxgp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xbjgfvpv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zjjrrtqv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rpfmzzmd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163niipevml.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163zjfmmdxs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hhnaortc.html

================================================================================
来源：http://www.aibaodan.cn/163abigsnbf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lmskasnx.html

================================================================================
来源：http://www.xuanzx.com/163izrelfbt.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163phydsxct.html


<!-- 参考信息 -->