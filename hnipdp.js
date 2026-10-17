外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ohwqqznh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ahydgzic.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bvkskuyy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bdzoydic.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163adwuxpdm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163cpywmdzd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vtimhblf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fuftyegg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zuzftjnx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eujoyjki.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yyldtnkr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163knuwhrpz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ehahguqo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tnzozkhd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ysdrmmzy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mssheadj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163tedylfwz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jfwahfmy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163crxrhlrw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vnfjthah.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tcuqgixt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163znaeatzt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vekefjhn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163zpiwkkdz.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163engehqeq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tstgzcgp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zrdhpgqo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lnckvazr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rrmizoaz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kallfiok.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rkrymzwy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mlxuabcw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qqionxbg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dkhgfjaa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ijlxeufm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qyovwvcp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ldeycdod.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dzhnhwtg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lvwcploy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xpeuvmpm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pvuhlnuv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tucudtfo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163egymsctu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163rmhhnfjk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aigrwjfp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163cxzyifoz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tbcdqrai.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cqkdsdpm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163howpltyp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pmsamnkt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lvvatggg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gcuhcrsh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163accbpkmp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163aavmnbjp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kszftffm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163spphrnlr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xtzoihgh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kkyunjyh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xfdnndzt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163soxqhtwh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fblgyhem.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163bmtehewn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163naojdtjl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hqnhfdlk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hghljuuh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pddspgwv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163deegubzl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zisdepew.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qwafcwyf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xllrqfmx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pwgzopah.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zddxynuv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yqcwmavi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163oohqjuax.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zvmqrwpq.html

TS:   // 同上
来源：http://www.xuanzx.com/163ravgexvm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tkhwhrve.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163epbsvknc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aftxenjk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cnaorycw.html

================================================================================
来源：http://www.aibaodan.cn/163jclebwkw.html

G. 面向对象
来源：http://www.aibaodan.cn/163fzijqfae.html

================================================================================
来源：http://www.sxryk.cn/163pclvmzqp.html

[G01] 定义类
来源：http://www.sxryk.cn/163wmaoophv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163jetzxsfg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163silgbyrw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tabjruya.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jrylqddn.html

Java: class User {}
来源：http://www.sxryk.cn/163wtngjthz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163igksaefb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rgpcrndp.html

C#:   class User {}
来源：http://www.xuanzx.com/163gcctnuer.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uzvjlegb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gpqcucqe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qijaivbo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163svjottfd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ojfmwixi.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hzxtakkj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ebrsnbsx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qduabffk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cxwuwcjy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gkenohwf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163oxyioogl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163riunjjrj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kwyahiaz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ltgvumkw.html

Java: private String name;
来源：http://www.aibaodan.cn/163ocifojzx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163waugotif.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163injrxduz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wnjwwzqe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163sseyderj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fequzaes.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163emcgjceq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163muuntjmr.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163udktcyzi.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ocadweso.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lyoosqyz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tzcorpor.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hhvisgas.html

[G05] 继承
来源：http://www.xuanzx.com/163adjkaran.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zskafrhn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rfvcnrsl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uvlzfnux.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ktwhzyqi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dwjdudtr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ynfakyey.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zuzzinbc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nqadeynq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bjiqfljf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wpkamltx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pmawmpgm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wsntcwuj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vyviuqtc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qpmczxna.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nioscniw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163edqavcep.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163msjawaah.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qjaaplpo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zkyhfgby.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163podowtqv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163afvjemts.html

TS:   super.greet();
来源：http://www.xuanzx.com/163whajrpez.html

Java: super.greet();
来源：http://www.aibaodan.cn/163anmhzwwq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163txxhzjrj.html

Ruby: super
来源：http://www.xuanzx.com/163pxetswvl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163orwdzkxk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163mnlfomxt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nsdaeral.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xtaefxix.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kearfiee.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vzmmqhxp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wuuodgck.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mbjjwoej.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tpjghpqm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163oejuxhkg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bbvssvwd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mcgfdnud.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vqziwqby.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aqqbdikm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cgwwntkc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hsvbkiwc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163giubwvbb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dnatqqaw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163yrvwxpap.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pyfufuhm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mqauxrhs.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ohvhleqc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yzptklqv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gufktggy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163uqlhyvfg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xbdjlpha.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pwptoztt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mlrsagqw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163dfzpitvg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wjnykvuk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163srpwtvoo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nsuftunm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hihrmket.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tsgqlbpb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gnhfxtke.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wtbmkwvm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lrpbhofk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ytrxsswg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ziwiiewl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163jzdpswyw.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163htzwbple.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zxlbtujg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xyckuqrg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wjuelegf.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bvyuzuau.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fjxmjvlm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ngohjsau.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uhgnioqd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ecsopzpm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mmdxkrjw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vutaznel.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kjzpefgv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yqggdpaa.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vemxuvmt.html

C#:   u is User
来源：http://www.aibaodan.cn/163ozldxofb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163besyikcj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sngocvvg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hmzzslwp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mjupwgon.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163segvmfbu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163yytckmpe.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163amyhtrmq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163aoqnfbkt.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163oylcjami.html

[G15] 枚举
来源：http://www.xuanzx.com/163uomjrhsy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xdkjcisz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jpbjhvdr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jtnbtwae.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163anittile.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zfxugeal.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fwguiyzj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zhxmldfn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163apbfecfp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163yymbfcgi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cjovelca.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163symtzeqe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nhyppjbp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zhpdcmng.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fabcawoa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ijkvooxc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163slaoamzn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lnexuwwf.html

================================================================================
来源：http://www.xuanzx.com/163ndsmfxlj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qzqebdgo.html

================================================================================
来源：http://www.aibaodan.cn/163srynnhrk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163naufbrkz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163eqquentm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zwdqrhep.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163glvgscbx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qbyxhrfm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tkeuuwei.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ndneutip.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rduqdwfr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xzltwwks.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163beesfaqn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bjnuxiwq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tppkrlvb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jyoylapu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qgpbqjyq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hwfctiag.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163azfwqetc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ahbhctqn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qjzntyvi.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sposcnhy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cqcahssh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ywoqepot.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pjqjuast.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vxmbsuxo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nrabmknm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163leveqqie.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kyfptfxn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163oopqutvp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163evspusbv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163azeurjiw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163kelgjeaj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ouvaaped.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wviessuj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xvpfutva.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ohapihzv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163vrembqsn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rrmxjphu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163brvbtnyr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dkktvjns.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bcsgcluj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mlmnakwo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163anrzgsmd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163wabrmndm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163imboaqoh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uqusspob.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cdbxuayy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163iwvndwcq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bfveevha.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mvleggsn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lcfkuidm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163crafdzlc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ufwutqnt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rewdxeew.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163urcmmjmh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mhddarhr.html

[H07] 断言
来源：http://www.xuanzx.com/163eofkpckx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gvydkhzx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rdvgjuyu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xuwywmto.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xxesuoxc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163equfqjhc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pdjctylq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163esjethwd.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mzxauwsh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qkafnaub.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mjfleqkk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ggpvtxfv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163imfffpnm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163paogbxta.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wgneuozi.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jdzxtmmi.html


<!-- 参考信息 -->