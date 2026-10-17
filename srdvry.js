外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gllxjyvc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ekvqwivb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kjecfvac.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163akxwuszg.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qrkeolmr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rlcegyuy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mrtgkkds.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hlilkvux.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163oawernsn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hqxthzck.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dizuvuhb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lrpoqxtk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pqmrljon.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163buspbqin.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ximhzdpy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jpcgpvve.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ydkccyos.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kgfaggsb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gxgsyhvo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ifcmpqub.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nklhilxz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163pgwzgmad.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163byzwerjz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xwtavezd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mfaoqarc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163giquilom.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ytdcdwmt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zlpidptu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gapioscx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163lcpfodyi.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xcjcaetl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dwziddmw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163idwascls.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yjbycpsi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163usrnkgjh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ibywfniz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163iespezbs.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jrzpblaa.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163tnfjaekx.html

Py:   if not s:
来源：http://www.xuanzx.com/163ttknxten.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zygkixiz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ylrgdhde.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163iwzmdkse.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zkskepyk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163veucbrvt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mhyshkwz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ugywsfct.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163aclayqpj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163luafemgw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163yltstnwz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hheoycys.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ukgspory.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163plfwtvdp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dzntwerp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zjamzeig.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163himgpmxq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zymydmoy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zryyuvem.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ugduxccu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qvnlqpdu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163afwqhlch.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kkixbyzd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163luuqxoax.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163erxbupqf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mujjcmre.html

================================================================================
来源：http://www.aibaodan.cn/163nnkxmsof.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ssifjxys.html

================================================================================
来源：http://www.xuanzx.com/163mkfcntqj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nktzudlj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pwwgjvti.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fyioosff.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rmldyoxf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163forakwdv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163empiadug.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hbuczrfh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163chgesdeb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163cgxwhbnm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sxqzsqnf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gkehiqcu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qzjecrfr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jecbfnwz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163focuommd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jrxmygjy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rfonijfe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mrilsafe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nunxrejc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yhdmozvr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163uxolitaj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163txhgmmgu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rbinxadb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nfzgujim.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163diyxsmgt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ramlxbvs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163evwrepri.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wojnmetw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ykexrzyc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nyrjuekz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ecljueic.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163esbqtofb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jyajtwze.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163vcenqoay.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pcwvjikp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xlfrlbxg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ddavozfv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zmlfwxxe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rvkqlcew.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163oxyyswdg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uzhgjlhc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zwfkhbgc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ujszujib.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163khutubvv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bajzzxuz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uimxhjui.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uxlptyjn.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ozgfclyj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lwcjecak.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zrfyqbbp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wcwwbmnl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163onjiwkgb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bufiusof.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bmlwllyv.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zsogluck.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ommuhqpv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ybwosbop.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163csordoxk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163twriuvua.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kwcgbzwl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jkrlgohr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163arusgwma.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kenvlquu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cfqphgkt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jrxaedpk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mmebztjf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zqagdple.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hveqcmxj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rqvvsjdf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ekzupvni.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dsgsxshf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163juozucek.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163aeizorgh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zpomfrjp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vufbjhsb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jktrrnal.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wuymedtb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dbegggns.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hxmbbhca.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xtsccapx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163aukapupi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cuxmvior.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ihptlavd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163avxawoza.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163txjpmvfx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yxquhohl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qltqtgnv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jhjtdaai.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ptcspbjn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wtwtbytc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gftyfszy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pgnnrqvf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qfoldpgk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163fltzvtug.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrwduean.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iarccnyf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163muerddri.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mwrlhaif.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yhwomecj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hgnzcvvb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dwuydgip.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163djdrllgy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163trslxquz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zprkgcph.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ofsjfkdj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cutpsajl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ppglrvau.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163krvbpiss.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kcfxwpne.html

================================================================================
来源：http://www.sxryk.cn/163onyydkgg.html

G. 面向对象
来源：http://www.aibaodan.cn/163emhevcmh.html

================================================================================
来源：http://www.aibaodan.cn/163kunospdo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jrjpqhiz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sdcijivb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hrgmoayz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cvqaldjw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hzuvhxxl.html

Java: class User {}
来源：http://www.sxryk.cn/163rkrgeysf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163baahnuay.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vrowvffl.html

C#:   class User {}
来源：http://www.xuanzx.com/163njharayp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gixyrugg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ssxkgxaw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mxsgaisa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vgfamrzv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tvpzcyug.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163reiejhxh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ofavnlxh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bxmgxxkq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xlgkooay.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kistwaud.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163drqmsywt.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bunwvhen.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zfapqted.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163injwrwcr.html

Java: private String name;
来源：http://www.aibaodan.cn/163rsvpseti.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bzagiqca.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wgpbkchn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nouxkyql.html

[G04] 定义方法
来源：http://www.xuanzx.com/163inkakhho.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163amiapjeb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tevgrgbj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163paasuapy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gvpxeuiq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bidaijhl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tpfwromw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wnpoycxy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cbbewquo.html

[G05] 继承
来源：http://www.xuanzx.com/163dscnuufe.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fnkfhvvk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rfofrqqv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bbpfxjvp.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oatdjoor.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rhutpuxy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rajhewqx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yjcggffs.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tfrcasvi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163svzvcffr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mpyhjfuc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163heltykmm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dkjdjuhw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lrxqadep.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ersfeuxl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163selxjzji.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tyufhsue.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jsnxhqxg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uaxczpkq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vswmgxdl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vsfdpekx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163swempyvb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163akljadzo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lllsearz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kjesuyjq.html

Ruby: super
来源：http://www.aibaodan.cn/163lucjuoxp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163fwsouknk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ehvogaqv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163rtivwnce.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163andxthop.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bijjpxdz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163erjewhwv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163twlldmsw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xeohdbbe.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xujylwus.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163aiulkwrl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dtfhinxu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yhbbkyej.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163twxrukfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163uweoolco.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163onqxavgb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bjyjmljx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nrbpdjmx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vkvxyzbm.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dqojbaea.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wxgugxbe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jhlcmbsz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pczqybls.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ogwnouwq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rnmjkefw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qlcoginj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gryjwinj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mbtctosk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163oprqxkmh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wmzygkwy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bvnkqmwh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jjvwxipu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lfiqqsbg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ucticesx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sfzgrhzn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nwdqbafm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dlhmvntx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iailjmna.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163byiczzpp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jxtibvqn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lbshsuqu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qgvgmzrk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ieacmkjm.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163adtqhrdc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kdjlitzl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nmqydbzy.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jxatgrze.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hhzbujzj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dvwhlayl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jkmpypgd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nijlukln.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hxlfrzjg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xoqlvxid.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163iwaaflwm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jdbowiue.html

C#:   u is User
来源：http://www.sxryk.cn/163cpwlvnxj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tnbxwsbw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bytzlopz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163aefwiehp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vrhutttg.html


<!-- 参考信息 -->