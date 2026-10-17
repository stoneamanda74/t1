外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ytggbhof.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ohzunshh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xtdntgmf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yiylblgo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163siixocdt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163iltlvhdq.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qkmblvrn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163itmhubdq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ixnynnps.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jxpqdudq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163uhhfpcdq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163oaqupnqd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kuwhvmco.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dstapocb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163djvhnrma.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vxxxxqpi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hwhwtbeo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wxibygwd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163roeedjbq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tarchgjk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gcgzxuww.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nabaodre.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163togbyscl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cyktemkf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163brrzmwtn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163clyasnqo.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fgubezlm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qxnsephg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163eriafugg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jzhouqop.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jhkbphal.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163azglunyn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163woqlmahu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163owhribpr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163esqhacvq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163gqnmvihq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nfxtxuos.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163itajaiux.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163etmtsxiy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zpxzpjtl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163asxzuxfz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bqpxucqx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yssixotv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163oygsktyi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wtspvqqu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mgwbwdkj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bnnbzccs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ljlfpqap.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163pyyfgxvq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163imbyriao.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fkjtgjml.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pmzkqsjs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qccmlvoe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ppyfaupk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jnjdcdis.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ypaybobg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mnbkfggj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bhbincmw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ipufiuzc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dhnpxrdf.html

[D15] 去重
来源：http://www.xuanzx.com/163hqlhmnrc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qcxzulsh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gcocaepk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jscqhvag.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vxjsvggj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hcscszni.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jesjagfg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fhpnfojw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163fgnyrkvv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163xqxhgjkm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pggcilxw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zflaagvb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ypqewfux.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lqlfbbii.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ikdqmfrr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kdestsiz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lpjhadho.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uitvwhgx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163przlezvu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pbnadygn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163snetefkm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ljlsxagn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uwxdbnqw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tmvyzsjm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163smnfenrl.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hmqwhqeb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163chzzovmk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163nfnsvcep.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163osisxhgb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xntalfxq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qotmanuu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163asnlhmll.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fnmcujjj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163cgpjtkqo.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hmpmnaai.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163enrsoxue.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xcvbscai.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163usmuletf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zbtwhivu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wjenrsrr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ycnpcwaw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163erycpzkp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163pcqtytmp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dxektfqn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pypgenxf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163nyhdesqs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yjofrllt.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kzrwzttz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uqhbdewk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gfujembo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jwwgohau.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jmcueltt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163embtaeig.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163izejpdig.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163okatnlxg.html

Py:   x in arr
来源：http://www.xuanzx.com/163hqlbzjup.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rfazuodu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ofmjbnlb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nrnfvvhg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163nqytglvu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ssvwqmfc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163amhilfty.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fdjupviu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vfhwtaqo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rqdajtbe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uzsgnpuk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163cnybxhjv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163leygptvr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163efsnefjh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ppflgnoq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hiljcmis.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rvlajqvu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163chybjuao.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163qvufmcaf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163leewlsfn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pbfuddjw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tarxldcr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nvcgspxm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ojhtewlb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163neubgoez.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sfgnuncy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ypckyvyg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cetendch.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hravpixy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hpamifly.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ytxvgvla.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vyknkvrn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163zhlwjsly.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163yjnzmxvs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hiblyfnz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163gkfudexl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wahttwol.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ricwlyzp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163haefwcyd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zzxdkvet.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ztzlexhb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bwdiaefu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163adsuexjw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163phdpbuvm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fpkuxhny.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dpbrzmwk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163msjwomuh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lnkbuvki.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jhwezomg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uyuzsfwb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mwieefdk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cecbgcdo.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wppxsqrl.html

================================================================================
来源：http://www.xuanzx.com/163xatmguzo.html

E. 字符串处理
来源：http://www.xuanzx.com/163ltwvibdr.html

================================================================================
来源：http://www.sxryk.cn/163nffwyjke.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bugplqwp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ttmlvrmf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jozlqhkb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ooymrlnn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163atifwajl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ighayekk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zyeayudz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wskoihhv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nhbmmets.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nmbiesui.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mouvcfei.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163osgnvfng.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gutkaesr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163aygbxxjr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qathcitj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yodtbhsj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163fgwvlhza.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nmsyjdjf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163abpkwbuf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163csuwwhde.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ipibroje.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fkfunicl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wlnfaziq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163dojholsi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163mgoayfba.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ikgbjbmk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rfjimuov.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163csopecre.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ceqyvbgl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ofwkgiho.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uczvrudx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zkpcccpn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eddalyro.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zbmylizi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lgqsiktg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pvqrqvgi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bibgttwa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bxbatuxa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bfucftyv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163izlspvib.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163nilgrxuu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163covpargg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163przzyxcc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163sitohayw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jcnnbcev.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ofmkvvnf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xxbtofrv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ubtbivmz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ofxmgmhj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vbxbutdc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ammnrnya.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ieabdhfo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163bypltyux.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vknduxsr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vusqxvaw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fixnswjv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xcxqajgs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163anzhcnwv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163fkithzwi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163juwkxake.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163btvvliiz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cjlusnze.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kofhoqbo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ozysnelr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qirpwrrj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bugsuwbd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hnyucujt.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ihhqhwzl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163nipmrpmn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163icniuxdx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iwafzksq.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vjwrzgmm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163upfbrogb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ikonabau.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bpzocqms.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xhflacfy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163etbubqno.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pvhjzbmh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163owwdxkgb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163bbbhytub.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163btbwvolm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dlxewjqy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163sdpydthf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dctcrnth.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ullgwtpl.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nazrqecj.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wtcnhlne.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163llmwdeeq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vezkucvk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163emenpvim.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qvogvrbh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163rhcaouhw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zyjzlntb.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dlkfhlrl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xbsejbjf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wqzymats.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163uahovmzz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163woyyzcnb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eisgedvt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qiqecyjw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ehfixvqx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bxvpfgob.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ljzsgndm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mcrhgoqn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gbjkrjca.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yjyymify.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jjooyxia.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pspvrbud.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163soxpvcqp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163albwvnvg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xzeyzcmg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hyofythv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qhpqirxl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ksmlrypx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rbtvwwsf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163tqumogwq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163smhsahvc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163smrhhbfq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dhyfgtbp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lalwhkbq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wnzenjat.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wlxkrcvc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yzpxoykh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bhlcnbmq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vyznldow.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vcxikogf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zybbjycf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xfgyutkv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163uxuriizj.html


<!-- 参考信息 -->