外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zdhgaoqs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dzsjhlwv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jkuzcaff.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gkkneown.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163pxnouwra.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qmmqjjao.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jbgvchdl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zqaypuqj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163iybcovrm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vssosgqt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rzmasyzc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163eaftproi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xlrdrnyj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163awgfojfp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163rolwjiem.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163chgelpie.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ybzmkeda.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mbpqrint.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163alfqvihm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163shxehzuo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163neirtrpj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163uvlwqxhb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gmcohtqd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163aicnmlar.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ywsxdilq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dsapqaef.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163czhnluiy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vregjxrt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ylpcbnlg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kuyshysz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163kpgidmgq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gkvvzxul.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dwggpbsa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ebkxotrq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ijpveray.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ssenbkah.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hgssopul.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163masybebt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163urjyuypx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pzmulvfb.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163sshzwcvk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pavlnafs.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qrvxopsc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mpxmiphp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163cwjjkeqd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pquutwcv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jwoamowc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163cgutyzyc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cayfzaug.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qocrswqq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zqusworj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163uxrlrweq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dfbhnsbu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vusgnoyl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qfqiedxa.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nzrujwyq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163blmaigyu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cwjfngqo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pwqjjybe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qttjmaai.html

[D15] 去重
来源：http://www.aibaodan.cn/163rcdbupes.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ziipkppw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163upjztehs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vlgemxxn.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yfvuakue.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fnotafik.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pzcpasop.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bzcejkhm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163veujojeg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kcaqdbqc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cubollxb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ynmeiltg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ildxeiiw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bzegekle.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163eiqequep.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qulmqapq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uwflkjza.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rxfyiayj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qslulytr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kzdunxjr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163invbxpdd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ptkjgtxe.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kfucyctq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vhuecevg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ftlponlt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bqppzeam.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qpyjfuzf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163exuvuozp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ihhigtsy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mavrvqgq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hntazojw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hiplilnw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iweyssur.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ihsrumoq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163htawazck.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yoxgsyef.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pxwlcrew.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ukcgrazd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vkjmkgfz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163yrnkesxo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nhlitiuo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nurdoboj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dzkuimem.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163uckovmrz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fqpicavq.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uzcdhaqt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cirjtjwv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163olrcaykg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163poqnnmpp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vbaslhqs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yurgxzpj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163cswomxli.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ciuaruuj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kajkecll.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163eyabqxis.html

Py:   x in arr
来源：http://www.sxryk.cn/163unbbidxc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ltltomzz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163roeauxbk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163umxrboif.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jgzqmtzx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sziabkay.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jhmvggpf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vbcgupmt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163njyqvpvd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163iagzptkw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163axijlett.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ubogzywn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163aqggsuyh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ioxcynva.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lhysilmg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dzunbgob.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pbbakqwm.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163viduxvrj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pxqwtyvj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hiuflozq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jgovlxvm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vjnghgwf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qkdqkeqo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cvvksuyv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163muxcxhgh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bytfqzhk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gwkwwjpi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ayyffktd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xsklhcaj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ofezwzbg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jevtkbjv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fiztadfw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jbmsumyo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163adtdfckx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163aeguttiu.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163cphlkets.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qdhubvza.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rnvxwhqx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ezttwqsl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ucspxmaf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ptwzfgka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lifscshg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xrjekisu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rgjhdhcw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yvbdeanf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qneutzsj.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fnukegcj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bixsimau.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163bvrbtgfu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bbbqjsqs.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ckhslvdt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rqfzqvmz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163psjafdbs.html

================================================================================
来源：http://www.aibaodan.cn/163ushoocvw.html

E. 字符串处理
来源：http://www.sxryk.cn/163mfnfadog.html

================================================================================
来源：http://www.sxryk.cn/163eyebstua.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xkoeojli.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163engzrvbn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dfsbneuk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fupkzmrg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hdnoasle.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zorysfhy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163huqpjkib.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hhmxaaeb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163oolrqdrz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yrxumava.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xdtzxhmz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163isixmgod.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cfazyswh.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163iwugajkq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163nbhqxmjv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zdhyhvvk.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oonilywd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wbhfhyqb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gbusouqq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163deoxxmef.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jjisiylg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ixwglsrb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tvynqvdg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ugkpbbgw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jisxxurt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cgbdqbtn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163onnilece.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163emdypsbo.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pvzvksur.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fssblcdk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mynzunnz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nujvvtrh.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163yjgzjphv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fxfvszpf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dydzfjtz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163phfmsrpe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yfvldogu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xjrnynwb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kvdudttt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xccmutsf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zlmsoepi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qzfpbaka.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ffbxubht.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ymnkpjem.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ubwrajum.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lbtuvkyp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cofiezuv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ovgqsbhm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zlzzmmhc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jyfchrmq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wztnwbab.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163grzkjfxr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dhrtohiu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gebzzxez.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wzxtkdrp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hokifwqw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163siyxafci.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jqtrtxph.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163pmerdcle.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vprbjbll.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hmeggcqv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kefrakas.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pgrjcwmq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rwrvzvzf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bnuivurh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kutqrzxm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163rbhpijfj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yvrupngn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163llfoxakz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163kculonkk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gqmfjyok.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163oglskbfs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wncfrefs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rxdpghwz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hafwjork.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qkrzxpmr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vrhpniej.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yielsxxd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163sjwbftvh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163phymlmll.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gjzscity.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163sypqwnvn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yhrtuxgs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163axyljgje.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qbnbauds.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pbsqxhhe.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hdcfzccx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bnjqgxjo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jroizcxv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qrkmqjwq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lrbcjznj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bnuwuphz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163psbylery.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ycstmmol.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cumbgiqo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uouvevab.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kyvaxnli.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hsnsmvvn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ahrirogm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tyqhjvjm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ildpemib.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zafomvrf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ruublymj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gtgbyrbz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163kadsswtf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nyenejzr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ephpgjav.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163behuyerk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nzefxrmr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163nlacahxx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163iauufenj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zhjbtnof.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163whztumxx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sekkhsuu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163agjewhwt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ecupuaqa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ihfxjlgs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pqkuhcle.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163psjioxqp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ekmdcokh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ezszgmfa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mhdphtsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gmhzuetb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163zunvdkxm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tdborzec.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pbyydvqm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tdgqophh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tgfehibw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ldlzmflc.html


<!-- 参考信息 -->