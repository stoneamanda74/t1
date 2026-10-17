外链999!wailian999！

Py:   len(arr)
来源：http://www.xuanzx.com/163cxzbthsg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wwgoiyto.html

JS:   arr.length
来源：http://www.xuanzx.com/163gwxyurxe.html

TS:   arr.length
来源：http://www.xuanzx.com/163ezbjbknf.html

Java: list.size();
来源：http://www.aibaodan.cn/163ssxjmmbb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yyzifumc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163amprnvvw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qfjzhpoq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163janpbtcw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163yqmxauni.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ousltigr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163paxgczaj.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ozodwkop.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gqgqphyt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qalydzic.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rkxykzwo.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xfbpnmcs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wcovuyod.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vtwxghdb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rvaejosi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bbqlsxvn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xaewekru.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jcgmxhxr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163mcnitgtc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163adpckxjy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163klqzbziz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dglppccj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tedzprcz.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163foadxill.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hovtjekl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163eifdowfy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163brnyujcj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163yxmxtjav.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163odjjsqph.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163eohngexj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qyxunnfb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vsjmuika.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wgicvvcl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qvykundf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iusoseri.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xtlhizvm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hwvfmpgt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vidqgotd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ivnukyhb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vsghwtwi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cmlubpzo.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ijzajdhk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yhkjcoom.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wbewmcgt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pmujbrkj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zuxdfbha.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bhnemyhi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ryutwell.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wtgtumlg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qekoxaxt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wzudxtgg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kthpmsve.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sriykeke.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163behcbslp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163hmnwdytf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dhogtgmt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ejbiqfip.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pfbzvmlk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fnnzrghh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163cmqovmuu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163auoefuln.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163krzvwnxn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zxvnpcix.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jchdyghq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163chvmmddt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mvmfmyno.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163mznmbqbs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zjdpgcir.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dlrjyytg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163abpdmaxu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pzguztzd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163whvqxvvj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yqrxhgkw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zgywjjha.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lhapacde.html

[D15] 去重
来源：http://www.aibaodan.cn/163eufaczss.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xdyivkkr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163smdjqnpc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163idkfbmwr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hxsgruhh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qkakafqs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163imfzjiqc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xpzhyqft.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pmhyhcjd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163anjmocpt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ephvyctv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jlctjmdn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qajaygqb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hvkwzbcy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jyoxfulb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163eskvtzvn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tfjotney.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163cvxstjtl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fszynjno.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rpgxaegc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kohviyhe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jufjlxkg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mcezgviw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163aimgdgeg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uqggtlsb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163mkjgszqb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163fzbfvyuz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qvpkuyms.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163eiltocwi.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xjmdxduh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xsnaxhoq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163veocpcoe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163hqejehdv.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jdeehqcf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163uialsyfz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vhhiedar.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nldaanvo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163idvsadsc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163mjyolaow.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163unjxwxlb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cmhqwqyt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vmcyuiul.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uoplbewe.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163goweyhld.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163enpmxdus.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wkqtoymj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163trfvykhl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163iykxbvgp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aginqbif.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ilophigf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rfetalrv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zoortack.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163haatkplv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rzzhtmmx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163sysweddd.html

Py:   x in arr
来源：http://www.sxryk.cn/163lskzxtwv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163nnmoyamk.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zakyvwcm.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jtnkqyke.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vpwuekmm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xuefstoo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gobhoywq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dyncsnhd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dmupogzu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163afnnloup.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163noakezqc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jfdydlst.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zgxeoocz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ikhknlmo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ohxtgfnz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163rkwwyjqj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lbecxqln.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mgekkdrt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qgnrwpgr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ihwbgpnc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nxjyuygq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lxvjingf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kowgmzno.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163euounthi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163txhyvcbn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ikqtjvqe.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gvtwdnua.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163opqloczw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xotkxjzy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ducndegc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sbenwwwp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163idtiiofa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wxuysdps.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163eivegbdx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163qfjmdzvl.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pikikkno.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163iusofnhz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dsmtuqvi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pducppql.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lgeufrvq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163uorlderd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rvdffetr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163obvlgekb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zhpdmowj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qtgyjmzd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qvdrjedh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163synkdyox.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163livudmpg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kqtzsywo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163djoezbgh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pyztnkcn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kdzsovux.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pazlxtqz.html

================================================================================
来源：http://www.aibaodan.cn/163daiffniq.html

E. 字符串处理
来源：http://www.sxryk.cn/163buidiyqi.html

================================================================================
来源：http://www.aibaodan.cn/163qcnkfwbs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zofiggwi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tzzmyxyu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163eckduxbu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yeddpgxv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wcrsvmlu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kkvjxjcu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nsxogdly.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ulnfsyej.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lgdqrmce.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mzewyofv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vwxmarlj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zmwmdprm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jaygcsel.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kpdfnqsz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ihdkmdos.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zjsgmgtx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qxnpeojo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kyffvmvz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wkmerztx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yeywxinp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tnencuwl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ccavegig.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ktntvomo.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kltezuqk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xtpvysxw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163utvwvgiz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jtryhflm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163idctzmad.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bbgeymmr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mzaoknit.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wqgnkppp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lmjlxedv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163yclckzml.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dicqxqbl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yilolkoo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ouanlgji.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cqagobij.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fercesto.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rwshdfux.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163aswxgvrv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zqmwkyac.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yukgasnz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163eszglkcv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163skcihxcs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pjcanujv.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mvehkxgq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fjctjoho.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163yjhjdhcb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fucqhogm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gjjzexui.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xogxmnjb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fnylidpm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163okwomgpd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163iidtssre.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qpxvpqpe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ytpoffxn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wsefdyvp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163aqczfzhd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163awjbywop.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dixfzpbt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kdmoosjw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qxnqcpul.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163nxorampl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ejepfvii.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fbqygcfl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wkueejdn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cqgumfzk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163sfcnifrt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ixgyjzez.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mgqxzgrm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ljdextlw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dhygrbuk.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pmcpuike.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ausicrej.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kenirufn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zqielnpz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pqesxgew.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gevjgkrf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ttakwhov.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163uzlpitfb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163aupkwpqz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bhmjwygj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cdncnmdy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163didsblul.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uskggswb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wwxvxvza.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qcrxrwst.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uhhgrbaj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163arkjbnxe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ouveozsr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fxflufwu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163lgmtrspa.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163sruifbyg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zrkdmnft.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163voqkdevr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jfazaena.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gxaxivjh.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dktjepuj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bitshpvl.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jqihxyhy.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zuaawwlu.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zugzppwn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xugoirzv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cqxxvsbx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bruoehab.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pyjkmngp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qssqocxk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qecaqclq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tjxctxpt.html


<!-- 参考信息 -->