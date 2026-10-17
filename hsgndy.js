外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qjytxyyw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163wzlvwjkb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pdlnbipv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wpiyoehv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hirimblr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ocpeywyb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ikdfyxzs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fjtffpec.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xpnqmiho.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163yoadsmne.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wpekkeip.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163iokwtgog.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qpyqkwmk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163duwigxqg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kemoztmn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ulqrqwxy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lhplkxrq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163avvccqwn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fjbgruup.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hprrkbex.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cxvyyqgv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qecigpox.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yfvgsujm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qytdnhnu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zlbzhtan.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jmddogoq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kezymwxp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yzvmvtmf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wngitmwf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ufpuoqel.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gagxiuvx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mzqnyfmz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163crbiljwr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wzpczycq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qohqafab.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eukewwud.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zmlibowc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163opmlfxyd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kibxvzgm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163trwlmssy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jyxtegym.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pgfsfyhe.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ztkqwzhh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rmtdjsju.html

Ruby: s.lines
来源：http://www.xuanzx.com/163yosbwrux.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ylpkholo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qaqjvobr.html

Py:   if not s:
来源：http://www.sxryk.cn/163ormdvgwm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ulgfpzxf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163deemebwi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wwhvwotq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tfsksycf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ejsfnclw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ynvjtqkf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wvcboohd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mggdkapi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wpzbhfup.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xeiezpbt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dnmvxrbn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tcgnxjpc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ymopsnpd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ltgvjclv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pzuezvfp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zytssoiz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cisajqpz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nsfssubl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163teinlmui.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163toevzvmg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eqdpmwmr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mfclmwih.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163noyvlfib.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nuvkpiea.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pgyrmhzl.html

================================================================================
来源：http://www.aibaodan.cn/163fhrqtgyr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163glphgqya.html

================================================================================
来源：http://www.aibaodan.cn/163eozwtlha.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rywpuryu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dmxprrig.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lgncifub.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qvohbisp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ynsnflhv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gizxbmly.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zarqulje.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wefkvrva.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lozmikqh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iqmrwtoi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zaetsqwx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163aprynexu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kcyaomcv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mpyjydyv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163diylgmzy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fgvekuwf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163diymgrzb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rhrgzdzv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xdqsonoy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lhqbjlur.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163huostffz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dkkxsfan.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ntxiclpb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163weztngvk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nduagugy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163eotntnfz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163yxmmepcz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dsbitjrm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nezulrob.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zxygxczb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yqgxlokt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yfgbcnng.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mavjkewj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wqkiheqg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163mvzahujs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163iugmpqjf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xwkarixc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163gzexknai.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fdbiyuqv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qwxpfacg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rmzbrbzq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mprrbnej.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ateusuoo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163cejpdgsn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fuyazssf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vjqryuak.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sfqfqhhr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qdernjwz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163sfjbwpwe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xwcabfcw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qpywgfsk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ptoyqtip.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zwbxfnvx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yydpdyio.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wtygdvhy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163abdmvmqd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qvyxkrla.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qgvtamdy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cdhvaoyu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163aryelsai.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qegkqsfn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mirwztrg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mkcfdgbp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rbdxwvdy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fnxfnwrw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163moqlcpir.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hlqwbelx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vqkbhxpt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fizxvbep.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qwxkbrnx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xlxewrrd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tmvvbylr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ymnkidcd.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qqnwvnbq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ddxnpagq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163useysdeg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163serckxnj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gnrvszxt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wpvfoxnq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163arngkopw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ooznlxmu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163iksflqgj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wqdpupxn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qobejrrq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zdjicxpi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hroqcxhw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ldgmmeaj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bbzlimtl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hgyvkylb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mxczcnrm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ulurawgj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jijsqmsj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mkmimobc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pmmrnfjz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163byfdhkum.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163pjdrkkmi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oybnuvml.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fkzyrkqr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nebzhieu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bwqebryu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163cpuvlodw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zvnvqvtq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rqarqswr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wzfjvlqh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163swhsdgbi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163adyknyin.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ekbaifkj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163lexdvzip.html

================================================================================
来源：http://www.xuanzx.com/163efucfgud.html

G. 面向对象
来源：http://www.sxryk.cn/163ggsdwmpi.html

================================================================================
来源：http://www.xuanzx.com/163gfkbtiwb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xhozbqao.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kuuzqkrc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jxzisaln.html

JS:   class User {}
来源：http://www.sxryk.cn/163efwnzdnv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gzhlatht.html

Java: class User {}
来源：http://www.sxryk.cn/163jgxnsqpd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wezrwabq.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bfwxkzeb.html

C#:   class User {}
来源：http://www.sxryk.cn/163ydwtdugs.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wayenndi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zozpgknh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iyykijgd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wxlhanly.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163amydtete.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wcquwjcg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mfxpsqtg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pfavddpp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163tznunrye.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zczeetmf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kjglwxas.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jfzxubiq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ojiiwlof.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163okkzpugk.html

Java: private String name;
来源：http://www.aibaodan.cn/163qlklplni.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wlrnguga.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163twpmluzn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xpmcslud.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tvuunkui.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hjzueers.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kdouqypl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ipocgdnq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rfiwejgt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jzlkbxdp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163djxkoera.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163khrothks.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163guyatidy.html

[G05] 继承
来源：http://www.sxryk.cn/163yklrgcrk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ishcombf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163sdgaofci.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kzjggqsr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163spwmkhgo.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iggvmeic.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163dzhzjbyx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lhjyvndz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gxugbuxc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dsjnqadb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gubihaoc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iutqeiuw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qgkydcwx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wjbceujw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yjvekzyo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qvhszwvo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163iozieuig.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163imyyuerl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163izckuhyz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mqcmbkle.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163evdrjdbc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mrtgaggv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lqpfqbpp.html

Java: super.greet();
来源：http://www.sxryk.cn/163ftyoqawk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163pwfeyagg.html

Ruby: super
来源：http://www.xuanzx.com/163rfxuaulp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dgvwshzy.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qdodjphm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ebusgyob.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hdwfnpvj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gifhfcws.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163djhkizdc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163oahgrvsz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ptcihtpa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jykcmvny.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gzkfbfke.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qeqepyai.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yhxcxeby.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ubvmrcrq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163npfcjmse.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ugvkmqmc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pyopfnyy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ppnvghtj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jvjogbwp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163busksnmi.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mimwijlc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163elodcdqy.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jnbnftdk.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pyforrew.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oqviuvoy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pgalqlkg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pwmdevfz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nqasxuzd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163epinxcjg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rlekoswg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ytpleapa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kolvlarj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ukenisha.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163adsxsdwg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jfqugxfk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163oslnuhdq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wixmtygu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mgqtstpg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uaiqavps.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nzktiihx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mscavxdp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bzbfxkts.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ctkwtyml.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yfyymntr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tqjmpqes.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rusyvogp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163omqxwjku.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zcexszqj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wtftzafw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pqulfvan.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163majqmpeq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uelnmctg.html


<!-- 参考信息 -->