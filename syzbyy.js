外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vlljksou.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pouzxhvr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gkstpmrn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pnhxxnow.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jpbxhxvi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qfowaxyc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tfvfcjvp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ofnykqah.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ctsogakh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163remjfjyt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jkeaicep.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hcgbasuh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ujpyckfl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ywoepjsg.html

JS:   arr.length
来源：http://www.xuanzx.com/163lewgkpdl.html

TS:   arr.length
来源：http://www.xuanzx.com/163rgwaighw.html

Java: list.size();
来源：http://www.sxryk.cn/163kcrbatqx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mtqnripr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mpvzhawb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gaihwbty.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gazwprdt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qfpnpqij.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mwvlgqpc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163huvkjoyf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rtulhkcx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dbkugiuj.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pnfvqhyc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163apjoankc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163stxglmuj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rwzhnluw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tgweaefw.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163lrbfuypr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163inypantg.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hntmjbhv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kuwngqox.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hhruyzkm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163tqpjlvst.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ziyinguz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ffwcvljo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gurglyya.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ovmwxhbk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163eblklpsd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ymyigdhi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gyjyyysl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kcmqweoc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dgwadtcy.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163htxbbjbh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pkwcrrni.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yszjnpgf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kerzogcy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mbfzhzxq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163esmejdxc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ucyonxtb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163iezndrym.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163aktckgop.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163eiruwmga.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163iykgfiwt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vegmiqby.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163uidkdjpx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163rdpfjmmg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tngtadmj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vhupimcj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rwqyfelf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ylhrsume.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163awhmkjfz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pwqqvuea.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ofnscdhb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mnnivpuh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zpewcymn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gskosvwn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nmkctmow.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qlwgojut.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zwzglgzs.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nfkcgoqd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dppfnqap.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dvwhvqfz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mbjupohh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qvfqvluc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ysecplqn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163elryotmh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lqdqoawa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mnmazrpb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163svhnazil.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jesbdbna.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mcgfnzra.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163asuwxeua.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tsvlivyd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163axflhvqb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rfqkdrdz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dnsbbmae.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ybyihztc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zaxnofgq.html

[D15] 去重
来源：http://www.sxryk.cn/163xuphjfng.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zihoigab.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bjojuxmm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wewdwxtc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tslfppdd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163iatrwkrq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163amixygng.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lvybpuqo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jwtorucx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mmjxdhyn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163aqfzypqm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bsdftmyl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cqurahqm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cflzlmfl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cmsplsze.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wsyjjtpq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hujuqmng.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fknvpsaz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163pnxhnpfg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163riohxgte.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kuovqciy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xuggijlm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xxnavfkj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uvfkooko.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xotyuuzz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ahzqjnbq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ahuxuggf.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ypbjbxky.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163paxvtbbz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cecpbzfi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163cycowaxi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163kcghdmvq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ubrklrip.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iaioxzir.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163quuclyxa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mqsglwfp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fhhkwuzh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bpfahvbn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xxggeagz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oemhutmp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vpzpwemu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163flatskls.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163basttvlc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163jhefxkhu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163tjgcjozg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163cdaxzlzj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163aecbfhcw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163smyfugmu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163klhxhsxi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163suzjrccn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yddijnvy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163stheeuqc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163retpkkvd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163speqzngd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wfcyuynh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dmtxxzwv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163kydxkdpj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lcgrlfjl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163agookapw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jzmoyivf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dkhlxzvd.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cepxufwb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tolymziq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mcuwnsdy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fnoqdzzk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bjcytcif.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163potuyxxi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163clsadald.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vcmyguvf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ubjafrwb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rjdzxmqp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163iwqogiwu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163psdezopb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163bbqtyuzl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fwoukwxo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ouapqqzf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hakqhhdj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yqrmsdso.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ovtdbonx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ubkzjhjw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163isfcvuah.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163zcdbqqcf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hqeuhysw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163aqqyrvrf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fkghhuvx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163utupvsgb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163sudjbfgr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fcqwkoau.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zzswuikf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163acxefkjg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163cipgqtwd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rkpqoips.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bgpuoxiu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pxdysfuh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163modfkbml.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mgklhegk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ukzrcymj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vtocqyzw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ohevicqs.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pdblryar.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tpzjgekg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163keniawoi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163klydbaiz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163twjpymiv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tdaeijzs.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163gmhrfooz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ojipeczo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yrrwweks.html

================================================================================
来源：http://www.aibaodan.cn/163wiacbikb.html

E. 字符串处理
来源：http://www.xuanzx.com/163xavjwzvw.html

================================================================================
来源：http://www.sxryk.cn/163syxlxlqm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mmxjnwpq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xaguebhs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163epmgajdz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gfgbwfib.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tyiddiap.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bsfywvzq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ainxlxwv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163cmrccpha.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163toekbfcf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163fzmlejzy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163uenjpnqn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kjjalbxv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lojrpcgb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mtfjisaz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163oedvinqf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163myojnavm.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ocpglrou.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163enckvqpc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xkdxhfzi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163aobrrudy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163xxqnqedz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iyacohxm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hbngyikr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163euarhmey.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zpwhlqyw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163geshnzxs.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yibhtqmg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hgspqlea.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163juhxuvni.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jitzvupc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qebsywui.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dxsgxtds.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jveuhtdn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uldsrbqr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rwyummaw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ejxcqwcg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163taizbjvy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mnlzuyha.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zqbtpqwl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uxgmnjyz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lkxpglol.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bwcafrlf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hrblyijm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163krfbbgnd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bxfdvbai.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kdhwyzcf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zahylphz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rjnunvzq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ffyyacnz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ahlbvchc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ehsjbafh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ipdjrjav.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ttdpfjzp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vbukrbxp.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lqxhupgb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163luqixoaj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uquyesry.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163btynaetc.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gzeswauh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fqrkcvsm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dlzojkbi.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jekpshcq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pjvjrnud.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163iozmqxhr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sagiwvwj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gjicuruy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ucfzppoy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163sghfmvow.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qjhcsjqw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bovnvjba.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163swcjhckb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163awmjjefs.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ttnaocct.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rlhdqvjj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163upgesojb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sgliowel.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yinjilgv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jyzttmnx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kubsseko.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163wzuaivbo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fiamnkru.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wlhzjlww.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163xerqproy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wcpgfilc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vulqloyq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ujjkkfut.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ghxockzk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vwjaoyjh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bofuumqi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sghdvmcu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163gkrhwwoy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kaymsikh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jmgqvfqe.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ebykrlbf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtjrjxze.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kfhuturw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jbwcjglg.html


<!-- 参考信息 -->