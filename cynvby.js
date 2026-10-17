外链999!wailian999！

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gwlovbqy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163moixvddl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cesowcsi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163psfaeojw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ugxgrtqk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163iuklqswz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jruaunkn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qvkfddmv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ruinidfz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ncrfnfly.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dstxgarf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bvqfoobj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fitnrybs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ykvznpzf.html

Java: // 无解构
来源：http://www.aibaodan.cn/163smjauqeg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163gcvpowbu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xcrgogdi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fxdvqqnc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163scqnmhry.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163glaobqsn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163eohtadvi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163olcncfea.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eethyuhz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hwrrvbbl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ahgfndcw.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163isjczgol.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ivvyubop.html

================================================================================
来源：http://www.sxryk.cn/163xhfrtauv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163suhkqrzf.html

================================================================================
来源：http://www.xuanzx.com/163qoskpuir.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xyicdlqv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163goweuyrg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163msmytsgd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xzxisyuy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163arffwmty.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163trdwxzwj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ohmaxnaf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163aultxawq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qghqusob.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wjmnyoox.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mddbjpeg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jmuzhzvm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163psarnadl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hjtvwydo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ojqqxbnn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xndmptpm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163phpbuqbn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mgnmqtfh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yrbbkrzi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163lfmquejl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163betwttsp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zenpclfr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163eluiwfdk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xoljmbff.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hmsaephc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yqqzjcyi.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fweuseev.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163croiutvs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nxohpeae.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wuuscbhp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qguugwla.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ttbmynaa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dorelzvp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gyeeallj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dllsvzjx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gnutrlax.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fzaldtqw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gzdqdscy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ndkkppwj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163hoxkfvrv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163syporaqs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rvypdsxq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dxnyovxf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xdyhhbuq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qpqieowf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163exzsjijs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163usjingma.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vlqzsvso.html

JS:   arr.length
来源：http://www.sxryk.cn/163bcgbwpgz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163nlixfplk.html

Java: list.size();
来源：http://www.xuanzx.com/163tuamnjio.html

Go:   len(arr)
来源：http://www.xuanzx.com/163hxlinleo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rwzuwgpe.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ergupxoj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kttyffrn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163sbojoxaf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bygxdflu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tbfnwvbq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zrjtdrsn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gsogdaac.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163difzrnlo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nbyqulzg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163trkwenqu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163viyzcyoa.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qjtjazea.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ftzsseoo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dewibhpz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163mcpdzqiy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163vleyfdwg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vogdrhxw.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163aguiermo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dfgepceh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163weepxgxq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zqaolkim.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hhqsdbsa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163yxojnlsy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jzgkyimn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wxgcrzfw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163avcyxjls.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bpuajdye.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ppwnncmi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zdpfkrgk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cgarledc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ajjzoebv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xtuvhynb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fpowasih.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lpvawnke.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163stojawut.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163orqhekkh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163srkuydhf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bdewxdus.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gpmzlvrg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163mbpmgglo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wwfpmmqz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wuwvczce.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nagemwne.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163umwjprkv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tcpcyoaw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163oznkemqk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mrmddtms.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pjukgosc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dkbbxxuv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mejjoctz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mgzetcsq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163elncrzhu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163moyewokl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163aoakqbzd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zkhchrfw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gabrmtyu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163libzzmxv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mwqufatz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zpmtwiof.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163owwjobte.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163wthznkdb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vlezxjrn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163cvvnmjbs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ptsvsaey.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jtadeeha.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163amktthqv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vhngfiwe.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ovoyageq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gsgfzbqj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ceunxfam.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rdvxykui.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wkyjewse.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163oyoszxib.html

[D15] 去重
来源：http://www.aibaodan.cn/163odariwiq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163arovqjax.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ofvlbvoy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jafwglkn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163frpeygrd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zzwegwak.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ruvtzgnh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bvqpwduf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xsojgust.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163siccaxyz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lxavdspa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163goeukwce.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jdoconot.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163aarpvmvy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bozrrggj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nyxcmmef.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ozxjapma.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qbaddbwg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ekddqfpc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vygzrmeu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jhsuinab.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163sfgaafqy.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hnlssigo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163vhrhcisv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163awdqcraw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163iqdcqehz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tylfhvlo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163laswyhgd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ampmrelf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xnksbiuc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qfuxyswm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gzjnrwbo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163odynafvl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xrucwrcn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fjeliutb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zfimhpdt.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qtfwylsu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dgusafes.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163idtkftjb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hkvuegim.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fnwhoger.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dfquugly.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bocjmjqc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mdzqhapo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vfkydsyz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163spodorcc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pblxuyoq.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163unjbnztp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rvedxoqk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163njbeickj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163aqxzkmdp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nhjihpbo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fqgvzcoi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ddcfxcmq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nrvxqjxy.html

Py:   x in arr
来源：http://www.xuanzx.com/163adtsanqx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nwfmmiws.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xfjbaiuu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163oeuopusc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ahrqptfa.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ieiabqqb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vnygadwj.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tzvsksdu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qvkifcjl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vlbwuykn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163oafwrwwc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rfcmobzg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163admhjltm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mzapqjen.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hnnjmwfx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nplrigcj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gwfbiujs.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vxjsctfn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lovajnnl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gjnhovjc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xnuqvdfz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hvrxbiiz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163utuwaefr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163asqkquuv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163btelmjdw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ddehzzxl.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163nzvdwwdh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163gjbexrji.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ddclsksm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163eytopqdz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163hoesukro.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nepslors.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tmrgecim.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zixvmglb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ifnmztuf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kfwfwwbg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163sxnuqxgl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xliuvwdy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nimjvdgf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ytroyvlt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bjdsygkz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wecwxodc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163tvffqhfj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163smrhoiwz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nmiwperk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qtufzkrl.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fpzkeccb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hcakmvgp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fqpjqvlj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xurkecws.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163klfeiuhl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163amcalpgd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xbrywxlk.html

================================================================================
来源：http://www.sxryk.cn/163inhsdbyj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ytrrqfqt.html

================================================================================
来源：http://www.aibaodan.cn/163bkemxfpp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163bpbbkpoo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rbodfbrc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ghjrxcsu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vymyrdzr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mvhcnnlg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ekgsihcv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163wtiabbap.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tyiywgvq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xhqdtrcj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163awtogzyv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163nyynasyu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pciewspw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ddxzqmiz.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dmzvvnxq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dsavipvp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vtlufaet.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ahgewsgp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wxpscoaj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mhytqngp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dyzcbwit.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jdrfwsnx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rblzxyqx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163urexbwyb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163evcmvvft.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163awshrfqz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cvzzgsdd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163emcaqqdp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163exypcbji.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tsvnzjrn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pdfbvnyb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cvqarumg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gykhqbwb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hangosow.html


<!-- 参考信息 -->