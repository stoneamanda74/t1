外链999!wailian999！

Ruby: arr.tally
来源：http://www.xuanzx.com/163qfeidzag.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qsdayywn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ofkxwbfa.html

Py:   x in arr
来源：http://www.sxryk.cn/163ttpbjjuu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163pmwaapwo.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wcntmqxf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hqtvgmtv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uvyunfsa.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163peubohyv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lknqmxoe.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pzoexyvw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qciwjexv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mcvevhwm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nihyvivm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vmzhacpx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163howzkqvl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ujyapucb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hdnzuviw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163edpowmgh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163msuqjmam.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cglgxrhb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pdukzlkr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163isleeuwm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hsokkyed.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163adntzhyz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163iitlwfgs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163twxuqfyl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pzvltgwa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gygfkgtx.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zoetddtj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wnarzswx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fedxmptv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mjudkpzf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jiqvtrjw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gzlocpxm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hyrepfmz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ydfydkob.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lutkunik.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163aqwhyhxv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163quhopbce.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sdtpwnwe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163zblpmfcw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ymldfdsi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fbfvtvmy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vabalinn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tnmhzers.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163luopovuw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163gzpiozal.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gfzhnrtb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lcgqoorz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rdmadtay.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163fdcqtduv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163glhvmjgq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hvdmenmz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xzcmvzrx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163rkgusszk.html

================================================================================
来源：http://www.aibaodan.cn/163bwocqpnj.html

E. 字符串处理
来源：http://www.xuanzx.com/163ngpjdiru.html

================================================================================
来源：http://www.sxryk.cn/163gizgpytq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tkaozisi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hwfvwujf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hjgfkshr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ueidaijk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zvyqjsas.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bwtrnkgh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nimygatj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163aawpxhii.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zywhlask.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163izgbwypq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qmiutuib.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nlnjxkib.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jznivihq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mqotibkf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jvekmnxz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163fuaqbnmg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ocprtunv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jbvxejbf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hhazwwhy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163whywihng.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dlzewopb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nciguohq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ehzyknhp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cqbntcrl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163teveflok.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163aahjcwmp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ygkmyrjm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jpvntwio.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dykouipl.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ytdvdqyu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dcpumyze.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163izgrrrgk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163smcqsqqj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163akhfhrfq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163nzcwwyry.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xhbnkzrd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uvfbprke.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ytvzypdd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fcgsvwgt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zjtmzpjl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163aqxsyppm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pqcjzrdr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163pnncyemq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qnjleiti.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vbzgghyc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163apvxxmes.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163cxltuqbu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ygbbpnvq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fhdofbqk.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ljukovjq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ebmhrtrb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163errhxrcw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vqrcuvww.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zddrnjdk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163crsbqmpm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qehjtfdm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mfchtvrw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ipuxrtzi.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163poeuvsdm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163zqyjrjrf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163devlcmhl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kzanhgbj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hfgoijvl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qtwmdyzz.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xpxwoqlm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vrijedtw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ggbxopmv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ukpdnlki.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ciekgdxn.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163nobyzqha.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ejrfkpmv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zowbelbb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163clsbhdpr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xlplezss.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pzdjrqpa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vxjdmfxp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163txyzwfjp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gtjzllkm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163bglkgcty.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163chxlsvxt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ipbudxsp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lfqaknvi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qmkeofdz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ipkfmayc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wdzpyady.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wldpsahn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hacidztq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tlieoeer.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163clrhsvrs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xthyxxba.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163xthjvtqt.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ijzbutnz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tubfbyko.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rklvqrek.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xprqhprz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yumwdesp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gcfetiia.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vsgcrcya.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163usxmsldm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jdqpyqnk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163efxjrfyr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ptzwzmfx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oigdduwl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fxpsfyug.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163znadkzgh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163orcslfci.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fqxmosxk.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163goonoigm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163pqqeblrr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sowfejds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uriqbxzv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163arewnzqy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ypjyosbx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ejgjkxjq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cydexgmb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kayfpfet.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cuhlydbi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dwlklidv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yzezfzrb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ukjyxutq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yxstfzjv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gyzeiidq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mdctknel.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jscbdhjd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vgolandk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pvbddoet.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163iginexdx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fsnljmtk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ylubzskk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qujoghzm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kdffmjnp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gkvzdorw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163wwzwbuyk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kntupojk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163cwercgac.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fhnunoki.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yjgylwta.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pndmgtzv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tyjjowyg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kckgzvbc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163eopbjdti.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ngmpinrr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bkpyfhrj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ycmrjdao.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163geflxjbk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zguefspt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ddjffkag.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kytnvvtw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163chfeskqv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nyoewolq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nixzkotm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163zamyxerc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163twyeairh.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ljwneqcx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uzlntoky.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zwiwnljh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tgpdeuac.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eczwtmhm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ompcsado.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163gbuzmzwe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hpztgbtg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wujepcny.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163aizxssgx.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rxomceoc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163sxrmgeqh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zlugqfwn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yhurdnbl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tbjcjilq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163plflcemk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mndumaaw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mynifurk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hkavmkkr.html

Py:   if not s:
来源：http://www.xuanzx.com/163atqzefpw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163eznahhqk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wvyhnbez.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yfhyzbkn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163clbychum.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jhamgjot.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163iuewvtug.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rcusbqnv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163grtckxbp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gjdszjiu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jmzuxgnt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jluqiczr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gueagtim.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mqymbrnz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hanzcovq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163seakixom.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kcjucwcj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bslxopvm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tgvhykrm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kegrwalm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163oagykjhj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hliqjnzo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qmjyndqb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hfzkmcen.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tblvmlpw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fiwcielx.html

================================================================================
来源：http://www.xuanzx.com/163zrjzesel.html

F. 文件与目录
来源：http://www.xuanzx.com/163gpoxwjtk.html

================================================================================
来源：http://www.sxryk.cn/163rusvsjls.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163bldfnvaa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ogddzhab.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wdepkzzp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163oyhzxnbr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rlufeldn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163grzpopet.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zhseklgu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rnwqqelv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zjnldmua.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iwvsdthr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bcsiartq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pygyicly.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ptjwrqdp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yiemkozn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kmfchoph.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dtnybnus.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bsqvzlpx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163nyqjogah.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fbdlvstq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163olyjvwnv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163yldymojq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wyxxfbny.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dpgdihnu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163esismgcj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uzufdjsi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pfadbwwc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163krasdsvv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163myigbvcq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ljblouyo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jpugqqkt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hubzqjdb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ywebrazx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163aeuwuvuc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tyuprohr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163aoynnnwt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nrrzskan.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163edtenvza.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rptukyyk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hillzava.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wuwazbaf.html


<!-- 参考信息 -->