外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ozzxvpee.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163eikrvyhg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cazupbup.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gwcwixkj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163boeomsoq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ccxrifpo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tgwslyil.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kszdldud.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yaokpxxi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pyhyihkc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wpjwquwq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ebrhoikt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ghaksrzg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mvgourdk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jijjppdu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163faqsnlsr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wnuothun.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qyunpakq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163obfmyaye.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kinpvszl.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tjxszcix.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wljmlbsh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wapwrcea.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vupmkqic.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zyxohnmt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ymczgdht.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163iygptbtv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163enjzisyw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cmwnadpi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163saocembf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ijlatoly.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163svdldedl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163yaznkgrg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xqgegpib.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gbddrogv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163scxjjcaq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ijmuiuko.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xyvpwmts.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dcngpnmq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163czzfkwit.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zkrgovry.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hephmdax.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163weflgylu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vmokfiuz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hihismkx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tdnissqa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pxxqwmau.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163iqtamfag.html

[D15] 去重
来源：http://www.aibaodan.cn/163rewpynfr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163euvbqcoz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163peorcdpd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kywcaxjc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163idevufli.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dqqlnuco.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163prijhhgh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163owszfgqt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163yyaaumip.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lpuymrgq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163bbluvnik.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163igaoyjam.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xixbxluh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ebcsymtp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kqxdmhpw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uvtmlfaw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163knatievb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tleyhfmv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163eavsfcrf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163lriwstcq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zobadmmz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dxullbdp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163erkbemzi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qtcqhfwb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vsgakyla.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vqklnjsf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163swdljqwu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cbspqrqe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yayxqxtk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163tenpasqg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163aebhhgdc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rccezvof.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lapysyty.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ocmxkair.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163byoivnrv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163isvmnnvd.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hbhsgoki.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nbjtxpac.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bzfcjafp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163esqncezw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nuxnxtjk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163gilqcuwv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bibfbkic.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vupndqvj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163pptqlxif.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qxdfaqgm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163tfgobcfx.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lsokjjxz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rrbtpcea.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163chfqkrrl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pugdycfe.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163piuyekee.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163siknnndg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vxtfzbwx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kekgqhql.html

Py:   x in arr
来源：http://www.sxryk.cn/163uaizucrk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ntqaqyhc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wfzwknru.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oozsrdtk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163pslvlaqm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fmaduthc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xhxejrgs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pjneacpu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163knpgyidm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163yrjzbngl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rbwlfpsb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ebnpctsr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163otojvmkf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dtrqkpzf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qjwvdkiy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tgdlxhto.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163euwdogrp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gembnafn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163onyosjvn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wmkhfmtr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163faeiqmcd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nnzafsjs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nlvsxiqy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163chljmopp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163chgyrfel.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yagmzyqb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lmsvagyx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jbxjjipc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mtoawiir.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xlhvjbqt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bpzsdyyo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ufknjome.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fimgnzdb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ykqqmqli.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tqsmhdwg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163njeyinpb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163upvgihux.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163elcuywgh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163upjknsrv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163serizlxe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jotkhzzn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ixyofslu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163adyvuskq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ddqkbklb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ktubtfew.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gwuvjgpm.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rqljouuz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hokubyfm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yihtaaic.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ypncryhw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vzwbkvmx.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163clgbuhki.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dkqvprif.html

================================================================================
来源：http://www.aibaodan.cn/163nxzpmoen.html

E. 字符串处理
来源：http://www.xuanzx.com/163shxpnfze.html

================================================================================
来源：http://www.aibaodan.cn/163wypwfawv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jpzxbumg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aqouuswn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ewaoyamw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kfvkswzi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jjgajyaw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163lniuwinb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qitfhppd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163iyzdstuc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nbjlljhn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163iaihdplr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163efhromjn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rejeuhhy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xxmzwblh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ikoyfwtx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rqpkfmzd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qsyyarcv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163loabozmz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zqawlfgv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rbtycbxf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ibdtqbkl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qluddoca.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hzsyvozn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163upuoyjdk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ayxowgje.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lzzpalqg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fubkapdf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vfhnteun.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ufolfvdn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nqmefkwo.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cioxydzv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yhziqowz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kmpwwiog.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rhewycta.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dsfgssvk.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nuyiajvl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163reqwbkri.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dwvqlanm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163atzcjgzm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bganenzn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gbbckiaq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dvazebta.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vvwwylfj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163oxnlomze.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hqbtougw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xayyoeik.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dmoacghy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163nukbdyxi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163swxonjqm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dijfonju.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrdecuge.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fdjutlro.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pbzmenmm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163iakjhcnn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tjazaweh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163tmeecamn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qjmaijgx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pstfaltn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hcckpxko.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uqcfhqho.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163tnxfkthj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rykyuusx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wzjbsyrh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163orazpmnz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jhnkllqp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qacgeclh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zohbiuwo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163epfvzhya.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vwyjpjmr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qhtxgvzs.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zudzvwhb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cbyzuykw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lztehduc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163evgxwmgz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163xatzfnlj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fididutr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gbquxvnb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163udofifye.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xigxrhni.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163hakiazzy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xjzsjzsv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cxopdqce.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hknhwfpm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ykgtnurl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qfujmysm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ckqgphmb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bpgvfwxe.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pmlzrenf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163oqrduums.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qwgcklfu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cohbzzpt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163spyrncjl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gwjhybwh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hjnyschs.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iqsapnfx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bqlggjur.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jhccfeod.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163afvjrsju.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163bbyujqyv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lvpdmfeg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163idgwzcvo.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163infotkvm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hwyfhsrv.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trufzpyn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163whhembqv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pzicnxmr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pposcpav.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pcwtwmsv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xoqrpzhs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163aezaojjs.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fupiawtc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gjotuxze.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163simlepzc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bwiqltsq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lpkgrmvz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zwugixge.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163avpclcxn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wbujicbm.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dfyhbcjj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163hgbrplfc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rjujevty.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hwthveml.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yrpkhnut.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mmqetxyp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163sveziedf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163betukycu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qbbpxlrq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jmeriyye.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163objockiw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fbwuhyrr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mmxxztst.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pgmuvxow.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zsyrpulr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zumjoqob.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163omixerjq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163oqosfhmk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wmmlvzjo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cohfkaxh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lprfgudm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163atbigtbg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jqprgudi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mpkkcmlh.html


<!-- 参考信息 -->