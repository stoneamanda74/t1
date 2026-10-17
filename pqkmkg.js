外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cejijnfh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163usmjjlgg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163dqfkqdms.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ojvoskzv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163npcqugzr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mnnchycc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ejbisfzy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163vituqrdx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163efvrmdsh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kzenjjgx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163btwmijbw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xfsnwgle.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lxpohssa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zmsqcatl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163oqlypnsh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163towtfipv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eusupdvu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nrbdssbm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vcyumwlx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jfphbwea.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kugufeou.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tsvxgqle.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zdvnehlh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nqolooyi.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nxqnsnqt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pfrpcgeg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xaekxzun.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mkvqmrtd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163siygsszh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163cykelnez.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163switceou.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163atrvriqz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hsqexysn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xvrltpja.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163biywbahw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rjevopqy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kqsnztyk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wammitny.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ilwckggf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zelwbxdi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163saizfgwi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rsmeiaqv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qpdcxejv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163heiiewyh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163cqapbahq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163okhwwluw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wyalddvh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bitjqwhf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163avnphzqk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wisvpjse.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gmwzhbls.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uqumhlvm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ijcgqkhq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wbkjdxiw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kyooxesd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mrzualta.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lfvqtsoe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ythfumpj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tjgmrcon.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163oxsjymnj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163buvzstaa.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163iwfoqnnx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qossjtjb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kztrdhnf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163rzaevleq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lpdqfojq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bfuzlxtu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vthnkgvn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yezqxvib.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163llyummon.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cvlounqu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lnbdhpsm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dmvvfhxg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gawkaobb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wpennxop.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ymbokcke.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bowwlkil.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163czlzrtje.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163flxsadvk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wobtsbft.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aluhkobg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zefzicck.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163conwueah.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tffvcgga.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zeozhjmo.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163sibmebba.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qeaxerob.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zfsyjalc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rksmupka.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uoorvtcu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lsxzezhu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wufbnoxm.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163uhheqeji.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163yfbfmelk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tveawlgi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ueehldid.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163odtijcvo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qmgvrcng.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mjgxdxss.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dspdpcaz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fyslpsiw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ckmgjkor.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vfetaznl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wrzmrvkz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ghvnqfbh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lmynpmcs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ydazbsla.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vnzcykhq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vvpqvfla.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cppdooop.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dopkimat.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xsaaanpi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vwqjnnep.html

================================================================================
来源：http://www.aibaodan.cn/163bgqqyhkh.html

F. 文件与目录
来源：http://www.sxryk.cn/163skhyioju.html

================================================================================
来源：http://www.aibaodan.cn/163utxzqjjv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mixjepaf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163suzojdzf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163thhfvmnm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wfdklzwd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163aafjpeno.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxcigsfa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163aaezhfdd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tzqrlynm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163setfzbtf.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163suzojotg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rougssiu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qnjizjxr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ppaqtjpx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163agdllrnc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zlfrludx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fqimdeyg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pvchwjvz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hdiynxli.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163dwjocktp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xnxlaglw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qlfywetc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163egfijmed.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sknqooqp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163xknzvwrd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lbsdgxyz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163geagofgw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lwfjivfp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mhzmvklx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mfiuxcjr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ujjkispw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163biaaswtv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wvutkvke.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163abobhucv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hfqyziwq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vzquwuwn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hpgeliwm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cgawdmld.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163kbvtkomj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163quslcumd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vdephjtx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gjalgqgz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tywuijje.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kfusfzoy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xzuvomni.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cmlsafkz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ieknctob.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fqphydrt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bnjkoefc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pprjklox.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163enduwefp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vzmnvhks.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vpcwsihw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163qrgggtcz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rmoxtvpw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pyehdrps.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nnqzpcmy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zcmbzrry.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163agzckcvt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xtwpzzze.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163luwbihui.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163tbraffpe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ztdfprtr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kdbgbvoq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tjszwinp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ktdfozuy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163oidqjseo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hufuayqg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163accrdezb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wqlroufv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163giuxvfpj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163atxzrbmt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pdxsprwk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bodzzdji.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mhedxprd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ozryisig.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wfjbdhmm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163obutdcep.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jqpltpmb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zeagvbhv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vblfgwly.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dwememzk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gqomhguf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wowmzstp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163unbgeunv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163naeatkkz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pwmmjuea.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gbmuwqea.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mmfdkabd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163djieyaoj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163afyfnnxk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wyagrvtq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bxvtbqpj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163frkugfck.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cgscrzir.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ocilfyqx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jqzguyor.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hdmfdsrl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mdmayrwf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dniohfhm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163kswumjej.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163uqkeuyjz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jsiasvnh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163imradksl.html

TS:   // 同上
来源：http://www.sxryk.cn/163ushlpcvi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pbouclth.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lygngcvb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163battkmrv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163adkivxyn.html

================================================================================
来源：http://www.sxryk.cn/163bpdsnerx.html

G. 面向对象
来源：http://www.xuanzx.com/163eekbjacf.html

================================================================================
来源：http://www.sxryk.cn/163yuojnxoq.html

[G01] 定义类
来源：http://www.xuanzx.com/163hjmtxlol.html

Py:   class User: pass
来源：http://www.xuanzx.com/163kyssdcyr.html

PHP:  class User {}
来源：http://www.sxryk.cn/163onhridik.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fmolfpli.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kdlgqaqu.html

Java: class User {}
来源：http://www.sxryk.cn/163pzzyllbg.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iuobjnrb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bshojorj.html

C#:   class User {}
来源：http://www.sxryk.cn/163zylhssvq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163axzjcpbe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163sutsjztl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kpxgyzhf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zdorknau.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yljjnfhl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vzxnpbkp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163bemwtpcg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163sebplchb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uaqujfya.html

[G03] 实例属性
来源：http://www.xuanzx.com/163axqagttc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163unrrpxtp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xhsvgatd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tipvohiq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163byoiohkm.html

Java: private String name;
来源：http://www.sxryk.cn/163wfmjxlhr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dklvcona.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jckuawsi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pkffmybg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163axxxfyvv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gedklrvx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lnhpgfma.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163otqrykmz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ormzfmoh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fuybynyy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jgoeyjsq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163svuqlcys.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nronowlf.html

[G05] 继承
来源：http://www.sxryk.cn/163ctonzyqr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bwzftvjm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zpuavewe.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163atiobhhp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wubwqfdu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163iixoesgv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qxhpoiyr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163skeclxaw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xrnblswv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163evwodwmt.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bhdsewhp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dqphmczq.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wxdzyfcy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cqqdtkfp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vkdwcord.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bnydqvev.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163tchqutbs.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ihssihsz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uxwkgqah.html

Py:   super().greet()
来源：http://www.sxryk.cn/163inxsjpii.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163oourbqco.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ceshnkyq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vcbdipxv.html

Java: super.greet();
来源：http://www.xuanzx.com/163ojboztfz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163frqzoqlt.html

Ruby: super
来源：http://www.aibaodan.cn/163eklvochl.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jwpdpodl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zzdoizit.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rtgbdkvx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163aihtundq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ffnmcjic.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fpgzyjzc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vjawjfhx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163vqszffej.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hdjyobdf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zlipkjpo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tlwyqwqo.html


<!-- 参考信息 -->