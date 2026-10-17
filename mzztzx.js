外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cximclgv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163olqeqjcm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163adtzldco.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ktpqrokp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pcntpixg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163azvxujgx.html

JS:   arr.length
来源：http://www.sxryk.cn/163psjpuelc.html

TS:   arr.length
来源：http://www.sxryk.cn/163gyiixiif.html

Java: list.size();
来源：http://www.aibaodan.cn/163jukruazh.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mcjredcp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163twplnvqf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vkjyriku.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bkwbbyon.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kapekjjm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xqeuupdp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ejnovjsq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lzrhcxis.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ecskiunf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tuavcols.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bstjqlup.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wviurbei.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163uglbzlkn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ejnucqhy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nnpbdkio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163iuhjokbj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yfawrklm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163txbadadm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cyzricxd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163twdnutrp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ipnxsgij.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163furzfjmh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hfvhaysq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163znqdhshp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ptbtxufi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dcsxyutv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163owqddqhu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163inlyslzm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vlotpeni.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mqfyyyti.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163oqflmqha.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163baxmwdxf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ovuocrpp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jegggcxe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163afzlmwjw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kxkhchdh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gikbvkhf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cugcztqw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qlarpzta.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zuhmsjou.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vrfvxuok.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vrlbawfy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163iedkhvxc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163abxwnuss.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pmzayhzk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hdpbifwz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xdhpdvap.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xiimasdj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sbgvalyf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163gvahdlsy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pvdtvrcd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oqturakm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ctsigfgc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vlgzvapi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rqpcjsup.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163foqgzitq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mtgcsskv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163aicyimly.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nbgqpaat.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zkrstvjk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jgkvsniq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sgszzoxk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hfwsubiz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163eplblwur.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lbakmtnh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163geagztqo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163clhrzpqu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ojmpgghd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ibozujvu.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hmevxfuq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fordyyqg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rmjxuwpm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mtgyelvs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wffqsgvj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163afibayef.html

[D15] 去重
来源：http://www.xuanzx.com/163jbpmghyf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zzzxzgbg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ncjgkylx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yqukwtqu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163abddqpvr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163oligmumh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163duhbveyg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163peplbaic.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mitlkanb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ctgtvasi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163doxxetve.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vazekkav.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163edsmepvd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jkygirgr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tqaonxkg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cvqostjx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cofugmdv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163exfyofxq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hhkuxchm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163csgzzysa.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163dyymhiyx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163olrhrhpb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163npqmbicy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dqhlwvge.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163atpducrp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ztqrecns.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kktfuubw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dbwngfzk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163zexpxxal.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mgcyhddq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jvaiuvsm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163aeeszemb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tbguegvk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163cfcprddq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pkjewdlm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163cadubvqe.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yfapiucs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163etpiroqz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cmtvmltz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163exerqtur.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163swpehply.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163qldpccow.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rnaqvntd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gllkhfss.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163yrwqerqc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ykeozxfo.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163agmujzfi.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dysahelo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dtwwogup.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xturwjqd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fvnbalgr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163pebzillo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kpsdvckl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qsmdlmgf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cjmrqmba.html

Py:   x in arr
来源：http://www.xuanzx.com/163mximfxye.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cxkozftv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dqikcife.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wdkhyouy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163isvwzzad.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163oyznlsuw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qutixliw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qjuvyifh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vvnubnxp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163yogrcfgc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163lfmyevtu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ulcjkppe.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163uddxqeqt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tubxukql.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163cvcbatqd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163zqdelgem.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zmtlembl.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rzrsfwpu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mlhqtuhq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ookoefsp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gslbnfpa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bqiiqahm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jxrtborr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163raxowuea.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fcscxiis.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hilfsntm.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nvgdxpmc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163thudmsqm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yfophcoe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qyoeaikm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kqcwpkrx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jmnmmocp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ysxesvev.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pnkvjpdf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163lsjegptt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vmjwnmyi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hekgkrhl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sotxswma.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yugoxvfz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163osgqqjel.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rvlafsol.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dgfvmjmn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zufdzdsv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fodtnwkz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163sfobqvjj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hzlaznqy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hteawiss.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rmgwnoyp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163chevblbi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163oupsnrbt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ssdcoiel.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163seakdkfe.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yeobaynr.html

================================================================================
来源：http://www.xuanzx.com/163dijfwjif.html

E. 字符串处理
来源：http://www.aibaodan.cn/163isuearoo.html

================================================================================
来源：http://www.sxryk.cn/163eomdzxwn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kpvyfqeb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rxwnimib.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163oydxdxzv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fxgkksok.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163omrsjszg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163phhfvyad.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163yapgligi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ykavasqf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163etdlvezk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ylumrcza.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wchfcokn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163oasqkrce.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vhqtiqko.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163psgbdzxi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wqsyikaw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jvrtarbh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wqkvssqb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qbeqmpaq.html

[E03] 截取子串
来源：http://www.sxryk.cn/163kxjdfslc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163okfgcwva.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163millfeag.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163uccyyhvz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163yladvetb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ogqlklgm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cffbqapt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jrjziymh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yldnmqel.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163fenacips.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kpotoftr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sedadhta.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163enrkmygu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ugtzkwza.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fcmljfxg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ptyuakcz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163adjueekd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jxsvhsnb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uxyduhip.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163wwppkvio.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uihsbhqc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163afxerzpy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gvyibike.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163amnncazl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163eulhinre.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xkhhrmnw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wxfdddeb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163thabdphc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163spelofmg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bwrzsbrl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qvlixxre.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vtoaujbz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fjdsbmaz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163abynfcpf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bgiikkss.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fcvflhrx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163shrfbgbc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ozfynyvb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rzzkjvxu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163spbabljq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163vqduquvi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163akmlvrwe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qapjcxrd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163izzskovv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163cmckrxon.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163szqltjcm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xoksazxb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nnbcflvm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pzawyvtq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163pxltglsg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163mdbrvicy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hayrmvuo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vmuncvhk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bvuzfxic.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ytltpsys.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163espveoek.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tdmmlzsy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fwbthfnh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fndtyido.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ffhojggi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tyatdugm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163rrmonigl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wgjbcfpr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163rkidlmva.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jftefgwd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ysykebtz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163drvxpzjf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163inrkcmlv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bzjvanqg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163sxxlqjwr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163cesoeout.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ktnzzhch.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zrtnqjte.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jmdutxiz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xqovxnos.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yrtkykln.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mivzznyl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163atjysnrt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kwtrjwoa.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ykcwrnwx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cbxjlcix.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lluwgtka.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mvbljkjh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qjnbhsbp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163svisyulg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163puiuyeiy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dubbdshn.html


<!-- 参考信息 -->