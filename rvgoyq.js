外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163onsltrmb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163onerhwma.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rwdixkyw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ydrrdnma.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163llfarauh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163avpmncnv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bslcsejo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163dijssgzn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163blaoeapu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163unytdyjy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163jwswvrrh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fsedzssw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163psifrbrl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gndffrbk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mtzitvoh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rcmglmrk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tggnqlmi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qfhnxyyx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jumimitk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nbcdwddq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bhodkesm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ufffdcbd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163otmxmbdu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163cwkwwquo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gndczcex.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wicjfzgp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ukjaiqap.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kfewrsik.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163swfuqdzt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hancxirt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jfalcbwh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163homswarp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qblkyemy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163iaorhpxv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163yuhvmudo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kayikzrg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ipgsctem.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xhebbslg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vowdccxs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bovylnlp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qcalhqhj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163tukasbwu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kkxnuzat.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163olyahmqn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163whrvprrm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xcibvtmi.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163brmyaawo.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xdqkfpid.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ghxxgoqb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wlixtnnx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163xjugltyj.html

Py:   if not s:
来源：http://www.xuanzx.com/163xbfzzzbs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ujcvjulu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ruspqyso.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pttrzshk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lszhobjw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fkyqdnpq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uvnbjfoz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ohhbdjbo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qscjiqcg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ehbvmkoa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163eeulbvqu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dhyyxyvu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jtalljbj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kpryqcfj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ejfpcaze.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163huncshbo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163omnzvujm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ezaijsik.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lifeggcd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gtqeuvzt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163umgftrbt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rkblzugw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163veepftfj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dhleglfn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nxaqfyzo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rxakscje.html

================================================================================
来源：http://www.aibaodan.cn/163kbvdaxul.html

F. 文件与目录
来源：http://www.sxryk.cn/163qoacjieg.html

================================================================================
来源：http://www.sxryk.cn/163qjujdpeu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fxfbgeke.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kgwcbjja.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163marfmvws.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ygsgtziw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yfukbhwy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yxwfufsm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ucxsftwv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bjmcwzid.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xehsaqjq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ssxnxxnb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wnsnitla.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wlevfgcz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163igrlkgtu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163sjxwryds.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nrkqnphd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nlaxczmh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zklrzxtj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hibbzwul.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vbpzfhmr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163btfuetpq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nrxmoqfh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dufkuoer.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iwgnyytb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163sqtxflby.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ehlagrjf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ombbtbhg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ihaaiqwm.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163uotbjgph.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ukbhmedj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ynsojenl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eqjmvivn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ycrdqgbf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163fbzujjwy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dklduxxi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gqujwvgu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cdkzbclp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tnrzflku.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163urlxvqlr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163veekjvkl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wqibhamk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yveaboji.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybbuchgo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163giosylmh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vrygfohe.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uylutnbf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rfnnelbn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nouoikyc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163fxvlqfki.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qhrogxfp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fkkzdzsn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jpfcnphv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cbbyrnrm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nrysftat.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dryhsmwm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gukjawyf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sfhcutax.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qfcyhdxy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163irhkthfh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163prpxnzwb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163elgsftry.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kibzxoxo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qftziggx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bpaspqlt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hgvixqxe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wreljilm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163nrxxlafd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zhhngtio.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gdhmkcmp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cddmjfbb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tyybgwjv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163iluvpfps.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wwsaaogw.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163nyzirzbr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dythelpd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163aifnrufg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jdyhunwc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163njuqwfeb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bstwvpag.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163iwthoayf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wzmvtxwn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mjidrwvf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wnqdmtcg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gvyxfsuu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rrluygop.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hlxkipga.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163prvvjxgj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jcpnolnf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163jtugyjtj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bkxtsgra.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163roylykcg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ncaydytv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vpfcnszp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pmltmbaz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wansiutl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jkfqudmh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vgbbivou.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dlqktilu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163chttuxrn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qghtgeso.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wpfidklk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wqtuncjr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kuneysjn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xewflyxg.html

TS:   // 同上
来源：http://www.xuanzx.com/163qudrhgjd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ejkrcadi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kbihhdvp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163libzksab.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163stdchoqw.html

================================================================================
来源：http://www.sxryk.cn/163lpvbrnbh.html

G. 面向对象
来源：http://www.sxryk.cn/163etpnacmm.html

================================================================================
来源：http://www.aibaodan.cn/163bqgjfehu.html

[G01] 定义类
来源：http://www.xuanzx.com/163uvytknlc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163urprsrji.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yletbvvu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nhmmntes.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rxchcvnn.html

Java: class User {}
来源：http://www.aibaodan.cn/163ebesefuy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163irqmnojc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wobteznq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163oqonnhbn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tubklxtc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vhsmavso.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163uhsceilf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rvinxtyb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qdfazwsa.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vmusjjpc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pcdaswmm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163muchutbc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gacadbqn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163yhjvsgjf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tpncfzxh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vnhpadaj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mtbfkorx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qkaztdwd.html

Java: private String name;
来源：http://www.sxryk.cn/163eakkumji.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ubheamsj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tguayyte.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163maxyapmv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ffxmpsga.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zwoawjdy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wcjfvgla.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bywzdvav.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zylcihxr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163illxtonc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163axhlyurr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fmoinqsv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ozrgwuxw.html

[G05] 继承
来源：http://www.xuanzx.com/163vmqgoyrs.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gfipmzye.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163knswqtll.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hzjafsde.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vbznmewb.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rjjlkust.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hioedgzz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wivhclsu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wyygeepb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yaqftdsx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jmhszulc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iwvebxzi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163cagkxabx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yohwoapu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bfvdxsak.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ekwrehzd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cqrdmnbw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mbwwxfaj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163asxpwosz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jejzkmvg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163harvajjb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hhxdpfow.html

TS:   super.greet();
来源：http://www.xuanzx.com/163emzjalvz.html

Java: super.greet();
来源：http://www.xuanzx.com/163foyoafkg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163bluhvmni.html

Ruby: super
来源：http://www.sxryk.cn/163xlsovcbs.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vmkwqddl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uicesnib.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tvbtyrwp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zcglzpxa.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163afcqnfer.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163eyoglliq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vbpziqla.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mgxpruxh.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ydfodsxe.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tjfzftyc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tiezwucf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qajxyixc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163zdxruhau.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wnbfvgwr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qjzxfjsf.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wsrxecxm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163rvawmonm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rguunceh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163igogqgam.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ukdxdmlb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163iaoeqvsp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rsmokalf.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vugplpmy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163itthbtpt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163czqnmztb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bqfbrctk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163epuymnnc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hllfrslp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ygaztlgz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lohplici.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wmchidvi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pyszfqon.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jaqtevlm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qcmborns.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ghaobanw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xmsblruk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fakeafhe.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fpaohxal.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nbaqrkgs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163unbpzqbu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vwtxwtua.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163byzegtut.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mmldzltq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qzoucjyv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vdfktudb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jvaawxac.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tdxixhwh.html


<!-- 参考信息 -->