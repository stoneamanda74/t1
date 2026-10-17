外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zhbkchia.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xaddkabs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nmkjwfan.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163usxlodjd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163onhzddwc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bjpdbhla.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pifakhtl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163giftertx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xqqlgkvp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xiqfdpug.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xewvyulh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ssqueepj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163leckukcl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hdjjsrbv.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163symrgjjp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wkgbjyvz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qdasgbsd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cbsmsmtg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163axzslslh.html

Py:   if not s:
来源：http://www.sxryk.cn/163nmnquqeq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ebxdfjnj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qbgzwwhu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ayixkiac.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kzwkrinj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fpgbbahz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jzooevvs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pqqwiyqt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pqpljiie.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vlejnzdx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fwumtzcq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163guaxknyf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hhocdrxo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wkkkutyl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ztwvnift.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yumrlcer.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pemirxnb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aewaatdw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wxgmyunf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163buzwrifb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xnlmzgke.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cppsupra.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kcjcqhos.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kyopoitc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163uxzscfqh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uyfdzena.html

================================================================================
来源：http://www.sxryk.cn/163zptofnqt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ureawllq.html

================================================================================
来源：http://www.aibaodan.cn/163ksyhqhab.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ksfaomqs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pmnnovqp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hjpfirnb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163unwvyiok.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163djykdpna.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pjnaeaoi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zksyjfpg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hgxlcbcl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cplekmvi.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163luvxjcbt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ayulnbzs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qwthuzlg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lhdopkog.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dfnfvusc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fpdiymcf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163isrllvht.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163inavxiog.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ynebxluu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ghpvudfg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iogczafx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pclwkalb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ubteeknr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tvdfjkvj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vrlatogz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ypxrfjtl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ghyoccem.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hyftykjh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xdtebukm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pmeyomdj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mbywpxkr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aiuwfhox.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lnatvuri.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163najazzdo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yrridtxz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163obgdpzad.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jyvtylfs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163shvorhjl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zxsnuimw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fmwzdhne.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ngncuvuy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kduahtpr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dxxomnwy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vfasqgup.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hyvnvazv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jmfzbsww.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dotsgsgp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zjyyqnpe.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kaqehbet.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rdnbdkqu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163woskyfni.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jyhnawyf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aujsehdi.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kwfwyvmr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qbctnfxl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ievjpcfv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kphgfqfs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nylrihcw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163taztjpdh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lfdizijn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fgxkbizz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zipckkcw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nvmqrxui.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fhqcpqva.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163knntjysq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163avmwtzwr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163whffjlhh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pysptlip.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zlkiissd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cvesiibd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vbxtyekj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163eaijnell.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ikgintvf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qxwergtc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163erfdhhnt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wfttpcan.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163txtcksor.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ikhcxfbc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybpfvbio.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rqhkwith.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jdgbshom.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uiqvudpc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hfjrxhtk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rxetfyct.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jwnvrhms.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oehurczo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cgzjrvds.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dkgeizlk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bnveegsk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163szrvamqg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yxrtjtcs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uvnevmcd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163saizyrtn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dwbhhnqq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163keawtvkm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163clfkhlpv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rjrjtlbg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wafwikcd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gbsflhzb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ojkjhxie.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163njxkdbgl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fhzuypee.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wtivhcai.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gvznuowj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163suxqstro.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wuryesfc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xwznesat.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fnkmglky.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sumzkfin.html

================================================================================
来源：http://www.sxryk.cn/163fhusgpgn.html

G. 面向对象
来源：http://www.aibaodan.cn/163kfzczhow.html

================================================================================
来源：http://www.xuanzx.com/163hecjkxhe.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uarjrypd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gjkxdccc.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ufoukygy.html

JS:   class User {}
来源：http://www.sxryk.cn/163gdkqmwbj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163auebbgfj.html

Java: class User {}
来源：http://www.aibaodan.cn/163gmwunjlq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zsjcyrep.html

Ruby: class User; end
来源：http://www.xuanzx.com/163iqxvwmgi.html

C#:   class User {}
来源：http://www.sxryk.cn/163nxgojhug.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163iphjtqkm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163gurdhgib.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nnjyxkkr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fsryvunx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tqhxirfb.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vkxcltje.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ziukqlyq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gzmhwjyz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sstvjtbd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163seewuxge.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qbyqxcma.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hsglyylv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lsbtossc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ymjmumwi.html

Java: private String name;
来源：http://www.aibaodan.cn/163srpiyxgg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gomvmdmb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bksjalqx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xldoqxka.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ocrtzbdp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163otpvwhok.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163soucmlnx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fuoiuzmg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zkfhowqx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163gqlphzyy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zdjkyafw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163altvyvae.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hmguodnh.html

[G05] 继承
来源：http://www.aibaodan.cn/163joogykcf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163myvwusku.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jwtzprmc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pwlknkir.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mbvghupa.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fgkdvneo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wktfefje.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zuacooyq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xazohwlf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163amkkjijt.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zogzlxxu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163byyvakse.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fsesolrh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163snvsnave.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kbzxrsqe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163vsrmuvny.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cylzprvb.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jxwentxe.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mrvhmzkt.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wfxqxnxm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vjwfrpxp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163yleilygd.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lwgyrvwu.html

Java: super.greet();
来源：http://www.sxryk.cn/163jhincgds.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rhphaqxt.html

Ruby: super
来源：http://www.aibaodan.cn/163xmbzkewt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163eyqkwagy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kdxquoad.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163njjdiuzy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jskbagkn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163sxqmhhzd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ydmadljl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tefdpzgl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163etaepmnw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pspdxjmy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nysemkxo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xeikwaip.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ttkswxfw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163caducjjx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gusjrdtq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hwfzdepw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ebkblbge.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mtspcreo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yhutroez.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163voekaxpy.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hvfhvtcm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ecitbrco.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163mbgwwbkb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163eaitzjam.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ecjfbwcb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163foafrujl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wbnbcabp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ozopohbj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zsrndtne.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qzeljwuz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vbejccxy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tzflxufu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nufzrmws.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yherswgn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zdjexcig.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163khcaecua.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mrbmpgkh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163goppqvno.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163umysfbse.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rrnfsiqo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nyonuvyb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rzocvnqa.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rtrbimjq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163edaojznw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ervprgso.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dahhblce.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bjkdgguy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hvlphgbg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163shmuetna.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bghiozvb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nbyuuncs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ffxyvxyv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kvwhstkp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ukxmppgy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rgipnkcp.html

C#:   u is User
来源：http://www.xuanzx.com/163xfhksreo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163gtyzddbs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wcyuoytm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xggttqxx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dcuwdndt.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fuwflsjg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163iauvkyms.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dedgenqm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zbjwnzbo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ybjiovwe.html

[G15] 枚举
来源：http://www.sxryk.cn/163rvnulybe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vimetgii.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kjdmfchg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163drrnwwlw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163faeysjon.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163erfurxvn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sovcjedv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163yzajmwdj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gjhxkxub.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xhmyckel.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163pnhjbqjx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163cqbiqhez.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pcfyowdk.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jlwrjccd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ghulegsc.html


<!-- 参考信息 -->