外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xixdelmi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pywdqtwk.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163nmzcfgdl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163duhoifwx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163inlzdxta.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163izdypnet.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163emgmwizu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163luktowdq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ptnarasu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lkzulrvz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163omebcptw.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163dvgnajxj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163htjfrqkh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163axfbnpdy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163grjjxsif.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ikzsdyhn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mykhsheo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163remdgvdu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163efdfmjsh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ggbeufgt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wlygzbze.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kfqflrid.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pljrxtrv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hnemwlcd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163oozzymzs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163clpibnhh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rsmnnute.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163iqvoczjh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qlenghqq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qbjagnzf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ccxzuysc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tzdfkslw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163toipvvvl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zngujeqm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mnbkzzzg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gmplzqqr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163agthjisb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163opznvkhn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163crdlzmnu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dasodear.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gotgknzk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163gprhvbhx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163drdaxiij.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uacdfzbw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163umwujbvc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163hmcfcolw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vaktgetr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yyxnxyli.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163obbttlkf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163qgcnpozf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wcsyvzrx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163sabvcoxx.html

================================================================================
来源：http://www.aibaodan.cn/163oofjfxhu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zbbvvovn.html

================================================================================
来源：http://www.sxryk.cn/163puoumhjm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qcaakkhk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vqjcvaqi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mnvyrjeo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nwdvojwo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163crfzexfr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ehgdhvtu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163glgptbss.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163khwdonet.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fsovbffx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hnqqdgdq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ckhqbkzw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ehfwogeb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xqmxgswc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rolmtcbq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gjtpvarr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163syaczygu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gtfqvbju.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163oqsxyoyd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yjbrjnle.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tkdiestw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ppktldor.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qysonbvb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163iepsntzk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yicgzxzn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gfjexkgs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163sfaaaftc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163khtjnnvx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lsijpjne.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kxovvvpg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qlfbzmrb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163yswusstw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jmwajsvi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dcsqkvfe.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wyumxbvr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nrndfiph.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pdelmokf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wvcmretg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vmfkriko.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163psfciokp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cwtcrlfq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cexuoyfw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fohofrgh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xtmcootp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vzejhyto.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163efyqxhxw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xwuqpoac.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dzapcvsi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lttxakvt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xgfhuloq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163trjdwfmc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rwtxqybr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163iqmbumjx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zihoogon.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163akhxvkbk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ysdncqaf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163eigtwxnu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163cgafbgkc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ygraxspn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163nzhxuqeb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jxmeiksl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fsadsrrc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163cqhjomdj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ayaxpijq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163awhmohxl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fowqptfm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ebuoyawo.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uskkpobm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163quneqocs.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nyzxcfej.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hbljbujv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tbzbhctm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nbzzmbrr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ddnxeeeu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163akdwyhpi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163apeyyygn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ovvftiaq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zkbewfir.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mzbfqtho.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jzpfuccp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ylvrfgzx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qmdbazcd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fwdoeaob.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nryakaoj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gjffpkvc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ytaicmao.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zqglfpvz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xeotdmgw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163shecolst.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fsdnezaa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xeuhmwzl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163chgskhjr.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163yhmuelpr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ftdwvibq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163txvgulcg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163orhkzcmt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lgkerfuy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zsxqyifh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163dafezbnu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hztnxneo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163oqlulktk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163axprslkl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163uzxiuijo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163boklbwwd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rvprqxmn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qkmfqwqe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fhrdaodf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hjuliyyu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nbfdbdie.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nobyppkq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nxbnnahr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163crrlqqmu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rmfesvgh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lpbhewdl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dyghwsis.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fmcqocan.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163skrytzym.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xgdoclge.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yiipznjl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hiaazhcl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163sbsjihpy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ptwoocov.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163edfudbls.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fnwwujjt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163akwwrzlh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163krbbmegi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vjokvrzn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bwaujuut.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rsnxocma.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dcsiptmo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163khgxbyvu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cttttyhi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ayyyssjt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163owjsiroo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qmwqkgqn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ylpjroqi.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dygrtxhi.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163aeiwjvsi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ehcccrsm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wjfwdgzb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163limrsepx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ymynbllf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wsoniesq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163agtaohpa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163sputqqxr.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uvjzzjns.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mwevxtkh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xwteyekg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163agwnycbm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ritcvjbt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wkcwzrul.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163igiznmhf.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cqfxghvc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cnhxhgvp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oxvkbycu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uyqbpded.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163fqppvwlj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wnhigfrh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mbixszvq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cznhprnw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ltoubglu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hqwrrdlb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163qmddvbwc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163mxexayck.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qtxnzyjv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rtgifuzn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nfdqwkvh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wpyxxlkt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163oddunrrh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ydajnvgj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wskgvqjz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163oitxoqlo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163yluedahl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ycogfhvf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163aqdeeniy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tkcbwqeu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dfcbbflw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ecnornqt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lnobnkwj.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xrfvxvmw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163phdqzbza.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dbfbneui.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163awmefdlc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163intaapyc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mcsroyfd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rbhmlhxb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163urzsuujv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lpaqgoyl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ftevgkgv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163apfgblld.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163juxrztkw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qhjyxunr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wmdjwqah.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gknkalqt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dpmpxbbl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bnnjzfef.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qijafijm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kxmrgrfo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fhsnbmrr.html

================================================================================
来源：http://www.aibaodan.cn/163oouxieeh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163talesttn.html

================================================================================
来源：http://www.xuanzx.com/163azbxkxzf.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ejjfoxux.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wkggpjux.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163uxamamez.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mkwpmizv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163arcyttrp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tszxgeeg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hiermguy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dphcsbtz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mgvzxmfy.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hnssmgdo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rmxynoqh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xhvdcnsg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163oolcwpak.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hkmcaiki.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cckyxdfa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fnkkiuyb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mkwosbnf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163nynrrpou.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jpuuxvxc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ljbskvyd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163elmsylww.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vscfbfnq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jucmlxcx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pntwwiii.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ecmlbmfl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fvgnroaa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tqxtawwj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163yqwhocwn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163urluhkar.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163venzldwn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ydnvuuzj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jdzsgcrb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163htqnvhfa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fcvwyvzz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xepealyz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163odcqzlkw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163bcgarrte.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lzsdvbui.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vqhsfnht.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zqbpusfx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dviefnqz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qdvyvmbm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ojpiesyd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163aiodkobz.html


<!-- 参考信息 -->