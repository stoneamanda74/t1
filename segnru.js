外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mmgplvyu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mnphkilx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163uevkhxob.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ixgvatfr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dnwbgwwz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kgzcfxme.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cwyelvep.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hxylqehz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gktycwhs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wcizirum.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fcinntqj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163oxycscbj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163khnfjjbi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vrzxsltl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163whzbcalm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vjovuvgd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163abavxnso.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lyflphnz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tnoigefd.html

================================================================================
来源：http://www.xuanzx.com/163qwufimsd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ynerhbjt.html

================================================================================
来源：http://www.sxryk.cn/163hfmzrdto.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hoeftkli.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pkshoegr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qixjyolj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lnnijewk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163froeoovk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ktitxerv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163fxemnkwx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163bdtocohy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wsrplqfg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iwrpbxsj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pouxrjbe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tistxipk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ioshtect.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163adadvpzz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163dzbfrsad.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163oeasjpcx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jaxongxw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nzfugghm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ytczfpnt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jknhejuj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jjkbibpg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lvqvcapq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rkovjfmy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163foleezuh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fprexcxl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ppkunzhg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163sestfizq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163oofkehbg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pvdvcssv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163evecxlmb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163neeoglkk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bnbndewd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163aanxyilm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163toopwsiz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fncagmtm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iffqrngf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lcvirnhx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ysuxlsxx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mdmmwnzd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163bescaahu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lkqnsmof.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163syjulqwy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ktwrkxiq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163anqwoqqe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xvpizzcn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ktuwvxos.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163spxwhdtu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163oyrawkca.html

JS:   arr.length
来源：http://www.sxryk.cn/163dnikotzg.html

TS:   arr.length
来源：http://www.sxryk.cn/163pmfujdwm.html

Java: list.size();
来源：http://www.aibaodan.cn/163ivlvvikz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qtkaarxb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163grizfuax.html

C#:   list.Count;
来源：http://www.sxryk.cn/163koevsdoq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tccnrdyu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nrohovqd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163gnrxhdcr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lhdxonsa.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tfegmeto.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zgbetlrk.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xtlbhyqz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vkpjovhe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yvpjwlxp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xiabkahu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mluknxjl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ijjzyncc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nzctwfgj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jxmywjqd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nealcjqs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tazohzhi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163igamnjmy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mevkcpqv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bvaxbctn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qqkvjmzf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163scyksjbr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lxchvmcr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bnuqflkp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iinthxbe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wyctjtpk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163slgywivf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163otvrcfgo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163buyprqpi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tbtcvlyx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tzbczlwu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163atinkuct.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zsoppdis.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zqbkxypo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zxodghwz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hqmyxwle.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vowhdigl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163udusbgdf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wgnmzmuo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nfwrggoo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jauvhbqu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fvmrxzzq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163iybyanlw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163larbsrju.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kdgdidaz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163eqtdleab.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163raiphgjx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mcffrofd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163awhofsgn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uqgwyygl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bipmkpjo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163puwfuyuo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gxjfwphz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hijmqklw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ruutwprn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163epedittn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xeyxwhkg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163sbhqwmxp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uuxuamsk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fjtkedrx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vtnmrgam.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xiuevgun.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qcfmdvpt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163irtymhdg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hkvrfvkr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ygfvcael.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163uydohaoc.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wtudetyj.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bpjbxhkv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zyfyczgm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pmrtubjc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163shmlkbjt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xmagprjg.html

[D15] 去重
来源：http://www.aibaodan.cn/163reitifeb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iumhhelj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zzqjymtg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xpcbcqps.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163faxyojqf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kdshjyrm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tdklvnhv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dknlkins.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bpsocfmx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163yfdfgcuq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gcqrulph.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jjyefzqh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qwkbypca.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sapxiuvu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nssjokjq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hsysdjsh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kqfnjrzp.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ioroadne.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163oegbsojf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jsjcxxnt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kjxdgaas.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zgvfddnp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ktocuhkr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kgbpxcdo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yzndldoq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sbaovlvh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zbndubix.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163glgggbjk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wmbtmzbu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xlrejczv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ixdndaqm.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163cqyhuwpo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163shpdnezp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qlktdjwi.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qbzoktlu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163uviwolkx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mdmwqtzc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xroxklww.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163robvnxvc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vvczfbyi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yynrcskc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jlisecnh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uxsccmpc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ophvohwy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hlydmkvr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fnmmuuhm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163sckligch.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163raopxjpd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yhuiqqxk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nzbuyzqr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jkiddiez.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163doumqqto.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tulaeriy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jhsrqjpe.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vweckzxd.html

Py:   x in arr
来源：http://www.xuanzx.com/163qcjpthhi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163czquofir.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wibldmfl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hzxkhsdp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bxktdhnv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163moxsstaq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dgsedipj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163elyezoow.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jxlnblro.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dyguamtf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163pponfgme.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ckvfrbbu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163impqlyca.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vxwglxwz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163uatuukko.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iuactbow.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yobzdiqm.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163fhpffknw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lrvgfvvx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hcfsdxtz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163amweqcnz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bbeujolp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163fziqwpqi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dbpelwmq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163nelqhcke.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163egrdqmjz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rpmfgqgi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lgkblirb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wnkyrkkl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ztimpaey.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163apkscfov.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163izqjjjyo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163excdosni.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ixfrgute.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ssjqcjbn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ntumuchw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yllqwooy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163inkjosmg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ctsxgjyz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ccaaipqk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jyctypqv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bdmpxljj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cxsjwpcy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jbfovsea.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163atuwlbuk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163blvrhqbu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lfpdfdpw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vzygzlod.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bkynseuf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163wqmcitjc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163yxzpirjm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163uveytxmo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gguqwkgk.html

================================================================================
来源：http://www.aibaodan.cn/163uexeocfq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vryyrvjc.html

================================================================================
来源：http://www.sxryk.cn/163frmotfcg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yrawvahq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tknmxkbs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qpcvsbso.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iubscbgs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bjbmzeoq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rsndjhbq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nwcyzzdu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fqmjbdin.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hrxhxhrt.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163nsycwuqw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mmczhomh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lrejtods.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mbbosrfv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wpbtfzue.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qzmpgsvu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163laqkjdnz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wjdivptg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wtcndtda.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zxqdejtm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qwestfqc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163btotvskl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nqkiikiv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pbmdfcuu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pnayuqrb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163iqbsqdos.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163aiahtrtz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ztatxrvz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hojdckfj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mipzqdwq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163emfjiqct.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163iftsumhg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163moqhugdq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cmqwvzju.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ukbsplxs.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163udylyedr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gobpiczu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163oxyknyil.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163udyppshk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uykcfzjm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pnhffruf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jjvgikrb.html


<!-- 参考信息 -->