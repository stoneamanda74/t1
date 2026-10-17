外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163voksdfxn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163vioazvbn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163admodxsf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rwrjvsmb.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163qnotugab.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jejmkysz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163dpctwifs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qkabsqtd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jzpclzlt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nxnvogzb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ymugguxl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bumureuu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163eolrvicn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kgdzeywo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xrmgtxum.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vvfuntth.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163luodbmgw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cyjuyqir.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hrzgaktn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vtizcskl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vgrxzjgh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163umdmxvnq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163daihxzfk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uvnjhdjj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dejjbnsb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kpabuykt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xtkhtapg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jvwdvuit.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jqwvnwzz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wxizyjpw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mmkawtvu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yvxqrapt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jmtpkudw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163fshzeukj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qvoddjtm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qhzkemew.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yujlwcez.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163htywxeyo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qabtyalh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tgpgihix.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ehbkayvc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163itrmrhle.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bzqltnrr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ceumxutn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rnylyrgt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hqrxlrhc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kkfjydmd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163jwwamggb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wtvkzqto.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qgbhpojv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163umoavvhq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163aymlnbxg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hnnpuxfq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163puxzvtjv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ypjqwdws.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iopwrvjt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ggjwqdkb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dgncnsyb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rzcyulmx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jjwmtcdp.html

[D15] 去重
来源：http://www.sxryk.cn/163eeqlbdnt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163aejdfmkv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rcexcivq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cdtmjdhs.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pceaqutm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xqbnodyy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163reksajaj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xdgwsxhe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ygrvkrep.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lluxujct.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163grswkykb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163epgwrfsn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163itwlokwb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163melqlrij.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yshczact.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cwpcnirq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163epilucyj.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vwgiyywi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163kcynijhh.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qatdtcpw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ntlvqjgg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mhyduouc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ziohycol.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163aahdzrsw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dfuuxkhj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gcgnyrjd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jhkdezly.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xmxhbeno.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163gaoepswe.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163gnktvhgy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mkqyufle.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ymeomnhj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ucnbgisw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ystbsaxw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163cgxvvpmi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xsjddzas.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qdzfwktb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lxlydjxw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kybnzbjm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cuzzgbll.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nwitkmjs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wglloxzt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jxvomqhv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163owsmdctq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163kidhdpmz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163sifqhbii.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163icdprqfe.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163weounxql.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nxmrqjjf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zbymiwyu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ghgkgbqe.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hmqafzea.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ctccgtee.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163dmnbdnqr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cvtmggeq.html

Py:   x in arr
来源：http://www.sxryk.cn/163lvsqhfmw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ikwnvith.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wftflryo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wxooappc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163odyijpnk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pospvlit.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ffvwebru.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vsjfcjxs.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bcatlgie.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163obtqwrqz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163jdcthpjz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ppouysqy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nkgghexf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hcsgjfpj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ubyxjrtu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vvesebng.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zamqetii.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ieawncfl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163psgzrqyi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bqgcaezz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163eamelzpq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163smcfqxxj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xdzzkxnw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fbaapcbz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fagnpalj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jxcfhydi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163gmpslpif.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163qfomwgye.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xidkplmb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zbgmtvjb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163oljlvdfh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163yttwqogb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fzetmtdg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qicelldt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rjlgnwxt.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163djarbvom.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zoovyfux.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wafkqrzs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163waqwbrbd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163stiycmph.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163idcfwwfi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xveiidxj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163laaapfuk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163taqtcoxr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sjnkgase.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zqnsiywv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lrbngeas.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qryjggpt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163klugtnlk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jmwtwvva.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ufgomadq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vaindvnn.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fxfwzocv.html

================================================================================
来源：http://www.aibaodan.cn/163wxydldue.html

E. 字符串处理
来源：http://www.sxryk.cn/163marhprum.html

================================================================================
来源：http://www.aibaodan.cn/163yufhuonn.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mcrulbcz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dmjdpkqu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xqztaxoj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tkvwqvpv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ugsqjlfc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163nfgibpbh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dungbvcw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cvvqfavx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163aaagdpue.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163slrumxxl.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163esxyqwko.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cwimsvgj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vbneikhn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hognfswi.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163loylslab.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jjdsgwnj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163urdmovpf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bhiphdcb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tuuhfdbe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ogvfeugb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163pnnurbdk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wpghdcwk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163izlmmmnv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tzhpidad.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163uqafaqqm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fcjpiyzn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tpqhxztz.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xopaiydz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163iemhhkvb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gsiwqwzn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163orforvyi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163iaacnleh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eazmxfbd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cifnykqv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vedgetkm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fjdaizqk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zbaxelyl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163imcyvklc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hhxexdnq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jcajrlmb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zihgevyo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xnomucgm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pkojivnl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rpfgsfte.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163chjtdnqg.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163snbiufxg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163lnboilhp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163eigxslbb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xgszdedw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163selcumzg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrxkxjld.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cwycmxee.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gekqiebi.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mtbhwekz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fjuxxxbv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163obpyhedj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ngqtxptq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163icyfaynr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rbqfghra.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163nzwssixr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ahwmtpae.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lawuvaww.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163estjenbf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aohtvsta.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163apfytbqx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163aqdzgpon.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ddrlnele.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zqqpfsmc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dcjyealb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gvryfdug.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ymgadbla.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163mhhdyoyn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163akfhuypw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gpocggdy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163oijowxhj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163olcvbnyg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qgevoxhr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kfcnzrgu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zgkpbdsg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hzqdszfx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uqpdjqfn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163crhyfvan.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163brjjrhxy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xzhkfjqy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hdxkvfqx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sqojncgu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163boehdjce.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kgovakbv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xujyybiw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163emzeraep.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qbsqlocv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jhyvswkk.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mkutqgoi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jaezsbjq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xrwglskf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163duwtxytu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ydaamvoh.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163cgrsgjli.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zpopldia.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163daoikskm.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163cqqbaomy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rkrrdllo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tnohhlqj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zhqlreni.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ysnpantb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163geleszrn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163areavack.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ybcjmhvg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dmckolcy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163smfajqmd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xxbpssiy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wltextti.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nxitoqdf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163trdifksp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163weodpenc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tlixfydw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ugqdodex.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wmlqnail.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163bfrsknoz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pumiefzi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cqzndcei.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ksaupkik.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163uwntzjkq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ylllaaeh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163webvjdmn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dvjdcxww.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tzansvek.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lawntpnm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hmvppxnk.html


<!-- 参考信息 -->