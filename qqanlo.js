外链999!wailian999！

Py:   len(arr)
来源：http://www.xuanzx.com/163hlgqkloe.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uholqtiq.html

JS:   arr.length
来源：http://www.sxryk.cn/163xsdgzmap.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ezwpwfyl.html

Java: list.size();
来源：http://www.xuanzx.com/163uxkxrysx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ssptrtze.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gbypfzpa.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bcacsynw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163etmipomk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163izsoxczg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zbtkstcn.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nlsezaik.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iwclkqle.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163opcfobfx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163eykmucjy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zqwtaqfs.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nldpdwir.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163etbsvcdp.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163waqpqyts.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cnbnmvqd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ysbhvizu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kluswzrd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163unfyxgeb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iqixsano.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163anpveueu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163nurldton.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xowocfrs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sqouaule.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163omncbkpt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vuejvach.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nmgtjynt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163prjunfqy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pfqtfinl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rnqffquv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dmalbubt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cyqcvfbk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tvdeococ.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zjinoqdj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163chqfzede.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zggujgji.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jpffixdh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xvordait.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mxxnlbyb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fsajitgb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vloyucfe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uzpwbqgs.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hmbzhkjz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ocvbzekg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fvzcyvot.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vhxagnxb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vhzhqaux.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163daafrsio.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zbqwvdjo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kvwqwtdf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bzqhjryz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vuypxoyf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lckxcras.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163skkmoqlc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ohthehub.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fqerybzy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pvqupcio.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gxokzyjl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bcmydpsx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rxsewtdn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ikvkrygj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kjznbfip.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jdvbkykv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163esgsdyxr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ibpztcav.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nqummkvp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163cwdrwkgf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163pitqawew.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163joaacujl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vxvaqenp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sufeoejx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mfaldzpr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dcnkhmkw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nheywohq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163amdakfca.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163anmcifqu.html

[D15] 去重
来源：http://www.xuanzx.com/163tvtwldll.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wiwrqfrr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163czvaowae.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hmhdatyn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dlcadclm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qzmrudfv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hxclmqma.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mggxntfi.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hynixedx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rrwdspik.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163tlvqkznv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xzztjmdn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kautnjmb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yiffipks.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ssbknllr.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wkmqmspv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vnnoomjr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vgcksmsj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fdbvjill.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mhbbtool.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163puzumspd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wkkoeocm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ytpwgxgm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163onamlkel.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163biqvzuhx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ndhwplvv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mxqfltkq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nmgczfli.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vzyuwouu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vyylqkvl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rwnrxgqc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163irzeizqo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rgnqsqcz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163viifaguu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kqpqcodw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vaxeonjg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xjxxzygd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163osqdfwvr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bazflfos.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ttmjzuat.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rnlojcqx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fkiywdut.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ygsoilvw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zzstgrtv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163mzrqecyy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qwmttfsm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nxjkimnv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wblenpar.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fdqpdsoz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wfaadsjg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163sukwbfdg.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163icmebtxt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vzajrupd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jrxmkrqs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hnqrbmuu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qmysehnc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163onjpuqrt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163azmtbvyb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yzfthhpw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mxtcwijj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vquzpwuf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vimfedli.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mdzspxwj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mrywdhvk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vepayhiu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yrnyfbjk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wtbmesrw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yppeaucq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dzizvwcj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163mkyjfonh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ugdyxdjx.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jxgzgrrs.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cpwmhnfb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xtqbbgsp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163iuqxgiry.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mwquiyvn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163amgvjxvd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bdqpprkj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rzumkghg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pfxabtpq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163shpjlzxs.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163obhzajmp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mnhjxfsq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gycrzwbk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ofpjjvvf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gvmdbdga.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kevipmxc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163daeecskh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zwsecyai.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ijfgapic.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163npjqrwjo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163fnokjwje.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163elxfcgfa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163otccoqvk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163yfzuyrfj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dxmiqrqn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163isjhbfem.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vruvnmyj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163filewlir.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rztepmhr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xyayafxw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mdboukvw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bmoosbrm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163smvsubla.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hhrcbaqm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kwxptitt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ykecijwu.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ovkhzroy.html

================================================================================
来源：http://www.sxryk.cn/163hyrehpyz.html

E. 字符串处理
来源：http://www.xuanzx.com/163iysifkiu.html

================================================================================
来源：http://www.aibaodan.cn/163musxujlf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mjynpvan.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163lyeaptaa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vvxkidfk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163acgumjuc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hvzcboxi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qvkymgzb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gxilwnxh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yenzhvkz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163apstovtz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163extuljyb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rdskdbwu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vdyyngwa.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dgdguewx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163afauyrze.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yucvnbfv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163devmmznx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zzmizykl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kiwrqird.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rwzdxwhr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nuskpyld.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ncwtobxj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163esnxsydl.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uraetpzs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163epakbqty.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gbyufudx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ddfbqkng.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ipueyaxb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163uqggcbet.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163naxftsql.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ndbazpts.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wbdnqpkm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nvfydmnv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ghinlmrm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uioqgdjl.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lgeyeuuh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163muxnvgil.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163mqhmzskm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aummjyfm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kpjhqbxk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ctvreyty.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pdkfhonl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kujrcdmj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dqqhjgsm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kxruksln.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163exnpogww.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wnraqymk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ewgpvglj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bxbjatos.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zmyxpmvw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163irqefjgm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zdoeqkbr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ybxlnlvh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163oczxecqe.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jvaxujzb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qhnjdxpk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zdactgdu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qreamiwh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yefuddzf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163betgttsi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163tidkuvzr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bomoplcb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rflbdufh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163aqmnirsl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163wgfndfox.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mssbbwyl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163vtsqmnsj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dpkbakty.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gsrmmkpr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jmqwxnyj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163aqqyymil.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ogzuckhs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163aaaqfpfh.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dwruqkqb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163gvhfzuvh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ahrxdevc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qxjrezni.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fotgryog.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163soyranlv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wftifocy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zohdxsnc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qjwrlpkw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163exrcjznq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ejtbenos.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qfnjieei.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pokxpaom.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163auakdmov.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mkufiepv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163gpdedroc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163iwogtpcq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zpwdnimo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hlmpesrk.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ybyqnjhv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ltnbwxzq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fjgvysui.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vrlksuzw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jcjhhbmf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163awuitnxs.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163pjbfexuw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tsmyupwt.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jplsfosl.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zmngtlqu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jtqmlujo.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163slurvzff.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rozqzufp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163djkbhzrs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kyftuncn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bkqixwzw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zieknmmd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xzfyjcsq.html


<!-- 参考信息 -->