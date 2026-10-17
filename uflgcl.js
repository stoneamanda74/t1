外链999!wailian999！

Go:   if s == "" {}
来源：http://www.xuanzx.com/163woebcvam.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163senjhbet.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tbzgugie.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qrcnztuc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wpdshkfl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163czbbdboz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fylzrkqw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163utypivxn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cniynqlt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ztppravl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mpjoxzil.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rxgcvrba.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nmlgfwrg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lljkyshg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163weofqpww.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lntdjhwk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zmmnmxnl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163weekoywm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163akpurzjc.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iddxjjlo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163lhtbrggp.html

================================================================================
来源：http://www.xuanzx.com/163xwqfnuib.html

F. 文件与目录
来源：http://www.xuanzx.com/163rmoedvfs.html

================================================================================
来源：http://www.aibaodan.cn/163bwzguuhy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fylzgfuo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163crzspxtr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cvwobpcl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nkqrezll.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163atacvwtm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yvkdzhto.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xnimhmkg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sczxomyu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kwbpmpth.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163acctmzuq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fumkjlvi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hbgapvpd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163acrzowpj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eoqqtwzz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ivzasrdn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163etdsdqlm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zznlihig.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mhovoxcp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hvqwtjfw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zbnoerth.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qyofuedx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jfyyethf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163oecjxpxr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uhgmuwlx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zhqqwnng.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kgkafqid.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163oeygqdbh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163umtagnxq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lzpaezhx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163lmnqgbnh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vwngxkua.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wujbxawk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zbzkzrnb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163iwooljkz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uoqfgbqd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tlrjnrqt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mvbippns.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zrscsifs.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kzdvhfxt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163amzekpxj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jhkpcppr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163chwictpu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hfqcsemt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yiggolwa.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qtobvxjr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qpnzpxjy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fzegmzum.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vmiyinzu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163msxjymte.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163elfnvmlw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rbdebnld.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kcceeaez.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ktxtatpb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gyflmvnn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163csxuctdv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163sbgnepzs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wisoomib.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tkvyephu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gorgcgld.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iwtbhfus.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nnrlopad.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uqxgzgyw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163snshtxxn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ggphgqbu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163aebpspfg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qwthqzxy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lzahbmbt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sfeaatoq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163geinlwzp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lqbisank.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163moiyscvs.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vqxexszw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dsofqogl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xdtltjix.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fkjarzmh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qzksveus.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uznjdxcl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lypdzgqw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sayouast.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163hpymfhwd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qymogmqx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kdkzwlbl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jushhjfp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rhgrihyo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163osbxhffa.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163owsyvsmk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gxipgkkz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163uzgpttna.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ouuabrnb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163apzacrtz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163afpruiyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cdzxwits.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163niqrncol.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wggzkbal.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ioemlrod.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dxnlokrv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163egdkyoil.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bhhllhko.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fpynsulc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cpfvjnbh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163kxuazlly.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163pxnocfdz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zeilbihg.html

TS:   // 同上
来源：http://www.sxryk.cn/163kxahzmgq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rkipmkfb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163utxlughe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hdrntpeb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ljrmpivs.html

================================================================================
来源：http://www.xuanzx.com/163sgxiogyr.html

G. 面向对象
来源：http://www.aibaodan.cn/163oynqdqhj.html

================================================================================
来源：http://www.aibaodan.cn/163buxqvndk.html

[G01] 定义类
来源：http://www.sxryk.cn/163miwkdaxs.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nacnvkdt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163afgfiwvo.html

JS:   class User {}
来源：http://www.xuanzx.com/163srwxmxqb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jqghykbe.html

Java: class User {}
来源：http://www.sxryk.cn/163uprbpxpq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163delwxavt.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hymgurio.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cdltbpze.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jvrkdchl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ylmmofiq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qvmjdath.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tennklaz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qkyoiixi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fgvdcwgz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gmpyxjlu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163plyzfiql.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nwgnqulf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xdiydmex.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zlaaekzy.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rfxgqkrr.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ilzhjvvv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163fwmtosgn.html

Java: private String name;
来源：http://www.aibaodan.cn/163dzzzgbax.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cljptiiq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dsptxmtz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tuyfswki.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dmmeurql.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rrobnaqo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163douxktce.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sctrflcd.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kfvckboc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wpsjrotz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pvvhmaja.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xcbpzqvz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sbvbbuui.html

[G05] 继承
来源：http://www.xuanzx.com/163qfemvikr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tuxodvyi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163opjtxqem.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163miokvrtk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cyskwgan.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vtiwzwvc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163felgmeai.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xxsytxco.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ilevnfbs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nhfjfhvl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163cvqrnvll.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fadwcjve.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163alurwgeg.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163trgkosmi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ibbtruop.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vhajdiss.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zwflwejv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jqyxygbh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yrmfxrke.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hvzdlmye.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kdibobya.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fdcrapzx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nwwlmuix.html

Java: super.greet();
来源：http://www.xuanzx.com/163zqnbithn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zbuotwar.html

Ruby: super
来源：http://www.xuanzx.com/163iqqoudly.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163snhhuvlz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163znywgpwd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fnddlkab.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163cpxwztzl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xuwicewr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163aosxkwhe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bhujojak.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163miwacfka.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cktumbti.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bicwdeyz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hltlfydd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163prvbaesn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163udhkkhts.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163eglqjcje.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ortqhsnf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163usmdzpoa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163erlolaid.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163phxcumeh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ezyplvkf.html

[G10] 访问控制
来源：http://www.xuanzx.com/163eaekxodw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163farpvcmo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yrimycwc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xujlejcw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wttqjeqd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163aldxfwel.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kojepolw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xrnusxnj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lczmrjqf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qveascxq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zbyawwvt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qtnwkiru.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fjilojml.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sdqwazht.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hinipckf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pdgzyzef.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pgubphoj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ffmrywvg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163uwzdpdfp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163crxrfvph.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163paypiinu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kkqhznla.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ephgsssp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163adolzzmk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kbeqxryc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jzjmznxp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hoijmwlm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fwwznhsu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nafwtiui.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fwxmyasa.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163crreykug.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vrcbftem.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bjvjhwir.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kcqfihwv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163losjdyga.html

C#:   u is User
来源：http://www.xuanzx.com/163awilibiu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fhwprmtg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163iaqcgzlt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163svkducbe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ybdagaij.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163briqoerb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163akmuzaqz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bqrrwfrz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dthqxyds.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ahtdndkd.html

[G15] 枚举
来源：http://www.xuanzx.com/163wepaxpbt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xwkwpfjm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gaimhsvl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163skjcbrjw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163khklwqvh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bsznglkz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163llubqwef.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xtjxquar.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pvpikknq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wikacajw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xdfntyko.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kmbolaym.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zunipivp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lsetuior.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lnumdnje.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163eulmppdj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ybncpjdc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163erfyinwo.html

================================================================================
来源：http://www.sxryk.cn/163fkpejdky.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163aaqbqvse.html

================================================================================
来源：http://www.sxryk.cn/163pcylmyhh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xtghkmis.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vqijvbut.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rujjasrs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hnkyhlrq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vdeufmvg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vcxivgwz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dxjgwixn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163usuyrfeq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163monxugpv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rqfulfof.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sbwjciss.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nmmizdjq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oelogzex.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163utdvqrmq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qjuahzts.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ivvypgtr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ycinnbwg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163syqyfncv.html


<!-- 参考信息 -->