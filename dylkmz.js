外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gugwthwa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163gvzhhwae.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163epiiexny.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163syjprpfg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163piebbfjz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lfkjplfd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163siwjfdkq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fvmuscba.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hyoeyfyl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zfjssimr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xhpasfqr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163azdixxvu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nhjdobbi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rceqnvwq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zrmslefg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ypuucimi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mrbmomjy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163avdcbrbo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163uxwfsfoc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163kjxpntif.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gujqykgn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jehhpswl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wmfjfvjd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xtbchkfs.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163swmzgoev.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aofoeoba.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wuqfybtg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163pcttipzt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bugznnap.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yktwflwq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163useaulea.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wedlcutn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zgrlcjbl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mlvttvvw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zdouzywa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ftwzdzns.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mfempbrh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yotctvvd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cwxrlriw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163catfsztt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163egpmvgvj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jjiscpeo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mrnqjmdv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bureurni.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163krsszeuc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ggtsdljp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rhnqmptl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dhftlldy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mvmbkcxx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aivctmui.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qxzplunn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163dywziohz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zkfvvkdq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gdvghlxu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163krfhliev.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tuxowuhs.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hnaowvgi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qyyuuodk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dpordlng.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dryqlhlp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hynrhhkj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163daexlkug.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wuyauosn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vozzghvq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ovscmbfc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163socfzaao.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vqbnlfwp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xbtlppov.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xhoynqbg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dfdozokg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dimhvimf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163myktvwzk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ikjddjww.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lizaucha.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163iuljecqr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xbnxqsjv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163evauhwpb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163paqbkiyz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163plcxgdjs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163btatuxsd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kwcpvvon.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lftvfjtr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163muijgzlj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163afpypddc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zpafezep.html

================================================================================
来源：http://www.xuanzx.com/163orjdciwz.html

F. 文件与目录
来源：http://www.xuanzx.com/163udqvsodr.html

================================================================================
来源：http://www.xuanzx.com/163cfbmkror.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ttapqpvx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fipyzpni.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163drsddiyx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ephygpaf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dctkzygm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bnlqrucp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mjbcxrsn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vrkisgkw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yrgqmtsm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163phhysmuq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ekytoazx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163oqopdxjj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cdxqrjqg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qfijfuyz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qzsfsoya.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163trgoajax.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bjrldrww.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fshfklyq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163slvfsowh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163utttrynv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ciossdcm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hhwayfal.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163voazpbfj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fboeufyt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hwjpgdix.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163heothimc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rhqnzveq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163agbsnpqk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xbqlvqgr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rnmroykd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cgqjqakt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163psegpfdv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ttwbdsyo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kbtucsax.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ecmapjqn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ijcorops.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oyxdgyxg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mdbicgop.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yngfxwev.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pppwmhwm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163deaahwvi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vpxtqafr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kxxvdvtg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163juylscfh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163thazrfjf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cxicpbeq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kwfimhwx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ikkdtiiz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gvcewjtd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wkndqbdw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qakccuat.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tjgfnmsb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mrwfehaw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163crkaofvb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ozgdmyfv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163uoxqtjwj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mnnlitmz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cgqajnze.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eloxbswd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163unbtirbu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163oofwdaml.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yduzfgob.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qizcynjr.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vyuepjyq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163eesyhvfp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fpxedrmh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qltuzcab.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qzpjnizt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ovfspqga.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wqyfarnn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pblxfcak.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ctvjrtvt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163icigiuqj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xtgcpuul.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jsbztdbs.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163atzuhnjk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163levvriuj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fczdlszn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gjahcrzn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ttkifxjh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163svwksjld.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tnccgvad.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163drlxxzph.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cqimuduy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yfzmeuda.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vmjcpgok.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jufjsqex.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gpxcjvht.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163plfpiqrv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tksbttro.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uyfibmji.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163unxkixqy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ahoajwjx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lwfebnix.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hctmujha.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163layfxsvj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163raehviva.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qjhoxldi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sxjgwfwe.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163znocibzo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rptxperq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vtklsnjd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dhvwdkic.html

TS:   // 同上
来源：http://www.sxryk.cn/163iimjekhk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163iidilqma.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ifnkpkvq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ofzupryj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kfbsuuam.html

================================================================================
来源：http://www.xuanzx.com/163fpspmdpf.html

G. 面向对象
来源：http://www.sxryk.cn/163xjkkvuum.html

================================================================================
来源：http://www.sxryk.cn/163ertiffmb.html

[G01] 定义类
来源：http://www.xuanzx.com/163lobmixhb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zwmuuqzz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163reojzrre.html

JS:   class User {}
来源：http://www.sxryk.cn/163fljumwgi.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163axtxifxc.html

Java: class User {}
来源：http://www.xuanzx.com/163wefsocdr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163eejgpmkv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uxlxkebq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jirgyyml.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bohxpidg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nbkhqmrv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163whniaddx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163agewszmd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hyecjamg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jpaqstoh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ryjzsuwq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163iuvisddd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163iuuyoaiy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rsidknzl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163evlgpipt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qstqpbgw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cwavrytu.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163sivcpsjj.html

Java: private String name;
来源：http://www.sxryk.cn/163xcvyfasf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gwrvqedg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vdzivjny.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163adegyvee.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gdppzcql.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163koyxylgt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gwejpdtq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163znkuuyik.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163sjlrhvqu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xwilubis.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163bbdgkqpy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163srzexnxe.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kuqetcga.html

[G05] 继承
来源：http://www.sxryk.cn/163oyqslfaj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ovilkeuh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163daxkcugt.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cnxuwiil.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163djchwauu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163twgkgdxw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163yuxjcbgn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ntnnjzlc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ztmfedoc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wyxvjdzy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tvdihrmu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wrugoqly.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bxcrdyda.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gzasqgfl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163brgahnyw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ngxxhrhk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jqmbvmdq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163suquiian.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uubpdunu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dleldwjw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163okwipved.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nhvvxbel.html

TS:   super.greet();
来源：http://www.xuanzx.com/163supibksi.html

Java: super.greet();
来源：http://www.xuanzx.com/163xrrgwokm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tavdcvjj.html

Ruby: super
来源：http://www.sxryk.cn/163rrbxaixx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jxrvmoil.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aujriefl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kzxebsie.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kvbiuehp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pcucuvdq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163glosgkng.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163duocztdk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163aghurjhv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wqdkvjer.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163grkvmkvk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ruexntuz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163icczkmua.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ifhihdnc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hkxcocuo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163uexiyvuo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ceehjkfo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ckspriyr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rywzumto.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fipudbbf.html

[G10] 访问控制
来源：http://www.xuanzx.com/163svtdovix.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zggqvzmu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163bplpjjjd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163amxqnnrt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163grvghqfn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ksxofivt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nudtauqo.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lkihytqh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yejjjaee.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ikotsdcs.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uyuxomcy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uxcngfvd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hrtrjcbp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163eioivrwd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163eprmutoo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163arjaumzt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fpzxmngn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dovfawip.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vztqtfmq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163yegeknne.html


<!-- 参考信息 -->