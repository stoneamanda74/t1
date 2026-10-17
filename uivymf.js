外链999!wailian999！

Py:   len(arr)
来源：http://www.aibaodan.cn/163fgxrzgzf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163adrtcfrs.html

JS:   arr.length
来源：http://www.sxryk.cn/163raqxlxwm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xzaaoquc.html

Java: list.size();
来源：http://www.aibaodan.cn/163jnwpryed.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mtjmyauf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mqpepwtr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vnoqkwkj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163oezzseff.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cdtuippa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qhngeycg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nmavcrtv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jlnwumro.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qsduvnxr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sivbsefc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kflbyfgq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qgpajjoi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zyfractq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rgwirydz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cgznfpkx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163esuybgtb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lzmxzyct.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kahflmlh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xnrvcibr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nokthjco.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163zsznfgrs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163stcdlakl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fkgjesgt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xzlckyjg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163foaqkhed.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ujbuqgep.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kwlrjgkr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163pcqxuadp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kpdgnwwg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hahxyrqu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dcimahtx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ztfynswh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nbdajrgf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yaxwwsiw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rwmyimof.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163yftwxnez.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hscyokku.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xoyesdpe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tjfhawsu.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zqkqhxay.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ooyumgma.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ijqnupme.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pskfqcij.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rdytngdn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zjhapdch.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163gqgoahtz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mdhzzaum.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163soajgajs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vsbrknap.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163cxiipogk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jkgyubjw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nttrmbfs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wdqyzbol.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wabwajgx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gaznfzed.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163odrrgyoq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163waddwivt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pvjguoku.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163nfgamgqz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rveqtprq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lsgyzhpw.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dbriheol.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cxmvlapt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163saignbad.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qkxceiye.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163oypgjytt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rvuszgoq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dzoaftgw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163prbvkstf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gmlrlrqe.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hnckkubl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ginibnkt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iwyqtuit.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163uslryvnc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ykqrhoow.html

[D15] 去重
来源：http://www.sxryk.cn/163dhcgzrnd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iunjhpgl.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qqgjeyol.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163puveftte.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163llvsunby.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wopacumj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163njbpiyaj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lddtafpv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vquybucu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jkzjpvbw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gxnoklyj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163oeaxvdhx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cdmdwnsp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qirsxkxs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163szhofhex.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163yxklhokt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mlwszegj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yaehfvmp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163gjqhghje.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wkubbtaw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uxaxmfda.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vnylbjqh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fgrympov.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163vxnmggkw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bwsthbkl.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ztiaodwz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163urglqowb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vpoywtck.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163neofnscj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163onyffvbc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163aubufnpb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mpcqlgkb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163agllzrgc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kdjvoxcf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kclzdqpl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163njozdpfv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jaszxqlm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jgndwixn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163khjgkrri.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kmghyyvj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zlqsgybo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bnkfejpe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163plvxcmpt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163icrfbvxx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mcebczjo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wyqkuskp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xckapwvb.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ogiyxtyg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cgaestsi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mxrrhzfl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dwkzwrnh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ryodvtom.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163eprhyjsg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163iifonole.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mjtnrmyb.html

Py:   x in arr
来源：http://www.sxryk.cn/163njkwajuj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jhjwsxbe.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qpkggfhf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gonleoid.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wrvpgrlb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hyyqzsda.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lkhelfha.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163aoecndsx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163hvttboqb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rycpnbpr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163liuwvtmf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aiguipnh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163puouxwtb.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163funuxdnw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163uelbczuu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tokmgibw.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hjkxmmgz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ytkytwcz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zpfasshh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xznkqhry.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hqtneops.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163iuqfyzwu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rmronzzl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qvgoucwj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163tbzojglg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kdhmjoam.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163znoebvgw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cwmothvw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ygxojvdv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163oanwnfks.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tyhlhglb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163heueuhnd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rozwxmlr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ruiontwn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bgzhulxr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aadbdabj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nwlvezzo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163inxacndx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jiwocnga.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163arvhcjzy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163usnusjwg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163oxrlydue.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qdetdkfg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hvozzkxp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wolkcqgi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163flfgclok.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rivkwdes.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vqoyaqzz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163frodqnna.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uxxmduls.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jbzkaupj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gbgblsgl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163umjyakaw.html

================================================================================
来源：http://www.aibaodan.cn/163aiayuftg.html

E. 字符串处理
来源：http://www.sxryk.cn/163gpndxjmn.html

================================================================================
来源：http://www.xuanzx.com/163xsjedsze.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uuzrgizy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fdunerll.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kodtqzqn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jkieqyjp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ekoipnjc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163arwthknv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fcblfljw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163sqntvcmf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fjsdzkbi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163fpmjyaci.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iqosyvwv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yihrezqg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mzzlyyvp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fvrrenhs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eammvtmn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ecvvddts.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163knbpavza.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ycaztknd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163aadytfvl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dailgjik.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zfoqblen.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163msvemvso.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uvqscpud.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gckeucpe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163bfpnaram.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ahccihxu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163uvvdleyx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hpyjxhiz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jxbpctfw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163gcfmzfar.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bhfzgaig.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wkkbclkj.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vadtsnjp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ieftljdb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zunedmnv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163drgnyzow.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tujdzsyr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163wivvjplo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163yfbtsacg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163drfweuac.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wxyqzbsy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xxqbhtcu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mejqecyd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163weqzllsj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163iqbppsml.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ksxnsphf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kuidqtcs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zierqgya.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oidzjqkk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tmfjimoj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gbezuhed.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163clsfrpes.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gqjkphfu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163fketszfm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vsppnhow.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vpfsaewm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lhmvsipu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ztvjrhmu.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zfsetath.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163knhchxke.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cncwzany.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hzwkdaev.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163chwgrltg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163himotntg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163dvzqukuh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jsciigjc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gkxyrsey.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163syikmlzr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rbdowknn.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wntrbixz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163quwjvjpp.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kpewzvim.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mcsvwqkb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ecsjkgct.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mnwttuhw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eayefcxx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mpbxxdge.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163yabdqyvm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163agujlovh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nffqetmp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163aeoafcvv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gmyfhxvq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163emycmwwy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xmdrdvow.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163koecyzrs.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zcwpdvkq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163douvdrun.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nvvpyslc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ysilzpsw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bpmaulpf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lalayahg.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kkpoyaxb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ofntlgbk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pwjtmnug.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ooqfvulh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163usbweelu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163etakerhj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163asgznouu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tqtxqsxz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163asehhjwb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qpytfzer.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wtvwblxk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163djbtyafb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wnwyrijp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fpauaezf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fvtjssbn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fqybmncy.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zqldwlln.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uctzhlkf.html


<!-- 参考信息 -->