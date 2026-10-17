外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ahmcvoqb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zawctjet.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163brzlfwqx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163rqzinozs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rmbtanzm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tvdgylou.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ampzxziw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gctleozd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163selyqwvm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uwayzpxu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dicsbdbh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hafjqwfs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kkrxupln.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tmgqyfxv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163czziibjz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kinbofjh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jrmrbycp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163abzsglil.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163odxdcsms.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jmegknat.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zszscdsk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hukdmyjz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rkiykkif.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163uikbweht.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mojizzsw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xbcfmfxd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163axcxjfzr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163buquyozn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ocbpzjnn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cuybndfr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uxdquilx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163iyifyare.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rikkooeg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ulnmqqgx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ttdxqxuo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vvliuziu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gguxidvz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hylcsyey.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zwngpxxr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jpadzqmp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tuboyxzq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ceyqflfs.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163bhsijnel.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yuwpcrdq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ikfgfdmg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163snifgbfa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oxidbwgu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hxaatocc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163damgsfmt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fhhzrbxi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tmnnapfe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hdgcavuo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163tdqhvzbt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yhfpceca.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gjmzilvo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pitggwxk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ldaqfhtq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163txxfxamq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163kxkjpsgw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163yercwywr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163djzaqqpz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tnafaofw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zkqwydgn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fttuspng.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xcgytkkr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vgzreaow.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mphscfmn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163oyhdxqbt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163patrhcja.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ptnzgcbm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gzfjjekb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bumvqgaw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163biyaupit.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tdufkcfn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jykmtxkt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163oiaumoyg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wtscdgcw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lxxdloif.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sdrcguwd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bnvrbadw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cimlvbwb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vonfvkez.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163daaiziwk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163jydzftwc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zalutner.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rimkntvd.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zvmirnim.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hxcfpkfy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jshhjsgz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gjvlbftp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vvreupfj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ninfnrrk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zlxaxgfc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hivnhlcv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ymhisonk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dqxlnwlg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hgtukuwg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163iwayiorz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qelpaxlk.html

TS:   // 同上
来源：http://www.xuanzx.com/163ljnezdgs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tkjfrjrv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163peermege.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163weawzzbj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ievwuklp.html

================================================================================
来源：http://www.sxryk.cn/163blevunnb.html

G. 面向对象
来源：http://www.sxryk.cn/163gdqrlufx.html

================================================================================
来源：http://www.aibaodan.cn/163ahlkbvds.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fzzpiads.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ofwlilpq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lvgtxdnp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zlpzwggz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163eeswzslu.html

Java: class User {}
来源：http://www.xuanzx.com/163agvvkqca.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163fmwwsrdw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163uzbsedvl.html

C#:   class User {}
来源：http://www.xuanzx.com/163qqcucacv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mxsljhyr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163axlgsaet.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163dqpcbebv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163abnqiolk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163cvvlyusg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163oyhqerhc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xzyoxdci.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bvmqtegu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163iymvldvx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163puwmbjvn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163utssqmer.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163suywgbsi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pcqauneb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bxdocrai.html

Java: private String name;
来源：http://www.xuanzx.com/163cbrafoio.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hhcgrvwv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rjxzrlvy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163umblyfod.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163flalhadt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fgjkofse.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sjohbvqc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163begubnhw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rkegnzeo.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ggelxbsd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zxsmhvof.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ymllvftb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163avipwdzz.html

[G05] 继承
来源：http://www.xuanzx.com/163tkgghhgt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dubxmuze.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163htfwrmse.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hvrpaesa.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hcsnipei.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ccgzbvlp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163iesiyajq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ibtsafib.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163huysuedj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wptctbpi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ttxmsofb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qqmnsfsb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163crpzztsx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zzfvjibr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ibkbyzyc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163dtviwjbr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ebpmfvmb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bjfidxgd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163aldlevoj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ucjbamhk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wfjhtmap.html

JS:   super.greet();
来源：http://www.xuanzx.com/163assbbjww.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163yogympuj.html

Java: super.greet();
来源：http://www.xuanzx.com/163abqcevbm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tltnvzgu.html

Ruby: super
来源：http://www.xuanzx.com/163nyaxdspa.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yhyttfmp.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163elkvwbxv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ddyztbmg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bylcamph.html

JS:   static f() {}
来源：http://www.xuanzx.com/163chuvlvoe.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xvwyoxyl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163trbfrkhw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mvgkyfmn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xwjuanqt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xgwanhzx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fttukyrh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bwpusdef.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jdkzxvmm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eynbrmvv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163obielzdg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qsvxsdtl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ynbpfano.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zyemnmhv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vybzqhxy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hlldkiey.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163uutkmoho.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163sodtijpp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vmbdsdet.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vkjtmcya.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bfrozxpr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jrzroywu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jlaewwym.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dmahoewv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163fdqcnqfp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163epvappqu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163skmvueik.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fdyojkcl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sduowqls.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vglivipa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pzpzzdav.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uykgxrdj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wbdvzvlx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163aqdmiglb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bobkscdr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kikxjijo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163exjggxul.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qxaanrha.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163nnllqupz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qvknzinp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163luyecutg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hqzgkinv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nvjywbig.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ochgqxuz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qnafohka.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163yycnyyaa.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hlouwsoy.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dhkgatfl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ovmatnjg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oxlsrqsq.html

C#:   u is User
来源：http://www.xuanzx.com/163fjgqjdff.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tzhwvrqo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bkcgiblv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163miyjazwz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wbtdxkyp.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163toayhomt.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163laajcyul.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xkvgtirk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vvverqni.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xmjccnej.html

[G15] 枚举
来源：http://www.sxryk.cn/163mhrrtxyn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xiwnnetv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zntejmrn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tigsmrhg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pmzvjaqg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gjdlkbqa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163brybvcfu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zfsautwq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nrfyibth.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tfnmsmif.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163umyefsnk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163khbdeeau.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hrszcwnj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hmlhveuy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xetegzgm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mobdrxuf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ppyrsiwj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pudnbhrd.html

================================================================================
来源：http://www.aibaodan.cn/163ziasfpaf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cifccmny.html

================================================================================
来源：http://www.sxryk.cn/163drdqrens.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hagnwvaa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qdjzucta.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vgqkzgod.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gkmofhfn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bguuezio.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qmtwtoyc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jkxvgoor.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163igmcsmxs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lxtfbhil.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xszlovcx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mmgyrfrj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163anzqrtbk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vjmosdbp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zcsntdif.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163woegojsl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vgmbuybx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gbclogmu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wjukopod.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dhcfqnoo.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hilxlkce.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fqsbgcyv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bwdqilyf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lzvpksst.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163edeqpuck.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gsilodvv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ygnhzxbo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gcdszabj.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dtnfylle.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ponoxnwu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yvzfagqe.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163goqgqrog.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jpsmbpic.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163veqvlutz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sncpvegw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163emapvrwh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kuvgggad.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hkuibyvs.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xhxxpvvo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163adpgreem.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mymjmocp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jpunskzz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163saeisada.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gvhfelmo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ygnryvom.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fxdlkniv.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hlgwwybp.html


<!-- 参考信息 -->