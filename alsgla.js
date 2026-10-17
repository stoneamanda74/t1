外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ovnjcjdo.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163knwxlqlf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ijzgaufr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nybwbaaz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iobrobyr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lnnagdue.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163oqhfalhr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xihkpegq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gvbnfrev.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163iuocmlrr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hhdzqdlq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163smpcvzbv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163hhjumjwk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ryxpfejq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163aueqwkpg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rapjozhw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163pqfhbjav.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bkyecgmz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ckmpcatf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ceyheolp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163yfblznrl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rhbuxgbw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eddcyopb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qugqukqh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qpktiwcc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ohrcfgdv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mpninmeh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163soozueev.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dfmgjgnk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ylayodsg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wjeltxvd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ebndewii.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163aeagdbhl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zebuidkj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163xisamxsm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gbglnsot.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jbxjvdut.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qzrctqmc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163sgubzttb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tvfoyado.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jejpprye.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cqppeqqg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mcsqledy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wxovjlqs.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163smmisdlv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lskswtju.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163deqwhyfs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bajlfvfl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163foqndoik.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163oentevlj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rxydxvig.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fvisdwce.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ypohfmac.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163dwxhccyh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163piqkwseu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163whbedxsl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qzyiadoo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zytjbwwo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gacugvhq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gzrglqub.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163plrbrate.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zchxqnfb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lfkekjbv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fiveoung.html

[D15] 去重
来源：http://www.aibaodan.cn/163kfxwjpyg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163viilgbqa.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163otajyqtp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nzxirhcb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nfgbqvsb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xthvgdre.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zqhoksut.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163fchftqlz.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wdhdcjmf.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163isaucvvv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lzccoryf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rjjjhfor.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163myquwjgm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163efsscnrq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fknimxvs.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pcevxcig.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fgdaqtiu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ulzlhvfx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hmoeygke.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hnmuksum.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wjdawuew.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lpxwauex.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dnnboqky.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163eaeyyism.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zfsqleui.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163oeajhzye.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vqomldtg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fifidfhn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qglfslgm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rwsjsftk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163zgloiqqh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163dedmrgrk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nravavqy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ogcyjqph.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mwykdzwc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cvzvycwf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cxzlgcrp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ziddfsbx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dpsgdhkn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ttunrojs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jotoaghb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163serknnmk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163aruglksi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ppsmakfx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zihofdvb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gvgjvaek.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163drrzxtdy.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163qzjikdna.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fpnzuiqh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kycacbja.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gsefpdwk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ncgkgony.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qhxodwzc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qvusdiug.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cuczvlgz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ouryoslf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hvcclvxj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xwbzdhew.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xavokdjw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cfnbiwky.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jbpiuyad.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ipfdjdmt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163aqndyafm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yybowovr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ebtmlven.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vaxfgzsg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163oglyscyp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hikbvuyi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qptfpcha.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163asnwedsx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xilkgxnl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gcpjswpd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163klvvksjj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xckixein.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lrwjxzvz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lobrdnhd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163icryusdc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nbfindhe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dcewgynx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dggwxoor.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rgyztzcs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nmiwymev.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163igsnuxbz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bhpyuwyd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ksididdi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ivqivrxg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163awciaysb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ylipizfv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wfsaljei.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163srtndwci.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ifyyjzax.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wpkxqsoe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gdmeccnj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wkmhhvlc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ojrjalgt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vgnlfcsb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wimmcbik.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ctpgmbvy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hrpxghdx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163tbzhsqfk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ggqvvkls.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163amhghdiq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ilrsgtqd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yaffebxt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163tyauvqfe.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163atdwfvje.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dejsxppo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lrsuqran.html

================================================================================
来源：http://www.aibaodan.cn/163awzirybf.html

E. 字符串处理
来源：http://www.sxryk.cn/163omrkylve.html

================================================================================
来源：http://www.xuanzx.com/163pkvwohuy.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wobqnifg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163uueikdab.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ccqnabjs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ukxoivfk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nipcbfrx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vigiivim.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xnnvgiek.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tfelmzox.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vzxoqerf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bklcwttl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dctphlsj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ptemfdml.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163brknjcqa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nzxxqaae.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yuuyxcil.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mcafeoqq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xpeiwfxk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gftqbnzq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rjuzeqsv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oozrwdje.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bthhmefb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nedzhkjq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cmekfllz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ftncdmnr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tauujfeb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163izkcekfz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jloyhjhj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ychfpoqc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163osrrobws.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163lajgeumr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nodkmbkk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163auspaotm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xdrxtajo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qzicavdr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163agczgvvt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pzgwtosc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163gwnajsqp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163cflihkoc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hxcsmiaj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tquxunch.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mvztgkty.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ewfebywn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wraotihs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163brtodxvg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tijhqvfx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ncoyzlyg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ntccwiuc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163txnyhsjs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163icucffxn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ogaeditf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gemgghkl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mdnlpenz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ahxhuuto.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163npvyheik.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dxvbwvbf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163bvkfftoi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vgaqlunv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nbhfmuon.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mytlpabd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cskczbue.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xgpganav.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uclnmzoq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gpngxxyx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uyugnvne.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tylddtgd.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163elbjthng.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vilysvkb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163oncfnpel.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163opevzndn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rwwpinec.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qnydglpe.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nncniyli.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wuusyjmn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163zabseibt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163gjzfzfht.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nugsgfgh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jmvdtxqy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hvstaefz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vgmaqjwp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163liayojil.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zudmnggs.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ejwgwqdp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fwefntmf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ixzazitd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jblnxskt.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wekwedfy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163iwwxjimp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pzzgjhiw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fvmrgcwc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ohrzdeub.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jwicsbav.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pffmdqwk.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qsdkkfhu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bpafaybf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ogqmitqx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163iemcshey.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fxhwmsco.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bwqzsojs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qsswhdbf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uwctpdzk.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jouwodxm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ehxeoffj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uxotrnmz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cofpvsqf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vnbzdnnx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dqabvuzt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mvninmbv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163okeopdjf.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163olybcpgm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pdqfnowi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wvkdidgh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sayzjtze.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ggjlkgqn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fznzehbe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163siojtqfh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163sclnmwsq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vkcaotpn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pwozgvwk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ukhnwqyo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xtthowwp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bzgcrjjc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163czjlhiaq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rzpqemoo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163goluydkd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163aolxtyhp.html


<!-- 参考信息 -->