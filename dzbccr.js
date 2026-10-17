外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oxoqgtnw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zqgxqilw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rrzfifco.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163hzeinozj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hamvptnn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163aolrqncg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qwazdhkj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rpyodpzj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oxqnjhxu.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vkkonzgu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hgaplijz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qgwzgemr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xghbbkwk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163motyiusj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ejcaoazw.html

Py:   if not s:
来源：http://www.sxryk.cn/163bxkubvdw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hkdgzqpj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163graamrgp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wrrvqskn.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163utelapzc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fordewpz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163fgwlrpes.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ialnsruk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163wltbjgph.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163adcbzkfw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163idmvzsxw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mttnqyzh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ezkfwlla.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bnkholsf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qdmjedqs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jhanwfrj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ttjyyfgq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kiwuwleb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uholhluo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nbqurvrc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vjuctfex.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163seolgjvg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xwuqrsqe.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rnhcxdyh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dfujdcxg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rxdyqpog.html

================================================================================
来源：http://www.sxryk.cn/163fvgbasea.html

F. 文件与目录
来源：http://www.xuanzx.com/163mjtrhugz.html

================================================================================
来源：http://www.xuanzx.com/163hucrjcdi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wlkorefw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163tqymldub.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163csurelwg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sfbuzmlh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163uqjsdbsn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kyqzwqkx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dqskyiyn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ksswcxcr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cwwmakob.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vwyhzhqx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jyuwmosf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ilwpfdcz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rehlhpqa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yplcpocl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jvgwsmhy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163blyhjrpx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163evspipdr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163otslbpfz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vpdrdcjh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163eiumsryh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163barrajdq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163upfaoqjs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yibqwxca.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jmkpzrbo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163azmtxdhu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vzkorhsh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nntufjmd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dzmztrob.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jlwpljud.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tojkdorq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bmiszowz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163adkkhuwx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163roeyzsxx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qamytjin.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hlbehryx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qamvedja.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rxwypovc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lpiybdln.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163nkbpekwo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iiwnlhny.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163amjtujpt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163umgfbvya.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hbcphdxn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jexvvbat.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tntkvxvh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zsdlywae.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163eiskoudy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qvahelyd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mfyijseq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ngosyuyv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zwadgjvp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fsiqubgr.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cqzncapl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qfqiuejy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hxbcfcfq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lfdvqglq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163apmyyjbs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163osondeyw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ozbekxdg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163zzkjrxvm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jealvvly.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zaejnfan.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jvaqblsa.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fdmjkvqa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ftqrtnvq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xfnxtmtg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mrhgyybw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hpufuxdy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ensofhow.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ygqmoqku.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ydxfpshb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zbdqgwft.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wdwnqfim.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qvbqlxtz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ahmwahty.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vhrgejui.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ijliacvf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hgaazndq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bwnqptiv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dvqbauos.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mjxnrlck.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sqcgkemh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ixrwhvas.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cedzmkvz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163owwtxcel.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bwmngetk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163twcwjfsn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ikiocscw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163glhaazvm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fuburejb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ljehsbeq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bxzjpjnk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dyhqqztd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hjdumvdl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ueouoxmt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163htsxpklx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ieoswftl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ftxvkabb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sryzrgmm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hmqmgjzk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163flhymmmw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zimjoury.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ydfzkshw.html

TS:   // 同上
来源：http://www.xuanzx.com/163zvugimhn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163aaugrqfw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rtugkfeb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qephhmkm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tkbysdpb.html

================================================================================
来源：http://www.aibaodan.cn/163lnsxwnea.html

G. 面向对象
来源：http://www.aibaodan.cn/163nuzgueat.html

================================================================================
来源：http://www.xuanzx.com/163ecsptcgh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163olqjdecm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163onnkdskw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pogoauuj.html

JS:   class User {}
来源：http://www.xuanzx.com/163bhfaaqyf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dqocdvzi.html

Java: class User {}
来源：http://www.sxryk.cn/163gxttrofz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163itvjpgpn.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sarvyjkm.html

C#:   class User {}
来源：http://www.xuanzx.com/163mscpdznz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163dletpult.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163djwfciot.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ndkgpjuz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bhzbqafa.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163czqgqqtf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163daipusek.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cfipjspy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ojhhgava.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163egunnjuf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163crdrhibt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163povtjsfq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163udexdgmb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163casddgpo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ibpsdapg.html

Java: private String name;
来源：http://www.sxryk.cn/163zitpwzmx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rlcsjsqx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163idtfbrdn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qbomfsrv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jkblasfh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163pvchepbw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wuikrkie.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xxvsohtk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xdoqpwhs.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163aybihvvo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163acvsnqwo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tvysabrs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163suuryyvk.html

[G05] 继承
来源：http://www.xuanzx.com/163sbooydpa.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163warwrmar.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xzmptgxg.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163glmbqqyb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qaloyvhk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163eqrtqabi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pvzoidoa.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hydejzxe.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bpulygpu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ozqelktd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xarkbyea.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yfczogni.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dlrqklce.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zggqouef.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kiieczlt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163illxmjaq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163quuxurgq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eqjtssld.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xnxhrlqr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163nxzkzzhj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rxrijbjy.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ydqquwkp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163arflfhzm.html

Java: super.greet();
来源：http://www.sxryk.cn/163cevxyqgz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lnxpxddu.html

Ruby: super
来源：http://www.aibaodan.cn/163ggngfbbq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zslfvphx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163untbphqj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163oidfqxlm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lcanetpo.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163itmiitco.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cmoduzey.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163veosajrw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dllbymbe.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163osemrhwx.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rpevzydx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wmmjcala.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jdlkjotb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hxquckgp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ruvzuhdx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hsoqpchx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gjenfofd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nhzhhnfu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jwiervue.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163iqzpsbpb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163iyaakewf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rjzignko.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163aaajdjff.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163waxzkhiz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tapanvqo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jhzlzgzp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163itofayao.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hzmbtenc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ptroxdao.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ukoykqxj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pkxjzlyc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ttprichy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mrvuynsp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163myqwazso.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ekfotzxl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xyowjbes.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wsukqrzo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cgoemlas.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ggcitmvp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mewlrlxz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163obbngmna.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kezawovs.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xkdklgjo.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163prlyfxrt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kphustya.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163twpafftm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ojdnirpw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pdyevnzi.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163odulsfhi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ipswodzg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mtgkkjhr.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163iqcvyhbj.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iqykdddq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qjdfecxp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xmqqxubj.html

C#:   u is User
来源：http://www.xuanzx.com/163lqqyrapo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uvpoleks.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wzkuxgdj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ygpphgra.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163joftewah.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cvuekahb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cqypbdzb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uravhdmv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pmcifoxf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wbgmfuyo.html

[G15] 枚举
来源：http://www.xuanzx.com/163dvbfmsnq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163oxmjoieg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vthgzicw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163oautwqwl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uvkoyhcn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163novtdwrj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ufohpluh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gwwflcxa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pzbgljii.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zxqcgudu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163tixpkhtc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wjpzhccn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ntpcbtcv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rdmbbdwy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bxubwgiv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qxlfvclp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wncjdfvm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ewappbag.html

================================================================================
来源：http://www.aibaodan.cn/163gxwnossb.html


<!-- 参考信息 -->