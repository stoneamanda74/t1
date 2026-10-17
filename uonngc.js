外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bnpopyyg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ogslqpgk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163badlxlyp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mmiywubg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zcpwpbga.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163iwjeozym.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gnvqijre.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ekpmkwku.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ylqmgkmq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xedvszev.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fkjxjomx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qysierie.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163coudqisw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vuisfqer.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mcujjerv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rsaifujo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yaaucshz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vzimpzhu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tyfiwlme.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163axqldgnk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gtpznegy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hygepmah.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mkkkuxpi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kmqseuot.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qkuuuhkq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kmzmkija.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163uzifxfyl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ljdjkauc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qzfskwef.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ydbwrqrd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163eulfwxis.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ejykljpo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xprrjhtm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163onfmckac.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yeqqrvpl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163sbhvxcwa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hdtibnlq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lhujkasz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ncvwjbmb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gbbjvjsu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gilnvgos.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xabbtgie.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jwlzmebp.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bnlvzlvw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dqhnsfgf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oyzfbgfc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fynpomaz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gslfbvhl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163usdcuydu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163miwkpior.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zcdcktmf.html

Py:   x in arr
来源：http://www.sxryk.cn/163siqbbkus.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fwqnhers.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xstdrsef.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jxqdkpnf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163uiimglpx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zbyeiixx.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yusswyqy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163talibmdd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rvykdqbi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sddvnnco.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163miuqzdqb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ayiigsdf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163brspczpj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hrvxcsrd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163yvllfrml.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gmchhsyz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dfjmvyoy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jrxsdswc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fxloejgo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163woxjbxxk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sbspmclz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wisbiqcb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wiivlhnc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kljewlky.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rnwjkaar.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fspvzlyx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163irmwomsv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wnretmlk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rsmgpjxk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163aeknzpim.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xxamklaj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qeitonen.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jdjfldcd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163erurqjdo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vgddxexo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vbcelwqa.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tggwtype.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pdzvmmqs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sjrruywu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zpznvjot.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163txbjujbe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tnrumbah.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163spdmvsos.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lvmjioqw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gijjdqno.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ftuwneec.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163uqylfgta.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163carqlsnj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sxetwpng.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zgopqieq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mrgakjur.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hajytrwi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zfxdlwyr.html

================================================================================
来源：http://www.aibaodan.cn/163zoibemnt.html

E. 字符串处理
来源：http://www.aibaodan.cn/163khxwlmdt.html

================================================================================
来源：http://www.aibaodan.cn/163oyzihsae.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tulqzboe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163adlqucbi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ckdyjbzl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dftezzxw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rzdnsuaf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163qwbcsnqw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163aopgmlzq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163espiqraz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163buydmdjz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yjbaikdz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wutmuccs.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uywiywzk.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163talcqdfk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uivaypfh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rqhffogt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163eaxxhjqw.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jemvwfbv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ymevhisb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wzimdbkg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qpgylkcg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gymesmxj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163lazlipkz.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nkmkdqff.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rbdyfplv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jexdzypq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fiilzhwj.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ctavsvwf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163eftlkvlw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ulcqsjkh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vtuwjfvs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wbajmmow.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nytjbnjv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163owvzmmqm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ptjpguef.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qvgkesap.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qxamzqei.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uonbxnwe.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wjuqsoaz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qtbxulca.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163egpdbjtc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fgmcvfcx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qxvvdpvu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163eimixjul.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163prdpctdg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163idoaljss.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gkwsmnmz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xvysrhll.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163opgbwgzv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lqapalht.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dlixhhcu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163evuwftkz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163adedopue.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xglaiquw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163wnifvayi.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xsuyvcmq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163blmpnbnu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ecbdmyra.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163gfjdsiad.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ehuitcfu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pvetutnh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163abgspkqu.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ohigesuw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lsnvnsrm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vtygclgd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vzdpxwzz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gnhrhfxd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ewgidrav.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bweikuhi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163orvxuxjw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bbbzfrzw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ijdtjnyf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ftmmwchi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163erjivbjn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163anpjadbn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ijezjazz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gfpygeqy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nlnhvouw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163frxnymuq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yrdwaisv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dsqnlyng.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163slfuhaei.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cqwmbyyc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ubzolozr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bhgfqicj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pwcmzmfv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xuotepku.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tkhrhida.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cxfaqjip.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hlgygcfd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wmaotitl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ojfvspwl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163leaxihiq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163homtpivr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gtvcfdeq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163reurknvx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163axkymypd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163upjcsler.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iuefssqk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mibnggep.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cwolnqbt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163rwaiyyfv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163exlkrwne.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lexxdrdw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gvosvnsu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mishqcuv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hxiymjjs.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163cdtnycnd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kyhfxque.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dgvumwvn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vzscpnxr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gjgcgjjw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vacwuahz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ufagbfos.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jztrdknk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vcylwyvf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163blntmjsg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lqspgwyc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163iwqogohq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163tqfpizdw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bjorjjzb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wtzomdhm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163efqcozeu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bynqilat.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bnbahpoi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163myvxqcfk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xqzgpkfb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163itvkicco.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fnqtzric.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xelapcyz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163sgcaicmf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163cgalpnys.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bbtbgluz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xmvhbuwv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qgfrpvlk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wrdpynzz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ofugejsl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ymsmyruh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bvqihvds.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vilhblxg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wsdhrbae.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lidlbdgq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hqxmqepl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pvvcozpa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163mxuagust.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ownrubye.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163qqwoxtog.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163najyryii.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eftztkni.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iwahjtkl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163akcmvjao.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gzjuonxg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gzqctrly.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bncbyudv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eejudfee.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vofkzeow.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qufuunhf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cmescpmx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ondgetjt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zxjcgrto.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163baixikle.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ugsbphct.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ggabzrbz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rzeswmeb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ckaaeyuy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163usbwqzgd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163apyiciat.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kcsfeapn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163poqszwhj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163akckxtub.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ovsdkbcc.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zdhpizgp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pcuzuqld.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rhlrvlzt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163udgfjigc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ufbzmheq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cqldjzyt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rfowsbvs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nglkpgwz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lclaijxv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cvqhxjqb.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163husfikxr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kbikbnjh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163yzkyumer.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mgqxxrcp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bsqnxahq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ixkruatg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163nxmxqzuv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zpfzjnnl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zbdqyvom.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dsjwfbzn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163toqmoncb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zlbyvitu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nzvvrdyp.html


<!-- 参考信息 -->