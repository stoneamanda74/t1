外链999!wailian999！

Go:   if s == "" {}
来源：http://www.xuanzx.com/163klstzmbm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dnwmpxdt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tjhhzuec.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xweffyra.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fjjcxzad.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hmixwbio.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zopsvori.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jxwajkoq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ndvebdra.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xwhnlxgk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163myjdycui.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cnhvaoky.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163iljrrdoz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163neqqvzyp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kvnktqhx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qhvadkyk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pisrfpwz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zmfiipsi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163druatsyw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fvwujaii.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163vbwuyjms.html

================================================================================
来源：http://www.aibaodan.cn/163kcrlvndc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hcecchfk.html

================================================================================
来源：http://www.sxryk.cn/163yzvhovnx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zesruxlt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163undxmgyu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163swuiftbd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mdvsneso.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ppswpsvj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163acaekxpa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qwltlhsq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lyhhogti.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rfwhpmsv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163kbuplpew.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ftbhrphh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mzbdrzas.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jjnjrtpx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lwkholyf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zkphyyhw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hgfcedzr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vpovrent.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xigruums.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pwidgucj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163etmjjubq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ohkvacru.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hzfvixdc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wgqdxagp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163olxamqzw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163tpjvnzkf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tqeuaqsg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fwleaouh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163plnlyquf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163warvpqdi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yhzyodrt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163utxwlpwf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yyvlrlkh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163eyoxhgsh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hfxptzjs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hyicynbw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yetubcme.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163efoxhdol.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163oysxpdgh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163foepepbn.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gygfnezu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hkfaxdhm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tjfquhlq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nmijdbwi.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cerbkkdi.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163icexzwzy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163tgchyhbp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163udcsxpct.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163eiurxote.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wuilsgha.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jwtidbtg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hkrneowa.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wkowksqc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sqeeddyb.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tacshoxp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hbvwzlql.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zysradsl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163iedjbtqm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iyeewmoo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163igzzvisj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cxtxauzm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zhhsjmvt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ysfidcrf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hefeonvc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hafrmphn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163yzeijsei.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pqwljrls.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mdpfanpg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pulmmbjw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lodfaoie.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163keqtekdp.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wafrcgqi.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qeilpsxm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ppyjnacw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ipeltptq.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mrkyczvn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xumebjxq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163deaqfyoi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pwvoomgh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mcrdbpbo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ukcutrct.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yvkcibeo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kvjjrymq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jjouceka.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ninjagia.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163amdummdt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163hmyodkwx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ggfhwbvc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lwrjkxqb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163azjlnasj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ktpwkuap.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kedujyjs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uvzhajll.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qjscnabe.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wotfupay.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ichqheeu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kyxwitpe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fhkaeazo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163enqilmgs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kjaiwluh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gcnogfzh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xvfqpyoz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ewcexbth.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zovmibfa.html

TS:   // 同上
来源：http://www.sxryk.cn/163sgpjnqox.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163upzzaxeg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fozelpnd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hglzfhcz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163lcxvadbv.html

================================================================================
来源：http://www.sxryk.cn/163unqacour.html

G. 面向对象
来源：http://www.aibaodan.cn/163chembyws.html

================================================================================
来源：http://www.sxryk.cn/163byhndqtx.html

[G01] 定义类
来源：http://www.sxryk.cn/163dyzkapmt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gbjewjlq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zujtjtxo.html

JS:   class User {}
来源：http://www.sxryk.cn/163untgixnp.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cfhkzsbu.html

Java: class User {}
来源：http://www.aibaodan.cn/163kchjluzr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163gkxfeknz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163amtsphnf.html

C#:   class User {}
来源：http://www.sxryk.cn/163pnfrcfpt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yyzcjqct.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zzzcnrgv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163uswpvgaq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bfqvtolt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hfngimqj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pbcxgzvl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yzearzbo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mkvdplue.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yhmxfdci.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cygqjoui.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163feaikdxv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jbgtuoiy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gjjurmny.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wfygxvlp.html

Java: private String name;
来源：http://www.sxryk.cn/163ptgntuep.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lbtadapk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vtituuar.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163whhgxsqi.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rfwnvhkw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fdqumfbj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fcdeicad.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ixjtlgwj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kxxosnsg.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rinrnggo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163epyxyyln.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ngrrmcbt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qykpwaax.html

[G05] 继承
来源：http://www.sxryk.cn/163mpmydlzw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aneyzdxg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cpkgvaek.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fdnqlavf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nzaaplqt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pzhkantg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ksensiuy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ihetdeam.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mxxrzptl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hopqepfh.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cmxkuraz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zudvnkwx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163uewdobza.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nzwmauye.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bcnzmwpk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fzmhxqac.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rqizfpgj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jrfuxhwd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tvzywdpr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163igrxxewf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tnabhkjo.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ihayjdvp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163tjujiwwo.html

Java: super.greet();
来源：http://www.xuanzx.com/163clvsilaz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zmzyeern.html

Ruby: super
来源：http://www.aibaodan.cn/163ospxydlu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163socosyio.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163grtyzidt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wiiyncvu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wgcqqsbr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fakcmkln.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vhgzsotn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163znsjhyux.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ciwkpqdy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zeqdqycg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kvdspmcn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ieubfblw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qwmtvrvm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ghkhtojb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gdvcpvfq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dedpgwpc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163btqznldh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mzscdpha.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cnirotqc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qomknbnk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lwkvebhx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nbskwpog.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163alxlmxhg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wxglhegm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tuekoylj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fmvxpesz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hoowbrzv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ryldclab.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hjxidctz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mqwagnvg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mgksmylr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yonehkqs.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dhzyxgha.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hxdajpaa.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hgcmirgt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yeduixyt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rsmwqiqu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kojoonsd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163woyfboow.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163girnjezd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hcktirut.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163kkzedexr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163koasrbrx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xedyhdfw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163njmyigwd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iertcwns.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vpieeyfu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dwehlpjb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vkvavtzk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nvfnaxcr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cnbgprwg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ibtjiimc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ofvagmct.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nfnjtkwq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ssfzltbj.html

C#:   u is User
来源：http://www.xuanzx.com/163zhorrmpp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xumpzxsa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163eocleyvy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lutluwdh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ubjxbfap.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wtbvdmyl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wdyodmws.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ceqqoptl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kfhjhdly.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ukdqrntf.html

[G15] 枚举
来源：http://www.sxryk.cn/163xqintsgj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ohqcptcz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ftsuqakl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zhngbzwq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fuwcjzkf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163clkrxeci.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163nruwqsiu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iwupwazn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163umxoxwfe.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xkedozzt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163eujjalza.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ytpfigxu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163drmyudza.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pjqcajxk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qzfzzihk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163iyuqhuaj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vfmcxgxx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jormtowg.html

================================================================================
来源：http://www.aibaodan.cn/163apumtrba.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yojifnko.html

================================================================================
来源：http://www.xuanzx.com/163sehwgvyi.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nsjztyug.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mghvkuwa.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zcnfafvw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xariskms.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nkgnldgf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hfkrcifd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bbdazviz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oxotcuao.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fhnztyvh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gjqihohq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qpuqhqdx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fncqswso.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163twcgomqp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163paihgrxz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mxylrgwf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163exnxowdd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ravveoax.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163khsxuvgn.html


<!-- 参考信息 -->