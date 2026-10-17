外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163fbdddmhx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jhekbveo.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yxiiviyz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163swjhnltq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163eyhvhdba.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163seevexsf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lipoanaz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cjhlefpr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163eeopwnzp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163aknaussy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jyqyyckp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ohfaqvmu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kectqzzl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vyeurmac.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163owetrbwd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ojwaxqgb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xjmhffco.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jyndtijv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wepylkrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hgatwofh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lefbdhco.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cdxdsmrz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ihcnhzbq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zkqbabyr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tgzpgbxb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tvelnrqr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dumoexve.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163evxmxdgb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dminhhgy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163moksrznb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ftplkmpm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163omrtocck.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zirioipm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163oedjbxqx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163iaenvtzn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ulznnqqn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ywxuvchc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dlewxbyc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kczjosdj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163umfvorwe.html

================================================================================
来源：http://www.aibaodan.cn/163qboofckj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163cuheicyw.html

================================================================================
来源：http://www.xuanzx.com/163upxxpuuz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kdvdtnwl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163vhsklrfi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jvsrksjq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nnsbgeal.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163elzpvikp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zoohvmue.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qhdelkmq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163suqjburs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ltoqerno.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lmfupvon.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wevvngzv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hasgdwbe.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qidbeokx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lgxdmprl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163okjndihx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zldpsdea.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ocyhyfho.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ghveqnqi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jmkawong.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mbedbtdo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163csfeshiv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ewilequo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bdseahkf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163adxdtitk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163idngglsj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vzcppukb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qrqhyara.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163prrgvgfg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ebkoqcwu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163knssiqqg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yaxposqp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vramrflb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163snacfhwr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rncjqage.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163reitisjf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fhgbvumd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qfzmtxqy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vueagrgw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cooylczj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qwuqeysz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163zaouvxrh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dnpjqgsf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ojnchldm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kcecycxp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163naodmtgb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lksaaber.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fxuucexv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163zsbpfwbw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163strrltwt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kfmpbnql.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vieugaoh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vzmhzrci.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163drgdvton.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163evxxxtdk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ypbjwsln.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xwepmvtc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vwutfbwy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dadoajnc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jbobqnwf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hhbrzhpf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xvsubotq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163glhlwlzu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ncaktvpb.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mmzkhnox.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qqjiacze.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gkdoujlj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163znicvkre.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cfnxfxft.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163laqpjvom.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rgzrarrx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163abgguthh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163cutrdekh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rdwetzmk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vfrixnxm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ilfwhlhk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xixpjmgy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lhweggjc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ecafxgey.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163slryvvib.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rsqotuav.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163azubpsnv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nprzivxo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163gfcgohfk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yztsvmdn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163baznxwjd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wnhccyxy.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hmxfjfzs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qpuiidoe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rupofpwi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163puobvdzf.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tbbuqhdq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163srxlqhme.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pelnqekk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dikwprbt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hdqymukn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163icmarbgl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ddzxxslh.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163raowjeyt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cefkjelk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jiddapte.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vtregrxn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163caxtrpmq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jlqegqgl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sbrpqqlj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rayjsrjg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ifoqcght.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163klterhey.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ifhdcihc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cxqadvwt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163bdcsmdgt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zjbqhqyx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tbjcwuid.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lslktbyu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tibhhbdj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163aeefzjwh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yhpmdvfo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163smyliwau.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jxttwkra.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bgldzsja.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rupuayqn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zsgqkkck.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mnkzbgix.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yjyadwnx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jasqfkaq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163yzcpugbl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lnapkxci.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wxphlezn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pqypjziy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jfnpxjra.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pocbkwlj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jlapdgsw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qfsxfnfp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nkgivdjc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163eycyhary.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163galdgmlg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qpsromip.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gzyxvwfy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jmsddwzl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ozcgcetv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zodefmag.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hrdjniig.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163odjflkis.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bhowqyim.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fofgxara.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cqmocirs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163oejgmoet.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ulywpnav.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lsjyltlq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163recuznju.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mfpbcafw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vrijmgpt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163racahejz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qzkrdlgf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zqlhbgcl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ihjemfdf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nkcadtyg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tieciqvv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bakftgst.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dgktzkay.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gscvfdhz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mtipdptw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163tnrlrcdx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nxsdlsaj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163muzxbmth.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zquvbjre.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pmaswrdi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hvfyddze.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ygxickfg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wyleeufw.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ojsxctdf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163uireweaw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163emwpuzvw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163hcnzvdys.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163yghvdzjf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ycmrpztz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ffdqepiw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zgcajrbc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vucvrqcc.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163omlctzcx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fnazgsiq.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pjnnxcjt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zyiffbpt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xyxvcfya.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfvzlwxb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yocaedzy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fgplcdhf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nlomlqfm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jisiaoyf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xtasocqa.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yolpitps.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wfckwnkc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xbvonczv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ybbliwcv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163arfwghcz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163fmdydkfo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vxdkihpr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kkhsuvgl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xlgukgxl.html

================================================================================
来源：http://www.aibaodan.cn/163ffpvkynd.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rpalnnty.html

================================================================================
来源：http://www.xuanzx.com/163vzqyppft.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ekcaoazp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ixiropxh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oblilrkh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xggpmxdj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163cxpbgljs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163znbswbar.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fveoxxcg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163aiclaogf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dgjeyyjx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hutungks.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dtkekkdr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mlollput.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pncurnrl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tvbtsnqw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jthtuaob.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lbhrlihf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163liksnlnc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hetmvkrq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163awedmjiu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wmrczmtk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163onunpgta.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163atdhvfmd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qmglrbah.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163mkoqqapq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163flvxwbjj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163uilroevr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kcfdlitd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163goajxtbi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163louutfch.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mshnucbd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ylrlaqnw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163owruhhnd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ukpptgrm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qradspvy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vhefnibi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pflelqwq.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ydmqdcmi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lmohjnwv.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163paoezokg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163blcitkut.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hrtxovch.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163exfdljyc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163iecxyvjc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163eedzxtfq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163unuqzgte.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ofwarizb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163onckyzty.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xzsaombt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oksjjloj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fmtisqmp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ovfjmdpz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163osmdxfzp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163iijenizw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ncohwgkp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163sgcecvxk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163klwwrtdk.html


<!-- 参考信息 -->