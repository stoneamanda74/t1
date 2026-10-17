外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163whqmusov.html

================================================================================
来源：http://www.sxryk.cn/163cpxxjpeu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fabphnre.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163eoiznjrr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yufxouac.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qvopffni.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jknofxwu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zuzmcsxc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ayspnpsq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ioszfckd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163eccugkcr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163sqozrwfc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qetoqirb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163eadoqhau.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fdkbvlrw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163huxeokob.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uhwfzquv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tigdzllg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163eqozolqe.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163hikmnyjn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163sdqygzbf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xyrmswhz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rrttmpmp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nlhdlfws.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rzwidzug.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wosrtmyd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nduebkhr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kzlnmhhl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163djyvyiul.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mqedwxic.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163herxinvt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rgvdgqjo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fwqlcgbx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163cejnygzg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163txtdtnhb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163tlkngzon.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tjentxwr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xapkvnvm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ybfbxdgz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163srulibic.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rlgkpsdm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wmtdtcwr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163owtgcmpo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hagskgwl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163echthdwd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163axukthio.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lyngubil.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ixwmqdvp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163llezaffp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wlvchtux.html

JS:   arr.length
来源：http://www.xuanzx.com/163iatpbmaf.html

TS:   arr.length
来源：http://www.xuanzx.com/163ljiutavb.html

Java: list.size();
来源：http://www.sxryk.cn/163odkzpwqf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ewehetby.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163bbmcnqqq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uzukhogg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163bynzaubs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fxkdmhaj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nasgmngy.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mmgnsibj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yuocljat.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lozqgxwq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kolrvfvk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dvzxjwbx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ncukjhbw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163sgrkzmxp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hpsekmlk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163atxkmkwu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ktvabvju.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kqvcsdgj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pkznbcwe.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ccxwufjz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uncjgglx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kbxpknoa.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ueytzmur.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oaomfacj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163txflbbax.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kndxjroc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ywnciral.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fcjvnsgy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dhheoxtd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163npwhaxtm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ufrrjplw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163oqwwjwod.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fmjgzdfa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wnfeatcy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hiajigqi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ptqjasas.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bsezfpvn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dpvfizwf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163braelvfj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pyzqzfpo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ileltprv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hupcbzgp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xlmhbdfz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163euiavwas.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163olrswsfa.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163rlppzhsh.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163svkcdeno.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rfzhukdt.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mdelcrma.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hrfvhiws.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hvymatme.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hglwhvbz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mettdcns.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aipzzohs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cugpdxwk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mvssluyh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jexmslpn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xrpkawbp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pxqenvrx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163lqfaanip.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lqbvvavm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jyygbaxl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163staarqku.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163adbenhkm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163exvcdzke.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vqhffoha.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xjbrxlox.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zfofmjas.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zhtqzfcw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163akkfxunn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ctmwannd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fysjrsgt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163exaqlhet.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kasdktun.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dqvskdjx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kxrcsdqr.html

[D15] 去重
来源：http://www.aibaodan.cn/163xlpqzrdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tgnqebqk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163elemkhom.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tnxtgvos.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wlxnzadi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jaeslbmn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163wordxzhg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lizwlgcx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fnszyxqh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ttnepien.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163icbxrrtv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tlyscpns.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lsfolaiu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bppnahlv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lizljqoz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jlvuvorv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163raxspyxq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mkakjnxq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tdxuqkon.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rpnkoqcf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fbiokmrt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zetqlsnc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wqbdzmxm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nrglqjtl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163nlcsogrm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zzpvudhe.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kkdniudg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gqfhmxbm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uzsnehwf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qebfauqs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wttwdvty.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cohghqwq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163kqybzrie.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wxkveotd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163myjvhoop.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bunzlqno.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vttgrmow.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dasyfrtn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jrpnemfz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mqnsqodt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kjtoxnne.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163znhyhtqj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ruvvuiig.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cxdnlqex.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qtqxnlff.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163llbykhtb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yhlypnsq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qznutcsv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163senfmyac.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zsmejpiv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163isoquaop.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mklewakj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163asojpofm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ewsiwmrz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163juyninmr.html

Py:   x in arr
来源：http://www.sxryk.cn/163ybjgaupi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163uiaoniwk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dfvvtwkb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fvvqsram.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dulqirvo.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hejoapfu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163narhyiar.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tzifowlj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zttgnitv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cwoqmkhx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vpxhcoob.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uklnskib.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zblagxgv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dqaxagmr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pogescsg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163omymjgof.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bbgtvyvh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wdlmyxaj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hzvgxbcm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gfwdddjh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163whjqbhib.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tgbgmvhl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pzoutpwn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163omgiqkdo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ebjkxusu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ovaugptp.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ggdxmqvq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dybtovcv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xgapmkqc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mxyvfphu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mawpgydw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tqmjfmrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vmzuxsbw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qhakzdnz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163adxqxwri.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rqhflgyx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vmpfslcu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hbdfvnsp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163kxcrzmkv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163eeaswiuv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jjsrhjly.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hhmgftus.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hscypxrh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hiwyvfnp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zxksvkqm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tmdyhncr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163iuvvvape.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qcikfjzg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163snkehnhh.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wpzojqfu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163epespevb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qtlnmqig.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163kcczwdtp.html

================================================================================
来源：http://www.aibaodan.cn/163aweflazz.html

E. 字符串处理
来源：http://www.sxryk.cn/163fqsexrhv.html

================================================================================
来源：http://www.xuanzx.com/163jckrxkcg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xpjrfvdt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dftvfceq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kuruzdit.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eqrwiuvg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163voqgifbj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jysghpgj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163odtdyudw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163jgbjtdfj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yzxslpum.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163iybcopwb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163khibgghe.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mztnztmr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qajsaiip.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163eicmgyde.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163borcrqxb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zlmlwwpr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pleowuap.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gvfmaszd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wzxkmqgx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uzrwpkfc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vwxiajzv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tqoawrwj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cqngncqk.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163acszzony.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163izoulajt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vyidyyvf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163knhovwis.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wwihywmr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cvidrsos.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zpdtlctx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pyqoxavf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163txwtsmmt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pevsbveo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163osmfopxz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gmckbsuo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ahoxzfiz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vegayrqr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rmvzdmzs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xrxcciob.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zfpwqtza.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163olygcoqy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zlvdvoeu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xleoeapj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163swlkmqsb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xfihjuhs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hflowiid.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163adwcvkwm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iatvfunl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gonedihu.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pajxvayq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163upzigigk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163liezrozl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163avmahtpr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163skkjimvk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kfpxyunx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163sqggpccv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ymnqqqjx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yyivvrxr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tgtupthe.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bjatspbw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jyslfoub.html


<!-- 参考信息 -->