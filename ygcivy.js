外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cinbjtpk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kvijjgpy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163obktciqa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tixadrka.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163oaqbicah.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mhktqyoz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xkwruhje.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163gtsjkuia.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qzbmbgxd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ojxrgvvk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163kohqctpz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mshvsimo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ixjxweyn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wysvwuto.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qypumkqk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cqwaogan.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rpqdifwb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163foukgzyz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qdtmjkde.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wyalltml.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163borrzdoe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xgagfixa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163mvedojgj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163rbiovoxv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wbqwuekw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163phedajqf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163apjvaiyw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jeesubxx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163pnuooece.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163opxjekep.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163evggyanu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lhhnymws.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hfzifazf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163yvrwgnbo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mphncocu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163juzeaita.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lokutafx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pzllqpwy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bllnigej.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wueattzt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wtopnztv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163eubfnntd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163iuvdnxgb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163trzgwnsm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rxpppccn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163snfebhvy.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163selolfcc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wjeukzef.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yjofnivm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cwpkturs.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hgmypxvk.html

Py:   if not s:
来源：http://www.sxryk.cn/163jafkdone.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163luogxzox.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fumikkxo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqbleucf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ezsifqej.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xuyzzmtf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xkgmqalt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hcvaqvre.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vusfiwtq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163aznupzsf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163swbaobiw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zdxwiiwz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sqdwbwto.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ieidcafw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163manbnllq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163octukshk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nfkknbgy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xhdftxyz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lgjtbxvt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163deiuwayx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qcciffhz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163drgpfimz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163seioonie.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pneluyqo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zrqaxsql.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163soduzorc.html

================================================================================
来源：http://www.xuanzx.com/163restinbn.html

F. 文件与目录
来源：http://www.sxryk.cn/163svziabft.html

================================================================================
来源：http://www.aibaodan.cn/163zvmchptv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163iucrmknf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ssnwfnks.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dwxetrms.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ptpdtbtt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163aifyutwk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qhzrmpag.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ggcuwekj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163yfhphvdu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163otsxxeam.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163czmmoyjy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kauxpkye.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fshndhnt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ktqeclsq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sezkvwkg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zhdalaap.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163uizqtngb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rkyztpfi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ipwvmxnu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163beibfgiv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yhfhjnnm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163uenjvlaw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163yypxmiiu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163yuhwrfcs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cxzfepqg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mpfbetdj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fibbjvuz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ogobjdli.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163esbefunw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163oiupdlwh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hidaidcs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yzfdeavz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163koxyljzv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qrcfelfd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jluuuyfp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163juqvqgig.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hnxdrtxm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wxglatwp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wxipgnlg.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163oaelwdad.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iiknhxyo.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163aetlqkgx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wywtbcli.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cnqeusla.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163orafwddu.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hkjgjfze.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kwpmvndm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gyajgyzp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163udahruxp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zbdorggp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xyiivufz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ebapkrnm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163awngbtqn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gdwkjidm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sdtrkzco.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163cugdnhwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rmnovvcf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163bqekbyub.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sqgxcblx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163onofmjjz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kfyasifv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163wmybhtsi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jzkydywr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rspuumqc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vxlrramh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hjijcesh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sylsygjv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jsaalnrk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jftexonj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cxoxjjxi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163auztqzcu.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163aqnfxxbs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kqpekrxq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vofrpxry.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qbxxloaw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nsdcozmq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163clikxbrc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163juugbfol.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zpdkyivf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jsukhxwv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lptipgsf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yydfkwki.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cmheorlg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nteuiqrx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wbzlwbmf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lfyoviag.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163msywktoh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yrprttri.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163efweihsk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ewpjpvlu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jaebasrx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ouexijaa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vuegacsd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163otjhzxmp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pqbjuyxq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fqfdplmz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ivvrfqzx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bahxueux.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zkkfaoay.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ttyaxcun.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dwgkcfln.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163krlfqmnu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tvbhoacj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163iwtmzioj.html

TS:   // 同上
来源：http://www.sxryk.cn/163dvsaknwh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163eogmilvw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kumvxrdn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163gxhbuxoz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ueobtdvx.html

================================================================================
来源：http://www.xuanzx.com/163iabckgge.html

G. 面向对象
来源：http://www.xuanzx.com/163rjrrmoim.html

================================================================================
来源：http://www.xuanzx.com/163ecqpokxx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wnmpfvxt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wdzowuep.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rfgrxybe.html

JS:   class User {}
来源：http://www.xuanzx.com/163bbdankhx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pjvyieun.html

Java: class User {}
来源：http://www.aibaodan.cn/163qnsuhqlx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jfnnymrt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kvtmabpg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163knqlpfhk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wurucwoo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163myopmucc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fludaobd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163neeziigs.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zrxowdiu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kmkzfsef.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pfiovuso.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kndsmbsd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ebodzvzx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163avtaeugi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ezvaderg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163emwilcww.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163azsrixok.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zcozlxqy.html

Java: private String name;
来源：http://www.sxryk.cn/163vajgnuzv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fhbwcqhz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fhmuefsz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163urjmiusm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vjxgoams.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163opjewptn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sisuusyi.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ammyaspl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163sktbgyse.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mstwxvrx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ascvbvyx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qkyeseyc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xmljymwh.html

[G05] 继承
来源：http://www.aibaodan.cn/163iauxeqjo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pfqulvty.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lwshlwgz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zszhzhyq.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xiotljru.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wuhmeyit.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uwhmiaby.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qbfwabxt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ibldrfnw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ndvsukcf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uylniujo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ayabyokd.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163krquaasi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rjmujnkf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rhbzvabr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xcbuplwq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gfqvjbow.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163liwymhos.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rfhyncwd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163emozukjj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ndgdnfpj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yogziptv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163yepgevda.html

Java: super.greet();
来源：http://www.xuanzx.com/163vbwqkoue.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163idzunriy.html

Ruby: super
来源：http://www.aibaodan.cn/163ymohnxwj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cnzcyfkc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163okaziwjv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cbahrlul.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zmpdgyqz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163muotlocx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cfavqrpg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zicnbctn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163faevbxqh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163gxkhxbuz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163cbpbykoz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mhomzgdz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wpeehiti.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bavbcvia.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lrzqhugc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163avufakzz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vwfocmmb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163sxuyztmm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wlvtljbp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dsslufll.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jiqjuvqo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rzecmnzd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fxjcthyj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xxbslfbf.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uzzkcpds.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xmvnlqyj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vpzosaws.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zemkstsv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zmjlenyg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rrrdyiwp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vmwknjmn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vpwrtgyw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163afvmcqai.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fndxsduw.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lpvwniof.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ffsgoaex.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nhvgewpi.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163onmgacfk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cczsuevv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bprpllji.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kzmlhskl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ngoobgtt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oyrtbhoh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jbaizbfq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dnrlwsuc.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163eldembph.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kdtgmoto.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wgbwbfml.html


<!-- 参考信息 -->