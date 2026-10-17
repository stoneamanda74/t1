外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tcptdats.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vgpdxazd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163evhupyca.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163namucwxy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ndxybano.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jyrtotyi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gphycbvt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qxbnbbbz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vcxmeidx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163znickbts.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uchikygf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xoaopwso.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bjtknmrq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163repsrdht.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163joyaiclq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163inafsogq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yibworee.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163djjpnmug.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zlbppddz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163apjgxluu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163abxaxkdm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hsmzjlcs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wpepgclx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yawugzpp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cinglvki.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pzhqynnf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hggueheb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163daqolhga.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163crgskpou.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lmvfvjwp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nrwrrdaa.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fkzgmvtp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wvgppdem.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ukfbuplk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xuxlhvxl.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ctwwhovh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qyuqrsos.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163sjnbhqbm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fsriazdx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tnuxmijh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hzcjdxgp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jkaccymi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mkuznkmp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163itxabvdg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ytbtraxe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gigvploi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163taiibarc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hxpmjlhw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nsupghwt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wfofvccy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cxcemzvf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163juztlgue.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ishwqrhv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163owkrpsjy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pimfbvle.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ppmbfctm.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163morujfdy.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dczpdzoi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nqwjwoci.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hummhywa.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wjunepcr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xvpxintn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163niawrimd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pfkpxvuq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qrtzrllo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hzhelrry.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uhnnqtgv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ktjomanu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cgployzq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zdvctqyh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dqwdjxvf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ajenrwox.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gdzodykd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163phlbrwhk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163idqqtqrl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pexaubrr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kwpvbtpm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ispgtvtn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gnflbfhe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dtcxauut.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163hnqpvghl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dnuizmlo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vkiyhdjd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wdkgznnx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qgzzctja.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rdmluccb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zzxajtmo.html

TS:   // 同上
来源：http://www.sxryk.cn/163lmgaxsia.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163slcqqbiz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rrobleyi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163feejtksk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nxlbamtx.html

================================================================================
来源：http://www.xuanzx.com/163yzqopdlk.html

G. 面向对象
来源：http://www.aibaodan.cn/163ewbqcapq.html

================================================================================
来源：http://www.aibaodan.cn/163ywzifjnb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qhwlnklq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vjinhpfw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ymmabfxw.html

JS:   class User {}
来源：http://www.xuanzx.com/163rmreuyes.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jwukmuyv.html

Java: class User {}
来源：http://www.sxryk.cn/163wmtqkchx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vhedkibk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ujrsumvx.html

C#:   class User {}
来源：http://www.sxryk.cn/163gealfiuj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163pyjrhxyt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163haskyirr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163agenyhig.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gqzwjxrv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163bqzvkvla.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qzhamtjh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163iigezavz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qbtdlxkl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xpagonbc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bxwonxzr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bfasbvlg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fxgfwmvr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163scprarrl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163drjbvazi.html

Java: private String name;
来源：http://www.aibaodan.cn/163cecbzntl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163suwknaji.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bforeacd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iczxzaup.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lpykwmxu.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wasjoagk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gdpbmbji.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fsecrafm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ykhwsfom.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iyssvemu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cwkmdvle.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rltzesam.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163thsghfnr.html

[G05] 继承
来源：http://www.xuanzx.com/163cuajhsog.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163aoaeejxs.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163adkcqtop.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xdvxrxyn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rzclqgyi.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ubxyepnj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ihbvbopr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yixlxtnm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ydrradkz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jadayvef.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zzdswoft.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163aizyvisw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wlysgapt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lfbdvfnj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wtugfete.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yoecsdtu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nakspaju.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mkukwnzq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163sfijplst.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gtxykyxg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163bhqoykkt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xoreylij.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nxelhfnc.html

Java: super.greet();
来源：http://www.sxryk.cn/163fnifzxof.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ygrphycp.html

Ruby: super
来源：http://www.sxryk.cn/163dmmxasvx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163xebhbvmq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pmbrihas.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rrrcfhoa.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ojxpzssd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ccmqyjqm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qxcohnnp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163eqpokehv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163exxgbkpq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tbsznrtc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163aojyxycf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dnkccprx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hqqmegad.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gkfxvymj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163whancmqz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ogfxofro.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fvknvxhm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163dasnlvqf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lvghthxz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xnnmuatx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xpykmizz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wfdlkksh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zswptqra.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qowuvfbu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163draruuzf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163aikrmxvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ibtmzikw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163guxkmivn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hzwtjcce.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yrpdhwnv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163izbctzvv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ugnqxckj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163upcrkjzl.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163elgvfkby.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kxmlqdcj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fkywprns.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163zfxfkufd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163igtcmghj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sgfghocd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163uhfhubmp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qldrxsom.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vblyykyx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nhmyyvwp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dtkpiijh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163swdwweum.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163myqydrpf.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pmfmjrhw.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tvegzjkw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jdogwrxb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ixqpmztn.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kbewiypl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163oiimnhux.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hhkfysqg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163lggqrcei.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mwairguy.html

C#:   u is User
来源：http://www.xuanzx.com/163orlxjpcm.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163djyyucbn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bcaimjpv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xjpxmuno.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163akhdgxew.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163dbzjygku.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pwtamyyc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163fmoggcwp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ddcouxel.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kwyjmmne.html

[G15] 枚举
来源：http://www.sxryk.cn/163yveknckw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bqmfdatk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wpasksda.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gorreooj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yptcwysu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ayltfhti.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kvxmfzoa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jzjxvvox.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yveykiyw.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xadmmvxx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dpssbvfy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zdgsapui.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163niscciwt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tvbzyfmv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wbzwccws.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xcdngwkl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163snppzlbc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163apvebqgp.html

================================================================================
来源：http://www.xuanzx.com/163dzlcvtio.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ikparika.html

================================================================================
来源：http://www.sxryk.cn/163hjoagqzo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qnanczwg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rzeqxvla.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zlxykagn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163twnfieqo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yfbjritz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163cvrpipqw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pbfoeery.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tqvayyvn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mwnsmjwz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163meyjrgjm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kormhfzz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dhduztws.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wbzmbycq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dptjyugv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lkekwpbk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ucpfbwng.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nluwzoid.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163muqnlsbj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163azsusutw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gmtcbzsw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wjainrrm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kcaatlrx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eckkoyvu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163doziatcv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qmohighi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163juilaher.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163cprhxvls.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xxgmlayo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dbniptjk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163soqafrvi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sddocxaq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tdqebevk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163iizdapbp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bfdajmqq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lwnsmflb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163iobddtph.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hybybfth.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163glbateep.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163istbixwo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fveduwck.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qnwngyjs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ystabiqh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cuxmwagn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qlqvjplq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fmygeurt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zirjrrpo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kzshfhyr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yzqytrfs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wseeofvr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gbcyiyjz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rfhcywlf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pvljrgbs.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jpzgygaj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163sinapqan.html

[H07] 断言
来源：http://www.xuanzx.com/163hvoaddph.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ccppwaky.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ucldcgsr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163avzofcbp.html


<!-- 参考信息 -->