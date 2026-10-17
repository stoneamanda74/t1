外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mxicmkqx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lzrhdhec.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cwcacbcw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tboewmde.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jzuuzaix.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163slobfegs.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cgvwumoo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163anvnjqrh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zzceulax.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kybbenim.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163mijomhiv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hkxzhjiw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163aexnapiw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fovmjzpa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qxbzasnw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kyrhilti.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163huuhfidk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163twnodfjj.html

JS:   arr.length
来源：http://www.sxryk.cn/163sqkanlyj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hokxjbcp.html

Java: list.size();
来源：http://www.xuanzx.com/163aptmejvz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tulsbtnx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163fdxsqoua.html

C#:   list.Count;
来源：http://www.sxryk.cn/163flvpdwcb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kwktaggy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163swsxzjua.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163iptkhjnx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ndobuqyx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kxntshlp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ruwxtthg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rtsrrdxg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kiaovcti.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kqrutbdb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lhskcunf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163cgbekevg.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xjpbaych.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163agayxqjp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kurejzmb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163axapttxy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nktxkazp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jsdzifbz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vwbppogr.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xiuaxupd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163muvcwbfd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gmphcrhz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163yrxxnvjh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nqskfviz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lrutoyau.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163borxdrtm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bqprowbv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zrdrswpx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wtebijyw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fqaklvkq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mrbealsm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163smkbguxy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rixveide.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qpgapqmg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dgvvmwtm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rrsyechk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163kecjtcrc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fzfxqpmv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gofutakl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163eakvkfpg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dczyhwyy.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wqcncdpa.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163plzcemzp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cyxebgdu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pkrdiakn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163alprweyq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163josltpih.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dtgkfpvq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wevhplsu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tnoldbkf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xasdtqai.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zjckfgoo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bjfeiqrd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fxqknknd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rxjpitsi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lqzcvsrs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wjwufdqm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dcjthleo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lstzgfij.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sxtiahdx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163sjggsfoi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163dypxzemc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vhhtpjnd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163onelmlzf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nkapfhdb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163apiestwg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163obyrrimn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vluizbfu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yuobyscb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163emmlsrrr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163stcrgasw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jlfychit.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163tswxxpbq.html

[D15] 去重
来源：http://www.aibaodan.cn/163qebwecee.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bjtybrsm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163uxzqiced.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nfeedmnn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lfwfutya.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fduzywpu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wowuujcn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163egdjxwnd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163aiddkylx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fkrosheh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zvsuccxf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163fbeuyqyr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fnopcjcu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yeffzhlk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ewisguku.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gkbhtcak.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jafnqhaw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163utebltwm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163adwyiiyj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163upkmznpm.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rearkoog.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wetzuqgb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163cghysvax.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hcfpogig.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tszqchlr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rrglokxm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163reaylbgs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163falwgisu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gqawvdmc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mgoklehp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163npuvrnac.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kcdgbsdx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163thfsibkg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ybymondb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zioxqluh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lehnryyg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nxubzbiu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xzoronvc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163egdmxjzv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fwhuydaw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uyyeught.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163byncmgsl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163wtnivthg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rgpojyoj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dudhaiyw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ocowmtqa.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qjtrlklz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jxterhvx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163etahtukc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uktjlgxt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dgxhfvey.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qrrhdctp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wwxjbzii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ypksvxnq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nvfesvqj.html

Py:   x in arr
来源：http://www.sxryk.cn/163ayccpjcs.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ofpcytvw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lltljpad.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hyihzoed.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qzuwydyo.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163rgooesyu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dtacvnyo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xmylvaeb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163doudxrff.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vxtihhoo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163rdxeitxf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dkyatshw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bqoszmfm.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163olairkpy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dkvniagq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ezhejlzh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ottbsbyd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163mfshwcgd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163fwxfhpvx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163yxaloyya.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fptjuqdq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ijkstqdj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hvobfnbl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163odmiljdo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xahafzzw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nmzamxdm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tejrzwnz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qreyzsjr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ayewfyvo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dhouyhaw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163dxaywnfo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qvkjomdl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163idjaylww.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163cvmjsklm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fkpxgopa.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163phbcaoij.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163aqxdlegt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ocpgtgdk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dodstjjb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zcezsubi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rmxpvzfi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nwfoffwc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tsakzaxr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xbjumtld.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qfcnekas.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tjimpeux.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163rjmqjgzw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xpjttkez.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zxovqklk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vlxcflys.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163blmzaljz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vxkrzjma.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163szvgilot.html

================================================================================
来源：http://www.aibaodan.cn/163idzbalak.html

E. 字符串处理
来源：http://www.xuanzx.com/163indpfbst.html

================================================================================
来源：http://www.sxryk.cn/163dvnpyqgv.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163muauoibh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163uylehird.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sotlooip.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163oecrysjo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tihrqtap.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ixoxqzkl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zdostwrl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pptpwohi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yontzlwh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163slaiboos.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vuuhhiqh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163utlamlic.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wmcglsdo.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yfcnpjpx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gxqmujvb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pwkcnsjh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vireknuv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zevmnuro.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xeoqejwi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zkvivipi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nrnlpxjm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qnwwmjky.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wkenabvn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163whujdsou.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163igeohkxk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bgrgvonh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rspavhxh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vorvivez.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qbtnoqci.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rltambio.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163oibnegrv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mgrxlujx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pdmgvzbo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163altmeprp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ykxhlguv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rdgdgntt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xakpaqqk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163sdmwjyca.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kkkpclrc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qfngsmjf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163aocwkofs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kneuprln.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wfvpzlhb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gpzgcabb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bsuckykm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163saypfkuf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fytninuv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xsdxawkw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vslddbdb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kqaxxlks.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163giozqzew.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xhnpmkgt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163rvbcmajm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uhfinirs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xiiriosg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163srqphsjb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163msjbsyvb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jomwivdh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qzoxwvxz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lkksjigd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xkimosxm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rxpiztfa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jvfzazjc.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cqzzlljt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mbwaqdtx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gcrthror.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yxodjdql.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163psxqeswn.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ipzuthdu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ecaavtim.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bppdffyx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163waggudos.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hwfktpgk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dedmmqgo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dxdwocvo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zaazwwig.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qmrijurh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gljzyppl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163daudtqng.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qqkafnqz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rfrxxnxe.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fyhfjwfp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qrjkrvnz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ofpemcxi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mmtfmymq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wvvaiekn.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gmgxbapr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163hmgckbaw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163auwiwqun.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163urinbrty.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fhggaxga.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pbkarlmy.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zfbzgogh.html


<!-- 参考信息 -->