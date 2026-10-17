外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aojannfx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ebxvdiod.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lxvozsjk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ayeiojcq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163klevmgag.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163emhcdosx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163auhicmpw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zijlrvtk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163atdbrzvb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163knlpopde.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163eqmkmiif.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163abebmaqb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gxktrzeu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163joaautfc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gwgxzafc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ijtxquwo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hhgopgkc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163xeokikha.html

[C08] 闭包
来源：http://www.xuanzx.com/163ynpmzftr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163clsvodtb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vrrezpas.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qydkqnnh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163knutkcnq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163aourmyrj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ltxribqo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gsbbjvla.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bqnjxxat.html

[C09] 递归
来源：http://www.sxryk.cn/163mknugfeb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163aweqitaw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zeaswpww.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rhhxgkme.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163agqlpadd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163djhzaraz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bwltmjcw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lmhbbver.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xlcaxpty.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ctcwdcfq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cxzskkhr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lwxytqma.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xtdnwahh.html

TS:   同 JS
来源：http://www.sxryk.cn/163abhigbmm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jefgvhaj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vyhssoso.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tmjrslci.html

C#:   块级作用域
来源：http://www.sxryk.cn/163opewiurd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163idduyyzu.html

Py:   from module import func
来源：http://www.sxryk.cn/163hqrfrdjy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bfkphxvo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163clwxgrem.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163eiuwjkfq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163aaetsqsf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163txyarszn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163efcwypju.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bzpslpgt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vvzdrpdm.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xmaomduh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163egiykbrj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jgcgbcnp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vomckotv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vluagtlh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xvpcuyja.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163chjvhyyx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qllrujhz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163eyauzmes.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ojmsasub.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fyvkbjxx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163muzrddah.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ffdmohby.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jczzqzna.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cdtnprdm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jmimubul.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xuhghqzp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uqnafgba.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163sdecdfdc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jnlengbw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163umssvqmr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mjxqswjk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163wfibnqdc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wvirypry.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jxrxqqtv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163phoqiwge.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ueqampik.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163beugadwh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tnrbdidp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oowlzcpx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gzyvkdjl.html

Java: // 无解构
来源：http://www.xuanzx.com/163dtfpwakt.html

Go:   // 无解构
来源：http://www.xuanzx.com/163setfnklr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wqkbtxwu.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zgqsdvxk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fqrvuezh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ugtnvbmc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163abkokmiz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cmoeplql.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163iboehvjt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163mnzfcael.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tkdrbfdk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bulpssrr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163qxohdjxd.html

================================================================================
来源：http://www.xuanzx.com/163ebbtsoeg.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bovpdkos.html

================================================================================
来源：http://www.aibaodan.cn/163sjpgsqit.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wpujbfmv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ukmaogwg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mcclcyiw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bncvqwja.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fskyedcf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jdbefjiu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mirobofy.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qkfoptrj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ysrdedwx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163tprnzfte.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xbaemvst.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163adizlavw.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163orbdwxgg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hittelug.html

Java: list.add(4);
来源：http://www.sxryk.cn/163eysenwsm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xypvwwtu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kgcbypli.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ygbbnkcq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eigkzeid.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163fnlftgwk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163etlriiwz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cdtvampr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dcdspbqv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hqtgdcdw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163okjiptuj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jnfmioox.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bhaqvrya.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zdrelggb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lqkxsobr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163iacagpwh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mzojqomw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ewhuelfe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jagbfwlt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fqrtuumv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163swtaeenh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lvnvimcg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163canfdsam.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163akuogomu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wagndetw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kzgjikvr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jvnyjbqg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163iyjcylep.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kiwbijll.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qzmxjjja.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163dojppfwg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tvraumrr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zzfwhhvh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163lbkjltxx.html

JS:   arr.length
来源：http://www.xuanzx.com/163fpcxyumf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163akjrbunx.html

Java: list.size();
来源：http://www.aibaodan.cn/163hidhbqsn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163baqepwqq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163spzsosdf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163nnogyhyt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163okehgiqz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163topzkepy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163frzvuhkw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ygeijtfi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163imulsyek.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163czpjxjle.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vlwqeldg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dbkvzhqo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163srkbjkjo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163uzslgyna.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xyrywfgy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rmuvriop.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bvaulvxs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163psibhult.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nsauweao.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163brdwqyvc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ogubhlyj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ppydnqro.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bpfugxwl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163coeruyff.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qxytcmcp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nwnaxfde.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ddhqswoq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163znwxmzrl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ohmmjsna.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rnsptvxx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cctfzavt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dxpcerxs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163yvojkodt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qwhawdoa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163auwngsmn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vobxunql.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mwxbjvmd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fqnedwss.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vpifzmof.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ousuhdsg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rkrejydb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163plliazyl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163yujvdxzu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ieokqacu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tqewuunn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bekjqtby.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163urmkcupw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163djbeegdg.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rajzfbvx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wyxamqyl.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163avokrjfx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ktbkizlm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vbphxjxv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qnfoxuqn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163txbfzsxk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zldbaeux.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ixgnohtn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dnpbupks.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cxnmmowk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163imvbbskn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rdriqsnn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163msdoaknd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jethkqrd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163psfjqfvc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hubkfprh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163uztzvhap.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zarfgjnf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ibkcakub.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cussulhi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ssahijky.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ablznbdf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rwsvyrqv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163eupoxycg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tycwyleb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hbwbsign.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hloekwqg.html

[D15] 去重
来源：http://www.xuanzx.com/163aclzihzb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gmyaarcd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ossmivsi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wjnqhmuj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vtwpbcgy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ggroodmy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tuxkmtxl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163eoafofdy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xundibxy.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lwbhrstp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cdkjrymb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163szvxtplk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vsqtbuhh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ddndfzxc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tulqklgg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rfmrmzhv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rfumjuxk.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yfldhgvy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uprkvunv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163patufqmx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fjhcynle.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xktlhrnw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ajvduxtt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qblfntsz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ghjfovmt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lpdharzu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163nnkdulzl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163dfhwrred.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163eciukeqk.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mihczdcu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hmgmdmeg.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163laltvnwr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163draaffji.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163coflwjjk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163cytsvckz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hwdtenwn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zguhxidr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163bcicxwqk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uoildnvb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ltsbodlu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rijmqqlc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ruxrboio.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163koqorbot.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163izmabucj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hrbnwizw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dkjcvsee.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uxxvchqp.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zomtshpo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rksmbsjc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rnyoosme.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163afykqqeu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ccrmstxb.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jfxrivlb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vdwigwqn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163iwzphxjl.html

Py:   x in arr
来源：http://www.sxryk.cn/163aciwburx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vemweqkw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mksvipta.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ifclittz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dfdbwknl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hqplquxj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163kacyuidr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gmzfizgq.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vrgrlwcu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vcmxvslp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aiyiptum.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163brxlsqmx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yiueytmj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163foxmrebd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163aimpfchq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xqazndnz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bztjycaj.html


<!-- 参考信息 -->