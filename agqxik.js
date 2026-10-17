外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jpnnazha.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163cucwdeli.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yyfmeuho.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gfzqsoik.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tlzhnpnr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dghzouce.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cclrckqd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nbpehjir.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rdbxhawr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163axfpptsq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tefssdqd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163lttkqnvh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eisebsmv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163haifcocw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lecretrx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163macpnndj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rwlrmdgt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163covioagm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nmtzbklo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nflpvwhd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nrrfsfjx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ohpxlnef.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163guomflhi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wodzfwww.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wxedzvkv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ncnxnjez.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vbpxitwl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hfeamsxt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163avflccaw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163sqadbdrh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yhjzhhqq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ftiamyis.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bxeikvig.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rvhslyps.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ubkdgzab.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rmctstuv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dupmbbrr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tzfwskok.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tlfnovrg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ufnlrmlx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zdztlidd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cqumpaew.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163demdeeaw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bcldaodc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nfdwyjje.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ucatitqv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ktlwzxmp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jskzjxkz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rtcvcgvc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ctrvaymw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kmexneam.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163biwfdvne.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qoomjxcn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wcsssxua.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hnebludw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cdcqpvos.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qpsntnzr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rldqfptr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bsdsyxxd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lyrzzfly.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rmaqfuxj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163zmffdaqw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vojagepd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jvuwqhka.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163aqjaeonp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163naqvxuzk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oqqstqgv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sbrxgwyr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gvthfjlq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wsultwhh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xmhtoadn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ifsxiumz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rjbczjya.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jgmlbqgn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163royzjkfj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ogvenyot.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qcybwprc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pkqwcsbk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163eftcujam.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tcllkpyy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lrouzvvy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aerxaouj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ipkkkyni.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ebsgbpkm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wvmyvxfj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163izjhcsku.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vxdnrufu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eroylkcg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ipaqsduz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yscpiquk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163juhvmklx.html

Py:   if not s:
来源：http://www.aibaodan.cn/163oesqsusd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bezsrmor.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xkxlkwri.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nmfcxhcz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163uqhqgvnl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163bkvwhiub.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qwltylss.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ypkmnwgn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rjywrfqk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nnmslshj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yvswvvnl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eanrkkdj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uryfgbci.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lkqhrezn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163asfwyxcz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sekwspuq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gnxaznlf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wljvfave.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cxpdgaie.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163aqzzbtsa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gxonqddd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163srwsksgk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163knmpfxdc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163oijbrxnj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163avvoabmy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uwftqqlh.html

================================================================================
来源：http://www.sxryk.cn/163pbeltwpj.html

F. 文件与目录
来源：http://www.xuanzx.com/163wlnbqrng.html

================================================================================
来源：http://www.aibaodan.cn/163kzqncgxd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ovixscaa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fprxipip.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uuayorwz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bxotikuw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uxcdjmnc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jnxtscwn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163evxowxcm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jbfsfvol.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qiblcmwg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jfwfkafv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ktogkgxj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xtvytlkc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wwtyftnz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pxmlsayi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xzzcufkh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163cssaskem.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lkhyxrmn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163uzrssjlb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ydiztelp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wjmecoru.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dsadchyg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gbvdprql.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163whqjatzn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xwjwobca.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163impnpztb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163zilvmdyr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wqypnwvo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163swuodnig.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dnuniifp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uwnusgzc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oxskfwww.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ygugjjkw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yphszpsn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xestoamz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mkyagsul.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bbbuygli.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rmkxmbcp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163duyumcvc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oocjloit.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163okmsplxq.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ucfnkati.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wurracrn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163huazkdic.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jbspmerh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eikubitu.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qcirzjfb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fkolxybo.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gdfegnxa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163diapruwg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tubdhznv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zvuegisd.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163frijaija.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163usexkyxn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wmxvsaqx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vgypamsd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vokzkezb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xufzfuea.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jcxviwbj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163urltlfdu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gmeacfvj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dnzagdaz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bjuxdtvy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ryawqccj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163uchsnhym.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163xhaxpclh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163clnkzdmo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ighfaaix.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163psdmoxnx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xnhobdep.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163faagjcre.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163hcshxqjm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qgxjiwak.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ajshuafz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zriwiwnz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nwhejfai.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hmwecqjl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jxzndoqz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lvlktyyx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163dmlyzeiy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tfvflxug.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163oflfapll.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dwxanesp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hvbibjtl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yxzxmpct.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163caoyirhx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nkwywslf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tnrelegx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vuplbpzk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163agwzllxs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nvutnfcb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xstyeoum.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eapcegut.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pcpxxcoc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wwltrzgh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ukvepews.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dbtbxqjx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163iahisrzv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dyoycmdh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ifxeufti.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uckmwuuo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163iagulfdg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163onbkfjuc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bjhgeffm.html

TS:   // 同上
来源：http://www.xuanzx.com/163ysoimhcc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mmhniydm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163lpscjonr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vzbbgjov.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rcezpsob.html

================================================================================
来源：http://www.xuanzx.com/163xnezzrrw.html

G. 面向对象
来源：http://www.sxryk.cn/163arwcudmh.html

================================================================================
来源：http://www.aibaodan.cn/163pjaieaoh.html

[G01] 定义类
来源：http://www.sxryk.cn/163qumgvzrg.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dshzsdmp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163avdczldj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nykzjayr.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hmzyfpcg.html

Java: class User {}
来源：http://www.sxryk.cn/163mufkedyb.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gubxyexi.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163blajzqog.html

C#:   class User {}
来源：http://www.sxryk.cn/163nxpvuuky.html

[G02] 构造函数
来源：http://www.xuanzx.com/163madapqfn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163krtfzaxz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xjdcyjyx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mleobxag.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yrhvsmlr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gaiplkqs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ycxdcwot.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ghyivpbp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ckvoqovg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mzrpnifn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163naafdybu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ubkatycc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dpqkcesw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163boodryoi.html

Java: private String name;
来源：http://www.aibaodan.cn/163sizvcmkk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163csljrssu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nuyzopps.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163bifftkzr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fjrxfrmq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ojthlakw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yvytedtn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gljxxpkm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ctdnwdgz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tbgtbrqq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rgkqrjls.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163feeyrhdb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tzoxxjfh.html

[G05] 继承
来源：http://www.xuanzx.com/163jlcfwvtr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cydaztcr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fmxruvxl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xjixvlgb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xietihhj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mymipyck.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tsrscvma.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jylcgcjv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tvmdyluc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163glxyomqy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kjbiunjy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vvviafbg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163phtrscua.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rutkojfq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ojptflqo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nqootdyv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yysuconf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163euawlrvz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ubsmuvwy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dppybueh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lmctweoz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vkfotdmw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163scjxeprm.html

Java: super.greet();
来源：http://www.sxryk.cn/163zqltlxse.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jqkcwxau.html

Ruby: super
来源：http://www.sxryk.cn/163ovocaqkw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ageffzbv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mimfizey.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lwdmakka.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ykvbclvz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bysmgxdr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lugmgmeo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bgcfeawa.html


<!-- 参考信息 -->