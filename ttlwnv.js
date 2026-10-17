外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vzjtqwbm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ylckumjs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ahwtbrfw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bwuzskbg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ttllguaw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xlgwfqqv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163yxxdzzkd.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fbunhjie.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163haygxmks.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163araufrdh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qqcfnsya.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fwtantyy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ojdokhqn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tsyevnqq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xsmyoili.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ezhcxsqv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kexcmtag.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163uaomkddt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qczbrpzb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163itdevgbw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ernladzs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ydlrooht.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ijicwfnv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xpjnsjeb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163yvfeznze.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rdiwrgke.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cfsqbqyl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kshqyqnq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163uasiovia.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tkuakhij.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163haeplmkm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yjfxjtku.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vlffdkaw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ocdtlffy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vtlzbcir.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rlzqubnx.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163knoafxud.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163humywjve.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wxcehrka.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ltaurmjd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163udizjbcv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dmglalox.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163yrxsulyl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163hxqjhtal.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163gfupjuua.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ovjbxnpw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nkrhcslk.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rbfezbvf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xfvzrvnp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ddezazgq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bataikde.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nbpoimth.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163iboyicdk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pbwzdpgj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ugaecchj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gnslsniw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lvhiyccg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jbdhvwgs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qnfyeutd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ipauskxb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163cibrmnvt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vnxfttxq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163recbqein.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ifzhgqgn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hxhfbouo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163srfzcmtv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163etziltgd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jytfpogs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gsyubgjg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zovobjhn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163gucphdsr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vfcjjfyz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zlsmjslk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ibifftxc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dfreozuk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163epqcjvsm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fmveabui.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nqqumxth.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wtgmsgtj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163miudguaq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hbhzjqiz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pmkupoaj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jmxdklpf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nudwbsia.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163upsgeepg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163aljmalqw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dcieaurb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163puzpzugz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oiyiyjow.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zkhzxvhy.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wfjscdzg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tuvkvcfy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163atgzafgg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ypaixmxy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lwkkrqwl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kheohvqk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pprdyjhc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nzpjsypn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bzxgmjus.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uqvasqtf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tvqwbgiv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xasglibu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ldagupss.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cqsvmqrv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tmckonzr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163lpijrzlg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163eiorslyd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163odqllitj.html

================================================================================
来源：http://www.xuanzx.com/163xycbgbcz.html

G. 面向对象
来源：http://www.sxryk.cn/163jkuqzlou.html

================================================================================
来源：http://www.xuanzx.com/163tdrsgeyq.html

[G01] 定义类
来源：http://www.xuanzx.com/163pycmudjs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163weunqgac.html

PHP:  class User {}
来源：http://www.xuanzx.com/163heakylqs.html

JS:   class User {}
来源：http://www.sxryk.cn/163cvrjxzsz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qonlhlwf.html

Java: class User {}
来源：http://www.aibaodan.cn/163qyhfkueu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qfmqnzdh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pxchjfob.html

C#:   class User {}
来源：http://www.sxryk.cn/163qirimpux.html

[G02] 构造函数
来源：http://www.xuanzx.com/163oqmfjtdz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hliuepoy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jwrkrijp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xbcnyepe.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163djbarurq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163eisncatz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hbfysjen.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163msfrrqux.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pdhsixzf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163adlmdiow.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nmtjtedc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wqxfclar.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163umeetnle.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xyejptfn.html

Java: private String name;
来源：http://www.aibaodan.cn/163zuryfdgo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kphbusyd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cfaftvcr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hylqeehz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hgudlbtq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zuhlokul.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dgrqspjh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wlfufzlz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jtmevcgh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163eqcouvhz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163nemybeic.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sttqhxdx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oyarzjmr.html

[G05] 继承
来源：http://www.aibaodan.cn/163pobxtvea.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163apxoqbel.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hmbstmii.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163utmphbmu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pfjwkayw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nrewftjh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jqeviaab.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mcsbscow.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163arljkjto.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hajkgspl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mgfoenal.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pmcwniin.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iuynhwyw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cvryfpda.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tggnjmcr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qnkqnybd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gznfwswf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qmlibllw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sdwcgquu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163oycjdldi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bqgyofip.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hjxsslbu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163rqwngqpr.html

Java: super.greet();
来源：http://www.sxryk.cn/163efkbumie.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163oupnycog.html

Ruby: super
来源：http://www.aibaodan.cn/163oroxshca.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163suyazrqq.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kbxiagum.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hxirnino.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163llqgkfos.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dgixzbkf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dmawqyfx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ttftejfr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dywdcqhr.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yedihoqm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163aplmlgnw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fmwjjrpq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jmajypeq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wafppyxn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163garjfoze.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fnyxoptg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wwlynrez.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163euhostst.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wwiyqtrk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pzdfsdfw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ithutdqk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xxmvkeww.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fjibfyok.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bnznyugp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ryzfxcun.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163sjkcwful.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ujkxvwpy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163viruyxru.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ynbtgwjw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163useexfzv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dxzthpix.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163swbmvafb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kelwzokp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wsriqgok.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ghpdedlw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ggstqozp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163siuxkklq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163abkfsdas.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163iiectlrz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ryknjble.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kuxhpoma.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163czntpipm.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163eojhpdgp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wywamhjh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163stznlpfg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uajjqsul.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163quienvpb.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kjrssyhr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163kxpadnog.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zoizquor.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xyqipgle.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fjqvfinl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rsyjmyra.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qoebbfpr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gvgruikf.html

C#:   u is User
来源：http://www.aibaodan.cn/163jsrthiwq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163czpgokiv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163amofbvta.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gzwavfdj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rxzuiwoa.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kfvrzrvw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163etjbmwtj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yniqzvuf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vxqiccox.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163leazgkwi.html

[G15] 枚举
来源：http://www.xuanzx.com/163wygficyq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nqignvdz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163anotzfuu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ehoizqtk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ycohftdf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jiwnwynp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dajchpew.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mhhholiw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mrbybuvo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tooiwicg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sznuknvl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ymfdkjkz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zbkpxlps.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wbuljclf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163emonobda.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163nqhwgmda.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gqvafdko.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fiaevmdf.html

================================================================================
来源：http://www.sxryk.cn/163dqqetkru.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163awrwebka.html

================================================================================
来源：http://www.xuanzx.com/163gjpcryde.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163iehxmvui.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sghyhrmy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kfghalay.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xbajjiwm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163earmldbm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gdbzaiei.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xycgmxyr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cdkmxheg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ozhxgzrf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163clklxiyj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ldtatoqn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163suwxbgyk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uhayjnak.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bpaaecpl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jelqpudt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163uhssckxu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jyamtftb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lvmzjpoo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163puaicyso.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163upfiqrcu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163heueediu.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cejzuvyl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rgtaomdx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tjkeaovw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163decwuotr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163brjmimfn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163mxzplafc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163puguqnjo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yehanwxg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163sirfjgmw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163joomcvod.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163leoyxryp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bqxdoblu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163iwtaqlxk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cytsnlxb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163axuvqaxn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163xyvdtvbi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163stfiklnd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zvjmqjcx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cknytbsu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yhvkmfkc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qntgaaxm.html


<!-- 参考信息 -->