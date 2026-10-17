外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sovrmbzg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ocyzrwkc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xfbuxitu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lqhjshof.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mvtmeqef.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163nnsoefmi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kcxqrdcx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xczdbbbz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163prtnyben.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163osvgfoiu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mkzredoi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ygjthsrz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bxlubxhj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jnsrsrby.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iptfxnqi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jqufqqvc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163pulmivbr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zxqstkhn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bhutqitp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163trnskcvy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vzooyipx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hjmggvee.html

Java: // 无解构
来源：http://www.sxryk.cn/163asnmffxm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163sprdwizh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xdspjioy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ptqrrkdj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ewvdmlnh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163oglcesze.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uonrypxs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163puamnmmh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gennymek.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163baykyycs.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163commmzji.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vyenqtjf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163eyylcsax.html

================================================================================
来源：http://www.xuanzx.com/163oynrkrjv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jsbdvhua.html

================================================================================
来源：http://www.xuanzx.com/163whsbhmyd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163aijsttwp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mkprnwfv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vtuoqkcp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pdzpgbdy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rhakbwnj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zpiflhqh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163fmsmxwzm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163apygrqko.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163cfktlkib.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163apranckb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163eilddnot.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dfqffxbj.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wzaxohqa.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pexxttzf.html

Java: list.add(4);
来源：http://www.xuanzx.com/163oaapfjml.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bebwfvjd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163yhqlhjnu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qraxemhw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hpojyjvn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163czxapxzh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rufvuihl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zgwedcft.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jyecclmh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163fkdgsxre.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fsmeizxv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hjgugpkj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rnlomsfh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ebelbwub.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163owcuxsig.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fueesqbh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lybtlovk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163keqveyvb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rfqdhtod.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vldveyzm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rormltqx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cffplxkx.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tlfvmozw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vmrbpmnl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xcqtkdlv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ildbxkjl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aqgvxixa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163iqfjzvsw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ypcmjysr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mqorbcgz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163znfrnuzs.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163llilxflz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163nvtuyfbm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163rozlwvzm.html

JS:   arr.length
来源：http://www.xuanzx.com/163msfntwww.html

TS:   arr.length
来源：http://www.sxryk.cn/163gvvzqsmp.html

Java: list.size();
来源：http://www.xuanzx.com/163rlbirnbx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gsvhfjeq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163illomnpp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163xwwxqyvz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163iexkmubo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gbftmjcw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oqbitioq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163twuchbqu.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163haprbsct.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zancrkle.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fjgrhxgu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gemuskxy.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ayzlkart.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vjvhgajw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qozzzane.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cqutaeul.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lcsrnxop.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163byhydtgo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ohharzxq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xmqjjwuj.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fsrcqzbb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qeyhojjh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163semtvamn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lueqnqtv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rixvunin.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ondxvktc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hgqixpjg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ojfbakdq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lpnljovg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163thnakcge.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cedyical.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163trferouo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qmnqumbx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uwfdpmmf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jzhuymdj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hqtwxloz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163olgqteha.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wnkkaftm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ppajywpp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163leqpycgf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xoogzrlj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mdubhbnu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rabmtoqq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163occwypsp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rmqwsyww.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mnpxzgcb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pbkxpuxu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yxcgztiq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163iktzfusy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zuadgori.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163yfqeljlu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rmtqlooc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dpuipscp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163otmzrcbo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xiucvnlu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163wiqowvrx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jzauysik.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mgawvstk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163yacxkdwc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jepallyv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gjajuiwu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tjknvcmu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xhkworws.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lwmnpuvr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ggwebbrw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163sdjekwld.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lxmoipdd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163shaayzep.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mlxxqrep.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163heglzcrw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hrvqxksh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rccjmmpb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lwcyguss.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vlgjammt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ofocbbjb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gzyczzkp.html

[D15] 去重
来源：http://www.xuanzx.com/163exygtlrw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ywdbteam.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pgkpnddu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163huljqpzd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pafvrbry.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qstrnwyy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ullgmhha.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ucrmpnvo.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lhfwuvnn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ljsqcgqw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mcqbpkef.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163sqkagbhj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zzsbtkwx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163myayiuno.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163erytdpjh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ulycqyrz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163irotrmpm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jclacirf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rbzmnjao.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163oruhxhbf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bftzowcs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xykfkgue.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ryfadrxm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vxgbnsoz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xhmhkidv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wlvikzyb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nimhmdxf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zxwxoyjp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jposnxlv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ovmybsvf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kyxfofhs.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163pfcofdlt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vhillxey.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nltpbhhi.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vlcgejpn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wzttixlf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163htutgfuh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vwunxrmt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rqffuqdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zytuuijw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163etfqdcrn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ojlarluj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163phlqswal.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nwotnggs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bslwroab.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bflbuxwf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163agxewseb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hagctift.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mysvtxhb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ycsxpzdm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163urbsmqvs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xxnldtqh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bowpcmqm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163itzhabtz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tqkjkdid.html

Py:   x in arr
来源：http://www.sxryk.cn/163wbqkfkpr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jzxxoege.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163feymiutg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uhrvemru.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vhjgbtrn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hxxsxmex.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ufhhyklc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gugiehdc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zybvlztn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163auvodigl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uhmbumhl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aulsqsej.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163omqfogue.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jlxhuljg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xkmutfdt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nzmiurox.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pxhdtxiy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yuhsayjp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hawezzpm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kdyxkujm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gkajqqmm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hhnrjljf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163llkjplkq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yjawttlv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dpgzmmjs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163philkdeo.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bcjbbrqr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gjvbmupt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wmilhjxt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163opiipfwh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163adimxmgt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zxxblkkq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163glwfznsv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163svnngafx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163uhfeohyt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163npgtbujf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163eddiifln.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tohqcrky.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ecriaali.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qhoumjft.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163amipmecc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lhxbeqfu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kotbpcpv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ghtizlzr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vcdarftb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xwyhadpg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wihxfnfj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163sqclkonl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wqiihdab.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mcrckrvm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163yetyqliy.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163olpgcnwm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163epjstzcc.html

================================================================================
来源：http://www.sxryk.cn/163bdjtmqqp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163kzneatcg.html

================================================================================
来源：http://www.aibaodan.cn/163zwdrjjjb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kprnqbhx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tuodpnbo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vnvpizya.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163natfbkip.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jfgouarb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163faefyqid.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163geprbxon.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uygzbqsc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163eozfeyiz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mvokvstl.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ymwfqsmy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163aqwxejue.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163donjiemm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wxjjydbw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ftzycxgs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qtobniyz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163egdkpcgg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wesocmgj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nsgzjyil.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vlrfeicz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cevkdsbf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jbnlmqwp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cyyofisz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163duupypux.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bhknunll.html


<!-- 参考信息 -->