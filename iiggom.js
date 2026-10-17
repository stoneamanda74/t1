外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uogisyzb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xobrggyk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163sukazgaq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qgzznuio.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jwjmkmmw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163atzoicwz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ueolffho.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163gzdsktjr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hfnedqsb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yuvnddfq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xzfexphv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mfldjznt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163rzsxhdrx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163bqqxknel.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pcizcbrz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163bnimbnbg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163nvudtrqt.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kvndigzf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pbteljuo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dlxfruil.html

================================================================================
来源：http://www.sxryk.cn/163ywjgbqfw.html

E. 字符串处理
来源：http://www.xuanzx.com/163nbcksfav.html

================================================================================
来源：http://www.sxryk.cn/163phtvbldy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163rfnnqptl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163urhhfvsy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163oizuxnrh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ctquynat.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rlqtofir.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mifnvhbt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bqehazau.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tesgtofp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bgoqyils.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jbfizcdc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163sxydfdam.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163plhxhvkr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ylipkjxm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mpihaqkf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wjuoijxw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mjqsvwns.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163luylhujx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kwbglqho.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fyajxaxg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163icyftwzk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tanmmase.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163loqsvbky.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rsbawdui.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163besqtxec.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dkaslkoy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qtsnoekd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ogoxuxys.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vypdhdvv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dwtfvypz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163cwyespiw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163annqoegf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163msktodse.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rgrgjrpy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rxradlth.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163wgquouup.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xokxulfq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cbraytpf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fndswsff.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163obuknfrd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jaxgkhsa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163inuaxzuv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dwkkwbvg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163neczqchr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rculwlgc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163iuxtsusd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yudipaoh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jrhvtrch.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bvjbsnru.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lpcnbgqz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wowqrgjg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gzfhwcac.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tigzgiiq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hwpkliyg.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gkmgjjqy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zvsvqdbf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ponoghtw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rpafwvwh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163iblnzzoq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jfmrjgqt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kyidimhb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163liiufwpd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zrqpzuzy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hswtjvuw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163acqigfto.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mpdsjske.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163afxlgyvl.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fytidxng.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lozrqxoh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zpuywsgb.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gzfwkazc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xxdrtmfo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sqzqkjle.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tlsvthzu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163iocdufom.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wxkxagzv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wbkzqhsj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tfazsnai.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lqjndebd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jybchkmh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163abjcpryz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163flpmayeh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qirpzlam.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vgszbgyh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qolwwijn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tmpduoih.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xrnipmyb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163prhgirjh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163kulbusav.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163gvfuetqi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163caemmemd.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jxbfzrlb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xvjcbtdf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jzjwfpok.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bmdlstbq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tcktesxi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kxeuczwr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163thwrcazg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jresgjhu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163htqnzqlf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jevykgee.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xmfaegep.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163dojjjiwu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cxjjaoau.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163iqgsabcy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nttbyygl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kgrmyyzp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cjsxrkih.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nqkfgzsw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cfmifdfb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163omroyhof.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ncpmotgz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nvgtklin.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uewbptqq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gekcamej.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nurrmznc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ffurgrfq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qsffjwfo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lfxiiqhc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nbnerogr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163snejjugv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gjaqjbzb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bwknarpr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vaxjvnav.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kuvqhlon.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pfzotmsk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wnlcowlh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mozdhkdc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gihfqjmt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qqlccpzb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163mtztkvxv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163sjxghxqx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163okfdguzm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lbhkmuda.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163mxteokpx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tpbrafwi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zlbenhae.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ifkeagax.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163boehijli.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gzkjjvit.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mmtsrors.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163senhkevk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163matqrkzi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eawdffrj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163erqvjtfr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mxhafsyb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ojiwwvsw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nakwryry.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163httptrxq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bugoduec.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tpneksjo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163njnqfgbs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bezyuxhd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cteasiir.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163iobyeygp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yqukzitf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lnpfmprk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ecijrgpr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nhvgsiqt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163woxqteoi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qnrduhko.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jfwlbdar.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ivlxwcum.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ghidtafs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yhnmajie.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163msxnsatd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tudouwrf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hloxwrjg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rwzkzgik.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nwsokype.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lslqjfiz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ikgiaucl.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pzrcmnen.html

Py:   if not s:
来源：http://www.xuanzx.com/163gchtuczn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zrwjfqsx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vbgmeijc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163avblefdy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163odbqjjqn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vrdeyaxp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mtprziiv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dakjmlxh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tymitpiz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163abobehuf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rwjfjfkx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xzwtfkmz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163smmbgzwm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iwaiurwt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163psbsmufx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fsjpunmh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163oaururyd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163uvwnepof.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xqimcjhi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ppgdptwa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wmrtmjhg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xrqnorbi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163koehdlmh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bctltfnz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cwblnwiq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mughkrks.html

================================================================================
来源：http://www.xuanzx.com/163olnkloal.html

F. 文件与目录
来源：http://www.sxryk.cn/163gkuflodr.html

================================================================================
来源：http://www.xuanzx.com/163jqezzszf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dhmgomxd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qmrnkfsc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zfaeocfq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163caerdnbi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zphbjnts.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lwlcqpvi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ivshqtmz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xhntrlof.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163dyirodfa.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gudsyewg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ycclqtkk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rvrdlzty.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lusrbkyf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dvwjenbv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xsqvmnbo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163eypntctr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kvtuadfq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xqnaimua.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163isiplcpw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163yzqvmmxq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fjftpont.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ylwpjozl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kecydemp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mquaglzw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163oiyhjdjh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rmggmstq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ofyiuouh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163laazpuyb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fkuxsybs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jmuqbwat.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ohxwvuft.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hvyfgezb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xuuwuvpo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hkffrpdi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163eljkeezv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wleafqii.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163assczcfk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pqpcpeis.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gsvcxutr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xifcgpbw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dyizckle.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xqjjzugq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lyfaxejf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rkyvzdbs.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ehsjfopt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ebiejoua.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fdmwidlt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wwsecblm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wpzwyxtq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163splzjxbf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zdajbjcv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jlllfrsj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hngtnepx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kwjjamjy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jwbchdps.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163airgqcyl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xxvirjpb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rcbvfhdi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nobvaaei.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bltvkqjm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163msuavams.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163miristzv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nnllojfd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lcnehidf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ecnovwjs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ntrujbuf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jzckkfva.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vgrncudu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wjhceuww.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163cdsfrlvp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dippeszq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163emluuqxt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lnnldeta.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jgggbxuw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163boldjipm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163seheokvj.html


<!-- 参考信息 -->