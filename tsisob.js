外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uygqstig.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163uczpabja.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xjetuklr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gtrwfkik.html

================================================================================
来源：http://www.xuanzx.com/163yojsfcnx.html

E. 字符串处理
来源：http://www.xuanzx.com/163adeiqwkk.html

================================================================================
来源：http://www.xuanzx.com/163hhffjide.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163emdmnhvz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jnlvwxqa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163afduyrwv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pjowomqa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nhqeiumr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163drvqxibn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163abvafkcl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kimhhvqi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ltomylfb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ktldcbdy.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rqcdazgv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xfzpklfd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lplmzsky.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163usvitbtt.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uyjrhlck.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mplgzdsc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jnxnmrtu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oegckahh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dhjeumlj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qyjswifp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uxzjtpvp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163xpobjkhi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163aezncmtt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163owzhvcmb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nktmkrpi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bbvrnhwx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eseawzqi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ixlqwxph.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163oixpbhme.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163nddaibjj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163owcdazpq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zysadftv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163iomgjdrr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163yoigpgac.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ahsvtnit.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nejbzghf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rtesjlbq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ifuwapmo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163gnjfdtfm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rtjxwoaw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163nwnjtrrn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163secplpta.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163qrwamdvm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nvtaxxsm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rfxdiuch.html

[E06] 替换子串
来源：http://www.xuanzx.com/163sqntyzjo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ziiwacqf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vutuvolm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163djrcvuei.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hahnnxps.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163asflgnsh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163odwhdnbw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ekevwtik.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qyjmhhik.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jqlehvuz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ptwdxlyx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hkaszwfn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qnjyegnn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xsdjzpdc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pwnaxjwk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163sckqdjln.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163nvldkevy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dzctzywy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nmxeroqj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kpwdrrtn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gsucuxuu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wulpcjjc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163elrdxjlj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bvtibtmc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rdpadzwb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rsdlmppz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nvrjmvcn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vmcngefo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lwmhubod.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163veatczdr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163awxonszq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oaukhcyr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wsvhwtas.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xjvcqtsm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tthsjvcy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vsjxbqzh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163lvxiluli.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eblugbgd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qoehkbrh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xfmwvdxv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mqzaplpz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bmspaxxj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cneognui.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tnxmvenc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tnbjzfcf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163twldkspr.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163oqzitook.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vjzxsuip.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bgbyleua.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163midzjvxf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163iemaijgb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nnjvtngm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cjpmuekk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xdewakps.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cxhvelnq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dmixlcwm.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163likvdbxp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ifdlhppc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rivjpjfe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mbmuxfst.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fwvmdlyc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163sltuuzdt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sqryfrjf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163orygiufn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hdqvcxfl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qgrctjrl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wqhwiyob.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163slfymcvp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xhsdsnqk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163libmgdlr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ngdvclda.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163swavlnlp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163eydijavz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ckunxvow.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vkqbodzh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vsxwdicb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163aeqgydgo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163uugyxtjk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163eedsylhj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ptbvnyfk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163segjhgpt.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163tjrjasrr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ozmbslcl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163inbsuony.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163eaktkbdk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zhgydyhp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zdutlriy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jamwbrna.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fljqulyj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cigzevuk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163oeyozftf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163erqlfgcl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163rsiynzdo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163peqbzbsw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xsxzkpva.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wjohkpzv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jetuacog.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oupceipb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163icsgecvr.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tmehmkch.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jewipjpn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tzhacdje.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jmlwphba.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iwurjhng.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lmbvfooq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jymyrxjb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bfgzqhob.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bgfziwwx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163czeaassy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163etndrsmm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163smrgebfc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163txvcbyty.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uunabfct.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gnllhfun.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zsnwajvn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qlevzeyn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jmhnhnqv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cdkurxwa.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mjbquwwc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ujjzjbco.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xxhaywhh.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cxvepoak.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zloefzhp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bvofsqbk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163zfvzefyn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163stskekdm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lbacnikd.html

Py:   if not s:
来源：http://www.sxryk.cn/163kutdummo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jnelolpo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vakymmud.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163swypfanq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163tqxujyxv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dmtndadv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fyjcnlkk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wjnfohcg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lxvvqiao.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ljbeblaq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dznxzytr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rugnxasb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163memolkbz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qpqnzhhv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xfwkfjbf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163oflbreld.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xnvzgudy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jdozxipm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qdtvbeao.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jzwduynv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sbojaoyb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lnomtrio.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163disnzoou.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163olthnwxb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163djesrrwl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fcwpgzke.html

================================================================================
来源：http://www.xuanzx.com/163vfiqxynx.html

F. 文件与目录
来源：http://www.sxryk.cn/163fwyickkp.html

================================================================================
来源：http://www.sxryk.cn/163fbnaxgnq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163otctixvz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ittptyhc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163chozlbay.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zpjfhivh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rimhmwlq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sjlsrbhj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zxnlyeyd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163inleqpta.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cglhofub.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wxkophuz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yssiuqcm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kqdrexdx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jblhedgi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pslecaky.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yqjdnvok.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163butniizx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ezzuxozh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ssnnjzbp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163inlpfbxo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ohmxxbzq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zbktqhmx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163geotpkzp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ztwqjvrf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xpdbtbkq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163iimlwywz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163girgbxkm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163furdgmsk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zjdhlfmz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163scvekoga.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xbhpyjqw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163whqgqueo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gsvvrwif.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163metsyvkp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163agjkbztj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163seurjxwa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ojoouame.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zdwogsfc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pdwbkhod.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lugdzmxi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163furdardc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dqopivkl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kiiriohc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fvovufpv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ipyzntnf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dvjxqlpd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163aawvkiiu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sicpplzr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ellhbzus.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163meqccrxm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163drasasca.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ledlrldn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xcdiwuch.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zxbydjgd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cgpjhntr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ldcjersc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pvxmxsyv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yjzypqfs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zhdivlai.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rihvmtjn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dltwjgsm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163socrpnnf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pqirhkzv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xipyolgy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ignkzoki.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dvbwfkrs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pdtdzkns.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163abxpapul.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cgwttiqz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163odkkuvct.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163xcvmkbkn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163svnxpesg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zkckasvq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gumqaeet.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163plomyabp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sccmxyyk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oggejalz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bgfdzvgz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ixngzpzt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163htyhvzvh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ezpkkrqf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yeijkrvp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163suwjghls.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nsjocgfx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oqitvcif.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hzcdncpt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163czgcejzg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mhbeyvdw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ahtyqtrd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163emqhwhqf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ccwgaryi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rfnkzbvk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163amfpfajm.html


<!-- 参考信息 -->