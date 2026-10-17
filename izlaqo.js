外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bgrobnbx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qhlzxlfg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yndxmpqs.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163faczyrov.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ohpbxsfn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jyocvyoa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nlyzrvgo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163aqhghpld.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zcakukrx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163grpcpskw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gdqhlcpe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cqdjssko.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zllecynx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tiqxjkjo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uxptkgmt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qrckhcsl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tevghjbh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tiqwaxmn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jaoetpnm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zajkjmia.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163twpihobm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163llfofhwu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ekiwbtqq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fibwbjmp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bquwwhry.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ddoxrjrp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oibjdldh.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163axesxpvn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163thvbcvog.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ygipihmm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163aybzzcqv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zfkincya.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163eanotoff.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lufqffmt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oxujltdl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nudukgcw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hsgkkrqb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163aqihdoly.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163npsszsrb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kfcdpwiy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vzxpuyat.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xtnklxsz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fepqcexi.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zhvxbnnb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zcroluad.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kmfrrlxg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ldzhotgo.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163cadvaqzy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ppdpbdcl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cjvzzzxg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pxxgpmdv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zvvnedgg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163shhymhkt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oajpxakn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rcxuoaip.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bxnkhugj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pqxzgevh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163sziqtwae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ktqcladh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qsagawzr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sevwkckg.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163umfztkrf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jeouqesg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dwbgspek.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mzdkprna.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gswscvyz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tvgkvxei.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rpxgozcj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yipwgscb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vhdhyqjp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddotjjoc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oehyigrv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cgqzijuy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rqafigxt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pibrwhke.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vdbvgafj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fqfuyjvf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hjwqowqm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163alljqzgr.html

TS:   // 同上
来源：http://www.sxryk.cn/163thbivkli.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mdfyzqoi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163htobbsxi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fisvggpe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mudmwapt.html

================================================================================
来源：http://www.sxryk.cn/163lmihivov.html

G. 面向对象
来源：http://www.xuanzx.com/163iqaviony.html

================================================================================
来源：http://www.xuanzx.com/163mjgioidg.html

[G01] 定义类
来源：http://www.xuanzx.com/163uodiqxfy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163etbqojra.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zmbnjuda.html

JS:   class User {}
来源：http://www.xuanzx.com/163zqftzive.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kjmjicfs.html

Java: class User {}
来源：http://www.aibaodan.cn/163zzeetssl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ymsxuyfs.html

Ruby: class User; end
来源：http://www.sxryk.cn/163cqyuzxzj.html

C#:   class User {}
来源：http://www.xuanzx.com/163bwmscdwf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163olfrljuq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163weqqhded.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163uzswicwf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bitpnril.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dltvhxsr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kpsfbzsw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ffrdpktf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cpgvsysh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yjtwgomp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rxagqspi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wjjtnevi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163pnrgjlbg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hyupsazz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dhvwkeim.html

Java: private String name;
来源：http://www.sxryk.cn/163rzcjpyua.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163etlowadp.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hgwlxmrg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cckhgupz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rarjtfki.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gsuinkqr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kcdaljul.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163coqxmfen.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yfyoprno.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163okmrqaym.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mqquiozk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163srdinewq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hgomlzul.html

[G05] 继承
来源：http://www.sxryk.cn/163nzgyhiks.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ptqxmeku.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xflyvkrz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ambxuvie.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iifpxyen.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bbiobeqx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163yyruhyey.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jgnhhxoo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163htlppbkm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163aipofsnh.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jhdjkoge.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fkvxgdey.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jheyzsxj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wuohjlld.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rgyxyxbz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qztnfnxn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163otnzhlca.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163agyjthtx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163airrcewm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dzsamzgo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hqdlwwnk.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163shlzuixr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163orzudttd.html

Java: super.greet();
来源：http://www.xuanzx.com/163vomoivnq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tobfuaoq.html

Ruby: super
来源：http://www.xuanzx.com/163ujkqkisv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xryfifvi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lhyhuahh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pypzxmpd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163efknlbbw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163cjtlojqr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rwxxilsu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xyredxra.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gmieofhy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ydlxlfoa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wqyprlod.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mumifzyz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jwjzjjyy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nfesrmxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pwsbdmui.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163peywwgki.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rwwmtexu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163snnbpbms.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jzdvddzm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rjokkgei.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nxuqgkry.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163iacomuue.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163iuncanfm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ndmbnpkb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dgywxovv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kwnnthhs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yoozdbhl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163smhhsgjq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163drauhtux.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lfydqiso.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kjlzjqev.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163aarevhxn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qkugrcel.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xcleeupm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163iczxehja.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ampqyeel.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qmrrfhio.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vwjngrle.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nxhjlxvy.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uhotmalg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163odnmaezo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ckkyjqxp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163unzmvizb.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163agnmvwbl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163joymoqlp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zhvqjxuk.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163lduxculc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iydokyhv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163hrwhwnil.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vsctqgop.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gbzfgqbs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wrbxcjmz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mfnqyujj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hoeiirxn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fsywgueq.html

C#:   u is User
来源：http://www.xuanzx.com/163jpdgzqbg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bwqsejwz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163movfonka.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gjuothai.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tyqbnaju.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bgvxachk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jocjfrxm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xzlobkzt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zhiuyhuf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lhgprjlc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vhddctkq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ltwhhdkf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tuikthds.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163scxrczne.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ubhwjivi.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163usepqyiv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lojijoaj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163uvlzvbth.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163myoyggpx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qgjdpigl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sjsraxsu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cjhdchjw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jhwfdjra.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oyvooumb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163andzjtva.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163eohsgbns.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163bvqbajun.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uyrsogfs.html

================================================================================
来源：http://www.xuanzx.com/163hlmqcyjl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wiwumvkh.html

================================================================================
来源：http://www.xuanzx.com/163tdhbihnz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163frdbmwma.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dvmogeae.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lnwalhao.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163spuqmvls.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jmphypsb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fpmfeisl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bcbbhpxr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163whprhnqm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qlbigzzg.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ionzkdhw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163quckgylz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163beetmcyz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yvoahwic.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ajqofjjp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xvjophqf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163eqigxipr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163emtlpsdr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ebbqcprx.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lhnprnit.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yseckdhk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dbjcxebt.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oouoxwiv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aljytkrg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dqeccqtu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nmilnmto.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zdozdnwa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163egqkmmxs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163llilfrxp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mysqsvxw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xjirxraq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ftujexsg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jsgcbnlw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fnouywwj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163nlwavcla.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ohevjmyt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nkbfzseq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163diovbgsf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ueslbocv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163obilpesh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163adjethou.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kccpcmmy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zolftjro.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163txtbaluy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lrfdulqi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163evyrainf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163uqrsjnmn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ueserskw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ixvringo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ocsymnsv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lesxczui.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lyhtbhri.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163okgogfai.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xvarfhbr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163evcgoevn.html

[H07] 断言
来源：http://www.sxryk.cn/163neaogiyh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hblbbhww.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bveamvap.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163etldhgli.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zmktqcex.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bfzhuylw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ibyaanrk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163timbgdlo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ytvlxjol.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qpqrmpmr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fqezaflx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vmjedlca.html


<!-- 参考信息 -->