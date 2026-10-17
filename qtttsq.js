外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163axsqgvfi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163sodimeze.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ryjvamwi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gvkfbben.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rluxvscn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tewpaxnn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163equrgubf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ubodkbza.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163trgfgcmn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nrjecpde.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yrjhevko.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iqerhkax.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163grgpwlzl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163sskhjlmi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163zetkongw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163knhbyyau.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163cznxwknl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qszzwuii.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163iejxwkmp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163juxcaofm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mstirryu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163regsifpa.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163itoslloh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ommprfks.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fjcoknsy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tdliofyc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163awhjttsg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rxtjzuhw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163whelludx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dvjdnigl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163akgqryyb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ymjeduti.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ojckgrim.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bnrjnbph.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sbpltstz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nuctyisd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hwaommdt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hrmryits.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163izfaoaue.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wfdzmlfn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wsxpxpgj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163gloceebm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mijulmzh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nynaujin.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pmrlkzkf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163padefjyd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wurzjwzr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163oqktonid.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163phppqdzb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kummnqqk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dsiufidw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xoxcgsxh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163udponcad.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zmooukga.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hcspcawy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zrwlifok.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lzhdaqxs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vudymqxy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hucgioml.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163yopkzoxj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163acdxdnsn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qiraigmq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zhvfyizp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163frdudgaf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kkvjdxdx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163goypyfsm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163uiqbmjvz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jdqdvzap.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163urtusdwf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cjfemaqi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163imxzczkg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bfbksfmm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163mbmjnsva.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163juvtjdbz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qkxmbmei.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gjrhgexy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kmcdrydm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rplbwnkf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jpgawiey.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ucvgmrpn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fvwidzjm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163enkmmiub.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163aajqhzlp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vdefgbot.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mewgethu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163mwstdajx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163akkdlbvn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tpkbkcvw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fwvyppiw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163srfeimrz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mlpjdunv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vtlxidjc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bsaxvfzi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gyhqfofg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jsdqonmw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163efjopoqz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vcvfhezm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pgqtsyan.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kubwowdm.html

Py:   if not s:
来源：http://www.xuanzx.com/163zaajfncg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vjpavgjj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163liqfxfwy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqjttfxv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rgaakrkh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dkkuhtmw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163crsawcuu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163shhndrnm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kcgefciw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qrvyuycx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hhfwdeth.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qtrozdfo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dqmbbkvu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zagldqnn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ogugdyhc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qbbeviam.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163btccotlj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gewqkent.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fworujar.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bliwnlvv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jlmvdlgp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163obzvwjzv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163epcxwohj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163oswwslqt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163oemuxolo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wwqneuef.html

================================================================================
来源：http://www.aibaodan.cn/163rzeidvef.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hqdtlybz.html

================================================================================
来源：http://www.aibaodan.cn/163tselvrif.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vpdoyozf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163elevhieu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xnycnofa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rhoumblq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tcuodbqj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kqdoythe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qohyiydo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163flauqgrz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mgizsjqp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163emffkdxp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lfftgbap.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163brwstpbj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aicpnfdo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cipuchih.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wfnwdiuj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163houmbktp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nnzhruyg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ufwguipf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xlorarhq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163hgtjmwtt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163aaevalke.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163udlpdsql.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hjlochyh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qrmquolx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hbqivxfw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rcinbytm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ztcwfieo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gbosowob.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163auhmvipw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qegxrxwa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163oqnkqiut.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163umezqpxn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163eskiqmhc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fojcllzw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163badbxhmi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lpveoetk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qvfyjlid.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zapywfpz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lnirgokc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tubmymbg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163czlkkeeo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uocpkyoc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bezxvduz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ivsmhafc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hdtulrvg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gmgkmryw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163anylhuuf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oitmnoqh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lsaxvmqh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163luxwazse.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163difgqdmj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pkwxyaha.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163aiorvzbs.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163oaxspgze.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lwxywaxa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163opzkogwq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163eacwidax.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rcrnmwqy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dtscmtof.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jxcikknj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mpvtkful.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pxpuucgg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163polwlsen.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163atsudbzn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nsykxmjx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ptcdtagm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163whvmoimr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kczrohlj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tlrdjfza.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wgghhtpq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kuuwhxkr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163epbgjfxy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kmtdijyu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fsufauat.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xbeepvyr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163atvwwhkl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oorwivnn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcfdmykw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jvqwuhxe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163iflzjjgg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zmtpgxiq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fzndoncj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cylzeupf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jzsilmab.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sdovqgvo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ptaqqlvw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163blweijlw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fyfbpors.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vzpcpsca.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163abnvzkko.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dynsvjav.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uxuxksnb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pickiqhk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rrdkdnzs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pkbeqmbn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163myqrejof.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sueylweq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iqujwngd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cwuvrjfj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xooloswd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ueudxiur.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bteqyzzv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mdqdemdp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jdlsxiub.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jctkitwi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nwfifzeu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ugglfjej.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163utntkvmk.html

================================================================================
来源：http://www.xuanzx.com/163dxkmwwgf.html

G. 面向对象
来源：http://www.aibaodan.cn/163ukwbgxjj.html

================================================================================
来源：http://www.aibaodan.cn/163xllyxadq.html

[G01] 定义类
来源：http://www.sxryk.cn/163gfbphire.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hprvattw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lfwatuwd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ulxxyscl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gxwvwouv.html

Java: class User {}
来源：http://www.aibaodan.cn/163mmxezjuw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bxzwxkqr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ntvyajsb.html

C#:   class User {}
来源：http://www.sxryk.cn/163ccyeizxy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163oioowkcn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zqcfanhz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jxwlahqf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163eqzpmsdf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mjrrmnzg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163evapdgqp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ybozsrqt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hbvirprq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rlbjcinf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163powgrfgc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dmrmmlta.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bfxztixx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bzzbpkal.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ylulkgod.html

Java: private String name;
来源：http://www.aibaodan.cn/163xgknsboh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163azmimqfg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163famptwzd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ailnsket.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jkfyrdzv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nqelcskp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hjnvqgnh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qvheftia.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yeravpoc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bjiqstck.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xzjrhxeb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163nycejjie.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ldygzvix.html

[G05] 继承
来源：http://www.aibaodan.cn/163iikqqqkv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lcwkgpuf.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163znhhmibb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sswavbun.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fccfppow.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mkzuynrq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163aqbzbqjk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lifbrtzf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oszbpeyr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bmhtwppl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jgbniwes.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bskoyrsr.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zwgbryfs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cpdmujoz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nsofhmsa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wbsgeyyz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ecaghjkb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jjqxlhis.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tubfprej.html

Py:   super().greet()
来源：http://www.sxryk.cn/163raokwceh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ujarowsh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163yrkmfpoc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cidudgcv.html

Java: super.greet();
来源：http://www.sxryk.cn/163caxaajyt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ejakklwx.html


<!-- 参考信息 -->