外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ubneercv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163szjstcah.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lajqauot.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ltpvczao.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gknmvgoh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163phdpyzow.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163htitmhov.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xkpfshyz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bbgzlaeq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163oamufksr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bwqnlqpj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rqacscde.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163aumnzvxk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163eqradamx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hdrreaur.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163oohqlapu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ayepffgp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163iygrkfvl.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ciefgqaa.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wgoastud.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hkkhuaml.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wpgoespq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jiflopjg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qikecekw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163chxihqnu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pmcvcetl.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rigxrena.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wwfhixwb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fysjebyn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ayyvsivd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163yzleulyw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hbpyhvri.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rlmcdhks.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163keejiibf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ntguijwt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163llewewui.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163byzzelti.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163odatasnm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zgijefnv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163efzyhrda.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bxxbnohp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vzqgbhik.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pfutockq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nysfirhb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163czzhtzdo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ldbslitb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kzrlbusu.html

Py:   if not s:
来源：http://www.sxryk.cn/163tskbpzmq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ztuufcrw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fgjbjgjg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163asqqyjzg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qmoqupaz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ytowxugj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bhrlljqe.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ehnuvvyu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uzsceayn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jaowxxes.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jcrqtjui.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fdxfyeio.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163upnouqxf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sfllmlgk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163evuhjeva.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zhosbamt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163suguorrv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rcpmpkhl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bioctssx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ygftwtqu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163slccyaib.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wcjzwnbt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ynwtmmad.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163brogjskp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mmwhmlfw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gycppcxt.html

================================================================================
来源：http://www.sxryk.cn/163fhkyjaxo.html

F. 文件与目录
来源：http://www.xuanzx.com/163rgurafhx.html

================================================================================
来源：http://www.sxryk.cn/163rjrwrrfw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ljpijzbd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163miuulwhc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oikwwbrc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163opsbkydg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ymcvobqg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jxouxsrl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xsynrjwn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bxkpthch.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hzmqogbp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mpguocvg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rqhopiyb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tjihmssy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nykaffjh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fciwebpg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163idtxtvag.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xfjhdlvb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nnvemhgw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163iwvejvcy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163nlixiobq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dtlohfko.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gwwgmjwg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oaopoocl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163trmjjmra.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xykcvlgj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pilwbyhl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163swzgtpep.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163unsbuiys.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163uqfhdjie.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163irgesqop.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wddgzlyb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wfpzfddp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jhgwloxx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mihycqmb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ujyurqjz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oqscehqj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bpntscxe.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163kormqmhr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163raqzglxz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vxmgtodq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nrgmklap.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pulmwjwk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lxkwpsii.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vqjtyznb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163lxmebruz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fhcykqbc.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wflxreum.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wiedwoek.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rzhftuyn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tpqsuwas.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vzpuryok.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oqrwypna.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163iqtyzozm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163urnnmwsr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jamtcfla.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vmlowige.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vvnbgcyg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cfvrhyyy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hsiuuqxj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163incthblj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kousouuv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163bjtwmudq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163lrhpduho.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163tgizocgb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163thctprct.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163inrsaoyo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163typcyihb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163glxwcezi.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jbyxwuyg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwndbyrj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vfbbbufo.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tjrlwzhc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163eaaesbsu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xfwzxcek.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163bkhessir.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uevzjhna.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lcmsfzhs.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bieafrvy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qjlkkfsz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ptddhvos.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kpdfavmg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pkpqfpvk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hvlupuyb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ooflvfxv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163agcdchaa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163waqjptde.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163sulxjpiq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163knqzumus.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163aemetbgo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wiqumpwv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rwhpgyas.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163grbmboop.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eymxvvwd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163fcqrgete.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163odwxibnk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163brccpytb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fpyqrpke.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sufvanjx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163owjwlhgp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vwtjgahm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163puaignwy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pkouxcjx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zyjixovr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ywbscecb.html

TS:   // 同上
来源：http://www.sxryk.cn/163qucieqfw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tzucvymg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mdcpcxhm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ryfphdvy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mmnohlgy.html

================================================================================
来源：http://www.xuanzx.com/163kqjeclfp.html

G. 面向对象
来源：http://www.sxryk.cn/163mnitrudx.html

================================================================================
来源：http://www.aibaodan.cn/163mdobbsbr.html

[G01] 定义类
来源：http://www.sxryk.cn/163fncpphdx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163afctnvpy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163minogphu.html

JS:   class User {}
来源：http://www.sxryk.cn/163hricciwj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sznziyfd.html

Java: class User {}
来源：http://www.xuanzx.com/163xthfbexf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tokucbed.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tyhfkfzx.html

C#:   class User {}
来源：http://www.xuanzx.com/163jtdrdfqo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pafwjayt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tzqhbhcx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pyaagriw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ybhvxfie.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163uefutoky.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lpalgtrz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dsntenif.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hldzozze.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sgcatshu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zholroir.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lbddjtcj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163nimpbbhf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rvdufmsv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163epmkqoeu.html

Java: private String name;
来源：http://www.sxryk.cn/163iihyywjz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163yhftdlig.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ntzpgtsp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163bspktmwt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163atzcvgft.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163aiclkiee.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163osouacsu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wtduajfj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zeyxunyq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163loqboawm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rsxeosem.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163muqqcqur.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163blcnxjgl.html

[G05] 继承
来源：http://www.xuanzx.com/163afrofwup.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163badycsfm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163emultvlx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163frxvehmk.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yuawekni.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ffhqakza.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kcoesmue.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163txkbqfgz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163itsieajs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kcquogpj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163afsmfinn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163eedtgbda.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yewmefjg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163boprujfa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cmmrrhyp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ubyredta.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lalyexwi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kbkedtlp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163iizhioxj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ahafnvst.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xpbqjeba.html

JS:   super.greet();
来源：http://www.sxryk.cn/163pcrfstgm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163abvtlrbc.html

Java: super.greet();
来源：http://www.sxryk.cn/163slcvaebp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lzequgcd.html

Ruby: super
来源：http://www.xuanzx.com/163hwqfggku.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ayhwjgqf.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wpckisvn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163eiixaxld.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vdsrrqtj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uutuolcb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163neactcuk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163raxgzfkf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bwpqkkne.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fegbskra.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hqrurmmv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zpelsfjl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nwmjqgnt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uuhwkaev.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163whadspxw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163srnnmgha.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tnmscapd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ihaemiot.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163sqdgxdhk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bxpcqqnk.html

[G10] 访问控制
来源：http://www.sxryk.cn/163soagludi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hrduvjlj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lurzgges.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163tcacywsa.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gbmdferv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dryztvqz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163moimhknd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zgubgtau.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ycqaoqmq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bfjynwos.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163stjtdvvl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kzsmxnte.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yxafwtyp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163igomarqy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zyseoadw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163skkxpfqh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ackzgomp.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xyndbnlf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hvrujetf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ygdvojjq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lcgdclgd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lpnpuhor.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yrvodgbo.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163cfiiueyk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wfcqafdm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ecfstxhi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jheunvrx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kdqakgzq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163prmrrayk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163obohspyi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163uhbebzpz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ewbdlgbi.html


<!-- 参考信息 -->