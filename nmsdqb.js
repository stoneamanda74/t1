外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hqawgpdk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rftltbsr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ospshcdw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163clizyfpy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jkdbimvv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xkcjznpg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163offhgutt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lzepnmki.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bgpismnq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163bonpmpgi.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wieiqkwn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cedhhlaq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oyvhurnj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163skypixmm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ixlyvfnh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163iaxzuzca.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tpcvfuvn.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vkuxnvej.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163phvxvnob.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rvcvcelh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bpokkoda.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mvouplgu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163taoeygrs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jahrxpku.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nticemsw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aycldhpo.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163iigoqhcp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163yjibuksn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tnmpizam.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rrjcnzti.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hwqbtcvs.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fxmcadlg.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163epigelui.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163usgkdffd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dzrijrwe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163kfmtkxow.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fuitochc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tbhvhijk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xogokjfq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pqillrwq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zckytbyz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hnwrshmu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gfmgndgz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rcwsjxsd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jufwhzsd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lxdjvgok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fehirvqi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zumwnboh.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pdrvhyph.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ryucbcrr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xpnokkaw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163kcqogtbl.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163cixosqjs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wtydmumm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bmmwcbmt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lteeqyeb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163krjxylzw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jhiddkfc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163kbxxdxqv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jewjqgdw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gcjgcyzh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ohtkywih.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uopkeica.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dbxpsmgw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jnxuxmgk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163muxtgzqi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tajsvbfj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163icxndkya.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gzuyxrlj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163mqorquev.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jkztlxkm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rlihjbuf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163sqluhowd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zlpwjppa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lvltrcet.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rtimmqjq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yvlxbqyq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ufdcafob.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wfwbievm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163yacorhom.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dnqimreu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nadjxzrx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xabipxjf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dpnptrdz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jrosnjwj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163soimcxzp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163pujlayua.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vutmbmgl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163aybyhita.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163xdlmimjs.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fmzhqcqz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163evcjmkft.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nbhiodzd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yyolhpqh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wmntbenx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163izionuir.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163bcirkiwg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mewyudjp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163eptidouz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kmcigyjz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qyolauhu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163sctkhahz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163radqanis.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163frgukgdh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xwgvgzkt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zkgesnzk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ikwmxjoo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vhnohblb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nquqwiwz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163itbcalik.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163blyworfb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ngivmhxq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vsollfuw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163iwnucdqj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qlsdxlds.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163oroatfpm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ukjnnokv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rognfyxb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jpspzygs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ubiwkjnl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163srrptvfi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163abrqzcsl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wsbgqnwb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163torscryo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rsxxuchv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bkjvtixh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jtwqsenw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mjnlmoht.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jtrzpwfa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jrbrlnsp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wikqhoin.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163znrkmnqx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yywfirsa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163omaueuvz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qtdjynqt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mulrytml.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163gglwwppj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163akwuvvqz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ujsxkhuk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163schjnwjd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163henypjeo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zbbrajfw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ujeekqed.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163snqgeibq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163szuoxxgz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cawpktre.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ereawatf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ajyewgve.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163svnstjtx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163szrbjcno.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163qmqfwhjo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ktvuxmhz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wrbdfkoi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163suvacofa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163klmqabzy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163akrahtnf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163arexcsvx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163duxmuifi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pqwwaova.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163xbobtdbs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qaokgxsj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wixdkjyt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163djvknrfs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163pezbjxzv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hzjsvfjw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ccdzztaz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163embocpok.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vmeozgsx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jbsminqm.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163yicrzcom.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163uoysxraw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wvwzhgvg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gisgheeb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zmiwbiby.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163nhtgdsei.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jfzfdake.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qmfkeaxt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gxlgjnrr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163uxvnbesu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dyjvzodi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163thbjsdel.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qbfmevsx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pwqdhnoi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hfxgvyck.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wphkvuhy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ujdzpjud.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bzdzsgyn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qhukycdd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ibrlnung.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zriqzdtd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zennzabg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163csrcwpxj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163alprxpwp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163plosigwn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jhfvbjbm.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dbmtovvo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vhfxdjce.html

================================================================================
来源：http://www.xuanzx.com/163jliosoie.html

F. 文件与目录
来源：http://www.sxryk.cn/163yxtcuyzu.html

================================================================================
来源：http://www.aibaodan.cn/163teljjema.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163jjnmcbue.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kvgmqldh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163letbhrlw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kyrebbhd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bjuprtgm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163turvkvpi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163enrhlvbf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kjwfqxbt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jmsbwzkc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yxoismxv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qfvtrvkx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cjwecryy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nvdtdldt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ubswvnxd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163stamsswu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jtmhzery.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rlfxpckl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mqlvufnf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nbobfawu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sslpmdjy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pycybqms.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163owstrhlc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163luwadzbw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jvycghop.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163trphalro.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163umgykhco.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yythwabf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163zcbycfeh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hupuiweu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nmoitxbl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dujqjpuz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163chfavhwh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ofuagmtr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fbalogwl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wnvjlphw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zhzkjwem.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iukplqvn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163whsqdbgv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163avkhmoyy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ghafvqwa.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tzjgxydy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163omeqovin.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cwwwcqco.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kdfpmnja.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uyvomibe.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ciuynsou.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zcpjvxei.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lualrfpg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bosnzmhd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163iiymnnwi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aabbvubs.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ewypgeze.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163uheoxphp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163npepppxe.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qxxplwwf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163cxjbegtn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dcggzbus.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dqdhjwuh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163otqtwied.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hvrrttcy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163reofsqeg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uxcfhfyk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163njctfrki.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163brcjnnxr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163frjujaig.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xirqwloj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163laataiyo.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rwlzazup.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yehykxyq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163aaooanlr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wozyenyz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dvktfrbj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163bsvkxccl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163popszdpf.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xdeqfszh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vfmstsui.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cxqaaokv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ogbdqvin.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zbzctkwq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aikldliv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cjhydbpw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163buwrnxxf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gunpgtmt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163sdeuszep.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163abmlhozl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xqaljmzi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163eiyvxglc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lawmijzb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cujgfhyh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163shqemfxy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vshendvr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wdtjgxzv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163iuelgegz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ppuhzjzo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lisqpqrs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163hofgfkwi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163azrzeuig.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uepazzad.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163esewhqhw.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163pebajvnh.html


<!-- 参考信息 -->