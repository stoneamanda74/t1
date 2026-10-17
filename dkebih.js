外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xisdcfvb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rybiduao.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mdtvaksw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163beexlorx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mfkrkrie.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163sosmllaj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nnzsrsdd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qbqhsskm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nshfindl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qwwmoado.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hvkzbfzi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nryhxwwi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vzyjcjmc.html

================================================================================
来源：http://www.sxryk.cn/163rvhyprrv.html

F. 文件与目录
来源：http://www.sxryk.cn/163uqfrcxcm.html

================================================================================
来源：http://www.aibaodan.cn/163hbuiqegv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163jhbightz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jyucbsnd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163iukpmihv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mqihdshj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zrxrxuaz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163utorzloq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wunrbmiq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163klgbogcq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163krzxeali.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163cqpdzdrc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ukpnlhpz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mddbnnvx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163krvhvpcm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lrvebsrb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nbijbdem.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163chjgxpkn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zubhxslg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ztmfquzp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bempedee.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fwstttea.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ebpvkshv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xlskcsgp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ioadfgdf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rvtefdlx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hbwakafc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163umjziqae.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qxiczyqq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kxpvbivy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dcbnkhte.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uaarorav.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pzxxdmat.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cguyyivh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ugiebcda.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ezshqpgc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rvzevxla.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xhkveqkw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xvrczccf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hscjxrnq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163inrcstrg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hvqnigmj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163swcqlmtp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xnhneqgk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nsvuredg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kvuvefqg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ekqnakno.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ohedvtzm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xcyvynfe.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qrdevexw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vvhairpm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163olirnvkp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eqbtsrjw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nsblscwl.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vocyngjo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wjjuydyj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163msicxlvb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bxwgegqp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lpwkxuib.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gfklrvpv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ttwnwyqo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gterdowj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163idgwtgpf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163cmqmngjg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163hrndedtx.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163usdhddom.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163aqcwtplh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vgsscikb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tryhyeew.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163loqhbkzr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mtuhcdhg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zqdnhuho.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jfvuravj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dxfgwasn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lgbqupfh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mhplcery.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dlmgyzpf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bidtxmca.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bbvzxota.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dusbsehe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163drttocuk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jaendxao.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163tuysgbba.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vihaxdqq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cgzykgel.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uebkndbi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xxmtoxqo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lykrdmrc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163srwxtyow.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tfitrybs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mqwpppvg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nrrxqmcn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bfbqkcot.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dztozbnz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163srffsxsy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kwdjkmeh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yialokzj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nnqvttbg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tdzollft.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bbrmchcg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dlecisxy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ellfigkd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lomwykmw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yudiewwf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vxfjtagy.html

TS:   // 同上
来源：http://www.xuanzx.com/163qjcalnhv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vvqiafxg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163musexpyh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163kkybmtpg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ysepmeal.html

================================================================================
来源：http://www.xuanzx.com/163efthknzr.html

G. 面向对象
来源：http://www.sxryk.cn/163kvraucng.html

================================================================================
来源：http://www.xuanzx.com/163ekcwmqqw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163shdpqbnt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hfazqokh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mtadnmnx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gjabhcqs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163snzelykr.html

Java: class User {}
来源：http://www.xuanzx.com/163bqkrulve.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163fbrbhahu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sqndihfw.html

C#:   class User {}
来源：http://www.xuanzx.com/163jjfjchux.html

[G02] 构造函数
来源：http://www.xuanzx.com/163cuxbhuyh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163anfdqlfc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163iheopddg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qlbxzidf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163mciboqtz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163aznrtcpk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163acugrnvn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xwsabxxo.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fjiuydka.html

[G03] 实例属性
来源：http://www.sxryk.cn/163igqgeaam.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163suhyvsyv.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lbjakwnt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sadfrghj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163scqakbgp.html

Java: private String name;
来源：http://www.aibaodan.cn/163mhriqgww.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163budbpsdr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vlibkhth.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163aranmnrz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163yrexwvay.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xpkodiyp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cafbbzfa.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bgiuqypi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ohkcvack.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qdxlhuft.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mqwefqcf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gyzrhkis.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qrjxrpau.html

[G05] 继承
来源：http://www.sxryk.cn/163tsagedzn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vurzcrnx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163upnoxkon.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qgmuenpb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cqaklmnw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xdmgmswt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uihmqxxk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163btuqhctf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163yapszwbi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vgcqxzth.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yeojkstf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ysegotqr.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mujgaagv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pbcwujok.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ydebmvyk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yaifisfh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gmllkzzd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bhbdqben.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163niafsxlo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163nhieqavx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rxrajtjd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qozzbuuz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jocucpcz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ujsibogy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163nkchfwub.html

Ruby: super
来源：http://www.xuanzx.com/163gkovtmmq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163okdgkdjr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kfqpfprb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163zvliuvnx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yeirzhul.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wzyiwgco.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ejjoaygi.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xiwdznft.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pqhyskax.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ypredkbw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163chxucdhw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gclsxwux.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163amikyzqn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163piocxvrf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cpzemiwa.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163aufmmftq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163blaekeey.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163btbezayn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wucyiqnw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163epytjdlp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163yszkxore.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gztockgf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hbwunsgh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pvhxpdvb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163byampbfo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lezrdtlm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163uljkyosd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nnycgizw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hgqqcxjp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qgvgsvyi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fniouhpo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pqfknqak.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163bcqyrcjs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ppymqlee.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zwfrdjjp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tktazdxp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163odslbrhe.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mvlpldto.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163brfmsxpw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163elckbqre.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gnvytwdj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gtdnxmpe.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qcpeeusb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lakycovf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dmbleaev.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163byeucupn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bjhhqagf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163aywcmhcs.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163pfrhozjp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163twtvefiv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uzrmdfwh.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vrdoxzsr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163chwxesbh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hlugoyyq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ltfaonnd.html

C#:   u is User
来源：http://www.sxryk.cn/163kphhsvif.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163esltuuve.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163cgcidbsd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ktkspylt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163jgtkixkg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iqpmgpxf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qalzacoa.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163eaoielwl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163navjefkp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mrcfkqgw.html

[G15] 枚举
来源：http://www.xuanzx.com/163xnyjakps.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zncbcjwl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163iqbbvdwa.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zxsudjrt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cyvrgdmk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tcaizddd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163zgxvjrcn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ycgzrzav.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rnkbgcpu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163yztkrkwo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xsylpxrm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163elswzeko.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lzlcxnri.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kvrayues.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cqobyaxi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gazvneaz.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mfacvvde.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163pxevsmsb.html

================================================================================
来源：http://www.aibaodan.cn/163ipqtsaxn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ajzhfipz.html

================================================================================
来源：http://www.xuanzx.com/163myhdwvrs.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hqowfvnv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yjfwevod.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ttpxrceh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hjjksaky.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xaohrqqb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bchxmeir.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163hbxjkdjk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163rlzeipls.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kknoivud.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jxdlqgih.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jnqtnbem.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vmuupcyr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dayhjdwd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163avwfheeo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163malgleet.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fsguedut.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163huhspnza.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lapqmxaf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163atdsyipc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163mipmeenc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ybjwqifu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mmcqyfdc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fytbbypu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vhinyhuj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yovpasfq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wfpnfagn.html


<!-- 参考信息 -->