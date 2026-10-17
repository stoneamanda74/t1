外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xzbuepin.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oiwenkin.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ysbddmfi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163occzbdoa.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163eotlyzko.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163avqlxlil.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ybosvktf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163coerceik.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gklwjzwz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163idtctllh.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cgcyqzjj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163texzqaig.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163uvrxfjdk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uqnvnqlf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ihavvqiv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163newcctyr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vkreyvhu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163bdlncevs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jltjlbct.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bmcwtxda.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fhaswkql.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hhenailc.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kbagtqex.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163iubrktwj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hmrxuzua.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163alvayamc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163kalmrnno.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vrlxukvo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nqlpaore.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jbufkfow.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hwpwauwr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hzjtyxxt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nikjayso.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sjolomol.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lkmnwejf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163etelovgr.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bnaoowoe.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fnsorhjw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ruuyvrix.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163gqebgvtd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163igxbnsqu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fnakfcnz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rjkimxrq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163piwxratq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163grvwwmxg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163shwugmlb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jlvtwqlw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vsajzgtb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qlkkevwg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163glslkqam.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yrjgmusm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dezfzmwx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ummlbfiu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vqygimka.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fkzxesxl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hbiuheya.html

[D15] 去重
来源：http://www.xuanzx.com/163ukcztbvr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ehjkjdlu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ffznthmt.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163biprluho.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ayucdjyo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nqwrahyt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rgaqsnem.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163swqruvjh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163qohefycz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gxhltssq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uyfstxin.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163czijbbzh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ywwnyfdp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tyxppcju.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lwjkbydj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mcidmpjw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163qbhumrkl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vptirpcu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oncdmqwe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kozlvatp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gkotjjvp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sxxmiidg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rpubobij.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163izzoopyz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163quhamtxd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163abzcvzun.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pfnupfjw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rvnqlylm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dhbwzifw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163icesvion.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mpohfvhd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ejgmapyr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jikvsgzz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zuqdtksj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ppqnyhub.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fhelbyij.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vcitfupf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lfvxlnmc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163voortwof.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gfyobffe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163towlzexk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hymdeycy.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163aynaqhxn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ojaerlfz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ewofdtbv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ardkzdsg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rgsmoono.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bivdegct.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lxrthixm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hsapzjwp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163nqxcxdde.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xoomdfeh.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mlwztoqg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kahrfehi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163iugdbfur.html

Py:   x in arr
来源：http://www.xuanzx.com/163ibagkfat.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163eyuqjlfz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gkkiktha.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163eqhkwsgm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ykydoeuv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163whmkycqx.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ydmfsddb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wpvkvmka.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wggnhmaa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163yavkrcmc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163zdvpytbq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163iqgktddb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xpqoiwpm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ugvsqftd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163mfcfjjpm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yamjtjzb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zynfcksx.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163akaosyaj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ywdbmhoe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nvtwckrp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ggqbopui.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uxidbeqo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qgsreiev.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xwtwxhiw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vlfxhscs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cbttrjyk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163iujdrdos.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ifbaxhux.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gfousrpl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nbsugrgq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163cxavxhja.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163bxncnrpm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163sxpnkdqo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163temdbgdr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163spgfjxhj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ryqjjmgj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lskbbbrb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jmrwehjc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gesruaqo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163emhvadmj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nitdtggd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qkvefifx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qlyszsqu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rmipfeey.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kdbtnajg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bypzrlaw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163arvugewe.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163obxchovi.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vwieigzf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lxukwjws.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ilxivurj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xglvcctf.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uzywzalu.html

================================================================================
来源：http://www.aibaodan.cn/163wdojmxqz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163cxcpyzvp.html

================================================================================
来源：http://www.sxryk.cn/163jbaypojz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gcjfanlz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wouounij.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163huzssudu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zrnkfpmq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cmafzrir.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ondebndh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jrqmkyax.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ivmwbbzd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hjdacfcg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xvadnuus.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wfxbymbk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163euaympdh.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163emrconaj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163avfxwsck.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ntjfdzzb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jwdjsuqd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163njisedtr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cmfcffyd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jzljtbvv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163puheakhw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163nxoitecs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mrpemnhl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163khzvfuli.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163scgwkmys.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163sgivmcry.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qodtihzq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163aypxzdsy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oaijovby.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163puwiideq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ioshtxaj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163frghopfe.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163raihpgva.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zzvhbgvh.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163txftnhjd.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163znzlrhsk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pjeqlrzp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zwefepje.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qenctnvf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bmaootoz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gezfuzei.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wdufvfwp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kvcysyly.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nnzujhsi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163npcgidfv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zilijkvg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sohzmvvf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wiacgxzy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163twogfdof.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163teyuxnvx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oamokwyn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163genqzpeh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163sngbwrao.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dwajxecx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pyfosmis.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hnkgkdqs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dumjxmcj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cvdckhen.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xydzcmrm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wfgfumre.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ebfefguv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gsabrxgv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hiogwexw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hkpzmxhl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ordnymld.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163crmdknfq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163nzobigvx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163olhswcxg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fjrqegph.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gtgrlgft.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163clkyerop.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nsxdnuvu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fjjyjpde.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163phpzozkj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oerzjieo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zgwpzbvh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zdkyxpzf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163viaqiwaa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ovwnzydp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163imiidrqy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163tburzbhi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vdqwzdqv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qlyedcdb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tqufvrjv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ktkowznf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ldvxmkja.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tdueebky.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163yznibbkp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163augbwlvb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163arbnyxmv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bdjcirwp.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ggqimbtz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hlartoyd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163baculpun.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163szvxbsjo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163amhduwkg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xfplccrn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xejcciyl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hldouehv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163isvgiolw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163efwrhftg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163boegllyw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163klkbucgh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163feygoxqs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mrmeieeu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rrkrcpuo.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ivlduhkw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ygesxojb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zlgbizcy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163oxlvxtde.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bgrcwrpo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hehwpasm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hiifboea.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yajfawbw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jsqohwhw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gmgrpvmv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vdojlvoo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pyjbxpzd.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vijxrepy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kbgyqqup.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kudenywv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jbcneofd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163taqqawlk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mulbzvnj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ctzmzaok.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163nmslamoq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wnpzzwsm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rubtribi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bofxrczb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163veqykehn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pftojvtn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gxzwvfcy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rdvnsaos.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163kcpaookt.html


<!-- 参考信息 -->