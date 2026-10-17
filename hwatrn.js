外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kizaoygg.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rcxxotdz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163virmqmbt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xfrqxquc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lqdohvxv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163vovuzvvy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fyzcuraj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lvvzpamq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xfzxzdrk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163iyjvzakr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163upknbdkl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rqthauti.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ugcqqcoa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163javdyqiw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rzigofhs.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163tncqjnpv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xcmbcbgz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rnvbmrhk.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dsdshaql.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uotqrmrl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163svdunhrp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163raajpzws.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tigqehpz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nozmxeca.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mrrfaxjz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cbaqlddq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qbjstrhg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163cwhxcdul.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163byzzfmfw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nsmwbhps.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pqwiixls.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ildfviub.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ymnpezpn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kfotrqfp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zbjpdgqb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zmhzwhzm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ngzvvlbn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gwenvjey.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vondktcr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cdfjfyln.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lssgjelg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163rdmosebt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dcryjafm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vnodxrij.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163addxcwok.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jseidafn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163onmjkred.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hqfbwpwk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wtphvnxp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163nscoczen.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wpzmrbxa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zrjhnjpf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ossdaaoc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163iyoqpdeo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sbwqbxoo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bzprzlrg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qzqotltk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xanxubej.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163msojxprb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bbrqpklf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163nixrcrcg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hhuqqttm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163usxnpdtz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gnyyrgnb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gcpirxrk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xfcqaqbf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ucpptczv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qiqtfcdf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cooncakb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wzhktyzz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hbcbotdg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163itvxvoka.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jugpyvsf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163trjhrdqt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gduoubax.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ryinsncx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lufoowde.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kagomcjx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vdbuhszf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fulpnwjv.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163snlmaick.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kummzayo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wuywlslo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ypavescz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tzgahtnh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fzyniqhe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ppzuugdb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wloaydfq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163seowxxic.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mpodxdbb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dixgjvjo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zkstwuzr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kyeabdwe.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163skoatfeu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163covmhouw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jkgokeby.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nwaqbdnu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wyazkrgp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jblfbsaj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rsjckzng.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lukvukbi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vshpmiay.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163irenggcf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163uqtdxdul.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163aqhnqtpf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rbxuufwk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ndckljqw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bqgiiykd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zdwsapzv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jueawclh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nilnxfrd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dgjzjphj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kqyzewkt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sqotulyk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jymwncbj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163krunvhsg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gapxzqao.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yohfppxc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oisrfedh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lqhvqiwe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uvzuudow.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163sdhndaxo.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zarjeozx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ktlxbikl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ykomtrma.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ptfxidct.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kpinvdly.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bxtizopq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xwjzpouq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163wvsgpzlm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163aixzoove.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jctzrpcz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jijphhfj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163tnbefcxm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rbskgwwr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tpmjpjjy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zspwizmu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ycnrqdiy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hykjukzv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163oqbhixit.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163cwjbfqcp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fezwccpf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mvlzucqh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kbugkshp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sqdvidzg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nyqkiygt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dbsbwfkk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yrggvscz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163tsywsofe.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163pwdnnegu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163dfsjoppq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kxkdywth.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vzxbrwtk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nuwpekrz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163boxlbswy.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163isdhffto.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dfyiovce.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bwfwqems.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163oxwuqwbk.html

Py:   if not s:
来源：http://www.sxryk.cn/163rhddlcft.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cwaelqtw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163arqggeto.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qkojqrqh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163tedyurlf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xfxdqdgw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163skhosjeb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ziwrcgyp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ugffwzcg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pqzerbbg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nsiquwgb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hdksfsiw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tosjrleg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fmwfrtgo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vektxukg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xjpucpki.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tssrhlsj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jrcvdeex.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163phifadwg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jaetorss.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gntmjsix.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qewnxrhw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wsulfczi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jtsomrod.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iimpcxdw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uszjltes.html

================================================================================
来源：http://www.xuanzx.com/163sbjsivqd.html

F. 文件与目录
来源：http://www.xuanzx.com/163zkrjbrsj.html

================================================================================
来源：http://www.aibaodan.cn/163yqiblqwt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fpotnlve.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163emmrxslb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qpflgdxb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jvpcpesp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ykuaeruf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jtmvnwhr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mkkesgwl.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163mebwbavv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gctadzoq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ptmpqicx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xipclmqa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xpkjgvwd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cmfkljzi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163alvruhbx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iaermofz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163purzmlya.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bqqdtmmu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vffstnjy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fekmuhbt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wzrjkmqm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zeubntyu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kchlcczh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ilhgyrrr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zzlwjhie.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163tdwvalqn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fqxzneta.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gjhularx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163aakermnd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163cnxzzmrv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wpujphzu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163farwmznh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mtevhbpe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dkdinfkm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vsvfeeyp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wickhhih.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163devxztrg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ugkeaukn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jsuvmzve.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163oozqsewq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qvvwwygm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bevvmsmd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ngybukne.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163iynkkfdn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163awqqqmek.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163odlmugwt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163eicwewpl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163csslvhlr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163utadfbwv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163geddguuz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ozknuyek.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ovxocsbl.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163pvdzxfjm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mbktsyee.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tnyggjfz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ollfuvwh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wdvfxdeo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yfxyujjq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pzkxsbqb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ivpqpscw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cgklpddy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hvbgalpf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mrnodvig.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163opkvkwuy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hszvjrso.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163bvtskpkc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kccygmsq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ecgcuhrw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gxpvitoj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163agmoykkn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163aldbuikf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163heqbvqvl.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wxhkedxc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kkkzotzb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pumymgrf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163awasmdxj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ongdjcqs.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sowplpnk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xfxzoncs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jmnpuawq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163iisrhbia.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dwftwznl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ggkvoopn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mufjiwdr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163dypwsqdc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vqafluwl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163idejqnvq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kuzlwfip.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rbyrfdlp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jxeqlerm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jjdflzep.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uwpwkpma.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cprcqlub.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163njjigvky.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nsfopcps.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zuqivuib.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kctrdnws.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wvmwtcoz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ihapjisz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163rjmcnkws.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163yegddqeo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nbtrcgtx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zydvijog.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hkepoxuz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yafxsuaz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fzyzvupd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ewlngfzt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ufpebmvq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xcpdtsuf.html

================================================================================
来源：http://www.sxryk.cn/163tmmbpkto.html

G. 面向对象
来源：http://www.sxryk.cn/163jrixjrup.html

================================================================================
来源：http://www.sxryk.cn/163wtkxcoxp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ttgghppd.html


<!-- 参考信息 -->