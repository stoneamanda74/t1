外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163motnxdlr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ggfudtsd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lrxcojth.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zlupahzs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163smoqunza.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fimkcxvx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yrabfnjk.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dyuznnza.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vrdbvbgj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lyqtpzgi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wyfuqtpi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qsknmjwp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163phfoxrml.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fvlbwagh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163twrijdjd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zmqubwjp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hgiqahmb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wqanyxqs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rhfkpnxy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163acjljgod.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163yvajdgch.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163rohamjkx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163csboukoj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wqzknhqq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yxwhjyqf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xtkszpzt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163myirrdtr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nkzaoqip.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yejoumkw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163memswojf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uktachln.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ufdgmbjr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163fqiwougi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163uwtmeqov.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163krdupihv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sttlborg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xzuwughv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mswmkkqv.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sglqcbhh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wmedlrgf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rxljhqbd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qmflvhoa.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zevgscos.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rutirpiw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bpekellw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163eozoirbc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163xikadprb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163upzltsny.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ygjsdzix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ttozvrhp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zsvvttsd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kvedbunh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xnydxjvz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yqvcjugz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tnxircjw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hararigt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vtfipapa.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xunsokab.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ixhdbpcg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wbhodjfn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mdymxkgp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hlnoousa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zlqcrjpl.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163glnsuejc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163nrjvdpnc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163atvwejxp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rzhvnrrc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vnwjchqi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qomwzjwc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mtpqcehk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vzqrqhnp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163jnsiuauh.html

[D15] 去重
来源：http://www.aibaodan.cn/163wfslxjxg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xgnjbfzc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uvnslwzs.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lmynfxab.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cqhenmsz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jgbyxybp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163uelcniyp.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yqmjpwmt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fnzcaunr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163quszcmmg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163exbbfcxo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bbgbzujv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pzhplrrp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yrdtxabh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pxefodfg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xlmthare.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163dudvmlxf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nowuptcb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163acefqcdr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jlcuhtuz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xufsorci.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gtmviugy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bzvhzohs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ondvujzt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163obzsmcrg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163muvcnnrh.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fwdouecz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kysclstj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uykvvxds.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163expvgxiy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gogxmbbl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ehwcqklt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xhegadth.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vxcdxawr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qufttmgv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163aprweyyy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163clcefuzx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cqjbydnt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xdwoquwy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163esibjmsc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uidjtkkx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hnbokbks.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rwyawdfi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mmfmsyus.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ykrvmdei.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vtgvgjhx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vffwwjyf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ncfbvozr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zrgohyoe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rbilbxda.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hvfhszio.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fqrrtbdi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yormkevn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163chkamqui.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bhruhgke.html

Py:   x in arr
来源：http://www.xuanzx.com/163ideugkie.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vxvevalh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ndvgwcra.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163yeqljmlu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ztztrezy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xvmyogqz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mabpmxjp.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vxindflv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163lfsnnnyc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kxqhicic.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163rvroizvo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163inpzcror.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163nyvtvmei.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jyfgnwwn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163odsjcasg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dnualrjj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163uefnkpef.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163siqlclta.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xqmpgijd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dwrhqbxd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gaadltjm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ypgziepn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163eqjitwjr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163igqtimnd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ceprtavs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wgpfjivx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163pjvnlvio.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163aotbnjkd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mcpocgxx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163agwyugtn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rnrqayyb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lbxrrwdn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163piahmwkq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rmrafegr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163txzaihjj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lmtdakxb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cztwpcyl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163zjrwcyhw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163icmwtots.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zyoaglfx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dtzosqdd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jaknjjzi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ytnepmig.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cahktdhu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mrggulyp.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163slgprktt.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ndfbqphv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fwfndqjy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bzzfjsou.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163oqoheknv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163oehapihe.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wvmcfylo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lhergqoi.html

================================================================================
来源：http://www.aibaodan.cn/163sabyqhxb.html

E. 字符串处理
来源：http://www.xuanzx.com/163zfbbyhgz.html

================================================================================
来源：http://www.sxryk.cn/163nonrpdve.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pyraldum.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kyxccijz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kjqewhnl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ljqfswmr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163upcrlubp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zswhalle.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yjslblbr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ezjztjsr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163emlztssa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163didhobky.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nzrjfndd.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mtkrvqam.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mebrwjvb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nqggjjia.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163sxosexuk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qbwqjhfm.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163orstiqgn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jcfvupyf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sodamurx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qwmgbjyb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163husckaif.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163pisrzhtd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ykbumoyi.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lfgmkzns.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ngcgfbay.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163oxqzbmiz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rmylwkbn.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hnvxpxwl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fyrikmtt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ugfmmzcm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kepppyrw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163logastrk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jzxvcwlj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yzvprdfy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zqxaunji.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163chsibwpm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qfqjjubp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163shopxxjs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bswzelhl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lyyohuqv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163qtrsdeto.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jyuflafv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wkbtstix.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vuyxnfyg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kokpbsep.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163uwgrwpti.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pkvqtiiw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163exuqqgvc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tggnedpj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163psijwhxc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163omedvmss.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gfrvhnlp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oedkcubi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163foimobgt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163uxsrwcvp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tpmgnkeq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ityhdlhr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oottjlth.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tloplxzx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ilcwugfl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vrvlyjnx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vymuehrw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163koiabtff.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aogugvja.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wafirdnm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163notmycft.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ckagmala.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ysbpxkbh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vrawefcb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yesoadny.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hyzblysx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163expcbuta.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bykrdcmo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kltorsfq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163sjbtyxzm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yjliuufx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bcrkgfeq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tknyoxcd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163uwlgrnyz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kcrapgto.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qgbnjynu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bstgnnil.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ucstfqhi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bnabtmub.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ydvjbbyh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ndckgydr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ksjiquzz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qufyelwk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tzxdbxgj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163sujigflm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zbgtsjpv.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lbtmvgfu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163siqwtlgn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163blfaggne.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wvhkorkn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rcmtqjmv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lavjpeqg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ukrwggfm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163upbiqnov.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nzowfwpn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163luuujtjg.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nxvjctlm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163czqmemob.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zdxeqlag.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163avrqjoum.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gxzxarmu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163aphiqily.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ftjwjtil.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bswxxjkf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zvcnqrvp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rirxigdw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163htdfqiwh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tqvknktv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nzygwiaf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163merhbybm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qkqsbqab.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wvvonypj.html


<!-- 参考信息 -->