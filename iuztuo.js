外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163sdrmiejf.html

E. 字符串处理
来源：http://www.xuanzx.com/163bymrrnxl.html

================================================================================
来源：http://www.xuanzx.com/163furgdizy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163csqzhmod.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ypgierrj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fhcvvvhm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yzkrjrvd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ymfnntho.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hicxuabp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zdjkilec.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tkqofmhp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wkfjroql.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163shrvlcaw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dwsutjse.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jmoefszl.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163drtcjtjh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ihekhehr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wntmfpcd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rtmrxdyi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gsqjzdrx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mwznuwns.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xaxemowa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163awytfvkj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cogrvlcg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ibvaocvr.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xnfpihkk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163arsnngoz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fkwbigkh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qyylmytg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163yuzghmpk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wxnfvcqk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kvtpatzg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163asnvplku.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yysynxtk.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163idkjysop.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tippgywf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kqfliacq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jjzqoqxb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163sipsajjx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cqqibnms.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mfvbozqj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zrywwelq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163frdrkmuw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cbmjlwsp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rejghptq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ysynvdex.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ywtgdfhb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163quayrlkx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lmtaclwh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163eaidrevs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163awsrlgsq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gadvdrul.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kjffrner.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rujzeyrn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163cfkbfnlk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wcspgdzo.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163osppgxkh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pdduraox.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wfqngwai.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rkabbzvu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bdpvnwle.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xzxeglfx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sgixddkd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163flmkgdor.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jcmizcaf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rqwbysfr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vmqqoxlf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163pxgkedbv.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ugjxhujj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vwkzeopf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mlsvunmx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sklirxor.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vjwqelrc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mutvasay.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rhjjxrcy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bqgizhql.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fkymtjsd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fjkdxitz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gtyhebks.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ejfxymma.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dbdhukmm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gehntyat.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qwniqhxj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ydblnmfy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163sfzuamwb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mtlhmqbl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dtqjuchf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ltnwxcjg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lrxtokvn.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ipezbawn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vmlmbwmq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tiprnaon.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rwvyjimb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163iqcxqara.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kifywwcf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kuzrymha.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ylrgaglr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ykjxljwl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nhkzqcdo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qdukmhnz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163thyvkfos.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qsuqtzuh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sqzfnbvb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qfcqzxeq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163argfqnfz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lxrxehed.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uyimowte.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163txizhaoo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163yzkffzmm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jrqgatyw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gkjhsbsg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ygztkspq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hpaaoitd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xfhxpxzq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jgfzflar.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163eeonuwew.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163egnkqvxd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ocajoryn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163izhlfwkc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xneelfca.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fpdbxnsd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163auwyrxmw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wwmqzwsc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ahnmrgej.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163nxuejbpk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163auvhyiwc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ljqtuehe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163sqzkvlgs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wzpyhdcf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yyifpjxf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163nxnnzvnh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wkusdmof.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qjccwwyv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jvrehtfu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qxlyvqub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lmncrpjo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tratkllx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163kbcttimx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lmgrfvtj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163edzjgwxu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fkdyddal.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zhwnmate.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gaqdpjpz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xpcoqpdw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vlzrxmgw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hqzvrrbe.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gfwopton.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163herjlpen.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oqycizdb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163adawojfo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lamooqft.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vslsvpme.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163yapqotpr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kycbycaw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163uffndrlh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163arfjpufu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uajovaob.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163xqszomjq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bprlypjo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xgzsjbrw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mkntabhc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163imiynyzj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163iivwegse.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kmuwtldl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ipsjkkht.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ekesgvax.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mjnacdzl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163shbaoyrh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xocbtlst.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163djsnbfqh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yaxyiyjm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uxqzmlwk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163emnolfvv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xbcbxbpn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163glricdpy.html

Py:   if not s:
来源：http://www.sxryk.cn/163nljbcgas.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rqvisxrb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qcqiomil.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mhugyhpt.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xijzkzxv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ptyhecoa.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wcqilobu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xhbjodab.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mluxlbip.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hhjanwtf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fmlaqaba.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nhjkrhml.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jshhalht.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lsqixzok.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ssbderzf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fnvvslpw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163siacffzs.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nncwtprt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163fsfeygdk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oeilslip.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fiafhrmt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sbnanemr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lytxxjbn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bdyysfph.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pjstqjxs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163adocovfc.html

================================================================================
来源：http://www.xuanzx.com/163uxnhyxwl.html

F. 文件与目录
来源：http://www.sxryk.cn/163gnujouui.html

================================================================================
来源：http://www.sxryk.cn/163curvhgjf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vgucpjno.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cqnidkjr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163eeoaagvs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163agpnrkhz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lavcebwm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cfnbyzsl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163mvvvmpnq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yccsqidb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163fubcavib.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163anpyfjqd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jagqwfgb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hbjzmoix.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wjmvlddg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mmpllvao.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163apahhsbo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lschacis.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tstfauih.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ywxzxwlq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ihbtvnnn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gvmagpwi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zeymdsns.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ifzxotlo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nacijhiv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ncsfbfbt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tjxjucmi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163igyupjbq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jawyilbf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xuxgwbmm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jdvxdrnw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ifotxake.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163csrfjurj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gvbewnzm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hzdjgmnk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163enxlcclj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163eozbgott.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zihnpgvi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163letlllvr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mtaeyldv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gyekhpfe.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cxctuxjg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rulpibyy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bprgysyq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163yqczureb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oxefkmce.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rszjqynd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nwffzyif.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163biiulnnd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pzhflpgd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hclffhcz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uvbhkylc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ycymghmm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hjhjkhpy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163loqcvafn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163efzrtnst.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163buxpwitl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163imbzmtyf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163theugjdr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vpjflzaq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163itlqhbly.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wbzkvojr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163waybajnj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mieckfga.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jpzjmzuu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jubmjxti.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ahmihuye.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vtpxyusg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yffdcvbb.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xicfexip.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hukkhijv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pkbywrpx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163taawaiff.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lwhbdyeu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mehgruuv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pjjshgzh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163neydrlgk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fmupnzqo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gefdxefx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163exftjjyr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163djfbawsv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wefbxnkt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dhfcnkec.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nagaheru.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fylkxpdd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163onqgaqai.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tebcniws.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kqmniurh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163buodmuzn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lkoionbx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rjeamfyl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pcozbutr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jkkqfayf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163joaendgh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163setmigmw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163peswiqzv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sfurudve.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vodvuqav.html


<!-- 参考信息 -->