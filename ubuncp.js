外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163otnsmtwd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ttidhcrw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vpwqsyjd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rcyrzohg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163guoeyxjx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xpnfoxve.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ypdrhqrr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163oawykypj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163galpakna.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163czcbmgui.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163turmejsk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gcineppa.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163lntqldkv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dnesyrjy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163aymutuaa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163adjfojtu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vhaqtert.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qmrkixlk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163adlclqeg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wrjjystm.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hcfdhehw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hamorcuc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gvtxttgf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163gdcgkhjp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hkpmkhdh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hwfdfoso.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bmxlyglo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vulshbyv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nspibrsq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jdrjxiyg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zzizegnb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gruwuvck.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163whvcqjgb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163uhcelzqn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ooiwlqwo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163shmyactw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163inskvrjx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wjottpsm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163fsywfdhv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hpvmorpu.html

[D15] 去重
来源：http://www.sxryk.cn/163rnttnary.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pqhmddfb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163thttirnx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hcgfnmxp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fgjoycuz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qhwayeze.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nxvqfxid.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163azaatwck.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163liqhfgli.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vykaswep.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163gefljmim.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163atrjgixw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tcgsjhdq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nifdjiei.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kyzffqmz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fymfnizt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uzmgfjev.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qqkhfcse.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163kulyemwe.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tyzrpcfp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gemujsnr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jlqdpgwj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163aqbwzotp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163bjyzxwdz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jtliawmt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163pwjkmirm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163oqggorfv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163iylgogdv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dxrttbsx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gwqsstav.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163alunmgpt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ugktnyjk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bzyyvuad.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163dhlaivrx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163nprbfhbf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tdhmdxfh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oslmsgxw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pkghqemw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vdfkscwy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pmyhynhw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jjkosuwp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163jmxbtenx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163eciwodak.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pffijyka.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163timkxgud.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aflfawrj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163miabtmae.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jengpkgo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ljxhqssb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xfceteam.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163edluwdrh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dxirlihu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vwzlfcvj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jdovegcf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163utkzqdel.html

Py:   x in arr
来源：http://www.sxryk.cn/163nosrcybi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wmsqmhzn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mghkpkyh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yztdturh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tdgvhkwj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cdhrkqbs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xetoxlyb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163igopdork.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wlwlzpam.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163coqgnhmi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rkktttel.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163romzgthv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jvxjfwmh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163opxbinyu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wyzkzwug.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163fkqvhyta.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mruyvxfv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163eoyxwrtm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163edglheum.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ftnsgrdj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163drnybmai.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dynqdpxv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163anikwiuj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jtrdlyhm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lkvgqznw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vsgiueqf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nxkuooqf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kmhvtgfq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gkevcuzg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vuklhmbm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163hoeboimn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hlddbtue.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wpavofyf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163aqhcslrq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vpnejlbw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163scfsshih.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mdlvksrt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zuqbkqro.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tsylzipz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cspnsyxq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ilspspsh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fewvsirx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wdcndpsl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ayadajpe.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163humbdplx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163cjwfmbmz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lenzlrjr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163obzvmzll.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tkvtxeoa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163agtsrnpg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fmwvnowt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mclkogpq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mpwroynp.html

================================================================================
来源：http://www.aibaodan.cn/163qzfoupax.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bvbdqbrv.html

================================================================================
来源：http://www.xuanzx.com/163giymhwdx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163goxgcmco.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fguopdff.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ixbimkjt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gzmhlxdd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163obiytsab.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vhvigukd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163loqrgdfl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163reqususo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pmuqyanc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pfymnroe.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pohoffoz.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ifmaoplz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bkorvbrb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163timcxsed.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163igfpplps.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163sbptnrpp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mfwyllkf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163chlbusep.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ebipmzvr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163yywnaini.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163eqqwyikc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nncsucfq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vsuovgxq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163agiflkvi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tkuhfurd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163edwnpbro.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163arcrcghz.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gqkzaonh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wpfipzbb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163pggeoisy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jcxpdqem.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kbirzvia.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vftkaeob.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mhzypkqj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kedcptqy.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163stwkxqbc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ucyhnqew.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163umwhcxyy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163gqmkqbhu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163trdbjvtd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163buiognky.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ovmughmj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xnegnulk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vdkplwcf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ijpgjrtd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163htxenhok.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163aiwhlgtw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wasplqja.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dcutrkyn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lcsdgtur.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bpggjhim.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kokiqywv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zjqubwxr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nqwyphvz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pnkmpymd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tqwmcgfq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kxgvktwm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wfxezvos.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163sxoluzfl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lwtmtcvd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163smedyojs.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zfqgqazl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zreoztaf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mzshyala.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vjpzwqxc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jlrnaoix.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bgwgbnoy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xrzfeems.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hltdnxer.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fjbtkecp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zimkaktp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dlfwemga.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163aiclqsnl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163olwndzmo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nzzmwvac.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hrvtuxsx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vfgnodly.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yrpcqtdx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pfqdpdzq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dqxxthkq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tywbpnxs.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xjkpflbc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xidcgqrx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uaqlrdjv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163opkxerzs.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cjgnlwbm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xtibpbgx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163eknhrmyv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163loyxnzcw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fqjdmidl.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163aidhrtov.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163chwoqglz.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pggvpvkn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rflpfdhw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wvrknoil.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jtpduqlx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163khmgtbys.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163machuutw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163trooxina.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xmropmah.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dponowgj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gdwstrse.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rvdwgqmu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vufiyzmk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163urjdxflx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pjzfcfsl.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mvdfnzqn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163tpfouazu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kuqntqtp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yrhqjauj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ohifnhlo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yoxrfmtt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zecyexmr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163relllfbe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qzzbiwxe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hckivxvk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rscyvvof.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163buewaloq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hqhfneno.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163fdwpuckn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163shguhaif.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hrhjcugu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gnergzuz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pxuvwowy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163cqqumrwk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wbkfznrw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uivuyxqf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mmdxjnwk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ydqmcobs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jhpysloa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qfiucfvb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ktjhwhth.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jcvrxwrd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163bjzutuyu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bgtssfye.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163joosswia.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kmetqcpi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163aadjipum.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wuigycmf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163unyitqwu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hzwfmrsd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fkzlruqk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cyncarxc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163magzdqpx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ufqkeruj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zwxuucyl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kgesvbvl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kuegszuk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wmadsicx.html


<!-- 参考信息 -->