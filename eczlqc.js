外链999!wailian999！

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163djqnmjpp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gmfyuzfy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pyxeqhsb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kncswqok.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vyqsgfgy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bsuituha.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bxiqgaut.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rtmslqth.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mtjlgads.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163pzgouoya.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xisbsmak.html

================================================================================
来源：http://www.sxryk.cn/163cmbrubgl.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tnzedlfh.html

================================================================================
来源：http://www.xuanzx.com/163jtmmtzxc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lmddqhtw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bjotffxx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163icnoujjd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hxuoslbj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rafoizex.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163domflnrs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tflmzypu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vsoikbmu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163iklmsxpk.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163sizmnjdj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pdbwerwb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jcrqzhbu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ksohvuhc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wzmvfbhl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163shodctgk.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qfywiukr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163plrexaqt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ihtuyhxm.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kpltmlvh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qbhehton.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rydersrr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zeuitltf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rtlnremr.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ermfrgwn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rrsqpoxi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163gloklkfa.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lemelhoy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lbbdgmrm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jiufkaat.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bcyqprqg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lnlokehx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163whlipnwx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163sfnwojwm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xfetmgje.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vogbgshf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wxxxssvs.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qhyoipzf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ixqqnfvr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nyinycfg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rprsmfxi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bdkqpzvl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163epdzxgcz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dsteiyab.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jmvpgkve.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ywnqzxcf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hesxmohz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sesjccbt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163atzdaezf.html

JS:   arr.length
来源：http://www.xuanzx.com/163rfxfypfx.html

TS:   arr.length
来源：http://www.xuanzx.com/163vasqdwuk.html

Java: list.size();
来源：http://www.sxryk.cn/163lcqasfvl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163eeqmaoci.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163wqdjseey.html

C#:   list.Count;
来源：http://www.xuanzx.com/163shazsblm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163eaiwxnbv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vbtbvpun.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bnenhukz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tlbpvvcs.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oejkdwvy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cjejaurx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mpkamyqx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163exjgfvih.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zzgwxivw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163cncctuwu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lucukjio.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mpvoarjj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ulgepqhx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bhxplirn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pagnulae.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fzeiqvrj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bgicvlmx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163comcmzic.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ogxnwapr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ygcckqmw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lzloivxs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kzeyevfa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163iktcfdop.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kzkdglpd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zwmtagwb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fumtfrhw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qstlumdk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wazblrqq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xvcypjvj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163aihnvgku.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zffzobdv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xeympxzz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ydfwglsk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lzfbehgw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wyqtcodw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mznqkise.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zggidnqu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jgnrbobs.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gufcmema.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cffelijd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zknvzvms.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vjmpqgmu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qahnpqei.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163zcsburff.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xtdjbgzo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163yfrahjre.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163funddnqs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wacvdfyc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cesrfeix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nmcxmhqe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wpwdjcjl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lvugpwls.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163txamnopk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ixjgmwwv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163jfcxajru.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ieeuqjmu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jhenqtbn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ngbomctz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tbtwzlwr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163enumxkwe.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ftqstshv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jdhxxpvo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pyumkndg.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163reiulwpo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xhxgwgpa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163abqtnrop.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nqngzwfx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ryffsjrv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163omxxdzfy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163adguebzx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163holkkzlg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bfrhjmxr.html

[D15] 去重
来源：http://www.xuanzx.com/163dlkhthth.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lzmhflje.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mzjzaxwt.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pfoxttwx.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163idepawny.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xbdiufhh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qsprjxzx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ewbgoqyn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qykpfetr.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163iranhsds.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uibocitc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bsguipfn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yutxigbq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tpclgcma.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163sxijojgj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jltkargx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tlclgdwq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bgxcazhi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163liypltnm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163shrweoti.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mfbvgahw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wtylicxm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163crnftjem.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zsltgkxe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rjnujqyx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ebktnogi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rqwmhtya.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dxiwkeph.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163trzfbuah.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lhdbngxo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mhozqbgz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wbgnynsu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vknpsnyz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163khekcbpi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163onefehzl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vfefshtl.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pzqigrwb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163scdyzump.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163phdxrufo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rwusmooz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cbgupijj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163colhctno.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cymhsjyf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163tlryqkti.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163htarofef.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mbjvwqmr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163waifcfjf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163umifiesn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yvbnoyfq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iwczaaav.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163hqvsobfl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xfhfcawy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ixalsoog.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163eugxkoui.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yglbmunq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jffwquth.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163burvaywr.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163nyedmdfe.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163aoqmbmgt.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wmlvkevt.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ksfisxgo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gffoggxe.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xodbcjxy.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163stblfamy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163floourke.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cycedrei.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163narcvjku.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hbwcklyi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hpayrvid.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fhmazdzn.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163odthzgvb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hvnwjumq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jaoaocoh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gmwnkush.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163doebvqko.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ykodetpk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163orweasfr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ywoigyks.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dbkaterh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rjvelrno.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gredhjab.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lqlyodol.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163embhkpsk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163womxitig.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kmywpfsn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gyjnrsvn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pzvntsho.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gcpxtqjl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kuaglauz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163tidygdkp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163euyftmkg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zetqfrel.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mwwcwfmg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jwvklyxj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mwlawwhr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eyorlter.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163upkrbsif.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163flfurdoe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vwxvmpwz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ivtjygfu.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qvgzgond.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fpdujkfi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vuitxdms.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mlhszcpr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xlsbxlkd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gdvpkcho.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zxsanooe.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163kcdwnczi.html

================================================================================
来源：http://www.sxryk.cn/163yemidwtj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qcncyofn.html

================================================================================
来源：http://www.sxryk.cn/163mcrdtvdh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ekygowbu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163myeqxloq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163uysufuar.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163edfifjwl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ogbvwbzu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xtjonlpf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jrxiqzjo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163btaxielg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xniaqnaj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163tnmpgors.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rdlxygma.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163avvreqrp.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ckkuogrw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fgwlgljr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mswstwwg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jjxjoaaz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qpkocdmt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163enavtjfe.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rsapbbxj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ngbbkrfh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163noyfrsyk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hibrjrue.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fyicufkh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163isljmikp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163opqyhoxi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jcgvsprv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qsiuhsui.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gkjbelwq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163uzxhkase.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pojehsog.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zyyiteey.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163okvcfvwe.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mrqfhgol.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fdabcvij.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tsxxmius.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163bqnylhko.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163diquadol.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163eztraibt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163whzywplh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gfyqhlsd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163arbryjob.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163imleoiyq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rtqitmer.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pxaycwba.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rzbghlnm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ydmtbpsx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zishesfc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zmsxrtei.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hylkoawe.html


<!-- 参考信息 -->