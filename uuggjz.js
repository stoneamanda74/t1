外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163drqeekjy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zjwekztn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163utgdcorg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ivzkdcvj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xqpwnkjw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dvpjhpwz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qwfkovjh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ftskfczx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kytgvhbh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163icdqucwv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163luqywpwn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163bzjyznpx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163flauksma.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163kxexwwmr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ekdcwaqk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163soevzzkw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163kxuzmurt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dotmiptt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yubgsprl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gtpwldfq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mcussqns.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kyhkmihc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tdqpybmp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rfbzoxmq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ndprqlur.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lnznqaaz.html

Java: // 无解构
来源：http://www.sxryk.cn/163zvvmskej.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vezmjmbg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163bufrdqpq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jzurkccy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xrzqkuyu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163eacvkzfh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163coibybed.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163euuruzir.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kjuqctnh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163whnxbmyi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163bypbehwz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hxuyxisi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ffwigwwn.html

================================================================================
来源：http://www.xuanzx.com/163gfvhqlwu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163yysamsee.html

================================================================================
来源：http://www.xuanzx.com/163lheakyeb.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fhrkegja.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163vlvwoitw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163eanrpezz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ibkwrmfb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163miczzxbq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ydqhgqaz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jsvsbzuh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163cbgjybqi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163phlcflfk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dbitmtkl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cpzefzud.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qflelokc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163koepxnwh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fgvfgibb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kbczpjna.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163coqnfbjc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ksfbnnqb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wazdyvme.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ueqbltes.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wxbybcpl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163fhxuzuzt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163eajvsald.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xtsnqvie.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163soipnxvf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xocrgbpq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jscvzymc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kxtpukck.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tfonvdtu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mnerauac.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uwpdnwer.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yispsnbp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eidzwgai.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163otaphcvw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163azphpdaf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163unlmjwfs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kkyjfpqz.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mnaobsnl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ejrigyce.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163plezilwo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163iompfric.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xpyuaphk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163eamyiqls.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cugozcif.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163buzejzvg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qnugtrfa.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fwmzrayp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vqjvlhlk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vjqvdkwg.html

JS:   arr.length
来源：http://www.xuanzx.com/163hkvuaaqu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dyipbrau.html

Java: list.size();
来源：http://www.xuanzx.com/163vzwxntli.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vblrkosw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ohuglzch.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rftazusu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163moklgoqn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rrjzdeho.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rckzrlxp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dlsjfpam.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163emgodjea.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163mpxhrrfk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qnpqctlw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163edprxuku.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hagnekkv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pmursncv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lxjgywpm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rjvspeaj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jorooirt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mhijgksb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xgbncdzm.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163deulzefs.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gimvcwma.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qaagawvk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zeslzpmu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hlmxtthg.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163citgagit.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wkntddju.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163celshzwc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cdalkavw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163faqnptzd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bpzjutyb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163asdqaljh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163micsyfay.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163bjbreroc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vssixcam.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ikcsplsj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cjwyfuxz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163stxkbqpo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mpgmvmfd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dstvcxjv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tuwltmjv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hhouxzva.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zboljbkg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163udaorvhu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tflntrxr.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mwvegpax.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jsyioilw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163etsjqlkf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163edzzyhlc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wyjrpkch.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163peybgnwl.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163eiogsdrl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pwnlmzdx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ujutlfih.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kshylhez.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lqthtyko.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ylyhiyhj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163pynnxvil.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ribyctpv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bboxksgr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163psvbzanx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kyaovnmg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ebdcqoew.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ewzodktz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163enkqwtqs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163tcqxtrxt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zqnjbfeb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163haymvyyc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zjytmklr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qmjymrvh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163dtwwxfek.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jbnxfwte.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kmhlxymr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163nutosgtf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xwthoknd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lfdnmdwd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163tinwvzkz.html

[D15] 去重
来源：http://www.xuanzx.com/163jvzwytre.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qgueyyqj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pvhefhtv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wiasrjlo.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wvotueeb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163crrtfzfx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ijxlibcf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yylzwzzo.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mgdksonh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aiuzeqtz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gikwxdlu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fpobbcws.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fxenvelh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mhhezxcb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163sqqducsg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163swdlmmih.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sqlewhhf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ctqsznrm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ogpyycsm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163apysiyuf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ljrtxmwv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163oaveecjw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163llrbtlsx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163okphmwvb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tynhkdlq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ttjqfbmm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tjppmiiu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hpyxwoqm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jlqjynmv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163awtkzgam.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vrvjeijj.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vkwpclgv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hwuuvxdm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hrxetbxw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lgmrnebk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rmpmyxtg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ciqoyfeo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163bteihffa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gtkxupzm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163dvxmrxme.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mggkbjmo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163begztubd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nfqzhnmf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hrdkrdij.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zpoyxwth.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xjwmuxiq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yhtvzfnv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qnhpllno.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163obnnklpj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163idivrctu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163grvnurbr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nwldvhue.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163eggfhiyy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163hdoiromt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lrdgueja.html

Py:   x in arr
来源：http://www.xuanzx.com/163ijjzjoec.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bfnrnctx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bokusqer.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lcixlsdi.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bzrqeimx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163oozinomd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163qysmudiq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lievkzpq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lbfwhhfa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hpptrsqt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163carnagzf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yzntchds.html

TS:   [...arr];
来源：http://www.xuanzx.com/163aeblztag.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yehmcmpr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ztmyxcpi.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fsxnupgu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163khpqowon.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nfwsxomn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zwfdxacl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163jzwjsdkl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lipbwatt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cctnkmcj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qieonpmc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zvjpypdt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163znfhxyov.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vakavwbs.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hhazkinh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pifqmtaz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hlibjlnw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163kqwrhgaq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jxogxbai.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163upwgiirh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bhbomkpu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hqyoqajk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163faghdfdy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163exnllgir.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wdbfgplx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163kvifewuq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iykzkgun.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163dczwyfxg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mmzrkqys.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zmplyzwl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ivucyjcs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nqppthen.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vannfcdh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rlelviyk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kroplmrw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jiypnape.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uvrwsvqd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163souyaxtl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163eirjnojk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qdexmmod.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163aisrnvsa.html

================================================================================
来源：http://www.xuanzx.com/163djbcfzbr.html

E. 字符串处理
来源：http://www.xuanzx.com/163yepbjozv.html

================================================================================
来源：http://www.xuanzx.com/163cdebcumw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zzxamhwi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jderrmrz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163lsbtgzjl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mfwalyfs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163srhrjgch.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163flemnuyb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zisnbmmo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xormrwzn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tfvggkaq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kvbnyube.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xextnjqe.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tmoyivau.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iowhoedr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ndyqoxpi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nwptgpkk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cxvewypw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qpnfvkjr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qbgwejvk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163auoqesud.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kaxbelnb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ltxnazqp.html


<!-- 参考信息 -->