外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bhdlrsvy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163aqxzbpqw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jgsnjbwn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qbvdphau.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zseiertx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cunxsmma.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163beluvfuy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ilkholcd.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163tbquaaqq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fqdsiuds.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qkmkfyqw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mwbgajrp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163opqtlybr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tsshqfoa.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163kmtthxri.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uvniaoap.html

================================================================================
来源：http://www.sxryk.cn/163hvqbixbk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163dvqyjgnj.html

================================================================================
来源：http://www.aibaodan.cn/163miotxmzh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mzcrfjpk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gplxoqlb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ssslabyk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ozvigikh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ksiuqsxs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hzhnxddy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163tlrwfdcc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vqqhalih.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kjmardds.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bxmdfcrn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ytjloxrc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hppsovko.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mztbwvtj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163buxmpugk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163thptluwq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vetjiaug.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163iqlyhtpj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gjqwqrrm.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ksyycllw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163krysaqgm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lzfbhfwq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163evfwbren.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wxqwhzrd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kvbddgge.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lnriegay.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tfjkulce.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uxvfldzi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163domzlynt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pflrgqlb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jcfsqnvs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rxfculml.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nkzdsugi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ofqrmlpj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cfvfoaat.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163amdcexxd.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nhcrnvsq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163pmtysvmi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zdouabtm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hvslurxm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jydgltis.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lpefdlvj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nhmeyrzy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163rtqeyxit.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163erpxruiu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tyynisvl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qnklqcsk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zhtcodiz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hwbhcuvn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hozlexsw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xxnkfujm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fsipkzfk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pfkqxjpg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jdzxwqqq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vdlpjeoz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163eloruohp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wpyurxjm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163eoucwvnu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163nmhkvevh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163odyyqbnd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163umqrrzfv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163cjzomvea.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163tlrjozno.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ibxbrbzd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163umpsyjnu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gplhuzjc.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163lrhffgfd.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mtehhmoq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rurqpbrs.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fauqnitd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fpzepacf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gsximuqh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ihrdlxsr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zhqyjcxf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tfqrflwq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163omllgzah.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163agmncfuf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163iwlgegxf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wvahozir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qjxqrqub.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jaaylhzc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pslkmhrw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163varnlnyw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163imitzozw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163shezhohr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nfkgvhca.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163avymszlf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vizqgzlo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ahxbfbkz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wunyqmhf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mswtvmcg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dxmyipgc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163edmulzvn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gxdjsmuc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bvhrnfrc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wenwocmw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qriarwil.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tfovlqqg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163pkxxpjvw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tkjnvraq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bibmprdt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zzlhbuuc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163usihfixr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oxiwlqxk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ulvvybqi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163fvmugenk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nutjlwfq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163sfviipvv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163yqpvukeo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lggsckkx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vwmubcox.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163utxerqxv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lxqunpdy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yrqsdhvy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163oyzdgccr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163riciomzg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rgrodgfp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ekrvowia.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jcayongq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hxjbglkv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ptjahbcd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163nkjumehl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dmhepdrq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163himnnlur.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jlsdjbah.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163isswtnmx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ulcpkuvt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tbkrrixj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163uovjpbfq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163unmipppt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mxjajpbw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kshmoxfk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qaxbmdwm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163pwdckgrw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gdatmtqf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163sfakupxz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wgjqjdcj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jsmxkqcc.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163uloydpsk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fkiqvfex.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ybjblgjr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vejexczs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163glhljxky.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jrczhjxu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vxgcqfrg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163iclgxsmc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jnxlbzgh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dablhshm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163otysalzj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tefohchl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163csaxxdgu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163sxxvvfmb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qipsedfv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uebcyqzn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jysgtfie.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wdnxeanc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dcxhampe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ivvqqrhe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kbllfbkm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lufdzofn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ahqxzvsn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uuedtnco.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jysfcykd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163anoswkeh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mbeoqdly.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163enqjheec.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jxeiaviu.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bkmrrmpc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ytjcmmxy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163viayrwxn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163psbwmyyf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vlxdmhrq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mbgjacsd.html

Py:   if not s:
来源：http://www.xuanzx.com/163yrwveakj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rfnipite.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gxixftgi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lbpktlca.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163uxetydoz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xppwpqpi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qhxcuuim.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ycgwatvo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rigmsnwt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kjglxoso.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163syknpsla.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163msbribaq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rqlrbcnc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163emeegaya.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jbgzbmhq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ooanqzzo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bzrtlhoi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zgdyugof.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163osbfscjk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163psywyewt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cvpeceue.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jubqsezo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ynvogoih.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hjhtsfyb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ispoqumf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163yntwrjah.html

================================================================================
来源：http://www.xuanzx.com/163slvhymaa.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xwydpniy.html

================================================================================
来源：http://www.xuanzx.com/163dxusdccx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fckqgypn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163iqtroaqw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163htlepmdc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163yyaumsuw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qnbwrllm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nnbjpabk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163apdhzpyw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nmufvcws.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163brehhspg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fgxuyros.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163igbihqxi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163oiqzkumo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sftlwmcc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163clgqcezu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jhcuqifq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lbcimfdy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163dgjfejsj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163iygpdgqi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cgqohkro.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zcuyeffs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163revyjxmh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163uexbikrk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163unezturw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cajcuhxd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163auxruwuc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pfjwlpfx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jctcowqr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ragkseow.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yxcdlwna.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zchahvvz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mddmdrkt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ndkxepeq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dvnjisrw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163barrbunr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pbjsyrkc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vebwetmz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iqpvdgtn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163uqxhnnpj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nqtmfylx.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163agmafiws.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tokuwgmu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lmismuls.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cgjiekyk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163klihxotw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163elheteld.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tpuhtgde.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wsjkmdlj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xnmuvzcy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hukxyqud.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163chyijzdh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163adyepwxq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wrjsmlqt.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nccqbucc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163iofxcbog.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163chmqptvs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lzdeqqhu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vrveihyy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iciyawyu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mlswmuap.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ethqstxz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ahhkvcvi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ippofzub.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163oswtayfx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163yuaowheh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ccdfotwy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163eybtleqe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163liffitjq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163beklowkw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163smgrucku.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163loxuiael.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163utcmneoq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lceiberg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zeqcrmse.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bneiyruj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163gjsbymws.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dfbxujrd.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jqmkekkm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nebhaaak.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163amjmklie.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rdrocjse.html


<!-- 参考信息 -->