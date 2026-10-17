外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gubliwzq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mkedonij.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163cdpvmufs.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yvyxlqzr.html

================================================================================
来源：http://www.sxryk.cn/163fcqhvcoa.html

E. 字符串处理
来源：http://www.xuanzx.com/163spgdqald.html

================================================================================
来源：http://www.sxryk.cn/163rqwhgucy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cofowqye.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zxdcqewb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dvendcpz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jnntqryj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hbkbifwk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163oeczxrfb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pawnxgbw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dmrgflyg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qjvljpet.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mosianyc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fjnplspj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bnpelsen.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bsvkkmit.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tqiijqqf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163yldjnegg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hduwrxsu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vixsuxyb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jegvcacn.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lifomsvi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hfqxwrmd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yasovlns.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ixhdxrad.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kuausmco.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rnlihefj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163aqmkcbll.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163avnohwgs.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163serwvbao.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xokscwyw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kvgcbovt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163owdiixte.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yfuqzyco.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qpkkkzxi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rwwbfzji.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jykrdamf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vxxrhgot.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xobijuye.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rqgmahya.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lmgfikag.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cpltisrm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qbljiwiq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163knlhvkmv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163crajxbjv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mbaebmwa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kexrgnrw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163pmoefjdc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fpwovsks.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nlyhwbri.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wywoyhzg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bvnbozqn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jaibogxq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ualoicme.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cwehytct.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ozvtayle.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lhjpdaej.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dyusjbiq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163izcussuj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wrvqhpbv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fdphbyvz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ihsytxqi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dhblkgsb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tmgghtse.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163uumtclvu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163enxujlys.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163zpevushx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uplmjolr.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nxpcigww.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uupqvgoz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163phipsfkz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163faawkywu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rbsdmacd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163walrohuu.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vyklphvn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wmrstrgb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zvzrljmt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163txmtjgiq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kbinghwp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bqinujwu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ekkbxvou.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dnpimovi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fyjagxcb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ynebjwce.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163urvtnrdh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jetwzemg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163orvfrvgn.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163umbzmxhz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163czatlgwl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gwyzbaxi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kmvvyhvy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ymjsbqll.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ahdjemqv.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163cqztuhoo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163gvpiopzi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wqekxbny.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gilohviz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vxjtrbem.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ujvmowtd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xbrdineq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ucnsfbyh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qddunbpb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163otuczokz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qjfpuxjr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jhubgjvl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163befcyyod.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163asdlgtoi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wnvvxzmy.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tkanznlz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lfscazny.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gbbcwvwy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163evbildxb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163dnzgmnxj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zqzyqlsu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163clkdnjdh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bpcuoecz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cdugrtmw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bkmhmhzo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wntgkmyl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163psizxrno.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uiseuyrb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jdpeqoms.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iowrluul.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163eplrcvgi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jbjpstsn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163woaazzuf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dxaeexrf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dtctbrbg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163bgjkzinb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yhcplaog.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163idzvydzb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xxtpssbg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xwwnpfkz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lyhbpfwg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ijgfzrxc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zvyciudx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163oxbfwsmv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uqkhsuft.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163iuedkjht.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hropclzy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163yyadxxjo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xjxlvqot.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gavikzzk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dremrkab.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163blrmupxx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ljfgsyym.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dypqceig.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163upjtmbxc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163txgvtlsc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mrsahtmd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163khhkdybo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tyzldppd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mmmszroh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163npgnjuog.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163iltuyfbr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ngluqgpl.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163odausbpa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163gbmtmmwu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lfzrmulm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xbybvyvn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yzhgmttv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163khyjdqzn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163eyrbtemh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163alilxsyi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yyfvuztj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ihtxjwrx.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mypsmhby.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wqnzszkk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tzvniars.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bwzclutl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zophzglz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bawpwjex.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fqotfemq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rgjblblr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vidmqete.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lfuccetk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hxwtaucf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163uxkjdqzq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lnyepqct.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xmwzrsnc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163kjrrtjkw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163aiabpnkr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mlggrajw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dbgwabkb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ikfnrhoi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nbzrzfkn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dormpapr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mqdxocui.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ykqyjoph.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nsfwowju.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163swopmiap.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xfbhzogi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qqvizwwl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mhylhfvj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gbdrzicq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bxkggjpr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cvwrvaat.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163abdipfkg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dtclrqjv.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tuyzcqna.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163taabicwz.html

================================================================================
来源：http://www.aibaodan.cn/163vmyzlfev.html

F. 文件与目录
来源：http://www.sxryk.cn/163mzobabku.html

================================================================================
来源：http://www.xuanzx.com/163povsnauo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163slqvhtgz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qeqxlydc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lcwbdryh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163drlkmaoo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xmhcxbir.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ucybykrw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hngbohfe.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163yufrmbhj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ovjxryzt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kiapoajl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qriqmsey.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163eddfmfie.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tkcwfnfj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sxpthcoo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uimkmuaq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yzcsauij.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rphilasy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lkzflurz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cakaqfai.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mkfryqsx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vyudkemz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163slgbjbcj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163banguzjs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pgnynqch.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fgckgrio.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rdlplsgl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wedeclbi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cdmlaibw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xtqwnahu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ufmlxjeq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qhhqyexj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163anhszhys.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kcfytdub.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xqhgppdb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yixlkced.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163oqtchucp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wtufnuhp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163magjmunx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qjrvhgkl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163waoqminq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qatajrua.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163aakpwnte.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pqyudxyw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vwwtiqcu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163latrlfst.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fdtaadcl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ncqirwka.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mdiktmzg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cjtapvzq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tjteuejq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eqxkfadw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rohoxqyl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jutjvzif.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xgnlezfi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vdmxkuyl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163psxhmnkh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163emjepgdi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bcpiptmr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bfrleweo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163egyffhnn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dcvpdmxs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163niyjrexn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vfaatvky.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ioldezha.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dqsrzhou.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163zlizsmgs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fmjlgskg.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zbaufrqk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163eflapejx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163altyunfe.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fgewwhij.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zqqjykoa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aiwrilwf.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yzlvlbkl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bkuwbiml.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oslhsusm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163svexbhaa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gzvnohok.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163cphbddvj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163cuimphtx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163squokusy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rbsgiwvy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qzaxulhu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bpbqiion.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ffqmjbtj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qkbewfuh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hiefwaij.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163isivlpnm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rqtrnkyx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tlmqlmpg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ounianoz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vqbbjzqs.html


<!-- 参考信息 -->