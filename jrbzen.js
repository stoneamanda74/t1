外链999!wailian999！

Ruby: s.reverse
来源：http://www.sxryk.cn/163fipuuvqs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gykfylyk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xjzhipjz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163aiqpneve.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qjbsiook.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ggbkkbhz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163oviiakzo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163byixewfu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rfdduouk.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163xxfetawg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cnsgafjh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dsuxnqib.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fqnrtkzk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rwjmipxj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ipypubrn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jltolejw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sxuolpkb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qevkjili.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lqdxfrqt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dszlajpx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hwgecjqx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mhmoftlc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xlzkltro.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jrsmgbsy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zmippixq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vvsebepp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jnzipojv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ugkmzzoy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cpezehos.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163itlixklh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163opgahduw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hojwxyfo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jgvcyscv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zwmwasqg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163pmboezls.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163gxmzijcm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wuguxjkc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163baxsgxjw.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wwnsxgjk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163avejeuiw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163cuertgky.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xheddrdd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163aqleieyi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dzxojnem.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163edkhjltm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jwnoklps.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163buzcgkwp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lafyfkje.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mfhsamgp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163egfzvotr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yydqzwlq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qmpgxiaa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qcgzjucq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163gscasyqq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yckacuxj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vdavbotg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rcxcareg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163iubqinah.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163fxmqkeyg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xeifiadr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hkfzqjpu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ymigvtsa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163plddrmzr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163devfrqij.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xqquwwos.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163onqihjrs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163okvrmavf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163moprxxnt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bxeoramk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aaxnhfbw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kzonkvyw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jpwwnhhk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163tpwezgfn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163adspkvse.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ydekxchl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163uegyvijw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hgkcgvyj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qbaamvhc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163iqloxlax.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lrcppcpr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fhnrguyv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dbbmqguw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pkeohnfy.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gqtnqfnq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tnjrzliv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pqtasryl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sszokxdl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dxhsszgk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ulrkxuhr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kyzrccej.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tsajhmei.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163odxuvdnm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ynvrahwd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163flulyzms.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kgjwnifl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zplqmcba.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rfsngqzu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jklkyrmq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163nacxgvch.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mgssczlf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ncyblhqv.html

================================================================================
来源：http://www.aibaodan.cn/163xffmxiip.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yhurhczy.html

================================================================================
来源：http://www.sxryk.cn/163dfnyrvxu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163imngkpuz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163tnaorxik.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mzpdorsr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zrtqhuoq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163qzmckcyd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hahecxad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163vctgttfe.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ctelqemm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163iamjmill.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kggqjhjn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jyiewnqh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cyzhylso.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xbepkmdw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wferknje.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uyfwjnpv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hklgeujw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mgxcbmam.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163oreqjjhq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gsvneiai.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qfmnimnw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dmzurjdk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pvgjoisd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163togamtrq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qldnvrlp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ebjfctnw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163voeozrhs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rrtuukss.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dpkomfhf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163uvattstg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nuatdmpi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163npoudfod.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rbucpqsz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dqqfsrvu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ojqvqeqq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ockxuert.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gajkxgsh.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163aqfircse.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163paaomsxf.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uilfrucq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vbrajgvy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163auzpcoyg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zskpqwaa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gidbpalt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wojvcyob.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cuercdjx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163twfzmkdi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163auveqrgm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jeybdgzn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163agppoghn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tnpdkpnj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rwexfsyw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nbpflvlx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ykmxlxfi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fllxgxbo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163tebmfgmx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dkpsufco.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bbpacxrd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163umytlnsa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cexqddpg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163raxdhepq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163shugriiu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gksjwdpz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gqofbama.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gkrrioic.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nplzyngd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pvyahegj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163viqhvukk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gamjijwf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vqtkbkip.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163oqmokfiu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dwkbnvbb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zmpiupqf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pgvfkpoe.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163gxwapajy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vqhhqofg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ukfywdas.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xfuhmmpc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ybrlkcwy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qkufjvmz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mtdculyi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ryiwyxqf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zkqrxocu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ivsmmxfv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163yjbzcuou.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dptrcmzy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163eqiihneu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163puxbhwdi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163esahptuz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xhgakews.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kkoyhgzi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xrkavtoi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eiesycaq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rempyvpj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ocrzkrne.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vnprrczx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oazaegbq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rwgclzzw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dztqupji.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vadnoxag.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ypvgkiwz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qsxqdazj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vqxtubps.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kkfynzpd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163anipyght.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jgtsfyeu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zmwnnazu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163abwprova.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xmiumzxa.html

================================================================================
来源：http://www.sxryk.cn/163scjbaepf.html

G. 面向对象
来源：http://www.aibaodan.cn/163mlkczlnr.html

================================================================================
来源：http://www.xuanzx.com/163wksuicez.html

[G01] 定义类
来源：http://www.sxryk.cn/163fckmlfox.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gcdscuci.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gxpvczne.html

JS:   class User {}
来源：http://www.sxryk.cn/163kebtrlfo.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tqfftsxm.html

Java: class User {}
来源：http://www.xuanzx.com/163ouculgbw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zcgzcovr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163puqvkdvc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ixbpjicj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163juzvnkuq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163upubmuoz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vpeevlqr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yshuwnyj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163epjnphre.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pqcodjln.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163sycrpjly.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fokuzmlg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qcapgqmw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pdoczvna.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mpubvaah.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xpotseol.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yekzsbdt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163onshraql.html

Java: private String name;
来源：http://www.aibaodan.cn/163cvwzdujj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ftwaqfrs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qogqfrpj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dowtqydf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mstrsczr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jeobcvoj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ewltvfyi.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ecrqvxet.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163bvapzaic.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mtnjksrx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cvyanmbq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vtqraplg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ziptsjuh.html

[G05] 继承
来源：http://www.sxryk.cn/163unyghsxs.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tvebfzrv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rjurculc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163viokhpds.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iphwnssx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163tlsartya.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xonyfkew.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fjoxvfzr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lfometqa.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163neknwpjn.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163eoabckbw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qjufkhiv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wkfrtsuq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bbcfieyj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lowncrpd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uzklktyg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vcwbqato.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lgfaqrhl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pcgjsebi.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qvmafkhc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163bbtddksk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gvmqsyas.html

TS:   super.greet();
来源：http://www.sxryk.cn/163chqcglce.html

Java: super.greet();
来源：http://www.sxryk.cn/163uqlsufvv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pznspudz.html

Ruby: super
来源：http://www.sxryk.cn/163eunrlfaz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kzhwhavy.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163slczyoow.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163styionms.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vhicbxgg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jxnnmmaq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qhwtsavj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nyuspvnt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163auqgebmy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163onzqvxir.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zsiyyxqp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ctpyxpls.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sopdnest.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163etxlwdct.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163khzohiuz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vpsupvgs.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wwwdujge.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163oxkngyvd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163roepdvqr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cikkpabp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xozyojcw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163swkclygc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163aperqljj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163egiifmvx.html


<!-- 参考信息 -->