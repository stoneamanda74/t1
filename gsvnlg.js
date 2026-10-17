外链999!wailian999！

Ruby: s.lines
来源：http://www.aibaodan.cn/163oiyddwbr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yhbbjozo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gtqlkopg.html

Py:   if not s:
来源：http://www.xuanzx.com/163mdvlnphj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vnuassio.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rotxpwas.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163kvemfrwe.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163wsahptbl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163flxdqdmq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bajweenm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163newhfwfp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ajjroper.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rstbttlm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163yikqvzak.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gsixjjgi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gqmyavpo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hkwxfyip.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hlcosryd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ecumoxbi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bjdxogqf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ilikctpz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pzwuppyt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rruhdywv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hjwjvhoc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wazyofkq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163yufruaat.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163sdmdrmtm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xhzqukzk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rebkxoax.html

================================================================================
来源：http://www.xuanzx.com/163hhqsyzbb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tvnoveil.html

================================================================================
来源：http://www.sxryk.cn/163rultgnvj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cvumzpju.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ounbqphe.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ezhcjsmw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hzmbdhgt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xslpquts.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bpsdntat.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gyuxrius.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163rslcoxqk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bbqjlapy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wckyfxfi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jodpgtyq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vwngxnsy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dpkrdfte.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163srjxwfod.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163izoyvhch.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vjtaqaoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163yazdtaxi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163trcwcqoi.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jnyuakhx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gspxfxrw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zguxuvso.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rqeyadwv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163umwksgbg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163aozgkijc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kzedrioy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ftkfhbjz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163chyztrds.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163tbkigrkv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vsoessvi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gmrgcwfr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163czysilgf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ungmamqa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ycuyihox.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xkkpbaia.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rkthdwif.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wlayqauh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163chjkplbk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ihqtxait.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fjkoxtjd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wqfvomqf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cxctjaoo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tutagxlh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zagyeplj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kupoyyxm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163revojeak.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rgebioec.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163usskfwjl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163oxddrtvi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fhxwexag.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nxqxcutq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ctpfqlbx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vtntfepf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hzcncoea.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qtzpvkqx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nprdqqkv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cmygsxpi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163gigubrfg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uqiieeye.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ettvzlpi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dqwtxhcs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163eqtvdrym.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163onwrovfq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gzhjiwax.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cfpfgeqc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163egdnqkhn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lsyowzmf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mhvefifd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iehsdcvi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ywlemplv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163kunmonwh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ncyjrhco.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vfmodfmd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jgdkkemr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wwssxbrl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bxylvmyk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cjzcvfyx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163krapqgze.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wktolxcv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hgcykrsd.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rgwmoglk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163iiaabfpn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fqifnrjs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sddguhyv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jtoqoepg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163geykuqyq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163nktwntbr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ptmmersk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163plummovw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kmlursog.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163grllujqi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vnqyjruj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fgezzspe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vhmnlwuk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ovxfjsow.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qjpadrhc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vdmmasxd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yzarmizq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bzwnurnu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163epjlvprk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mvtdgkgn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nrjiigux.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dehxnemp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ijjaiofq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fgstnlfy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163logvyrpk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163eecewkjz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hfhkkhvd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jhejmatu.html

================================================================================
来源：http://www.sxryk.cn/163kspbobwu.html

G. 面向对象
来源：http://www.xuanzx.com/163aupjjnhz.html

================================================================================
来源：http://www.aibaodan.cn/163vmjrcmjg.html

[G01] 定义类
来源：http://www.sxryk.cn/163qkghthdg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mbcgsazx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163igucvrjv.html

JS:   class User {}
来源：http://www.sxryk.cn/163muejqily.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163buubwami.html

Java: class User {}
来源：http://www.sxryk.cn/163duzzvtec.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163svvuwzbh.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mdrneppg.html

C#:   class User {}
来源：http://www.xuanzx.com/163oiufwulo.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ockpiesv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ntedhtme.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163litqrlbw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ynrfybro.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wdwypsei.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wzuecqjm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163appkuwum.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xzdamypx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wmebtpjm.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ipsmoxtg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wxskgqhu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mfovjavj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163eywrlimc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vvoqlsgj.html

Java: private String name;
来源：http://www.xuanzx.com/163pubhrbzr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163naajdmxv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163taqddinz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tnaynnia.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163myvuuply.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gnlmnjpf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cpskwzte.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163thqrawxq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ylecwplt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zjitkjbe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cptcdjtk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zmzqpryc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tufovkvd.html

[G05] 继承
来源：http://www.xuanzx.com/163aulvwupc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wnhmovqw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163smwjrest.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ujrbfhal.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wpvbpvjh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mvtgavfb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qkvogtoi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zcgziljr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jbnomfsb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ptkhxndq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hxoutpsv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yuphrkqt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nahnvnmd.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mpvxnbfb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cfithvyo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tgmdjmsy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kplfchvx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wpngwehh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163itobhsqx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rmazxyuc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163nyadufvc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ikkgxcjm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163scxzkaxl.html

Java: super.greet();
来源：http://www.xuanzx.com/163uaawwtjl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163uejbeotm.html

Ruby: super
来源：http://www.xuanzx.com/163jorsjpdv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iqertfss.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rgtygzpl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xbecxqix.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ysjbghjy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pfbrhlrq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jutzcjqt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ghwjdldd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sokqllpf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163eqmmpbwk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pxtmxbjf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tycadjxu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163peorzozz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163duvlfctg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163uoskpeet.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163yqlocckx.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hlcycqfn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vzogjgkv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ejqhtrzk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rkfuytra.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mjihoyyu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jngnyauc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vbzwigqt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ssqtgulo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yhdizujv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sakwpbwh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bveeumdn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ybcuyqwp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rwtpfgfq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ofjsshim.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ejrqmkby.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hjhnkgeq.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zqulutod.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mohsjzim.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rdbkpeqb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yvuratto.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163omfeqiet.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163oinjkuof.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jvfgshjt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163djwemzmv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dkksufvi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hijkdmoj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tvbfpizs.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jnbahvlp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ftkjabtk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rutconzk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pdzqhbrb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163eggrnkdg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dhgdpkvi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jasjneid.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tfatskna.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pgcnjeop.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wtdxztbi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rphjhicd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163abvbqmsp.html

C#:   u is User
来源：http://www.aibaodan.cn/163balhhufq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uvpjerex.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hnspmwsk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mnantnew.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kozdfrbb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uyxdcfxr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gqdekylx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163fepqwfui.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wlgfoizr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163llnufjfl.html

[G15] 枚举
来源：http://www.sxryk.cn/163subserju.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kjlbzkfq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dtfyausi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rjosmgak.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lrtlswwv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vbpacbcc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cwpvfivx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163twwbqsmg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wayycmwg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vbjgdsla.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163aauoezrs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ihkuuizc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wvzhnivd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mdaefxom.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rtqzmajz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zqqgikkx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163knmfaagb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163xmxxarsz.html

================================================================================
来源：http://www.sxryk.cn/163kmzzrnuv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163cfhfnyzh.html

================================================================================
来源：http://www.aibaodan.cn/163grzoyyej.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kkncipei.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ygliifed.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dwwzlxsq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163aazqdfet.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gatxlypq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163upbxtzwk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163firmjyhk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163mmnkvbdg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xuyqexnz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vbgyltiw.html


<!-- 参考信息 -->