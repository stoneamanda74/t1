外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sryhbgnd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kzsadswa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pjvwhyry.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163raveeago.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163teuahxmp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163opnmlvwo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cunikqjg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sggiihif.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vnomzxqm.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zhjoopjr.html

JS:   arr.length
来源：http://www.xuanzx.com/163eeizsqrv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xegamvlg.html

Java: list.size();
来源：http://www.aibaodan.cn/163ekblcvhw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163absqxgmk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rxwyhtea.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vyxamtwp.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ttxqaxpd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qktzzsqm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163psbmczmp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ubaboezj.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rtuxmiqx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gtvvmkas.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ihsrwvfe.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163crfhehec.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163blhfvnqu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tqrtpmvn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163etyngagg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163psnjjuzv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163soutsbxg.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163nvexndws.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ucthjsve.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qvtmyzwl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163swznryld.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pdyutzur.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sudlglcx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163evyjtqjo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163znpkmddw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xiobezni.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163engzuwqk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xelpaxyl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sbgnsdyf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tmjbotqm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bifbpayb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ssltsmbu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lrbuwggq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qdchydha.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pfzzxwre.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vcddfmed.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cmpgbgyq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163robedfxo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vztkfqws.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ktmcrhek.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lqrwvobi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163mvvwudqh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pveszsea.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163esklljbb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163knallvmf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163bdsakxzq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jofuxcsy.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dbnkpoxq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bkmfsvjj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163mqbzmpjn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uffigxit.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163olwlvzcz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163psistnir.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mrhefjhd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163kvdqrdhg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163urnvcoid.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163laliqvfi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bxsxtchu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nhiouolr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ejoqwfer.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hbqrjkqi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163amualeyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163aswjdzcc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yiufgogi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vmhrbimq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wehwqsbn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zpspviws.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fuvcicca.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hwxtbaym.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ybomedov.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163glzcjsqx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163crsgpwnd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kblsvlxu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ezuuvrsh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tkuwlkvn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ozzrzggc.html

[D15] 去重
来源：http://www.xuanzx.com/163hmmwxezc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rlhczsdx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163iwfhiown.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163utweevyv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dtkdlzzf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kwkdvmla.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ytyervtn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gpwfzoek.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163cxghxwuw.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163biqiywxw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rpdigpvf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163fdspkzek.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lwfmxsgj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rzeyznlk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163djcvgubp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163amyqcwcf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nhqbnzso.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vawoupvy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mfzhkdsu.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jmwnjuyf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163sptlptas.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jqqzwgmm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wjzaecqz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163newanbez.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pkciiyas.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mwttcqcz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bmncwjyf.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163vojncmzg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163sjhcgxvx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zuhowbss.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kkanljrx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uwuintft.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zzgiivda.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163byuvqejs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163avycyuna.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qpkqgctn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ehfjtdbc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mnwyhkee.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lqzkqzzx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zkjcredv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mpofysch.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163umcylarl.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fkitrfwa.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163yyoltrhl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bcrihquv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lvqlqpjw.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163tgnzsydy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jkhzsxva.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163khenwpge.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pihzwkxk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163emtjiaar.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rfggtckd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qtovefcl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wnneoehg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mbrumsin.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pfdjpbgg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qrxmsggm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163moplvdri.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163liujlcua.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cqcigwax.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ujlfkpfy.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kegnftqx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ieslzvot.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yelmfzlf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163exsrmjio.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pmoxrxuv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163itxhwgzw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mdngvolb.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wtcyuayl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163tqgolqwi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ymrlpdcl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rmwgpgyr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dcffjrvn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163twoitwlc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ggsnfrna.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ibmtmkzi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qvmnakti.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oxjqwnau.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nomkhanz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zfxztndl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jotapeng.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163izkglizz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163bluolwrd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pwpugrqc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163snoezieg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wxtphjub.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qvrfptkv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sezrjhnw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zpilflyo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tkzsnoyn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163niimfiln.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pdurbwyl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tggdybkj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ulqjrxrx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rbdimshm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zwzqziaj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gvhiuvpu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wtbjwtne.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hhkyxdlx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nzkauojb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vzzmeafb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163veedtvxt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163hoffikgh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163emwzxnug.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xqsbkkfh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163krujqkgo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ygqhjoyd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wbcpikqi.html

================================================================================
来源：http://www.aibaodan.cn/163cyvcbesy.html

E. 字符串处理
来源：http://www.sxryk.cn/163wvnjjhzb.html

================================================================================
来源：http://www.aibaodan.cn/163weqyniea.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kimdcesg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mfbbrucx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163srzdxkuk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dqgqbwnn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eqkvtcfe.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lkqcjthp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163clihycit.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fpsgfjrb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163iolumwks.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vmvftbjb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dubvisuj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163syoihdix.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lcftyudq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wkrcwioh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ulwipkyy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163egjzuicx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ndgnirbu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rtuggzls.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bowncxjk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gkqmgqtd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uemvrnaw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rykcsezs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rekqlgkt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163elkbvzgw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rygklvit.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ejulofbw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wecbjgve.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163tlanjbwk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zlazkjya.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ndacyulu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mavfzxaq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dtxthnxt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163aofhtulu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kshelumt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ksgtgbja.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163zhhzhmvs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bvjgzqcj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jlcmrqrl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qduxwuuh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163krnetugz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163oapteaxn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dohrzecz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ahyabijm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ltydhghq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vqrqzspt.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tgwdpjhi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163sslrztzu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163otqbqtnw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uugffaid.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163imfgriow.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fsgwmmbd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163imymiwbu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163izrrewug.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ipvqmwbi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qmhuuoac.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rlggzupj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rymhhwct.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tslaiyko.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163klvzvnqz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xfinxmtf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cuslxpng.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163szicbfhj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sjgbjskr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xpzhqpaf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xpvnbtlz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wxgzttgk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163vaxkjpli.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kcmvxedw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nohfuvwv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ndmcrnel.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163khtkqeuu.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163coqeejeb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163epdydnba.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zwkuhhca.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163awtsopsh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163onulkbml.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bcxuqedo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gyjysedi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qqaxvrft.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ayhfloxg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vwwnllsw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qeoqcdut.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tsiettif.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163eswfhlxw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ahygqqzb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qncdkjmh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jxsjpjhl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163izmzizez.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tyniflql.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163cqcomgak.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zpclbhkx.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kagftcmd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qmqteftw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jpwvyiuk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xqizdqrf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163drygtvjj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163sqbeiyfv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jekiwnyq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kbcnjtrl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163alulkcoz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nlhqlnvf.html


<!-- 参考信息 -->