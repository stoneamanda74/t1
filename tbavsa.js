外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zgrocezj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xdrdmzvr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fjycyrkj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mmlgzpum.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dgatkclq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163letonbfj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mfjbybzg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ajwodajy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163uasphang.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qybdowyl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163oxcgjwih.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163flwkgyta.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mbsvgimn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163cepbkhjh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tkagbknn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vhbgodfl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163impnebpj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rjhdgums.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163itffimvw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tbepnria.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pniaojex.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pffbmbzp.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xvzuvzog.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pwovkuhr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nmsnpkhu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wemvfyhc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163mqdhljen.html

Py:   if not s:
来源：http://www.xuanzx.com/163yqrvltpn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163etcserij.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rxikdzbo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163icqsghpp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ipljhtfh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163cqezqxmi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163udculgku.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jrcbvfll.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163twagfhsf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163euwxnnwf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163noncoeok.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xfqbtemj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tdekgfuk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uhiaqyof.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qffltecz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rllfrfcw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kycrmala.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ckpozrmn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163hrrsvkct.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ggsfxdbx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oupohmci.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uwvrjtqe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sizhpuhu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jigyeoel.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163psodchmk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wwcivhzb.html

================================================================================
来源：http://www.sxryk.cn/163oquvnwzv.html

F. 文件与目录
来源：http://www.sxryk.cn/163mqbqiqmr.html

================================================================================
来源：http://www.xuanzx.com/163vpehtndk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qenpsiaz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dupodudb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vhbiszfj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ajphkpbj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ksoxmzfp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qotqzirq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xptqidgv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zphcppkf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tsiqqqbh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163dvlxayld.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ivptmque.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163graqtvqb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zpxqhizg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yzjvhqqw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jgzmyahd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tsmfuvaq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163esrbrmda.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ewvghqmb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163btpvfipo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163koqwjwnq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163khsrbbua.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hibowdsc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uolrerhg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163clxewejx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wrycsrev.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hakzxckx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fmfzstop.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rddtdxbg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163mzrwmbzf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qukrrilq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163peydcvra.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oahtnybt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ofkoverj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163iorrfkah.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jkxmzafn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163uojbbphu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163bulebdej.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pqilayqu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uamdhlpw.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ttenrdjq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163opzudrmy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rsyftjwk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163nkuowxoz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qqgetflq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fabnhpwu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163oucadckg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163efzgliip.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zfbonwog.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rtbljpmt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wlzegdim.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ytrjamhx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bvgrlwex.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163rytnbhbc.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163edjnbdgu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kyncwbjz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zlcfibij.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dmgnmvun.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ugesdaos.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rhnkmlav.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163txuyjcaw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pmonzgod.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ardxldgk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163neqzhlsk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163juxflbuv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hurpbimn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mndctbsf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163exchvkkv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163leepyyjk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mgqzqvnt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163niecplki.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mbejizlk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163sskymsiz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fhvyncok.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gzcewwwf.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ydgarfbc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163beqeutal.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sjncktaj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163erokunxs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pmccxwyn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bawihguj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163loewnbug.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ruxmiueb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qoerhkyb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163relprirf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163itpgghhl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gnnkjosb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lskzkkge.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dcdskgas.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fybyfpez.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wvqzgwnx.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rmwgmorv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dwfvaqqy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163onkcelpe.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163esgexrjs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fudqhtty.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lwupoemt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oxxtnhxe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dfjktqvm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dtwddieb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wmyvbsvi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163eopjymdp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lpetivax.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ksjywqym.html

TS:   // 同上
来源：http://www.xuanzx.com/163xyjcusae.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163biofonqy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jsaacirs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wytxwzxf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vybsdyfa.html

================================================================================
来源：http://www.aibaodan.cn/163naabtoav.html

G. 面向对象
来源：http://www.xuanzx.com/163bwrkcdrx.html

================================================================================
来源：http://www.sxryk.cn/163ycavmhes.html

[G01] 定义类
来源：http://www.xuanzx.com/163gnorqfoc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gzepzuzs.html

PHP:  class User {}
来源：http://www.sxryk.cn/163uykymilw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pntcgztj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163eikaeewl.html

Java: class User {}
来源：http://www.xuanzx.com/163okeliagl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jdpbrtga.html

Ruby: class User; end
来源：http://www.sxryk.cn/163icbruhqx.html

C#:   class User {}
来源：http://www.sxryk.cn/163nrmoozcz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jgdylgfp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jjuauqpy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163aefkpoly.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zrlffsci.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wlrjenja.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cdcxvpwu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hixoxino.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163yulucwsi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mfbfeztl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cofdsvlv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uwjppnsr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163pnqvwwls.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163znmtbybx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ablhsrvi.html

Java: private String name;
来源：http://www.aibaodan.cn/163ujnecqjn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mlhzthyw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bpfufptl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xqkfboie.html

[G04] 定义方法
来源：http://www.sxryk.cn/163blsicluf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lpqdlmxf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lasfllrf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tltyofnj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xoyrudsq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fsczjjsr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tnlcwarh.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fllfcyco.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fyfxqghz.html

[G05] 继承
来源：http://www.xuanzx.com/163caedaffl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mnrnowxm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ohujbtvx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bqyhqzjq.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qcdepzzx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zrauwcui.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mkgexmfj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163uduqblbo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hvcyunhp.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163unmoubms.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pqivezcf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ubqeepeg.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rplcpadh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163azexsztb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163trvoltuw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hstermen.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kimpioay.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163upkepson.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163oplroiuy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jmnlzyjl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yodtgpzj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ykjzvfch.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jmyxqnwp.html

Java: super.greet();
来源：http://www.sxryk.cn/163jzalrabs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dnivbaow.html

Ruby: super
来源：http://www.xuanzx.com/163zpcebkoy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pjzednst.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ienrjftz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cpxmishf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163adzlnsja.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lgewrnsq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vlgpojai.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nfgpmhdj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wfflhyor.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tbgivmau.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ehdsmexq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163axgmruxj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jrtxaxgr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ypqvhtzm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xxxqetmx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ckpnbrli.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lqktqyyk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wcbmejsm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ytfulrhx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kjqsirqk.html

[G10] 访问控制
来源：http://www.xuanzx.com/163paknfvle.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lrpaktiq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163kwbkcsux.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jeymbiyi.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jygopbad.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cfzsdysz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wgsgqtpt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vxkodlob.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ddbzpebr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uqrzfrdc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163aqjqodzb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tanbfphp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163sqsazqgn.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163aqyaxufl.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163glalnabi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kzptaphk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ncxrnwoc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kcpnxjec.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163unhcarwy.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163awgioose.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mruhqssx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vovqgtsy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vpogmvvw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163idulclrm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xnbkvcyi.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cgxygqnx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163leyprbld.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ulmttbsq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163badpvjtv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ixiauxgz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wxigajss.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hlxnfprd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wczpdzwo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gtyhktgm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tfpuplcj.html

C#:   u is User
来源：http://www.sxryk.cn/163avvjhvai.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rwzajime.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163oosdsgwu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fsmycuxb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xewrseyd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nmhnndhg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163voghmdwi.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163krgaoagd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163eemqipua.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hjndmvql.html

[G15] 枚举
来源：http://www.xuanzx.com/163uvlgkaii.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ibiwnjhe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vllezhyv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mjirxprm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fwxkbbds.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hatagupl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wpibupnc.html


<!-- 参考信息 -->