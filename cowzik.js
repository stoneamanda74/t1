外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163eaxsjhte.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ukvlkyxm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pwxqehwr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sdactzhw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kvqralvp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jyktnbmh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163disqrxlu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ajrsedqt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ouqasfli.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xdzxougo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cdxhjtvy.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rsklvquh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qyxphlrb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163luzabfqd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rnvldpel.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163tgbmhbec.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163shzmbqlj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163visrfbav.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jbizrule.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163dvzuxqwt.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vxcvngrv.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rniycopq.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zaockxjt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qvwlnmdw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ildhncnv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wxczwjlr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qbklkhmv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163arhherrh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fgbbhklx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163biegoasr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ietaatjt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fepjizdu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163oojmetlt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ahqfzmsu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lbdldivj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rdjptuzz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fvlskprx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jaeriqhh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bwuxoimv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ppshscem.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lpxiluyy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163eqzynxij.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ngjkrfzw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xpcpeuhc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qerixajv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uabfwwdb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tplykvww.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bquondst.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163aqmctiej.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163zkmjysay.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163azzhncqq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163aqcrhdag.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fpjoimtb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163evswzpob.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jlrwhweo.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dmsipdqm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uxgoyiyh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kujurkfi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ptpqgukz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pesfeajt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jhvarguz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163himcyjbv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wfzniyvm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xaaspqfx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wnfzcfhk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163udfgfigd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vnnbymxu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jpigglio.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163alzwpqwy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rapanjht.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pvghvnng.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163baibbhin.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163adezdvdx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163glkywlof.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vcnyaoek.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iaahxnxr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pcyzqopu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ovdcijzy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hvtwzgdm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lrtaetoz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163osybikwn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mcktmmjq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xfqarpde.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163urgoyptg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xrvbobog.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wypulxes.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ktbqysjg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zhfdugct.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kpkfdifr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ybxndmgn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wqsxhtew.html

Py:   if not s:
来源：http://www.xuanzx.com/163jitilarl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jmvysfcp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uppzddgx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163flhdblfk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qucpkzzo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163iskupdjq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qmlehnle.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vpcyldqs.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vnbztcff.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163slipitfo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bjusjrfj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163krutjcul.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fhhqwfts.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rrtepmxf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qmfpzicl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vzcdyaaq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jqoznzen.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tltzsrzi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163glisgskd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yahxaswj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ggczaurr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vxyvmiiv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gkhllhop.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ujrmnwmw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163phrmcoez.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hpxmkfcb.html

================================================================================
来源：http://www.xuanzx.com/163yovlecvu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vwggnehp.html

================================================================================
来源：http://www.sxryk.cn/163fopoxduj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wzmxrfbk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163epnuptof.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163swcvhyoy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163cmzkhufa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fapwucgy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fphdxhtt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163geclojdx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163szyeingn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mvlziirv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fjihtxwd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rygjpwtb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163istsrtjm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dpfhsugi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lovsxbge.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nidyyztv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jsflgwfz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pwgtjcsg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163stbivett.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yjjuchtg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ovxmvxoc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163yfwanjpi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lubpdwoa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zlxblfhu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vrthegua.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163panwdaeq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ivehtyof.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163bvenfsmt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kzeizqdj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163doubtdsw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wcdlsukp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lnxlpbli.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zmgmwkuz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xsmduskn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qxongjkp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ruvbvdbu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dcahqtjn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qweerbac.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163sddslkjq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uxmkhpnn.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pasefukt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163enzjplyh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jzutadws.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ieriiwrd.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fpoqetij.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mmaqndoc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xxtreuem.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163edbmyqmz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tbvjcgzs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mhazwqqy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hqtinpvn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tcpucjoc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wapqbrxp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163molbgdyr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vqlspmmw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163udmqvptm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vtaihmmh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163taubbaay.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tlcfypyo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ebzdhnss.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nntdaupl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163swhykdcb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zojtpfau.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gqromfhy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163velhdfga.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xoywejsa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163drucujig.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bbyweywf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yxjaeizt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ozlabpnt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163xzsifhzp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mhtlztlj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vpjdlvgp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zxinudpo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ejsdyeyp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ynzhrsnr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163etrbsmcx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tskvdktj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oqavgena.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ildzynbb.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ymhilulv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163amkoeexu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rggkbaxv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ljyuonsi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sebrnfpu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uibvryqt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ayhyhngk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163teaeahrg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cohvbolx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wfswskwi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xqzfpeqi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163bvbczuie.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fqhhreyp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hixkvgef.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zjcidbvk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mygvjnsv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mfwuxqdx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163nkkwnhgq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qpxlhber.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zcknorhd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gsakfldb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zkrmolxk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163otrknjyb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bpcdvxvy.html

TS:   // 同上
来源：http://www.sxryk.cn/163okobbrwx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rsfxjoro.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qmcctiws.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163goflliqa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kfismyog.html

================================================================================
来源：http://www.aibaodan.cn/163thllxvkq.html

G. 面向对象
来源：http://www.aibaodan.cn/163fqzrttag.html

================================================================================
来源：http://www.sxryk.cn/163cylgcepn.html

[G01] 定义类
来源：http://www.xuanzx.com/163vabctoeo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163agckkyeo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fqwbopis.html

JS:   class User {}
来源：http://www.xuanzx.com/163osnfpyra.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wkhcugqj.html

Java: class User {}
来源：http://www.xuanzx.com/163hybneatq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mfelucem.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lquvzito.html

C#:   class User {}
来源：http://www.sxryk.cn/163artfzgdy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163lfzmmssl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ovctcnwn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mtlpcxvn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163awkrydpo.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cuexuhow.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ijlrjwok.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ithtzzfk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jeacdfyk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163oivagijr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bjrdbxmw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pdfgwlhm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zfxiayow.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jmwpufnx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163darkpaob.html

Java: private String name;
来源：http://www.aibaodan.cn/163lbvegejn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rjvnpbsc.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163uuoqfasm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dvlhbchv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pbcbgwrs.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nwrjwibb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jfrchwjo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sxpofaec.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hpbzzvux.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zguthsno.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163smhafpxu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xhdoexjg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163skdaoeom.html

[G05] 继承
来源：http://www.sxryk.cn/163hhkfvhdx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163puztdfgn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163udlhsdph.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wxmwzkrn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163otedxkrg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fvrqwgoq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jjxkbkgc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xsenpzdt.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163uneyatfn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bbmopdsu.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ioekzddb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nhcqswas.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163buepdymy.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eiaitptv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zyjjywmy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163inypvwkc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hwpfkvpz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163yvilibxp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gemlevlk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nixlrstv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lgnrkaye.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bkypphdt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hdelnysg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163iaxrjpmc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yvmpuzjk.html

Ruby: super
来源：http://www.aibaodan.cn/163hcynpyqo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cwxnryqr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lmmwaasg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163qztielgz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163atrvdqzd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rxaevoig.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rltubexw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mtgwavdj.html


<!-- 参考信息 -->