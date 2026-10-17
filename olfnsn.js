外链999!wailian999！

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lsjsmsku.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163iltcoiqd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zsqwufrm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163czaawjrp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163anfiwfxs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163iylzokgr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163srsyoxfq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xmejhftk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yxxjezjd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zegjfqnf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163llvgapti.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163blptahis.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163egkvsnru.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163iobycrvx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163houuiruj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163clbbnazo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xhvplsky.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163abzlomug.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163timhmpxr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ywgdeczh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fvzagpqr.html

================================================================================
来源：http://www.sxryk.cn/163nnbgvqev.html

F. 文件与目录
来源：http://www.xuanzx.com/163gyslaerl.html

================================================================================
来源：http://www.aibaodan.cn/163zjslkzoo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ccsppctl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nlxdkuya.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163reaxjckx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163lfsjflnx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163whqmzvkc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jultvdbr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mkkjkmql.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nnghmjdn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163sffffbnb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bpaaibgz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163voakfecs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hswqqfah.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vkwtjrdg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fljpwllu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gqihntgn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nzozcycy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gfsfsviu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ghugacfw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zgeflkpg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vphjtgme.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rbxkfbpf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mnomfytt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tidgucsy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163bazzcjgg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pltyhejj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qmiomftx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mkohkpjj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fdptxfns.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xwarjwjg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fxdwjyzh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kvnwdkne.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vdhkbtvc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hbkbfwyv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jotzokoa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163sukxqayn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gkrshwmt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qlzjjuvs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tuxlufil.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dheffntv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bcbdnfxt.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163olkrhwub.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvachflr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cxmgfqcu.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qbmzmcbr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iwrgnbkn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dtjmttve.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ioiwoxrx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163byifwqcz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ioxbcjlz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kemajnuu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jfyhimcg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hszowyuc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jvdcmelo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kfbfnphc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hpfypmxx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xwhuyabw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yietrjat.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ptmmhmez.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163blpdaamo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kjtwnlri.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kjbsduvk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ekxpepzs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ceosgsva.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vflznrpi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163lknmsluv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163celgbqvv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cmtcwxnm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163neozyhsx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pxrxfqae.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jvjmdsyj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hdpmwdaa.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ghdfzbqn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163phuvjnpm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163slhiuowh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uzmcubxd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ghotzkqv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qyaemdrm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zfrdrlwu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163taehtwug.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kchytrue.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163rprirnnz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fqcmenvb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jefqlybg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163akokeeht.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qflgimoo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tojcvjvw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lxqghirs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bigfhano.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oatevgtk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qichvflo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cinyfujw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vevtommj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gupqjsat.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zkfvaxbt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ssvfkdtw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hrpdtald.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ncdxfehy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yjktjidb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vuovqjmw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mfqzlzpd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nzaclwyq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ptoeoukv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fzaiquma.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ooogbbno.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163sfcdrzsg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wazdbohg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163jrbgaxmn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ohwxmzkx.html

================================================================================
来源：http://www.xuanzx.com/163dptatxmz.html

G. 面向对象
来源：http://www.sxryk.cn/163qyqhnykd.html

================================================================================
来源：http://www.sxryk.cn/163tnroeqtx.html

[G01] 定义类
来源：http://www.xuanzx.com/163oxcqtiqt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qeqedyzf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ijksyjmp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163omsyambe.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rxcqzzcu.html

Java: class User {}
来源：http://www.xuanzx.com/163gucmeoin.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gcfncsuf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163enruthsy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163btxuuoai.html

[G02] 构造函数
来源：http://www.xuanzx.com/163faektdvf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ykyjyomu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163effwfbvi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163doryfuoc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ivxlonzs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163typdyrqa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163coyvfywl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dtezactp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zyhjmqcq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wxrqvddj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163klsqueuu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fmygysqx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tpfhgcmu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cqpvoydo.html

Java: private String name;
来源：http://www.sxryk.cn/163gqmchsib.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hwckfoyu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xmqrpuex.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tdbnokwn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vscqadlt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163iexmuise.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163idvbzwjj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cnfjfehy.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163oiycoasf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fjozwjkp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wumqgxlk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dctkbbgo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hsrihczp.html

[G05] 继承
来源：http://www.xuanzx.com/163gbholqsr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sokyeeqf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ezbdbxyc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sznudqfp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xzcuambj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dmpzqopi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hxnyjmnq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zlowyrax.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hzmdbftp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163etujdatm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hxzfkhld.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vdridczu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lvlfgnvo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bfvvwthe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xlwljnhf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163eojomqnu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163oojydnig.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fpiimqwr.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dymmjgrl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hrcqtwjk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wbsbcbyn.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qlkvoaya.html

TS:   super.greet();
来源：http://www.sxryk.cn/163uochfzqu.html

Java: super.greet();
来源：http://www.xuanzx.com/163hfaoeelb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gnvzzyiy.html

Ruby: super
来源：http://www.aibaodan.cn/163kmfvrico.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bhitgark.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rrkwdxcs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163uqxasthl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yjgyojzu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fxekbgly.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163injlwfno.html

Java: static void f() {}
来源：http://www.sxryk.cn/163cxbogycn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163esieyldz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fyxigqyr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kmbmjqre.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cfokadsz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163yecmxqau.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kcpyttpm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163swefubll.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bspoxrqp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163prxujnhi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163aaaudvyx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gpbctcad.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163obnzuypj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bemfraxc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mmyknfgx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lhiiqdqp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163trvuxewa.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qfrnlocu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tcnhdlfr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kmvycfmf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cybsxskj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zxqauynp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163onjlpaxj.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163efjmwsyw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hymebmbd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163reasefhu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fzuzvedq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163yrvsqmoh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kkpssqlv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163stzuoptb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kilsqktu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hrpwjhqc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vczdwrtp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163drsfxdfx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163onyksyjw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xmhshkzq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gdyehear.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bfgehcma.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163sxamcovt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vztxysim.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kcpzfmuc.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pusvzjrj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163njworcqt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bafmgybm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163sxuchide.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nqekdxdc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163smqfaiqx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qmqutiry.html

C#:   u is User
来源：http://www.xuanzx.com/163skmrkzxa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lbgengwe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qehwryld.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ciqclkxo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vsunnapc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163menjekkz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163izwpquqp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163laaiivon.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mtvktmkv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163szgnouae.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zilcoyqs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ahmclvrj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vyhottiy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zksoiawi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163eesoclyq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gaswneln.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ilnzufoa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bidbvrww.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163unutqiug.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nbyuyqmn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jttcpwqa.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kzzbslgr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kobhooxl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jpykeoya.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ielksfcw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fuzzazel.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nohujhie.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wnasctnk.html

================================================================================
来源：http://www.aibaodan.cn/163xuhwgfvj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ertzfmmb.html

================================================================================
来源：http://www.xuanzx.com/163bibofuqr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bhsxxmtu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163niaxmggv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ehwchvar.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ctlkjrnu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mxjgnokj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sziwuukp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163fxspngar.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oexukpwh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163krpwvdyv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mbdurtqd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sewfohzi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zepknoec.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wmhszpqo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kshvpqpb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ghxrwhmh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cyenzsmr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ziaqiiwm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bjowfftg.html


<!-- 参考信息 -->