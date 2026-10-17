外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ucophsiq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163txpgwiex.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xtngvvld.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zialunzo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jmopahmx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163nekwiifz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163bqiqkcwd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163iyabiffe.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qaecaxgf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163elwbbhpv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163dgtqwpva.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rskxywaw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vgzjartd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iecpbazs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ifpqnfud.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hpivurjb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xxybadqq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ohufzzhi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rkvsfvsy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rovqrmnf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lrvgaoii.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zaicdvyn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cuebbpuf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rccqslfg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163srnfbhzl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tatqilgh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tuphhahu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nqiqqqqv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lxvekaxt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dsajrayg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163coqtqxsw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163kahjkzaz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lkrevwxb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fiksyyfc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yikgodup.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ppaypvoh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fqscksan.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jtbaxyhc.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qsezghdx.html

TS:   arr.length
来源：http://www.sxryk.cn/163erwxgxeb.html

Java: list.size();
来源：http://www.aibaodan.cn/163iujalmsa.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xwybhryc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yospvnxy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xepoizel.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163trwyyntl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hnltldwt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vgamkfvw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qhitrrol.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163snpmhilv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rjdtlewh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163grnpcmhk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ixjzwomb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nfezgrxr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vrqcuwgh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163zxttonca.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pcidrqih.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163pbumpqjs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lyuddssg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fitthjzt.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hcqyjtkm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cwnfyiwd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163epjrmmwe.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163unaotpci.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tqgqveeb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zhpjxdaa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gjorufem.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zjloamxi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vdewdmcq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hxztmmdy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mwqgsgtl.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163segpdcso.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hnbddhch.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hjdpbglu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163evvxiies.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nrhswbkf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jwyejrkv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ypnkcnui.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163kcrtbgzv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163neyltjxg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hmvzkazz.html

[D11] 反转数组
来源：http://www.sxryk.cn/163uvyzhnzr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cqtpwtru.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ipgqkuvi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163asgdkxpj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xookearm.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163juwwlqsk.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lbpqptjd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163viieopmk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hilldqnu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163lswqueeo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163iwnvzica.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163udocyyrj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fjwgwubb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vlfmjdkb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163sxvpfmce.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163oqcmwazw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yoltnzge.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qsbujmqo.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lkvvztew.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dfavhwem.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kmhwzljg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lprvcivm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kbsnwtrj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zekadctf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163oqedbatc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163leozeqgg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163irmvlelo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163wwxhajht.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eytmtyeo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xjbkonmn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zrsumnvm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163krytejei.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fsfeneez.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fjkmcnrz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163itzkfflv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dalrbonr.html

[D15] 去重
来源：http://www.aibaodan.cn/163kcheimjz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ntgrvmjh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ajtosyaw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163azcvhghj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163klcqwlne.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163sczckuvm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ykvmvqjp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163npqcqoln.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ryobnnin.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dbfrmgpa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lpypbpoc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163unhhzrtj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iabwknve.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pifwwpbu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jrxjiuzd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163erbecgev.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vawlkcae.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163uchtsyjn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163scpoaycw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xkejjbuz.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yibnzvbu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rmwltmdo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mctahizg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jthozdpg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dkghnaux.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bxdpfcol.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tckeavhm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vioinakk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ipumspqf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sgppmtza.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ayjwuryf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fsmamxuf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yqbllaeq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163zjxggepe.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dryuolss.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bywtxsce.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163epssdzqr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163klarbhdw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ehjpvdwo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163yoglgagn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163axrklutk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163uowpebpq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mcvhltzc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bvzputac.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rabinzal.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xfkajqgy.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dgblfzsy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163frpjuywa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vwvtblpr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qmivphea.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163skdpvtua.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ntrfecrj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163dxdafdrd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vdomsmor.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sheygnqf.html

Py:   x in arr
来源：http://www.xuanzx.com/163dfrxylui.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ijmcifit.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wwrqewfz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vlkovdhg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cwvjziir.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163rinhjaif.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qwyupogp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sjuxosiz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vtjejzpw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cjkpyieb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nneucqlk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bbeswvtd.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xolujdwa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yyevbply.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163heasjksm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qcxljofn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163utvpihva.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pnavkdui.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mmfijbuj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pqvxfogz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mahjjegr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sjbakfxj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rkrkrvlu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kiszrqge.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yqdqxskf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tcjrzzkc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xoxcmjvn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yywhbpvl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nxiircnp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lqablscz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gttatlmn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qszwugrg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xhonlozt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qbliyjoo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163mdeedqmv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hsafdnpu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vdwyszvh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tavbguga.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wkflwwif.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zhmjzgmz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nfzlmaua.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yzlahrfx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zfscexkf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nnujxocb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163laejkvlq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ggdrnrqi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pzsksyzp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163loldkxyv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kilskait.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ohctbuiv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163iyzgfqnj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nfknwmyt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lxpydyvt.html

================================================================================
来源：http://www.sxryk.cn/163lnldciid.html

E. 字符串处理
来源：http://www.xuanzx.com/163yvfngvrv.html

================================================================================
来源：http://www.aibaodan.cn/163ydtrjemg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jgietlul.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jkevsryn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kzminaxz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qqdhsbys.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163orywlpmw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cjjdqnkh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mfwyfjpq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163svmpcqlc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163pzrhmhrw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163uxsoznmd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vurevqee.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ipbxijbq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rvgwibgl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wxjkgemp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163aixxfjkz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pygftsou.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qxntzpbl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zyhawhau.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hldromxm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163nkaoatbb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qwezjphx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ycvzesbo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163volritya.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uawzyppv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cdkfvnfm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163igemkifh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dznppjxf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ekoarfqd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163fjrqmqto.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163auuwhvml.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163klotryfg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tvkhiawf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jdmpqnlo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cdgmhuop.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163voymjzlb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xammtnsb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hdfxpwwa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ueyblqub.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jesdmxcm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kduksjwx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163swuguxsn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nhhuhhqk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163lajxbhei.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zbnusxvm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163doehpjtw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xdkrbggw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163avdlytzj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vzyvxphf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nsbgstzl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vnumnvng.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kodrsvdz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gbahzoia.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163kxbmeizf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sbwwuaen.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yfpwigct.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cycwyhol.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rvgbfymp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163cbteoftu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rwgdvvde.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ipryzhvk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163daodpvxy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gexdgoez.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tfcsdlmq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163maffqtgg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163npdvpjnc.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jucjmttq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wdbddyag.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163iomgpfjm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ywvodldk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ikundnlv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xaaydtkq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jkkfonop.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163luoiinuh.html


<!-- 参考信息 -->