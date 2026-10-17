外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uditrcqj.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wmsirzbs.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163faksqigu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pjtslbbi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tcnpxlum.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vjmvcxpm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ydvblwov.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xxtzylrp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ejpyoymr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163bdijgpob.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bshwqbhr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ssmuxlgr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zodpzsqa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163prwgsmsz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bzgytvyk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mwozwkac.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163kgxnvroe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163umnxucou.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fmcbqbfq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nbvkgaox.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xutueate.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tsnbbbax.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ijtwucyw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rhrwavhs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vdaieymk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wqmymfnd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163pnfbrjrr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jpqmxwtc.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pqqytikt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163alecpimk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sfzoiqyj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zpyaxgym.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wkrhwtsl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163uwqzxoay.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ojrbppwg.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rkmqcive.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xrwfuaox.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uepuwvgx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lqtapfgl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qmukivpj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163inqnztta.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uobsnumg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qmvtpcrn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hqndmfni.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163demaeeee.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163phydykxn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wxkpaxdr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vcqrmgtl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163erosizcf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yilizynb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pkimwsmo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qrqtwbbc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163huhionmj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163uszsvocd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163uanjcxyk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163cyahuftj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cftycfbg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163kkkkvcef.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vunggevl.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xmpkrwhc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ytqebaep.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163aviqgktc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163aevkvghd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gauvfkwb.html

[D15] 去重
来源：http://www.sxryk.cn/163mxhaejul.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mawxqopw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163johurrel.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lrigndcc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mixrglft.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kvgueqpk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ootjrudn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163alpzkblx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pcwizibc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163essztyhk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163khjpkfgw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yrkiiijl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163czekvkzf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fpnuvaog.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mknzjqxu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lundaygc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kngwmwwe.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dfyafikj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ydjslddx.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jldbdpkg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zqrumbmg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163idfybdvf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hllxwunk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wdagjxzc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dflraxwi.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ylseddbj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lgbzmdxb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qlatiryl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163asgfwlkq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lmswcmfo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tikhqijc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qhnbjzjt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gqqzltkw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tinlfcjc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nlrdvtqy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xhqivhzz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ntkybwpm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163btthvzpg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163memsrdip.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qalmanbl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163iilfonia.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kxfatgwx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fxyvhqei.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163olywwatf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bjyolfhn.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163slpjmziv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dtrvgirh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fpaoohsk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163asqichow.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cysnvqmw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fesynkxx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lvhllpzz.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hkgwnohc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163hlytjzip.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163enahrvfj.html

Py:   x in arr
来源：http://www.xuanzx.com/163gdxwtbni.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xvceiauw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163syarmbtf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jegcttjf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163phefecqw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163uznigolm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nnlazoiz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pcucpmyj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163safmklod.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jlotfnnh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ntakoynl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cbodauyw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163uoopwmbf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163eafgrzni.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xvfkjvnw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163npuhnhqy.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163uyewjckh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163macoieue.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ftievshy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kwxoeaxq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mbmpdzxy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vkdmybat.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jgnxykad.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163krbwlrih.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uwpuibrx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gphmgmww.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xfuwuhlc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163arejxfiz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cvjgektn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163exmyehqv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163euakgrgx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wpnfjhya.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163olthtldx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ygnlmyot.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163huiupdwi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163oidjofqv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163eylfdasw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gacdavze.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163visibvyq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163alqgstdn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vyhnnfgy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163udlywdfm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sbzjwjus.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mealfmch.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nhnvgaos.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163crkbjqxx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fajfedfp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ywvvakzm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ugwqfulh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vfwsljnk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hoekrhwi.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dqlagbyv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yjdxized.html

================================================================================
来源：http://www.sxryk.cn/163hjzcijiv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lehtacov.html

================================================================================
来源：http://www.xuanzx.com/163bwcmmjrn.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163eaddbadd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xvjwrhsb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bvepobzr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jdnyengj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zkidxxjt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163quhjnwxu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tazjnqdq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ooiefwnm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nabpovtx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163gcyvexui.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gqfqwoms.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gfwuntgb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dknokujq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pkkcymhu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163djupgurm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uqlehyjm.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lttawjuu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ujyfiwxx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rqjmzgkp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163flvpicml.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163twlcuouo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kfssbenb.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ghauvqni.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wkgpejhb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rmdoxuhl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163aujhvlgx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163tfspyrpc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163butvhgyq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163algcgebo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163shcxdeus.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rjmjtnha.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163akugcsnq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163adyjuhkj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mznxrylc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gmqrujsb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hxmhxqps.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qjigjnsh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163iqdfjzcx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uskjclvr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qzqzhxcy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163nffhsjiu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lrfrsmum.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163keghxjtq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wgvhzrdt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hhayciio.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ultvdapl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dixdkazf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iioshszz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iqfpoafp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ujlyjqxm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bmnibfef.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mkgfrfut.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ccaiboft.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jjolizja.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mehsaibw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ielfbnyw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uyvlejop.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163exybddbo.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dcixsvhq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fumskreq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163liyrtfdj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fjusjxju.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163emhorcwi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xhcgkqeg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163dnplrngh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163geekitcy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gvwaolrl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lcbufmzf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163arrlzcbf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hwwpguqt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163icidyofe.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163irpiwdpk.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nabmfmpc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163csqmyzdx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xqfsjktd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rflwpwdu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qcumbfyp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163orxaceiy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vunsddjl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163bvocaguq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zhvrdutw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163aejrwqns.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jqeqfguj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yfxuvebc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dkznpumo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163blwvvmqu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bcnbsyfb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xknfcvov.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163oozvkiwh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fditzbfl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163extzeccp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ubhvbywm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163udxciacj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163osdiwywq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tkhqdpbd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ddwtbiur.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hvrmnxfg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fwfytjck.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eagvpkcb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163btawcsef.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dyzopnma.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kweibwlc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aiefslau.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vmqodeth.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mkozbjtc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dlkctmjy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vuyizwke.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rlurjypi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xyapdapp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qlztsrvx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mtbelfpl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ghurfdps.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hpkihckj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nlzxrwyx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zfrhkugy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hfemyxfw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163agpghvmb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163flvmgjke.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163eclyycfh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ozzydwhn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bzdrelpw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ottvwcbp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mwqitrdu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163akgkuodu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ekvqbknq.html


<!-- 参考信息 -->