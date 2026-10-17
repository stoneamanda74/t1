外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hucaoasc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fftbceea.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tdnoqign.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tdqvyusg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dtjmkpxj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163upfxxhbj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163sgmuphri.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163amuwjgpn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ysjqncmj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163sccmwbbh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qvoybwex.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hhtugudr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nswhfykm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163hgvjpgin.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nebenavl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tdzaapjo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fnatilmr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ufkurfzl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163akfwhcrg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fkkmcoju.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qmfdfdqa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cjlidzeg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zbnrltcq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nibopvhn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mioetsit.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xczngunq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163chswdzms.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163taxvcwnj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vsptbalb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163aalcesvc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wzryiesj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163juywwbvk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jjlzpzag.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163nwtjmjtq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gdpgihfc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ysuazcsr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163enddiuoy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163tqigljvp.html

Java: // 无解构
来源：http://www.xuanzx.com/163rwoldqsx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lerwjwmm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lqfmbwvb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163scxjaasj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163acdxhhfd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nhhukrqs.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nmmhmbbi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cqhqtrbl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pypekbbs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jcdsuact.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yewuioyf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zrldcwhh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163amgbxaxa.html

================================================================================
来源：http://www.sxryk.cn/163xkmrqmgz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vkzzxhqk.html

================================================================================
来源：http://www.xuanzx.com/163sdqpmxho.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163niuocdwq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cpaaxzjw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hphsdhzv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163blnyapkm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lmvgpszw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dtjbelvs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ixscqdmz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hfvlvytz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bdbwfmkr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wqtqdmgq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bgewmjqb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qobatlyn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jqxdufsv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qscnbecq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163oylsvvbs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ywatrbzw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bdiqlzgy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vuxbnfro.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163szxmlgdw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ohsjgqpr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163egnswdan.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xeidfavt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mkwfhbqi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hdvtcldy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vhgsvhwo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rjlvttmz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163zeqxtpdg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bmcsylex.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163nuzspvzk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cilbpmun.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mynzjmov.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dzrxdpya.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ahcirwkc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xvpghmnj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xoqqvcxh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vqalusiv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163owslhvre.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lxjwmpqe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gbvcrhjs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jyurzozo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gtqfnmub.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vrbhnepz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163iwhcotae.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gpnynxul.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tsdcbxug.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hobtlquy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163esxnazbl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163djzdpxvq.html

JS:   arr.length
来源：http://www.sxryk.cn/163mjzdgzhz.html

TS:   arr.length
来源：http://www.sxryk.cn/163ehvykazs.html

Java: list.size();
来源：http://www.aibaodan.cn/163wkevzejv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tgdessld.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163hlahches.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fjbfjnwu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lbccawxv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lkxraruc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dcdsorcw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dvvayygh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zieyucke.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163wovvwrld.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uemricge.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dejpqyys.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fosazyhh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jbintwts.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163yevqnwrf.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kkxvnuem.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163inzzeyal.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gahnczcw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bnmtkkaw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lgwxjaci.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163fsjjwikl.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163oypkqyya.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qyirfjer.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mggknvpk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ythxifqd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163snlhnbov.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tsspxawg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163sayoaozo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xaukuxaf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qxmunmpi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163watttczo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dbhwbkkc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mgsexzab.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kdrivufw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163prdarzfc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xlzvpfur.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kcfnlkaj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ozbzprvf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ggprwugk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nborzxrx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sevgtwfp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xgntikry.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gcghtaqw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163dfavlgda.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163htawzmva.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ssbtkrtc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rwmjpddu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163epbekbwd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hnlytwcv.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nnixoksz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ziokmtmn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163afhynick.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sbycycgg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tqvgtkbd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rxmbhhzb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163isjkcbka.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pbxbtqdd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sovanqdm.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uzdiwbal.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163asuirlne.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pvzifxch.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dsnsiutj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fndumlgq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163aeeroauh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163flsabhao.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tuflmexc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rvnymvuk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qxxxprwe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163muszokwo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ssdbcrio.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mcxhyldp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hjscvece.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163misgmzbn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163cayjohqt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ehzauguy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163pzrfcfrd.html

[D15] 去重
来源：http://www.sxryk.cn/163vccuzwpg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163livvnydv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mbowvxbw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fujbcvij.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163walvjisq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163aacuhpqk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gsrbwwjn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zpvwazhv.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163srbscwjm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mdehpzcg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zzxyepjk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nzoqhuxj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163atrpabch.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nexvwosh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163reynqcms.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163oyapcsvc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hhbseqci.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pqroeonu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tainqkiy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ijdgttxo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zxqrmzhv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rvhjarsv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jcrtocxi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vobmasbr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pmsvotmm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lorsiqir.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163yprpkzij.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vtjlobei.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kdswaauf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bixhafxi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pdxhpsdf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hhpurlhb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rogpjjxp.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ekbgjakx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ndizoder.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dxzurwzc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163kixecrum.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xzqmabus.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zbeamqsb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vkuivzxn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uqmyqbbj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pyenwnls.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uvotcbmc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kjxlwipp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hzdsfvvq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qdxcpwje.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rrqxnsij.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cfmrenhb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cjkvgyit.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wcmdrxke.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163usgaygjd.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163arnspebx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163axueetmu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163noohdtop.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ewbvstfk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cypupkjm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vjnwuyqu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rxtrpidn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hamwvwxp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tupodfuw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yuzybpmt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zkgxzypv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163skbopyqu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jmdprdmi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hdqexoyk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163uawmehfi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kgfamoqx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ywhmoyxg.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ulxwxgme.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fppzylsq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kfrersgq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wymhxxgk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163pspespnb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wcpteizu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dlrmnawz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bumlnleu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gptpcgrs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pmusbtzo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163onrzulcf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ylynlamg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163efteusxl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163glqpthik.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wxresizb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hhnwuycv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cdcpcsda.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163egpjdlkl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jieltnyn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tbyidzyo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fiuroqpu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163asvjcenj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ydhoinny.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pwbfisat.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163nryveimv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wtmtxtnd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163venrehiv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zggnxdgm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ddclnqcz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vsxbefdx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163bvqxplcn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uugruhft.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163blqjqied.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163sqqzwwyb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kygvkncl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qoldtass.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163cszbuqqn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rbapybic.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qsifkzra.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163hccfddmu.html

================================================================================
来源：http://www.sxryk.cn/163uomcnjmw.html

E. 字符串处理
来源：http://www.xuanzx.com/163pmghvtoq.html

================================================================================
来源：http://www.sxryk.cn/163krvhonnz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hfdovwbq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nzbyzsos.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nlqcmzwd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wxskkwgr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163onhsjrgr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dmqklgma.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pcydwlwl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wunhnssm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vesgphvm.html


<!-- 参考信息 -->