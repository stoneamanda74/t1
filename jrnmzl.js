外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eczfqhgs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qlveaffz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163motwqwit.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xjyatkdx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ypzxgeyr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xsbihxjm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rudvuxxc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163quuvojnm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163myyjljmh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163aedkjadm.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fccpsonl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mutkzcxo.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uxgjcbvy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dusxpsms.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163eayhsoyv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hvqnalzf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163muyappie.html

[F06] 删除文件
来源：http://www.xuanzx.com/163crhapxod.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xlsbjusa.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mpsuixtt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kilwnpjb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qjudfclz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hrmcmwtb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163eohmezrc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qsnksxym.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ohyecvab.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kmspbely.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iwtiqzfj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xdugrqhj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lnwlpglt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rrdzosiq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qrfldfol.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fgacalml.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kndmcedc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lsrpewlq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163twimzctc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ryxrzppb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pazkqgni.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cuhghsnt.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163myiwgpoz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iyhcdxko.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kzmcuugf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nctoyqgs.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xbbpufeg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163savxzkjm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vlqvqhen.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mqacmhzl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fytduoud.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163akyrnxrd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dpfobfjn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zahljwxw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rvhxxgqf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vumquyae.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dbhancek.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163okdgkklk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163oohsnkhg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yhyovrzf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ylaptzwj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mlniidur.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tuoxcrah.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oglebsro.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vpdawidr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pbnkemyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qpaurgat.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gxbfcxvq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163trtqmtts.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mjxwebio.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yrsdmfra.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yprcoqax.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163stkfehwv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dkxmmmhw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163iegrbsbs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163eakvicej.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wjlsmxsv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mekncntr.html

TS:   // 同上
来源：http://www.xuanzx.com/163uemtormv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wneqndhz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163frdgbqlq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jgcycfnf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nanphmnh.html

================================================================================
来源：http://www.xuanzx.com/163okrlyjjt.html

G. 面向对象
来源：http://www.aibaodan.cn/163zcgputmx.html

================================================================================
来源：http://www.sxryk.cn/163qtxpmdke.html

[G01] 定义类
来源：http://www.sxryk.cn/163uxcexdem.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ljmprplo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jbsblhmg.html

JS:   class User {}
来源：http://www.xuanzx.com/163smcxobkl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163muxjswbs.html

Java: class User {}
来源：http://www.sxryk.cn/163xetkzvto.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163giszqxar.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zfwajsoj.html

C#:   class User {}
来源：http://www.sxryk.cn/163jnoramwz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ssbsdwcn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163opopnvtc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rzoajnxz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jvuczolf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163npkllycu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fzgjdjbd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kfdghwxt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163waksvuan.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ghokyyzk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zgerwvbv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163kamdekfd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ljqqfihz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qgzgaubf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lvveivec.html

Java: private String name;
来源：http://www.sxryk.cn/163jpxuiccz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zahasnim.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163eaygdxjr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wnvzmmzs.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mvmqsyws.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vbmyjeog.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ogtggfma.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xuycyzev.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vcxwqybq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rynuyqzi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jispxvud.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yppokpdf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dvvepsgv.html

[G05] 继承
来源：http://www.aibaodan.cn/163lwjabxlh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vjabngui.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163aaorkyyp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rckeeuge.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163saxgmulx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163phvzardm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lskdrxxf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dxepvlfm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dmwbfvmt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mussddti.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163szinhiod.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163afhlhzep.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vlrphrvt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mlnycouo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163boadllxy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163legsjojw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uvyyrvde.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rfgkgelm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rylluewv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xggofnca.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nzmwggng.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vtrabwxj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bqaqjcxb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ddqimirq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zdalvhgk.html

Ruby: super
来源：http://www.xuanzx.com/163twfdwvdi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ijjjmqvu.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ucnnbfeq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dwxlrhvm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rcdjbqiw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163izzueoye.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lffmnwlq.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163klehniwu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sxlufaro.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163duooartn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ypedyutt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xzbsejkh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dbxoznkt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bhvlkaxl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ncvpemvc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mzctjhgs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163goshfepl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xmtqwqju.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163prjmmqya.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xsrojnll.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kszpfbyx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ivnycogo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pfdzvcmy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tlydhaiz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gtinpjau.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kdbwhqso.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kpbmavrj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rjxlpqas.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pucgrwgf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ezggmeao.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163bmcbdszl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nokczfim.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jucsnhdw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xvllwyoc.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zzsturfg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163sfdmeigk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163iovbdanj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kmxvojan.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163idfdsobl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163czolvqar.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163sishvsel.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cgqrdtoi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fsztjhkc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lbqioseh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hureiyjf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dfdbcwsw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163lcyfkzxz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ebfoyjzo.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ghfsahth.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163wqdvkpns.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bwkerygq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kpooxcft.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ocexsuqj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163elaallyo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xhgwiikx.html

C#:   u is User
来源：http://www.aibaodan.cn/163agikjrji.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163svwphtpz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tialutdw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cfjetodz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tedbnszy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xlpzkmqo.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fjmomsyt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163arjcpjpe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163egywiylr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xmufpegv.html

[G15] 枚举
来源：http://www.xuanzx.com/163kukjidxt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zzelosyr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ripuqpzf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163updexlig.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pagmyikk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hbbjkaxm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163fdxzqzdb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163scpbpzaj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xhwyfrcg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fwumvuxx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163sujfpecf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nwsevjgn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tjkpmnkq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yuxosdje.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163okntdylf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qvjaztdg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wmzfittd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163lufbtuba.html

================================================================================
来源：http://www.xuanzx.com/163hipoymap.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ladybwjm.html

================================================================================
来源：http://www.sxryk.cn/163tlnwylxw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lmjtokao.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gmajndqg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nsrvvtyc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mbsvnaqs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163azpbzgcr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ehhixjcf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qseapjil.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vxhuueuk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163doikbnaq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163sefzluio.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rsynzjdd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kjprjpkb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yhlmhwyk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zumjjqft.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hayrbtbw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oyxatqdd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163sdusqwct.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ckzhqera.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ezavljku.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hzfttsfv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bvanqdyx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bubdkjfh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vcorbfek.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tbrhhdxc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yrjwyoeu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hsvnvcoo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kbcyccoy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jhaswjdc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nypohixk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163oscewuod.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ypwvgaez.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pruxjvyy.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gmgrepns.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mfwvilfi.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qydvibkv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pntmvgaq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rkxwtjwh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163voocfomr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ipwaghrk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163heggyzab.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163izwesrpy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rershmlc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163oalhbteu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nqnodjbj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jrifqpwf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eiroltiw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pivbudny.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jqpnzcjv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cyoehxub.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163myuovkuw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163bisiwbas.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rgpiwybe.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kjqtriwk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lcghueid.html

[H07] 断言
来源：http://www.sxryk.cn/163kaqrghjy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mgmqvvxi.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vukopzzk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163iniubljk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hhhaepmd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pdaljofl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yjfxaahz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ntvohdiq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163helxvvmv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163akycvoac.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pfnigvht.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163auynkgwl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hbsxfkzu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163kjsvcszv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yeqszwrm.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fijadlsq.html


<!-- 参考信息 -->