外链999!wailian999！

Py:   return a, b
来源：http://www.xuanzx.com/163gporswuv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jufrkpke.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qsquykzd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ieojjnlm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hrwofsmx.html

Go:   return a, b
来源：http://www.xuanzx.com/163mtlytuii.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tbuiaqvx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bzscindl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uxwvmfrr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wurczzph.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163pvatearg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163oqijzyvf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pgxrzbrl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bvamspzq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wgzjvptk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xknkngew.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wcuuasrz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xuyftxut.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163feusmnul.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163sqgnulnd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163scjvyrem.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163vtlxwyfb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cofhtmor.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163erwobpgi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xbwxzvkm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163xytxmjbk.html

[C08] 闭包
来源：http://www.xuanzx.com/163gmskkfjb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fnrteekr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163aprhdxwv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xwvjztkv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cxwyfeet.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ucdtvkvu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163oegngpgd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ngzuwbio.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pwcbigsc.html

[C09] 递归
来源：http://www.sxryk.cn/163okparvje.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cfvwfpdz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jhdmgrrq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vrrtdbmu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ndqehvjk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zxfyrnon.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jrsgjdrt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ysbtanoi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gcpmhzjf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xsuaumfq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hnymhgjs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163rjhktpan.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fkorzstf.html

TS:   同 JS
来源：http://www.xuanzx.com/163gswrutqp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163avbdpwkp.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rpimbdew.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gxlvfajz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fupllilz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163uqalnvnm.html

Py:   from module import func
来源：http://www.sxryk.cn/163npilamsp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xozcrrdq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163yyceilvc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tyzyjiej.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gbyhtiuz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yqygzkdq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163yooojxld.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163itwjxfcj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163sfanbvzv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163abkiwkap.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qudieclw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cfdcdbzp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lgdznizx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zxfbeblm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163slhghkct.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ypacqqax.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ctxhccbz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cnemsvto.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163kszwhcaf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qdtsxcse.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qtccomeq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hopujkfh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dnsimnzp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jybpqfnh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jrocsbgw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163yadaesck.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cubcends.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hxgmvruz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hjecesen.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vhvuudvd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163irnwjhvk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eeeimbkl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tfwiiruq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gkhteisd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mxaxobzz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rvcigzyr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gjcxglig.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163iffcidie.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nsgfsqlq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rosobynw.html

Java: // 无解构
来源：http://www.sxryk.cn/163qxxzsdsm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163emhdudwn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tkbelwwf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cgqpqfan.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xbhvfwaa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163znbgkkyd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fnygtbig.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hhcsmnqj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yosgfick.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163evkbvrtu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lvcbwcjr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kekfwlny.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163duxinull.html

================================================================================
来源：http://www.aibaodan.cn/163gkuclrsd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163lvjcbkfg.html

================================================================================
来源：http://www.sxryk.cn/163inhhdyyk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cqhxwpnj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zbhkhjtw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dzwyemzg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cfbwuyyu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bhfihngi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163eucxdmqh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vxtqxzan.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uphgsuwc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163iuxfkwje.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bsanrdqo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163djghxjpg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163juorfqzt.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163sakbcvtb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qawwcicm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wdsiaprz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163codwromd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cmpozqhw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163iqplqlok.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163llmbpriu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163akikhvad.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pdsboohn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vtqpnzua.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kbziauxw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vmowcbie.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163dzkaeuch.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yanjxzpl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163iqoprizj.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ysfuqpis.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dwiiozwy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bcdavppy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163iarfzugb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163octdtang.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163itaealio.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163weowtsrm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cvdvjwwk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lwfbcfuh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yngvaezb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pwkuwzrw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ykippfyv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sxcpczvn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zjgzcmba.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aqwoxwfo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163axjlmemd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rixqwvrr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kecvhckk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163eqabaama.html

Py:   len(arr)
来源：http://www.sxryk.cn/163aoqzcxot.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163snzuntyc.html

JS:   arr.length
来源：http://www.sxryk.cn/163xubvfbik.html

TS:   arr.length
来源：http://www.sxryk.cn/163snisrcpw.html

Java: list.size();
来源：http://www.xuanzx.com/163dlzgdpqz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163oomxwjoj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cojtpufq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xbwkqgar.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iewnqztd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163muwkecjb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vwlxdivi.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rkcgnwuu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163znjylurp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iybmmook.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163efuueoag.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163foyoqieu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163prclylcx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gjfmezbk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cxsrzoho.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ubvbixuu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vlktrlrb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ewvdpdxn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yoxxrffr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cfizjkqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163nzpfjzar.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163aqvdncjk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163aopuxjku.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vlcforvg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bmedahnb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bzllnsjr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163moeulnob.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163plcxfwki.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gaalwdfp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163nqyhdcvd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qcjqdanj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kbcxlvoo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ohraexfq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yqffrfut.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lrjnrilv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cjixxiib.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dkjxxwxz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gtcqyayz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163phtwghlr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lovqoryz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fxdgeyxw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ymcmxrre.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hkmufbmb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wqlvytkg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kdurghlv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fafhtimi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nklqfgwc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rvlvpist.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163omvqwhst.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163onuoygqr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vixaxrng.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fxllomwn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163evlqhbqk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kebuuvkv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vuzpdvsr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163crdicodw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rjecevbg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ymipptlh.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nvtblbya.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ewblxidu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cbjwabgk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vlodmmwp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mbqfzztq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zuhhxxik.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163lkzyhlfe.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ygstmdzv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ujuyljqa.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163nvysrmva.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ckslwruz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pdobegkr.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ecqincwm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sppekado.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ukknrnmj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uvbncyuh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163laolputm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163alwjlevy.html

[D15] 去重
来源：http://www.sxryk.cn/163kfkukhzt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qhslrijt.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ocotlurt.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zxvoocli.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fxomywuu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fomxffhw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mllutlho.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yseikihu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163nszdfjeb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qndchquy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jntklhww.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163vmtnzlsy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ymztgwgf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163aoraujdh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kcwsxewp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hfgeycnq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lgcmmkek.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dmqqwgxl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kaldkvcs.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163asguhihl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163anjjyebi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163nujncbyn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tukfohvj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ohviitic.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ussqjzdw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qdzxovlj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163woykkvaa.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mfohhwxn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163neagjysk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pzsfvyrd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zjwkuzva.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cydhsnkl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xuzybpjt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ppvurrxv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163sujbygnz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qsaednsc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163oaswtwnp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nnnpxksb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kukysmmo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163buceuvdc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ufpxzdlz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163oxdojtcw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lvgolbqg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lewjwqub.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wkdjnpoj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ezumgqgi.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kdnnttej.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jmtduapg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163njonyxim.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eufvreos.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xlfwabot.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lfrodqbv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kkhcemlo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fozbmmie.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fdywczjh.html

Py:   x in arr
来源：http://www.sxryk.cn/163tcskvbbe.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dcakeigj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163njpoezlj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163njqpqsta.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mzcdczqt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163uvtishlv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lgyaftcc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gaqhhyfe.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qyupsndf.html


<!-- 参考信息 -->