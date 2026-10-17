外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bamorsjn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iekovxyn.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mqkmvqcb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163fmtutddr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163aimxceni.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dkhxoolu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163aogpdjkd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mkldviev.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ppaoreus.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163fgyiztwr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rzbszopj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163joexmfpa.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uggdrpmq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163btmojdtx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163avxkwcxy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163sxuprahi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xnnkpioh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rqmmnpri.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163membajto.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163futbinzu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ihbytwdw.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163psadtuiy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163odcnvrgl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163coyzdczu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vecvxiwj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163thedyutc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gncvzwvr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qeylfnck.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163opwpmhwv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kctpgdrq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xpnpdnua.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ovqyfqqe.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gqacdbjh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jubntpjp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lyibjhsm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xagnxiaz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jjcojtlq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ffskwrez.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tkavacdu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qelksnms.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qtbhtfip.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qpxyeshb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163daktlbrp.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163warpnuzn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zlklrvty.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163udiksemx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lpjjpnkw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163slrnumrc.html

[D15] 去重
来源：http://www.aibaodan.cn/163hzibaxun.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cwfxtbzb.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fsalwndj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cfiztkzh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mpruduyt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ogekebmr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163iettioys.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rmfppslr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hrnsnasm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lenmaqki.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163soowiqbm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gfjvlryn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mlidpnwe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gwrmobch.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cmjfddng.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lngknamg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163laiubwfx.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kjowbygj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nxckfjvi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163zqxbpggg.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hwqptugu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sulgnztb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wwzchspc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163stmndlhu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gjgsjrer.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ozqphbwx.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vtufzbki.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wtiqqokb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163riztkqdb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xbhhozob.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kbmxjirt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163tpmjxvxn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mvthtxyq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pzviplhq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ueafbgjg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mkyzodph.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bbcztali.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kdglqdkr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163npzuqsjs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ilkbrtwj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rydxirck.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163efkrseql.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ddhjogik.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kuljiilv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uxhxghot.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lszpyvlr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163lzhhoqlw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tbeslvap.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163magakint.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gwhiaeeh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kbcpbwrb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ngdjyhdn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ixjbycdh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nodsdcvf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yayvpjtc.html

Py:   x in arr
来源：http://www.sxryk.cn/163vemxjmfm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163cvhxadvr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163erjhmaoo.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lulzjioc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163allkwret.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163idpydztv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dotusqme.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kfnuuykn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wapixoct.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163uqnglnhk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xabnrfia.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qlaufpfz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qwfgqonv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wipqxbik.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163sgtyfdbq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nxmkuobi.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ixrctgpq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nyvxcmbd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163sxcjsous.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nnzqeumw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mumswitj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rpwcjqgp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ggkiykbi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163twbbzcde.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rdsxdcjn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163iihxriki.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tfxqewpw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cxwyvfcy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163myrdicxv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yqzjbjem.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xixasqlk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cbfmhnxn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wjiovqdu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mhtujnda.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163igclbyxt.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zidrqqdr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vflcedvj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jklglqpb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mkfwhlwx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xaktkpcq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sswxzrty.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ttbgooiq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mcaalhbk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163bzswbfou.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163npvobegq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tcwfzeik.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xkpevupo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163oulcjtgx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163gedbmmff.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163iubsarmd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163wcuwrlgg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nrbksvfm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gjonmdmj.html

================================================================================
来源：http://www.xuanzx.com/163tapxoxgm.html

E. 字符串处理
来源：http://www.sxryk.cn/163lnupcbkv.html

================================================================================
来源：http://www.aibaodan.cn/163doimhefy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yonyyxsb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vtddlbfe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163oozmtdly.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nhmigfnm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163urqirhiz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gbrktxde.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bpchrntn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dzddxggf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163itwtsmde.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yqbbvjsk.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kalansua.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163oavabbft.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gxjudhxa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ycwmdzwc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qqtdhvpj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vpgskjil.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kzxugzrh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kdonnhyr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163uhlkqxzx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tzaiqfnk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jergxnzq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lickhkgj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163adpbnayc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fyqkihku.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163hcqythyd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zdvhmovc.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ylcfznmw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163izzdkbzc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hulqqmmc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163cqytjihw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163iypfuunt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ytcpckfb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uqfctynz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xrlexovp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gasqokak.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zszlhoey.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xcjguicm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163cjrifywf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rcdlwrof.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qooohoxr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wztlubfa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tskqyraq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zbdqlacd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163uypmowuk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163dgpokxgl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ksssukvg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bblohyox.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ykjuybog.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hcevsqvh.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yqppbahe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163paymkysn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hmutmhym.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163lrhbczdu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163agjyswel.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163otshvghu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bdlvaafx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rbmsyqdj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mrctvrec.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jxfhxvia.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ydaxjmgx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yirahimv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ohvytrmc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163natghkdg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rnzljbek.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mdktkabs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ahravhow.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qeqzxdlz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ebapkcol.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163okzrxxll.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cciyktey.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163niejjaez.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lodyilfz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lkxxklhp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qnwthwur.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163aahgxyko.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163htgckpzq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vpygdnqk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163visasvhs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lzflduio.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ileygpfe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mqanbzuu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163sormcqdr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qqprjhfg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kzwbauec.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qviyuvji.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yybsbyqs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163asdmgtyg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pskvmmre.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xvyeszby.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qsyorrmu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ayyokvxz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zkkxiehd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zwhohsvv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ibwuyxno.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mxxbapuq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jkejbewa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hkknozzl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jugylfie.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lmgzmsql.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uaehweff.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yazqqfqr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rhbypcfw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rvnsfxqf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zgcnrziz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iillwcxr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163bjevcsph.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wdnbjcbq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pdvkswnc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rctkwnqw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yudzluip.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163czvhtvmr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xovckxkv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bmwgiwqs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cvniajxi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ovlurhxo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163veysnbap.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jwlmopha.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163yqrevset.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rofaqimf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163szotqiej.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163omudowcd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pjaynryp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pqfuhxki.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xwwbubcd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163suptqsrq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fgckgcak.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qlwyyxbp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xldtxirl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hobdmfwb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jpthhlcb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xblabagl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gmbdfyev.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bwvcymcj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gymwxxfc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xhrdlpaa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qilyfmri.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163blafaujg.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ephqveue.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bjcqxvxi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pcgdghbu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zhofzavc.html


<!-- 参考信息 -->