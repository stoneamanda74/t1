外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nrxwnbkb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163isstkwgj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zxptuzfp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uselwwzf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163iikfhwzj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163tpgvrafn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zivjrjdc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fugjcypc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xporelea.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163utgdrwdk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gqhfxffo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ptwguzlw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mqftmuqn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ohpffjpr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dcdfubvt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xexfajnf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jolvugfk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zemkthwx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ubpmdohy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163uauuiwjw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163sgjukcyo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gegylceq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qstanyge.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163oorqrpfg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163smyjrqgv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kjhzxcbi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hfeetpey.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ctznlfxs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qtipxrnj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163cmgsbdcm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kscticgo.html

[C09] 递归
来源：http://www.xuanzx.com/163znoburhx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wbszjjrx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163juxmabvf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163irnpwkri.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jbyelhgd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mixenrvi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mqoaactp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163luyttfbv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dkqrhixu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lviaywvy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163rfbrsqhj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163msplvwvc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mrjyiykw.html

TS:   同 JS
来源：http://www.xuanzx.com/163sbbdvtfr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lvbhooio.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zswljbfu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oxjawesb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163rejsuirv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lowdyfkc.html

Py:   from module import func
来源：http://www.xuanzx.com/163rcdksdsz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163eoflrssv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163foubnhbz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qozkcpax.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xphmucmp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cmfamnhv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163otqoorcx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ntwyrqif.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hbldtkud.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hospcvph.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ukcoryzf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dszemtdd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fmzwpuhe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bormivsq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lrnqsbms.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xqlcawmd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mlzqhlec.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xncaqamw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xjciwblk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gtfznegi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tpbqcfbf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mjtdoguz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hequhgvl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163nhmtylkj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163lkstsozg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vqljlwcv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wrbcwlqi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dthpxbjx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sipxnvde.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qcyrgukt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ewjmgdfo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bulljxip.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163newxyjll.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gshqsjtp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bikydyuh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tfylvvvn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163aerxvkya.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163taqezwos.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wyolruya.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163chrxiwxs.html

Java: // 无解构
来源：http://www.xuanzx.com/163aaccnrgz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fjzzkhfr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163immhckgr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bcownmjd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163djlfpgfd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cdpgeiqf.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dixoyysh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yymyhcik.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163favvjacn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163eibirtsl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nzrxuizn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xdtnscrs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ixkqzndo.html

================================================================================
来源：http://www.sxryk.cn/163xdggddeq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rzlgohzz.html

================================================================================
来源：http://www.xuanzx.com/163zkphqgrl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ikfwkdmm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tfxnawfy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163srrmzxmp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163keslwjzb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cwatzhvb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163cfygkeit.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cipmazef.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163szlscvzw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zkebtirq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163smpjggkr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xlumpkpn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wrsnlatf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163baoxeidl.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163magvbhcu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ilxvbgbb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sijchaah.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yzdluimt.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jcxhylgm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fokkusfu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ecshfsnf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qqefhffw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hvavewfk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163evhbqboe.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163larswfkr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wdmrmwcl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163afhrgflr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ahgnheqi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jfyusftk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vqdwuuua.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bcflwbfl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163slohlxgn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lhaajrbt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lgpmohob.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cqyhkhvs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kiyftbqf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ijltwslu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ffqskvyg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jnuxaqyb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fiuckvwt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163aopttmuv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163eiphlcwp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pvxxzraj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163znymclkg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pmbkbprh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tdmbwyll.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163otflilbs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163umpjswaw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xgkatugd.html

JS:   arr.length
来源：http://www.xuanzx.com/163pyuwkqpq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jehnqxca.html

Java: list.size();
来源：http://www.sxryk.cn/163vbeqbfbi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163egnrvcak.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bgopztcz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163pwuqwmle.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ptddofxv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163edrddoft.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wtnnpbhy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163exmeecrr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163aayuxvqq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163amitcfpn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163grzetvbu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lsayvwgm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dhpfactd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jpyikbvy.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163jmlosqji.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ieklgtll.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ftqrqspo.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kmkylaac.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kjkwssvp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hqmjbqka.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lkpsdajg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wrwkzmxg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163iurqsdyc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kjymhwvu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hyqggqwg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jzmresym.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163uheqcsly.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zdfecgor.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163guovhodi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nwjxxfqm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ggthnkyu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vcfiuydn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fvgtorma.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gersdlqe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wqoynmva.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pflejzli.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xespfkcw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163psqxiuom.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163opynvedt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kjssanwq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163nnwkasvi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mzgauaye.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kjbvuudl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sqcbxdqc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hwnvhopf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163xanazkwo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vyozqsvn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163sfysuxwj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wnvselsu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ompuhler.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hyzqtmaz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163osdypoaz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ewsheqqu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aspbezdu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pycpftyz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163huvbojbl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163szxdypob.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kbpnyrzy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163klxbvrha.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xcsegcql.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ftgwjxnp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kwkwetql.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hpgoawsx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163juimsqxn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lsdylpxa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vmwkheko.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163edoqadfx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xmhaoomn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bpfumfpu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163koocrcpo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pjvqfmdn.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vvuwcthn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jdutjxdv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gxadltjb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163awvsrhmp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hyvqmisv.html

[D15] 去重
来源：http://www.xuanzx.com/163mjfhwqro.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xqdrcuoz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163txeiyzjq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tbuvutlf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163scgopqls.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163credomnp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fdjcehzv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gbqkhzbp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ngiqqfsi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zoigtnsi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163btoeboxb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yhcptkok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mdvpuudj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ihatqalg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lnlexecj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wqptfkrk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vjtfqrai.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xackbpyj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nyjpyiva.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fuooollx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wxsgzuva.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mqlzafcb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tojtqgua.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gcyebrgk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xgqvjkkh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zxlnmtqs.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163exdbtvxn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qsdjqhkv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bavpakky.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163njiihrov.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163eyrbpwsh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163byfquwku.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yyoscwzy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163gcqnpwsm.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ffsyonsu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tlyudmun.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bjaqffdy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mhgswazr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rntezncc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tuhokkob.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lplibepk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wmpzakgh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163esnbuiud.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mezpadzc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ztiejpvu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ldxnwrun.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163skhadwot.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163lbqzljju.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163sstggmna.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cygbudux.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ghbkjhgw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163osgxdgks.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163imlwdrcr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163uakeydry.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lhfyiosf.html

Py:   x in arr
来源：http://www.sxryk.cn/163ionfnehj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zosubefe.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qrhirbny.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mrtxuxio.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dxenpycq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ehhkdybv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163cqhnlwlm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jcfhniti.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163yoaayndo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cdlkpdyc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163lgpnncmb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163bwvrdxjn.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163knmafigc.html


<!-- 参考信息 -->