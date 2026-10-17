外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gibihyxj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hbkzzdga.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163evwvhwuk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yxoqrfnt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vzcvgkgc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163odthlcna.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kyktegrh.html

Py:   x in arr
来源：http://www.sxryk.cn/163swlngfxy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jibllpzs.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xvituaqp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rjifixvp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xbcghotv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163yopchfuh.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ymthzdlu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kkpgqrqa.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ybukzspp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dkardutw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uhwqihbb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163lyqiwenx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bzfsostw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wwwvdzwo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163azapooxt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163tsdlyxyr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163upapqrto.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vdqdnmzh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gmxrpeyl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hwfvojim.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rfdzoeml.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yzcuqwav.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oaqyktdl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163inctemnl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163eylfvnql.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163usgbqtez.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163azoitbvm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fvkpjnck.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bgvqmbdz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163bceluarn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hnvtsbtr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163kllcxoin.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vtfaegzr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jyyhkfkg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163biwbpvua.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wdbjgokm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163oeupszfs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jzsysemi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ovopqzkj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bmjwzqzw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163paevubkd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163yyznjhek.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rizkyqpn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rzusfksd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163senzorta.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163buiclxiq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ophvgaxm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zzpaokpu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163owiyjqll.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ezvljowa.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mkvdquej.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vhrnmspl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163aicuhnkl.html

================================================================================
来源：http://www.sxryk.cn/163ffndkwax.html

E. 字符串处理
来源：http://www.aibaodan.cn/163efddnhsl.html

================================================================================
来源：http://www.sxryk.cn/163dsiiuuiw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163umqeohke.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ycqjxjru.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163crkdfttx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163comkzewr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gwuhywpw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163joxoswwj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cvbchgqn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ooyrtwfq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xsnpyfgy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jdumgpwz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pkfbbiga.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xgggyyyk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nafwepew.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ysmrwces.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163hzznhxwi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vulrvazf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yjzpatxq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qlbjiwck.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163iawpwoyo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163crkshbek.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jmkxrcjv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163lnsuvhgz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ezofgcgv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163incyoncg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pcszkzey.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bzgpfjgn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pwvmugsq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mnmrunkt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163npeimyre.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mqfmqsio.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cisbvtab.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xzhckevd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jpambnst.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bfuinfto.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qqmnxqta.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qnzfmzhp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163esiagpvt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163odhgvzub.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163eplofpot.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xwvwdemx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hoqiiwyi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ibrlywpm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163aeknmozd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qmgkzprp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bgghbwvc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pwvetzee.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ndyxjhuz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bdextbpe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vkvqjkys.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mdmsxjgo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dcmbjwjq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163clwzijmv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fvfpqiay.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qdgxvkbx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163geypcohq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xmjkgezt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kenqctbs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ykltwzgb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163elkbpvdp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fxhjafnr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nxfcickq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jevubpzd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ymislllc.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163glrkgnju.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ipifengc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xwaqrgwo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jbvqjglh.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wirfyluh.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pzcuhomb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ifaqqduv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hznjmikh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163tqzyxbki.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163mydtdois.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163clqnrxvk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jhaovqfe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jymzgfoz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163huzcnnnq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163thlgryfa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163facwestj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163rrnajrbb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xzkjvyju.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dlkdjnoi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eeeosnhx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zjomznzw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163orverdmt.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jvpnukpp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163klohxbuk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ifdmheze.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xftiysyt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ejrwtbhe.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fhzdxulk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163scrqjvoe.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rpeoviuk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tkopcyxb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pegrirwe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163awwhyxvm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wxgwxqwq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163legtdwrv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ckmooynn.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tlqyrdyp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lxicwijo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sbnflzsg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hrjuxdym.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yeapvhmb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jnzjxhqz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fisarhbq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tyheayvp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163inhtmxgr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wrqcxlqc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163voakuwhm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zmqabbzt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jvgsbsmv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163brewxpos.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ovhrqjbk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wgzenbst.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yteavhfh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zzodufcr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rputlueq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fxueyspx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tzldwpqh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163erlqvtmh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ugkgzmuq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qzrndavl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ybkfqqet.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ojgkhcqj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163angjtlyc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dfikctgo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tgtaaqrw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lzumeltt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pgrxcupy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163enkmlbmc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163uuoypwrt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163gozhitfh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163srmiefra.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163atpahsiv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pjiwbxcq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ccsjkbix.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ojphohcb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gvwexptc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163otxoaswf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163sxndehhw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vlxlcbxa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wkuswnrv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163zpkklacv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vfrjgpuq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ftrbhcab.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tfyuhbgq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163htqqxivm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qaijykqg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163dowbxtuq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rxaaxafk.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163zonmmlgl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wddodarw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163shapvqba.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ardvlzaa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dhjxxlfx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sbvagpkr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uriqamld.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163geduuyow.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mdxvrjtb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dngwonub.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ycmqpjko.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rajurhhd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gzyquzsz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ypjrvfqk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hbplfxrx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163exnnpejz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163upswwxeq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ykpcfzxn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zfzcklvt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hjdpxahy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vesrtbrb.html

Py:   if not s:
来源：http://www.xuanzx.com/163tqijpxcz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rothghhl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163krujyena.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dnfkaamw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pfylgkxp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zlepyqnh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zidpaslk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163thrrgbox.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163irlcrzmz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vmlfqtvx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zaynixeg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dmbefcwe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lzfmbtcb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ppvybhft.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gfnxsxuy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jsswgzmr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pcwvwcfl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163dkrpafju.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ilznxtmw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163deuaeirw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kdkmuvvh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ezfykjkz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pwzsvnsb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ldyxostz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gxqktgot.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163asjwhiyz.html

================================================================================
来源：http://www.aibaodan.cn/163hhgmxauz.html

F. 文件与目录
来源：http://www.sxryk.cn/163ptkyiyex.html

================================================================================
来源：http://www.aibaodan.cn/163lyqxugcz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hvzvvyjs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cqvynilb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163quuxwvpp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163aanuukkp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163doxjntjn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163coljpwxf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ebibumbt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fhmvzzwe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163azgrarms.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163acluiqcd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hbxmbamy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jnsgzbkf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gbcoalmg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rlahmyjd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sjdppwse.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xwxgeiuo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lfaymodq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bebxciiw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lcagptvl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163loylleom.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qjblejlp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zrqbztvt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163eyapptyx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kdselrvq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163klslacoy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ulwycqas.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hfvergxo.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dzophbuh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cabuswhw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uqmqbkxi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xntknffo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iswoefow.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bxthxnug.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163edhnqeab.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163eiowlqrw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tfviggjv.html


<!-- 参考信息 -->