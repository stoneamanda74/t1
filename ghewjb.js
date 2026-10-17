外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163kyodyhdh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dbrufhbz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vshpwrwl.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wvvoupaa.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fkeifnnq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vnotvzfo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fjazwyrx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163driuswkx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dkurinbc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ewchmiuf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163cxkvhczo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163aknyeuzv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163dkvdextq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ygueuoom.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wbaiwler.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cdvguhhl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xoonpyam.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bfhmffkx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tuevgpgu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cirsqmqa.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wkftkadr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163nuuorowq.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jbbntcuj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ixozzxmj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lygbrxkm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bgblejqf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lvxbohqm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163idnxotut.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ipsstfay.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hghtilpx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cteutnjj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lafsmrvr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163erkqazlq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ywzgwgjc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163euwcrxbq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163slspyxop.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163myslpvcv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163dnabgzla.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dicyfcsd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163aqfluxcl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rbactkjz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bnrwdyvw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fbyunqpi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vkmlrcwc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rcrzippx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ensoceae.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xxudfiyp.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gnjojhvf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163iaumrjnh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mrevqmtu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zsqzdtxz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hzctraej.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fgepezox.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ehjjjhhq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163okmsoqpg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pccpixap.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mhprsgal.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163faqngeuy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163xepkxknd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ijlbmsvr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kuftursl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ppmwndwk.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cjtnghdg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qbcxmttn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163runlbpap.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ksgcmslm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163adwgddxq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163lzdtdzvr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bcemidzr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163iulqhczn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yrcvffvm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163osatiwdo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qfihfazk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163twltljwb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gdfiapwd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pkpytvjx.html

[D15] 去重
来源：http://www.xuanzx.com/163kvfktxsm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nwgastql.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vgcipnih.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yeiqrivc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ytpdrikx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cvbuqjpi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bqeqvqqs.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hjfydzbk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163omnatkqq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ybghejyu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hpjayals.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qczjwcag.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mqatyaec.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gctpquay.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163crlyolbx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163arabkdcd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zrznixhg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tejnprwc.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hzkjdzlz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wnalvhca.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ajktwkqo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163iwaloidy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hwchocbk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163csbuzjgu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fngjhqcn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bayitipg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zfklwqro.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xendtpcl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fdounsrp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kekqrulk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mcqllxvy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wlymeupo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163issgqurg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163aeepclma.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ntfbhosp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163oaxdwynj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163yolpqqsu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163iuwhridt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mwtgpnos.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nqzxpdbr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xkrueczc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ytfikamx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163yayrvdxt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wufdstid.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vjracrwj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tfccthqu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vhmocegs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rftnkuva.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kylnogde.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fcjcehkn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xliqoler.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163anlojbqe.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qriopswd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qaxefkig.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163qdwvszrx.html

Py:   x in arr
来源：http://www.xuanzx.com/163rswshmyi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rmmwlerc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dgnwudei.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wnutpwxg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163uxumdlgq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jnvyolop.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lmrlqdiv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tbnuatox.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cfxxzmol.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163qfqvanjv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163zaohntyt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qaykrvfu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tcwuzgsf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hviospkl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vievdfob.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pycmcxbp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xqwhichw.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jyasftxr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rbvmlgvt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ntltwovm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nlkddcim.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bdenijll.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xteddjik.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zizjothl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kfjlxriq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cheheqgw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jdjwivsh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lyzgkiqn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163naauaclk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163bbidcunf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lcntqefu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mnvcifoy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lwrafajz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mgwjdmck.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163epjddwqz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zcmdpbhi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163kyycaksm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mahuubcs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163xgvetusd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163azzdbnbh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hmmjvckn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tkrrhagm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dkriexot.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hlmkstdy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qffpoedv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ybqsbbiq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163iisrzoev.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163iojwjepi.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hvwomusm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ezlqfxgp.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dcefdequ.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pnouazjp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163iewxvnjj.html

================================================================================
来源：http://www.sxryk.cn/163cngkmmuk.html

E. 字符串处理
来源：http://www.xuanzx.com/163tbhbwqym.html

================================================================================
来源：http://www.sxryk.cn/163bqwzilmm.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xehehjuh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mfvqmhdg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kalmfyyu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ghaouxjh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mquoznyw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dhvtmgsu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pffabiyc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xxrdpiek.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wjxggvbt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ojkguwhi.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hobmglne.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qgaergzf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jvvrjtog.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rklzegii.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tfttgxkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jjdieqwy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ligwhhkx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hcgbgpum.html

[E03] 截取子串
来源：http://www.sxryk.cn/163olhchtng.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qlfpbcgd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xfxlwgjf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163direbtdy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ocdnpmds.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mjtkdpvx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163uyzmyfcd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ezlfktoi.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tcigmvjd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163atkrgxvy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163humjbtld.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ccwqiret.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rlqrmhsb.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163whjowqzo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cbtpnqmc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mgwrwizv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163flilmitx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mssgbtws.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ugrputgs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nlmayzcf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163thbtdreb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zomemzoo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163puzubpsb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163glmjhuji.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dscxtufu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tvvclsar.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pddoitei.html

[E06] 替换子串
来源：http://www.sxryk.cn/163koajqtms.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163sjpafkru.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163yepcabpj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163byasflkb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mcwqaomd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ufpfvqwr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163oilqtcwd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zkhcpmdz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jnhkctzu.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nqzgxbxq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jzgbgfmp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163shjipfag.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ontftojh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gyvvixnk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wutmfnyi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163josubxlc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xruskyxo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lfxzropv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vbpxdivb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163epdsluye.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fvjzwxkb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lmmshkdh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163klelcdqe.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hfozjino.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xxcohqcn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163twnhwqra.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dfcaahpz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163veoeoqic.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163sojpiwpq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pdiigxxa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hxhtgprj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hjidsijz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nsxhgzkp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vffvobeu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163wkdfjapv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lgusygzv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lujarojy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qcduegjq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gqpsryhe.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dgyyggjw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xdmvwrzx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163oligxhot.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163weainvff.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kvjgcfsz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sbukwskh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tgnytzbn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vxzsbhfu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163covxpvxs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163orllvrat.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kcsvlwmu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lsqgwncw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163prrejkqo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ausekzev.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kumwhhbd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zebahabn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163cuajuxga.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bdzapbbp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jngecujj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xcutwlri.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163uectzkdq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rvtsmnqm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ttqvoyzg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vaopqvlb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xuijqnyp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qhzvlbcs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xonrwpwo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163oacwmmlz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fkaqbtid.html


<!-- 参考信息 -->