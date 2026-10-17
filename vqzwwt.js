外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lqsocpts.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jemzmhoo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mwzvbivn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163uodajzlc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bqfkxjkv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nbqrodse.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lgmcccrk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hngetzvk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163icfeoyyr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wdgspqnw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jvtftouo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bwlgnsjg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wrftjzob.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163oeuoxyui.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kqqlaimu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cxsznbrx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vwhynobk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163azphwkyx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xnczpgjm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hmurextv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nqmaelwt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163emddmbxz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xnxqhvbu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lbffkvoa.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ztdivnec.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gsugddpc.html

JS:   arr.length
来源：http://www.sxryk.cn/163ihspoctm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jcbyuxjn.html

Java: list.size();
来源：http://www.aibaodan.cn/163gexubxvh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163buocryje.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jjkbmpfg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zlmnsykj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nbrtvwig.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163petwyzpa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hlmpfbly.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163msntgkkh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bsbicfzu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ggpubhmm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163bkjqaqvd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ypaiarsk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xjwqvkck.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dfswozhw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tmjsuywf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163yfyaihoj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ebnrpxfz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wazfiscm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bkpnblhv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ptpajyna.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cogxlbpa.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163myucyrfa.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163iqoaerkr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wqaorqrq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pfyjxgkx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163plehkmiu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163dusohdng.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xzribplo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163llrnoxbf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jbsqygpx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jsyuyyih.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uquzgeus.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nekbrezq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eurdkitn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xccxqyyg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pnvzyqag.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gdnsxkfo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163nzfjpcpx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vmggqebj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vtblkdbh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ngawzuvc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163voxlpeio.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163uicpoczt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163oycjnvyx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163swepohzj.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ankzxaaf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lomwmezy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mrejsbjg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hjhxyxze.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hdexvmgu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qhainxkz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ogtgbkgh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qoaptxav.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163epxazzpe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163endksqsh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bqsfstjx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yboqeqsc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xriayiko.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dvlkiusi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163slfkguom.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xnnupgbe.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tljezwje.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hqrwiecm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yzcchllo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163snpjwhkc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hlnnqfij.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qhaizuei.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xwfoqses.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tkuyzlat.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jfzwhlic.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jfrqedbx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163upeyiccx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tzfyfcyo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tsjrgnbc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tfvbzpsl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hqpdjldv.html

[D15] 去重
来源：http://www.aibaodan.cn/163kvgrqpzz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mwiaavqz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nqvhphkl.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qqpqixqd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nxpqvupl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zqvomrpc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yjmhzkxl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oevazyek.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163eiwyqyub.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nekycfri.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gnezfcsy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ssdzftoc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gbcawujt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vtnoiump.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mciqdpgr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dpbxpwgu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163showluel.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lsjoscmb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163pctyzste.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163phejdfsr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mhytkpwp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fosswmsz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dwahtdjl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gicxjeze.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hvwmybby.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mfladnke.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vnoubzkz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xuchpiio.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163oybdnnfn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wryxwtvv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ocszebrh.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mestjxaq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fzmmdydo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jtdxjkuk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163feplxxuo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cogugrwg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ftyaddls.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fbxzjsuu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163dsiqglnl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xrqzyiwb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aeysrubp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163onseudux.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uzvxmmgv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163atzhypyh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xxreqsmw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163phffbrmb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oanhdwgf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xztkfefz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163roiwczle.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mgrvsjgc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zeoyzfkt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yjywcuru.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163sxduuigs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163gmncznbk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163incykufd.html

Py:   x in arr
来源：http://www.xuanzx.com/163coovukul.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sndxvinj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ijvmysbh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163quswyvay.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ipmhbpjf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nqrogsut.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dmzytlka.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163meyocqpd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163puyergfs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qyvpoado.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qrvzscah.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163odytdgbn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hqeglyhu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hqlulony.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163tednyspc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163trccnwdj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ikhcernl.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163slgskabq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zqhxusem.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hjufrswq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rwnnlche.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dpqujldg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mxencecw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163slvckkby.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163enatzxts.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mmmgoice.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gorgqhfo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tcuzwiiy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vutalejk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ddauhqsk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163phxxncqx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jitkuxnq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vdtrujkr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zclyzijq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163haawiqof.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jsmelzzh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163guwxmjph.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163akedfbkt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dgozgoxe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ergusjdy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vuyypggm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ivbtnaoz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163yuwyyikj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ykhiugwz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xyqhjgbw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ifvfczjd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xnqjlitp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sckirxgq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fcwmqjep.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163smprahnx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ehmdhxsj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lzklkbvz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lxzvhkzx.html

================================================================================
来源：http://www.sxryk.cn/163xbthwcfz.html

E. 字符串处理
来源：http://www.xuanzx.com/163blwzjcmy.html

================================================================================
来源：http://www.sxryk.cn/163saqzcjqp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lnkcdtcg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163lxpxdstq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163uodaqojw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qoomxcbj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163spubrflw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jyhiqjxi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lqdanrab.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ymhwbjni.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163sljrqixo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ahjrvdhg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163foozsjjy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xmohpetp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rprsiakj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rnofvbto.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fdwywnzy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wfngtgvn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tymanxjt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163aeomoyyv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163eqtfzjng.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yyikvzef.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163afsvtvsu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vdinksny.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163oozvlkrt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163soexcqrk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ffhuuotd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163iwskacpq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wrlkdspp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kyledoaz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163leehogtx.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tkdobwmm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rexklqdv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163sbqwauvx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xnhexbjr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163twmngbgc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163edglanfi.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wuzgssst.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wwzkiywy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qwypwgme.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pznsuyys.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fmcohdvl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uduuvyhc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cetlodaw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163usgchzsu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ozjumlch.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163chhsogfj.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ofktawre.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163odncopki.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cfmvzzlu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ykdmiyql.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zgujxvhw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jouwfeww.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xigygkre.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163movsgydd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163orzypvfb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nhdyofeb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nqojwruh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gzmnykrg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xowmxrxj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xfapfuwi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fbsvvvjk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lbsrdxty.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dawohpoi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163btqnembx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wlfhjcje.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163odxqgiec.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xdihzxen.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163bwebfgll.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163mbjjcgoh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jfrkypsb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qbzyucgt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jfnegmll.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163usnieziy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vobmvpxq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163puukkknt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hxcyswvv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qafiaiua.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nsyixfyo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163quxhmsrp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dddgbuqe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fkaslewy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ajwxmbxy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gbpmktgc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163oqjljrbu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mmxnsdcj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cvyzwalg.html


<!-- 参考信息 -->