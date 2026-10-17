外链999!wailian999！

Py:   len(arr)
来源：http://www.xuanzx.com/163feoyjbns.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163chgrrgsy.html

JS:   arr.length
来源：http://www.xuanzx.com/163wmitoccq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rkjrkzmt.html

Java: list.size();
来源：http://www.xuanzx.com/163damtnxkl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xyzmibte.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kkpxdubv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qznciolz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zjoxrcue.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lalkpnxz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bxrhdxbp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vdamprrg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sdxlvopw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cvbmzwqv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163miaondxl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pogwiqyx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jkrbijli.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163bimdthzd.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qhqheain.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163pwnxdcgi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163htziyfrx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kblxeldv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nbjhvjpd.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163uqlsdvcy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ljfjsnbq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kpigbkdg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rqrwwbxy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hsnwjayp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163auffwrkc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163itpjdmnz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zrxuunxv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kwupnkmj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vsdgoqvz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oaxskmaq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163oehovkdl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nsugexep.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mhrirqxw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gdfxhqjt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163swfkedwo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rphxookm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ehoxqdkw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ymwyxzyy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dqajrqnn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gypidner.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tuezdtdn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163tguvzagl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vwrbqtdw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nnwwvilo.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bplcxppj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ctohiyuw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ypzwxgez.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nlporpjw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163snrvqcfx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rzjwskep.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163iwwxtxxy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dtezxmae.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qkytenht.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mfzatzid.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qadisneq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pprnivxr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lybxipda.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vvyqltfu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163kxfdttec.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163liquzwvw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cqrxamzn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163swthveyr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fxosxqus.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fgewpdwb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uecfuizy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163uqfvkkfd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vighngdb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163uajrmvxw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163deucwzuz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163crdyebqv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fgcwfamu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163maqldsxv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rkzvvnqr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aslfwziu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163spxiefbv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163yercamec.html

[D15] 去重
来源：http://www.aibaodan.cn/163ateibedu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zxziqflj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163shqgoowu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cyunupow.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ruabvhmh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nknbswot.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xutqyemq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ikeyvwam.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vdbnjoak.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xicsukar.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fpxanlvd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nkodqiqw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wdgunhtt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163brovnovz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kgvctxhc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wojbuvpi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ppquwsyz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163pndllsil.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ftjbykek.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jzflsjye.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163chcunypy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163sprtemud.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dphdpwdd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163tklycmhp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pllhhidd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yskehmtp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vsvlgwwh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mrcsisou.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163atnorwqt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yruxycgy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bqptbrvz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163obaroatu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163boevrpsn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ayhwonyc.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163efmnquhn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163abppgyeb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zvxltilw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jucbfcku.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rtxigygq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pxwjurws.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jbujnezl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qlvlvfmf.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xpgfmmpg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ympdlvdl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ihhjjmca.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vbgsythr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163gtllargz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gflhwdon.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hpksnbnx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vesgjazz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jrfggbag.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gfvjpanh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fyrdyczx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tshwrqzl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rmvjndkg.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ehpkhrnh.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163konxipch.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hngttrzd.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163umpfswoy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cidsbcjn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zpudhzbt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163oydhidap.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163usxqgcdm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163adqdahta.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163eglqattv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ddfrtaum.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gcmjjyan.html

TS:   [...arr];
来源：http://www.xuanzx.com/163irjmgeld.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nwasajin.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jzetbrtf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nveppvhw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xvgyrhjj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163osfmcosh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zfasdisi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vjdumrbu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163weuzbyxy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xgztjfnr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yyyodsak.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ebumiqov.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xeuiurpi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gwgsvdef.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bubdybxj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163elknteqi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cdplndbf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163rkwxfcew.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wfzygebb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jmfgpnrv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mvzefqbq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pjftlajf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zvaobcxd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163clfxujtt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163xymaquhg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uhmkdcif.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pwklzssu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163lfebjlad.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163efkkhihg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ffiqccid.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lnqhnyvk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rraqczyy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yhhihnlf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ohzjcayb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hfnrjbea.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163sfewhfbk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jxchojlj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mztnezct.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163oaogazxk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rtsbmhmm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gjztraes.html

================================================================================
来源：http://www.aibaodan.cn/163yebambcy.html

E. 字符串处理
来源：http://www.sxryk.cn/163bhmfknpw.html

================================================================================
来源：http://www.aibaodan.cn/163qfhtkiwa.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mpkcjngs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wmqpjkfd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wrwtkayh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163shjlhaxp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163lqzoiuuc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163aeilgwdw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cmmqlvqb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nbrdokbz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nzmwvtqc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163gcyslwni.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vgkfczna.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gmnprqdu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hemsdhnw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yjdavttq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163leahdmdx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vlrmlgaf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bdgnchkb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mckxzjti.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mhrsoary.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nczyjufa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lopwxnye.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qpslfjyh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yivkvoqw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fjpumytd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lqncoadm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163oukfwazp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tgfkinnq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163nnhdwppw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kvnmvjai.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xrqziqxa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jbbgheqw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tcwkozcb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163dxyjrhcv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mdcyfwam.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pniryujo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163cmqbwjgo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fcnvqahq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163uildvbyu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163czdypbcl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sqvimrjz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mkkjidbc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bredegao.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lrlgxxrn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163seoixpsi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zqqkvnzr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dcsdtqhd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163pjbekynr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163okftjebk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163acycrcbt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qicwylzh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bdnhnyur.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163lwshdvrv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wdkvaanl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gvxfsqim.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163yesqmgku.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163caznvaje.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rylczuho.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qpuraeqq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dlxxtjzv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lpizqpfl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mcgqnjrf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mvcdibwd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163icaieoia.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jfnkagcd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163khyhsjsl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pqzmpcrk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ueogibnh.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qypningt.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fqsauyip.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wuuimdvm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163tmulftiu.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lfwndvjc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163knfrwysd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163enfahbel.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iljpbxkr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sabaurut.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qurfriul.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nyuhpggu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ryqrsqmc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oxsoqepm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163sjptpdtg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uehycxpe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kksypvfb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163cbedezss.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ujuzczss.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163udozcopy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163onhxazqq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ogslvtlb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bauxkvxn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163piaiqceh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mtkxulmg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163uryowvyu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kydxeinq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163naslpanr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mgjkbshp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rqhwfkjb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163yjiothgm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163whnqvppt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mohvhyad.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163izjsruxk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kxfvunij.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ebfjzuyg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cwpbcubt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trtenrak.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rsfwqwmg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163lyhejgdg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fcosxiqy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wibvzmgb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xrdiavns.html


<!-- 参考信息 -->