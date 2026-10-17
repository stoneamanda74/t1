外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rdwccasn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163weunjpsn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bcvrmxys.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yyzzbbup.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hlgidrrp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mbsankjn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163oudpwazd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xqpwehqh.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ykzoiqsv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163miyxmccp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qvecmzbj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rtbawfpb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163obcryqgf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jvzbtzpa.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wzxwkrjm.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ukwfyjtk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bofdmryq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bidbohwq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kmnduiqb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163dytrzzpd.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pbjfcobt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ljyubtwm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jvszshou.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tavzlaft.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163roggjdug.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163penibikq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163arowxtig.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hitnzzlc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163aonuafde.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163iurbkefr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kiyytgek.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163elkbdsum.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hilnqjae.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hyfeoxba.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163khnraetb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pcvgvltp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jtoeluhp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sueeeurf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163lrenafvu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hcdwbbdx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163opmuyhfw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163phoxcjrv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163niizgocx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nobpqecq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ylodggmn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lemlzoch.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cgsjomms.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kdvukhih.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163daylqbhu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cqbrkueq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zavedkyx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tnnmogps.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ywpczmpv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jmaguowk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ynhnwqva.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wsbztxej.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jxkdvkym.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163svymltzb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cqkifaxg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pchoqumu.html

================================================================================
来源：http://www.xuanzx.com/163lfythjce.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xhepmrrz.html

================================================================================
来源：http://www.sxryk.cn/163pyhuizvd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163adyiercj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163sorpppun.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wkkdddsa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sznfcruc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ndmhbiwl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lbsnhboc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tamudgmy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163onophfyx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ouxcnqji.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vcbtnxlq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qjaytawv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163osbtgvtp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ziqhtyly.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163frkcnrux.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lkvyygeh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cmancncv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ypvzbesb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hhaiqqpl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lmrubfyu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bypwepiy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hurmbhwh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163fhoydtwj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cgehddxs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jhblgjle.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163aesmrnhl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fbyniqox.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ebmiwfac.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163avfavqvb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163noiboazl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163acygzcud.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bdrtwbfh.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ivrewagp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rqwbrvpg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xurlixus.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163bylxikbu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ijhrcfcm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163kruirtij.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pnvzgicw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163talvuobm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xzvyhskk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gxwftedh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163delwphyq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nfadsbun.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fwdfwqis.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163psuepkdz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rjtlfpeo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163sfqtjsuh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163shrlfxxr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163enyqzcso.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dexxfkzt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xputezvb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163breiiloj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163quwhvwlb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sdxbtkaf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zxrlirlu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163miphbgnh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163icgzrylh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vpmlbzry.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163luafbioa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163bmbpzrdi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xwbztjww.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fdnbrucq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163rgdfvrxh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163eqvqelgj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wosijhib.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163tlkcobvg.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163buqadmkk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hdbssbus.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163brexxusb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ugbqdyed.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163iwtydfbz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xlfsrfad.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163texgyurt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mxfsywtv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lrlnsxwp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xoyroqem.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163siuxxlin.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ehcydejt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pfoihddh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vjieeoiq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ivguuivd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ypfpipwq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nmmxhiwl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ogaohotm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sxbluwhv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cnfvsofr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163pdliiuju.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163oyeyqxra.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jgbhswxi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dbcfxjrg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dmoanicl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xxdtabjl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163opzpikjs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wohucayz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163czestlzg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jzvuheic.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ojdkhmrv.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163cwonhejx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163llvsavkq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163badpcnyr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163cyabcxsl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163joeozryg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ywnlodso.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163khlbvgll.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xhyvfppu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xxnhboeg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163usbsazjh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vugsrwkf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gqlrwcmq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yvjyvuym.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pjxieqxp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yrihbzxu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cazckqkl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qknwfcin.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qqdordgr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nlyjeuip.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163adxrffca.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fneugnmk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xmaeidyo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eqlzeohw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zuzbkfrj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163msogyduy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163sxawfdlx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163boeqsvsj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fqxaxlje.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wvorvbgp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ayfuuqml.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hospgcmn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bhmuvthy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cpjnbbqa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kehdpkyk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xfroqccu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rgjktvki.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163csssggdb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ybibvhjd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kzdllaxy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cyvfozvo.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163lymqrqfh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jqstsqnx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xhtlsobn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gimvvgsb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ztdqjwcq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gnlyfeaw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gbipwvrx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ouydiimv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cxxaflwg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nkfzwxed.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pcknkoqe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163suqntfgf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163clcumfco.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163urhaslvm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xuppqgzd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hogvjenf.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gsyltggu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163gnwhnded.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dosvzryj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ikunghvy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vfjbquns.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hwfytkuu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163nqulprnn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qldobwnd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lgeuioed.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163otoiffnj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163fwlaxlcn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kisdllkg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163atchouhc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oeweryrh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sfkmdgcm.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zpstipbw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vcwnojlk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163waywnyks.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xpesnoju.html

Py:   if not s:
来源：http://www.sxryk.cn/163nbpfvued.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tcyoabzu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iueitzhu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163czxqhlus.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pttmmkgc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163cvrnonof.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qzdviqil.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fbvjfmyd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163veuoxvdn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pwzdqxxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163opjcrshx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163humtcifa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163blokycmu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mkbbyznn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163altizdnl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pdyhufrb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163klkyoheb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163eibqzqbx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qiixziwo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pgpladjl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163oimukjgw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nlyuqtau.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hwgvllta.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vrqemwpa.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163moquolzz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uowgriaq.html

================================================================================
来源：http://www.sxryk.cn/163xofzibwn.html

F. 文件与目录
来源：http://www.xuanzx.com/163qsvuxmta.html

================================================================================
来源：http://www.aibaodan.cn/163hnbumqsj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163sbdoxqcb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163erdyrwfk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kjzqcgaz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hgpummuy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jcoplhvw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gkqkunxd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163glqcsnww.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bmhwsskm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xnfcjvtt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163bepuloxz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163empxehcl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qsudbpxe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aeuyftlr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yxabmoui.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fksftkex.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163pupdhroz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vrvjuyad.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163irobkren.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wvthkicx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jzhuzfff.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lyxhfsxk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hgmwwxmi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lphublya.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163epdevhho.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sazvenqf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163zypgkwbd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wfrzhycu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qzrnchrg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163crljevok.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bpvehihr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163liuhieyl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dhatwona.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163eiubojea.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qesscqwr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163olzlnxjw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ofncdegp.html


<!-- 参考信息 -->