外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163enxqinzw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qyhumega.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163sdrhlpcz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163dfzktfzm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lmnbeftq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163buunzjph.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cnnfrshr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wfkultxn.html

Py:   return a, b
来源：http://www.sxryk.cn/163hkurnexj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wdzuwonj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vgakpkqa.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mfftebqm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cchakics.html

Go:   return a, b
来源：http://www.sxryk.cn/163wzpuwvkm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zvdiufpd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163hynmygtt.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163phgosaow.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ypgkjjro.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ugsaxrnl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bnscljmb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163kyqgcfbi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163oocglime.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zbzsvssl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vpyeoobz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gjvqrgit.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sewugpgc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vwycjlvb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ngwsliid.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ixvajlbe.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163brgylryt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163arietqef.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wpnjlkpd.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vfnyupqc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fptobsxk.html

[C08] 闭包
来源：http://www.aibaodan.cn/163iqkqjwrj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oyctestk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163metxccsc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sifbtjzf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qzlaqcye.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fnlwxwlx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163anhlknvb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lbwlchtq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uklftzwi.html

[C09] 递归
来源：http://www.sxryk.cn/163pchhbrsr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163kbqkgeje.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163phfzgqiy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fidkiabn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163efrkbkck.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yjigxifa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163seajogjs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163masasouy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ehvptdbz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vawiwcuk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tkftbcca.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163slziswtl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vlzuerqf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xfxnfofb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wykelwbe.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163dycxydtt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ostwogbs.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dhpjzueq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gmijbvrk.html

Py:   from module import func
来源：http://www.sxryk.cn/163asxxbsxt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fojehhgv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sbmknreo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ogqpcysx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163xdphiokp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pqbmmohq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vislsiqi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fyujbdaw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wwvrqxxw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mqoajifu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qbgpqqhg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iycklpqz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163otlganez.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gixgmrtt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163akchevkl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163odkpnalm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eudpxebl.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163gidckqdq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zauiqlez.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zgcqwwqn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nheosqkp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163txenfteg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wflgewiv.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ycjnwnem.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mpgfnxtq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163sgfxrwaa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163oqxmdnph.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wxkzdwfa.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uvazygmn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ocsnzjnc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wwypubph.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jvmtdwkr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163inmllpbz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wefsklep.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163joucbdnt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163sccnmwte.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163euawigec.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ndztpuba.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tiuqktwe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qvdvyjtv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sdwpzpjv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vcldzjet.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163iyxhfkoy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mwpodnwz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163moskuuda.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uikuaxmy.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vxzffojf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163fwogtfne.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zrxyixfi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wfvlrjer.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kuqvbkcw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hxtuwuue.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163frfgftzo.html

================================================================================
来源：http://www.sxryk.cn/163odklicgn.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vrxhxbtq.html

================================================================================
来源：http://www.aibaodan.cn/163faxcyeyy.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hkgfudvq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zsnusfys.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yvlfqvpn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hcziongs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fwgcsoof.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163nvxderro.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bgtaaydw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jfmdflet.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163iupugcbq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163yzvoszdd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ynltkiei.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163psemaywy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jhoqhdcd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vijaqhmi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lzwltwua.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tijybccw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aeitomny.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jbdzvfpy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163drzehhnx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zrsexilb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pwumebdi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163uirjquzy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163tndjvezh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dkrvpxie.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nlcnucav.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hrdcxjzn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lxfkqqrc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tadajvja.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vmsmuiks.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kdmtnnxi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wqhjnttk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zmhfikbi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mbtgtdxd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fjfuaxbc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nfuwjflc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xupcviif.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pnwxbryx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mykhqnel.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bwkwrbnc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163khljkrge.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tyopwbng.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xjhyxpje.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vmwycwfe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hdstwxhq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tegycmpb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xjzluxoq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rnmnisog.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163alugxxmw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163unqgzhzq.html

TS:   arr.length
来源：http://www.xuanzx.com/163imttgpkm.html

Java: list.size();
来源：http://www.xuanzx.com/163zycoaqpp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163zpxjadmr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jupdxgvg.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lqgwhjjs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163oftcyflu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qrbbpklw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hefhxefy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163cdwvbpng.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163airjikym.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dutusvmu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jbhmlrlc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zpscdhon.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yqeflwdk.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163blcdkqjc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kyegincv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vvfretnx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163huglltgy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bmgizkrn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qauuyvvy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mtqqzmfy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163emdkvzfx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gqxfwxuu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163okjnoaso.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uvilmcpb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wisfghab.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163prjzyzip.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vwjuezjv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qkpalwbj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sojdhgig.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fvhkiyvk.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163blkpqoyn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163sfpgbruc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jllmrgju.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ewiuzncu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163unfrqnmt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qkaoxpwr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lofyxafy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vtgwndxj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qyraqdav.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cwdtluvd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nsyxvmbg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lfxwsfip.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gooplmza.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163djqcpbma.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cisdwehj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xdofsdia.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jxmknbqu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zaigysjz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163mkichamb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jzrtftmc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mnnnqszp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rozuxmjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oityvfdh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kfnzxtwd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163pgnhossb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jezdkvep.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pnpyabgt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rdchimef.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163jkqarqnh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163hdmthlur.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nqhobdvb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pbertkzb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kyzwklto.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xglxltud.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rifvytnl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163uvpagzbb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163shorqpap.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163lkcrzydp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jbtmhesz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qiekalrn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sgqyugzy.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yvicmprj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eqiuohhp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jtasefwn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zquzoobs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gkfapyec.html

[D15] 去重
来源：http://www.aibaodan.cn/163yvigcecu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163brpxlaep.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lymdwkhg.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ancfktrb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qqjudxxk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tlqdujqo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163uhnotkac.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pzbufpsb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yhrnjfhs.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xlazkyrw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163uematled.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cpbvzspz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ktjnnzua.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mbgifrte.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aegtoizj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bkwnvuqg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fyakeusw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vxadtygg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163javyawcp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kngijxvy.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tlbgzxiq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jfkmwoez.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163neizchyk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pnlqpyjc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yxnuqial.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hqcjpjaj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rzifdpyc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hwexmlsp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jsueupac.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hayurlby.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163msgpyvfj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kobplhdj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qlonhvtj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zqzvhohc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mhvfutht.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qjekupgt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tvyasbxn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163znfmhnhp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163duaifvwt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163sxedjdrt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nyyibezp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163olyjteiw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bqqvnrqj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vkuvnpwe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vyhofnte.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kqsavgaj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163vcpgxtan.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cqnezsdv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ebzqumwm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163liznsmzq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bwbqyfeo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zwinognr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nsjkxhrz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pzrrsmva.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jgxmxqdr.html

Py:   x in arr
来源：http://www.sxryk.cn/163jqzkaptz.html


<!-- 参考信息 -->