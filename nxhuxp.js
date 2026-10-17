外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163zxrabdii.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lnxhglzr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163naurafez.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lkdgskqb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jyqgmzje.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163pjvfeuaf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163avlvsknr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ndjjtvfo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nyotlhrz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163eapbarva.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163sfdvmhws.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rfwcmnom.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zigdwrud.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163dqvnluab.html

Java: // 无解构
来源：http://www.sxryk.cn/163kqwpyujp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163emyskwrs.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163naqcvclt.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wampjcdu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hjozzbqv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163iuvvbpwx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kwtwalfi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163klpubyeo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sznkgaxp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ttvoyayr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163btemrvie.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163iuooarrb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kigwqqkz.html

================================================================================
来源：http://www.aibaodan.cn/163ikrnegrm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163dsvstfzw.html

================================================================================
来源：http://www.xuanzx.com/163cftpfqeh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hwaugxjp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163uwhmoymc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ptbirqee.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bwwriueb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hdgjlnzo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uguffspc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163srzqbiek.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ararlooj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wpemvgoa.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ovqcmceh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nhkfxhkh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mhuiwejr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zccaldoz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163iugupcpq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zybqdsvq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vqoaryns.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163btsuuegi.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qqqulrlj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163epmfgyav.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163adcacfzc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lmjusgkh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fphgptoa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163alxyxdhi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163pvnyojzu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lzdzulkg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163djxtncqd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kyucxupm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jaczimdz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gqzkiuny.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wassqthi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pvvscvnw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163oeeaqkag.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wdynjgnq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cfyxrtbs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163alfntjcv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zytzjzff.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yosreinp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uyamwxcm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163imlqabvl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mipbafzi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163accviwki.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nbpiswee.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tnbsqtbs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lvnddkzc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gxddjpbw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jdusnifw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163icujylnl.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kujeagej.html

JS:   arr.length
来源：http://www.xuanzx.com/163wbfchbuh.html

TS:   arr.length
来源：http://www.sxryk.cn/163anghbwha.html

Java: list.size();
来源：http://www.xuanzx.com/163rczceybj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nybqqbnk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zwodyzpp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wziemjuy.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ozkyajvw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ytcqlcez.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163deneaqcs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nqcdlraf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163elpmduwr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ybtgmujo.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wxauuchp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163clbxzccc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163gxpqxpfx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tyaanagu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hsosjhdg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ozhrzhce.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163brvmnvsv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qtzjnfau.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rvftvqif.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163itmjbcor.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jdnziwcd.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ibslcias.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ixcdrlpx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tivyehrg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lwcewomo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bqoesrug.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rdayozol.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163asjkwdvi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ndzawfym.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mzjkahry.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xhmorbfz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gpsueakz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163acycrynu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vwqwgzjs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vbmipxse.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ejunroge.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rpwekaiw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vydietqn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vppgcjvc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163geatilky.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uipcrnfv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ufiicunw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163krsneqlx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zjjoysun.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163iehnwgrl.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dyxhvklx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gzuwrmas.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nfllneta.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163gshdsyhu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xmehsrtp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bylekxzt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ghednbsy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ubblgosx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163thimlixv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cscftdgr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kvlgwuik.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ogqermep.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pwahktyk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ywobuccs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bahprbet.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zghqfvgc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163aksvfadg.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163eipmtolf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163spjggbwy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163somwaqll.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163tpfmojxg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xvmwslro.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ubmfgsjt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vurkcmnq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163azdcaeyx.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zvakgryd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zkqbhhay.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lynanndp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tmqqasay.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qvojtyuc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163duasihbi.html

[D15] 去重
来源：http://www.sxryk.cn/163quuwuzxi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163unyijghw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163attmeeab.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bsbwaavd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nocdmuih.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163luosszht.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xmgjqcbr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163opijczna.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bfvspvmp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vrrvhrdi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zjcxhica.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wnoavkib.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fzhczhsb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ugpwaemr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163moktdkri.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tasddpey.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163gdgusbhi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jifxtsrc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bxvtmyby.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163zoskgugs.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yczfpqyu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qkrnagdw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uvgjjvmc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ccygqqcj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vwckiudk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sbqdxuje.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rnbhqkuk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163gqlazmjh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163edgzpfpt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lnxyfvgk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fdcuqdsd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163pjekwjsq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jrxvytxg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tjblwmea.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bjxhojjx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zrfmvcce.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fakjabad.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ntlhjilu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rgltborq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vigknpuq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rjbgovdf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zyaxouul.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163soyvtkdz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163cfpmvsgc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ebfjpclk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ecmvieez.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xctpuubq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163aneimsqu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fhqzoyvv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eirlkfzg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yoxgzqem.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hkuptogs.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ftknslsj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ucyhcuog.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xitkezpd.html

Py:   x in arr
来源：http://www.sxryk.cn/163nkzlhsun.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wltkwhzn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xuavcaqz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sdkvwyic.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163oviwbscu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163chkaeqeu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hniegihx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nqdhocmf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xpjkrusf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xkofpbtl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fzwiloio.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163toarpkye.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wyjgmoeu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bttvyyok.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163mjyjnnvf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fvqwnbfl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163vermmatp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tjteokcx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mshovoqv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pbpiydcv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rnjyoiyo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zhtgvvwi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ahqotlqw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kbljisaw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uathcfit.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fertvvgu.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jrxzhnwa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163akonzets.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pojzswix.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cnwdsuzp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xdhkzidx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mlbgrele.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xwhzedbd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mplmcvxt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jqwcpazv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163oileieob.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lsihcdjn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qmbnjmkv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bjniqdyb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sxichtdv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mlmqsghb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qgzcwtiz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zotfhzxr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163flmhwoil.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163odciojkw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wumyfuko.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163grwwhbwi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rwuqtrpf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tnqlycqs.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163sqazhtib.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163flnbguks.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mnlumefg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ddjmqotv.html

================================================================================
来源：http://www.xuanzx.com/163uynpbkek.html

E. 字符串处理
来源：http://www.aibaodan.cn/163uulbqteh.html

================================================================================
来源：http://www.aibaodan.cn/163vjlgaccp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xzozunco.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163shpelfui.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163edrbpzmc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uqyjeoyz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yaxajcik.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lkclljwz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rbbhcjlh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zwbtyyty.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163spknyful.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yjkfczbn.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ybnmxyld.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163aobrdkko.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yhehcnoc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ebftlzjc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gwesttuq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dhuatijj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uyxpbtgd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tvdnuokt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fczalsps.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163txuiykdb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ppndkzxh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zsvdrjcm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zxmegotx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ynilzwms.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163abguhvfc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dppojtns.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163uhwtscbj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xinttvaq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lwwjooxe.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sxnafbor.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hyqcbkne.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xnvrqktr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rzhhdhte.html


<!-- 参考信息 -->