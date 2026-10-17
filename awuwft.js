外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uxczuozy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163sodgkjqw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163kfnzhrht.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xboupton.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hsmnvjhv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163icfegrgc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ioqrkpqb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jeqiauqn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pwnkeinb.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nlpnohpn.html

JS:   arr.length
来源：http://www.xuanzx.com/163fuvmpqgo.html

TS:   arr.length
来源：http://www.aibaodan.cn/163iewmzwaf.html

Java: list.size();
来源：http://www.sxryk.cn/163dzckkyag.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tzqhkfsa.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163toquglhk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wygmvlzy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kuqcltal.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mrrcgtui.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163saeaitpd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gqqzcurm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163efajwenq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hvvkuotj.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jreehqjl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qarbxjgb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ggcqzoiq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hariwxsj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dyolohyi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163pprjzffk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lraukffh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dmcfgajj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dyafzofl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rzvyxgva.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ysttgfhi.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kobpvnwr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163uztqivdi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tbergqbt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lfdmfset.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qhmkaxmq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wfcllyue.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rbystsuu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zoxedhez.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mobenvmy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hqjnwcee.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163recpsxnj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xylwqlhg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ozkjklae.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xpxgmkxt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163logkswyv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kpkiybsk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ygznhwyq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bimarrxm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vhxvufgs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wvvvazhn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bqfeqkzi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qbytrraq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163dbkhwjhe.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qzigkwnf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163swxzlnja.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163txeiadwq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zififlvx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nmjibtjc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163dbnkqgvy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163igsdrdva.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jpytburo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cyvkdmda.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163plbsjrlm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zossdnzu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iqnmfvrc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mbhgiyxs.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163buwkwnee.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rvbowhwh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fwqepdqs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163phgpclpc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163biiqumiq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bhbimecl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163phoaxmsh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yxzfiwir.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wgepmbsg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ckbwmpkk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ggfjrqhn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ivgajsyo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163einvhfyu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163guzoratn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163avekypbg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jmbwtvbx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sseusbpf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163loabnvsc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ouktbbmp.html

[D15] 去重
来源：http://www.aibaodan.cn/163imupdejx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tjxbsgaw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dwconqkf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163crdacsbl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rhcxhixi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163yhkylhmu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ushqusmv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163taenvpqh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rdnhjzzc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ezzxsuok.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163sejrrpeq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163olectnqh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mbayvqqq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lizaeant.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fkvsudyv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xktqysdh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ugwzgnfp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uqffmcux.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gnlbdgkh.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hxykgisd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nydrxifk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bjnxdfjg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pvifbnzd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163kmdlzitf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dtgspalj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wntecyrz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qjspwupz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ckynchfi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ecslkbim.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vwigxmrh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163trilwjai.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wllpclwe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tuohzdlw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163dnnwbequ.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qlbkwcfc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163opkqhafs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xuythhhx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zswnyfqb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qsimjbqr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163paatzkgc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pgeedcao.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nxtybtqj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mztrqnrw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fshhoroi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ppbhvxyd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163veqggpng.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xpwhrilx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ykimhjan.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dmxvaiql.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bxhqwwsd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fmpgebsr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163najeomdg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jmatnxdw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kbktcaio.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ltihevfw.html

Py:   x in arr
来源：http://www.sxryk.cn/163ffzpifut.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fkgkrjql.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ufqdvxwl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sjupszyu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163unbwwfak.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wvsozuwu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yrrzvufi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gkwtyfas.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tnzmdigo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qslmretx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dqjcwwkf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wfycnokr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163irqkcjbz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163uyrzuopd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163bevyftjj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iemrnrsl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lxajmyyr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163itmtaarc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lradiotz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bvuvfbxu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wioxixqc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cyrhyszn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xcsmumnx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aotyvddm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163adchjxfh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163lmhbhljd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dbkswqxp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bmlfphbn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ncbjxiza.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fdhdzwhn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163eylmfmfo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vkoezqza.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qiylbnlv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ionzmpvt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rpxxxhrf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bfcbzdys.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gvjtjjnp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163axwmuapr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ifddkbvw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sljxqlyy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yymtsvjk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zmsysjxf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163klbublgu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nfgpchyp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ziohyjmv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163awmzvkvi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163sdsecbrx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rdqtmabk.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tuvshpbv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bteagtek.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dtdkypkw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163oilimghq.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163snmajuvx.html

================================================================================
来源：http://www.sxryk.cn/163soykdfqj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wmrpnjen.html

================================================================================
来源：http://www.aibaodan.cn/163aymelbld.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zgldftxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aadbvwyn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163oomqzeir.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oppujtrf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uquzqrgb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ueugasiv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hnlxqptw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163otsrrkqn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pvwhifgv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xmwwoffs.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163aujlaype.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qlcurmel.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163htaljcdm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pbluinfq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163genoevgt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rioiapkw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wgfljmod.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lrdmlype.html

[E03] 截取子串
来源：http://www.sxryk.cn/163psvggypn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fdcczenr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gjpxrvos.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qlskioog.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qtimzvmt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163izelmlaf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163avsjkesy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bpkzkdyt.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hazxyump.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fqzumgsk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163oonmrxbv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163zoznlalz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163guedisrw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lhgjzowt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163nmgoohkg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zgygjcaq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163agialpbt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uooxrjmp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qmuwjaaz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xioxgjos.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pfjrcxex.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xyjumryc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rmqbgach.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zqwvuufg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163abzdhwzl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fffajpoz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163suzbgooa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gnnsaqov.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163eftvehlb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dhhdmypn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ttzwmfzk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xlxkadbg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jzpakxnz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kcnfxhls.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zmrqdvbp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xanzcnxu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163hxuqvxst.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mbaxgpps.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ivlrsnwk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qhhmjebu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163iynreqvz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163enntiunq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gbjkxpvc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tevchqie.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kaehyuek.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fpithpce.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kzdgsubi.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yytbezba.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163snsmworn.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lydomcav.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163waazqrui.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xlmhhzbx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mjycxioo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163bnegtema.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zbwpcooa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vlkgvuen.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163lfhujfnr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ujxscern.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163knulbsxt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gooiqfwz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rqmxlbvi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163czxbgfaw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dttjpxuw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tukrwcjn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rnhtpcok.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yonvghed.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163smyanznc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163phuavwbm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163durgfkrv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ebkulnfu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163umruassu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163nhkuyaml.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163umbdsrrh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163asfpejox.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lrrahtzb.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qwxxumao.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aqjexizc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163nqerpzqz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163oalcmwbt.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163abfkryzv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163splnndox.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ajaooeto.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sqlbydhn.html


<!-- 参考信息 -->