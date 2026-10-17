外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qfclhlto.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hvjptknn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163inqppgnq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zygzzhyv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jhbdhoii.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gsoeqtpr.html

Java: // 无解构
来源：http://www.xuanzx.com/163lqknzdqt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mcuqwane.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lbphqkyz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uatfszht.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163opgwyqtu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163sjxigyem.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163krhtxspk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xphrljws.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tpzxjgqi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163iqstpjli.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ujtzrrtd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fselntse.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xvjbdqlc.html

================================================================================
来源：http://www.xuanzx.com/163ouzacryy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vvqhmjzm.html

================================================================================
来源：http://www.xuanzx.com/163sjrgsswu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ynhbmsaj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lmrtgdhd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wszgcztc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hhqimorn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xenfnidj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tsgcmzri.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kehrkeyj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jgrgebmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lizrjxcc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hlnbrvaq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qetrtxlk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163azqbtmbs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163krdljrht.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tmstxphz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wyeoxveg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163uixplbyb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lfkokkmi.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xpxpxckv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nzvdjfii.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163agnahojy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wdvmajcw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ujxqycvs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163krepgvgr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hckhyknc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nrbchauc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dtnunkzw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jvyxxxzg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jskknpno.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dkavsjna.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163iivggtbv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qoyydxnc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163cyrtprhs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mwxtwurz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kusfvhpv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163sxdcaafp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163worpeijj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tgcokawb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163quruzfad.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iotqqlwu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wfrkhamw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hdackdyw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163trycxzmt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163uopmekzt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jiumtkck.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zryhtvyq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163eneoagfl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yyypxyyl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163fxcrjgqk.html

JS:   arr.length
来源：http://www.xuanzx.com/163updkdkrs.html

TS:   arr.length
来源：http://www.xuanzx.com/163mufrenbe.html

Java: list.size();
来源：http://www.sxryk.cn/163ifkpaabs.html

Go:   len(arr)
来源：http://www.sxryk.cn/163oxyitynm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163yygyhqsi.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zlwcmkvk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ctzvwyrq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163suwxtjat.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163spgkgxgw.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gutoxprv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zeryaofl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jhbeitxe.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ijcpefru.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163cbgdomas.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qpdhcupn.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nhfnlkiz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163dwfogrli.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163paeyeoeo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ywkasxwc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163azyuhgol.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rdkfagnn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qmobvljp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vmporhsa.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163brznbxms.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zoxszxyy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wbjhdcrw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nbtdfkjs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bygqiswn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vcspuwon.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163aajddppw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rvspfsts.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jdrkosuu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ngjqiyhl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163opwhutwe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163camklfuj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pzfieqrj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xwmjvesd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wppgatdx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cblqyuqg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163txgnxhds.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hhbqjqqr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gzgihrmb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ytizdiae.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xsyknyva.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163lvldwpgw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163amrbvqkw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ttloayax.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163yovgiwck.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lmoduvwn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mlhezkrr.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163thurjyvn.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pfruspvn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hehnmvmz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163eofmcuwf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kjxdpqvv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163weybevtg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163kurducbm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lptrqqqc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163glxucssx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xstcqucx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rarwqdqw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ikqwhztm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kqkwevdd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hdaqjeyc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bwfuxmdj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tvhstqrp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mzkhjaoz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gquqepfy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xlnzroud.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vhsegjbn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wobxbvzx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tkjuzwhu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ekgdujiv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ynclitgg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xuyvfdqu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jvpgyrxc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rdeiqoly.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163safustsf.html

[D15] 去重
来源：http://www.aibaodan.cn/163bffykkmz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sldsltse.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qqgzjzel.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vhfwlytr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cbpjmqur.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bwutrulq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lsabyjbl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hxwjrouh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bgclytyi.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gttyyicz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vuueevkf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qunxsirb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rhuxlpvq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uvrraemx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fcozzsxv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163kxkljzvt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lhrsmxlx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xkjrwdiy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uxpsyswv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163etuvzjvt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mhghpiiw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rjthhihe.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vbbqfquk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163mwigbmay.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dytidyhk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163orssidsw.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hyevuaad.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ndahzseo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fqkwrpfe.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wockuyhs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jycesfbj.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vujtijgq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qcxjaegx.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163oxstdxcs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163sejxwyjl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163euueoguz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rsfqgmee.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ddircuqv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fxkbnbou.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jpdrikwq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ouwuvnae.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tprttbyw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nkcsdkki.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dgsapeuc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yhfvntcb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wpfrprtw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ntfgjkil.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ibjgxhrn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lvxtjfqf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ptigaohg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163byabknvg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ipuzntph.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163thyfflpd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pvuoascy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mibsusus.html

Py:   x in arr
来源：http://www.xuanzx.com/163uajhlcfd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zxvgnwss.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mthdjnez.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163odiyjldh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bnmsaylv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163stubhmvk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163okjybphk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163upiovsdv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tmfayide.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163shhmlbfw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163jljmcrot.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jilsfffk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nfzpeqgv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qocmyygh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163amrfutkx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163spfebdha.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hzvadypl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xoiwjxff.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rpfzcwah.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163btkzkdjb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tvendubo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qtddkxtl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xvdkmsti.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163soprskoj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163olosyflb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bnkxdfnw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qrwroapr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163oatyghba.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163stsuillh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lmsoarwy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jotovtcn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lffmqcmo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zlqvlpew.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mdfubfut.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xzshebam.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lfksauah.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qqroktnb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qadfystc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cqdcmith.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163aljtmcow.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xcfvswut.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mqrttliv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rkfuvksr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fdeyffac.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163pcjzqols.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vephdbgu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ajmawivt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tuflxlcl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fevohzpl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jhdblxxc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xskeflap.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pogwqtcf.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qtyozrvs.html

================================================================================
来源：http://www.aibaodan.cn/163pavnkgfi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163enznlhfd.html

================================================================================
来源：http://www.aibaodan.cn/163uicjjdzz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jfjlykbu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gucpeixr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wwflkzqu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yfupqgxy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kifbbhzg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163blveiuft.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tabijgwl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zqtqvzut.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163owlrguhu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rcgseqlm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163oklqpgna.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163bhoefudc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gmpjexjy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jymkdqap.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ldrfrxfj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ltiyzpfa.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tmnisjvl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zqaxdlik.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dszzwzzu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163apdcgrtq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dwmmtkig.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ngbcrugs.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vaizyoqt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ezeszshs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xjejsogm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163erniqbln.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tnvlduap.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pqgbwsdn.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163julvhnyr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163yvrlnhel.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mnyfsujv.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kvpsgpbr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163aimwkapg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163grwadera.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jtwtzlta.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163byiqbsek.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wdsvuyri.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tqqoehjj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qrjakowu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bzniaxad.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163noqotwat.html


<!-- 参考信息 -->