外链999!wailian999！

Py:   len(arr)
来源：http://www.xuanzx.com/163qqsazvpt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wfbnihvs.html

JS:   arr.length
来源：http://www.xuanzx.com/163frslgjxb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ywzuwwud.html

Java: list.size();
来源：http://www.sxryk.cn/163tabixtrn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qmakudar.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163opaawvff.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qkocseqi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163levnardq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qluimdnq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xhquvbca.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hoiepgcr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163odsamrik.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rczuooqv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tksakchz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xjjuumsb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mflpkwxz.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vpataajc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163aclumdra.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163drzgxvtc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iprqnzhq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163aoyogxae.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163txtyqlro.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jqxnvwlb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xodpaenb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163okhctulm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lvgvhdjj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yirnhpff.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vsqmsoty.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163osctxayn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lswovyzl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bjsgdynf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fpfqaqsl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rzzpsbrk.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dghhwbxi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jwaolmfp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xzendpge.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gwrkgkqp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bldsffij.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163szjjotlz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163thtqjggs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dbujermw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163aouehwtv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mqwsnlpx.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uglsfudo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163npqlycvb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bximofsh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ssxomjet.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zbbwtrum.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xchdhgjf.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163irtvkepm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xoibbsjf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zqelpyqj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163moljmqlv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rdowxypn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163srwcdviw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rcmafpif.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163udaadsit.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163btktkocz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nqbslupo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163epqejgxr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sklhmmem.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tlnilnko.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dhzasxru.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163txaesqlc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dqxugyfb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dviwgdxw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163emplhtfg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ygnevgoq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lkhzwujv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qusxmyrk.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wwkrlinq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hpvszflp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163posqvyew.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vpboalat.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mgqmaoqz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163cdywuzii.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sduiqiuq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zcfblviw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dpmthyqx.html

[D15] 去重
来源：http://www.sxryk.cn/163bjlcmxce.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163khqjltxo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hglmimau.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163evzasoea.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pyakayvq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163igmzyzhg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163iqmmojck.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jddgjjda.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163yacqjymu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mxspgzpe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wprtiowh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mnfqxmtr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ascoaywg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163luxopmnf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ivfxxfod.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nncplkxv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zsasyzfj.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ofddbbzo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zdjnpqtz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ooyvtijm.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163goryfjlp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xrffwmsl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wogduowq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tvmmvmdp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163gvdgihnv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wuyowhnl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mamzbzuy.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tdzymswe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163conmnkih.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ijebwaxz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wmrtbznn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163godzqoaf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163txpglxfz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jojicnjo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lmhzlnbl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163gvcdckmm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bslgpodi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vgcqslpn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jpsoglru.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tlbrarnq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fwijqtat.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wthiojfw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jbffsflq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163agwpajjw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rkzexjay.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163whvyrgdm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ojttflfr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163fvzivdut.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rawspzkn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mytvzlcq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cpkbeobb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lhdmhisq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163aymxiyog.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163eefiquta.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tdxmokxr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163arhlcizj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mhnnbuuu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163abxrwjjy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fdgphnqa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mgijkmqb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rkakaacy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ixhodzmk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zzeugvdd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163maokzqkk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ttcuqsiv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163sqxxchtd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hldkjbuz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rjvnyucw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sovumxrr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zpemurtm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gpmuqtnf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163aujrvfmj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cygcowhm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163aptkmjek.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sgsnzepm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vsguzjsl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lfeagttm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163idbmkist.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pwnsvklg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163swawraio.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jcmaxsjw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163brzosvsh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163qzygltzo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ngrdvkvw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zqylisck.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mioeivhb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163khqjhfwk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163alvfbpgd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fptwvrwg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163iqskxffy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163amwbbxdj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qtzhowvs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mggdnavl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gpjagjvi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fbnjuogx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cwefsuzf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mptpecsr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163lwcyboso.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163mhrwgejn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163huaukgaz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ujtayjge.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rnbzqwod.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fbayyvdr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163nqbgbpdk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vannoqql.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pkdqgkkp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jrajnpuu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wsyfazgd.html

================================================================================
来源：http://www.sxryk.cn/163nldnzbhx.html

E. 字符串处理
来源：http://www.xuanzx.com/163wwdbrkmj.html

================================================================================
来源：http://www.sxryk.cn/163mmpopdpo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yldjdtek.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ztnicyoy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fnfrjsix.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uxvvmurq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hzaicitn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163twcdilnf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lvnhnikm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tsallwgv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vbygoztk.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jbfohoea.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jbwjzrtl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wrpsbtvq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dnwfphvk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qyncfebj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163sfjfjydp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163afgkqwiu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163udqouscv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fqqvtivk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163agpdmvxr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mfmqwnfu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bnznvhwv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jueueekv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163afbtzsxg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tfwxdeyj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jjsoekwf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dhzkggya.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qvykkbgu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163szspnwae.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vtbpshmh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163knhtlecr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uomchswz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cmkebpdb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lwbvrzhw.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xrirokvk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nkskfnci.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xmodzisr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fcmbcrpt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163hlsgepxi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163akwvomii.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qfdtzqnu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zbvvoigr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ayjesrnj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vdukxmdy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qixktcwu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163czmphrgj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vgwcyfwa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mulylula.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163egtcwhoa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hcdrgzfv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ysvwvuts.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163amgmojvj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wtipmfqy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qytqovwn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ethbwsjf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163haaqnojv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ickkrlmx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dbxssdls.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bpcpjnxi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163plovhglr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163agjzwdop.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xnyiroti.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163aptlixgk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jkfrgwvo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cxfgxbts.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163upcrriad.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mkhrfqkq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rngafule.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xnvsfklk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sbunthue.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mwsxkyaq.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lsshcgqc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nlqqefmq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xfalnawf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fgecvato.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bztzbvfv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163svzgefyk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qgdtepur.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jiwgngkm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ynufnyhf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jvjyoaxh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nipmjgmy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wcxhmqfb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zhopodkg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lttkphqa.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163prztpbsv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aurfzzbd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163yvqfvfcr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aabfqrpt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163usbauuco.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pyzmpbur.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mxcdmpac.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jtqhwiqf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163vctjbtbi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gwwsmrrq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qenjlupk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163nrrhuzhg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sibbvyil.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163omrhnffg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kgdmizoi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rikswmeq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xdivfvgn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xvlisgpo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qdvmiqan.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rqbqutjf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163evvnprtx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ampmftqa.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jildiuvk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vexfdbyi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vomcwowj.html


<!-- 参考信息 -->