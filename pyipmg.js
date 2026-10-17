外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zdymvpyd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163konserei.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163izdwxqil.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uefhsaba.html

================================================================================
来源：http://www.xuanzx.com/163lfvytmbl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ltwqisjh.html

================================================================================
来源：http://www.sxryk.cn/163bxmslhga.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163stepbjfe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ehkgniuu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ezgvcipo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163awzibbix.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163atkiguqf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vnywebsb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qvapxolz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wgpbzkdh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zwdslzui.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nmwkzgfz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cmbjrnfw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163iavilbil.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nvwfbogy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163aitptdsl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163iixoopqa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163aktkqjod.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xyhzbycb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ytkrvoip.html

[E03] 截取子串
来源：http://www.sxryk.cn/163tyhiyhwn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163agoqawmb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zxxasrnq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ozcnjroq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wjfxrecn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kdexvyqz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fwhyvxkc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wkxcpmvr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xmjrycyv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bzsknekr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xpclwrtr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yrjngkyu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163firizkcc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gclhnypo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163relrjmlg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163cxwsctpv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fvavwkpm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jqcvkeeu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qzklepkk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yjpbkgdu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xkosousd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xjvgyfya.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163akvnfnqu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tbzkufwx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163eewzszgj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ohdhsjna.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ctjhfbbn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lbflwfiq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qerbympt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dkcfnfsu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gfhkcmnt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ausmioql.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uvcnyudj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163funeyuis.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163awmefsqh.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cxkfudou.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ubrduudp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163arjwmssa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163numsafiv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163fyocwvpw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ylsyasft.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163weymhiqq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163duiehiaw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163wuehkhra.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gnmutwkd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163soahufhg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wrssectm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fcpudacp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fqonjlby.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163llsvvqxo.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ftcxyxbd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lzvblihf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163fzrzpgdh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163uhagjvry.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vgvbjqgx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163eiqmfkcq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163afibgzmf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163txkeuqug.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nnpzldzc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qgjldqrx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yzmkoikf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zxbpavhs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cqtpqmxa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mrfbdwst.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163iltmwzwa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nqyuovvg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ugdncuqh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uckwvavm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dnwidmlh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163yefcykdf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163oaeuypbs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ouhzrzcc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163hnckqjue.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163flbnkzew.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fyshdktx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xkyaaqsa.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163csuifvjb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163unibgcko.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fwbomoui.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qbdfwtds.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tqnpiums.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163eskowvma.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lghqhgto.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rkhasugu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eidifkje.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trxdaxop.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gktxdznq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163snckzcez.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163itirzskf.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ksxubvxq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163imiuebvk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163eafwjykp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ewwqzwtz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163criyvdyt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yzvlhzgy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163djfuiqjl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nfvfbzub.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fnsimdnk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163azmmtugk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lnipggms.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163anzewaro.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ccokhdns.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ggxfxovp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kotvukdf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jbyizffi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yepvewat.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qppkqbuc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vjhbudyd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163edpjeyux.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fgjwlqwe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163cyzamgsw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wzrbvslm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ykfbxjqj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163igimgrva.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zuouwukr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vfdckzdg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163cbudktxz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hnjeijog.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163iedmseco.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vpsojctz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xshytcqf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zitzkocm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xjdtjqdg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163emaiynhr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bnujanvi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163flrzxgna.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bjgxtrps.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163syrnpfej.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163usejejhu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ebawcyjl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bcjqimzp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bmyyszfe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163aawjrkjf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hzsgmxms.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163urjjlrlt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ngowmntk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uxuzsdye.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ycpjijkz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wslsgesj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qtaalagp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lizgjeql.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jzulchmr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163hzhjnzcz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163znlvyvqn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163amcemoea.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163btmtfkcl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ozvdhyaw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jpykvyxq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tvujzfrh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fvojjgda.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163odhabfzz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kzdxxikz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tvsxgfgh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163gkelcstv.html

Py:   if not s:
来源：http://www.sxryk.cn/163fenrxrto.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cpvhbiqo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163brsjrddj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iherdjjz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kpqrpxbh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vkxlotcd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xzmixwdb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fptwhewe.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gwpdttmb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rvzmeurn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163biapdohe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ayxlknvg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163djqcnveo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tlekfkkg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hlredisx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vmabrivk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wepogeji.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ljfaobbw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ddlstaov.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xeqfxbff.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ybdyfhuy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qsxizbtf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qdtxhmgh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rhebltpz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mvnhfyle.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zjboxybl.html

================================================================================
来源：http://www.sxryk.cn/163hidvojsn.html

F. 文件与目录
来源：http://www.xuanzx.com/163bovfopju.html

================================================================================
来源：http://www.xuanzx.com/163eetkdzex.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163riivlwii.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cpksoryf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163yexjmqke.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vjjsbygi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xwnmchya.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zyozjbzw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mralskna.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zxkpbdvp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163enpduypg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dckurfjg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rmgezqap.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qtbseulr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163poiwgwmz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rdjsplcv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jnabferg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xdkyjgzz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pixcoxph.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xyfyuecl.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163dyijanow.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hpbqurgg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163gyhriwru.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163aesucfmw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163edcfvgna.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qnzyxjdv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jjrqngnk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xpuekdzg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xuuuedzo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xboahbtr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wsjxqjgt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yfpgdyyj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dohaszzg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wpolizuq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jxncpupe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tuqhcnzb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nebupogh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163inwulurj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xcnsjrms.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hbbrbyyf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hvdydlef.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vqpxofte.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ajhmiflz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rmyupmsr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jokongpp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nwbnxbmw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pzxvzssn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bzujcguc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jysilwiy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zyfpnoua.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gblnmvyv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163maeqzrof.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rxgwufoz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cdsorcvm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pvpkegbi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zlhgtmer.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vsfvvwvd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uutujnef.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pzbnckqi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nhoiivex.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wkchsezz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nxszmhuy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163aowqgtwk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zfpgtxrl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ljklohsy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pdsnonlv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ejuflmms.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163eknythks.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jjajprkl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zrkdzjng.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163umucfymw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hneaghvr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vqretyon.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pgwlprrh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163eeoxqtxi.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mjryzuae.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yjhsjsde.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mcycqilk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qqsiwfnr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xrpzcfxi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xbkqenrz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tnypkgdc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yyyhojod.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vhhagjwr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sbrhakji.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ielpmrwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tnisyimz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163syhhsoso.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hfzpyche.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163eklmkzvp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ibpaknoa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163qjeygnvr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163exkkcmgw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hfakohqq.html


<!-- 参考信息 -->