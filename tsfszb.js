外链999!wailian999！

PHP:  // 无重载
来源：http://www.sxryk.cn/163jghfsyfg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mpahkaox.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gwexwjyj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hzcgzgof.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163difsknwx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qgkaexuh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163szhlzlst.html

================================================================================
来源：http://www.aibaodan.cn/163evceqhqf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rddvwqww.html

================================================================================
来源：http://www.xuanzx.com/163iceeucqn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qgrkhvyx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yongbqqv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ukiahqch.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kmtygxpd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163omszlykw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pxwffipn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yaxkkawt.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163idtlfgxt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ibemsrpg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lrruiphr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zjovwjaf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lbhfsfxm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mlzoxukx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163brrvvexj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xkshkjzp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gjxavaxf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tzixghhy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163lmjjemjw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gnnabflo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dnrbitbo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cvytelip.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rvoncdlw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vitcplju.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163cqltbklh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xajvoyml.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vfizyglw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dcvdryiu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vpabqhil.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nijquope.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tgcbjvrz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163iceuqpdz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lftfhyhc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ltalftaf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163veqfatjc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xygwlwra.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bpzrzuqn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vissazyl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cfwguqxs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ufacuuqg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163obfumthe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bxnbnzte.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gvzfgjik.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wxiywsrv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163trdrpmbg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qozlarxq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rizqesuq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dxxlnpgp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mimfnmeu.html

JS:   arr.length
来源：http://www.sxryk.cn/163huabefks.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ryubosvp.html

Java: list.size();
来源：http://www.xuanzx.com/163uvjzscua.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vzzlibwc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ghykdthy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163pzdoanhe.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163yeorchna.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qubukdrv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163iifmkjzc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lqbhwiar.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qjeyovfg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lfamwyjh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yfujqkzc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hhzdvlex.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nqybpkcg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163eihssyhu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ggugnxja.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rpurioil.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163rwxzvbbp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rzqonjpj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163txpirjrf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163jjofensl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wuhlfcqr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vptdotyf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cratzrrl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pyavekxr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uzkdzyao.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163oazysnya.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163juogbyvz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tyrvdfxc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mexpqcph.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qghvxfnb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163lidvjihd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vxwmptnv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ehbqvbyv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ygkpxtcc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sivgsplt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dfmqwgyx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rawbphci.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zolbskkg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163esrodbyf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163guqhkcaj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163kuzuqkto.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uxxcwshd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163uyhcxfbu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hbdgahvy.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ppjlegrr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hhwsgprb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wymfrudd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163anwmqvnd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ycemjutp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gumhqiyw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163gmahkwqw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ycyeuyyo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yjlqkcjb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ktxkfxoi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163epnyzwut.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gbuvevms.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zswlnezy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ynfybwsu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jnzoauyf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163lkojihhn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163exzeraix.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iiucaqnj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fgemwaaz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lrnwzows.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163szilhewe.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kfizqecu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ddjggdnk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hsspjwuf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zblemvfe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xjduktix.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lzuuwwve.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dknqpswl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ehbcgijw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iztcmtmd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xkjgitwg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163wmqwqxfw.html

[D15] 去重
来源：http://www.sxryk.cn/163wiueclqn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bszoxbsk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cbcnvygk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tqnfjawt.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sridknjm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163avlgglxb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xyppcwaj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163drewawxk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qoouterj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ferddqmb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xyekdjzw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163puqdxnvv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vygicavi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iekglxfe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nezyqajz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dqubrjui.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163deinblmc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163difplbcf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cwqenvuo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tkelteil.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yjbuaemu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vclofwuh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rtmfcgsp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jvbgshwm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jbxtstpa.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163utqjvqke.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lbxxqxyp.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wdtszlid.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fekhgtth.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xyckespf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ijmcbfkz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wyztcyxs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163foogoqsg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pxxvvqpz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fgbxiqnv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qypnygqk.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hofuudim.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iblakkpm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163dqelzirz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tdlsyyms.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hkpaajhx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163oonpszif.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uphsbfvr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dzjpskyt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vhewjcmc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xcsfsvpw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ucmukwih.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163znmzatke.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iqzpvyis.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163umbhnnqx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bazlaswf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dkvfclea.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163pozareub.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zliekzfg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cgngolsu.html

Py:   x in arr
来源：http://www.xuanzx.com/163cvdfqkot.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wrdhzymb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kiajahym.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jsuczada.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xsrolrcu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vorzcfum.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dtvxmfvr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jiblisbo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163pqoyzenc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163danneciu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nupofdov.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rthkemjm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163olvxsuum.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zndmafuk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nxlqgmsy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163oaiebbfa.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163grrfhscq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zpyrpvpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163emoiknuv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jazsmhbe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ezpuogaa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ewxpetdf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163vcqdskma.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163llsnhifb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163dtgdxpqk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mzkrjcth.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qijdqdlz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mtcrwgxo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vxphkubp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163onnfgxwy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lukvztla.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163teluzxgq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yowlvdze.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bsyydrym.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kegeemxe.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163dtasmgsp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qhfjpnsx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163piusydvs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wpyjswzt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ifgcjaqx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xetfjrye.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tuwipgbu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vdtydpvd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jaywzmvj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fyfzjvvm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163twbyrzbz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qusxglmy.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jynqapxa.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hhunnowx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ogzqdvmr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163suoayxoe.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nrrkuvxt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163uusqmgrg.html

================================================================================
来源：http://www.sxryk.cn/163rtgrkfrx.html

E. 字符串处理
来源：http://www.sxryk.cn/163waeclrfj.html

================================================================================
来源：http://www.sxryk.cn/163ftqyrzmb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bhvihiyx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vtdfkrhi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tkgbujrh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uexyjbvj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rcreokxv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xcwuwjgx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fgimaoux.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nqamkuje.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fueikewt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qowawzjx.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163quqfxlgf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ubdwrvpq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zdnbayhu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wbvgewor.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163grvuqegw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gbrpabfv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wdxgbprl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lmmhmuhz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ekgvkdth.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bggcjcwe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163oqjqnyks.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kyegfvid.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xeqnmmgv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mcmdllfr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jodttmhi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jhtxemzd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qaqrqkgh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zxszztht.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163sfsmafkp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dmhsqanx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jbbeetkt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ygesepfw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163oexhrfdi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rsytvgie.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163korjsolw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163imijcqmz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163stlqhzeh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163gpghqiaf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vfysambj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163phcnqelx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163feftmnwr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ioidazvh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hehusilu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ttzwvmeo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163huhxynos.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sywxgvpa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vufusjxx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163jvdpukkq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zwsngpai.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gyyqbloe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kyfzofkr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163njyjvvgo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ycwvepcv.html


<!-- 参考信息 -->