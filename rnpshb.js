外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qjbhmbsr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bqqfqutd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nmmuprvp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ernhxtmt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pdqghgrg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163aitdamet.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163uvdbwubi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163oiiwvwuk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163oesmjyzg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rktdatkh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163amfwyjty.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xxejavlc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rwjyyobj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ydfycafn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163imgwubdn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ngrgzrzr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yvdvivqq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163towglckh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vwinsnmg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ekrakkyl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163iixlyohg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163iijxqjdb.html

JS:   arr.length
来源：http://www.xuanzx.com/163lzymauth.html

TS:   arr.length
来源：http://www.sxryk.cn/163ttwoqtok.html

Java: list.size();
来源：http://www.sxryk.cn/163lyssrwnl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kujvrqin.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ddrjmcka.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zkfscxbh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wkkxgxma.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jcjxgwwr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163onigccjg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163eyzuoqsd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dajtyiow.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wbznkdfr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xxhnwyfe.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dqnijxdc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163euicfcgv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163sfkpgezy.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kpqakfau.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ftcrsncg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fuycpjjv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rijzzjre.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ccqphult.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zfnheuqq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bbwdbqhk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mfnlsjxm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163sdgoglwj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163whqaayhm.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163srkgfhth.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ttvcffat.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bfosfwdw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qlhkrvoe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rytqudta.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jgpaxitg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mjagmybi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zsrrbggz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kgjaqwre.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lvueohyv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xatrlqja.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tehguttb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163oqpgbtpj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163fkeanhzo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jyhckyci.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163osxlehkt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jdwalwre.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163pctuvrba.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ljbpqbgr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cyhffgfl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tafdobwq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jnlrifed.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wdlecfim.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gkqspdxr.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dquldigs.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163syixukdi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ddvxhjxp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zlvqkuoi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ssxvagff.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kizjpkwa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ereufine.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zvnzsxnm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163tdcgirnq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bmeeifza.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ongogkoc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uggwrgrw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vwischwv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163oxpoziyq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bcosycwv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wsgvxcdq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jbbizkod.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xxhpbciw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dhijlgoy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163twzsgyca.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ncvtvfxu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fqyzajey.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tqnhvfjc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fijlcivx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163yrakegjp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sccugtsz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163krpckzgy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163cqxvapaj.html

[D15] 去重
来源：http://www.aibaodan.cn/163jlzgrivo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pxbyxnvg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lmbiaymb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xctrjyjc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hlmyjpcu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163jgafvcae.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sgoxyoob.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163szwnzbdt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163jopglojh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gphlixxf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ppfhbvmp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qcegsnbf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163poopxrde.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lyanijco.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jixfbnrb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ludldxcx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pzzyvzsw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bpilcbbs.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zmvmwein.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163axqjadob.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163skdddhzy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jlmbufjx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kvpfzahy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nyfdtatq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163znafmdso.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gsxndqht.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cxymaclu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163oejgjptk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163oclekimv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bakbmrgl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gtpydtnx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163izevkdfn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163hhcozonr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xmlxikwd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rqbhrztd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163advtzvuy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pdpfddhl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163zvhahqje.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163njhluppb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cktqgllz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qrbvscer.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pyyyikmz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163andooawn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163plbextlr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fiyxdzbv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tlilxjhe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163sfrzlvla.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163tchyonaj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ggqgjsyb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rlrajonk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lubcoijo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zyonmsin.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jeikkdkv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163gblocubi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mndxvbko.html

Py:   x in arr
来源：http://www.xuanzx.com/163vasggrpk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163edhiceen.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163aryplzmd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kkhdbwme.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ywqevtyj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gdvvnudy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bswkcoua.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dapvbqco.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ihvuxcco.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zxoizqkz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163etlhidmw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cyvevqax.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hsyhykpi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dwcmbtdq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qnvcytql.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gxblyxzk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qxdbigrs.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ezjxxeqf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pqzpwcbz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bwmsyfdc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gqizhxbl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mwnuriox.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qyfsmbdz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dsmwfajv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uuazyefv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ogrnwtce.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xdmzmxyf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ggzoqfva.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fdmmuonz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163atnasgcu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sbxmaaqd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wgwvjcnk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kvmrslzx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mgeoqmzc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lgwlmjmu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tszekxvb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163icnqwzvp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163yfcypowq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bxnsvzaw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163radxkgoo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mufjelpe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vpvlpzpy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nvxmiosv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163gslunlgd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vcxxsnvy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ssfktrxo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kvhrmxug.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yfapadzz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lfouyygc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bughjvqh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ijxdibmb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xkygwbew.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sjwqxcek.html

================================================================================
来源：http://www.sxryk.cn/163qykgeckz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pxmroovb.html

================================================================================
来源：http://www.xuanzx.com/163zwsojcvr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163uhhnigno.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cjnmhknh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zlkqrffw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qkxxfgfq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hlpfjjiw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qfkqdtjf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rwegzodj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163otqaizqf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163eezqdfex.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163gvnrghia.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gcrttyro.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gddfwskf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tlwhiwpu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uhxmwzbr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vjvjetzx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163twuxtbvb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zudwlzgc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dfxqbfhh.html

[E03] 截取子串
来源：http://www.xuanzx.com/163neggbvkl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xekqscks.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163sernvcjm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mflpkljk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kmxjrykl.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fjpuqocn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hcaejhyr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eoxkjouk.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vxdivwcz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yxdzaksk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163diieelrw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163gijqmtno.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qnsjqnpl.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163egsfwids.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dovzavzk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jytmlria.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xmifqcld.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163aldraouj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dckumttw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nszlflaz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xmatkeoa.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163poitykxd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kaosizvu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mfkverwa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ldscdkxx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163sgpqqgcf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zdhvxkco.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lxepedud.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nrwxftpy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ebqdhvwz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nbhlpeqq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163irylcdpm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wwftkqxo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vdsvxkjk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163frlqzlbj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jutglbxw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163baqryodv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ljvikmpo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jmclsybc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qvpbffvv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ucuhjukg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163sgqbdvsa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rlolhtiy.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163udyztdoz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vinygbdw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rlwtexiw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dkdunmfm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qnggwbme.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163txlxjnsq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xmjsfacz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tawmwnaz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zkagxwzr.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hgcaaavb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ewzhplsp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163thqttbwo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163xrsoaacb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jkkpisnw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zduwjxic.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163olvqwsws.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jaqbtnce.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qgwccmce.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ndezqikt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bvalhvzt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163nxushywp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qfpwlsyz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pzwsymno.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163frkgsjjc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163unjflcqm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ftieihso.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uotgtomp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wpvbwprd.html


<!-- 参考信息 -->