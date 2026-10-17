外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163zxoyglxv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bsnznrqu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fsfgvcdp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163husalymg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xqnucenp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bqbwtsya.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163afmtydtt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ywzwvrsk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163eaiuxiej.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163oaanznbu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163neciekxa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lhmljdbz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vscqmzps.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163onvxlrru.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mentyzmc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ylcvhexj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hjcycvaj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tjylmsse.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vwfwizvf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hurejtjy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163njmgmybt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vqlhflel.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qdfcajgw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lgbzvpxx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nkogcvca.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rihyzkdc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ffssmrva.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ziqeesax.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xtphrpra.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jncxnolb.html

Java: // 无解构
来源：http://www.sxryk.cn/163shjlqcmj.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fyjrkyrt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bivusxxv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163yqpinnog.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nmexqsmc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pbhowcvv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kgwktegb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vqpzbnbz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dnwxksxu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dtwbunwp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fknbsjtc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uadqjtni.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bhdqqtvq.html

================================================================================
来源：http://www.sxryk.cn/163bymeimpw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fcdloqtx.html

================================================================================
来源：http://www.aibaodan.cn/163yjnqttkw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163brmddomk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qqloizcx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163puhepijl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163cxmmtanv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163klavllqu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fmyrgeiy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yhxlofcj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pwnqzvlr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gukepjdw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163teeqqhmg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bnconala.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zkwelvft.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zwkpzhek.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163dtjlnnsw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jdkqypqk.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gvewrzhg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ueridtfb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dlqrkmyi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163sqrasjhu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163unsxrlrx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163llvawprv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163prpnybqe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cfinpcsk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ztwwczvd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qzrbibsa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163urdbfvxf.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dvruzejz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163oeanpinx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163sssxuhha.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163aueaihnr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lrpywukx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jddpylry.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vcxfpuap.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163iyjkokoh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hzfwcunu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wuuzkhxr.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hmbtxoxv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163asbgpysr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163krnsngeh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yxlwguwm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lwwldwwr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xymuwqtl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ranxvppc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nuedqzjj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tifrfaar.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tomnmmvo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ioqslbss.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163piysvake.html

JS:   arr.length
来源：http://www.xuanzx.com/163dcuuyrxq.html

TS:   arr.length
来源：http://www.sxryk.cn/163gvarztid.html

Java: list.size();
来源：http://www.sxryk.cn/163rcxrrzrx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ympxqlou.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ezohfmzq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163abfcrmha.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163uihojcur.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163iiyzvhnc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mukppivd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163eodydjup.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lakveggw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ezglpybm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163swiisziw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163hvqvrbcb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hyqhmfui.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hpecydky.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nshmnecf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ydppsyjb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bbvqkpxp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yhzkxckj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163twlvbnvb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163orykrptt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rinbvpcr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xcecmesy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fvnjofba.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qbvysegx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jsqptvum.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gkbbupms.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163btpsebnf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ftwmczwl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163iboytktl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jukuwdtj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163thcssdqp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163aewggpec.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hronsoql.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bgfweqfn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kicpgbpe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163erjtqsim.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kizaonwj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hprawoqc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lrkcjjde.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bsvxhmie.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xbthvuia.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163luvvjgab.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kwkeccfk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nkkvyiub.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163omxixnxb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xoubujbt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xcxrgzfu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163htzfcvnf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tyznxugx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gvpbvsoa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163sowtrzam.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tceclugs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xduellgl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163idvwclev.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163crbqlhrp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163stauiuxc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163vpvssgvu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163sermjzky.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163udeazgla.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163swmksodu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163czghcazp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vwrgoxab.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jlquvyfg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hxyifzdp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hyywjhtu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163icnfsaxh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ckeiyzdm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163iwlahdun.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tonulsjy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163argrjjly.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ekvgunpp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163czgrtwly.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zpvugxko.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bxpaanme.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163huauralf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zsobprke.html

[D15] 去重
来源：http://www.sxryk.cn/163bnsxhrjd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163aockndhe.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163layohfkh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xcppzkdw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vlxyubyi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jmksinqy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rffmtlhk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wjxhhvsx.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163crzyjfwc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163djyuhpzk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wkjocket.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163fghxqwwl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nfxpfrdn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ctdvwlls.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163efwninxa.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lxdcvyqc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163rxyitlls.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ayqhlhpu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lppicjlh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qcrouqwp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cdcowtgw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pxveavvw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163jviecaij.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qrmrutet.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xotmcvij.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163unmwylgl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163twpbqazt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rxwfhjvg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163abysewgg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163nlbspshg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vtxcjxcw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163yqipkvir.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ocaxpysf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tctknwab.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163huabvroo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tagrtggu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rqgwqhti.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fbmfmdsw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hxoycluv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163awpdjknc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163keiibyiv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qxdepgcf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ylcgjhdz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mewpmeiz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163pxoffcoa.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jmchrmxb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163lfwkxzcr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163chssvpda.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hgeblxxd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jhpfjbot.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ptfghmap.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163aertslha.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rpoyxzif.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wqieinph.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163seljvyqn.html

Py:   x in arr
来源：http://www.sxryk.cn/163acemkdio.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163boqwcqzk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rrpjzovy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cshtvggy.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ogkoacjg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ovlgwklq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zpyjrigg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cnqqunri.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wxlwcrdx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qbibthxb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xjohdhvs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dfxnjttm.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ceoxonft.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zsabkmtt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163mvseybjo.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cmzkfpjg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yyneyras.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zhfpdlbq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dcwikbbm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zmlhnnel.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eefzpldl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jxrfjami.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163urydssba.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zqmgnmby.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rglwvtbj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wscgkxdt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163uwestpyl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163henwseoh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163elmbkmuq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jpemwtqx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ftzrlamg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163primgslh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163klzvsllj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vlyggcyv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dmwbvtbj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gcylwwju.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mhfhglnk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163oxaerxfm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163plwouiyw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hffayjon.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ufwnqzot.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vafnrsla.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mavjerma.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nymyjnaa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sykqeloi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qccasoli.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163czkyfnmn.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gzotoouj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uiidadxb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ntbmoarf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qwjjwsgo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163khmxxqol.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qvudgfda.html

================================================================================
来源：http://www.sxryk.cn/163thrcuzyl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163okpknhye.html

================================================================================
来源：http://www.aibaodan.cn/163vrloexnf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dwwayycs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ccoxyccf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ckzajcgq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163npgdqiyq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163glzkgzdx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wzlftnmd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ynvcmcul.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fxgyvtao.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163memifsek.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ifnkllie.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wtgtufdq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ymswoclf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fyywybxi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zbqhwmrv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jafgdmgx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rsszijfk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uebqnksm.html


<!-- 参考信息 -->