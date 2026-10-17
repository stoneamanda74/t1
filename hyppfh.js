外链999!wailian999！

Py:   len(arr)
来源：http://www.sxryk.cn/163vepyoocy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ohqpootl.html

JS:   arr.length
来源：http://www.xuanzx.com/163jdyydwga.html

TS:   arr.length
来源：http://www.aibaodan.cn/163nxgtmwxt.html

Java: list.size();
来源：http://www.aibaodan.cn/163tpjptllj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163oicaarnf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mzpocbrf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163earpeqqx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ozezqnvf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kguqnixk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rbhbjgwg.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tqzmtwyk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vycdvfev.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qnuzxpxn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dgybkjyy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vyybwibd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vzxcljuu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zrwoeekh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wjfiywln.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qljiplhb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qlfvpqph.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bsxfuoxw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lzzzqxwo.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ovwroipz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163azrymtjw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tgyfgkoy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jvvtesyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ewbppeve.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vwqiojoz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163agtdxoaa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wzfpfwlc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163drcfqidt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hknhzkuh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eykmnaqk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dohmvcjq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mkxlmdal.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bovxndgb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gilxrslu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ywpjwnap.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xnkkijrj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gwponaho.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hbzvcyee.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163iwpbydvq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163abeyorav.html

[D11] 反转数组
来源：http://www.sxryk.cn/163emjsouab.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163grbomweq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jvemxojc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jmskzjyf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163iwyxpwtx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163oynfypbo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vnbjkise.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tsxmgzpn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tywyauaz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kpqyqils.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ayxeejoy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rjzwmhxf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wmvleyxf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qhfjodeh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jpobffji.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nrxcbmao.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pxbmhwmp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163eznrbxpz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fvwcldsr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163urpyeokf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163soyccghv.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qzlulmyy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cwseracl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ppbcqtew.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nbmaqnoc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163viwumtfm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tiustpzj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vfrfpejk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xevdnmat.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163popvtfxu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ioasafus.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cgqycuyy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ivelnfyn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iyxecckl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pgcrdlan.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pmmgodjx.html

[D15] 去重
来源：http://www.aibaodan.cn/163sicuvcjr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fivdiiyr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163huzouhkb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rjquyehv.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163loetnzgp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xnygkqin.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pocqusps.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163uhmkbztb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163omvdgqli.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163wavuankq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ifudgetl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163aqvyiiid.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rigdaqjd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163doifbhsv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163yxajowrc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jinxvvaj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xkknwgpf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bouzhpqv.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qzsiqkup.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163cxvnapaq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nyluucsl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yyvsadyt.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lypuawye.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cderpiku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lanypdmr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163medanujt.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hodyehfz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163iupsgtcu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163senxcqem.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vdqdsvvq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hkkrhduy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163joenqpmi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cxwcyuhj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163phlgyozz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xwzkihyc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163chhugzmy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cossodts.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163bwlrhzdy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ftamktrf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ukvbenmf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uzcztqbl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fpfcjbgm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kccehbde.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mqhnbmxr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wvbcjtsq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gpotcefh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dgyoatwi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163dqpqjfwa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163izwubqag.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rghsqzjg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163lwfboxxw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zlrlhczf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163srjlnddx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163azyuixpp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uiqhabcm.html

Py:   x in arr
来源：http://www.sxryk.cn/163sdlzjqbs.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163tjbsnvqi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ydjvgdsl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163pgfflitg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163rfcaplgd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163avuptyou.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vceljmnx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tazoxsss.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dplmwfaq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163bmquiutr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163amybjulc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qznqodbn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163stjafpue.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tytertdb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qmpvljnt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kmuuiwdr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163eycjhwzs.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vectawdk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uistjffr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pmqvzbjf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gakootgd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jxpnvrcx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ypnrzfsk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rqiwqdob.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ugnybbuf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ynvapmdd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163isbrfzzf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ditjonek.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zzordmmw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163iarsgfsa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zyomcmya.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ceztlenv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ulljmnnw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qmvpimqv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vkhgthjz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hispunja.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163twtntwps.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dgjljsug.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nmlhxwyl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rbbkhwrn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cljvvceo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163thkqvlwc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163apffpqem.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163evufgjpl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mzbyckru.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rxrxxoyu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vyarzdzb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163eqacttkl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163otdvdxkc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163knauyvyk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vhejixvu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jcgpmkfm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163caifjhwx.html

================================================================================
来源：http://www.aibaodan.cn/163sqctmtmd.html

E. 字符串处理
来源：http://www.sxryk.cn/163nmbxfleo.html

================================================================================
来源：http://www.xuanzx.com/163pzucxria.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gseftfwv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ehhaikmq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163vgxdoxqr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cwzirasa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xoazpnqh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163movidaqj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163upvxkcty.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ddzktypf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kxkyjcte.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163adqacnej.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hxzpghes.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mhxagpbm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kerlcskc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lhcjlwug.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lmihferl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fzoyhlcm.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163imhghcmw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163akylokwx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163etydpnin.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pvilveae.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cycjsuyu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163oiebymug.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163duwecakm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163snvpdyns.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163yjsmvjsp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zwqzaejr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163quujydab.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kgvxqglr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163nsapzcwj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163duouioaz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163prymbkyg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ixtpznzd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163irkzvtqg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163crmywpvh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wuxupkpf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wjovuztf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tzmpoamo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sgwgyxxh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pawignqz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ggurudxc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mjovecvj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163atykmcoa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hfggkyij.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163erznnmgo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163sljupfav.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qzwwnlax.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vhzjjsus.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wsywhnei.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163idlgoezs.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eqlooqte.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nudmoapt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jwshyuko.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tjkuuoso.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163slrpexvj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163rattrshr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163rarauyay.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qbmjvcob.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kwrvsbcf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yhfbhlyh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mzkrsaov.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nhamvqkb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kbvwvfwr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163aelbyokr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qjhiztqm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163huxcimwu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ogpgvuzk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ivbxxzhh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kkkuqwyt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163cawtndny.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xpfxeari.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ayqkoojn.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dfxzevnv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vwmbysmq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pktrspfw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pnnudkwq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163khcmacnx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cnyitwxw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cdbmvjpq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fdaqybwy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163jbronijj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163axlrsvlf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163blvvvvur.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163sxalxwbr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163hfcozjeu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hhhxmrnk.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sgtwvpap.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ofkfvfyz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163krwoibrd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163muflbhic.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ztqqrwfn.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163segxmadj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fkprpohs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ysidoujf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ezelrwss.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xtzlqvcd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hpjwyufw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zcrayfxz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163zbpvapxp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163odqspqhp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163juiycqxz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mxpiekdh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yhqdiysq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163popmzwzz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xnnaepdt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163npfcuqxj.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163amiuygts.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qdiipywi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dyzyzzmm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jtycesjv.html


<!-- 参考信息 -->