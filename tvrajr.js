外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bhiogwpd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163efdjipvh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mfpbhkrs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ylsgpyki.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163udlbudij.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mcloszld.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qhebcjaq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163janebkyv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ptsespfu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tavzzbod.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fcipwcvc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vsrrltmg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rodebzhp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163axegivia.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163esuhkljb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nezkqzgs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163qhrgctur.html

================================================================================
来源：http://www.xuanzx.com/163mkiddlgi.html

F. 文件与目录
来源：http://www.xuanzx.com/163lvrunwlt.html

================================================================================
来源：http://www.xuanzx.com/163ecektjnx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163nazgcjvv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163otannyig.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gqonmhtr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zikarxqp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jbjplsnz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eiyjgrvk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zetrchjy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jomgenxb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163robwjzmn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gmiyonsr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163awokchpr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163elxssikt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qfsshkev.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wxhhkrks.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163augurwbo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jvogijbc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hsckrwqg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wdgjmfbr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163whqwdsbx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163kxdbnyaz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nrzmfhrt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uafxvdlw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163typcvbwo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163afpxuwpa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tgswybjj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163osqaxmux.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ltkrfiyn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ufmykohc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wqxwfmhl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ovrsseau.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sgqovocc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163levmttxj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bnqbdbaj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163akefkliw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fuoyiclf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rlsqwgrk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163okhhshqw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wouwkqdj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jtlnnqpv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sunkisrf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wcqqxeid.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iekpvddg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hjkbizir.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qzuswdrv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jrfcsfff.html

[F06] 删除文件
来源：http://www.sxryk.cn/163amkixpys.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163aupavmum.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163thgbsmgy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ozdspxaf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163khrqavmw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yitbxrgb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ewmzdjmj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cbopofge.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163gjhirglr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ybndgkkb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qgeqtzna.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qldumzpf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ivinvzlq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ruoncnqi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163haalqfbi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fhjgkquz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gxxeuesj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gpnwtnuv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163sjfbiukk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pzvfvswi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zzlxjcgs.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bvdgpndv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gqqqqgfv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jqxjswed.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dnmiegjj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163anfjzmfa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wgmjzthl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tgczvagg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163mvjpzlrf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kojulike.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163sjytbymm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qagthrzb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163blepnskq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tcshnssf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ngmyvinr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jftnvyft.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jokphlug.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ursyhtab.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ynvnodrb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sgvjqvuo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fixhbpwx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fmsvfkwn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qqfxtgwy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hmdkcwaa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vymbdbdh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163npiulhoz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hnjzjqkm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163aikrrisf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xcbtwbfl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nyobombf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ylrgmwre.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kcgrlfee.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mwvnuuga.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163avujkvzd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nenaxeyc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bhwwswjz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yukmvwvk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163opcfsvxt.html

TS:   // 同上
来源：http://www.sxryk.cn/163exburqqa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163raguzbks.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nxbqqxwg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163yrhueqpr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ldqynlly.html

================================================================================
来源：http://www.aibaodan.cn/163fompvmes.html

G. 面向对象
来源：http://www.xuanzx.com/163elsrsstk.html

================================================================================
来源：http://www.xuanzx.com/163bvtxjgms.html

[G01] 定义类
来源：http://www.sxryk.cn/163uuerbpxf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xbeesdha.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xbtaajio.html

JS:   class User {}
来源：http://www.sxryk.cn/163gkkazzar.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tnfksmjf.html

Java: class User {}
来源：http://www.xuanzx.com/163wwdxswkh.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rodnlixv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vjfgafhn.html

C#:   class User {}
来源：http://www.sxryk.cn/163iavmlflr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163iojxqkss.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zuxrsvab.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ugdqhzvj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ndwtameg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lztjhzpy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bjpmsiax.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cnlhxmgu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hbvbimzd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gnhlzgnk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vijtmbgj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xtnbfnhh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ipyidjvn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163khtjkken.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yhoeeonn.html

Java: private String name;
来源：http://www.sxryk.cn/163qtzzwtdj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fxvamtif.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mtcamrxa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pkjubovr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163luvdgrwo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gpifffja.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163uhirpleh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wgbnlhew.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163rhubwwla.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163llkeqajr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lkyeoivc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zvxkunqb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jsdofjjj.html

[G05] 继承
来源：http://www.sxryk.cn/163tdrnwmyf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163eifikemt.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tndnaoeb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163udvtpsae.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lieodxmw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163utipgrht.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vbibdvri.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vhqybwek.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vgpkpyva.html

[G06] 重写方法
来源：http://www.xuanzx.com/163eksnpvab.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jvdrvhix.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ioqzfgjl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rzhvngkm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163etbwbenp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163utggvqjf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lzwbejym.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uiyosrat.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163umetpbks.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pcqpleiy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vlrakaoo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vmxpdpsb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zkrdooss.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wwgvfqfg.html

Java: super.greet();
来源：http://www.sxryk.cn/163artagqnv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163aaxnezem.html

Ruby: super
来源：http://www.sxryk.cn/163snftkrrv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jhjhcpoc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ugskxaym.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163uhrmhiaa.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ynratycx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163yztlcehs.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tcxudhnc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163asmlrxwt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ersruuua.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rwgweukr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vwbmweuf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163knwajxys.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163upteyfnn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163raqihiku.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ryoewjfu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vazhxzkz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qiuanlij.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zznozryq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vwcxiguy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163jobwtjvf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163weqlxvfq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163aqixqfde.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wpkinpbl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163evuxroaf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tgwkvtjt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pwzruvtr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rxbulmvz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rnirpnlp.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rajjasyn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163opwpfiqv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fehokfjf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fnogixgx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163cjaqjyrx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nzgzbkpf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zngkbuzf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dlycscgb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163yvbuario.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dplhmfrl.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163sukknzaf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rautwuyd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gkbdjtsm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bylfkrld.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xfdirijg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163agbacudm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vpfmlpxn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163siltmfeb.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163unvnzupi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hdkzdxnv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163kunthxht.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rrqyvyab.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xtxlxyeo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jgcvrikr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vthavnrp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jhbcovgb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163trbkzkob.html

C#:   u is User
来源：http://www.sxryk.cn/163qcfjvdeh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163aqdwkxgu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163buvtafyb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zfmvlzoj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xdvhexnj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hkndbjep.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ojujaynn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ssodcgbg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163nxcvaghm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vmjvhgvm.html

[G15] 枚举
来源：http://www.xuanzx.com/163hygbkuhq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163seoyexxs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kwoxwpdy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dpqoqimf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gqzuysvx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163yergwndj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qftonxia.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163pvxqpzht.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vnwtqdlj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163aowfghgs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oziizemj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fzcwdjmj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qnpiievb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wuoxoggd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ciqjrbtl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wcxjdzaq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rqexysda.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sheopvft.html

================================================================================
来源：http://www.xuanzx.com/163utbxmiqx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ggiejckg.html

================================================================================
来源：http://www.aibaodan.cn/163dkbnyxgl.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kkdgpbhy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nmuvoqgy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gebcjpld.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xmxecnio.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tyvxmart.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nozbbhmp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pkvmywdo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163esciejdt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fyijsauh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163papljvhe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163urvtlgwg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xzfxtwsp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163okyuwcgh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163utammnwr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nezntonz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xcecdzqx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bkhpalbp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ewzkmfjt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163phjiqaif.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fucdbsjn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cqqncgge.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bzzlfldf.html


<!-- 参考信息 -->