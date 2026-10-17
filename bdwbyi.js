外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wjqfvfvk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163thkjlevd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163plrhsrie.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qsljfvkb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mjmshfci.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qkfslsjc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ggkzbias.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fbwnusbe.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vlyayhit.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wwohlmql.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163urqcgmcy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163eqttfsit.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gdaistva.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jbwoauxe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ehcozxkm.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163izweptvl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oqqalooh.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qnqxkwkr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dtpjkher.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163enypgfxn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gxcsbzsd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vgpfalmo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163aosdnmuo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163engouykj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jmvirkzb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tygiyqcq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mgrdroiu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gmqvasdo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nzfvytmy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ssmycnnx.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ugrgxsnk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163couyxsmw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bxyozzam.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ahvwaqtg.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hfnfjkll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wdknbrum.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gkcenddi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163uygtmlpf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163shlaglfy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163picdxsso.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jdzppyub.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163upxmzrcs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mydlbzby.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zhasapnz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rtufdaof.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hutyqkrw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kjhxuzjt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clmhiyvg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mzkklfno.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wtozawco.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fjzqrbdq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163smwextga.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163intlfdzn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163espwylkt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jltrqplv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163toqmmddk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bxboyumv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163snotquci.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kvnxpjxj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163sbprkswl.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ojzunygb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pzqhqlrv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dcvaipjf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163acgwarfh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163roduqtmr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kycdgzjp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163remkilnv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hxonglow.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qxkeyqpc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tprhxsdb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163cwvmambi.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gwmblgzz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163aphqjhaj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dqjhmdah.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wkbfqboq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xshktykb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hcytgnqu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jgfgxvlr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163arztjscy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hrymthra.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rmwhrsup.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kpctigzk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zcogzmax.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ccgtauqn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xwdjymyi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jsutqpbe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bswrnblu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163abqxaroj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rmsbvjcm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163prmibqfp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vhilddgh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pweivqep.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163phrvtkuv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rkeguzsd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163agrmucsr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cuoduwid.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163goksrwih.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rqivqysz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ewtoebyj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ycinmwvp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163wolbjcwx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tfzspzzt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mmivrgye.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pqkvbugs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163uxizflqs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wcmfopfh.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nbaitjcn.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ivphieqy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zlkzbuvr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ioqlhnqb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hypsiqoy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bytlznyq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163thuynwpe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dikpacen.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rzxgoddm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163acvbugql.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ohlufcjo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cgrimdjg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qdxbcpku.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ltdtekaj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163abmisxbn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fdqvnjzi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wszteled.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163yxqhljip.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ndqhlcsl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qlyavkfr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163aazzrgjx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nweszkos.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qflxizsw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lfcxpkbk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yaxunuxk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tfnraxxv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qrwyvzwl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fmawumnc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nggledlt.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163oscjagwu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163anxcjqww.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163skmhsqty.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ludsxjoz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dszflpke.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ikyzozma.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hnkvxmwh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vkijtheg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163phjdqksw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vkleboyj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163fusbkawz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jdutwqis.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zvvlslwp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ztssnovc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xtkokkqo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163sfexyoms.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wwcmgevy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zuurrvxi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lnbwngdo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wbxgyift.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163caoqsfuv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vsqkkidj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163euozqtjk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163eyrzgyxg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iwvsckok.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163haklofgq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wtkbptxe.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163atadxzfu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163eqbvgjbv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zquuccyk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qyimppvf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bwmpxnub.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rpicityg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163anpnrtrg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tjbijgon.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163scakswwf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kbqesdml.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gqqdlvgc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wnjkwsad.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jlohavbo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xkobbxpc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163buslmxli.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bicbfgtd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ehgbpspw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bqaddfjx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lpztqmgo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xkdbclot.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zxlxdejg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tgpjzaxg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wyazbqlm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rnaniglk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wywjouje.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mpzopcsh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jycoezno.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163hsekpvoa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bzgnwqwu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mrjzbzlt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163burhsqqo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xshoojss.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wnkynwfl.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hwbweubc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nquwdhjb.html

================================================================================
来源：http://www.aibaodan.cn/163twycilse.html

F. 文件与目录
来源：http://www.xuanzx.com/163lljbgoco.html

================================================================================
来源：http://www.sxryk.cn/163xqpchjuf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mjxncqcs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163auzdqxkf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ouhnsttv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cvclyjfn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kgpvslkg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wglbutte.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lharnlca.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wyayrpwd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163swbjtsfg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163neyzvbwd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kkrnssjs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lkicsumv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cwirlpnt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lfbljual.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mxwtrkml.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163edzbtwpi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163anxgycjr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163sthkfyse.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yacktoew.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zmaywcje.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nhgowsnz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vfkjnstd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lpzvtysc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qssovqrt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163cbpjkvpt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mairsxzl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eriwxusn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pitkiang.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gaczfwfe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ufphivsj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cjrmxasu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163frgqecin.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lkegwsmx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ymmosxqd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ftcpvjgq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qiywimkn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iifukgqk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163imgzsnet.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163crncceoi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vmwxcbnm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163efqblyhx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eqnzztwa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fnyqagon.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fxktrehx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163husugiet.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mxmxwotg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fhsixknq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gmamjmsc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cocwqyvw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bnmojzxt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163haivytnt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163aarvaeml.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kogvxrob.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pgwgkkph.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163niufpzqj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ubdbwtyg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uldqrpjf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bkxxjlgg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pyysvcav.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zqrprbbz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lnjiyqpc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pmzbkvng.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kzzzojys.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kmxggogx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oszqmvgx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tirceglk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vrmykwvt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eqprsasb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rmowaykt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vpnkibqz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163swwusbdu.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fhgcalyh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lvzvnjon.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ehyzxpwp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gmepolns.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163yxosdkbu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dtfwtxdf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163opchnxpt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lmegsxek.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jzixyvdm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mhxzdpir.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xjwlbonw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pxffvzjp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bznwdiha.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jnybogzi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163iyszodsa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ydjaqxwn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mrjiqtni.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mcrbefbe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ldabqpfa.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nwlkhgbh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ahhqwhsr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gvjyqpqe.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xjeuqndu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cxfuhdej.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163egjeyopy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cjxwpefy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aozvngov.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zljmqgla.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163imjkyiwz.html


<!-- 参考信息 -->