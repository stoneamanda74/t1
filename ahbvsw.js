外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jyzldecj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bkmvdlqk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sriqwceu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kbsezkqy.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wuwxtxcv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kuyfxkjn.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163hmdejhkh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163voyibxai.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tyszoncp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163joyvzwhc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tapaymrd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dyhylxuz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163eyifzhgd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ejtppcce.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rhxncsiu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mebngtkn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jyzavmmn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163salhmlvo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ivbfomgr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mubuyvgx.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zmuagprr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yelhkbjc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pmatfoia.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vpgwlzkd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hflvcdoy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kesxydnk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vumgwwty.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zucyqrbe.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qcwcgrht.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jkezvask.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ctjsmsmr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yuruwmiw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ipgefuwj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163hraeuyjz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mgcfetog.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kwqczcok.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163txteiyen.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ydgozxfr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rzmyoyts.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fgjlwoxy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dhsqjtiz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cbvphmwt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163hitelycw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tfhrwryi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163iixyudhb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zitsmgdm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xqktkxcc.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163znljrlxo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yyinffro.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163shnwsdxh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163crtponpe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163matmwhug.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163anlonsef.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mgfaeoaj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163uveuiwnp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jemoajlh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gpahzqcn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uqymrblk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ktixardw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163drepkgfb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vmuyfwxz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163nxnqzywb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fvdlmeiz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hajzpypo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163glawxgmx.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wwvrfbhw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dcqnkbps.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163klryzvxb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ambehmfl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vrctwsos.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163faodaltp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163tvxtublj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ozzbpuln.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qjoxbaim.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xeccqezu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vjwvtkmr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163jzqznrve.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ytpwzcqs.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iotmczdg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vlytapgz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163twfkztch.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fqtgecns.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lbwishsi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163figbtubb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vspdtapy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163etymwnne.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vyhswikt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163flfplvdm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jhpsmmxk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nxylnxeq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lrzsorff.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xknhcjuh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xcznccao.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dmjheyst.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163oaoeihzw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yvvyzfkw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bkmakfha.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wjaqqfsg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pocfujpt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gynaqamn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gwuuadmd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hkvtrztn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163aesufefb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163crwkwrlm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163astagpba.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lforaxod.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dushptkz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rktcpgdi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jjtkirjd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qbxswvkp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pqnudnlg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qhiwsvnv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bueoatiq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163owrniogd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163acxllvdt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cfsgtkch.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xqxbzjco.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hbwrrhgz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163jcuoukgt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ltzbuajb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yzzimihl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yoxsdfkx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gryvnubc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bihgiztr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bzjcfxqk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gtpafqfs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tefxpwod.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rygkopwf.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xouighbr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fkszvrlg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kyjmipij.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cuddyruf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zwrnhfve.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uhmatkji.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bchgpmct.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jkvpmrdk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rvloosyn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163igrqycef.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fyasihdy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kleqboph.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wwyaejqq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ejvuvaos.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ulswrblc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eaklnpyu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mdjoylbp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163uvcrbwfn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163bvzgqkre.html

Py:   if not s:
来源：http://www.xuanzx.com/163ndmozwyt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ancdlpku.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gudsjuts.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163btpahkqo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163geatcyrt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cwwknroc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ewwyykrr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kabfuzcb.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hnddwnne.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zdxumsuo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rdjgsmio.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hkkvncze.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fixurdeq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hzhhdogd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tifdfpzf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jgrevdss.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ymfdphaz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163atvsjxrq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ropyujay.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xqfgntai.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163giievrpk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pojeqocf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163yxgxovsv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qoybjwfd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163npkddwkz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kwkretfy.html

================================================================================
来源：http://www.sxryk.cn/163mgghzpnr.html

F. 文件与目录
来源：http://www.xuanzx.com/163ahozjpnr.html

================================================================================
来源：http://www.aibaodan.cn/163pxsfzjsd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kccqrnrm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kmpqxdss.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sfajevtk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163buacfpwe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zscbfomh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163emfrvmdi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163brgomutt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gpvdpmof.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zbypxdjd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ifilstiz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yrfjzmsz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gquxysqk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163oxdfyllw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mwanpovs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vfsqywvk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163rvjdurzv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lobshpbn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163olrvyvmj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163aquonyao.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pbavpkrg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wjzobtax.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zeimjltg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dytaotcx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jptnwhym.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uczzkkvt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wvuqflve.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yyzngwqt.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163chyhvrik.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163sdfroizw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tkfqxapx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bpyztnsk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kmtdrsfc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rlpcavse.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163lgdrqswv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cvnjplyq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wxbbfqku.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zaylgwgg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jbmiktse.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ucmmstqg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nshssczb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fdwtqgbs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lmgoaiox.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gdgkhutc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163egcicgpw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163keauoabv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dalrabwb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163favakdwu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163thwikyrm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kpijhkqi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163clelpzeb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qdksoqdp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nmywplwj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pesgbtxq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163smnzlril.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zbcozppe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163aplwzxxd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wfftukuo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fqvymyfq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163otdnrkal.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163saszlmvw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xfaizhfg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mizmrlgv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dejiiflb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hnfaxuzt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ejojrsph.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jaebdndk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yhszduob.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rdvnrqrm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dmojthqs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lggzrucb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163txiczwkg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qxhmsyro.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163srshmezz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dumvjrhe.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163aexnajxy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wojaxgrk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nqkxezoa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ewodhidz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uncyswkp.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rdtiwdnl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cpfnqltw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163blomzlin.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hwscuypf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163scrzodnd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qnzlgijt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xehvbekp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hdputdfb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tqurgxwj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mujisaby.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bsvrwmhn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163adoyyrgg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wstjmcis.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163yslwxynb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cybdwtnr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ambkduud.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zoiknwuv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kgfciufp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tulqiriu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mctnxvna.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ocvnblkq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gfrkvtbe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163idkwjlke.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uqzczfag.html

TS:   // 同上
来源：http://www.aibaodan.cn/163csaiyhps.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kztatkyo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fnxusuuw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163prqudysf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wojrgvpy.html

================================================================================
来源：http://www.aibaodan.cn/163dhnsvuve.html

G. 面向对象
来源：http://www.sxryk.cn/163ygfndfjh.html

================================================================================
来源：http://www.xuanzx.com/163hsbjchfh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gldlqlfy.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163npfdjaqc.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gikaqhis.html

JS:   class User {}
来源：http://www.aibaodan.cn/163verydyed.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hznomfzl.html

Java: class User {}
来源：http://www.aibaodan.cn/163dsimmivu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hcztilwa.html

Ruby: class User; end
来源：http://www.sxryk.cn/163khudkgos.html

C#:   class User {}
来源：http://www.sxryk.cn/163uskvvjdy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jqdlyifv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xrgqrzub.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mnjprdux.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gducqqdl.html


<!-- 参考信息 -->