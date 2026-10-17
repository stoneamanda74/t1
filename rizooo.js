外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zmspqjgm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ezomahlo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vooadvrz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cofmnlnb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163aozkmclx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ubschjaf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163blqemrmg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163artizgkc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mrddyhxw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mfcgkmdp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jxoyamyi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ulxctmoz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kzpvguqh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jqeioood.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cagcfgfb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jrwkjfhc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163etubloqu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jxkazgvn.html

JS:   arr.length
来源：http://www.xuanzx.com/163ylmqnbdk.html

TS:   arr.length
来源：http://www.xuanzx.com/163uhgrivrw.html

Java: list.size();
来源：http://www.xuanzx.com/163bfcjyace.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sqibbbwd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163iiwufdjq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163znatffvn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xbuqfrbb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ohgzpygd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163eblazfov.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163douxemju.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sjfuesds.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uddizebz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nqpopbys.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mqjoorav.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163opysvnlx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tduqibti.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gwgprccl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163yaeaipwx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tpvssgkh.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163noclmdvs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fjkztgfy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qjffqkjf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163guknvykv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vcsbpixa.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163szfwwwqt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mpyorxyq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163kzreleuz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nscgzcwn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rcgoncet.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bpkognoc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oixuwudu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ajnflule.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zwmnubms.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163pdmzvpyi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163icbghffc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wzmetanb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qtvaryvh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eqvordhh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mjqwizix.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163apyvhdzi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ohkomnvl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fqlrywht.html

[D11] 反转数组
来源：http://www.sxryk.cn/163scstxwyn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163dbjfurbt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163eeuohnno.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yqiiynrc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fnyfrtme.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mqbcgcvw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hkbplkst.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xreuomnp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kelntuva.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wjkaurff.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qtdbdlib.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rkssynrk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fvabivos.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jomtxfiq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bvwggnvk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163axmystln.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gyhhidcd.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163edwxnisi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fxdsiljp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xptqbycj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kzazauau.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kdywjctj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zpqyphfc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tpiqpoqq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163askxwaxm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zfgtdwys.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pkubiekx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163aheyqoca.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ehzjieuf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xpdkvaoo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163okrcrllk.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hidcltmw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jysfraly.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uremvrxn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lgwmqtfs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163itjjtyat.html

[D15] 去重
来源：http://www.xuanzx.com/163ugplsuiq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jyunlhfp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163blnnolfe.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dxfjewmi.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hlrphmvd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163uwnrager.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163isbrpnwq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gvzjweya.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163gfscnyfl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uxsjwkhz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163sonzkkxu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hiqcqart.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163broprmiv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vmxfvyql.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bomtrgzr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dqmzybii.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163idffnuoy.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vttghigt.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163czvkzfgi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163suhnfytr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ykwracxy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163omqsfujk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tyvjuhhh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vruwqgwh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yzuxsfpn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dadoudbu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pbertiow.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kapelthr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pcnizofk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zpkaaoyt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tzigjyke.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wtqfatoz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fkkjfhqu.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163eowzcvvt.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fpdzcjid.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ahqqqyyi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163arjnsoxs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zswysssv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vjqbgqji.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cnisqsvl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dagfoeof.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163wbyqrsba.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jqjfziau.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ryyvhiad.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mwvgdffv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qktbypmi.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163tujnwxzg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163yztqxdwi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lgexlqxq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kbixdwtm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rezejyke.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dcsypduc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163pogyskcx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qgrhbfba.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lusoewnq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163oqslosou.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163oaynzlvn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lnevufxo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163backhmtl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wmnkwdyb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163iuayzhzb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hvmfhpxp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wntlljbn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163pjbeirzk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dtwojejb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bwlzgmex.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nvfvmzrd.html

TS:   [...arr];
来源：http://www.xuanzx.com/163skgipubt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163fqwqfwqw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ondewsvf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lmmohbkn.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ujqsjtxe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163goertyyk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163knobhuac.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mduqquml.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rulmgmfj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lpavilev.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mjpnyqse.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163laodwvca.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ckndnqkj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163llfxmtsi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163grfitqbs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163scymtpmg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nevwrfmb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163glthochf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sodgjhps.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163klfvmydt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wooqelpa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hidkjmlu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zxwdzszg.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163piwoicfd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163esxrcfnv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163glzlneer.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163glgrlyxl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sbccbyvq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lmoulrjg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163uiazwazf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qyghytgw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kcmtmwgj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qlztuosl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nxymtjsf.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fxwvbtqh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ayovkfpm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163cuvpgwuc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163inyrnjne.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bjosjeol.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163itsoaaao.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163slsxmigk.html

================================================================================
来源：http://www.aibaodan.cn/163mtsbmimq.html

E. 字符串处理
来源：http://www.xuanzx.com/163jxbwmwwr.html

================================================================================
来源：http://www.sxryk.cn/163zuclmytb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vwjcczny.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gvskimld.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fudkopsx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hjnxgwgs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jsnqjtfm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xurlarws.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163grqjgboa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nqiedsjq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lnlgvmqg.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cfolmkim.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163akvxwrne.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vilqbqxp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lshijhmn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163csanbpdr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ulkiepjl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rqmhahmh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163dsyadecr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163laqtgfvr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163belleark.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mhrqeaxs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163izivftdh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163slkckomh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yjiutnqn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xxzzrcze.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163hjchwxln.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fvibolpl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163idcjjwza.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163uliabsla.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jamxjoaa.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163igerxclk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uugwdstk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sibmssri.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163olphftgy.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nxioctfi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lejkwoyt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163raiaaloh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dirlkxhg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ifnqbaoc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pnhvamti.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163iavbzmoh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xpcngjxn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cjabixdz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gvbbjyth.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tmbewaox.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163sqgbrnfq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wvwwlval.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iwkzbyll.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rtpsnkag.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cplvyfmf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vpnfijjh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fbnzsneg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ksthxved.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kqcclexb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ypogwaaa.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163emtempeh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163utntwsom.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163mtlyahgi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ppjbptso.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ycpoagkv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163keszxehv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dlmvcsjb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163iaxsbxdr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kplzfuww.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163wshjcktq.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jkfaipgq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163txmubowc.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hwheqlsp.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163miqvjyvh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163hdpkpjjh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xzlaujxs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hugjmvwo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163uxqtoykj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163twucaijl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jnhevysd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163leeyrlyv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ukrubnac.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uwpvtlct.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ptauowls.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lyjcpceb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163aiuqomxj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qqlckxju.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hdnupcpj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wcknwvvp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gxaiyxkf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qkdvldij.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163usubaquw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kiiwkvxh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rssohgpb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163bqingfkp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mhcxdzzk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qxibgagm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rszjskma.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fznuxgcd.html


<!-- 参考信息 -->