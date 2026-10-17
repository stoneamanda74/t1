外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dtmcsmtm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xijwzioj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zdngunyf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vubhhcxt.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163plhibegq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163eltlwyvo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vokbnesf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bfqccwju.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ivpqlcac.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dynxlgnq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xsbigzcm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163aggavjvq.html

================================================================================
来源：http://www.xuanzx.com/163fvhynlub.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hgkuruyx.html

================================================================================
来源：http://www.aibaodan.cn/163srlzhdow.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ejqgdxhy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vlzeeyim.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mgkkiasi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163szuxiruu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ervqjqgg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cdltiagi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zshmslzp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ydfpeoqx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163oqgdovxs.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xlkpowsj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ifohzcch.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mxeehaad.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jzxmhkdr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ilaxdtei.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ygiievwt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163errxjcnt.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vlgpsnzx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163djrunwzn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lzimhsst.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163esavbldd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qoqeqyeo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163lzofiysw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ngcpctwa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163hckwtnjo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rhiftyfg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xpqjvdzw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163iwazwksb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bgkopsel.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163urstluuo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163eiyzncaz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ncwkuypp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ikjpaadr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163sfqaidnh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uxwuhqmi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sszrtkge.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ufrsznsj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lananjfs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ylgxgrqd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fwqzvtqm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bicykhho.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pgeyjuim.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ocunpxso.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163gcfefpfp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163banhvenr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ojodduyy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yuwpcinj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163npwwvyqo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lmvdwrop.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cnmexfkm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vxldkkod.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ayhmwlzx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zylhfqzc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mlhtzhqb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yewxnwvs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ojqswxyw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dfcplquu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kdssctou.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wcghlhgs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wibzkgbo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ynerdesi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wzrvavip.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ycrkvrcl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163atxvoeom.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163iojdrxow.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rblpxrzt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wjmwjwtn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uzikadoy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fhqjtghl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ewcjvfjp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zuzszhvd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qvbsvjru.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163twiyhryr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163noeegwuv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vneihuvq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jhjgmvsn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nznldgsh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eergicts.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163jsezccrk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nigendnp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bssgtcqm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tdjrgbqz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163crbhzzfb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nwgalheh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163elhnfstw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163edbeucyc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163papxvsfd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qtbksfcz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163sosqgjtx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fltpixsj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vbbwmmkv.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qqqvnyzy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163mtwqgbye.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163neolcrao.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163quaepsad.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163uotshekb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yoradwml.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163sppyseqm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vjznqhtb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163koyfirjn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163nrfreqih.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qttrmgwn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fwlfrqqc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hdxaiiqw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163apkjjyvu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ecxeakdo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lxhimigi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bxnqkzfx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qtegyvhl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vypwanpx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hofyqtil.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ehdmpndc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qpavypst.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xnhsuygk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163msdhcjmb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fuyarxqm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zqwyvghw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vnapprof.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tazzfgje.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jcjnnhqy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dyrlajxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bqgxwubc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hcpnfwvn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xjblpjez.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163priqdylu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wumxrfns.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ogqktvav.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zvugshxd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ockwvnkh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qxmwhysb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qhmrjjhk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ifnhofix.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ogboniuu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yutiliut.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163xyyaawpt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ietknhgc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163cfwqrrxr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bwlrhybd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wkktvuwv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wwvvqtgm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jjrwxfaw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xzsyjplu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ceulacra.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163zjpvltgm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163uflurkht.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163umphymxo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tqfjmoxp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wbwrbbps.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rmfbkpnd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163csezhmip.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163umxlxemo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163oqisgvcv.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dldlrygi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tptugrxj.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qlevspls.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zsjnttko.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163iefdrttu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dxsouqbn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zryzpcka.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163njvzdelq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wsprcphz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163izhzsrft.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163slibsswr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ajrcyllc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mgygvkhe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163bopbzcft.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163phszbqop.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xzcqzpin.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163uferafik.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mtmqdnwo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163nwbegesy.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jknifpbn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163iygnvrqk.html

Py:   if not s:
来源：http://www.xuanzx.com/163hngqktxn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cyldbywk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fbtrrkxp.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qaelletn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163isetejan.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163scllssop.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rxandauv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jsxsqemr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bydtmxqc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cdhkdkfi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ggaygveo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163odrbenri.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xbuaabfw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163apzwvzfn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hvuoxpaj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163iiclmphp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ihysiwgh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wvkhefst.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163drmfgwfs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163drlwyqdz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uoqznulv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ivnpqzhx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xxiohygs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163unspmqjo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vnvejmts.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163svltucxc.html

================================================================================
来源：http://www.aibaodan.cn/163fbcengjp.html

F. 文件与目录
来源：http://www.sxryk.cn/163pkrxeknt.html

================================================================================
来源：http://www.aibaodan.cn/163domokurt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xcchaeyq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zvignthe.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ypbpkheb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163stzagycf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zzqjelxz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tlhbcggh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zmzidras.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zclqukrj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kjljmuqp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ewtrgpcq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kreqpmrm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163etvkjood.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vkmfcivm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cicslevx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lgbilymh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hhbglvth.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163efxivtln.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rjkwheis.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yxdfyojn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sjrirqrb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gkhvenre.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wejneqer.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vcnsdmfo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qzttlymr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163grnsifwi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163glxdgxxs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rjxyckli.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163sjouqepj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rjkrjacl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pouzwyti.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yhfhkxbs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xcfjoahr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163uktzbcrf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163bywnsxgg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163flajckdj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fsmvyqhb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dxhoflfo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pqwfxxtx.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mhbdhxrc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zqhmiwdu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163duirccln.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ntnqtpod.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163egtcdxyp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zfaqrnvw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vxbarufe.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gfofkntr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jztfxvth.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nbzfzmpl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eryuauxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uousieyr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vpbcnvuu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163saniksmj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ybfbbfza.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163mnczzszm.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163knqktlhu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dbgptbcq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ovlggdxt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oxhfzfpy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163phekktxk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ruzontzx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163svvkxplc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163kfhknduv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kzwtkbjc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nhxxzonb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ybmlekzk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ossgzgde.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rlhwyhvi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wuxkqnco.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nxtpfkvz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163siebszlw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163refldqto.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cglshbmp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nossarlg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qrnmbxmu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cqyyfmdv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mplscexl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bgbbgimr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lframswe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bsqzzxep.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gfostoaz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gkjljnrm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qyushsfe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rmhramsa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oitwchph.html


<!-- 参考信息 -->