外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nhevrgts.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ojzvoafv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gpwzukyv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ccnkjdci.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ttjncmtt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163axxexlzy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ywhvxunl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fyosugzi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mqyuwczw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xbypzzzn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sijkjgvr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gwxmlcjw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lgjxhdbd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sflmrmaq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vyvnqquz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163iaaxlnse.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163npplickj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wxbhwyfs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163uzusuzzt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163luefkvcm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pazutlbn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qozrzbto.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sqxzfvle.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163itvoovrk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rstlagkf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163weideogf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xjbmbtbj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163daebtoau.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ocwpbfnm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163exklvmhj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163qxscdrih.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ghnqumij.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jxvofkys.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yviaubtp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163atlbxusw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lrqedwsr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lumjwdtr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zgatngul.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ekpymwcz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ojgqckbz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mrdxturx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yumvmxid.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ngnhyxnz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163uztqnxfg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bxgcteqr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fygfadkj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bkyzaeao.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rcqypcnb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rkujdmbs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163srvnxuju.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lkralegu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163taywgnkl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jcukmrux.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163lnruxhkn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ihcowqml.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ghoeecrt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mnyjtdwb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163avptbgwq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163acdwpynr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163muyezhyc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gjzpgcmn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163nlpfhkvi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mfkxwgwv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163afmvifwd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fkpcmszu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qpjfqgky.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ibnwsanj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gpxbyyut.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ujdmocjs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jlfkxsod.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pzjkeblj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tdhfkubg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cvaikrtk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gnwgznib.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ferqdxut.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jrfhdxcs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kxfdtaxm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jkhqodnd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163crzzamca.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163njymfodp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pclilqwt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163syuwxytn.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163gqiergox.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tbpnduri.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nuebolop.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wnkczpvh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163edrrhfhl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nansnekp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dwpmznrd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yscbsmpe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163lynnjeha.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jtvegdfx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wsoncboz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tsstrwmz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163sopykgxz.html

TS:   // 同上
来源：http://www.sxryk.cn/163ytxfhdse.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pkrdvyzr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pajztduz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wfyeylli.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163admjzjtt.html

================================================================================
来源：http://www.xuanzx.com/163axvdebdo.html

G. 面向对象
来源：http://www.xuanzx.com/163atpynbig.html

================================================================================
来源：http://www.aibaodan.cn/163mlkvysda.html

[G01] 定义类
来源：http://www.xuanzx.com/163pifbgbqv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uwdgmpyf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ckdkjcwd.html

JS:   class User {}
来源：http://www.xuanzx.com/163ytijdosj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163youuhtyj.html

Java: class User {}
来源：http://www.xuanzx.com/163wfxtostm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mmqnqjqa.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163apqntzik.html

C#:   class User {}
来源：http://www.sxryk.cn/163mpvlatzb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zglwhtse.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qzgbspge.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ztxsgxcr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gcizbcwq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163emolcgkx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lrsysfqr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yqmvkwzc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163aelfxxgp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163koyduhoi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tpnkcqdr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lncmfabx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lmexwaus.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dhtxzjbp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ldbfqbxp.html

Java: private String name;
来源：http://www.xuanzx.com/163lonnnbng.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163eecdqzkk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tmhevjzy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kieqtlvg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163yhjtqzln.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163agtdhiwm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nxvjwfve.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mcsledkc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dekeqyrk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163tdwgzxyr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xsyvbsef.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ggwjzygn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gummkehi.html

[G05] 继承
来源：http://www.sxryk.cn/163rgggclxh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163awhqvbhk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ucygraaj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163awhusucr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wnoqhdjb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nkkqrhhn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xxzyoatc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iagssqlw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mqjktrto.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ndoruyld.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163llqpzgic.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pbqqcaed.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ugulruen.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cgwijsjh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xujlxvfg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lsoookpe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163heqswgti.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dfbehhgc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nsmbglyl.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vlvpucwd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ejtfurld.html

JS:   super.greet();
来源：http://www.sxryk.cn/163oavvatrp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163eibluchh.html

Java: super.greet();
来源：http://www.xuanzx.com/163ktvyfkxc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wcuzkbiy.html

Ruby: super
来源：http://www.aibaodan.cn/163grpzjfav.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zghenvko.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163odzxrkfx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zuzlnotz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qheidzmc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jmsflwwz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bfrsaydt.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163acqstrkp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163muikmagh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163oxzsscyx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nigysxec.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lxvnqtmh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ldrjmxil.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gnssifmk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cfajreax.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lhvoahji.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ytniflhh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163apsitmfl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gflkzyjc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kvtdioss.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ikmesjdr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bmumuawk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163olptelwy.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fuyhxmew.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gjdguwax.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rtvjquxd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qcuipkvp.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nrtghzin.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rnzvjlrc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kynrwdyd.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wetwxobt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ashhrynj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wzzxjxnb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vwnytidf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rnynygkz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gbdgnjrp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ojohwbqw.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jokrdvko.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vdrcltlv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163twxofgce.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163manxzeow.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163flckedlq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dtfrgwuz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163acmzcdpi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gvhajfec.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ippiixse.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jfochrdb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ithaerpb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ecisntem.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163iauuotdw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qkhavsyo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yfelmlaq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ayzhyrbk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wnqqjvid.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kpbepghz.html

C#:   u is User
来源：http://www.xuanzx.com/163eszpcpjp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163alavjthm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rctmijnj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nbspapti.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163gtukyhtw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qheaoybo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ubveledn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gnixoiko.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ohkikuzx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zckxpgho.html

[G15] 枚举
来源：http://www.sxryk.cn/163wlxeqvmt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kphpmylq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163yfzszobu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163chshfipt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zpmxzcpx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163icsdobci.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xkcufcwi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163wqovbnvl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mevvvmzp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lqokvfou.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163eyyfaomh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lkhodhgy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wtbeacyx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yfitcaop.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163akcfazjk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163npkjeljh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163whuochhw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bxgfnxni.html

================================================================================
来源：http://www.sxryk.cn/163dqbrezxm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dtxisgmv.html

================================================================================
来源：http://www.sxryk.cn/163vidxryin.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wvkvupqm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ckcmufov.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163tvhadklf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163stoupzak.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tmsxhpwh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163czkkqjiu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hpukfwzh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ndplojfn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hlhoytto.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163imldvgfd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163eerdvwie.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wtvkbgwk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163owvfbusf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wwwurgmo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lfberyun.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gpzskvon.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kdwiuchm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163txeyrnui.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ufpsrpno.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fxflyapu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mkdzcjef.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163airkebvb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dtzrqmes.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jgndfynm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gvnetrmj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kfgsvcbb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163erudseeb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uionjjbx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hiagahbl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ffhpiygy.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wpmvexle.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hztquxrs.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nasumpny.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163imktefhl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ohcwceec.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lsozgsjd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163atwqxnnk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rberbvxs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163yhayxvhv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jkxawadw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bpobgrnu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hkogsfsv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kjsirwie.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lhuojupx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eysypuwy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nujvtwxc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pkdksgiv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wkeevfhy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ejtmjfjf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xmhvwvez.html


<!-- 参考信息 -->