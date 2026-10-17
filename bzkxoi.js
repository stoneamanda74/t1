外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163koafpdtk.html

E. 字符串处理
来源：http://www.sxryk.cn/163oxaprryj.html

================================================================================
来源：http://www.aibaodan.cn/163hxbsxbbr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163bdurhnbv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dvnrjwhk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163plyevlja.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tlribnnz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163liwypmqq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jticplqh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lkenlogg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pwlcqgup.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163byeyxcbs.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wgismoej.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qixevsvi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lmilijei.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vkxiypvt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xlfixbli.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kgyaphcg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pwypdjqs.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wrcswxtu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dqywaktk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163razduobm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163azjkzltg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pgpajpph.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jqjbeckd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163prtvujmt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ozwahdnb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vwdhimqa.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ptjfstxa.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qzdtrcum.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pfxcjcuf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bmjnrdmp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163spoqnqxn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rwqfrprp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zmkzkugg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fmkofdlc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rwuwvogg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163shmthytg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gmwlfrky.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nneotwxd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tsqssnqk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163syzhvunr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163smxrskwd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163trccueif.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ojomlwxv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qddhvhah.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163scawmwfu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xizuarac.html

[E06] 替换子串
来源：http://www.sxryk.cn/163bkyzilrx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zctferdx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163szwqodjz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163brjufezt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eftnkxxw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163owjjpigu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ppadaovy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163sqqiqvrb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ggkouhze.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qlcxaxpo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tfihnowj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163knvljptz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163frfxifrd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wpqplqzf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wowoyqkm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ysecqydn.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163twestcms.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lmhabbgq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ufdxittz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pccsmity.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vkrcyvgo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nksvhusk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dgqhmgpn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mhchpnjt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163yhzdudkc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jgzmmvup.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yaldoikm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yahhmrme.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jqzayfdi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zajrhcze.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gpekrfwf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fwdlsgba.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zznzamme.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gywioonr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163sjfmjohz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163syystfcr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ifocqeht.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fyurkvfs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zyxqcqwb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nrnbuwwu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kecizqwk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bizrmpph.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kfqlqbvc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163saexrxsm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pznjvelw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wauecrvi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163myktufjj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163iwdwuwga.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163aqpmrkqu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aavmlztw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163clrjeobh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mcgldelj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qmuuzsoc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qypcvjjq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hkjkkzxq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163frqmilgx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ohvsuqii.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gidiqbij.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163irmxystz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yoslqdgd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mllmwbbg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fixnfcua.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ufxjsnzf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163osqiogwu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pmbnsaxt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ykbcizxl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cgarkmah.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fpnwsuxr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wdooedwt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163lswmldgt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163cndwubhw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163chbmglov.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jnmpdyce.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kxixvwpv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uxmiwegv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cyznflsy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163fdzfzxty.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sdgsbfcs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163uvqcpcpm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ogngwuwh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fhvnksss.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163cwuetfxc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cxlaktln.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163eluqkpoa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rciziiyt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gcajsizv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vmlbfjuo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wkqbdges.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uypgzhig.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mcuvadqd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lfgjqvfa.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163seycsuki.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163azhipdyx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pzmylwkr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hgclklpf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jlchkaqy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qlkbtuuy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163btpwvcxi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hbwvnzqe.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qqkmmsjn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ixkuxuut.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gcjjkpni.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kvxtqnmd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vlprgejk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163gvnbhraf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jqlhgqdi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ygwtpjei.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dihgsoxi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163talmstci.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163njpfosgw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163umcqabwe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ysmehtqs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eaqqdfpm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ewkdomad.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ahtcgsvq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163btnffxtu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wibimysk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jwuotkvc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lcciqtyb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mkzzewdz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163buhaolzu.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rzkvxrrk.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ssfvfbni.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qneetcaw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163gtflkwkk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mvopqshp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163habltraa.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wcaorogd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kmjxpxvx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hyhrwkeb.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163txahczvz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hrhsfvyv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cwcmheye.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gekwlwsa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bcvsdfyi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nkltzwdf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qanffqon.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163bcnftwpb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mcgadjhb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tpmmzluo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xntlnbns.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sgkojamp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kmiyfjhr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163czzunrxz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vscgywhq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mxjzhfkx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163momnqnyu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ajeynble.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163eqnifztj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kbgdzbus.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163torjviti.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mgqnknpf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tzfopofy.html

================================================================================
来源：http://www.xuanzx.com/163iiqeycuf.html

F. 文件与目录
来源：http://www.sxryk.cn/163pjavdptk.html

================================================================================
来源：http://www.aibaodan.cn/163jaquaqfe.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uimliphe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vrwjtspp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oxhnguxb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bpakdjtv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wcfoxshi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dwaekhbh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163yiclucwy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163dwhznimc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fnhthcud.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163gdttjxvf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163iuqwdklr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163skilqeyd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xhyimwil.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163samqhwih.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bdehqprs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163smrcjnjz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163svavjtdb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163awvpwedx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163woqyfcfj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qtlmdmaq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163psaavhql.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wmghpqsb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163blmjwhiy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163naqqrjxt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nomulsox.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163iipbdynu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163afwdtoqc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163hheyxetd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163enwnpeuh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lcorzvzp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sptflwlk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tylmlteq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163evtapddc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163snuxrmjm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gybpvrvk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163apwhgtez.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zctzfomy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rnvokjps.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163batlnrry.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iumnmqbz.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163msaazcut.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lfxqxfee.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ibxncowv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wpbkczvj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pnjolwsy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mistetls.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ojhugiev.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bzsppiwp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lbdgjaug.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163teqghgls.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gabxwjcf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163orapsbhf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163xlegpjpl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163nitxdxrm.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sxssvbbw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dazxholy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163utgpnyjt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gmamvtlh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bpacmxas.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nnbdfvlu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zoblcqcy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163endyuvvz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lmqzovay.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163otwohtwb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ozuufhbo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mgulpswi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mfiuofxd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dhfrmwrx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pbijoxhl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nfcsjmxg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163piyrgbyt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163latkuqao.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hqilypxb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ypmnejst.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cwyiqzsg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rlnwcpal.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cbdutift.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hfurgaof.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163eiiqnbbj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163detfretc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gnyhklhf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tecfpezn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dvlrarrm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uitocice.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iitbkvth.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ebffaeor.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ilrzqjku.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lklmmahz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vyggbklo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vnmbsalf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163iufnmuih.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tmogkvzn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163bgcltaoz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163isbqyehj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qbbxcrfq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dqhdpgxn.html


<!-- 参考信息 -->