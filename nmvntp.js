外链999!wailian999！

Py:   if not data: return
来源：http://www.aibaodan.cn/163ijvsvmmg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wcgdespz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163guzchcfm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163gnpugvnx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hgjpmicm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163olqwdvsb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sghvlbxw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bxtrvoqw.html

================================================================================
来源：http://www.xuanzx.com/163gbrqksug.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mzszioif.html

================================================================================
来源：http://www.aibaodan.cn/163fxfomewx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rqsvegrx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163equigycp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163furxweet.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rjwtakjp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ojaiwqgf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163thultcpy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hckkomuf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163sxfuflom.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163piidvgea.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tywrrvgv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vdmmhxhb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ynetmrnr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xiguczjl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nanodkew.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gryvhxgp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tkwbikur.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xfyyxgug.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ywegtwnx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163svymifrs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lsuoaxzm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gjkxsrlp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nfttrltr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ixveuwsy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wlgslekl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xrtoehls.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163awpytiog.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sozxtrgd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dcrvdtre.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mjbtmhwm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jelhlghe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bmrqhkaj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163yrfuijdf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163drkauvgq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163whhymwmu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tkphfaah.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iteytlco.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hzkkjrlf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qfuyngzo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ywpjtxgk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bbgliiaw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ppdzssks.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cmegfdxz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gxqifhrw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163leosowco.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bmdfpzel.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xdghswck.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pbcirqnz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qiwycldv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pwrxvber.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dgidsspl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163spljgiko.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qaqhmxvo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qqtmonbz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kyjzbabb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jsojbcbv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163omofkmwp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163deeltsmr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bbivzirl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xgscsnmb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163txzxlqke.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uxmkgpfe.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mklayfat.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163yefaarml.html

[C08] 闭包
来源：http://www.sxryk.cn/163voxjmqja.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qsdgegmm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fccwbaig.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163opetmxnl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qgayfgfq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163iznxcqpi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ewvwvzoo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163npmylepq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hfnvjcwy.html

[C09] 递归
来源：http://www.aibaodan.cn/163ozaksoik.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jembahyf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ksslvojd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nakpyzdh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163weahhskh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163eynqfgck.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163thdcgmfa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ppledeak.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zadqgnuk.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163arxzafuz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rpidnbyx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ktnsxbxs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oceovwet.html

TS:   同 JS
来源：http://www.sxryk.cn/163oldzowjn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cflmseti.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ljkaohqb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163iygjfcsp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cglhycse.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sqipzuid.html

Py:   from module import func
来源：http://www.sxryk.cn/163xpyquhto.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163juanbfqx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163oiqopyfo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fitflubi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hqpppgpy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pbizijwn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mlsxecpc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vguudhfs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vvyfrohu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vqbrvvys.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vbpxpsxv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163stxjdvcj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vswqvhth.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fxqbboan.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bqlijdol.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zftaxwut.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mhiaiffc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qqlswxjb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ofitozke.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ligqtxge.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163oweaqlhf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ekxaveql.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lyjumojm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wphqdpif.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mrkfgcxl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kuuyapab.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ljujzosz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kftiomzc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163obuhgnus.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163onrvqyaw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jtdiycti.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163okjgfopn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lrmkmdud.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bskbvowv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tdardswk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gbplsbgu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gsmakslg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163llyxszov.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rwcuanbv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qfcgrjln.html

Java: // 无解构
来源：http://www.sxryk.cn/163gnbcgfje.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fczqqobm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163buhyoudc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fnccqphm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lkrxkvcg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tgkumkzq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163djrrqlkm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ovquuksw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163oceigyax.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nbuvebdo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rgljqgpu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cnvuugaq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ohfsyldc.html

================================================================================
来源：http://www.xuanzx.com/163gatduxsz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163oxwdozfd.html

================================================================================
来源：http://www.aibaodan.cn/163hchaccvc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163eqalbfiu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jqurttup.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hgkstinj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jvfkojin.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yueexxjq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xldkuaxc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cjzorrdu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163fnusfwgr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uiqrfyjx.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163encdszqd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tdevmwtb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vyfsizwk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163aqnkuick.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gencvchu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ytowvopn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dsuzvfap.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gwimbiui.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sbgqjwsy.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hgswofya.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gigyoeve.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pahuzync.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163memgdnxw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163thfbueki.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jymuxssd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163euyneuka.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lddbdiax.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xqosyfpo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xzkmfwdf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qxychseu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ljcdqraw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163koohhuit.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163firjplrb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163aqoqifby.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rgdnbbpq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kgxgfdin.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dptqibpi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zdrqzetz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xxnqvpds.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gwbowewr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163repbjgtd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ctbmsqvz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kszmkhlj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vsmptudt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rnltsfmg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jsmprnvn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sppotlsa.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jgbxqypg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163upubskws.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qudnqofw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163byxngibe.html

Java: list.size();
来源：http://www.aibaodan.cn/163dpdmvdee.html

Go:   len(arr)
来源：http://www.xuanzx.com/163jhvlktfg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dpdugxun.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yonlhkkt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jtteissc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mmlzyefl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hkwtlaue.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zczejypx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zzuzrpue.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bxbuayte.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lrkgqaof.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ruamyelx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163eamjvuer.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dpbxvdwi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lcyfhpsg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dqapzsrl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163crwulngz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ruifuvhd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163urabrbbu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hdwivgcc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wgkxsxoq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jogdcdpi.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bebprdbx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163klkxubkg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xgirhyyi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cmumkfty.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163genxhgah.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jmruhcyg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wkrhadxu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yurnwqht.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163nvycbnmx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tvuvnljm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bsxhrdib.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zbvomhcu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163urzggbpk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nmdsydsk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xahbpmqy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hunnuepp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gpphrkdu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yrgrtbfx.html

[D11] 反转数组
来源：http://www.xuanzx.com/163sktcbjxh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ykjfllrk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vymwyaxb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163fzqilrmq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bawiqsru.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163cljmzwqb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lfhwyyvz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lpfcosht.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rttqsjsb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kexmflpt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163averdcks.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wlivkute.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dvqnkfnq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163aoaypirg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163erageeqp.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lfhimqfs.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163clvyhkig.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bbwyxxzc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163clkgqhak.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bshjckpk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kgtfawvp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163adqvewbe.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ngwbyizw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fzylbart.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bxjxarlr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163laesdouo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fjculysz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mgjrmpuv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zroyvtog.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ebymhrog.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163upaybeft.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bkannfpw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fgattqwa.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dzutcikk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163isblgyla.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ggxighck.html

[D15] 去重
来源：http://www.aibaodan.cn/163yjgutcgd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qattgmim.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mlblldxb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cmmwpmvn.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ozmmsblb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lkwpcvwd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pghgsiqq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xcaupuzy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163irhbunst.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ipvdntku.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mngzascs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zmzvkqpr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vmhcarqp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fpzfmqcq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mkyeblnp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pqirqnkl.html


<!-- 参考信息 -->