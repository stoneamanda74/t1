外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cxwxcamq.html

================================================================================
来源：http://www.aibaodan.cn/163zdxscyam.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ilokiflb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jvsxfvzv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uljrfybm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nvaptgrj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pzlliduq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hgvjykqj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163slmmfiyr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mkmsgqvl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jghnvajv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163egsjubmq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rfckhvht.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vjabjnfa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163orvpduqn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zaxemxwh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mbxfwobp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163slzdaggj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vacykbra.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ixliedwe.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zihqwryd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vcqcllix.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ubvoonou.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163hckyfwyg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ebsjtvgd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jkycepxe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163yveoidtw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nnbpdwnl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vehrkxiq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wltckdcf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163iudathns.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kefxsoxu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163edqunyyc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bpdgosbd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ocanfean.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nrpsrxqq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zvhfhfio.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mjxptnlo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163raxdsaxj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cwqlyani.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163egmgphgk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rytvmsvg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lowqrzom.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ucmtuggi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163sddyuybt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vuwyydgm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yllvapww.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ddncsnna.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zpokddjt.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jfzhcdpk.html

JS:   arr.length
来源：http://www.sxryk.cn/163kxblgdoa.html

TS:   arr.length
来源：http://www.xuanzx.com/163vagkrquo.html

Java: list.size();
来源：http://www.xuanzx.com/163ohmcezor.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lfodhwxb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pjhnbkdo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163znnmpifn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jeeidhsi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wwwetgkt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rwswkido.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kcyhypkf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ygomtyzb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ptaayobs.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ohacefgd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rpvjvfdz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163crbyirki.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163boziheuf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ondkdtbl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gvwvtgsg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hamknzst.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zyjuugba.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163iqhzflvm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dolnkhyc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tvfqnlgr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163uccicrpk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xloplxeu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lbvubedt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ohbfntjb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163csefhhjj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ghhbfvbv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hyqxthly.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163taxhaqgj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uoyascyh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bklhpdmk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pjpsltlt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nsxedage.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cgvudgng.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jboddzrt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dubhvqjy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bdjsgsgi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163tkdhbvwx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ylprobts.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163izyeeptu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vsyncoax.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hdwjooou.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163balwlgot.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163morcgkxb.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163sztrmmbb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ujuvbxgs.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nppgokhc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mvekssco.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qqdwhnem.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wgyvqszi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hufmzfdf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bqiyqjvb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oucimaqr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pmfsyuum.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163aymtcimq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163faxnqjqb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mjtymfis.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vrfyveql.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qqadxwrh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163knoecyqq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wwhwgezk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qqyepnzi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163npefpscr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163egkhyabd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163iyrmkrgy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xysypbdp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163avjkhzny.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rbqnrybb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fkaoajwu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vjxzcdqm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ozgtbrin.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163daqmllhx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fkdnxnmn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163udyojdgd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tdbvuwwn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nhfiiphy.html

[D15] 去重
来源：http://www.sxryk.cn/163gsenmxcy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bkzfpyzo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hgtqofnh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rwmzsyir.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gwbknfca.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163quasddtn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ybspvskc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bkybsiku.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rurpzgxj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ihefaphi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ickgrejz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vetevvlz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ksmsmqza.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zjmomulx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mmmorcik.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tshmvopx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wiuaagqe.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gjrkqhnf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ebafbmjc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163szwwouzb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hjcyiirf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gzrzublz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ihfoilau.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tqndkkzi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bqsjplvc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xqfvygbb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ndzsksrz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dokoqvht.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ppqpgrbh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ylqzpguq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gjuitblb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lknnqcel.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ppdajjlm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163oipqjedg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lkonqlll.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pywmcmpf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pocyfkgj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bcheapxl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bshptszs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qoichiha.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uqkarprp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163injhbwcf.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ulwpirjr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vzdetkho.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163favzzbdk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oezzdydk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163twsrxkme.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cwaknhkk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rpstrehz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nfybivdf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xerhorfz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ykuxowyu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xxagnjii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfhtbhbf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vmddefgu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qcvdjvqm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163owizbftl.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163gfjadasp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lwiggqje.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yueuiznj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qlzfbtav.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rtkahcns.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yuepuyws.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pllhnxyi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lokwwtxu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ixlefcsm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ihfjjqne.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hvmubdfw.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hihrpsbu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163cqkziivp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bvlppyni.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qclcfgno.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163jmvqbbki.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qutmsuzn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hksgzrar.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163baxatxtn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ntestamx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xkgfieyd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yhfpmyyy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ryrkbybn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163codhhdwh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163uzumungs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vjkkclbw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ptpprujw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xfdjzgsl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kgsmqttk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wsrjdxht.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qyvpzptg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kvixrfbp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163beiscdtk.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zqlilmgs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xzhdyhsj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bcsoquyh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bpucyink.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wrxkkamn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pavbhvdh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vjfclhsw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ppigeune.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pjpirpfv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ujicgxrq.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pdowpqkf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mtmpmjek.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163msmnrqaq.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163pqxwmaps.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wqkemfhd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gvxuvhnt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kydeubjl.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pernhtsf.html

================================================================================
来源：http://www.sxryk.cn/163pfjmbmfz.html

E. 字符串处理
来源：http://www.sxryk.cn/163xnjpkqvg.html

================================================================================
来源：http://www.sxryk.cn/163bijvjudn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jrhqjfsy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163meirtdno.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lutrwrth.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163brfsdhqa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fskwubpi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jtmiluda.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163inahtaxp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nxtvjgwb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163obpprirw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ujjwdecl.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163slmfkewq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jnahzuiv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mfwydzhi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gzcowruc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163gcanrumx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163iwkqciix.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yenqregh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rxcqayfz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163seazjkyh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bzkermrs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ijxjqxnc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qfwnmbjq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hnqtmdzx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pbtdrlfb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sybtwrzd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xuatoqic.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tuzhdreb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hrtpogwm.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fhodicds.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163wguqqlil.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163sjbkisko.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tutplfhc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ppxuhous.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qdqlspcf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wbpismxf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163hfcywcuu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hdksnbwz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ieapluho.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wjeystan.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zytmpomx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163lloftlda.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163biacetuy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163zokrbziq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gcpbupen.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xmfopnew.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163jitascfc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tkgedzsm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163svlosslk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163onutlxoo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eeekvlat.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163suulbyvq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163werwfsdt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163egzhuwqj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163eyfcqwfa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nartzpik.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cfefyliw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163czxuclfj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vwajlvhe.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zgkzxdjz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ayeyjdit.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jajyvoxi.html


<!-- 参考信息 -->