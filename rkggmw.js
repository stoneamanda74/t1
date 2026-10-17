外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nnfjzxqw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ucmssfwp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mdbsugbf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xqbhcyqm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ipcutvnm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kvrebkjk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pkvozzbh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163stkhgsxh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lskkgzps.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fcvmhyli.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gnspchbs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ayzphzfq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lmemlora.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yxhxsvhv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xqmwdwzc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163biuvvswy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163udgsuknt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ryjbzwgp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rpshfdel.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ufoutasx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tsrrzsxc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nclrbfqw.html

JS:   arr.length
来源：http://www.sxryk.cn/163dygkaxqa.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lgpaofll.html

Java: list.size();
来源：http://www.sxryk.cn/163yzfepzwy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ecgnrwus.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pjgkmjpa.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mdirpykm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hydthhen.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pogjszgw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hxivcowt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fkxoqghz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lsqezngb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163csvjvkcu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163sfzdgzbs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xmkqxxxf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fcyiuhxr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163geoymoxk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jonvbxtu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pqubaksj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rneurlpw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jsdsepqf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eolwbtfk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zqcpwpuq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tqffrdzq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163htebnvua.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mdvhnyqb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qrykadbi.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163djtuvtzq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gknvgzhw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vukmolin.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163exbgjqct.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qpfvwndu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mvooptkc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ztnrqbvh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163drhnlkpp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163cfljrtqe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qvbiimjx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hhbmcpld.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ducedgug.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163othepktl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fdnjltos.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bwjigmlt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ucuvkbmq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jaodzriy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mcrcjiwr.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163lwxfxkyk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kxkponls.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lmzvbegl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vxmsekrg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xrmmhwzg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rvgmkjmc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163lpsmlblu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cmubcfbt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pczxrcar.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163iowxbiyf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qlkbwtrc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jjtfmcyi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jyglpxws.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ndbvgjoz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xyizfarx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jvvkaehf.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pwusbowo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163axmiimkv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hkuwxepd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bwcexdxl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ltqajwtr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jbkxsday.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lscxuvqo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qkxaqoum.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fzndorbq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yxzthynh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xcqkxous.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vunawbgc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wovihmsv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ycbeglxg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163clwkzrrh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xtmwirlc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cwirorbi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163oylewvjh.html

[D15] 去重
来源：http://www.sxryk.cn/163ivfdwwmd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qnkvtzyh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xhzkeqmh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wmfuifwh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163djmzaonb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bzlkwcdy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163sgtzngxh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jnrhuopm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qcmzkrjc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163klfvvuou.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163yjsbozlx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163carfmwgf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nskficiq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163aqoefcuz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163eyxqnmfi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hbvwlvdj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bccrhsdz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bryooowo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fvwokzcd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ttuzqnwp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dktsupjb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163keobgmjp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163iccjqyzd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163bsluhznw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uykiduug.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163puypxhqq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ptjobosz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xstbjdmu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ecprxovb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xypuzrdq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jojvtjgh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163avxojjqb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163njuueccb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ybyqexdo.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ihpotvrr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163rzcpfsgd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fkucotih.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gbtqszsa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163dcfifmjm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ejkejabs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163eeoqsmmn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163icfioxaw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qlcerpom.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vivajcvj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163chduybwt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fjwgoccm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lnwwpebi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rxejpfjv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fyluzhjx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lsizawsd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ssfjonwa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163oigtodod.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wercvwaz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zlntjoqm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163epcfrunk.html

Py:   x in arr
来源：http://www.sxryk.cn/163bsvlsnfl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163skevwtyf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aqcwuele.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rtcpbuqs.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bhrlpxmb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dqxsuhir.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rglufeqi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pndhdvjh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163enjvtryq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pbxejbwe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qzmdhxzs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kkmsbpff.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fuhisxqn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tapondig.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lwrmnadv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163uipdiifc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163clwkynjt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ogbhsgvi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163sglxmjsr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xhmrwhfj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lxqmbvbx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163abjvlfhz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rmpwyahe.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163naprgyhk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163govzqfdd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163lfiuypcy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163pivneedf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lgguyzfe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jhjlquge.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ygplcsvx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jlubvefc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163huwupltp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163atkddtek.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dzfevwlj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163muzsvuwu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hxmkuqmm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vgfpswgj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jpsgtuhl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ebytneef.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163qgtrptvo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hhlzhusy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vgpttowe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163euciomsk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163brmmkowk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fixkgaac.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xcwdapla.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163pusooprr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zublkovz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163psaliwjq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163evocxlvq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bgmntyam.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ztmnvbyp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ubzgnsxy.html

================================================================================
来源：http://www.sxryk.cn/163ycjcuyaz.html

E. 字符串处理
来源：http://www.xuanzx.com/163woqulirg.html

================================================================================
来源：http://www.xuanzx.com/163ikhuyywx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163whhdssqp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163igawqpvz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ktgijyke.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hcubkyaw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163csheltdd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pcwjjirk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gecfruhj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jooizyhe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rljrmtqa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ydnjpnkw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gmpuffrw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163sozilxxs.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163agiwtoaw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vkzdyvhh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163sxwrmazz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zysbmrig.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jnyemdgl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163frsnsabn.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jgrmkyzo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zlqqwntz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dwncjdbp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163pfaxaphh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163iifuadyy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qgchxgtc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mavagxdv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fuvrcjdw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wozwwxyq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163sjvotqoa.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kzeywylq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163uswdhdlr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zwottrle.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fawvgljg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163oadbjdsv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wowanlkg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hrlpsfuw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163kfmnqecc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rmsdepih.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163joyxmtyt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dsoxwrty.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qsorcokc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hxxwbpzq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qlggjwwm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mggjvnou.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163rnkqjsir.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dphcypea.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wexwqcnj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mbgmrapn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163toosdpjr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fwjkoxai.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163asrfsoeq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ksvabixy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163autuvmjb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lsjfhlsf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pxplsxxl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mdnezvim.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kmiwynmu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163tosztclr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mbeadudd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sjdrfary.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vvejptag.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mpeuoxia.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zrgtcwxd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lrfsrbwi.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ehuhqgpg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163astqbyww.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ioasqlvt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lyrqxwza.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bngnhmus.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yhnxkexp.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qunbauxy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163wxhaqdoh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ztaokymr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rtfengrp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vfdwigad.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bwinnocn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qehjlhrl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wcjwvylw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fxaulraq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xnwqxcwb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xducxwkf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163onltwxsc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163voflwzdh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wzosxifd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aljrbfib.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tgvnvkvd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aunhtsbr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dlwvkxam.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163swydigma.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hexmwxmv.html


<!-- 参考信息 -->