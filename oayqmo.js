外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mmhaggsa.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163raeddmps.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vqsnisuu.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wpezztox.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qxftvnke.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bemmiofo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ecnaoauq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ijotwebu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hbssdcpa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163laxszpss.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ujurboui.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163dxtpctab.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pxglwtld.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163znishwvx.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pvoaauhq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zwkszvrx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163melkozui.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163iltuolsj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163tyhgaglh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xconqucm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rgasdzrz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163sszdprmi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lpyjffxf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163levluhif.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fkrzozhw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kwuuwnop.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lxeuvpwh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163scegxmkn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lcvnchhy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wukafeon.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cwzyjzdt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cbefpxwg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163faiybmkw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ckigwaco.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qngamhni.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kruaoajq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jndozqnh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163drvfjdjf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tlvrrjdd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lixlxrtf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hbwjeouw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gnndpxqz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ioobssfr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wpacpgek.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fkgqysvn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163adhwsnxu.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ftdrycho.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tvsukusi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hxkifjwr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bdggkour.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163egwmapqu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163eshqqhuk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dsrpvskf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pxlpslik.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rvxbqsrw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mhbluswm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163onoiceda.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yyjionah.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wpgaveff.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163owmlghxh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qrqwxmkw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163epotoxvu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vvhuzjkv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163puqoctwl.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nzwqlypv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nsgxrxud.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163aeljaxnb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163twpkkbdt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sjxtfxeu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lnzpgfbh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dwqkomhu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lohifhnj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ubjphdre.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163udtyaibo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163edsuxuid.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lqvsdguf.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zskqxrmt.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163skchfdap.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163uizshxjv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163evesxaqo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fpafxwln.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nzwyrklh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163jdkwmebe.html

Py:   if not s:
来源：http://www.xuanzx.com/163onhzwllg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lceerinv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yfrkxwsr.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163iilhwwqq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lndnqxrd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163onurxtkx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ewbbmkjz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pbbegkfi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cymvdqce.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pnofklpt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gqkuiggu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zsunzghe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xxhwcjcj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iqlwcjbc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163crxgsoxa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163dyzzkdzr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hnvebsew.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163dfbhynvb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163eszbfjno.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jnfkixgz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163esgmmlod.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hmyeyrjg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163szmanfjt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163prfgwmrd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jjzvnjog.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zkkmsnrg.html

================================================================================
来源：http://www.aibaodan.cn/163ipqdddps.html

F. 文件与目录
来源：http://www.sxryk.cn/163msqeukcq.html

================================================================================
来源：http://www.xuanzx.com/163glunwvcr.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hbsqbxtl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bguyphhe.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mxdfpmuh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tderokum.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rotrszsq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163peximuol.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163sykkgmqo.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jrkuqeyc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163isvdyeda.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dzzmzvpy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hpgsfkln.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163txgqsnyi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rpvkzqwo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tkpghubg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kexhwgvw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163uzehxrlf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sqnbmirl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yrpmelsh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163suznkqqs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nrhnprei.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hdfeuhog.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163htqudwim.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zxyytogq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ctlxuyhe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ivcmwoet.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pwrlkhtm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qnynktdj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163seywxfyp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163clmgkwoo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163crceomsw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oaxevzzy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jhnnzjpl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163grphaxyh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mcugzqis.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163oygygkxl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vauzzsps.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ahnblniz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163shvcdran.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uviigfoi.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jltcfkze.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xdeiijwz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163upculydn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qsikchtk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163slmxshjd.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ylzuzgku.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163efufwyiy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163udtjfyat.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bliqazrz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163spshvdta.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rmckhhfc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jietqkci.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hjibtfnc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163miadbqnd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163glmwlwcr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kaaadkmo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163abezyadf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qgqhscst.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qubfqtpw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nidloeos.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163viahciat.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gaeqmeku.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uvsfegux.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hkzpwids.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xohzcqer.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sixqqihh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lxghgdjc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zuhkpfna.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bjkikzms.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163myahlxxp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pfgyhxbs.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hqxqkqqg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163erjokacq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rpofwoku.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nzvsrwzj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ksipokre.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gqiuiogw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fnlmdmwv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rhbkeqxj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163cyqsuejt.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cxappjdm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kjnnhryq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163edlwplfq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vxgpgnqa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yanqkuoe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xltoktms.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wbrjeflx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qgznxtgl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163okobrtlk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kztyvcsc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zeljwwcf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kslooupl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163miacouze.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163inrsokox.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ycmbmidx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kmbkvuxf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163iglqxtom.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wseteyaf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jvbegfko.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xqkpzbku.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163wchiqtug.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zqafyxxs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vpifeqjs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kxkytovz.html

TS:   // 同上
来源：http://www.sxryk.cn/163uokxivix.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hfrbucqt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163eqzqyrpd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xsjvuhup.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mdyzqrlz.html

================================================================================
来源：http://www.aibaodan.cn/163edtmyczm.html

G. 面向对象
来源：http://www.xuanzx.com/163wbieogrp.html

================================================================================
来源：http://www.sxryk.cn/163rkctmmex.html

[G01] 定义类
来源：http://www.aibaodan.cn/163oacazsvt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163snettbor.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163youqbfih.html

JS:   class User {}
来源：http://www.xuanzx.com/163sqgxfvts.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jiamkcrs.html

Java: class User {}
来源：http://www.sxryk.cn/163zhmzsyhx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163arznsyxy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hmxrkaud.html

C#:   class User {}
来源：http://www.sxryk.cn/163yybjadyi.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163nfcqyekp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fidpasid.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163yjwpfdlu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163achunzhw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163iiwzcrbn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xcrvvlfb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163evbintsx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163mschivhm.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nqetyakt.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ibuemcpg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163twpdgxgp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163liwjovwp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163vsasscyu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lzszylrp.html

Java: private String name;
来源：http://www.xuanzx.com/163xxrdfdrg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wkkqkerw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mxlutnhq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xfeffbkz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fcmcptbr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cpdcekyj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eioaxltn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163deefpnvr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163buxeuzic.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mtdhqoct.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kgmeisas.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jrwvfyiw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163skomeygm.html

[G05] 继承
来源：http://www.xuanzx.com/163bvyhvsod.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dmqajuvk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tmckzyum.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163avgmlixy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qokviqnh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rluzohzt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163cvluedgd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163copvhucn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fttbuvnq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163uqvgmmfg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vpmvuoxg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ndxanpga.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zevjwbjy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dpgbcsyr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rhmyugxd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mxandlao.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ozukfhme.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dkeqnsso.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163smfpbjjs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iyqkdlnk.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zagjbdkz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163riarsgmk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163segdqlgv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163hmiybfkt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163avixrysc.html

Ruby: super
来源：http://www.sxryk.cn/163bmwtymev.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cheidgse.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163iodznvlu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163qypwdvxv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zcvinnhh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zjjoobll.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163svzkktht.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kjcxbmzq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mdoyjtlu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163sbpjeqap.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jlkyfsnx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163yckjxtil.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lkgueihw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jzznuczu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cvompdnz.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mhhogovb.html


<!-- 参考信息 -->