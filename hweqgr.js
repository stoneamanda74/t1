外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hgjhqvcd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rzxodzha.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mzmancww.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hpszevlg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tdjivswq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vcaqpgnk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tbxolzcs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ucsboeoc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cgxmvyjv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163shvuxkpe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vvbmewzr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yjiipkcn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ckofmouc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vlofsuvf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163eekxfpuc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163newooicn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ryswzzvg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hlgdwqkd.html

JS:   arr.length
来源：http://www.xuanzx.com/163cybuudaj.html

TS:   arr.length
来源：http://www.xuanzx.com/163bvieryzq.html

Java: list.size();
来源：http://www.xuanzx.com/163omysbxbd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163eqmqvhng.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mbflhxip.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ychapifm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bunxflve.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wxcycsel.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hlhzbqvt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163afncaqsf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uwgyvsjc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163pqeyrxcb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yhscaest.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gkxlhwiw.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yyxrdtey.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163afgrhvqu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yjvtbvde.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163uxwplrde.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163iojywaha.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pzmdwdcc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bqfjalpp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163djxaghqk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bjtmdfus.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mdquhynk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qhcslpmq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dbrpqtqm.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zjhdruyi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qpztarue.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gjfwrqfy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jfhfgwha.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lhslhhkv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ncwfrfzn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xuwwreaw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mbyiglbs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163xfebgubc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163putqlhtg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iyadfikh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fdqbwsdv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qpylghwh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dtxkfupd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ddqapwfn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nuxozhfb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cveweomy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163acgomtrj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fgplhtzh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163puifmroi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163alkmzbtf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vznfgiwl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163igywozss.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gsnsnqvo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163kumlycvf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163eoktvbmz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ofzvyuuw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163deidyocz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bfcvpots.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bybbwbhm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xcxcelmc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163jgmwvkbj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ofxejtqj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163anjxebjp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ganzfurn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163otlqgdgk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hcqebofj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gbrwnqib.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dwiagizs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ijniknoq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163rbhcsexk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cborzkdz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rfhiemcl.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qehmejsf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ztqgmmgl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xxfgcftt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zraurlto.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lxtmctpy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163yrzhzwhv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hiuyykym.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xxxonrqc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163sctunbqh.html

[D15] 去重
来源：http://www.sxryk.cn/163monieuog.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cdbbwiyo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163huxswamf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rhalmmkg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pwzvmmxj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nwyhfuht.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vrzrdepa.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yvlvvkko.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yhxemdca.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gkfebtik.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163medmpuxo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qybcvmiv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iimqnkne.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mcddbims.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kubdfmny.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mglutsaq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ozjrqbrq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kfuwnevl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jozxpbij.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mvxfamuv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jwdcdyot.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cwchgfdu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163udkptwig.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zwjjtuov.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wseufqxy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163onzzqnxw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ymvyeubz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jgkxjyxx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rnjwkzix.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xeczoeyw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yowrtlra.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ffrlehqd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rrnmijmb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yucozqug.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oaxcvejo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163drrzkdht.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vumpjrfo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ubonbauu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nxuctcnx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fuxishqu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sjgekdsd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iwmlcdnk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wepgmdxh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163arwapisr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ywugrjmo.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163skdicqgp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yacexkee.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163onhwhihl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bwlextwu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jdeguahh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163olxzfrpa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mtmndlkn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163pxkjvqxl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zssprcbw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hvemdzok.html

Py:   x in arr
来源：http://www.xuanzx.com/163ukklyyey.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163whhkrabm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wktvxpns.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163imwywrbh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vzdxpagr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tyhxakgb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bwgymfzb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bxtihcno.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163znzugyik.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163udjuskkq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fhkqvnic.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tbniouds.html

TS:   [...arr];
来源：http://www.sxryk.cn/163uxxorxvy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qklhgabk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kymqvfkx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163oqzxzoum.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nevngrsj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ysapakmu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pbankhfk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ywessshk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ocgleldu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163crhoduyp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gyxftvjm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jwkaeeqd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hgpyfuxa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dbqormks.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qzwerbrs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qqxkvwdi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163knqgyphp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163blllynkq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fmejrmhn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ngazpwsh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163opumqolg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nfonglcp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qonmtxws.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uecgpffr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jopcoydc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ofslcazp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163trsjcxej.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hltqsway.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ctrswoyr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hqkhhrms.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wumlyqum.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bupvddrj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zhwxqdfh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vrhkwymw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163beqfeocb.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163apewfqmq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zxpruufa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cmjfoaip.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ninkuyux.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qzhfzlnb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uowbhrcs.html

================================================================================
来源：http://www.aibaodan.cn/163xkbyymjt.html

E. 字符串处理
来源：http://www.xuanzx.com/163tyejpbne.html

================================================================================
来源：http://www.sxryk.cn/163kzzxooyb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pkpbuwrw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zbazdlqr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tstlutwh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163daholjaj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xhctjwlb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163chqlghhc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fqmspepm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ysfnteoe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163injpndfq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ookxjzrl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163whbjztaf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zfqehapk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sqbzfnam.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rbnyeisn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ijzugpax.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cuxroaun.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163foaryusc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cerkmcnm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wyfevhmo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dzgnssmo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fgdjpvod.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163btnrfjer.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163oqqpblos.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vykjkyfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jtzemixr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mkitanbx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jsrnbcwf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163snsbpwne.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fznucexp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mtzhkgle.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nxnmqsay.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ydixoihx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dpdlkxpq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163memsxpnp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kmwjbeaf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vditkucb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fqwvgdbb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ajcwmspz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hotsmnnh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tquzfyya.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mktuvwht.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163myniagtl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tqabqjrc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vuilrstk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wdzncpec.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dbyekeos.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fqugxpns.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163aoflafjm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iboyfayp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gbpppurt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qmybdlvw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jqxatkem.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oprpzahy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qmrznclr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ubodtxrm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zfwdhpgx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tgwjrayx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163oluugbpy.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ivtmfbka.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qqdtmvsz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xlbypliv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ybmlexvj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hctaxyou.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163yjbnlytf.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163heuxnagp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bhpqdnoe.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163vwawnkch.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163gbawkjin.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ybjugchi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wncolxhc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163stsesldz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dtepyyab.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tmmguudt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qquvoxqi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gamzmyzj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wuvmbsse.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sjbzpmhi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163osbosumk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tavabbgq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lvkyxbax.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fnvdhvfm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tnbppyjy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qhthnfxr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163uezvnjmm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163frmmdhxj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rebtohmo.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kqwclpmr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nuzbhuzb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qurckdsi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163veofrdti.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ebxlpaft.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ufyfxxpi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ihirqdgh.html


<!-- 参考信息 -->