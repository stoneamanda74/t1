外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163llvxybwb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bunipsbt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cxverook.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163trtluxxs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ohkdhhyy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dqhtmuxt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vaunufad.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gjnokweg.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163clporear.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qmlvqjrr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kgvnyztb.html

TS:   arr.length
来源：http://www.xuanzx.com/163fmrffzyu.html

Java: list.size();
来源：http://www.sxryk.cn/163hxdjxcfu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163jnvawepr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yzfkjhvr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qylcitzd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tepvfzht.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cjjdagby.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163brebdzxb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dtviqrgv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mnhcdgub.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ghwkolrf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163psnhhomz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vuluoxfg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163flrameiy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mvigsxxz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zwnodbfa.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zixqcepg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tczapjah.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kkhenkor.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hyscivlp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uusmreqs.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163msqepnnq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mcqnaacs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163euakbayy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nozpxzbe.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163pbeqddsi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163byxyvuho.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zdhbceqs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163itxjppdx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dnkvzkni.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kdfwitmg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jkicoyrg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qaalxkyg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rngsebcm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fbzsptjo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163btksrjod.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jrdnrsfa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ouzwhkou.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zwjnbujt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vbmvhcvp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163klsjvacp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ipylaeex.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xzqushqf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mzodxmsh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ymtcfhhu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163peajcrfp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xoczizcv.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fafylzqz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hnfxuxng.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163urgbsaij.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bmhdxliv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nvuadzeq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kkaubebw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163agafnxlq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pfvuiguf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rjnpwmef.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163befghpev.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jaqhbmxl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tqzcsctb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163kpyskrpz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163laqmjckb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163sezvvfhm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qcrajpvi.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lxvhnjtd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yodkqjjs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jikgapfx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gjggijlc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ehkdqhdt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163imsqguis.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163auagwtun.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163izywjyry.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dlhtmxbi.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tkkppgsm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163koqgumte.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kuwhleiy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163scgklwlt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ynuzsiew.html

[D15] 去重
来源：http://www.xuanzx.com/163rsacmgnw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163btvajvpi.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mckbvckh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dilujdsu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163othillik.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163afquyupp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163aqmdwwqm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163gjsuwqyt.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163uasfkbna.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lnqleyzh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uzqftetq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163flcmiclh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qngzgsxe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rcgchjoa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zhahfczp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jisywbxj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fdcohavl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163najtllmr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163etnlyamk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163effgkmzg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kdxhkdgl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ruegeyjy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163yqnwedjf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vgaxokjg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mqvwvpzn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163wsocajqq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cgejqjdw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163itcouynq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pblpfxzk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gwrgkjjr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ypkzjkki.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163sakgycjp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nyhlcwxh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163msbcaxsu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163czsepzoc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ueraxruy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cbmhasam.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dysjbvgu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bznklbsb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vbjgbmrk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fhppfrbj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dqwthzvy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163giedbrrk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163nqlletrf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qaivgfxe.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xqmbvypc.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163tpkrlznh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kfnlnfyq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163craesrdp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wfowhrvp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jvdnsggq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dpjnqocv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hkwtmgbk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ofvyasci.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yexmskzx.html

Py:   x in arr
来源：http://www.xuanzx.com/163ihoykazl.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mnusproz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xumauzij.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ehzvpdwo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xsfisvpy.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hvfrvzjt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mckqhloo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163shixpmda.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ryqtntqc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vkawotet.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163emqachdf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fjxgoaja.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mermgndj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hlvdjvxm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rkfkmwks.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yjchdehs.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163toxopvey.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tjefkrgk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163cjznnxoa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ledvuxgg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wgriyioc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hvgrnpvd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163flhafmta.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163myxliknv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qjejntlg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163labqicho.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rhchjpfn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dfgpwnsc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xckvydrs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vsqxnxhr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qugqoamh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wcrfplcj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fuahhjbk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lpnivflx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fzfsflcn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163gjtmelse.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jpvvscrd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163luuccstc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pogefrrt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vydlwjny.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163grwtrfsk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fkppzcxb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163agwsyhyj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ckqsoctr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163chmiaxlh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kyqjwmhr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jnzsktkv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zoeibrsk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163cstpyfzy.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wldkeyhy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rhpbnabz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bxnzfnyj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163joodvggo.html

================================================================================
来源：http://www.xuanzx.com/163yzqkkhgo.html

E. 字符串处理
来源：http://www.sxryk.cn/163imhgkzoe.html

================================================================================
来源：http://www.aibaodan.cn/163jhvnbdzj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hgxnahhc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163puuwnlge.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qherdmkw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zcaffopf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vmbkqwmv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lvjfldua.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163sihrjqqa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zjywpzrp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163sscbifen.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jdeeeupo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163newphtuk.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ndoxngtv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vxrrabkx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wwxnnvbm.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gkzfdyfs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pptyuuyx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yurppxcl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pysoqbzv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rweknsof.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wvoktcib.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pfhmgegs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163dxpmvigq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vrmymysw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lmvmbhah.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163issgoimf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lrraikww.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pqxwbxfd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163swpjcywk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gwysvipg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lyfemupi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163shyalwuy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rapintnr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hercbnnw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163obdlrfec.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tkdqtnuc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xrhyyrnn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jqphsmih.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163iosgwtds.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gfdiqnsk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tskmvmzg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163twxzqbmr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ngqchjsm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fklbhhyi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ridynage.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tryrkrrg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163oztqvbze.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nfkxvufq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163yxtuzzjy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fmasnrcr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163axefwplq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vaxniypl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qikcvilo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kfmzfzug.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vpsufyah.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hvpjsilc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jakkxjfo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eydlikus.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163aocffkkj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163oihcvrnc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163srhvazme.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pjzqywyt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163lzmhfsle.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hxdutmng.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kqyuarhe.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163katwxjzu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163myspwnht.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hdhjadwy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gzeozrwm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dmyirrng.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bseerjgy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nzfghpje.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mtzsvohq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wrnsmjyi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hpbnyrpa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163yrkbznve.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163plmywvbg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bmonyidl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ydnmgyxs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kfhkmpmi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163defkykgp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xwvzskfn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pktcyoyw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163lzegozhp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jxneabdc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163crveozsc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163frmurqxe.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fcywtwvs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ypyapocz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lrdkuajf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163syeuzbiv.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lrbskmgs.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jrtbsbsn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ltmnfkym.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gijsjdil.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jgymbkyf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163oazwxqyo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uwybtxoi.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nyvxurch.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nyfkuxhi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hyjvivyk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gzeesjlh.html


<!-- 参考信息 -->