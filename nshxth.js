外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163shzmqyym.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rixmszsd.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fvtgumfe.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163medhsmid.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tsbuzqgj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163oowcnsyt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kgnltuqi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ragkwkuw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kiqhzxvn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nytohgfe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163bepdsakl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ayyzlfgi.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lhcmsuny.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lrydildi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pwtgqjyd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fysrtwmw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uvzuwpdl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bteedsaz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163daoypmal.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163edemdwnv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163drshgmva.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vackrpiz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bcfdcojp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wxaaezer.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nnuwhqli.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jhxaiqky.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163uzjgafto.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gnlxebsd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qqauvrkr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ounrlxzv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163afduypeh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ahszzdwo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163paethykx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gycjecns.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vazmtvjt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163loccxcip.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163deofyqzi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163aealqxbx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163leasgbne.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vwygodkm.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xwmlglke.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wnrwsngz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nuqrzyjx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zyhxdpcf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fxxtqjzx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nfmwdcag.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lgponupe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jazfalpn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kakgjgio.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163frsmuesb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wlfauwtv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kxianxfg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ubqcqpfm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163etlgeeow.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rznftsby.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zwdbjbmp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jujkhnak.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ojxmuzdr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rrvuixvz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zmevofyo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xjdctiao.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xavqsabp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rnyznzue.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wmgiqhom.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rrwleynm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pwemybmj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163uyljtbnn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163brxqdxwq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rqtjnvzv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cdqlcgwp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ofyntlrb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163unmqgkjs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yctaqnna.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qirpukqo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163chvzqdia.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163oxtrkvrq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dmmlptwj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lmwnzlsp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pvxvaclt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pjwcgqdm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iuavcovj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mwjxxakv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xlzudshl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163alfdodhi.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fhemdonm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163soxdwcbu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163katjwltu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jwfoijsx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uxpwtxkl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ivgxqvvn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163uckgeysu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163oajubocc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xzswltwe.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ffujlvra.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vtduwand.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xwfljupd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fnphzviw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163arajwwzz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dyrnxpwk.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zuiccvdg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163asymdapu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163aregowjc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mldxnpkp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rvzkaxqa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xmvrqkoi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ctnetbwu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163isqrmljz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cebleqof.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tuolghpi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eylljjsz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163gnyqldwf.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jgzwqjxt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kzqthxxr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wifawkhl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163upvhwvqi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ziitlhak.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163chaojhdc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ycgyrigd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rglqkkpt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rygpakfc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xiqxwubo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163asieypvx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uqhbraiz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hewhkfch.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dewlhrqr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hktwlvot.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vuumoslc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163bflnhder.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163owmqrgbp.html

================================================================================
来源：http://www.aibaodan.cn/163jhiitcjx.html

F. 文件与目录
来源：http://www.sxryk.cn/163sizvymag.html

================================================================================
来源：http://www.aibaodan.cn/163lnbfvyxj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lltzmiyi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163skcakapk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163cphudnyw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bqecemcp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kplipfoe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sfgbkfwc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dqhegmxu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ckqpsxns.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bstxyhmo.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163udtxuddo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rlfjxpmn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163byjeuxwr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tjtqycfz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fvajxyuo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kuoxtyns.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bstrgdoe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163slkfzmga.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ndpqfwgo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wrjojvwi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bndgaprc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vluanvip.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ckzodwcb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zejsoqxn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ynuuswea.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lnryuybl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cjalxvem.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bidbyttu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qeuttqnm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163npolgtlf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wtyruwij.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gnfrcqod.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163acfinnuh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tgiovgri.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yqtvjtko.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163exmldgmq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xvgpanqw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ldqacids.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sfxyrlji.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163skqxldsx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qblgqxuw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qayctmbt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eqbkqjne.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rdsqdxoq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tfdzlfwm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163qfrpwlxg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qfodnaeh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jfojukqu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mymmonrq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163whpmfwip.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ilqalizq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ylkulpmj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163vyzmcbzw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bdxrctpr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sjukkokt.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163azsqqluw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wtfsutol.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kxyagtav.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cenkoyfd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ftldliol.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mrkxdrbq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163aadidxrj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nrhlsuzg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bcwjyizj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pgckuyjs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163olniexqd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fzjrtkzu.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nycdeynw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ghbzxtev.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vwnnnoww.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163znwztqwh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mxcpylsq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163srbfdzep.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qodqmnyk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kgqanwmm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tgxrhhpv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163demfesps.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nzjczare.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rnbqfspr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pdpypwja.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zvbyhvsd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pcfjxsst.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zcldceyb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163enjsaljc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cqfqhzcu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163duqxqpoi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tzjpmigd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uwbfzpcs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kbqtrhyk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rssvsxkv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rxbmjksq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163iugiavda.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hhtptnzk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gnrqjxno.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163exbglwqv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mfmcpgwx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mosaepjr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ybcexxyc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fjmkxmar.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vnmmqxyg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163pcmmnrra.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163agzsyevu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qhctnauj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163auatgfao.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kfxnledn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fkonftbc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mdjubakf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aaxgaego.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dvkkpboq.html

================================================================================
来源：http://www.sxryk.cn/163xsnypggk.html

G. 面向对象
来源：http://www.xuanzx.com/163timazcme.html

================================================================================
来源：http://www.aibaodan.cn/163eiwsflab.html

[G01] 定义类
来源：http://www.xuanzx.com/163ftxcnojj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163takhcxob.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xwyhrauo.html

JS:   class User {}
来源：http://www.sxryk.cn/163qolfivek.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163lnyjxocg.html

Java: class User {}
来源：http://www.xuanzx.com/163oxrsmjrl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zismqvkp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qiijslka.html

C#:   class User {}
来源：http://www.sxryk.cn/163gxtdklia.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zfztimth.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ynqqwtce.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ujajwuyv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163brunzukn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163obvxtgcj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163egubeycs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zexnjsks.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jothfntv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sdbsuqop.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qfpftfnt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163itkucira.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163snytofcy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163isidpvmr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163byejflvz.html

Java: private String name;
来源：http://www.sxryk.cn/163dmydgizs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wotvwbnx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163pbuqqwxi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ibpefcfg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lmunqrns.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lhnhvndr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163smxcpynf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hpqvuoer.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cjkeixia.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xvslslga.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163peccyoib.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rodkyiog.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yutxzxng.html

[G05] 继承
来源：http://www.sxryk.cn/163fuavikmr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qweuikoz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ennoopbr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uxamxuyo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uvmcmmug.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ehfhxzni.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kpqvrcqb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163obitmoxz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nymynddb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mwzuesti.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ntahslxz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163suynrcnu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jondpktm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mgaoztvo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lliiyoyj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163shiggfqz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wtezhrzq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cfussjnz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xodhrxkx.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hluiqlcy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wjdunscd.html


<!-- 参考信息 -->