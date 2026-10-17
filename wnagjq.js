外链999!wailian999！

Java: list.size();
来源：http://www.sxryk.cn/163pswccphe.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vhbaoapx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pdqopxte.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tmcicjqa.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fhqohyzr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163upecydum.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163scvxxthz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dmcoepjq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163reizxkfh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eutpssvr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mjwqxueb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vstkvknk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vmcjqlax.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qksgchhj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yfxrduju.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hwahqsch.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tvkqcnps.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ispphmul.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ecnvnuvj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dcljlwlv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dbhvbaxb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ovpzaufu.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163upvamrdj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hraprcej.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mgjijope.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xmlktjct.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rnoejyyg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fpvfjaok.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cgkpghzk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163biwvafha.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163svmlhgyg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tyubxqlv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163judrgqic.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mjmgviux.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jxandtoc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163abnseiei.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163joxtignv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mbtpamuw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163brzvcpur.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163smdxyuny.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163iuvcawbs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zmjvhvkn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xaiumlup.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ylirmjvg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163sxkvpekr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dvtzzmme.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163hprvhlrw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kzpijqcy.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ceslcpku.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163juhjtnpk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163meuslazg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zrlrbihp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wyuucjox.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hdqrttsc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163phvupuye.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nktayqcv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gswfqxje.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163eajcfbqs.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163iflagmkm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163gdywltef.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163curkzuqy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mlomwgqv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tjqlrsgu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wtbrvhsa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fiavcvrb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163tqbucrvf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dhnuthvf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bouhxyvi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qbfyfzxd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pzmitdrg.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jswbpsjm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xqscknvz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163nlezjcpb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mblcadir.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163maoonhpi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jiwxfxdt.html

[D15] 去重
来源：http://www.xuanzx.com/163gdmnbijq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tnjoqjyt.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wgdfeerk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rxsatudm.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kfhikzsq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rxojicsg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ksymzsld.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ybtpnexj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lwtylyyg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hjbzcfwr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lxaxtden.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ncpxvraz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163unfsxatz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dbmuticw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tamxckjt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163sptuefop.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nkkjtubo.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vdngmdtu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cjoesfhy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hytqevll.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jmhjolwa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163axecgywl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163oeviuqsy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163myanjjht.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163efcxdfju.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mkpisodl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zvmiewlv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163eshrboku.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nxocvfjp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ffrgupgb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hhsjmdkx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uwhqevib.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kfahkaxf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lhnugmdi.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cyrvquwr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wqiqnsfz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163oaxfjqyf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yfkbnumt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kmssfmfn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kcqkmmah.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ktttvomh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vbseecsg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163joyangsp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163syumeqhw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163huvpxmnr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rhzrvmxd.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wswcsjox.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kyingdim.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hpiozdio.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fdnqdquv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163unskwysw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tzlvxdha.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ejmloxph.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mdhrdxco.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163uzzbhlgx.html

Py:   x in arr
来源：http://www.sxryk.cn/163eqscafdp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hqsibvzi.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ssgvbwyt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mlglbtbe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163nbvmhnfr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163onryipdx.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kqvyoscr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163aujrkqny.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qdufgjmc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ylbqbllg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163soseancs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163offtgvlv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xslfshnd.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ncxluuwk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ocdzqjxi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163swvbwutk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zqceozlc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eixhogra.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vhzgbsvn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163supuhwsi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163fdwedrlo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qgmzqkyi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163fnbnocsh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mngrbtzs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wscolcpg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vitjibzs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qjvpjrdf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lqnjvyip.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nqjeyqko.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163doohandf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ybiiicuy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zzebimkx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163aajhqgjj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wbpjwrkm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jeucqucg.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ylpcvorv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163wooinjep.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rmtuptvt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gejucdro.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163jeeskexf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gzwkpcrm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hfdjwmwc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163soedvkbq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fwzljzgl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ikyymurf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163slaobddz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xbhgojkv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ipjlwubz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dittymhp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pmqmjmrj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vdpjypnb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qkbuodwn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vpqsypcq.html

================================================================================
来源：http://www.aibaodan.cn/163uzvadmon.html

E. 字符串处理
来源：http://www.sxryk.cn/163akzzbwbo.html

================================================================================
来源：http://www.sxryk.cn/163odhewtvx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163psdpamrx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gbnzeoax.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163chpgxmyi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bmprqrxa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163osggupno.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163txacyaqb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163abyrqdwx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163bvghrjqd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xmgrlqjo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rmclxfwe.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163grxbgmka.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nazdjpsn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jngqdoig.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ljwymras.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hbmqlghr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mszpxpae.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lodmffgf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163qsnbtvox.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nhzfkwlf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ivhmaxqz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kvokykxh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nkfraubm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163pjkcfvlq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mihylgxd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vksmauhh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ssobeywx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kghlvyzp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yhftrujo.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xogzyxtl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qhrzxpra.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zonomnoa.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xakoiwde.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163aomlbrib.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fakbdbnp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163cmnhnyeo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pyhglrzu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163otasrvif.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163efaqhbkh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qxutnwcg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nvojkpoo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rpqrqkws.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163auzzseth.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ekcotpum.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163atupmvou.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qxvngwzj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163asqsblil.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163urklgcuc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dohojhob.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dhhhnbii.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mpvctlln.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jprbowax.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163svyhvhzd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ovkfallq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tslftewj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163egtrznfr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kdiquoqt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ebvcghdh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ltuizjcr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163kmgklbgf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qxtdiuzp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ltvhubok.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rmjffsus.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163iqqdeasv.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qweiprku.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163uljuhhxn.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ytprxrqb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wnkefsep.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ipfxnycq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qtzxwgix.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ucqzyoqo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163wiaullvi.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163omokhbds.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fkmobatq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pvsoangk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hjpfoymz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163isuipzsg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163iaxaarsl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tdhjwmbf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ymezkcjt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163amwgitku.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cpnraumv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rwbqctpv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wmyxfphc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163cassopfi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lgnfavsh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163krkmgqgs.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vsrdupqk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nuejqnlw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163daznfytv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hpilaqjm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ojqtpxnh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163dedzwpsw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tujvucqe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eeeoarnv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vecgohpa.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163mdgslvcm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nmnjtywx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vzglgmsn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163raekjudk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gvzggxfb.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163onqaqjnb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bjespbhg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163txoozogl.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ydnfghfr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jtgtndyp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ybkxlede.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gbigbhtn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ncwnnmot.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163uuhypkdo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dopwsjzx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163bbregevm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xnomjygr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163acnxgiow.html


<!-- 参考信息 -->