外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zpxbxzkz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163buciybqo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163oxuuvehs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gigrozgx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ysfrdbsr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xphvuyca.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163fvpdpjsu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163seuwtkyr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ckfeniaw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163evbfbhwc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xueyfgtz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xbnygccz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xuoepane.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wkwuixcb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ksrkoprq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163uugwnkjt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wvjdbyvi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ysgimxde.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bchnpdek.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163djuwgjnh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ujzdnnjq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ipibqujb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fakdnsfz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gagwmeea.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163espwhvvf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gzojcego.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dqamxcqi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163mmsahyqu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163adejjsff.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163pcdkmqbw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hxwbgofl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163abhpwrjm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dphpnkdy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ynyfpnay.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mzspgsjd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qqzbsrmo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rfcsmmmo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163acoftolu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rgpszkgx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163dzifnhoa.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yrzfdprf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qwceiduy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lifkgmxs.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bluduhce.html

Ruby: s.lines
来源：http://www.xuanzx.com/163naqbzdhh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163anfyodnp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zmsscgcw.html

Py:   if not s:
来源：http://www.sxryk.cn/163dfddpots.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zznnwvtl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zyhuxgar.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jmpqener.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ehxpscfj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163aqjvnsmk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163iuycqoef.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163knprdsoo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uucbpunv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ujqrfbxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163yymrjica.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ccxnwcxo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ktjpnwtk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gnmewzil.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163sbrkmekd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rddlxpfh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ilgiizki.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163skvkbggk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163egidpzcu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rxmnflir.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mnkzjuqj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oetvejdk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lehvlrsl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fbfiaizd.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cjgjzcrs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gtotputy.html

================================================================================
来源：http://www.aibaodan.cn/163ifjhtrzl.html

F. 文件与目录
来源：http://www.xuanzx.com/163ggydhqqf.html

================================================================================
来源：http://www.xuanzx.com/163xmushsxs.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ilclqzxq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nbeddcyk.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cwqyfcxa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163akycbocj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bcivakbf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xmpsnvlw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163svbrcfbv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163axyuemey.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jylpnwlx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jbwzxnad.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163coxexkyr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163iksrhihl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gscubzih.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zsigkfhr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uhxzxcae.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163oqbympme.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163iimrssek.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zhlngzhf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163otzgljmu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nbempjtt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163iendqeje.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163snwjwkrk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163behpogva.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163felrjcfe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163awjlncse.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lkozaxme.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163aespwktz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163arqnlpkv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ifccwvac.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bgwmeuhr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163eysjlrql.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tnnhfnpx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wgxizkze.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mvrzuesl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hmvvtbci.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gipwileo.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iaqkmzpm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nmmbdktl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lmvewzbl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rxhcinmx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mruhnzax.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163liymwhvo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zcedtafe.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ekxutmml.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163slhmhjci.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fnxopolb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mnkmmcwu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lvxjxdgw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pbmwupeq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vwiggrcf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fcmvklte.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163oqlrtuma.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163naxsxxgm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ovsqrpwp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pfuizfxg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163grphxyzw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163afwimdrh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nqitnrnp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bshrnjtb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yjvbwsci.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mpsmylht.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qbpeknas.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163iufevdtz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yrvbleku.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163lkhtuure.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xysruwfl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hhikudot.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nyidgidc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163whfrdntm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bmpzorau.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uzmmywmz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163iiebxack.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qcspawiy.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xlotsnbi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163uzhwkcrr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163boukhzee.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wmpldits.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163njyphbjj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hjjppcal.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163obkdagde.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ihfmozix.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tmqphitb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jfzyfccm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yzigbysd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ibrqdnio.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zfjyfjmm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ljxoxhqj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pidwpjwm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nvijhmro.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hkumkpkn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xwzjchfh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oqxhaqfq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mqjpbfdz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vylbfcgq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ozqalvir.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ztmvmqem.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nwkdcovp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fadycpli.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mvqwcntg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163woccieva.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wqsdykro.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ohslfnjb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wsqgcrlh.html

TS:   // 同上
来源：http://www.sxryk.cn/163qkoctnun.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fmaqyeqc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mhazysoh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fkjpshpb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163jakdkxhf.html

================================================================================
来源：http://www.xuanzx.com/163yauqrhqw.html

G. 面向对象
来源：http://www.aibaodan.cn/163lswscdjt.html

================================================================================
来源：http://www.aibaodan.cn/163nclbsigx.html

[G01] 定义类
来源：http://www.xuanzx.com/163panvtpoc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bvwtdygv.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163umgodlaq.html

JS:   class User {}
来源：http://www.sxryk.cn/163jljodnnb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cfwuogke.html

Java: class User {}
来源：http://www.sxryk.cn/163fzcriwnz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wfxqtbuy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dsovsipi.html

C#:   class User {}
来源：http://www.sxryk.cn/163bbgcwxgh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163htyckxix.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tjfeilmg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163yfywkwyz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163shvwakbr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163okbacomd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163npqcjzhl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ngmndnqg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bbjrnikm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sbeteasa.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fwanrlsj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fwopvepo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vywwtywq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lsrkgqdi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fsdhhjyc.html

Java: private String name;
来源：http://www.aibaodan.cn/163ptqoxpzw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pbppcamw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cimqqkyb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vwvmcoof.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lgtjpbyz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jqumyosb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ysudbias.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163jemnnnht.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kcknwrzc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rpwakria.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gnytyror.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163mxifqgxf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163bkfstveg.html

[G05] 继承
来源：http://www.sxryk.cn/163nncjkebq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fqxoauaq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163edmehoci.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dlrejing.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163squusvba.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qbmkwani.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pclxlxyd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ikwbmlek.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jeizpfly.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kymzertl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hncuiyko.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mzskyknn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vlrwyteo.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aghzjifl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163utzchbth.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rapdtfay.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ykdbnneh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163yscisssr.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163bogegkpc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163howfxduv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qproszkf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zjhcdjhi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jnzhejwp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163hyjtitdm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lurqgrol.html

Ruby: super
来源：http://www.sxryk.cn/163zzpplcnk.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163murvcmne.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163mhmfwmii.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qstukczb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163szdieaks.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kqrisjmk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163yirgovxa.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xtsnfujo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rlpqcecb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ottlnqka.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163miumkmjx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rdyadohg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163olnrwsmu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zrtvpafs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163egazctmn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163obnshuel.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zkcuzrtg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jpqmikdt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hzwmworo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163olapqixy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vqwwcuvz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jwbcvpxy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qikyjaiy.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vyowugrm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hrqjlijk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zpxugeti.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163typowcsf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cjyalnjw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wxegcilh.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163apbiojsk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vtzlhdql.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163czikxfjb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jtmugwdu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163fqqjjbtu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uzqwkzwy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hfhnyhks.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lcbpjusd.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fzkibvul.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yodqhuzu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lgiwmvqw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gmthezfr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gntkbkkn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jvomwofq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163smpuaznq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yuocfjmt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ycycwokz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eogsigzq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163jexnkrxm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jikjevuy.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hkrdbtiu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163acqyjmbj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tnztozpe.html


<!-- 参考信息 -->