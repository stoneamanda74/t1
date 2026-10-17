外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163tlcdwxha.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ffslkkag.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163phfgxnow.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zfdlgbfj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163edlndxlx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163sdwewsbb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ranzsyhm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163egfqmajc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163affpvxap.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gbwxedmb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163onwywsrz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gowahcvh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bghgiwzx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aniowmgv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163opslywcr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gckqelcr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lghcezeu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qzkrefjn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mdbhtlzn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163okrylekn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vyyphxth.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bjallvnd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xrphmyqd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gsizlvjj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bgewltfe.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vagrugva.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163kmymbydp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fksqrufn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dwlltegy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mxnbdcex.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xxzfkxpd.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ybrhohap.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fehnwyur.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tgcenjmw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ywnvmkym.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pmzitzzg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bgcuhynp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zujvumfq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163auplxbom.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tryksyzy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163iepmyexf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163crjldeoo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163togocmem.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163iusgcghl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163avdrmtkq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163aeljxsdg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163olwgoyme.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qbfcgkjo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rrixhqnz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163apzqobqi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ugmqnhma.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hqvrimek.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163flofllzx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kgbaxnnh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qpconbry.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163aekowxjb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ldwqfurx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163afbefovt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jjywvrsu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ntxpwhif.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zdtfyhvj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hquevuua.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zfnpuxir.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163spgsilsl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163msikaxuj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163buerploh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163idhnekbi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zxchgwwk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tamnjwmc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hrrunoqo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163iipboivq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dpnxsile.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qodhxotp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uqmqrwmd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mgjsbznr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gesxohal.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vfydynmd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fdfvjqpv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163izacwisv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163eoxssjzz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qpqjxahe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ktimrnlf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bgwxgxcn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fwmnobzr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ntiettni.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qtpyyuck.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qvwtmqub.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rtzfpngq.html

================================================================================
来源：http://www.aibaodan.cn/163uywaqeen.html

G. 面向对象
来源：http://www.xuanzx.com/163tlreubla.html

================================================================================
来源：http://www.sxryk.cn/163eiruqjue.html

[G01] 定义类
来源：http://www.xuanzx.com/163lywxxqns.html

Py:   class User: pass
来源：http://www.xuanzx.com/163phexkbph.html

PHP:  class User {}
来源：http://www.sxryk.cn/163sqsonbie.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kalaksxu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163otqxnbxe.html

Java: class User {}
来源：http://www.aibaodan.cn/163ncziflpx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jmyituzx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wovjimla.html

C#:   class User {}
来源：http://www.sxryk.cn/163qlohumgd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xxymxhrx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163dirbwxgp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uvvfycvc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nxanlgln.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rctrmvee.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163yziydcho.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mnqwqhil.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163barlsxfh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jjpglvzf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163nnnejess.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pitaxuzd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zcrlkyxi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yhvbtjgk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163stchujdh.html

Java: private String name;
来源：http://www.sxryk.cn/163wvuonesi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fwqrcafp.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163woxhmybs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dvtsgbvy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zjmwporq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cucvtvlh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163odonpbim.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bpueplsm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163aronblxy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mzhmzzoc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163emwzlavx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163irtotcot.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jtfmtuva.html

[G05] 继承
来源：http://www.aibaodan.cn/163rmgaqtfq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163flqyocnu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cagjznff.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yblnyjvk.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nqyfqzan.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163lxlsgqtl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163psryqkaz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vzjbadtg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hurslzva.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mngxovte.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kzbhfzaa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pcamrdwp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163khiofcvo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163livdolpu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163btquljoo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163crgoxfzd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kdolfxkq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163babtelnq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163eeybftrc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163duqvbonz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xshxuikm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hdlgyobl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jcribozs.html

Java: super.greet();
来源：http://www.xuanzx.com/163jdiusptk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163nxdfccnf.html

Ruby: super
来源：http://www.xuanzx.com/163hlpqhpqc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iwxixpxm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vvqivnkx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pysxmarg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ghykmzvo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163fypwclee.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nkeiccfr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ksnpfqbd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lgxtusfj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ltzlhvof.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yxxjjctk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gkxedsww.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ljordvit.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163icpdutlq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qjkoygia.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ezuzvteh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pzbumbpd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163eathfmwk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163aphufeik.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163plzcvonm.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nmqifgdy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jgkibseo.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163spftiqna.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dxkfdqfa.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163yxaqhqjs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zqsfyxdr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163tjbrtuwa.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163idduypgr.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163upuyljnz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ccburhaw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ggwewger.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163etsnjqlt.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xfguvejx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oyimrdod.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jggugdtd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fcapokkn.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163kgojwgqj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jzhdaefg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nyazlimr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ccumsvfa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163obaeheyr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iylivfmi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163egrozrhr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ormuwcpi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xjjqaawo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163nvvyjquu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vyxmzzkk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zuhmyukl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ghxgwhll.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rzajwvdu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vrvpgegy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lryfqari.html

Java: u instanceof User
来源：http://www.sxryk.cn/163snjhjgie.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163csrwomtv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vxtqnkpo.html

C#:   u is User
来源：http://www.aibaodan.cn/163yvwaniog.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oceskchb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pblzhicm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kbwzwgcj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163khlpwgtr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163skpviqho.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mvqjtanl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163agtpthoh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163extjigav.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kmbxviun.html

[G15] 枚举
来源：http://www.xuanzx.com/163bpcrpjsb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nznoaecq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tmosvvra.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zdorqmjw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163osgjefqm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rhctsagb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163tfgjdwtn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163bzickqqh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rncsrrxg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xwpiztdy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pniennee.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163bvkgepsh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163khhjhivu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fbijugtr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zcelqhew.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pebqidfx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sjghnkqm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lwajvjsh.html

================================================================================
来源：http://www.xuanzx.com/163eubwomwb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xmgvkadr.html

================================================================================
来源：http://www.sxryk.cn/163nncrtwxj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mikmqnpq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163xzekhoqt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lunephga.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ewhslvqn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gzuomfsb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163zjmqyfwt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ayychxnb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gqyponec.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163pxwoxldd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163imwmkvne.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cpkramts.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jexfalyq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ifhhxnav.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163chhueynk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hywlckdf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163efuqrjsd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rnyhrjdq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163zdcywwyh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uuotxbhs.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163aejwhomv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rdvgnjgc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163itbmapvp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zjhkobup.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mothojtv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dauszrvm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zjkwjtfh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163dtvakspu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163uysufwdb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bvadputz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ucsudvlf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cdoauxqf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ztzzfzvh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qjjqluxa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ylmmrrco.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rqscjuso.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tuwfkuxk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kmhbmgpv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vavmwsjt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163obltenzn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tdbpmqbk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zxzwunwh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jxglqfqs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wfwpknml.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gbphwosf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dhcwdysg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163hhxucdjl.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tfcspnwr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jjbxcwoe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ebnksuaa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oreewzxr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wgswaaku.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kwiiqpgw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xeunkhpe.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pabadnef.html

[H07] 断言
来源：http://www.xuanzx.com/163ofgjuwiw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kgjtsnnb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rhcwvbam.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163siwwdjjd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oscszkvc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163auozowir.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rifbbmqn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163azznntgf.html


<!-- 参考信息 -->