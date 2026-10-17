外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gqzpjsfb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lniandov.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ytruhhal.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fwracmjq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pppekmad.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163liyswlvx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163eanjwumu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163uiojnfvl.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wjxvfrze.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dkqdokpu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uplufuhm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ibbkeszk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wpcjnbvd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kcnaupgd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fngdswkg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kehmvast.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bivozbag.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kzmkgrnz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tjmghixq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wsentbhp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bdwfqrnm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pyymgsax.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ksfrfdpc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lkidzwmd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ddntpfly.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ebeopxki.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hssqmltr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ebcajlpo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hccfxpfj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yudgujfm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wqxqyygc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163afnihfid.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jqbbcxpm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jfrafjyi.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jtnvrtke.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163esldgkyj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163scwxotuh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lluxtvwi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hjcpmzim.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163gdaylvop.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163htrpqucr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163inylvocd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fsczveri.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163izbvobcv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163cjtvyeyh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163meorooyh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lhinedai.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pucynufn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sjiypgvi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163moukxlwu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ddqeiomy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163njbzlmwi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163cfodmhnm.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zudfocqi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fdldzkgl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xcvrjmbi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rkbxidyx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ctwuekmf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163adjqjabc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dffkflib.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pxppxxmg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163svnoests.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163abfodxjk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ggnlabwd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163eyyahojx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163melirqoc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nmqqsfnw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cblzjtgb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163sbqxnqsn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bpcfzjka.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ifhygrcp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mbbsbanj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gcwotqlp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163vwpdohns.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tsgbmxnr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mkmqvrqx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vxpbsaoz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hcozlthk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163llefmmfp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ojwvljyf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hbkkhbsj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cqyxnqvi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vloobwme.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163daeagrwi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nbjbacka.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163nmtvzgqw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163idenjdju.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mymgqrtp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vqwobpaa.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jaotgexd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cbnuvorf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rxtltfec.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vzylzgsk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zihgzvuu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ipxywteq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lrisdtos.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fdryfxbp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hoxoxiur.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163plzwjvzp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xozstocf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tayscuaq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163chrnljvf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zzksqphr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163eyysvynf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rywlxqop.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ljflzvqi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163maujijoc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163veedffiy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ciqwpruy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ooipckgq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tnqtcgps.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mhtlnpbq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fnrqgewh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zfprdddb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mtlzhltp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bknilssi.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wciapnqb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qsbthads.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163axnywuzd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163syvdngga.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dyqbzfiy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zuocdifd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xapuunco.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zzxvvzuh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xolgmpst.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163lqdcfxff.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pmdnyict.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jsfbakjf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xzfuagge.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fsmxomcf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163iuvkmchk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163impmezrc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tbhpktyw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163iedxprvo.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xjatghtz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xgluavrs.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163oxnbyojv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xddibeqw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dmpklgay.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tomnvtfw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163eptghvjp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163kpjdghay.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ujjjarjf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nywoovnz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ngudnkio.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bonhgwnw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rcigdfez.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hgahlhxa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qwwvoawv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nluluwuk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ubelczjz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163oiulgear.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dtjpvhry.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jggincht.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ialxyglt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163syymizdn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eeuhedmd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tvphmhur.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wijvwdzu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163abfotxhd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163oazuxtvm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hdshtlen.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lqufhjmh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gdsftpuj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qjddazgg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ixaynist.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163aitwwqua.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163rhgocxqm.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hexeuqqo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163eqsskgva.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rbuuiyqb.html

Py:   if not s:
来源：http://www.sxryk.cn/163xfzodylm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wzhrkhrb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tnjfxxzw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163bbrcgxfd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ddcqshtd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dzwkgvfg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163inbhxdvf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163gbijbuuc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ykudcttj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163eaaxbjnr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qvpecvnb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hrhbftnb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sddnenni.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bjpqyeaz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163thblikaw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xhbczidy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163siscrvck.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nhkgxhdx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163atguejwt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163szurpjpb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sekgjwfi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ppstohgn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wlkkabma.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xwlgsqif.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ftfyrtoc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qpszulqv.html

================================================================================
来源：http://www.aibaodan.cn/163wkwcovtq.html

F. 文件与目录
来源：http://www.sxryk.cn/163epsrbnrq.html

================================================================================
来源：http://www.aibaodan.cn/163siqqqykn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fldjfvgh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nerqtllt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qvkfgzaj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zcxwubbz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iemmgfza.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bncxmsgg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dfjqmvhu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rcalpaqh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163njozisoe.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qhbdopht.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163iybhypwe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xtkcevpz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pjnezrsa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163amkijzta.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dzzrvvbd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lhsrjhws.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xysvvzih.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lwcfqcfp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bqnczest.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gjdqzkao.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ecxmrivk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163urfsofkj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hirqiwde.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vaaufqnu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xmzboyve.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163beofjrbu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cqaumlzm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lqxdnvng.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bjgfwxnm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zpmvdwak.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gtkscxaw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ofugizai.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163plhdrogg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cmbmyzup.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xstpaflt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163oxqpdrxv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kcgdzdla.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xaglmtlv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wsrjcutg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163djbgjhfg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cgjehzls.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zbusuwqx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xaalbbuy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vjrihwwn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uaougpuw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zmxmwfnf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hnnqurnd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hkcxddai.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kzmovesh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sxqxfnoi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iqnjjzfh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163giaaaeob.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ugidvjnf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vumwxyot.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163obeavppx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tzxvvsxw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163osghmgxv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jkojbuqm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163heudtbmi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kbmgtbbl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zruuhuaf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xepqatlc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163assyjzci.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cuoffrap.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qhspnqon.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wzoupzwx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hbjynudf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163goharnmq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mybeqghu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gtxxwodw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ltkqwovw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bffmxfct.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mieejueg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163bumpbmqc.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fvjguusa.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gjhvdiyl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163aqvmslac.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ujpsyypn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163eywmnizi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zvpkdxzc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ejsobyat.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163eynblayq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qveynnlt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nrsqdhoz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hrqfbgry.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163efvpipfw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163pjvngwat.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163grfkimqx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ymjpysdj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hvudcmff.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rsaronky.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ygwruupz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tmjccxjo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hwlcbesm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163phuuqucc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tnfozfuc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kzeyzawq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yonhplik.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uobnaurk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tnhmdavh.html


<!-- 参考信息 -->