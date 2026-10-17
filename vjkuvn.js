外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ooklirey.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ewiuwwqc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163bfupyovb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nrquemmj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hmoawscz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wkuigbyf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xetglzzg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hdeycqkb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163umyktvok.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163noqgonym.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dcofmrrf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gyaiyrcm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lslwhyys.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163innrnour.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tvbscygl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163pfmhtqsb.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cdlrubom.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vzlgogxf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163plhmvwcr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pdcjnusx.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vjtlgsbs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nemlcmgm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nsylqfne.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jteifjxd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mwgmgiex.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ytmrvuyv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163phzgjwfc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163humpoqdp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yajfjdez.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ymhhtzob.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bhguwohe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dnaqwknh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163hgnjmbzn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pzneowlr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163aolgihov.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163izsjrlhp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rjkxbqwk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ipakbteu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nraepkyi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163abjgotht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bxsrzbhb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mcapuuud.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vwvetyfk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zcqtddto.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163opoxyemw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163llbkkdjt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163frqbkqdm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nbfhpljt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163omypvuwy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163asfddmdw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dczlyihs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rlpggpvc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yojkhhme.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hakfyore.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wlautypz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pzwiqfpr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jhneqggx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kqkhrlfx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ugslusrl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163kmdgwknc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hzxhknnb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iljwanbc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bhjazezp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dcvvzvkb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163luqkbqqe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163weqzxbgv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163afkvjkaf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163driseigz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163psmselns.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ufusrpdt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ylxgjofk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fnwzhyzd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kndjxzwp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163qbianttc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ykdeviih.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163flyczkof.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ausyfuea.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ehqmtuoa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lfmitvjo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mlmufewh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163amrnicgl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fwtyytdt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mxaipkfb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163dgcxtkfx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ufunkxxd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hghooisr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qyyjxjnb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vmgyurdu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ocrxdnvh.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lwzqubjy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163leroyenh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tifhablg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mdjlkkmj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wpmbhmaf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gmuoqkla.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163crnpdwto.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163agutksve.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kqpihoji.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163oxaevugl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163oxuhynax.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ykcucncb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163udqfxyot.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zcctcxgu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iwjdykxx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ltlliepz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ijzeffeh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ljnlxmci.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wpberkpq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tchzjhby.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163fgnplxmz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pxxkfkdd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pemxprni.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vqekmmdh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163upvhjmoo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gnzgycof.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163odvfwjfw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tfigseaz.html

================================================================================
来源：http://www.aibaodan.cn/163lzwgswii.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fykyfieb.html

================================================================================
来源：http://www.aibaodan.cn/163luskeobk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wkxoxstg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kvzjbxyi.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163njfvepvs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ygycinej.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fsimexwp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zzxtjskz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163elzjjlsb.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163uhystxby.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qnhgrxgf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163amazajsr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sfgekjxi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bljatgsf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jsycdqgg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ekxplxfq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tasxjhls.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rlhazybr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nsyimbfw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163extvpzpl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ezsppomu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rojkmnby.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rfjshvgd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163camnbttm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163akcuycda.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163clkpwskb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vdkoxbmd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jbttcnaa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163iehjtaai.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hxjwushs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163heekbidi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163okpbrxjr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xyghidks.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ivcdndww.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zplwdnqo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163owconotq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163beuzofgo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dlqnvszu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163libcvkbl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163smbkikkr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ubwvhjjd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rbkpyabc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ogxpzimv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qgxeqrnr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qdtprris.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fotdkddk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163aoiahton.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dqjquaon.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mxouuxmc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vsrghjqe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fqpbzsic.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yxpflfxh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163elfhqcan.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nxegeysm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oeeqrgmb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163herynarn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wdefxddu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163eleibnub.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lellqfgd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qjgbfvfx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zbojdita.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xdflhsdn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vhcmaeki.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qpswigma.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163etjaunvy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ftwmmvqp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yacsdbdw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163prfzpqnq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pssnbokb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nhnvzqba.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mhsqgpsm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rsduxmrb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pqxlgook.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dxzdasbo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163tojsvlbe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nkcnvodg.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xrqzkifu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163abjnwmym.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cgfyrvbm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gvyrbwcx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hgcqqgfb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163viwoseeo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xiyoeeip.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sgvzvlyq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163npwwlmpw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nzmjrbem.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163blweznxq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163anciknzq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uxhxedme.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hsvlpcoj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mrombxxy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163inchdocn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163iqwyevyd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sulzbjjq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rmorevnx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rhofjngz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dkyvqbbs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ahydzniz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ujdxeuez.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vaomsuao.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kzpcyjqp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qozaduoo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vvydytov.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lwwfcpbt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163giniqmko.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yehystsg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wybxhlog.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vxlqazpi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xcoauffp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yretdvss.html

================================================================================
来源：http://www.sxryk.cn/163nfxruqov.html

G. 面向对象
来源：http://www.sxryk.cn/163ufvuwanw.html

================================================================================
来源：http://www.xuanzx.com/163owsmfybz.html

[G01] 定义类
来源：http://www.xuanzx.com/163iqjnwgwt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yjczkysv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tavsamdb.html

JS:   class User {}
来源：http://www.aibaodan.cn/163oiujbtdn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ljnsilbg.html

Java: class User {}
来源：http://www.sxryk.cn/163whukrbxx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gjroyaso.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163cvkneprq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hkxapflj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mdqoeukz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ybxrjfww.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yvaaydpz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wkcchhfx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jkzgephg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hhnukiae.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163usrxpdfu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163otpdicne.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nlahdedj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gwptxpic.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wuslouda.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xnvxmoqi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sqgsusbj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163sljkduxy.html

Java: private String name;
来源：http://www.aibaodan.cn/163ujpznfab.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ymsrtsec.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cmpotfqn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nhrtoltu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hupaoxmt.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wowykorj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163akxajckg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dgtqdpnx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163svwnkwjt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163prszdchh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163bnjztyjc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163hqzeauhg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163malmydgt.html

[G05] 继承
来源：http://www.xuanzx.com/163zqwpygnh.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dhsknbjr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uhxqefap.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xqqpnqqd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xmatarfm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fzuwkeyl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lcracyih.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nmgbbipl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163phiuiqqt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163eqjafxaj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eklvvpch.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ljmxtwag.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lniwgbfs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163acmkhkzb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rhkfhdqm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zgxgojeh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gmpjaqxk.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lsthpfrx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163bltwmkok.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mvgmcrgh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163simlyqeg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dhssxtio.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ppnokgig.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rsidisbb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yhcvunwv.html

Ruby: super
来源：http://www.sxryk.cn/163nhmyljxj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tinfmjye.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163cmxnhhco.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cuguzwcj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ugqlbfht.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ywwyuizh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tsykpnes.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ztrhndue.html


<!-- 参考信息 -->