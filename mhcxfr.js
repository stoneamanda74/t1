外链999!wailian999！

C#:   块级作用域
来源：http://www.aibaodan.cn/163fijwlfch.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qailuxoe.html

Py:   from module import func
来源：http://www.xuanzx.com/163tcuccdlz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163inbufcop.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163aeofpbti.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kmnhshht.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dyygarhq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163alpjjmvs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jbivhyfw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qkpaeiwx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vbcoibso.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163gxotgrdg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lwcmybww.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zwmiykod.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163levycugp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163senbahie.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163onpvivti.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xdugdnbz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ivvnmgso.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163whpwcbxn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zaesuzpy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jhfwfhdt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qiiilzun.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163amyhxwhd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163snvfuztj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ogqpkcfq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bschxzfc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wzcxvqiv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163udapymxi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163sipacnfi.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xnuliwxh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qzmdolxb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mnhuclbs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xyoasmph.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fwcbdruj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vbcqajaz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xkwjupfb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pyyjkwqy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bwpslqpx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jartjehr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nupshbmc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tjmpdygg.html

Java: // 无解构
来源：http://www.sxryk.cn/163pquuyuct.html

Go:   // 无解构
来源：http://www.sxryk.cn/163sebvsuit.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qfofuoqc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qbmhngjz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163bwrljyay.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kfcmcyar.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fvegmdyt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lbwypmgw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163indkndeb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163omnqyesx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163odqucdyi.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zptyzwmd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rdflydki.html

================================================================================
来源：http://www.aibaodan.cn/163bouvatav.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163sxzayfjv.html

================================================================================
来源：http://www.xuanzx.com/163azjisfyt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ebgibpro.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163aqyrstsv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lbotfhxu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163elucutnw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wyzbqqbp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163npkyvrbv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163nkjrybzu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bmxepvly.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163afwgavqj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jptwprrp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tkrjaswj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163fuvxzgnd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163elfyogrk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hyemsukr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xrpqeuvp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sfaqqzwj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yeyewckr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vbenndlr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163uwebzcmj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vusjymbm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zflvgxnv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ujhotfaw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163uvfydexw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wykejgfa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hlzqojzt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pkkiawqp.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163oeqvbymn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fvyeelqk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mvbgzscv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rqceqguj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163pjpwzocp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tzitaczd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fckmmzqr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dxshqwiq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163eyzotucc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jslsmnll.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nshmaefx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163znbayarw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163dqeutzmu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pbjgnvxj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163csnyptgl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mskcyzsb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tfnnkqdr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tjirsryv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gaeywtvg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163enbblpww.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qjfobzlw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163addlixuq.html

JS:   arr.length
来源：http://www.sxryk.cn/163njmswrdh.html

TS:   arr.length
来源：http://www.xuanzx.com/163mjexpoti.html

Java: list.size();
来源：http://www.sxryk.cn/163aokejvfk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163zqkigfqh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163amhnrcfh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163yzudukkt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xoaiazdi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fnrrsoux.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ykixeslt.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163upbetzkd.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ceuzvdwb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163klihlfyu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kklnubae.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163clnhfzue.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yajjachc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rtlqfonp.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yilmvmsj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xonfdjnu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kdipocpe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163izcrbayj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163chhihbfb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163sckduaqf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ahjjmtkv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163budljlqp.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rgfzsoaa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sbqtpawf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163iqlduyge.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qnhnbbwf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qshufwvo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jqsmgare.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wdwlqsxc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hcgffjbx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163agmfitsr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wlkbebjd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163aymiijpj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kzcdundf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163okcbativ.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uswkynzk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cfpbvsem.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ksbxlase.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fekjidfz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fllmefka.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xyrclhqz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gwksnfbt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ylucqlln.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fvljurru.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lavrpyxf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163saukbkyi.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163thodgpkj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qaaltlkd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ymebilmz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vtmqgfsl.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pgydxsxu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hhdbtsus.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ayoogbkv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163luyrruui.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163edxhrwcj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lgksujro.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yxmmsgak.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163lufqxmia.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163prsardow.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163axerbzyj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kzekkolc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163egpcjisl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xygjonsx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cnyaidjv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163avfdtcoq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lqbxitlw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qyneqmbk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vpcqwbul.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rctakyik.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163besbfped.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163viiemcjh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163voomltln.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sptqgyhp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zpvtyvzt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hosiskzm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mpvglicl.html

[D15] 去重
来源：http://www.sxryk.cn/163ilaoxdyb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nhsgvwea.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163azzqwylx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wwbnfkwo.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hnxtwwlj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nwbbnwby.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163anwlqcjz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qcxflbyj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163roirfaix.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pmkxsgdm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mvfxuoas.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163uucqvzpw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163algoyndt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vjqrwinm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ddmqtwbq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163foylsvtt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jzibpgdm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gnhxjmxs.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uvfexjan.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tewphajn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jbrrkjyh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163leggclug.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163pbkgueya.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hyphifxi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ilfkovjk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yjubutvr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dapcayjy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xqfxjiru.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jpykftlk.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lnpbxhbk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rohxkjaq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rsquuqty.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mgkzcdla.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ynhbowef.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163sduovfkh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ikfniayj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bhcenqzw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iksllozr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163slhfxgsc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qivvjeep.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tjvmwxrr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zlhuwyef.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bqoupixz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ynurkqmw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lbroelwk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dmvotlgd.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rznlgucy.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163eizzznzy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eblvtcpn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rhdaqtib.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dzdtenah.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ihlvspsz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ockzdfza.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mowziqqd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nnpeepmw.html

Py:   x in arr
来源：http://www.xuanzx.com/163jnhyshma.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jmcwwfjv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vwnlqjnq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xzwescrh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163airevbyg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pqgdufsf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163otmvggnf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163abqwlfdy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163byeurwyf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ausshngb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163brtchnyo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163oafzgyee.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163konjicqk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gaoseewf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163slmpofke.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nxpjcodc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ibbskbhx.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wxwlsbpn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jmknggpv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qitfhzlq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sjtgbegw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zybhwhgw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rqqjjpvh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zpxtnygb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hqiaaifx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163crrcqiqr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ztojouxd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nkrvmucb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vvasvata.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xqcahzvo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163akwpxhuh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rangavyz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163qnysgbix.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vgtdjdie.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kgluexih.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ofzuhjzw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163cjqmizca.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163suzuetfd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jgbzkpba.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ftdzvoyj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163iaoficub.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xfuzcyec.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nvclujdb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163trgnuiuh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ktfbnqfg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zbnyorjc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163roftastz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kgqlbbyv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sgelqgql.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vmjxctwl.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163wwaflpbi.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mhaqgufz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163rrryilzq.html

================================================================================
来源：http://www.sxryk.cn/163cpsmdmqd.html

E. 字符串处理
来源：http://www.sxryk.cn/163lwhilatx.html

================================================================================
来源：http://www.sxryk.cn/163zxodddwf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163clgkxhyy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163scmhkbhc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163soemyubw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wxbpahrs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cvaklsgk.html


<!-- 参考信息 -->