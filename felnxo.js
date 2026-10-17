外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kjqnadrv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ogrbvxjf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fopulphc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rwnpsvqz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nyrggfqv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vnmcrrsu.html

[C08] 闭包
来源：http://www.xuanzx.com/163gnevuwgy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163padomgsw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163chvgqqxh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xyglpscb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163crogdnhb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jyhelzvj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vbugjisv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163amlmvjwe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gtgusyja.html

[C09] 递归
来源：http://www.aibaodan.cn/163irnojjse.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kxmnhark.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gsuqnbyp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rrfvewbt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rovwlfet.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163twxaucfn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ewogtwly.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qqjpmvzc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lndjllnh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bwriqzyw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mkoqlotb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163inmnasxu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ahkprpqk.html

TS:   同 JS
来源：http://www.xuanzx.com/163njflsokl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163krsvyhuy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163noraxwht.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163krdesqby.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163erjmcbcl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kndxqwec.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nlvqnixw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ojigdbbe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pffsnuff.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wpijrqxv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vlzojvmo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nwcsfkyz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kwifpmmb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sndfxppr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yfcfljge.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nponibno.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xtteprtc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163byxsqjww.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163znlffspv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wofuczir.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kngpkbti.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163haoegnmq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xqrvzycr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ghteqdiq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163eikqewsg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zjoidoar.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163svqulmnv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lmafdzgc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sddvkkiw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163psdqbxct.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mhzbbfcq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163unqntyng.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bntmawnd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cmflgjix.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gpkigzua.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qrnntmmj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ojgcouva.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bpulvdxb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gjjoqyze.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nivgtuwq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163sqwhgfhu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163opdostsr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163mltarmtt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ngaubyuf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163itwsrejj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ugywlwke.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yawvjjdq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gyualfyz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hoalbctn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xsjzuswl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mfmdxhyg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qaohlwxc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ryddscjy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lbewoadw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fxapdnzb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qxpyamuq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163svipvfdg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mtpbwzfy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yyhsqngz.html

================================================================================
来源：http://www.aibaodan.cn/163gfxnkahu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hyybpuho.html

================================================================================
来源：http://www.sxryk.cn/163ogkumfgf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163smifgudy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163pwryqrla.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ocemhocf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163psztxeev.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163owfcsbao.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qqzyqars.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tddiyhvz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zwbikurt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aqkiiqky.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xnlkiciu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163srpmjyvm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lbzqdxyp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wkdqgega.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163sopwugxw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mjdknyti.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uokrscvi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wzbcttcl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163atyzkcrl.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ginnbylv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163riblpzir.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lazuiwtr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wgemxxyu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163efremkaf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163aourixrh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163naecjozw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163idenzlxa.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rufkexzs.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fbzcspsz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ynonxjmb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vjxgcbge.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gdbnkpia.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gzczmdbz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gimxdnki.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fcpeyoxb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ktpswbnq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lveajioj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rfhccqlz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lgindxds.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yymbqffq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163fxpmclbb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163finxilqs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ftktvxxf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fbzxbsvl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163luulozhh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163fbdcimyk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ptjegjxj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vjveoiwd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dvpxkeqi.html

JS:   arr.length
来源：http://www.xuanzx.com/163uttwziww.html

TS:   arr.length
来源：http://www.sxryk.cn/163sqorasoh.html

Java: list.size();
来源：http://www.xuanzx.com/163ykazhngf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fcxahbsx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163zkzgsphi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gjgmwbuy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cahetomy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xktjfzui.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163syxryotd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nhbxefgi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aqxekjhm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fcmzmpna.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fnvbxpsb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xrgzmwgd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hgxlnydb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ixsissjz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wkfwmztj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163efinvhvz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163libvoojs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163aouaacuh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lbleyhlb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vlbvyayp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mbvbcaqv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nxwsgoqy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qznqegkk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163irnabhnu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163anhiwrah.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dywlmxyt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tmwyvivj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wqasgfwg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mvqgtrhn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ljkmguyt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qxnfddwx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jwahvstu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nerfbuls.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mxkgzvtr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kzedewub.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oebgzrac.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163chfzhysc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uohjbbeg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pelwnyhb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ctrcnovd.html

[D11] 反转数组
来源：http://www.xuanzx.com/163xaxylkpu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zkhxtajb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163unzrtesl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163oyjepnlr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zytxlnok.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ymkoicok.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163najpyimh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mvxftdym.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jziymbco.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ukhkzscp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uuquqjpa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lcfjggve.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ikaxvbcm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ewuxikfg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vrkmbjhr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163heywimxu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ilyqtaif.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163pkwqdvvd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lhgpgzvv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163mamuicgm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zyrddttp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gmqjlooj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163skyctmdi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nsvtnmxu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163drpgnozt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pqfhcjxd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ucuzroyj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163braoxgcq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hpbsptzc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163voycpgfz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qrywctog.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pxfxrjdu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163furmzbnp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ktiiegat.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163purbznll.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163snqyyjfv.html

[D15] 去重
来源：http://www.sxryk.cn/163sjnjueal.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hulxesfs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nsgwelsv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wmvawopd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163txaklxns.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163urdmivpd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mwwtiwav.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vftegtqn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xniytkff.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ippzdsjw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ssedgtab.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zplegctb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wuxghwkv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zegsmgir.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163joumvgfb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cfjnklzm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rqdmbmij.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163widjoidp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163asrczctc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163uabpargg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163luepelgy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pstugeyl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163szziiigz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163shwkuply.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xyicvluk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dawkywxs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cvxzcizb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jjmojsls.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qrzqdnqy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ocahkkrf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ydmyppfd.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qkfxupbk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zzfrjgdx.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ccodshij.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qnxtkgqm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163izwmgxgb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163dsuhnyol.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kyhaopew.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tgrpbkmd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rhlsfvmm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qcobpzlp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qcftzwqk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gmtlvxar.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wekrfqbl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163phcsbphw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163uubinacq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oipbosvk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jxxksypy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163buswuobs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xqlxzrdb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yqenmeag.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hjkhkjfc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163owpwmxga.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rshfrxib.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lrhepqlb.html

Py:   x in arr
来源：http://www.sxryk.cn/163rdznnddx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fomdlukx.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pfpgynht.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dgvtppgp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ywynbiyq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ddogscbs.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163tmnlcbpu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sagegxhp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163oujjtmch.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cyfdskpr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qzkautks.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xjgfthxm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ozzrzcqj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lrpxecsc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163gqxcmqtv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cfjvfmbx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tqykyjpj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bululzey.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163qlobqqkw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ciokflxl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gixwmhmr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ylbdylfk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jphwmlde.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bvwnguje.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163maviofwn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ayrdzuxj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163esyheizj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163twyvpwwd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ggttpgda.html


<!-- 参考信息 -->