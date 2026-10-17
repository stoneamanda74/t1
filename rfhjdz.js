外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163txfbwdqa.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ssnezkba.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hoeycwoc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163arpxcpgb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qzvzuipg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163pqxjtuxz.html

[C08] 闭包
来源：http://www.xuanzx.com/163orhukwgs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vsitkoph.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163cfkatrwp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hzifzhpg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ocndeqop.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cpkvgogu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jpxcfftg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ewkcvbvk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jfdvldby.html

[C09] 递归
来源：http://www.xuanzx.com/163nwjqlwkf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ikuxsnxa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wixgmaps.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gsxeiaeg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cnyouxxa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hckzzije.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xlkydwdm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wcwmriwu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ilwjfggq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cnrcdlqb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gxmgjpex.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fcmgsdcb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163thlcrdxu.html

TS:   同 JS
来源：http://www.sxryk.cn/163zbkzqxnd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vxhchmif.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zsnbcoyt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sblfbodc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163iyixtgfd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163osutgfna.html

Py:   from module import func
来源：http://www.xuanzx.com/163kdycnpxn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ymkllghv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qggzqprj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rajwzlin.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163wbdmolgh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163soklmqix.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qyclpuun.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163syxxazaw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uobyjhcc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pvxixnfs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163sjnlnnfj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hdwbgrmr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ludftnjw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kulcurby.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cnhyavjd.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vanylqfn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ocdlrxlv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163igxauctx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hafzdjql.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gidmcyzz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ysmjtqzn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mahlryyo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nvykqabn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mgevhhlk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ompwxcon.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163verqlwbj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163uznnnzbl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163maccmalv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163edyvhbdr.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fgnryapg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163enwiiyyj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jljtfhvp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zmvqlfrz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ofrhcfuo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163pwtgggie.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163sqftxmdr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163saulfzis.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rywehtkj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pmxsgxax.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163cinyigxu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ktpxacmv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163eualswjr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yevbailt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163oerykwiv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hqblupuo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tthzkwxo.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jtlhjzgy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cpvtutuj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fdgghczq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sqtyvltq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163slxpscuz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163guaixrep.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163obpwvltc.html

================================================================================
来源：http://www.aibaodan.cn/163zrzclhsb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kddcntvw.html

================================================================================
来源：http://www.aibaodan.cn/163ekjvkrka.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zpyxsjqg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xutmqhpr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jmzlpfgh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zsnwfhhi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yoagabut.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fvjnuvho.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ktvhftaq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zpmomfxo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ipetvcuj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163trrhmach.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wwzveczr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ktaprjml.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dwblhese.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rtexzzxz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xjvjytpb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zlinstgp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163aravlrua.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dbqvzwce.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xslbzdii.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zlbykioo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163myflvalc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ervtwscy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nnehooge.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163idmngmuc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cmpbscrg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163oyrkqsfj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wquzzamz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mupjheac.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ydjjogyh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fkofybaq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ftregtfm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rirqiple.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163utzagkat.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tfhcwlya.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163stqjfynj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pmfzdrou.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163sckwfuqh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xaqwsidy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hrgmvthb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163slamheop.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jszbibcq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pmmtqlmt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ykifgwaz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sjolzzbs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xejxbpfp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xlvyssod.html

Py:   len(arr)
来源：http://www.sxryk.cn/163faodckji.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vzllogro.html

JS:   arr.length
来源：http://www.xuanzx.com/163xmzdjfuw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lundyiab.html

Java: list.size();
来源：http://www.aibaodan.cn/163wpgycvxg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ffmkpuir.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ivtjposg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ijqzwanf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ccgrzisl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jmitwrmz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163odziapsa.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bncbaomc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lruxiolz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gusoeaze.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tmimxpql.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wnvtkvki.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163inzhmgxs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vktxindj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gjbagckm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wypcdfml.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gbtvnmcm.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163paocbyag.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zcormicl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ulgpkiso.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163rzvejtei.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qdxjggym.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163iammfnhw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nlxgkimo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fgkqjumw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dlytrmta.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163raywjehw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tttqzxxg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163clgaplke.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yefbybtn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cyivxtgk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mitqpilx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163awjmtscy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lxcniosk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163usqdhmrl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mbwbpbkc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ssmmoibk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163medzpilk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163budkzivi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vsaswgfi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jywfiool.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163exvwvyjp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fhcjigza.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zlhxjftp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gvplmemd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163euqjcoco.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163dmypwico.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bgqnbfpx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wsvycrzt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cdofxsti.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tcmbskez.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163eoszneep.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ydegcpyy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ktzdirsd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uqrzdisb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163reaozodd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163egnqdwjv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fnpxuwfr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wywmfnhm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vegeogmn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ijqawghf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rlpuhnpp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ytftvxwy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lrjecejt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163emwrpzzs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163sysydtrd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163sqxjjemu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hwklddcn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163fubpedbq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hbkvnnzt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ppowycob.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wqcsvuqk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vqwruvxd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uuzzvxsm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vlxuaslo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bgcjfulm.html

[D15] 去重
来源：http://www.sxryk.cn/163krcjyqsd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163aajxjybr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mhnxetbx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sxilwxra.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kwzfjxjz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wsesdbya.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163eispbaod.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163meghawqq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pkhouejg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163depdgmfm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qoqzrjyj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cbkpolol.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gbslgxmy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gniskqtz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bikhlfnf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rejjqtba.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sjrbstyz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jdpoyxrt.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kxrwfjrl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rnjsoyyp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163crwykads.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xupjbbcu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gmlunhke.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iqfbrymc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163egzvlqjg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vqlvzdus.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vyxbdkji.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163svwxpyih.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jgkwyogw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163tbcglyyu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qbudyvtz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163aaunhwbv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163osrnhisv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163owmtthqn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bkpfmnoq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gfbtzuzj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163erhconqd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163auvakswo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kmnveeqw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sxipmaxz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pkaeuwpe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ypqstbme.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uujdfcvp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mgancbis.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cpbkikps.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163epmvfngp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163broedtgi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163forxbucm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wrzxdlhn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aqqnqlcc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qraahwsx.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163lbnlrpum.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xmphwgel.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163doecjgea.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163knllmomm.html

Py:   x in arr
来源：http://www.xuanzx.com/163jhzhxgou.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bhhzktaf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163efstofzh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vgyczuox.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163treqhlyx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cjcllcea.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163inpswrdv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vkfuvbbn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tuuwaiwq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zpykbtww.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163agggoiye.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ictnlcof.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hrtveagd.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vdiijsgg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163oqcdjbpf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pbwqjdbr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yzvjyhle.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dnnrlntk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uibxhmpp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163duvhczhw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ovwnmdnc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163exlvvfok.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gxfnlphc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jnxgyvat.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qzvfrvag.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163orfneyzq.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163nrspdobz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rihxysvw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rmezrcub.html


<!-- 参考信息 -->