外链999!wailian999！

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163azfmhbgy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qkqvuzam.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uvxdgkup.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163cqyybanu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163uvpqsonx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hxibzbic.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163czfgvpbq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163quedtagf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ltrpskea.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yqowxmqq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163woovbjfv.html

================================================================================
来源：http://www.aibaodan.cn/163mwltfvhe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163nqyckyax.html

================================================================================
来源：http://www.sxryk.cn/163heatvevj.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163joyyuldn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pavvftmy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tgrzbdlv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rxnwksre.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ocvagehz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163esdlyuzp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vlvuuzhh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163onzqrjuv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ivygjchl.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163chzmfkkd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cvcxfqyj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wsmbfowb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163onjtflua.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163becagkjq.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xamovcvn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rnjmssxo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gcpqcsrp.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163outtcatq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ixbkpapf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163selltajg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kaeflaix.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163eukjklvw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hjkvubdv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tuzwtfbl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163opiynzhq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dwjwlxtx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gfrrkwdz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163sdnkmghy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163yunimwdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163aynclipc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163seofpatd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163atyodwwu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mtslkesp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zypuwhfv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lttnwnlp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zekfsgou.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163acwpvjqm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fwjrasye.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163skshlgky.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wwxuvamr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rfkqofzj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163pynraqqo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dxdtjhid.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vrpfaivj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gzrwqrgm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pwpkjwzs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dwzfiwvr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163opvfmzup.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xsrnpytj.html

TS:   arr.length
来源：http://www.sxryk.cn/163ragmfmcm.html

Java: list.size();
来源：http://www.sxryk.cn/163gcaojsia.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163leiuetmp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aoxiroct.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pzpnrtjz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nrgzkrxu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dineedji.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ambtzqmw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rtejwnea.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wmimypnm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zmxdlesj.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xzfsvqgj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hgyvtmyt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cdxjfgfw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dpltznnr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tvjorham.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163bwbgrorw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vtnxtofs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mcjksbhl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ufozxcde.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bfwxkbax.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163txcjhldy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fgflhohu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vmoxhvjk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ivilbebp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cpbwuorz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163whhlscug.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zvpbeejo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163oipyhbav.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nrirkrkr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iazeginy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163sqrdjyxh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rbppddql.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vbhpdzpz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tqyftqhq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mazqjecd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kfbnjtwj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zdaqcuxv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163cmsflhkw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kqfzvlju.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iolqdnha.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163walzzeik.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ayhdokpz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rmbfpqnr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rodtrdvx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163srvnxrww.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tmvymuyo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ropzcszn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jzoddnwm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163buotxyku.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ltfeepbg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rqeptooc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163gdlsepoo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qiwtprfx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yjselfte.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qwwspcxx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163otmimjse.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163sibftalv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xkdxswzf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rqbjfmtu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nedaltug.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rzrvllhk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fwazimgp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pgjcuobs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fadvyere.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wvrzirnw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dmleaorh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bpvxhrlw.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wcnujzyq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ssopsglk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vlixbypn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163znduomyj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkyczqxu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xbpirtda.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fwjhwnfm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163syuqsjxp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163sdxcgojb.html

[D15] 去重
来源：http://www.aibaodan.cn/163mdlqrtya.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ttoeomps.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tkmcbqic.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wkernvud.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tkvhrrpg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163asdhtlqe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kafvqrnm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pqybxxge.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nwzpqlmz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163txycplxo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pwomjwpc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yyyszhwz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dqijlvqb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uphpldtf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ohuhtftj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tqgbbrgn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163bcangnll.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ldvoakhg.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wcudprgl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gbfbbxjz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163awagguka.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tmgjxzae.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gbwoaqvh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mmezzxgw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wsfdnzck.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rnzsiwdt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vjwimifq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jmxufdzz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vswzgusq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lgbgfexe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rzuukocu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ndubxgik.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163haiveywz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vwnqounj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jostbkkg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nympyewf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ilfsbaqv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nwymgppy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bvdrbwlt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xowcprev.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lzmesxwh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163llihtcvv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ylfzdfxt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hodlgnhu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163eomschjd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vehubsii.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mbhwokhl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vrgjxghm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rlcwodnc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gsuugrjg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mhqqjlgm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hfxzbpeq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163pgvwqeiw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163guwkvksq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lpyadngw.html

Py:   x in arr
来源：http://www.sxryk.cn/163uawmhfbe.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xwommrvm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163takniavi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nlerucbw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gglpwafh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jhwrivft.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sgvveozy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qetgunus.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mjsmhlhm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ehbtlfnw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mydvubvb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163hocktszr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kxymkdqv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qevnotge.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yvckizcm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163iqvejwhr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pqhmyfuc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vlfqdqsp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mxehtbbp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rppwwwlp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tatvmdrw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163htbzcfgr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xxytebkr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jmkcxzwg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bbxrgglj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fhrihoza.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ihhibtvf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bcfegtvk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cydmssjz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ajfxyvwp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sgrjwyze.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jvkhgeva.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tlvezcaz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163qrwtiltw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163namgvjso.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tloqdtla.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vgwzqeau.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163utwzkszq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cuvsdiex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cqphkhia.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zljwjopc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163burfexjd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lmhjbhkv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dasyqsoq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kkdiltor.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pxsslqub.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163omznkiub.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163laoszurf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qhcdpjya.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lcvtqjrm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mfygwoph.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gixvwkst.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nfkcscnf.html

================================================================================
来源：http://www.aibaodan.cn/163fioddddg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zwbucalf.html

================================================================================
来源：http://www.xuanzx.com/163vrlduekr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163znlouozw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kdlrrotj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mljngcft.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hwghhgyo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kfjiivkm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163uhdrfhgu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hxjkrljq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163klhxpkov.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163iyfwaywa.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xndhyfdy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vxhjcpog.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163sgcwikis.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cnwykkmm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ngwcflxn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fbwcmrag.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wxzrrfxa.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bmsizniv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hzqfxgab.html

[E03] 截取子串
来源：http://www.sxryk.cn/163upbhprto.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lnlxmvzb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163myglvczw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163twwbrxlv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qzpkeodd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jvschxby.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cejytvpi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tjcnndul.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jsigkoah.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163abbzqpup.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163liqxpate.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163oqlgkyfr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fzimypuo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qmnxglhs.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163wvsgepsv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pvszqnaq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dszjgold.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qwtzdxwa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hwxqsllk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fuoczrqn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lpludkuj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163peohdosp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163suqssref.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163phucjkpe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wwglohik.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163lyacovkl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ppsuweeb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bcrawkqb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163adlzrygh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tqtncxib.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xwftvxyk.html


<!-- 参考信息 -->