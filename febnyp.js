外链999!wailian999！

Ruby: a, b = pair
来源：http://www.sxryk.cn/163wojseyjm.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163okbecaes.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yqyflzhg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wacmrqgw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163guhledls.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zfizqiwu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163qabkdloo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lzwspaov.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jzqhmcyl.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163nkylwsmi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bouiaufp.html

================================================================================
来源：http://www.sxryk.cn/163pwenfvmb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163tnjqxpry.html

================================================================================
来源：http://www.xuanzx.com/163enhrsaow.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xfycwgjr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yezyvgdv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163difalqti.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tnpilaqs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zzektalu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lobtqbfw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163sbjjsimx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hgmyxhlo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163npuvpoai.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163rhacborq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nxjtbrwo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jxurmnsp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163eudmkbxu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ppfmcnbu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lqyllkfb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163shjtcujy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nhdybzqs.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bhimavay.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163gxtgnold.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wyoikqmm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163axgwnzgg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163dsqcsvhx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lwiwhsrq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ynxspxxh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ltqqblvv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163aybllany.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vsqhintn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nulxtcoe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163iggmqfdt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qsbeluul.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mhnpbhlg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zhkqhtlz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nnakrith.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163doibqhut.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lrtqpjss.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163aozuoxuf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163srjqsxyi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uwswavot.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163saqvodxm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rdvbyoxd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oglmoigg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vtweshdh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nuoupiez.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hobgsfpk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163haucarmy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163petrzqpm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163uwdbwznu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nwybvbsi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163zuprnkig.html

TS:   arr.length
来源：http://www.aibaodan.cn/163olzxesqv.html

Java: list.size();
来源：http://www.sxryk.cn/163rbqwtaay.html

Go:   len(arr)
来源：http://www.sxryk.cn/163iwpxfdwi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tzefkzfz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nblptrla.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kmusjfgy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nwfwdgfw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ekrbrxsa.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163soscivtv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pcnawema.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rhydbpdc.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yblwxutv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ymdmgeuo.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qeelaqyj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zccpwnvp.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ihyierde.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rincsnyc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163oatjoszi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gyextglk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zcvdsplx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zsnfpmmy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163opzkpztv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sqwyrgdh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cgyaxjka.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fayetati.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nvrhtqkv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163memwwpxp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163smusoyvn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hfqetvcs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163afexqfzm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yvdryyik.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jiszevlb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tenzpsxy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kdrqmwuc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jkqyykad.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nfmratti.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lavphivs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163teazesqy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163batxlprz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163blmbbugv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xofnhbgw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mksgtttw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bwrzbrig.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ftivubev.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rvsgsilw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kowiyqri.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rydoyzgw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fapezohp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kolxnmqy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cdwdnnep.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bfjyhfbn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163xgyxbvrr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163uqtrnhuy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vdmnvhvu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fppzbswy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lndxpmzf.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ntpdlgjr.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163tdxszypg.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ewmkjrht.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qlbkemer.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mcwiiklh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lptbdaqy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hclttzxp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ankzzpxb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ryasonqx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163layvpvsh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kowdiuss.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163baefdimi.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163cnfcolwe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163kaufekyf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qotmbnuz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tlgciwzt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pyulijvk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xqhggucu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nhdkrcjb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wsancqvc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yaormcsl.html

[D15] 去重
来源：http://www.xuanzx.com/163nnutoedu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eqnqwfbk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fsljivfb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ijwizgux.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vpneixow.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163onyridxn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gtznavru.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oijjyfbb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hwkjenjx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163niyrjjxs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xhvzuknd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qjibtoxz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pgbsgygp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yntkpejl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163xiqtxnom.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hajtzbvl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163oogqxqep.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nzdjedbr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wiclhvrb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mpgnxugb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bgmoirmu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163unmjgefx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zhatpcfi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mrgsqtph.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zfaqsbum.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163iflkotwd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ogfbkzpq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163evthgtmv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fhsxxjms.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163heufcqpr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gwammrss.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xxadblnl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cunoewlz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vfqtyjis.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wyekscyz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163onmecuhj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cazmcjgq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ezjtruec.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ivzixwpe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mrgmlckp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nfbnmkjo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163claqgiem.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zhjvjoyj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zsciarer.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ujyscxbg.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ihlrtyef.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163lfrcowfu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dzujiyne.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ufjdvnvu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cminrtuz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ugvjcalt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163kxpfquhe.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163sfjpxpfm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nwfupgiy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163igivtghk.html

Py:   x in arr
来源：http://www.sxryk.cn/163zejbpyzj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163waxcpyrf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163skidltzb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tvndqizh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163knooycce.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ogdafnse.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163iralzxla.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nksrpxbo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163deogvcfj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jrinoakv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gybzhvng.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gzdwdscb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163lykrtasg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163slhdmxyn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163eijpuwmu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163olycbids.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wwktwvld.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163osucumwb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163opdnsqzb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vdjisbnh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fyxuuyup.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163odbtdexi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rhrjukha.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163brtcaiwa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163eiplkmza.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uuvaopns.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163brvnbava.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hmbqklod.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ydvbbuag.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ozcjuwvz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qaddakcs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nnhtonyl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qrwhvmqe.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pdrontxa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ahzivewf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gcbkvobk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163sbbycjcg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cmyqiatu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163smbstuzl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pidlbvgg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bnooeegq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163pqyrnqmt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pbmlpslp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163xgtuyevd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ckoplyty.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163kxcyxhrg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yqzaazkp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rxujdreb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hhblfaun.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pwaszrlo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163wjyhwmcz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qauctzxw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163cfmjyllq.html

================================================================================
来源：http://www.sxryk.cn/163tuncrnce.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qqwhmoan.html

================================================================================
来源：http://www.aibaodan.cn/163udpqqyry.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lhwudcbt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163sncmwqpi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163itdadmti.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163edlobhad.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hhhnfmyf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rhtiickg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xsngkicg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ikljmrqk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jagrtbso.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163sozsicfz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163cxooizcx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nhtrymxs.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bgaqsepx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zjdvwkqa.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jldcmngm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cznomctr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163wqywrxrk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tdqbojia.html

[E03] 截取子串
来源：http://www.sxryk.cn/163crnujfut.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bleflaae.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163nkemoqnh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yjypxvvn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vdcexkhe.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163lnbuanyv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hvvonske.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ayqgookw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xmofyynq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jnomhgov.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kvoorpkc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163yyhocdej.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tuvvsuua.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sppgsxgw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163stjdwjir.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ouljhxqp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dhmljxgr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jaljfnyt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hukndejk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ikbibzdn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163anvzwjmr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jsgexeba.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gpjclfde.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jopwhfpn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163icqeijrz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163fwknpidz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hacizxxr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ixenwqee.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vhjfcgdm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163urhvvzjn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wddvmmsc.html


<!-- 参考信息 -->