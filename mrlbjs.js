外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rzvxuewr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zpywlgea.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163azfcjrkg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fnfmzkxt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bnipufnd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163imvivhyg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163yfladbfp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163prknjzgt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jmlhtdva.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nhfpkuml.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wfagdnup.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163zocoxjcz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jvvphcfk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163srqymvlj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fkqubntk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bwytfadn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163iiielwdf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163riysnrxa.html

Java: // 无解构
来源：http://www.xuanzx.com/163tmhtspuj.html

Go:   // 无解构
来源：http://www.sxryk.cn/163akbdnjhw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zhqfcygv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uikfejhh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lqlgcqxy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tbrcewqf.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bcwynfir.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163thbuzvkt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kavreulo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hptyhzys.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kbwnewlm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vfsuvddf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rjldqkud.html

================================================================================
来源：http://www.aibaodan.cn/163hcyzfiol.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163aaasompi.html

================================================================================
来源：http://www.aibaodan.cn/163szmziezo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qeapfjgs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163iljvyfky.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163njdsehej.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ddwtatgh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163acadpnul.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rawtsgyx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yxnbalzt.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vnndoibo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rplewjyk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163juwjumtn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163kroibkcn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zjzgddja.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163myeyhkrs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tfprudhc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163irhzptdz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163avwmrtjm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163cjolosfk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163oihbwbda.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163brlsnrys.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rhhpmywc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xhbsrtne.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tbqyukgk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mxspidtw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jdlgobyq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mpyjwqvx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163eufhwegg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pygokkvl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bbmhqxtc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163lfchxpew.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163umlnxvbt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jhwqcohb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ymewzxkm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cdmhqebm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xpddemwr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vavhdtno.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ljqlxpvs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kbhultom.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xwkoahnq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vbkyaaab.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163gerllnal.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163iowknrxv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xmnqbeqh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dvcxlpji.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pewhifel.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lmiupvie.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sowpuyjx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hiwzzlfd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qiczkllb.html

JS:   arr.length
来源：http://www.xuanzx.com/163qsefeizr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ylosokol.html

Java: list.size();
来源：http://www.aibaodan.cn/163irbfnjfn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xhlzvgfl.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xcnybjbr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mesqgirg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nenrwbzh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jfloagzd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163xtriqnph.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rabrquex.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wuqfyscq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163soopdwvr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fguyyidu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tnviyiqo.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lfwqvsuo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nktqusdv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hddagupy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fwobxcaj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hvcqwjih.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163phnohvex.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ijevbabs.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ytctkqyg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163enzuydqf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nnzqbvsr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pazisrpj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ljspkjhm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wtdyytdi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163tiolluqh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fcfbatrc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163byjnbrfk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yibrljff.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ppkelgru.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ayjuusdo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qxfgtmlu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vcxynize.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lmoqqgyc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yzacncsw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jvxdeopn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cbjdlgnt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ygxnjojq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dfqyoxjr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163byhcjcct.html

[D11] 反转数组
来源：http://www.xuanzx.com/163baiugakl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vjbjttxg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163aqgsiyuf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cyuxpnrp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kvdefvzf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jcxdkaxp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cgjdeynl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bujeslqp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163getoqmid.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gngesxmg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nopoovfs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163aretoejw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vsdwijad.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zeadkjxa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163yycvpsnz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sbdkrpsc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163pnfvvrfm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163aoixlost.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163crkdrxtx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ajcdnwdr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163atqolzjo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uozsmqec.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163apwghhvd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dvyqvcqh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163grmazacg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ctnutnxp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163lpkdjboz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gkqbmmwl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yxrfdksd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163aubgpyuc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163atognirm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wjchljhw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gbqjrwxn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vrixemee.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hxevqqay.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163amrqsvnc.html

[D15] 去重
来源：http://www.aibaodan.cn/163zrdglnnp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ttdxskfz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jmtiyocz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ijcbessb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wrhihshi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ohqflpdu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sicoaunc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pdolvtch.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163yxuymega.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rqnyegcj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nxodwvaq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dhglcdff.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ctawlkiy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lzqlfubw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sovmkbgw.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xmeutbps.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jxkrpvhl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163gipmtrtp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yaxwhlvm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163csapfqov.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vxtyxmfq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xemoqbkv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163anbxyxny.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163thqoyawd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gfbtzrhx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163iomuiley.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jpyfdkdn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jvtoxuxo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qdgpfkve.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dfqjkntm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ktxlunya.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jowcqaoq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yvprwuwy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163kkfcqikx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jcwncsow.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163yydbiieq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163krxvgpul.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163icodxyef.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163piaujpeb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163eytifeuk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qzeebmpv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ylypuisu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vnidffov.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ofvxsddn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163inzhdimq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ubnrnnow.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sjtlyaxi.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163djdxhope.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yqxtraej.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qjzzwjjt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uqvmiovn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kivpcbtc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zxhgbbjk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163slnafecc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uacxhfop.html

Py:   x in arr
来源：http://www.xuanzx.com/163eyxcxgjd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xwfocvcw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hunmnido.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163azagsgxv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wakdftnz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bjzcxpqj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rnlcxuxt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gfjugqnm.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163narfojfo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ugtxxjqo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ovobdjbd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163obtqzttm.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zpxlepkr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xyfvgqtg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vfoebkdc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xtivcvzl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jdtefqgm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163oqshosro.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tfecjffl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uapxhdtw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hxsbtuim.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nkewtwrw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tghyspaz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nuqcwcwh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163yhzsbnrn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uyhqlgiy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vnjzfrda.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163uywvjvtz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rbvuelxb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ciiyazbh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lfrymzpa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163yhrmjsss.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163eerbplzy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163qlqeieyo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163uovivice.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163udspfnqy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ylzmzemf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ffwmkjue.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163shlxzdxu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tnknkfya.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163simealqa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163sxadotzh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163lqkrsboq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163dmmlakmn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dbxddrhb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jriwkqxx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cvwsipih.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cabqzsvq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gkqvvhai.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rxlzhzls.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163eoqabznz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lqoesayh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rofclwfj.html

================================================================================
来源：http://www.xuanzx.com/163pychpdbo.html

E. 字符串处理
来源：http://www.xuanzx.com/163tbfcuccz.html

================================================================================
来源：http://www.sxryk.cn/163nqgmvwoe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jveulwti.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xkutvsni.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163thdqqzlw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163agljmfku.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iqriozdc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jcihanui.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163uiarvzog.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yarfxrup.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xpnptbjh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xxyvqhff.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163yadnwfpj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vsvlzvtw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wlyfcrol.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jiflmznw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xvxobprc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163byhbkyld.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tpdaoxzz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mbcgsxgi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fpvzpvme.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jkfovmnw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wzxiivqk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qtoppiaa.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163stramkcc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fyicrqfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oeguezxe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hcyrjwek.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163wuyktnsv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wxdzeavs.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fzdfvaws.html


<!-- 参考信息 -->