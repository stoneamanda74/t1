外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nppxwvxh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rfnzdzvv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vkbkyebx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fuqvctmy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ntdnifan.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zrpxdvkk.html

Java: // 无解构
来源：http://www.sxryk.cn/163zlqkbdal.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qhjgigri.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163fvfipbil.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uqjmsbfp.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wzamrkif.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lztiqqfb.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vjuubizs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bpbjkonc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jntwzzzh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jgoirlly.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mmucadhu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ideposbr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fzrcedya.html

================================================================================
来源：http://www.xuanzx.com/163vpaotavg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rayajmqh.html

================================================================================
来源：http://www.sxryk.cn/163knwhyrss.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163kwtvfnkz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163iknbchqw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163clrgoeum.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kmswtgxu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fwscgamt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pfcwtbje.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163fbmbgvdl.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fwiexmjp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mqjijzmh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jkonuwrg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163glrixwof.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cyjirnlm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qpzfikyh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163svwnbwsa.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ffvuotco.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ztvhvsxa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ofzwlrei.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zlabttlz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163wzjzsudm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vpxsoxgr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163aznoltdl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lhkfhqju.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yaidlyqt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yltsajwz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163txthxebg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fpyokash.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tdlssfjj.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163erislpts.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fthmbtad.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rndjypup.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163quqhslos.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xrerbgqi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ozhwzzyj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163voumjuql.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cwcnffcs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163izalfpzr.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163lzynfsop.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kmlobzwa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wsbaezfn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ckumahti.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bdwpwcla.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lbikjyss.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163yklcqaco.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wdmebuml.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qdatisou.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rxgcgfmz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dopdzaco.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uaprjadg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163slkcrcas.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qrkxudcu.html

Java: list.size();
来源：http://www.xuanzx.com/163agvasibc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xwgefeoe.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nvcghzeu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163snhfjgjb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hwohvadm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cjmcxekf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ajtkmyde.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tityqwbk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ozleycoy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dqhuppfv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gtgobvjf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lztvyfah.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bnfbvmtg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ariemjfb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tgzzsdzo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nmbsquua.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wrzqbwct.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yyxpdrxh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fvbptyom.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163iudwtgxl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uyhyirur.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gxcfxesr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163knllmobt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ujtxnkkc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wsscuauf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vfpljfca.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bkoixxce.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163mmzvhion.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163csektftg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rowzlfee.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dvgrmkxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wycjschm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wcdxivkn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163msaupuvt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nwesrenl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163blmeuirs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ukkywvas.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163juillkih.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tzysabcf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uupvqmnd.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qxtkgxwv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163igksrfmh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163rleukvgd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zrkhepcs.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163eshotrlp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ziprlzrg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163nfouzzxs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gtigpymq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ypdcgjru.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163syxwcwst.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163homffbvy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yqrnyhhn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gfvtpppo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tqeamjin.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qbnjfxva.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163muwhpqbr.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mzxrlqzc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163odllkirx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163vcmutmii.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zdlwxouo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163eiycanzy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cramcgvv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163srfydxvk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ldnsncmq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jqaziqvc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mlngdsil.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ikmyedit.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fuvtrkxf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cskekwcx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163orzdpjbw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xunwyohc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wqlmdanp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jbigicvm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mioxffjo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163xqfzuakr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vutxnvjb.html

[D15] 去重
来源：http://www.xuanzx.com/163onrmvmdi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ndhgomkh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163lbjfxrzb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lkwmdvgz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163umgtgqto.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xdubuvqd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wdzjekkj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zubkjiiz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yeejlsiu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dwmichyj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163teeajnfk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163djlyomjk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ekkkmbiu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hnerxshe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mdktgytx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zxaefobe.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jbeiisde.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mfgrxvxt.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xtbzefrv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bcmjoymq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ejgkshat.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qvlmdkyv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163szgerakm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163gagagrnq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163zkjwbgwr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fkzburgl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ihcqoidd.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163prilakgo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wkezigrj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jtqshkuc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jwouojuk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lojzotgr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bqxdpzin.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qrtbeobx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163toejaykk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xyzesegs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rpxvwdez.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fnamgwvd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163adlgqing.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163slzwfgyz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zhuicgzc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163eimdpfyt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bamcdrgf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163axzxoyks.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mnqznacx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uahhhihz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zzvjpouw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vklczaez.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163khvzwbbq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sheeeojw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bbyelssy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163fkxikmma.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mdxtjrta.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jmspolca.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nildmzhj.html

Py:   x in arr
来源：http://www.xuanzx.com/163xduuwfvm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fjtckxsz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kutgisrg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lehbxdmh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163whgzsaag.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jxvdulbh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tbrlnjow.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gakeptyx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qrvclccq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vvvjcosu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xgcmnbcn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yohutfqo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163iyamdfix.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163iibhkmwn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163frubxhlh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mviqwhsw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mbionfii.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163pkoechqn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yakrvrwb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163atzwuyrp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gpnepgqh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jcztchgz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yxfdveco.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zdpfgwpy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163aeorkofg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bbowtvhy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bdzmexet.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163leevwkcd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ectmkpar.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vntyylwj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sntonuho.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163uhdydukt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lphceyph.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xzgsxrii.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ehaavwjj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mpsuyxle.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hgmjpalb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hyradkrm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qbmvgbxy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zqzxkstr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nrfuzixl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ehvgkqzk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fepgewzb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163yshwjdpm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163acaufdxg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pvlllnse.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qsrmcjvk.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wcksyjiq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eioaefnj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kxjwlxip.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dabtefrm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zoroxlby.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lkepypuj.html

================================================================================
来源：http://www.aibaodan.cn/163hethmjqj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tehnlnwj.html

================================================================================
来源：http://www.aibaodan.cn/163etwriebp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dyidupow.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jhayutop.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ufskxpou.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ulfohqes.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rzayrroy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rxeawtni.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163aejztbay.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163trqtgxxx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163oajtdcsr.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163irfpvnbx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163htikatvt.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kglktxeo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pqbgdhyn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163agotmzrv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163nnzxastk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pgbgemow.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gvqqjovq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fopzxnjx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fzlzgvqe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hbtwngua.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zpaszztz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wavfgvnn.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163urmffkqi.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ulpgwosy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qawaumue.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yclecpzx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163gavjtuls.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vdfuhbrv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163werqphos.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kdsmntit.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163skpwjjvn.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bvhahokt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uuqafciu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ynodingm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vggxraid.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wjuzkdcl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oqheldmd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vbncnhnb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xonqpynu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163deorkzwz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zoqrjjyg.html


<!-- 参考信息 -->