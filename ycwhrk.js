外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zyaqjqvq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163saayznux.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163bhbetygs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sxapmurq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mvfmjhcc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dtiwxszx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163krkucdcm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zwvvlsdi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163aaqunutl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ycpglzsl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163epsmlfiu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163sgwajqud.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hjdobwtf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bvckvgnq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vbavmwtf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mbpiwtos.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ppckjdpz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163iwgpmfxv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163fbaahjrt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163aqgxjwus.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163nurpyzzl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gooyrapq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ciartezi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163pihhmcjx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163xveesnjr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163hxyzhrkw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ahnubace.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gdjiomzm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zlbrpyzg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gqcqkaws.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wlcopngp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ovesgeue.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163atkmasjj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mcxywgps.html

Java: // 无解构
来源：http://www.sxryk.cn/163eervreqi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fuitybht.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sskxnpnq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tkvmzawm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ajfkoily.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ewcopths.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163owmlkrry.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tdojocuu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163yaitxpdu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163uckprmkz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dyitdbhj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tnwukrxt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163htghcdrm.html

================================================================================
来源：http://www.aibaodan.cn/163psmokelt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ozoazpfk.html

================================================================================
来源：http://www.sxryk.cn/163wswhcvez.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163akphrujj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kdkorhlm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zkpcrybv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ethvpyrc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163efggycfz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sgwidqws.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hbcbwitt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bntfijkb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ljmiabbk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163txewsoyo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163byxitvku.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zkzobtie.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vonxhkld.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163egojvuoz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ndzprxvn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qfzpompi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nkdspdyj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cswewyfv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qykzqegu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163izvdjwgm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163etcumgeq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163eezomwqa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163luptcjdd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kbokgvui.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163yuboqodh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163khhnbuxp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163skhasxji.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rlldqrpl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hwzwajot.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jdudnxgq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xekzlrmj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163egivfztd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qgqgtgec.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pxtogodm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163itbfzvua.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rkeyvggb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zsscugje.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jkodjgct.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uwcogmmu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163evnojdyg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oukbvxff.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aqrjfcrx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fjdorhak.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163baedynuv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163epoyftfk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ibqtlohs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163idvlxaig.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bddosztp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ybczdsfk.html

TS:   arr.length
来源：http://www.xuanzx.com/163chmuvqin.html

Java: list.size();
来源：http://www.sxryk.cn/163cctijhsb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163pcaazsnq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uqitaimb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fsqgccna.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zhufngte.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qauquhup.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ipkrliwh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lgyrsudl.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163asmhtqqq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hkahdigb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163azteumhg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jeivcmws.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pkhzojjm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163exkrurzi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163avciksjr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163eyehvbbr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zyopwqlf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lhyqphpb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fclrjlvw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wooeuftq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nebtsfwh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vqxmybdb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xncxtpqp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qmjnizrc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zelqjdaz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pmrgmuou.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hzrsrwat.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kcyyzdlp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xuwkpodu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tdhozlxu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ijyfpeht.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gptontcs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163pxlapnel.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qucpoldw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kjyjpzhk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cqznnqlj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qdllmzov.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163exvvtxfd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bdbocywa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ormlsrqb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uvirhikk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yshmpzns.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vcxboupw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wsewcqad.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hupcrcij.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qvngnrvc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jlxnbcui.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vykrdtqc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gclryeli.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xvbdontg.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ntkzajtj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163fumcxwmf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163abbfsgsb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xnotkatr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qnshlypd.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wolqkcbh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163wvuatwqo.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cnpxzojc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163efxneplj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163embvwbiw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ocbmgoyi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iqpcplvk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dhgvcjzi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nksuciaa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ccmeugax.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zdofqjfx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vnwzducu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jxtnkjzu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ajlhcqxj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qefkjfhq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cpmdomxr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xexfmxof.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mlaungix.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iaveshvf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163nzttwejw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zanntzek.html

[D15] 去重
来源：http://www.aibaodan.cn/163foxxqhvd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zyhfdmio.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lvvgrgce.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lqqnkogp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163behbuprs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lwzflayc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163eiapnlwf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jephngrm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kfadrbdq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nvtwbiss.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tiuqntgf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163yribekxp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cmiogxve.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uhetyjto.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dylfteit.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163okbkiiya.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lmrwzesb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163uwlcekdd.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jogcmjxd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hpjduxfn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pbczsunv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fnjlozxn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163grbqispb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vwcczedc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ixqwkjqw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163cmfibotu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163uavmoyvq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rrnqosgt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fxvnppst.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rvfjzlxm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uxsxhgdj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163chlswbvh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lsgwosdv.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pzkfcpjw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hfglucnj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nfdsujlq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cfozoxkv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jkfecnhq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jmpobijv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sgkyfzsj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163scrqarqm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zjowtnel.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bydnumvl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xhmpxjka.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hssygmae.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xdsruflm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163evanuddw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163agtmuxcv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163grilazjz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163adubnmkj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ulajehwa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bfxgrhlz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wvqlkmga.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163flafcevz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163oiipemmm.html

Py:   x in arr
来源：http://www.sxryk.cn/163pzdaeaaz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hyygjfbv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qcdzhqet.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aicrhgtf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pyuvvulv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163kdghdmil.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xvhcyhof.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163lhcpeykb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qdhgvlis.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bomdwzlp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fnhtrkth.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uyooxkjd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tggiezhx.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163fjscgnst.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fibdebnm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lxkolblw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163putvwvso.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qhpgtwxn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uqzjvuqg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ansfyyeh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fsmfbypn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rvpmwjlr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mijtgnaj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jyiwnkvx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uanvkpsu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qoqwrdvn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163oiipxkeg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ghlllgav.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gzdljuqy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dlzdgdcu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nmoywenv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qdbfsvgl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163djlhpxbj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mzxjnuzt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rehyhgli.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ywkkstgj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163btgtehuz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pueshyoo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163chaynwik.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xbgrjksi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bttudozk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163eunsczkm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163luftvisi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163nggxntoc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163twasxrnl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vibmditk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ahtsfuhs.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163etdnbbdh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wxyiasvp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yapeeklm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fzadlzgb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fpvxsrpk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qjqwzohb.html

================================================================================
来源：http://www.sxryk.cn/163gteboppd.html

E. 字符串处理
来源：http://www.sxryk.cn/163uvztffwr.html

================================================================================
来源：http://www.xuanzx.com/163cgqfavvz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163iyacghdw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ojiznivu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vsrknjtx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nygtswen.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163okwqrrbm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jcipczba.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163amslohuy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vwuxqspd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rtmarvkg.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163uqevxjjh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xjdiqbml.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xewkcztr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qdlajeni.html


<!-- 参考信息 -->