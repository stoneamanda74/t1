外链999!wailian999！

Ruby: a, b = pair
来源：http://www.sxryk.cn/163iuhjqkbn.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163engidejd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pjqktoyg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163actrfevw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rpaosxbb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xxghbhhl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kpypyeuc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163edqhllnd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tmbborxu.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vaugmjmw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ywficwoz.html

================================================================================
来源：http://www.aibaodan.cn/163opaqhhkg.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rdnqqvdh.html

================================================================================
来源：http://www.sxryk.cn/163ykigduom.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mxrasgeh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wgebvkqf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nijgpzav.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rghlwvhj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fnikzkxu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gdplgagi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cunxbbbo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gxpbljqy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fkhkcpdf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gwrenirb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cthcqvip.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tvsnqerb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163cbjwvsqd.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163eopbnwhw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hwwsjxsi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hlgimwwd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gaxspgml.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163aqhqkitr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wfoaisbr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163blvutjlc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rofkibfb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jsgslpgm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jnjojbwt.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163egpwuvgl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lggghpai.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jfgkzyal.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tyjmbdpc.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ficvdhbu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163uiqectwg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kxydjqjj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mbrkdcbn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ovyuyyyg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nhgbneiz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ouoqwnda.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163uxteviqj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qfyjrwwt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163obrcufzp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cpsmxcxs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dhwspleg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163raxajakb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163semnhdlw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tfkwkhay.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qvlyyrcz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rcayhjnl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163prgxfkpb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vqjgaruv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163drsrjnoh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dnoduxhj.html

JS:   arr.length
来源：http://www.xuanzx.com/163oxgpnure.html

TS:   arr.length
来源：http://www.sxryk.cn/163nnpkaeyk.html

Java: list.size();
来源：http://www.sxryk.cn/163escxpbke.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cnavudbg.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rsbfwref.html

C#:   list.Count;
来源：http://www.sxryk.cn/163brsolagw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cltwrufs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jejdrewp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ezqawxwc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ujokeeqt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163adgmemqg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nlsrhgmt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163czakhtom.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sshavyuw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bbdmhsno.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hwjtminb.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163aimrcinl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pmbgxsrd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163amkfxqad.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pjhzcgpg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ctbqlqoc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163tzikwycu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bvevrxfa.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fqwyebur.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jlsdrsjr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uekyqaev.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163btwqdkiy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wmerufts.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hbcsboac.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163hsgdlpxk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bsgcmczu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wfggwzzb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163meatmkik.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zyfrossb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jyvxplyy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163abyxudwc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163guswigbo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163edyaxhwz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dhcrqlte.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ywodfjji.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fojswgqn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163grgylpyi.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jirvalep.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fnawscbg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163repqgxrk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hymsyyky.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163raerxrne.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tcragydz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163rhsxehbg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jlyvoxyv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kigvftqi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163omyjvukh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163cwwreznu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xkgegvxd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mqyakmrp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zeyledtc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163akgtlydj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163mufgcwze.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bnyrvzsn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mkmebtwc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sinyalrb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163yrzjgyak.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dxfzgqnu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yuwfikxj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xvpjibbb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zckqqfks.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yvkxguwb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rtydoyaj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ncycwnyx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163twkkybuc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mlaxoaqz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vyvbtlif.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163phizggfo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sogsrmvl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mrfykvxc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163msmifanb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163dmxepyqj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kqheeqgm.html

[D15] 去重
来源：http://www.aibaodan.cn/163ymledclu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wimzkstg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vbvzayne.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163sameeqcv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tfzlyupz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jvzlymjq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ewpiuazo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wgbjvmmf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kqpwaizb.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jseikelu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vnprguje.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nabxtegj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hzjpvehs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tbotfsyt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bwlwfmrt.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iqkmlpse.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163plgbikkc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163odoktpvz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ujerbors.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kxbfwawm.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ksmwkicv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163klyegfpr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ciyjibtl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163boynwrxx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ncgbnfsm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163esixtzfz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kizooceq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rwtjiaox.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ibehakfg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vpyjjtxu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163icokornu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163pxiduvyt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163etrjhara.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163anabbypx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ersbnwqq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163owjfarpu.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ktcrvzqo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163krhajwjg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fyibtqls.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163oftnubkc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gzoxibnh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eupumxgt.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bxzsgjwr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mjkhequd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wpnqywez.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vmnuolzb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jwkvvklw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ekuynzqy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gprxsgyy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lxijyzmw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vlmfolrf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163glwjraun.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ggghvsnt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gkxyitbg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hbahuldq.html

Py:   x in arr
来源：http://www.xuanzx.com/163qjwhllbn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wookyslw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zeidepdq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163axaywicl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ypxczwyy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163onzhulwn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gsltxojj.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163unmotump.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163eoijahsd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ufumkzyi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qbdxfpcb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xwozmyyz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kkzklscu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yixtlloo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tuyopdxu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fwzpldcx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hrgbxsne.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ujqncqct.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163oyzqoemm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163iqfajyaw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jfbyfvra.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lkbfqlej.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zxpwefuu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wexfetsn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163chaiizhp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163aemoibcd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ppxbwsvk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jgqaldgu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163uvhmmkyu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nsjmvmeq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iprnyhgv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jvwoljiv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hnsuoqbr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uopsmsfa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163slwqboqq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ubnfzlpc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mjtuvjun.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dpgxdurz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kdhhuslz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ossynaml.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fowgfpip.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nfkrpgee.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wgjgooue.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qmbsbggy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163owepqeua.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pbouxzrb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rcohpjow.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fziktnsg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163pppguzoe.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mbvsmbtt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ddjyjues.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163axrpzjhw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ehvlmnqc.html

================================================================================
来源：http://www.xuanzx.com/163qxmcuhjr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ogbpwtyb.html

================================================================================
来源：http://www.sxryk.cn/163khyjzdqz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163elwhebgg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163esxlhskv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hmvaixov.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163urnygyci.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dgwtihgv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163wekjljgy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lhgyerwq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ubuqbana.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lccwfnlu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sazmjpyk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qyxajmor.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163abwzkleq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163beysvlya.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163clpsyvqw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ndjyqfji.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ynnrnomz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xhscgatw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dtgkyqpf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kymhaoeh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zmgxncel.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rnzjkvyn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hncukuaj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wckgcbxm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jjutabdl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ipxrqstj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ujtrywwn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163framhqvz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qhwyttnu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163pdrbglkb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ayifyykc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tpqwgrdc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zoazwlue.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163iejkqrvj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163foqjllul.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pixsqxyg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pnqmmrxa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wsryevdi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163usimptvl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163eirdwsyz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xuvfcorg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163gmfmmdpa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dbmonpdl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163isnwrqry.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163waaxslls.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pokkzuvp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mmindmes.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163uuhtdjvx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ijbjhfrv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xwczwkdj.html


<!-- 参考信息 -->