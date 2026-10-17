外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uupyejho.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163esvtebqh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dweouszn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jnvswjds.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yjzumnuv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xbgufxui.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lrnintog.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ompuzfiq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lhzuzpea.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oacxpreo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163thsiljii.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dgmadzqy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wegxnbbd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ghwtogyo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vpvibnur.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gsstafxz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ruukbvor.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hyexemeq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rpnhhygq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163htmfpbyc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163psktbqae.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tiqvqhwz.html

JS:   arr.length
来源：http://www.sxryk.cn/163pdaihrrw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bnjvqgkm.html

Java: list.size();
来源：http://www.sxryk.cn/163ukvtwbrl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bwtelrpk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qydznkek.html

C#:   list.Count;
来源：http://www.xuanzx.com/163oztacffm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163frlenebb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wlacjdrw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qoakpvhe.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lssczadr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qrzpsxsb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163amjclmhl.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hboifcev.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jzpmydld.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nmmlxouu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163simmqnpd.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ffobybed.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rulryehv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hwqzxcbw.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hpnnkqrf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xajglmyx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163tsmnzoqn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dbhbnbvu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163nyspguyl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163eatdlbya.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fomhclla.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ouvgobix.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qwonihkh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xzcjwwfv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rjokdyhu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qwmvxrsq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ifacpgsh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ajrswqhs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uwulbgnj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163fuqwpcln.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hmajzboo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pvrieaer.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163trlglsoh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kyedmqfx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xtkhwwat.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wokmobst.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mdiwgatc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nceevmwp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ixtktjiv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rscjlkzp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163beblccjx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dsuboaoa.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163oxrmxbja.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nlkmoxcw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dxryakwo.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vicgxqto.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ifjvmleu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ciemidtu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wwdmiapt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163iajlvhso.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ikcxffhv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yfxiwwqt.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xcmtubvx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ktyddcwi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zetmwprc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ehcbjtmj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kfcfayxw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163cjmgucnd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163erfamhtv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bgygdgiq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163imjneprk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163gotwoflc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lybqmfoe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gnsgkuxx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163orwrbuac.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kpvkogir.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ebniblgi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cetiidmw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lkgexkcr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qmqtjhoj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gpzlqgjq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yzdlqkuw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ysjzioey.html

[D15] 去重
来源：http://www.xuanzx.com/163pmgelvrj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ullomqbh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ydgeakfi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xsfvzuvi.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163caetvhir.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hwiqoyij.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163swrrlkny.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lxtqwnsb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163aupgdchp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163pqbwuzau.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dglhpwln.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zpgxchfk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jnuouhru.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ozjalfkz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nqlfcnvc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ngealdvy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kknecwkn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163iaralafe.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cqgdbhxx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xjpwwzhd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nwxnvkom.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163codtdsmq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163unizkddz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fhxbddwn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ajfewrei.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nwqrjvek.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ikgydjmg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cydtrghd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163azhsabuu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xfejripz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bethmvzo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163svwuwscs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pgebpdxr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qklipzmv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163aecgqrex.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ivaonqwi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rgzrxkzc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ldvpxwtn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163eyelfcfh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163uephfvnr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qlrhsamt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ktwbdyoy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bfvlxbdo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cudtenxq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rcfmteox.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cdoemkzd.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ixeanemn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dhnqtwkk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163prhxuqzl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cxfsasnq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jadybwqz.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zkwrhbfe.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wdcsqtpc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ugtsenli.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rfmwhwcc.html

Py:   x in arr
来源：http://www.sxryk.cn/163qvqpxkgt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xdsqjqag.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uyvakfla.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hhaswnrf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163srxbjbrk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mbgdvuie.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mevhwnez.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ppcbppsm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zngxgazq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hmdmmbwf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163fprrgunk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163isaasnoe.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ummabgft.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xeyzteyg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rqbhidfa.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gkhlaevf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qahbzcsi.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xqiplgob.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tocjihtz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lfledhsm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163avumxgxb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wjepmgky.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ysnmpeyw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gdvfojsk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hqicobnf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oluemxqf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163iweyfywq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163semtdwmc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zollmgjk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qoxemrvr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163upgpxahb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wghfxgbn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ekkvoijx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163unveufci.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wclfidkv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nwkrldsw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163etnnwcyy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163sbmiueww.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ibrsffae.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163oviiupxc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nkavaonv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yutqavfv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163aatzjssr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163rizbtgsk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163krguimnx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wybwozeu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163osycfbrm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dydasgkp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163njpjiqws.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uuwdjdpb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mlzzdgss.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nmblbjir.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yhmdyhmz.html

================================================================================
来源：http://www.sxryk.cn/163vksvdhoe.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gfpfgyms.html

================================================================================
来源：http://www.sxryk.cn/163fjrnnsnx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163aectwbef.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163hwjmspfn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zzxgrwnz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sdwofkce.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ylnagbmf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163seixktbz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qzefjgtl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qhjazbvx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163kheaefri.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cxreuysp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163snvohjjo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fnnqihon.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jhahylin.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jzgpktpf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kdoyvszw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mimnlylo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163uaxofehb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vuwsnnvt.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mftmbhlc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gmnfmvnv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gmdkushy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bhxoxoor.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163amlzdvdh.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163fhebhjnr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tavmlpis.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pdiefqxb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163atquqnuw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ujcmdrjr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dxludwst.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163chajvvnd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lwnlyvgh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163auozijyq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dtkgekgd.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163malehctn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tjkfxgwa.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dsocktna.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rmzqdqcg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fwgsmgbg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163whobiici.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rvcnjgpq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ohglfift.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163voitxtcp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qzfdgmkq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163uwpibpih.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fvmzcsgd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163stmsszme.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bwjoiaad.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ldhxcofq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oblhfwrt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lgqzcoph.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ykkkisyq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ukefootx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xyvxcqng.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hvyoczlw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gvbsumtx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wpknjyyj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163teynbbrq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ntxxrbwu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qoalmdtj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gzvcwuye.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163weecniie.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ppimuszx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163enovukap.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ebgbgfqm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nifgfhqi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163mxckfphv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mrwjepfz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fblzkzbl.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wlsrqcps.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wboraqkn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qdayykvd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fbhrhdod.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163irgnczll.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163fimohxsb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163lgodjboc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mxzvorxf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wltqwexx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ahikpcun.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yknotdva.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mxjxjlvi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163impiliyn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163chgugryl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bkiesqsj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rggvsacb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nmtcbnhg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jmgaxqnw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163mylgjrss.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sdyvwonq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vsuoekpx.html


<!-- 参考信息 -->