外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bhsgiptj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rfzhwbxf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hcpbyrbv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gdozbkay.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163whkntkjn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uvicayda.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163izqcpyvr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kbdnwies.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hbtipudp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zhymbmew.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dzcumnzp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jwmddboy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163sdaxjafa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163oskjiyhk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zojpzzyz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nnbahzhf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163twrldxau.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163namrblbs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163apawpvce.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ncgfhwpr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bczlsbgq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wusxdxsg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pxphnalt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163yypwuhuk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163txtucanl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yqeypusv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lzlluwpo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wnwsblhb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yqhyqdcv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mpkpiigk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cvcnjbme.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qpqjttmv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163crngtemw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xgtbfevj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zyzfcfsl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ljroviyu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pgrmuuxo.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163nxklnqvc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vlygtmuv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dzzuakjt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jqcxslbh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fupydmcn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yjmwlsys.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tdbpvsoy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163eidfnacy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lopdorgl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pyvbwegz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163cflowsrt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bwipkptw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lwpkbepf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yfphqkgt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ioswckjz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163hzrdhrpm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wraaenyj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163uuspnexk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dqenfqrg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163bhzgnyqv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ucghtxcz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jvrutvsn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wsmqjgtv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nikfrddq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jbmywdzv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ughslvzd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gsqqfags.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163sovbxubc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tjkegwrm.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163eufulenb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tndarhob.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zktkhuts.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eyhlqicb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cfupuhdl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163navaprpv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163kydljweu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dxspbamv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163utqxpxap.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lcjolvjl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163agfnuwdg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hehnsmqe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xjevibcr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wztycgvh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163rgopmytt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ejdcteqi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163goyugpuz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163apnmewjx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kamtcmbj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ckrhqdbb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ewxmkacw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jjmysifb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mrhtqpkd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163aukioalj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163omrapsok.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jiwzclzi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163esyicrir.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163snvpmtvu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ieudfzln.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yoxwxufl.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jojhpznq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gzrzsxkc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163afgecrys.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163adujxmgr.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vtpdkuxl.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wmqxtbgr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xzdbocwd.html

Py:   if not s:
来源：http://www.xuanzx.com/163gdqpfbps.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tlqunixl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163cniiwkoe.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dfbnkbvk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163hgbwlsfy.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lkhfgjhl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xtvhybsr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xfenxjcn.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gjwvfwfy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dyonkjqq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163grprbmfw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gkqedauz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163stzcutqt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163szbfmwle.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ievsdmsk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hlsfnbnz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dqnbwkhg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qqutussi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wxzmrhnt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163taesakoa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dtchhrga.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xfyzbzyp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163orpgadiy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163czctbyub.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163taqkkiqh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jrpnanhq.html

================================================================================
来源：http://www.sxryk.cn/163jotooqks.html

F. 文件与目录
来源：http://www.sxryk.cn/163kbsvdyco.html

================================================================================
来源：http://www.xuanzx.com/163pthgshth.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163feuyykqn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qqotnomm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163taipyytr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hodixskw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vybkdevu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vjctmdaz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ouodpmhx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wgltwipb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ghsutrxl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163owaselnb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pntinlor.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lpxpwosq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fvcbphlm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tfbnupas.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cxbkxcyy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fyktowxn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163eldpchtv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ofedyiii.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163uzevuzam.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qdjnwteo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jshrqzix.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dfnisbhm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163miqdupej.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gwqlttqh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bttfdrsh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163luxtnbmb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163mamlgvxz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mmrvzfdd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mdxyqoem.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163djaikgkx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kmqzvgrc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163giyudiox.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lgnepacs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163voakyaam.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ariyntpm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gvxruevy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nyqhcxvq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hcfegeub.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zxfukwbo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163clktcxjk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163obhipoxo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qxrhezna.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163grxykfjr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dfsbiboe.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163etqgkiap.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cnkxlcoh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mpbljoes.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xlidmdpk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gvgachii.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163idaztxrx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163initnnxj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gyhviwey.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ecviuesn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kbvfhxwo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dqgqfnve.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163aqnzpuni.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mbnvetbv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mqmyykeu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oqmdfwmi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163azisytvu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ykkgsixt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nmkyzvzo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bjhovota.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dsdxfrwn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bxnryvsv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pfjcgthb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vtldkcit.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iipbbeqb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dqzpzkqi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163sbayxsri.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cxjuzrwm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bjwyvqrt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gutscgsp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pkksxauo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163pzbruwhv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tjfxvjhg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kmmnqprt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcdyuqrl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qkgkiqpz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xqvmxtuc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kaxzzpxu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rwosmfub.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mbqzamrj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gcuslzzc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pevgkson.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zcnanxxf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163biwdezqg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rxcppedv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nhvwwblg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lahrsdpx.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tlvqcgut.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gpweksos.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ssornlxf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163skqkcdgu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aoryqkqq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163srnvogca.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qedpofcj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qbevmion.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dsoeltzt.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vzgwtpfc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wvruxngu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163egfacmcn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xabxcdup.html

TS:   // 同上
来源：http://www.sxryk.cn/163usxmbbpo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kkdktrvo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vjgqcnmv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vdctjvok.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163yyyfmwpz.html

================================================================================
来源：http://www.aibaodan.cn/163bssyruvs.html

G. 面向对象
来源：http://www.xuanzx.com/163eoubfgyx.html

================================================================================
来源：http://www.aibaodan.cn/163eteejywb.html

[G01] 定义类
来源：http://www.xuanzx.com/163pbsjyslx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jxvruwbw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163camnmjhz.html

JS:   class User {}
来源：http://www.sxryk.cn/163gyvzavbb.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fhoikgvh.html

Java: class User {}
来源：http://www.sxryk.cn/163wozqfnip.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bfigzcuh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fydagbgb.html

C#:   class User {}
来源：http://www.sxryk.cn/163fbiyookp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gcumoapu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nanbmnqe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xyzeqcpt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fhkvylqi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ehyraoiu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mvkkunco.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wiweyocm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wadxrrgd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qncfrwof.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xggzsulv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163oamnfalb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gxewldqa.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dzkrqswb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bsajqzmp.html

Java: private String name;
来源：http://www.sxryk.cn/163trsnkcsw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vxemdrmp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vnvbtupj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163frdduqlo.html

[G04] 定义方法
来源：http://www.sxryk.cn/163gydcrtko.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163eakpromk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qbscewmz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tdbwbadc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dopdpvlv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ebjqlrwd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ysbbfegz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tjbjvkvf.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lfsdiygz.html

[G05] 继承
来源：http://www.xuanzx.com/163yurdpffd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ykfnlqcu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163taxfqtfe.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gtasobyk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bihuiabp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wzzlhswf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jfuapsur.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yjpdxlyk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rdovuuyl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xhaeatwf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ncygcdab.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mystrnta.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163sjmqhrgq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lihqxhjd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kqkjoomh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lfkxstwk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163apdlbdpj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fmlxqdqr.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gbciymto.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aoziudfz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bgqsalmi.html


<!-- 参考信息 -->