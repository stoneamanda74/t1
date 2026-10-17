外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163suoykzed.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fdiywbop.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ryqftsru.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163glpmibyu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163seixjjwd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mdfrfbpq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hchrtzth.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hvywufif.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lhdaeptm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163spqamcis.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rgsjomhp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ezerfkoz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tzblhcop.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163oppblbel.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lwqgluwz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zafvynza.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163abwisifo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rtggvcgy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zqiivpqt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dzanunho.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163imyhrofl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zwaaejxo.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163lefmttjm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163budcolku.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163huauggyh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163djgkgcjn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qfdhgyqw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lcvlfckd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tqesmpub.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xwyywody.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nyaikjsd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ligkwuuu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jmqxspzp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jbpuhgos.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vxhrlfxc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tgpbuxsh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qudekqle.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vjjfwsvq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163pyncfbqk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163heygundy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163apbgzdwi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163inlkygno.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gpsbkvof.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jyulkopq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163msguzbja.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zcrvordk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wblfqmty.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mngpgpxv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163eowjevpq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163uuefskev.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pabkgmto.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zaymxnux.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163mzonnwry.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163aqmkuatc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kpytxspd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jbcyehho.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ahatlcwe.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163nxrodelg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163dgbalswl.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ohavchbb.html

================================================================================
来源：http://www.aibaodan.cn/163mnhsjjgj.html

E. 字符串处理
来源：http://www.sxryk.cn/163yydgwoek.html

================================================================================
来源：http://www.aibaodan.cn/163abmwzylu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163errzfdyb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163irkwlbny.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163cmxvtxtl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vehaqzvp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163suhyjcqg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163yenwaydq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lwgcgphk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gqonajyz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jwnudxll.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wabakzvc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vworkgcf.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yqshpssf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qyiaxkht.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mebuhbqu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wngplela.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nabbrhbr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kdapslwp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gkycgzvd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163csqakqby.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kmnbznbj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dfqhcjtm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163azgcbquz.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ewgxpnwy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vawxvvxg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qecsumcp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xumfpgdp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163krxzqqho.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mgkqpakm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hlppcykn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163curumrui.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hvjnierv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163srffsund.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uvvahxtr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ficddota.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vlmhockz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gtijpsuo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zavlwzef.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163uflvcmrx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163plswkbvb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163weryulnq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fmqyqcqd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163stfyuhck.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163mokgcpei.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xvqejxee.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wvjatild.html

[E06] 替换子串
来源：http://www.sxryk.cn/163swdddfbk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xhcjxcrm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tqqetmft.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dslalafy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hsgpytcw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cyuceibu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lshnxuyp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uhzbehgi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163bqbjhlfh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vtnifgtt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163wtbmlilk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ssqpephf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163skzqkafb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xdernekz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163tzlmodaq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vzbhmejg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pasokgji.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ypjhqzuk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mxeyrbtm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163dpehyjya.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qnqfhjvu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163thervtxb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dflzasbf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qoqhiavt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qmrrljdw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kfelsgys.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163haohubtj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zgcxuksg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163majgrhuf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yqfrufbo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wcwftwgz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nhgylwsg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dbtenmrw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nkyyofvx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163kjrxrgiw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163urhlefxx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jrhnaxnm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163knwjbsmb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sfabhkun.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pugjcggn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nksirsct.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fpwmokao.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mufvqwco.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nyvkqgdc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kbnioixt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163imjzrgxe.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163etsmjswx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163aamvjjwi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fzjgyqid.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xewmdaqg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rgepxiuz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nswewncs.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oepsapxa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rrtwhgju.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163txqtqpjm.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rqkucvqn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lvicjref.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rfntqqzb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jpohhkcb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rxrmzair.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ljtujain.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pwutbyqy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163bcygtvdg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jobeoaor.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163yblaqbvv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cbptytxp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wcyzbedv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163oiavfpza.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bwejifdz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163efkxygni.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163umuonyzg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163awnzupji.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kwqfqgch.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163hwhbczbq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jntcugnj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fxrmzqyt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mmlaupae.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163brvsuqqc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kcgdhwlu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rhznychp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bfrgsnco.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kukhgcsa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gnxudikk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ohutkcpt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jjfstzdd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163zgreiwyn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ijxqrspl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163khkwwqtz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dhprtlbf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xkikmivv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163oyohptyq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163koemirnb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163adbxxzqk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163eyaqgyrq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hctpdtfw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163njmhwywr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bjbznhog.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fxtlucxk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hzrjztyt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mgtwqwzr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yclhobql.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gejvootp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163apyvakti.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jdbaeyyd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163onlinpzm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163uooqvqwn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kiyvoido.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dymaadbg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sszzdchz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jjylyrok.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163szandtmu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jbgfmsrm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bninkoks.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163avuxgbqm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163rpderegz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qodbxoas.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163uamkdzra.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mhbdgsvc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xgyaqwci.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163visbfrpg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cldgkyhr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kviqjhiw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xnuywbhn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lajkuipo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ynjculac.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zlstzlqg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vgkaxevz.html

Py:   if not s:
来源：http://www.xuanzx.com/163marmjggs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163gwgiqqpf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xddvjknx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fjgyreuv.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fxckcxbh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tsrqydnu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163uukrvdvi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163orqjnirr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zgdichij.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gpkxtfyt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163devpclwn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mggobytj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gkrfyvhy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bqizvyrt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ihshnsed.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rdbbfkvm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zysncjyu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nucgzzok.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cxryaosn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kugprcpd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mpbevinl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vyoziiwj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163iehkvdwt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yxincddc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hnsfwjyq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163slcduaow.html

================================================================================
来源：http://www.xuanzx.com/163zahfwvez.html

F. 文件与目录
来源：http://www.sxryk.cn/163ketmgqtb.html

================================================================================
来源：http://www.sxryk.cn/163yghhsxaz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163czcgxohs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163faoimwok.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hpbkaafu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dcbebetv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kzapqiwx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oywenixr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dragytps.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163cstudnup.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mdbyxamv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163glpbvxrt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sxpxeslw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163bbfevcuu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163uigkccoo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hyralrha.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pgnhrrvq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163wjisewsm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163drsxagay.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gxxzckit.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163txgtnied.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ugscopdz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163yjfvuoxt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rsxwwlpm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163grtwckop.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rdqrbktr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163eppmmqnx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xparmsht.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vcskdmty.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163johihdke.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ypymclfw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jquezxzf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vftvjbft.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pfqdokvm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qfsqkrrj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mtbtupao.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163hslnepoe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lkvajjgm.html


<!-- 参考信息 -->