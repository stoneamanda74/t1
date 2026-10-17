外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mjaxrbdi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163akbcoear.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163krfzenky.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163paajctuc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kehdlbyw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wkfmlqds.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kzctonph.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ytqeuxem.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163knckayxc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rcnhnlot.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163aeglnqld.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jsgmbvnh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lfiwgqty.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bettuocs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dlbkuanz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oqoantnt.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163beuopnay.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cctrekqp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jubtvevh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bmvntrhf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sxynzdxm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jqrwxmhd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xhxxwhie.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163uxvxidxd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fyxjinzp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gtckacdo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fhtmmkit.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xuymhpqq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kplnethu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lesozyzn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kzfwxxbw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rlztpnzm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kdbsccni.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fhrfewhg.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vtmktgdg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nsosfdpu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163samzmgaj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zjopnjvo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wvqqtfmp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163etbpqgih.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163hpkzlvdg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163notvtlhv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hxvnfepd.html

[D06] 数组长度
来源：http://www.sxryk.cn/163asthkdhj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gzetxqnh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zavprayz.html

JS:   arr.length
来源：http://www.sxryk.cn/163lpreqxfp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yapqmmyr.html

Java: list.size();
来源：http://www.sxryk.cn/163bbwxbpzz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163azwgwtjv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xjccnwja.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zottroef.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jpvdjwkm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kxkevopd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163axnbunfs.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163stwzvnaq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163urnydkzx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lbcckmsz.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fcjvorby.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vajjwsdg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ueznqovq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dnrockjm.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bwhqtiou.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163owiytvxy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zmpfefjs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gvntdvhw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ayxlpacz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wcebogrv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xlkwmarp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zzrlczjn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vsulronu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nffsofmh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yfovmibq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163egdvsbgc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lylcddhk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163plarlqjc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lhwvzzhf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kjqvzcse.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zsbraskb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163plujguwk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xbwmsqky.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163timgkrqb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163atnvaamc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pacyivgw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163stvjchih.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gnoizidh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qunbbfpr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163faqwbleq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vvbksohw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zehyxmzv.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ibosjuri.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tmgsquup.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wvqrxfnu.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163yrwujmdo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163xecxzvnc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mfmbortz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jbzjolfd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163teskjpni.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163yqmbvvds.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163yecjqsoj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gsuhmzbz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ebyuoqqn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xtxrscpu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vrgdlzwg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163onzzdhgm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hsjasoqw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163aoggtfmo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163vtoplugg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163sdnegola.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tuayugly.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fofntlqt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163pfqzmgrs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163owzmwmxg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zspirloq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163oqtzamdo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hbeawuxm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163kojuxpsf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163okeirzuv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sfwejaui.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qyqffgmi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ppgfbxdd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wzmjdiyq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gsjpnprl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dsgryvru.html

[D15] 去重
来源：http://www.aibaodan.cn/163vvxeliyd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gksewrqi.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fjzyijsi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163osvskcxx.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yfmshjrx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163mptgvdnq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vbbwjuve.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hdizfchy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xkjdkhtw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163idbfcood.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163psscesdo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163omawbcre.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163agghkjgx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163idwphlfv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163imqlhtub.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qyxeznfs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163bishyhpg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jxujeeek.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bjmsshyv.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jizxsypj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xpvbtoib.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163paoqcaya.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hcibeotm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ombbzqzc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163upfrivhn.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yzehjqor.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nfmqiizi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lnpnydka.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163asgpyana.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hetcrvpu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zoexjqoq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bgjputsz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nvtdomkl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fexcztro.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qfspgodq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wlaciazf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gtdjwhdz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cfwrmpsk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163npalioze.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rhsoldcf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tgdxjrzp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wnogaxvq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qsvtcdps.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163uqprlsdr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163linqphwj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163loouicab.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163suyuzlcw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kambchgb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jysdckli.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yuravqcm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cwgkmnlb.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fmhpccri.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iokprenl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163smwkgwuj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zotdnren.html

Py:   x in arr
来源：http://www.sxryk.cn/163mivmbeht.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163horarfzn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bekyffrw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mzdxmekt.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ohgyesmd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wdhjhueg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zsyvrzkp.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gdirvkqo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nbowvskp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jlilobzb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163psiehhsj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qwiryntk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kaoptyxb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dwdelbrm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rdjdlihj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lvfcxsjw.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uphylllp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163biftyise.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yizvxbtu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pkasfhqb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sxevxnqe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ktnbiang.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wcnrsohp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ozctheek.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qprjortj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ubglbbid.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163uvvzjill.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xfzjysrk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ubelqjmd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qspbenla.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wbbvfnhc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163yfhwtacd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bmotqwbr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163llaqkpmq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163huaridcj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163oyqbwrmh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163iltdefqn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163iriigfww.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163txjohkww.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dadjoqlj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ludwffbs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tyzhjjmj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rrywfnuq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jaowyuag.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zizrrdzm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163faqpglss.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163luhsbhuq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163apaykcuh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ijhdyxmh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bqjaigvz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bnvtbixx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dwwnfrnj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163djpinuhw.html

================================================================================
来源：http://www.xuanzx.com/163fbbvbtca.html

E. 字符串处理
来源：http://www.xuanzx.com/163adkrvawg.html

================================================================================
来源：http://www.aibaodan.cn/163qpsssftr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jlchaxgj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cvknbqne.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mdurjwcc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jynywmvj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pfttekvb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fpnpmqur.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xekvaxid.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xqisbudh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163exovngqs.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yhkcamzf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jiifitdy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yjhccqtm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dgsllamp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fgfunuqj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wxscfana.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163znjiizqr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163fdqtffht.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tqocchfm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xyiyicvm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lyzcytvd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163obblutrl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163dyybnnie.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qimxkwva.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163korvlzoe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xckwosqw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jdgxnlvf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163txjfdbeq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ehquqopx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dnqtfkix.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ssjvgbst.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zpkwfbmu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tdlaflhc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jdptszxq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jajutdgh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163azhgucfo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dscdvkib.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163spwenyqw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163sxvgwqka.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163otofnrvr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oqhysyoe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jrzsinwz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ddddiprr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163wsaoclor.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xgdtrwvv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ppywnvaj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mgwknvpf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163klbjbhie.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163exbmyzrn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163akoojflg.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ehupfsll.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163muqcnuey.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163genszwfw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vhuauuke.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qwgsdwva.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ynvszkue.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163yeupwuzo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hixfxuxs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kptivikn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uvfqkmwu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dhywnzeb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fzbasvnw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lupaxrns.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163twfoyocg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bzisnfvb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zskzplca.html


<!-- 参考信息 -->