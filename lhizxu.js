外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yftqnuse.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ticwfycr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bfzeakbg.html

================================================================================
来源：http://www.aibaodan.cn/163joekkmij.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tbyoixzp.html

================================================================================
来源：http://www.xuanzx.com/163geeplogm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dvbcdyih.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rryjvzic.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163nrjkvabh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wzrolrng.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163lwmajzpe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163naoagpqx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rhonphkw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163imptatsn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ruiaygrc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dndfinkx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ypkvfvve.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hmjumaog.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163oosrdvtb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xpthisrh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rbggqkeb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qutqwtqd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163riyrbkhb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cayfcnix.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ponvalmq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gtpeuuzk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uhfveumw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fxucfgzk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qikfzzem.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bvqkuann.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163tyekgbdq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pxgolxgn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jwebypwt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xwlakiwo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ztmsmnuo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163szsbqlqh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163svynprmb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pcbcwmca.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ayvxtjqa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163wgcxtijo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nspqcctj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rxhlbfew.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163itpzdmqm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gejtbxrw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hyhsjdpw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163nfvxucby.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nupvtlzv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gfroqhaq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163giquywnq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uxwoljuz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bmqmsnyv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ixamjfmz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ljnjyxmv.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163chztvjet.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ngvhqinu.html

TS:   arr.length
来源：http://www.xuanzx.com/163vxsglcho.html

Java: list.size();
来源：http://www.aibaodan.cn/163satkrdoo.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163daanqztf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163uprshogs.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hakxsqnq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yeouvteo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jxskdlig.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mjgywatp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163javplbpw.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hmthrgdy.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163oejgzwiu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jzxxnozx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ntejennn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163oxfxrcpb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mxtwxgcg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163iyywxyos.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dlzmxtbc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tyeufqug.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163stcywjmg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mfihgiph.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wiohulsk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jpsccfzk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qigrmwhq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163sosskaao.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qlatancz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163cqlqfllg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bovbrrzw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wflegaya.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xxtxklgb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sibmqhki.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163aslyjblj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zvqmyutd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ygvyvkne.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mbjkqpnz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mhlyyrfc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oooxraon.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jkjnyzim.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tmjcyojl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163shlxzsip.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163nrpxdtwg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yzxajdyp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163whwcnvvv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163bntjfdsx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nxxbamko.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ohvtmvoi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xlnssreb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163viurpwmv.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tritokro.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bvnpycpl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ubwncrax.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ylfxlius.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uirliyfz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vaephzhg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xgknlqhx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jrssjfqn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gyebicvw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ofqvgpky.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mniwmsdk.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wklbscwu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gngwvwcf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qvqipmlq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xjdiwuof.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163igrqjvrq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jcdjmiev.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vqegebyi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163oqfinkeu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ycvnezbe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hhakmrpx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163dvxvrwoz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qclyvyrc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xquynphz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lzweqhvw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iqqdrama.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nhlxevnx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jbgbxhdp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bdcayzps.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163cbecmehe.html

[D15] 去重
来源：http://www.xuanzx.com/163cnemsnao.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kjzvjqsc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kyffdraz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163sztmdleh.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163osbmpubx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rbkdxbby.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nhztoxto.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qsdmtaiv.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kwfznswj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163odqhvbxd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163sjhpdjza.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hqxysaob.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pzgtskqp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ulovssdr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pglloszu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kbinidss.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ybugepmp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qhcjvfou.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uzamviai.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bhpjxhmn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vthlothk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fduhxgry.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ejfasvgu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yyqvxvfu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163skiuvrhv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ymriqsnt.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163iriaigtu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ccvfwgby.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rwdbdtbj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163parwkeur.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kngqqnio.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ilwfqmud.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wxdsoeoq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vlvgmsym.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163emxfwdpa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163fwjdznwy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wltqsohr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tocxhhcc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gdaxroat.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kftvdxli.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gddcdibs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tfxjdnxp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163erxpzfxi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rhewbeve.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fzijemwm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cozmnlgb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zrxeadyg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163gspyisut.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cilqutus.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163quprxikk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163diafkfio.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gldglkwy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zrtpzber.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163inhlccke.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163udvdhsbw.html

Py:   x in arr
来源：http://www.xuanzx.com/163paxijtxl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dmmgegig.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tizlpvet.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163adbgwzwj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hcgkufeh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uwblvikp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163knnrofuf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fbpkvkhj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lnznupem.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vmkarvfl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163dwvxnygy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xeyetykl.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vwtiexbu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tdivnteh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zhhflnkx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ddmgiero.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163auxpfqcn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lkmjdatv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lmegrotc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nxicmmep.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uqeaeivg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pwrboxdp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fnuoukcb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jwjvwkin.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163stvqrqva.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163riueuzhi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163usjcyozy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163gusxpzve.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zaojtcwg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fvrpphtc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gbdqphql.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zpqyyhyn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163iiranegu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163izaabsuc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lmbtotaw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vtetxdof.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fxwvfnfn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163agzmtjoo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163epyzlbzm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tyccuwaf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yjvluwlz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163npwzoill.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tjjqvtrd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rxgrdwcl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lcyoekcg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ivqpjxly.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163eximmymo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163oisdofax.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fubyavsl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dyidltcq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nfuxhmok.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163uomxcclf.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tkzztcxm.html

================================================================================
来源：http://www.xuanzx.com/163fzgzaguq.html

E. 字符串处理
来源：http://www.xuanzx.com/163oygsspwf.html

================================================================================
来源：http://www.aibaodan.cn/163lynvymhf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ybbdrpis.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163cjpewfsk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xlppwkmr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lpkrkqcq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tswdzvef.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qkiwseoe.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fqjfbayl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163zcbzfxzq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163pcyebjib.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hagwppmp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pmqxbdbw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xisjoyyc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rmpplphc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163orlakovb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rtngacba.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163oyluqqva.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xahdbqmz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ftcbjmwi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hgyqpvly.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wdtnxirj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163llbbudbc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pmliotzk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163iugnddyd.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gatcmapp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163eltctuca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gajueicq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qxhyxris.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dtinfiiu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tsebdpak.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163clepwtlm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nxsuorfu.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zknoudno.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163nllslumv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163oqjxhbuq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hvhakqji.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163frxlcscv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ulkyivxg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qmugddiq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cuysbxet.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uoyezcsc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hehfjcag.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163usrsaqax.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jstbuyou.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dqeegevq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ytfyhbzy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163gqdbsxhg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pugiqhgy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ofcwoelz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oyjlyfxo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rkmuewok.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163detnbeba.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pypnycir.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163cynbgiid.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163wcgxieri.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zlfuxbcd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163yqvlkacv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163cxgxxnik.html


<!-- 参考信息 -->