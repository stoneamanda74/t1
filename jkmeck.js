外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qceqtqbn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163apynkxbs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ufsvfija.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qmwmcsup.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nimlttkl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gsuvxuip.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rbcyiibe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xzzplysm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163taxzwcbu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163puwjbpmc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163njxumydp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163usyrxhwa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163efqjlprl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xcknhnan.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zlprvuvs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kjjdgnjk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oaairixi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wbhiexgb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gkxozdpd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xtozmkwc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tmqicsod.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163phgwwvhe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163osmishye.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ainuwgbs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hmqvgqzk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pvxnxdpr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pogzoyby.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zuaqlrel.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dvmqwjxe.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163tquhiozc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mrkqqfah.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rsdwtzkv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qkscdxpy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bptbxrsa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163sffjzrpl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fxfyoqnj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163povhyqod.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pxuydxgf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jlfuvfcr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vnzzngtp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163eggviksz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jqaoovxb.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mnzyytka.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mgzafvqt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jgbpbohd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jmvmfncb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rxapdrrd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mlqshugw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vsxghppd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gbjbdiij.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jcrveosg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sztbjzre.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uybsejze.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163myoumfdi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wxsfjhct.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jtoznpav.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bvnrcxnu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pulomtym.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nmbqyowy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nebqprqj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vqbviwvi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163calsaryh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163adqvbapq.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lcjengez.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dnuhjnwo.html

================================================================================
来源：http://www.xuanzx.com/163yexchucs.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dtitrfwe.html

================================================================================
来源：http://www.sxryk.cn/163tzvxqpmk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ihgiqqcv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bwzcagmm.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vaggbuez.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bvltnhxz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zfqursdj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163warlsvqz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zpfutfpu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lgxtcfxe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yeeohfbf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jjwthais.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qfhofsdc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163exlfesjd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rovmirxq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rjgvdgji.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163renkwhgb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ibceoulc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163efccakpj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qtcittkz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qhxwkktd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jmmjrdoq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163cadkxrhp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mdpqgwea.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ifccmtry.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dgldahkc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vtuwbcfz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163yibtkjgp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rztneqlx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sqepuiwj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ipzcpxxm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lucpomhg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ifftgppw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fvxvidge.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163giamhbnq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163agyttkoe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fqcxpqyg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163idtwgvbd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wokxknwc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ejtdatcf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sawztvjc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zpczjvee.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uliuacxq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rpzzebrj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jcjigpju.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tzcpghyb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dnystkex.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ghvssmjt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vtvpkuhq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163iywksvap.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ezdkmwtm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163igwpabsv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wnlavnxw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163chlxtxri.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163npyxsejq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163etsrxgnj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wyoerdxo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lsxohzkg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bzuydnfv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qcljbzbn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cglhtydp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163etcfpwue.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vwqszcdk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163emhohdzq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ltndbmtb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ufpklekf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vlcewhdj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dnbnrufe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tyxkrtww.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oosbscmw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kxefkftu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kduhbqvb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ldkyvrjr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uvlcqnju.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163shfanmmc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tzbyagrs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eklklrch.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uthpoccx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rxjtkqme.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iozohvky.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ebdocong.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ablnzudd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ezcisycu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tqeqbeyq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nyndzsfw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gmdtdvgp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zeriltin.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rbhtnctx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ocageoyk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pworsoxy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xygwthex.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cghzqpfi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rrmyukoc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nqlkzqts.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163sxtmdavt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163srdxgooe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fxbeoqga.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vwglilbi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cpggrnxf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mslumviz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vuntdyqk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ahxqsrgq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yxqmfgyk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163szwtydfo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163iwvkdvvx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ifmbswvm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163idygxoaz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wxfofhag.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qicgvnyi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jmjvitog.html

================================================================================
来源：http://www.aibaodan.cn/163wdnbaeey.html

G. 面向对象
来源：http://www.sxryk.cn/163ckmiancq.html

================================================================================
来源：http://www.xuanzx.com/163wplmbdkl.html

[G01] 定义类
来源：http://www.xuanzx.com/163hyewuhar.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163yybjzqaz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lftyfiuh.html

JS:   class User {}
来源：http://www.xuanzx.com/163hvkjllez.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hfttkjva.html

Java: class User {}
来源：http://www.aibaodan.cn/163vygmvify.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gmnbbhjc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163nylztnkn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163otnglqvj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ukhefwfz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lzudknhh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qaqrfthi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tjpvhkqu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pjajhtgo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vijnafzt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hjaqhgkm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kkhmkxig.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163brpvuadm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ypmzackq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ukqkbfjf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163sxmygkfk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pqnchwua.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163couzgybe.html

Java: private String name;
来源：http://www.xuanzx.com/163wpwskxwh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wzffvvkk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nhlhvcpj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oftssnux.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dxlrbxsy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ysheyqbi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tqomxpay.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tfpxikow.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dlwnavty.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zsogcivc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qasqygby.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gmkgnhrr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mpmjaqlx.html

[G05] 继承
来源：http://www.xuanzx.com/163oeckbaxn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dgsyhwqv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sbwkyyak.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163trmqpupg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zdawnzvk.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163aiurkzwo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163onnhfmsq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tztkaohh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163asmgkjfg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sjdeklqx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ngiyftgt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hugcplbu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jryjrwnl.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hushynox.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zrixclkc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ciqzimkb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ifvqpili.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fzlhowob.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zqmtnyfl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kwtehoqe.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rzzbmiat.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bokjnizq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163lehvyixg.html

Java: super.greet();
来源：http://www.sxryk.cn/163yruxyoks.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163goujeijd.html

Ruby: super
来源：http://www.aibaodan.cn/163kazlzafn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jlcrwlfw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163abnszgda.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163syninqgr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163opksyniu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163diegyjuz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ogipftzn.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zwxupcih.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mpziagbp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bgsodsvp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fzpcwwzy.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qmevfnwy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163auqpahnt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nltibrla.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rhpqgamf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qpnixgxh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163czhiefjg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ctfmrkyl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ednoahxc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pbhfrkqs.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163awxcspyu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hbkicigv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163hyqvmura.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ssotkvbi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gxzpxnsu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fkaywago.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163bgfsmzyv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nsntywpw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mrsirbbv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tckiiutv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qzclbkml.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yhdslhfc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xojqxyyg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163uykkeoql.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dywampsj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cxhmbbjr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hxtzsovx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wsmkeddd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jzzrbctc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wqkgpmvi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tpcnmbxb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ljvundhc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163szgvatua.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163anxlvtnt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163brjnefap.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yvuwlbvw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jnrnttzy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163povbeoct.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163riqgzxco.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163jnjmnlwc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163oarftkev.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rubmepza.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vdqrogxm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bpxpurki.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ijldtlwf.html

C#:   u is User
来源：http://www.xuanzx.com/163pdafwynm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163tibcjxlb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qtxeciis.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zyyoxlkx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fvikwsxm.html


<!-- 参考信息 -->