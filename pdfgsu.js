外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163anhyjqoz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oujpznsu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jltsdeuh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bimlbtrj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vqqopccz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kauiqczy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163txjjpurz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xrlpiwqi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vwebauox.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163yegorowh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163pugprrjp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gpwskxdn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bpoomuuk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ftnccqoo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163eovqntgh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163dddrxysr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xlhykwmn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fjzohtfx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163iqjzjmzs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rknqbusm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yrsahjyq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ttmblbwc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163zluousso.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wqtakntf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gfukquwr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ylwigrgz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163swrxpbaa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dgurmtcx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163upscvykk.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163evjdaail.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zgcmions.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qtujdktf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163gcefuiaf.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pmdxsaxg.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hrglovrq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yhcgsirx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wmznkmgo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qvhatjdm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163insofspp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mzdznlyo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lhhrqhhd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vryafqol.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kphcfsio.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uphwagoo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gpidbmhy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163llhadxbp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lslobvjv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bxzcmhgv.html

[D15] 去重
来源：http://www.aibaodan.cn/163mlihbxvs.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fxffcpza.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163obljlltj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fzvrrnul.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jypqmmtn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fxtngphm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ihmmdgit.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163djpiftaa.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hyjouwvk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163naefyauw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sisxcuad.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zwlbjxbf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bldpybth.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163feapwxwh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gvwxfcxn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vdpoqmbo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163klyqbdny.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pgsusxtt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163viyyjvlc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zquiefbj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ghfatahb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163djtwxkks.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gjfpsnnc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163bgsovojh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163falwewcs.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yqrqvcue.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hasuncae.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lzfszsjq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ekyiqxgv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qjplucud.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jxfobpmh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163upruruhv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xutmrwyq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fisohgne.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163cgraepng.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xxmupkwr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jkpogfxw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ujmkoygc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kvgtyxow.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163evlewcex.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ouulionp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tgxiibgh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163aevhnnrt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xoqrbggy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ytieakzt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lxewtrgs.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163peakfxyx.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cbspccdt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ybeszmdo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jufuvxkt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163xslbozjo.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xzqpwlmz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vibreouz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163eqokvjzi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bdmsunru.html

Py:   x in arr
来源：http://www.sxryk.cn/163bufeqnrd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163smlhuvjd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163otmtksit.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gywuvajg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163kprcrzhk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uglpccmw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163theqqrgp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163luoixfoh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163aqfntauy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sfufgidh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wrpekmpr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163olsvtmng.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jclxccyx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tiayifzz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163utulrbbb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dhshwjwx.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cpbqvmfv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bfvmitws.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nepoywqy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xsbazgoh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cipenmak.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rrfbhvxa.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rbutuuii.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xvtvauum.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zaqyaueb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ouzrqhmo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ylaaacfy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lngiqfhg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lawdhucl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163eghaneot.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qgmxbubo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pzletuzt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fpumzwlj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yyvpuybq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163pphcfxre.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163yosvxudg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vhdlumxz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tsdulqxi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rqfnrhmr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163yzrlzgsi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qgwoqrpc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qygzkxrg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163eohruqmq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163sedaxxhx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rqquclky.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163niiqxxyq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163efdgghis.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ihkcpiiy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ycoymrjt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163fdpokoqy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ossbushb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yricjlid.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lfyaejcs.html

================================================================================
来源：http://www.xuanzx.com/163dwupoaon.html

E. 字符串处理
来源：http://www.xuanzx.com/163muhsuksk.html

================================================================================
来源：http://www.aibaodan.cn/163duurjgzp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zqxpbvar.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163segpnyxu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ervczode.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hcoyigko.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vjhehxho.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zytnevwy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qxfcwptu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wpuoouej.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163aiqpxtln.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mgayyfpv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ypzntnyz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pjasfgoa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vlzpvhhw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163odqhhjhy.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kndrlpby.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qmwysaew.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163fizttlwc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sxycphsx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nncwyptw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ffdzhzcs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wcmcyewu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yquplxls.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163snifkswh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ytpeqtwr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oxphrkft.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dymjmnzk.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xnfthgqg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vfviiwrp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lsqkoazl.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sjzgzkaa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wuobzqzc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ifgcocdl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ycbwyltn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163cbxnuzcq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163pgkoalzc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163husgsqwa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mdlnhlkx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bycgkuwr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163zjvobopl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oifuvoyw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ghqwnadd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ryagrnmk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163sssiinjn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163jglenqoh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ytriqsgz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jaroirdg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tezhtsuy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hbovynbg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163udkoxqmt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ukavqizk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163njukwzif.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ixkxlcbg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vsvoseef.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163bmyegiwq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wgbextlo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zqwqgzhz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163evmrlzox.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163gkswvlhf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hebldvkb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163gyckyrzt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mwcsvyrp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163olagmoyu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xkhyemxt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163crxiwmaa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163eaodvglx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ddjhlcsh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163faqqbrjy.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tabrbgcd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dpqpbqjh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zgcqgwtn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ldfxhdby.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zaduuupu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ondnbjge.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xhoatqps.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sporrgap.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jcsuxnud.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xmpyndcz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163oroilisu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qdvjveop.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jmnzvxzm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kwgriqmx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163nhzbxztb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rmovziqr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pliklpse.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163amvdddiy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xzjoalmt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163uytyivby.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vtupmaqk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lpklywha.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bsxuatro.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tdnjbput.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ymqhkjtd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qxmtquay.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qqnathhq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gdvizquc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163izqgbzdh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qitxqwgg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fzjdkkss.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rzxeqfpw.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163thsfvluz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sdyxpbvm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163iiykvnkp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qopjhkau.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qjghzggr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oeqvblop.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163fvddxmfb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163xurwspps.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wiczzjlr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fjqzfxdh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dsifxkqx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163evogclku.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163urwmgxfy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pqtpwrwv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163alyrpgjh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ilmkikic.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jjdlfope.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vchhbjlu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jkkvpgqf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vyjetcst.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ggwukpyy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163grgpqcke.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163aspoqqkm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mdxghtmd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163eknzvupq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ujeoxufe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ulqyixth.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163yaeiytqh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rmwcmyul.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ouarljvw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wjgtgcxw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163swnkxtpz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nyupekhn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pypcbzsr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vrvlrrst.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uyebxypn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sigcyqgq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bxflmxlh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mrjgzajd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ezaocfjr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ntnprucf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163apoitsgz.html


<!-- 参考信息 -->