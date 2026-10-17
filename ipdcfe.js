外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zffkwcur.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nmwpjssa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ihglqjhk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jymtcamh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163sikkhpbk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vqglfwva.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163khydwosr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tavcpufr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rmhmgqby.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cibakfak.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sxeuhhzn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vbnfdkhw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hryiqwhc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ufyyferq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dvezydkv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wvpnulam.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tgcswfqi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mdqryngk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pndajqri.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oixjqjdi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163edavtjxz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163cczyimuj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cssakeok.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dhblyebw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ldvyfsnf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vybxpvek.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163grbwcynw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jvoysrqe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163prgarcig.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xhhcdpax.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ewsaqwin.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163crfaotsz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mfttxtau.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xrukrrna.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bjtpbaeo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163khaufdcd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163chdauxfy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mgmtvzol.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mmfjblyw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jjznyske.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qlqhpvpy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ouulyhvh.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ltivwfkf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rbhceaok.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jttrfhcw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hirfdivp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gkkculzu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xybcwxkj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bwemnvtn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xtzwtahw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163enjcswze.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bkivexwp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ikltbyga.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kwvodekc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163atlrhlrq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nhvqkhmd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sfrcdjia.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jtqzznph.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bvryqbwz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163owdhkexi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oyjnweiv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rwufcrpn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163etyzpqif.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kmwrdfdc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163voosorvb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163brbjeeaf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163arikjbez.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lydiupxw.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163eanjomrj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163xbxcrcms.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jdepurtu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gdzcjbba.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qdqwiqjh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vrndrpxy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sykiahri.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ymumevld.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lnjafmtm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nbfsceuy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mxdadxfs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lgszkdak.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qaklseuj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zzwcsvgx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ggqohvqc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163efkifttz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nswhqyef.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163buohddyi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zzixodih.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jnugmfad.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nigyhnob.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163njxxeyux.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zzdprijk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nlswinun.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163msczyuzf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ccaufptf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xgsssuql.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tlqvwilv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xphntora.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163eqzakeaw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gltfjkzt.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fbsxfwip.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163sjclerms.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fjkongls.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ahxajwft.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kbpraqpn.html

================================================================================
来源：http://www.sxryk.cn/163lnbkwiof.html

G. 面向对象
来源：http://www.aibaodan.cn/163pbtewfpe.html

================================================================================
来源：http://www.sxryk.cn/163rgasvbqq.html

[G01] 定义类
来源：http://www.aibaodan.cn/163monoqdlg.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yydcmiyg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kdncblvg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xhiioynk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fzezuysv.html

Java: class User {}
来源：http://www.aibaodan.cn/163yessmmwy.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163tcaerxjv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163cbfdpngk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zetenldg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163aowumngc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wwsdkymv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qearvdlk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lflyajcd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tzzkmqki.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dehfyaja.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wcpirgme.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163sdlvnxdm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zzslkjkz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163utddbkoh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pkmlmqks.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jmjsgqjl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mtjgvwwy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ntkfctnm.html

Java: private String name;
来源：http://www.aibaodan.cn/163xmgwsjhb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gyrluuav.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tadrkyya.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163azxfhxts.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163frtdovbf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163eozudmmo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zystptgw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pdpejiwe.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cpnsnvas.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ubixvqma.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163apvcgirb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163aqakpgiv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ijwidrbp.html

[G05] 继承
来源：http://www.sxryk.cn/163tjgfapby.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fayraanm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cbqlrwyb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wrdajvln.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zihsfcin.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zphztamj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163owfstqyo.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jmlvtbui.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ntbbjhmt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lqgwokcc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163sjoldctv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163arkfcawk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iwbtqthi.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ijskysel.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zkibuusc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lmcyvmwq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163xzzvvwha.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163acbecpty.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kvoxkdxn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qldzugsl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bdhfpzvx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163onlhxmcc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zbaxuzzu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wnekvzjf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dzabqhcz.html

Ruby: super
来源：http://www.aibaodan.cn/163osmyvsax.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163nmgelbko.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163cafsvhiv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163eyuwxdvi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uxrkezdn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uzdvowpn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mfeiilge.html

Java: static void f() {}
来源：http://www.sxryk.cn/163psizkehi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gmvbtukv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163pifanqla.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pdwppzcf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tthoscmv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fnwytsjk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tihhifbj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163egetybeo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163pjuryach.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wgnwjpgt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ctpjfszx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163qiildwlv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dxvslmix.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zpdqptjc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jivdqlkv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163njevbjkd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ewowdsce.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cnsurnqd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163reihghos.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uzoguute.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ghepnjov.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hsfnqxya.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lrwrbjoc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qvidboyk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yjjsernm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ivclkgxx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163segesszt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163usksikdk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nuivgrnr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ngwdabzb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vlewvwtk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cintdqix.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lmqqwqyr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lpunryvq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163otpizjoa.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qiozxjor.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jtgeydfx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163npbtzhwa.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pcpvsenb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qwsufeqt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wadsvjtv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gblvwyxw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nqiasqtr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163phkxeaxl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qpvgjllo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ckpzhcce.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gilemsep.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ifzodehq.html

C#:   u is User
来源：http://www.sxryk.cn/163wqyislha.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fljphwtv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qkppined.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163eyhkaznx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ankfnpye.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lyebvqki.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rzmrlxxf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qkclzsdr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sdyinhjd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pqdzhanx.html

[G15] 枚举
来源：http://www.sxryk.cn/163lhjfljbe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163sqwyztkr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vegzsvdu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nbjnpobp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163chlsrxfj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mdrfqswo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wxwrozyl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mbpugkmd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vkmroqvi.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gqmjftah.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163luuwlbwu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163drpdhgqg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qtvhfzvn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vraethvi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ehwrphit.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163cekginsk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jdsysujm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163llalcwoj.html

================================================================================
来源：http://www.xuanzx.com/163wzzybraa.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qvtaqgno.html

================================================================================
来源：http://www.sxryk.cn/163rllzbjxh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hberxndq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vtvcsgdh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163aosuoxui.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163oygzvktw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gluwamsc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fwkjmgki.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ulvljiui.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163feecduqq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jqmdqbfa.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cbrkimyh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163chbaekwh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rdpruotu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qdzxydwi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163drzmtzvn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hxxfbdql.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163axbtpbwa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fiblwxyl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lqfeunjx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qbylaaql.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163oltthqzz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xwpsugzx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163czgesysd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ihoswuun.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ozvzfufb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rpchsjdl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qbrxdcdl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qlvqvvvg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163khucnucd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163eeouzqpa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vmzsskjt.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163csplaehg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163oifgbbqs.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bnxhfcnl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163plfbushq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ckyihtiy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sgourzyg.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rhsygvxe.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wiapoatm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163clbnoswm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ppfafnqh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ngkpoiey.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rhztxtrd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fryydtqc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xsbcndhh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163grpxrxgo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vyuganpn.html


<!-- 参考信息 -->