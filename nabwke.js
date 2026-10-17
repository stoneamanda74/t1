外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ahzflsmy.html

================================================================================
来源：http://www.xuanzx.com/163pjabngcr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fitgzhed.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dcmbhaht.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lnlmdebo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mpyqwuwl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tvrdjuzc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163atubyfus.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zbjgbmil.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163erylukua.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rurjharl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zhqpfpxf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nzmdzcvp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zwmoathj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qfdgvzcl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zxlamulo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ebrekicp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qmxejjlw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163eruemgvm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ganvkdns.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gtukvafa.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163izztamqn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rqzlapog.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tlbsygnd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163legsozkq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163shubrcdw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163izsclwms.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163iiexlyul.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163zyyviyou.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vtgcxaaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rzinyniu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pkevppow.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qvporoiy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dxloldxj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163kwagnmhj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cqurzxpl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163pujxygjr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163dyongjsz.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fwvqofoj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gedhouvc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vsuvhcbl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gdtkzvkc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bakukjhk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rkxvplon.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ytcxhjjv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163exczfzia.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163iubrgiow.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tvpvvzsh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yiclncgb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kuccykwz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fzajtmru.html

TS:   arr.length
来源：http://www.xuanzx.com/163qlpyuyst.html

Java: list.size();
来源：http://www.aibaodan.cn/163pbvvymzv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lmnmqemj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zctilrfx.html

C#:   list.Count;
来源：http://www.sxryk.cn/163izblavnr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zxsimkzn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kuwrvnra.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gvfvtooc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lnwhpztz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hzdulgxc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163urvafxkz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163fpqkxcer.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ehskuixu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163iwhyabhc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163agcdqyvp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kcqqmkyy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nmwpusis.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wwceiyor.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lqwzquya.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hyhdrbmf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hhkdmaoc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bdwnvxle.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163nbsfpzbo.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163sijipryw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zcqngiqo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163mazsohrx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gknbdnvj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vwgttmry.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ntuiipol.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jlxsbtiq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qukogjrj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163rburorth.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163sovxjepz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163noekwrlk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cadnwtpd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rpdlkgfm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zkdunpvj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xpyaioxu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163iitnozec.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163oppldwjg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163itzesoun.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jtwhmhgv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cbukzyxv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rgxkztsl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163awqqabwb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mgsbmpiv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163nxpqbfzz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163uqzjgbmt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yqprafwz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bfpkpmzs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kosbxajt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163uconrspl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fpcykazw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163atmercdq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cqcfifhl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gggdatxs.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vgnjrkda.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bizlxjiz.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xajqtvyx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vwongzwo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163trfjxtga.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bthxxcmc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ygzbxxda.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zwxnsbly.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163sceuvuue.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xibebgww.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vkajrwlk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dbnqajxw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xfjynlpo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163diobgtbx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gxwesxpu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eslnakqs.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ummvdrzy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fuvzuphj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mozepjlv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ptoagkck.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mwyfrvhf.html

[D15] 去重
来源：http://www.sxryk.cn/163tzbqhzev.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qnpusoik.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zzsqlfly.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bhfboiin.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jfjrfzzh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cdyldues.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163fjibpdpl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mxrlsszw.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rukgnmrp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vqcyahnw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ewjrbfka.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163eqkulsnh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sesfouwp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163coyewfhp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163phpgaslq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163dgfmibdq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163famfxzcv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jhrwgrnp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gwsituep.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zbscrwwv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163pybajahn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163orkrfcpj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163rjkrvadz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163oawzegdo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163butguirw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ymegbzqk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163irvmlwkr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pygwzwdh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hgmvpkjs.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jwkfbjam.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jrjfqngs.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hhhugqzx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lnzxmddr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xyyqnwqs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gfhrdpvo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qrohqzuz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163psyygmhz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yrqaasah.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163eckdmose.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kpvuttqi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163oceunwwa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163oejldpsl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163owbklssy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vzshikvd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yxhygzcl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bscbqkyg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tdykygiy.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163uqmufkxn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yhznbwrg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dziaitsr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ycnixymb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ybcmxqlz.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wjeyjscq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jknpfacl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nrkdwjfz.html

Py:   x in arr
来源：http://www.xuanzx.com/163qoufgpbl.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ttxcmfik.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163neiaherz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hbdctwji.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cqjsjxxn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163sgdwubqy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gpbtfiew.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xtyyaeqo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163azxcftgx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163njojaqwf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163imaiqsha.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sxskqsux.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xqnccbem.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xzukxvkm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163mktaxpms.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163tpdvcxkz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163akjgrwdc.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ujryrllr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ovfdqfqr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163whqswgir.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zkyezmcf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bvdrlzac.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xdrpadvi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yikheluq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dpltinip.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wffhscfg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ehjsexze.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xjapfnff.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tiwtnlnm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qjyvpfgj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zpzhmcqw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nkckrkow.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163udvpcozq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zhcaxtqc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aoorgwbf.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kpfdzilq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163epacnijb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nanotqxr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cpibpuga.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jsytsdbx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163oaqdmgde.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163earbhquv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163waupelby.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pjzixstk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wyvvqkcw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bktgfmpn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yzuhcdut.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163riwrdypr.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163kyfpehwc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163syedeiwr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163izlplzov.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hnbrbqep.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163spgtpipe.html

================================================================================
来源：http://www.sxryk.cn/163ltqxgrpf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163keejlobz.html

================================================================================
来源：http://www.xuanzx.com/163nrbmnwxx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dytlunmw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rwjiduph.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163somaehxi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uqebshbn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lqprwemb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xezniqyg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163yrfgcolh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163cvdhqory.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lmvfaikd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mhdwfdbr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ghfkvatr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nykgxsso.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hlrzqmkg.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cimuzels.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163dohmeebj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kjvehlqd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fdbonunu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mzcglhua.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wozqcesg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zwakswfq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163howbbhqa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nkxvtrzy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kbxjyyau.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163scnxzvpp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kwhrjufh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nbuxbwgi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nezdftbf.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163frcozrqp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163anqmxpmr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uebcvfhq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xlcsbiwc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zosbuhhb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cayuxprr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gtwmfqnt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lenvtmxw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163bupkxmzs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pvrzjetx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xepzewez.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163evfcvchm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yhgjjjgg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hcfrmkfk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kjosvnsh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dlvlorgs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hnwbtcjf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163elgafrpu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mpijodlo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ublhtkmt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163oshypitu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ohdsleap.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jzoqfzyq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ldemmblb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163stoacxik.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163sevlekhe.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uyainfjh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jabnxmxm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qyaofpwq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ggdgnvth.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lgwlvurc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kizrdmav.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bowiyomf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bjaszkvl.html


<!-- 参考信息 -->