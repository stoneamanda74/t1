外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qbiwrtfj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163apgqkcps.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163krxbnpch.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fsnupewb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ncosepos.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vyjvimdk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ltrwzzrw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oscdxztm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rumgembp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wfmgpzif.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ohhovmth.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163obwqyjos.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pmdsbmiz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mastqhym.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pyvqybpo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163flunaoky.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mrhvicup.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ydgbqoyr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zbqeuetk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mxlyvctv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bhjyrqls.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jbrpabmo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tbebnpdi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ekamyxza.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hbflzgxi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zctyetpk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yyoxvxhf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163msnsotcf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jmhveyhf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yoyxgdjr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rrkawljd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mfogjjkp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163znnyrrre.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163emimqswu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qbrxwftq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163mksmrdgp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163szfhbbnb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jpkvhwqx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163eiyrgroa.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hvwoqtdm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ululpbxo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yhozppkb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lajnsvqu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nzgbsaik.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163sokzrnjm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sloaeoio.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163skzyfwdu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kcgkhbpd.html

[D15] 去重
来源：http://www.sxryk.cn/163rkxbrpiv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163humorpgw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jkicnyel.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163epsmscfg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mdrdwdrm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hqspqwgw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ocqvvlkp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163foqtlrpt.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ptpdkpau.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163glnjmwvs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zwnfsbyv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163onzbvuxr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163acqabsfo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xtrugqpr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163htyojqzh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ekawfmfl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163akhxomuw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163btvgudqa.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qoqtnipg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lrjhnidc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pnruspjq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gpxxirem.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ezrwexll.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163koamjigz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163pkmyivib.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vdhihbwk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163uhdkgupo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163strkjvqi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yqxvqhpj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163hqpuxfck.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163psdhwttc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rcbmnakc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rrcjkybr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163llscxglq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163adrrsrsk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mdrlcdpl.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nchilxjd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jluwtjnv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vopugsaq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163dbaslafw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mexqoqqp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lkufdvpe.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vxkxunkj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kzmuxkjf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kcnuqwve.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163eggbjmoq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zneipglg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bcfqosnd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lxynjlsz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tctmazkz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gzqkwpol.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163znirrtoj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qxwkjohi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tcrdnbdx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qozbuhgh.html

Py:   x in arr
来源：http://www.xuanzx.com/163fckltatu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ysnmaugo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kuelorvr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qxylomyp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hiehpvsa.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163osmyminf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163znzsxbmf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dgguajga.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163gscfjttn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kbmblyzh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163beudwnqm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vgltbwnm.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163clwmjtks.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jxmirmnr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ibodwhbq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163axjhxyir.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zgtqzvtp.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hdtaeosz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ynjwxcas.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zcacfqoe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rxwlmmom.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mnimardb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lmlwyqgo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163asxkznrx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ocditdzd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163khilijfs.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gncmwjho.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lwumocsz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163physczxt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163omgetvcc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163aqeteqyl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163aiqzdkts.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163amcpbvjh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vsfhbqhf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wnbjmrat.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gfayvhnn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163biiqdogr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163keybpyqb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163pkkjmxlg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tdysdlcq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163udoyjfkq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yrgqwegp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ptxtnoqt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nlmwqqwh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qiugdjrh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xarbyeov.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mmgcmcta.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yoysforh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rezzofta.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rlamlhfo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163elwxugbp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nlczxhui.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163duazbdbe.html

================================================================================
来源：http://www.sxryk.cn/163okjcwkic.html

E. 字符串处理
来源：http://www.xuanzx.com/163otgchmin.html

================================================================================
来源：http://www.sxryk.cn/163qohdibuh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163qelvnugf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mstluhjq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tpukyxzz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bzzduddv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iutgolge.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163lduavdnf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163spsqwwup.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uuwsaxht.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tteutoiw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163npldcxgm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ktsjuksv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yybttsgd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163umhtozgn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bffmoqqj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wzeekzmh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163crlintmg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yirnhkrf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163frgtwnbd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lkiooejf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rysdvpup.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ukoxczqs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kwenfxda.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jyvvltrh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wohcrkjl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pcvmciiw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163lychrqej.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rskplfrl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163oerqrwhm.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tmltylzf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sliilmui.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tikvnxzt.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163amvsjnsx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ldypefdc.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ekntojce.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ggqesdae.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dshnauix.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vqehkszi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163exonnutr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cqhqnpwc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jmdoyuwa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163anwweqqm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rsieinwr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vnuijrdj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163lkujtajn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rmjjrmys.html

[E06] 替换子串
来源：http://www.xuanzx.com/163gibiofmi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qpcfwikd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163idvzaekk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qpngqnaq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pgqcalgc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cektqvaw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dbyslsni.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163inaopvuv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kvvwazbl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tzszusqc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hdzrlwtc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xqysdunw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uloogrrz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ixjbnjsy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fttitweg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yeykfred.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ooixhbwn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163oysaexbi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aeegaspy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mzypqrkm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bipinzjr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hfzpzevg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xnqlpipy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zaqujikk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ipvwsgoh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bcbpjygo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163azggdoph.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nsflqdzy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163tcmjhcvn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163azkdfqce.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ieonmsqu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dcrivlhf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vxkyjyll.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163esyrcuin.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zxdecuty.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mxnllpyf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zdtxcytz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163muneyzwn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rflvnmbi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wvtesdbd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sjudnflv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gzuaczfw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163odfavecg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nkkbypui.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ngtrcmai.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mtgipqxt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ozmskgbx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ecrnvgam.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dzuwbyig.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qcxmtpbj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nfaigdro.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qpnefdmj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ifrcldjb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hkeboxxe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163byqalkop.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tdaezozk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sitqttrk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ldnrstah.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mmtxiknb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wfezelrb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gcnicmoq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wuartxla.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163moafsvsb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ewckkoex.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rduvalwt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kdnooqre.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163guujlqvy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ignxzvfk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pycrtsav.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mbydekkq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xucsdbuj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dfhjoahz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163uotxgnyy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nhpeumwb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163scfberfq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qjvkywoj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rydnqjbb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mkyuamjx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163supfnkpr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ieehplbm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jnlufdna.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163adticemj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hhbqaidg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xlfxespd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163uoulpxtf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yarxfbbd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163acktcyuc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163psxqswmc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xfweifar.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nvorzled.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tkejngik.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nekfakap.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mompbpuj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163esmwjmyu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ybcgytqs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163iwlhvusc.html


<!-- 参考信息 -->