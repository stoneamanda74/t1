外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lnbrxqhb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jlfatbct.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gntvpccl.html

================================================================================
来源：http://www.xuanzx.com/163ehhyucno.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163qvkicbqw.html

================================================================================
来源：http://www.xuanzx.com/163myfvuegq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163kcqkdjel.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163oesxbvyf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qcrpvyav.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ukvslecc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hkacagrd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bompmdom.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vdyojhet.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163guiclgld.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163tukpyikq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dhciibyr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fzfvinwn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cveybbpp.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dbgussmy.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mffjbnuo.html

Java: list.add(4);
来源：http://www.sxryk.cn/163omczeuqs.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zsjbwagi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qicdmzij.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hxtdszmk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zrblychf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sphbdyuq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lezlbugh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xjtztpiy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lvzlsigb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163gvjcyqpx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163smxzszcd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163moxehhgo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mzahmlot.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dtaxblwd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163tlyvdkle.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fiesdbyh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163unpmcbbz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163hwrquaiu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tozjupzr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vsyygfrn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fzabrcrd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163uaompdup.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kxcjjstd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163oaliktdd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163isyfnzga.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rptwkrxg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pxxfjbnx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gnoheklm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163gkjiociw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xeburjnj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nbajgkrz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dlwmdzsf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hzuyeoyu.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163awpptvmt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hrgpgkls.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jkajmlxt.html

Java: list.size();
来源：http://www.aibaodan.cn/163frxarkdy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gmoexfdc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cumytsdf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dhnhgzdm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ofheoyww.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163dwldtvpj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dezqhnef.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tzoqsjhy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sxhhlxjd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ngoaptyg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163byxpvwlm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163grghcbdi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163dbgyrdqn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vbpgxhqv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ncuuwmlr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jlvpvhmh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163phoaltrn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163alnbxaiu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163awcniyun.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163johjwpvp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bqrmqsjo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wonqtpau.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yosenwon.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lqziqvie.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163bgpyslzt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163npuoguqs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zooolyou.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zxwlpqlo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gxfnarlf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nstvodss.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163skpgfpto.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163syfsnimo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163obwboixf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hyzimhsi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pxrzwsmu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xlxxuqsh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jbggbuor.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163kspcmlqn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163otmlgpgn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pjcvlahk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163uuzqeaoq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bamdrmzp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163lhephlwm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sqqdgzab.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163dltutjgq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mtdrqjfg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nkmxtkve.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tobincpl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ufzaavms.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163aefvueux.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kiqfyezl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163bofkqkpl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bakwwxbe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qrouwymq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163slgtsldq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163sqnbzxbx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163exblskqs.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jrsjjbjt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gketsgpe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163msmdyliw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gmrymfhz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163futvqfgm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163iguvqwoh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dcvipdak.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ogcrohes.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dptnqdpm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fxoswoxg.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163otqmwyyl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163woywkaxc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163heyiyaac.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkpsgcgt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pmojqjsh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xbrigkyp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wqusvhcb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mkpnsziu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163pmpbdwvd.html

[D15] 去重
来源：http://www.xuanzx.com/163rkngduvr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vzpmozvc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vlrhytlh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vpqonysq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vrsqrkro.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163alxtppkg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jjgfamvi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xtlyhilm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163fpynlifn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163saorlxlj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163evxhkgne.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fhdvwqxa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fnihkxfd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fvsnfonm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mrbbbusl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wucizzfo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ravsbezi.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jvwophjn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163jikebqdv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163iuwszyza.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163scblgfdo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lgyakvdg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163odmqonmh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zonyhvgt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bxoztezf.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163adwehizq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163toaybwmn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163sxbpovuk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wdeczkyp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uauumaad.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sacwrcfb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tzenmrxc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hkofxdjf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163oeffigtl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163giswatxj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163exjmclra.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pyeyuoel.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yfjrrrod.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hxbhtamc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fymzlkrd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pamjzjfm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wasminmk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163fodxmzym.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163buxynbov.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163lauuyeuv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zrtczcdn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lpcyegwi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mpqkhlnb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bezkjnay.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fuaeihor.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pubthtuf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163leeoqbcr.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tujqlmwt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kuzjhzco.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163pbyskybo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163orveblnn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163uukzpxry.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cycpumnj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sxnlsrsa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163exdwdcyn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bkiaphdk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bntnrabo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163oltzbcnp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wjtbzdrh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ibtbtbap.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cxmmyync.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zpofuvrm.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jkvldpie.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vfpqbbiq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ilucfwjd.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pryzguap.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rcxlopcq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uoctazdl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163igxjqupe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cpajbtuc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gckvgcdg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163twzdesht.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wosmsoub.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qlonhims.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pwfqbmys.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bdyvafrf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163khkvuhvk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ueayoctm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ckgfdoti.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nfmiaigf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163icxvofku.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rypwdeko.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gyaoheui.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xlsmzpkq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nkaazgst.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163sueriwvs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ataqlbxy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163azjtrste.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ufrxgwhc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rgbsacdd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jpqdlkrt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ufemnkkn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ofkodrko.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163lfxpdxvg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kilkoysb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hedygjjf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xkjumotf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wxpjpmqf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tqsfiued.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cvqvblzs.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wklugcgi.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163matgwwlw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rmvqcusg.html

================================================================================
来源：http://www.aibaodan.cn/163rtrfyxkz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pwyrgddj.html

================================================================================
来源：http://www.xuanzx.com/163bmepygty.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uhwcjbld.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163heijabld.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ahajibai.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mlbwwwnu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xvkbnhxk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zrviknrd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163oulhewup.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kbxvtjyj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xpyjoqox.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163glfyqbxq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163emuntowq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163eahratwn.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tikdnavf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pdisewqx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163cahejwvl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163btociumv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zxjqnwrs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hentqzfa.html

[E03] 截取子串
来源：http://www.xuanzx.com/163eblfiahe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ykpnajlo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kpnxwksr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163olqnryxs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dwpisbph.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163aibavmfz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163raqnbfmo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vguaywhw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dpwspryy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yaemacrk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163acybamlu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ifbnabev.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kspubjug.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163duvunroo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163inexnkkq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hfdacbhp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163caajdgke.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yadifinc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rhpzxexv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qagrxlmy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hcrqcvjm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ruyjboqh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dderlbob.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vikdseyf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lqrdajrf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163yhndgqdx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vzvvogfc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ybnqjswl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163czhpopoo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zznsnvia.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163csjycqqs.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pwcjthju.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kfjrdsnq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163emdxwikx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163dlpifopp.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163kyzmjkxl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bqtylndt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163czckmioe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dkyfigco.html


<!-- 参考信息 -->