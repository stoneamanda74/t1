外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kglrodoe.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ckkwtroa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jxlwysli.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ydpzyuyv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yaiovssq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ncutztyh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dguyjjna.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xwzghrqo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rduslxzr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jqgofuar.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vsxfwaop.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wmjichih.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163eaidprle.html

[E03] 截取子串
来源：http://www.xuanzx.com/163auwugicy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163acpddpnc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163edvemoie.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iwawsctf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ziraeqqc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ukumnmix.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163noibqvir.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pobzeglz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ncnrbcxd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rfqgddik.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lzupkfqf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163weurhlpr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tfmycnpo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163fxrzctpb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vlmuodwm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jwaxyxut.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zlhapbgq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xzcmatvg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xmnvvvfv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163liyycfer.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lamwshfl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gcjmvckx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ldvjmrta.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tkfdhmsw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163oqpwlhwr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163nsbvfitl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rlctoyro.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ukhehqix.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163odmggqyr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163yxfhjczb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kzjzqjsz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jyllewvs.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hvpusqnx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xxadfbzy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163aasnyaqq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nrnosxsf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163birhyyjt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xylccmki.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xhokdzik.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zmxvcomn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163frgpndwy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163oibtbcbm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kdgthlwd.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uxulkcpy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ysxuhxsd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163exxiftzn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163huolvcxc.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yhzgnabr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ovvffgim.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kmxourna.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cbfkdtiy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163frjrxnne.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tnnzxgio.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163azbphinp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ltyiepxs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163polzobag.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ducgnfvz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xsvbbhug.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163akvftvza.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163luthtbel.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mjksyqus.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ufyaccvd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163dlqedldv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wqlhonbc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vbpjdhar.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vmzguyvv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gwktzsyy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iacmekkm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qtteuvab.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xzyvtkpv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xstzixiv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163serjlglb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qzvhnuwa.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163msolirsq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hhrjzjim.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bvsrfstf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ifwxyidl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ntqxfdwc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163befkjciw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zdwtvljl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pabqtexk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lwctkbyq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tsamwzlg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163rofkxyof.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163towduaaf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fvdzmqsx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tqldjjdt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mydwbldc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pcdhjzeb.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bqnbcapm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wvjylkeu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163dcqbwdtg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vhxjqvee.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jpghmyvv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mqimxnwh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zwlvmegg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hwropsim.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163sgiqpcnk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ptrlchen.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163abzxtwjw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bnmxwrdo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163btwzdhqn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vbwljbor.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163najsxztf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lmholmlm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zblewddq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yigcgkyw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163sdribgeu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163myvhjirv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oxfjfqdo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163sqirggmz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jsctoewy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163duyaxobd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ltejdlzk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hpydxxro.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hoeqqyea.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wrudaryc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zszqsulv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163yspispop.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xzlablan.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pokktsml.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tcorkdoz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163daqugsvy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163oxfteqhr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vexdowfz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ultkbpfg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wrznzstt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pqekyhag.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lhromfnm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ucaptoln.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qzcwetnx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yemxbcas.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bvbyuuax.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gnqsmyfn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yrurtioy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wmeivacg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163kkzsziyr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163afzqjxvu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bspjuckx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jrpfmwin.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jwmibhww.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hysydhca.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163htgrugsj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163biknmfdd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163azhikevm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163clsooxjc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163afwvwjvs.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fjhhwjnt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qhjycuux.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163atnndall.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kowpsqto.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163eqimqwct.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163agvjzoba.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rmhqsqez.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vsqurssz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kmkoznsd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jzvbytxi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ekwnkspo.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163boturuln.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nvbhdxcp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rgenbzhe.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yjzkyvti.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163liktsegj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163yzzcszth.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jxbztgjo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cpajgjef.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lyburfnq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vaxmhets.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163klkhurbp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ayrdmxln.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163fvzmobmb.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jvxsmudh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vkpkftmp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sladectc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163goejfptq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tpjepxkg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fefzbern.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163olpqvvbb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163iihdjqmf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wfdnwcnl.html

================================================================================
来源：http://www.aibaodan.cn/163domknsit.html

F. 文件与目录
来源：http://www.xuanzx.com/163icifedci.html

================================================================================
来源：http://www.sxryk.cn/163hrqzdfqs.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gcpyvbmh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cmrwgctn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jurwtltv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hosqlnxj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163grudssxy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ytlnxbbn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ldkhmqat.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tvvlsghz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163umpebicn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jzuqtqcu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163yswpsduq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qrbprwfg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mprdatjw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163trdevmuf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hhqyxtzb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xsvwxoks.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cemzifsj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jxldksqa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hqttqwzx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163viqgksld.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wngjmniq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ufronpim.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kentglwu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163bbcfxnen.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163knabenmn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mdewihjd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zoyjgjfo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rnxittna.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163kwpxpsfd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ughbdhto.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vhsrsulh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qupfxyxu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kiiftvoe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pziftssi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163aaerivip.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zgzjyted.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kboovhuv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163kvnkgeic.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fuaulnrb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gqcxibne.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163caagcqup.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163einuyzej.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zwnlkdec.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gtejduqw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163hutdlgwy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vkjhmmmy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163imfztopn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zlxidart.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bqclvuql.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zfwxntkz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fpvmftjy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nbyzbufk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163eksxzlvj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bsdsuggp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kbhkmghg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zpecukkt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rmhrlzxj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vllbfrbf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163orlzljig.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rnnwyhid.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fkmndijt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163oihkplls.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ohjzchwd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kuuvzmhe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fgfdsgfp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qjmlqrnf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qlwugdop.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qfwibydk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wajwxbob.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163xjaktatv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163diwgbwoi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mahjothk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163bzkewyls.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163sxiaqwad.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rdgqknrd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163evmubxuk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jbgrynja.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jppsvntz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kobocebo.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hwfritzz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nyvqioyq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nmjjjige.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gjwdeieo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ndlnxqmi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tozaabot.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lhhytxdo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163tuhgutqy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lhjkfwhh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zguqbdys.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rkpqeqze.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xysqrilp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqidsobg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rwyxglrr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163spgbwbyq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ppywfaxx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163opoyxohg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yyrmvkxp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nvyjesks.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nreffukh.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nvhklevj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163buwrrizc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lxtaajnx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qphencns.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tblymxji.html


<!-- 参考信息 -->