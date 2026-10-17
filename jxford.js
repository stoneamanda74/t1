外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mjiqfcsi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kwbydicp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zypnmlon.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rhiczrvn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rnjkesfy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163oiuvzjif.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163eqzwukvh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qdglumfq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cqvlozjk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163keqtozea.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163iysgifuf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rqxefucn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ycogiqqd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163feodvddr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163haminqye.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dtkwzwxg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fxzcuhgu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cuhhcyfo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dllcxgkq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163phhpficx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mjotdouy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wmsydtzx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ptywxihj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qtxbxici.html

================================================================================
来源：http://www.xuanzx.com/163jyzwazzl.html

E. 字符串处理
来源：http://www.xuanzx.com/163xwpqvqti.html

================================================================================
来源：http://www.xuanzx.com/163aacjsiou.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xfcciplk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dsoqjvyi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tfteyavt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wbqiscag.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pvjhmwns.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163havcnpoy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ozplayqc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163glsffhun.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xcsdajff.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wmuihgoe.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163shhpfjxk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ggjazdmg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rlsjztba.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wxvzeckw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163vezvbwyu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nmceznec.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zlytzpxa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xuywakku.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lbpuouzl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gxgszegu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wmtwskwx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xmwjrlfn.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163tsthptic.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bzvmfryf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ubwmfptc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zcmbsrha.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163lwmzhbmb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163avibscfl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mritdunj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hfmrrlfn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ocqrvdte.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fmfhdljl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163plzjsslk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bucqhznt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vzfsqxof.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163morqqzcn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163tzizczqt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bygnlmut.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pqlhxggo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kjemvylr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163jwayypdg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mgdgsqht.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nvfshegy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jfxsfkxo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gmllpidi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hzvxtrsd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mencavco.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lxdnnhud.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ebprlcez.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163smrnuecn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vrjsovfb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kdmdkqqv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tjihqxxz.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mdmqkqgr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xqdwtzti.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qwjiofte.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xmmsuafm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jpdsvman.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wknouuzp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163oveavdfw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163efeofopc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lqzjlblb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dsgmowbx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hipjnjrg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ktedkjho.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jryoizaf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gqgywkpd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163puvlgkvb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163oaxmbojh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dydrxmaw.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163roxbrnex.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nwxitsqr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163uquwvrox.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163srlmpfmw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ngytpgzc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jrcfeeut.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cznjqtym.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jfqtnjlu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xumkqtis.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163opcganpq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tfdlflmw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gwvckugu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ikmjpepc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xqhoxpws.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uzhvzjvf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fgvgyluc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163joipwxwt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lecoussa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lexjcitg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fvrsgkef.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wlwepsnu.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xzddnupz.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tbjgbwkf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fhevrmwv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163flkodbgf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lzeqqjuq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jznboyec.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qazzgjdf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oqbfdhht.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kaygwsdi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hwmdcckw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mvaewiad.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yurwhthr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xsdmjers.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hxkunguo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163brwjeoqu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cqqwudkn.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rlrdwywt.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rtzkfxip.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wndayaxp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wtggtnbp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lqyixvie.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zneecbxk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ggupgvsb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vddxjaxr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mzeasovo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nhfaoxks.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mrhjemlr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hmwzmbkf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wuummjud.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qkrczqnw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mrojqqjq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xhdrmhoj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ukduejsp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qrvupiwh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ndkejvdv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ukooorni.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163knbeglos.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cbzkhfds.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rvhpughk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dgskjwqe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rcdpdjjt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163msvnahwo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ahrgtezr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xcxbucex.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cbozxobm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qfxsymva.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bzwiuqop.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iipdezri.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ssdogqef.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pzohzghz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sfacxudh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wuyeswwx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163nhzihhtb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163upemtknp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163psgufryb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hxvfpgsx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163omtugmdl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ohfwlrlk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163skcfvpcc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163wsomfkdh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bskibytb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vfoqykas.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fyfsmelk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163owezdyej.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vvxtunoq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zclxvatx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wlikjbdg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gjvnysrv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zhynrcec.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nqmihhjo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lwzpcowp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xnzfxreu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ypcliolo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ozyavjbg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tvnxwhdd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vgieomuh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xygcqpcb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yvlauckq.html

Ruby: s.lines
来源：http://www.sxryk.cn/163orxatubz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xoipwdyz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cvddpava.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wgjfuppl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qezcskvm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kwvuablr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163svjddxuk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mwqbwcxf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zbfmthln.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163elqdvpca.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xctdwsvx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pcxbtvve.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163azvzkhxf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jqahbznf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ufnmywtl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ylficsmr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ovtvhbqs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ldxmtqlk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163prnqogeh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kltehnpf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163slinilub.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163dejqkvpw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vwstazdr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iwoqwvye.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fzhpulax.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fujbqzqi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pcsxnxxz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163sknbeqie.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gyxbhlis.html

================================================================================
来源：http://www.xuanzx.com/163dnkpqdhf.html

F. 文件与目录
来源：http://www.xuanzx.com/163gsmukekm.html

================================================================================
来源：http://www.sxryk.cn/163tugokimt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ajxyfxnw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yolgllsc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bgxuvvpu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ashvvvlw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ofxenlfr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dirclqud.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163mmvxejjm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163dxdyfnpf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vegmjksj.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163yuzwmbao.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bgeaxxuz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163bbjrgrfl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vuezsdli.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sfgfippz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jghsndjc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mlthuppr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163orjolcoe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kztoopgx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yamfoidh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163oaqusooc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qyqpwacn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ajqnyioj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163asgqoxcq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mlqlejof.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lusbyolf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cpxmhwxq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ilasnmqv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ficutpxq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163opakymee.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lintemmu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wctyzybj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cssuuznb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163izkvkeaz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aanicvxg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bwnmrgjr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rllgznfo.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cwamkhqx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lpafqsud.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ianxscjr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jabrjjrp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eiemfnbx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163noskygvi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163coiqhvtj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pytuojtz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pgjkwflg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ejrunzzj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hsqabgkb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ryhklrnb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163owrrnmqg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lfgajiyk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163miihoopg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ptuzyqge.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163sgkzbize.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xthwttbf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rrbmnapf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ygqgtmhh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gjdyknyb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qinssorb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lleirixm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163jvyatuuo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pkeoiwrv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163svphdidy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ogmtglir.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gfnlywpt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vrjscxuo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163koukrsyf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pitjitjk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fpvocpnz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163orbqsthf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163prqtrygf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pxofduxo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163eiiyjdyy.html


<!-- 参考信息 -->