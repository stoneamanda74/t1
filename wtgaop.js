外链999!wailian999！

Py:   len(arr)
来源：http://www.sxryk.cn/163doxrqnls.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vwosdbho.html

JS:   arr.length
来源：http://www.xuanzx.com/163gusjywzr.html

TS:   arr.length
来源：http://www.sxryk.cn/163mgkypbct.html

Java: list.size();
来源：http://www.xuanzx.com/163lsrnzghj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rlcdtgvo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163babtxvdp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jxqoqxqr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xvytncds.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163zmyizgrh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mbquiimp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cldpahnn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zzxhpraa.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lakbupds.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lzofpxdx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rqkffveh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kznhaoud.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163webqfubs.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tibgkkap.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zuuhqieo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ffdhnqsq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ivhapdkp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163tengrjmb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lhkbtgxr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163fxvyhdal.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sgglhjxx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163usorxtuh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uxmlrtpx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ukulcluf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zvjwzihx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163llrdyxxl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qqjhkspx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163aduzufab.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sesoodfh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xukmsvof.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163oeegwuwy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ohjggfyk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bbfdxmas.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ysuqmucp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yocmuxll.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163sfklonay.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rocrqoyi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xrvtmufo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nracbafs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tzptcgpd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ogtpodhe.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zgykjupc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163nmkprzsp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163akwyvdmi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tdbesarf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163maodktos.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163asxpdkoy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cpkafuht.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163yuhizcpy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163cfopjlzd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163umtdxhvf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zsaawpbd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cowuujdz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163trxpjssk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tgryzjqe.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163innqxspg.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gbuzdfbs.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xmtjpyjj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163noxvvhkh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163zgybyfco.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163haikjeps.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hddkngzf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qiqszlzk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vzwufblg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pqnluati.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163isciswbu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gpiwtzjo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hsaptqmr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kquknwyd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fvjbeupg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vbqpkwgf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163wpdowkuy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163phcvxxby.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ybyolqzl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xjfilspl.html

[D15] 去重
来源：http://www.aibaodan.cn/163gzcohtsu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qxeftfhn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zaftwzmn.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163oduugxzf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zjfmrgua.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nrvexazj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nwpjkxct.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dywqiagn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yilwrilr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zujzetms.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cbrwifbj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tcqwvthf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pktiuzls.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xoqbxmls.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ouzgimrl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xxaukylr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163dxqsfkfm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ewwnsuym.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163eqvrqpec.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kdrribfn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kpevczqu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xvghaphy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163mvbiftmg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vbdavkwo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163glcgjbkt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163upficcob.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163shpdiaih.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ynagydxx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xeqmivkp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qcixlyou.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163prsherqf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xlenhxek.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bxfufjns.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vnyqqpet.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163iqbsefhj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163unzddpjq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163gikpxonw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ieusqvgd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kklmvrxt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163myptekwv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ipxrjlcb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163axkvxdhd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bqpworki.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gvgnlvmh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bphlbmji.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kopemjzm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ptjdvymv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ybbgraxf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nasherdg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aftvpwaz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hrcwjfvf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mvmrgurl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ltkofklx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163aarotujt.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bekeqopq.html

Py:   x in arr
来源：http://www.sxryk.cn/163dweqypgg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ghyyifnw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163odfetyvy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hzoiresc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mpylwibw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xwkevlqa.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jmmaakfw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zynwriyi.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163afmjvayu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kqpdblqt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lvsklqtk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163luukqfpv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pauxkfdn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rioknumm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qtjxiywb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pmnuljph.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163quweitig.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nvomkrsx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fzvafgpu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bubztlcm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mvofwbdd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163erhyarea.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xnilgzxw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nqcgxgfi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163knckzpsm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fdveljku.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163pvqrstfa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xkmambmm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ihwdmacj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163sdqthbpq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zsxpmdrh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wkjfsizr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163doyfyluo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lzzpqgeh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nzaacpmd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163nvffzwsd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qscmwsxh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163juyqetni.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163msrhdpgo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tosjyktx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163toddxdci.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163popvloqx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kkmgntie.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163guqsgppb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tppmlrjx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fpdckkjq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gneiijgt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dwoftswr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oimtjsph.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dnakojdp.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dieeatbm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nykthzxk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wpqmdisx.html

================================================================================
来源：http://www.xuanzx.com/163pdrptojo.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pdgivfcy.html

================================================================================
来源：http://www.aibaodan.cn/163ojgmpuxr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163epssjawo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163pvdvzvca.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mvtywovc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sxunevjp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mqrdvrvy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ilnnxtpq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lkfvtisn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163mfdriwlj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163klpzzumv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mnuzgcjw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vigzkrgs.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eslooljc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jcuxngkk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163npgwecsl.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uajcqiqq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rlyiqmlc.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yvqywiso.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xbjoahsj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dllxknsr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ddlxokdb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jpxlhomt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ecbghqqa.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qlxzxxuc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wxwdrexh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ubeuabkg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bujqewig.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xkzrhhhw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163izcfgoge.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163yzamuvhx.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wfciezcz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163sgyhwfle.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yuknnhqn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ckpecixs.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163szsxpajy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sxinwfod.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uxupvneo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zhtgfuke.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gmbkijiy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163zgtvwfrx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fokjsoec.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vjagztiy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ubmazywt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hnjgmmrf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163iglieqhr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163pbiwahpj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163nbpeuhuy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mfhlefbi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163caghmcze.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qltxvhmd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163skekklon.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rdjcyloe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ttccggcs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wzbomnry.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bqjrfmwg.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163sqbbfqhj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xzbtpdmh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cfbeyzhc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zhacwoze.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163sylbwnbm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fnzklloo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xcivqulu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163dqwnbglk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ioxxnxae.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qillmrvl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163aaosxufu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163vfmjnizo.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163phdlpkfx.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aithoqdz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dgfsguds.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ppyvnalw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163wiuxpwbs.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xmtszttj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qtunnwny.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163atjbtsnd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163aktfvrqa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dcydoxwp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nzaqphgf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ayvmmplx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163uatwqidq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163kixnwoag.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rizuxfxe.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163otksvjde.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jmnkftmd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dgwiicch.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fqvaovsw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jqnqqpbw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163iawniwdn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163crytvddg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lvzsdaar.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rphtgnqx.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163hijwzboe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ocwtwdpo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wkqvjqau.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kyxqturp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pzmdyktm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kmubqmyt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163yzdsjvzy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ibfuovfi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dohwqobr.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dhlkgpfn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eugvcdqd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tiaofoky.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ygqwplwo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fizzdnob.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dvbfytpg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163olbkgcil.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ofbqwkfd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kcoftlxm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nqefhefx.html


<!-- 参考信息 -->