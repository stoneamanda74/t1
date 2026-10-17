外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lsiffyjc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jmrogckt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vvxhydsd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163muvhnqgm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mknqpcyy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bdoxjsew.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qmzosuju.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vbrhjvuv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hikezhmu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163flylhdxi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ovdnzbtw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dpuljhzo.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163sshojxfd.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dyfkmfev.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163avebtxkb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ptnaitwy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sqsygtuc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sfwsggva.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nihayxcn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nogawrta.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163wprwkezh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wsonqqwi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lmrtdtty.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163diznnjuw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pxcoeeig.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fyrigsha.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kzalakwq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163timqynxh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163udidqomc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ppxlhqia.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ckfqbexw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bkfcxbua.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jwotrnck.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jnmgwboy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uuenmkyv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uxmsvbhg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qpkoytty.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bmlzixix.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163napvxwyn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vqoostmb.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zorxgjis.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163uibetraq.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uhamfpxy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163llngyeiu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163evifkpew.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pllxfyac.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163njtcvyba.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ogswzyrx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mnutiwxq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163blhvooko.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yaroagsz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vxwrfsrh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163otenowyc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ukglylzl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qwwegakr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wnshcgpk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihupzryb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jdyysvgd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163chsgoxlp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yqdmkxzl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dzpvrqdu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ioxsedbz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iwxervyq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bwpvyqqk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163precoxvi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163drjhodti.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gtsfchgj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cdugeybf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fkaadrsh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ifkeidmu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163etycbdti.html

TS:   // 同上
来源：http://www.sxryk.cn/163judyezto.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lvcsvoct.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ssojykrt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mvpglgsv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hlsehjjm.html

================================================================================
来源：http://www.xuanzx.com/163xzsifykj.html

G. 面向对象
来源：http://www.xuanzx.com/163xpvwzqlj.html

================================================================================
来源：http://www.aibaodan.cn/163xepbkwws.html

[G01] 定义类
来源：http://www.sxryk.cn/163surkrgzn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ckkrxbny.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bjccmaul.html

JS:   class User {}
来源：http://www.xuanzx.com/163dkzcyyim.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bgmwwneq.html

Java: class User {}
来源：http://www.xuanzx.com/163jxjakkvg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dwsnfyse.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xiynvwse.html

C#:   class User {}
来源：http://www.sxryk.cn/163uwzuefxw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163chjfashm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zazcqvmo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zatrjbdg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vivznyzz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ieryujyt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wdhuudwu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ipsuqnto.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jeqwfafk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jmislzqw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dpqqjmjm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163seplolny.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vzdgejlw.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zfdcygxq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163idikfmts.html

Java: private String name;
来源：http://www.aibaodan.cn/163bntlpwom.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ijydtzbt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cebizuqn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ortvbpzf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gdxtyfki.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lffmunkm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163aficenjw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fokvmonx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163bqrsnllj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ljvrqtxr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xcpuwqxe.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zistwnsz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cdhvbdsx.html

[G05] 继承
来源：http://www.sxryk.cn/163idutwhud.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kdatpgeg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xwecjbch.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qiktqvfj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ymkkmcpv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163oyfvbigt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dzepvksm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jvpqjwxd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jbsqrwsi.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vifwquwx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pjgclrcs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163adxyjrnf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wuontnfn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163udyxtiad.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ogkwouhk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163iuiocwdn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ltpoggmu.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ssesyazt.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163omzqqgdp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163piuucmnu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xrxhhfuw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lotguecc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ruawgeve.html

Java: super.greet();
来源：http://www.xuanzx.com/163kyabyvqx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wdbycyvv.html

Ruby: super
来源：http://www.sxryk.cn/163aeivhxvc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dbspoiee.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ksosyzme.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xtzqfxvt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qfljyuqb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xfxwhbqj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fxvsknsy.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vzfxxquk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eioqbwri.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xmbfcwlz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fsgkbhhh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dqagkxaq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mukfswzt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jcjgxwfn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zvomaerh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dchrdlfb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163eoijqnen.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vspznfgo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nkapaxns.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bhmklemd.html

[G10] 访问控制
来源：http://www.sxryk.cn/163idtxpuev.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163guisqlly.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uowlzizb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xfhfmlto.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ddfczryk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iaujvesj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163rfqahnlz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lbejfavf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gyiwkwkw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wappqabz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163cfeowqzo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rkicgkzg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xqfeevix.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iqbsctfe.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aurjhwao.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163coocemhu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vfiidbzl.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ozhlrbov.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163seikzbbg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kpobvidc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163enngamef.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bgnpumxa.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163iohnmlds.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fcnjufgf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vwnzgrrc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vvtarqmm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rbgbduxq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cmavksyu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fujxlsnx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gkduewma.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fhufetvc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wpcifcir.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ilpybrvw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163blycsszl.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163aqkdlxgt.html

C#:   u is User
来源：http://www.aibaodan.cn/163ptuxbdob.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ytttlujd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qdvotqif.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qvgwduyl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163igqvnfks.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zqdiaadx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163erpbzdfv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163oxdqluqx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xxymelde.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163aunfqktv.html

[G15] 枚举
来源：http://www.sxryk.cn/163soligibd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rxjnahaw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163gqocyjzd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vfqozvud.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kdvcxwxd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hjujvhis.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ryljikyo.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163owuzuduu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vwpgfala.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163skdffnro.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zcmaagkz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vyvqjhqd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fkbjfbsy.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ihkqdsmd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ylkkuzim.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ctqgzsys.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qfbwvhas.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163plrzdnhx.html

================================================================================
来源：http://www.aibaodan.cn/163tqvmnnxg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163exjzggwn.html

================================================================================
来源：http://www.aibaodan.cn/163dnoaclyf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wzmjjmgh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jdziricw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jfgljqop.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gnlqqsnt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qkdxpvap.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hetmddws.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nlzcdizq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xycujqxp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dmamkbib.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163coskpqhc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163htrzlngy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163guhpddxk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163udzwkdvk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163caokzcjp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xlzfucur.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163tddzngoa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uxueoqtm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163brgutonn.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xhkiwago.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vhcrmspz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163khztpqdj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sbjtbkmw.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wztjmndp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xxfqwrhz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jccianxt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163bfupagon.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mmyyvqhh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uerxzmfz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zpepgdam.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gzfzzuvx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pwoaxbdp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dkqljsds.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163knyqnche.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yqqhvdzz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cjgllktj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mjuyvlyn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wepkqsis.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hjutfjxq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ycayyvxw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nbqrdyyj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eeszeccc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163swvhbicc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ddovektm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ygiqxngn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gxqnyyjr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dtkgvcaz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sktkdlvw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nlgsvdeq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jrliiyxp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hllyjxqo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pjqdualz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lrpvkfwa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fniehoaq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163izqraiiy.html

[H07] 断言
来源：http://www.sxryk.cn/163fomcymtv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163stdnwlss.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ikylmjmq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wpwkvfdm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ydofexlq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ghhrojmt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nqcjzxrl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ojjbhbna.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zeamrhba.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qojgzfwi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163frtutpbr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ibbkribx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jyexmorj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163oedtkihl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163znfgkmyl.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zhmzgaze.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eebpwdfw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nmbwtwsu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rjhbkyze.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lbzqmhmn.html


<!-- 参考信息 -->