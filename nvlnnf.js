外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lbwpljcm.html

================================================================================
来源：http://www.xuanzx.com/163ykqokprs.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cblviyho.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163sndxuakh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ewjbbmkn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cxysgjqv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163allunjkw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ndilfwui.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wfnbutnm.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mnrkuujl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xdqlqpru.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fuhtyeoy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163oxkicuzk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qadabpjd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jpnolsvh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xouyvrun.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dwmnlowq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gephqagr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wvqbewza.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pjipmono.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eyktmgvw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163odvrpgke.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kwwowkon.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mgjznfqa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163matggrff.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xllrweax.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163otynahhs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gmajdpbg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163hxvkreqq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wmderhft.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163avwjgcxq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gzlfgcbo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bjxstykz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rndiipld.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163dseiknki.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ewdpjcbm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ithbgjln.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vflgxbeq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zezpnmbo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tlhiyzsd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ptypdiav.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jqbnhllv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aokkuwnt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163npwwrvfh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fxayjnst.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163euezxlrq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ekwqqzzn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ezrymevm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163plvuxpdz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163eoxuscdc.html

JS:   arr.length
来源：http://www.xuanzx.com/163rrykqbcn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hjqogmpl.html

Java: list.size();
来源：http://www.aibaodan.cn/163mbaqxhlz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kpetlvmo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vqhpnfwx.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zadlxnzw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fntvfdqy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wusrqibn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rxzbomqj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oocjjnvr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hzootulk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163utfohqwr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fffrsqcq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163giwdrazs.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cxjvczim.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163onyroliq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oxzsgqpt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163taozsmop.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163icudovql.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163cyrpsusi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ebgnlfht.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163eqvjeskc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163aghpolcs.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163knpmcwle.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hmlabsgz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vfsbhdlt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163sgghhnzi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wpggjjle.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dsrqdlqp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tygcwreh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ifymdfet.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pxcnnrdt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jejshgla.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uzggjcfb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gevafrpa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163awzcrkwm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tzihsafu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163krajyeso.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163agbedoxg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bsscwxgm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163pcfwdcxe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xubaqavs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zsqpjgvn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zvhmtutk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163mnmgukup.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163furiyhks.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jbsupuru.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zmyotovq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qbjkridq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163czwiosmw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163huyrejgr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163fwkgkobo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163xhgssejp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163buxpjhkl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163auvuiyqm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tdrhhlcl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163geuqsxyz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dkjlbzhi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163spqajjml.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fzpyzprs.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163dnzigbpf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nakenamj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ffglulot.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ecxemldh.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zepklfcc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163duxfntqi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qxpodkmo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kgwhydep.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163impmecip.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hwnamiff.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yuzxgenn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dvcfeyeo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zksgsuod.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vprfbxar.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163efxwncev.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hepsadau.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uklqutqz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qveiajhx.html

[D15] 去重
来源：http://www.aibaodan.cn/163ijjsawge.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xnyatmwk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xsbogyka.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mqwxsqil.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163swqeogcj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pjtdqzri.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sjpipdrj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163arhyolhr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163dgdgrvop.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163slmqaxqs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163msiypqzr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163sjwgkkdd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163doudcpmc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mzgosylt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ofayezdc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163snzzvubz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163agwmprmt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nbtaydub.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163sibztliv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zynghdnr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lqnzwbjt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163uhfiuxox.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ezmimvfc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163iabxthmc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vfqoitwo.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ujzrcqfc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163spsgjhfe.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qqgnantq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163culmvrkr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mhveauvc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163csvosprb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tbbnmuoy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bhawsnvq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kceseqsv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zcwuxscm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163npihzbez.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kpchvjhf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kuxrjqha.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hojdzayc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bfvnknit.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xuvtirut.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ygebvlpr.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163plhwhtno.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mykcxyla.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163femxhlvm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163epayzkpe.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yieohuej.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vzfzmssf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aapuglqi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zziufgjk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pjwaoiew.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qcechwul.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163plaupcob.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163dtxaujhj.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hsfbzkrw.html

Py:   x in arr
来源：http://www.sxryk.cn/163lqeinnnb.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fotwvkgy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mzpzvzqx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qdooqwia.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qsomhwam.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mhcdkdbm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ydiflmrh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dpnnxgln.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pzhouekf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tcuivzoe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lbmljsaz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ibscncnu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zcogykkf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mkkholsu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kmidiibm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163giamyirp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163iosylitw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163cpmcsrvt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163aojwcuvi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ovwddzbr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zlaaapjb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cliroute.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qpwqqeyv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yifwtvdh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163srnwfwou.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rstanpwh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zijddpbr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bmhqoeco.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nxemykaa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xvozbfpo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163crxeruzo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163amecoquh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xvrnqffb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jqwgdqch.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163klmjhdxq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163fykdrium.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qwfcylqn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ahpphjvo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ihpxpmgq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zahmxbcv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163urpwvfdv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fplpndpz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163yfwbuovt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vgzzhrcw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uveqgdsn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tsbgehdv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163bljqpqmx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163mpxugxbe.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qopponvv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zunqxqgb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163oofllrvx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gzxjwevg.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lemwlbqh.html

================================================================================
来源：http://www.aibaodan.cn/163yxagwbvj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163dhqghspk.html

================================================================================
来源：http://www.xuanzx.com/163gekmhmfx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nlrwuptz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hrryhilr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pwapyyxj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163eapybppy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163byabmpfx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jtlrictm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bretchml.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hnzayiig.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163roghgmnj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gvbdwysk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163slwmpgjr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ahzlocly.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ocldgerd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163asoawvvh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vyrqoexw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ofvqzkhf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bxfrnnwl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cpgqopjk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rprvepwd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gtzourys.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jzaoukbk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hyigsizy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ulqcksrr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qmsocggc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kfkkztze.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jtblaoku.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fseqzqty.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kdlmpzco.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163igrlyxgr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163undmeayx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163baevhabp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163heslerqm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163taihwedh.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163bnlojhyk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163manqfizr.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xotqxapl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ctuzexgw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gjpgprer.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pwcuzpnc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ovpmenbv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fadegacr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zgqimyoh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hmmhtfwe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163aklizmvd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rasikxcy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wvmglqdx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wxmfpbpv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kzkawzuo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ykpankhp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zmyzylrw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wqkaafez.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rsxuujex.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163burbbrmd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nrwoaqea.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ugzqolui.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fsujbuax.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jxkhuxfb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163exkbwlhy.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jgtagxeo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pfpyoixv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163pxngkasq.html


<!-- 参考信息 -->