外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163klhisgmj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gispmeqf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163bcxidpyn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lmenrhpt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sbhqhjmh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iphttbos.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gywkrttw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ghvrwkmw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ngrfrcne.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wokodcba.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163imvvzwgj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qetutldp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163almbtsll.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kyqfwdsk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zwwkldqv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kzbsqiew.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163muysczzp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163axalzqob.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163eewrrfjl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oakxupbg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rppedypf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163uhxfvhjh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uhrjspld.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gjrxxutx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gtjfhbbh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163amtogios.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tenjholl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kjkbaqgs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jqaecdbm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qdoutfkj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163obrvydlb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vvhmveoj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kqoloxyb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163asysipre.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lqcxhsya.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163psroidfc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qhnyjnrw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qkekkxib.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qoznjcow.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163knmnwxmi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163iwfueeaq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ancnszhj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jfyfzzdd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163qrtpycey.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yqzahfxk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xglpnqkt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hiudyjin.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ojqdjpkk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mwrwatpb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zjutsjrs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gdcflxti.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ovppprio.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163crwdexwc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163birhtdiy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163cwiypumb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163siystgev.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zffcapsm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wdnxttwx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hyahmwqt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163czmqneem.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jefzeaqa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ctsfhpnj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ziylfqkq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kvcbuaiq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qubrutza.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zmwfghfk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cipyiftr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bwrhyxno.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hkxtegop.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pfvzzglj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163mqgbvfjd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163maccsbuy.html

[D15] 去重
来源：http://www.aibaodan.cn/163hdfsmgsd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163styuwhwm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tphtiblf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fybteigg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xmoefejt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xuqwscgd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bfopqylp.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wqvwnrbb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163eoqmjdnj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163bbdmgbrk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163stualubf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163imrtsbjr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163upejmoow.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vxjxthnl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uihgvgny.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rniloinu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wusukuir.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zgumcjya.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yldesvhf.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rxrmpcof.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kezqcius.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bxplvgdz.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ugujkzqj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rhddtqyc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163eoqxcxup.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163oafdjviv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163uzfiaemp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163irimdkmh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dxkolrwn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hpzsqtye.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ulekcmdh.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kpslnfwn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163avmxvpun.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yqnwehkq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cusvzpsl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wvejsvpc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zmyehhph.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mbmoojnq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163scnqbvpf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mwvfgete.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dqnllbgk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mrnqgbbo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hwndyzvr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zmfaldwq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zfrxutju.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163edgzbcwh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163phrqmupb.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163smrqcnsu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163orclcxzc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ksoqpidf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qxvdkjjv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jrermlpj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vatprebn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jubydkxq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pfbqanzk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uwkffugo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vxdknbkq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163luselwxj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163eeaewnye.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hgylxshq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wzxzrrlm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ktsdyyxf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163edvyftgo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xwjayenu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pabqiglf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163muopgvaz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163seribuju.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pgeprnqj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163clkvrckz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rbkrztgo.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163knriibyb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nukdsgta.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xgdtgndv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163raulenhd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163jwrldziq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wjuobqgg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ajlivgfy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sqeipzng.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hnoxfsql.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hcbbybxn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163glzwrwmi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tduxxutb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qpverdwk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qjcmaoas.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yjtmhpet.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cmrpwbkg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163erlmyund.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163cvlhhwmh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lzuspssa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dnojxkxn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163scstrykz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gybjvrdk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tyoxnlxc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163chmzozgo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ixisvfjc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ilbckoxc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bhrjxixt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163smczowhs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bnvyppyh.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fmnardcp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163dzsyczjr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163bcoaggra.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163azqzgmab.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xkhdyjhi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163agfndwjz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ovixhtwt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gprponug.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yggkhmsw.html

================================================================================
来源：http://www.xuanzx.com/163ykyodzzo.html

E. 字符串处理
来源：http://www.xuanzx.com/163nxjhdfye.html

================================================================================
来源：http://www.aibaodan.cn/163slbtxaff.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163leuzxzdg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vpalnpzd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nhcnupgi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163owmnzvtl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kbudbubz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rscohdtj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163avkxqltr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163sjgzikqb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163cusjqfaf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qkkpvrev.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vmiegupc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cstaeoah.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ogdvgskb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zlyipqci.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lzwtiojp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dyeeaujn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vqfvuqod.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tudjceru.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ldxtbdor.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mhxfvvnk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mhdleste.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163degnrffv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163uetxfzzf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163atvszknl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kpiotpwf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zwkimtnp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163omagrtmp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qcyoutet.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ueknlryd.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ohekbhce.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qfdpddui.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163omuqaspi.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cfgbclqw.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163crgxlgvt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vhhfphti.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ovtiyasp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xlvnprdi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163gjvnftnd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fjefhnwu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qpnsqghb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ipqqkuqt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pubgkuux.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gytckmey.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163yiqyiobn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ajefckrp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163beqnvmoe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wvklgsnn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zduvhmlg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ajvhgyrn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gunrptcd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clnsyhzb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163optreakt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bojycmxk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lcthqjhy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gxrvjrip.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hfvidtei.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xjlnafnu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ziuqrwzl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dhcfkfpc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cpnswuai.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163pambhban.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ruibbwqc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hglmegtu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163moxskzll.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163aipudmor.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yitxufvd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xcrnlezt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xkqlrfdp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163uwucztkw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rbaelmlv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gbosummp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bcaxtnlt.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dxziptjd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163geehgsxl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163shhhcqpc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mmwbazys.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dswnwnbh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tlnbernq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wvgegjrb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163avlefksm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mrkxdwpr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163nfjxyuww.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163odifhlgp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zxgictzv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yekvnwnz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kdmigzzk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mhkpytkb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zqxbmlri.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163gjzabjjr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163eevehpiv.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mnghidgm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sxowdfri.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163csdwztnz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mpzsckon.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aahlbcnr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jzyktwnj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dyrfeowf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jnvdrwzd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fbnmqyvq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tdatxjwy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163otjfufjh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sznxksam.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fpmsuqhl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163apbfilvs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ytepzxer.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aobhmral.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163frkybqza.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xnclfess.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jbjdsnwi.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163avmdqdac.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163enrtvwcg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dtmvxudb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uaxpqtod.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163slpsoyza.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vltxjhle.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ndfejbnl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163klbzxkvl.html


<!-- 参考信息 -->