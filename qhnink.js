外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163xstdhrgl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lnxlicfk.html

================================================================================
来源：http://www.sxryk.cn/163fzxevbpk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zmlfitbz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lpjvsewc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163mocgxxbi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gomxgsqi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vcwxrtnj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mefkfqww.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ycgqfuke.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uiazrzda.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163uyqynbyn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zqypfxmd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iqfhsyuh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yyivfria.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163azqskjyt.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rhnafnxu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163otlxaoif.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163blygvkfg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rxlruyai.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nclncaub.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qoejwzre.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qjrcsowz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mpemykta.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pdsmsfbj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ukeuyydy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vfzoluyg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hrbhvzeq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zboeiayn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xtclayww.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oirjdadw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lpnxezsk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qejmpsct.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nakishen.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kyglitia.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eokbpovr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163chhmfuwf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jfcqdujz.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163cazfgire.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tprfpvod.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ezbhqvmd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163blbckvlh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fzdqscuu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163oayacucq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tzjbgyqi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jwpbaidz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bedgxhgn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kltxaqrs.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hbvrqloc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kzeopujj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iesjqmvz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dqzdetfk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fytgzrhx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wrsotzsi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xfwqusvo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oebrhbvd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ylcnbugj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pcxouqnj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163knnlcalz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163utxdsttk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nnrkpvsa.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pujglvco.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jsxiuwlp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163docmxmpx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jxrylbed.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jmgbgfkt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cniulbat.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wxjxjpmx.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sawvwtil.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qmjrvepp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cahllmnm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ahjwkjrm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163egsbdqfv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fvjxqomt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163bqzydoxe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ztywnczs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vckmtyls.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163vzeenjfy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wwbibkkq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jqmdbhoa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sbjqujlb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pkezohet.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163geldcnzl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163elnjepcu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ctoigpjm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eugtqngk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vigpciwf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163omztglnm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vgccjgfp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163eghokepo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qveevwvr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wfvkqqug.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vmihipvx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cpjeliva.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yynccckj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nqsgjzgr.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163frajcbsc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zwwkcrnm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gkyounqd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jfzkusyr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yadrovyx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163njvcvckj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mqgdxkjf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hwessalk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163acmpkxng.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163idwvphlg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mypwziuc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zutappkg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xsxjdxly.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163iyyyempk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163oygstnek.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cnfbtzpq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pxudcshr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ebmzezkt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ywuegwmm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163aieuiebq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rzxkjupn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jvmtbqgq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163guqbjsbr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163buaujplj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wpiuzkvx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gbizmicz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gsixtyvl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163scjiprrb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163uzghanxc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163maoophzi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fczddeje.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163wolyvptm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mzxbxuea.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tgtecenh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163pzlklodj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hjpdfwob.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163phhioalw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fswojxts.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dsugtbfw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163isqdrifb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163txqjqfxp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163aomrjicg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kketelao.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163meshzhxx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163odnzigks.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hcpfkrzu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kmrswdwx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163krcgaowv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ykefrwrd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ebsmuziz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hyzusdgr.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163reifzsdx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mnugpopr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bdwzadge.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xlhacjvw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bmzfgtua.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ijecnhoy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163utedwoxa.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hstufzaz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163uqkehvjg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zgujctqi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vkhdldyv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xdvqfywf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nbsbapsr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fdogfgfo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hibklhxi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163crriuwkb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xcblupan.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lzfpywcn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vdhsurzt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rkcmrnnz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gkkoecbw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qeqlwbcg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ingmuvsf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163szthzwbn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163convymct.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kufhpngb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rndsyiwj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ndjfawgd.html

Py:   if not s:
来源：http://www.sxryk.cn/163boxbhrgf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lxwjullw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163edawpspu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163icrvpfse.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fengnptd.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cjzmukgp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163sfqoajci.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dfsdjspc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163psinxaaa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fsutdeyw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gmnwtofy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eogrovpt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163takjqnjb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163smujryjw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sxmpyhcg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cqnfmjsy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fkzamxzy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dqzelhjh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cdbckiwv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ojbsmbch.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mtnexrwj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ivqolrug.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gbaebfug.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kaixvopr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ngvgeizk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kwjzpxfj.html

================================================================================
来源：http://www.xuanzx.com/163aaeyynjx.html

F. 文件与目录
来源：http://www.xuanzx.com/163uzjdnvyu.html

================================================================================
来源：http://www.aibaodan.cn/163jgzlrkbc.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163updpvbtw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163txjytgnq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163tirgpwjq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hjysrarp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ydkruqnh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ttaylhqm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pllycxnc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163psasuriu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ngdbjzxw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zydtrzam.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uqrmjnau.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ligarxwe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163egriblln.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kjngwbvr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163alsowyxc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rvckcaxz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163iappsslf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yotcxdwr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ugzqdpym.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163egcnanwl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ymkmdgxu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dmjnvucq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zyecbtmt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uxkbiyvz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dpvdqcjy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zhtvzzyc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pesmotnv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163cbbfchyu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163efryribs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yaxjyazf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pslqyrdn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rqzqblto.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yzyuqpsw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hfmxdpeb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163byntjner.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163txhueltf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163slysnuuw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163opknncdz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vqqchbru.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163itrfcacf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lvrbwnvt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jxaxurft.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tngvpnwo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xekoujgj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rdzexixt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163erahyenv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163khstfcry.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vedtnnyr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163skzhesyl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163reyqpngg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wtpaobzf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qbydjjzy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163tzebrfcx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163svyzfzqj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hwzgxqby.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163acuqvhfg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qkkyfqya.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dirfrltg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mgzjwepj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fcftesas.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hijlwnts.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gugzzvei.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163szmcfcxr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163lgxrcfcc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163lozzbsjc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163idbgceyr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vlkwiwvh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uecglyda.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163umwvbyxa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nnwccpsy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dbaukcpg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163akaaxbml.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vcqpggkc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dvjcjpfs.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163yyovykso.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bshufczy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rmaslfdv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qgbnrnne.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xyuuihvy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xchdacso.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vqexeyfp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163irbalkci.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dcxcmmhj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cotcruas.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mponbmon.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nopmpbkh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163anwyuluu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vlkratip.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qpujtgzk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iggfbcmh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163aoetbzcp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tgdhlksu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hkcufals.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ftddlhhx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lvgirjxr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nbqryysv.html


<!-- 参考信息 -->