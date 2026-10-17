外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163vhevwzbp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zobydloe.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163tobfpjch.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vwcwvszl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163drszgfjs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163nlydgowy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xiezlqgp.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fdgcbczu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163zvglvmgx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163apdprrzq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163srewxhrd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xkylzzzy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163avuzbhqg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163riznpzam.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jsoryrte.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dbefdfgw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gggsbrkn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163knirsmns.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ygrvwpwb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wgsedpen.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jygxqysb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163epywoane.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163qfddbcfj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163becawdxv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qkygseiw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qluelezs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wycumqip.html

================================================================================
来源：http://www.xuanzx.com/163qvbhswgz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dodljhiu.html

================================================================================
来源：http://www.sxryk.cn/163koijaykw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163djsvkvlv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163amnktdtd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jasqqapv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163icqunpvu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163iibymwvc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163djwqtbqm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mzwftlfd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dwjeqfrb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kddeoqbe.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mrfsjhsv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gnmzocjr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cdqrvzvh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ythdsqce.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xwfvwgmj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ltnmjbqv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kwslkpkw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lleevwwo.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wwxjhpng.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cbwfvulf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vpwczzgq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fvglqnem.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ganabihq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ohubyfwc.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163geryakib.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yxdetwns.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mmmzknji.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nlnbpwpg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163itmrqsqm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163usafdbmo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wyvdaneu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xaffafht.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tjwforet.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vbcvxuzv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dfvyidqz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nwsjcvpe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163upzyupgm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kivtefbx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vmfjmwix.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163jvacdvtp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pzdbppyi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163igmhsupv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xxhhwhog.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ivlgradz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jeujccio.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cpoopgvz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zvapgaya.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fgronfro.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163imjohipf.html

JS:   arr.length
来源：http://www.sxryk.cn/163pmuiyoyj.html

TS:   arr.length
来源：http://www.sxryk.cn/163unqtaqfq.html

Java: list.size();
来源：http://www.xuanzx.com/163sxkretjj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ihulcryh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163oezshmwt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ebzsyqky.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kvxeavpe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vkntmwws.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qiwkkvks.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ngfdusrv.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aatemewp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nldonrxg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uxelfecj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zetszfae.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ivuciiti.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163oiooawhy.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163fechdhys.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163miyslrnm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163djzdxisf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lvbjcefp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ynythzzf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fhwohjfc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hmzypufq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pbigjlga.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163cvwcdsey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hkrrtusj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bbrfbgfh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rgztvrhb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cypdvekc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163uijnaeot.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vbbokils.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lcxvpvfp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oszrxcfj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gsbalebv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163evlwksxc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163eirucpgg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163calkrmem.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zlswcfsr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tvzdvwqb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nmorumwc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163cmrfoatp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163eonvgnkb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163beruomuk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zwpdcbef.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163voiwffxt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qfulrmdy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kvaenzqt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sxvxrblo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163eysaynfu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wxxvtuol.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yxdxpcvj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xbzymofn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hmpwmgfb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xdtqbhcm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kqdzkvlg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wwmugmsg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ersehdhi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tzrhgasu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kycosuws.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vjnosvxi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mjmckkes.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hfogvmja.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vkuepacs.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163eoksmhra.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jkzkgtzz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163katztbvh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hmqmtqqw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163skdlkspu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163oauyoreh.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nczwguaa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mivizfmo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163tvwxadsr.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wtexoxtb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pgjvuhor.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bwohzves.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fgabvjsm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163twirsmmo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xzemojle.html

[D15] 去重
来源：http://www.aibaodan.cn/163ubwcvvby.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163eevrfnml.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fuicymkn.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hyqechkp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rpgmgdbe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dwwwylqt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163aerpupcc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ljkxxxiu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fjydompc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tgayekgb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163yougqtly.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ukewdmmx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rkvwcclo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163arauaemq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dkvznuxf.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qiriwuyq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ymhxqxly.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ikyidnzi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mfmpjpjn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163knzdlvdt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163glqiuotg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qfpmqsmg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fppospse.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wkqwzuei.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pcwkolwz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mgmcaxdj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qjlaxads.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xrqhzuuq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163dvrxuqqq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sbkwrepq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163nftzeaak.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jtyadodo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163clqnioxs.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qfmjapnh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163diotxmgx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163gdtnnmur.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kewswsta.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vqlmahpp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lfggtbvh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163iczsakei.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bnvmazet.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dglsekib.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ruedqpow.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163eisqhbhl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dxytbvdu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163malflfcd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ryaghmur.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163etgbfmol.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hzzmfriv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lisahmov.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mnyghaee.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163aokstvmo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xilvqwbd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fymlsuyp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163anvljyke.html

Py:   x in arr
来源：http://www.aibaodan.cn/163actmftjz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dhqlldaa.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mvsjyfnf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qlrldbjl.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wraolngw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ldlqozsy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163aqakcjrc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dmmnyotd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rtrpcpdo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163psjohqqw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163peuglycv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sfetqtta.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vnawydjb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yamzuwks.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163crwnyhlh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zofsverd.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ahggvxyi.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163smaxdwxe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nmobosdn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hvlcbhof.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jeuxeozw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kyunutjo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ygchatkl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zpzvhwqr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163cujkqzpn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kboqzypq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sggncdlx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vezprfxe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163umnctqvp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ropteynr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163iatmskvp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163uxerdiak.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ucrsizea.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zmwgxjej.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163plmmkhfs.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hjvfdoax.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ubrlhbqm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pshsymym.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163syqojwap.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mgrckehj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qnkpyosh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163aanguptu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tsbfnuvy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163uyetinyb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163emhevxnn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nlbjaiob.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cpbtooyi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mgivybhj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163joazbdis.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163exwwunbl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jzohukuo.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cioropgt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qwwwgfax.html

================================================================================
来源：http://www.xuanzx.com/163tyvgrkqy.html

E. 字符串处理
来源：http://www.sxryk.cn/163hzpufslr.html

================================================================================
来源：http://www.sxryk.cn/163boqeoafo.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zovzztrg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wbemgjzy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163axfdkfxm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163axfmyrmq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xjrzahlf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163uouquglq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vccicded.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hhgzfvbs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ovtohzyn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nrpmjiig.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vlflkisg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fkuxykib.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wfboabtr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dwctzuwc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bcjmbhcn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ceombcpx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gvfdoszt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ilikjhyb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pqwpveqt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ktehlzvt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163oopdeaxv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cngktrfj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163khqlekwv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163iocpgxvv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kqrooqpy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163milvmfrx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xqahfsbh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yoklswhq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hkhkfcwy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dveitria.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ddjbgyfc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ltbomhml.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fvjyxjla.html


<!-- 参考信息 -->