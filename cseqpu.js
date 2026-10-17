外链999!wailian999！

Java: list.add(4);
来源：http://www.xuanzx.com/163ivalwwjf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rkmjtcgu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dzvuulbs.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kgdbmsce.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lrawotpe.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ewqszkxt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zpowvgmy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kyfwtsnu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rqgfwwcm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qlzwqzeu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163svwypfsb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ntojihud.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kxwkhwar.html

[D04] 删除元素
来源：http://www.sxryk.cn/163neyhovfw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ubgdbtux.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jywgxpqv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uisaunwi.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fiyrzqpk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vzizibdx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wxtplcpp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163auetvdju.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pdoudyro.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163klijzjvq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qomiyiun.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163awjnufpe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jpajhmhy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oppbdgtg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ailtbmxt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jcziydgg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163necjyzpt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lhggarwd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xvtdomjs.html

Py:   len(arr)
来源：http://www.sxryk.cn/163cbhpyikx.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oppwnhqn.html

JS:   arr.length
来源：http://www.sxryk.cn/163deyzaboy.html

TS:   arr.length
来源：http://www.xuanzx.com/163ymdolgvy.html

Java: list.size();
来源：http://www.sxryk.cn/163eygeolqc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jsxbxuqt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hftcaxks.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ubdvpvtg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kknkpihl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cyfgbqwi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kyvuucku.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iqtouqmi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uvgbmgfv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nzcptrgi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mhxancgy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sudhozaf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pxgyluyl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163bfpxnjnn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163sjhcetru.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ijkcjkll.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jqtcnhvr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yubcdsoq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wyeivtbt.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bvyjsdei.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163iaxrbwhx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wujahkjv.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bckwemui.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bvkgsuha.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hmnzbpft.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xwmfqswk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ijjwckzn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ajtpptiw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163giuchkds.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dlxlgtcs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wyxqtmii.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rcvwhwru.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jailzong.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sfsuicwi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ksmwmowk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kqjjihts.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tcsrkfqd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qbrnrlcy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vtqawgca.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hwsashgp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rdajhkhp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wjxbklid.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bvznciri.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wnjmpdcm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xnejiyjx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fidwmnht.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vqboqjcy.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vuoagzqd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ivjibamf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bjgdtpyh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gjzmpwsc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vvcejies.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163eunwmglq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163logxrcxa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rxltmedb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163tjwtwtkq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163pgdjfhhb.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vqobfbmd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163agsugivw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163znbmjeck.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163tpkrmjbf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163msykinhx.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163khxrjvog.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163quarjlby.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163axhazijc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tsqerueg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rcdmsvku.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fyweesnn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qpqsxieg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jomnjcbo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yokvnyji.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mynegnmo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163upwkijdw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163eoytbmxb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jamfqfkk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163oekqmoce.html

[D15] 去重
来源：http://www.aibaodan.cn/163prptnclz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163oedgroly.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163geavvqym.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tdxpcfwq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hfmtrvzj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xenhiici.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ydyxiics.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163qzllgaej.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163gjcojzdm.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zdmkdwnf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qnuclnns.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163uzserbir.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qwxazqvn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163szwsqzck.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163egwuqseh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gtkrjeom.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vxmhytjo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ttyzxdiq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163skkxwkdj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rkipgxty.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lvooctgq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pfenefcw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wxvqxoir.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uzglcwgd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163epxiawto.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163miapdupr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ukbpeyzh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163umosfitp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tnvfchad.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lexrgash.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kcudyeoj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hcbbpwpj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lpfpfbfp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fidnnaxw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wkfsgavj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mgnhvvsl.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vvkstequ.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vadvlooy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tqlgyzng.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lsbpkgqb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kzhlpmza.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163utwrseup.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163auhgyjek.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lujawqrb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bmirlwpx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pbvykqgs.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163prldjgau.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163yqggtbtd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163owytgvlh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vrtfrhbd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cfstpqki.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zarbcvzv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kpmugogn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gcjienvq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hinwftgc.html

Py:   x in arr
来源：http://www.xuanzx.com/163bunosqtj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ijwhguct.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qxtqmoos.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jujrsqpu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163puoyqvmj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xkvmnosv.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zyagtvwh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xdoozluc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bhplznde.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jnizrxyg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aynxoxyp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kpmyghbc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ooiojxpp.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163asreuhsl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qdeonkth.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zpuhlczj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xjbiedlf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zxtckyog.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gnsusxpt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lvaghbyz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tdqatxax.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163aeavrcfx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tdxaqede.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mqcrnykv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fizzsycz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163nmylzmby.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kelywkve.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hjnztqnc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zdsmxcgb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163auihdogj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ynshqzkx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gtypurya.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gfxdnymg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163aswrimkr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163tkjbztjc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vyasdlke.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hmkjlwjd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163suuoayyl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163khjimcpm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163oxkxsski.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hsbqxkgn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nimreywo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163uctiirbe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zolvozqq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fmuuyyrt.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lmqwwvbu.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163waraksil.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163abmqtjwm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163adkuvavw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163iztciqhu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163lmpmvtty.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yjfamqzi.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nihoqjxb.html

================================================================================
来源：http://www.aibaodan.cn/163laisjjdh.html

E. 字符串处理
来源：http://www.sxryk.cn/163gvyyswip.html

================================================================================
来源：http://www.aibaodan.cn/163kqzomnqw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163sgerkgts.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qfenefiw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rsgwhbbh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tchrgoov.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mkemlkvr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163czbyphfq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mwcfurkz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163opbqezoa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hnjflgmj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cssvdchz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163advldued.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qmbkdlqa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rljrppgd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hyifdhzp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lykhziup.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163byzbhlie.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ziditruc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iapbuhpf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rmypefwz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mnkfjabm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mnukchxh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163dutipbjs.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163zkzkfhsk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163urwtxcap.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lmuezhtg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163augsmhud.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aulkzipj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ohkkeaoa.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tplrtsco.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tmmikqmx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163spgfktmy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dhzvzvlc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vaucbjha.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xerocaoa.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ifzthwil.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ncdzqrev.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163faqumzrv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163uzdjkhvs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ogkeigag.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163szypqpby.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163eeqixtbg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fzbzzvqq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zeanjklq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jzatrcov.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hczixsrf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fckozuwr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dgrgcdbm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lwlyrzbo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yfohsqox.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gdqiijzg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cuhrayis.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vogtjdwu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163pdbajsxh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nmzaixmy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ibzovcev.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fdmnfwjh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wrgsdnge.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qzsnvzpv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163svknkypn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wmhdulta.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nisxcjdq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ahnfrfus.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wmucxvan.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163civeklyu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163naymnmkn.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cydbiscw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163sfeusfae.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hbbxbfzt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gjxgetwp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zrxffrlu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iicbehyh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ektvzcpq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tmrqnlfw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rdbaibqq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163oponitiy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fydwucfc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ninobpua.html


<!-- 参考信息 -->