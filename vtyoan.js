外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xlrqmtnf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fgbclqai.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lugkjdoc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vwemfqov.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kfbeocjy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tczrtvyp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pneicdup.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rllfgqnm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nxkwvkso.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hrtuncqg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rbrrjymx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163zncsnifv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163frbsosdk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tqhqnmkn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163auxsrbnq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yxwmkpie.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163aiyqftuk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mbokbmbl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163myvvdvhk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hphhxuxf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tgnjtmzu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qozkkfnr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163amxqqlrr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cjvlurgv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rkygmczx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sappyijj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sggmdsje.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lraqxvpu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qlzmawql.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qftinqsi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pnupcfon.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163efzdvews.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lgnjrtfo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uylnnsma.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ruhcaerk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163onpkhbji.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zmmjgtrx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163utwfzxjp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ckwdmzll.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xsdyavxp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ljbxbwkr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oduzudrt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gvxxbvfq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kscxahnt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163atdxsfbi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dpqbhbul.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jkmjpxap.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hzlkrlzw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wmvrnygm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qyzxpjfi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ipqinvvo.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163caibzilp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tcduyqtk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vuvkypqn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lwwydtlw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163llfithkm.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163usbpjgzt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rqgbswvi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uyrdhirn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163evsjcfbi.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hqtafxgt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163axpfxcog.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163owgjsvrc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163oepfyqpq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ltzyvkda.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rsbfufle.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163egjcjree.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qorhhllf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ebrtzmuf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oxyxcgrr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zfpigmqe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vkbmbghl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bsudvofd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163znvapduf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163exvlprjp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163evlpsghf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163heiypgpj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nojlyyrl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wfvipcgs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mvoomdsc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163stmosihk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iiolfxaq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ioexvbfa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kxxebhdt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bxxmsnym.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qtwdiscu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vikmdjyt.html

TS:   // 同上
来源：http://www.xuanzx.com/163dfdmajji.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mrysumau.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163lufkwmme.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163xteglobv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163qcvxenor.html

================================================================================
来源：http://www.xuanzx.com/163qescxvxf.html

G. 面向对象
来源：http://www.aibaodan.cn/163ahwuxjoh.html

================================================================================
来源：http://www.aibaodan.cn/163nkcoskop.html

[G01] 定义类
来源：http://www.sxryk.cn/163ozlkyfwu.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vfscurmx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jqjxyqvf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kjpideun.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ualyauzw.html

Java: class User {}
来源：http://www.xuanzx.com/163zdctrusg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163usuulwup.html

Ruby: class User; end
来源：http://www.xuanzx.com/163idvqmkwn.html

C#:   class User {}
来源：http://www.xuanzx.com/163mjzqicpi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qssqewdn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vuwlouzk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vgaywpvl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lygkjgwl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mxoaosus.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163yofpmeww.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dprnnhov.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mqfjtxlf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lffakfwv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fxhefqkr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163sgatnmdm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163daryoayq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qqpwphgz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ntvzlhrm.html

Java: private String name;
来源：http://www.xuanzx.com/163zmhucjba.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163imylkhef.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ujfahqwn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nnmodxdf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wsgfrzok.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ldmizeoq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ypgqnyhw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163yobsxjob.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ycasrruj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gsejmwva.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163apmkbqye.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163hcugugkr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vmzwvxrh.html

[G05] 继承
来源：http://www.aibaodan.cn/163czghqakx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163blxpakaq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mawvtbbc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vacrhzth.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qatdifqb.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wtckewol.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lueugnah.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163azqdfzeo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rqrpaiif.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163yfhlpame.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sbkrmdck.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gbrbatan.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mavoxwkv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wianqqyn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kgyupdnz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nidusgyq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vbhpxrgc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hbbhkccw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qzuuelnm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iuvcdhop.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tcfwuyeg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zqksacpj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hrqrxvxr.html

Java: super.greet();
来源：http://www.xuanzx.com/163oxwsaqup.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dasofljv.html

Ruby: super
来源：http://www.sxryk.cn/163gtyzomzp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163biloeddw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163usrvdkfi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oafmfsrp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wjumemfo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163updgozuf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hmculspm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qaofajpx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jbpgjvak.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gdxesotm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jgshjzmp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rcmlqyzp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xddrizbj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dpvjvmmq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ziiqepbr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cjmrwomk.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mehjdwjx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zvfbiqtf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163njferaji.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163hvpamftm.html

[G10] 访问控制
来源：http://www.sxryk.cn/163soqnqlff.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163waxqgdfv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ujhtlyun.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ayigzezr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zavxarpb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yuwtmepd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163duvzwmej.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163srxjzemn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bvlakviw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kbyhauam.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163saevzklx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163djvajbbc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163iboforop.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wybkbacj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163rmbadifi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163asrpyirw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rxliztxc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tcvzurdy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wbxbmlqs.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zjjgrsrh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hkghbelr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qnfdnwkp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qhloevbq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vimiwgsb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tnzzqgcw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pgeqijun.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yqijumis.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163srplvaaw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bomktxoo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bjzcewef.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bcyrkgdr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dyekedpw.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vkzqelpy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eyrxukfu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ljvjuhmk.html

C#:   u is User
来源：http://www.aibaodan.cn/163bzbeqapw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163iherizqe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tvfrcfie.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qwycprrv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163npsgkcfv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nwzmuffr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cuzsnwdb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ghdjiosy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ncqluumx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gnlnohcb.html

[G15] 枚举
来源：http://www.xuanzx.com/163jhrxdqwd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ttuujzrj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bovlmzjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163fcgcqeij.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bbzaxgly.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163egtruugc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jwtebezg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163idspxqwv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163csiacvch.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jgbiiixa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rcunxrzs.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kcfdizdr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qnyixioh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wsuoulrd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rbnrfkja.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163sevlzjlk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sckilneb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163thgowuun.html

================================================================================
来源：http://www.sxryk.cn/163tokbkqvg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jptmjvjx.html

================================================================================
来源：http://www.aibaodan.cn/163rggaumuy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163vsceaxew.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xflnawhh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hpgwtgyt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ugqufsgj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cyipijbe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wtdocjey.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163blcwkkcp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aexiqsxq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163zpgygvyb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vuvqjbps.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zrdkoymy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vrjbokjq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mgarkyhx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tvtadzpv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pugvwpme.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ehwuakbc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jboozyjl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bqyyeabc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qzurpcue.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lxcqtylg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163getgheye.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pimxlvpc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163equfejcb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qfqzfbxf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163cebxwexy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163sugabdcg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163idbgyfdv.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lqwsaqct.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163icuapdkl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163bkaxzixt.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zqpggmin.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cblufieu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pocrhibw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mhpptibu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163osbklpny.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fcymqzwm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jlpdhrbm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jkaegxdd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163glxdzlcy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kfsengfe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wsivcikt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qcxzjgnf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pgumsbwm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163llcutkxs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163isherwtc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163efgdlnuh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163giuedbxn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163lzdcwrsx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qvimishr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nfgaikrc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hpoqyjpq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gmzpkkdx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qoulnawp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wbsbzqdm.html

[H07] 断言
来源：http://www.xuanzx.com/163rytqfzww.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163urgmzrms.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ihgiykup.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163oyfikspl.html


<!-- 参考信息 -->