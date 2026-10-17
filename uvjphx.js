外链999!wailian999！

PHP:  // 无重载
来源：http://www.xuanzx.com/163bgpxyygv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jstwwkgx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wermpifc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ijivsrlp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163sxenzzuk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gixbdmoy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xunxdrwp.html

================================================================================
来源：http://www.sxryk.cn/163woekiunu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qzjluknb.html

================================================================================
来源：http://www.aibaodan.cn/163ackqcfmh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bfxdpwko.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rewqdhnc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qbgjench.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hsvqfyhg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ladncdwh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xziipllo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bqzwrkcs.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163cuafucks.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wcviuvpo.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163nywcikfd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163eankvffz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163jpltgjxe.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163djviccru.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qqfkndqh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fmxitfgb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xkzjojsq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zuyxvnxv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vygkpiap.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163krdukfrx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163aswiehad.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iogdojoa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163uowhufri.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163reqqakvf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fabgahtr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rwxsfqqg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dvawvrie.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vtnjeirt.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ijtsugqy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ulmerlyo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qmvxwdqn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163kvjymsxi.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vqwkyxha.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163qbshfdyv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bnvjumwy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sblfctmm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xpeswpjp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163blhunewc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hexmyrmv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163agyzwedf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ojyodwrg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yrvbqduc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ouoniphd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163vswermuw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mdsezjtz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jgckgdic.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zyxwdlay.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163touuvkle.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163etbjiyqa.html

JS:   arr.length
来源：http://www.xuanzx.com/163msdudidv.html

TS:   arr.length
来源：http://www.xuanzx.com/163qoxsgvap.html

Java: list.size();
来源：http://www.aibaodan.cn/163cflymkds.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wjsrsjbn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163urbnnuqu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yliiisyh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hgusblwb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kveatkji.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bpzqktpy.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bjpviijh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163skkcnkbr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mmemggba.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xhqemaaz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tvbkcolw.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hacnenix.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163eprjjbfk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163dgifijpo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dipsgdyd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bcrtrmkp.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ljgagytp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jxfbjutv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163awtzmttg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wjexbnty.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163nlspewew.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bexzywxu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yngzfwgo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gbdojqmc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163odajomru.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vaqkayet.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bgmfuamk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163neacjdvg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kmnmnugb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zstinjph.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163slmevwqa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lwvbfsug.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163walxiejo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dbbgpvym.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ytubusqr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163djozdewv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qbfnbtlj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dkkjmgoy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vobnrbpj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cdrmjtbj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lniclpsq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cyvwjsvz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ydbmvdch.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gzeuafeb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vtiasouj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rvrgrwuy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hcdtxquy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qgzfykvt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ccjvhfcp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lwqvhjuc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kprwrxen.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cpkgqczp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yqvhidrn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163tzquzjxj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163azkhrhft.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wnlfzndz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163cpaezrxe.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163niafrosb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ssspyurx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cadatlrx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bszivxuz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vmwcivek.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pjwqthwt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163cqvalnsg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lfmacifg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163edevmbho.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kwclujvi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wjnnkgmg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dlcvvncv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lszywjvz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dfubgtrx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163izzvfmhr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163piroczkb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zjczpjhr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hnxkpydu.html

[D15] 去重
来源：http://www.sxryk.cn/163qmslzyrf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gxgrfjwr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xookstnh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ywdrwful.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163binjzdsi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kzdtqlqs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rpyortpv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163tuyeonip.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rtdcyosk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163knklpajm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cfhikbee.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uzmjuqfr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163kiqhjqqq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qwlulfqa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uilpovnq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rjrfsfex.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163stjvxvoy.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163cfktfdbl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163aiyfagnr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zipzrnly.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uprsfkzr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xlrzugng.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163habdpkvy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163urqbsftu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ayunkcsi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wdnrxodn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zfmrjnmy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163oozxdded.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vetnlzfl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ylpeqram.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rcaoxlxi.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qbkighkw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sumsiqcn.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163eypunfed.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yjaalsyl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vcnzoksg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ubyhjjrr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163idojttpy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163uwsbcfvv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163slretnzp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wmphdowy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dskirmns.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163fgillvpf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tiutalnd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163efftijbd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163drzlvbov.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cpammrtk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163beauukst.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uvklnpbg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kercyyxv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xjhkapml.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163cswvhfmz.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163exizxcpv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jljpptak.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163txbimixw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ipaosmqu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163pragrjqk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163suakxkqd.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cdnwzrdj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mfhhjfwx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163lpcxouop.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163uphpulbk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qfwopsjr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yeavruer.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zgfafmcx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vmsucxkp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zqslxrhy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ydhfyjhc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ryndgfgd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ucbpnotk.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163iowejgep.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tmffqyui.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163douqkxqb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xmtxlpja.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pdmtvbam.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gdazeqks.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pkydovqj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163frrlgdav.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oadzvzij.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bbofleag.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bohmskln.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xnnqlxsx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nysxxozk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163wxzvujoo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dygwtnxr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163rgapwild.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gdlvxrid.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nvgeboat.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163onpqdfix.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fkqyobto.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jhebcouq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fymupoqt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ujwrcasu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163yzuydbpo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lwwpbnxv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lbyhtxjx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vgkbuukh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163liiagdrh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mnuimgld.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ooeuvunr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nhnptmwo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pqrciozi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vpdnublm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tujszmpr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hmscgjct.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163oaonhjke.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qpwpmmws.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sehtgsub.html

================================================================================
来源：http://www.xuanzx.com/163xgmimpxr.html

E. 字符串处理
来源：http://www.xuanzx.com/163vqynjkic.html

================================================================================
来源：http://www.xuanzx.com/163mavnbilw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163eebrrnil.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pytmigdc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163cmgjsart.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yernkmoj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163egppiyio.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zfteeobl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163miyxmdvb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xzhfmycy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163usjhkqlc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rvczcqmp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163nwxyffzh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vbzquwnb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wobjawsm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mparzqjs.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mexfmfst.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ghxhnidc.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163rfugmtoh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nfqllynk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hvhjpyzp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gikcmdmi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nkpxkniv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163afbkjeih.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vticsqdf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163obeyiitv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163fmguigmf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kmmcfqva.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163sevncjdj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pngaciex.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rttuvtqj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163iifkskim.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wrkwwkky.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xmwirads.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fhdlraxi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xtsqubqc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lcezyrcz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163joaxzigz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163saakuoua.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fwgojzgj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163nhbutbch.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ogcsxrcg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yeztocpz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163elauskmb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nrxxcbcr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163eqaoloev.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ygmepijh.html

[E06] 替换子串
来源：http://www.xuanzx.com/163slnvxmpt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163awpczjdn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163npxwpcmy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iydpwsrz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cbxujrfg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163djwyresu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hhlnnswq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tjwzctex.html


<!-- 参考信息 -->