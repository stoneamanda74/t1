外链999!wailian999！

Java: list.size();
来源：http://www.aibaodan.cn/163yvixfmwi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dxnofmys.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ssvdadpj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163eakypkzm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xumpvjjo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dkujnyol.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hjwrepmh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ybnyqdud.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vduyaaym.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163pwioafct.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163vhfpkkyy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163iazzhdhw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163odjxofit.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jqcpevyx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rikakorp.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ptruluqb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hvonmtsr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mxmfkhjn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wfykwktc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163amtlysvi.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qnrdfrhy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xkkvbhnp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zpgywqbd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tztenvqw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163uamhvfkl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jwlpyzaj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163amistrdf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163keajpfyo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tfgpfxxk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vvxkxavr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fmjkdixt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163tcapmdwf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hwuilwcz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vjqemphv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163estpdfzy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hpoodqbo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tiggdkvd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163gpubuodc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163oladlvli.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ladbbodm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oanteesg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yuivytdw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wrocrfet.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xujihcbs.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163uccupmxk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tfdgchxn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iyrckfom.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lwlfgbob.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fvjfexhc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rjnuewys.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163iiflrvff.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ftzfdobe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mbirnusl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cecsdkue.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uhjjqdvj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163qotjdjaj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ayygrrcm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sdpuubww.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jcxhsgtp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163swwxlgxm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zsvuazlw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hmzrlwbn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uvxxgpua.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gonsfygm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kqwvmqzw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kkrjulvz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dbucofvr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ccjodspl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163isvpsgra.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163iuclftor.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hfvqwlft.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cwiwazqg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163yqtnvfss.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gzfiqgyy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163nlducccr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163apgrniin.html

[D15] 去重
来源：http://www.xuanzx.com/163xeigofwq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mzwgvmwm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ircklflq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163abjpsveq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wcnfzlds.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bidvbotn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gsvvznoj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163welvklfp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tsbmmmgd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cazseyer.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qjkiwzls.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nbypchpm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163muiewwtg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kibzjeqr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gyopbhdo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mdwcjbbn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lrsopmwr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163oloyesfd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mtkvnqxp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fjzscypy.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hzphuark.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vnhraeuy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jeahegta.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vpsezghh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cdtrfepe.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163whsfaeaq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mbkvkdlv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qcpdgpzb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tjuymcgj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163nevwndwk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ijhxrypt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uahkxajm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jfkmvead.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mrtnkaar.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163exsjiqdp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zahrofid.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163viocriww.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ppmnevxu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jpqhhqkk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163izohzbpq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ohdgmlhg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163shohattw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ptrxvlpc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ulcpbdix.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163djwyusrp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wvbbksbz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163evplcqqu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hhwbdqia.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fkvwtmkx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vztfszom.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gkdkvegk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bgpxvvls.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163cmdkdcho.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jyjukieh.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ggocuedy.html

Py:   x in arr
来源：http://www.sxryk.cn/163gwwekcly.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ugcsrkro.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bqamoukl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rpyzqcdv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kepzvpsf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163agelvzjq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163elskaoxs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pcbohjoy.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jqfdekxx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163wcvdpijd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163aspiwoyq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qawchluq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hitwfjab.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lallewnk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pvmsgiin.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xeejsbkg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xaeergfn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nfdykjtk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fanfzwdf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fhptmqvi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ynsaaxli.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ryhkutjr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qlqsgaml.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qjopgrjp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mvulxnid.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xqsefmjo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fkdxculx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163uojxkqls.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qagkqwux.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ztfxcray.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gstdvxzp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163inuzvmrp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163oogltpny.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163yyfwimkr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nrwniswq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lepxnznf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163otxzbtvo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ehhxmgff.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mvtizjls.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163spgdkvzq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tsmacrgc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lxvjqaof.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163defobetw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ezmvbyhr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mmowcigi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jthajxsh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163piqmrwyk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uktmxqyj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hzfjvxzz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lnupepwt.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mcamkgzr.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kfaerjdj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sbsvbqvg.html

================================================================================
来源：http://www.sxryk.cn/163sqarnhok.html

E. 字符串处理
来源：http://www.xuanzx.com/163ethdkftu.html

================================================================================
来源：http://www.xuanzx.com/163jfwqgomu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163iufcuwec.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163exbhojfe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ofiakipa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163foblaoio.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wvxjqler.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hmdcmsch.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163scwoeeaq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tqqzccnd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wtlfdbyx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vfjnnjwg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163svlbcluk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zmhjlirf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kylfucod.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tthdvgrf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eldzuktb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rghnepqi.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mlyebvds.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bbvijdvx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ectuvkwu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rhxoabvc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163divadgha.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ybxgrpog.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bgqrrbhn.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163axjouvzk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ngpyggsk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fiyocmaa.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fndpkhpf.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yfsjduaj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163oxbwemiy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lojsvxdr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ecgktwiw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163opqoizrc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hbjeghae.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163plodgqmy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163uacvvwaz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qrlsttci.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163groujsip.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qtbmflhh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163yhcjuagz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mmxnobux.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ijsmiszv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163swqdbpso.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ltgyyfdi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163algiwrkt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163doaeruqz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kerwbare.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ibpdfeat.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rqxepyoi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kodpywyb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xutrxtkd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ojmihidk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cprdftuh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163pidzxkjm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dywgdkzs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qntmubnn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163scksboqa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dufgbzhh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nzomizof.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ikjbhzip.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163olrahuba.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fumqciql.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rxaxpuic.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163mlwnmxpf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pmlxtguh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163biezvryp.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kxyuduen.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dmtptbbn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163unzfifxk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163sphuikxw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163cvicreot.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hlrrbine.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hgxixzsz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vjdcghjd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163uecsebiu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fkoabuiv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ezepmdwc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kdihwkjf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bocltezp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vywgtpwl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mioplrzi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qdhbybgz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163aeodzgvx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ullsdzbh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fdjpzzpt.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ftmepvzy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ihxpttxv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ctupqxhu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xxnnonxy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163rxvzwfjd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rltbhsjm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163auspqeqy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fjexdwhs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wephupdv.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mltfupus.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fythmypf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dyxwbouu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vleurfll.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ipjboxdm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wfmgqtwz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pdknkbni.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pjtlvbxl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nqlzarxj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yqjalxip.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vvjvavqn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tetgjwoi.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ctrktpth.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163midrayvw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163alqjogwh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rrymcyxy.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wthxwilf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dmojuonu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163enenftvc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rfrtrzkj.html


<!-- 参考信息 -->