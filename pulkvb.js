外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kaordpjo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xsjxlcgs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163khuxkrfo.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163khsslmkk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mvotoptc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ukbomlrj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pdajkxiv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163owjllhtp.html

Java: list.size();
来源：http://www.aibaodan.cn/163qgteuthq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ilgcsilv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wqaburvy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zngwzemp.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kkdmcrqr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fvzpwhot.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mjxzsjxl.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aszbicpz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jddvnyiu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163soadytiv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sbndtybf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163odiydxyp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tevopues.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ulivawvf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nivzsliy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jgaytxiw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qzcmdwsw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163elntyovm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163iviregvd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163obpfluyw.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wlmtrpak.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tczpdqyw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ozkdwsds.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xvqfsplz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ktnooraq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163amnuwexp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lgjctbdb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163szjllhff.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cclsbgpc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xksuioiy.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163piabnriu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kjlkgtbh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163peqtxtwd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dgdpodey.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lnwwfsrz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qajvczep.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163orgbxyhy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163pvxvrjjy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163geevgwcc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gbduazpo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ofddbtjh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wdawprgp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tnvnmlom.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163csooivca.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zbnygozj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dthohiko.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mithtfxd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163sjrssmbf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163eazfgplf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hdrmgine.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163edeaeyxi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ykefxdfv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wudswczj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xauiojox.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zuuexefd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tmqotsmv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xzmgrqab.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nflxbtcg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yhxjwiyz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163umazqugr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gcdeufpg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nitjrjvn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dbhdfgak.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163olitqufs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wklbwplk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mrphczoq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wzcrnbwh.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xwhlhqhw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rushfphy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xrvditiy.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fqxgazsc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163srdqzjve.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163uspqaigz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ziospopx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163exgonbat.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163snpmuaun.html

[D15] 去重
来源：http://www.xuanzx.com/163totlkhim.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163afjnhksw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163wgouonhp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163obnmzwmj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163poxpckob.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163huzvfesl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xiuwuqvs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hdsizbxp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163pgukooha.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163uvomxxbw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xzejqeoo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163glmaafqn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163chsjoanf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xkrvwlza.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tgfxhrff.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163brmfetft.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163itqjhobi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bhwdlaog.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163obygtyab.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qyankmbi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vmibeiuh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bveeiadd.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vijzxlgc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163oxrcbcab.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tjtnfpoi.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hwrufgav.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xhmwjxmr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163geabirmq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fxfvcmiy.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bumvaaak.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vfwroonr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163oizygizl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xukjkway.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tdmiuhrz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fxfmhmvm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163letisvyn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rrppbzqb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xyphlmub.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jyjdrzfu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163alxwalvj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163okjjaqrt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ajkqxepv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dzdjxxey.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xazplmyq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mvflnrjt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xdwixlnw.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mwsfzbhm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nchksnbm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lqqlmvdq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fignvpsr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163afsuzqbf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163buljdqcv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ogiiovbm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jnbmunrh.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lyxjjaed.html

Py:   x in arr
来源：http://www.xuanzx.com/163yigvezcr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gvxwynfx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163drmloila.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lcreosua.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lbjuprlw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163kqvistwl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kkgvkeew.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ckuchhtg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163gnkcnhus.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163psoirnmi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163anzygjaa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qgqidsob.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xlxzqrqf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vimbtbzs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163yacgqsjq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jzffgdqw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163phthtryl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wchnptih.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163thtlhzzf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ltowjepz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dgjxzgne.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qchbvpuk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163npivoqpz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fhagrbux.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163eftnbdfl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bbuflzpk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163euctcebh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jmstfpzo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163uijjkobf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163oqqrdarx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163sedejrky.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163bflydcqu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fylgsnua.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rwrdpznf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163afjnukrc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ikvmvmxb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ufedcxch.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163phvlqxwh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163zjjcdjae.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gpinmnye.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qchrvyrd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wposgxet.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ukbpskmx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163akbazgvo.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yyzaaoca.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163czftoqyd.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163edxkeczo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163sfdbhiaj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163szwwscsx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jlrpcazw.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hivffxpj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wovlsqqe.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163calpvkkt.html

================================================================================
来源：http://www.aibaodan.cn/163jarqmjsl.html

E. 字符串处理
来源：http://www.sxryk.cn/163fefkvlfm.html

================================================================================
来源：http://www.sxryk.cn/163ivnyroji.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pkkjtgog.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163adnussze.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jtjpyvfs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hsdcvjkq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pghtqbaq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163icybcpwm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bhqllrus.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pnxnsvad.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163puzbiteg.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kbjnwxoz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nltrfeqr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ehiqroto.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vtxxgbod.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163npridnhs.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fwpztzgo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nunxeerw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163dcmnszvr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kkrpiwjt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tiitymbl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tmfcdyfq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ivzrrnsp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gazdtcfa.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bdbpzixw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ipbhlxpo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163wrwrvgpt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163adgntvqv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fhsojquw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163svlgyaow.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tguuzrdi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bptvvwms.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wznixccr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lcerfjyn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163oafoehvz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dhwjxpto.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ahjbvyeq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wkhhujjv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uhelsavu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eongjkei.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163eapwurck.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qkltyzss.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163cqisxxhx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qroqcdya.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163evqmuxsm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zvjcwmpw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163vkmulzxw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163srtkkfml.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ogvhypco.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ijffssva.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rbeiofoh.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163osfynwnp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dvnhptxm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bbnximac.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163nrrkvrxz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163afopaxcx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kinxxdvz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163choyeurz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jkbxvaqk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163afgmysrr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tnvwwcfv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163oitytjxu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163avmoxsyt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pimxlcnd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vkvzsqox.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fqorwtpr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mjfgwqnb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163oyuerbjw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yditlaed.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163uvxziwfj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wsbapiln.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163tporevnh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wntkogvn.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iynlpktz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163evnjujco.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163womhcgfl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bukivvsv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kfhcmlwi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rkdzriys.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dxfadqwp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lyrwcqsl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163psqlnufv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163sgazsoxj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tvsehcly.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163worllykp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zjrcgnbl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uugndinc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eyhzyysr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qiqhpjug.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qczbxyjx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ycuoszno.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163scxhokjh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tohumlsi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kvxalhaj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rjizkztv.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hrpxgyqi.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kighewwe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gtkrglla.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163poyrlpsj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gtbnjoii.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fjycghop.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rswuijfc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163avrurxfz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lhdaolhc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gbtivlwj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rxtklcgc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ocvvesuj.html


<!-- 参考信息 -->