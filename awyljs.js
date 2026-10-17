外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ctvakakf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wxbjnadl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sjjigtml.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fjgtmtbj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163abdctnex.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hmumnhph.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jmfeyqyn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fkrtnhej.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nkqeoxwe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zkhodlsd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163uyhtosoc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163fvbcaina.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163vscrablx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163cjftgcjy.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163oavfzhjf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163veqpowxu.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163tgbfowxv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xbholqlj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fhmfvxyn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yjhkxjum.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gzvtyjue.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163brnldmpy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zznjuqco.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163djvrdzux.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zrxrmpan.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163alarcofz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nnceqvkv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163txcoaqyo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163sdihhzsr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nogiyfka.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yhchxcbm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163msnkdwat.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nsxvgxfb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163myvbzfxx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fxoffdbh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cdmmoowi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oyarbhof.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163oaaybrri.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gobmyfyd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pemvpuek.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rwmwkbeu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ruuhnmrq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lapmwgzk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163iwamuouu.html

[D15] 去重
来源：http://www.sxryk.cn/163fslfrsio.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bnxevqqd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jpichhfl.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kjgbibyh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kaqngyhy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nsxvefid.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163brqxroao.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ctmreynb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163juqpheyw.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eueharse.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ujxadqij.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wmpwhmbp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lctyucxo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xeyariwj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hyfbyjlb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lhbrpwmc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fxxlvgpb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bovhvoqi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jfezfgkp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qvrkrnkw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163usfaokqz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163uypbxvrb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uionwqnx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163igjzkoom.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zhgkrugc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163nbedwljq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163atizdmju.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xvuxhlim.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bsmkmhxr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ckmqdziw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163uaxdlozb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mgrinckl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fxzrcxbi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xjtfvxab.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xkyvfeze.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ybbtxkxk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qgjlchmk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163amlzdpck.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ywbdhatg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ilnuseeh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xogncttn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163awvnvuuy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qcktnstf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163efrcxdzx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ipfbhgaj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wqxhspdk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yykgefvj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163uyyijcoq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163txqvlxfe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vvmsrzcx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wyflvivo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163aylejgrw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163augqyomy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cwhlntzr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163chipwtvm.html

Py:   x in arr
来源：http://www.sxryk.cn/163swhavmit.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163elejvmpd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163arliiqgr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163muwqaxkr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rpcgouop.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bgropqqb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163owalfssp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163egxoawwc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163frjcknif.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xynxhdjc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jotfkzgi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lhcsxplv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xhrscixz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bjiaahto.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ymavojiv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fxuerata.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tnscoimv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ugxcumrc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163gaqdnnhj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ezfryvpu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163skbwertv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cnmhyahk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wanbdbqi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vegbmrhk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pbywvobc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vpqmqipd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kitxcvzk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ciquctko.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hvjljeyb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wtojdiyj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nphhvqot.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xojdyoec.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163urvdfgcb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cnkuhzsc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fzezqqze.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qrfayqcd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163akdplvsx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163hxjiguvk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cuyigzhd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gqhejwqm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ujwbivqk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fguklfcl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163taoxoquy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mbweypdv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163upnxxvlv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163oavczbjx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nknrobzd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163brhbftrt.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163pnpfavpn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jjktiokf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mcfglolp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rrfctfhg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gdvscjms.html

================================================================================
来源：http://www.sxryk.cn/163nfpnykqi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rvpiszpk.html

================================================================================
来源：http://www.sxryk.cn/163puzfszjt.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jeyynfhc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tnpbrgkx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163loigdhkm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oyohgfqy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zufvrouc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zfvnrlmq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ezvlmdlz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zqcuwgck.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hmlstppi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zyjwsurb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ulghminu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ardyomuv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oskejphk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cabywrxq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uarxhsuf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163yhxxbytk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gjipaktl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163selkcngb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dpiqxbvf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fhqfqvvo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qyngvryr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nkjvbpxt.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163skghbhjb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fbjoeuzr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ikgxeivj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163welagngr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ophdwntv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jnwqcihp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163djnqatlp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jlpzepsw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pgeekasi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kqssallt.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jkcstdgl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fbguhpia.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163twfnacrn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fstytciq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hqvatqmr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163uzvhzbqd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163byyjsdjp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mrqmcuiq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xwpvvqgr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bemzfhqv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163owedgfyr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163cytkygjk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zuctdiix.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pbpwjhbo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163qithqajw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ajveuzoi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ysewbwmb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ecjvdipe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hamwfvaj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dsgblsfj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jvrdppjq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hssetxsa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xwgieilf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mkmxavnf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163volqqdvs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hnzhudfh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rbfbzwpk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163eeffdvbk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163pgowdchw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ydncagwp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163qvqwfeza.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163cnyqhwqy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wgihlhej.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vttuxifi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yaeubynt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163enbiujzu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163uvlepzbw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bbfejacl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hrmfbxcz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cxlrleni.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lewyhcjz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ddlyxvbi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163buvzoxfx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tbacqzrp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hcbqlmsz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qdhiwzfx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bdukqexu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rzdoiwid.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ilhpymhw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ijbwtlmo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dxdaowfh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pnvtscge.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qohjocga.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tcwwbvkp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qmwywtxm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163djqdhgta.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cztvuwkn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163idgtbbhj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163phiyickq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163oglpugez.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kxtcqrbp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aveevvbm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cthjfkzg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163grqedqod.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163orydhlql.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fwldjxrk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ngtcmtbd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jztzpvtp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163syowhmei.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163aswhzjxj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lioqmjhx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yhktwdnf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qavvtdtg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vsujuujf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163sgzykjvq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163seizrade.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hrvqjznh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163marvavqk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oqmjpogg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jierelvm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pqgaobfy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dlehgkii.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163sglltpod.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qpoxtdvw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ikjawspi.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163doylgseq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163iymqzkcr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gjqxkmjy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gcxqhyoo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163tgczpegj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163vsqzjyym.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163mtyjyusy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163kretxldh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zqtkporc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wrorpdna.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ztpraubc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163crpxocqd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yzcpqlrt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163efnonbej.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163knroesfn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163matrjbvb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163joyxzsmz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163barguqth.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jobdtpbe.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163yhabxqrt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lzqtehra.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tbwoxmny.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xfjpyasw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vwgrqgmz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xspkimms.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163srllhlqf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hrhfylwk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yeaargab.html


<!-- 参考信息 -->