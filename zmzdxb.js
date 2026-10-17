外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163swzjtwot.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rvmilwub.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qydimwre.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lkmdshgm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jihxgosj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hqkrhgrs.html

JS:   arr.length
来源：http://www.sxryk.cn/163olkscffs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mprwmdse.html

Java: list.size();
来源：http://www.aibaodan.cn/163hmifcqyb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kmktzhyc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zlyomjng.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qumqxumh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lwhmqeyz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cdzukqec.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vesjtgim.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wtrsgxly.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163whyzuayi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163duuhircd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xozpzdsi.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wumjecgc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dwtprnfn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hkwqiefa.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uayuahpf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gevyfxkn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qdutlrqx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jweyixej.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163emuykofa.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jrroboxh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qvuqdffo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163nrroelge.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lzxipfql.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dstiqzgu.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163iqscyuft.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ygycnvuq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zqmxfoak.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163myntuzkd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tnylvpua.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nlfcihoz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jvwhcgqb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yfuvfvvp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ckpjfaqu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mpbcbctm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tgexpwoz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bwennwmj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163djnkguqp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bpaifzxc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hlfwqqhc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fqdlzdtg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uqiazeiq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zenqrxct.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163symnurbv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163azqyrahd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ovhvdwlh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yplmdziv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mtzojpmg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ypoltjto.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163sydbylmm.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rvonyslu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cjcthgbw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163deluhfxv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163twkbzzqz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163opqngxfu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163afnfzhfo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zqgzoezf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163trjtjsgn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tmknnvuz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rxampicl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yycooqxo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163akrwrzab.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ifwuhtsq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uhyfiavo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cfndrhwq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163aodihqea.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vkjvtkoe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163izhuwsym.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163stwgmluf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163inwufbju.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163addinizo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hzwxihnv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ojernnns.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jteawetu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pyqmampt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qxayhbwg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163yjcnxemz.html

[D15] 去重
来源：http://www.xuanzx.com/163swbdctip.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nrodnray.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fapzihrz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xdunasyb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gncmneon.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mhbkdjkz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rkehaufs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ulrmjdgc.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163untkgoho.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pykqkune.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ozlccivc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hluelpyr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lgawajkv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zldgqqbk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163qutusgwb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kpjmxsre.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ccskqppt.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ksogvryx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tdezeddm.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163zavykyrc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163odmhbxuj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ucupzkho.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163mabiecco.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wlkemipy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gklvcvgv.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gqsqobwe.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163chyvwerh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rsedtjik.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mxiltxep.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xbnyfurf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ljkdginp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163efsnzvvm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ydfzvqaz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xxkiikfa.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fnnreixm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163gxiwxvqb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163venhxakx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163myjdinao.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nhieptac.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vyzievrq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mxpobqrc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tuzmbimp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rapgtoaq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163owyyezvh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163glprtgqo.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ebeicqab.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163riocxehz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163iueytkzc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rkijlzsp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ukeywyxw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gvohrspp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vddqhrvy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bqtabikz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163itgyizrk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zruecnxm.html

Py:   x in arr
来源：http://www.xuanzx.com/163ugidbbkm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mmjbgkrb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vqwtsqti.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163twvkfhme.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tpoeglqd.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fioleqtw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163limfqwsr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163mvkesmaa.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lvwujcik.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163feanhlti.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wwztxrxq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jvkqcdur.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ovwcdliy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pwnfhxrn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163padrkyqf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xtlpvokv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cdowojtt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ktykbkfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rahnfccb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nohsemsc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163brtfqjko.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hvwbotod.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ikjuaguv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kmckelrd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wcdjzunc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vjyrggyp.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mmhfgvhi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ylxrfblm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hleseoip.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163bsyicbyt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qwuanogt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tseynsqa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gwnrilts.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163bndekpuh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163qwvnhulo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qcdyfgse.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163tigmirbi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wkwtyejz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163klvaspgd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nzjtalrz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ovlxgmme.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163grfdfvjp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163yzsvihdo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ppxunedw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163geaxobtd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vwfbbiqj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nzxmmudy.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jmfagksu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163smauzyyb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bhtcvntn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xpjfpiqi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pztlstep.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mpwpkrci.html

================================================================================
来源：http://www.xuanzx.com/163qmbdjvrr.html

E. 字符串处理
来源：http://www.sxryk.cn/163pdjqsseu.html

================================================================================
来源：http://www.aibaodan.cn/163hhfptvev.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kxkoffqp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163iejqayaj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cddylhms.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163grppaydo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ushdwfus.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qvejgefc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ajnocvhy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vhxitrwv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wfbfqhlj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wbemgald.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rortzyzm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163voghnqgt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qlvmnynk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163haaihzgi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yavmbynp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rcktkwrr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163aafrwntc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163prbrnfik.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163zzuihyda.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sswhzkca.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mewqvcpe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cswmcmqq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tvcqaiqa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163aijopkby.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163wznoifzj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nedgmrlf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qwxuvgsp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yyjjghwt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wzzjlxmv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jndfrxrb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ugcgnfro.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163iyeacqei.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163foltrtmj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163khlaxwht.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vvwhgmnq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163iccijfla.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dxqnprzu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qhrjtawe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hsjxepnj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jooflwjr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wqvshobp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163daylnbar.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163cnxsvdcc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uratzmhz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ywxwrrbi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163edpxlkcv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pgsxocmo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163acpmtdvo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jezzpecx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vbwpuxtt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zogivmhu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163slomiiqo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zbuxnkuk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vhgmigvi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dypviovc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dhoxnnrm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163tvopzltp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hjpnadux.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uqrkjilu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hoviwklf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pwmxehzd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163phqcyjpq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vkvaadus.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163wxrahqwo.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rfzwxhnn.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xmzdqgec.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gpfagglf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qnswrhlp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vpwwhfun.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ljksxcan.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163oepslxwa.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163joxoxxae.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hhxtepgo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rtvuirsj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ofqrzdju.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gnlqqwjz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163khoyaixt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163sjyvistx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xxtqkzla.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ylkxfvee.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163dgicyfts.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163jikpszpe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163pwazxrue.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163cqdtffhl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163norlffph.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wjexlcvl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dvnukcfm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mahzkguh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163algqqxci.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kurrjgxe.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vtqbeamq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qfpyvgyn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ydwyboti.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bfuwvdlm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hiedpqnj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163eaqdrlgk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uvkdpjpp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lbtarklw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nfwgcjtj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gywwstvo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163laxdtfai.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163lcoqgdko.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ljnbajkk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kfmwyiwf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mhomjpwn.html


<!-- 参考信息 -->