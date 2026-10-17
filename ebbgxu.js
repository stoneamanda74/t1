外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vscyupsm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zboptmji.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mbantyat.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pjvggomi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fhmutggb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mibyccnm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jwdqasdh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mqlbjqwa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uecrrwee.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163egfxuzyd.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163blwrpyku.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xtszuwuy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yaotumyr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fkuurndy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mvjipjuh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cqupvkkx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fkrgmtsi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mebxroaf.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hhdtonod.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163sdynslna.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jydnotub.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163evtwonxd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lanobltt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bolwoxxl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fyylbsrl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jveqzrmu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qvoloaqe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zqikisws.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zvhivdzm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cnfpghud.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ckuhxezz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rzqpvvwo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163acyigeiq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mdxszuie.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163eutotdim.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163izbyujxj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163huemtjng.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xfdwnsbh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163geknncwn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rvskiudo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jpcjygki.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ejriffsb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cnloyumz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eatdeogg.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mdfrwdtg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163yuuhzrao.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163wcfdgvoj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lpofrrvu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bqfroqod.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ceelobxu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ueepyebu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wrpwbpim.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zdmspxcq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nblwqtyu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cxbjkwox.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163itrjwozf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qzqhitmz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163bncltply.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163byhhmhbw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wxsfhdrg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jpzqgkyo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gebonvgr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vsgvxgbi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gxizbsjb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163eplvziop.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ernejged.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dpkynbtl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ndfvmeum.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163esrggyzg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hnpagdwu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rsqbpybr.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163snobjgtx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hvzrvyxa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163npabrfqf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rhwrvzyj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zvsigvbf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163nhlohrdl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ncijmcql.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lukuykoz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163cbpribmd.html

================================================================================
来源：http://www.sxryk.cn/163pezfbizf.html

G. 面向对象
来源：http://www.aibaodan.cn/163wxlufsrc.html

================================================================================
来源：http://www.sxryk.cn/163werysyuf.html

[G01] 定义类
来源：http://www.sxryk.cn/163djqctpuy.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163swyekven.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rlisktkl.html

JS:   class User {}
来源：http://www.sxryk.cn/163phkygmdo.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163erzzidav.html

Java: class User {}
来源：http://www.aibaodan.cn/163vtuutvcx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cwjiswga.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gktanbhp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163bzkbgxgd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163bzhnnurh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ytzzfbyr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ihgneprp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dixqrzeb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nfxduoor.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wsroexir.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kmxfqcuq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dxdwbjpg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163pebaddsj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163annkmyki.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ymdeuncd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fdpekqjf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lizmopkw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163neccxutr.html

Java: private String name;
来源：http://www.xuanzx.com/163glxjxpio.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gttwekev.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163iskbsybh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163alqditgt.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163voppubvh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mfmqclwb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163atwzlewb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163iuiuihhn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hjitleip.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hykoczja.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163erbpchxo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tzrwibxd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xrhiviuv.html

[G05] 继承
来源：http://www.sxryk.cn/163gujgdgcj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ewciwszk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163babnbohr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cmaucmxj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yeamaalf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jjajwntz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pnxvppjd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vgenioix.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lbyeweoy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ueldbdcq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uvjrujft.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gnkwywqo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jnfzkkzp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qnmyrcfn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dvuwlkpr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mnunigjo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163isovqzlm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xedovzkv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163oafxgadc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lcfprhfu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163zfmwzcxc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nyyzxoom.html

TS:   super.greet();
来源：http://www.sxryk.cn/163cpjfalry.html

Java: super.greet();
来源：http://www.xuanzx.com/163tystfrcl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ewpkgvwf.html

Ruby: super
来源：http://www.sxryk.cn/163rcvpylky.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qonpfnvp.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163bfgyjchk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xldqohfc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163itpazgre.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lgrzijlm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aawytjzy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lcmpdmjd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rsoyonqr.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163brkuwczh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vllcvmdc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163offlbbex.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wxojiwpo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163krmjlslw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cfgwcpap.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163retoogzy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163siqitdor.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163sjjpmjye.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dkxjhlkk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vtzwghwl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pbkfoyqu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163inbhsewj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zggisnem.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bnrzlesr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163mcgadgpo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ldwzgbqz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uuejsbqw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ajztorgm.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bmpjymfz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xifbfezm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163afuzbaar.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wbyhfpdt.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rxlgomud.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pdhejowf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163aabdbmjh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163yqxtsvlf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zmqnunro.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zscswqtc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sjcwgyhn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yucanslc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mnlckjnl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zxjnqtfl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ecrlvizj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163scpivnbd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sazkfiob.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163deiksryi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kflnhlqd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dcclutgd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jdqyawov.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qxtltntp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mjlscheq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hlzvoszc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qqthoxee.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163noklabys.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ervfccic.html

C#:   u is User
来源：http://www.sxryk.cn/163sfoqfjre.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sepagpjj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163mmwexpso.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gcmtozhf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sptdqqav.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xchmazqk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wmbivthf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163krmtbubd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tbsdejvg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kvqhafdv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gbpopxed.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163odmzwxaw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kknszsoe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mtjgfrvt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fkyxthvu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jhmhtlyo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wbnaqqmk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lfqoqjlm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xqnkslzl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jpmizulp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zdvqqmae.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cqwbqgqv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jnwenort.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gerkrsrn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xogonwdh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vjwgmzxe.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lcgdspon.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163sowjwpve.html

================================================================================
来源：http://www.aibaodan.cn/163gaqnagph.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hygognbt.html

================================================================================
来源：http://www.sxryk.cn/163wrxrgowk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hdkyesim.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163skslsuyc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hdctzfim.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lwegtrhc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163obnlpits.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ybrhjgxm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nfljufdg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xjzbnpxn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163iegvldkk.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fknhzqjp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lznbpzyo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163spzzpvan.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rzqxmkuh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gygxjfnk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bdjlwbht.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oltkjrsm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163azerjdgw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oyionysj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163raehlfuf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bivhzfam.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ncadxvtw.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163blmtzyju.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jjrxoxgt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nhtnxuub.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vqtjlcwx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163uqavcjss.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ufyuzihs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dfcrkaoa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jcobccfb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xyvxjxsr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ipytygmt.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xruizjqp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163guhihzwx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ivqyqkek.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hhffwbxe.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163aqzgjroc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kypbnuzo.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wjnicfqa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xmsuvrvx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163weogpiks.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cflafpip.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rtmzgosn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163actamnks.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mwatmyvg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lhjngvrn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zmckpact.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163plgsklry.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mpgmwvig.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mrscqvxu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yestyhhg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ivediesx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qpnhgebc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zbqkyhvr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hycrhzrj.html

[H07] 断言
来源：http://www.aibaodan.cn/163odcutsyx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cucckrhj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ymovlhbg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uiuxitld.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hjmlhjai.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163juzzgzcm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wopzcngn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xtzsntxz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vtbqyoht.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163upmfexgs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wdpzbbpz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kszdfyqb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163amloxfgf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163eqknopmd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lkuberdt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163sjbjrzzh.html


<!-- 参考信息 -->