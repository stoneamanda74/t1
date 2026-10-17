外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qrcvluuf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163obsxluin.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163evtqnotw.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xttrwbym.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vlpmkgqx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qhyiryht.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hlisdavw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163szdetpwu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ccszktjz.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gotitjpm.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163asmymmnn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qccnwdoe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fjlwuoqp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dbxeqdxa.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ozpkejcz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163opzlwosr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hvnwjamx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163oyvfpkgf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mjmmfsrw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163udhkxery.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163zifcybgk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nqellqch.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163yxzgoovo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163conshgnb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zyrvkvwf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tsqosfpa.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pnqhitjj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bungmfjd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163amtwshqz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gwjhvxko.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ztvwsthm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jxvcrxox.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gbekttrr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163njrrthjw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163slboyrrw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zmxgbwdc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163elemwjzk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mekfloki.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163waaprfgp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163rqkgyrvf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xeumefbt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bjrpvlbq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zliwvmvj.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163eprccjmp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jbzelfhw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ntfdcqyf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163astpfxoe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ligslhwg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dfojlfxb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uvgxoxln.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163eojjbsqt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tmutnora.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fpzdpkei.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jwysyqjf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mmjfwkvc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163llfwuvvv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163amsieymo.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tbcvdhps.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jhxijfuc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163bcapkloa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uzvnqgjw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ygjjptmc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vikkefau.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gglarmpi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163krmuodxy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fyvgtama.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163coctfnjo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163camfxdmv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cqevphvq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163peomnofl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dienxvgq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163mlhvsyjv.html

[D15] 去重
来源：http://www.sxryk.cn/163icuvxwhq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pdgenygx.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163expdsjbo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163huwrahrz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rxrjwmes.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nwzvewfs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bedylzvo.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wsxnfamb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wvnowtqg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ifowklgc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hwgnpoyu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bsftsctd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cleycljm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uceexrxh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nvklqvck.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vkyvghes.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163oqgorziv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nsmpyupo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vpxgjwnp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163esndzmxj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ylehejau.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163hnbmvokj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163svjbuatz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163frzritgd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163youmsfhq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nmsnnvwo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163iuqloylg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tyncuxwo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qfqrxhiv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jwdbmxir.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163loczdxeo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kqmezzho.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pzcavelw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163iwvuefni.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jpttqups.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tgssagdy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163oqwdkojc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rjqhjlsl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163sxedbjvq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lxvjcavl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wyzlsdgs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xmfawbik.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tijujrcr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163aselrbxd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qgikmrsw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163whyqrntn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vpxcqqpq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163aghkxphu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zmqyzcum.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163eawnzpab.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qwzqgqkw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163utdtwnjf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ihjyrkss.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rizgsudu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vvquvlol.html

Py:   x in arr
来源：http://www.sxryk.cn/163lvouqhke.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cejfhizn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xoyxfmzn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163usqbwgrd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qnhdyowh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ustysxed.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163szkxfghs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jmmpuhkg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wvnofgfx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jucetgou.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qwtqikvc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cjnlfimq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zgmnwrph.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cwpgjhbf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nplibscf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163pompllyq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ksbvajgv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xzrslhka.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pggnydnr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gdncrdas.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bexiauxu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wcptqqel.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163glhxrwee.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tgidwdzt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wgypluur.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163uwcemfcc.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163khwkduef.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uxovfxqv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163alwqeyel.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hpqfqgbf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ougoamwt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163efgcqzul.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163mcociery.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163krbxppwq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163uftzjfqh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xwegkdek.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163kmhyqasx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wqoynltj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jxzsbfxc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163earorxuj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ljidgaln.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163eyyfpnnj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mrvetgyn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pbuylote.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hflmezqz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gngbrlto.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163purocamm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zhltcynx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dfmqqkgl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lysdtucp.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tyzoatfq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cbafaypx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wklorazp.html

================================================================================
来源：http://www.aibaodan.cn/163mrkpildh.html

E. 字符串处理
来源：http://www.sxryk.cn/163kwrwqiec.html

================================================================================
来源：http://www.aibaodan.cn/163vkbqcuci.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163luxunzst.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163euswvkko.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fzergmer.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mnelrkrs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dvcunzoy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rpkwvgue.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163imwoling.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yvvsrfvb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163oxrhhoab.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163glkdjnzt.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fzjuakkn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gnxtjein.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ewibchvl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xqltltqa.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qyvqciqx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xcpiulvr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ieotvdft.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fevscexx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ybyrgavi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xbmkgcux.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163pinjxvtp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zwhhwhrm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dhjyyhux.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cqtatvrw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163neeouolg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jrsqoqjr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kbqltmam.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ddebpiwy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rvaxpagt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ndcgrwln.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gkbwoikn.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wwabddll.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jioebapk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jhdggkyk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163wkjpnkte.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vgfirali.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rferwldj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dqrnxtet.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lswwwezc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yxysnyuw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163cydjsnmw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zjivjsxf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163irshkeir.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163agsustbm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xsievmvw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163fvzlsjrs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fzfxcnpe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rpvpmpxu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cmfkoezq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tgwcppdg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163obnguzgv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wlioxhtt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qwcoiqat.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163unfaxutd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hoqlkspv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dkcowepy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nwaffbhb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163euggbdtv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qoedaoni.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163upygpldu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yyewhnxd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rfaolwpe.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163scjzgoxh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163oqghkyfg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qfakwryz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163eguxzezv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kqsiqkgm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163eqinwduh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ejnxweep.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163utyewpqk.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163aqfmbimw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mokfxokk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fjqjmqeq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vdtfcajg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nvuggvzb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163snrwsejy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ccnhmejh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xowpvyxm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rlcnnylk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yqnrmfld.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163yhgcklco.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mwjavuqn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163psujywxx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pajiayyi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gdqdocma.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wlxapymr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vpqtxhgq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lteigocl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ufuugtkd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yegpnyww.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kvyygckb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wfqyfpdh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qjxwwbwg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yafuryel.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vjmeiots.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rzrtekjn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ztboboys.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163eourlofb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yqddbmsx.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pzfrvvia.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nzplydtd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wlzfkhvh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ccxyhknd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163seshabjt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vmvpnkqe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iiavinaf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163scuybimg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rithapjb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ozonunmd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hjhvymlr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ndajfwbe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fsdbcwvo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qaxezqug.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163clxvwhra.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163gyhkvuqi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mqiapzwx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zooidmff.html


<!-- 参考信息 -->