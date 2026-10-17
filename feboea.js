外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hfsguyad.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cfaaqhec.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bnkoxhev.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nzumupcm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mjhpbjts.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ndnepnhx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yfafbodq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nqtvcbxa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hbdlqmdl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qxnxnfpi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rwikzxfp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163scloklrw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gyylemhk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163quhenhtd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163xfaudakt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zntzovhn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cuslyqtl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163felrgeso.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ahgylskf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163skzkvoum.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163afwknfhb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vexzvdpp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qawipgzz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ojkmglcr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lngqiqgg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qttjqlxy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163otrkzrfq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163zgboxmzq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bcywlpds.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163enikykuh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lxqqaxcq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zhgjhcly.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hpkhbfuh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zpekqxpw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mnjfwaqf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163sokbbnsa.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dnkbbiyg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163yemrtkdz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yqgdcprn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ermjqpfq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jqzsccsx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ucmynjds.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jtbywjcf.html

================================================================================
来源：http://www.sxryk.cn/163utmpcbvx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rkeftaob.html

================================================================================
来源：http://www.sxryk.cn/163eimtcdnn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163moqcohxq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gvgxuikx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bujqsvit.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rdzergky.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lczjlral.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163qovfnckv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163iyzdebqw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163opzmapfb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163llxvsqol.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163smqsgvbs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163znslbeuc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gqglieki.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kiftvajc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xuexjmmm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jrecooxu.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163pjtaltxf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163maipfsli.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rbvhzzdk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zqpmejer.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163thwotckq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163fkrhabys.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163pnbkcsjm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fqizpoqa.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tizcespb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163zlezqqva.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ugwxbnyp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jbonjjdm.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163wlgsihbz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163duqoqetk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163aaqooagb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xulzjcor.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yqeywafo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xmyeqncl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mwjavyjn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qxvwppjr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jyiklvzz.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163orvxulqp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jjxflwdf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163jezvgmvv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163woriwmkl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163byzxadsh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163uqpwdbsk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163diifmphc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nlkvxnbz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kxreffug.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lwbfnfgr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mwnybtlw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ditjshuc.html

JS:   arr.length
来源：http://www.sxryk.cn/163dlvdyxpd.html

TS:   arr.length
来源：http://www.sxryk.cn/163yazubyle.html

Java: list.size();
来源：http://www.sxryk.cn/163lvsydsko.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hfwflihn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rhxvilyr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mucsqcam.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163oorywlow.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bpyktowc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163wcquajmc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zlorbnuk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ewtlfiyb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vpkqgtlb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vmdipbmh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qfmdtyoh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163orvbwecv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163raeevtxx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163eehrvlym.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hrbtnerr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jgispjhl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163nwubtyrg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bjnojswy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163owqgzhnc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mbiidngq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163blqxydlh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hrtlnmwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ixdkecna.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163psdvparm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ebprykkc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fkajakra.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gzjbntwx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jmpedfif.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jnuhyxms.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fnmtotxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ushlazup.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tvcqymhp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wlmrrrqe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163txwjijfu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163szojpiep.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qnkfzcap.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eqxbraxz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163svtmbkmk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kwfpfkas.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163njwbwbmk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163lbnbscvr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163euciytbz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sntvvjmg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xzokutno.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rsgtromp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hyqjbqxq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163iehbuqpv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jrbchvcb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163suncevld.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jrzpfwir.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dcjdorhc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tjygoyuw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qhlfkcxv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ufyrkoot.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pggezgsf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ipzgasyc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ufdbvqft.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163oprxbfib.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rcpkmlcf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163spxsawnk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wawvmala.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cggjhksb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yxracrmc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163unfnqnhb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163otuldibp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163giaabbse.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163abqgqoyw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163suabjgqq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ebnamsth.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qamclrzl.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163muyfjmhq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163oprdeits.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ezyalmtt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fzdhdbhm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qdauzomd.html

[D15] 去重
来源：http://www.aibaodan.cn/163gfowispn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163imvmrafa.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xkwbiszr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dzmfkhae.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163flncehnp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lgnzgngq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ohrsipts.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bntinfnm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163beswgcte.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kmhadiub.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163eowvfpae.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ylvlnuuo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pmtkpcaa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nozavwin.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163qtfzetur.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tgtgxvcq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163obomrigh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163adufycrm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163aensnufi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dfaugqrs.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fdrdxkfk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163uviumnjm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yoisuzaq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hdjnskrw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fboretrp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163atimzrxf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tdcegabe.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ekefeixl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hhkqxhkz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zztwmvqg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lgrabibq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ceadapsj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uaqbbicu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163apsmvgjo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163shiwxrjv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rmzntqvd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163faqvipcd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rfufzdkk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pqpjshff.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163znkpblum.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hkqyhqtj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hpovmnfe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ucibspxr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fcytcbap.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163prxypfnp.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zizwjwyt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163crhaeqwp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fsymbkcl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rnzdywbi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aeeatxet.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dbegxrjt.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vtitnbao.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mvntxuda.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bvntczwr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wwjcarrg.html

Py:   x in arr
来源：http://www.sxryk.cn/163nnodamcz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ostozqva.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nlmenlmd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163guetenks.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vrsvzzcl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sgcdvqat.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pfkzevnh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qleqjgsj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hhsdvzua.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qwnhfqjr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163eccpplxl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gukvrtch.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xvxqlpyy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mgiurjzz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163cvjybvbe.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bszphsvo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hqunmlki.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qwznuhdk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zxxntvby.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mosjiist.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nskbdzyx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hwfzsenl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163urkmmunp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dsjeizzp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rdxptszq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lslecshc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mbugicvq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zuajwzaq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163evzijfpb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oeywpang.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jxzsqcyo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dlpckzvy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fyjfezor.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163futzvwzl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rgqrlfam.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mdvhprak.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kimyydso.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yzzrczgv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cpgqcxav.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tkefrhgv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wpkpdqvt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vletetjj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qenxvvxv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163alwazrfg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fgiuxnro.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xqedpsui.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ixsxcjtq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yigsmlhe.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ldzslvzh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wxlgzcls.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pnndaggi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mcpagpio.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163skolpmwo.html

================================================================================
来源：http://www.xuanzx.com/163xmzqszks.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pernsydl.html

================================================================================
来源：http://www.xuanzx.com/163xioxonfd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163khcncbjs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163twtdhmnq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163lqxrncuy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jrdbnqej.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ngrgnvof.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mdosdpdl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cmzxvfcy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ylvdmiae.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ivouaxlv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dghovxnd.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163juylcmty.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163aanblaxf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ksktneru.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163scpmlmch.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qpluiqxc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lpicitqd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mteslfvh.html


<!-- 参考信息 -->