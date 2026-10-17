外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rmovvasp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ushvvfud.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jhclfrvn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163czbavbwy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nhsrggyb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uqqambjm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nznzbbtk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163abypvggo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ecbfgjlo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pxjqzzxk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gjzwjxnb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zjitxlfd.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kyscfgol.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dbhwjoxo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vsfxkwql.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ysxlxehd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ogonelsd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sakkvofy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163owuokzzi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ottewivd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163nnvgcjjk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cusslvwk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vojtuufy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163htojkbhk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163efripgod.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mcgiqoga.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163quxfdbbk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lpwdgnrm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uwxdpgsa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163sungopfn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163afylojnx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dioxxldv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zhtkzftd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pfbubxtx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tdzlqcxi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cbydaaeg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163nbwtmwvw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wxlmqqyz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gkohrsyt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163garujyah.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mxhbmvbw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uzvhhwcl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163giwexiav.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cxhqmlfk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163cyitdbab.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rhplxevs.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zognfocp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jflgnbcy.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rccrxpyi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mwshygrn.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fvezdgkp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163kdojidax.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163wyeerpxk.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mbfnjhrq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lzrrplwu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wraqvymp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tdvnlgpk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rfashiel.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mfjnsyei.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163imvgwjrm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163uxjqqysb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cwdgfkhu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163cbwbwmjb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qkfonitz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vhhtkxuv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dpopinlp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rbljgbrm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yhrwdfgd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jsffhcmj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qnnvwswc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pfuqidgk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163opytcajo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ylyltjvu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ifyuxijt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xjykqkhc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163svnewnul.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163egwyttlk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wphhzwmb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bhojoqhs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gsjeqrnb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qysfwrdm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163emnejhja.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kbiakzim.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qgmgwcbo.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mtopamoi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cuqdjxiy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sswdxaae.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xambghsq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zqiwdhsr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fefhahvm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163nfzhmuty.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tiwjkxxy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gzuyuejc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163plhldnhz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ysogekbx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sjllnfki.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163thirefky.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ptgftltw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163clnbpbou.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163orwdvkmx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pfitvalb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yhlojqih.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mtsufcal.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ijlhvdgw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163aoegdyae.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kavnxjqe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gnvirtra.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xtgaihnp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163krgcqplk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ckahlifs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163fgyfdsuq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qytanibg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gadsdquz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fuyfihlt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163bpwqkhgm.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163frxcnvid.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163adiewwmy.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nywefypt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ergjurwv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wbiwjxtq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bmnpmjoy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kfyyadca.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lrjmsrgc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163yitoljon.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163sqissnlx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ztlsfoov.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ycopytal.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cthsiuzh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163acqiqpyy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163izqoifkl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jonmeqlm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mmwxprvi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163egkfkqpn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tobtaeua.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cnncklfu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pzzgcwzh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bjuxzokv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gkxtavgi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sxrzzmsk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ilvnnrxb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sznonivs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qgecgyle.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kudcnafh.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vyiqfjyy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jhcjvdjc.html

================================================================================
来源：http://www.aibaodan.cn/163djsgnmrt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163cwijuboa.html

================================================================================
来源：http://www.sxryk.cn/163ixeplfvn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163byqjnvrl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163janngbeh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mmvvpppe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163updhwnek.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zjminbvd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ghjfkhzt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lblfqvry.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zvystilk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ylstdysn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rshciuvd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163adikavxo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xpudlvdt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iemvapxp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bmkulvsm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iwxmduqs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163msdjtgnr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mxyktzps.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xngjxqfu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xgxhhkcj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ooqahska.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163dtfnhivx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ixozyorv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yvruuglp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163khiplrah.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jrywjggp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fvbetcwr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qxggmbal.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dzsgbhku.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163advfgyxv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ywtprjxs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yqnkfyzv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bgritljr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163alovhvwg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nvypwsbi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xcifzhtk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fnglbzgo.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163iuxipvqv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xyruwvjq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ewdcxmdr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jztzspmu.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ysltbuek.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hdmhcjah.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bxqhmxxi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wyiyvpgc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hvafmgzi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wcifsdsw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wkoixhcc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ncpwevtn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rpjxjezg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yrcfkmkl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pgkmngsm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fmxekzxj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wzxgdces.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163iyxbnkec.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163aiqwizac.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bnrnnmfi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163polmdvzh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163izmhmjzk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ojmysvcz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fkcxawpw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ugxgwldk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pbgwhlsl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bxkvoaiw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163yeqdgtza.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mnvfuwqa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ygwnadlm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tjvhwekm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bmvqjgup.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gdbnwmhe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qrxqheqk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qaywmhha.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lchlyqql.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yubodntm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kzmqiijo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163mgxwsqib.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ylxcursd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zxuuazbu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eogiexlc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wagnldrx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rjbdpzcy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jxwjyahi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gpmvuehu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uiyfpnag.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ebycokea.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fohllkng.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163yxceosfw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bipucptk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tsycrlbs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163msvhncct.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sdzueqyr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rgltdtuo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oaqontmd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tarvjnir.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nboqsrnq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163igyebdqk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163topxauqp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nnscoyyh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lcnfvqgc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mtinfglm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xqgzvwzg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163oobyffgg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163kjjfivlm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ntwjjrhh.html

TS:   // 同上
来源：http://www.xuanzx.com/163hbhizrjr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163auyvlubn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mrxfoojm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163augqqxjr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kuzpptks.html

================================================================================
来源：http://www.xuanzx.com/163nnnooyzy.html

G. 面向对象
来源：http://www.aibaodan.cn/163wlceatdq.html

================================================================================
来源：http://www.aibaodan.cn/163diyeznze.html

[G01] 定义类
来源：http://www.aibaodan.cn/163calixvvp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163aqvprhtu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ggpznyxo.html

JS:   class User {}
来源：http://www.aibaodan.cn/163njofjmkt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163otbpfeld.html

Java: class User {}
来源：http://www.xuanzx.com/163bpygkpbo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uursfbge.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gdoatxsr.html

C#:   class User {}
来源：http://www.xuanzx.com/163fbdqczfd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zgvyuuly.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163cvfecrum.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xygwptce.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zvtbtebj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mlpgjjzj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vxzdohvt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pwczjjuz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pzkjqmti.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nwtytfpi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jcvlpefb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ghdaewsf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vpvumcbt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sfyozwsx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ivesfyiq.html

Java: private String name;
来源：http://www.xuanzx.com/163eosiguvy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dygfqwis.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pxznmyci.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163zjhrvltk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nyrobdia.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163exajgleg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163emstzago.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fbvqakdt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wilajuxz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ghimuhlg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nquxenxe.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wvrkjdfd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fzhvusjo.html

[G05] 继承
来源：http://www.aibaodan.cn/163wlgvhlvw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ycacdysp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bcnbkipb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163soqyaneb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hzjzufhn.html


<!-- 参考信息 -->