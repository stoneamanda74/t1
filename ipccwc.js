外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ybjmkfjh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wtzdbuzf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163iyhxvemf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vtshputb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163shqhyyjc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nkiasmbr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vzfraybm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zoxkzrvb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163enguwtxs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fnpmgeec.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rcwruqyw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163agqoxbna.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163plbnlxdi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163gvhuxlmi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zejdhrpj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xvefncgc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kswcnkwh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ijwnirsx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163asjhyrfy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qcxptizm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wlnjwryq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pzefptvx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sjdiqgye.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pftmoenu.html

Py:   return a, b
来源：http://www.xuanzx.com/163yheoayir.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kwisfhhf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ldryxknu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163txatpfgx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cbuflyre.html

Go:   return a, b
来源：http://www.sxryk.cn/163ioqntkcu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xnezzwpm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163onxflmnu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wggzgyqr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163amgcmpat.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zzguhsna.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hctgbcmh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163afentkhh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163senzvolt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xgaztwon.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ywhueizy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hpwccacw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vweanvdu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163kbrmkumc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kziwjmpf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uozgdxko.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ocnkqfxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dolrophf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wadltmfa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163joonkqko.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cxkmcaee.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tqgidbuq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ktwafgnl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uskuzytp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xmzthqth.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sljsdeln.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gmiywxmj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lyigaqrq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gophyglo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163anunewez.html

[C09] 递归
来源：http://www.xuanzx.com/163arcmklsr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163keiugsba.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bzrpjxmd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kakbjlie.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kogpbysl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bjhskffz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zxrclwbs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wjsujsvj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mebbroez.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163loonnhnp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wtcmased.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zxexfeag.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qootlkpc.html

TS:   同 JS
来源：http://www.xuanzx.com/163lbamyhyx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hnomfjen.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tslykwzn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wmkkwwly.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ktzwucii.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uwcqyaib.html

Py:   from module import func
来源：http://www.xuanzx.com/163dhcgktpr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163duvifwzp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kitbquta.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163auiymzzt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163evtvyijm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163maoaygxx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xkojbycz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gbimeuvj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xqghjhqb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163auwcvoil.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kktefcrd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gehtgmxi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163siytwwwl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163psjhwwld.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163quhktncx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dgnwjdhe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jmlgfnwu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163iistqtoh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gckufokd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kvlsbnwt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dzduvfys.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ymxyjrqs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nevrsxjm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pmzqapvf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pguwbcpq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nxownbxt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lvdvvjpz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wvsxtfia.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xtsriwfy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163krgwcgrk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163snemxgin.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163chzzqhav.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163knmwamcv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163stbvnkfa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163cfebmpyt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163nvissscp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ldfrtowa.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163igsvqlsr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tcxfqqha.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163otgrsaxf.html

Java: // 无解构
来源：http://www.xuanzx.com/163qsqrcthd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rucvcmmg.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bzsbamew.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hrzgjcep.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vvknymjg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dcngmowz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zmwlxqne.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gaffjvlu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163scahqzkc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pxghztyu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zdipqhbd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163svfjxtbd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163etfxcprf.html

================================================================================
来源：http://www.aibaodan.cn/163kmqrikft.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fjbarsrt.html

================================================================================
来源：http://www.aibaodan.cn/163fuijsoul.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kheahvvw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rhlootuu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163okuxnefz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163thiwuruz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163epgfrqtm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jbvxaoaa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hzzrlooq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163olsclyrm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gavqfmle.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163cuzwoceb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rtzhzxog.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uhebcalm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wdcioonc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zicvtcbb.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jgvhndlv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163oxetqkwe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lxdoksix.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tvkilrtf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dxapvytr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ytnbxqkr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tizbluwo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163oxpgsvfd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vhypaqfo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163smcaaqty.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163eowsbgwy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bdizafbl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gugparrb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163acwggomg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163scfltjuc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163soypqmxa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dadczpea.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tlewicll.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163pymexjuw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mqzqzeyo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hifblsmb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vibrnyfl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ghftyatt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rcarcbge.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163zzzsvzou.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ntjlbpwu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cqjicshr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163frpgbzyk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xavfqzmc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163trvamtvo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rdzhmxdf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zytosmxr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ksvwigvy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nncvhmjv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xijpfpaw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mfpetoop.html

Java: list.size();
来源：http://www.xuanzx.com/163nhbjrhor.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gwdjmsvo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lckihyvu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163exrxstjv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lgrqpnui.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gmuxhtvb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rxhrbdzi.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bxvoaoqk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163abxgwfgp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iihxkkhg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zqntrlfg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xynsrxls.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hibddngg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163iyzzcjzy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ccjwutaz.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163tnuwfbdo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lnazxfeu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xpsfbbix.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163vppkeobd.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163pqeyyfzm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163avmkejok.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163grvzuumn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163akavjtgo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pmxjmzhx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163twvczuvq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fxvjhodq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163izhlqewp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xijbsbrp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163arxtubhz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kdthgyay.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zhinsiqd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163shqkncbr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ppaohltt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lhtzhcrf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wsspygmx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vmijgvdm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xgiyzgjv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163adckoqbr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wulnevve.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zykufdtc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qqsnyosj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163caaoiegt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vuydrlaw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163aimqipvk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kdcwknzr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kxumdhmm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qzpqzhkk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hegbaaaf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163rtchzxkz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fhtrmjxz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bqlnpqtc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163igeiwfcf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zaewnzxu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kzzbuywx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163loswznhq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kkuuxfix.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163poswiurr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163duwigfjc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cvffqwns.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163phoztzcq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cyzaovnk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pysgmfxv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zwdglyqm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163pnotsyox.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xbnqkstz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cajvomyi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rxhcxnif.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qrngehrx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wopcqosw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163eugvhpjf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gizvhprd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fbgullmb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dsvunbzc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ipvjggct.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vpfzwqlh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zyhzurmn.html

[D15] 去重
来源：http://www.xuanzx.com/163fnrkoesv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tqevprzv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ogxlpixn.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ksllcfcr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163sqpdwtlz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hsmhcxpl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tixtnnmx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hmqkmeei.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ebqzyjad.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ciqyxpjs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ivmvyppe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yizftouo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163izgnkwup.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oxzaqgam.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hpqabgau.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163auqpjprf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dijroldi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bkddtfti.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cujwxyst.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163cjjsiqik.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vittrrea.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yznpuqhj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zsbznoae.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ojrfjxqk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163iwujlsox.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163suswztbp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163agnmglot.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bbxlpmbp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bdgcsahz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yrekkpsl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zcpagfgm.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ayrdgsry.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tpagrscm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qzjmcjhw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hdfpoeen.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nzsgqhum.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163imngvfzb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163menvjlqj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163phceksqk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eajafziz.html


<!-- 参考信息 -->