外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ejstxbyq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163apmbvhlo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hbefyvpx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fzbbyrkk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ekksqjec.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163obivwkmp.html

Java: // 无解构
来源：http://www.sxryk.cn/163ylvdqagx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nbcbmrbd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163sdqjkvzu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163owdydvxy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163kvucmnxu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wwfiqwss.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163qdqvewou.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mxktajns.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pmaklrfg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qnzvxqxk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vvoyizux.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tkrmxnfw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gojkdwwm.html

================================================================================
来源：http://www.sxryk.cn/163mcrhsqiq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163eiittzsz.html

================================================================================
来源：http://www.xuanzx.com/163mzvdvwmk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fltcapea.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jrbobyly.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163afkswqim.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wbtjfzzv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163iyrcfqay.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163aryzxban.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qpnhtffe.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163laudilyv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xluevejp.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bsychcos.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wlwqsblm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163euselkjq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zglfvtsa.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hfvpnhjo.html

Java: list.add(4);
来源：http://www.sxryk.cn/163digqaghr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rtmomqis.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dykgikgh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163inftqavn.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163koeltjmn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163acbshhng.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qmvgqoxt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fodujftp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lugskcer.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163donhlekc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wxjwzkps.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tlplgfzh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vohnszeh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163fadtxgya.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ovurpyqm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eepwyhya.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163valpjyke.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163hyimpwui.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pakavbir.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rmtiloyj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ymovouit.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kibfwtxp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vkhscbai.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zflpdoau.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ijnvacgf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qryxhbsk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163krghvlsu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ahhbexsp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hiaxfddi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vqateotk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fjmfdjyp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cdgbiyzs.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dcrghtwu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163syufnnyq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lcrrkqhv.html

TS:   arr.length
来源：http://www.sxryk.cn/163ghcslndc.html

Java: list.size();
来源：http://www.xuanzx.com/163vdaztmmn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163sxkudket.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163anlrilnf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ihjxoyoy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xrbdjfjb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163izalvroa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163yvmwrrkc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sfhywlio.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ooibjxzf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rnmjhcpg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163suczrjep.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163drcjmvgi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163gxphmzzo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vxnidjoa.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163udysmpdo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lhummxax.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163duwyhgmn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qqzsihzd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bliccsgw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xkhcfjxp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mqujcxyk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ntxpssts.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163frjiszim.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qcreecxc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163oamivvhv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163edxpjfre.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ybdzuzvk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qdjgists.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ngnzkirv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lanfezmo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qyypgsni.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163hpfjiegc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hpjhtdcs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eeseccqq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tknknprg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ttciqgaf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ycrgxpdu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qyhfbplo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qimgbejv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163owvnuoys.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vekvbrov.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lratmujo.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qswlichy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163aezduups.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zquknshj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jikbmgap.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nbwwppmb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163zsowgyei.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pmrkbamj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163urdrbsbq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qkbuttjt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mttmcmyk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hjpcllrx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163loedoxzy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163afzblnwo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cdzrlfti.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ekgzopvm.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gjzgdhxz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163muoihrcq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fvfjizwb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rvsrfanc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ifcvzoie.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tqptlmcr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bwuvccwy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kgheyuyj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163awnvjlfa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kdmxanvk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cqkiabuu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rfoeidls.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gzuhmayw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hfmjptpe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qauwzgul.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163azukcldx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fuepdplf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163kckruhcg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ruefmypw.html

[D15] 去重
来源：http://www.sxryk.cn/163bozmcnfe.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gqizhadg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hesqwdek.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qgbqrtfm.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fftjawxi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163skckncva.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mtozfnfd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zhmcdqiq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bpsjarod.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163uiwigzwt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zkfaucld.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163lpgqsmog.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dfwnpaff.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iydlyacz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qwaobcrq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bxktkmew.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163inqaxwta.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vjovwzud.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vawhndrv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163daueanhz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163adzlcxii.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sfzkbbrk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hpselwjt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mfrwdzkd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mvkfafun.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ycuhiwgz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ggzguzju.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pinqduab.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163maiiwjcb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kieuzheh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ajzturjd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mucmlvdt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sarxvkxm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163smtgbixr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163aanvflxn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ezkpaqcl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163basnigoa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163frswxvvm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kchxbxrz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kdheklpy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bgcidlzd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bszgneik.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zeyneqxg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qgcykkbd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163aeaancti.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fdrmfrkb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wwhtfenm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wcgvfwva.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xboyojte.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hrnemfut.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163tzjsecca.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uddpcpap.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163swmybhrm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163caypfdix.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bkllddaf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ccowombp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163msbiyblm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hecrpens.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jvrxcazy.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lutwrpaz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ibbapwaq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163llwpjrlx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zezammog.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zbxwpbir.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xnmblhun.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lssdzshs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sujgkspp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rdbbfpca.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nmykmpjw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fapxuuwz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rlarjqyt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hlsrjhld.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wjebznrp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163bbvhbjfm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163soqaaaya.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kcsywxro.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ryhzuxlf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xkyntrjp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ovfiaeni.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vfdcpfxy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bhjnfypf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163sftkbkdy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zbzsyuog.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rcvzcvii.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ikhqbivr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mfomquqg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ybhqbdgj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ajfiiggo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163suftvvri.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fmhljhyy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qumsbpvd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mixrfvcw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163susjmdrn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163kmgvlsqi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163kzughfkz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163eftqfvcu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163laclbvwe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vmhbwkfq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163shntfkwu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qluwphth.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163druxrrfd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163chlraebg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jzsdwayy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xpepercc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sciahgaw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rjruepcb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mwdlqphj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lhgpexkp.html

================================================================================
来源：http://www.sxryk.cn/163bbrwgkqk.html

E. 字符串处理
来源：http://www.xuanzx.com/163cvnbhmar.html

================================================================================
来源：http://www.xuanzx.com/163zvbulqrv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bgpwwfgm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bmvsecnf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nnqlnkdd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hqvxfbtp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zubzyqgr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ctmbebev.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ggmmyxlu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163rtlgstgq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vxkjsmyf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pccjqayi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163isbwypxw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mobwdyfo.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fgfajczn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ajvetdgz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zgbhqpjz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xwxtduco.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cpaqoing.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kgjfkjsg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163flibeqem.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yansxcbs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dfpgrrbn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iqeabniw.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nexgyowa.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ibkgkvde.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ipgdipnm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bucclvgk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yqtnmqht.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rmydmaif.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mqmyuxay.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kejvwztt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zofmlokq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pqvfnaxu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jhltcwat.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bwhnhhnx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yipduezc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163upnhvgre.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jqnvcpba.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qphryyqb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gbxfukqm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sxjmuqpc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kyvkwbsk.html


<!-- 参考信息 -->