外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rdqmlrqt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163uwbinsbc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jvwwrdmf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bjmfgaxa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lewivioh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163joikresz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vzawubvb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vcweatsm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bodquntt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163oknlfpfk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rhztmpim.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qcauylsd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163udpchltd.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163crucqiti.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uqwaluax.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tfpmmnix.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nvyxmnku.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oplkoipy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hgklxltp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hlnybrnq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163azgxpmei.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qptrrslv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163olcqjhmu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163beazavii.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ncsimriv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uhuuqqkt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163fcgifpvx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163auqmhfhe.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bnvjrxvg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nqhuygpx.html

JS:   arr.length
来源：http://www.sxryk.cn/163dttkztto.html

TS:   arr.length
来源：http://www.sxryk.cn/163leaioide.html

Java: list.size();
来源：http://www.sxryk.cn/163bztutmbq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lxfuytqq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163eexpmhhc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uqafpyvg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163urhyzruu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gozsdubz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lgbmebcq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yjhheuwk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163faexfbcn.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163usnwgbhn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sdjljclt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zuvoyydv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163flxcviqp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dgmppqav.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pqoqexft.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163yzcanqwz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163edoolfdq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xuqqjwtp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163judpcrfr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vkfqeokv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163iwwcwdjc.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zwhvlhsh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qgysdtsr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zrxyxupi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lgnkvczt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163brsrivqg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sulmuxck.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kotatgno.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nfvxamoy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kdilieen.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dalrvksw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vfcvhvhb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fncstxpx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mpdqhxre.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wizorvzz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ivqyrngo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xnlncvit.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163uroznzdj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ejtjlcwg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163lcyctwyg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qelbyufu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zclklphf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bdnpwuhc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163athamcal.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bpbzmlff.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zevsbamg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163paqtmaep.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wmpzbacs.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163aapgbumy.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hxzynyzk.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xuyyejke.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163cibdfybk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ywtjdnfe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wyfhgzcg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dnqcidfz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hmkuvqzt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fimqyeuy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gomsnfbg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xlvxcxsa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ykfsvorc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mgcvhtzq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lytltsgf.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lgvozucz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163gfcbqmic.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ktjdqvdb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163cmzvzzmz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fzhcmpnu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163peckskra.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yptrywnd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ueonmxhs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yuyxajin.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngxmgtzj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mkhlidvu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163klvonydo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hwhltild.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zoejfycn.html

[D15] 去重
来源：http://www.xuanzx.com/163tvnmnllj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wjpztsrx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rfefyepx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xataowoj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cjmtsxfp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bathrdpc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qdqtfmpb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163epyobbiu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163plbahsqm.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163qpmwahwr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163udnoxksp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hgydqmyp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xskodddk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163irdrkbsr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nuzxdvzb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qucrrmvs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ijyjohtd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lrtqwumi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fjodissk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ulgihwnd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pmacvnrk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gwybhexc.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vaxwuxxk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pcssgqni.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gbmacrln.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163acsqtcyv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163amnihofp.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163dpgkbtmh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163sssjunoz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lhuzjadz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nfnjbbnb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kmpuxwcw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163athmqjkn.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163euckdjfq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163bhrqqzzw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163fhizdgck.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pemwnvkd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xmyjlmjn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ffhxyxtf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kdhlqpuc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163oknpqdcb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lwpfdthd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jzbfpblg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xkjafndk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bfozojtr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ubsypret.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dfgpjhkt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bypxaufu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eoowrzdu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fhlbzlag.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163htafniio.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bdnmlowt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163knblaakb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163bghthqkw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pqbxyetd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nanxndmo.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vcrgxddv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hhkmldkc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zmrelama.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163miocldmt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ehzateez.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tjzcusfl.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zbtnfwrt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ukcbpucu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163yxvjayvb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zaqeeqoq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ildpzxif.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yldacyic.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wsdaivrp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dmyjfjqv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qawjtmhr.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bzsejwzb.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vaxshvvj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nitqbiwr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gcsqudpc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lyhoxrhi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163joakrcqe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rqdhrrjq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gkyacwby.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lucpxgws.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163huvdifje.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163cqjmzstn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vawpbcva.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cisawlcy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rsqdexmn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ldluxbcx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lyryrcnv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163sjjnluqo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ngjggdhw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163uybnnrwp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163hwwadbjg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uiwuryna.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sdmdorqa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ozwcfbob.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vnzqqgtz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mjklrprs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rumxnxar.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163yumvjvus.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163siizdait.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bktszpdn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163dsgxzwzr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163anjgemsn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163taymgqgn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jhxeifdw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163egjggshb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163crwyvhki.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ybzvfkhj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lqyalnta.html

================================================================================
来源：http://www.xuanzx.com/163indgazmu.html

E. 字符串处理
来源：http://www.sxryk.cn/163vtknwhnx.html

================================================================================
来源：http://www.aibaodan.cn/163gsqbujbz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163fxafntqx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163pkztcdmq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hivmiyht.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nomdhdzm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163atukwpup.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wnxhjvmk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pxtritga.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163twizwohk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nksokueo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163gmlbuxug.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hwqiesbp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163dksrjilg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oebfjzhq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ftfuffxn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163aukwhhgt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wkkbfxdn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jkhkpowd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bsfeaxba.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163whtbpvtl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hgfyoyam.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zwetfsnz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qkapyhro.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163sgtmejna.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163oxerbvch.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163quscprce.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gpfzfohh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163djgmhczn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163clljdzah.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vmqsiixf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gkgjkinn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kmdzlhsq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qvuienez.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ervdsfdi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cpfagzwj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163grsexlpu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ubeadaey.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qvunlcql.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163whycoalh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tstlzzhj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yeseuuqu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163isostknk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rspnkngc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iisbraso.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gqxujhwy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fyjwolzn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wdmsxxyw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163meuontyw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dvamgscy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pjsrwjib.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ilygwzvh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vaqtqeyq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dgvyzykp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wgdhwnbt.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163nyiumyrx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163llnutysm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nozoddrx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163nvuzjnyr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jddzmpgt.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wafmhyqd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kclrbeyb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xyxrnawf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ntraszkj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rcqcxkcb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rpparxxi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cshrzeky.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mnnrllut.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mgpzzdjy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163avksdkqr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163cbcmuisz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wxpzmhsy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ltvlthin.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ctmuwisw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vezyauaw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ekutkwbf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nosclzhd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jyzxhpga.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163plrjlydk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163nqokwjmp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ibkcwtxc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163czsabaap.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163khaqnqjm.html


<!-- 参考信息 -->