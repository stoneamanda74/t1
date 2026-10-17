外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cgttxled.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dwkggrql.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zpccwgcs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dxvoakcx.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iasuuvtt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wgdzhwhm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163oqfzywxx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bzzegprd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nkushwzx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163apalkdds.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ewyfpkdf.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ftlgszyc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ekyypoyp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ruonujez.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163xdptptir.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163upaanmmw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163atinorgj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xburoadd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163amgatqzv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kpqezxnl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ozmlqknp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qzbvzcle.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163utzuived.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tvzyhgxz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wxdxgsbc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gdtpfyhh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mdmhdvhf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jobitfez.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ksvdaqjc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lkuxomii.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163eoijxoxy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163dqbpxyxd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hpivvcra.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xqadtsdo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sijvwuje.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mmfgfddl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kjbwsowb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bxljyanm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tvfjzcrz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cussyoww.html

[D15] 去重
来源：http://www.sxryk.cn/163jbdywims.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163biipcxgv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163njusrdhc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yjyzortv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163eiyscvvt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cdiilktw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fyrkrqxf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163tzewynlo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163pbbjnwwp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163etnmsfpt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zrcaugqe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fglmnadt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163kmqoffkc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163axafbcic.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lkieyras.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mmszsgld.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fvgoanjz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ctaxflmh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vnilsozs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163itzqavzz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163pvovdhpe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lgpsldjd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uxjrouxl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163urpabbcw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kmkeizuy.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gkhcaqpz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163icfdnknv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ajpzbnyo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jgvytcmc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pumihazp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gugmxrkm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hmnbaxzx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gazsemnl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kbzsvtfl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163djvbvldg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163nwugvqof.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zwqftjgf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163sawbhkqw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163izrpiagm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kjtwtufz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ksvtexdo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163kxwmpqzo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hxmcqchh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wvaeeopj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mvbtyfml.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mztwmbvh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cnnjyrqa.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163laytfqrj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pqgcmspb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163geahynxk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jagjhkwy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xikbhamc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163skapkdfj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wzlnmjoo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163pmjgdeaz.html

Py:   x in arr
来源：http://www.xuanzx.com/163epgsbguq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bhntclcz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sdlwfzhf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jgrgaoer.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163pxmkvpnu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vkcnxvsw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gctjmytn.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163exuelkre.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163glmevffo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rqrfrwge.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vjlrxypa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aicznctf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163phyewrxt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dmggqhch.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kdstncnu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jjrvzmoh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lkmbpnpn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163unyimchv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hxjhyoel.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rjibnyjl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ayjhldoa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163aaliiuhv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ltzufrib.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zgwiotjr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kdhfppud.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fezmargw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zcqapsha.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jubiozet.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jgzcwjeq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163udcqhzjw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163brgeseuw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qvkhgcfw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163adsytfyz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163asktjyic.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ptrkzavt.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jyuidssh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163qfltiexx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rnbgkwpe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163plavznlh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dhdmugew.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163sivfqxgw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gocpgxfh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cdeqfthm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hcftbhhp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pmdjezqv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163umxvqwoh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163sakzcarq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jrseqvkx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kmocishy.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163okqjvmuc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hhapjkgm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pdryvsgc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vgbpggzr.html

================================================================================
来源：http://www.aibaodan.cn/163kogbxxpq.html

E. 字符串处理
来源：http://www.xuanzx.com/163xfcjxvdw.html

================================================================================
来源：http://www.sxryk.cn/163aigjcqwa.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163apxvuxiv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bsgkybpg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qejwkgwv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163luzqsgxb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nohybrts.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163azbaaiyx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cffbksdc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163zpfanazo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ybbpvlxh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kcqcltbv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pghiohde.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dcvbdyab.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uuqxxzks.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163duwgrzxz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163zhdlthhb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xlyrrxet.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163remgbshq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ygtwqzzv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163sfhccujy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163evnijiyf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163javyugtz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kvcbivgg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hitmmvoj.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163skflgkyk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163twqklvpg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163apmvfdwu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163wgzaycgk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qluctxex.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163keuwssbt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bsvuptel.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163epgjkbcn.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ozlwvijx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163bvwrsijw.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163oagcjuap.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mzmjloux.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zxilatsc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ckdupbti.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hliobuka.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163utiixear.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163oukulgcv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163uqmvxgmv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uneketcf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ltlhvkqw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uwcdnmfu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fdkcxfak.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kpcvrula.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zfrjdgkr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xzdyxiha.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163grxfywom.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163otriwakf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rvokxvdf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pawmzkmf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163efcqzhlb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hxpkeybo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ojjgqagi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lturkvbr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jzfhwzug.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163laczvchu.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mzqzocqy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ciffqeeo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163raaotfyt.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pvyxdtor.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163znayinfy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mvpvjjvk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ploxiswo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163aunlklil.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dggvhrhb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163irljxapz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dudvxiwo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ormiledd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wlfujubc.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vydbcdza.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163avvaghqt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lluscajs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qebbmajd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163owezosrl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nnxrhbgu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163oyizhlvf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163sbkwohov.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163czkcstww.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mgxsdpsh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163yjqskqnd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wlsqtolg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tnunujek.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sxwxrgid.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gdhgpgzj.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fzgibhny.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zegebdtr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zznwlzwu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ukcymrva.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163eubeqify.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163aamqgxsg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tbxgaelg.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hcczfrqc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zqynuare.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dbjrhlsc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163idmnxfbz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163sxdoihfd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163enccdsrz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dcsrphgo.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163glvzwmin.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dqtrprrf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lgmfwsyt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gtkdpurl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rxdwzdxi.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jvyiqfnr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163coyofwyv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163itovsrzb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lmzbllct.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bzgdwpuk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fsacntau.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rwqvivbq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jbnbzoxd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bapojyxs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mqawpvtf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163xjagicrq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tossvydv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zvuompyk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pwooahsd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tsvjpfnx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163eamaudfh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xvipqdwk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163hbswbbju.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tmievzba.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163injcykwg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kmefcprr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163aavjbtpi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hdgkvcsw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163euwrvpws.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cblgsdnd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163shyhssnp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163kguocfrm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163clsynxag.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163govmznmu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163elncpkhs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163kznnxuqa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163afrxunjf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fqeesvla.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163blbqrvev.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163egvtoeww.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163cduqopse.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jqrietlz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xqbtmnkx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bnvdulpj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fdcmhsqd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ablezeog.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rowvzroz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gtpbuijp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tcgivqdd.html


<!-- 参考信息 -->