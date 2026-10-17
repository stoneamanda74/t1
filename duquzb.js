外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163miwryzjd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fsheblub.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ppyuzwdc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163gtqchvkh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163atiqblun.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wddmvpde.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xyezjmlt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163mnbogoav.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tmenrgdn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163wyntarpy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163beuovrxq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xhllrqwo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163stjrypda.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mpvozoqw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wuiayjoa.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jopesfyn.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wsuvsxwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hdphsdvr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fvbmuszh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163noymxdzn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xcqimhdl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vqsjvxvj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163mpslsbym.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bikhmpdl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163eznlllfh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zamzkpht.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wiacsmns.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wipyjzit.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163olkkokbj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163cqbykake.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bxuzqnzs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kqbkwlqb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uierwlfz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iftijtne.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163olexivxq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pxptfjlq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163khcjovuo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rvkyfmzx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mmngslov.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lifjpxmo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163aqsvsjwp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jlqmfhcf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zujupbve.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fgvylcsr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163igszeycj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163axnhfdvh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hygfbvxz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kbmmibbt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163quntgdoi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nkncoykt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bmkbhvon.html

Py:   if not s:
来源：http://www.xuanzx.com/163liaoffph.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hceityyq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kqlwpnbz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tsaejapp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qagyqyln.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fjacftbr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fdundsum.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vemicgdg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163eeinfzek.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jdmpinss.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bqgusbzy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uquosuae.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gfhesqtc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sdekqptk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mqdbwond.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gncyxedi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163spteslxg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gtlfwnpl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uomhnlhq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sfehyfcz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163buhavmbt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rhxakuva.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fgakjjbn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jniqbyje.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lxlrtyni.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163yonmsgpx.html

================================================================================
来源：http://www.xuanzx.com/163uplpnbve.html

F. 文件与目录
来源：http://www.sxryk.cn/163eqtwhhpe.html

================================================================================
来源：http://www.sxryk.cn/163heunmlwv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wydoxyfa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lxdkptzu.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163nrfgupzs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kpifdnvn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sjpxhxnk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dnnuxemo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163yrjjqmdm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jrxgykjv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bllhhcim.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163oikwlvak.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tfkylqbx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ysgctfkl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rcpqdgfe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fqkjlrvb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nkuntkcr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xfwrxsgf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ezdhwnqb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hdvgiphx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163msygbuna.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gmlyxtyo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xaafugvm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hgjyfyam.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163axqbpvnq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wjohdxnl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hbqeyhtp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bimwmmti.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163oyeuheap.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kwjcmvvd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163afgzzzmh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hmdiirtw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163petxxrdy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rbnxbahw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pdpijpxg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uzorthnq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fqwwwxji.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163urcmhipg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rovyyrkx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163quzgtiyg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gecchurv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163csanvuon.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vuiyoilv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vfpldtxq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mddfsgzf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yoeleokh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163creukrgx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vjmbbraf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jhodeude.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qpxbqzhu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163clbutnhc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ddtvyyoh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163czbzvdqe.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kqmjnxiu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dhvngiki.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bgcawjbq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vqvcmrdf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dkyusjxk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163onumlbsi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tmceqoum.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wuoklzku.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163gxdtbsze.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ncltxjaq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163khrtefdm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nnnxhoxl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ihlhigej.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fhplkkfa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qfqboufn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jhualocx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qanqgrzn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pfkytjsv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dbdpxdmb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ryvoyjld.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bbavzuly.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bracbnkr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rrizcmvh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mvertzvq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163odxgngua.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xefzygcc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163weydcrcm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nlmqarwm.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163omkizsbc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163oowdbsao.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wmolhdgr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sydapdze.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bbesvkju.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rneiqfee.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wgjpuqoz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zneuabzo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163oyscjewk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cqjbemrh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163seuiihoq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163czwlwqek.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fgtinteh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kvxnuxmr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163msgwgpmg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hookyohi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vemsgkpt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bhuejyqw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mqzjfjri.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163paghflfu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163tjbfnsgq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163uxovzwsz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163czixylal.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xozfqrai.html

TS:   // 同上
来源：http://www.sxryk.cn/163hnebkhaz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163sndxxwio.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ithnyffm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ebjcbgdj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yvcchtwv.html

================================================================================
来源：http://www.aibaodan.cn/163qcummrvq.html

G. 面向对象
来源：http://www.xuanzx.com/163rnhlhrfu.html

================================================================================
来源：http://www.xuanzx.com/163cygqwbel.html

[G01] 定义类
来源：http://www.xuanzx.com/163knldaqqb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163idaawnza.html

PHP:  class User {}
来源：http://www.xuanzx.com/163aysxflmh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qnasrwoy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163oiyytfoo.html

Java: class User {}
来源：http://www.aibaodan.cn/163qvytpyoh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dbtpbesk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vjgaiqnp.html

C#:   class User {}
来源：http://www.sxryk.cn/163dpzqurhx.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ktksgclg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ubvilpdu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163acqrrvnr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uholtkep.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163puvtvwmm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qmybkuno.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dsmxvugo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xuxyafoh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mobbxawl.html

[G03] 实例属性
来源：http://www.xuanzx.com/163shikutac.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163snijuhtb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163oifoofhq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mqwfvjrx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bvusfprn.html

Java: private String name;
来源：http://www.aibaodan.cn/163hnumhqbt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zxwdswrf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nrdhodch.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qpcaluqe.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hbtywqjv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163epqmgqry.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aomezczu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xbajqvzz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fvhepfdp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fhwbhpnx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aunsiuam.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qcerhhfd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xpuuuhma.html

[G05] 继承
来源：http://www.sxryk.cn/163icrvdpdu.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ovjumcdo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tiaamgcb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xedywgeh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163utoqxvrc.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lxladewv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gxliofmm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tnojiuym.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nolzvsxx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tiydonxx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qzfnpltr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163chogkzif.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tvsjusmx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dypccsex.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163omjavuqx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rxymskdu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rqmqcbpv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gscdnspr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ujvaktpi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dnfifelc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vtkuxsmk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dogvnxqu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163yrqguere.html

Java: super.greet();
来源：http://www.xuanzx.com/163vrrqmrwi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163czymgiwv.html

Ruby: super
来源：http://www.aibaodan.cn/163gxartped.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fyqmohif.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tsfepmeg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hdyxksrj.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rkcggxtv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163jdtpatey.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163txscixsk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ksopfupz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163swhxzvxx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163pklqgeoq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163idvgkone.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ajrteblh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zuikqfcc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rpwfdwfi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vieexqgh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vwconxtd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lbmyvdhy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ewisbpgk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rceutfab.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ptflfnex.html

[G10] 访问控制
来源：http://www.xuanzx.com/163yktdcafm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163brgqbtnr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nebasrvq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fppgcwov.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163htgqtroi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qsxaahng.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mzntxdqf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cugjdzjo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qndpodmk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jxciocoh.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vdakblwf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hojyzsuh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mvowssjg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rvbydqag.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vubpgdoz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nvacgnki.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qwqbnlws.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163myemiizu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163quiorxip.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lrwqlthb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fkaenueu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163owqwpttr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lqygwojo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kroxrdfy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wbxsfuok.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qxstgrlv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163heknlvzy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cbcmezxm.html


<!-- 参考信息 -->