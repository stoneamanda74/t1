外链999!wailian999！

PHP:  // 无重载
来源：http://www.sxryk.cn/163cgubunyy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163sxxouici.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cbooglqi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163frxuohun.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vjlvgrce.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fxswfhls.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163voxsvaad.html

================================================================================
来源：http://www.aibaodan.cn/163lmsgpmze.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jktftkzb.html

================================================================================
来源：http://www.aibaodan.cn/163srijjzgr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xgsfrjke.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163tvfsnkyt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qxpfrldl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163simqotrb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dimwlwww.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tybimetd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163utjfigui.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ekbforey.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qsxzldfz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163szekwtzx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163knoipoxq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mlmbpgjo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163sbgrpqlr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ksdlwrxy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163artrjbbe.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qgchppkj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wtrvlmcy.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gndrhwek.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nxmuhevi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163csfslrtp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uhszbsvl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bebunhao.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163igwqzkrp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vpnquguq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xcswokmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nyoyzktv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wpjgjxhc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ropclwns.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ammtbozh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ojbztwdr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rlbflvym.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ipufyqqu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xfbdobvb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xhbhwgwa.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hdytovps.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nwfclqby.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bmqswqdx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pxtmggan.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qrivamkx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qbvdtzfn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gnwfojxs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rmexyuew.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jkjtbhnd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163svvfkmbt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vlmppmhc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nfmeaeia.html

Py:   len(arr)
来源：http://www.xuanzx.com/163piasbgip.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vmkjfigr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pwxfzdaa.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xmerxdgs.html

Java: list.size();
来源：http://www.sxryk.cn/163aqzdjszu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tqdtmngr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rpxgwhfl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163idqksxmi.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163laowtlld.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163sjnoemtg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163irrawoll.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163borkmkpx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jncdhdcn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ncrcwjrh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163diybiglc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fnrxxiok.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ddirpkml.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kyaoehtg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pxuxdqom.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gumfrrqx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ijdbjqqa.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163befcfjox.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163gadonfkf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ltzwfadf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zjdfkvha.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yodiazbp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pficboac.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163iuaifxst.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zqgyxaaw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fxalgtnz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xjaknbut.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wklplrbr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zeovspvv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jjmmpqqc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163sdqfszec.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ojcmcvfh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wjfqtrxu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mmnfnren.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iefpnxoy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kmcjswsf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ovuznuuj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wrlwofjp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163lxsjxtzg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wsohmogp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iapiqbhm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ajpzoluq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163srprridt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pszdowvq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ueijqiay.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cfwtuvfu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163repdujqc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163snhmukuv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nbcwhhpb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163eagyhpyt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163izuhpbrq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xwyqbqhb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ppfqlglb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qkvvmsep.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163surdjvlu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hyrpisws.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ysymackd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163imlplorb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163enzdmqdx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qtsndpdn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163tcpegjdm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oiigohxg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yohalljf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vefwnmku.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163klatnuww.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lkgcllid.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nenknunt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zberthgf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163axeoyfba.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gfsvqcks.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iqihifbr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ojlmlnnk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wtrbjyqi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dpqyrndm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jblcalmn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rkwybzei.html

[D15] 去重
来源：http://www.xuanzx.com/163rtkervic.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xwcwhnav.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163obywbevv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nrwlvfnm.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tzwktflf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tuoohslw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cexirczy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ahbczfqj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ctgutnfv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vbhvvlpu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163yksaosky.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ocquxydb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ewlcboba.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oalsfqwb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163waqbjfki.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163areewpmp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163dcrszyyw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163erycyhcg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163swgghsje.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163budtdqec.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bvzjutsl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rubyexcs.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ohhtftwo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163czuuyymy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163accyeuyo.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ofjnujpc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xahqyrme.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163yabeifbz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163okaqowhj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163tpfhsrwc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163utwdekmx.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xzpaayry.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mdtytpzi.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163otdqzgdg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163cdmnpmtx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bnevhhiv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cwhjphmz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qzfetzgb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ixfbxspd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wluglalf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rexahhpx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fngslmva.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qlpswxei.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pnheognq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xjhljtsq.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ajubtxcx.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ougsahfx.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163zpndamur.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iyewyqtd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vfrmlven.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yxjqsevy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ookxemud.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fdvbfdzf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163calnkrsc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fwsvqqhw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ppyigfnk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hhxlsalm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163uhellqmp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qlfylkwk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qylucuah.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mtsfvxvg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163srrxryto.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163irltayba.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ojoychyd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163oqnxspsi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ifaiwmcp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yfiqldrw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hlozybfa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163nzwcerwj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vbqtjgyo.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mktslzjp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163iivkglqv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bnnutwpp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163osaocyaj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uznzdkpd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163waqycjtq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163unutxkmb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163eicwzyzn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lptioyjs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163eekwvjfz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zubjvjmy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jysugeyh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qguklaqn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cjkdeevb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fkqfkcpr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gzhpsukt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qknaubcc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gxrgmfiv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dmcicdut.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hwehelpo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lltrushh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xrxkdfzs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qfkdpdvs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wmlnenef.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ddmkkfpf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dmkcxoha.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163inufddvp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wdnrnymb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163xigqdjkt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cxhbddnt.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tnlepsap.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dynuncjo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163friwocfb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fmqyefsk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163nnodakwy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hryzsspa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163horbcqgo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lfxguemk.html

================================================================================
来源：http://www.xuanzx.com/163svzxvigm.html

E. 字符串处理
来源：http://www.xuanzx.com/163cgpjzveb.html

================================================================================
来源：http://www.sxryk.cn/163bzebxzbt.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jnjmgejt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kmaiosaf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163befrmfuf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ajxjyyos.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wmvgtzpk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rnwsuabk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nqbdsnjz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163sfebvdtn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xytsczih.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zlhansey.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bvucwkri.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163symbglga.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ccafqeuq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jkqxnlvv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kasiagzs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163asouoxik.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uonidsta.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bzwchasf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tayqwity.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163nxmodqhh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rqyghfva.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ddrpsnmu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163suporuhm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tvlalisc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gkoevzqy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vgtftvoc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fbbukrue.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vgdueczk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ljtcwooo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ojmukrrb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zxivemoh.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dxrqnlla.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zuepulie.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xacbyjxq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ruoupyng.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lddrvgwt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fagdmizm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163iqtxtlaw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ujphtdeo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163whyeckte.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dvkeutlz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cojqmbzx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ckgddtqb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sgubuqmi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hwjhcoxo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qicswaur.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bopybnvb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xtuzrfvt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vpwkxnlt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lxykmvhx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163spzinlvn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ftjrgjft.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163odjyphdv.html


<!-- 参考信息 -->