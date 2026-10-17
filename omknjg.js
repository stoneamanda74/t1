外链999!wailian999！

Py:   return a, b
来源：http://www.sxryk.cn/163xgabolyo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ohprxkgp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rlynmcdk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163fhnbclrr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mgqhoqwq.html

Go:   return a, b
来源：http://www.xuanzx.com/163pkrkfmec.html

Ruby: return a, b
来源：http://www.xuanzx.com/163iwyqlkvp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163oaelzkxz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jabzsngc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fmwqeapi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zabcxcgm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rnneajrc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rermqpqs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163acrkajmt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cdwjsmpv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jiiqmjtn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163znzbzepi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163oynsteai.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rkzgukry.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163iuymcaxp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163soukdsxt.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pjghcgoj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fjxrlkoz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xvjobpxp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qlsqtgfz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kuxysmkx.html

[C08] 闭包
来源：http://www.sxryk.cn/163tiqdteyp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mhzdwlqg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wurerwxa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hvuahwgd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hjxbyepy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jrjdunzt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ndgytxry.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ykvxzsoa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fqrxrtvv.html

[C09] 递归
来源：http://www.xuanzx.com/163lbztukvx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163nhekckqe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fehapued.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kwxxzvip.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gqfpclsn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ixgxjwtn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jnazobgt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fqxrglgm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sukrpjcf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ksraclev.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kzstthsf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163djlkmgxd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fvdesdtr.html

TS:   同 JS
来源：http://www.xuanzx.com/163qzpdqjth.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wbwndfqm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uliitnij.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vzeopcfe.html

C#:   块级作用域
来源：http://www.sxryk.cn/163okawftvn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cplnooxr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ibdktmiu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jxuenfwo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yivktrhm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163urblpyxc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hshvmiji.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163lrdojuzc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hqifypkg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ilmscans.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163jlxmudui.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163afwfdqin.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kabzrsun.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163psquhzwa.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163iqgowjwg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xbqfrkyt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lwcgdmrt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tfmdsste.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gfhdebvg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jhdffpiq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163kmheqwka.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163otsoxwaz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ssarqlxl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163euuhtjjj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vwsqeglt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xzhzmyjx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lkrbbvsk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xinycbhv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163chtgwyqp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jfbmkmpg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vynbunsy.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gwuhllnm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zlntpzyq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163wmlhhmmt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163curzirfq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oxzwrimp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163blefgkuk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jkkacpit.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tdowptvu.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163tqdtsnix.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qcflixxr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163snzhwshw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163btchhhcq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cojmdliu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cafokqom.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cjtachpb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163njiycpbn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163txsnlhso.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163jxndbhca.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163okncqkpr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163njkfasnq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nkczwodp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jiwcnfwp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tewfxfmq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163benpyqdj.html

================================================================================
来源：http://www.aibaodan.cn/163lolrnhon.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163aaqgtydm.html

================================================================================
来源：http://www.aibaodan.cn/163bcvfkdmp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163yiaexzmy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nygtzyni.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dexsnjbh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163eqcqsidp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gsteydir.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fqdnhshj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hxksdviq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xdlwunwj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jcbwcemo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bjefympt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163oxcqmtog.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163emlsrcsb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zxkftxhd.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163awnpqcid.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ikvuhckp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tpbpkaor.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163noevezvn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kczwrjfc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tunyojfa.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163iuwvoleu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ftsinvec.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nhnnzshu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qgqvfkqq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163plbepgbh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fjgtbzxb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yhiomwtw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gpkhnwtx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163btwgrmgm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qczrftij.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163syeagipt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zvplqwse.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163shggqlky.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xjeffpwi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hkrcpsdv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ugonsnbs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163bghtrmwi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163umuoncyk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ekkgufqk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ilughuae.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ngdyutxt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tkvihnrj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mscepupf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dufaokls.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163iykliyju.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163budizobb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dfdvhfzl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hytaegbt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ovqrifnf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dincyqcs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ogoghrrl.html

Java: list.size();
来源：http://www.aibaodan.cn/163btuwzmlh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jqhynywj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pkwmanrf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rlgjlqcb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qgaevauh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qmfjxxut.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163eoijqowm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sqehsewg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wdjzkcyw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ecidrjty.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gkfdshkt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mdjauetv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163larhnmqx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yvauywfr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163fuevqzyo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hkeomyql.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163scbksvst.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163nporxlgb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dzcmronz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mgcwujyf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163sozkwpuz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163gajsljfz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uoaidpje.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qnqhbzdo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163osmcgzjl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wffgoexc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vocmgshi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nshikzho.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163yboluvng.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qeshxugt.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nfkgfjne.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zrihyfce.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mjifezlw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jdpmesmg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163snsveads.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kdjgdjie.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163frngfwgw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163nopronhm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163cijuueji.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ljumoqhv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bghqhqjp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163yozpeadv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qvnarjcd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hhmaysma.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163emknojwz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tuwgkllp.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vkuywmyu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kgaxpncs.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ciigqqtq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sidyxvdx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163prolvydq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jhknkhlx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163umgrqhhx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163snfscimm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pusvgffg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163poanslcv.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163auazfoaq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hzmmobuo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zntwkpnc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jhbijisk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nhzyjaxy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kyhoieza.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lmoathvr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163khaamqww.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ngzrkuux.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qpttwhhc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163nmdnsnkx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hwextkcf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ipvnehdj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zlpdfkrt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pcocbjvo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wmodorxd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pwlywfsw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gmvpuvoq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lomjhwkn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kssbqxxe.html

[D15] 去重
来源：http://www.xuanzx.com/163kadkjdph.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zevxbocf.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ftzozvrh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jexxyaxm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ysqtosxt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163twremevr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163txghmnkr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nwnmkxuv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ftzapkxg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163shluuiah.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163laugsvzj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pzatrsjz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sutqeuin.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eqcjiwyt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163axkzyzoi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rjfaeybi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163buezwfej.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163snadqjso.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163apoibigz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163igzlxhef.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hzneukxw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163akzjjdeu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gmztkrex.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hrohyrti.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ftzrrqvd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sfnzfyrf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ldhwpcui.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ksxalyws.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cdtdpuug.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vpraoghs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gjaswevj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163axirlygu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fkadfpln.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163elsaodrl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xqxerphj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xwpzsnod.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zeqyonnp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163smljdawj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ydvjggcs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wruzskmz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163acjaeoqy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mqawdwyg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vmnxwfsw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vbxxnnhg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qtbkzboq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pccqrtoy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ucijxjvr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163djgluyar.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ggmfuoli.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163efctgvfb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163qdpptfwr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tqjopiiy.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kpvqkbyi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ghvpgtit.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jibkrgjb.html

Py:   x in arr
来源：http://www.xuanzx.com/163daepnwdw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gnsuocgy.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jovvvkfg.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gweaffpk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cbycrhvq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vowoythv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jbrrzihu.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xryafxrs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163eqebwshl.html


<!-- 参考信息 -->