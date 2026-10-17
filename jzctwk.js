外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kffkelfj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163duvwpgri.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yjyugubm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163sumbczum.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fwpdhjqv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163skuriuml.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xzejutza.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wyomvspt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163osjvcwkr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iqwowtaw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fnlreuqt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mvpsgaoq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163itslfozh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jbgrvlvn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163woqyipou.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mywgukjj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zuxiempd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163aguompxn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nhmpacyc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163yqbgksqe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163extrchup.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gyopbrvg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163beojrcgi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pyurctdt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163corfdzxr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rupymamh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wvpdjnyw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bvwslmal.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163nojyyzbd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hmfwuztr.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jhvzukgg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vybkbbdj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qvulbjaw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lhezxrjw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dsbvtuul.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qwugefyd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163iqiirxog.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163cwxbpvqn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uyppjsdz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sunzdeyk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uvpndyaa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zyscpval.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bchjqyvc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kkyjhpxu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qevmfede.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wxkxrvju.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hroixycl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pvudjyon.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ttfoftyx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dixfubew.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163njoslpat.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cousxvcc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yxbrfmeu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zopnvhjv.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qwawlmoh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163oxaywbdp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qgflzigx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xzrwpkwt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bwwyxqjf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hgftdcli.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163cdakjjco.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rfzxcbdp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dsabcdmf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jgsrumcp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163fzwzsbfo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dkzqhivv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163auoukvnd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vincmwkx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ycqowftt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163herdjvou.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fijdcjux.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tbuoiaxe.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fjhszzct.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kiubcqth.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163insqglxi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bbbpxvdj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jquqlaww.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hzczqvoh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gfagxdts.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wgkwasco.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163mjoebxqg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bwkykgsd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eulxpcsj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163oeozavak.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163iqbotdrq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163klnlmwod.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163udwtzyoh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163fhxagxjy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xddwdres.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163whcdslbv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163chexafkl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163lghecrfo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ingbxzbm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163zqdtpeah.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163mmayzvyg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gggkcwdt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163puugfibd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163fyiqbvsu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xszlnmmh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rvgqopfe.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kgxpelmp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ujpctzwu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dtcnzffq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mltoxgms.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fsscqwcd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kyknczwg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ckswvmlc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163igxkxsdj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rehdniwv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xlqldbik.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163huvyfvag.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fvmpyxvk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zhjadppu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yndgsdmq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vhbaelsx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tjufhizo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ciicqbmi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bdrgrxjp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cqvosyjg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163aloolgcr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vqttiyxv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163iaqipmfc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zjneepas.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kczjdwrz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vogcmbun.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rpuhvcry.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xlhmomtq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163bfheczmf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zgxuzsdb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tegenpac.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163myeblfcy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cgtzmzbe.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qagncjkh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dmctmwfr.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163urncvxje.html

Py:   if not s:
来源：http://www.sxryk.cn/163fukwznca.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163uwuxkkni.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zhihdtjf.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nomoqjun.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tygzfuih.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sjwpgtqx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qxvfntmo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mpzjllkt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kfunohgh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ajvffsdu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zpaxuxps.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eszljcfw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pskbrnzg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sguyvgps.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kvmtwxto.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zhdawytl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bihkzwfv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163sgbkogbq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nmoomhbv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wongokjj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mnfeifmd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163epdowogd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163prrrunek.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163mpjamwka.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kpkyythb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jkxwjkis.html

================================================================================
来源：http://www.aibaodan.cn/163sgmkcbbf.html

F. 文件与目录
来源：http://www.sxryk.cn/163rjbdkqui.html

================================================================================
来源：http://www.xuanzx.com/163sqomuvsd.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163burddmjn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163sgbuzavq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ecbnorsf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163tgrtiamw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163naybjjry.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zebympei.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163sgcijsty.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gqrzmipr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ttquxhgr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xjebjiiq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tfpbsmvy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mpvygyzo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tcgsizeq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kvtqafoh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dqczkenh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rpfcnuur.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ahioykdz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163snmrhwmb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ojnbwqxe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163slgvtpgz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163oeesfdjx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163getlcydh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fvyjbnpj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vgubchne.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ziwxzdqp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163danklviz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fqgjqctq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163sctlzfri.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163atvktiij.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163cjphpczw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cfvqhsmd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wdjqfrol.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bfmedjjj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163fhpepjdj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163qsvumjtc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163egpwrcfe.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lfugrsga.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163nkifbqcj.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lfjwdtiy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oaoisjek.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gjblkjah.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ymgltzhg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fmkfmusp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mhrehquc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163slzoczuj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163upcrqpfk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gyzhrbgd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bolgeybv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xdgakktc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dvjlsqeo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fbgbcqfh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sjbwrxcn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163sdoxinng.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tvqxyerf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tijlgzks.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163tcmwsspn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163waspshnh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kipopagk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fjnyghll.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ivqcabbo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wesxzqkz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163njoummdm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nhmgnehn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163tyqjcyac.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fuzrjeqa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sntvyjvo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163izddbtvp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jwkaoajo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163omdbhpnz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ohoucoap.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mresjvwx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ttlimhan.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yecgedob.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lijwmbap.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163litpeubv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gvgtwgtq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mtnsyyty.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gudkipji.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ctivghtw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vdczoczr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163djmwrvux.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163orvzzbwn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163klalpuvz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jksnebrv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qvlxrkwo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iuffqvke.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mseasubq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163xfxsxcva.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163okzhllxo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mpgikhcl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gnoforzg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bwlamhxs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163bnywfzla.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nhpxykki.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163stguuieq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fmhlxrdr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163isqzblwz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iinsadhv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163krqtxrww.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hyvgolol.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ghhwirnv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jesdodrq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ljhnxwrk.html

TS:   // 同上
来源：http://www.xuanzx.com/163bercwaop.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163suwzbech.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fevwyjky.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163egrurusf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rbtzvrnb.html

================================================================================
来源：http://www.aibaodan.cn/163jghkzdgj.html

G. 面向对象
来源：http://www.aibaodan.cn/163xhjyqdcc.html

================================================================================
来源：http://www.sxryk.cn/163njyvcmqt.html

[G01] 定义类
来源：http://www.sxryk.cn/163fzexvrrl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rlsofbvt.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gjcpfkif.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lashjkpp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163exefevqh.html

Java: class User {}
来源：http://www.xuanzx.com/163bvsidubn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qwxdrkzw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zwovvljz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163arpdeuqc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ryxxhght.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wtgggqfu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vmlejhlj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jzbsyfsw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zbnhpnng.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163adqxhbpe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qjshpyrv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163beruejot.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163swfhszqn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nciyzxii.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fkkdahha.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rttiurly.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cujuykvg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wgreohle.html

Java: private String name;
来源：http://www.aibaodan.cn/163ejuntxqf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lrmhoema.html


<!-- 参考信息 -->