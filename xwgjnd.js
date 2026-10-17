外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163khnxewdk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zljgbolt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yyzxucgv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163csyhfsfy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163shiclcbd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163droviphd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ieyclggj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163varstxbl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wxzmjntz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163krfwmpsb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ymemtbfg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ybyphuub.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jzfqtaoj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wnyjrmxd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lyjlllnv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zuewbskr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bhledlja.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nomarnzu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gupsvelx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qjjvjfhr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jorlwqzy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ncovoocz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163igqgnsvq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zehffvqg.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ymqwyqdz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jzxwlduw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163trcuseyy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163izxfifpd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qhkgokmc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zljshxay.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163veessagz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rgptaxau.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163iaudfxkp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163axavsjzw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163clxlhgit.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vvotfwwc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163tsnbjbqs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163giuurmoo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163duaslwlv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fznrnjaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ravgzper.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163eetprvkj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yxnnqwbe.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bomezcfq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mzydtfbg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lmqvqvry.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163inmcppoi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vfcsdzuo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hoyothxy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tdqmwnya.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163otgzyyen.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163orpwmwys.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xypbdwna.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ugfhrlde.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sestcqlq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hhbewqcs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bhpflovd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mnzrrljw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vhqxaflz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163adcybakk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gjkkfiyh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zshvipij.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163koxuqift.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dcduypoj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kffezqio.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163levjtzxf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rmcruvwg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rhhhzitg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dpkwkheu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163udbdzjzb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iiuchyar.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163lkzercqt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ssgtqhhz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hffkixlu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fnltmuxp.html

TS:   // 同上
来源：http://www.xuanzx.com/163gvgnbzpx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163zxvwvfji.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nuoebfis.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163pfvmhoor.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ibdvsvda.html

================================================================================
来源：http://www.sxryk.cn/163eetqymnn.html

G. 面向对象
来源：http://www.sxryk.cn/163lpfskgsh.html

================================================================================
来源：http://www.sxryk.cn/163lrvjyrgu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lrnoepts.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nzhywwlf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mvlmstai.html

JS:   class User {}
来源：http://www.xuanzx.com/163gzcsahln.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vlhipsxh.html

Java: class User {}
来源：http://www.aibaodan.cn/163twfajvpl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163oibbcsen.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jbmdscax.html

C#:   class User {}
来源：http://www.xuanzx.com/163eqoirqea.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ogrzlvcs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163njciuckr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ockjojma.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163obcontnb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163pojvxuam.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163caxftkpx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163gearajni.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ucirttci.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bivtxyje.html

[G03] 实例属性
来源：http://www.xuanzx.com/163psbakljk.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hnpmpnut.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163aagvrffo.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jozznkga.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xamacqhi.html

Java: private String name;
来源：http://www.xuanzx.com/163qgvzxoqq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fkqyqqhq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jomrogbf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rehkghtm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jtyrvzxc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fyjaozee.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tyczzfvf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ococckyy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rflpwhrk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ddupdxyx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163isxsdwky.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wvbegjnc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yfvdttfe.html

[G05] 继承
来源：http://www.xuanzx.com/163lsjajnfl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163flwewqwq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fvlpnoju.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ribtqxtb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hxdnrvyv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oxzqkuuh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bfyirjly.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cbtttzof.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tyoyocjs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yromgbhr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ravvqqwi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jvulurmg.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fdrbbmbl.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ilbathfp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gtacawfz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uqgtpohw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gmjtizln.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bvwrtrrr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qzdlgwox.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dlcshdgt.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ztsoalgh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163czhienyj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xfjgmcta.html

Java: super.greet();
来源：http://www.xuanzx.com/163lpcdaaav.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163dtkxgkeu.html

Ruby: super
来源：http://www.sxryk.cn/163xerrhblw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tikndogx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wxudqxcm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163mwiumajf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163grjeenab.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bijndigi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ajynycle.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163pmdnupyi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kndyvxzs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nfvyvxar.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lwbotrpr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kvgdfips.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jhdtsdri.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163sakuhixn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ufvgpayh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rrzdsoog.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dphzdbtf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mrtezkgo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163eedoapbe.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gfxemhtj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163awbtsqvp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kpvzkwae.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ogbgqgku.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gbrveeav.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gzehsdhp.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ahqobzpy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qwvuhyff.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yovzkogy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163wmjabhmq.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bibwnolu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tlnzrtrz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fudohlbl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163waffybkx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wuanqltv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ijxfhssq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163exmgufce.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qhroyfpn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nxahunwz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vqegxkjy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163tzdiynph.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163akvmazpz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163nhlnifna.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kjxjyveq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163esjnufqg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kcpdqcac.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gudoppyn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tmzrdmba.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tdqfrhrq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163sycfolai.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163npsiyzlk.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jwltymuj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wlddmbhp.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jngqlwva.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xraquyhk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jnafwsbq.html

C#:   u is User
来源：http://www.xuanzx.com/163efojihth.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163gburayns.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ruptwvqu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xpdqqgky.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mdjjqjkd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rdjogfhx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ycyqptod.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zfftzbdb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zbvkqazo.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163iilphxab.html

[G15] 枚举
来源：http://www.xuanzx.com/163abgeaeum.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pkwiutre.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163mqrxwbqt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ywhuhorm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pbhhkxpb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163njtblqxp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163noazabbu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qvwrmqka.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vavxqpyi.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eahifyrq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vzhcvuhw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fokdhaml.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wixfotwh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ymjddveq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163upoyeovl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hnxxliks.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mivwhigq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cgynezrq.html

================================================================================
来源：http://www.xuanzx.com/163xrlrvisg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qexitczd.html

================================================================================
来源：http://www.aibaodan.cn/163xwmqzgav.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163srvakehr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ymoiyrrt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163syixwosz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ovkmyqxs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163qflclvij.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163iguxtnxd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ybzgvqgy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163njjnylqw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163djsdxuwa.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fooadyal.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vayvmdok.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xmrtuocb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lzomvdwu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eyqospgy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163shspmbhi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vcxutlxc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cobqgzpr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lgzhopzy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ksahowft.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cbgllzei.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hyuxeyke.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hrkfqelz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wkmjhlyc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tfyggpds.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ggfmoxyu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163yxobnnhr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ozadwmwn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ddjycmtj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mbvebzhc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hlqadejn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qcltkpjg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mjsblsik.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ladktczb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zjnslzti.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yvzbndjf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rebtignp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pukvpiqe.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163pcmfwwld.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jzlwjasw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mhsduuql.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dxbajczx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163swjfejyg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mzpllbml.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wuogfeir.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ceofbqin.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oaggjrvy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zqiyufhz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163agkszwne.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163siaxyjqy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yoysscob.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qoyofjwu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163feumwjcu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ibogbnbu.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163sivxbqzv.html

[H07] 断言
来源：http://www.aibaodan.cn/163yqdnahrq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ydorvdhc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lykmgqzp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ujkurziw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eonbcojc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rhuugozl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163btbahpew.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bnsnhwae.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wfxufspk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163aiwmntmq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wnhmplfh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ameiwgvi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zoftimyz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hczqjbkd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163guqajwlg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163msugnxez.html


<!-- 参考信息 -->