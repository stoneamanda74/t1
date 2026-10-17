外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wvdjwrkz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uzqpwjbc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rcpounuw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mhoyskyy.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hhfnyvth.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jslsafwi.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gtexdkvr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163yosrxywi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lvfqpajv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hjvtmmvj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lqjzztpe.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163owwnjxyc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gkpsfort.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163myktvgdb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ixiyjjwv.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nmwwjldx.html

================================================================================
来源：http://www.aibaodan.cn/163zisspgoc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163gkbzbjth.html

================================================================================
来源：http://www.sxryk.cn/163deksvywn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163uwevrqbm.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dbdexsqo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jpkvmfuj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qlavgmbm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eztiedwf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jtcbeocw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163kwnbrmtc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163cikuvotq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ezbtifrm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vtmieely.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163focszday.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163duontizy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yxsaersw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mvtreisz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nvjzbkdl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dcxxonkm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163phvexqho.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163llbcfqhg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ewbimlvp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jmkqupze.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jjcxyygf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163eacbqjes.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kdsdxoom.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gjreqgme.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163eefgpiun.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vdohipgl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163uevsjnnp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vipdamns.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vpflxxnj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lygzzagn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wgiorkuj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163vmpfuuac.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163oerlgjeu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vlxdgzgd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mkmxgavx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iibgjogc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rvwipvcx.html

Py:   return a, b
来源：http://www.sxryk.cn/163tgrdcjmp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dsfqxnbe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163geqvzudx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ipncdsgo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163uwazrnup.html

Go:   return a, b
来源：http://www.xuanzx.com/163nkwznlpr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rmsysyzz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163suqncpgv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163egnbhfcu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163foaowlpt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163thzqzicx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ubbyvuau.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qtrdensk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vzikrntu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hxjvwihn.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bcivchkd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tcnbhmps.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jmzfwphv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vslqpqvy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vajtjyxb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ktpzjfjv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jkljzedg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zfdemoxa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kgstuejf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kvxevkra.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163yssmjged.html

[C08] 闭包
来源：http://www.xuanzx.com/163ufbehbwg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kxkjjgfl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bhdpjrrk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mafdyhky.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163stjmryuo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cxgkatrl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163tokxjoef.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mwgkovkb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ngodvemz.html

[C09] 递归
来源：http://www.aibaodan.cn/163qygdhsoi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163amykigvf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qjgvynvo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zbhqvehv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cophfklp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hsiokyyr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dfcobsts.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xjzpieom.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ggqwggds.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hchttxvz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fdymnzgl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qyilpbor.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163okyeqzzf.html

TS:   同 JS
来源：http://www.xuanzx.com/163ykjkzgup.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rhxlpuzv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kuxjbhvj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bnnunpee.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mrnenjpv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163itvqeshy.html

Py:   from module import func
来源：http://www.xuanzx.com/163ialoymmu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qciohlye.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nsdymrpr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yhvjsvpb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ggqwzocp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rwdjnvzj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jtichinz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ebbfakfd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163jdqydzuy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hmclvfby.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163sdajtstu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lmtobpyz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qjjzvxuq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163yqjnawvq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lnqsdnzn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ckcbltjj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163biyapewf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ykoykmwe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kxedvhee.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uxijtuwa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rsdzotau.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163evffxhyt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vqgnruwi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aqwagwxb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ngyblqxi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163avvwqdxq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vyvzrrsd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163txbjlwrq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nhjvjntq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yugpmgsf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qbmwmgav.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jhwuxfhb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dbpoghek.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tcdglnmb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163juqpveau.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163depasjah.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ddnnqmsa.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ewthfpbq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163knkbywos.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vyetqfbx.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vxyhacvs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163krnlrsyg.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rwlwjere.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163prqyswmb.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163huzljjsy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163eaunckub.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bwcjgdqw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163extncctm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gwybjhle.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163sopxbaia.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fcklmntt.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jvwzgdkp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rqsvlxkv.html

================================================================================
来源：http://www.aibaodan.cn/163vebhjpvc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bymmbvvx.html

================================================================================
来源：http://www.aibaodan.cn/163gkkkfjlz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wtbamicx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sogmntmr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jceyjeyh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ulblwdhu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ltmggseu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jytomgfw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qxlxqocc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163djsmmyoc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tuakiaoh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zujiodbv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ufpmrzrk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gpskgtnx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163elsnurgu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wmffrudz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163oggacwaw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tzlydrrn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lthufala.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hmjkhmlv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163usvswdms.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163oywwcyaw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jopxenjw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zfgpxskv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nzjokdin.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vzajqbdv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lktxdfpr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jbugoudt.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hqidibkh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163fyabpoab.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cqfzdejz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dulqvfsw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qmtnebos.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tsotwfpq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163btoivtgh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163imqpqxuo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lopayfdn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xwhuoktg.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tylifxys.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fitequij.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163skhnjkgk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tcbddcen.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mskugtez.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163spmdyqxa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163bsokllwr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hpldovfu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163cwnavtpb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163njftpvyx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yewuokzw.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163koctztkw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163cykhqkij.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tomhgmjc.html

Java: list.size();
来源：http://www.xuanzx.com/163cqtomjmt.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vzjuaqtp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jlozweoz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163owekvdhp.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lpsmykts.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xkzayvot.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gkmawkhs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163azrnjnab.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sdowtjnq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bbofefnm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ufvvdvsu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yiqbwfhh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pfghwlmp.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ntctogcb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163yfxjsufr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hwlzvyuo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ryoskdqw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163btiiwtwr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163oyyyghcy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tgvroxfo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163adbfmzep.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jbfvhwsg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dsujpcgp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xfajpwnq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lsimfvoc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lxtkgopn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nuivfxhk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163johicfhv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nonplgjn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ojwbyeft.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hpengech.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jxkvilkz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mlunkyhu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ufelosue.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gvflzbxb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wbtdhvkl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lzwmhgmk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163viqvuods.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wrptnuqb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163daqltdbp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ifixorcv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163khmumyla.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sarwgqjf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wmdnvvur.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jbspqsls.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163krofcdab.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163mmgwvcln.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ujnvvmml.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wfzbidau.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iktpgzyd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mhtzxoqx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xqbsfmcr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xtupqwde.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163myoufdat.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wwknfxrb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163unyhafvq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wisnxqqw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nnhrrwkr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zntzlqpm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sakqrheh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xuwlvqkf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ggjrutkq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163exnnmbpj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163postnwjs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163iusprmmv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163prpovxcj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dpiluqeo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vwmirgeb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163niwhfjoh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163devgbjxv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qixravqc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ynbnfcgg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163amxuyehd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jekwixzq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lwkhwfsk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dodanxmo.html

[D15] 去重
来源：http://www.xuanzx.com/163zqmpvicg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qpiujblf.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163oiqetqdd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163exiamswq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cwiwwlbb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iicnkvfw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wslqqhsg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ludmpprj.html


<!-- 参考信息 -->