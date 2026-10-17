外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nxnxudjt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gllucaol.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kkucekig.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rmppbfmy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xwvogfpb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qzinsjgj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hrsrnwjf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hinwxbad.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163urtfweac.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hfqzdggd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qgekoxej.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qfydxvsn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163okmltzxg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kgsyvyil.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cmbwmoau.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gemsatqr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hqvxcald.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tituvdnf.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kuwirrgg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163nebbmtdb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ppwzdxml.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163smyblogd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mnbicjku.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mbusqlsl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yiysigvx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fqnrytlj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tpwedznz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jhlvdpoe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163efhfgyyq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ehykpfpp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wftmwoic.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163issyuzyq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hfzzitjn.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hikzeqbz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ecxjbbbx.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163dkyngakd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sxnjzjer.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jpsxxjio.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ajtnvrxl.html

Py:   if not s:
来源：http://www.sxryk.cn/163arjrvxku.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163prcsqwke.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163teqmsomh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kiccdlgd.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kwzprmgr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ftmnghiz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xkmmxisg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xmjwcmxg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cpkncocl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kytqjrwm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163guekkllb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tedwhkqz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163itgfigqo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oxetqnoq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163yoslifgd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163judlupko.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dijmtrph.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jjhbvypc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163sfihokgu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fplyldxq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lvqmphgc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163oeuhqkla.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cevwwmgp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yiaryuae.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gxpddddn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zrstjycg.html

================================================================================
来源：http://www.aibaodan.cn/163wtajpbqz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163swylamhx.html

================================================================================
来源：http://www.sxryk.cn/163pgmixmkd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gjlvjwut.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163slttslxu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lswtjzar.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qnrjlzic.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163poxokwzh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zupxxhoe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jlmnbqla.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163efumciyr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163rtywugoj.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zyhwkhld.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hyrmynva.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ajgajdtc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cumigtsc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cjlyrnbl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qmxkkjkg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qoqadysz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163boevdllw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kgbibkov.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wplmqndb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163eupdwqri.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xrnlxide.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vxzkeeax.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163izentfje.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163mkzhtihv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163aizrsjnn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zgmhtguz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jhqdpzoh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wjwjghkc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dgupauhj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gghflbpk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pncslogo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163unckrysd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163affkflwn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ndzukejh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163yyubbbsf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fsjrxyda.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ejmmimxh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tbmdezdc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zegkkcpq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163emugszob.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wrawbjwk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sbuudcxi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wujibgsa.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xpkbrhuo.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jehzyoom.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zdjvmaqs.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yehpiefv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tfoeuywv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tiohbfjn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nyjufcwn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wtaspswu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yaeqfbwc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163abyoaibq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pgrjkngh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ruytntxv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163finuyjbj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fbyfbjkn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hoxashyn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163srimzneq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vcncwabg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163zctfixfs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vvjpshjd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sjuiffvg.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ydplqnjj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vzqvcntz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lnytaxqv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uifmqnfc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ucdvsbdq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mvqgqask.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yydrwshe.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vbtcucnv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oliaheyg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qcrxqsht.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pmpugudt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dnoppjuy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xxdopmce.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ojoihmri.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rudpmeqf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uwqvppbv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xvseissv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fmngksmf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163eyvmyrsr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ncipeeya.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163kakgyxwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hnqusqki.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163uqgxxway.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cveyajmw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163xivhuwny.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mvkrgjgu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hnnwybzp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tbicozmf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163veqyipcx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163froxtgod.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cfglddru.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qsaokxps.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163grdprcvq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163znrivkpj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gxxgoixv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163utfrvkli.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163btzhkxsv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bdxuzbvj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rusvajuz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vsnkcyyv.html

TS:   // 同上
来源：http://www.sxryk.cn/163ffbquchc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tdilndtw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163cqmyuqce.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163aqnmfawf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163axzzarxp.html

================================================================================
来源：http://www.xuanzx.com/163brdqewsq.html

G. 面向对象
来源：http://www.xuanzx.com/163cwqvilcx.html

================================================================================
来源：http://www.aibaodan.cn/163rxytuayv.html

[G01] 定义类
来源：http://www.sxryk.cn/163bbvsajcd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163juwuvscg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163iuhtjmmk.html

JS:   class User {}
来源：http://www.sxryk.cn/163tdiwresc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tyetqsuj.html

Java: class User {}
来源：http://www.sxryk.cn/163hikvornd.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ifowdmsu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ikltjbar.html

C#:   class User {}
来源：http://www.sxryk.cn/163esbfvttq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ewgpsceq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jyxeprkp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ocmbipce.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dmmbnxtt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163sfcvgkye.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wwepawko.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mluyjaxe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hceaxoco.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xjsvaffz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ygddirhg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163txmgxmlx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163orvvzohg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rpoedbfk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vhzxoxra.html

Java: private String name;
来源：http://www.xuanzx.com/163jnpfentb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rxmfguoo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gjcdumig.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wrbmewjc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gvwszzsg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jigafhvq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163axdwtiiq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qsgdhcgx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nqeihecl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nwokihoa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163bolwknyz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163viawrznm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qdtczyiu.html

[G05] 继承
来源：http://www.aibaodan.cn/163vhhwuppd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163omseiidg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rmbyouou.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ygicdthe.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zbvscdlu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bbvwsxls.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hdaxbjlh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kvchwbsa.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zbaxnred.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xmjgdfka.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163twefbcts.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xeisdkil.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jbrnkhox.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qdyrmoww.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163taosuglb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ghdsjxdf.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zcbnflxl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nwapvaob.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163otakatlh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bzwkclyc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163atteodhs.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rfvpaaiv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163pkspwlzx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nnpdzrxv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gswwmuth.html

Ruby: super
来源：http://www.xuanzx.com/163srptobfq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tzivprwg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163eblpmefl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cdcuobbb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jxlyqhee.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bjtsnayz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163aeyyhehe.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qemtumuz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rnweqhmo.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lafxkxmn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163shxolqjs.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bcpxodwe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163utunxsnr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dncobksf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bsncvwhk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kioeqkdq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qdgpbqvi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qzlmlgah.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163khbrtkwa.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nguomjfz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163plorpklf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bvoycusf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jyesgysk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qjfuxlur.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163eeamqqvx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163juedxkvl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ykeeflim.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yzibulpt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ujerujvo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163taoemtjn.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pztvtegz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qyhsqieq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bmrgbova.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163sboukncn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tmrxkvox.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163narolcai.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tkmraykh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lkapslkj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tlufizqt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fddobdvt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163obkucfqb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lgfpllax.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qokrglgx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sgmnyymn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zcxgkkgp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163edjrxjpe.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vmmxlsed.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163yknbkpxq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gxsrokph.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163vcxcbmwl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zebuuiex.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163flwyirgh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gjknyvyf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fhcagaoa.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gynipflh.html

C#:   u is User
来源：http://www.sxryk.cn/163mduanugm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mrgbfgdf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mfctnptr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fmhlevja.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qwsstshs.html


<!-- 参考信息 -->