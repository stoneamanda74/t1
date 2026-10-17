外链999!wailian999！

Py:   len(arr)
来源：http://www.xuanzx.com/163wpnpwghk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163lwscavbc.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hsjkjtvo.html

TS:   arr.length
来源：http://www.sxryk.cn/163zewlgiyd.html

Java: list.size();
来源：http://www.xuanzx.com/163djcxgizq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pjaqhumf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dmgmssen.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tdhhpwmn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ybxbabdy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wwdmczrb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163blagwlfr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mcraeqhs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yuyhmezl.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qjjhepel.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kpkqwdxm.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zprixaey.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lsgsbger.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gpxwxgem.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qbiplprv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oikzyoxh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163feppaspn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jaofwlhc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wzoawanw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163uyiksurt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hhfqfbsx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163epfombhi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cgsoopmy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yucwotbh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ouydstmc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qtcqfvvr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yhxidcqh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163izndemqy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rwghbuay.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xlmsfapa.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163onkawgef.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163guxwkxfl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163davkfufg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cqxkltpw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xozixthc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vdgtgish.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163exhdbepb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wvpxeryd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163avyhrmvd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163oaqlbbck.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xeofuwor.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vhhswrtt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ukhiugfa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mlgdqxbl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vxuouihr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163pnimdtmt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ieesmody.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163edgoiozz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yaiqmddo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uzjzlkoy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rgtprrwv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hdkaggli.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ugmbieyl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mklwbday.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163odztaacb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zsbojpdo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163edjmsqzi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yxdicgpk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fbganyqq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qlwouxvv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gghbvoiu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ksnpqihh.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tdqetjgq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fxhtbtyi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rxhuxxbv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vpupvmix.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kyvvbapm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jzjzdbhl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hikenvid.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yebisscj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hntrfccu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dklikqcw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ngmiyjrp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jequbrfj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jyqfmbdq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163wiwwwdqn.html

[D15] 去重
来源：http://www.aibaodan.cn/163uhxlobcz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dcfdawwp.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gbofgmuk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zmyxvfbu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mncffpgr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rryskrfm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163srwppqkn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mwjtuuem.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ommwlrmo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aslicjwu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pckmwyoy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gvypdqlw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ggebfqej.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fgjrgltq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163uoaffhrk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dngcpcmk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ekwnvgdt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163agjbrqiz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ujfyiihd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kwuoqpne.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zirgwbvg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ouqqlqbs.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163jcflggnq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lbljlwer.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mdtxuwbs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qxpglgvt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wmgpjqrh.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163usookcmb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nkyvzdgm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wsxansys.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163orqoevrb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wcyhhryy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bvxiheec.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ntnfpsmu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mysmabvd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163igajeani.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163abyftckc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jweenypw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163flqyrsms.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163aonpabgl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ocapxsne.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mzcurrcf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rrjmxlxz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kyydkboe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163eeemmagr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163snipnsyo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mxghbueq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163fxmjncre.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mpmzjjxz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sjanhhys.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163uqtdkzft.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163sfgzvdyk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163uxpeoucj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mwqqmgjl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nwkycwyl.html

Py:   x in arr
来源：http://www.xuanzx.com/163vgwutylx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xzyczsjb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yiltmgvk.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163lpekynbm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163nddmhzos.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ztbfbvgt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sqccvunx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163arnebibu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xqalulvk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fgmnrrzu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ibnrejku.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gqflvgtr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bvikgbcg.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hicnhopn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dydojndv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pwikpoid.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163uczoecrk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163elhozjqi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dtojahdf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ojejrwft.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hnjlrpks.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163umfgowjn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zflqbfxs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gjzjtuan.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uvsnpunq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ynoixqji.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bmcvbsnc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163fqksager.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nxmzarey.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gurivadq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163teuzbniu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gsnldkzs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163iopeshdt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gvpimgpr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ngsntflb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163deychvfy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163tyugkoug.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163czuauqrd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163neihztxr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163naxhjjwq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cbuoxfuo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163yyzoxzsu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mbiwtfly.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163clyvnozw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163owunfjxc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hmyhcnnm.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163hfyoluay.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dwvktvvg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163icegzhhr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vusephco.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163obvtbdhg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163sbbzqwzd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lraxgrcw.html

================================================================================
来源：http://www.xuanzx.com/163zfdjtqlc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vagxtine.html

================================================================================
来源：http://www.aibaodan.cn/163ffvpappy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qqhcoski.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mtyunfyg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sfubcwqy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mvtlybuk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163favfnwsy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163pgxcvpqd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163uukcumuh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163botrdzmq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zivoypjx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cfxfyjwf.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ylcgmqxy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qzcczhtu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fxsfvkwl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vaczkmif.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rbojrszo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163uezcmere.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163plmprbmv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kklsugcy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lacwbtyd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jekbwzth.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163biqtilnd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qhqyyqwt.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hfidyoqa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ojtobicr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163amcicwmq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163aqgzkydb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jqneemgu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qwjvcsfz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163uuawcffi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163smdzbmsv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mdbnczec.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lxdeqdqg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tkytoccy.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cnachtru.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yrpnzguk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mnllvdzh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jzbtlvwc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163gdilaacp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163awkilgzn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hyypqrir.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dewgwxdi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wxtmctfk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sqmdumnl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163auwpxxhj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hibhucqo.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ocriqfvd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163pcvprxrt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163sehwlbmf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gjpzqthk.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ofcnqdte.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163awfqeqli.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163cnluzqya.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163sbxuaxyo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cpglurgw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163twluthpq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vkmupcmy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163sbhatydt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163sxxtezxr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cxeovvll.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ywdyotcw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fffyhenh.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vnbmpgzp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pehuqpoi.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163issiesnz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qwzrmvbq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ihiipanb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cjvdrqko.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163nvbspsce.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zuqnpyxw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163piuhgvne.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gfhbyues.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163epbgdcaf.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163vwbutixy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163szzyscpr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kfalzgba.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xaeyhsex.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cjkyfgvh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hqwrnzlr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pfzhrlgl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163bjdycugb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tjyvfdtz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163uuygbbsc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pvibnmwv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163twsrmhla.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uxhsmyej.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xdekxplt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yklinelq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ccvaisse.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vzxjshqw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163folluxsa.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hvcguaqc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jmcybrxj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163togernxs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163flmjmtsk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xltubufw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163fseubqps.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163uagkeaal.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jmuskbsm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pqyfqjvk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ktqtyvlv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nizmevon.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163oxshzafd.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wqayjkci.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163txiqbzzr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ngbkesot.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jyymctpb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qbubjqkp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163omeneovo.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rgoyszag.html


<!-- 参考信息 -->