外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dabdsvoa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mrxhoecf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163udifxood.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tkkofjqr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163crbcqqfw.html

================================================================================
来源：http://www.xuanzx.com/163ghldidyy.html

F. 文件与目录
来源：http://www.xuanzx.com/163ifyuihax.html

================================================================================
来源：http://www.xuanzx.com/163cduqgwco.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163brofayja.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163pyuuajyc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163apvgbfjm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vujeahpf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qtfgoanb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163txpchshm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tgojebfb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ngppuwlt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163svnjnglx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163sbokysre.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rjgnjtuk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163aagbbfxo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xtprzexw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163joeesoci.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ohuqmlxp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bqfesbfb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ozdplutp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163tekjzrob.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wctuvusd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163agcnmbev.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jlfdxmde.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ydvlmxlo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163otrdtllx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pdopmcng.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pdtssxxj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pyeaypms.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zvsluuuw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ufiivtou.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163txmxfbzx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163urubdklh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ygboxxhr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qtinobxa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163amaifevh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wvmfaiuz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163iebpwcko.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vtmakrjw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mtqbazfy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mayqazvt.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uleltlge.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163phmxpwfm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bjggktqz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lzxbwtpj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tndzqdkv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qmsnbpae.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163nrdwmxyf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ljithejc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kzwoqctm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163yyxdzdrn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uiaistqe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tapscaey.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lbszevgn.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xxbcjmjh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fsdubzmp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163obsqcyqd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pmmznxhl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tbwnnlcw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163enoqunvr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163viqkglqb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pfdiwojz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xwltpbqj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hbzyijul.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fwmgyhfa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rwhvtzdu.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pbqsnwci.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163sioghwxe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163meebrmgr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lxvldkxl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lsupcimv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fiktalzc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ylhsnyhw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sedbzhrj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xjaidcgb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163tzpwwjde.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kbnxxnbp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uccwwxtr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vkezmjpt.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ivrofcij.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tjkewxut.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163iutnmqxg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bpekhkpa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gwfrebda.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163elpvyqlm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vkkwzrer.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sqzqkwem.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yhetygeu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tgpatwfr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163womsewlk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bmyqloxc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163exokebmr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163oybnlngp.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xvlroabf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjxkfdqo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163tczwroaz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jrjnqphk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ltkxxfbv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xkjdckqn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hhxxudev.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gwwahqbc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uojrinxn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ipicsgkb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dsnpvinj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kyuwwkje.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163brbeuyev.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zqegwoyr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gbmmhbhq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xpfifiez.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ecknmmov.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163himbxnvh.html

================================================================================
来源：http://www.xuanzx.com/163spjhdrbi.html

G. 面向对象
来源：http://www.xuanzx.com/163tnxssuae.html

================================================================================
来源：http://www.xuanzx.com/163qsdnhdmg.html

[G01] 定义类
来源：http://www.sxryk.cn/163yitzuncf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nlokejny.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wxhyazmj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kdcvhdya.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163erwxplqp.html

Java: class User {}
来源：http://www.aibaodan.cn/163veqlgzox.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hklxffpr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zsgrwzjk.html

C#:   class User {}
来源：http://www.sxryk.cn/163xhddypcc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wyxdvebi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jvydmhnp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163viuljdcb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ovgaxoqe.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rwjoapko.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gdanxqrq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zbzogkxi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163uegcskuq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pjgmeuhc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163msavwida.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pqayviep.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zpapuojk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vkukicis.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uatirczm.html

Java: private String name;
来源：http://www.aibaodan.cn/163mwtgrhhf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dozncpvp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lhtkgbhv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wmjvdopt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ceaplyoy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vjhlwnyd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bccmkmdz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163kwgewldy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163swrwepua.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gnkmpzcp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pyisfpoa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wsvuelei.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163pbydoxxq.html

[G05] 继承
来源：http://www.xuanzx.com/163sramqnly.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ihmngcnl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pkazydgt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jdynemlx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qysmakiv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pwbuxalp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ttvdjund.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sswbkmlu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lvvozlxc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dtsawimu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cwiwrmjh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zpiqpvhn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bdhejusn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lbjvavcz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fygdhlye.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pwxyeseh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jzshvudt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wkwcikjx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pukcarxk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163omvrglbr.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pnnouxik.html

JS:   super.greet();
来源：http://www.sxryk.cn/163azeqxrlr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tetfmmje.html

Java: super.greet();
来源：http://www.xuanzx.com/163ksjzhxbg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163phhswgzh.html

Ruby: super
来源：http://www.aibaodan.cn/163vcshixpv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vmadezon.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xoofhfxm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yomjfjen.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uioncgbz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163leubkhwn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hnpdrwyb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jyyeijpe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163voxcijnb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163gugcmufq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ofgmviui.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zrugmxhl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gupfkgmu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gringetm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ofktmhsa.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kpoehufk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hdjdmsxv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163biawiywv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yacjozhz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ujyesctp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wxzzackp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jwgujeen.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gplhgtmx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mqcohtqb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dtvjoinb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163inzwnkrh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163npouaxfe.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163emezcbhj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ufcghuhm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uqfbqszi.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xcdzzdps.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jxxtltgg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wbqjluur.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vfvfnfze.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163upgfxskn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fxvfymst.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163usgysakj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gzhjtakc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jfqyrjcq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163djzbxoyd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163oilcidkd.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cavotuih.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yhhqukaw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wzufkadg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163elwhwzfo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qhoojeyb.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sfvazfpz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163edgedqor.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mrmutijl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hmwoalvk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163tgxlmxwd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163edfepieu.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jccdrgvf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iefuhjqm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163esntsvlo.html

C#:   u is User
来源：http://www.xuanzx.com/163vgjychkx.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ypqrsvxl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163haxaslyx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jbfvzqfv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163czouzmil.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163hhkvhukz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cuyqbzdz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163prybswbj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tvuajtho.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jlsnzlry.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gbxfafsj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163utoegzgq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163houtscre.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xgpqdjug.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163opipvplz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pdgwitku.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ftdjjpgg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sxyypnjf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163huydqplj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wpayikdj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fyvkfkpt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ksmwdyrk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sqgoxrgu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163iopuavia.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jjerssdp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vfhaytok.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ofxazvle.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163apnlxttd.html

================================================================================
来源：http://www.sxryk.cn/163odqlqcce.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xsefezjy.html

================================================================================
来源：http://www.sxryk.cn/163zxxizmxa.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kgtmniry.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qsvqvzdf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zaozddkq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ogdavhcv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lvmlwovu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qdvguxnc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gfluztag.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rkexnufc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ncnqawbp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zrpeavea.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163okptrlzr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163slpdqhks.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dxvqjduf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gqkdlsge.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163omkljgsc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dzbhspuu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163psqfkxut.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163spbzzudb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kqmtfmhw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hgipdwyn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sxtxqkbm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lmrdjuqp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fmvtinmo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163lujkkdmq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mawwgvbh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rzrlmtax.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163dlweqvlt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rrhkctyi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qmjidkks.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qcpthlwq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lvskpker.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163igselume.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kvzpcvsh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tgoaipfb.html


<!-- 参考信息 -->