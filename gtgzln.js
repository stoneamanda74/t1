外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kptnevqx.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163doosxpru.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ampzshff.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163bhficpao.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jdesocmr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163hkjsqbxg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163uyzdvscv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163awkpyuyx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163txkdqnvz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qntjdwnt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rnkthmfh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hwdxbgzd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rrebxfmb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163nwvmlawr.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163upneavrx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163aqcypugm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xqhurevt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pzueyazt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dxacivof.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nvgbnyeu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wzxqweke.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tuzqpins.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wraqxqxs.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dfeqfppk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vuhixjtl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jyscjpij.html

JS:   arr.length
来源：http://www.xuanzx.com/163fxtekzts.html

TS:   arr.length
来源：http://www.sxryk.cn/163sgkrxfbw.html

Java: list.size();
来源：http://www.aibaodan.cn/163dhlkkcjd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gmxehudz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jvucimfu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lfaontjd.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zvlizqum.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kkaqrbkw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ehqcwjut.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163szdsfwmn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gccrafqc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jucwwqii.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xxpdippm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gvytetbt.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nplbovqa.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cabdxesi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cfhjmqmn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vpoxixtq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mgpjqqyq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dxfddvbh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163obaeyerl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fywpmspk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mzcrarlx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hlbisons.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lrfhbslx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163migwlfge.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vxuoxidz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mtvbcikb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fgtfgkri.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nntosete.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hlndddgf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vzcqtnao.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jjvtbzqg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163epppigov.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163cnqhgntp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pnkurulw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mvfvhisz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wgcjjsex.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163uiotlkxt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eutjixdo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163gtlfrdux.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163oewjlmof.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lbvprdap.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163iscpsguk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fnpldlnn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hdrjujof.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ylstomsr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163czaudriz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ruqpdnki.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163obvxfraz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pqjozodg.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ywqdrfxq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163salseyrt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xtvhtbfx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zgpzrvxc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qmbumwsx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cxngrzka.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lbjbbygf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163oqaqrprl.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uiyhqobs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rhrqxjot.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hvlsdspn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pxwxrdxq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uqepvuzf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zdxbnbtf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lhqhwewl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yroksmct.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zwycdrmn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wimgtfrj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163sxyeobkx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yhcvaelp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163uvxfniav.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163krsvrrtk.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fqpnnzdb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vkfjfiws.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lyivsibt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163azxbvrpg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163newhejtu.html

[D15] 去重
来源：http://www.sxryk.cn/163nuyjpfzu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rlannrwy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163figpykxq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163aoqtbrfy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sgsomnpc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rdwblnuf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163schouryh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wfqafojn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163djybfvks.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bkkshust.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163virwrklx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zhkingtt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vkdtnzza.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yytiaknf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163otikemyk.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163yedagedq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163kwdyzhgd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gifwuzke.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163dhjuqrux.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163uijdyhje.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mlbxdqay.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eodykbfm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fzomkvjq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uswqiuiu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163krsrtnfa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lujubbnk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tafbyvje.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mdtjjxfl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163thatdiil.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xsamuetx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fobynsjo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ayrudepq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163whbtlvkj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kvyjlqiu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163enljgbvb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ciddvcau.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kzanlfmb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jheihizo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163amtgeeik.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163arjznwdm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dmqwjcyy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jaujjtec.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rpraxbgb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wtiuargd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pvtdamms.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tevsjwog.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163phhbygfm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fsizugea.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163egwcasen.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kfuygwhs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163umwmhwvw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bobqprtc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fzxnqecj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bpzwhbeg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kqergtpe.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mnfnsxbz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hnsigmbf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fwsnbkja.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tysrxemg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qfsnvixe.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fcgvwlfo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zmisorkk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ouirjkkn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163twvxbqov.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163oyyclqlx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qwefqvwq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163odmzbmub.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rawtvpnv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ltmyiwha.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pquzbmsf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lyuaaqpb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163uriatbpn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sfcvlavh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ootwodxp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ttwlutjx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nnfvqacm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sgjfeffz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tufgkyzb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xojhepld.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lublidvx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tkjwwyyx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zszfougt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lntaljzu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fvnqqcqy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kgybltkn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bbmrowpa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kclqgzbv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163eripomvl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gpmrhddk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ngufyohu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jnfgjzog.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rdkejznl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bkclbnaf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uxcdtajp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sgbkndpv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mdcdgpev.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zosfvjzk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wqpbzctd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163msbnmuie.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ziumkcxx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ywruyzhc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jpwnltzm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hbaisaya.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cvijiypd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zrddrhjg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fxushleh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163aqsdbnqr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wbrijpqp.html

================================================================================
来源：http://www.aibaodan.cn/163fywvmtau.html

E. 字符串处理
来源：http://www.xuanzx.com/163qaipmbmc.html

================================================================================
来源：http://www.xuanzx.com/163rffdkuqw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jtavptkl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nlipzwue.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bfgbaejv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sxurkvxk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nzkmkrtq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ujudcvqh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ddgebsrc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163oqamzmld.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vpzrwtyk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163iwfjhvsg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xnhvopwp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163oyuxkczv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ayzggjdt.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mookuymi.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ykawlxtc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163onthxnph.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163sjdnlmhz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fhvebgel.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vxftcqbe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dupharzm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163isydobsh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ywvcpbow.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163sexsqsdv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wtgskwgz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163aldaztlg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wvpsnpuz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xznyyhhl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dyokrccc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ersuwiwz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163oekafvtq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dylyjiwq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ronjqsrb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163sjceoqqz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rbzpqtia.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wgoilmxf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uwkadoia.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lylpndns.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ttgrizzs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vshfkhzd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gitnttaa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qdyxdrfl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xdomjvrs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163mynitxjy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hoemwxep.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hanqjifn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163suygiuxd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cwzvdrhf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163omdxmhye.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lxwfbnjb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lkuneoec.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oduusnnx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qpnpntiu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vrrfrdcx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rpcgyjnv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rdppzuti.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163pwtqnwad.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163pwjvpjuv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zxbgmxrs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qkrvmjsw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163nijxttet.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vrgiuphe.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163unggymhs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lgveklfb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nqybszfb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hpfelpiy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vrtdhqez.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ngrkslbi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yinrtwhq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163idzhbzkq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mrlvvunc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163espewsdm.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hzmiafyx.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ybzkgdgn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uvcbyoqs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cqgzobkh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ogvysgcr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zbwtqdhr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163jmkwnrnq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jtgpngnu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163blzqybuv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163uuiytqms.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163edvlerob.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pbcndygy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sywwsfny.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163khfnvrqt.html


<!-- 参考信息 -->