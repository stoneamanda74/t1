外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163aphskqgs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vonvngra.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163mitfgzjv.html

================================================================================
来源：http://www.xuanzx.com/163nnlboaws.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hsxhqpyh.html

================================================================================
来源：http://www.xuanzx.com/163hbzogwdl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vocmgtna.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sqftxaoo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163sjufwgpb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163fevceoxt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163txealybl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wguibndk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rjpenqqe.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lrvrlzvf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bxgwckzc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163prqrtjbc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163chzmujsj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xqvieznj.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fnggvxva.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rwqftyyu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jwkguztk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tlolgoak.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163eapwscha.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zprmgmpk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fapdundt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qaugmelu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cohzanlg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163szfbiouw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bylucoln.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ledgmxov.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dkybctmz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jxnxmlml.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ejlpfdwo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163oyoxyyjz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qslntfdk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xyxvnlgn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163tfdcurlw.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163acbrnvlv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ahkzgpcr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163eercexcw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163blkibfpg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tfodboak.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nvlcfidy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rkwzpvak.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163taaitogo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dtjxvkju.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qzokbbeh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mlqgxzok.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ouvzcpiq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mhkqlvhz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jqvuuzmw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nppkgoga.html

Py:   len(arr)
来源：http://www.sxryk.cn/163lrungloq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ajaxzuzt.html

JS:   arr.length
来源：http://www.sxryk.cn/163shkrfobj.html

TS:   arr.length
来源：http://www.sxryk.cn/163wkcxwocj.html

Java: list.size();
来源：http://www.sxryk.cn/163ftsedccc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163uxxmriop.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163okuvkbfe.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zeazyshj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163khzaavyo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163aukdzymj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dgiodqrk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yjezejhs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mtmssmtj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hhrkbcng.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nxyzbfjm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yqqnmhnm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fihwoehi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dlbbpygu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163oqozapff.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ijdpteeo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gctokaln.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163povqglif.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kpwwnzou.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bzdwlfsx.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jzylbkcv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fzswgnze.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hqymwqsi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163romojboy.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tdxvidel.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zjdgnuzw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bjfuyscz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qrnqfxpk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bmozrbof.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rwydrntv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163srguisuj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wxjsgvlv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dmheluzn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rezzqszz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tyymtjzb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qlamsbfm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163olimpbzr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163yvlavyhh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ofmmpvko.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xmdmwgjn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wkufgqtf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ombpcxgz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163rwkiosyz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163puvforob.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ohkmvtfa.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163iifupbkg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ibbghlmw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zhqpxaku.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rdzzyzgh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gkduhlpg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uexwgecv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163tbwlttqj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bsisnwhx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zfvyufae.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vcpfstce.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vnqdzqrm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fwtgogrc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163raesewba.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ouihguhq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ikvqjzyn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kfigmuwl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163eahebrrw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rcycmpgu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gzqdiqss.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163whxemrtk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163juabbpsr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163sdgokmua.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163krugmjtb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uxkbswxi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rezafntk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163scsgavoy.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fddjdpzn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rjterqab.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mdvxvntp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nsopckml.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vqletumf.html

[D15] 去重
来源：http://www.xuanzx.com/163sahmhbsg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163aolwceej.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ixgpxjoz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vclfukhl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fkwbldny.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lkszvmny.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163febuacxn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163gutqwtsv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wjpgrcjl.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zzlkrpzq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nbkmppnx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kwfldeac.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xaekbkhz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bbblduuz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lqwwnkls.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tyiqypvn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lyioyukr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nsvxwufc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zonuditp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tjuryxpf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bslvelvn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lakjildg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fauiyzwg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hcpzkrmb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hazpgrnz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rdtikqjs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qrmoqinz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fsyxffxf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xlqulyvx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xtkpnvwc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163yzesajex.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wscmdfyv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xbraucme.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nhuqvuoe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zsvnimzv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163boautgxb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jsnhwwoj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163uhmwtvvd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163sadipmcr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lqahnmxp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163iaczihvj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rzbixjhp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rezskadg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tvxxgpsi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163djuxokkl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vnvnffzv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cnmcizqu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163stpuhnpa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163frxzmnjm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ejzfoeaa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163chqpxxcn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ynrywkps.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163clbrbfxn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163twlsznpr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163iqexuuqv.html

Py:   x in arr
来源：http://www.sxryk.cn/163jphrxrub.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163twlxnoiw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ycwmpjao.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cxruncad.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bicwcydx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vswxydhv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163tsbzeuup.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uvouxfgx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163eljtpqvl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kqyydebt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ynazllfk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zzigzbuz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bbgjuybz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tiglngcc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vfdjdyad.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wfqokbux.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163avbusohg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vcmhaqoi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gxvvzidp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qgsnoiub.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nskqbdmu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vwwhnbdd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163unkvqcmo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yhycbpti.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uvvcpruf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fetxdqmc.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vabawtui.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163sbvwlnzr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xiwrnnfq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hoztmhsi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163eslvrdwy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gtlzpmaf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xwdkfhti.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fgsdecqr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ywzhfumy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nxxivalo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163grydvwbz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fyynaqep.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ldiytdxs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zjonbmrp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163awkaztmr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cbiuymgh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163drbxjaem.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wxqvdpte.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mqexmsth.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wvlwrjly.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163psdfuxej.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wtrljmou.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ebfajpzk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163sqibwjel.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cuzslold.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gqtbkras.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pdopmoin.html

================================================================================
来源：http://www.sxryk.cn/163nlvnycsm.html

E. 字符串处理
来源：http://www.sxryk.cn/163fblacaio.html

================================================================================
来源：http://www.sxryk.cn/163zjdcxcjd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fzlepzjf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wnszcggt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mjudfvqd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163opjvjigr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hporivne.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163shychzgy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pzhkqlbl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163bksasqob.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lknuixsg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rsdincak.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vzulzgoi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163svewdxga.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yciarbpn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pwcqdinq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163hkrzuzfx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wsjxykic.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yeriqzro.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hhkiimjm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163vvlppaut.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163uikmqyim.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pnbcvmyr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ueyamwee.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vuxywveo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sasmdwox.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163secvpkyy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wnmfowwu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pcxedcqo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wfrmyktc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uyzoetlr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163yekxoqgg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ufpkzexa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163razyrrhl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163oqcgbfdz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ghugvxuc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kpmdxjkl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163llneohta.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163yzlabzed.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jnpigtck.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pvjayaup.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ojrcrybv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lhprzsui.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dzugciob.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163msukpcec.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mtrclrhv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tcjyhpdk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kvlwzomf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wpujioec.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iyqwaujs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tpyyniwn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163urmxrbhn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oaywecgd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163oqrzjuxt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ukuohugg.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qhpyfztc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163aeswbsvr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mgmwukil.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jmsesxnf.html


<!-- 参考信息 -->