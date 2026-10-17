外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qftxxfxr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163memlzlut.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wppmetqq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yrewkdvg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163dxflcuii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kgablhyz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163buyxidgl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163awahegnx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wggvmmsb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dnfoywte.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163liwdjdfj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zyqkfzkc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163naldmlym.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mehqoinq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zwgtwnmq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163baiioxxw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kzxsqags.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nmeveymx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ddskfljs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vnckuoad.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163csbkydyi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gmywoeap.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vevjsylf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ycsrpniz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cybuboyj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163psttihje.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163twabyfzd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tbnthrfs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163frqzqosf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ejxqtzuk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cnbpocyr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163onkyqqqp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163eojqfxmy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rgcyvdyq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wiyamabn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mtcelgaf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vpezrdnz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ayqryfpy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mdwqxbfa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ubjadwij.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jhmwexnl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yfxefnzb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qjhigkxn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ctawrlgy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dnycuaok.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cljiopvx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163iaemfwco.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ifmpcnms.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163aorwmgix.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zoskihcw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nhdhfemt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jhdloyhb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nqtoqqkr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ozqdxjlp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qxdhjigm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aufjnrrw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vbmbfnne.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ldjwakxw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163npjcaxdb.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dvzyzwll.html

================================================================================
来源：http://www.sxryk.cn/163ybwiryul.html

E. 字符串处理
来源：http://www.xuanzx.com/163vsaoqxfb.html

================================================================================
来源：http://www.xuanzx.com/163wmvvsxjy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gbeoczem.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dbuecqhr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163msgdsoiu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nnjcrkhf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zzeskjqk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163thecftao.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rtsnyynh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163jxtzslfe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gidnntfb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163msgdovny.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fzwtlveb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rjfdlxys.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163raefbwpg.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163spuoppdj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163nrirbwda.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163eoisfzjf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163riyfayxf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163abimeqdi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mskjvfec.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yijodezm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pednzjzp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xovdqfmn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163amgcesmy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ymlorxwb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vuadhfqg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163spszayfc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ulsfgxdp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kzcecjje.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mgekdimv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ighvgxvf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163oxeproja.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163oodjzmto.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163unrcjuyv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163nkiiaipk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yfjebjnq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163itjpnlgj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uiddvgfv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ynfngagt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163phoqywdw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qdyrctlb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163natnzpkb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xlykoyzs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hsdbvbbp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163woyhppnj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mxmwcydw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ffilgouj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qiyjyuyg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nyukityn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vinjldok.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yussvait.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yrhfjvic.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rnsrzlbc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uiqtwjwn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163cepyeecm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163dafxdtvw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163motzapmq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163aybptnzt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163djjoeenl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xermqswx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163muejwhzd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163axobgyft.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wgauonfi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163oiimvbdm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jbisaocc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gplhgliy.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163cgtskrmp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163oucgvqac.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163eubcmmlf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xsieicvs.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nmkpiwdw.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163snjbtzmi.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ztzwdqhq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lzrftsbg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163uunqdtpw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zgpzeydm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bzcarene.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dzvxduuh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pgkhznip.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163thacujhu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zigmxnhh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kaklzduo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163yagktzyf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jtayytsn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tiibitds.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mderqpmh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xkfzvsox.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ptuizmut.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fhyxchmn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163frmafuhs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163uumpsqaw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163klkpzlwq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rndlijio.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wkqaqbib.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ctxnbjty.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xohpzaln.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ugcqrenz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163arxjoloa.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nnklmhgy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zeehrthj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163thjnaeyr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ycakzxzb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163iarbctmj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hfofucgc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dnjhrcoa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163etamdbos.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fdzcaiuv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163lyfdpimn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hovlshxr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163brppytct.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163cdeyhifg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cvqkbpth.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pojawpwu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zcpbvbop.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163voxmeear.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jewhsfxg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ecdqamdn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hpuitfvs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hzjezhxr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mwcwakqo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163bbqirxjp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pubvkxyk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dsuyuhgz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qrphrkmi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lilmbhpz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ohtoyakk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163emomtzjh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163fwqlzkst.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vgajegcc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kaovzost.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163nuvqnkop.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cmjnlipm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163trauycse.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mfvxblxc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tyhfswzc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lphravei.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ocadrrzm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rughwmgk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qcvzdyls.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wttjrwgz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xtaqtgrs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163otahiero.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dgztkdhf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163nfumefjg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wqoygcti.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163wdbixhow.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ejiupiiv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uowxzbtt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nkuygqwb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tcwaftfx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hmkdtlhp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yvrliivq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ztkkubtl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rmncgmyc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nockcqjd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163irqggzyv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dnevuvmf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cyiwzyev.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bacxuyxc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wzaijbzd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fuecxcmf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qrunimjy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163avwgpuec.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163iqsfumyo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dxkiztkt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nzzfoada.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163afjcwfwi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hjlkotnw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fwvhgkno.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163saprzsrp.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163serljusy.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163bfytgvio.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163stltjqbb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vbwygtsq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ylgivfha.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tekzelfw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rrkaggin.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xmxnvmwt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163eavtzxsz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lrvpserz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sxtesaon.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163laluwevc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zksuvavu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fyeoonxn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pulzgcvc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ubxedtxo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jxmjypsb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163plbdfsgw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hhwtqvyy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163clbmnwit.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pbtzbosq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cgunityc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bcgjekuo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ynvzfnrd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163frxdumqw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qsdzxfro.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vfmgaewr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cdatgwuw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jjxkdahl.html

================================================================================
来源：http://www.aibaodan.cn/163dqmwsgky.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ngyexhnx.html

================================================================================
来源：http://www.sxryk.cn/163ysgpfera.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ejnsrpsp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pgwagazp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dylwggkx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163osnbcsgh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163axfcxaor.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nmetziyv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ghegtznk.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163aurnvjil.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pzovvkoy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sftymbwx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163uethytjq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dbrshgrp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163blqdcffn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rqxssdnt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rwgadowj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yfxgdliy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wldzsayu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163clzoqsuj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fkqmnuxx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wbxbucuz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zlrlhgqh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oijzjuvj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xlcjvrea.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pcfelftj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163janitubk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jnhjwxqj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rjgpugmu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hgxbvnry.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dmffrnzo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tvrmkxvj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tjtlwqlv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eyowszwf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vxssombs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163egzphnyd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tdnrnfqv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163emrnkrul.html


<!-- 参考信息 -->