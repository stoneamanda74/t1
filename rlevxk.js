外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163raselzal.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zmdhwzth.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kmmfkqmy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wbloavsl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ojpukorw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ijqxtfdi.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rhjnerqg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163fbdxfppl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163pisfohtr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ftzlinvo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xgfrsgfn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ptfouxxx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163trmtbshu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163izijyndv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pepkjfmm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cpkowspq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fsvorwni.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tunoerps.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163unbpqjpp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tvmrzmkm.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163fzmkqpzb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ecwjfizf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rvhipyow.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ydshwmte.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bxmrebsr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zxhflebb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dxypjloe.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hbrryxty.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nqbcczhy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qzxtooyt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jubmcrgh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jazjvngf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zojlsbzi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ubwtglwo.html

Java: // 无解构
来源：http://www.sxryk.cn/163futxrbwg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lfmqmjzu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fywitufq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wvurhbrc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lgthlghs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163bghznphu.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qosmndfa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wzgoltxj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qeagasck.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ldvulxfp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163qwjnfmrx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zfjekjtj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mqekhpum.html

================================================================================
来源：http://www.sxryk.cn/163yqfplnky.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vvwcnkbf.html

================================================================================
来源：http://www.aibaodan.cn/163qmrlhdkj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163chosycft.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163agcelest.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163alxskwcl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hhzddalh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163avldhcdm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bdzcrird.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eoenzzrp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163devphycu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163isokyzmb.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wqhwvrwx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dldznzqy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163oynzsirv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ewhvqauu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jklqcdze.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xlnphshf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zonjqetq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dvppdmhj.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163hnmmtkej.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163etamstrs.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163suihrhnd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163sfmzsjjh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163trdoetfs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163blrbncsg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163eovxokgv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kuaxsdmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gkgolhvm.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163plsjwene.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xriadurf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163slhtfixf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wudybivp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mkiudbwe.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163iiygrikc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lpzyxhjb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163thltpwby.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gldsoote.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163latwyuvg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rrljotjs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163btqavhpb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fuuqzdxz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163aroqiayx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jsjzefav.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zffsvcdo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163hvtssqwp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ckdecnaw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tebglwfy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ihsnhvzl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xwnqvjav.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zrzesvhd.html

JS:   arr.length
来源：http://www.xuanzx.com/163oxqyquad.html

TS:   arr.length
来源：http://www.sxryk.cn/163zxxyzwtp.html

Java: list.size();
来源：http://www.aibaodan.cn/163ggqjjtxn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163svggrszb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nbvaqyez.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mgnqtfaw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ulutrtox.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163enhgvwgd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kreobopj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mhcwbiqm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cpabnhyf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xvkfbfcg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yulvfplg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ulycunzi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163adlkajaq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163akwcrbch.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mlitjsbc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wnviocer.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163chmvwkpt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163otfkvxpg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lyynpkmg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163dlewwknk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163djoltfny.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wrwysgxk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163dbjvkibd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kdgwfuhd.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gdykixoo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163uilbnkuy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jnmcctyx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jyduspgo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jmoejayn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wgszbqqp.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163zfvnhicp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ckvscxpc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163cuxtlbfb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163slwapuuj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163whpvkihm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vpovrwcm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xowumpps.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jasrirlh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mplfckxz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vxhmgmpg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ijmnbdba.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163tmunquzt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hzopcprg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163envukitt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163pfvzggef.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qcjxpadc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163stvqclka.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ixobtthn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163eqzaiqtk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163dnvexjsj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rlfnifzj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ecqlhlfj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xglkrcmc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yrplsgmm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yvgjcvlg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wbjnmthu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ozdkxseq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kiyzjlvw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jjzljnre.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ccpfgciu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163snvtyhtb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hjjxivfv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kgpxdsms.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163iomtvwgs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163akiuxfqa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163abkbyakc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pcgytmyp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163uocumrwk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nisfewgi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163flylaxcd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sberikny.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iyvoaghv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jwmoziqd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zldescrh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kgvdqxuj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bezwgvfb.html

[D15] 去重
来源：http://www.sxryk.cn/163ybbnjdgd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yiqamofb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163onsppvxj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rvkcetot.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gqqixocz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jrbwdxtl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163widoajzg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cbulgeng.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ntrjoard.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fikpoisk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hepxibas.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dccgxpac.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mdpfjdws.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hrcyinwt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cgaispdj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gytfmxbt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fzhnrjqd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163czwbzkxq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uexlcpxa.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qnfngbpt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ihwltppr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pzoycuci.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wnjmfmrs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163grleejxd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jxnqeesr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wykjmydg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163grbpxetf.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163bsyzrhwo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wxyrcgth.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ortsoots.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163udoanihd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ebpmcbln.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ekjdqlzm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pwkltrbc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kjvxasih.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pxxjkzmu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rjzqepcl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fusqgzkx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wybysxeo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163onsafsba.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sdotylal.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163npjxcagd.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163taafoowu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163raqqenpv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jvdfnsgu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kowxxjcb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bxvgsjzt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163trusyomh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hedlnqpf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pminhdgv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fzeknnkf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ionirpls.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163fkrmsmmx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163bnwfacwl.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lmrdjlbq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163invydjhw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163sohfieql.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163oinnfovz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nucoxibo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uajrnrrj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163bwazcyyi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qdduttgi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163chscbtjs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hgprapcg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163psxixbyh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cofjxktf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mdxwsika.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xqdvskij.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rcjzsqop.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rowmrbdu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bmogqzrl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163epcjvyno.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163edaskfxy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hjvfqazu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rekvupma.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vgfzewgy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bdfgnhem.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163eukcvfqe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163upmdhvcj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fiwizzch.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vpubkuke.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163szwfkbvt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163bsbijnrt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cqrhsged.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163pjhodzyv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ytybjawo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163albnxqrn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ssujpoyk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163flurqonl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163orwvxjqm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163caowlmii.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163cocpsbaw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mmevhqnl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tfqasjdr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gmmxegmr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mjacmodt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163isfjmznq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jipfafct.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163oknabeyo.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163segqnchh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lgbwzrfg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kkekahtp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uguaxsub.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163apzkcfkk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wuwwyaoj.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163boaqkqvp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xqfpdufc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vpimgibw.html

================================================================================
来源：http://www.aibaodan.cn/163wjnerbhz.html

E. 字符串处理
来源：http://www.sxryk.cn/163slrgdjrk.html

================================================================================
来源：http://www.xuanzx.com/163temhqyfi.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163opvywnrf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mthwghqq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163pcpujdlj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163licbmsvr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163igftoadn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jigtvngj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fevkfrcl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ngnfuewx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ilvrnoex.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qotqzvuw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163smsobuic.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163aerrjmci.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fdmgtcnl.html


<!-- 参考信息 -->