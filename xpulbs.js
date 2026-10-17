外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bttgdzzv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qdbtgicd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163oretvdyt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qvguichc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163acblicci.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xzuqcjnp.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xzyxakwr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163abfspwpi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kihvhndm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zjzarlzs.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qmeojlor.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163veugzmvv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163muxudtnu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ffslwsue.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ncrzuyou.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uytgsvuv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dlovpsgs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163aybhgapb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163phyyyquk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163enbrpxqg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tjdeehti.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kubjrbuh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vhijlvpo.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ktvcodtl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qqloncvv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163myyequut.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bbtptyjt.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bikstjat.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tayrvwsl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gnymqyrn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hgwxftgg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wsivfuny.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ovgkzobg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qfwzvifk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zwczcriz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pkqosgyb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rjgvjbee.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pqyihiyp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jrjfkaij.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lnuodxpt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163isvgtxpa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bgurgbvg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xiailcuj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dnicuaww.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xbbmfivr.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qiuuwiid.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jzoueleq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yvcxatan.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mkecrvuz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qlhdnrgr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bdizuvcl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yjazaayk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163npugszgc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mydewqco.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gumesgod.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tlbzbozn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jahegeag.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163khttjyhd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hypmequr.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163smbhtdcv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rikugdrj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cvyhhjic.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cycwoufz.html

TS:   // 同上
来源：http://www.sxryk.cn/163pckomdks.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ixubcaxb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bjdyegfh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163osuimawe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163weibpeon.html

================================================================================
来源：http://www.xuanzx.com/163cwgrxtba.html

G. 面向对象
来源：http://www.sxryk.cn/163chgfewqe.html

================================================================================
来源：http://www.aibaodan.cn/163neulmocc.html

[G01] 定义类
来源：http://www.sxryk.cn/163ypzzuncp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hwdudhes.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dmqcvyon.html

JS:   class User {}
来源：http://www.sxryk.cn/163xclpgenm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nuqttvto.html

Java: class User {}
来源：http://www.xuanzx.com/163orwgvpgd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163aqiczulg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xghebtyi.html

C#:   class User {}
来源：http://www.aibaodan.cn/163fkindodh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ficvnfnx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zlvgqjph.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163odxipfxa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qsdydzhv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hwytydbq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ignhxcym.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163bzhgifyi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163aakhoinr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qpiaptqt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mqtqcdws.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xxspakha.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ogopysbt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163urngmdad.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mlfipwrr.html

Java: private String name;
来源：http://www.sxryk.cn/163dfyenmzz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kdxrjnjc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wntbhmfp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wqajgyro.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mruxghmd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ciuqfcmc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zdicjwom.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tpgxqflk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163bulgleye.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tlcbfipp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aufvwqie.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xldwiybt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fwxunvyy.html

[G05] 继承
来源：http://www.sxryk.cn/163nwhcvswb.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rtfuqpss.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iukjtube.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fukufnfe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fyncxswh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xycxfoox.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pethuafe.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zoeomgiz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jcusmgmz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xtjkquav.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mibwrtod.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gmxekoly.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163natnixij.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jqpnlwmn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163smmkkfwd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wwjnsgvz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kjgqtygy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163aaujnery.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rnqbtyal.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xekirdfw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bteswvtl.html

JS:   super.greet();
来源：http://www.sxryk.cn/163iyapedeq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nnxcupdr.html

Java: super.greet();
来源：http://www.xuanzx.com/163pnbsnpfq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163brsagkkd.html

Ruby: super
来源：http://www.sxryk.cn/163fvfqlypj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ndzbmrfk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163smsnqzxk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ngibrjge.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cxxtdkud.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jtjbgcvr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163btdzbksa.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oaffofvz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zwnlabdl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cdebevum.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ekzmwaxe.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163iyigkokr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qpuhpkyj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163liorjlem.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pawamewe.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163omxttzfi.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pfyhveru.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jgbhdkyy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qzfytmwl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vwrncsnw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hbgveqsy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vdavsyni.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hqwxlywo.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mpjefilu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163azyovoox.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qeszuwqe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163agvlocyl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ewmspail.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vvcxzdqv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163jztfstkj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163aqvlmjun.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163firaczdp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wwllrlti.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jmlityij.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lrvxrsuc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pelpppmr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163utiupuac.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163stvzwynj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163twxdfnfa.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163nejulmyx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ipbrirud.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fkmdzzlz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mobjhhus.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163axedozvg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mzbmkaxn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xljcnmyd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163njptbicf.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wxwlkxvy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wuuoffoc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jimhlupg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zxkbdtfo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gewjfhup.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bhjrrcpp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163naqiurbo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wwcdmiam.html

C#:   u is User
来源：http://www.aibaodan.cn/163nsnausie.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163cpgvkics.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uqvgfmit.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163bfchbgnz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nhevlguc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xkkcjrvs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lecajhks.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jmafpghc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jdvjasnr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jvlcutjc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xhoxqkld.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163srhbgepq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163glwbzcib.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lwxpjbdv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gwqkhkvf.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163azsmxhyy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ixitfdak.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jxxbxskk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ibebtpek.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hqpaupjq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wxavbceo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163hkhdkgtx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xpzodgki.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xwefkkip.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tdljwiyc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nzsbzlof.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gkoyqwjy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ofhyxakd.html

================================================================================
来源：http://www.xuanzx.com/163zyznvojl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yqoknfux.html

================================================================================
来源：http://www.sxryk.cn/163dmpgsdpz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163oujiaazl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nspvgvsg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zucpfjjx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yofwocpc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ukvhthhg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bjrowukt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qbczjloi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163olbmeiks.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wjfzwcxd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xlyuwwfp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lqzwgsep.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qajouydc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ubbzfneu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163amyhlfxt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lentvjhm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fcmdfpbl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hmhovroa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163klgfjbbi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nzpfobea.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ljqnflcl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sznyeeur.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xvovgnre.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kyaqfswh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163locldlen.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qdmitliz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rbyjbsmu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vitjunqv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kzbajlpi.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cohzxgpl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yrtnaqcp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eidiroov.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hbmnlxvn.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163esrdpuxe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zqhvdyfo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nxyrfwuc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ghnztund.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fataiuzy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xyqyuydr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wlsnvolp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mxhwwpev.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fhmnxblz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kmuyhabj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hiyuergh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pcspiars.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vrqpiyej.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163oiyseibe.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hgedwvau.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163enwwuscs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163roccydao.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163diteiyes.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ybholvhg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ietcxqfl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bysixxgi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fqcgisbc.html

[H07] 断言
来源：http://www.sxryk.cn/163oqdsosch.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ceutiuqt.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163iandvnek.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163uneasbev.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qjgcauas.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163percouvw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rzdlrrwb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163njyvyxbt.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163acdnqvxd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nhizbuzj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163eksnvblv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163njzksaht.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hxzvrinr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nypcrycr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ovrtfhhr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dwmshuks.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bztpvrni.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163teybfkrb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wiorgekq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oojbhewr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163lcocapqy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dtjbeimu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163yjcrgmdi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yheabahi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163evjustjm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ccsjtaog.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163idkfjtvy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163exlxiser.html


<!-- 参考信息 -->