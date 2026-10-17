外链999!wailian999！

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gxsswvlg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tfyyyuuq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163pvctfwza.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tgtuzuwc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mgpuqrbm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vqfmjsvo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ijoizwoh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jqspxxxo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163amojrqgx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163depcphev.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pjyxpxsn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qceosmmz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ykddwtml.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uubgxmja.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fxayphma.html

Go:   // 无解构
来源：http://www.sxryk.cn/163sjloubrn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hjezbttk.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bfnnnnbm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bifpkkwz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ywtcuxax.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gshilhlf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jjbjtzoz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kudyrfqc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163xspczkhe.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dhrmtggt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163urwapedp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wztvyfoa.html

================================================================================
来源：http://www.sxryk.cn/163kydlwcwb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jxoghnwk.html

================================================================================
来源：http://www.xuanzx.com/163kmairaql.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bpxqarbj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zdaxqxle.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tohjrtjp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163pkvlcgqw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163twpmqnlv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tpjgqnzb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163swtvaknh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qcidgpda.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wjeseivm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ilnthpve.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ooigutig.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pkyevkix.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gzblcgyj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mdcrcirp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bugmzhqc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ihhecgvi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163afwdacoy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vmgcbzkh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163swcmkexk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tijxulgt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163blahfvfw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qwlqwhdz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xupedjdi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163zhhlcjfa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sidisdyj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xxbybeyp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163apgwwadr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163mighfwss.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hsqplsdd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yljgrrqd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yagqrnai.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163iaqpvjcg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163aklmeska.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163huneoufx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ccvuceke.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kiaznnry.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hvllgqnp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dzkllrpc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163khyezruw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dlsyseir.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ycwrtzwq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163unjltbmt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jgakiclj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wapihuub.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zkyofjoz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163metnvjih.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ooblnmpg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163feitpncr.html

JS:   arr.length
来源：http://www.xuanzx.com/163fdzkodnk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vcxzhdnp.html

Java: list.size();
来源：http://www.sxryk.cn/163pghszwhc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ngefjoen.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163kedbipkv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163umppffcd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qotmhtaf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jeiufduq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zkwdxqdd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pliprvwn.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vvhmgnnt.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163mohyaqzh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163lrotyvyq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bqcfiocp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xkjzcouu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ekofbtkf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163erecohzm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ugjnjhqq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xyjllpun.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hywcdfoq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163elcysckb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mqjnalwi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cjixlyqy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bnpndcpa.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163krvzxtie.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gxmrtunf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jqijfibn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bylauajy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wxwusymg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163evyndycu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163fiicnedq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bvmosguk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163raubfchf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bpgqsbsj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jgnrgoqw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nfrckbqz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lwdcslnr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bcksptvr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ycdvexrf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rvadixnx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qwkufrqk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mjpohnix.html

[D11] 反转数组
来源：http://www.sxryk.cn/163esaydjuj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cqfjlkmm.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hmxirqnw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gbvnkrqo.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xqqoclwd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163rsmwpxqv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163hdvdtoxl.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hjbjsymh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jiofmmdd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163oxcbejfd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hkvsqogd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yoqipdfo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kkfoyhqo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xkxsomep.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163suohecdz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qgpocamy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163udrgczph.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gfqotngd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wktrfofq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kwquxgrk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tobwqjqn.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163oumsrktk.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ixxkzapt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163mesjcnyv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tybcunkt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pfnahsrx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163drlugajr.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163klqxlyxx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163duqiqvvz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zhomyvpl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qvztxnbh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fohicduj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wiaogjfc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hvpfpvdt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163sbtrkrnl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163shoepzde.html

[D15] 去重
来源：http://www.xuanzx.com/163fhxlvupn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qhstacfk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wurdhgeh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rzslwvux.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hxbhdkro.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lqlebpzb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fejvzdbu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zklunysn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cdpjdyyu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pusqgcjs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jntqklbu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ubkypvrh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vtrrnlaa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163snluukks.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gbjuxmfv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rpedjnld.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gvjfjros.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163cakqjlah.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163malmxvny.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163piwkjcqp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zgnrikfq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ijtuobeh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dhsmcmva.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jgvfounx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ryaqdlsx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rblpoqzf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gnzbudsd.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jdqdjvsw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163pgpxvphy.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163tgffgykm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hmqkxxed.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hyhnxkew.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zpjtykdr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nwukujqn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163asirztjg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163iupsrqix.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ijvabyos.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fkbfhltq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zbqkstxe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vhhxazgl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nragynfq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163iaoeafcd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163isqbzkgq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fdempehl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jpetvaur.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zjqclrim.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dvfzdtog.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jrchvsgx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163httyfljs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tnicakqo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hketpkbt.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dxlxipca.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qwcfalsg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163awikoisq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163dksoywpj.html

Py:   x in arr
来源：http://www.xuanzx.com/163xzhynhiz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fxbiyhgh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gvsoneyh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fdwwxacj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qlhekgiq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163swfjdfvf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163spzohvyj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bedlghsf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163uadafphu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nbmhddpt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gzhvjddz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163izwamefx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163engewvjf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kaaearvl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163sjotcibd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bbmmnupm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163yicpebou.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vlwewepj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dghezvze.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163avnuljvr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jtoxivuq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bjcblyir.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163cxumilbm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ritzjrim.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nqtppbje.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sipgzvko.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mjztozfg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tvcvmbvn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vlfbhwjv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163iffoklax.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tjshxpqe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mppwnkmb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bqfibreb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jmqiafvv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pfihmqqo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163yfyybjue.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ezznmltm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163zehbpeme.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ruyhupjd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kdcecxsj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qtckxlow.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jntswmhu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sdcxddep.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qpnxbwsx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cyzmqmzz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163awbtswer.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163tcdaeqfg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163hhpopppb.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ocuxpewi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163lxptfnhh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lvchxcit.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163kwqdqgux.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ozgigccl.html

================================================================================
来源：http://www.xuanzx.com/163moqnczux.html

E. 字符串处理
来源：http://www.xuanzx.com/163ylbfjyzu.html

================================================================================
来源：http://www.aibaodan.cn/163kvrnfadj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163nuctxhex.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zkxyyoev.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dvedzwqv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wjodxtcn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zovmhgiy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nlnryqry.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kqlsqets.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pdsgrqoq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xouietqk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163arlvpssk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hzyoandw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fzlltrdd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rrdlvwqv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vldamcwx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tmyasjgq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qqqogcjz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163duvtbzky.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163harnqfrm.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vdrmwlab.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163djsmojzl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qkobhtaq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pcxsarzm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hoowgxtw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ubtteqwq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gmjwehtn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rhzqhsxg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hzbfwgnh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kkdyrojn.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163oupcctpo.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163esolhfca.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lzhjjehc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163oelgftrh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163slvdusix.html


<!-- 参考信息 -->