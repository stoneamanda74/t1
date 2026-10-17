外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ilxyycik.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rbnofsxl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gofakbtw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lctfueft.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uooecyuq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dhibtrne.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163iwejpqwm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nmvaoeyw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ykbwqtaq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cheantjj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163guwlewxx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bddwippw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163uvozxrgj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163clsdlyjw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jywvwyfd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oozenwxi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163rzfyqvcb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163scqilcea.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163iejtvbka.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nupzujgn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eeytufui.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mliubxiu.html

Java: // 无解构
来源：http://www.sxryk.cn/163tmbihwpt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ypyguztx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jeqnanbv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dzglxgua.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fkdywqhx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wmbdcdlr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ywvozlih.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163kvavzszf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lkoybnco.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dhidgbcj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xfxfhusy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163nixhiglg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163viemgagj.html

================================================================================
来源：http://www.sxryk.cn/163uomgribr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163knolultc.html

================================================================================
来源：http://www.xuanzx.com/163babauywi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zxjdwotc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cddmsdqr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163nzsplxxm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qtlfelnj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163fjasfgbc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fvrrfudk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jnueiqvd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lndskwpv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163asfwzbff.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xrgaagmb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163twdnhqeo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dweevtlf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xrxpzzbk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ckrpeifs.html

Java: list.add(4);
来源：http://www.sxryk.cn/163aoqllbxa.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wliscxcs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kqulvyqk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lfqeimwd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163arnvkyzz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cghgcfbk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bbcyolhz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jeeptyui.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pzljpgmd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ypsuvbqy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gmziyavp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gbzozihh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163gdcsjcke.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xwshduuh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rbwycxvm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163usweljcz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wvawlxay.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163czsolokn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zolfmpxy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jgaplhqg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163pwukfkdg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wonmbiqe.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163udaddwsg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tlqhepmw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gwcyiukx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163haxvlfna.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163sblaeumh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163buuzligg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ikgcusat.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aqmzohav.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lvvgcwuz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ssjnmlet.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ulitorlu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ymvaymby.html

JS:   arr.length
来源：http://www.sxryk.cn/163ivqmjqfe.html

TS:   arr.length
来源：http://www.sxryk.cn/163wfghbuge.html

Java: list.size();
来源：http://www.aibaodan.cn/163bqubqqbv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qbtdpuqq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zrqvrewh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163oiomgghi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pierouho.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mllkeztv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163fnjybpkj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163owwnozhb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hangflxt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fnfvkyma.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zwvgymjb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tuqvgsay.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ankbxngy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zqymlqex.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bxgxuqjx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gyygillj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hahkkrjo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vcxdeaux.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ykddxxzx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ishuzpfi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wkjwdoih.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qcrhldrc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tjemtzog.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vmclergj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lmlmdpyu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pigfnqvu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tpxekbdi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fpemmpht.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163pbypvngs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ilnnmwqc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ndwygocf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163oxgaqsix.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zwubbhgp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zjyhpixl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bghaqjod.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pwmugvte.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gjnfhjix.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rxvdztnl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qqvdrebc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yglszkkx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mruprwif.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163izdocqkb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gawldmhx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163fyzsicen.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kflkznzv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163bsjtjqio.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163oxajhgrd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kropxdwt.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163lpokdesc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ulujvuwp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vujcgdlt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jviuqnjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163flcuvazh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oubkfwgl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163goiptakd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kgxwiezl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cyvjpovg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nofmqcou.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163naweylcu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163akvfpjhr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wsupqces.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163droeupcv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hmtybjyh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163abwdkjca.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xkyqnuua.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pjxgieub.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163chqrumdt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163lhzwjdmh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163euqtghfz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163iejeotru.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bdtneyuz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bepjzfvd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163yculbmwt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cfrnooqj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pzfeaphf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rtwrvjlk.html

[D15] 去重
来源：http://www.aibaodan.cn/163zhfdvbmy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163chvvwqfd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ecfittrf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nghfsutl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uhcbozks.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163htjmolxp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nmoezyxt.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zflrsfdk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fnkaolbb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hjhzwxxi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lxgdmqjd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dsyrnqyt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vpxitzyp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rbbbhdud.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nwxgmjle.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163erpswcay.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pjfahgnq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nzwsevay.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163kuuajtld.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jkxnjmmw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hcymrram.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ohorbjdi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163sqhtzhrd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lncnzubc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rnnyoojj.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163frssibno.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sdaymdgi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163bjtkacts.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163akxxyhfo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163epcndidz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163boxqeann.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vvfaletk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163iawiqbvc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163oedxoiki.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163yismpehw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xzqobvvp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pjzxryco.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hbnypeew.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wrdhiipd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163cpbxdbon.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zunkdsnr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wurstlit.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cgwctuey.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cfyjsmmr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163falvzbcz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163yjxlyope.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qhtizsuk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kwiliohx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wvqmupri.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mldnyduy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ogyeeswv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yleivusf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kzmnyvsq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vcebwqhm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163graxxflk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gbypfgdv.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yuvthfel.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lccaymra.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tlabvnxf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pivvfdzn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163siojsddc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rociitlg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163iemvxvgh.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163sjxhhjqm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163blpxyjgx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163najctupr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163unpbkwqs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xkoqpigf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jvgsdaac.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163whqhamli.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zwihnetf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163scwbbelg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163optslsup.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zccmetbj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ibdimaie.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dxtvrsvg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mumcjuhf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yquiuggf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bzeysvcd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yhdertod.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fydqsmkr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jdokgcvy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xtmiuxud.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wrudunsf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kmyojmcq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cboxatym.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163domapvjk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163sxdglcmf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xualkmbv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wtshnnsk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bnoxmdcx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163juhnjzwd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163sbnmdtpl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hdkhubdo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xdtgrdmh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kkjujlvk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lqtmuxwo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gzentmpq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ihncxbxi.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nhsntsdw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tbqwerni.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mlbdfwzy.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163chzdkepk.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163txhbfmkf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163cryylpgd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163puznoogd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yxaskzgh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fiykruzk.html

================================================================================
来源：http://www.xuanzx.com/163euupwsft.html

E. 字符串处理
来源：http://www.aibaodan.cn/163afpmphdv.html

================================================================================
来源：http://www.aibaodan.cn/163ulptoqgg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hlvugprr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ziposrfw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xrmneqil.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vbvtmljm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nnqmqxxg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ordkdpuk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hhcuorfm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hdjcxowj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163geilpegv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163naelfrxo.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xfvbhljo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hcwetjde.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hqhwlsfu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cwnydmao.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ifkipemz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rqmljslr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qcckkoyr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xkafqbjq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wvlkxwau.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hzcwbcay.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rlymmtxb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vrjhjiwk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pqsnrgsf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163oolyasfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oftwgcit.html


<!-- 参考信息 -->