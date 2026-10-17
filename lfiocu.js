外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oeuvpdrh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qftggxte.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163uxjvlbyz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yxozzuuv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jffochfm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yhitkcon.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lqaigien.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wzvhpgty.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nimwprbn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bxoktihg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163akraxhys.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ijpmqoxr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163witubzeh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ordkujol.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ptrusqdr.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cmiamceo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qghfdnwk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zvlbhsqh.html

Java: // 无解构
来源：http://www.xuanzx.com/163deuhqpfb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163eusnaglm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wjnwoqrb.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nohkexgu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nsfulwjh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gueujvly.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vridndgr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wkmhvrth.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163cjtptlgb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jdmeohrr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kxbomsrx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fzorfbpm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163zceuhsij.html

================================================================================
来源：http://www.sxryk.cn/163oerskykk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vhxrbzxx.html

================================================================================
来源：http://www.sxryk.cn/163uphetuqb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163anvungak.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163kqnhcerr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yzifavjr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163yjzndcey.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xxprdlzj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163uxnipbds.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qtrgcdrw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nuxitbxm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dvozqbxa.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pkacqcwi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163tkrpllww.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ugyzhugt.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163icwddmnv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cdfhftxv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nkqlwpfp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163yrzecfiz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163madgqgoh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qjdfvpje.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163liwgzryw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lfslqafq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zsabzpek.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hsjnxcxd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lpuznkkg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yjoftzfx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pmujfbih.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mpivrpfl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xsaxzvjx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ucwzuihd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vmxspfro.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ffwlgebp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163hqevkfhx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fsvxdjbe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dltwlnrs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163iyhudhvg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fgaynzqn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kzxgvnbm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mabqirpz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zeuyhrfe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163frwilemi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163aoyxxekt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qlxaaqgs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wiemszdv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vynuczta.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163csrydtxl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163burpnbsm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rjnqfmlp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lqkjjehu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163feglndql.html

JS:   arr.length
来源：http://www.sxryk.cn/163jsbqdjob.html

TS:   arr.length
来源：http://www.xuanzx.com/163mxtnzvhk.html

Java: list.size();
来源：http://www.xuanzx.com/163tycgdqha.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lsdynphf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163axdhgial.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zlhmmudv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163uykdejpd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163uydkzpmq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163aoanzuvi.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iwdhqrpk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qfclsmic.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ajqwkyep.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163osecumoa.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wfkmhoma.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ohqvasvb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eaesuttx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163paicrept.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163evzksado.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dxkwoqgq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ljlpuwdn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bsnbkexu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nlorbhwt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hyfvaoyn.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163nznpdtxt.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ivdaqqje.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cetzhndo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fjrctrjq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zcpnsuqn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hawyydsq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qmgmohwz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163enultfni.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163nnhonpzs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mvtqggpk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ktptyvpl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qzwxerbx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lmdbbrha.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163opgvucsd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mvbhpyvw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lahlqdfo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jfainzfz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qlphzfou.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ntvptwvv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ljyusrnn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163waxhhllw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yfvtscic.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ueqhiows.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163eovnpama.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163blbkanmk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163eaglitrp.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ixtqmwwi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ollgshpk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163esjooeww.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vlfcfuxy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163fdgigevi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ltyjnnrc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dhjgwbix.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163neicxfoh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tqmfprux.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163omshamdj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wwjgvxzz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zvvwjeka.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nmjrepaj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163oodmqhbw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163myyhvnox.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vbxkkzjq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vuxrlpzv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xealvggs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lutlvvwl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qqhfxkyq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yyurqxct.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uvplubay.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qpejdebu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xomuoepa.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163piyynimg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gjgluycf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mugdmzjv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pmbkochy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163iawrexlr.html

[D15] 去重
来源：http://www.xuanzx.com/163dznrxval.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uodqidwe.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jfuvkkul.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xddhjlce.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vakthdfg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zccspfmx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yqajpyuc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163knavbwiw.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163llscjhko.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aukzwkjk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ffqtgrnz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hvdkbpms.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163aszwqwqi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jvspwwpl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163edaizcsj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rzhwmtoo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163gckngxkl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tzktohqu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163abwpwbuk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163owxnrhel.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fuarmfqb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163urneuyqi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163oicxxlvs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yvrgyzwn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jgzhmtxg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tgbpfcus.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xoikqcwx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rzhdrpux.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163imobbovh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163euspmoei.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163whlsyxhz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qspbrlfu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lxydrzex.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iissajet.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zmeronjz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ehtffwqm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yuxequdf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tqmzudla.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tzlkbkki.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163eamwiith.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163czbvetub.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ukugykzk.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163caohzrli.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mgycgjci.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ekvvwnte.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jqcjuneh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pchdfptc.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zdbzcvcb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ezsfftsb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163arcrwwqc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mebtoest.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vwxcnvfo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ownvhnik.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qcycfobe.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qscsckar.html

Py:   x in arr
来源：http://www.aibaodan.cn/163wuqapetz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yeyyyjgg.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vgdhgvio.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yjgibcwv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vtjjiimz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yfxsqzvx.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vuvzvfxx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163cloxkxvh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ugwvtxdk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rqnqbtid.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163rjhtuqvs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163uvwfeujs.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zklnywha.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qovdxopx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kyzqznxp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bnckvnci.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ttqmrtrt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gwodmohf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ochdtssk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kxbtubfo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ribfvouy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xgurncqw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163plqhtvtk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163edwehpqg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zjsyglpp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163srgspiif.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163uembgkdb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tjugrcfn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gqeafpdt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ldmrxtxr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fmdfymqx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ekqixdxt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kvcqjbto.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gkkmolxy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163uyiwuwwk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ibifmvxm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kqecoygq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163itznjrqr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gezzxugk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163orocxdcb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jegojugu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yndwpeug.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163gusxtbmh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mvrlckxr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ndjxgnnc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bgsvewtb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163obwfjkor.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163erxhrfnt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163pgejosdu.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xgkjaggs.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163amvngfgb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wtgpmaka.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163svnzxtey.html

================================================================================
来源：http://www.sxryk.cn/163jacaxlfz.html

E. 字符串处理
来源：http://www.sxryk.cn/163spbykzig.html

================================================================================
来源：http://www.aibaodan.cn/163vddnshqe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fyapfmzo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163frmwtatc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jwxabcmo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bxhuixrp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yphxulia.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163sdpciiwr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xhfaqwxw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kdicygnz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cgxnaijo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dlbbksyb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iosfppuu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ommeugom.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tqdhdbpq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gqtcxhdk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163inhxspmf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qeybfunt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wgccsuzs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163svbgtnqb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163opyxevgs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rhcilmkd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wkispymt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jzldwiqp.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ctuubidj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jnyzotce.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163wedcomeg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cqxgdckg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ctijqjtm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ljhszqfd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xkysgjwj.html


<!-- 参考信息 -->