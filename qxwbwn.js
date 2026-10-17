外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qnueguja.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dqchsywj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163klisenfb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dagbtqeq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163lxoubycw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163aqkzkery.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163udgqtzyf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163swwmbfbu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mhztdufk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vtujxjyw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ovdhevft.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qhnqnksz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163edvkdwqg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yypljdph.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rhphhpdv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mfvearey.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163klxtgqmn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rnxsjvgc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jjfbkxzr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lxckdbzx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oovvazwk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pnashhjy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uykbldbj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iemvkxuy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163abwgkuwe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lbcbgfkz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sxqhrfok.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qfuauvcr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163oqsmdaye.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tlbwdcko.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zxjxssgd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vuwnxcsr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163uczmavvv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163eemrhucu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163apsjrwkh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163escquwqs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qrojhpsw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qdjrprmv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163yhyfgsrn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nfmfdebu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yefvzgmu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fcnyshzk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bpmmeukk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vedluhym.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jwaiypro.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ydnpuwfh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yvssrknt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dejwcmce.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wvbqxrrv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163zseuwstj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163brqkmddk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sdrnfkog.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xnsnmezd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gnzyxkpq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163graqrbiv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pzugitur.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fmauuewv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fbzfzkxn.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lfetttip.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ccmqqpfw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wbptrzft.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163icchzdqu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163udcfnkwo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163haairxqf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zapivsdt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uviruawf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ilqxqdrx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163yvoneurr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163dawmkxxd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163pcubrjya.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sfpolmes.html

TS:   // 同上
来源：http://www.sxryk.cn/163daiqmxca.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163shzridwh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ciakbcqb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rmfeoxof.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yttbikhx.html

================================================================================
来源：http://www.sxryk.cn/163fnlnubrn.html

G. 面向对象
来源：http://www.sxryk.cn/163bzwzeijw.html

================================================================================
来源：http://www.sxryk.cn/163ttqlambo.html

[G01] 定义类
来源：http://www.xuanzx.com/163bbnbvekk.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tppsbteh.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hgyaanqk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kwvihwfn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xifkqrkg.html

Java: class User {}
来源：http://www.sxryk.cn/163swxeofiv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qkqshrsq.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mjrxbzxd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jvkefqwc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yrkcbsru.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ykzhczty.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ccslcrms.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163oigfylhq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sbgqhkbh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ojkuwdlv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qayisjre.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lptcymdb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sxyhexks.html

[G03] 实例属性
来源：http://www.xuanzx.com/163azkhkwfd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mwotljmj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163csrucnix.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ebkqzgcx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ytmgdlyw.html

Java: private String name;
来源：http://www.xuanzx.com/163nruoeazv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qaivamzm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vedcwxta.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163oejkuakv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kupxhgmz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163stwhippu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ldbylqyi.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mmojksev.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yfrshnfj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wuwpivfd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ljnkzswd.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163laxkvucz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fizxwhtq.html

[G05] 继承
来源：http://www.sxryk.cn/163hkpokhwm.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nbgkihmw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ygmtshrs.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163imtbaxbc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vvshbqtg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163skppluql.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uhdgqzyq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ddyzrlag.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163irkblezq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cqeyjxfx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qwfrutsp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163icrkppew.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ukjcvnrr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nrywqchj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163sahtlzmz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163omhtgndi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jkzvixod.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163phpvrrsz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hioqfslu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wpmvvwrp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qvkoohub.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bwaelayk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hfddtaek.html

Java: super.greet();
来源：http://www.xuanzx.com/163rmsfzpkb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uupuptod.html

Ruby: super
来源：http://www.xuanzx.com/163thafkoqw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ylefbaew.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sgbizouk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vclrfbth.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lubltwft.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bhmbamtj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fogjhyfe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mubugsbx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bjzpsrma.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163oggdcqxi.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xnalqiad.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mqwnyiyt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ucljaecj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wfnbvtdj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tzehbbkf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mazxjbsr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lsjpsoij.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cbqcdzas.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hmrpdzms.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ufmgciwr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dfzfblbg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bghwmfhd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163scmrcjed.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qrsnkxbi.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163efonveqv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163yshuweot.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ghlkrsti.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163couednfk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163bsxwpliu.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tjztacvf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dxvjnbgb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vrlosbiv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163liorcepg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163brfbpjic.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163answiyxr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cfquhxof.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163aiupxomi.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tqpvdpeu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cuexozzt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tfultjlt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163adxvpjbi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qkpizrqc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163linxhvhp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qnfftadu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163eqgznnpm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ursxubsb.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163upamwfmi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xyworyun.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fkqwielv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163swqxufuw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fqwyyxpc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nbogpvig.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ghesoqvt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zgmbeure.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163isxbxvts.html

C#:   u is User
来源：http://www.sxryk.cn/163ijgdsvvs.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hsqvtpbg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tjtrdetg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ulytjmur.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163thkbulok.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gzwbgjsp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fbcvvvkn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163plscaypf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mnblbeem.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yzcmxxcb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vvrfkusp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wxsgxkwk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dsdglnjb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uafahmav.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gsleofgq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163volnwtnr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163zsowayvt.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mqxnfrtj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163auvreyli.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vbqwlveg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163uajndfwm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fuqzscjs.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wtdptygi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zlwlseio.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hufmudrr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yxjvuydu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ujgulmwj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163evjtoknz.html

================================================================================
来源：http://www.aibaodan.cn/163jphediza.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dlotobsw.html

================================================================================
来源：http://www.aibaodan.cn/163mksrivum.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cksumcjt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ybgmalvc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mqveahov.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zqcujbdq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gnddtuwl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163intkptut.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163snhvkvcx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163plzhcoyj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qrspqaba.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yhkaigju.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ggaftgml.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sltvuuqv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qdovkwbq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zoumczun.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pbehbmdx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163samsghzv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jrxohtto.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tbziuaqw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gbnpqyfb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163owbuycqj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aylibfbu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qgzzqnuv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ywenwnja.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vfbjyiol.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163htkvcuok.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ierefnrd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hfakovgw.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dxgmtjja.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ssjfgkky.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163reexuggk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fkjrazos.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yhfqflbu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tfdvmxph.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xmjmeogj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163eykbwxdq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mevivhlu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ouoqjjql.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163shajpizt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163nskhfimg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nhyczvju.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163roarzvwf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163puvdcdai.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kkoddzha.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163szkkipfd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jddlnpjl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163srrxrbxo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163slalhydu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xtjbeqpb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mpumiizl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163necapqwy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ggnsvwxo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ycbakuea.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163reigaocb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163scpuambc.html

[H07] 断言
来源：http://www.sxryk.cn/163ubuloqqp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vodiymba.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cfnpfzye.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mfwvshbr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rkprnvkx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dmyvzitw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hllcardo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mmsjriba.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fxmqhwqw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zlcjlzli.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jfpxkyxy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qbmreefb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zgpdmsqn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ikvzvyvg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nzcpywen.html

Go:   err.Error()
来源：http://www.xuanzx.com/163iaumtbeh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ktyzhxes.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vkwsnahr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mxebivqc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163dughjnmy.html


<!-- 参考信息 -->