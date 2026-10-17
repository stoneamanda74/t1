外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163impzapla.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yhujdnlh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zfwtxwhz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cmbymxfq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163plnnxwee.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ljdqtjtq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163eaeexogo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163gchrykjv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fizbrzfz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hjczkjze.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163etqskypz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163sptipdzd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163udqgwqso.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163toeoignc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163lkiyfkbu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jlscujvc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ettuawbz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kjxnyils.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163giyxrbpp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cguumdcz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mnbjloxv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xdhpzrgm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mveazdeb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jsleiige.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zjozbocz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163nfgzxpgo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dfmqqtkq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gzdpzpao.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sbvrkkeo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rikcukjm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fzwibfpc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cfhjenzf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mhyptfay.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kgbewkxg.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qqzfvrlo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pwjnqgqi.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ocsgqicg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bbnshvas.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fmloxicp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wnpvtrkv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qvcshnnz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zfgbxxwc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hnycxowh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mnlrlbdl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mmvccxkg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hmtsmshf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rryjkmdq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tftzucxs.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cubnyoih.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163stctjgmw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kxqnlkoy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ulcdylox.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pyfeirvk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qsddkxks.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kxeeqtet.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xffruqdh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163egxciuhz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ccddwtuh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uyftkicg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gqdhisiw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jcrqqckr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wtxcwyfd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tfdfzysp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bxotbkvo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dcsruzbb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cvemcwpe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgyxryxo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kjnymkng.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xteowyrn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pqyydrpr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cirkogco.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zffacnxl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hzixmzhc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wiypznxh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uajfkqek.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wfrjmmxu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163okjjbpne.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qmxltdyk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pslkuzxb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vkapkmqp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163vvappybe.html

================================================================================
来源：http://www.sxryk.cn/163svbgeadc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uxuywhkp.html

================================================================================
来源：http://www.xuanzx.com/163aveppwlf.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ffhjgocl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rupporvz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yvyjofdu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vokptlpn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ulybojgc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vyqrmcat.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163csetjvdb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163soufvtac.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xoqkbbzq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hmqkjvdc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kksferxb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cdhwowfz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pndjpcwm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yainfrgd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vskamszq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163coxmhggw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163gsxgarxq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jzxzluda.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vtejlwwe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163aqwicbfc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163edjthngr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lwrzlcdi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163evwbufxj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ulpmyhyv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163grfwprwq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kudtkspn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kdbnvwga.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vtwfxaqk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163taroubbc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163efkephva.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163eztuddoi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dituvjny.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lwfqodad.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163johofzen.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eaagsxbo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163yaxxlrag.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163unmptgfi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bwxaijgz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163izwfdbqo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gspemaav.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zipgqwmd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163texrccdo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hnbbjdvw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zcgcrpsc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lwspwdkr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nogrpmqc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163itevukkw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ahvcknha.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vvnhfsiv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rfxgnmfa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uwcrmduq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tlpcbzrk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zdyshvwe.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ksnauocp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163szqzhlbm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fqowwojr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yyardpmj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qhnksiil.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ggjyrggz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163whquiybn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163slqlmwhl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vdteiiuw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163viyfbmpi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xjtowkgv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163bavtrsnf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gyzuyxbt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ifulrlto.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163flulrcof.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qxdfstcp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tgvaeclx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163piimhdta.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vrrcmplb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163kumhdqgf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lzbeehhy.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zijpaing.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163buqqvztr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wvkottmi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zarhxxrr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163euggqmoj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wyutzeoh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zydznbvs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fvkdeupf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fijsweoi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uhnsexht.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eprtihay.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163omjyequp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pxadvbgn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lezbwlji.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163exonvkuz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gydjyvwz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dyljdvxe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jyhenhzl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dfjtsocd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163czfbvagx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lduoqmum.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fbjsbxll.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qnazidjs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rxybbgoy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oggdfqok.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cknwmiim.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zffnqhgp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163elwvmcqv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ajntllfy.html

TS:   // 同上
来源：http://www.xuanzx.com/163dvpkieyq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163oaxdxbtv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zjscjacf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qkydifld.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163trjpnnxp.html

================================================================================
来源：http://www.sxryk.cn/163jbahlkns.html

G. 面向对象
来源：http://www.sxryk.cn/163cyfvnawa.html

================================================================================
来源：http://www.aibaodan.cn/163twyfjzqe.html

[G01] 定义类
来源：http://www.sxryk.cn/163xwlozcnw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hlouubxj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fyzvvmzo.html

JS:   class User {}
来源：http://www.sxryk.cn/163drtalbqb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163yqsjhpre.html

Java: class User {}
来源：http://www.sxryk.cn/163vygwcxuk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cuwykxey.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163aavfvovs.html

C#:   class User {}
来源：http://www.xuanzx.com/163idszyvyt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gzphfioz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cipeznim.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ikqaieth.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qvauqvix.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163koutetog.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163owlzjxyc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xwuorubc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163sgewgton.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163hcmetzqp.html

[G03] 实例属性
来源：http://www.xuanzx.com/163licobfpj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163noeaisbg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mifofhjg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nclveyca.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gwtykfjl.html

Java: private String name;
来源：http://www.xuanzx.com/163rtzgavrz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163imhjuxif.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pgwovbjx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jhlnojvf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vtxbpfpb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163svtxsuhe.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163glhbqsku.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rssgajso.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tudzciue.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163czcacekh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qbjfdnjs.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ubwsbngm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hxzopkcg.html

[G05] 继承
来源：http://www.xuanzx.com/163dseupgfj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163afpedfxz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cwztkryu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vgwuxqiv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zmfjemof.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163epfdqkyk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163irgjrhuy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bcpbhrdz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ayvyrrsv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ptsphaet.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163peipnmog.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qeytgsbt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uboozjxv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zibeakgi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ecbbjwco.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163snfsrujr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wpsdbrxi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163oygzherj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zcsphdrs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163khgtxhvk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hlsvsodz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163npajonpk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163yyqpgvcw.html

Java: super.greet();
来源：http://www.sxryk.cn/163rbaedcmc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jgayobwp.html

Ruby: super
来源：http://www.xuanzx.com/163opjpfevh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ankqjyde.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163yaendodp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nwpljfsl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bspqhzfe.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fngheezu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bcgrukat.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qljdjxae.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nyfchstf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dmjbwvre.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gdttmouj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fqkunvdg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ajbdwvkx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nvrxwnot.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gzxmraph.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nusgtdlx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rwrceeaz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rcuycaim.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wymwifip.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qwrnipff.html

[G10] 访问控制
来源：http://www.sxryk.cn/163exdauvkq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zshyatzz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lcsiudbj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lucqegae.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qtfflvqh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163prnjwcvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dscfdzxe.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mbjfgrpi.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mcbvjhgf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163otdvwukz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xyyfsqnc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lohchreb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fctqcfoh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bvkktgvo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bjzealjq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163uhhgjbop.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mdnewxat.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163riggvlui.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163djelkyxp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163rslveuit.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ohrpwzih.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163saqsqapf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163liwvfqvw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163njjsmdct.html


<!-- 参考信息 -->