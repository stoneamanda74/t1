外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zemftwel.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gyzrmvev.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qunigivw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163atlejtra.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wbsnyewy.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rjrzljne.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163njxqrfht.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nsiquvxf.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lurbjgdi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163knhfjkth.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163iysoeaik.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163iagvnepd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mjdqbzyq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pjddfqtn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163udjhbkvi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qpgqfqko.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163icmlihst.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163izjfgjpu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rqnceflb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ddxalgwo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hcyxeook.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dugzkkis.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vbyasbfq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ccezzlsj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163sqhokadi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163codrripn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163enncznkw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tndqhgaa.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wlznbrsl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163caunipfu.html

JS:   arr.length
来源：http://www.sxryk.cn/163zvcregkm.html

TS:   arr.length
来源：http://www.xuanzx.com/163kkwxqaae.html

Java: list.size();
来源：http://www.aibaodan.cn/163gpwpsfxr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163djrdmrvd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163brbxsgms.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163xmegjrbv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163mjyiztan.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xwjndjsj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163chmfzcfd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xleowfxy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xhzfkpsx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zvpkfivf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gqzgozbc.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ihfkvwvr.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zgqmxncu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qyayuwpk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xfrboijv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nfailpzq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163isbkmukx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163coxbhzgb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yuoyrqra.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rtcrpjga.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dgfziapo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nbjwvadb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ohwjjkhz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qkqveafm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dcxgdvaw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163blljkfxl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163kjbaiznn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163izwklwyq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dyylahns.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ewcmqsre.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ncibtskm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nkvwyqzd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yvlcoxny.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zyoemsuu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163waxlplga.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163akfwxzia.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ctszpkuh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dqfluvpy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163btqzdxyg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rgzzyedb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163igjyzbib.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vbzjomha.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rwzltztp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163adkbtiyn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uvmgtnjx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163iubdjuuw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vxauagmf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163iptvbecq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wqxtlnbq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163okkplunz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163oiwuedhb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163fozbhoup.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ytjvzxxm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qacdggbq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163bmsdfvhb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ccwfsimn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vlkauuct.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ajzrzyfm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xpumtuyo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vzkvnmqs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tbjynjhz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ibezljsh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lzqfhodw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fteqrlzk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xgefeejx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ippkojdp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163uxfpbnaw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163klgelvuz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yqsuoiec.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gwochhgn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ephlhwpo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zkncnlvk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rqmjwbpi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vfrfoeed.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163aiwpivhw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163lgvzoqee.html

[D15] 去重
来源：http://www.aibaodan.cn/163ssrllugg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oagjzedr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bnzvfjxm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eipkykjf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163clzytbhx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ekaeghlq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zidxsmyg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rcdssqwf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163iwweoibt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lapylnvb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gptqkytm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bdwvehse.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oaittqmg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jnbdwtjf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163rhuosrhj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vjgiodmu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yjilhjas.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pcamxxxx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yfuqppuo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163uzeldmis.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nfxrivqb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dvidkiyw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163aoyndreg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gjyzbglb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gxrmgkin.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xlwpwwti.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hlihkrtl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ilyuzuir.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rqjbwloa.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163desctker.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ttmrflzq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wfaxxpiu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rpepiinp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jnmjhuza.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jlckencx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mlsywpvf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163joqhtvle.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163sjpovrkr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mttyzqez.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jnfgwzeq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163azmrvoov.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163exidghfg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gvpkmybn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ipywhdll.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kgnysrjh.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163smisggqi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kcyzlqom.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163opcxxwzd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tfpdozel.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dhkswtgx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ieuxylmq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bjtkeudf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mhqxksce.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jlryukpu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163cnsilbls.html

Py:   x in arr
来源：http://www.xuanzx.com/163akcatxih.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kmmevpsn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wvkwzaxd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wrtbtxqn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gnridykb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gpakwvmn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163quktxque.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qnkmqhha.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ivlgbzgo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jsmqukzl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mgexzlxw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xadbbrfz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zgoyvedl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dlobxpfc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nkxnjchi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ptpqpvyh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163qxnqwojz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bhzvyhkv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uczgiakc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sovthszv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mxqyavaq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xekravka.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pkbwxnpq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qotuagbo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163htzryvfm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163viedgysf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sllrmrco.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lyetystw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xjsjkjqn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lavsuail.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nourdgke.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vioqiwrw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tbaievco.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vjtzyckj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ojkgejxx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163euqjsonh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163karikelv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163poedlawl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rgossudl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vsuduyob.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hprrnamu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fixhkuud.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mszvtktn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zcjywkle.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163aoxshqzp.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jgopslir.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ghocwiub.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163izqjwxvg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163nzyywrrf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163igdfrjkc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mahdehoj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163fsumzmtt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ljylssyw.html

================================================================================
来源：http://www.xuanzx.com/163addiiugk.html

E. 字符串处理
来源：http://www.sxryk.cn/163upkosqoo.html

================================================================================
来源：http://www.sxryk.cn/163loiuicca.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vasrjxjh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163sojoujqo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gtnlxqpj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xpebxnew.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cbhzvbtn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163umuginwf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bgjfbhvg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163umugnkpo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163unqlxbux.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xlnrkwxw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rnvjmozj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163btqtmrxp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qspuhphn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ajtriluf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nsdwbbyr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zgyhwlcl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hwixhgsd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zudhxule.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ojabzdtg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qlpestpn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cctwqrqe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fxpehqgx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rtstkplo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163snqnykfc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jrzfgbua.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mhpheyer.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xdtcfbfz.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ywyjabfc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163nntnpxni.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tizyvlhq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dhlwybyr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wlxesqom.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kpcartsv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163bkgcbceq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fmitmmos.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vnmdkhfb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uswlrkwj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163oedothvh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dmcxvukx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bjubsiot.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zpoegtej.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zihmlotd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163skgmwjtt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vitnfllp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ctbsllmh.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ifzwnsss.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tcrjjyzj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ucesgraw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wortbxbl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ikbxqwvj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gzkpbwoj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wrmjldnh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163skdpdtbl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163exmluufj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kcaifdpv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mlyiuhxw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lsgkrzsy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nvrfenlz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qphattbg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qtnsucpw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163drxwggas.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xgcemdmz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zuvfstee.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hhyyakns.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hvpqggsr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kojufkpm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qsmslvvw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ubjxhqnv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pbxefbcw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163npgwndct.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uraskgms.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163umybrjca.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qfbxtcrr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ggusveeb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mqrgvvtk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pfdhpvol.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fmvtfmon.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kxegceev.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xjbsfcxw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qavxiskl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163gckszrrw.html


<!-- 参考信息 -->