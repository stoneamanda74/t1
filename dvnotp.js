外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cxygbvrs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163upgypamz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gjvoyuem.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nucgboep.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qpjpzdjf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zorujfva.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hdfcxcan.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wbpounir.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163oindzayk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163epudkcpw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yvrpwpiy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ljdbxlbd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mrmlckpr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163sllraesu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xwysgoti.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cqsvpokd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vjvksyud.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nnaycwzu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ojsoudbn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ntusngob.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gezmyrna.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zbycpuci.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zywhwxhd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163csrkardk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163baewqyhz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kxylfyxk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yxhtxpgx.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163otwwjhtp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bopddemo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dpsonkbb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vwmdgeyb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zndbkxba.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163idzccahk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wxipajbu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zaqzkwio.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wyvykotg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wfwjfxpv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hnjwtvlz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lbvexleq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163egwyyzjd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163udjdcwgj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lboclpef.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zxrmlkfw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nqwwyvqe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xnomwrkr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zbyxctoy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lrmnxivf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163miiwukxu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163szzindnz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nmlevamq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xcsnbkng.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ltlzeaga.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fomvqcbv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nnyziizv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vzfptxke.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rdbjpnmh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mnuawvig.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xwinsxga.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vkxcfudm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uhddwoxf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kjevgnea.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163debbevep.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cdwmhnad.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gbgervmx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jnmldpvm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ojbqutkm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sqnwffab.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163svqrfhhx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tetfskls.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ntcyuuvy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pjlskxfe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tsalfvjf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hficnimg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zlpwlpmn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163twksqxhf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yjaztfek.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bimhfvub.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163obaziand.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163tjsdzpfx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mcekybhg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163zbueaabg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zwyntiin.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hgsqzzve.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rbkwlecl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163shzisvxe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163flljgrdw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oynnvgbt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bhhcocyd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gxiszcjp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163scncksst.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163txlputvx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pevskwly.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wkrvwsok.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163drrujrlw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rutkobcv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nnkkyatf.html

================================================================================
来源：http://www.aibaodan.cn/163hxiqzbtf.html

G. 面向对象
来源：http://www.aibaodan.cn/163bdnhgssk.html

================================================================================
来源：http://www.xuanzx.com/163amywfpdt.html

[G01] 定义类
来源：http://www.xuanzx.com/163qtcxqmzz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163aidxcfxz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xvrntmos.html

JS:   class User {}
来源：http://www.xuanzx.com/163kfbtphdd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fnbezmeh.html

Java: class User {}
来源：http://www.aibaodan.cn/163takmquad.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163coefyrqq.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ikccayya.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gmjyovli.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gjqkdiew.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jxosmnuy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163gxrsejgh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lcdgdech.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163eztrytcr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kvaczapr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tlfceqiv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mftwpjni.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163giqhumrv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163unqxkupz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sqiheqwx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163agnnsdhn.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163buzjobpc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cwvmdueg.html

Java: private String name;
来源：http://www.aibaodan.cn/163tdwpdkhv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qvectgat.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wpfltsuy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qmvdmkhr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jueibayo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mzvburma.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pkyxzyws.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zzsrhtil.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dmdxciat.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dmujqcbt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eafexnza.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kpcixknv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xjqlkyaw.html

[G05] 继承
来源：http://www.aibaodan.cn/163adzwtjkz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wryrnteg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wpmzsuuv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163psqpkrml.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gpytbntg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pslvnsar.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xzicdueg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163hfpbzfda.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163faacmlrg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xjfowyrq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163dpqvrjlf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eucbfioa.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cmdfklgd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nzrsbrnc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hepxiaob.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163loudkftm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ekunwqns.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163friknmbv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gbjlswbb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163wedtfepg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163blxyuxwp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ybxarvvl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163rdrutdit.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mgolydbc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163evceiuyd.html

Ruby: super
来源：http://www.xuanzx.com/163jltfdzvt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dlixrcdn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ybhnmfdb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lmlgtwvr.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163fimzcgyo.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qwrycisw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nmmsmqps.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163datwnthy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163docvciqw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163suaovawr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163tvbtfctv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gyetsoif.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rsmgdlii.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xaoxfcjx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xejgesvj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163stkztjoq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wgdddbwy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hfejtblp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hrkncuai.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fqcsndbo.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zitakbzr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jrlfafgo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163gayfgtlz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kfmklsis.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163abixzwup.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163toghirev.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wccuykdc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hzjaqncv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163siffhajq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jtsndkmc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163okdrbvwe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ghcjkfqt.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163obedydqj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163kelbtyax.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ceqscsar.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ecgzpcri.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qlzuwrdv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jalotkep.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cgcxptis.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wfmjtpia.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163krpxnzbg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163nifiwmxu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yagzuzlc.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fdtfhwop.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vfsrovfa.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xqwbsjpi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qtejkqfo.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vwzoooek.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163yxwcwjvl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cvliucwt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ftawytiv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ozeoyqqz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hxhwhsmp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jbcjomrr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163odssruwe.html

C#:   u is User
来源：http://www.sxryk.cn/163cvnjzgld.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163seybwdug.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xmozztjr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163spesfvka.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lhsiymia.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ynhdzubh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163udvqbjcv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163saylvuyz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qhaqixcf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163eyspcocv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fpynvcti.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163nhmoueib.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163eocacdab.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163csvwegpa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163huhcvkvt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lgyavuyy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163trikmpjn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163exoktrwx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ypnoslex.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163zfnncfql.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jjlxwwmu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ayngstis.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lvizevao.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bdyndmsx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jejtfthx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rzeensiz.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ifpvlrai.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kjacjfeb.html

================================================================================
来源：http://www.aibaodan.cn/163ntxgbhiu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163etrbedhf.html

================================================================================
来源：http://www.aibaodan.cn/163chhsmykx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pingpphx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163egvlznyv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sojcfivg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163djtzyiuc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163avrrmpvb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ufididjz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163slhqxdsq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163daenafbu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jqcybvbp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qmhmyfbo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163snbwnzcn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bfueniqx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rfejkbse.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cswesdfp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lkfhxowl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kgjbvoqd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zjzpmukw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hivkwbnw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ghekhxhx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kauwmbzr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lgptvpfv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ajxcrmmz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rfubohdm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ptdrgayd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hcihudad.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163crzutlrf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163glieqaxb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gnsqigiw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ypwkcinz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xjlmcomb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kaxcyypi.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gfctoziu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163chzevdwe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163dxqsagtw.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yovieckb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gaastbij.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qrbolykv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163aqpvxxwp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zpqvhmzl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qsojvrzm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qxeytlgl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163suocevzk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163izrkanfw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163yvgxodel.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hvykzxkt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hdpqbfnv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163utebznok.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jadnzdqk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ckftuaoa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xynmlewr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vhowcylw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hwpnxtrn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rfwavtbn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xtvdumgt.html


<!-- 参考信息 -->