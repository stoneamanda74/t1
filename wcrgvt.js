外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bwptsmhz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rbybvqyg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hobhsowr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163aajizvmh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jsispumj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163gfbcgica.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ipqusdga.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qdvxzeox.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163trrusjqx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163evweomka.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cfkwmspq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163emkvtqpu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jjeuugpp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lkdjegzn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ctboaqfp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pncjqmni.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bnryjekp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ukrilhpk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pvytujql.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163imkwferj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cqyuptja.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fahunskx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163atzqixjt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163afdzehzq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163msnkbkdi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pemvoysq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vpfpwkoy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163sjqtqulr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tcqjypca.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163embrxjtp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nvjgzuwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pxmjkeaw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ykxhbbtu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iskedekt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pophqwlq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ffggumcn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bhtukmya.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163iyskarlz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wimzhfrj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uvsvrkdk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zfzieliy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mnggfgrs.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qpyjxnym.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ebhkahfq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ngigawua.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zqduawag.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lluhcgkp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wixlfgsz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ucghglkl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rbsassgm.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qqaljibm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fsavrvfk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ycncgaox.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jmuecmvf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yrtbmvpu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tghzjieh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ljgubaij.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163cdufyawj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ebqvgelz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uypxnrqp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sghvvrdy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vygqbduz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163meclpkvb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ovzsnfoz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ooynfnla.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wbyygvqz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rvlcqzev.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ahbwoipj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cmgcknhq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kaycrnov.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ibfvnmec.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wfzgsoxj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gjbewcrb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163msdpugcl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ptrsmver.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163njddxkvg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xmlpqhgn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yzimdabr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rupawirc.html

TS:   // 同上
来源：http://www.xuanzx.com/163faszsghz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tgstrmkv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bzqezhia.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cabjxudv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163iwwftbat.html

================================================================================
来源：http://www.aibaodan.cn/163zhxupuqb.html

G. 面向对象
来源：http://www.sxryk.cn/163tmzqcdpr.html

================================================================================
来源：http://www.xuanzx.com/163zhlawugs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kgsofuiq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ibzetzft.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cthggive.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bwlqigai.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rcuzobbe.html

Java: class User {}
来源：http://www.aibaodan.cn/163dkhwwfnr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163octjoplh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163uzpferko.html

C#:   class User {}
来源：http://www.aibaodan.cn/163clxunyrq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163iceqblly.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ktjjfbkb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zyhoqbji.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mzgmlvxc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wgjxiyup.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hxypzijo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jijiygvd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cranhayq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xfdixjbl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gnecyjoi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bugghdqc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163agbrlnkg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163sqnwogmp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163oenrckzm.html

Java: private String name;
来源：http://www.aibaodan.cn/163ngwxxpls.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kzgmolik.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hrfcmmvz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nvfcjzah.html

[G04] 定义方法
来源：http://www.xuanzx.com/163khsjifye.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wioahoru.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xdhwnxac.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163arhlczkp.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rbtsavdk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163izhxuhzg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163npawiikr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kijmzwch.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ewwktsbc.html

[G05] 继承
来源：http://www.sxryk.cn/163utsydybr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zarsvjis.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qcpoxgdi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xltjcgsb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dgozecei.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rulwwpfi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bngzmrzh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zzdhalbi.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bnhenoty.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163akawyoqo.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eubwukoq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163blfzycaq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wcskdbtq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iqrvdyvv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bpqpckvs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163sqlabeuo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kvliberb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163yegqvgjd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kzegfinb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hmjndtdx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tsmnnbod.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eriwvdzr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163iyrwplix.html

Java: super.greet();
来源：http://www.xuanzx.com/163jkrdrcre.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zniycldg.html

Ruby: super
来源：http://www.sxryk.cn/163ayzmwmoe.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vpoksojw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tmsgehxu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dpqlxknl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mbllzwng.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jdkxdind.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sjcxegzx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zmiulcwo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163pcewgetz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fqlqznen.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163raeegdiw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bzmdqunx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zxjbrywp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rtwbdtjk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fuabfmpj.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163zeaozjsh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gmwbwmuk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qtbudbpv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xxrxvufd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163orgcxubw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163voucrfck.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yqdkwled.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jdaebjir.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163sczdnuqf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zzturnjt.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tkpnzycy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163thbwcuhh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sebbxujh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163clzpmtyv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163oqdswluo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163cqypidgq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xzdrmxxz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163atgqvbcq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163uitswlnb.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ekspjwvi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ucudmnnh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zvoorttg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163isiqbxda.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mircorkf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163blmjqcwj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163vwoofkxe.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xucowpna.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tpsdpwhf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163typyincw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xjncpbnd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zwccjefh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163izcxqxda.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fxlwfnwu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zikbmiys.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xmjwarcx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163teuvlyjk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ykrqgpov.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jfxenyis.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jqxnwiaz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wlydsjmw.html

C#:   u is User
来源：http://www.sxryk.cn/163svjwwomo.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163jgydbicz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bcfoiyaw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yhfetafm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oibxjzcy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fnvkbgfl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163txklxrad.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163syfmulxt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ycsuhemu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163tgncyhhq.html

[G15] 枚举
来源：http://www.sxryk.cn/163iyruqlwo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rheyfgqf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zudokqim.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163aenbtgdm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ptftxxas.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kwnzehkq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163brsnmfpj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qnhygpwb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sxdulcze.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ephhsxbw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cqtxauhn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163sxcwpmab.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nkdpvwss.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aeqkblqt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qoajnfoy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ibqogewz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jbvclzot.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163shewrxxj.html

================================================================================
来源：http://www.aibaodan.cn/163kwuzztmu.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wlqclwse.html

================================================================================
来源：http://www.aibaodan.cn/163drzwxajm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hhpiqsht.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163brsadhmk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mevhteba.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mtzsrpds.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gyqnfvri.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vbsraasr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163iuofdzjv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163udmwctsb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ajqhimty.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uqajxmfa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ydyrgkqp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ghwvzxml.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bpbuufmk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uehagxtt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163upbqehqa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rzbxlpcb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pzzlppwt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vwqsuyiy.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bgfadncd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gdnxqyek.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xkzdtmeq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163eklmngkc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wikrlsgh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nkkpalom.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ikyxadxp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tuseotoc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pqtyxzqo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163glkjvoei.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lmpbqmxd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kmolpyvr.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uzifkiot.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lzygtkjt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dyneywqf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163aolwqjkk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ylqkectf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cdkcxkgu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163uwutrvvl.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cctvofke.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lmrsvhww.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hhxlqqra.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gfytpzbm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xomjoprm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163axxbskwm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pjysypob.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ojxnyppr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xeakmftg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163feygreqw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vfisrbib.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163snokrnyk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qkjtycef.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zxxxhdiy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kmrfcjsg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163edgxzsfy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dzamcgal.html

[H07] 断言
来源：http://www.sxryk.cn/163gyqghfah.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nexdhwuh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zurpirqj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163osbgjtoh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dxvynrvh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iuxqluek.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163vtfakffq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163sjapecid.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vqyolxzo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xkejrkbw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nldovhai.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163msvyvijo.html


<!-- 参考信息 -->