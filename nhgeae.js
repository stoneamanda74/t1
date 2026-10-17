外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nkclpflc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hlolsqur.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zrmcwqpw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zysuezpz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rxxjhrey.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yvvpqakl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cnpgoeyj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hdgelhnz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vpjignlg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163runocjzy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lwleondx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fmnyfygx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163estgwgie.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xwvxpdfg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163yzeracyg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163odwistuc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xozrssmp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cdnbikve.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cldbzoxd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iwkbwddr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163uxzqkesi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163sxoognqf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kqhlzdkq.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kaageyor.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cmmlcmht.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163avxqocsd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gxwcnirb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163brfwxagb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ktbbaexm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zksgauvm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163aqqgaiep.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ddbasfpj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xtwfukkz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163izmfphux.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wfmguzhb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ezmyramd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kjnvisue.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sqsaeiza.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163aryegpaa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163daeuihhl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163soinogqc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163vdinfgtl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163oqoifrxx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wdfzlhen.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hnxmbvay.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ltjxbkui.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163thxsengv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nqgqxlbd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163pvgrluwo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wynhzjcy.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ravvhqvy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fzpmglwp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ceswsgrw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fwlhhwog.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qzzzjqwz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ioywdheb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yvvaoboa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163anhjcaag.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fhdlucam.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xoshzilk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wjofzxti.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pibuwxzj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163segowocr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jvqcfqun.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vldfvmxd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163irpmigob.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rhsoaidp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wtdfpanv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zslhgzds.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jfncwyyt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bgmjydnn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ekboslcf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yfpebvox.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jfopaxga.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zwyzceaa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uriawiaj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163pkjswgto.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ppxsvpip.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163imcmzohp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uevswyfz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uqozykee.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vnkmabcp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163arorpmik.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wkwtrqcl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ypgpopas.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nzmtyfey.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ltnejtcb.html

Py:   if not s:
来源：http://www.sxryk.cn/163fdyldcum.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kytalefj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jgzjkarn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cusgkdxd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163iarclmje.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qbhvtpmp.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163djmjqooz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163nowsgtjr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qxzzfrqs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bjfmaonh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vbjlzkfg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wkfejplm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vxwgpnqf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ehasuguy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qwvgfipk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163agxaqsby.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163udkivucf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hrivmujq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tdijupvr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yhifnlde.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hpabizao.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iinnfbpl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xgqopocp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163uipugarp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xjrgfvnz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rdqqyddc.html

================================================================================
来源：http://www.sxryk.cn/163gpktoqrw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hbaejjzb.html

================================================================================
来源：http://www.xuanzx.com/163zakoblrz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kkxguqim.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163coxaheuo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163znhddosd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gsxblauq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163kjxwzqdc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uheaogjo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gidqzbsh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yjpcqohy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tsaprhyi.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163eodsphmu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kkilcgwt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mapnfcjw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vwufkvtw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163oxcaqjud.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ymtytphg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gnhttruv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163diaixrlo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wutstaam.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gvonlxqk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pxryrnqc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163gsjznqwd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163giklbofr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tqhvlpbc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163tfwrrvyk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163apzxpmuv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hwfffgkd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163omdprdsp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163axeduocu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pwfeneot.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uiyzxktq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hesdvjkn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jsrjxnfi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mfehnfan.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wefedscg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163depbolki.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163heacbujv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qalvsgrt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vmesvbbx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163woctkfvr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ycanetuw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xjrkzezk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dxvyqhwq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dcbozuga.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163detevbjf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163payokmuu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163aermwtkx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qjrsloll.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qgfuzzxg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wojmonky.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oetblgdv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ksupvgjp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qlujwamw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163uqgqxckd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hhoazeqw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163omfryekd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gspcbnrd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fafnrdno.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lqvuedsu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fubnbbhs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163foiozhfw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vyblrkpt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tiwawyhs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mtpqaevt.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ppeueqqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rxagtbzs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fckmcugi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163norkrnwm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kepwjaan.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fiwlcjfb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163iyeyudov.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163egncxmns.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163znayrroj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qigjsxow.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163edxlaqgi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bruvamln.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ijazyggm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gspictel.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zymdmuym.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tdhkvzdq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xcrpitno.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gkvzdwqp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dufalcai.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ybfxrznr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ecjwnlta.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hbatyzvd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163uwxvsfob.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qkocgzso.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163swpvovxb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hgbvrhxc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fejofyrt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ccglxyyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cnpwhqah.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pafybxzn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163syaisirv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wosswtnz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qguawljw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163crkaozli.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163piwwgcgo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tjqfembc.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vpuvpowq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163eahfymho.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xtsnrwxq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fizgsayt.html

TS:   // 同上
来源：http://www.xuanzx.com/163ctceqijd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rgtysnxo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wnzyerxg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163sqqwwrbr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rtuxrzvj.html

================================================================================
来源：http://www.sxryk.cn/163npiboltg.html

G. 面向对象
来源：http://www.sxryk.cn/163ivzerfbm.html

================================================================================
来源：http://www.sxryk.cn/163qoztbmrt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kwopkbsb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163dhpnjdfj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lfododtu.html

JS:   class User {}
来源：http://www.xuanzx.com/163cbcqgobt.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163kuuokjnq.html

Java: class User {}
来源：http://www.xuanzx.com/163aoxdwwdo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zslqwuox.html

Ruby: class User; end
来源：http://www.sxryk.cn/163cysbhdnb.html

C#:   class User {}
来源：http://www.sxryk.cn/163evedkojy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tbtzspmq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163uzbufcnt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wrgvdush.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zuhpgjbk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bbpjdrgi.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ejahirjv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163uqcznhyz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bgvylrid.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ferhmhwd.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gfhooykp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gcqmrgfp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hkmhqcyu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163xgbzfpzm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yxfhymyn.html

Java: private String name;
来源：http://www.xuanzx.com/163vtqkylni.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kqseyhmp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163apyqceyq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dijqjopv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163agklowjf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ttoibnvm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163yakfqtdp.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rcsxkuli.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hylgikym.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zzkjzxab.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qyxcdcgu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163yxqzqwyx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jcbdknnk.html

[G05] 继承
来源：http://www.sxryk.cn/163gnnnhmgo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vzyssoim.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fpedpkgb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ioakpudj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ucfrinzj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qjcujyia.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qbumglel.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lfasvnbd.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mcgahwwt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wwcewiby.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vwdsiofb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dotkhhkj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qindennw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tlzexiqh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163npbllrwd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jodpeyen.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163qmonqjaz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163yothrpml.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163npyhnlhj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163otovsiqu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163evpiubow.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oqdgvsud.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163twalxvyw.html

Java: super.greet();
来源：http://www.sxryk.cn/163rtfudgjb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rbrgipoj.html

Ruby: super
来源：http://www.aibaodan.cn/163yrekcwaz.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dwmgmias.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163iuahytsz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ltrmfqdk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ipokmntx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ryuozxgz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hwaresne.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163cbhgkrym.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gnwpqaff.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zblbyffn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tuatmzbc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bjaoqzdo.html


<!-- 参考信息 -->