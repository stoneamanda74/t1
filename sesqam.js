外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kvuunjhu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163owngjnuz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uusrocfs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mwwtnpsf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bnynourw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cduwkknr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wppeoorb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tkfgzswo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gkcpjaaq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163daerxnfd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zphlaitg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zjplkysb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jiaqcvwx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gnueccus.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163akxunqwj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ugqafaxv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163luflynah.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uypfnerz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rrjuraei.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zxsxpszn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163zfaheiml.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gixhsoyf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ebdmacob.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wlnpcjtq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xtqsxhfa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ntsfckex.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ouwlvtcq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163glwqsvpt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tvqgjwhz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163axqtzrnl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bojewekb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hfxzhezw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163unhsctmf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fqaizgca.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163didzqqqb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cwmnzihp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ttuhbcxh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dkxpuspk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lcaewdqf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163joqyiylx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uykdaacy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fzbebdkh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163aetueige.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tghnrtgl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wijqcekh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163yyjjwxkr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uknnzqet.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lbcugdsc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nnmepbvr.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hwjhjcpe.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qsrxtnjs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163pvlujvse.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fyhksfel.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wlilssmy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qcexrdjr.html

Py:   if not s:
来源：http://www.xuanzx.com/163jcmnggxh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ksfvytvx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163mtmrbxce.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tpbwqlfl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vhfbgsye.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nfyeirao.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163scsclqnr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fndbtvqo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zhmsrkyx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ombdgerl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163nvxavtng.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sxmiucuc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kmvskgyk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lxnlchro.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ovjrairy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uunyixhu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dphmlhly.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yqazriqo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163imtremlk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163oulxvpsu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xvogubpy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lexxuoxs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gjozwfsr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163iomaxtcr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xakfdszu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lxtlsiqk.html

================================================================================
来源：http://www.aibaodan.cn/163rawiocmg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lihsebhx.html

================================================================================
来源：http://www.sxryk.cn/163wdowzsst.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pqwzhzhe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rlyacrqh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dpkpopcu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kbdozbrc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sfhcfpsa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hfdiqcxr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ibgrcstq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nrtmbyir.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hyjlydjm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163svvgzmma.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lybqrtvu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vawsjxqi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zgbabrrl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hrgkunvp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bdurnqox.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163welowmzj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cazysdqh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vlktumzc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hswveqff.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vsjkroob.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kygidiik.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vzwsflzm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cvsbhmau.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ntuwnxfj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163njcqydcw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163edyudfmu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lasdsmoq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rrctoryj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lvsyuefh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163flosjfrt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pzcijgim.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ubivnnsp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xtggphfk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vpuyhtpk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pmfqviqm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tykgqcvs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bbqewhfq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163glqfdhho.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jxvoxqjw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lkmuaejz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163napuhcvw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tzwcwgmr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vryuelmf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xpxvthxj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163firvkogp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163srxydzgl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ykjmxkxa.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163aqmdpzlp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vlgyursf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ktazxbnn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qajxulqp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163llmowjub.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bahptclr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zjgsgepk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lvazswsl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vsdcelok.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vvfqvhwq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163szpynfps.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yikwwuvi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163prwrjxzh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bmbfbzaa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jhomvmau.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lfwbmqyu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ssoxwtpu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rwfmanqf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qcwlvimx.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nbccidpa.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rpffomai.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163agzvpsck.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163weyllscn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163alfruyxg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hmussinv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xtvynmvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kvhnotbz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rclpzqbk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jiaevnov.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nfnwawhb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ekvfwrgx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zoxoeuel.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rxklwjbq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wuulohdk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163flqwfkri.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163naaikayb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vtjcurmb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vefbbofi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163efaqpboj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fvicrunf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xltgckvf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163njufuqbz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163bfbgjnpl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163krzomjyd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fhhojemz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gvbwfxvw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kxxgyahd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mapwuson.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lcxqmccc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163slxzmwpq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tswhwzuh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nuvrokyp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ocxcbbup.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rpzertdr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vtzqmafp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jmlmfxxn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163teoqqfkm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163clnopdry.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ygewmcvw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tzrsxrld.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163futmbwvu.html

================================================================================
来源：http://www.xuanzx.com/163gaiqhmao.html

G. 面向对象
来源：http://www.sxryk.cn/163awlhccke.html

================================================================================
来源：http://www.aibaodan.cn/163ajgwbylx.html

[G01] 定义类
来源：http://www.sxryk.cn/163irgsadzf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ctgwwfpl.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kziedfyx.html

JS:   class User {}
来源：http://www.xuanzx.com/163svslmwrr.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fqerediv.html

Java: class User {}
来源：http://www.xuanzx.com/163rfiqcxeu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qfqnpxmd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vbmdqyuv.html

C#:   class User {}
来源：http://www.xuanzx.com/163jjqrmdfy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yqamfwcu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gjwwftmj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xbqktdii.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163iuzibecp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aakjfgkx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163tcfvxluk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gscculht.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cndrusos.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nmldhmwm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hoeurcnc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mealofzb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163nzppbmep.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hejbexeb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nopbobde.html

Java: private String name;
来源：http://www.aibaodan.cn/163tnqxxkpp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163arpqtsfw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wxhxtxsu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163siptccga.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xduabiym.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163phcbblwu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ueeialdq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tyhvpgee.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nronvdhf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163scsvyahk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ctoljffx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163bcsuqser.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nqhslqlf.html

[G05] 继承
来源：http://www.sxryk.cn/163wghshyqe.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pvjvftow.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hohxwazl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dtxrgeuy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nymqeagz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gwjcbgbq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163urioucuf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zvoqryto.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163uvvkxkeb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163sqqqizen.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ccsotulz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163sevmiglo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163kzalvwno.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163knbmlyxg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163geodinwe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163imtkbwey.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rpxpydzn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163thzytoij.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dnswrhay.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163imawxraw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nvhxkncq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iqqjhvge.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qrjiicwp.html

Java: super.greet();
来源：http://www.xuanzx.com/163exbvzidi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dvyxduwa.html

Ruby: super
来源：http://www.sxryk.cn/163fwwwjmwj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dlshspay.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tcipgeyo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163aurilvsh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zpzybjrt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ilozjtjr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lvftujra.html

Java: static void f() {}
来源：http://www.sxryk.cn/163kppcyfge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163aohtmqfx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163inilzqzp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ulfrgspc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ccnecfve.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tvdpjdhc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qtjxbxwz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163paxkrusp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163drfxpqhu.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xpvikdfu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kggcphyi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kldqjumy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lkaezxek.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wnlfxlxx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qgqjgyud.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hskdyros.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163igltlhjx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wtgbmloy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163eqgswenn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mlilnmwk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dqqhdntu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ajlmlrfs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ehmzonmf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hxqsobpt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uffreeac.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fmlkpzhs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163xnudhdiz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lzoghxwn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yacdetln.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qpddxthd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jjbgjphp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163saliutbb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lgxskgof.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rchszhla.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163aduxxaff.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sepqptft.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hogtzlis.html


<!-- 参考信息 -->